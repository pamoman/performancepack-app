/*
 * MessageSystem
 */

import { useMessage } from '@components/Contexts';
import { Stack, Box, Snackbar } from '@mui/material';
import { Alert as MuiAlert, AlertTitle } from '@mui/material';
import styles from './styles';

const MessageSystem = () => {
    const messageContext = useMessage();
    const { message, setMessage } = messageContext;
    const { open, severity, title = severity, text } = message;
    
    const Alert = (props) => {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    };

    const errorClose = (event, reason) => {

        setMessage({ text: "", open: false });
    };

    return (
        <Stack spacing={2}>
            <Snackbar
                sx={styles.snackBar}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                open={open}
                autoHideDuration={5000}
                onClose={errorClose}
            >
                <Box>
                    <Alert sx={styles.alert} onClose={errorClose} severity={severity}>
                        <AlertTitle>{title && title.toUpperCase()}</AlertTitle>
                            {text}
                    </Alert>
                </Box>
            </Snackbar>
        </Stack>
    );
};

export default MessageSystem;