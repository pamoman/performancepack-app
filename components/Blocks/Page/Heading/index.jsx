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

export const PamoHeading = (props) => {
    const { ...rest } = props;

    props = {
        ...rest
    };

    return (
        <Heading {...props} />
    )
};

export default Heading;