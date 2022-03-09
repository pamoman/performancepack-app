/*
 * Checkout - Summary
 */

import { useState } from 'react';
import { useBasket } from '@config/storage';
import CheckoutItem from './CheckoutItem';
import { Box, Typography, Divider, Card, CardHeader, Avatar, CardContent, CardMedia, CardActions, IconButton, TextField } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ClearIcon from '@mui/icons-material/Clear';
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
                sx={styles.cardHeader}
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

            <Box sx={styles.checkout}>
                <Box sx={styles.checkout.purchase}>
                </Box>

                <CardContent sx={styles.basket.cardContent}>
                    <Typography sx={styles.label} component="div" variant="button" align="center" noWrap>Summa</Typography>
                    <Typography component="div" variant="h4" noWrap>{sum} kr</Typography>
                </CardContent>
            </Box>

            <Divider sx={styles.divider.vertical} flexItem orientation="vertical" />
            <Divider sx={styles.divider.horizontal} flexItem orientation="horizontal" />
            
            {basket && basket.length > 0 &&
                <CardActions sx={styles.cardActions} onClick={() => setBasket([])}>
                    <IconButton aria-label="clear" color="error">
                        <ClearIcon />
                    </IconButton>
                </CardActions>
            }
        </Card>
    )
};

export default CheckoutSummary;