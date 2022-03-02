/*
 * Graphql - Page
 */

import heading from './heading';
import hero from './hero';
import seo from './seo';

export default `
    page {
        ${heading}
        ${hero}
        ${seo}
    }
`;
