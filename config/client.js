/*
 * Apollo client
 */

import { useMemo } from "react";
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from "@apollo/client/link/context";

let apolloClient;

const createApolloClient = (jwt) => {
    const httpLink = createHttpLink({
        uri: `${process.env.NEXT_PUBLIC_API_URL}/graphql`,
        credentials: 'same-origin'
    });

    const authLink = setContext(async (_, { headers }) => {
        return {
            headers: {
                ...headers,
                authorization: jwt ? `Bearer ${jwt}` : "",
            }
        }
    });

    return new ApolloClient({
        ssrMode: typeof window === "undefined",
        link: authLink.concat(httpLink),
        cache: new InMemoryCache()
    });
};

/* Merge the client cache if there is any */
export const initializeApollo = (initialState = null, jwt = null) => {
    const _apolloClient = apolloClient ?? createApolloClient(jwt);

    if (initialState) {
      const existingCache = _apolloClient.extract();

      _apolloClient.cache.restore({ ...existingCache, ...initialState });
    }

    // For SSG and SSR always create a new Apollo Client
    if (typeof window === "undefined") return _apolloClient;

    // Create the Apollo Client once in the client
    if (!apolloClient) apolloClient = _apolloClient;

    return _apolloClient;
};

/* Add the current Apollo Client state to the page props */
export const addApolloState = (apolloClient, pageProps) => {
    if (pageProps?.props) {
        pageProps.props.apolloState = apolloClient.cache.extract();
    }

    return pageProps;
};

/* Provide the most up to date Apollo Client state */
export const useApollo = (state) => {
    const store = useMemo(() => initializeApollo(state), [state]);

    return store;
};