/*! For license information please see index.a87db2523fbc01dd8234.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return s}));var n=r(2),o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var a=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var r,n,a=c(e),l=1;l<arguments.length;l++){for(var s in r=Object(arguments[l]))u.call(r,s)&&(a[s]=r[s]);if(o){n=o(r);for(var f=0;f<n.length;f++)i.call(r,n[f])&&(a[n[f]]=r[n[f]])}}return a},l=Object(n.b)((function(e,t){var r=60103,n=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var o=60109,u=60110,i=60112;t.Suspense=60113;var c=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var s=Symbol.for;r=s("react.element"),n=s("react.portal"),t.Fragment=s("react.fragment"),t.StrictMode=s("react.strict_mode"),t.Profiler=s("react.profiler"),o=s("react.provider"),u=s("react.context"),i=s("react.forward_ref"),t.Suspense=s("react.suspense"),c=s("react.memo"),l=s("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function p(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},d={};function m(e,t,r){this.props=e,this.context=t,this.refs=d,this.updater=r||y}function h(){}function b(e,t,r){this.props=e,this.context=t,this.refs=d,this.updater=r||y}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(p(85));this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},h.prototype=m.prototype;var g=b.prototype=new h;g.constructor=b,a(g,m.prototype),g.isPureReactComponent=!0;var v={current:null},w=Object.prototype.hasOwnProperty,S={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,n){var o,u={},i=null,c=null;if(null!=t)for(o in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(i=""+t.key),t)w.call(t,o)&&!S.hasOwnProperty(o)&&(u[o]=t[o]);var a=arguments.length-2;if(1===a)u.children=n;else if(1<a){for(var l=Array(a),s=0;s<a;s++)l[s]=arguments[s+2];u.children=l}if(e&&e.defaultProps)for(o in a=e.defaultProps)void 0===u[o]&&(u[o]=a[o]);return{$$typeof:r,type:e,key:i,ref:c,props:u,_owner:v.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var j=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function O(e,t,o,u,i){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var a=!1;if(null===e)a=!0;else switch(c){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case r:case n:a=!0}}if(a)return i=i(a=e),e=""===u?"."+C(a,0):u,Array.isArray(i)?(o="",null!=e&&(o=e.replace(j,"$&/")+"/"),O(i,t,o,"",(function(e){return e}))):null!=i&&(_(i)&&(i=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,o+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(j,"$&/")+"/")+e)),t.push(i)),1;if(a=0,u=""===u?".":u+":",Array.isArray(e))for(var l=0;l<e.length;l++){var s=u+C(c=e[l],l);a+=O(c,t,o,s,i)}else if("function"==typeof(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e)))for(e=s.call(e),l=0;!(c=e.next()).done;)a+=O(c=c.value,t,o,s=u+C(c,l++),i);else if("object"===c)throw t=""+e,Error(p(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return a}function x(e,t,r){if(null==e)return e;var n=[],o=0;return O(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function I(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var k={current:null};function P(){var e=k.current;if(null===e)throw Error(p(321));return e}var R={ReactCurrentDispatcher:k,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:v,IsSomeRendererActing:{current:!1},assign:a};t.Children={map:x,forEach:function(e,t,r){x(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return x(e,(function(){t++})),t},toArray:function(e){return x(e,(function(e){return e}))||[]},only:function(e){if(!_(e))throw Error(p(143));return e}},t.Component=m,t.PureComponent=b,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R,t.cloneElement=function(e,t,n){if(null==e)throw Error(p(267,e));var o=a({},e.props),u=e.key,i=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,c=v.current),void 0!==t.key&&(u=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)w.call(t,s)&&!S.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==l?l[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){l=Array(s);for(var f=0;f<s;f++)l[f]=arguments[f+2];o.children=l}return{$$typeof:r,type:e.type,key:u,ref:i,props:o,_owner:c}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:u,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:o,_context:e},e.Consumer=e},t.createElement=E,t.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:i,render:e}},t.isValidElement=_,t.lazy=function(e){return{$$typeof:l,_payload:{_status:-1,_result:e},_init:I}},t.memo=function(e,t){return{$$typeof:c,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return P().useCallback(e,t)},t.useContext=function(e,t){return P().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return P().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return P().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return P().useLayoutEffect(e,t)},t.useMemo=function(e,t){return P().useMemo(e,t)},t.useReducer=function(e,t,r){return P().useReducer(e,t,r)},t.useRef=function(e){return P().useRef(e)},t.useState=function(e){return P().useState(e)},t.version="17.0.2"})),s=Object(n.b)((function(e){e.exports=l}))},,function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return o}));var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{};function o(e,t,r){return e(r={path:t,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==t&&r.path)}},r.exports),r.exports}}).call(this,r(4))},,function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(e,t,r){"use strict";var n=r(2);Object(n.b)((function(e){function t(){return e.exports=t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,t.apply(this,arguments)}e.exports=t,e.exports.default=e.exports,e.exports.__esModule=!0}))},function(e,t,r){"use strict";r.r(t);var n=r(0),o=(r(2),n.b.useState),u=r(3),i=r(1);const c=({value:e,onChange:t,onIncrement:r,onDecrement:o,precision:u,step:c})=>{const{getInputProps:a}=Object(i.k)({precision:u,step:c,value:e,onChange:t});return n.b.createElement(i.g,null,n.b.createElement(i.b,{onClick:o},"-"),n.b.createElement(i.i,{...a()}),n.b.createElement(i.b,{onClick:r},"+"))},a=new Intl.NumberFormat("en-us",{maximumFractionDigits:0}),l=()=>{const{weightInputProps:e,weight:t}=((e="")=>{const[t,r]=o(e),n=parseFloat(t)||null;return{weightInputProps:{value:t,onChange:e=>{if(parseFloat(e)<=1)return r(1..toString());r(e)},onIncrement:()=>{const e=n||0,t=e%2.5;r((0===t?e+2.5:e+2.5-t).toString())},onDecrement:()=>{const e=n||0,t=e%2.5,o=0===t?e-2.5:e-t;if(o<=1)return r(1..toString());r(o.toString())},precision:1,step:2.5},weight:n}})(),{repsInputProps:r,reps:u}=((e="")=>{const[t,r]=o(e),n=parseInt(t)||null;return{repsInputProps:{value:t,onChange:e=>{const t=parseInt(e);return t>=10?r(10..toString()):t<=1?r(1..toString()):void r(e)},onIncrement:()=>{const e=(n||0)+1;if(e>=10)return r(10..toString());r(e.toString())},onDecrement:()=>{const e=(n||2)-1;if(e<=1)return r(1..toString());r(e.toString())},precision:0,step:1},reps:n}})(),{rpeInputProps:l,rpe:s}=((e="")=>{const[t,r]=o(e),n=parseFloat(t)||null;return{rpeInputProps:{value:t,onChange:e=>{const t=parseInt(e);return t>=10?r(10..toString()):t<=6?r(6..toString()):void r(e)},onIncrement:()=>{const e=(n||5.5)+.5;if(e>=10)return r(10..toString());r(e.toString())},onDecrement:()=>{const e=(n||6.5)-.5;if(e<=6)return r(6..toString());r(e.toString())},precision:1,step:.5},rpe:n}})(),f=t&&u&&s?t*(1+(u+10-s)/30):null;return n.b.createElement(i.c,null,n.b.createElement(i.d,null,n.b.createElement(i.a,{display:"flex",alignItems:"center",height:"4em"},n.b.createElement(i.h,null,"what weight!?")),n.b.createElement(i.e,{templateColumns:"1fr 2fr",templateRows:"1fr 1fr 1fr",gap:2},n.b.createElement(i.f,{colStart:1,rowStart:1,display:"flex",justifyContent:"stretch",alignItems:"center"},n.b.createElement(i.j,{fontSize:"xl",whiteSpace:"nowrap",textAlign:"center"},"Weight lifted:")),n.b.createElement(i.f,{colStart:2,rowStart:1},n.b.createElement(c,{...e})),n.b.createElement(i.f,{colStart:1,rowStart:2,display:"flex",justifyContent:"stretch",alignItems:"center"},n.b.createElement(i.j,{fontSize:"xl",whiteSpace:"nowrap"},"Reps performed:")),n.b.createElement(i.f,{colStart:2,rowStart:2},n.b.createElement(c,{...r})),n.b.createElement(i.f,{colStart:1,rowStart:3,display:"flex",justifyContent:"stretch",alignItems:"center"},n.b.createElement(i.j,{fontSize:"xl",whiteSpace:"nowrap"},"At RPE:")),n.b.createElement(i.f,{colStart:2,rowStart:3},n.b.createElement(c,{...l}))),n.b.createElement(i.a,{display:"flex",justifyContent:"center",alignItems:"center",height:"5em"},f&&n.b.createElement(i.j,{fontSize:"3xl"},"1RM: ",a.format(f)))))};u.a.render(n.b.createElement(l,null),document.getElementById("root"))}],[[6,3,1,2]]]);