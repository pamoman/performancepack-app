/* 
 * Styles
 */

const styles = {
    headerContainer: (theme, layout) => {
        const style = {
            p: 2,
            backgroundColor: theme.palette.background.dark,
            color: theme.palette.primary.main
        };

        if (layout.hero) {
            return {
                ...style, ...{
                    backgroundColor: "inherit",
                    height: theme.layout.hero.height,
                }
            }
        }

        return style;
    },
    header: (theme, layout) => {
        const style = {
            height: theme.layout.header.height + "px",
            backgroundColor: "inherit",
        }

        if (layout.hero) {
            return {
                ...style, ...{
                    borderBottom: "none",
                    position: "relative",
                    zIndex: 999
                }
            }
        }

        return style;
    },
    toolbar: {},
    menuIcon: {
        display: {
            xs: 'flex',
            md: 'none'
        }
    },
    logoDesktop: {
        alignItems: "center",
        display: {
            xs: 'none',
            md: 'flex'
        },
        ml: 2,
        mr: 4,
    },
    logoMobile: {
        flexGrow: 1,
        alignItems: "center",
        display: {
            xs: 'flex',
            md: 'none'
        }
    },
    logotext: {
        display: 'flex',
        alignItems: "center",
    },
    logo: {
        display: 'flex',
        alignItems: "center",
        mr: 1
    },
    rightIcons: {
        display: "flex",
    },
};

export default styles;