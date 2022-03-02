/*
 * ZeusFooter
 */

import { Box, Typography, Hidden } from '@mui/material';
import { NavController as Nav } from '@components/Global';
import styles from './styles';

const ZeusFooter = ({ copyright, links }) => {
    return (
        <Box sx={styles.footer} component="footer">
            <Hidden mdDown>
                <Box sx={styles.copyright}>
                    <Typography variant="h6">{copyright && `\u00A9 ${copyright}`}</Typography>
                </Box>
            </Hidden>
            
            <Hidden mdUp>
                <Nav type="link" component="nav" links={links} />
            </Hidden>
        </Box>
    );
};

export default ZeusFooter;