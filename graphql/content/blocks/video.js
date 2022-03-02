/*
 * Graphql - Video
 */

export const settings = `
    {
        autoplay
        muted
        controls
        show_caption
        loop
        cover_screen
        background_color
    }
`;

export default `
    ... on ComponentContentVideo {
        video {
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
