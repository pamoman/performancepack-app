/*
 * Page
 */

import { PageController, ContentController } from '@components/Blocks';
import { Container } from '@mui/material';
import styles from './styles';

const Page = ({ page = [], content = [] }) => {
    return (
        <Container sx={styles.page} component="main">
            <PageController blocks={page} />
            <ContentController blocks={content} />
        </Container>
    )
};

export default Page;