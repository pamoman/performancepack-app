/*
 * NavDrawer
 */

import { useState } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { FaIcon as Icon } from '@components/Shared';
import { Box, Button, IconButton, Drawer, Divider, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';
import Collapse from '@mui/material/Collapse';
import styles from './styles';

const isActive = (href) => {
    const router = useRouter();

    return router.asPath === href ? "active" : null;
};

const NavList = ({ link, sub = false }) => {
    const { node = "", path = "", label = node, icon, children = [] } = link;

    const [open, setOpen] = useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <List key={`nav-drawer-${node}`} component="div" disablePadding>
            <ListItemButton sx={() => styles.navList.collapsed(sub)} disabled={!path && true}>
                {path ?
                    <NextLink
                        href={path}
                        passHref
                    >
                        <Button>
                            <NavListItem path={path} label={label} icon={icon} />
                        </Button>
                    </NextLink>

                    :

                    <NavListItem path={path} label={label} icon={icon} />
                }

                {children && children.length > 0 &&
                    <>
                        {open
                            ? <ExpandLess sx={styles.navList.link.icon} onClick={handleClick} />
                            : <ExpandMore sx={styles.navList.link.icon} onClick={handleClick} />
                        }
                    </>
                }
            </ListItemButton>

            {children && children.length > 0 && (
                children.map((child, i) => (
                    <NavListCollapsed open={open} index={i}>
                        <NavList link={child} sub={true} />
                    </NavListCollapsed>
                ))
            )}
        </List>
    )
};

const NavListCollapsed = ({ index, open, children }) => {
    return (
        <Collapse key={`nav-sub-drawer-${index}`} in={open} timeout="auto" unmountOnExit>
            {children}
        </Collapse>
    )
};

const NavListItem = ({ path, label, icon }) => {
    const active = isActive(path);
    const { name: IconName } = icon || {};

    return (
        <>
            <ListItemIcon className={`${active}`} sx={styles.navList.link.icon}>
                <Icon name={IconName} size='xl' />
            </ListItemIcon>

            <ListItemText className={`${active}`} sx={styles.navList.link.text}>
                {label}
            </ListItemText>
        </>
    )
};

const PamoNavDrawer = ({ links = [], open, toggleOpen, ...props }) => {
    return (
        <Drawer
            anchor="left"
            open={open}
            onClose={toggleOpen(false)}
            onOpen={toggleOpen(true)}
        >
            <Box sx={styles.drawer}>
                <IconButton
                    sx={styles.drawer.icon}
                    onClick={toggleOpen(false)}
                >
                    <CloseIcon />
                </IconButton>

                <Divider sx={styles.drawer.divider} />

                <Box sx={styles.navList} {...props}>
                    {links.map(link => {
                        return (
                            <NavList link={link} />
                        )
                    })}
                </Box>
            </Box>
        </Drawer>
    );
};

export default PamoNavDrawer;