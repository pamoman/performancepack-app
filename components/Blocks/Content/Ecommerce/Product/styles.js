/* 
 * Product - Styles
 */

const styles = {
    card: theme => ({
        display: "flex",
        backgroundColor: "background.dark",
        color: "primary.main",
        [theme.breakpoints.down('md')]: {
            width: "100%",
        },
    }),
    textfield: {
        backgroundColor: "primary.main",
    },
    greenButton: {
        backgroundColor: "button.secondary.background.light",
        ":hover": {
            backgroundColor: "button.secondary.background.main",
        }
    }
};

export default styles;