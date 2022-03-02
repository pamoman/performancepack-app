/*
 * Styles
 */

const styles = {
    drawer: {
        p: 2,
        height: 1,
        backgroundColor: "background.dark",
        icon: {
            mb: 2,
            color: "primary.main"
        },
        divider: {
            mb: 2,
            borderColor: "primary.main"
        },
    },
    navList: {
        width: 250,
        mb: 2,
        link: {
            icon: {
                color: "iconButton.primary.disabled",
                "&.active": {
                    color: "iconButton.primary.main"
                }
            },
            text: {
                color: "iconButton.primary.disabled",
                "&.active": { 
                    color: "iconButton.primary.main"
                }
            }
        },
        collapsed: sub => ({
            pl: sub ? 6 : "auto"
        }),
    }
};

export default styles;