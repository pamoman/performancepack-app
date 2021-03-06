/*
 * Graphql - Ecommerce - Product
 */

export const settings = `
    settings {
        show_price
        show_image
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
        ${settings}
    }
`;