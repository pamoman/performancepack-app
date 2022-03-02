/*
 * Graphql - Gallery
 */

export const settings = `
    {
        show_caption
    }
`;

export const gallerySettings = `
    gallery_settings {
        autoplaySpeed
        slideTransitionSpeed
        disableKeyboardControls
        disableWheelControls
        disablePanzoom
        lightboxTransitionSpeed
        lightboxTransitionTimingFunction
    }
    gallery_buttons {
        showAutoplayButton
        showCloseButton
        showDownloadButton
        showFullscreenButton
        showNextButton
        showPrevButton
        showThumbnailsButton
    }
    gallery_caption {
        showCaption
    }
    gallery_thumbnails {
        showThumbnails
    }
    gallery_progress_bar {
        showProgressBar
    }
`;

export default `
    ... on ComponentContentGallery {
        images {
            data {
                attributes {
                    alternativeText
                    caption
                    formats
                    url
                }
            }
        }
        ${gallerySettings}
        settings ${settings}
    }
`;
