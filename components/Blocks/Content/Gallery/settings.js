/*
 * Gallery - Default Settings
 */

import theme from '@themes/dark';

export default {
    settings: {
        show_caption: true,
    },
    options: {
        settings: {
            autoplaySpeed: 3000,
            boxShadow: 'none',
            disableKeyboardControls: false,
            disablePanzoom: false,
            disableWheelControls: false,
            hideControlsAfter: false,
            lightboxTransitionSpeed: 0.3,
            lightboxTransitionTimingFunction: 'linear',
            overlayColor: theme.palette.background.dark,
            slideAnimationType: 'fade',
            slideSpringValues: [300, 50],
            slideTransitionSpeed: 0.6,
            slideTransitionTimingFunction: 'linear',
            usingPreact: false
        },
        caption: {
            captionAlignment: 'start',
            captionColor: '#FFFFFF',
            captionContainerPadding: '20px 0 30px 0',
            captionFontFamily: 'inherit',
            captionFontSize: '3rem',
            captionFontStyle: 'inherit',
            captionFontWeight: 'inherit',
            captionTextTransform: 'inherit',
            showCaption: true
        },
        buttons: {
            backgroundColor: 'rgba(30,30,36,0.8)',
            iconColor: 'rgba(255, 255, 255, 0.8)',
            iconPadding: '10px',
            showAutoplayButton: true,
            showCloseButton: true,
            showDownloadButton: true,
            showFullscreenButton: true,
            showNextButton: true,
            showPrevButton: true,
            showThumbnailsButton: true,
            size: '40px'
        },
        thumbnails: {
            showThumbnails: true,
            thumbnailsAlignment: 'center',
            thumbnailsContainerBackgroundColor: 'transparent',
            thumbnailsContainerPadding: '0',
            thumbnailsGap: '0 1px',
            thumbnailsIconColor: '#ffffff',
            thumbnailsOpacity: 0.4,
            thumbnailsPosition: 'bottom',
            thumbnailsSize: ['100px', '80px']
        },
        progressBar: {
            backgroundColor: '#f2f2f2',
            fillColor: '#000000',
            height: '3px',
            showProgressBar: true
        }
    }
};