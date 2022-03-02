/*
 * Content Block - Video
 */

import ReactPlayer from 'react-player';
import defaultSettings from './settings';
import { Grid, Typography } from '@mui/material';
import styles from './styles';

const Video = ({ url, caption, userSettings }) => {
    const settings = { ...defaultSettings, ...userSettings };

    return (
        <Grid container justifyContent="center">
            <Grid sx={ (theme) => styles.videoContainer(theme, settings)} item xs={12}>
                <ReactPlayer
                    className="react-player"
                    url={`${process.env.NEXT_PUBLIC_API_URL}${url}`}
                    playing={settings.autoplay}
                    playsinline={settings.autoplay}
                    loop={settings.loop}
                    muted={settings.muted}
                    controls={settings.controls}
                    width="100%"
                    height="100%"
                />
            </Grid>

            {settings.show_caption && caption &&
                <Grid sx={styles.videoCaption} item xs={12}>
                    <Typography color="primary" variant="subtitle1">{caption}</Typography>
                </Grid>
            }
        </Grid>
    )
};

export default Video;