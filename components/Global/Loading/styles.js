/* 
 * Styles
 */

import { keyframes } from '@emotion/react';

const spin = keyframes({
    from: {
        transform: "rotate(0deg)",
    },
    to: {
        transform: "rotate(360deg)",
    },
});

const styles = {
    layer: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "#000",
        opacity: "0.3",
        zIndex: 1
    },
    animationContainer: {
        position: "absolute",
        width: "1rem",
        height: "1rem",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 2
    },
    animation: {
        border: "5px solid #cbd5e0",
        borderTopColor: "#63b3ed",
        borderRadius: "50%",
        width: "2rem",
        height: "2rem",
        animation: `${spin} 1s linear infinite`,
    }
};

export default styles;