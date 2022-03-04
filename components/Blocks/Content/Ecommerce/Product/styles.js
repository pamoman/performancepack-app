/* 
 * Product - Styles
 */

const styles = {
    card: theme => ({
        height: { xs: "inherit", sm: 300 },
        display: { xs: "flex", sm: "flex" },
        flexDirection: { xs: "column", sm: "row" },
        backgroundColor: "background.dark",
        color: "primary.main",
        [theme.breakpoints.down('lg')]: {
            width: "100%",
        },
    }),
    textfield: {
        backgroundColor: "primary.main",
        "& input": {
            fontWeight: "bold",
            textAlign: "center"
        }
    },
    greenButton: {
        backgroundColor: "button.secondary.background.light",
        ":hover": {
            backgroundColor: "button.secondary.background.main",
        }
    }
};

export default styles;