/* 
 * Slideshow - Styles
 */

const styles = {
    slideshowSlider: {
        position: "relative",
        backgroundColor: "#000",
    },
    slideshowImage: {},
    slideshowCaption: theme => ({
        backgroundColor: "background.dark",
        ...theme.palette.figcaption.props
    }),
    slideshowArrows: {
        position: "absolute",
        width: "3rem",
        height: "3rem",
        top: "50%",
        transform: "translateY(-50%)",
        webkitTransform: "translateY(-50%)",
        color: "white",
        "&.left-arrow": {
            left: "0"
        },
        "&.right-arrow": {
            left: "auto",
            right: "0"
        }
    },
    slideshowChooser:  {
        margin: "1rem",
        textAlign: "center",
        color: "black",
        "& .active": {
            color: "white"
        }
    }
}

export default styles;