if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,a)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>i(e,c),o={module:{uri:c},exports:t,require:r};s[c]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(a(...e),t)))}}define(["./workbox-62f137f2"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next//static/media/Swish_Symbol_SVG.2dde8e7e.svg",revision:"7axHNZgvu5f8c7jitfrXZ"},{url:"/_next//static/media/Swish_dark_logo.08279f20.svg",revision:"7axHNZgvu5f8c7jitfrXZ"},{url:"/_next/static/7axHNZgvu5f8c7jitfrXZ/_buildManifest.js",revision:"7axHNZgvu5f8c7jitfrXZ"},{url:"/_next/static/7axHNZgvu5f8c7jitfrXZ/_middlewareManifest.js",revision:"7axHNZgvu5f8c7jitfrXZ"},{url:"/_next/static/7axHNZgvu5f8c7jitfrXZ/_ssgManifest.js",revision:"7axHNZgvu5f8c7jitfrXZ"},{url:"/_next/static/chunks/651.243d23442247d286.js",revision:"7axHNZgvu5f8c7jitfrXZ"},{url:"/_next/static/chunks/framework-5f4595e5518b5600.js",revision:"7axHNZgvu5f8c7jitfrXZ"},{url:"/_next/static/chunks/main-d1345432406e21d7.js",revision:"7axHNZgvu5f8c7jitfrXZ"},{url:"/_next/static/chunks/pages/%5B%5B...path%5D%5D-a4eef33d3bb4bbe4.js",revision:"7axHNZgvu5f8c7jitfrXZ"},{url:"/_next/static/chunks/pages/_app-9cf3e153e020e475.js",revision:"7axHNZgvu5f8c7jitfrXZ"},{url:"/_next/static/chunks/pages/_error-8022dacb1937fc7a.js",revision:"7axHNZgvu5f8c7jitfrXZ"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"7axHNZgvu5f8c7jitfrXZ"},{url:"/_next/static/chunks/webpack-975c09b9b0952f23.js",revision:"7axHNZgvu5f8c7jitfrXZ"},{url:"/_next/static/css/ceace3e80ac4e912.css",revision:"7axHNZgvu5f8c7jitfrXZ"},{url:"/icons/android-chrome-192x192.png",revision:"7d0a7746603930ab894846c72e8cb9f6"},{url:"/icons/android-chrome-512x512.png",revision:"f6c85d9dd64bc24d98483acac6b7c65f"},{url:"/icons/apple-touch-icon.png",revision:"b981b62b70fde580d1019f6d8f8cc191"},{url:"/icons/favicon-16x16.png",revision:"64daa220d506f5c324db6bd7c39aff36"},{url:"/icons/favicon-32x32.png",revision:"e0fd102ada175323ec3f62e04650d2f4"},{url:"/icons/favicon.ico",revision:"3a1bdaa7be2b882e7cf5d6c01d9480ec"},{url:"/icons/icon-192x192.png",revision:"7d0a7746603930ab894846c72e8cb9f6"},{url:"/icons/icon-512x512.png",revision:"f6c85d9dd64bc24d98483acac6b7c65f"},{url:"/icons/logo.png",revision:"7b48a5f967cc00d709c561a3a03ca1e7"},{url:"/icons/mstile-150x150.png",revision:"5ab7b2c6009e62faae9b54c2c7e57be1"},{url:"/icons/safari-pinned-tab.svg",revision:"e1854d5bab2476426bef877f4372f680"},{url:"/manifest.json",revision:"5e72de7614b66a138e44e6329cb74c66"},{url:"/pdf.worker.min.js",revision:"7da3c49743b88cafe1d66e4468e1a91f"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
