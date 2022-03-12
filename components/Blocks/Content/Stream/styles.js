/* 
 * Stream - Styles
 */

const styles = {
    loading: settings => ({
        position: "absolute",
        top: 0,
        left: 0,
        backgroundColor: settings?.background_color || "#000000",
    }),
    streamContainer: (theme, settings) => ({
        backgroundColor: settings.background_color,
        position: "relative",
        pt: "56.25%",
        height: settings.cover_screen ? "100vh" : "inherit",
        "& .react-player": {
            position: "absolute",
            top: 0,
            left: 0,
            video: {
                objectFit: settings.cover_screen ? "cover" : "contain"
            }
        }
    }),
    streamCaption: theme => ({
        backgroundColor: "background.dark",
        ...theme.palette.figcaption.props
    })
};

export default styles;