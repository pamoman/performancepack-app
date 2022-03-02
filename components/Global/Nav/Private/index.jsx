/*
 * Private Nav
 */

import Link from 'next/link';
import { useSession } from "next-auth/react";
import { useRouter } from 'next/router';
import { Box, Typography, Avatar } from '@mui/material';

const PrivateNav = ({ children, href, target }) => {
    const router = useRouter();
    const { data: session } = useSession();
    const isActive = activePath(href, router);
    const classes = ["private-nav"];

    const activePath = (href, router) => {
        if (href === "/" && router.pathname === "/") return true;
    
        if (href === "/" && router.pathname != "/") return false;
    
        return router.pathname.includes(href);
    };

    const NavIcon = (icon, name) => {
        return (
            <Box sx={styles.navIcon}>
                <Typography>

                </Typography>

                <Typography variant="button">
                    {name}
                </Typography>
            </Box>
        )
    };

    const Me = () => {
        return (
            <Avatar alt={session?.user?.name} src={session?.user?.image} />
        )
    };

    const signInSite = (e) => {
        e.preventDefault();
        signIn('google');
    };

    const signOutSite = (e) => {
        e.preventDefault();
        signOut();
    };

    isActive && classes.push("active-nav");

    return session
        ?
            <Link className={classes.join(" ")} href={href} target={target} passHref>
                {children}
            </Link>
        :   
            null;
};

export default PrivateNav;
