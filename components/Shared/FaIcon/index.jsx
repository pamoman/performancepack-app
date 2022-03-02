/*
 * Shared - FaIcon
 */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

/* Important for Next.js - Dont auto add css */
config.autoAddCss = false;

const kebabToCamel = (kebab) => {
    return kebab.replace(/-./g, match => match[1].toUpperCase());
};

const icons = (props) => ({
    fileLines: <FontAwesomeIcon icon={solid('file-lines')} {...props} />,
    houseCrack: <FontAwesomeIcon icon={solid('house-crack')} {...props} />,
    addressCard: <FontAwesomeIcon icon={solid('address-card')} {...props} />,
    cartShopping: <FontAwesomeIcon icon={solid('cart-shopping')} {...props} />
});

const FaIcon = ({ name = "file-lines", size = "lg", ...rest }) => {
    const camelName = kebabToCamel(name);

    const Icon = icons({ size, ...rest })[camelName];

    return Icon;
};

export default FaIcon;