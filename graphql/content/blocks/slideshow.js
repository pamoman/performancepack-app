/*
 * Graphql - Slideshow
 */

export const settings = `
    {
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
        settings ${settings}
    }
`;
