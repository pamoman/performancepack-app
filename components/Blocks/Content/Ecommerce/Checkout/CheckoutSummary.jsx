/*
 * Checkout - Summary
 */

import { useState } from 'react';
import { useBasket } from '@config/storage';
import CheckoutItem from './CheckoutItem';
import { Box, Typography, Card, CardHeader, Avatar, CardContent, CardMedia, CardActions, IconButton, TextField } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import defaultSettings from './settings';
import styles from './styles';

const calculateSum = (sum, item) => {
    return sum + item.quantity * item.price;
};

const CheckoutSummary = ({ basket = [], setBasket }) => {
    const sum = basket.reduce(calculateSum, 0);

    return (
        <Card sx={styles.card}>
            <CardHeader
                sx={styles.summary.cardHeader}
                avatar={
                    <Avatar>
                        <ShoppingBasketIcon fontSize="large" />
                    </Avatar>
                }
                title={
                    <Typography component="div" variant="h4">Din Kundvagn</Typography>
                }
                subheader={
                    <Typography component="div" variant="subtitle">Antal Produkter: {basket.length}</Typography>
                }
            />

            <Box sx={styles.partTwo}>
                <CardActions sx={styles.summary.cardActions}>
                </CardActions>

                <CardContent sx={styles.summary.cardContent}>
                    <Typography sx={styles.label} component="div" variant="button" align="center" noWrap>Summa</Typography>
                    <Typography component="div" variant="h4" noWrap>{sum} kr</Typography>
                </CardContent>
            </Box>
        </Card>
    )
};

export default CheckoutSummary;