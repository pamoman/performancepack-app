/*
 * Checkout - Form
 */

import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useOrder } from '@graphql/mutations';
import { Grid, Box, Typography, Card, CardHeader, Avatar, CardContent, FormControl, Button, TextField } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import styles from './styles';

const CheckoutForm = ({ basket = [], setBasket, sum, setOrdered }) => {
    const [ order, setOrder ] = useOrder();
    const [ firstname, setFirstname ] = useState("");
    const [ lastname, setLastname ] = useState("");
    const [ email, setEmail ] = useState("");

    useEffect(() => {
        order && setOrdered(order);
    }, [order]);

    const makeOrder = (e) => {
        e.preventDefault();
        
        const variables = {
            data: {
                firstname,
                lastname,
                email,
                total: sum,
                items: basket.map(item => {
                    const { id: product, name, price, quantity } = item;

                    return {
                        name,
                        price,
                        quantity,
                        subtotal: price * quantity,
                        product
                    }
                })
            }
        };

        setOrder({ variables });
    };

    return (
        <Card sx={styles.card}>
            <CardHeader
                sx={styles.cardHeader}
                avatar={
                    <Avatar>
                        <AccountCircleIcon color="secondary" fontSize="large" />
                    </Avatar>
                }
                title={
                    <Typography component="div" variant="h4">Personuppgifter</Typography>
                }
            />

            <CardContent sx={styles.form.CardContent}>
                <Box component="form" onSubmit={makeOrder}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <TextField
                                sx={styles.form.textfield}
                                id="firstname"
                                label="Förnamn"
                                type="text"
                                value={firstname}
                                onChange={(e) => setFirstname(e.target.value)}
                                required
                                fullWidth
                                color="secondary"
                                variant="filled"
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField
                                sx={styles.form.textfield}
                                id="lastname"
                                label="Efternamn"
                                type="text"
                                value={lastname}
                                onChange={(e) => setLastname(e.target.value)}
                                required
                                fullWidth
                                color="secondary"
                                variant="filled"
                            />
                        </Grid>
                        
                        <Grid item xs={12}>
                            <TextField
                                sx={styles.form.textfield}
                                id="email"
                                label="E-post"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                fullWidth
                                color="secondary"
                                variant="filled"
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Box display="flex" justifyContent="flex-end">
                                <Button
                                    sx={styles.form.orderButton}
                                    color="primary"
                                    type="submit"
                                    size="small"
                                    variant="contained"
                                    startIcon={<AddCircleIcon />}
                                >
                                    Lägg order
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </CardContent>
        </Card>
    )
};

export default CheckoutForm;
