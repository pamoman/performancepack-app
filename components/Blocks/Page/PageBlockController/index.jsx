/*
 * Page Block - Controller
 */

import * as Page from '@components/Blocks/Page';

const PamoPageBlockController = ({ __typename, ...rest }, index) => {
    const blocks = {
        'ComponentPageSeo': () => {
            const { image: { data: { attributes: image } }, ...pageSeo } = rest;

            const props = {
                image,
                ...pageSeo
            };

            return {
                Block: Page.Seo,
                props
            }
        },
        'ComponentPageHeading': () => {
            const { ...pageHeading } = rest;

            const props = {
                ...pageHeading
            };

            return {
                Block: Page.Heading,
                props
            }
        },
        'ComponentPageHero': () => {
            const { image: { data: { attributes: heroImage } }, page_heading: heroHeading, links, settings: heroSettings } = rest;

            const props = {
                ...heroImage,
                ...heroHeading,
                links,
                userSettings: heroSettings
            };

            return {
                Block: Page.Hero,
                props
            }
        },
    };

    const currentBlock = blocks[__typename] || null;

    const { Block, props } = currentBlock ? currentBlock() : {};

    return Block ? <Block key={`page-block-${index}`} {...props} /> : null;
};

export default PamoPageBlockController;