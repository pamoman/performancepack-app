/*
 * Swish - config
 */

import { v4 as uuidv4 } from 'uuid';
import https from 'https';
import axios from 'axios';
import { readFileSync } from "fs";

const ROOT = process.cwd();

// getUUID is a custom function to generate a UUID
const instructionId = uuidv4();

const url = `https://mss.cpc.getswish.net/swish-cpcapi/api/v2/paymentrequests/${instructionId}`;

const data = {
    payeePaymentReference: '0123456789',
    callbackUrl: 'https://dev.pamosystems.com/api/swish',
    payeeAlias: '1234679304',
    currency: 'SEK',
    payerAlias: '46761021376',
    amount: '100',
    message: 'Kingston USB Flash Drive 8 GB'
};  

const httpsAgent = new https.Agent({
    cert: readFileSync(`${ROOT}/data/swish/Swish_Merchant_TestCertificate_1234679304.pem`, { encoding: 'utf8' }),
    key: readFileSync(`${ROOT}/data/swish/Swish_Merchant_TestCertificate_1234679304.key`, { encoding: 'utf8' }),
    ca: readFileSync(`${ROOT}/data/swish/Swish_TLS_RootCA.pem`, { encoding: 'utf8' }),
    passphrase: "swish",
    minVersion: "TLSv1.2",
    maxVersion: "TLSv1.2"
});

// Using Axios as HTTP library
const client = axios.create({
    httpsAgent,
    headers: {
        "Content-Type": "application/json"
    }
});

export const pay = () => {
    client.put(url, data)
        .then(res => console.log("Success"))
        .catch(err => console.log("Error"));
};
