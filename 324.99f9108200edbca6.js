/*! For license information please see 324.99f9108200edbca6.js.LICENSE.txt */
(self.webpackChunkeditor=self.webpackChunkeditor||[]).push([[324],{10324:(e,t,r)=>{r.d(t,{C:()=>v,E:()=>O,T:()=>$,_:()=>b,a:()=>x,b:()=>C,c:()=>w,h:()=>m,i:()=>p,u:()=>S,w:()=>g});var n=r(840),o=r(23882),a=r(37254),i=r(6911),c=r(69060),f=r.n(c),s=function(e,t){return f()(e,t)},u=r(99463),l=r(62468),y=r(98013),p=!0,m={}.hasOwnProperty,d=n.createContext("undefined"!=typeof HTMLElement?(0,o.default)({key:"css"}):null),v=d.Provider,b=function(){return(0,n.useContext)(d)},g=function(e){return(0,n.forwardRef)((function(t,r){var o=(0,n.useContext)(d);return e(t,o,r)}))};p||(g=function(e){return function(t){var r=(0,n.useContext)(d);return null===r?(r=(0,o.default)({key:"css"}),n.createElement(d.Provider,{value:r},e(t,r))):e(t,r)}});var $=n.createContext({}),S=function(){return n.useContext($)},h=(0,i.Z)((function(e){return(0,i.Z)((function(t){return function(e,t){return"function"==typeof t?t(e):(0,a.Z)({},e,t)}(e,t)}))})),x=function(e){var t=n.useContext($);return e.theme!==t&&(t=h(t)(e.theme)),n.createElement($.Provider,{value:t},e.children)};function C(e){var t=e.displayName||e.name||"Component",r=function(t,r){var o=n.useContext($);return n.createElement(e,(0,a.Z)({theme:o,ref:r},t))},o=n.forwardRef(r);return o.displayName="WithTheme("+t+")",s(o,e)}var _="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",w=function(e,t){var r={};for(var n in t)m.call(t,n)&&(r[n]=t[n]);return r[_]=e,r},P=function(e){var t=e.cache,r=e.serialized,n=e.isStringTag;return(0,u.hC)(t,r,n),(0,y.L)((function(){return(0,u.My)(t,r,n)})),null},O=g((function(e,t,r){var o=e.css;"string"==typeof o&&void 0!==t.registered[o]&&(o=t.registered[o]);var a=e[_],i=[o],c="";"string"==typeof e.className?c=(0,u.fp)(t.registered,i,e.className):null!=e.className&&(c=e.className+" ");var f=(0,l.O)(i,void 0,n.useContext($));c+=t.key+"-"+f.name;var s={};for(var y in e)m.call(e,y)&&"css"!==y&&y!==_&&(s[y]=e[y]);return s.ref=r,s.className=c,n.createElement(n.Fragment,null,n.createElement(P,{cache:t,serialized:f,isStringTag:"string"==typeof a}),n.createElement(a,s))}))},62468:(e,t,r)=>{r.d(t,{O:()=>d});var n=r(81663),o=r(45002),a=r(36902),i=/[A-Z]|^ms/g,c=/_EMO_([^_]+?)_([^]*?)_EMO_/g,f=function(e){return 45===e.charCodeAt(1)},s=function(e){return null!=e&&"boolean"!=typeof e},u=(0,a.Z)((function(e){return f(e)?e:e.replace(i,"-$&").toLowerCase()})),l=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(c,(function(e,t,r){return p={name:t,styles:r,next:p},t}))}return 1===o.Z[e]||f(e)||"number"!=typeof t||0===t?t:t+"px"};function y(e,t,r){if(null==r)return"";if(void 0!==r.__emotion_styles)return r;switch(typeof r){case"boolean":return"";case"object":if(1===r.anim)return p={name:r.name,styles:r.styles,next:p},r.name;if(void 0!==r.styles){var n=r.next;if(void 0!==n)for(;void 0!==n;)p={name:n.name,styles:n.styles,next:p},n=n.next;return r.styles+";"}return function(e,t,r){var n="";if(Array.isArray(r))for(var o=0;o<r.length;o++)n+=y(e,t,r[o])+";";else for(var a in r){var i=r[a];if("object"!=typeof i)null!=t&&void 0!==t[i]?n+=a+"{"+t[i]+"}":s(i)&&(n+=u(a)+":"+l(a,i)+";");else if(!Array.isArray(i)||"string"!=typeof i[0]||null!=t&&void 0!==t[i[0]]){var c=y(e,t,i);switch(a){case"animation":case"animationName":n+=u(a)+":"+c+";";break;default:n+=a+"{"+c+"}"}}else for(var f=0;f<i.length;f++)s(i[f])&&(n+=u(a)+":"+l(a,i[f])+";")}return n}(e,t,r);case"function":if(void 0!==e){var o=p,a=r(e);return p=o,y(e,t,a)}}if(null==t)return r;var i=t[r];return void 0!==i?i:r}var p,m=/label:\s*([^\s;\n{]+)\s*(;|$)/g,d=function(e,t,r){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var o=!0,a="";p=void 0;var i=e[0];null==i||void 0===i.raw?(o=!1,a+=y(r,t,i)):a+=i[0];for(var c=1;c<e.length;c++)a+=y(r,t,e[c]),o&&(a+=i[c]);m.lastIndex=0;for(var f,s="";null!==(f=m.exec(a));)s+="-"+f[1];return{name:(0,n.Z)(a)+s,styles:a,next:p}}},6911:(e,t,r)=>{r.d(t,{Z:()=>n});var n=function(e){var t=new WeakMap;return function(r){if(t.has(r))return t.get(r);var n=e(r);return t.set(r,n),n}}},69060:(e,t,r)=>{var n=r(38381),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};function f(e){return n.isMemo(e)?i:c[e.$$typeof]||o}c[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},c[n.Memo]=i;var s=Object.defineProperty,u=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,y=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,m=Object.prototype;e.exports=function e(t,r,n){if("string"!=typeof r){if(m){var o=p(r);o&&o!==m&&e(t,o,n)}var i=u(r);l&&(i=i.concat(l(r)));for(var c=f(t),d=f(r),v=0;v<i.length;++v){var b=i[v];if(!(a[b]||n&&n[b]||d&&d[b]||c&&c[b])){var g=y(r,b);try{s(t,b,g)}catch(e){}}}}return t}},40903:(e,t)=>{var r="function"==typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,a=r?Symbol.for("react.fragment"):60107,i=r?Symbol.for("react.strict_mode"):60108,c=r?Symbol.for("react.profiler"):60114,f=r?Symbol.for("react.provider"):60109,s=r?Symbol.for("react.context"):60110,u=r?Symbol.for("react.async_mode"):60111,l=r?Symbol.for("react.concurrent_mode"):60111,y=r?Symbol.for("react.forward_ref"):60112,p=r?Symbol.for("react.suspense"):60113,m=r?Symbol.for("react.suspense_list"):60120,d=r?Symbol.for("react.memo"):60115,v=r?Symbol.for("react.lazy"):60116,b=r?Symbol.for("react.block"):60121,g=r?Symbol.for("react.fundamental"):60117,$=r?Symbol.for("react.responder"):60118,S=r?Symbol.for("react.scope"):60119;function h(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case u:case l:case a:case c:case i:case p:return e;default:switch(e=e&&e.$$typeof){case s:case y:case v:case d:case f:return e;default:return t}}case o:return t}}}function x(e){return h(e)===l}t.AsyncMode=u,t.ConcurrentMode=l,t.ContextConsumer=s,t.ContextProvider=f,t.Element=n,t.ForwardRef=y,t.Fragment=a,t.Lazy=v,t.Memo=d,t.Portal=o,t.Profiler=c,t.StrictMode=i,t.Suspense=p,t.isAsyncMode=function(e){return x(e)||h(e)===u},t.isConcurrentMode=x,t.isContextConsumer=function(e){return h(e)===s},t.isContextProvider=function(e){return h(e)===f},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return h(e)===y},t.isFragment=function(e){return h(e)===a},t.isLazy=function(e){return h(e)===v},t.isMemo=function(e){return h(e)===d},t.isPortal=function(e){return h(e)===o},t.isProfiler=function(e){return h(e)===c},t.isStrictMode=function(e){return h(e)===i},t.isSuspense=function(e){return h(e)===p},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===a||e===l||e===c||e===i||e===p||e===m||"object"==typeof e&&null!==e&&(e.$$typeof===v||e.$$typeof===d||e.$$typeof===f||e.$$typeof===s||e.$$typeof===y||e.$$typeof===g||e.$$typeof===$||e.$$typeof===S||e.$$typeof===b)},t.typeOf=h},38381:(e,t,r)=>{e.exports=r(40903)}}]);
//# sourceMappingURL=324.99f9108200edbca6.js.map