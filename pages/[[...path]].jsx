/* 
 * Page
 */

import { initializeApollo, addApolloState } from '@config/client';
import { useQuery } from '@apollo/client';
import { PAGE, PAGES } from '@graphql/queries';
import { Page } from '@components/Global';
import utils from '@utils';

const PamoPage = ({ path }) => {
    /*---- Data query start ----*/
    const { loading, error, data } = useQuery(PAGE, { variables: { path } });

    error && console.log(`Error! ${error.message}`);
    /*---- Data query end ----*/

    const { pages: { data: pageData } } = data || {};
    const { attributes } = pageData[0] || {};

    return (
        <Page {...attributes} />
    );
};

export const getStaticPaths = async () => {
    const apolloClient = initializeApollo();

    const { data: { pages: { data } } } = await apolloClient.query({ query: PAGES });

    const paths = data.map(page => {
        const path = utils.pathToArray(page?.attributes?.path);

        return {
            params: { path }
        }
    });

    return {
        paths,
        fallback: false
    }
};

export const getStaticProps = async ({ params }) => {
    const apolloClient = initializeApollo();

    const path = utils.arrayToPath(params?.path);

    const { data: { pages: { data } } } = await apolloClient.query({ query: PAGE, variables: { path } });

    const pageLayout = data[0]?.attributes?.page;
  
    return addApolloState(apolloClient, {
        props: { pageLayout, path },
        revalidate: 60,
    });
};

export default PamoPage;