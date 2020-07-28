/*! For license information please see 294fda3d.401d8699.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{148:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(9),o=(n(181),n(180)),c={id:"api-reference-character-metadata",title:"CharacterMetadata"},i={id:"api-reference-character-metadata",title:"CharacterMetadata",description:"CharacterMetadata is an Immutable",source:"@site/../docs/APIReference-CharacterMetadata.md",permalink:"/docs/api-reference-character-metadata",editUrl:"https://github.com/facebook/draft-js/edit/master/docs/../docs/APIReference-CharacterMetadata.md",lastUpdatedBy:"Marshall Roch",lastUpdatedAt:1586328191,sidebar:"docs",previous:{title:"ContentBlock",permalink:"/docs/api-reference-content-block"},next:{title:"Entity",permalink:"/docs/api-reference-entity"}},l=[{value:"Overview",id:"overview",children:[]},{value:"Static Methods",id:"static-methods",children:[{value:"<code>create()</code>",id:"create",children:[]},{value:"<code>applyStyle()</code>",id:"applystyle",children:[]},{value:"<code>removeStyle()</code>",id:"removestyle",children:[]},{value:"<code>applyEntity()</code>",id:"applyentity",children:[]}]},{value:"Methods",id:"methods",children:[{value:"<code>getStyle()</code>",id:"getstyle",children:[]},{value:"<code>hasStyle()</code>",id:"hasstyle",children:[]},{value:"<code>getEntity()</code>",id:"getentity",children:[]}]}],u={rightToc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"CharacterMetadata")," is an Immutable\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"http://facebook.github.io/immutable-js/docs/#/Record/Record"}),"Record")," that\nrepresents inline style and entity information for a single character."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"CharacterMetadata")," objects are aggressively pooled and shared. If two characters\nhave the same inline style and entity, they are represented with the same\n",Object(o.b)("inlineCode",{parentName:"p"},"CharacterMetadata")," object. We therefore need only as many objects as combinations\nof utilized inline style sets with entity keys, keeping our memory footprint\nsmall even as the contents grow in size and complexity."),Object(o.b)("p",null,"To that end, you should create or apply changes to ",Object(o.b)("inlineCode",{parentName:"p"},"CharacterMetadata")," objects\nvia the provided set of static methods, which will ensure that pooling is utilized."),Object(o.b)("p",null,"Most Draft use cases are unlikely to use these static methods, since most common edit\noperations are already implemented and available via utility modules. The getter\nmethods, however, may come in handy at render time."),Object(o.b)("p",null,"See the API reference on\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api-reference-content-block#representing-styles-and-entities"}),"ContentBlock"),"\nfor information on how ",Object(o.b)("inlineCode",{parentName:"p"},"CharacterMetadata")," is used within ",Object(o.b)("inlineCode",{parentName:"p"},"ContentBlock"),"."),Object(o.b)("h2",{id:"overview"},"Overview"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Static Methods")),Object(o.b)("ul",{class:"apiIndex"},Object(o.b)("li",null,Object(o.b)("a",{href:"#create"},Object(o.b)("pre",null,"static create(...): CharacterMetadata"))),Object(o.b)("li",null,Object(o.b)("a",{href:"#applystyle"},Object(o.b)("pre",null,"static applyStyle(...): CharacterMetadata"))),Object(o.b)("li",null,Object(o.b)("a",{href:"#removestyle"},Object(o.b)("pre",null,"static removeStyle(...): CharacterMetadata"))),Object(o.b)("li",null,Object(o.b)("a",{href:"#applyentity"},Object(o.b)("pre",null,"static applyEntity(...): CharacterMetadata")))),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Methods")),Object(o.b)("ul",{class:"apiIndex"},Object(o.b)("li",null,Object(o.b)("a",{href:"#getstyle"},Object(o.b)("pre",null,"getStyle(): DraftInlineStyle"))),Object(o.b)("li",null,Object(o.b)("a",{href:"#hasstyle"},Object(o.b)("pre",null,"hasStyle(style: string): boolean"))),Object(o.b)("li",null,Object(o.b)("a",{href:"#getentity"},Object(o.b)("pre",null,"getEntity(): ?string")))),Object(o.b)("h2",{id:"static-methods"},"Static Methods"),Object(o.b)("p",null,"Under the hood, these methods will utilize pooling to return a matching object,\nor return a new object if none exists."),Object(o.b)("h3",{id:"create"},Object(o.b)("inlineCode",{parentName:"h3"},"create()")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"static create(config?: CharacterMetadataConfig): CharacterMetadata\n")),Object(o.b)("p",null,"Generates a ",Object(o.b)("inlineCode",{parentName:"p"},"CharacterMetadata")," object from the provided configuration. This\nfunction should be used in lieu of a constructor."),Object(o.b)("p",null,"The configuration will be used to check whether a pooled match for this\nconfiguration already exists. If so, the pooled object will be returned.\nOtherwise, a new ",Object(o.b)("inlineCode",{parentName:"p"},"CharacterMetadata")," will be pooled for this configuration,\nand returned."),Object(o.b)("h3",{id:"applystyle"},Object(o.b)("inlineCode",{parentName:"h3"},"applyStyle()")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"static applyStyle(\n  record: CharacterMetadata,\n  style: string\n): CharacterMetadata\n")),Object(o.b)("p",null,"Apply an inline style to this ",Object(o.b)("inlineCode",{parentName:"p"},"CharacterMetadata"),"."),Object(o.b)("h3",{id:"removestyle"},Object(o.b)("inlineCode",{parentName:"h3"},"removeStyle()")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"static removeStyle(\n  record: CharacterMetadata,\n  style: string\n): CharacterMetadata\n")),Object(o.b)("p",null,"Remove an inline style from this ",Object(o.b)("inlineCode",{parentName:"p"},"CharacterMetadata"),"."),Object(o.b)("h3",{id:"applyentity"},Object(o.b)("inlineCode",{parentName:"h3"},"applyEntity()")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"static applyEntity(\n  record: CharacterMetadata,\n  entityKey: ?string\n): CharacterMetadata\n")),Object(o.b)("p",null,"Apply an entity key -- or provide ",Object(o.b)("inlineCode",{parentName:"p"},"null")," to remove an entity key -- on this\n",Object(o.b)("inlineCode",{parentName:"p"},"CharacterMetadata"),"."),Object(o.b)("h2",{id:"methods"},"Methods"),Object(o.b)("h3",{id:"getstyle"},Object(o.b)("inlineCode",{parentName:"h3"},"getStyle()")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"getStyle(): DraftInlineStyle\n")),Object(o.b)("p",null,"Returns the ",Object(o.b)("inlineCode",{parentName:"p"},"DraftInlineStyle")," for this character, an ",Object(o.b)("inlineCode",{parentName:"p"},"OrderedSet")," of strings\nthat represents the inline style to apply for the character at render time."),Object(o.b)("h3",{id:"hasstyle"},Object(o.b)("inlineCode",{parentName:"h3"},"hasStyle()")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"hasStyle(style: string): boolean\n")),Object(o.b)("p",null,"Returns whether this character has the specified style."),Object(o.b)("h3",{id:"getentity"},Object(o.b)("inlineCode",{parentName:"h3"},"getEntity()")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"getEntity(): ?string\n")),Object(o.b)("p",null,"Returns the entity key (if any) for this character, as mapped to the global set of\nentities tracked by the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/facebook/draft-js/blob/master/src/model/entity/DraftEntity.js"}),Object(o.b)("inlineCode",{parentName:"a"},"Entity")),"\nmodule."),Object(o.b)("p",null,"By tracking a string key here, we can keep the corresponding metadata separate\nfrom the character representation."),Object(o.b)("p",null,"If null, no entity is applied for this character."))}s.isMDXComponent=!0},180:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),f=r,d=p["".concat(c,".").concat(f)]||p[f]||b[f]||o;return n?a.a.createElement(d,i(i({ref:t},u),{},{components:n})):a.a.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},181:function(e,t,n){"use strict";e.exports=n(182)},182:function(e,t,n){"use strict";var r=n(183),a="function"==typeof Symbol&&Symbol.for,o=a?Symbol.for("react.element"):60103,c=a?Symbol.for("react.portal"):60106,i=a?Symbol.for("react.fragment"):60107,l=a?Symbol.for("react.strict_mode"):60108,u=a?Symbol.for("react.profiler"):60114,s=a?Symbol.for("react.provider"):60109,p=a?Symbol.for("react.context"):60110,b=a?Symbol.for("react.concurrent_mode"):60111,f=a?Symbol.for("react.forward_ref"):60112,d=a?Symbol.for("react.suspense"):60113,y=a?Symbol.for("react.memo"):60115,h=a?Symbol.for("react.lazy"):60116,m="function"==typeof Symbol&&Symbol.iterator;function j(e,t,n,r,a,o,c,i){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,r,a,o,c,i],u=0;(e=Error(t.replace(/%s/g,(function(){return l[u++]})))).name="Invariant Violation"}throw e.framesToPop=1,e}}function O(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);j(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function C(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||v}function w(){}function S(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||v}C.prototype.isReactComponent={},C.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&O("85"),this.updater.enqueueSetState(this,e,t,"setState")},C.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=C.prototype;var k=S.prototype=new w;k.constructor=S,r(k,C.prototype),k.isPureReactComponent=!0;var N={current:null},M={current:null},E=Object.prototype.hasOwnProperty,P={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,n){var r=void 0,a={},c=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(c=""+t.key),t)E.call(t,r)&&!P.hasOwnProperty(r)&&(a[r]=t[r]);var l=arguments.length-2;if(1===l)a.children=n;else if(1<l){for(var u=Array(l),s=0;s<l;s++)u[s]=arguments[s+2];a.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===a[r]&&(a[r]=l[r]);return{$$typeof:o,type:e,key:c,ref:i,props:a,_owner:M.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var R=/\/+/g,$=[];function I(e,t,n,r){if($.length){var a=$.pop();return a.result=e,a.keyPrefix=t,a.func=n,a.context=r,a.count=0,a}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function T(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>$.length&&$.push(e)}function D(e,t,n){return null==e?0:function e(t,n,r,a){var i=typeof t;"undefined"!==i&&"boolean"!==i||(t=null);var l=!1;if(null===t)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case o:case c:l=!0}}if(l)return r(a,t,""===n?"."+A(t,0):n),1;if(l=0,n=""===n?".":n+":",Array.isArray(t))for(var u=0;u<t.length;u++){var s=n+A(i=t[u],u);l+=e(i,s,r,a)}else if(null===t||"object"!=typeof t?s=null:s="function"==typeof(s=m&&t[m]||t["@@iterator"])?s:null,"function"==typeof s)for(t=s.call(t),u=0;!(i=t.next()).done;)l+=e(i=i.value,s=n+A(i,u++),r,a);else"object"===i&&O("31","[object Object]"===(r=""+t)?"object with keys {"+Object.keys(t).join(", ")+"}":r,"");return l}(e,"",t,n)}function A(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function U(e,t){e.func.call(e.context,t,e.count++)}function q(e,t,n){var r=e.result,a=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?B(e,r,n,(function(e){return e})):null!=e&&(_(e)&&(e=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,a+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(R,"$&/")+"/")+n)),r.push(e))}function B(e,t,n,r,a){var o="";null!=n&&(o=(""+n).replace(R,"$&/")+"/"),D(e,q,t=I(t,o,r,a)),T(t)}function z(){var e=N.current;return null===e&&O("307"),e}var F={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return B(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;D(e,U,t=I(null,null,t,n)),T(t)},count:function(e){return D(e,(function(){return null}),null)},toArray:function(e){var t=[];return B(e,t,null,(function(e){return e})),t},only:function(e){return _(e)||O("143"),e}},createRef:function(){return{current:null}},Component:C,PureComponent:S,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:f,render:e}},lazy:function(e){return{$$typeof:h,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:y,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return z().useCallback(e,t)},useContext:function(e,t){return z().useContext(e,t)},useEffect:function(e,t){return z().useEffect(e,t)},useImperativeHandle:function(e,t,n){return z().useImperativeHandle(e,t,n)},useDebugValue:function(){},useLayoutEffect:function(e,t){return z().useLayoutEffect(e,t)},useMemo:function(e,t){return z().useMemo(e,t)},useReducer:function(e,t,n){return z().useReducer(e,t,n)},useRef:function(e){return z().useRef(e)},useState:function(e){return z().useState(e)},Fragment:i,StrictMode:l,Suspense:d,createElement:x,cloneElement:function(e,t,n){null==e&&O("267",e);var a=void 0,c=r({},e.props),i=e.key,l=e.ref,u=e._owner;if(null!=t){void 0!==t.ref&&(l=t.ref,u=M.current),void 0!==t.key&&(i=""+t.key);var s=void 0;for(a in e.type&&e.type.defaultProps&&(s=e.type.defaultProps),t)E.call(t,a)&&!P.hasOwnProperty(a)&&(c[a]=void 0===t[a]&&void 0!==s?s[a]:t[a])}if(1===(a=arguments.length-2))c.children=n;else if(1<a){s=Array(a);for(var p=0;p<a;p++)s[p]=arguments[p+2];c.children=s}return{$$typeof:o,type:e.type,key:i,ref:l,props:c,_owner:u}},createFactory:function(e){var t=x.bind(null,e);return t.type=e,t},isValidElement:_,version:"16.8.4",unstable_ConcurrentMode:b,unstable_Profiler:u,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:N,ReactCurrentOwner:M,assign:r}},L={default:F},V=L&&F||L;e.exports=V.default||V},183:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,t){for(var n,i,l=c(e),u=1;u<arguments.length;u++){for(var s in n=Object(arguments[u]))a.call(n,s)&&(l[s]=n[s]);if(r){i=r(n);for(var p=0;p<i.length;p++)o.call(n,i[p])&&(l[i[p]]=n[i[p]])}}return l}}}]);