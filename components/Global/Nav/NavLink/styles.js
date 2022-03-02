/*
 * Styles
 */

const styles = {
    navLink: theme => ({
        width: "100%",
        height: "100%",
        display: "flex",
        flexWrap: "nowrap",
        "& a": {
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "1rem",
            fontWeight: "bold",
            textDecoration: "none",
            color: "iconButton.primary.disabled",
            borderLeft: `1px solid ${theme.palette.border.primary.main}`,
            borderRight: `1px solid ${theme.palette.border.primary.main}`,
            borderBottom: `2px solid ${theme.palette.background.dark}`,
            paddingBottom: "0.5rem",
            borderBottom: "none",
            [theme.breakpoints.down('md')]: {
                "&:first-child": {
                    borderLeft: "none"
                },
                "&:last-child": {
                    borderRight: "none"
                },
            },
            "&.active": {
                color: theme.palette.iconButton.primary.main,
            },
            "&:not(.active):hover": {
                color: theme.palette.iconButton.primary.main,
                backgroundColor: theme.palette.background.light,
            },
        },
    })
};

export default styles;