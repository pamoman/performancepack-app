/*
 * Shared - SEO
 */

import Head from 'next/head';
import { globals } from '@data/Global';

const Seo = ({ image, title, description, url }) => {
    const { header } = globals;
    const { formats } = image;
    const { url: imageUrl } = formats?.small || formats?.thumbnail || null;

    return (
        <Head>
            <title>{title || header?.title}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
            {description && <meta property="og:description" content={description} key="ogdesc" />}
            {url && <meta property="og:url" content={url} key="ogurl" />}
            {imageUrl && <meta property="og:image" content={`${process.env.NEXT_PUBLIC_API_URL}${imageUrl}`} key="ogimage" />}
        </Head>
    )
};

export const PamoSeo = (props) => {
    const { image: { data: { attributes: image } }, ...rest } = props;

    props = {
        image,
        ...rest
    };

    return (
        <Seo {...props} />
    )
};

export default Seo;