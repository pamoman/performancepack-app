/*
 * Content Block - Product
 */

import defaultSettings from './settings';
import styles from './styles';

const Product = ({ userSettings = {} }) => {
    return (
        <>
        </>
    )
};

export const PamoProduct = (data) => {
    const { settings, ...rest } = data;

    const props = {
        userSettings: settings,
        ...rest
    };

    return (
        <Product {...props} />
    )
};

export default Product;