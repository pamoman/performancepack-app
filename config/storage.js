/*
 * Storage
 */

import { useState, useEffect } from "react";

const BASKET = "basket";

const getStorageValue = (key, defaultValue) => {
    if (typeof window !== "undefined") {
        const data = localStorage.getItem(key);
        const value = JSON.parse(data);

        return value || defaultValue;
    }

    return defaultValue;
};

export const useBasket = () => {
    const [basket, setBasketState] = useState(() => {
        return getStorageValue(BASKET, [])
    });

    const setBasket = (basket) => {
        setBasketState([...basket]);
    };

    useEffect(() => {
        const data = JSON.stringify(basket);

        localStorage.setItem(BASKET, data);
    }, [basket]);

    return [ basket, setBasket ];
};