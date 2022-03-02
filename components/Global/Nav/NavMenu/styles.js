/*
 * Styles
 */

const styles = {
    navMenu: {
        flexGrow: 1,
        justifyContent: "flex-start",
        display: {
            xs: 'none',
            md: 'flex'
        },
        button: {
            width: 125,
            textAlign: "center",
            my: 2,
            color: "primary.secondary",
            "&.active": {
                color: "iconButton.primary.main",
            },
            "&:not(.active):hover": {
                color: "iconButton.primary.main",
                backgroundColor: "iconButton.primary.background.main"
            },
        },
    },
    subMenu: {
        "& .MuiPaper-root": {
            color: "iconButton.primary.main",
            backgroundColor: "iconButton.primary.background.main",
        }
    },
    menuItem: {
        width: 125,
        "&:hover": {
            backgroundColor: "iconButton.primary.background.dark",
        }
    }
};

export default styles;