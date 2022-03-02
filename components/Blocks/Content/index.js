/*
 * Content Blocks
 */

import ContentController from './ContentController'
import ContentBlockController from './ContentBlockController';
import { PamoHeading as Heading } from './Heading';
import { PamoImage as Image } from './Image';
import { PamoPDF as PDF } from './PDF';
import { PamoSlideshow as Slideshow } from './Slideshow';
import { PamoGallery as Gallery } from './Gallery';
import { PamoStream as Stream } from './Stream';
import { PamoVideo as Video } from './Video';
import { PamoWysiwyg as Wysiwyg } from './Wysiwyg';
import { PamoCompany as Company } from './Company';
import { PamoMap as Map } from './Map';
import { PamoTable as Table } from './Table';
import { PamoPeople as People, PamoStaff as Staff, PersonCard } from './People';
import { PamoProduct as Product } from './Ecommerce';

export {
    ContentController,
    ContentBlockController,
    Heading,
    Image,
    PDF,
    Slideshow,
    Gallery,
    Stream,
    Video,
    Wysiwyg,
    Company,
    Map,
    Table,
    People,
    Staff
};

export {
    Product
};

export {
    PersonCard
};