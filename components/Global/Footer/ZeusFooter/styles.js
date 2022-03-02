/* 
 * Styles
 */

const styles = {
    footer: theme => ({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: theme.layout.footer.height,
        borderTop: `1px solid ${theme.palette.border.primary.main}`,
        backgroundColor: theme.palette.background.dark,
        [theme.breakpoints.down('md')]: {
            position: "fixed",
            bottom: 0,
        },
    }),
    copyright: {
        fontWeight: "bold",
    },
};

export default styles;