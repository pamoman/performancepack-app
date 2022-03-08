/*
 * Storage
 */

import { useState, useEffect } from "react";

const BASKET = "basket";

export const useBasket = () => {
    if (typeof window !== "undefined") {
        const [basket, setBasket] = useState(() => {
            const data = localStorage.getItem(BASKET);
            const value = JSON.parse(data);

            return value || [];
        });

        useEffect(() => {
            const data = JSON.stringify(basket);

            localStorage.setItem(BASKET, data);
        }, [basket]);

        return [ basket, setBasket ];
    }

    return [];
};