/*
 * Graphql - Hero
 */

export const settings = `
    settings {
        desktop_postion_x
        desktop_position_y
        mobile_position_x
        mobile_position_y
    }
`;

export default `
    ... on ComponentPageHero {
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
        page_heading {
            heading
            variant
        }
        links {
            label
            path
            icon
            location
        }
        ${settings}
    }
`;
