/*
 * Page Block - Hero
 */

import Image from 'next/image';
import Link from 'next/link';
import defaultsettings from './settings';
import { Grid, Box, Typography, Button } from '@mui/material';
import styles from './styles';

const Hero = ({ heading, variant, formats, alternativeText, links, userSettings = {} }) => {
    const settings = { ...defaultsettings, ...userSettings };
    const { url } = formats?.xlarge || formats?.large || formats?.medium || formats?.small;

    return (
        <Box sx={(theme) => styles.hero(theme, settings)} component="section">
            <Box sx={styles.overlay} />

            <Image
                src={`${process.env.NEXT_PUBLIC_API_URL}${url}`}
                alt={alternativeText}
                layout="fill"
                objectFit="cover"
                priority={true}
                className="hero-image"
            />

            <Box sx={styles.contentContainer}>
                <Grid sx={styles.content} container>
                    <Grid item>
                        <Typography sx={styles.title} variant={variant} component="h1" align="center">
                            {heading}
                        </Typography>
                    </Grid>
                    
                    <Grid item>
                        <Grid sx={styles.buttonContainer} container spacing={2}>
                            {links.map((link, i) => {
                                const { href, label, target } = link;

                                return (
                                    <Grid key={`hero-link-${i}`} sx={styles.button} item>
                                        <Link href={href} passHref>
                                            <Button target={target} color="primary" variant="contained">
                                                <Typography variant="button" display="block" noWrap>{label}</Typography>
                                            </Button>
                                        </Link>
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
};

export default Hero;