/*
 * Shared - Loading
 */

import { Box, CircularProgress } from '@mui/material';
import styles from './styles';

const Loading = ({ sx: userSX = {} }) => {
    return (
        <Box sx={() => styles.container(userSX)}>
            <CircularProgress />
        </Box>
    )
};

export default Loading;