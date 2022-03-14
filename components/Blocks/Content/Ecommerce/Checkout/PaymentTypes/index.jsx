/*
 * PaymentTypes - Controller
 */

import Swish from './Swish';

const PaymentTypesController = ({ type, ...payment }) => {
    let PaymentType;
    let props;

    const { __typename, ...rest } = type;

    switch (__typename) {
        case "ComponentEcommerceSwish":
            PaymentType = Swish;

            const { sum, message } = payment;

            props = {
                sum,
                message,
                ...rest
            };
            break;
        default:
            break;
    }

    return (PaymentType
        ? <PaymentType {...props} />
        : null
    );
};

export default PaymentTypesController;