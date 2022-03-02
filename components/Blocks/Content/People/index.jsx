/*
 * Content Block - People
 */

import PersonCard from './PersonCard';
import { Grid } from '@mui/material';

const People = ({ people, userSettings = {} }) => {
    return (
        <Grid container spacing={4} justifyContent="flex-start">
            {people.map((person, i) => {
                return (
                    <Grid key={`staff-card-${i}`} item xs={12} md={6}>
                        <PersonCard person={person} userSettings={userSettings} />
                    </Grid>
                )
            })}
        </Grid>
    )
};

export const PamoPeople = (data) => {
    const { people, settings, ...rest } = data;

    const props = {
        people,
        userSettings: settings,
        ...rest
    };

    return (
        <People {...props} />
    )
};

export const PamoStaff = (data) => {
    const { employees, settings, ...rest } = data;

    const staff = employees.map(employee => employee?.users_permissions_user?.data?.attributes || {});

    const props = {
        people: staff,
        userSettings: settings,
        ...rest
    };

    return (
        <People {...props} />
    )
};

export {
    PersonCard
};

export default People;