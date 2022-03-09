/* 
 * Checkout - Styles
 */

const styles = {
    card: {
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        backgroundColor: "background.dark",
        color: "primary.main",
    },
    partOne: {
        flexGrow: 1,
        display: "flex",
        cardMedia: {
            order: { xs: 2, md: 1 },
            width: 175,
            height: 175,
            "& .basket-image": {
                borderBottomLeftRadius: { xs: 10, md: "inherit" },
            }
        },
        cardContent: {
            display: "flex",
            flexDirection: "column",
            order: { xs: 1, md: 2 },
            flexGrow: 1
        },
    },
    partTwo: {
        display: "flex",
        cardActions: {
            display: "flex",
            flexGrow: 1,
            p: 2,
        },
        cardContent: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: 175,
            "& div": {
                width: "100%",
                textAlign: "center"
            }
        },
    },
    summary: {
        cardHeader: {
            display: "flex",
            flexGrow: 1,
        },
        cardActions: {
            display: "flex",
            flexGrow: 1,
            p: 2,
        },
        cardContent: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: { xs: "flex-end", md: "center" },
            width: 175,
            "& div": {
                width: "100%",
                textAlign: "center"
            }
        }
    },
    quantity: {
        chooser: {
            display: "flex"
        },
        textfield: {
            backgroundColor: "primary.main",
            "& input": {
                p: 1,
                fontWeight: "bold",
                textAlign: "center"
            },
        },
    },
    action: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        m: 2
    },
    label: {
        mb: 1
    },
};

export default styles;