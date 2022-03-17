/*
 * Graphql - Image
 */

export const settings = `
    settings {
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
        ${settings}
    }
`;
