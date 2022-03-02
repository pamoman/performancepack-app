/*
 * Content Block - Controller
 */

import * as Content from '@components/Blocks/Content';
import { Box } from '@mui/material';

const PamoContentBlockController = ({ __typename, ...rest }, index) => {
    const blocks = {
        'ComponentEcommerceProducts': () => {
            const { settings: productSettings, ...product } = rest;

            const props = {
                ...product,
                userSettings: productSettings
            };
        
            return {
                Block: Content.Product,
                props
            }
        },
        'ComponentContentHeading': () => {
            const { settings: headingSettings, ...heading } = rest;

            const props = {
                ...heading,
                userSettings: headingSettings
            };
        
            return {
                Block: Content.Heading,
                props
            }
        },
        'ComponentContentWysiwyg': () => {
            const { content } = rest;

            const props = {
                content
            };
        
            return {
                Block: Content.Wysiwyg,
                props
            }
        },
        'ComponentContentImage': () => {
            const { image: { data: { attributes: image } }, settings: imageSettings } = rest;

            const props = {
                ...image,
                userSettings: imageSettings
            };
        
            return {
                Block: Content.Image,
                props
            }
        },
        'ComponentContentSlideshow': () => {
            const { settings: slideshowSettings, images: { data: images } } = rest;

            const props = {
                images,
                userSettings: slideshowSettings
            };
        
            return {
                Block: Content.Slideshow,
                props
            }
        },
        'ComponentContentGallery': () => {
            const { images: { data: gallery }, settings: gallerySettings, ...galleryOptions } = rest;

            const props = {
                gallery,
                userSettings: gallerySettings,
                userOptions: galleryOptions
            };
        
            return {
                Block: Content.Gallery,
                props
            }
        },
        'ComponentContentVideo': () => {
            const { settings: videoSettings, video: { data: { attributes: video } } } = rest;

            const props = {
                ...video,
                userSettings: videoSettings
            };
        
            return {
                Block: Content.Video,
                props
            }
        },
        'ComponentContentStream': () => {
            const { settings: streamSettings, ...stream } = rest;
            
            const props = {
                ...stream,
                streamSettings
            };
        
            return {
                Block: Content.Stream,
                props
            }
        },
        'ComponentContentPdf': () => {
            const { file: { data: { attributes: file } } } = rest;

            const props = {
                ...file
            };
        
            return {
                Block: Content.PDF,
                props
            }
        },
        'ComponentContentCompany': () => {
            const { settings: companySettings } = rest;

            props = {
                userSettings: companySettings
            };

            return {
                Block: Content.Company,
                props
            }
        },
        'ComponentContentPeople': () => {
            const { people, settings: peopleSettings } = rest;

            const props = {
                people,
                userSettings: peopleSettings
            };
        
            return {
                Block: Content.People,
                props
            }
        },
        'ComponentContentStaff': () => {
            const { employees, settings: staffSettings } = rest;

            const staff = employees.map(employee => employee?.users_permissions_user?.data?.attributes || {});
        
            const props = {
                people: staff,
                userSettings: staffSettings,
            };
        
            return {
                Block: Content.People,
                props
            }
        },
        'ComponentContentMap': () => {
            const { settings: mapSettings, ...map } = rest;

            const props = {
                ...map,
                userSettings: mapSettings
            };
        
            return {
                Block: Content.Map,
                props
            }
        },
        'ComponentContentTable': () => {
            const { settings: tableSettings, ...table } = rest;

            const props = {
                ...table,
                userSettings: tableSettings
            };
        
            return {
                Block: Content.Table,
                props
            }
        },
    };

    const currentBlock = blocks[__typename] || null;

    const { Block, props } = currentBlock ? currentBlock() : {};

    return Block
        ?
            <Box key={`content-block-${index}`} pb={4} component="div">
                <Block {...props} />
            </Box>
        :
            null;
};

export default PamoContentBlockController;