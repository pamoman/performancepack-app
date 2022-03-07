/* 
 * Checkout - Styles
 */

const styles = {
    card: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        backgroundColor: "background.dark",
        color: "primary.main"
    },
    part: {
        one: {
            flexGrow: 1,
            display: "flex"
        },
        two: {
            display: "flex"
        }
    },
    cardMedia: {
        width: 150,
        height: 150
    },
    cardContent: {
        product: {
            display: "flex",
            flexDirection: "column"
        },
        price: {
            width: 175,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }
    },
    cardActions: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: 175,
        p: 2,
    },
    input: {
        backgroundColor: "primary.main",
        "& input": {
            p: 1,
            fontWeight: "bold",
            textAlign: "center"
        },
    },
    label: {
        mb: 1
    },
    quantity: {
        display: "flex"
    }
};

export default styles;