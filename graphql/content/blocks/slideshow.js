/*
 * Graphql - Slideshow
 */

export const settings = `
    settings {
        interval
        autoplay
        dots
        arrows
    }
`;

export default `
    ... on ComponentContentSlideshow {
        images {
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
