/*
 * Product - Card
 */

import { useState } from 'react';
import NextImage from 'next/image';
import { useBasket } from '@config/cookies';
import { Grid, Box, Card, CardContent, CardMedia, CardActions, Typography, TextField, Button, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import styles from './styles';

const ProductCard = ({ id, product, settings }) => {
    const { name, description, price, image: { data: { attributes: image } } } = product || {};
    const { alternativeText, caption, formats } = image;
    const { url } = formats?.medium || formats?.small;
    const [ amount, setAmount ] = useState(0);
    const [ basket, setBasket, removeBasket ] = useBasket();

    const updateAmount = (e) => {
        const currentAmount = parseInt(e.target.value);
    
        !isNaN(currentAmount) && setAmount(currentAmount);
    };

    const updateBasket = () => {
        const currentAmount = parseInt(amount);

        if (!basket) {
            const item = {
                product,
                amount: currentAmount
            };

            setBasket([item]);
        } else {
            const existingItem = basket.find(item => item.id === product.id);

            if (existingItem) {
                existingItem.amount += currentAmount;

                setBasket(basket);
            }
        }

        setAmount(0);
    };

    return (
        <Card sx={styles.card}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ width: 300, height: 200, flex: '1 0 auto' }}>
                    <Typography component="h6" variant="h5">
                        {name}
                    </Typography>

                    <Typography variant="subtitle1" component="div">
                        {description}
                    </Typography>
                </CardContent>

                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                    <IconButton aria-label="remove" color="primary">
                        <RemoveIcon onClick={() => amount > 0 && setAmount(amount - 1)} />
                    </IconButton>

                    <TextField
                        sx={styles.textfield}
                        id="product-amount"
                        label="Antal"
                        type="number"
                        inputProps={{ min: "1", max: "100", step: "1" }}
                        value={amount}
                        onChange={updateAmount}
                        required
                        variant="filled"
                    />

                    <IconButton aria-label="add" color="primary">
                        <AddIcon onClick={() => setAmount(amount + 1)} />
                    </IconButton>

                    <Button
                        sx={styles.greenButton}
                        color="primary"
                        type="submit"
                        variant="contained"
                        startIcon={<AddCircleIcon />}
                        onClick={updateBasket}
                    >
                        Lägg till
                    </Button>
                </Box>
            </Box>

            <CardMedia sx={{ flex: '1 0 auto' }}>
                <NextImage
                    src={`${process.env.NEXT_PUBLIC_API_URL}${url}`}
                    alt={alternativeText}
                    layout='responsive'
                    objectFit='cover'
                    width={1}
                    height={1}
                />
            </CardMedia>
        </Card>
    )
};

export default ProductCard;