/*
 * Graphql - Map
 */

export const mapSettings = `
    {
        zoom
        size
    }
`;

export const settings = `
    settings ${mapSettings}
`;

export default `
    ... on ComponentContentMap {
        lat
        lng
        ${settings}
    }
`;
