/* 
 * Hero - Styles
 */

const styles = {
    hero: (theme, settings) => ({
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: theme.layout.hero.height,
        "& .hero-image": {
            objectPosition: `${settings.desktop_postion_x}% ${settings.desktop_position_y}%`,
            [theme.breakpoints.down('md')]: {
                objectPosition: `${settings.mobile_position_x}% ${settings.mobile_position_y}%`
            },
        }
    }),
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: 'rgba(0, 0, 0, 0.35)',
        zIndex: 1,
    },
    contentContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,
    },
    content: {
        width: "100%",
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    title: theme => ({
        pb: theme.spacing(4),
    }),
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        width: "14rem",
    }
};

export default styles;