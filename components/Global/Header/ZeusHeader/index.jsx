/*
 * ZeusHeader
 */

import Image from 'next/image';
import { NavController as Nav } from '@components/Global';
import { Link } from '@components/Shared';
import { useLayout } from '@components/Contexts';
import { Grid, Box, Typography, Hidden } from '@mui/material';
import styles from './styles';

const ZeusHeader = ({ title, logo, links }) => {
    const layout = useLayout();

    return (
        <Box sx={theme => styles.container(theme, layout)} component="header">
            <Box sx={theme => styles.header(theme, layout)}>
                <Link sx={styles.link} href="/">
                    <Grid sx={styles.heading} container direction="row" justifyContent="flex-start" alignItems="center" spacing={1, 0}>
                        {logo &&
                            <Grid item sx={styles.siteLogo}>
                                <Image src={`/${logo.data.attributes.name}`} alt={title} width={50} height={50} />
                            </Grid>
                        }
                            <Grid item>
                                <Typography color="primary" variant="h4">
                                    {title}
                                </Typography>
                            </Grid>
                    </Grid>
                </Link>

                <Hidden mdDown>
                    <Nav type="link" component="nav" links={links}  />
                </Hidden>
            </Box>
        </Box>
    )
}

export default ZeusHeader;