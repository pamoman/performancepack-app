/*
 * Loading
 */

import { Box } from '@mui/material';
import styles from './styles';

export const Loading = ({ isLoading }) => {
    return (
        isLoading && (
            <Box sx={styles.layer}>
                <Box sx={styles.animationContainer}>
                    <Box sx={styles.animation} />
                </Box>
            </Box>
        )
    );
};

export default Loading;