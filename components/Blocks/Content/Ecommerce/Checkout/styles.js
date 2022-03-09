/* 
 * Checkout - Styles
 */

const image = {
    width: 175,
    height: 175
};

const styles = {
    card: {
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        backgroundColor: "background.dark",
        color: "primary.main",
    },
    product: {
        flexGrow: 1,
        display: "flex",
        cardMedia: {
            order: { xs: 2, md: 1 },
            width: image.width,
            height: image.height,
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
    basket: {
        display: "flex",
        quantity: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: { xs: "flex-start", md: "center" },
            flexGrow: 1,
            p: 2,
            contents: {},
            textfield: {
                backgroundColor: "primary.main",
                "& input": {
                    px: { xs: 0.5, md: 1 },
                    fontWeight: "bold",
                    textAlign: "center",
                },
            },
        },
        cardContent: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: { xs: "inherit", md: image.width },
        },
    },
    cardActions: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        "&:hover": {
            backgroundColor: "error.main",
            color: "secondary.main",
            "& button": {
                color: "primary.main"
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
            width: image.width,
            "& div": {
                width: "100%",
                textAlign: "center"
            }
        },
        basket: {
            display: "flex"
        }
    },
    label: {
        mb: 1,
    },
    icon: {
        remove: {
            pl: 0
        },
        add: {
            pr: 0
        }
    },
    divider: {
        horizontal: theme => ({
            display: { xs: "block", md: "none" },
            borderColor: theme.palette.border.primary.main
        }),
        vertical: theme => ({
            display: { xs: "none", md: "block" },
            borderColor: theme.palette.border.primary.main
        })
    },
};

export default styles;