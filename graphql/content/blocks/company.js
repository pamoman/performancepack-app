/*
 * Graphql - Company
 */

import { settings as mapSettings } from './map';

export const settings = `
    {
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
        settings ${settings}
    }
`;
