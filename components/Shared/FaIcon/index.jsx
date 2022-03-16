/*
 * Shared - FaIcon
 */

import { useBasket } from '@components/Contexts';
import { Badge } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

/* Important for Next.js - Dont auto add css */
config.autoAddCss = false;

const icons = (props) => ({
    fileLines: <FontAwesomeIcon icon={solid('file-lines')} {...props} />,
    houseCrack: <FontAwesomeIcon icon={solid('house-crack')} {...props} />,
    addressCard: <FontAwesomeIcon icon={solid('address-card')} {...props} />,
    cartShopping: <FontAwesomeIcon icon={solid('cart-shopping')} {...props} />,
    shop: <FontAwesomeIcon icon={solid('shop')} {...props} />,
});

const kebabToCamel = (kebab) => {
    return kebab.replace(/-./g, match => match[1].toUpperCase());
};

const FaIcon = ({ name = "file-lines", size = "lg", ...rest }) => {
    const camelName = kebabToCamel(name);
    const Icon = icons({ size, ...rest })[camelName];

    let Block;

    switch (name) {
        case 'cart-shopping':
            const { basket } = useBasket() || {};
            const basketContents = basket && basket.length > 0 && basket.length;

            if (basketContents) {
                Block = <Badge badgeContent={basket.length} color='error' children={Icon} />
            } else {
                Block = Icon;
            }

            break;
        default:
            Block = Icon;
            break;
    }

    return Block;
};

export default FaIcon;