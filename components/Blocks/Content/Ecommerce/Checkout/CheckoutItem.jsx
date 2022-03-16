/*
 * Checkout - Item
 */

import NextImage from 'next/image';
import { useState } from 'react';
import { useBasket } from '@components/Contexts';
import { Box, Typography, Divider, Tooltip, Card, CardContent, CardMedia, CardActions, IconButton, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ClearIcon from '@mui/icons-material/Clear';
import styles from './styles';

const CheckoutItem = ({ settings, ...rest }) => {
    const { id, quantity, name, description, price, url, alternativeText } = rest;
    const { basket, setBasket } = useBasket();
    const [ itemQuantity, setItemQuantity ] = useState(quantity);

    const updateQuantity = (qty) => {
        const parsedQty = parseInt(qty);
        const itemIndex = basket.findIndex(item => item.id === id);
    
        if (!isNaN(parsedQty) && itemIndex > -1) {
            if (parsedQty) {
                basket[itemIndex].quantity = parsedQty;

                setItemQuantity(parsedQty);
            } else {
                basket.splice(itemIndex, 1);
            }

            setBasket(basket);
        }
    };

    return (
        <Card sx={styles.card}>
            <Box sx={styles.product}>
                {settings.show_image &&
                    <CardMedia sx={styles.product.cardMedia}>
                        <NextImage
                            src={`${process.env.NEXT_PUBLIC_API_URL}${url}`}
                            alt={alternativeText}
                            className="basket-image"
                            layout='responsive'
                            objectFit='cover'
                            width={1}
                            height={1}
                        />
                    </CardMedia>
                }

                <CardContent sx={styles.product.cardContent}>
                    <Typography component="div" variant="h6">{name}</Typography>
                    <Typography component="div" variant="subtitle">{description}</Typography>
                    <Typography sx={{ mt: 2 }} component="div" variant="h4">{price} kr</Typography>
                </CardContent>
            </Box>

            <Box sx={styles.basket}>
                <Box sx={styles.basket.quantity}>
                    <Box sx={styles.basket.quantity.contents}>
                        <Typography sx={styles.label} component="div" variant="button" align="center">Antal</Typography>

                        <IconButton sx={styles.icon.remove} aria-label="remove" color="primary">
                            <RemoveIcon onClick={() => itemQuantity > 0 && updateQuantity(itemQuantity - 1)} />
                        </IconButton>

                        <TextField
                            sx={styles.basket.quantity.textfield}
                            id="product-quantity"
                            type="number"
                            size="small"
                            inputProps={{ min: "1", max: "100", step: "1" }}
                            value={itemQuantity}
                            onChange={(e) => updateQuantity(e.target.value)}
                            required
                            variant="outlined"
                        />

                        <IconButton sx={styles.icon.add} aria-label="add" color="primary">
                            <AddIcon onClick={() => updateQuantity(itemQuantity + 1)} />
                        </IconButton>
                    </Box>
                </Box>

                <CardContent sx={styles.basket.cardContent}>
                    <Typography sx={styles.label} component="div" variant="button" align="center" noWrap>Totalt</Typography>
                    <Typography component="div" variant="h5" noWrap>{itemQuantity * price} kr</Typography>
                </CardContent>
            </Box>

            <Divider sx={styles.divider.vertical} flexItem orientation="vertical" />
            <Divider sx={styles.divider.horizontal} flexItem orientation="horizontal" />

            <Tooltip title="Ta bort produkten">
                <CardActions sx={styles.cardActions} onClick={() => updateQuantity(0)}>
                    <IconButton aria-label="clear" color="error">
                        <ClearIcon />
                    </IconButton>
                </CardActions>
            </Tooltip>
        </Card>
    )
};

export default CheckoutItem;