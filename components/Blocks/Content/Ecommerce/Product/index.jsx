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
            {products.map(product => (
                <Grid item xs={12} lg={products.length > 1 && 6}>
                    <ProductCard id={product?.id} product={product?.attributes} settings={settings} />
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