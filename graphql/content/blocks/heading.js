/*
 * Graphql - Heading
 */

export const settings = `
    {
        component
        variant
    }
`;

export default `
    ... on ComponentContentHeading {
        title
        settings ${settings}
    }
`;
