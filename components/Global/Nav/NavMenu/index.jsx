/*
 * NavButton
 */

import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { Box, MenuItem, Button } from '@mui/material';
import HoverMenu from 'material-ui-popup-state/HoverMenu';
import { usePopupState, bindHover, bindMenu } from 'material-ui-popup-state/hooks';
import styles from './styles';

const isActive = (href) => {
    const router = useRouter();

    return router.asPath === href ? "active" : null;
};

const NavMenu = ({ node = "", path = "", label = node, children = [] }) => {
    const active = isActive(path);
    const popupState = usePopupState({
        variant: 'popover',
        popupId: `Nav-Menu-${node}`,
    });

    return (
        <Box key={`nav-menu-${node}`}>
            {children && children.length > 0 ?
                path ?
                    <NextLink href={path} passHref>
                        <Button
                            className={active}
                            sx={styles.navMenu.button}
                            {...bindHover(popupState)}
                        >
                            {label}
                        </Button>
                    </NextLink>

                    :

                    <Button
                        className={active}
                        sx={styles.navMenu.button}
                        {...bindHover(popupState)}
                    >
                        {label}
                    </Button>
                
                :

                path ?
                    <NextLink href={path} passHref>
                        <Button
                            className={active}
                            sx={styles.navMenu.button}
                        >
                            {label}
                        </Button>
                    </NextLink>

                    :

                    <Button
                        className={active}
                        sx={styles.navMenu.button}
                    >
                        {label}
                    </Button>
            }

            {children && children.length > 0 &&
                <NavSubMenu links={children} popupState={popupState} />
            }
        </Box>
    )
};

const NavSubMenu = ({ links, popupState, av = "bottom", ah = "left", tv = "top", th = "left" }) => {
    const subPopupState = usePopupState({
        variant: 'popover',
        popupId: `Sub-Nav-Menu`,
    });

    return (
        <HoverMenu
            sx={styles.subMenu}
            {...bindMenu(popupState)}
            anchorOrigin={{ vertical: av, horizontal: ah }}
            transformOrigin={{ vertical: tv, horizontal: th }}
        >
            {links && links.length > 0 && links.map((link, i) => {
                const { node, path, label = node, children } = link || {};

                return (
                    <Box key={`nav-sub-menu-${node}-${i}`}>
                        {children && children.length > 0 ?
                            path ?
                                <NextLink href={path} passHref>
                                    <MenuItem sx={styles.menuItem} {...bindHover(subPopupState)}>{label}</MenuItem>
                                </NextLink>

                                :

                                <MenuItem sx={styles.menuItem} {...bindHover(subPopupState)}>{label}</MenuItem>

                            :

                            path ?
                                <NextLink href={path} passHref>
                                    <MenuItem sx={styles.menuItem}>{label}</MenuItem>
                                </NextLink>

                            :

                            <MenuItem sx={styles.menuItem}>{label}</MenuItem>
                        }

                        {children && children.length > 0 &&
                            <NavSubMenu links={children} popupState={subPopupState} />
                        }
                    </Box>
                )
            })}
        </HoverMenu>
    )
};

const PamoNavMenu = ({ links = [], ...props }) => {
    return (
        <Box sx={styles.navMenu} {...props}>
            {links.map(link => {
                const { node, path, label = node, children } = link;

                return (
                    <NavMenu node={node} path={path} label={label} children={children} />
                )
            })}
        </Box>
    )
};

export default PamoNavMenu;