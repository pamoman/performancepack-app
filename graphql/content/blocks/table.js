/*
 * Graphql - Table
 */

export const settings = `
    {
        show_head
        show_name
        table_size
        align_cells
    }
`;

export default `
    ... on ComponentContentTable {
        name
        head {
            columns {
                name
            }
        }
        rows {
            name
            columns {
                value
            }
        }
        settings ${settings}
    }
`;