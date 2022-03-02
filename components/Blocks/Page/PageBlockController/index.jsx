/*
 * Page Block - Controller
 */

import * as Page from '@components/Blocks/Page';

const PamoPageBlockController = ({ __typename, ...rest }, index) => {
    const blocks = {
        'ComponentPageSeo': { Block: Page.Seo, props: rest },
        'ComponentPageHeading': { Block: Page.Heading, props: rest },
        'ComponentPageHero': { Block: Page.Hero, props: rest },
    }

    const { Block, props } = blocks[__typename] || {};

    return Block ? <Block key={`page-block-${index}`} {...props} /> : null;
};

export default PamoPageBlockController;