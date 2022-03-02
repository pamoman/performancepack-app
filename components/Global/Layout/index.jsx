/*
 * Layout
 */

import { Box } from '@mui/material';
import { ApolloHeader, ZeusHeader, ApolloFooter, ZeusFooter, MessageSystem } from '@components/Global';
import { globals, navTree, company } from '@data/Global';

const Layout = ({ children }) => {
    const { header, footer } = globals;
    const Header = ApolloHeader;
    const Footer = ApolloFooter;

    return (
        <Box sx={{ position: "relative" }}>
            <Header {...header} links={navTree} company={company} />
            {children}
            <MessageSystem />
            <Footer {...header} {...footer} links={navTree} company={company} />
        </Box>
    )
};

export default Layout;