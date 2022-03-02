/* 
 * Styles
 */

const styles = {
    footer: theme => ({
        backgroundColor: "background.dark",
        p: 2,
        [theme.breakpoints.up('md')]: {
            height: theme.layout.footer.desktop.height,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            borderTop: `1px solid ${theme.palette.border.primary.main}`,
        },
        [theme.breakpoints.down('md')]: {
            height: theme.layout.footer.mobile.height,
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
        },
    }),
    copyright: {
        fontWeight: "bold",
    },
    iconText: {
        display: "flex",
        alignItems: "center",
        "& h6": {
            fontWeight: "bold",
        },
        "& svg": {
            mr: 1
        }
    }
};

export default styles;