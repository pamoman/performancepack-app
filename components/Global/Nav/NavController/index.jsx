/*
 * Nav Controller
 */

import { useLayout } from '@components/Contexts';
import { NavMenu, NavLink, NavDrawer, NavBottom } from '@components/Global/Nav';

const PamoNavController = ({ type, ...props }) => {
    const layout = useLayout();

    let Block;

    switch (type) {
        case "link":
            Block = NavLink;
            break;
        case "menu":
            Block = NavMenu;
            break;
        case "drawer":
            Block = NavDrawer;
            break;
        case "bottom":
            Block = NavBottom;
            break;
        default:
            Block = NavLink;
            break;
    }

    return (
        <Block {...props} />
    );
};

export default PamoNavController;