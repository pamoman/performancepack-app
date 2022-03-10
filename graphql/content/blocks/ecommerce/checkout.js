/*
 * Graphql - Ecommerce - Checkout
 */

export const settings = `
    {
        show_image
    }
`;

export default `
    ... on ComponentEcommerceCheckout {
        id
        settings ${settings}
    }
`;
