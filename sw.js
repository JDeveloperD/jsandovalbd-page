if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const o=e=>i(e,t),f={module:{uri:t},exports:c,require:o};s[t]=Promise.all(n.map((e=>f[e]||o(e)))).then((e=>(r(...e),c)))}}define(["./workbox-e0782b83"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index.69369ffe.css",revision:null},{url:"assets/index.9eac4c44.js",revision:null},{url:"index.html",revision:"bf6fa9b0978f28216330817c257853df"},{url:"registerSW.js",revision:"4fec41f16202f2e1edfdc6b4c3cd31d9"},{url:"manifest.webmanifest",revision:"88fcca3e7c156cde6fb8bccaf8469da9"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
