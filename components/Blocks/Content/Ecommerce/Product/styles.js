/* 
 * Product - Styles
 */

const styles = {
    card: theme => ({
        height: { xs: "inherit", sm: 340 },
        display: { xs: "flex", sm: "flex" },
        flexDirection: { xs: "column", sm: "row" },
        backgroundColor: "background.dark",
        color: "primary.main",
        [theme.breakpoints.down('lg')]: {
            width: "100%",
        },
    }),
    cardMain: {
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        order: {
            xs: 2,
            sm: 1
        },
        width: {
            xs: "100%",
            sm: "50%"
        },
    },
    cardHeader: {
        display: "flex",
        p: 2,
        "& div": {
            width: "100%",
        },
    },
    cardContent: {
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center',
        flexGrow: 1,
        p: 0
    },
    cardActions: {
        display: "flex",
        flexDirection: "column",
        p: 2
    },
    quantityContainer: {
        mb: 2,
        display: "flex",
        alignItems: "center",
    },
    quantity: {
        backgroundColor: "primary.main",
        "& input": {
            fontWeight: "bold",
            textAlign: "center"
        }
    },
    addButton: {
        width: 200,
        backgroundColor: "button.secondary.background.light",
        ":hover": {
            backgroundColor: "button.secondary.background.main",
        }
    },
    cardMedia: {
        display: "flex",
        flexDirection: "column",
        order: {
            xs: 1,
            sm: 2
        },
        width: {
            xs: "100%",
            sm: "50%"
        },
        height: {
            xs: 325,
            sm: "inherit"
        },
    }
};

export default styles;