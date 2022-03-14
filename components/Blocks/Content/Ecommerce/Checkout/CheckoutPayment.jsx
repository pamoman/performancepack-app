/*
 * Checkout - Payment
 */

import PaymentTypesController from './PaymentTypes';
import { Card } from '@mui/material';
import styles from './styles';

const CheckoutPayment = ({ paymentTypes = [], order }) => {
    const { sum, data } = order || {};
    const { id = "finns inte" } = data || {};
    const message = `Ordernummer ${id}`;

    return (
        paymentTypes.map(type => (
            <Card sx={styles.paymentType}>
                <PaymentTypesController type={type} sum={sum} message={message} />
            </Card>
        ))
    )
};

export default CheckoutPayment;