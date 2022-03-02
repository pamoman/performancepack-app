/*
 * Graphql - Map
 */

export const settings = `
    {
        zoom
        size
    }
`;

export default `
    ... on ComponentContentMap {
        lat
        lng
        settings ${settings}
    }
`;
