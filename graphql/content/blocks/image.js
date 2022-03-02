/*
 * Graphql - Image
 */

export const settings = `
    {
        show_caption
    }
`;

export default `
    ... on ComponentContentImage {
        image {
            data {
                attributes {
                    alternativeText
                    caption
                    formats
                    url
                }
            }
        }
        settings ${settings}
    }
`;
