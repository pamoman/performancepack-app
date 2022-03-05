/* 
 * Checkout - Styles
 */

const styles = {
    table: {
        whiteSpace: "nowrap",
        overflowX: "scroll",
        head: {
            backgroundColor: "background.dark",
        },
        body: {
            backgroundColor: "background.light",
        },
        row: {
            header: {
                "& th": {
                    fontWeight: "bold",
                    color: "primary.main",
                }
            },
            data: {
                "& td": {
                    color: "primary.main",
                }
            }
        },
        quantity: {
            backgroundColor: "primary.main",
            "& input": {
                fontWeight: "bold",
                textAlign: "center"
            }
        },
    }
};

export default styles;