/*
 * Content Block - Checkout
 */

import { useState } from 'react';
import { useBasket } from '@config/storage';
import CheckoutItem from './CheckoutItem';
import CheckoutSummary from './CheckoutSummary';
import { Grid, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import defaultSettings from './settings';
import styles from './styles';

const Checkout = ({}) => {
    const [ basket, setBasket ] = useBasket();

    return (
        <Grid container justifyContent="center" alignItems="center" spacing={4}>
            {basket && basket.map(item => (
                <Grid item xs={12}>
                    <CheckoutItem basket={basket} setBasket={setBasket} {...item} />
                </Grid>
            ))}

            <Grid item xs={12}>
                <CheckoutSummary basket={basket} setBasket={setBasket} />
            </Grid>
        </Grid>
    )
};

export const PamoCheckout = (data) => {
    return (
        <Checkout />
    );
};

export default Checkout;