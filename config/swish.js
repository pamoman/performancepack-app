/*
 * Swish - config
 */

import { v4 as uuidv4 } from 'uuid';
import { readFileSync } from "fs"
import { Agent } from "https"
import fetch from "node-fetch"

const instructionId = uuidv4();

const ROOT = process.cwd();

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

const cert = {
    cert: readFileSync(`${ROOT}/data/swish/Swish_Merchant_TestCertificate_1234679304.pem`, { encoding: 'utf8' }),
    key: readFileSync(`${ROOT}/data/swish/Swish_Merchant_TestCertificate_1234679304.key`, { encoding: 'utf8' }),
    ca: readFileSync(`${ROOT}/data/swish/Swish_TLS_RootCA.pem`, { encoding: 'utf8' }),
    passphrase: "swish",
};

const options = {
    agent: new Agent({ ...cert, minVersion: "TLSv1.2", maxVersion: "TLSv1.2" }),
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
        'Content-Type': 'application/json'
    },
};

export const pay = () => {
    fetch(url, options)
        .then(res => res.json())
        .then(data => console.log("Success", data))
        .catch(err => console.log("Error", err));
};