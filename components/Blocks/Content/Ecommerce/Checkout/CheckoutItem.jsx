/*
 * Content Block - Product
 */

import NextImage from 'next/image';
import { useState } from 'react';
import { Box, Typography, Card, CardHeader, CardContent, CardMedia, CardActions, IconButton, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import defaultSettings from './settings';
import styles from './styles';

const CheckoutItem = ({ basket, setBasket, ...rest }) => {
    const { id, quantity, name, description, price, url, alternativeText } = rest;
    const [ itemQuantity, setItemQuantity ] = useState(quantity);

    const updateQuantity = (qty) => {
        const parsedQty = parseInt(qty);
    
        if (!isNaN(parsedQty)) {
            const itemIndex = basket.findIndex(item => item.id === id);

            if (itemIndex !== -1) {
                basket[itemIndex].quantity = parsedQty;
                
                setItemQuantity(parsedQty);
                setBasket(basket);
            }
        }
    };

    return (
        <Card sx={styles.card}>
            <Box sx={styles.part.one}>
                <CardMedia sx={styles.cardMedia}>
                    <NextImage
                        src={`${process.env.NEXT_PUBLIC_API_URL}${url}`}
                        alt={alternativeText}
                        layout='intrinsic'
                        objectFit='cover'
                        width={150}
                        height={150}
                    />
                </CardMedia>

                <CardContent sx={styles.cardContent.product}>
                    <Typography component="div" variant="h6">{name}</Typography>
                    <Typography component="div" variant="subtitle">{description}</Typography>
                    <Typography sx={{ mt: 2 }} component="div" variant="h4">{price} kr</Typography>
                </CardContent>
            </Box>

            <Box sx={styles.part.two}>
                <CardActions sx={styles.cardActions}>
                    <Typography sx={styles.label} variant="button" align="center">Antal</Typography>

                    <Box sx={styles.quantity}>
                        <IconButton aria-label="remove" color="primary">
                            <RemoveIcon onClick={() => itemQuantity > 0 && updateQuantity(itemQuantity - 1)} />
                        </IconButton>

                        <TextField
                            sx={styles.input}
                            id="product-quantity"
                            type="number"
                            size="small"
                            inputProps={{ min: "1", max: "100", step: "1" }}
                            value={itemQuantity}
                            onChange={(e) => updateQuantity(e.target.value)}
                            required
                            variant="outlined"
                        />

                        <IconButton aria-label="add" color="primary">
                            <AddIcon onClick={() => updateQuantity(itemQuantity + 1)} />
                        </IconButton>
                    </Box>
                </CardActions>

                <CardContent sx={styles.cardContent.price}>
                    <Typography sx={styles.label} variant="button" align="center">Totalt</Typography>
                    <Typography component="div" variant="h4">{itemQuantity * price} kr</Typography>
                </CardContent>
            </Box>
        </Card>
    )
};

export default CheckoutItem;