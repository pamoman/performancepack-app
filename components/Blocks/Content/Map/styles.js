/* 
 * Map - Styles
 */

const styles = {
    map: (theme, settings) => {
        const { size = "medium", dimensions } = settings;

        return {
            width: dimensions[size].width,
            height: dimensions[size].height,
            borderWidth: 4,
            borderStyle: "solid",
            borderColor: "background.dark",
            m: "0 auto"
        }
    },
    marker: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontWeight: "bold",
    }
};

export default styles;