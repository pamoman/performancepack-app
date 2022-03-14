/*
 * PaymentTypes - Swish
 */

import NextImage from 'next/image';
import Link from 'next/link';
import { Box, Typography, CardHeader, CardContent, CardActions, Button } from '@mui/material';
import { QRCode } from '@components/Shared';
import swishDark from './Swish_dark_logo.svg';
import swishIcon from './Swish_Symbol_SVG.svg';
import LaunchIcon from '@mui/icons-material/Launch';

const Swish = ({ sum, number, message, change_amount, change_message }) => {
    let code;

    switch (true) {
        case !change_amount && !change_message:
            code = 0;
            break;
        case change_amount && change_message:
            code = 6;
            break;
        case !change_amount && change_message:
            code = 4;
            break;
        case change_amount && !change_message:
            code = 2;
            break;
        default:
            code = 0;
            break;
    }

    const value = `C${number};${sum};${message};${code}`;

    const userSettings = {
        size: swishDark.height / 2,
        imageSettings: {
            src: swishIcon.src,
            height: 48,
            width: 48,
            excavate: true,
        }
    };

    return (
        <>
            <CardHeader
                title={<Typography variant="h4" align="center">Betala med Swish</Typography>}
            />

            <CardContent sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, justifyContent: "center", alignItems: "center" }}>
                <Box sx={{ mr: { xs: 0, md: 8 }, mb: { xs: 4, md: 0 } }}>
                    <NextImage 
                        src={swishDark}
                        alt={"Swish"}
                        layout='intrinsic'
                        objectFit='contain'
                        width={swishDark.width / 2}
                        height={swishDark.height / 2}
                    />
                </Box>

                <Box>
                    <QRCode value={value} userSettings={userSettings} />
                </Box>
            </CardContent>

            <CardContent>
                <Typography variant="h5" align="center" gutterBottom>{`Telefonnummer: ${number}`}</Typography>
                <Typography variant="h5" align="center" gutterBottom>{`Summa: ${sum}`} kr</Typography>
                <Typography variant="h5" align="center">{`Meddelande: ${message}`}</Typography>
            </CardContent>

            <CardActions sx={{ display: { xs: "block", md: "none" } }}>
                <Link href="swish://" passHref>
                    <Button target="_blank" startIcon={<LaunchIcon />}>
                        Öppna Swish Appen  
                    </Button>
                </Link>
            </CardActions>
        </>
    )
};

export default Swish;