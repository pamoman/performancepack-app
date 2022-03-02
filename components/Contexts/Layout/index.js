/*
 * Context - Layout
 */

import { createContext, useContext } from 'react';

export const LayoutContext = createContext();

export const LayoutProvider = LayoutContext.Provider;

export const useLayout = () => {
    return useContext(LayoutContext);
}

export const getLayout = (pageLayout = []) => {
    const layout = {};

    pageLayout.forEach(block => {
        switch (block.__typename) {
            case 'ComponentPageHero':
                layout.hero = true;
                break;
            case 'ComponentPageHeading':
                layout.heading = true;
                break;
            default:
                break;
        }
    });

    return layout;
}