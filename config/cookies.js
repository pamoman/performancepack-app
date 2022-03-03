/*
 * Cookie
 */

import { useCookies } from 'react-cookie';

export const BASKET = "basket";

export const useBasket = () => {
    const [cookies, setCookie, removeCookie] = useCookies([BASKET]);

    const setBasket = (basket) => setCookie(BASKET, basket, options);

    const removeBasket = () => removeCookie(BASKET, options);

    return [cookies[BASKET], setBasket, removeBasket];
};

export const options = {
    sameSite: 'strict',
    maxAge: 30 * 60,
    path: '/',
    secure: true,
    httpOnly: false
};