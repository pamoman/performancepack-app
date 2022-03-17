/*
 * Graphql - Heading
 */

export const settings = `
    settings {
        component
        variant
    }
`;

export default `
    ... on ComponentContentHeading {
        title
        ${settings}
    }
`;
