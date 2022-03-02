/*
 * Content Block - Heading
 */

import defaultSettings from './settings';
import { Typography } from '@mui/material';

const Heading = ({ title, userSettings }) => {
    const { component, variant } = { ...defaultSettings, ...userSettings };

    return (
        <Typography component={component} variant={variant} align="left">
            {title}
        </Typography>
    )
};

export default Heading;