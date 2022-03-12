/*
 * Content Block - Stream
 */

import { useState } from 'react';
import ReactPlayer from 'react-player';
import { Loading } from '@components/Shared';
import defaultSettings from './settings';
import { Grid, Typography } from '@mui/material';
import styles from './styles';

const Stream = ({ url, caption, userSettings = {} }) => {
    const settings = { ...defaultSettings, ...userSettings };
    const [ loading, setLoading ] = useState(true);

    return (
        <Grid container justifyContent="center">
            <Grid sx={ (theme) => styles.streamContainer(theme, settings)} item xs={12}>
                {loading && <Loading sx={styles.loading(settings)} />}

                <ReactPlayer
                    className="react-player"
                    url={url}
                    playing={settings.autoplay}
                    loop={settings.loop}
                    muted={settings.muted}
                    controls={settings.controls}
                    onReady={() => setLoading(false)}
                    width="100%"
                    height="100%"
                />
            </Grid>

            {settings.show_caption && caption &&
                <Grid sx={styles.streamCaption} item xs={12}>
                    <Typography color="primary" variant="subtitle1">{caption}</Typography>
                </Grid>
            }
        </Grid>
    )
};

export const PamoStream = (data) => {
    const { settings, ...rest } = data;
            
    const props = {
        userSettings: settings,
        ...rest,
    };

    return (
        <Stream {...props} />
    )
};

export default Stream;