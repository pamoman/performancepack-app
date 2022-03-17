/*
 * Graphql - Company
 */

import { mapSettings } from './map';

export const settings = `
    settings {
        show_name
        show_location
        show_address
        show_tel
        show_mobile
        show_email
        map_settings ${mapSettings}
    }
`;

export default `
    ... on ComponentContentCompany {
        ${settings}
    }
`;
