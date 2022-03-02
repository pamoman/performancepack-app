/*
 * MessageSystem
 */

import { useMessage } from '@components/Contexts';
import { Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import styles from './styles';

const MessageSystem = () => {
    const messageContext = useMessage(),
          open = messageContext.message.open,
          text = messageContext.message.text,
          severity = messageContext.message.severity,
          setMessage = messageContext.setMessage;
    
    const Alert = (props) => {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    };

    const errorClose = (event, reason) => {

        setMessage({ text: "", open: false });
    };

    return (
        <Snackbar
            sx={styles.messageContainer}
            open={open}
            autoHideDuration={5000}
            onClose={errorClose}
        >
            <Alert sx={styles.message} onClose={errorClose} severity={severity}>
                {text}
            </Alert>
        </Snackbar>
    );
};

export default MessageSystem;