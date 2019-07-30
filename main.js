!function(n){var t={};function e(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=n,e.c=t,e.d=function(n,t,o){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:o})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var r in n)e.d(o,r,function(t){return n[t]}.bind(null,r));return o},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=12)}([function(n,t,e){var o=e(1);"string"==typeof o&&(o=[[n.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};e(10)(o,r);o.locals&&(n.exports=o.locals)},function(n,t,e){t=n.exports=e(2)(!1);var o=e(3),r=o(e(4)),i=o(e(5)),a=o(e(6)),c=o(e(7)),d=o(e(8)),l=o(e(9));t.push([n.i,"/*Reset*/\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n\tdisplay: block;\n}\n\nbody {\n\tline-height: 1;\n}\n\nol,\nul {\n\tlist-style: none;\n}\n\nblockquote,\nq {\n\tquotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n\tcontent: '';\n\tcontent: none;\n}\n\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\n.big-container {\n    margin: 0px;\n\tpadding: 0px;\n\theight: 100vh;\n\twidth: 100%;\n\tbackground-color: #011627;\n    background-image: url("+r+");\n    background-position: center center;\n\tbackground-repeat: no-repeat;\n\tbackground-size: cover;\n\ttext-align: center;\n}\n\n#title {\n    color: #fffffc;\n\ttext-align: center;\n\tpadding-top: 120px;\n\tfont-family: 'Lobster', cursive;\n}\n\n#big-title {\n\tcolor: #6ca6c1;\n\tfont-size: 90px;\n\ttext-shadow: 2px 2px #000;\n}\n\n#small-title {\n\tpadding-top: 80px;\n\tmargin-bottom: 30px;\n\tfont-size: 45px;\n\tfont-family: 'Varela Round', sans-serif;\n\ttext-shadow: 2px 2px #6ca6c1;\n}\n\n#middle {\n\twidth: 100%;\n\theight: 380px;\n\tbackground-image: url("+i+");\n\tbackground-position: center center;\n\tbackground-repeat: no-repeat;\n\tfilter: grayscale(60%);\n\tbackground-size: cover;\n\tborder-top: 2px solid #6ca6c1;\n\tborder-bottom: 2px solid #6ca6c1;\n}\n\n#icons {\n\tposition: absolute;\n\twidth: 100%;\n\tbottom: 40px;\n\ttext-align: center;\n}\n\n#icon-left,\n#icon-right {\n\theight: 150px;\n\twidth: 150px;\n\tborder-radius: 50%;\n\tcolor: transparent;\n\tcursor: pointer;\n\tdisplay: inline-block;\n\tline-height: 150px;\n\tfont-size: 25px;\n\tfont-family: 'Lobster', cursive;\n\tuser-select: none;\n\ttext-decoration: none;\n\t\n}\n\n#icon-left:active,\n#icon-right:active {\n\tfont-size: 30px;\n}\n\n#icon-left {\n\tbackground-image: url("+a+");\n\tbackground-position: center center;\n\tbackground-repeat: no-repeat;\n\tbackground-size: cover;\n\tmargin-right: 5px;\n}\n\n#icon-right {\n\tborder-radius: 50%;\n\tbackground-image: url("+c+");\n\tbackground-position: center center;\n\tbackground-repeat: no-repeat;\n\tbackground-size: cover;\n\tmargin-left: 5px;\n}\n\n#icon-left:hover,\n#icon-right:hover {\n\tbackground-image: none;\n\tbackground-color: #6ca6c1;\n\tcolor: #222;\n}\n\n\n\n/*MENU*/\n\n#menu-background {\n\theight: 90vh;\n\twidth: 600px;\n\tmargin: auto;\n\tbackground-color: #011627;\n\tbackground-image: url("+d+");\n\tbackground-position: center center;\n\tbackground-repeat: no-repeat;\n\tbackground-size: cover;\n\tborder: 2px solid #6ca6c1;\n}\n\n#menu {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\tpadding-top: 220px;\n\tflex-wrap: wrap;\n\tfont-family: 'Varela Round', sans-serif;\n}\n\n.menu-item,\n.menu-price {\n\tcolor: #fffffc;\n\tfont-size: 25px;\n\tflex-basis: 50%;\n\tpadding-top: 20px;\n}\n\n.menu-item {\n\tdisplay: inline-block;\n\tposition: relative;\n\tmargin-left: 0px;\n\tpadding-left: 0px;\n}\n\n\n#icon-left-menu,\n#icon-right-location {\n\theight: 150px;\n\twidth: 150px;\n\tborder-radius: 50%;\n\tcursor: pointer;\n\tdisplay: inline-block;\n\tline-height: 150px;\n\tfont-size: 25px;\n\tfont-family: 'Lobster', cursive;\n\tuser-select: none;\n\ttext-decoration: none;\n\tbackground-color: #8fc0a9;\n\tcolor: #222;\n}\n\n#icon-left-menu {\n\tmargin-right: 5px;\n}\n\n#icon-right-location {\n\tmargin-left: 5px;\n}\n\n/*LOCATION*/\n\n#address,\n#hours {\n\tpadding-top: 80px;\n\tmargin-bottom: 30px;\n\tfont-size: 45px;\n\tfont-family: 'Varela Round', sans-serif;\n\ttext-shadow: 2px 2px #000;\n\tcolor: #fffffc;\n}\n\n#map {\n\theight: 400px;\n\twidth: 600px;\n\tmargin: auto;\n\tbackground-color: #011627;\n\tbackground-image: url("+l+");\n\tbackground-position: center center;\n\tbackground-repeat: no-repeat;\n\tbackground-size: cover;\n\tborder: 2px solid #6ca6c1;\n}\n\n\n@media all and (max-height: 870px) {\n\n\t#title {\n\t\tpadding-top: 20px;\n\t}\n\n\t#menu {\n\t\tpadding-top: 70px;\n\t}\n\n\t#address,\n\t#hours {\n\t\tpadding-top: 20px;\n\t\tmargin-bottom: 10px;\n\t\tfont-size: 35px;\n\t\tfont-family: 'Varela Round', sans-serif;\n\t\ttext-shadow: 2px 2px #000;\n\t\tcolor: #fffffc;\n\t}\n\n\t#map {\n\t\theight: 300px;\n\t\twidth: 500px;\n\t\tmargin: auto;\n\t}\n\n\t#icon-left,\n\t#icon-right,\n\t#icon-left-menu,\n\t#icon-right-location {\n\t\theight: 100px;\n\t\twidth: 100px;\n\t\tline-height: 100px;\n\t}\n\n\t#icons {\n\t\t\n\t\tbottom: 10px;\n\t\ttext-align: center;\n\t}\n}\n\n\n@media all and (max-width: 768px) {\n\t#title {\n\t\tpadding-top: 50px;\n\t}\n\n\t#big-title {\n\t\tfont-size: 60px;\n\t}\n\n\t#small-title,\n\t#address {\n\t\tpadding-top: 50px;\n\t\tmargin-bottom: 50px;\n\t\tfont-size: 30px;\n\t}\n\n\t#middle {\n\t\theight: 280px;\n\t}\n\n\t#icon-left,\n\t#icon-right,\n\t#icon-left-menu,\n\t#icon-right-location {\n\t\theight: 100px;\n\t\twidth: 100px;\n\t\tline-height: 100px;\n\t}\n\n\t#menu-background,\n\t#map {\n\t\twidth: 100%;\n\t}\n\n\t#menu {\n\t\tpadding-top: 150px;\n\t}\n\n\t#hours,\n\t#address {\n\t\tfont-size: 20px;\n\t\tpadding-top: 0px;\n\t}\n}\n\n",""])},function(n,t,e){"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map(function(t){var e=function(n,t){var e=n[1]||"",o=n[3];if(!o)return e;if(t&&"function"==typeof btoa){var r=(a=o,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),d="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(d," */")),i=o.sources.map(function(n){return"/*# sourceURL=".concat(o.sourceRoot).concat(n," */")});return[e].concat(i).concat([r]).join("\n")}var a,c,d;return[e].join("\n")}(t,n);return t[2]?"@media ".concat(t[2],"{").concat(e,"}"):e}).join("")},t.i=function(n,e){"string"==typeof n&&(n=[[null,n,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];null!=i&&(o[i]=!0)}for(var a=0;a<n.length;a++){var c=n[a];null!=c[0]&&o[c[0]]||(e&&!c[2]?c[2]=e:e&&(c[2]="(".concat(c[2],") and (").concat(e,")")),t.push(c))}},t}},function(n,t,e){"use strict";n.exports=function(n,t){return"string"!=typeof n?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),/["'() \t\n]/.test(n)||t?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},function(n,t,e){n.exports=e.p+"ba09b3fd6fcacb6efd40095586aea14f.jpg"},function(n,t,e){n.exports=e.p+"5f7e71a35639743decf3bedb79ab85b9.jpg"},function(n,t,e){n.exports=e.p+"1f71718ce45b4ef5ffc893424edb35fe.png"},function(n,t,e){n.exports=e.p+"d1c67a6e3151ce03aecb410af9473093.png"},function(n,t,e){n.exports=e.p+"141b6143e86def7a8e445007437f91f5.jpg"},function(n,t,e){n.exports=e.p+"8ea9e00c89cabc026c7234e738b636b9.png"},function(n,t,e){var o,r,i={},a=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=o.apply(this,arguments)),r}),c=function(n){var t={};return function(n,e){if("function"==typeof n)return n();if(void 0===t[n]){var o=function(n,t){return t?t.querySelector(n):document.querySelector(n)}.call(this,n,e);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(n){o=null}t[n]=o}return t[n]}}(),d=null,l=0,s=[],p=e(11);function u(n,t){for(var e=0;e<n.length;e++){var o=n[e],r=i[o.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](o.parts[a]);for(;a<o.parts.length;a++)r.parts.push(x(o.parts[a],t))}else{var c=[];for(a=0;a<o.parts.length;a++)c.push(x(o.parts[a],t));i[o.id]={id:o.id,refs:1,parts:c}}}}function f(n,t){for(var e=[],o={},r=0;r<n.length;r++){var i=n[r],a=t.base?i[0]+t.base:i[0],c={css:i[1],media:i[2],sourceMap:i[3]};o[a]?o[a].parts.push(c):e.push(o[a]={id:a,parts:[c]})}return e}function m(n,t){var e=c(n.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=s[s.length-1];if("top"===n.insertAt)o?o.nextSibling?e.insertBefore(t,o.nextSibling):e.appendChild(t):e.insertBefore(t,e.firstChild),s.push(t);else if("bottom"===n.insertAt)e.appendChild(t);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=c(n.insertAt.before,e);e.insertBefore(t,r)}}function h(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var t=s.indexOf(n);t>=0&&s.splice(t,1)}function b(n){var t=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var o=function(){0;return e.nc}();o&&(n.attrs.nonce=o)}return g(t,n.attrs),m(n,t),t}function g(n,t){Object.keys(t).forEach(function(e){n.setAttribute(e,t[e])})}function x(n,t){var e,o,r,i;if(t.transform&&n.css){if(!(i="function"==typeof t.transform?t.transform(n.css):t.transform.default(n.css)))return function(){};n.css=i}if(t.singleton){var a=l++;e=d||(d=b(t)),o=C.bind(null,e,a,!1),r=C.bind(null,e,a,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=function(n){var t=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",g(t,n.attrs),m(n,t),t}(t),o=function(n,t,e){var o=e.css,r=e.sourceMap,i=void 0===t.convertToAbsoluteUrls&&r;(t.convertToAbsoluteUrls||i)&&(o=p(o));r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),c=n.href;n.href=URL.createObjectURL(a),c&&URL.revokeObjectURL(c)}.bind(null,e,t),r=function(){h(e),e.href&&URL.revokeObjectURL(e.href)}):(e=b(t),o=function(n,t){var e=t.css,o=t.media;o&&n.setAttribute("media",o);if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}.bind(null,e),r=function(){h(e)});return o(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;o(n=t)}else r()}}n.exports=function(n,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var e=f(n,t);return u(e,t),function(n){for(var o=[],r=0;r<e.length;r++){var a=e[r];(c=i[a.id]).refs--,o.push(c)}n&&u(f(n,t),t);for(r=0;r<o.length;r++){var c;if(0===(c=o[r]).refs){for(var d=0;d<c.parts.length;d++)c.parts[d]();delete i[c.id]}}}};var v,y=(v=[],function(n,t){return v[n]=t,v.filter(Boolean).join("\n")});function C(n,t,e,o){var r=e?"":o.css;if(n.styleSheet)n.styleSheet.cssText=y(t,r);else{var i=document.createTextNode(r),a=n.childNodes;a[t]&&n.removeChild(a[t]),a.length?n.insertBefore(i,a[t]):n.appendChild(i)}}},function(n,t){n.exports=function(n){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var e=t.protocol+"//"+t.host,o=e+t.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,t){var r,i=t.trim().replace(/^"(.*)"$/,function(n,t){return t}).replace(/^'(.*)'$/,function(n,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?n:(r=0===i.indexOf("//")?i:0===i.indexOf("/")?e+i:o+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},function(n,t,e){"use strict";e.r(t);const o=()=>{let n=document.createElement("div");return n.classList.add("big-container"),n.appendChild((()=>{let n=document.createElement("div");n.id="title";let t=document.createElement("p");t.id="big-title",t.textContent="Vodolaza",n.appendChild(t);let e=document.createElement("p");return e.id="small-title",e.textContent="The best Pub & Fish Restaurant in Plovdiv",n.appendChild(e),n})()),n.appendChild((()=>{let n=document.createElement("div");return n.id="middle",n})()),n},r=()=>{let n=document.createElement("div");return n.classList.add("big-container"),n.appendChild((()=>{let n=document.createElement("div");n.id="menu-background";let t=document.createElement("div");t.id="menu";let e=document.createElement("span");e.classList.add("menu-item"),e.textContent="Rakia",t.appendChild(e);let o=document.createElement("span");o.classList.add("menu-price"),o.textContent="1.80 lv",t.appendChild(o);let r=document.createElement("span");r.classList.add("menu-item"),r.textContent="Vodka",t.appendChild(r);let i=document.createElement("span");i.classList.add("menu-price"),i.textContent="1.80 lv",t.appendChild(i);let a=document.createElement("span");a.classList.add("menu-item"),a.textContent="Whisky",t.appendChild(a);let c=document.createElement("span");c.classList.add("menu-price"),c.textContent="2.00 lv",t.appendChild(c);let d=document.createElement("span");d.classList.add("menu-item"),d.textContent="Chips",t.appendChild(d);let l=document.createElement("span");l.classList.add("menu-price"),l.textContent="1.20 lv",t.appendChild(l);let s=document.createElement("span");s.classList.add("menu-item"),s.textContent="Meatball",t.appendChild(s);let p=document.createElement("span");p.classList.add("menu-price"),p.textContent="0.80 lv",t.appendChild(p);let u=document.createElement("span");u.classList.add("menu-item"),u.textContent="Sprat",t.appendChild(u);let f=document.createElement("span");f.classList.add("menu-price"),f.textContent="1.60 lv",t.appendChild(f);let m=document.createElement("span");m.classList.add("menu-item"),m.textContent="Carp",t.appendChild(m);let h=document.createElement("span");return h.classList.add("menu-price"),h.textContent="3.00 lv",t.appendChild(h),n.appendChild(t),n})()),n},i=()=>{let n=document.createElement("div");return n.classList.add("big-container"),n.appendChild((()=>{let n=document.createElement("div");return n.id="address",n.textContent='ul. "Mladezhka" 32А, Plovdiv, Bulgaria',n})()),n.appendChild((()=>{let n=document.createElement("div");return n.id="map",n})()),n.appendChild((()=>{let n=document.createElement("div");return n.id="hours",n.textContent="Opening Hours: 9:30am–9:30pm",n})()),n};e(0);const a=n=>{let t=document.createElement("div");if(t.id="icons","home"===n){let n=document.createElement("a");n.id="icon-left",n.addEventListener("click",d),n.textContent="Menu";let e=document.createElement("a");e.id="icon-right",e.addEventListener("click",l),e.textContent="Find us",t.appendChild(n),t.appendChild(e)}else if("menu"===n){let n=document.createElement("a");n.id="icon-left-menu",n.addEventListener("click",c),n.textContent="Home";let e=document.createElement("a");e.id="icon-right",e.addEventListener("click",l),e.textContent="Find us",t.appendChild(n),t.appendChild(e)}else if("location"===n){let n=document.createElement("a");n.id="icon-left",n.addEventListener("click",d),n.textContent="Menu";let e=document.createElement("a");e.id="icon-right-location",e.addEventListener("click",c),e.textContent="Home",t.appendChild(n),t.appendChild(e)}return t},c=()=>{"menu"===u?document.body.removeChild(s):"location"===u&&document.body.removeChild(p),f=document.createElement("div"),document.body.appendChild(f),f.appendChild(o()),f.appendChild(a("home")),u="home"},d=()=>{"home"===u?document.body.removeChild(f):"location"===u&&document.body.removeChild(p),s=document.createElement("div"),document.body.appendChild(s),s.appendChild(r()),s.appendChild(a("menu")),u="menu"},l=()=>{"menu"===u?document.body.removeChild(s):"home"===u&&document.body.removeChild(f),p=document.createElement("div"),document.body.appendChild(p),p.appendChild(i()),p.appendChild(a("location")),u="location"};var s,p,u="home",f=document.createElement("div");document.body.appendChild(f),f.appendChild(o()),f.appendChild(a("home"))}]);