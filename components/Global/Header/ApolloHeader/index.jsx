/*
 * ApolloHeader
 */

import { Link } from '@components/Shared';
import Image from 'next/image';
import { useState } from 'react';
import { useLayout } from '@components/Contexts';
import { NavController as Nav } from '@components/Global';
import defaultsettings from './settings';
import { AppBar, Box, Toolbar, Tooltip, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import styles from './styles';

const ApolloHeader = ({ title, logo, links = [], company, userSettings = {} }) => {
    const settings = { ...defaultsettings, ...userSettings };
    const [open, setOpen] = useState(false);
    const layout = useLayout();
    const { location_url, mobile, email, email_subject, email_body } = company;

    const toggleOpen = (open) => (e) => {
        if (e.type === 'keydown' && (e.key === 'Tab' || e.key === 'Shift')) {
          return;
        }

        setOpen(open);
    };

    return (
        <AppBar sx={theme => styles.headerContainer(theme, layout)} position="static">
            <Box sx={theme => styles.header(theme, layout)}>
                <Nav type="drawer" links={links} open={open} toggleOpen={toggleOpen} />

                <Toolbar disableGutters>
                    <Box sx={styles.menuIcon}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={toggleOpen(true)}
                            color="primary"
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>

                    <Box sx={styles.logoDesktop}>   
                        <Link href="/" passHref>
                            <Box sx={styles.logotext}>
                                <Box sx={styles.logo}>
                                    {logo?.data?.attributes?.name &&
                                        <Image className="logo-image" src={`/${logo?.data.attributes.name}`} alt={title} width={50} height={50} />
                                    }
                                </Box>

                                <Typography
                                    component="h6"
                                    variant="h6"
                                    color="primary"
                                    noWrap
                                >
                                    {title}
                                </Typography>
                            </Box>
                        </Link>
                    </Box>

                    <Box sx={styles.logoMobile}>
                        <Link href="/" passHref>
                            <Box sx={styles.logotext}>
                                <Box sx={styles.logo}>
                                    {logo?.data?.attributes?.name &&
                                        <Image src={`/${logo?.data.attributes.name}`} alt={title} width={50} height={50} />
                                    }
                                </Box>

                                <Typography
                                    component="h6"
                                    variant="h6"
                                    color="primary"
                                    noWrap
                                >
                                    {title}
                                </Typography>
                            </Box>
                        </Link>
                    </Box>

                    <Nav type="menu" component="nav" links={links} />
                    
                    {settings.show_icons &&
                        <Box sx={styles.rightIcons}>
                            {settings.show_location &&
                                <Tooltip title="Hitta oss">
                                    <IconButton href={location_url} target="_blank">
                                        <LocationOnIcon fontSize="large" color="primary" />
                                    </IconButton>
                                </Tooltip>
                            }
                            
                            {settings.show_email &&
                                <Tooltip title="Skicka e-post till oss">
                                    <IconButton
                                        href={`
                                            mailto:${email}`
                                            + `?`
                                            + `subject=${email_subject}`
                                            + `&`
                                            + `body=${email_body}`
                                        }
                                    >
                                        <MailOutlineIcon fontSize="large" color="primary" />
                                    </IconButton>
                                </Tooltip>
                            }

                            {settings.show_phone &&
                                <Tooltip title="Ringa till oss">
                                    <IconButton href={`tel:${mobile}`}>
                                        <CallIcon fontSize="large" color="primary" />
                                    </IconButton>
                                </Tooltip>
                            }
                        </Box>
                    }
                </Toolbar>
            </Box>
        </AppBar>
    );
};

export default ApolloHeader;
