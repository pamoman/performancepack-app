/* 
 * Video - Styles
 */

const styles = {
    videoContainer: (theme, settings) => ({
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
    videoCaption: theme => ({
        backgroundColor: "background.dark",
        ...theme.palette.figcaption.props
    })
};

export default styles;