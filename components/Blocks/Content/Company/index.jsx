/*
 * Content Block - Company
 */

import { Map } from '@components/Blocks/Content';
import { company } from '@data/Global';
import defaultsettings from './settings';
import { Grid, Typography } from '@mui/material';
import styles from './styles';

const Company = ({ userSettings }) => {
    const settings = { ...defaultsettings, ...userSettings };

    return (
        <Grid container spacing={4}>
            {settings.show_address &&
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" gutterBottom>Adress</Typography>
                    <Typography variant="h6">{company.name}</Typography>
                    <Typography variant="h6">{company.street}</Typography>
                    <Typography variant="h6">{company.postcode} {company.town}</Typography>
                    <Typography variant="h6">{company.country}</Typography>
                </Grid>
            }

            {settings.show_location &&
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" gutterBottom>Karta</Typography>

                    <Map label={company.name} lat={company.lat} lng={company.lng} userSettings={userSettings?.map_settings} />
                </Grid>
            }
        </Grid>
    )
};

export default Company;