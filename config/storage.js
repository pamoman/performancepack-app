/*
 * Storage
 */

const BASKET = "basket";

export const useBasket = () => {
    if (typeof window !== "undefined") {
        const basket = localStorage.getItem(BASKET);

        const setBasket = (basket) => localStorage.setItem(BASKET, JSON.stringify(basket));

        const removeBasket = () => localStorage.removeItem(BASKET);

        return { basket: JSON.parse(basket) || [], setBasket, removeBasket };
    }

    return {};
};