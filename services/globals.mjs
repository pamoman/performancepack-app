/*
 * Get globals
 */

import dotenv from "dotenv";
import fs from 'fs';
import fetch from 'node-fetch';
import { pipeline } from 'stream';
import { promisify } from 'util';
import createNavTree from './navtree.mjs';

dotenv.config();

/*
 * Get globals
 */
const getGlobals = async () => {
    const dataPath = process.env.GLOBAL_DATA_PATH;
    const publicFolder = "./public";
    const globalsPath = `${dataPath}/globals.json`;
    const manifestPath = `${publicFolder}/manifest.json`;
    const finished = () => console.info("\nFinished downloading global data!\n");

    const url = `${process.env.NEXT_PUBLIC_API_URL}/${process.env.GLOBALS_API_ROUTE}`;

    const res = await fetch(url);
    const resJson = await res.json();

    const data = resJson.data.attributes;
    const { logo, pwa } = data.header;

    /*
     * Write globals data to a local json file
     */
    fs.writeFile(
        globalsPath,
        JSON.stringify(data, null, 4),
        err => {
            if (err) throw err;

            console.info(`Global data written to file ${globalsPath}`);
        },
    );
    
    /*
     * Get site logo 
     */
    if (logo && logo.data) {
        const logoUrl = logo.data.attributes.url;
        const logoName = logo.data.attributes.name;
    
        const streamPipeline = promisify(pipeline);
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${logoUrl}`);

        if (!res.ok) throw new Error(`Unexpected response ${res.statusText}`);

        try {
            await streamPipeline(
                res.body,
                fs.createWriteStream(`./public/${logoName}`)
            );
        } catch (err) {
            throw new Error(`Unexpected write error: ${err}`)
        } finally {
            console.info(`Logo ${logoName} copied to the ${publicFolder} folder`);
        }
    }

    /*
     * Get site pwa
     */
    if (pwa) {
        const { manifest, icons: { data: icons } } = pwa;

        fs.writeFile(
            manifestPath,
            JSON.stringify(manifest, null, 4),
            err => {
                if (err) throw err;
    
                console.info(`Manifest written to file ${manifestPath}\n`);
            },
        );
        
        let processed = 0;
    
        if (icons && icons.length > 0) {
            icons.forEach(async (icon, i) => {
                const { url: imageUrl, name: imageName } = icon?.attributes;
        
                const streamPipeline = promisify(pipeline);
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${imageUrl}`);
        
                if (!res.ok) throw new Error(`Unexpected response ${res.statusText}`);
        
                try {
                    await streamPipeline(
                        res.body,
                        fs.createWriteStream(`./public/${imageName}`)
                    );
                } catch (err) {
                    throw new Error(`Unexpected write error: ${err}`)
                } finally {
                    console.info(`Images ${imageName} copied to the ${publicFolder} folder`);
                }
        
                processed++;
        
                processed == icons.length && finished();
            });
        };
    };
};

/*
 * Get company info
 */
const getCompanyInfo = async () => {
    const dataPath = process.env.GLOBAL_DATA_PATH;
    const companyPath = `${dataPath}/company.json`;

    const url = `${process.env.NEXT_PUBLIC_API_URL}/${process.env.COMPANY_API_ROUTE}`;

    const res = await fetch(url);
    const resJson = await res.json();

    const data = resJson?.data?.attributes || {};

    /*
     * Write company data to a local json file
     */
    fs.writeFile(
        companyPath,
        JSON.stringify(data, null, 4),
        err => {
            if (err) throw err;

            console.info(`Company data written to file ${companyPath}\n`);
        },
    );
};

/*
 * Get Navigation Links
 */
const getNavLinks = async () => {
    const dataPath = process.env.GLOBAL_DATA_PATH;
    const navTreePath = `${dataPath}/nav-tree.json`;

    const url = `${process.env.NEXT_PUBLIC_API_URL}/${process.env.PAGES_API_ROUTE}`;

    const res = await fetch(url);
    const resJson = await res.json();

    const data = resJson?.data;

    const navTree = createNavTree(data);

    /*
     * Write navigation tree to a local json file
     */
    fs.writeFile(
        navTreePath,
        JSON.stringify(navTree, null, 4),
        err => {
            if (err) throw err;

            console.info(`Navigation tree written to file ${navTreePath}\n`);
        },
    );
};

/*
 * Main function to call on load
 */
const main = async () => {
	try {
		await getGlobals();
        await getCompanyInfo();
        await getNavLinks();
	} catch (err) {
		throw new Error(err)
	}
}

main();