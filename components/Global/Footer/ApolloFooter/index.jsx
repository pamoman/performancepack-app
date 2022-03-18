/*
 * ApolloFooter
 */

import defaultsettings from './settings';
import { NavController as Nav } from '@components/Global';
import { Grid, Box, Typography, IconButton, Hidden } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CopyrightIcon from '@mui/icons-material/Copyright';
import styles from './styles';

const ApolloFooter = ({ copyright, links, company, settings: userSettings }) => {
    const settings = { ...defaultsettings, ...userSettings };
    const { location_url, street, postcode, town, mobile, telephone, email, email_subject, email_body } = company;

    return (
        <Box sx={styles.footer} component="footer">
            <Hidden mdDown>
                <Grid container justifyContent="space-evenly" alignItems="center">
                    {settings.show_location && (location_url || street || postcode || town) &&
                        <Grid item>
                            <IconButton
                                sx={styles.iconText}
                                color="primary"
                                href={location_url}
                                target="_blank"
                            >
                                <LocationOnIcon fontSize="large" />
                                <Typography variant="subtitle1">
                                {`
                                    ${street}
                                    
                                    ${postcode}

                                    ${town}
                                `}
                                </Typography>
                            </IconButton>
                        </Grid>
                    }
                    
                    {settings.show_mobile && mobile &&
                        <Grid item>
                            <IconButton
                                sx={styles.iconText}
                                color="primary"
                                href={`tel:${mobile}`}
                            >
                                <CallIcon fontSize="large" />
                                <Typography variant="subtitle1">{mobile}</Typography>
                            </IconButton>
                        </Grid>
                    }

                    {settings.show_tel && telephone &&
                        <Grid item>
                            <IconButton
                                sx={styles.iconText}
                                color="primary"
                                href={`tel:${telephone}`}
                            >
                                <CallIcon fontSize="large" />
                                <Typography variant="subtitle1">{telephone}</Typography>
                            </IconButton>
                        </Grid>
                    }

                    {settings.show_email && email &&
                        <Grid item>
                            <IconButton
                                sx={styles.iconText}
                                color="primary"
                                href={`
                                    mailto:${email}`
                                    + `?`
                                    + `subject=${email_subject}`
                                    + `&`
                                    + `body=${email_body}`
                                }
                            >
                                <MailOutlineIcon fontSize="large" />
                                <Typography variant="subtitle1">{email}</Typography>
                            </IconButton>
                        </Grid>
                    }

                    {settings.show_copyright && copyright &&
                        <Grid item>
                            <IconButton
                                sx={styles.iconText}
                                color="primary"
                            >
                                <CopyrightIcon fontSize="large" />
                                <Typography variant="subtitle1">{copyright}</Typography>
                            </IconButton>
                        </Grid>
                    }
                </Grid>
            </Hidden>

            <Hidden mdUp>
                <Nav type="bottom" links={links} showLabels />
            </Hidden>
        </Box>
    )
};

export default ApolloFooter;