/*
 * Shared - QRcode
 */

import QR from 'qrcode.react';
import defaultSettings from './settings';

const QRCode = ({ value = "", userSettings = {} }) => {
    const settings = { ...defaultSettings, ...userSettings };

    return (
        <QR value={value} {...settings} />
    )
};

export default QRCode;