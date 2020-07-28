/*! For license information please see c15d5a93.8ad4ca89.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{166:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return f}));var r=n(2),o=n(9),i=(n(181),n(180)),c={id:"api-reference-key-binding-util",title:"KeyBindingUtil"},a={id:"api-reference-key-binding-util",title:"KeyBindingUtil",description:"The KeyBindingUtil module is a static set of utility functions for",source:"@site/../docs/APIReference-KeyBindingUtil.md",permalink:"/docs/api-reference-key-binding-util",editUrl:"https://github.com/facebook/draft-js/edit/master/docs/../docs/APIReference-KeyBindingUtil.md",lastUpdatedBy:"Marshall Roch",lastUpdatedAt:1586328191,sidebar:"docs",previous:{title:"AtomicBlockUtils",permalink:"/docs/api-reference-atomic-block-utils"},next:{title:"Modifier",permalink:"/docs/api-reference-modifier"}},u=[{value:"Static Methods",id:"static-methods",children:[{value:"<code>isCtrlKeyCommand()</code>",id:"isctrlkeycommand",children:[]},{value:"<code>isOptionKeyCommand()</code>",id:"isoptionkeycommand",children:[]},{value:"<code>usesMacOSHeuristics()</code>",id:"usesmacosheuristics",children:[]},{value:"<code>hasCommandModifier()</code>",id:"hascommandmodifier",children:[]}]}],l={rightToc:u};function f(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"KeyBindingUtil")," module is a static set of utility functions for\ndefining key bindings."),Object(i.b)("h2",{id:"static-methods"},"Static Methods"),Object(i.b)("h3",{id:"isctrlkeycommand"},Object(i.b)("inlineCode",{parentName:"h3"},"isCtrlKeyCommand()")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"isCtrlKeyCommand: function(\n  e: SyntheticKeyboardEvent\n): boolean\n")),Object(i.b)("p",null,"Check whether the ",Object(i.b)("inlineCode",{parentName:"p"},"ctrlKey")," modifier is ",Object(i.b)("em",{parentName:"p"},"not")," being used in conjunction with\nthe ",Object(i.b)("inlineCode",{parentName:"p"},"altKey")," modifier. If they are combined, the result is an ",Object(i.b)("inlineCode",{parentName:"p"},"altGraph"),"\nkey modifier, which is not handled by this set of key bindings."),Object(i.b)("h3",{id:"isoptionkeycommand"},Object(i.b)("inlineCode",{parentName:"h3"},"isOptionKeyCommand()")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"isOptionKeyCommand: function(\n  e: SyntheticKeyboardEvent\n): boolean\n")),Object(i.b)("h3",{id:"usesmacosheuristics"},Object(i.b)("inlineCode",{parentName:"h3"},"usesMacOSHeuristics()")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"usesMacOSHeuristics: function(): boolean\n")),Object(i.b)("p",null,"Check whether heuristics that only apply to macOS are used internally, for\nexample when determining the key combination used as command modifier."),Object(i.b)("h3",{id:"hascommandmodifier"},Object(i.b)("inlineCode",{parentName:"h3"},"hasCommandModifier()")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"hasCommandModifier: function(\n  e: SyntheticKeyboardEvent\n): boolean\n")))}f.isMDXComponent=!0},180:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return y}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),f=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=f(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=f(n),d=r,y=s["".concat(c,".").concat(d)]||s[d]||p[d]||i;return n?o.a.createElement(y,a(a({ref:t},l),{},{components:n})):o.a.createElement(y,a({ref:t},l))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var l=2;l<i;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},181:function(e,t,n){"use strict";e.exports=n(182)},182:function(e,t,n){"use strict";var r=n(183),o="function"==typeof Symbol&&Symbol.for,i=o?Symbol.for("react.element"):60103,c=o?Symbol.for("react.portal"):60106,a=o?Symbol.for("react.fragment"):60107,u=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,f=o?Symbol.for("react.provider"):60109,s=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.concurrent_mode"):60111,d=o?Symbol.for("react.forward_ref"):60112,y=o?Symbol.for("react.suspense"):60113,m=o?Symbol.for("react.memo"):60115,b=o?Symbol.for("react.lazy"):60116,h="function"==typeof Symbol&&Symbol.iterator;function v(e,t,n,r,o,i,c,a){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,o,i,c,a],l=0;(e=Error(t.replace(/%s/g,(function(){return u[l++]})))).name="Invariant Violation"}throw e.framesToPop=1,e}}function O(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);v(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function w(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||j}function k(){}function C(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||j}w.prototype.isReactComponent={},w.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&O("85"),this.updater.enqueueSetState(this,e,t,"setState")},w.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},k.prototype=w.prototype;var S=C.prototype=new k;S.constructor=C,r(S,w.prototype),S.isPureReactComponent=!0;var P={current:null},_={current:null},x=Object.prototype.hasOwnProperty,E={key:!0,ref:!0,__self:!0,__source:!0};function N(e,t,n){var r=void 0,o={},c=null,a=null;if(null!=t)for(r in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(c=""+t.key),t)x.call(t,r)&&!E.hasOwnProperty(r)&&(o[r]=t[r]);var u=arguments.length-2;if(1===u)o.children=n;else if(1<u){for(var l=Array(u),f=0;f<u;f++)l[f]=arguments[f+2];o.children=l}if(e&&e.defaultProps)for(r in u=e.defaultProps)void 0===o[r]&&(o[r]=u[r]);return{$$typeof:i,type:e,key:c,ref:a,props:o,_owner:_.current}}function $(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var M=/\/+/g,R=[];function K(e,t,n,r){if(R.length){var o=R.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function T(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>R.length&&R.push(e)}function U(e,t,n){return null==e?0:function e(t,n,r,o){var a=typeof t;"undefined"!==a&&"boolean"!==a||(t=null);var u=!1;if(null===t)u=!0;else switch(a){case"string":case"number":u=!0;break;case"object":switch(t.$$typeof){case i:case c:u=!0}}if(u)return r(o,t,""===n?"."+A(t,0):n),1;if(u=0,n=""===n?".":n+":",Array.isArray(t))for(var l=0;l<t.length;l++){var f=n+A(a=t[l],l);u+=e(a,f,r,o)}else if(null===t||"object"!=typeof t?f=null:f="function"==typeof(f=h&&t[h]||t["@@iterator"])?f:null,"function"==typeof f)for(t=f.call(t),l=0;!(a=t.next()).done;)u+=e(a=a.value,f=n+A(a,l++),r,o);else"object"===a&&O("31","[object Object]"===(r=""+t)?"object with keys {"+Object.keys(t).join(", ")+"}":r,"");return u}(e,"",t,n)}function A(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function I(e,t){e.func.call(e.context,t,e.count++)}function D(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?B(e,r,n,(function(e){return e})):null!=e&&($(e)&&(e=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(M,"$&/")+"/")+n)),r.push(e))}function B(e,t,n,r,o){var i="";null!=n&&(i=(""+n).replace(M,"$&/")+"/"),U(e,D,t=K(t,i,r,o)),T(t)}function q(){var e=P.current;return null===e&&O("307"),e}var F={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return B(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;U(e,I,t=K(null,null,t,n)),T(t)},count:function(e){return U(e,(function(){return null}),null)},toArray:function(e){var t=[];return B(e,t,null,(function(e){return e})),t},only:function(e){return $(e)||O("143"),e}},createRef:function(){return{current:null}},Component:w,PureComponent:C,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:f,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:d,render:e}},lazy:function(e){return{$$typeof:b,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:m,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return q().useCallback(e,t)},useContext:function(e,t){return q().useContext(e,t)},useEffect:function(e,t){return q().useEffect(e,t)},useImperativeHandle:function(e,t,n){return q().useImperativeHandle(e,t,n)},useDebugValue:function(){},useLayoutEffect:function(e,t){return q().useLayoutEffect(e,t)},useMemo:function(e,t){return q().useMemo(e,t)},useReducer:function(e,t,n){return q().useReducer(e,t,n)},useRef:function(e){return q().useRef(e)},useState:function(e){return q().useState(e)},Fragment:a,StrictMode:u,Suspense:y,createElement:N,cloneElement:function(e,t,n){null==e&&O("267",e);var o=void 0,c=r({},e.props),a=e.key,u=e.ref,l=e._owner;if(null!=t){void 0!==t.ref&&(u=t.ref,l=_.current),void 0!==t.key&&(a=""+t.key);var f=void 0;for(o in e.type&&e.type.defaultProps&&(f=e.type.defaultProps),t)x.call(t,o)&&!E.hasOwnProperty(o)&&(c[o]=void 0===t[o]&&void 0!==f?f[o]:t[o])}if(1===(o=arguments.length-2))c.children=n;else if(1<o){f=Array(o);for(var s=0;s<o;s++)f[s]=arguments[s+2];c.children=f}return{$$typeof:i,type:e.type,key:a,ref:u,props:c,_owner:l}},createFactory:function(e){var t=N.bind(null,e);return t.type=e,t},isValidElement:$,version:"16.8.4",unstable_ConcurrentMode:p,unstable_Profiler:l,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:P,ReactCurrentOwner:_,assign:r}},L={default:F},H=L&&F||L;e.exports=H.default||H},183:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var n,a,u=c(e),l=1;l<arguments.length;l++){for(var f in n=Object(arguments[l]))o.call(n,f)&&(u[f]=n[f]);if(r){a=r(n);for(var s=0;s<a.length;s++)i.call(n,a[s])&&(u[a[s]]=n[a[s]])}}return u}}}]);