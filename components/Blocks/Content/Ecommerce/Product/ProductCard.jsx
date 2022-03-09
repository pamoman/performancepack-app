/*
 * Product - Card
 */

import { useState } from 'react';
import NextImage from 'next/image';
import { Box, Card, CardHeader, CardContent, CardMedia, CardActions, Typography, TextField, Button, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import styles from './styles';

const ProductCard = ({ basket, setBasket, settings, ...rest }) => {
    const { id, attributes: product } = rest;
    const { name, description, price, image: { data: { attributes: image } } } = product || {};
    const { alternativeText, formats } = image;
    const { url } = formats?.medium || formats?.small;
    const [ quantity, setQuantity ] = useState(0);

    const updateQuantity = (qty) => {
        const parsedQty = parseInt(qty);
    
        if (!isNaN(parsedQty)) {
            setQuantity(parsedQty);
        }
    };

    const updateBasket = (qty) => {
        const parsedQty = parseInt(qty);

        const itemIndex = basket.findIndex(item => item.id === id);

        if (itemIndex !== -1) {
            basket[itemIndex].quantity += parsedQty;
        } else {
            const newItem = {
                id,
                quantity: parsedQty,
                name,
                description,
                price,
                url,
                alternativeText
            };

            basket.push(newItem);
        }

        setBasket(basket);
        setQuantity(0);
    };

    return (
        <Card sx={styles.card}>
            <Box sx={styles.cardMain}>
                <CardHeader
                    sx={styles.cardHeader}
                    title={
                        <Typography component="h3" variant="h4" color="primary.main">
                            {name}
                        </Typography>
                    }
                    subheader={
                        <Typography component="div" variant="subtitle1" color="primary.main" noWrap>
                            {description}
                        </Typography>
                    }
                />

                <CardContent sx={styles.cardContent}>
                    {settings.show_price &&
                        <Typography component="h3" variant="h1" color="primary.main">
                            {price}:-
                        </Typography>
                    }
                </CardContent>
                
                {settings.allow_purchase &&
                    <CardActions sx={styles.cardActions}>
                        <Box sx={styles.quantityContainer}>
                            <IconButton aria-label="remove" color="primary">
                                <RemoveIcon onClick={() => quantity > 0 && updateQuantity(quantity - 1)} />
                            </IconButton>

                            <TextField
                                sx={styles.quantity}
                                id="product-quantity"
                                type="number"
                                size="small"
                                inputProps={{ min: "1", max: "100", step: "1" }}
                                value={quantity}
                                onChange={(e) => updateQuantity(e.target.value)}
                                required
                                variant="outlined"
                            />

                            <IconButton aria-label="add" color="primary">
                                <AddIcon onClick={() => updateQuantity(quantity + 1)} />
                            </IconButton>
                        </Box>

                        <Button
                            sx={styles.addButton}
                            color="primary"
                            type="submit"
                            size="small"
                            variant="contained"
                            startIcon={<AddCircleIcon />}
                            onClick={() => quantity && updateBasket(quantity)}
                        >
                            Lägg till
                        </Button>
                    </CardActions>
                }
            </Box>
            
            <CardMedia sx={styles.cardMedia}>
                <NextImage
                    src={`${process.env.NEXT_PUBLIC_API_URL}${url}`}
                    alt={alternativeText}
                    layout='responsive'
                    objectFit='cover'
                    width={1}
                    height={"100%"}
                />
            </CardMedia>
        </Card>
    )
};

export default ProductCard;