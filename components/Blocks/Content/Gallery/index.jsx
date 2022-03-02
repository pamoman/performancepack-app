/*
 * Content Block - Gallery
 */

import Image from 'next/image';
import defaultSettings from './settings';
import { Grid, Typography } from '@mui/material';
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import styles from './styles';

const Gallery = ({ gallery, userSettings, userOptions }) => {
    const settings = { ...defaultSettings.settings, ...userSettings };
    const defaultOptions = defaultSettings.options;

    const options = {
        settings: { ...defaultOptions.settings, ...userOptions?.gallery_settings },
        caption: { ...defaultOptions.caption, ...userOptions?.gallery_caption },
        buttons: { ...defaultOptions.buttons, ...userOptions?.gallery_buttons },
        thumbnails: { ...defaultOptions.thumbnails, ...userOptions?.gallery_thumbnails },
        progressBar: { ...defaultOptions.progressBar, ...userOptions?.gallery_progress_bar }
    };

    return (
        <SimpleReactLightbox>
            <SRLWrapper options={options}>
                <Grid container justifyContent="flex-start" spacing={4}>
                    {gallery.map((image, i) => {
                        const { caption, alternativeText, formats } = image.attributes;
                        const url = formats?.large?.url || null;

                        return url && (
                            <Grid key={`gallery-image-${i}`} sx={styles.imageContainer} item xs={12} md={6} lg={4} xl={3}>
                                <Image 
                                    src={`${process.env.NEXT_PUBLIC_API_URL}${url}`}
                                    alt={alternativeText}
                                    layout='responsive'
                                    objectFit='cover'
                                    width={16}
                                    height={9}
                                />

                                {settings.show_caption &&
                                    <Typography sx={styles.caption} color="primary" variant="caption">{caption}</Typography>
                                }
                            </Grid>
                        )
                    })}
                </Grid>
            </SRLWrapper>
        </SimpleReactLightbox>
    )
};

export default Gallery;