(()=>{var e,r,t,a,n,o,i,l,u,c,f,d={77:(e,r,t)=>{Promise.all([t.e(562),t.e(90),t.e(736),t.e(357)]).then(t.bind(t,357))}},s={};function p(e){var r=s[e];if(void 0!==r)return r.exports;var t=s[e]={exports:{}};return d[e](t,t.exports,p),t.exports}p.m=d,p.c=s,p.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return p.d(r,{a:r}),r},p.d=(e,r)=>{for(var t in r)p.o(r,t)&&!p.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},p.f={},p.e=e=>Promise.all(Object.keys(p.f).reduce(((r,t)=>(p.f[t](e,r),r)),[])),p.u=e=>e+"."+{90:"3d9dd7e3b78ecb9b096a",316:"329ec9b1dde3ce578cfa",357:"3b88599c217da7fbd364",562:"80bd1caa9e955fd4f0b7",563:"516fbadf1fb7f27a6d18",687:"ab70858efa94948e76c5",736:"5cafe8d79ea267e6f649",784:"bbf2d6d1d86eca88b143",959:"9bb8646957e0ec8319bd",991:"3450fd9e0ec4a6da9874"}[e]+".js",p.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),p.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="@alicante-microfrontends/react2:",p.l=(t,a,n,o)=>{if(e[t])e[t].push(a);else{var i,l;if(void 0!==n)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var f=u[c];if(f.getAttribute("src")==t||f.getAttribute("data-webpack")==r+n){i=f;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,p.nc&&i.setAttribute("nonce",p.nc),i.setAttribute("data-webpack",r+n),i.src=t),e[t]=[a];var d=(r,a)=>{i.onerror=i.onload=null,clearTimeout(s);var n=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((e=>e(a))),r)return r(a)},s=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),l&&document.head.appendChild(i)}},p.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{p.S={};var e={},r={};p.I=(t,a)=>{a||(a=[]);var n=r[t];if(n||(n=r[t]={}),!(a.indexOf(n)>=0)){if(a.push(n),e[t])return e[t];p.o(p.S,t)||(p.S[t]={});var o=p.S[t],i="@alicante-microfrontends/react2",l=(e,r,t,a)=>{var n=o[e]=o[e]||{},l=n[r];(!l||!l.loaded&&(!a!=!l.eager?a:i>l.from))&&(n[r]={get:t,from:i,eager:!!a})},u=[];return"default"===t&&(l("@leanjs/core","0.10.1",(()=>p.e(959).then((()=>()=>p(959))))),l("@leanjs/react","0.6.3",(()=>Promise.all([p.e(991),p.e(90),p.e(563)]).then((()=>()=>p(991))))),l("react-dom","17.0.2",(()=>Promise.all([p.e(316),p.e(90)]).then((()=>()=>p(316))))),l("react","17.0.2",(()=>p.e(784).then((()=>()=>p(784)))))),e[t]=u.length?Promise.all(u).then((()=>e[t]=1)):1}}})(),(()=>{var e;p.g.importScripts&&(e=p.g.location+"");var r=p.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),p.p=e})(),t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),a=t[1]?r(t[1]):[];return t[2]&&(a.length++,a.push.apply(a,r(t[2]))),t[3]&&(a.push([]),a.push.apply(a,r(t[3]))),a},a=(e,r)=>{e=t(e),r=t(r);for(var a=0;;){if(a>=e.length)return a<r.length&&"u"!=(typeof r[a])[0];var n=e[a],o=(typeof n)[0];if(a>=r.length)return"u"==o;var i=r[a],l=(typeof i)[0];if(o!=l)return"o"==o&&"n"==l||"s"==l||"u"==o;if("o"!=o&&"u"!=o&&n!=i)return n<i;a++}},n=(e,r)=>{if(0 in e){r=t(r);var a=e[0],o=a<0;o&&(a=-a-1);for(var i=0,l=1,u=!0;;l++,i++){var c,f,d=l<e.length?(typeof e[l])[0]:"";if(i>=r.length||"o"==(f=(typeof(c=r[i]))[0]))return!u||("u"==d?l>a&&!o:""==d!=o);if("u"==f){if(!u||"u"!=d)return!1}else if(u)if(d==f)if(l<=a){if(c!=e[l])return!1}else{if(o?c>e[l]:c<e[l])return!1;c!=e[l]&&(u=!1)}else if("s"!=d&&"n"!=d){if(o||l<=a)return!1;u=!1,l--}else{if(l<=a||f<d!=o)return!1;u=!1}else"s"!=d&&"n"!=d&&(u=!1,l--)}}var s=[],p=s.pop.bind(s);for(i=1;i<e.length;i++){var h=e[i];s.push(1==h?p()|p():2==h?p()&p():h?n(h,r):!p())}return!!p()},o=(e,r,t)=>{var o=e[r];return(r=Object.keys(o).reduce(((e,r)=>!n(t,r)||e&&!a(e,r)?e:r),0))&&o[r]},i=e=>(e.loaded=1,e.get()),l=(e=>function(r,t,a,n){var o=p.I(r);return o&&o.then?o.then(e.bind(e,r,p.S[r],t,a,n)):e(0,p.S[r],t,a,n)})(((e,r,t,a,n)=>{var l=r&&p.o(r,t)&&o(r,t,a);return l?i(l):n()})),u={},c={90:()=>l("default","react",[1,17,0,2],(()=>p.e(784).then((()=>()=>p(784))))),736:()=>l("default","@leanjs/react",[2,0,6,0],(()=>Promise.all([p.e(991),p.e(563)]).then((()=>()=>p(991))))),700:()=>l("default","@leanjs/core",[2,0,10,0],(()=>p.e(687).then((()=>()=>p(959))))),709:()=>l("default","react-dom",[1,17,0,2],(()=>p.e(316).then((()=>()=>p(316)))))},f={90:[90],563:[700,709],736:[736]},p.f.consumes=(e,r)=>{p.o(f,e)&&f[e].forEach((e=>{if(p.o(u,e))return r.push(u[e]);var t=r=>{u[e]=0,p.m[e]=t=>{delete p.c[e],t.exports=r()}},a=r=>{delete u[e],p.m[e]=t=>{throw delete p.c[e],r}};try{var n=c[e]();n.then?r.push(u[e]=n.then(t).catch(a)):t(n)}catch(e){a(e)}}))},(()=>{var e={797:0};p.f.j=(r,t)=>{var a=p.o(e,r)?e[r]:void 0;if(0!==a)if(a)t.push(a[2]);else if(/^(563|736|90)$/.test(r))e[r]=0;else{var n=new Promise(((t,n)=>a=e[r]=[t,n]));t.push(a[2]=n);var o=p.p+p.u(r),i=new Error;p.l(o,(t=>{if(p.o(e,r)&&(0!==(a=e[r])&&(e[r]=void 0),a)){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+n+": "+o+")",i.name="ChunkLoadError",i.type=n,i.request=o,a[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var a,n,[o,i,l]=t,u=0;if(o.some((r=>0!==e[r]))){for(a in i)p.o(i,a)&&(p.m[a]=i[a]);l&&l(p)}for(r&&r(t);u<o.length;u++)n=o[u],p.o(e,n)&&e[n]&&e[n][0](),e[n]=0},t=self.webpackChunk_alicante_microfrontends_react2=self.webpackChunk_alicante_microfrontends_react2||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),p(77)})();