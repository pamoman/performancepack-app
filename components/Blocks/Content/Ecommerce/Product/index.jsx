/*
 * Content Block - Product
 */

import ProductCard from './ProductCard';
import { Grid } from '@mui/material';
import defaultSettings from './settings';
import styles from './styles';

const Product = ({ products, userSettings = {} }) => {
    const settings = { ...defaultSettings, ...userSettings };

    return (
        <Grid container justifyContent="center" alignItems="center" spacing={4}>
            {products && products.map(product => (
                <Grid key={product.id} item xs={12}>
                    <ProductCard
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