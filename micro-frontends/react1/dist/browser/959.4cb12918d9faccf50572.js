"use strict";(self.webpackChunk_alicante_microfrontends_react1=self.webpackChunk_alicante_microfrontends_react1||[]).push([[959],{959:(e,t,n)=>{n.r(t),n.d(t,{_:()=>r,configureRuntime:()=>_});var r={};n.r(r),n.d(r,{configureMount:()=>f,createRemoteName:()=>s,dedupeSlash:()=>p,deleteTrailingSlash:()=>d,getDefaultPathname:()=>l,getRemoteBasename:()=>y,getRemoteUrl:()=>v,isObject:()=>w,isPromise:()=>h,loadModule:()=>i,loadScript:()=>o});var o=function(e){return new Promise((function(t,n){var r=document.createElement("script"),o=document.head;r.src=e,r.async=!0,r.onload=function(){o.removeChild(r),t()},r.onerror=function(){o.removeChild(r),n(new Error("Failed to load script ".concat(e)))},o.appendChild(r)}))},a=n(163);function i(e,t){return void 0===t&&(t="."),(0,a.__awaiter)(this,void 0,void 0,(function(){var r;return(0,a.__generator)(this,(function(o){switch(o.label){case 0:return(null==(r=null===window||void 0===window?void 0:window[e])?void 0:r.init)&&(null==r?void 0:r.get)?[4,n.I("default")]:[3,4];case 1:return o.sent(),[4,r.init(n.S.default)];case 2:return o.sent(),[4,r.get(t)];case 3:return[2,o.sent()()];case 4:return[2,void 0]}}))}))}var u=new Map,c=new Set,l=function(e){return e&&"undefined"!=typeof window?window.location.pathname:"/"},f=function(e){var t,n=e.el,r=e.packageName,o=e.unmount,a=e.runtime,i=e.render,l=e.isSelfHosted,f=void 0!==l&&l,s=e.onBeforeMount,d=e.initialState,p=e.cleanups,v=void 0===p?[]:p,y=e.log;function h(e){u.set(r,e)}if(n)try{var _=[],g=[];c.has(r)||(h(d),c.add(r));var m=null==s?void 0:s({runtime:a,isSelfHosted:f,initialState:u.get(r),updateInitialState:h,onBeforeUnmount:function(e){_.push(e)},onUnmounted:function(e){g.push(e)}});if(m&&!w(m))throw new Error("onBeforeMount must return an object or void");i({appProps:m}),(v=v.concat(_)).push(o),v=v.concat(g)}catch(e){null==y||y(e),n.innerText="Error: ".concat(null!==(t=e.message)&&void 0!==t?t:e)}return{unmount:function(){return v.forEach((function(e){return e()}))}}},s=function(e){return"_".concat(e.replace(/[^a-z0-9+]+/gi,"_"))},d=function(e){return e.replace(/\/+$/g,"")},p=function(e){return e.replace(/\/{2,}/g,"/")},v=function(e){var t=e.origin,n=e.packageName,r=e.version,o=void 0===r?"latest":r,a=e.target,i=void 0===a?"browser":a;return"".concat(d(t)).concat(y({packageName:n,version:o}),"/").concat(i,"/remoteEntry.js")};function y(e){var t=e.packageName,n=e.version;return"/".concat(s(t),"/").concat(n)}var h=function(e){return"[object Promise]"==={}.toString.call(e)},w=function(e){return"[object Object]"==={}.toString.call(e)},_=function(e){if(!e)throw new Error("default state is required to configure a runtime");return function(t){var n=t.context,r=t.onError,o=function(t){var o=void 0===t?{}:t,i=o.initialState,u=o.request;return function(e){return function(t){var n=t.context,r=t.onError,o=t.request;function i(e){r(e&&e.stack&&e.message?e:new Error("string"==typeof e?e:"Unknown error"))}var u="undefined"!=typeof window,c=(null==o?void 0:o.url)?o.url:u?window.location.href:void 0,l=(0,a.__assign)({},e),f=new Map,s=new Map,d=new Map,p=function(e){var t;null===(t=f.get(e))||void 0===t||t.forEach((function(t){return t(y[e],_[e].loading,_[e].error)}))};function v(e){if(!(e in l))throw new Error('"'.concat(String(e),'" is not a valid state prop.\nDid you forget to set "').concat(String(e),'" to a value in your defaultState (including null or undefined) when calling configureState function?\nCurrent valid props are: ').concat(Object.keys(l).join(", ")))}var y=new Proxy(l,{get:function(e,t){return v(t),e[t]},set:function(e,t,n){return v(t),e[t]!==n&&(e[t]=n,p(t)),!0}}),w=function(e){return(0,a.__awaiter)(void 0,void 0,void 0,(function(){var t;return(0,a.__generator)(this,(function(n){switch(n.label){case 0:return e?(v(e),[4,null===(t=s.get(e))||void 0===t?void 0:t.promise]):[3,2];case 1:return n.sent(),[2,l[e]];case 2:return[4,Promise.all(Array.from(s.values()).map((function(e){return e.promise})))];case 3:return n.sent(),[2,void 0]}}))}))},_=new Proxy({},{get:function(e,t){v(t);var n=s.get(t);return{error:null==n?void 0:n.error,loading:!!(null==n?void 0:n.loading)}}}),g=function(e,t){return(0,a.__awaiter)(void 0,void 0,void 0,(function(){var n,r,o,c,f,d;return(0,a.__generator)(this,(function(a){switch(a.label){case 0:return v(e),n=s.get(e),u?[3,1]:(s.set(e,{loading:!0}),[3,7]);case 1:return(null==n?void 0:n.done)||(null==n?void 0:n.loading)?[3,7]:[3,2];case 2:return a.trys.push([2,6,,7]),r=t(),o=function(t){s.set(e,{loading:!1,done:!0}),y[e]=t},h(r)?(s.set(e,{loading:!0,promise:r}),p(e),c=o,[4,r]):[3,4];case 3:return c.apply(void 0,[a.sent()]),[3,5];case 4:o(r),a.label=5;case 5:return[3,7];case 6:return f=a.sent(),s.set(e,{loading:!1,done:!0,error:null!==(d=null==f?void 0:f.message)&&void 0!==d?d:f}),p(e),i(f),[3,7];case 7:return[2,l[e]]}}))}))},m={isBrowser:u,request:(0,a.__assign)((0,a.__assign)({},o),{url:c}),load:g,loaded:w,loader:_,state:y},b=new Proxy({},{get:function(e,t){if(void 0===e[t]){var r=null==n?void 0:n[t];if("function"==typeof r)try{r=r(m)}catch(e){i(e)}h(r)&&(d.set(t,r),r.catch(i)),e[t]=r}return e[t]},set:function(e,t){throw new Error("Cannot assign to read only context property '".concat(t.toString(),"'"))}});return Object.keys(n||{}).forEach((function(e){var t=null==n?void 0:n[e];h(t)&&(d.set(e,t),t.catch(i))})),{state:y,context:b,loader:_,booted:function(){return(0,a.__awaiter)(void 0,void 0,void 0,(function(){return(0,a.__generator)(this,(function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,Promise.all(d.values())];case 1:return e.sent(),[2,!0];case 2:return e.sent(),[2,!1];case 3:return[2]}}))}))},on:function(e,t){if(!b)throw new Error('No context found in runtime, "on" is not allowed');if(!b[e])throw new Error("No context found in runtime for prop ".concat(String(e),"."));var n=Promise.resolve(b[e]).then((function(e){return t(e,y)})).catch(i);return function(){n.then((function(e){return null==e?void 0:e()})).catch(i)}},subscribe:function(e,t){var n;v(e);var r=null!==(n=f.get(e))&&void 0!==n?n:new Set;return r.add(t),f.set(e,r),function(){r.delete(t)}},loaded:w,load:g}}}(null!=i?i:e)({context:n,onError:r,request:u})};return o.log=r,{createRuntime:o}}}},163:(e,t,n)=>{n.r(t),n.d(t,{__assign:()=>a,__asyncDelegator:()=>b,__asyncGenerator:()=>m,__asyncValues:()=>S,__await:()=>g,__awaiter:()=>f,__classPrivateFieldGet:()=>x,__classPrivateFieldIn:()=>T,__classPrivateFieldSet:()=>k,__createBinding:()=>d,__decorate:()=>u,__exportStar:()=>p,__extends:()=>o,__generator:()=>s,__importDefault:()=>E,__importStar:()=>P,__makeTemplateObject:()=>O,__metadata:()=>l,__param:()=>c,__read:()=>y,__rest:()=>i,__spread:()=>h,__spreadArray:()=>_,__spreadArrays:()=>w,__values:()=>v});var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)};function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var a=function(){return a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},a.apply(this,arguments)};function i(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}function u(e,t,n,r){var o,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(i=(a<3?o(i):a>3?o(t,n,i):o(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i}function c(e,t){return function(n,r){t(n,r,e)}}function l(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function f(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{c(r.next(e))}catch(e){a(e)}}function u(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,u)}c((r=r.apply(e,t||[])).next())}))}function s(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}}var d=Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]};function p(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||d(t,e,n)}function v(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function y(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,a=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)i.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return i}function h(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(y(arguments[t]));return e}function w(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var a=arguments[t],i=0,u=a.length;i<u;i++,o++)r[o]=a[i];return r}function _(e,t,n){if(n||2===arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}function g(e){return this instanceof g?(this.v=e,this):new g(e)}function m(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(e,t||[]),a=[];return r={},i("next"),i("throw"),i("return"),r[Symbol.asyncIterator]=function(){return this},r;function i(e){o[e]&&(r[e]=function(t){return new Promise((function(n,r){a.push([e,t,n,r])>1||u(e,t)}))})}function u(e,t){try{(n=o[e](t)).value instanceof g?Promise.resolve(n.value.v).then(c,l):f(a[0][2],n)}catch(e){f(a[0][3],e)}var n}function c(e){u("next",e)}function l(e){u("throw",e)}function f(e,t){e(t),a.shift(),a.length&&u(a[0][0],a[0][1])}}function b(e){var t,n;return t={},r("next"),r("throw",(function(e){throw e})),r("return"),t[Symbol.iterator]=function(){return this},t;function r(r,o){t[r]=e[r]?function(t){return(n=!n)?{value:g(e[r](t)),done:"return"===r}:o?o(t):t}:o}}function S(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e=v(e),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=e[n]&&function(t){return new Promise((function(r,o){!function(e,t,n,r){Promise.resolve(r).then((function(t){e({value:t,done:n})}),t)}(r,o,(t=e[n](t)).done,t.value)}))}}}function O(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var j=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function P(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&d(t,e,n);return j(t,e),t}function E(e){return e&&e.__esModule?e:{default:e}}function x(e,t,n,r){if("a"===n&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?r:"a"===n?r.call(e):r?r.value:t.get(e)}function k(e,t,n,r,o){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?o.call(e,n):o?o.value=n:t.set(e,n),n}function T(e,t){if(null===t||"object"!=typeof t&&"function"!=typeof t)throw new TypeError("Cannot use 'in' operator on non-object");return"function"==typeof e?t===e:e.has(t)}}}]);