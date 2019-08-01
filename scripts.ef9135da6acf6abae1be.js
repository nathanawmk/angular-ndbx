!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("whatInput",[],t):"object"==typeof exports?exports.whatInput=t():e.whatInput=t()}(this,function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}return n.m=e,n.c=t,n.p="",n(0)}([function(e,t){"use strict";e.exports=function(){if("undefined"==typeof document||"undefined"==typeof window)return{ask:function(){return"initial"},element:function(){return null},ignoreKeys:function(){},registerOnChange:function(){},unRegisterOnChange:function(){}};var e=document.documentElement,t=null,n="initial",o=n;try{window.sessionStorage.getItem("what-input")&&(n=window.sessionStorage.getItem("what-input")),window.sessionStorage.getItem("what-intent")&&(o=window.sessionStorage.getItem("what-intent"))}catch(I){}var i=null,r=["input","select","textarea"],s=[],u=[16,17,18,91,93],a={keydown:"keyboard",keyup:"keyboard",mousedown:"mouse",mousemove:"mouse",MSPointerDown:"pointer",MSPointerMove:"pointer",pointerdown:"pointer",pointermove:"pointer",touchstart:"touch"},d=!1,w=!1,c={x:null,y:null},p={2:"touch",3:"touch",4:"mouse"},f=!1;try{var l=Object.defineProperty({},"passive",{get:function(){f=!0}});window.addEventListener("test",null,l)}catch(I){}var m,h=function(e){if(!d){var t=e.which,i=a[e.type];"pointer"===i&&(i=L(e));var s="keyboard"===i&&t&&-1===u.indexOf(t)||"mouse"===i||"touch"===i;if(n!==i&&s){n=i;try{window.sessionStorage.setItem("what-input",n)}catch(I){}v("input")}if(o!==i&&s){var w=document.activeElement;if(w&&w.nodeName&&-1===r.indexOf(w.nodeName.toLowerCase())){o=i;try{window.sessionStorage.setItem("what-intent",o)}catch(I){}v("intent")}}}},v=function(t){e.setAttribute("data-what"+t,"input"===t?n:o),S(t)},y=function(e){if(b(e),!d&&!w){var t=a[e.type];if("pointer"===t&&(t=L(e)),o!==t){o=t;try{window.sessionStorage.setItem("what-intent",o)}catch(I){}v("intent")}}},g=function(){t=null,e.removeAttribute("data-whatelement"),e.removeAttribute("data-whatclasses")},E=function(e){h(e),window.clearTimeout(i),d=!0,i=window.setTimeout(function(){d=!1},100)},L=function(e){return"number"==typeof e.pointerType?p[e.pointerType]:"pen"===e.pointerType?"touch":e.pointerType},x=function(){return"onwheel"in document.createElement("div")?"wheel":void 0!==document.onmousewheel?"mousewheel":"DOMMouseScroll"},S=function(e){for(var t=0,i=s.length;t<i;t++)s[t].type===e&&s[t].fn.call(void 0,"input"===e?n:o)},b=function(e){c.x!==e.screenX||c.y!==e.screenY?(w=!1,c.x=e.screenX,c.y=e.screenY):w=!0};return"addEventListener"in window&&Array.prototype.indexOf&&(a[x()]="mouse",m=!!f&&{passive:!0},window.PointerEvent?(window.addEventListener("pointerdown",h),window.addEventListener("pointermove",y)):window.MSPointerEvent?(window.addEventListener("MSPointerDown",h),window.addEventListener("MSPointerMove",y)):(window.addEventListener("mousedown",h),window.addEventListener("mousemove",y),"ontouchstart"in window&&(window.addEventListener("touchstart",E,m),window.addEventListener("touchend",h))),window.addEventListener(x(),y,m),window.addEventListener("keydown",E),window.addEventListener("keyup",E),window.addEventListener("focusin",function(n){n.target.nodeName?(t=n.target.nodeName.toLowerCase(),e.setAttribute("data-whatelement",t),n.target.classList&&n.target.classList.length&&e.setAttribute("data-whatclasses",n.target.classList.toString().replace(" ",","))):g()}),window.addEventListener("focusout",g),v("input"),v("intent")),{ask:function(e){return"intent"===e?o:n},element:function(){return t},ignoreKeys:function(e){u=e},registerOnChange:function(e,t){s.push({fn:e,type:t||"input"})},unRegisterOnChange:function(e){var t=function(e){for(var t=0,n=s.length;t<n;t++)if(s[t].fn===e)return t}(e);(t||0===t)&&s.splice(t,1)}}}()}])});