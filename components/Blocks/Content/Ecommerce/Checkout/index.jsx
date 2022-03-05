/*
 * Content Block - Product
 */

import { useState } from 'react';
import { useBasket } from '@config/cookies';
import CheckoutItem from './CheckoutItem';
import { Grid, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import defaultSettings from './settings';
import styles from './styles';

const Checkout = ({}) => {
    const [ basket ] = useBasket();

    console.log(basket);
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={styles.table} aria-label="Checkout">
                    <TableHead sx={styles.table.head}>
                        <TableRow sx={styles.table.row.header}>
                            <TableCell width="30%">Produkt</TableCell>
                            <TableCell align="center" width="15%">Pris</TableCell>
                            <TableCell align="center" width="40%">Antal</TableCell>
                            <TableCell align="center" width="15%">Total</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody sx={styles.table.body}>
                        {basket && basket.length > 0 && basket.map(item => (
                            <CheckoutItem {...item} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
};

export const PamoCheckout = (data) => {
    return (
        <Checkout />
    );
};

export default Checkout;