import React, { useState } from 'react';
import { CookiesProvider } from 'react-cookie';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '@config/apollo';
import { LayoutProvider, getLayout, MessageProvider, BasketProvider } from '@components/Contexts';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '@styles/createEmotionCache';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, GlobalStyles } from '@mui/material';
import theme, { globalStyle } from '@themes/dark';
import { Layout } from '@components/Global';
import { useBasket } from '@config/storage';

const clientSideEmotionCache = createEmotionCache();

const App = (props) => {
    const { Component, pageProps, emotionCache = clientSideEmotionCache } = props;
    const { apolloState, session, pageLayout, ...rest } = pageProps;
    const apolloClient = useApollo(apolloState);
    const [ message, setMessage ] = useState({ open: false, text: "", severity: "success" });
    const { basket, setBasket } = useBasket();
    const layout = getLayout(pageLayout);

    return (
        <CacheProvider value={emotionCache}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <GlobalStyles styles={globalStyle} />
                <CookiesProvider>
                    <ApolloProvider client={apolloClient}>
                        <MessageProvider value={{ message, setMessage }}>
                            <BasketProvider value={{ basket, setBasket }}>
                                <LayoutProvider value={layout}>
                                    <Layout>
                                        <Component {...rest} />
                                    </Layout>
                                </LayoutProvider>
                            </BasketProvider>
                        </MessageProvider>
                    </ApolloProvider>
                </CookiesProvider>
            </ThemeProvider>
        </CacheProvider>
    );
}

export default App;