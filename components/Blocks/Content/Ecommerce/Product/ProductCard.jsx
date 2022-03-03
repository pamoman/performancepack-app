/*
 * Product - Card
 */

import { useState } from 'react';
import NextImage from 'next/image';
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

    console.log(product);
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
                        onChange={(e) => !isNaN(parseInt(e.target.value)) && setAmount(parseInt(e.target.value))}
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