/*
 * Page Block - Heading
 */

import { Typography } from '@mui/material';

const Heading = ({ heading, variant }) => {
    return (
        <Typography component={"h1"} variant={variant} align="center" gutterBottom>
            {heading}
        </Typography>
    )
};

export default Heading;