/*
 * Content Block - Product
 */

import { useState } from 'react';
import { useBasket } from '@config/cookies';
import { Grid, Box, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, IconButton, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import defaultSettings from './settings';
import styles from './styles';

const CheckoutItem = ({ id, product, quantity }) => {
    const [ basket, setBasket ] = useBasket();
    const [ itemQuantity, setItemQuantity ] = useState(quantity);
    const { name, price } = product;

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
        <TableRow key={id} sx={styles.table.row.data}>
            <TableCell>{name}</TableCell>
            <TableCell align="center">{price}:-</TableCell>
            <TableCell align="center">
                <IconButton aria-label="remove" color="primary">
                    <RemoveIcon onClick={() => itemQuantity > 0 && updateQuantity(itemQuantity - 1)} />
                </IconButton>

                <TextField
                    sx={styles.table.quantity}
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
            </TableCell>
            <TableCell align="center">{price * itemQuantity}:-</TableCell>
        </TableRow>
    )
};

export default CheckoutItem;