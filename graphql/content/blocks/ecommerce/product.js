/*
 * Graphql - Ecommerce - Product
 */

export const settings = `
    {
        show_price
        allow_purchase
    }
`;

export default `
    ... on ComponentEcommerceProducts {
        products {
            data {
                id
                attributes {
                    name
                    description
                    price
                    image {
                        data {
                            attributes {
                                alternativeText
                                caption
                                formats
                            }
                        }
                    }
                }
            }
        }
        settings ${settings}
    }
`;