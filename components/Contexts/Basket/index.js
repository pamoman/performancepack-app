/*
 * Context - Basket
 */

import { createContext, useContext } from 'react';

export const BasketContext = createContext();

export const BasketProvider = BasketContext.Provider;

export const useBasket = () => {
    return useContext(BasketContext);
};