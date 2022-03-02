/*
 * Content Block - Wysiwyg
 */

import ReactMarkdown from 'react-markdown';
import { Grid } from '@mui/material';

const Wysiwyg = ({ content }) => {
    return (
        <Grid container justifyContent="center">
            <Grid item xs={12}>
                <ReactMarkdown
                    children={content}
                ></ReactMarkdown>
            </Grid>
        </Grid>
    )
};

export default Wysiwyg;