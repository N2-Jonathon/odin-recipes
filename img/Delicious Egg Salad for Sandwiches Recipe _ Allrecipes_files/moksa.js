/*! moksa.js v.3.21.0 2022-7-18 */
!function(){"use strict";window.aax=window.aax||{},window.aax.execute=window.aax.execute||[];let n={enabled:!1},e={enabled:!1},t=null,o=null;const a=["AT","BE","BG","CY","CZ","DE","DK","EE","ES","FI","FR","GB","GR","HR","HU","IE","IS","IT","LI","LT","LU","LV","MT","NL","NO","PL","PT","RO","SE","SI","SK"];function i(n){if(!navigator.cookieEnabled)return r("Cookies are disabled in your browser"),!1;const e=n+"=";let t;return o=decodeURIComponent(document.cookie).split(";"),a=function(n){for(;" "===n.charAt(0);)n=n.substring(1);0===n.indexOf(e)&&(t=n.substring(e.length,n.length))},(o=null===(i=o)||"object"!=typeof i||Array.isArray(i)||NodeList.prototype.isPrototypeOf(i)?o:Object.keys(o)).forEach(a),t;var o,a,i}function r(n){const e=window.console;e&&e.log(n)}function s(){let n=i("OptanonConsent");return n?(n=function(n,e){n=decodeURIComponent(n),e=void 0===e||e;const t={};return n.replace(/[?&]?([^=&]+)=([^&]*)/gi,(function(n,o,a){e?t[o.toLowerCase()]=a:t[o]=a})),t}(i("OptanonConsent"),!1),r("OneTrust cookie is present, with this data: "+JSON.stringify(n)),n):null}function u(){return window.otStubData&&"object"==typeof window.otStubData.userLocation?window.otStubData.userLocation:null}function c(n){var e;return(n=n||u())&&n.hasOwnProperty("country")&&(e=n.country,t=e?-1!==a.indexOf(e):null),t}function d(){const t=s(),a=u(),d=c(a),l=i("OptanonAlertBoxClosed")||null,w=t?!(!t.hasOwnProperty("isGpcEnabled")||1!==(p=t.isGpcEnabled,"string"==typeof p?p.match(/^[0-9]+$/)?function(n){return parseInt(n,10)}(p):function(n){return"string"==typeof n&&("true"===n||"false"===n||""===n)||null==n?"true"===n||!1:n}(p):p)):null;var p;if(d&&(e.enabled=!0),t){const i=!function(n,e){return(n=n||s())&&n.hasOwnProperty("groups")?!(-1!==n.groups.indexOf("4:0")):!c(e=e||u())}(t);n.enabled=!(!function(n){return(n=n||u())&&n.hasOwnProperty("country")&&(o="US"===n.country),o}(a)||!i||!w&&null===l),e.enabled=!(!d||!i)}d&&window.aax.execute.push((function(){window.aax.setGDPRApplicable(!0),r("aax.setGDPRApplicable: true"),window.aax.consentExists(!e.enabled),r("aax.consentExists: "+!e.enabled),window.aax.setNonPersonalizedAds(e.enabled),r("aax.setNonPersonalizedAds: "+e.enabled)})),o&&window.aax.execute.push((function(){window.aax.limitDataProcessing(n.enabled),r("aax.limitDataProcessing: "+n.enabled)}))}window.aax=window.aax||{};var l=window.aax;l.initTime=(new Date).getTime(),l.pubId="AAXV53D7Q",l.ver="1.2",l.hst=window.location.hostname;var w="https://c.aaxads.com/aax.js?pub="+l.pubId+"&hst="+l.hst+"&ver="+l.ver;function p(n){var e=document.createElement("script"),t=document.getElementsByTagName("script")[0];e.async=!0,e.src=n,t.parentNode.insertBefore(e,t)}"complete"===document.readyState?(d(),p(w)):window.addEventListener("load",(function(){d(),p(w)}))}();
//# sourceMappingURL=moksa.js.map