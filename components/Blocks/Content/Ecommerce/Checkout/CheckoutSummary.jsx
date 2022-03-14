/*
 * Checkout - Summary
 */

import { Box, Typography, Divider, Tooltip, Card, CardHeader, Avatar, CardContent, CardActions, IconButton } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import styles from './styles';

const CheckoutSummary = ({ basket = [], setBasket, sum }) => {
    return (
        <Card sx={styles.card}>
            <CardHeader
                sx={styles.cardHeader}
                avatar={
                    <Avatar>
                        <ShoppingBasketIcon color="secondary" fontSize="large" />
                    </Avatar>
                }
                title={
                    <Typography component="div" variant="h4">Din Kundvagn</Typography>
                }
                subheader={
                    <Typography component="div" variant="subtitle">Antal Produkter: {basket.length}</Typography>
                }
            />

            <CardContent sx={styles.basket.cardContent}>
                <Typography sx={styles.label} component="div" variant="button" align="center" noWrap>Summa</Typography>
                <Typography component="div" variant="h4" noWrap>{sum} kr</Typography>
            </CardContent>

            <Divider sx={styles.divider.vertical} flexItem orientation="vertical" />
            <Divider sx={styles.divider.horizontal} flexItem orientation="horizontal" />
            
            {basket && basket.length > 0 &&
                <Tooltip title="Rensa kundvagnen">
                    <CardActions sx={styles.cardActions} onClick={() => setBasket([])}>
                        <IconButton aria-label="clear" color="error">
                            <ClearIcon />
                        </IconButton>
                    </CardActions>
                </Tooltip>
            }
        </Card>
    )
};

export default CheckoutSummary;