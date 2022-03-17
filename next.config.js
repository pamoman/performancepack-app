/**
 * Next config
 */

 const withPWA = require('next-pwa');

 module.exports = withPWA({
    reactStrictMode: true,
    images: {
        domains: [process.env.NEXT_PUBLIC_API_URL.replace(/^http(s?):\/\//i, "")],
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    pwa: {
        dest: "public",
        register: true,
        skipWaiting: true,
    },
    env: {
        googleMapsKey: process.env.GOOGLE_MAPS_API_KEY
    }
 });
