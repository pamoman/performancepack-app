/*
 * Content Block - Product
 */

import { useBasket } from '@config/storage';
import ProductCard from './ProductCard';
import { Grid } from '@mui/material';
import defaultSettings from './settings';
import styles from './styles';

const Product = ({ products, userSettings = {} }) => {
    const settings = { ...defaultSettings, ...userSettings };
    const { basket, setBasket } = useBasket();

    return (
        <Grid container justifyContent="center" alignItems="center" spacing={4}>
            {products.map(product => (
                <Grid key={product.id} item xs={12}>
                    <ProductCard
                        basket={basket}
                        setBasket={setBasket}
                        settings={settings}
                        {...product}
                    />
                </Grid>
            ))}
        </Grid>
    )
};

export const PamoProduct = (data) => {
    const { products: { data: products }, settings, ...rest } = data;

    const props = {
        products,
        userSettings: settings,
        ...rest
    };

    return (
        <Product {...props} />
    )
};

export default Product;