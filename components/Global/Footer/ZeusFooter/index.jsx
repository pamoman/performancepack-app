/*
 * ZeusFooter
 */

import defaultsettings from './settings';
import { Box, Typography, Hidden } from '@mui/material';
import { NavController as Nav } from '@components/Global';
import styles from './styles';

const ZeusFooter = ({ copyright, links, settings: userSettings }) => {
    const settings = { ...defaultsettings, ...userSettings };

    return (
        <Box sx={styles.footer} component="footer">
            <Hidden mdDown>
                {settings.show_copyright && copyright &&
                    <Box sx={styles.copyright}>
                        <Typography variant="h6">{`\u00A9 ${copyright}`}</Typography>
                    </Box>
                }
            </Hidden>
            
            <Hidden mdUp>
                <Nav type="link" component="nav" links={links} />
            </Hidden>
        </Box>
    );
};

export default ZeusFooter;