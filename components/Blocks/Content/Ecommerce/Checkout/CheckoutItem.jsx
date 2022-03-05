/*
 * Content Block - Product
 */

import NextImage from 'next/image';
import { useState } from 'react';
import { useBasket } from '@config/cookies';
import { Grid, Box, Typography, Card, CardHeader, CardContent, CardMedia, CardActions, IconButton, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import defaultSettings from './settings';
import styles from './styles';

const CheckoutItem = ({ id, product, quantity }) => {
    const [ basket, setBasket ] = useBasket();
    const [ itemQuantity, setItemQuantity ] = useState(quantity);
    const { name, description, price, image: { data: { attributes: image } } } = product;
    const { alternativeText, caption, formats } = image;
    const { url } = formats?.medium || formats?.small;

    const updateQuantity = (qty) => {
        const parsedQuantity = parseInt(qty);
    
        if (!isNaN(parsedQuantity)) {
            setItemQuantity(parsedQuantity);

            updateBasket(parsedQuantity);
        }
    };

    const updateBasket = (qty) => {
        const item = basket.find(item => item.id === id);

        item.quantity = qty;

        setBasket(basket);
    };

    return (
        <Card sx={{ display: "flex", backgroundColor: "background.dark", color: "primary.main" }}>
            <CardMedia sx={{ width: 150, height: 150 }}>
                <NextImage
                    src={`${process.env.NEXT_PUBLIC_API_URL}${url}`}
                    alt={alternativeText}
                    layout='intrinsic'
                    objectFit='cover'
                    width={150}
                    height={150}
                />
            </CardMedia>

            <CardContent sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
                <Typography component="div" variant="h6">{name}</Typography>
                <Typography component="div" variant="subtitle">{description}</Typography>
                <Typography sx={{ mt: 2 }} component="div" variant="h4">{price} kr</Typography>
            </CardContent>

            <CardActions sx={{ p: 2, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <Typography sx={{ mb: 1 }} variant="button" align="center">Antal</Typography>

                <Box sx={{ display: "flex", flexDirection: "row" }}>
                    <IconButton aria-label="remove" color="primary">
                        <RemoveIcon onClick={() => itemQuantity > 0 && updateQuantity(itemQuantity - 1)} />
                    </IconButton>

                    <TextField
                        sx={styles.card.quantity}
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

            <CardContent sx={{ width: "20%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <Typography sx={{ mb: 1 }} variant="button" align="center">Totalt</Typography>
                <Typography component="div" variant="h4">{quantity * price} kr</Typography>
            </CardContent>
        </Card>
    )
};

export default CheckoutItem;