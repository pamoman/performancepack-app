/*
 * Styles - Page
 */

const styles = {
    page: theme => ({
        minHeight: "100vh",
        pt: 3,
        pb: 3,
        [theme.breakpoints.down('md')]: {
            mb: theme.layout.footer.mobile.height + "px"
        },
    })
};

export default styles;