/*
 * API - Swish
 */

import { pay } from '@config/swish';

const handler = (req, res) => {
    pay();
    res.status(200).json({ name: 'John Doe' })
};

export default handler;