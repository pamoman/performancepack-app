/*
 * Graphql - PDF
 */

export default `
    ... on ComponentContentPdf {
        file {
            data {
                attributes {
                alternativeText
                caption
                url
                }
            }
        }
    }
`;
