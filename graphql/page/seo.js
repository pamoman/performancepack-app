/*
 * Graphql - SEO
 */

export default `
    ... on ComponentPageSeo {
        title
        description
        url
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
    }
`;
