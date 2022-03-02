/*
 * NavLink
 */

import { Link as PamoLink } from '@components/Shared';
import { useRouter } from 'next/router';
import { Box } from '@mui/material';
import styles from './styles';

const isActive = (href) => {
    const router = useRouter();

    return router.asPath === href ? "active" : null;
};

const PamoNavLink = ({ links = [], ...props }) => (
    <Box sx={styles.navLink} {...props}>
        {links.map((link, i) => {
            const { path, label } = link;

            return (
                <PamoLink key={`nav-link-${i}`} className={isActive(path)} href={path} passHref>
                    {label}
                </PamoLink>
            )
        })}
    </Box>
);

export default PamoNavLink;