/*
 * Cookie - config
 */

import { useCookies } from 'react-cookie';

export const MY_TOKEN = "myToken";

export const options = {
    sameSite: 'strict',
    maxAge: 30 * 60,
    path: '/',
    secure: true,
    httpOnly: true
};