/*
 * Product - Card
 */

import { useState } from 'react';
import NextImage from 'next/image';
import { useBasket } from '@config/cookies';
import { Box, Card, CardHeader, CardContent, CardMedia, CardActions, Typography, TextField, Button, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import styles from './styles';

const ProductCard = ({ id, product, settings }) => {
    const { name, description, price, image: { data: { attributes: image } } } = product || {};
    const { alternativeText, caption, formats } = image;
    const { url } = formats?.medium || formats?.small;
    const [ amount, setAmount ] = useState(0);
    const [ basket, setBasket ] = useBasket();

    const updateAmount = (e) => {
        const currentAmount = parseInt(e.target.value);
    
        !isNaN(currentAmount) && setAmount(currentAmount);
    };

    const updateBasket = () => {
        const currentAmount = parseInt(amount);

        if (!basket) {
            setBasket([{
                product,
                amount: currentAmount
            }]);
        } else {
            const existingItem = basket.find(item => item.id === product.id);

            if (existingItem) {
                existingItem.amount += currentAmount;
            } else {
                basket.push({
                    product,
                    amount: currentAmount
                })
            }

            setBasket(basket);
        }

        setAmount(0);
    };

    return (
        <Card sx={styles.card}>
            <Box sx={{ display: "flex", flexDirection: "column", order: { xs: 2, sm: 1 }, flexGrow: 1 }}>
                <CardHeader
                    sx={{ display: "flex" }}
                    title={
                        <Typography component="h6" variant="h5" color="primary.main">
                            {name}
                        </Typography>
                    }
                    subheader={
                        <Typography variant="subtitle1" component="div" color="primary.main">
                            {description}
                        </Typography>
                    }
                />

                <CardContent sx={{ display: 'flex', justifyContent: "center", alignItems: 'center', flexGrow: 1, p: 0 }}>
                    <Typography variant="h2" color="primary.main">
                        {price}:-
                    </Typography>
                </CardContent>

                <CardActions sx={{ display: "flex", flexDirection: "column", p: 2 }}>
                    <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
                        <IconButton aria-label="remove" color="primary">
                            <RemoveIcon onClick={() => amount > 0 && setAmount(amount - 1)} />
                        </IconButton>

                        <TextField
                            sx={styles.textfield}
                            id="product-amount"
                            type="number"
                            size="small"
                            inputProps={{ min: "1", max: "100", step: "1" }}
                            value={amount}
                            onChange={updateAmount}
                            required
                            variant="outlined"
                        />

                        <IconButton aria-label="add" color="primary">
                            <AddIcon onClick={() => setAmount(amount + 1)} />
                        </IconButton>
                    </Box>

                    <Button
                        sx={styles.greenButton}
                        color="primary"
                        type="submit"
                        size="small"
                        variant="contained"
                        startIcon={<AddCircleIcon />}
                        onClick={() => amount && updateBasket()}
                    >
                        Lägg till
                    </Button>
                </CardActions>
            </Box>
            
            <CardMedia sx={{ display: "flex", flexDirection: "column", order: { xs: 1, sm: 2 }, width: { xs: "100%", sm: "60%" }, height: "100%" }}>
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