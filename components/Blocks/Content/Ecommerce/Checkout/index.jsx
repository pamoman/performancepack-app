/*
 * Content Block - Checkout
 */

import { useState, useEffect } from 'react';
import { useBasket, useLastOrder } from '@config/storage';
import CheckoutItem from './CheckoutItem';
import CheckoutSummary from './CheckoutSummary';
import CheckoutForm from './CheckoutForm';
import CheckoutPayment from './CheckoutPayment';
import { Grid } from '@mui/material';
import defaultSettings from './settings';

const calculateSum = (sum, item) => {
    return sum + item.quantity * item.price;
};

const Checkout = ({ paymentTypes = [], userSettings = {} }) => {
    const settings = { ...defaultSettings, ...userSettings };
    const [ basket, setBasket ] = useBasket();
    const [ lastOrder, setLastOrder ] = useLastOrder();
    const [ ordered, setOrdered ] = useState(null);
    const [ sum, setSum ] = useState(0);

    useEffect(() => {
        if (ordered) {
            setLastOrder({
                data: ordered?.createOrder?.data || {},
                sum
            });

            setBasket([]);
        }
    }, [ordered]);

    useEffect(() => {
        setSum(basket.reduce(calculateSum, 0));
    }, [basket]);

    return (
        <Grid container justifyContent="center" alignItems="center" spacing={4}>
            {basket && basket.length > 0 && basket.map(item => (
                <Grid item xs={12}>
                    <CheckoutItem basket={basket} setBasket={setBasket} settings={settings} {...item} />
                </Grid>
            ))}

            <Grid item xs={12}>
                <CheckoutSummary basket={basket} setBasket={setBasket} sum={sum} />
            </Grid>

            {!ordered && basket && basket.length > 0 &&
                <Grid item xs={12}>
                    <CheckoutForm basket={basket} setBasket={setBasket} sum={sum} setOrdered={setOrdered} />
                </Grid>
            }

            {ordered &&
                <Grid item xs={12}>
                    <CheckoutPayment basket={basket} setBasket={setBasket} paymentTypes={paymentTypes} order={lastOrder} />
                </Grid>
            }
        </Grid>
    )
};

export const PamoCheckout = (data) => {
    const { settings, swish, ...rest } = data;

    const props = {
        paymentTypes: [swish],
        userSettings: settings,
        ...rest
    };

    return (
        <Checkout {...props} />
    );
};

export default Checkout;