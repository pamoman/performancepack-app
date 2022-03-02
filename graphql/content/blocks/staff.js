/*
 * Graphql - Staff
 */

export const settings = `
    {
        show_name
        show_email
        show_image
        show_title
        show_bio
        show_tel
        show_mobile
        company_email
    }
`;

export default `
    ... on ComponentContentStaff {
        employees {
            name
            users_permissions_user {
                data {
                    attributes {
                        firstname
                        lastname
                        email
                        title
                        bio
                        tel
                        mobile
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
                }
            }
        }
        settings ${settings}
    }
`;
