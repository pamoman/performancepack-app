/*
 * NavBottom
 */

import { Link as PamoLink, FaIcon as Icon } from '@components/Shared';
import { useRouter } from 'next/router';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import styles from './styles';

const isActive = (href) => {
    const router = useRouter();

    return router.asPath === href ? "active" : null;
};

const PamoNavBottom = ({ links = [], ...props }) => {
    return (
        <BottomNavigation sx={styles.bottomNav} {...props}>
            {links.map((link, i) => {
                const { path, label, icon } = link;
                const { name: IconName } = icon || {};

                return (
                    <BottomNavigationAction
                        key={`nav-bottom-link-${i}`}
                        className={isActive(path)}
                        sx={styles.bottomNav.link}
                        component={PamoLink}
                        href={path}
                        passHref
                        label={label}
                        icon={<Icon name={IconName} size='xl' />}
                    />
                )
            })}
        </BottomNavigation>
)};

export default PamoNavBottom;