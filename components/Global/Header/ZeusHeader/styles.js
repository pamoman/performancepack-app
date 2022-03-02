/* 
 * Styles
 */

const styles = {
    container: (theme, layout) => {
        const style = {
            backgroundColor: theme.palette.background.dark
        };

        if (layout.hero) {
            return {
                ...style, ...{
                    backgroundColor: "none",
                    height: theme.layout.hero.height,
                }
            }
        }

        return style;
    },
    header: (theme, layout) => {
        const style = {
            display: "flex",
            width: "100%",
            height: theme.layout.header.height + "px",
            borderBottom: `1px solid ${theme.palette.border.primary.main}`,
            "& nav": {
                display: "flex",
                "& a": {
                    width: "110px",
                    "&.active-nav": {
                        borderBottom: `2px solid ${theme.palette.border.secondary.main}`,
                    },
                },
            }
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
    link: theme => ({
        [theme.breakpoints.down('md')]: {
            width: "100%"
        },
    }),
    heading: theme => ({
        width: "250px",
        height: "100%",
        px: 2,
    }),
};

export default styles;