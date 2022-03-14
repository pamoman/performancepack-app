/*
 * Graphql - Ecommerce - Checkout
 */

export const settings = `
    settings {
        show_image
    }
`;

export const swish = `
    swish {
        number
        title
        change_amount
        change_message
    }
`;

export default `
    ... on ComponentEcommerceCheckout {
        id
        ${settings}
        ${swish}
    }
`;
