/*
 * Content Block - Controller
 */

import * as Content from '@components/Blocks/Content';
import { Box } from '@mui/material';

const PamoContentBlockController = ({ __typename, ...rest }, index) => {
    const blocks = {
        /* 'ComponentEcommerceProducts': { Block: Content.Product, props: rest }, */
        'ComponentContentHeading': { Block: Content.Heading, props: rest },
        'ComponentContentWysiwyg': { Block: Content.Wysiwyg, props: rest },
        'ComponentContentImage': { Block: Content.Image, props: rest },
        'ComponentContentSlideshow': { Block: Content.Slideshow, props: rest },
        'ComponentContentGallery': { Block: Content.Gallery, props: rest },
        'ComponentContentVideo': { Block: Content.Video, props: rest },
        'ComponentContentStream': { Block: Content.Stream, props: rest },
        'ComponentContentPdf': { Block: Content.PDF, props: rest },
        'ComponentContentCompany': { Block: Content.Company, props: rest },
        'ComponentContentPeople': { Block: Content.People, props: rest },
        'ComponentContentStaff': { Block: Content.Staff, props: rest },
        'ComponentContentMap': { Block: Content.Map, props: rest },
        'ComponentContentTable': { Block: Content.Table, props: rest },
    };

    const { Block, props } = blocks[__typename] || {};

    return Block
        ?
            <Box key={`content-block-${index}`} pb={4} component="div">
                <Block {...props} />
            </Box>
        :
            null;
};

export default PamoContentBlockController;