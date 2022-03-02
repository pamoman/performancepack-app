/*
 * Graphql - Stream
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
    ... on ComponentContentStream {
        url
        alternative_text
        caption
        settings ${settings}
    }
`;
