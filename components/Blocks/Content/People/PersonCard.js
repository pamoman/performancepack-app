/*
 * Block - Person Card
 */

import Image from 'next/image';
import defaultSettings from './settings';
import { company } from '@data/Global';
import { Typography, IconButton, Tooltip, Card, CardHeader, CardContent, CardActions, Avatar } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CallIcon from '@mui/icons-material/Call';
import styles from './styles';

const PamoPersonCard = ({ person, userSettings }) => {
    const settings = { ...defaultSettings, ...userSettings };

    const { firstname, lastname, email, title, bio, tel, mobile, image } = person?.attributes || person || {};
    const { formats, alternativeText } = image?.data?.attributes || {};
    const { url: imageUrl } = formats?.large || formats?.medium || formats?.small || formats?.thumbnail || {};

    return (
        <Card sx={styles.card} raised>
            <CardHeader
                avatar={settings.show_image &&
                    <Avatar sx={styles.avatar} aria-label={`${firstname} ${lastname}`}>
                        {imageUrl &&
                            <Image 
                                src={`${process.env.NEXT_PUBLIC_API_URL}${imageUrl}`}
                                alt={alternativeText}
                                layout='fill'
                                objectFit='cover'
                            />
                        }
                    </Avatar>
                }
                title={settings.show_name &&
                    <Typography variant="h5" color="primary">
                        {`${firstname} ${lastname}`}
                    </Typography>
                }
                subheader={settings.show_title &&
                    <Typography variant="subtitle" color="primary">
                        {title}
                    </Typography>
                }
            />

            {settings.show_bio &&
                <CardContent sx={styles.content}>
                    <Typography sx={styles.contentBody} variant="body2" color="primary">{bio}</Typography>
                </CardContent>
            }

            <CardActions sx={{ flexDirection: "column", alignItems: "flex-start" }} disableSpacing>
                {settings.show_email &&
                    <Tooltip title={`Skicka e-post till ${firstname} ${lastname}`}>
                        <IconButton
                            sx={styles.iconText}
                            href={`
                                mailto:${settings.company_email ? company.email : email}`
                                + `?`
                                + `subject=Information${settings.company_email ? " - " + firstname + " " + lastname : ""}`
                            }
                            color="primary"
                        >
                            <MailOutlineIcon fontSize="large" />
                            <Typography variant="subtitle1">{settings.company_email ? company.email : email}</Typography>
                        </IconButton>
                    </Tooltip>
                }

                {settings.show_tel &&
                    <Tooltip title={`Ringa ${firstname} ${lastname}`}>
                        <IconButton
                            sx={styles.iconText}
                            href={`tel:${tel}`}
                            color="primary"
                        >
                            <CallIcon fontSize="large" />
                            <Typography variant="subtitle1">{tel}</Typography>
                        </IconButton>
                    </Tooltip>
                }

                {settings.show_mobile &&
                    <Tooltip title={`Ringa ${firstname} ${lastname}`}>
                        <IconButton
                            sx={styles.iconText}
                            href={`tel:${mobile}`}
                            color="primary"
                        >
                            <CallIcon fontSize="large" />
                            <Typography variant="subtitle1">{mobile}</Typography>
                        </IconButton>
                    </Tooltip>
                }
            </CardActions>
        </Card>
    )
};

export default PamoPersonCard;