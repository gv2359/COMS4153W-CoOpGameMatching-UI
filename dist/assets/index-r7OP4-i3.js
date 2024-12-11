function og(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function sg(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ff={exports:{}},ys={},hf={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ri=Symbol.for("react.element"),ag=Symbol.for("react.portal"),lg=Symbol.for("react.fragment"),ug=Symbol.for("react.strict_mode"),cg=Symbol.for("react.profiler"),dg=Symbol.for("react.provider"),fg=Symbol.for("react.context"),hg=Symbol.for("react.forward_ref"),pg=Symbol.for("react.suspense"),mg=Symbol.for("react.memo"),gg=Symbol.for("react.lazy"),oc=Symbol.iterator;function vg(e){return e===null||typeof e!="object"?null:(e=oc&&e[oc]||e["@@iterator"],typeof e=="function"?e:null)}var pf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},mf=Object.assign,gf={};function xr(e,t,n){this.props=e,this.context=t,this.refs=gf,this.updater=n||pf}xr.prototype.isReactComponent={};xr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};xr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function vf(){}vf.prototype=xr.prototype;function Hl(e,t,n){this.props=e,this.context=t,this.refs=gf,this.updater=n||pf}var Vl=Hl.prototype=new vf;Vl.constructor=Hl;mf(Vl,xr.prototype);Vl.isPureReactComponent=!0;var sc=Array.isArray,yf=Object.prototype.hasOwnProperty,Wl={current:null},wf={key:!0,ref:!0,__self:!0,__source:!0};function _f(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)yf.call(t,r)&&!wf.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ri,type:e,key:o,ref:s,props:i,_owner:Wl.current}}function yg(e,t){return{$$typeof:Ri,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Gl(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ri}function wg(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ac=/\/+/g;function Gs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?wg(""+e.key):t.toString(36)}function fo(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Ri:case ag:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Gs(s,0):r,sc(i)?(n="",e!=null&&(n=e.replace(ac,"$&/")+"/"),fo(i,t,n,"",function(u){return u})):i!=null&&(Gl(i)&&(i=yg(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(ac,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",sc(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+Gs(o,a);s+=fo(o,t,n,l,i)}else if(l=vg(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+Gs(o,a++),s+=fo(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Hi(e,t,n){if(e==null)return e;var r=[],i=0;return fo(e,r,"","",function(o){return t.call(n,o,i++)}),r}function _g(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var we={current:null},ho={transition:null},Sg={ReactCurrentDispatcher:we,ReactCurrentBatchConfig:ho,ReactCurrentOwner:Wl};function Sf(){throw Error("act(...) is not supported in production builds of React.")}M.Children={map:Hi,forEach:function(e,t,n){Hi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Hi(e,function(){t++}),t},toArray:function(e){return Hi(e,function(t){return t})||[]},only:function(e){if(!Gl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=xr;M.Fragment=lg;M.Profiler=cg;M.PureComponent=Hl;M.StrictMode=ug;M.Suspense=pg;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sg;M.act=Sf;M.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=mf({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Wl.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)yf.call(t,l)&&!wf.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ri,type:e.type,key:i,ref:o,props:r,_owner:s}};M.createContext=function(e){return e={$$typeof:fg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:dg,_context:e},e.Consumer=e};M.createElement=_f;M.createFactory=function(e){var t=_f.bind(null,e);return t.type=e,t};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:hg,render:e}};M.isValidElement=Gl;M.lazy=function(e){return{$$typeof:gg,_payload:{_status:-1,_result:e},_init:_g}};M.memo=function(e,t){return{$$typeof:mg,type:e,compare:t===void 0?null:t}};M.startTransition=function(e){var t=ho.transition;ho.transition={};try{e()}finally{ho.transition=t}};M.unstable_act=Sf;M.useCallback=function(e,t){return we.current.useCallback(e,t)};M.useContext=function(e){return we.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return we.current.useDeferredValue(e)};M.useEffect=function(e,t){return we.current.useEffect(e,t)};M.useId=function(){return we.current.useId()};M.useImperativeHandle=function(e,t,n){return we.current.useImperativeHandle(e,t,n)};M.useInsertionEffect=function(e,t){return we.current.useInsertionEffect(e,t)};M.useLayoutEffect=function(e,t){return we.current.useLayoutEffect(e,t)};M.useMemo=function(e,t){return we.current.useMemo(e,t)};M.useReducer=function(e,t,n){return we.current.useReducer(e,t,n)};M.useRef=function(e){return we.current.useRef(e)};M.useState=function(e){return we.current.useState(e)};M.useSyncExternalStore=function(e,t,n){return we.current.useSyncExternalStore(e,t,n)};M.useTransition=function(){return we.current.useTransition()};M.version="18.3.1";hf.exports=M;var S=hf.exports;const $e=sg(S),kg=og({__proto__:null,default:$e},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eg=S,xg=Symbol.for("react.element"),Ig=Symbol.for("react.fragment"),Cg=Object.prototype.hasOwnProperty,Tg=Eg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Pg={key:!0,ref:!0,__self:!0,__source:!0};function kf(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Cg.call(t,r)&&!Pg.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:xg,type:e,key:o,ref:s,props:i,_owner:Tg.current}}ys.Fragment=Ig;ys.jsx=kf;ys.jsxs=kf;ff.exports=ys;var v=ff.exports,Ef={exports:{}},be={},xf={exports:{}},If={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,O){var b=P.length;P.push(O);e:for(;0<b;){var F=b-1>>>1,B=P[F];if(0<i(B,O))P[F]=O,P[b]=B,b=F;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var O=P[0],b=P.pop();if(b!==O){P[0]=b;e:for(var F=0,B=P.length,dn=B>>>1;F<dn;){var He=2*(F+1)-1,Ct=P[He],Te=He+1,at=P[Te];if(0>i(Ct,b))Te<B&&0>i(at,Ct)?(P[F]=at,P[Te]=b,F=Te):(P[F]=Ct,P[He]=b,F=He);else if(Te<B&&0>i(at,b))P[F]=at,P[Te]=b,F=Te;else break e}}return O}function i(P,O){var b=P.sortIndex-O.sortIndex;return b!==0?b:P.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],f=1,d=null,m=3,g=!1,w=!1,_=!1,E=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(P){for(var O=n(u);O!==null;){if(O.callback===null)r(u);else if(O.startTime<=P)r(u),O.sortIndex=O.expirationTime,t(l,O);else break;O=n(u)}}function y(P){if(_=!1,p(P),!w)if(n(l)!==null)w=!0,Ar(x);else{var O=n(u);O!==null&&cn(y,O.startTime-P)}}function x(P,O){w=!1,_&&(_=!1,h(N),N=-1),g=!0;var b=m;try{for(p(O),d=n(l);d!==null&&(!(d.expirationTime>O)||P&&!Ce());){var F=d.callback;if(typeof F=="function"){d.callback=null,m=d.priorityLevel;var B=F(d.expirationTime<=O);O=e.unstable_now(),typeof B=="function"?d.callback=B:d===n(l)&&r(l),p(O)}else r(l);d=n(l)}if(d!==null)var dn=!0;else{var He=n(u);He!==null&&cn(y,He.startTime-O),dn=!1}return dn}finally{d=null,m=b,g=!1}}var C=!1,k=null,N=-1,j=5,D=-1;function Ce(){return!(e.unstable_now()-D<j)}function ln(){if(k!==null){var P=e.unstable_now();D=P;var O=!0;try{O=k(!0,P)}finally{O?un():(C=!1,k=null)}}else C=!1}var un;if(typeof c=="function")un=function(){c(ln)};else if(typeof MessageChannel<"u"){var Fi=new MessageChannel,Vs=Fi.port2;Fi.port1.onmessage=ln,un=function(){Vs.postMessage(null)}}else un=function(){E(ln,0)};function Ar(P){k=P,C||(C=!0,un())}function cn(P,O){N=E(function(){P(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){w||g||(w=!0,Ar(x))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(P){switch(m){case 1:case 2:case 3:var O=3;break;default:O=m}var b=m;m=O;try{return P()}finally{m=b}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,O){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var b=m;m=P;try{return O()}finally{m=b}},e.unstable_scheduleCallback=function(P,O,b){var F=e.unstable_now();switch(typeof b=="object"&&b!==null?(b=b.delay,b=typeof b=="number"&&0<b?F+b:F):b=F,P){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=b+B,P={id:f++,callback:O,priorityLevel:P,startTime:b,expirationTime:B,sortIndex:-1},b>F?(P.sortIndex=b,t(u,P),n(l)===null&&P===n(u)&&(_?(h(N),N=-1):_=!0,cn(y,b-F))):(P.sortIndex=B,t(l,P),w||g||(w=!0,Ar(x))),P},e.unstable_shouldYield=Ce,e.unstable_wrapCallback=function(P){var O=m;return function(){var b=m;m=O;try{return P.apply(this,arguments)}finally{m=b}}}})(If);xf.exports=If;var Rg=xf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ng=S,Ae=Rg;function I(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Cf=new Set,ii={};function Ln(e,t){cr(e,t),cr(e+"Capture",t)}function cr(e,t){for(ii[e]=t,e=0;e<t.length;e++)Cf.add(t[e])}var wt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Aa=Object.prototype.hasOwnProperty,Og=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,lc={},uc={};function Ag(e){return Aa.call(uc,e)?!0:Aa.call(lc,e)?!1:Og.test(e)?uc[e]=!0:(lc[e]=!0,!1)}function bg(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Lg(e,t,n,r){if(t===null||typeof t>"u"||bg(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function _e(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var de={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){de[e]=new _e(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];de[t]=new _e(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){de[e]=new _e(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){de[e]=new _e(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){de[e]=new _e(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){de[e]=new _e(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){de[e]=new _e(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){de[e]=new _e(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){de[e]=new _e(e,5,!1,e.toLowerCase(),null,!1,!1)});var Kl=/[\-:]([a-z])/g;function Yl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Kl,Yl);de[t]=new _e(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Kl,Yl);de[t]=new _e(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Kl,Yl);de[t]=new _e(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){de[e]=new _e(e,1,!1,e.toLowerCase(),null,!1,!1)});de.xlinkHref=new _e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){de[e]=new _e(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ql(e,t,n,r){var i=de.hasOwnProperty(t)?de[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Lg(t,n,i,r)&&(n=null),r||i===null?Ag(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var It=Ng.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Vi=Symbol.for("react.element"),Fn=Symbol.for("react.portal"),Bn=Symbol.for("react.fragment"),ql=Symbol.for("react.strict_mode"),ba=Symbol.for("react.profiler"),Tf=Symbol.for("react.provider"),Pf=Symbol.for("react.context"),Jl=Symbol.for("react.forward_ref"),La=Symbol.for("react.suspense"),Da=Symbol.for("react.suspense_list"),Xl=Symbol.for("react.memo"),At=Symbol.for("react.lazy"),Rf=Symbol.for("react.offscreen"),cc=Symbol.iterator;function Lr(e){return e===null||typeof e!="object"?null:(e=cc&&e[cc]||e["@@iterator"],typeof e=="function"?e:null)}var J=Object.assign,Ks;function Br(e){if(Ks===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ks=t&&t[1]||""}return`
`+Ks+e}var Ys=!1;function Qs(e,t){if(!e||Ys)return"";Ys=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{Ys=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Br(e):""}function Dg(e){switch(e.tag){case 5:return Br(e.type);case 16:return Br("Lazy");case 13:return Br("Suspense");case 19:return Br("SuspenseList");case 0:case 2:case 15:return e=Qs(e.type,!1),e;case 11:return e=Qs(e.type.render,!1),e;case 1:return e=Qs(e.type,!0),e;default:return""}}function Ma(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Bn:return"Fragment";case Fn:return"Portal";case ba:return"Profiler";case ql:return"StrictMode";case La:return"Suspense";case Da:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Pf:return(e.displayName||"Context")+".Consumer";case Tf:return(e._context.displayName||"Context")+".Provider";case Jl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Xl:return t=e.displayName||null,t!==null?t:Ma(e.type)||"Memo";case At:t=e._payload,e=e._init;try{return Ma(e(t))}catch{}}return null}function Mg(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ma(t);case 8:return t===ql?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function en(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Nf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function $g(e){var t=Nf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Wi(e){e._valueTracker||(e._valueTracker=$g(e))}function Of(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Nf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Lo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function $a(e,t){var n=t.checked;return J({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function dc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=en(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Af(e,t){t=t.checked,t!=null&&Ql(e,"checked",t,!1)}function ja(e,t){Af(e,t);var n=en(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?za(e,t.type,n):t.hasOwnProperty("defaultValue")&&za(e,t.type,en(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function fc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function za(e,t,n){(t!=="number"||Lo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Hr=Array.isArray;function er(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+en(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ua(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(I(91));return J({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function hc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(I(92));if(Hr(n)){if(1<n.length)throw Error(I(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:en(n)}}function bf(e,t){var n=en(t.value),r=en(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function pc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Lf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Fa(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Lf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Gi,Df=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Gi=Gi||document.createElement("div"),Gi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Gi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function oi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Kr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},jg=["Webkit","ms","Moz","O"];Object.keys(Kr).forEach(function(e){jg.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Kr[t]=Kr[e]})});function Mf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Kr.hasOwnProperty(e)&&Kr[e]?(""+t).trim():t+"px"}function $f(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Mf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var zg=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ba(e,t){if(t){if(zg[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(I(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(I(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(I(61))}if(t.style!=null&&typeof t.style!="object")throw Error(I(62))}}function Ha(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Va=null;function Zl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Wa=null,tr=null,nr=null;function mc(e){if(e=Ai(e)){if(typeof Wa!="function")throw Error(I(280));var t=e.stateNode;t&&(t=Es(t),Wa(e.stateNode,e.type,t))}}function jf(e){tr?nr?nr.push(e):nr=[e]:tr=e}function zf(){if(tr){var e=tr,t=nr;if(nr=tr=null,mc(e),t)for(e=0;e<t.length;e++)mc(t[e])}}function Uf(e,t){return e(t)}function Ff(){}var qs=!1;function Bf(e,t,n){if(qs)return e(t,n);qs=!0;try{return Uf(e,t,n)}finally{qs=!1,(tr!==null||nr!==null)&&(Ff(),zf())}}function si(e,t){var n=e.stateNode;if(n===null)return null;var r=Es(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(I(231,t,typeof n));return n}var Ga=!1;if(wt)try{var Dr={};Object.defineProperty(Dr,"passive",{get:function(){Ga=!0}}),window.addEventListener("test",Dr,Dr),window.removeEventListener("test",Dr,Dr)}catch{Ga=!1}function Ug(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var Yr=!1,Do=null,Mo=!1,Ka=null,Fg={onError:function(e){Yr=!0,Do=e}};function Bg(e,t,n,r,i,o,s,a,l){Yr=!1,Do=null,Ug.apply(Fg,arguments)}function Hg(e,t,n,r,i,o,s,a,l){if(Bg.apply(this,arguments),Yr){if(Yr){var u=Do;Yr=!1,Do=null}else throw Error(I(198));Mo||(Mo=!0,Ka=u)}}function Dn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Hf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function gc(e){if(Dn(e)!==e)throw Error(I(188))}function Vg(e){var t=e.alternate;if(!t){if(t=Dn(e),t===null)throw Error(I(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return gc(i),e;if(o===r)return gc(i),t;o=o.sibling}throw Error(I(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(I(189))}}if(n.alternate!==r)throw Error(I(190))}if(n.tag!==3)throw Error(I(188));return n.stateNode.current===n?e:t}function Vf(e){return e=Vg(e),e!==null?Wf(e):null}function Wf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Wf(e);if(t!==null)return t;e=e.sibling}return null}var Gf=Ae.unstable_scheduleCallback,vc=Ae.unstable_cancelCallback,Wg=Ae.unstable_shouldYield,Gg=Ae.unstable_requestPaint,Z=Ae.unstable_now,Kg=Ae.unstable_getCurrentPriorityLevel,eu=Ae.unstable_ImmediatePriority,Kf=Ae.unstable_UserBlockingPriority,$o=Ae.unstable_NormalPriority,Yg=Ae.unstable_LowPriority,Yf=Ae.unstable_IdlePriority,ws=null,rt=null;function Qg(e){if(rt&&typeof rt.onCommitFiberRoot=="function")try{rt.onCommitFiberRoot(ws,e,void 0,(e.current.flags&128)===128)}catch{}}var Ye=Math.clz32?Math.clz32:Xg,qg=Math.log,Jg=Math.LN2;function Xg(e){return e>>>=0,e===0?32:31-(qg(e)/Jg|0)|0}var Ki=64,Yi=4194304;function Vr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function jo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=Vr(a):(o&=s,o!==0&&(r=Vr(o)))}else s=n&~i,s!==0?r=Vr(s):o!==0&&(r=Vr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ye(t),i=1<<n,r|=e[n],t&=~i;return r}function Zg(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ev(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-Ye(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=Zg(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function Ya(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Qf(){var e=Ki;return Ki<<=1,!(Ki&4194240)&&(Ki=64),e}function Js(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ni(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ye(t),e[t]=n}function tv(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ye(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function tu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ye(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var U=0;function qf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Jf,nu,Xf,Zf,eh,Qa=!1,Qi=[],Bt=null,Ht=null,Vt=null,ai=new Map,li=new Map,Lt=[],nv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yc(e,t){switch(e){case"focusin":case"focusout":Bt=null;break;case"dragenter":case"dragleave":Ht=null;break;case"mouseover":case"mouseout":Vt=null;break;case"pointerover":case"pointerout":ai.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":li.delete(t.pointerId)}}function Mr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Ai(t),t!==null&&nu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function rv(e,t,n,r,i){switch(t){case"focusin":return Bt=Mr(Bt,e,t,n,r,i),!0;case"dragenter":return Ht=Mr(Ht,e,t,n,r,i),!0;case"mouseover":return Vt=Mr(Vt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return ai.set(o,Mr(ai.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,li.set(o,Mr(li.get(o)||null,e,t,n,r,i)),!0}return!1}function th(e){var t=vn(e.target);if(t!==null){var n=Dn(t);if(n!==null){if(t=n.tag,t===13){if(t=Hf(n),t!==null){e.blockedOn=t,eh(e.priority,function(){Xf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function po(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=qa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Va=r,n.target.dispatchEvent(r),Va=null}else return t=Ai(n),t!==null&&nu(t),e.blockedOn=n,!1;t.shift()}return!0}function wc(e,t,n){po(e)&&n.delete(t)}function iv(){Qa=!1,Bt!==null&&po(Bt)&&(Bt=null),Ht!==null&&po(Ht)&&(Ht=null),Vt!==null&&po(Vt)&&(Vt=null),ai.forEach(wc),li.forEach(wc)}function $r(e,t){e.blockedOn===t&&(e.blockedOn=null,Qa||(Qa=!0,Ae.unstable_scheduleCallback(Ae.unstable_NormalPriority,iv)))}function ui(e){function t(i){return $r(i,e)}if(0<Qi.length){$r(Qi[0],e);for(var n=1;n<Qi.length;n++){var r=Qi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Bt!==null&&$r(Bt,e),Ht!==null&&$r(Ht,e),Vt!==null&&$r(Vt,e),ai.forEach(t),li.forEach(t),n=0;n<Lt.length;n++)r=Lt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Lt.length&&(n=Lt[0],n.blockedOn===null);)th(n),n.blockedOn===null&&Lt.shift()}var rr=It.ReactCurrentBatchConfig,zo=!0;function ov(e,t,n,r){var i=U,o=rr.transition;rr.transition=null;try{U=1,ru(e,t,n,r)}finally{U=i,rr.transition=o}}function sv(e,t,n,r){var i=U,o=rr.transition;rr.transition=null;try{U=4,ru(e,t,n,r)}finally{U=i,rr.transition=o}}function ru(e,t,n,r){if(zo){var i=qa(e,t,n,r);if(i===null)aa(e,t,r,Uo,n),yc(e,r);else if(rv(i,e,t,n,r))r.stopPropagation();else if(yc(e,r),t&4&&-1<nv.indexOf(e)){for(;i!==null;){var o=Ai(i);if(o!==null&&Jf(o),o=qa(e,t,n,r),o===null&&aa(e,t,r,Uo,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else aa(e,t,r,null,n)}}var Uo=null;function qa(e,t,n,r){if(Uo=null,e=Zl(r),e=vn(e),e!==null)if(t=Dn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Hf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Uo=e,null}function nh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Kg()){case eu:return 1;case Kf:return 4;case $o:case Yg:return 16;case Yf:return 536870912;default:return 16}default:return 16}}var zt=null,iu=null,mo=null;function rh(){if(mo)return mo;var e,t=iu,n=t.length,r,i="value"in zt?zt.value:zt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return mo=i.slice(e,1<r?1-r:void 0)}function go(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function qi(){return!0}function _c(){return!1}function Le(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?qi:_c,this.isPropagationStopped=_c,this}return J(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=qi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=qi)},persist:function(){},isPersistent:qi}),t}var Ir={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ou=Le(Ir),Oi=J({},Ir,{view:0,detail:0}),av=Le(Oi),Xs,Zs,jr,_s=J({},Oi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:su,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==jr&&(jr&&e.type==="mousemove"?(Xs=e.screenX-jr.screenX,Zs=e.screenY-jr.screenY):Zs=Xs=0,jr=e),Xs)},movementY:function(e){return"movementY"in e?e.movementY:Zs}}),Sc=Le(_s),lv=J({},_s,{dataTransfer:0}),uv=Le(lv),cv=J({},Oi,{relatedTarget:0}),ea=Le(cv),dv=J({},Ir,{animationName:0,elapsedTime:0,pseudoElement:0}),fv=Le(dv),hv=J({},Ir,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),pv=Le(hv),mv=J({},Ir,{data:0}),kc=Le(mv),gv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=yv[e])?!!t[e]:!1}function su(){return wv}var _v=J({},Oi,{key:function(e){if(e.key){var t=gv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=go(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?vv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:su,charCode:function(e){return e.type==="keypress"?go(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?go(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Sv=Le(_v),kv=J({},_s,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ec=Le(kv),Ev=J({},Oi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:su}),xv=Le(Ev),Iv=J({},Ir,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cv=Le(Iv),Tv=J({},_s,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Pv=Le(Tv),Rv=[9,13,27,32],au=wt&&"CompositionEvent"in window,Qr=null;wt&&"documentMode"in document&&(Qr=document.documentMode);var Nv=wt&&"TextEvent"in window&&!Qr,ih=wt&&(!au||Qr&&8<Qr&&11>=Qr),xc=" ",Ic=!1;function oh(e,t){switch(e){case"keyup":return Rv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Hn=!1;function Ov(e,t){switch(e){case"compositionend":return sh(t);case"keypress":return t.which!==32?null:(Ic=!0,xc);case"textInput":return e=t.data,e===xc&&Ic?null:e;default:return null}}function Av(e,t){if(Hn)return e==="compositionend"||!au&&oh(e,t)?(e=rh(),mo=iu=zt=null,Hn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ih&&t.locale!=="ko"?null:t.data;default:return null}}var bv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!bv[e.type]:t==="textarea"}function ah(e,t,n,r){jf(r),t=Fo(t,"onChange"),0<t.length&&(n=new ou("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var qr=null,ci=null;function Lv(e){yh(e,0)}function Ss(e){var t=Gn(e);if(Of(t))return e}function Dv(e,t){if(e==="change")return t}var lh=!1;if(wt){var ta;if(wt){var na="oninput"in document;if(!na){var Tc=document.createElement("div");Tc.setAttribute("oninput","return;"),na=typeof Tc.oninput=="function"}ta=na}else ta=!1;lh=ta&&(!document.documentMode||9<document.documentMode)}function Pc(){qr&&(qr.detachEvent("onpropertychange",uh),ci=qr=null)}function uh(e){if(e.propertyName==="value"&&Ss(ci)){var t=[];ah(t,ci,e,Zl(e)),Bf(Lv,t)}}function Mv(e,t,n){e==="focusin"?(Pc(),qr=t,ci=n,qr.attachEvent("onpropertychange",uh)):e==="focusout"&&Pc()}function $v(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ss(ci)}function jv(e,t){if(e==="click")return Ss(t)}function zv(e,t){if(e==="input"||e==="change")return Ss(t)}function Uv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Xe=typeof Object.is=="function"?Object.is:Uv;function di(e,t){if(Xe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Aa.call(t,i)||!Xe(e[i],t[i]))return!1}return!0}function Rc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Nc(e,t){var n=Rc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Rc(n)}}function ch(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ch(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function dh(){for(var e=window,t=Lo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Lo(e.document)}return t}function lu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Fv(e){var t=dh(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ch(n.ownerDocument.documentElement,n)){if(r!==null&&lu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Nc(n,o);var s=Nc(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Bv=wt&&"documentMode"in document&&11>=document.documentMode,Vn=null,Ja=null,Jr=null,Xa=!1;function Oc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Xa||Vn==null||Vn!==Lo(r)||(r=Vn,"selectionStart"in r&&lu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Jr&&di(Jr,r)||(Jr=r,r=Fo(Ja,"onSelect"),0<r.length&&(t=new ou("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Vn)))}function Ji(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Wn={animationend:Ji("Animation","AnimationEnd"),animationiteration:Ji("Animation","AnimationIteration"),animationstart:Ji("Animation","AnimationStart"),transitionend:Ji("Transition","TransitionEnd")},ra={},fh={};wt&&(fh=document.createElement("div").style,"AnimationEvent"in window||(delete Wn.animationend.animation,delete Wn.animationiteration.animation,delete Wn.animationstart.animation),"TransitionEvent"in window||delete Wn.transitionend.transition);function ks(e){if(ra[e])return ra[e];if(!Wn[e])return e;var t=Wn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in fh)return ra[e]=t[n];return e}var hh=ks("animationend"),ph=ks("animationiteration"),mh=ks("animationstart"),gh=ks("transitionend"),vh=new Map,Ac="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function nn(e,t){vh.set(e,t),Ln(t,[e])}for(var ia=0;ia<Ac.length;ia++){var oa=Ac[ia],Hv=oa.toLowerCase(),Vv=oa[0].toUpperCase()+oa.slice(1);nn(Hv,"on"+Vv)}nn(hh,"onAnimationEnd");nn(ph,"onAnimationIteration");nn(mh,"onAnimationStart");nn("dblclick","onDoubleClick");nn("focusin","onFocus");nn("focusout","onBlur");nn(gh,"onTransitionEnd");cr("onMouseEnter",["mouseout","mouseover"]);cr("onMouseLeave",["mouseout","mouseover"]);cr("onPointerEnter",["pointerout","pointerover"]);cr("onPointerLeave",["pointerout","pointerover"]);Ln("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ln("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ln("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ln("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ln("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ln("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Wv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wr));function bc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Hg(r,t,void 0,e),e.currentTarget=null}function yh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;bc(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;bc(i,a,u),o=l}}}if(Mo)throw e=Ka,Mo=!1,Ka=null,e}function W(e,t){var n=t[rl];n===void 0&&(n=t[rl]=new Set);var r=e+"__bubble";n.has(r)||(wh(t,e,2,!1),n.add(r))}function sa(e,t,n){var r=0;t&&(r|=4),wh(n,e,r,t)}var Xi="_reactListening"+Math.random().toString(36).slice(2);function fi(e){if(!e[Xi]){e[Xi]=!0,Cf.forEach(function(n){n!=="selectionchange"&&(Wv.has(n)||sa(n,!1,e),sa(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Xi]||(t[Xi]=!0,sa("selectionchange",!1,t))}}function wh(e,t,n,r){switch(nh(t)){case 1:var i=ov;break;case 4:i=sv;break;default:i=ru}n=i.bind(null,t,n,e),i=void 0,!Ga||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function aa(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=vn(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}Bf(function(){var u=o,f=Zl(n),d=[];e:{var m=vh.get(e);if(m!==void 0){var g=ou,w=e;switch(e){case"keypress":if(go(n)===0)break e;case"keydown":case"keyup":g=Sv;break;case"focusin":w="focus",g=ea;break;case"focusout":w="blur",g=ea;break;case"beforeblur":case"afterblur":g=ea;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Sc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=uv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=xv;break;case hh:case ph:case mh:g=fv;break;case gh:g=Cv;break;case"scroll":g=av;break;case"wheel":g=Pv;break;case"copy":case"cut":case"paste":g=pv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Ec}var _=(t&4)!==0,E=!_&&e==="scroll",h=_?m!==null?m+"Capture":null:m;_=[];for(var c=u,p;c!==null;){p=c;var y=p.stateNode;if(p.tag===5&&y!==null&&(p=y,h!==null&&(y=si(c,h),y!=null&&_.push(hi(c,y,p)))),E)break;c=c.return}0<_.length&&(m=new g(m,w,null,n,f),d.push({event:m,listeners:_}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",m&&n!==Va&&(w=n.relatedTarget||n.fromElement)&&(vn(w)||w[_t]))break e;if((g||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,g?(w=n.relatedTarget||n.toElement,g=u,w=w?vn(w):null,w!==null&&(E=Dn(w),w!==E||w.tag!==5&&w.tag!==6)&&(w=null)):(g=null,w=u),g!==w)){if(_=Sc,y="onMouseLeave",h="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(_=Ec,y="onPointerLeave",h="onPointerEnter",c="pointer"),E=g==null?m:Gn(g),p=w==null?m:Gn(w),m=new _(y,c+"leave",g,n,f),m.target=E,m.relatedTarget=p,y=null,vn(f)===u&&(_=new _(h,c+"enter",w,n,f),_.target=p,_.relatedTarget=E,y=_),E=y,g&&w)t:{for(_=g,h=w,c=0,p=_;p;p=zn(p))c++;for(p=0,y=h;y;y=zn(y))p++;for(;0<c-p;)_=zn(_),c--;for(;0<p-c;)h=zn(h),p--;for(;c--;){if(_===h||h!==null&&_===h.alternate)break t;_=zn(_),h=zn(h)}_=null}else _=null;g!==null&&Lc(d,m,g,_,!1),w!==null&&E!==null&&Lc(d,E,w,_,!0)}}e:{if(m=u?Gn(u):window,g=m.nodeName&&m.nodeName.toLowerCase(),g==="select"||g==="input"&&m.type==="file")var x=Dv;else if(Cc(m))if(lh)x=zv;else{x=$v;var C=Mv}else(g=m.nodeName)&&g.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(x=jv);if(x&&(x=x(e,u))){ah(d,x,n,f);break e}C&&C(e,m,u),e==="focusout"&&(C=m._wrapperState)&&C.controlled&&m.type==="number"&&za(m,"number",m.value)}switch(C=u?Gn(u):window,e){case"focusin":(Cc(C)||C.contentEditable==="true")&&(Vn=C,Ja=u,Jr=null);break;case"focusout":Jr=Ja=Vn=null;break;case"mousedown":Xa=!0;break;case"contextmenu":case"mouseup":case"dragend":Xa=!1,Oc(d,n,f);break;case"selectionchange":if(Bv)break;case"keydown":case"keyup":Oc(d,n,f)}var k;if(au)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Hn?oh(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(ih&&n.locale!=="ko"&&(Hn||N!=="onCompositionStart"?N==="onCompositionEnd"&&Hn&&(k=rh()):(zt=f,iu="value"in zt?zt.value:zt.textContent,Hn=!0)),C=Fo(u,N),0<C.length&&(N=new kc(N,e,null,n,f),d.push({event:N,listeners:C}),k?N.data=k:(k=sh(n),k!==null&&(N.data=k)))),(k=Nv?Ov(e,n):Av(e,n))&&(u=Fo(u,"onBeforeInput"),0<u.length&&(f=new kc("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:u}),f.data=k))}yh(d,t)})}function hi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Fo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=si(e,n),o!=null&&r.unshift(hi(e,o,i)),o=si(e,t),o!=null&&r.push(hi(e,o,i))),e=e.return}return r}function zn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Lc(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=si(n,o),l!=null&&s.unshift(hi(n,l,a))):i||(l=si(n,o),l!=null&&s.push(hi(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Gv=/\r\n?/g,Kv=/\u0000|\uFFFD/g;function Dc(e){return(typeof e=="string"?e:""+e).replace(Gv,`
`).replace(Kv,"")}function Zi(e,t,n){if(t=Dc(t),Dc(e)!==t&&n)throw Error(I(425))}function Bo(){}var Za=null,el=null;function tl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var nl=typeof setTimeout=="function"?setTimeout:void 0,Yv=typeof clearTimeout=="function"?clearTimeout:void 0,Mc=typeof Promise=="function"?Promise:void 0,Qv=typeof queueMicrotask=="function"?queueMicrotask:typeof Mc<"u"?function(e){return Mc.resolve(null).then(e).catch(qv)}:nl;function qv(e){setTimeout(function(){throw e})}function la(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ui(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ui(t)}function Wt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function $c(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Cr=Math.random().toString(36).slice(2),nt="__reactFiber$"+Cr,pi="__reactProps$"+Cr,_t="__reactContainer$"+Cr,rl="__reactEvents$"+Cr,Jv="__reactListeners$"+Cr,Xv="__reactHandles$"+Cr;function vn(e){var t=e[nt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[_t]||n[nt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=$c(e);e!==null;){if(n=e[nt])return n;e=$c(e)}return t}e=n,n=e.parentNode}return null}function Ai(e){return e=e[nt]||e[_t],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Gn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(I(33))}function Es(e){return e[pi]||null}var il=[],Kn=-1;function rn(e){return{current:e}}function K(e){0>Kn||(e.current=il[Kn],il[Kn]=null,Kn--)}function V(e,t){Kn++,il[Kn]=e.current,e.current=t}var tn={},me=rn(tn),Ee=rn(!1),Cn=tn;function dr(e,t){var n=e.type.contextTypes;if(!n)return tn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function xe(e){return e=e.childContextTypes,e!=null}function Ho(){K(Ee),K(me)}function jc(e,t,n){if(me.current!==tn)throw Error(I(168));V(me,t),V(Ee,n)}function _h(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(I(108,Mg(e)||"Unknown",i));return J({},n,r)}function Vo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||tn,Cn=me.current,V(me,e),V(Ee,Ee.current),!0}function zc(e,t,n){var r=e.stateNode;if(!r)throw Error(I(169));n?(e=_h(e,t,Cn),r.__reactInternalMemoizedMergedChildContext=e,K(Ee),K(me),V(me,e)):K(Ee),V(Ee,n)}var ct=null,xs=!1,ua=!1;function Sh(e){ct===null?ct=[e]:ct.push(e)}function Zv(e){xs=!0,Sh(e)}function on(){if(!ua&&ct!==null){ua=!0;var e=0,t=U;try{var n=ct;for(U=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ct=null,xs=!1}catch(i){throw ct!==null&&(ct=ct.slice(e+1)),Gf(eu,on),i}finally{U=t,ua=!1}}return null}var Yn=[],Qn=0,Wo=null,Go=0,De=[],Me=0,Tn=null,ft=1,ht="";function hn(e,t){Yn[Qn++]=Go,Yn[Qn++]=Wo,Wo=e,Go=t}function kh(e,t,n){De[Me++]=ft,De[Me++]=ht,De[Me++]=Tn,Tn=e;var r=ft;e=ht;var i=32-Ye(r)-1;r&=~(1<<i),n+=1;var o=32-Ye(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,ft=1<<32-Ye(t)+i|n<<i|r,ht=o+e}else ft=1<<o|n<<i|r,ht=e}function uu(e){e.return!==null&&(hn(e,1),kh(e,1,0))}function cu(e){for(;e===Wo;)Wo=Yn[--Qn],Yn[Qn]=null,Go=Yn[--Qn],Yn[Qn]=null;for(;e===Tn;)Tn=De[--Me],De[Me]=null,ht=De[--Me],De[Me]=null,ft=De[--Me],De[Me]=null}var Oe=null,Ne=null,Y=!1,Ke=null;function Eh(e,t){var n=je(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Uc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Oe=e,Ne=Wt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Oe=e,Ne=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Tn!==null?{id:ft,overflow:ht}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=je(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Oe=e,Ne=null,!0):!1;default:return!1}}function ol(e){return(e.mode&1)!==0&&(e.flags&128)===0}function sl(e){if(Y){var t=Ne;if(t){var n=t;if(!Uc(e,t)){if(ol(e))throw Error(I(418));t=Wt(n.nextSibling);var r=Oe;t&&Uc(e,t)?Eh(r,n):(e.flags=e.flags&-4097|2,Y=!1,Oe=e)}}else{if(ol(e))throw Error(I(418));e.flags=e.flags&-4097|2,Y=!1,Oe=e}}}function Fc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Oe=e}function eo(e){if(e!==Oe)return!1;if(!Y)return Fc(e),Y=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!tl(e.type,e.memoizedProps)),t&&(t=Ne)){if(ol(e))throw xh(),Error(I(418));for(;t;)Eh(e,t),t=Wt(t.nextSibling)}if(Fc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(I(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ne=Wt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ne=null}}else Ne=Oe?Wt(e.stateNode.nextSibling):null;return!0}function xh(){for(var e=Ne;e;)e=Wt(e.nextSibling)}function fr(){Ne=Oe=null,Y=!1}function du(e){Ke===null?Ke=[e]:Ke.push(e)}var e0=It.ReactCurrentBatchConfig;function zr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(I(309));var r=n.stateNode}if(!r)throw Error(I(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(I(284));if(!n._owner)throw Error(I(290,e))}return e}function to(e,t){throw e=Object.prototype.toString.call(t),Error(I(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Bc(e){var t=e._init;return t(e._payload)}function Ih(e){function t(h,c){if(e){var p=h.deletions;p===null?(h.deletions=[c],h.flags|=16):p.push(c)}}function n(h,c){if(!e)return null;for(;c!==null;)t(h,c),c=c.sibling;return null}function r(h,c){for(h=new Map;c!==null;)c.key!==null?h.set(c.key,c):h.set(c.index,c),c=c.sibling;return h}function i(h,c){return h=Qt(h,c),h.index=0,h.sibling=null,h}function o(h,c,p){return h.index=p,e?(p=h.alternate,p!==null?(p=p.index,p<c?(h.flags|=2,c):p):(h.flags|=2,c)):(h.flags|=1048576,c)}function s(h){return e&&h.alternate===null&&(h.flags|=2),h}function a(h,c,p,y){return c===null||c.tag!==6?(c=ga(p,h.mode,y),c.return=h,c):(c=i(c,p),c.return=h,c)}function l(h,c,p,y){var x=p.type;return x===Bn?f(h,c,p.props.children,y,p.key):c!==null&&(c.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===At&&Bc(x)===c.type)?(y=i(c,p.props),y.ref=zr(h,c,p),y.return=h,y):(y=Eo(p.type,p.key,p.props,null,h.mode,y),y.ref=zr(h,c,p),y.return=h,y)}function u(h,c,p,y){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=va(p,h.mode,y),c.return=h,c):(c=i(c,p.children||[]),c.return=h,c)}function f(h,c,p,y,x){return c===null||c.tag!==7?(c=En(p,h.mode,y,x),c.return=h,c):(c=i(c,p),c.return=h,c)}function d(h,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=ga(""+c,h.mode,p),c.return=h,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Vi:return p=Eo(c.type,c.key,c.props,null,h.mode,p),p.ref=zr(h,null,c),p.return=h,p;case Fn:return c=va(c,h.mode,p),c.return=h,c;case At:var y=c._init;return d(h,y(c._payload),p)}if(Hr(c)||Lr(c))return c=En(c,h.mode,p,null),c.return=h,c;to(h,c)}return null}function m(h,c,p,y){var x=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return x!==null?null:a(h,c,""+p,y);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Vi:return p.key===x?l(h,c,p,y):null;case Fn:return p.key===x?u(h,c,p,y):null;case At:return x=p._init,m(h,c,x(p._payload),y)}if(Hr(p)||Lr(p))return x!==null?null:f(h,c,p,y,null);to(h,p)}return null}function g(h,c,p,y,x){if(typeof y=="string"&&y!==""||typeof y=="number")return h=h.get(p)||null,a(c,h,""+y,x);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Vi:return h=h.get(y.key===null?p:y.key)||null,l(c,h,y,x);case Fn:return h=h.get(y.key===null?p:y.key)||null,u(c,h,y,x);case At:var C=y._init;return g(h,c,p,C(y._payload),x)}if(Hr(y)||Lr(y))return h=h.get(p)||null,f(c,h,y,x,null);to(c,y)}return null}function w(h,c,p,y){for(var x=null,C=null,k=c,N=c=0,j=null;k!==null&&N<p.length;N++){k.index>N?(j=k,k=null):j=k.sibling;var D=m(h,k,p[N],y);if(D===null){k===null&&(k=j);break}e&&k&&D.alternate===null&&t(h,k),c=o(D,c,N),C===null?x=D:C.sibling=D,C=D,k=j}if(N===p.length)return n(h,k),Y&&hn(h,N),x;if(k===null){for(;N<p.length;N++)k=d(h,p[N],y),k!==null&&(c=o(k,c,N),C===null?x=k:C.sibling=k,C=k);return Y&&hn(h,N),x}for(k=r(h,k);N<p.length;N++)j=g(k,h,N,p[N],y),j!==null&&(e&&j.alternate!==null&&k.delete(j.key===null?N:j.key),c=o(j,c,N),C===null?x=j:C.sibling=j,C=j);return e&&k.forEach(function(Ce){return t(h,Ce)}),Y&&hn(h,N),x}function _(h,c,p,y){var x=Lr(p);if(typeof x!="function")throw Error(I(150));if(p=x.call(p),p==null)throw Error(I(151));for(var C=x=null,k=c,N=c=0,j=null,D=p.next();k!==null&&!D.done;N++,D=p.next()){k.index>N?(j=k,k=null):j=k.sibling;var Ce=m(h,k,D.value,y);if(Ce===null){k===null&&(k=j);break}e&&k&&Ce.alternate===null&&t(h,k),c=o(Ce,c,N),C===null?x=Ce:C.sibling=Ce,C=Ce,k=j}if(D.done)return n(h,k),Y&&hn(h,N),x;if(k===null){for(;!D.done;N++,D=p.next())D=d(h,D.value,y),D!==null&&(c=o(D,c,N),C===null?x=D:C.sibling=D,C=D);return Y&&hn(h,N),x}for(k=r(h,k);!D.done;N++,D=p.next())D=g(k,h,N,D.value,y),D!==null&&(e&&D.alternate!==null&&k.delete(D.key===null?N:D.key),c=o(D,c,N),C===null?x=D:C.sibling=D,C=D);return e&&k.forEach(function(ln){return t(h,ln)}),Y&&hn(h,N),x}function E(h,c,p,y){if(typeof p=="object"&&p!==null&&p.type===Bn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Vi:e:{for(var x=p.key,C=c;C!==null;){if(C.key===x){if(x=p.type,x===Bn){if(C.tag===7){n(h,C.sibling),c=i(C,p.props.children),c.return=h,h=c;break e}}else if(C.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===At&&Bc(x)===C.type){n(h,C.sibling),c=i(C,p.props),c.ref=zr(h,C,p),c.return=h,h=c;break e}n(h,C);break}else t(h,C);C=C.sibling}p.type===Bn?(c=En(p.props.children,h.mode,y,p.key),c.return=h,h=c):(y=Eo(p.type,p.key,p.props,null,h.mode,y),y.ref=zr(h,c,p),y.return=h,h=y)}return s(h);case Fn:e:{for(C=p.key;c!==null;){if(c.key===C)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(h,c.sibling),c=i(c,p.children||[]),c.return=h,h=c;break e}else{n(h,c);break}else t(h,c);c=c.sibling}c=va(p,h.mode,y),c.return=h,h=c}return s(h);case At:return C=p._init,E(h,c,C(p._payload),y)}if(Hr(p))return w(h,c,p,y);if(Lr(p))return _(h,c,p,y);to(h,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(h,c.sibling),c=i(c,p),c.return=h,h=c):(n(h,c),c=ga(p,h.mode,y),c.return=h,h=c),s(h)):n(h,c)}return E}var hr=Ih(!0),Ch=Ih(!1),Ko=rn(null),Yo=null,qn=null,fu=null;function hu(){fu=qn=Yo=null}function pu(e){var t=Ko.current;K(Ko),e._currentValue=t}function al(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ir(e,t){Yo=e,fu=qn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ke=!0),e.firstContext=null)}function Ue(e){var t=e._currentValue;if(fu!==e)if(e={context:e,memoizedValue:t,next:null},qn===null){if(Yo===null)throw Error(I(308));qn=e,Yo.dependencies={lanes:0,firstContext:e}}else qn=qn.next=e;return t}var yn=null;function mu(e){yn===null?yn=[e]:yn.push(e)}function Th(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,mu(t)):(n.next=i.next,i.next=n),t.interleaved=n,St(e,r)}function St(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var bt=!1;function gu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ph(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function yt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Gt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,$&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,St(e,n)}return i=r.interleaved,i===null?(t.next=t,mu(r)):(t.next=i.next,i.next=t),r.interleaved=t,St(e,n)}function vo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,tu(e,n)}}function Hc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Qo(e,t,n,r){var i=e.updateQueue;bt=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var f=e.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==s&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=l))}if(o!==null){var d=i.baseState;s=0,f=u=l=null,a=o;do{var m=a.lane,g=a.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,_=a;switch(m=t,g=n,_.tag){case 1:if(w=_.payload,typeof w=="function"){d=w.call(g,d,m);break e}d=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=_.payload,m=typeof w=="function"?w.call(g,d,m):w,m==null)break e;d=J({},d,m);break e;case 2:bt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else g={eventTime:g,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=g,l=d):f=f.next=g,s|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(f===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Rn|=s,e.lanes=s,e.memoizedState=d}}function Vc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(I(191,i));i.call(r)}}}var bi={},it=rn(bi),mi=rn(bi),gi=rn(bi);function wn(e){if(e===bi)throw Error(I(174));return e}function vu(e,t){switch(V(gi,t),V(mi,e),V(it,bi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Fa(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Fa(t,e)}K(it),V(it,t)}function pr(){K(it),K(mi),K(gi)}function Rh(e){wn(gi.current);var t=wn(it.current),n=Fa(t,e.type);t!==n&&(V(mi,e),V(it,n))}function yu(e){mi.current===e&&(K(it),K(mi))}var Q=rn(0);function qo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ca=[];function wu(){for(var e=0;e<ca.length;e++)ca[e]._workInProgressVersionPrimary=null;ca.length=0}var yo=It.ReactCurrentDispatcher,da=It.ReactCurrentBatchConfig,Pn=0,q=null,re=null,oe=null,Jo=!1,Xr=!1,vi=0,t0=0;function fe(){throw Error(I(321))}function _u(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Xe(e[n],t[n]))return!1;return!0}function Su(e,t,n,r,i,o){if(Pn=o,q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,yo.current=e===null||e.memoizedState===null?o0:s0,e=n(r,i),Xr){o=0;do{if(Xr=!1,vi=0,25<=o)throw Error(I(301));o+=1,oe=re=null,t.updateQueue=null,yo.current=a0,e=n(r,i)}while(Xr)}if(yo.current=Xo,t=re!==null&&re.next!==null,Pn=0,oe=re=q=null,Jo=!1,t)throw Error(I(300));return e}function ku(){var e=vi!==0;return vi=0,e}function et(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return oe===null?q.memoizedState=oe=e:oe=oe.next=e,oe}function Fe(){if(re===null){var e=q.alternate;e=e!==null?e.memoizedState:null}else e=re.next;var t=oe===null?q.memoizedState:oe.next;if(t!==null)oe=t,re=e;else{if(e===null)throw Error(I(310));re=e,e={memoizedState:re.memoizedState,baseState:re.baseState,baseQueue:re.baseQueue,queue:re.queue,next:null},oe===null?q.memoizedState=oe=e:oe=oe.next=e}return oe}function yi(e,t){return typeof t=="function"?t(e):t}function fa(e){var t=Fe(),n=t.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=e;var r=re,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var f=u.lane;if((Pn&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,s=r):l=l.next=d,q.lanes|=f,Rn|=f}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,Xe(r,t.memoizedState)||(ke=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,q.lanes|=o,Rn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ha(e){var t=Fe(),n=t.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);Xe(o,t.memoizedState)||(ke=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Nh(){}function Oh(e,t){var n=q,r=Fe(),i=t(),o=!Xe(r.memoizedState,i);if(o&&(r.memoizedState=i,ke=!0),r=r.queue,Eu(Lh.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||oe!==null&&oe.memoizedState.tag&1){if(n.flags|=2048,wi(9,bh.bind(null,n,r,i,t),void 0,null),le===null)throw Error(I(349));Pn&30||Ah(n,t,i)}return i}function Ah(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=q.updateQueue,t===null?(t={lastEffect:null,stores:null},q.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function bh(e,t,n,r){t.value=n,t.getSnapshot=r,Dh(t)&&Mh(e)}function Lh(e,t,n){return n(function(){Dh(t)&&Mh(e)})}function Dh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Xe(e,n)}catch{return!0}}function Mh(e){var t=St(e,1);t!==null&&Qe(t,e,1,-1)}function Wc(e){var t=et();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:yi,lastRenderedState:e},t.queue=e,e=e.dispatch=i0.bind(null,q,e),[t.memoizedState,e]}function wi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=q.updateQueue,t===null?(t={lastEffect:null,stores:null},q.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function $h(){return Fe().memoizedState}function wo(e,t,n,r){var i=et();q.flags|=e,i.memoizedState=wi(1|t,n,void 0,r===void 0?null:r)}function Is(e,t,n,r){var i=Fe();r=r===void 0?null:r;var o=void 0;if(re!==null){var s=re.memoizedState;if(o=s.destroy,r!==null&&_u(r,s.deps)){i.memoizedState=wi(t,n,o,r);return}}q.flags|=e,i.memoizedState=wi(1|t,n,o,r)}function Gc(e,t){return wo(8390656,8,e,t)}function Eu(e,t){return Is(2048,8,e,t)}function jh(e,t){return Is(4,2,e,t)}function zh(e,t){return Is(4,4,e,t)}function Uh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Fh(e,t,n){return n=n!=null?n.concat([e]):null,Is(4,4,Uh.bind(null,t,e),n)}function xu(){}function Bh(e,t){var n=Fe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&_u(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Hh(e,t){var n=Fe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&_u(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Vh(e,t,n){return Pn&21?(Xe(n,t)||(n=Qf(),q.lanes|=n,Rn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ke=!0),e.memoizedState=n)}function n0(e,t){var n=U;U=n!==0&&4>n?n:4,e(!0);var r=da.transition;da.transition={};try{e(!1),t()}finally{U=n,da.transition=r}}function Wh(){return Fe().memoizedState}function r0(e,t,n){var r=Yt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Gh(e))Kh(t,n);else if(n=Th(e,t,n,r),n!==null){var i=ve();Qe(n,e,r,i),Yh(n,t,r)}}function i0(e,t,n){var r=Yt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Gh(e))Kh(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,Xe(a,s)){var l=t.interleaved;l===null?(i.next=i,mu(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Th(e,t,i,r),n!==null&&(i=ve(),Qe(n,e,r,i),Yh(n,t,r))}}function Gh(e){var t=e.alternate;return e===q||t!==null&&t===q}function Kh(e,t){Xr=Jo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Yh(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,tu(e,n)}}var Xo={readContext:Ue,useCallback:fe,useContext:fe,useEffect:fe,useImperativeHandle:fe,useInsertionEffect:fe,useLayoutEffect:fe,useMemo:fe,useReducer:fe,useRef:fe,useState:fe,useDebugValue:fe,useDeferredValue:fe,useTransition:fe,useMutableSource:fe,useSyncExternalStore:fe,useId:fe,unstable_isNewReconciler:!1},o0={readContext:Ue,useCallback:function(e,t){return et().memoizedState=[e,t===void 0?null:t],e},useContext:Ue,useEffect:Gc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,wo(4194308,4,Uh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return wo(4194308,4,e,t)},useInsertionEffect:function(e,t){return wo(4,2,e,t)},useMemo:function(e,t){var n=et();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=et();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=r0.bind(null,q,e),[r.memoizedState,e]},useRef:function(e){var t=et();return e={current:e},t.memoizedState=e},useState:Wc,useDebugValue:xu,useDeferredValue:function(e){return et().memoizedState=e},useTransition:function(){var e=Wc(!1),t=e[0];return e=n0.bind(null,e[1]),et().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=q,i=et();if(Y){if(n===void 0)throw Error(I(407));n=n()}else{if(n=t(),le===null)throw Error(I(349));Pn&30||Ah(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Gc(Lh.bind(null,r,o,e),[e]),r.flags|=2048,wi(9,bh.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=et(),t=le.identifierPrefix;if(Y){var n=ht,r=ft;n=(r&~(1<<32-Ye(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=vi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=t0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},s0={readContext:Ue,useCallback:Bh,useContext:Ue,useEffect:Eu,useImperativeHandle:Fh,useInsertionEffect:jh,useLayoutEffect:zh,useMemo:Hh,useReducer:fa,useRef:$h,useState:function(){return fa(yi)},useDebugValue:xu,useDeferredValue:function(e){var t=Fe();return Vh(t,re.memoizedState,e)},useTransition:function(){var e=fa(yi)[0],t=Fe().memoizedState;return[e,t]},useMutableSource:Nh,useSyncExternalStore:Oh,useId:Wh,unstable_isNewReconciler:!1},a0={readContext:Ue,useCallback:Bh,useContext:Ue,useEffect:Eu,useImperativeHandle:Fh,useInsertionEffect:jh,useLayoutEffect:zh,useMemo:Hh,useReducer:ha,useRef:$h,useState:function(){return ha(yi)},useDebugValue:xu,useDeferredValue:function(e){var t=Fe();return re===null?t.memoizedState=e:Vh(t,re.memoizedState,e)},useTransition:function(){var e=ha(yi)[0],t=Fe().memoizedState;return[e,t]},useMutableSource:Nh,useSyncExternalStore:Oh,useId:Wh,unstable_isNewReconciler:!1};function We(e,t){if(e&&e.defaultProps){t=J({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ll(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:J({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Cs={isMounted:function(e){return(e=e._reactInternals)?Dn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ve(),i=Yt(e),o=yt(r,i);o.payload=t,n!=null&&(o.callback=n),t=Gt(e,o,i),t!==null&&(Qe(t,e,i,r),vo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ve(),i=Yt(e),o=yt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Gt(e,o,i),t!==null&&(Qe(t,e,i,r),vo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ve(),r=Yt(e),i=yt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Gt(e,i,r),t!==null&&(Qe(t,e,r,n),vo(t,e,r))}};function Kc(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!di(n,r)||!di(i,o):!0}function Qh(e,t,n){var r=!1,i=tn,o=t.contextType;return typeof o=="object"&&o!==null?o=Ue(o):(i=xe(t)?Cn:me.current,r=t.contextTypes,o=(r=r!=null)?dr(e,i):tn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Cs,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Yc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Cs.enqueueReplaceState(t,t.state,null)}function ul(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},gu(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Ue(o):(o=xe(t)?Cn:me.current,i.context=dr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(ll(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Cs.enqueueReplaceState(i,i.state,null),Qo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function mr(e,t){try{var n="",r=t;do n+=Dg(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function pa(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function cl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var l0=typeof WeakMap=="function"?WeakMap:Map;function qh(e,t,n){n=yt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){es||(es=!0,_l=r),cl(e,t)},n}function Jh(e,t,n){n=yt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){cl(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){cl(e,t),typeof r!="function"&&(Kt===null?Kt=new Set([this]):Kt.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Qc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new l0;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=k0.bind(null,e,t,n),t.then(e,e))}function qc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Jc(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=yt(-1,1),t.tag=2,Gt(n,t,1))),n.lanes|=1),e)}var u0=It.ReactCurrentOwner,ke=!1;function ge(e,t,n,r){t.child=e===null?Ch(t,null,n,r):hr(t,e.child,n,r)}function Xc(e,t,n,r,i){n=n.render;var o=t.ref;return ir(t,i),r=Su(e,t,n,r,o,i),n=ku(),e!==null&&!ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,kt(e,t,i)):(Y&&n&&uu(t),t.flags|=1,ge(e,t,r,i),t.child)}function Zc(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Au(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Xh(e,t,o,r,i)):(e=Eo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:di,n(s,r)&&e.ref===t.ref)return kt(e,t,i)}return t.flags|=1,e=Qt(o,r),e.ref=t.ref,e.return=t,t.child=e}function Xh(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(di(o,r)&&e.ref===t.ref)if(ke=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(ke=!0);else return t.lanes=e.lanes,kt(e,t,i)}return dl(e,t,n,r,i)}function Zh(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},V(Xn,Re),Re|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,V(Xn,Re),Re|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,V(Xn,Re),Re|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,V(Xn,Re),Re|=r;return ge(e,t,i,n),t.child}function ep(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function dl(e,t,n,r,i){var o=xe(n)?Cn:me.current;return o=dr(t,o),ir(t,i),n=Su(e,t,n,r,o,i),r=ku(),e!==null&&!ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,kt(e,t,i)):(Y&&r&&uu(t),t.flags|=1,ge(e,t,n,i),t.child)}function ed(e,t,n,r,i){if(xe(n)){var o=!0;Vo(t)}else o=!1;if(ir(t,i),t.stateNode===null)_o(e,t),Qh(t,n,r),ul(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ue(u):(u=xe(n)?Cn:me.current,u=dr(t,u));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Yc(t,s,r,u),bt=!1;var m=t.memoizedState;s.state=m,Qo(t,r,s,i),l=t.memoizedState,a!==r||m!==l||Ee.current||bt?(typeof f=="function"&&(ll(t,n,f,r),l=t.memoizedState),(a=bt||Kc(t,n,a,r,m,l,u))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Ph(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:We(t.type,a),s.props=u,d=t.pendingProps,m=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ue(l):(l=xe(n)?Cn:me.current,l=dr(t,l));var g=n.getDerivedStateFromProps;(f=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==d||m!==l)&&Yc(t,s,r,l),bt=!1,m=t.memoizedState,s.state=m,Qo(t,r,s,i);var w=t.memoizedState;a!==d||m!==w||Ee.current||bt?(typeof g=="function"&&(ll(t,n,g,r),w=t.memoizedState),(u=bt||Kc(t,n,u,r,m,w,l)||!1)?(f||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,w,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,w,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),s.props=r,s.state=w,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return fl(e,t,n,r,o,i)}function fl(e,t,n,r,i,o){ep(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&zc(t,n,!1),kt(e,t,o);r=t.stateNode,u0.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=hr(t,e.child,null,o),t.child=hr(t,null,a,o)):ge(e,t,a,o),t.memoizedState=r.state,i&&zc(t,n,!0),t.child}function tp(e){var t=e.stateNode;t.pendingContext?jc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&jc(e,t.context,!1),vu(e,t.containerInfo)}function td(e,t,n,r,i){return fr(),du(i),t.flags|=256,ge(e,t,n,r),t.child}var hl={dehydrated:null,treeContext:null,retryLane:0};function pl(e){return{baseLanes:e,cachePool:null,transitions:null}}function np(e,t,n){var r=t.pendingProps,i=Q.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),V(Q,i&1),e===null)return sl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Rs(s,r,0,null),e=En(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=pl(n),t.memoizedState=hl,e):Iu(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return c0(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Qt(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Qt(a,o):(o=En(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?pl(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=hl,r}return o=e.child,e=o.sibling,r=Qt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Iu(e,t){return t=Rs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function no(e,t,n,r){return r!==null&&du(r),hr(t,e.child,null,n),e=Iu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function c0(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=pa(Error(I(422))),no(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Rs({mode:"visible",children:r.children},i,0,null),o=En(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&hr(t,e.child,null,s),t.child.memoizedState=pl(s),t.memoizedState=hl,o);if(!(t.mode&1))return no(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(I(419)),r=pa(o,r,void 0),no(e,t,s,r)}if(a=(s&e.childLanes)!==0,ke||a){if(r=le,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,St(e,i),Qe(r,e,i,-1))}return Ou(),r=pa(Error(I(421))),no(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=E0.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Ne=Wt(i.nextSibling),Oe=t,Y=!0,Ke=null,e!==null&&(De[Me++]=ft,De[Me++]=ht,De[Me++]=Tn,ft=e.id,ht=e.overflow,Tn=t),t=Iu(t,r.children),t.flags|=4096,t)}function nd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),al(e.return,t,n)}function ma(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function rp(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ge(e,t,r.children,n),r=Q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&nd(e,n,t);else if(e.tag===19)nd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(V(Q,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&qo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ma(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&qo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ma(t,!0,n,null,o);break;case"together":ma(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function _o(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function kt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Rn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(I(153));if(t.child!==null){for(e=t.child,n=Qt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Qt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function d0(e,t,n){switch(t.tag){case 3:tp(t),fr();break;case 5:Rh(t);break;case 1:xe(t.type)&&Vo(t);break;case 4:vu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;V(Ko,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(V(Q,Q.current&1),t.flags|=128,null):n&t.child.childLanes?np(e,t,n):(V(Q,Q.current&1),e=kt(e,t,n),e!==null?e.sibling:null);V(Q,Q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return rp(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),V(Q,Q.current),r)break;return null;case 22:case 23:return t.lanes=0,Zh(e,t,n)}return kt(e,t,n)}var ip,ml,op,sp;ip=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ml=function(){};op=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,wn(it.current);var o=null;switch(n){case"input":i=$a(e,i),r=$a(e,r),o=[];break;case"select":i=J({},i,{value:void 0}),r=J({},r,{value:void 0}),o=[];break;case"textarea":i=Ua(e,i),r=Ua(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Bo)}Ba(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ii.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ii.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&W("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};sp=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ur(e,t){if(!Y)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function he(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function f0(e,t,n){var r=t.pendingProps;switch(cu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return he(t),null;case 1:return xe(t.type)&&Ho(),he(t),null;case 3:return r=t.stateNode,pr(),K(Ee),K(me),wu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(eo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ke!==null&&(El(Ke),Ke=null))),ml(e,t),he(t),null;case 5:yu(t);var i=wn(gi.current);if(n=t.type,e!==null&&t.stateNode!=null)op(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(I(166));return he(t),null}if(e=wn(it.current),eo(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[nt]=t,r[pi]=o,e=(t.mode&1)!==0,n){case"dialog":W("cancel",r),W("close",r);break;case"iframe":case"object":case"embed":W("load",r);break;case"video":case"audio":for(i=0;i<Wr.length;i++)W(Wr[i],r);break;case"source":W("error",r);break;case"img":case"image":case"link":W("error",r),W("load",r);break;case"details":W("toggle",r);break;case"input":dc(r,o),W("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},W("invalid",r);break;case"textarea":hc(r,o),W("invalid",r)}Ba(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Zi(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Zi(r.textContent,a,e),i=["children",""+a]):ii.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&W("scroll",r)}switch(n){case"input":Wi(r),fc(r,o,!0);break;case"textarea":Wi(r),pc(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Bo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Lf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[nt]=t,e[pi]=r,ip(e,t,!1,!1),t.stateNode=e;e:{switch(s=Ha(n,r),n){case"dialog":W("cancel",e),W("close",e),i=r;break;case"iframe":case"object":case"embed":W("load",e),i=r;break;case"video":case"audio":for(i=0;i<Wr.length;i++)W(Wr[i],e);i=r;break;case"source":W("error",e),i=r;break;case"img":case"image":case"link":W("error",e),W("load",e),i=r;break;case"details":W("toggle",e),i=r;break;case"input":dc(e,r),i=$a(e,r),W("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=J({},r,{value:void 0}),W("invalid",e);break;case"textarea":hc(e,r),i=Ua(e,r),W("invalid",e);break;default:i=r}Ba(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?$f(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Df(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&oi(e,l):typeof l=="number"&&oi(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(ii.hasOwnProperty(o)?l!=null&&o==="onScroll"&&W("scroll",e):l!=null&&Ql(e,o,l,s))}switch(n){case"input":Wi(e),fc(e,r,!1);break;case"textarea":Wi(e),pc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+en(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?er(e,!!r.multiple,o,!1):r.defaultValue!=null&&er(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Bo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return he(t),null;case 6:if(e&&t.stateNode!=null)sp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(I(166));if(n=wn(gi.current),wn(it.current),eo(t)){if(r=t.stateNode,n=t.memoizedProps,r[nt]=t,(o=r.nodeValue!==n)&&(e=Oe,e!==null))switch(e.tag){case 3:Zi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Zi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[nt]=t,t.stateNode=r}return he(t),null;case 13:if(K(Q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Y&&Ne!==null&&t.mode&1&&!(t.flags&128))xh(),fr(),t.flags|=98560,o=!1;else if(o=eo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(I(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(I(317));o[nt]=t}else fr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;he(t),o=!1}else Ke!==null&&(El(Ke),Ke=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Q.current&1?ie===0&&(ie=3):Ou())),t.updateQueue!==null&&(t.flags|=4),he(t),null);case 4:return pr(),ml(e,t),e===null&&fi(t.stateNode.containerInfo),he(t),null;case 10:return pu(t.type._context),he(t),null;case 17:return xe(t.type)&&Ho(),he(t),null;case 19:if(K(Q),o=t.memoizedState,o===null)return he(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)Ur(o,!1);else{if(ie!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=qo(e),s!==null){for(t.flags|=128,Ur(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return V(Q,Q.current&1|2),t.child}e=e.sibling}o.tail!==null&&Z()>gr&&(t.flags|=128,r=!0,Ur(o,!1),t.lanes=4194304)}else{if(!r)if(e=qo(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ur(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Y)return he(t),null}else 2*Z()-o.renderingStartTime>gr&&n!==1073741824&&(t.flags|=128,r=!0,Ur(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Z(),t.sibling=null,n=Q.current,V(Q,r?n&1|2:n&1),t):(he(t),null);case 22:case 23:return Nu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Re&1073741824&&(he(t),t.subtreeFlags&6&&(t.flags|=8192)):he(t),null;case 24:return null;case 25:return null}throw Error(I(156,t.tag))}function h0(e,t){switch(cu(t),t.tag){case 1:return xe(t.type)&&Ho(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return pr(),K(Ee),K(me),wu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return yu(t),null;case 13:if(K(Q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(I(340));fr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return K(Q),null;case 4:return pr(),null;case 10:return pu(t.type._context),null;case 22:case 23:return Nu(),null;case 24:return null;default:return null}}var ro=!1,pe=!1,p0=typeof WeakSet=="function"?WeakSet:Set,R=null;function Jn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){X(e,t,r)}else n.current=null}function gl(e,t,n){try{n()}catch(r){X(e,t,r)}}var rd=!1;function m0(e,t){if(Za=zo,e=dh(),lu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,f=0,d=e,m=null;t:for(;;){for(var g;d!==n||i!==0&&d.nodeType!==3||(a=s+i),d!==o||r!==0&&d.nodeType!==3||(l=s+r),d.nodeType===3&&(s+=d.nodeValue.length),(g=d.firstChild)!==null;)m=d,d=g;for(;;){if(d===e)break t;if(m===n&&++u===i&&(a=s),m===o&&++f===r&&(l=s),(g=d.nextSibling)!==null)break;d=m,m=d.parentNode}d=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(el={focusedElem:e,selectionRange:n},zo=!1,R=t;R!==null;)if(t=R,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,R=e;else for(;R!==null;){t=R;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var _=w.memoizedProps,E=w.memoizedState,h=t.stateNode,c=h.getSnapshotBeforeUpdate(t.elementType===t.type?_:We(t.type,_),E);h.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(y){X(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,R=e;break}R=t.return}return w=rd,rd=!1,w}function Zr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&gl(t,n,o)}i=i.next}while(i!==r)}}function Ts(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function vl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function ap(e){var t=e.alternate;t!==null&&(e.alternate=null,ap(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[nt],delete t[pi],delete t[rl],delete t[Jv],delete t[Xv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function lp(e){return e.tag===5||e.tag===3||e.tag===4}function id(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||lp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function yl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Bo));else if(r!==4&&(e=e.child,e!==null))for(yl(e,t,n),e=e.sibling;e!==null;)yl(e,t,n),e=e.sibling}function wl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(wl(e,t,n),e=e.sibling;e!==null;)wl(e,t,n),e=e.sibling}var ue=null,Ge=!1;function Pt(e,t,n){for(n=n.child;n!==null;)up(e,t,n),n=n.sibling}function up(e,t,n){if(rt&&typeof rt.onCommitFiberUnmount=="function")try{rt.onCommitFiberUnmount(ws,n)}catch{}switch(n.tag){case 5:pe||Jn(n,t);case 6:var r=ue,i=Ge;ue=null,Pt(e,t,n),ue=r,Ge=i,ue!==null&&(Ge?(e=ue,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ue.removeChild(n.stateNode));break;case 18:ue!==null&&(Ge?(e=ue,n=n.stateNode,e.nodeType===8?la(e.parentNode,n):e.nodeType===1&&la(e,n),ui(e)):la(ue,n.stateNode));break;case 4:r=ue,i=Ge,ue=n.stateNode.containerInfo,Ge=!0,Pt(e,t,n),ue=r,Ge=i;break;case 0:case 11:case 14:case 15:if(!pe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&gl(n,t,s),i=i.next}while(i!==r)}Pt(e,t,n);break;case 1:if(!pe&&(Jn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){X(n,t,a)}Pt(e,t,n);break;case 21:Pt(e,t,n);break;case 22:n.mode&1?(pe=(r=pe)||n.memoizedState!==null,Pt(e,t,n),pe=r):Pt(e,t,n);break;default:Pt(e,t,n)}}function od(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new p0),t.forEach(function(r){var i=x0.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ve(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:ue=a.stateNode,Ge=!1;break e;case 3:ue=a.stateNode.containerInfo,Ge=!0;break e;case 4:ue=a.stateNode.containerInfo,Ge=!0;break e}a=a.return}if(ue===null)throw Error(I(160));up(o,s,i),ue=null,Ge=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){X(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)cp(t,e),t=t.sibling}function cp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ve(t,e),Ze(e),r&4){try{Zr(3,e,e.return),Ts(3,e)}catch(_){X(e,e.return,_)}try{Zr(5,e,e.return)}catch(_){X(e,e.return,_)}}break;case 1:Ve(t,e),Ze(e),r&512&&n!==null&&Jn(n,n.return);break;case 5:if(Ve(t,e),Ze(e),r&512&&n!==null&&Jn(n,n.return),e.flags&32){var i=e.stateNode;try{oi(i,"")}catch(_){X(e,e.return,_)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Af(i,o),Ha(a,s);var u=Ha(a,o);for(s=0;s<l.length;s+=2){var f=l[s],d=l[s+1];f==="style"?$f(i,d):f==="dangerouslySetInnerHTML"?Df(i,d):f==="children"?oi(i,d):Ql(i,f,d,u)}switch(a){case"input":ja(i,o);break;case"textarea":bf(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?er(i,!!o.multiple,g,!1):m!==!!o.multiple&&(o.defaultValue!=null?er(i,!!o.multiple,o.defaultValue,!0):er(i,!!o.multiple,o.multiple?[]:"",!1))}i[pi]=o}catch(_){X(e,e.return,_)}}break;case 6:if(Ve(t,e),Ze(e),r&4){if(e.stateNode===null)throw Error(I(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(_){X(e,e.return,_)}}break;case 3:if(Ve(t,e),Ze(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ui(t.containerInfo)}catch(_){X(e,e.return,_)}break;case 4:Ve(t,e),Ze(e);break;case 13:Ve(t,e),Ze(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Pu=Z())),r&4&&od(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(pe=(u=pe)||f,Ve(t,e),pe=u):Ve(t,e),Ze(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(R=e,f=e.child;f!==null;){for(d=R=f;R!==null;){switch(m=R,g=m.child,m.tag){case 0:case 11:case 14:case 15:Zr(4,m,m.return);break;case 1:Jn(m,m.return);var w=m.stateNode;if(typeof w.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(_){X(r,n,_)}}break;case 5:Jn(m,m.return);break;case 22:if(m.memoizedState!==null){ad(d);continue}}g!==null?(g.return=m,R=g):ad(d)}f=f.sibling}e:for(f=null,d=e;;){if(d.tag===5){if(f===null){f=d;try{i=d.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=d.stateNode,l=d.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Mf("display",s))}catch(_){X(e,e.return,_)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(_){X(e,e.return,_)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Ve(t,e),Ze(e),r&4&&od(e);break;case 21:break;default:Ve(t,e),Ze(e)}}function Ze(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(lp(n)){var r=n;break e}n=n.return}throw Error(I(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(oi(i,""),r.flags&=-33);var o=id(e);wl(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=id(e);yl(e,a,s);break;default:throw Error(I(161))}}catch(l){X(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function g0(e,t,n){R=e,dp(e)}function dp(e,t,n){for(var r=(e.mode&1)!==0;R!==null;){var i=R,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||ro;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||pe;a=ro;var u=pe;if(ro=s,(pe=l)&&!u)for(R=i;R!==null;)s=R,l=s.child,s.tag===22&&s.memoizedState!==null?ld(i):l!==null?(l.return=s,R=l):ld(i);for(;o!==null;)R=o,dp(o),o=o.sibling;R=i,ro=a,pe=u}sd(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,R=o):sd(e)}}function sd(e){for(;R!==null;){var t=R;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:pe||Ts(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!pe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:We(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Vc(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Vc(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&ui(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}pe||t.flags&512&&vl(t)}catch(m){X(t,t.return,m)}}if(t===e){R=null;break}if(n=t.sibling,n!==null){n.return=t.return,R=n;break}R=t.return}}function ad(e){for(;R!==null;){var t=R;if(t===e){R=null;break}var n=t.sibling;if(n!==null){n.return=t.return,R=n;break}R=t.return}}function ld(e){for(;R!==null;){var t=R;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ts(4,t)}catch(l){X(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){X(t,i,l)}}var o=t.return;try{vl(t)}catch(l){X(t,o,l)}break;case 5:var s=t.return;try{vl(t)}catch(l){X(t,s,l)}}}catch(l){X(t,t.return,l)}if(t===e){R=null;break}var a=t.sibling;if(a!==null){a.return=t.return,R=a;break}R=t.return}}var v0=Math.ceil,Zo=It.ReactCurrentDispatcher,Cu=It.ReactCurrentOwner,ze=It.ReactCurrentBatchConfig,$=0,le=null,te=null,ce=0,Re=0,Xn=rn(0),ie=0,_i=null,Rn=0,Ps=0,Tu=0,ei=null,Se=null,Pu=0,gr=1/0,lt=null,es=!1,_l=null,Kt=null,io=!1,Ut=null,ts=0,ti=0,Sl=null,So=-1,ko=0;function ve(){return $&6?Z():So!==-1?So:So=Z()}function Yt(e){return e.mode&1?$&2&&ce!==0?ce&-ce:e0.transition!==null?(ko===0&&(ko=Qf()),ko):(e=U,e!==0||(e=window.event,e=e===void 0?16:nh(e.type)),e):1}function Qe(e,t,n,r){if(50<ti)throw ti=0,Sl=null,Error(I(185));Ni(e,n,r),(!($&2)||e!==le)&&(e===le&&(!($&2)&&(Ps|=n),ie===4&&Dt(e,ce)),Ie(e,r),n===1&&$===0&&!(t.mode&1)&&(gr=Z()+500,xs&&on()))}function Ie(e,t){var n=e.callbackNode;ev(e,t);var r=jo(e,e===le?ce:0);if(r===0)n!==null&&vc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&vc(n),t===1)e.tag===0?Zv(ud.bind(null,e)):Sh(ud.bind(null,e)),Qv(function(){!($&6)&&on()}),n=null;else{switch(qf(r)){case 1:n=eu;break;case 4:n=Kf;break;case 16:n=$o;break;case 536870912:n=Yf;break;default:n=$o}n=wp(n,fp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function fp(e,t){if(So=-1,ko=0,$&6)throw Error(I(327));var n=e.callbackNode;if(or()&&e.callbackNode!==n)return null;var r=jo(e,e===le?ce:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ns(e,r);else{t=r;var i=$;$|=2;var o=pp();(le!==e||ce!==t)&&(lt=null,gr=Z()+500,kn(e,t));do try{_0();break}catch(a){hp(e,a)}while(!0);hu(),Zo.current=o,$=i,te!==null?t=0:(le=null,ce=0,t=ie)}if(t!==0){if(t===2&&(i=Ya(e),i!==0&&(r=i,t=kl(e,i))),t===1)throw n=_i,kn(e,0),Dt(e,r),Ie(e,Z()),n;if(t===6)Dt(e,r);else{if(i=e.current.alternate,!(r&30)&&!y0(i)&&(t=ns(e,r),t===2&&(o=Ya(e),o!==0&&(r=o,t=kl(e,o))),t===1))throw n=_i,kn(e,0),Dt(e,r),Ie(e,Z()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(I(345));case 2:pn(e,Se,lt);break;case 3:if(Dt(e,r),(r&130023424)===r&&(t=Pu+500-Z(),10<t)){if(jo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){ve(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=nl(pn.bind(null,e,Se,lt),t);break}pn(e,Se,lt);break;case 4:if(Dt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-Ye(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=Z()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*v0(r/1960))-r,10<r){e.timeoutHandle=nl(pn.bind(null,e,Se,lt),r);break}pn(e,Se,lt);break;case 5:pn(e,Se,lt);break;default:throw Error(I(329))}}}return Ie(e,Z()),e.callbackNode===n?fp.bind(null,e):null}function kl(e,t){var n=ei;return e.current.memoizedState.isDehydrated&&(kn(e,t).flags|=256),e=ns(e,t),e!==2&&(t=Se,Se=n,t!==null&&El(t)),e}function El(e){Se===null?Se=e:Se.push.apply(Se,e)}function y0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Xe(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Dt(e,t){for(t&=~Tu,t&=~Ps,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ye(t),r=1<<n;e[n]=-1,t&=~r}}function ud(e){if($&6)throw Error(I(327));or();var t=jo(e,0);if(!(t&1))return Ie(e,Z()),null;var n=ns(e,t);if(e.tag!==0&&n===2){var r=Ya(e);r!==0&&(t=r,n=kl(e,r))}if(n===1)throw n=_i,kn(e,0),Dt(e,t),Ie(e,Z()),n;if(n===6)throw Error(I(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,pn(e,Se,lt),Ie(e,Z()),null}function Ru(e,t){var n=$;$|=1;try{return e(t)}finally{$=n,$===0&&(gr=Z()+500,xs&&on())}}function Nn(e){Ut!==null&&Ut.tag===0&&!($&6)&&or();var t=$;$|=1;var n=ze.transition,r=U;try{if(ze.transition=null,U=1,e)return e()}finally{U=r,ze.transition=n,$=t,!($&6)&&on()}}function Nu(){Re=Xn.current,K(Xn)}function kn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Yv(n)),te!==null)for(n=te.return;n!==null;){var r=n;switch(cu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ho();break;case 3:pr(),K(Ee),K(me),wu();break;case 5:yu(r);break;case 4:pr();break;case 13:K(Q);break;case 19:K(Q);break;case 10:pu(r.type._context);break;case 22:case 23:Nu()}n=n.return}if(le=e,te=e=Qt(e.current,null),ce=Re=t,ie=0,_i=null,Tu=Ps=Rn=0,Se=ei=null,yn!==null){for(t=0;t<yn.length;t++)if(n=yn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}yn=null}return e}function hp(e,t){do{var n=te;try{if(hu(),yo.current=Xo,Jo){for(var r=q.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Jo=!1}if(Pn=0,oe=re=q=null,Xr=!1,vi=0,Cu.current=null,n===null||n.return===null){ie=1,_i=t,te=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=ce,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=a,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var g=qc(s);if(g!==null){g.flags&=-257,Jc(g,s,a,o,t),g.mode&1&&Qc(o,u,t),t=g,l=u;var w=t.updateQueue;if(w===null){var _=new Set;_.add(l),t.updateQueue=_}else w.add(l);break e}else{if(!(t&1)){Qc(o,u,t),Ou();break e}l=Error(I(426))}}else if(Y&&a.mode&1){var E=qc(s);if(E!==null){!(E.flags&65536)&&(E.flags|=256),Jc(E,s,a,o,t),du(mr(l,a));break e}}o=l=mr(l,a),ie!==4&&(ie=2),ei===null?ei=[o]:ei.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var h=qh(o,l,t);Hc(o,h);break e;case 1:a=l;var c=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Kt===null||!Kt.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var y=Jh(o,a,t);Hc(o,y);break e}}o=o.return}while(o!==null)}gp(n)}catch(x){t=x,te===n&&n!==null&&(te=n=n.return);continue}break}while(!0)}function pp(){var e=Zo.current;return Zo.current=Xo,e===null?Xo:e}function Ou(){(ie===0||ie===3||ie===2)&&(ie=4),le===null||!(Rn&268435455)&&!(Ps&268435455)||Dt(le,ce)}function ns(e,t){var n=$;$|=2;var r=pp();(le!==e||ce!==t)&&(lt=null,kn(e,t));do try{w0();break}catch(i){hp(e,i)}while(!0);if(hu(),$=n,Zo.current=r,te!==null)throw Error(I(261));return le=null,ce=0,ie}function w0(){for(;te!==null;)mp(te)}function _0(){for(;te!==null&&!Wg();)mp(te)}function mp(e){var t=yp(e.alternate,e,Re);e.memoizedProps=e.pendingProps,t===null?gp(e):te=t,Cu.current=null}function gp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=h0(n,t),n!==null){n.flags&=32767,te=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ie=6,te=null;return}}else if(n=f0(n,t,Re),n!==null){te=n;return}if(t=t.sibling,t!==null){te=t;return}te=t=e}while(t!==null);ie===0&&(ie=5)}function pn(e,t,n){var r=U,i=ze.transition;try{ze.transition=null,U=1,S0(e,t,n,r)}finally{ze.transition=i,U=r}return null}function S0(e,t,n,r){do or();while(Ut!==null);if($&6)throw Error(I(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(I(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(tv(e,o),e===le&&(te=le=null,ce=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||io||(io=!0,wp($o,function(){return or(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=ze.transition,ze.transition=null;var s=U;U=1;var a=$;$|=4,Cu.current=null,m0(e,n),cp(n,e),Fv(el),zo=!!Za,el=Za=null,e.current=n,g0(n),Gg(),$=a,U=s,ze.transition=o}else e.current=n;if(io&&(io=!1,Ut=e,ts=i),o=e.pendingLanes,o===0&&(Kt=null),Qg(n.stateNode),Ie(e,Z()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(es)throw es=!1,e=_l,_l=null,e;return ts&1&&e.tag!==0&&or(),o=e.pendingLanes,o&1?e===Sl?ti++:(ti=0,Sl=e):ti=0,on(),null}function or(){if(Ut!==null){var e=qf(ts),t=ze.transition,n=U;try{if(ze.transition=null,U=16>e?16:e,Ut===null)var r=!1;else{if(e=Ut,Ut=null,ts=0,$&6)throw Error(I(331));var i=$;for($|=4,R=e.current;R!==null;){var o=R,s=o.child;if(R.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(R=u;R!==null;){var f=R;switch(f.tag){case 0:case 11:case 15:Zr(8,f,o)}var d=f.child;if(d!==null)d.return=f,R=d;else for(;R!==null;){f=R;var m=f.sibling,g=f.return;if(ap(f),f===u){R=null;break}if(m!==null){m.return=g,R=m;break}R=g}}}var w=o.alternate;if(w!==null){var _=w.child;if(_!==null){w.child=null;do{var E=_.sibling;_.sibling=null,_=E}while(_!==null)}}R=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,R=s;else e:for(;R!==null;){if(o=R,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Zr(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,R=h;break e}R=o.return}}var c=e.current;for(R=c;R!==null;){s=R;var p=s.child;if(s.subtreeFlags&2064&&p!==null)p.return=s,R=p;else e:for(s=c;R!==null;){if(a=R,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ts(9,a)}}catch(x){X(a,a.return,x)}if(a===s){R=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,R=y;break e}R=a.return}}if($=i,on(),rt&&typeof rt.onPostCommitFiberRoot=="function")try{rt.onPostCommitFiberRoot(ws,e)}catch{}r=!0}return r}finally{U=n,ze.transition=t}}return!1}function cd(e,t,n){t=mr(n,t),t=qh(e,t,1),e=Gt(e,t,1),t=ve(),e!==null&&(Ni(e,1,t),Ie(e,t))}function X(e,t,n){if(e.tag===3)cd(e,e,n);else for(;t!==null;){if(t.tag===3){cd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Kt===null||!Kt.has(r))){e=mr(n,e),e=Jh(t,e,1),t=Gt(t,e,1),e=ve(),t!==null&&(Ni(t,1,e),Ie(t,e));break}}t=t.return}}function k0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ve(),e.pingedLanes|=e.suspendedLanes&n,le===e&&(ce&n)===n&&(ie===4||ie===3&&(ce&130023424)===ce&&500>Z()-Pu?kn(e,0):Tu|=n),Ie(e,t)}function vp(e,t){t===0&&(e.mode&1?(t=Yi,Yi<<=1,!(Yi&130023424)&&(Yi=4194304)):t=1);var n=ve();e=St(e,t),e!==null&&(Ni(e,t,n),Ie(e,n))}function E0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),vp(e,n)}function x0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(I(314))}r!==null&&r.delete(t),vp(e,n)}var yp;yp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ee.current)ke=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ke=!1,d0(e,t,n);ke=!!(e.flags&131072)}else ke=!1,Y&&t.flags&1048576&&kh(t,Go,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;_o(e,t),e=t.pendingProps;var i=dr(t,me.current);ir(t,n),i=Su(null,t,r,e,i,n);var o=ku();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,xe(r)?(o=!0,Vo(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,gu(t),i.updater=Cs,t.stateNode=i,i._reactInternals=t,ul(t,r,e,n),t=fl(null,t,r,!0,o,n)):(t.tag=0,Y&&o&&uu(t),ge(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(_o(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=C0(r),e=We(r,e),i){case 0:t=dl(null,t,r,e,n);break e;case 1:t=ed(null,t,r,e,n);break e;case 11:t=Xc(null,t,r,e,n);break e;case 14:t=Zc(null,t,r,We(r.type,e),n);break e}throw Error(I(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:We(r,i),dl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:We(r,i),ed(e,t,r,i,n);case 3:e:{if(tp(t),e===null)throw Error(I(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Ph(e,t),Qo(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=mr(Error(I(423)),t),t=td(e,t,r,n,i);break e}else if(r!==i){i=mr(Error(I(424)),t),t=td(e,t,r,n,i);break e}else for(Ne=Wt(t.stateNode.containerInfo.firstChild),Oe=t,Y=!0,Ke=null,n=Ch(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(fr(),r===i){t=kt(e,t,n);break e}ge(e,t,r,n)}t=t.child}return t;case 5:return Rh(t),e===null&&sl(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,tl(r,i)?s=null:o!==null&&tl(r,o)&&(t.flags|=32),ep(e,t),ge(e,t,s,n),t.child;case 6:return e===null&&sl(t),null;case 13:return np(e,t,n);case 4:return vu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=hr(t,null,r,n):ge(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:We(r,i),Xc(e,t,r,i,n);case 7:return ge(e,t,t.pendingProps,n),t.child;case 8:return ge(e,t,t.pendingProps.children,n),t.child;case 12:return ge(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,V(Ko,r._currentValue),r._currentValue=s,o!==null)if(Xe(o.value,s)){if(o.children===i.children&&!Ee.current){t=kt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=yt(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),al(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(I(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),al(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}ge(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,ir(t,n),i=Ue(i),r=r(i),t.flags|=1,ge(e,t,r,n),t.child;case 14:return r=t.type,i=We(r,t.pendingProps),i=We(r.type,i),Zc(e,t,r,i,n);case 15:return Xh(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:We(r,i),_o(e,t),t.tag=1,xe(r)?(e=!0,Vo(t)):e=!1,ir(t,n),Qh(t,r,i),ul(t,r,i,n),fl(null,t,r,!0,e,n);case 19:return rp(e,t,n);case 22:return Zh(e,t,n)}throw Error(I(156,t.tag))};function wp(e,t){return Gf(e,t)}function I0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function je(e,t,n,r){return new I0(e,t,n,r)}function Au(e){return e=e.prototype,!(!e||!e.isReactComponent)}function C0(e){if(typeof e=="function")return Au(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Jl)return 11;if(e===Xl)return 14}return 2}function Qt(e,t){var n=e.alternate;return n===null?(n=je(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Eo(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Au(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Bn:return En(n.children,i,o,t);case ql:s=8,i|=8;break;case ba:return e=je(12,n,t,i|2),e.elementType=ba,e.lanes=o,e;case La:return e=je(13,n,t,i),e.elementType=La,e.lanes=o,e;case Da:return e=je(19,n,t,i),e.elementType=Da,e.lanes=o,e;case Rf:return Rs(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Tf:s=10;break e;case Pf:s=9;break e;case Jl:s=11;break e;case Xl:s=14;break e;case At:s=16,r=null;break e}throw Error(I(130,e==null?e:typeof e,""))}return t=je(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function En(e,t,n,r){return e=je(7,e,r,t),e.lanes=n,e}function Rs(e,t,n,r){return e=je(22,e,r,t),e.elementType=Rf,e.lanes=n,e.stateNode={isHidden:!1},e}function ga(e,t,n){return e=je(6,e,null,t),e.lanes=n,e}function va(e,t,n){return t=je(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function T0(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Js(0),this.expirationTimes=Js(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Js(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function bu(e,t,n,r,i,o,s,a,l){return e=new T0(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=je(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},gu(o),e}function P0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Fn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function _p(e){if(!e)return tn;e=e._reactInternals;e:{if(Dn(e)!==e||e.tag!==1)throw Error(I(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(xe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(I(171))}if(e.tag===1){var n=e.type;if(xe(n))return _h(e,n,t)}return t}function Sp(e,t,n,r,i,o,s,a,l){return e=bu(n,r,!0,e,i,o,s,a,l),e.context=_p(null),n=e.current,r=ve(),i=Yt(n),o=yt(r,i),o.callback=t??null,Gt(n,o,i),e.current.lanes=i,Ni(e,i,r),Ie(e,r),e}function Ns(e,t,n,r){var i=t.current,o=ve(),s=Yt(i);return n=_p(n),t.context===null?t.context=n:t.pendingContext=n,t=yt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Gt(i,t,s),e!==null&&(Qe(e,i,s,o),vo(e,i,s)),s}function rs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function dd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Lu(e,t){dd(e,t),(e=e.alternate)&&dd(e,t)}function R0(){return null}var kp=typeof reportError=="function"?reportError:function(e){console.error(e)};function Du(e){this._internalRoot=e}Os.prototype.render=Du.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(I(409));Ns(e,t,null,null)};Os.prototype.unmount=Du.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Nn(function(){Ns(null,e,null,null)}),t[_t]=null}};function Os(e){this._internalRoot=e}Os.prototype.unstable_scheduleHydration=function(e){if(e){var t=Zf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Lt.length&&t!==0&&t<Lt[n].priority;n++);Lt.splice(n,0,e),n===0&&th(e)}};function Mu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function As(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function fd(){}function N0(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=rs(s);o.call(u)}}var s=Sp(t,r,e,0,null,!1,!1,"",fd);return e._reactRootContainer=s,e[_t]=s.current,fi(e.nodeType===8?e.parentNode:e),Nn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=rs(l);a.call(u)}}var l=bu(e,0,!1,null,null,!1,!1,"",fd);return e._reactRootContainer=l,e[_t]=l.current,fi(e.nodeType===8?e.parentNode:e),Nn(function(){Ns(t,l,n,r)}),l}function bs(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=rs(s);a.call(l)}}Ns(t,s,e,i)}else s=N0(n,t,e,i,r);return rs(s)}Jf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Vr(t.pendingLanes);n!==0&&(tu(t,n|1),Ie(t,Z()),!($&6)&&(gr=Z()+500,on()))}break;case 13:Nn(function(){var r=St(e,1);if(r!==null){var i=ve();Qe(r,e,1,i)}}),Lu(e,1)}};nu=function(e){if(e.tag===13){var t=St(e,134217728);if(t!==null){var n=ve();Qe(t,e,134217728,n)}Lu(e,134217728)}};Xf=function(e){if(e.tag===13){var t=Yt(e),n=St(e,t);if(n!==null){var r=ve();Qe(n,e,t,r)}Lu(e,t)}};Zf=function(){return U};eh=function(e,t){var n=U;try{return U=e,t()}finally{U=n}};Wa=function(e,t,n){switch(t){case"input":if(ja(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Es(r);if(!i)throw Error(I(90));Of(r),ja(r,i)}}}break;case"textarea":bf(e,n);break;case"select":t=n.value,t!=null&&er(e,!!n.multiple,t,!1)}};Uf=Ru;Ff=Nn;var O0={usingClientEntryPoint:!1,Events:[Ai,Gn,Es,jf,zf,Ru]},Fr={findFiberByHostInstance:vn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},A0={bundleType:Fr.bundleType,version:Fr.version,rendererPackageName:Fr.rendererPackageName,rendererConfig:Fr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:It.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Vf(e),e===null?null:e.stateNode},findFiberByHostInstance:Fr.findFiberByHostInstance||R0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var oo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!oo.isDisabled&&oo.supportsFiber)try{ws=oo.inject(A0),rt=oo}catch{}}be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O0;be.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Mu(t))throw Error(I(200));return P0(e,t,null,n)};be.createRoot=function(e,t){if(!Mu(e))throw Error(I(299));var n=!1,r="",i=kp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=bu(e,1,!1,null,null,n,!1,r,i),e[_t]=t.current,fi(e.nodeType===8?e.parentNode:e),new Du(t)};be.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(I(188)):(e=Object.keys(e).join(","),Error(I(268,e)));return e=Vf(t),e=e===null?null:e.stateNode,e};be.flushSync=function(e){return Nn(e)};be.hydrate=function(e,t,n){if(!As(t))throw Error(I(200));return bs(null,e,t,!0,n)};be.hydrateRoot=function(e,t,n){if(!Mu(e))throw Error(I(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=kp;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Sp(t,null,e,1,n??null,i,!1,o,s),e[_t]=t.current,fi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Os(t)};be.render=function(e,t,n){if(!As(t))throw Error(I(200));return bs(null,e,t,!1,n)};be.unmountComponentAtNode=function(e){if(!As(e))throw Error(I(40));return e._reactRootContainer?(Nn(function(){bs(null,null,e,!1,function(){e._reactRootContainer=null,e[_t]=null})}),!0):!1};be.unstable_batchedUpdates=Ru;be.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!As(n))throw Error(I(200));if(e==null||e._reactInternals===void 0)throw Error(I(38));return bs(e,t,n,!1,r)};be.version="18.3.1-next-f1338f8080-20240426";function Ep(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ep)}catch(e){console.error(e)}}Ep(),Ef.exports=be;var b0=Ef.exports,xp,hd=b0;xp=hd.createRoot,hd.hydrateRoot;/**
 * @remix-run/router v1.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Si(){return Si=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Si.apply(this,arguments)}var Ft;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Ft||(Ft={}));const pd="popstate";function L0(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:s,hash:a}=r.location;return xl("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:is(i)}return M0(t,n,null,e)}function ne(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Ip(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function D0(){return Math.random().toString(36).substr(2,8)}function md(e,t){return{usr:e.state,key:e.key,idx:t}}function xl(e,t,n,r){return n===void 0&&(n=null),Si({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Tr(t):t,{state:n,key:t&&t.key||r||D0()})}function is(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Tr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function M0(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=Ft.Pop,l=null,u=f();u==null&&(u=0,s.replaceState(Si({},s.state,{idx:u}),""));function f(){return(s.state||{idx:null}).idx}function d(){a=Ft.Pop;let E=f(),h=E==null?null:E-u;u=E,l&&l({action:a,location:_.location,delta:h})}function m(E,h){a=Ft.Push;let c=xl(_.location,E,h);u=f()+1;let p=md(c,u),y=_.createHref(c);try{s.pushState(p,"",y)}catch(x){if(x instanceof DOMException&&x.name==="DataCloneError")throw x;i.location.assign(y)}o&&l&&l({action:a,location:_.location,delta:1})}function g(E,h){a=Ft.Replace;let c=xl(_.location,E,h);u=f();let p=md(c,u),y=_.createHref(c);s.replaceState(p,"",y),o&&l&&l({action:a,location:_.location,delta:0})}function w(E){let h=i.location.origin!=="null"?i.location.origin:i.location.href,c=typeof E=="string"?E:is(E);return c=c.replace(/ $/,"%20"),ne(h,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,h)}let _={get action(){return a},get location(){return e(i,s)},listen(E){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(pd,d),l=E,()=>{i.removeEventListener(pd,d),l=null}},createHref(E){return t(i,E)},createURL:w,encodeLocation(E){let h=w(E);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:m,replace:g,go(E){return s.go(E)}};return _}var gd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(gd||(gd={}));function $0(e,t,n){return n===void 0&&(n="/"),j0(e,t,n,!1)}function j0(e,t,n,r){let i=typeof t=="string"?Tr(t):t,o=$u(i.pathname||"/",n);if(o==null)return null;let s=Cp(e);z0(s);let a=null;for(let l=0;a==null&&l<s.length;++l){let u=q0(o);a=Y0(s[l],u,r)}return a}function Cp(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(ne(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=qt([r,l.relativePath]),f=n.concat(l);o.children&&o.children.length>0&&(ne(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Cp(o.children,t,f,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:G0(u,o.index),routesMeta:f})};return e.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of Tp(o.path))i(o,s,l)}),t}function Tp(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=Tp(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function z0(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:K0(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const U0=/^:[\w-]+$/,F0=3,B0=2,H0=1,V0=10,W0=-2,vd=e=>e==="*";function G0(e,t){let n=e.split("/"),r=n.length;return n.some(vd)&&(r+=W0),t&&(r+=B0),n.filter(i=>!vd(i)).reduce((i,o)=>i+(U0.test(o)?F0:o===""?H0:V0),r)}function K0(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Y0(e,t,n){let{routesMeta:r}=e,i={},o="/",s=[];for(let a=0;a<r.length;++a){let l=r[a],u=a===r.length-1,f=o==="/"?t:t.slice(o.length)||"/",d=yd({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},f),m=l.route;if(!d&&u&&n&&!r[r.length-1].route.index&&(d=yd({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},f)),!d)return null;Object.assign(i,d.params),s.push({params:i,pathname:qt([o,d.pathname]),pathnameBase:ey(qt([o,d.pathnameBase])),route:m}),d.pathnameBase!=="/"&&(o=qt([o,d.pathnameBase]))}return s}function yd(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Q0(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,f,d)=>{let{paramName:m,isOptional:g}=f;if(m==="*"){let _=a[d]||"";s=o.slice(0,o.length-_.length).replace(/(.)\/+$/,"$1")}const w=a[d];return g&&!w?u[m]=void 0:u[m]=(w||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:s,pattern:e}}function Q0(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Ip(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function q0(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Ip(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function $u(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function J0(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Tr(e):e;return{pathname:n?n.startsWith("/")?n:X0(n,t):t,search:ty(r),hash:ny(i)}}function X0(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ya(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Z0(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Pp(e,t){let n=Z0(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Rp(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Tr(e):(i=Si({},e),ne(!i.pathname||!i.pathname.includes("?"),ya("?","pathname","search",i)),ne(!i.pathname||!i.pathname.includes("#"),ya("#","pathname","hash",i)),ne(!i.search||!i.search.includes("#"),ya("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,a;if(s==null)a=n;else{let d=t.length-1;if(!r&&s.startsWith("..")){let m=s.split("/");for(;m[0]==="..";)m.shift(),d-=1;i.pathname=m.join("/")}a=d>=0?t[d]:"/"}let l=J0(i,a),u=s&&s!=="/"&&s.endsWith("/"),f=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||f)&&(l.pathname+="/"),l}const qt=e=>e.join("/").replace(/\/\/+/g,"/"),ey=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),ty=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ny=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function ry(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Np=["post","put","patch","delete"];new Set(Np);const iy=["get",...Np];new Set(iy);/**
 * React Router v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ki(){return ki=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ki.apply(this,arguments)}const ju=S.createContext(null),oy=S.createContext(null),Mn=S.createContext(null),Ls=S.createContext(null),sn=S.createContext({outlet:null,matches:[],isDataRoute:!1}),Op=S.createContext(null);function sy(e,t){let{relative:n}=t===void 0?{}:t;Li()||ne(!1);let{basename:r,navigator:i}=S.useContext(Mn),{hash:o,pathname:s,search:a}=bp(e,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:qt([r,s])),i.createHref({pathname:l,search:a,hash:o})}function Li(){return S.useContext(Ls)!=null}function $n(){return Li()||ne(!1),S.useContext(Ls).location}function Ap(e){S.useContext(Mn).static||S.useLayoutEffect(e)}function Pr(){let{isDataRoute:e}=S.useContext(sn);return e?_y():ay()}function ay(){Li()||ne(!1);let e=S.useContext(ju),{basename:t,future:n,navigator:r}=S.useContext(Mn),{matches:i}=S.useContext(sn),{pathname:o}=$n(),s=JSON.stringify(Pp(i,n.v7_relativeSplatPath)),a=S.useRef(!1);return Ap(()=>{a.current=!0}),S.useCallback(function(u,f){if(f===void 0&&(f={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let d=Rp(u,JSON.parse(s),o,f.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:qt([t,d.pathname])),(f.replace?r.replace:r.push)(d,f.state,f)},[t,r,s,o,e])}function ly(){let{matches:e}=S.useContext(sn),t=e[e.length-1];return t?t.params:{}}function bp(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=S.useContext(Mn),{matches:i}=S.useContext(sn),{pathname:o}=$n(),s=JSON.stringify(Pp(i,r.v7_relativeSplatPath));return S.useMemo(()=>Rp(e,JSON.parse(s),o,n==="path"),[e,s,o,n])}function uy(e,t){return cy(e,t)}function cy(e,t,n,r){Li()||ne(!1);let{navigator:i}=S.useContext(Mn),{matches:o}=S.useContext(sn),s=o[o.length-1],a=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let u=$n(),f;if(t){var d;let E=typeof t=="string"?Tr(t):t;l==="/"||(d=E.pathname)!=null&&d.startsWith(l)||ne(!1),f=E}else f=u;let m=f.pathname||"/",g=m;if(l!=="/"){let E=l.replace(/^\//,"").split("/");g="/"+m.replace(/^\//,"").split("/").slice(E.length).join("/")}let w=$0(e,{pathname:g}),_=my(w&&w.map(E=>Object.assign({},E,{params:Object.assign({},a,E.params),pathname:qt([l,i.encodeLocation?i.encodeLocation(E.pathname).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?l:qt([l,i.encodeLocation?i.encodeLocation(E.pathnameBase).pathname:E.pathnameBase])})),o,n,r);return t&&_?S.createElement(Ls.Provider,{value:{location:ki({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:Ft.Pop}},_):_}function dy(){let e=wy(),t=ry(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},t),n?S.createElement("pre",{style:i},n):null,null)}const fy=S.createElement(dy,null);class hy extends S.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?S.createElement(sn.Provider,{value:this.props.routeContext},S.createElement(Op.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function py(e){let{routeContext:t,match:n,children:r}=e,i=S.useContext(ju);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(sn.Provider,{value:t},r)}function my(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let f=s.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id])!==void 0);f>=0||ne(!1),s=s.slice(0,Math.min(s.length,f+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<s.length;f++){let d=s[f];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=f),d.route.id){let{loaderData:m,errors:g}=n,w=d.route.loader&&m[d.route.id]===void 0&&(!g||g[d.route.id]===void 0);if(d.route.lazy||w){l=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((f,d,m)=>{let g,w=!1,_=null,E=null;n&&(g=a&&d.route.id?a[d.route.id]:void 0,_=d.route.errorElement||fy,l&&(u<0&&m===0?(w=!0,E=null):u===m&&(w=!0,E=d.route.hydrateFallbackElement||null)));let h=t.concat(s.slice(0,m+1)),c=()=>{let p;return g?p=_:w?p=E:d.route.Component?p=S.createElement(d.route.Component,null):d.route.element?p=d.route.element:p=f,S.createElement(py,{match:d,routeContext:{outlet:f,matches:h,isDataRoute:n!=null},children:p})};return n&&(d.route.ErrorBoundary||d.route.errorElement||m===0)?S.createElement(hy,{location:n.location,revalidation:n.revalidation,component:_,error:g,children:c(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):c()},null)}var Lp=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Lp||{}),os=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(os||{});function gy(e){let t=S.useContext(ju);return t||ne(!1),t}function vy(e){let t=S.useContext(oy);return t||ne(!1),t}function yy(e){let t=S.useContext(sn);return t||ne(!1),t}function Dp(e){let t=yy(),n=t.matches[t.matches.length-1];return n.route.id||ne(!1),n.route.id}function wy(){var e;let t=S.useContext(Op),n=vy(os.UseRouteError),r=Dp(os.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function _y(){let{router:e}=gy(Lp.UseNavigateStable),t=Dp(os.UseNavigateStable),n=S.useRef(!1);return Ap(()=>{n.current=!0}),S.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,ki({fromRouteId:t},o)))},[e,t])}const wd={};function Sy(e,t){wd[t]||(wd[t]=!0,console.warn(t))}const _d=(e,t,n)=>Sy(e,"⚠️ React Router Future Flag Warning: "+t+". "+("You can use the `"+e+"` future flag to opt-in early. ")+("For more information, see "+n+"."));function ky(e,t){e!=null&&e.v7_startTransition||_d("v7_startTransition","React Router will begin wrapping state updates in `React.startTransition` in v7","https://reactrouter.com/v6/upgrading/future#v7_starttransition"),!(e!=null&&e.v7_relativeSplatPath)&&!t&&_d("v7_relativeSplatPath","Relative route resolution within Splat routes is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath")}function mn(e){ne(!1)}function Ey(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Ft.Pop,navigator:o,static:s=!1,future:a}=e;Li()&&ne(!1);let l=t.replace(/^\/*/,"/"),u=S.useMemo(()=>({basename:l,navigator:o,static:s,future:ki({v7_relativeSplatPath:!1},a)}),[l,a,o,s]);typeof r=="string"&&(r=Tr(r));let{pathname:f="/",search:d="",hash:m="",state:g=null,key:w="default"}=r,_=S.useMemo(()=>{let E=$u(f,l);return E==null?null:{location:{pathname:E,search:d,hash:m,state:g,key:w},navigationType:i}},[l,f,d,m,g,w,i]);return _==null?null:S.createElement(Mn.Provider,{value:u},S.createElement(Ls.Provider,{children:n,value:_}))}function xy(e){let{children:t,location:n}=e;return uy(Il(t),n)}new Promise(()=>{});function Il(e,t){t===void 0&&(t=[]);let n=[];return S.Children.forEach(e,(r,i)=>{if(!S.isValidElement(r))return;let o=[...t,i];if(r.type===S.Fragment){n.push.apply(n,Il(r.props.children,o));return}r.type!==mn&&ne(!1),!r.props.index||!r.props.children||ne(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Il(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Cl(){return Cl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Cl.apply(this,arguments)}function Iy(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Cy(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Ty(e,t){return e.button===0&&(!t||t==="_self")&&!Cy(e)}const Py=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Ry="6";try{window.__reactRouterVersion=Ry}catch{}const Ny="startTransition",Sd=kg[Ny];function Oy(e){let{basename:t,children:n,future:r,window:i}=e,o=S.useRef();o.current==null&&(o.current=L0({window:i,v5Compat:!0}));let s=o.current,[a,l]=S.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},f=S.useCallback(d=>{u&&Sd?Sd(()=>l(d)):l(d)},[l,u]);return S.useLayoutEffect(()=>s.listen(f),[s,f]),S.useEffect(()=>ky(r),[r]),S.createElement(Ey,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const Ay=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",by=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,so=S.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:l,to:u,preventScrollReset:f,viewTransition:d}=t,m=Iy(t,Py),{basename:g}=S.useContext(Mn),w,_=!1;if(typeof u=="string"&&by.test(u)&&(w=u,Ay))try{let p=new URL(window.location.href),y=u.startsWith("//")?new URL(p.protocol+u):new URL(u),x=$u(y.pathname,g);y.origin===p.origin&&x!=null?u=x+y.search+y.hash:_=!0}catch{}let E=sy(u,{relative:i}),h=Ly(u,{replace:s,state:a,target:l,preventScrollReset:f,relative:i,viewTransition:d});function c(p){r&&r(p),p.defaultPrevented||h(p)}return S.createElement("a",Cl({},m,{href:w||E,onClick:_||o?r:c,ref:n,target:l}))});var kd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(kd||(kd={}));var Ed;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ed||(Ed={}));function Ly(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s,viewTransition:a}=t===void 0?{}:t,l=Pr(),u=$n(),f=bp(e,{relative:s});return S.useCallback(d=>{if(Ty(d,n)){d.preventDefault();let m=r!==void 0?r:is(u)===is(f);l(e,{replace:m,state:i,preventScrollReset:o,relative:s,viewTransition:a})}},[u,l,f,r,i,n,e,o,s,a])}var ae=function(){return ae=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},ae.apply(this,arguments)};function zu(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function vr(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var G="-ms-",ni="-moz-",z="-webkit-",Mp="comm",Ds="rule",Uu="decl",Dy="@import",$p="@keyframes",My="@layer",jp=Math.abs,Fu=String.fromCharCode,Tl=Object.assign;function $y(e,t){return se(e,0)^45?(((t<<2^se(e,0))<<2^se(e,1))<<2^se(e,2))<<2^se(e,3):0}function zp(e){return e.trim()}function ut(e,t){return(e=t.exec(e))?e[0]:e}function L(e,t,n){return e.replace(t,n)}function xo(e,t,n){return e.indexOf(t,n)}function se(e,t){return e.charCodeAt(t)|0}function yr(e,t,n){return e.slice(t,n)}function tt(e){return e.length}function Up(e){return e.length}function Gr(e,t){return t.push(e),e}function jy(e,t){return e.map(t).join("")}function xd(e,t){return e.filter(function(n){return!ut(n,t)})}var Ms=1,wr=1,Fp=0,Be=0,ee=0,Rr="";function $s(e,t,n,r,i,o,s,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Ms,column:wr,length:s,return:"",siblings:a}}function Ot(e,t){return Tl($s("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Un(e){for(;e.root;)e=Ot(e.root,{children:[e]});Gr(e,e.siblings)}function zy(){return ee}function Uy(){return ee=Be>0?se(Rr,--Be):0,wr--,ee===10&&(wr=1,Ms--),ee}function qe(){return ee=Be<Fp?se(Rr,Be++):0,wr++,ee===10&&(wr=1,Ms++),ee}function xn(){return se(Rr,Be)}function Io(){return Be}function js(e,t){return yr(Rr,e,t)}function Pl(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Fy(e){return Ms=wr=1,Fp=tt(Rr=e),Be=0,[]}function By(e){return Rr="",e}function wa(e){return zp(js(Be-1,Rl(e===91?e+2:e===40?e+1:e)))}function Hy(e){for(;(ee=xn())&&ee<33;)qe();return Pl(e)>2||Pl(ee)>3?"":" "}function Vy(e,t){for(;--t&&qe()&&!(ee<48||ee>102||ee>57&&ee<65||ee>70&&ee<97););return js(e,Io()+(t<6&&xn()==32&&qe()==32))}function Rl(e){for(;qe();)switch(ee){case e:return Be;case 34:case 39:e!==34&&e!==39&&Rl(ee);break;case 40:e===41&&Rl(e);break;case 92:qe();break}return Be}function Wy(e,t){for(;qe()&&e+ee!==57;)if(e+ee===84&&xn()===47)break;return"/*"+js(t,Be-1)+"*"+Fu(e===47?e:qe())}function Gy(e){for(;!Pl(xn());)qe();return js(e,Be)}function Ky(e){return By(Co("",null,null,null,[""],e=Fy(e),0,[0],e))}function Co(e,t,n,r,i,o,s,a,l){for(var u=0,f=0,d=s,m=0,g=0,w=0,_=1,E=1,h=1,c=0,p="",y=i,x=o,C=r,k=p;E;)switch(w=c,c=qe()){case 40:if(w!=108&&se(k,d-1)==58){xo(k+=L(wa(c),"&","&\f"),"&\f",jp(u?a[u-1]:0))!=-1&&(h=-1);break}case 34:case 39:case 91:k+=wa(c);break;case 9:case 10:case 13:case 32:k+=Hy(w);break;case 92:k+=Vy(Io()-1,7);continue;case 47:switch(xn()){case 42:case 47:Gr(Yy(Wy(qe(),Io()),t,n,l),l);break;default:k+="/"}break;case 123*_:a[u++]=tt(k)*h;case 125*_:case 59:case 0:switch(c){case 0:case 125:E=0;case 59+f:h==-1&&(k=L(k,/\f/g,"")),g>0&&tt(k)-d&&Gr(g>32?Cd(k+";",r,n,d-1,l):Cd(L(k," ","")+";",r,n,d-2,l),l);break;case 59:k+=";";default:if(Gr(C=Id(k,t,n,u,f,i,a,p,y=[],x=[],d,o),o),c===123)if(f===0)Co(k,t,C,C,y,o,d,a,x);else switch(m===99&&se(k,3)===110?100:m){case 100:case 108:case 109:case 115:Co(e,C,C,r&&Gr(Id(e,C,C,0,0,i,a,p,i,y=[],d,x),x),i,x,d,a,r?y:x);break;default:Co(k,C,C,C,[""],x,0,a,x)}}u=f=g=0,_=h=1,p=k="",d=s;break;case 58:d=1+tt(k),g=w;default:if(_<1){if(c==123)--_;else if(c==125&&_++==0&&Uy()==125)continue}switch(k+=Fu(c),c*_){case 38:h=f>0?1:(k+="\f",-1);break;case 44:a[u++]=(tt(k)-1)*h,h=1;break;case 64:xn()===45&&(k+=wa(qe())),m=xn(),f=d=tt(p=k+=Gy(Io())),c++;break;case 45:w===45&&tt(k)==2&&(_=0)}}return o}function Id(e,t,n,r,i,o,s,a,l,u,f,d){for(var m=i-1,g=i===0?o:[""],w=Up(g),_=0,E=0,h=0;_<r;++_)for(var c=0,p=yr(e,m+1,m=jp(E=s[_])),y=e;c<w;++c)(y=zp(E>0?g[c]+" "+p:L(p,/&\f/g,g[c])))&&(l[h++]=y);return $s(e,t,n,i===0?Ds:a,l,u,f,d)}function Yy(e,t,n,r){return $s(e,t,n,Mp,Fu(zy()),yr(e,2,-2),0,r)}function Cd(e,t,n,r,i){return $s(e,t,n,Uu,yr(e,0,r),yr(e,r+1,-1),r,i)}function Bp(e,t,n){switch($y(e,t)){case 5103:return z+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return z+e+e;case 4789:return ni+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return z+e+ni+e+G+e+e;case 5936:switch(se(e,t+11)){case 114:return z+e+G+L(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return z+e+G+L(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return z+e+G+L(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return z+e+G+e+e;case 6165:return z+e+G+"flex-"+e+e;case 5187:return z+e+L(e,/(\w+).+(:[^]+)/,z+"box-$1$2"+G+"flex-$1$2")+e;case 5443:return z+e+G+"flex-item-"+L(e,/flex-|-self/g,"")+(ut(e,/flex-|baseline/)?"":G+"grid-row-"+L(e,/flex-|-self/g,""))+e;case 4675:return z+e+G+"flex-line-pack"+L(e,/align-content|flex-|-self/g,"")+e;case 5548:return z+e+G+L(e,"shrink","negative")+e;case 5292:return z+e+G+L(e,"basis","preferred-size")+e;case 6060:return z+"box-"+L(e,"-grow","")+z+e+G+L(e,"grow","positive")+e;case 4554:return z+L(e,/([^-])(transform)/g,"$1"+z+"$2")+e;case 6187:return L(L(L(e,/(zoom-|grab)/,z+"$1"),/(image-set)/,z+"$1"),e,"")+e;case 5495:case 3959:return L(e,/(image-set\([^]*)/,z+"$1$`$1");case 4968:return L(L(e,/(.+:)(flex-)?(.*)/,z+"box-pack:$3"+G+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+z+e+e;case 4200:if(!ut(e,/flex-|baseline/))return G+"grid-column-align"+yr(e,t)+e;break;case 2592:case 3360:return G+L(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,ut(r.props,/grid-\w+-end/)})?~xo(e+(n=n[t].value),"span",0)?e:G+L(e,"-start","")+e+G+"grid-row-span:"+(~xo(n,"span",0)?ut(n,/\d+/):+ut(n,/\d+/)-+ut(e,/\d+/))+";":G+L(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return ut(r.props,/grid-\w+-start/)})?e:G+L(L(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return L(e,/(.+)-inline(.+)/,z+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(tt(e)-1-t>6)switch(se(e,t+1)){case 109:if(se(e,t+4)!==45)break;case 102:return L(e,/(.+:)(.+)-([^]+)/,"$1"+z+"$2-$3$1"+ni+(se(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~xo(e,"stretch",0)?Bp(L(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return L(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,s,a,l,u){return G+i+":"+o+u+(s?G+i+"-span:"+(a?l:+l-+o)+u:"")+e});case 4949:if(se(e,t+6)===121)return L(e,":",":"+z)+e;break;case 6444:switch(se(e,se(e,14)===45?18:11)){case 120:return L(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+z+(se(e,14)===45?"inline-":"")+"box$3$1"+z+"$2$3$1"+G+"$2box$3")+e;case 100:return L(e,":",":"+G)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return L(e,"scroll-","scroll-snap-")+e}return e}function ss(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Qy(e,t,n,r){switch(e.type){case My:if(e.children.length)break;case Dy:case Uu:return e.return=e.return||e.value;case Mp:return"";case $p:return e.return=e.value+"{"+ss(e.children,r)+"}";case Ds:if(!tt(e.value=e.props.join(",")))return""}return tt(n=ss(e.children,r))?e.return=e.value+"{"+n+"}":""}function qy(e){var t=Up(e);return function(n,r,i,o){for(var s="",a=0;a<t;a++)s+=e[a](n,r,i,o)||"";return s}}function Jy(e){return function(t){t.root||(t=t.return)&&e(t)}}function Xy(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Uu:e.return=Bp(e.value,e.length,n);return;case $p:return ss([Ot(e,{value:L(e.value,"@","@"+z)})],r);case Ds:if(e.length)return jy(n=e.props,function(i){switch(ut(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Un(Ot(e,{props:[L(i,/:(read-\w+)/,":"+ni+"$1")]})),Un(Ot(e,{props:[i]})),Tl(e,{props:xd(n,r)});break;case"::placeholder":Un(Ot(e,{props:[L(i,/:(plac\w+)/,":"+z+"input-$1")]})),Un(Ot(e,{props:[L(i,/:(plac\w+)/,":"+ni+"$1")]})),Un(Ot(e,{props:[L(i,/:(plac\w+)/,G+"input-$1")]})),Un(Ot(e,{props:[i]})),Tl(e,{props:xd(n,r)});break}return""})}}var Zy={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Pe={},_r=typeof process<"u"&&Pe!==void 0&&(Pe.REACT_APP_SC_ATTR||Pe.SC_ATTR)||"data-styled",Hp="active",Vp="data-styled-version",zs="6.1.13",Bu=`/*!sc*/
`,as=typeof window<"u"&&"HTMLElement"in window,e1=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Pe!==void 0&&Pe.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Pe.REACT_APP_SC_DISABLE_SPEEDY!==""?Pe.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Pe.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Pe!==void 0&&Pe.SC_DISABLE_SPEEDY!==void 0&&Pe.SC_DISABLE_SPEEDY!==""&&Pe.SC_DISABLE_SPEEDY!=="false"&&Pe.SC_DISABLE_SPEEDY),t1={},Us=Object.freeze([]),Sr=Object.freeze({});function Wp(e,t,n){return n===void 0&&(n=Sr),e.theme!==n.theme&&e.theme||t||n.theme}var Gp=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),n1=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,r1=/(^-|-$)/g;function Td(e){return e.replace(n1,"-").replace(r1,"")}var i1=/(a)(d)/gi,ao=52,Pd=function(e){return String.fromCharCode(e+(e>25?39:97))};function Nl(e){var t,n="";for(t=Math.abs(e);t>ao;t=t/ao|0)n=Pd(t%ao)+n;return(Pd(t%ao)+n).replace(i1,"$1-$2")}var _a,Kp=5381,Zn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Yp=function(e){return Zn(Kp,e)};function Hu(e){return Nl(Yp(e)>>>0)}function o1(e){return e.displayName||e.name||"Component"}function Sa(e){return typeof e=="string"&&!0}var Qp=typeof Symbol=="function"&&Symbol.for,qp=Qp?Symbol.for("react.memo"):60115,s1=Qp?Symbol.for("react.forward_ref"):60112,a1={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},l1={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Jp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},u1=((_a={})[s1]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},_a[qp]=Jp,_a);function Rd(e){return("type"in(t=e)&&t.type.$$typeof)===qp?Jp:"$$typeof"in e?u1[e.$$typeof]:a1;var t}var c1=Object.defineProperty,d1=Object.getOwnPropertyNames,Nd=Object.getOwnPropertySymbols,f1=Object.getOwnPropertyDescriptor,h1=Object.getPrototypeOf,Od=Object.prototype;function Xp(e,t,n){if(typeof t!="string"){if(Od){var r=h1(t);r&&r!==Od&&Xp(e,r,n)}var i=d1(t);Nd&&(i=i.concat(Nd(t)));for(var o=Rd(e),s=Rd(t),a=0;a<i.length;++a){var l=i[a];if(!(l in l1||n&&n[l]||s&&l in s||o&&l in o)){var u=f1(t,l);try{c1(e,l,u)}catch{}}}}return e}function On(e){return typeof e=="function"}function Vu(e){return typeof e=="object"&&"styledComponentId"in e}function _n(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function ls(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function Ei(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Ol(e,t,n){if(n===void 0&&(n=!1),!n&&!Ei(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Ol(e[r],t[r]);else if(Ei(t))for(var r in t)e[r]=Ol(e[r],t[r]);return e}function Wu(e,t){Object.defineProperty(e,"toString",{value:t})}function An(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var p1=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw An(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(t+1),l=(s=0,n.length);s<l;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,s=i;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(Bu);return n},e}(),To=new Map,us=new Map,Po=1,lo=function(e){if(To.has(e))return To.get(e);for(;us.has(Po);)Po++;var t=Po++;return To.set(e,t),us.set(t,e),t},m1=function(e,t){Po=t+1,To.set(e,t),us.set(t,e)},g1="style[".concat(_r,"][").concat(Vp,'="').concat(zs,'"]'),v1=new RegExp("^".concat(_r,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),y1=function(e,t,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&e.registerName(t,r)},w1=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Bu),i=[],o=0,s=r.length;o<s;o++){var a=r[o].trim();if(a){var l=a.match(v1);if(l){var u=0|parseInt(l[1],10),f=l[2];u!==0&&(m1(f,u),y1(e,f,l[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}},Ad=function(e){for(var t=document.querySelectorAll(g1),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(_r)!==Hp&&(w1(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function _1(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Zp=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(_r,"]")));return l[l.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(_r,Hp),r.setAttribute(Vp,zs);var s=_1();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},S1=function(){function e(t){this.element=Zp(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var s=r[i];if(s.ownerNode===n)return s}throw An(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),k1=function(){function e(t){this.element=Zp(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),E1=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),bd=as,x1={isServer:!as,useCSSOMInjection:!e1},cs=function(){function e(t,n,r){t===void 0&&(t=Sr),n===void 0&&(n={});var i=this;this.options=ae(ae({},x1),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&as&&bd&&(bd=!1,Ad(this)),Wu(this,function(){return function(o){for(var s=o.getTag(),a=s.length,l="",u=function(d){var m=function(h){return us.get(h)}(d);if(m===void 0)return"continue";var g=o.names.get(m),w=s.getGroup(d);if(g===void 0||!g.size||w.length===0)return"continue";var _="".concat(_r,".g").concat(d,'[id="').concat(m,'"]'),E="";g!==void 0&&g.forEach(function(h){h.length>0&&(E+="".concat(h,","))}),l+="".concat(w).concat(_,'{content:"').concat(E,'"}').concat(Bu)},f=0;f<a;f++)u(f);return l}(i)})}return e.registerId=function(t){return lo(t)},e.prototype.rehydrate=function(){!this.server&&as&&Ad(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(ae(ae({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new E1(i):r?new S1(i):new k1(i)}(this.options),new p1(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(lo(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(lo(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(lo(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),I1=/&/g,C1=/^\s*\/\/.*$/gm;function em(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=em(n.children,t)),n})}function T1(e){var t,n,r,i=Sr,o=i.options,s=o===void 0?Sr:o,a=i.plugins,l=a===void 0?Us:a,u=function(m,g,w){return w.startsWith(n)&&w.endsWith(n)&&w.replaceAll(n,"").length>0?".".concat(t):m},f=l.slice();f.push(function(m){m.type===Ds&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(I1,n).replace(r,u))}),s.prefix&&f.push(Xy),f.push(Qy);var d=function(m,g,w,_){g===void 0&&(g=""),w===void 0&&(w=""),_===void 0&&(_="&"),t=_,n=g,r=new RegExp("\\".concat(n,"\\b"),"g");var E=m.replace(C1,""),h=Ky(w||g?"".concat(w," ").concat(g," { ").concat(E," }"):E);s.namespace&&(h=em(h,s.namespace));var c=[];return ss(h,qy(f.concat(Jy(function(p){return c.push(p)})))),c};return d.hash=l.length?l.reduce(function(m,g){return g.name||An(15),Zn(m,g.name)},Kp).toString():"",d}var P1=new cs,Al=T1(),tm=$e.createContext({shouldForwardProp:void 0,styleSheet:P1,stylis:Al});tm.Consumer;$e.createContext(void 0);function bl(){return S.useContext(tm)}var nm=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Al);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Wu(this,function(){throw An(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Al),this.name+t.hash},e}(),R1=function(e){return e>="A"&&e<="Z"};function Ld(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;R1(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var rm=function(e){return e==null||e===!1||e===""},im=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!rm(o)&&(Array.isArray(o)&&o.isCss||On(o)?r.push("".concat(Ld(i),":"),o,";"):Ei(o)?r.push.apply(r,vr(vr(["".concat(i," {")],im(o),!1),["}"],!1)):r.push("".concat(Ld(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Zy||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Jt(e,t,n,r){if(rm(e))return[];if(Vu(e))return[".".concat(e.styledComponentId)];if(On(e)){if(!On(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return Jt(i,t,n,r)}var o;return e instanceof nm?n?(e.inject(n,r),[e.getName(r)]):[e]:Ei(e)?im(e):Array.isArray(e)?Array.prototype.concat.apply(Us,e.map(function(s){return Jt(s,t,n,r)})):[e.toString()]}function om(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(On(n)&&!Vu(n))return!1}return!0}var N1=Yp(zs),O1=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&om(t),this.componentId=n,this.baseHash=Zn(N1,n),this.baseStyle=r,cs.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=_n(i,this.staticRulesId);else{var o=ls(Jt(this.rules,t,n,r)),s=Nl(Zn(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=r(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}i=_n(i,s),this.staticRulesId=s}else{for(var l=Zn(this.baseHash,r.hash),u="",f=0;f<this.rules.length;f++){var d=this.rules[f];if(typeof d=="string")u+=d;else if(d){var m=ls(Jt(d,t,n,r));l=Zn(l,m+f),u+=m}}if(u){var g=Nl(l>>>0);n.hasNameForId(this.componentId,g)||n.insertRules(this.componentId,g,r(u,".".concat(g),void 0,this.componentId)),i=_n(i,g)}}return i},e}(),xi=$e.createContext(void 0);xi.Consumer;function A1(e){var t=$e.useContext(xi),n=S.useMemo(function(){return function(r,i){if(!r)throw An(14);if(On(r)){var o=r(i);return o}if(Array.isArray(r)||typeof r!="object")throw An(8);return i?ae(ae({},i),r):r}(e.theme,t)},[e.theme,t]);return e.children?$e.createElement(xi.Provider,{value:n},e.children):null}var ka={};function b1(e,t,n){var r=Vu(e),i=e,o=!Sa(e),s=t.attrs,a=s===void 0?Us:s,l=t.componentId,u=l===void 0?function(y,x){var C=typeof y!="string"?"sc":Td(y);ka[C]=(ka[C]||0)+1;var k="".concat(C,"-").concat(Hu(zs+C+ka[C]));return x?"".concat(x,"-").concat(k):k}(t.displayName,t.parentComponentId):l,f=t.displayName,d=f===void 0?function(y){return Sa(y)?"styled.".concat(y):"Styled(".concat(o1(y),")")}(e):f,m=t.displayName&&t.componentId?"".concat(Td(t.displayName),"-").concat(t.componentId):t.componentId||u,g=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,w=t.shouldForwardProp;if(r&&i.shouldForwardProp){var _=i.shouldForwardProp;if(t.shouldForwardProp){var E=t.shouldForwardProp;w=function(y,x){return _(y,x)&&E(y,x)}}else w=_}var h=new O1(n,m,r?i.componentStyle:void 0);function c(y,x){return function(C,k,N){var j=C.attrs,D=C.componentStyle,Ce=C.defaultProps,ln=C.foldedComponentIds,un=C.styledComponentId,Fi=C.target,Vs=$e.useContext(xi),Ar=bl(),cn=C.shouldForwardProp||Ar.shouldForwardProp,P=Wp(k,Vs,Ce)||Sr,O=function(Ct,Te,at){for(var br,fn=ae(ae({},Te),{className:void 0,theme:at}),Ws=0;Ws<Ct.length;Ws+=1){var Bi=On(br=Ct[Ws])?br(fn):br;for(var Tt in Bi)fn[Tt]=Tt==="className"?_n(fn[Tt],Bi[Tt]):Tt==="style"?ae(ae({},fn[Tt]),Bi[Tt]):Bi[Tt]}return Te.className&&(fn.className=_n(fn.className,Te.className)),fn}(j,k,P),b=O.as||Fi,F={};for(var B in O)O[B]===void 0||B[0]==="$"||B==="as"||B==="theme"&&O.theme===P||(B==="forwardedAs"?F.as=O.forwardedAs:cn&&!cn(B,b)||(F[B]=O[B]));var dn=function(Ct,Te){var at=bl(),br=Ct.generateAndInjectStyles(Te,at.styleSheet,at.stylis);return br}(D,O),He=_n(ln,un);return dn&&(He+=" "+dn),O.className&&(He+=" "+O.className),F[Sa(b)&&!Gp.has(b)?"class":"className"]=He,F.ref=N,S.createElement(b,F)}(p,y,x)}c.displayName=d;var p=$e.forwardRef(c);return p.attrs=g,p.componentStyle=h,p.displayName=d,p.shouldForwardProp=w,p.foldedComponentIds=r?_n(i.foldedComponentIds,i.styledComponentId):"",p.styledComponentId=m,p.target=r?i.target:e,Object.defineProperty(p,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(y){this._foldedDefaultProps=r?function(x){for(var C=[],k=1;k<arguments.length;k++)C[k-1]=arguments[k];for(var N=0,j=C;N<j.length;N++)Ol(x,j[N],!0);return x}({},i.defaultProps,y):y}}),Wu(p,function(){return".".concat(p.styledComponentId)}),o&&Xp(p,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),p}function Dd(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Md=function(e){return Object.assign(e,{isCss:!0})};function Ii(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(On(e)||Ei(e))return Md(Jt(Dd(Us,vr([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?Jt(r):Md(Jt(Dd(r,t)))}function Ll(e,t,n){if(n===void 0&&(n=Sr),!t)throw An(1,t);var r=function(i){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return e(t,n,Ii.apply(void 0,vr([i],o,!1)))};return r.attrs=function(i){return Ll(e,t,ae(ae({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Ll(e,t,ae(ae({},n),i))},r}var sm=function(e){return Ll(b1,e)},T=sm;Gp.forEach(function(e){T[e]=sm(e)});var L1=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=om(t),cs.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(ls(Jt(this.rules,n,r,i)),""),s=this.componentId+t;r.insertRules(s,s,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&cs.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function D1(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Ii.apply(void 0,vr([e],t,!1)),i="sc-global-".concat(Hu(JSON.stringify(r))),o=new L1(r,i),s=function(l){var u=bl(),f=$e.useContext(xi),d=$e.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&a(d,l,u.styleSheet,f,u.stylis),$e.useLayoutEffect(function(){if(!u.styleSheet.server)return a(d,l,u.styleSheet,f,u.stylis),function(){return o.removeStyles(d,u.styleSheet)}},[d,l,u.styleSheet,f,u.stylis]),null};function a(l,u,f,d,m){if(o.isStatic)o.renderStyles(l,t1,f,m);else{var g=ae(ae({},u),{theme:Wp(u,d,s.defaultProps)});o.renderStyles(l,g,f,m)}}return $e.memo(s)}function am(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=ls(Ii.apply(void 0,vr([e],t,!1))),i=Hu(r);return new nm(i,r)}const M1=D1`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', system-ui, sans-serif;
  }

  html, body {
    overflow-x: hidden; // Prevent horizontal scroll
    position: relative; // Added position
    width: 100%;      // Ensure full width
    margin: 0;        // Reset margin
  }

  body {
    background-color: #07071f;
    color: #fff;
    min-height: 100vh;
  }
`,$1={colors:{background:"#0a0a1f",primary:"#00ffff",secondary:"#ff00ff",text:"#ffffff",textSecondary:"#888888"},gradients:{primary:"linear-gradient(45deg, #00ffff, #ff00ff)"}};var $d={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lm=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},j1=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return t.join("")},um={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],s=i+1<e.length,a=s?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,f=o>>2,d=(o&3)<<4|a>>4;let m=(a&15)<<2|u>>6,g=u&63;l||(g=64,s||(m=64)),r.push(n[f],n[d],n[m],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(lm(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):j1(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const d=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||a==null||u==null||d==null)throw new z1;const m=o<<2|a>>4;if(r.push(m),u!==64){const g=a<<4&240|u>>2;if(r.push(g),d!==64){const w=u<<6&192|d;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class z1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const U1=function(e){const t=lm(e);return um.encodeByteArray(t,!0)},cm=function(e){return U1(e).replace(/\./g,"")},dm=function(e){try{return um.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B1=()=>F1().__FIREBASE_DEFAULTS__,H1=()=>{if(typeof process>"u"||typeof $d>"u")return;const e=$d.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},V1=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&dm(e[1]);return t&&JSON.parse(t)},Gu=()=>{try{return B1()||H1()||V1()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},W1=e=>{var t,n;return(n=(t=Gu())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},fm=()=>{var e;return(e=Gu())===null||e===void 0?void 0:e.config},hm=e=>{var t;return(t=Gu())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G1{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function K1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ye())}function Y1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Q1(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function q1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function J1(){const e=ye();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function X1(){try{return typeof indexedDB=="object"}catch{return!1}}function Z1(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ew="FirebaseError";class an extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=ew,Object.setPrototypeOf(this,an.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Di.prototype.create)}}class Di{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],s=o?tw(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new an(i,a,r)}}function tw(e,t){return e.replace(nw,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const nw=/\{\$([^}]+)}/g;function rw(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function ds(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],s=t[i];if(jd(o)&&jd(s)){if(!ds(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function jd(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mi(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function iw(e,t){const n=new ow(e,t);return n.subscribe.bind(n)}class ow{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");sw(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Ea),i.error===void 0&&(i.error=Ea),i.complete===void 0&&(i.complete=Ea);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function sw(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Ea(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nr(e){return e&&e._delegate?e._delegate:e}class kr{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aw{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new G1;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(uw(t))try{this.getOrInitializeService({instanceIdentifier:gn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=gn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=gn){return this.instances.has(t)}getOptions(t=gn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&t(s,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:lw(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=gn){return this.component?this.component.multipleInstances?t:gn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function lw(e){return e===gn?void 0:e}function uw(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new aw(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var H;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(H||(H={}));const dw={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},fw=H.INFO,hw={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},pw=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=hw[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class pm{constructor(t){this.name=t,this._logLevel=fw,this._logHandler=pw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in H))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?dw[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...t),this._logHandler(this,H.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...t),this._logHandler(this,H.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,H.INFO,...t),this._logHandler(this,H.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,H.WARN,...t),this._logHandler(this,H.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...t),this._logHandler(this,H.ERROR,...t)}}const mw=(e,t)=>t.some(n=>e instanceof n);let zd,Ud;function gw(){return zd||(zd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vw(){return Ud||(Ud=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const mm=new WeakMap,Dl=new WeakMap,gm=new WeakMap,xa=new WeakMap,Ku=new WeakMap;function yw(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",s)},o=()=>{n(Xt(e.result)),i()},s=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&mm.set(n,e)}).catch(()=>{}),Ku.set(t,e),t}function ww(e){if(Dl.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",s),e.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",s),e.addEventListener("abort",s)});Dl.set(e,t)}let Ml={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Dl.get(e);if(t==="objectStoreNames")return e.objectStoreNames||gm.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Xt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function _w(e){Ml=e(Ml)}function Sw(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Ia(this),t,...n);return gm.set(r,t.sort?t.sort():[t]),Xt(r)}:vw().includes(e)?function(...t){return e.apply(Ia(this),t),Xt(mm.get(this))}:function(...t){return Xt(e.apply(Ia(this),t))}}function kw(e){return typeof e=="function"?Sw(e):(e instanceof IDBTransaction&&ww(e),mw(e,gw())?new Proxy(e,Ml):e)}function Xt(e){if(e instanceof IDBRequest)return yw(e);if(xa.has(e))return xa.get(e);const t=kw(e);return t!==e&&(xa.set(e,t),Ku.set(t,e)),t}const Ia=e=>Ku.get(e);function Ew(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=Xt(s);return r&&s.addEventListener("upgradeneeded",l=>{r(Xt(s.result),l.oldVersion,l.newVersion,Xt(s.transaction),l)}),n&&s.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const xw=["get","getKey","getAll","getAllKeys","count"],Iw=["put","add","delete","clear"],Ca=new Map;function Fd(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Ca.get(t))return Ca.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Iw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||xw.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Ca.set(t,o),o}_w(e=>({...e,get:(t,n,r)=>Fd(t,n)||e.get(t,n,r),has:(t,n)=>!!Fd(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cw{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Tw(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Tw(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const $l="@firebase/app",Bd="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Et=new pm("@firebase/app"),Pw="@firebase/app-compat",Rw="@firebase/analytics-compat",Nw="@firebase/analytics",Ow="@firebase/app-check-compat",Aw="@firebase/app-check",bw="@firebase/auth",Lw="@firebase/auth-compat",Dw="@firebase/database",Mw="@firebase/data-connect",$w="@firebase/database-compat",jw="@firebase/functions",zw="@firebase/functions-compat",Uw="@firebase/installations",Fw="@firebase/installations-compat",Bw="@firebase/messaging",Hw="@firebase/messaging-compat",Vw="@firebase/performance",Ww="@firebase/performance-compat",Gw="@firebase/remote-config",Kw="@firebase/remote-config-compat",Yw="@firebase/storage",Qw="@firebase/storage-compat",qw="@firebase/firestore",Jw="@firebase/vertexai-preview",Xw="@firebase/firestore-compat",Zw="firebase",e_="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jl="[DEFAULT]",t_={[$l]:"fire-core",[Pw]:"fire-core-compat",[Nw]:"fire-analytics",[Rw]:"fire-analytics-compat",[Aw]:"fire-app-check",[Ow]:"fire-app-check-compat",[bw]:"fire-auth",[Lw]:"fire-auth-compat",[Dw]:"fire-rtdb",[Mw]:"fire-data-connect",[$w]:"fire-rtdb-compat",[jw]:"fire-fn",[zw]:"fire-fn-compat",[Uw]:"fire-iid",[Fw]:"fire-iid-compat",[Bw]:"fire-fcm",[Hw]:"fire-fcm-compat",[Vw]:"fire-perf",[Ww]:"fire-perf-compat",[Gw]:"fire-rc",[Kw]:"fire-rc-compat",[Yw]:"fire-gcs",[Qw]:"fire-gcs-compat",[qw]:"fire-fst",[Xw]:"fire-fst-compat",[Jw]:"fire-vertex","fire-js":"fire-js",[Zw]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fs=new Map,n_=new Map,zl=new Map;function Hd(e,t){try{e.container.addComponent(t)}catch(n){Et.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ci(e){const t=e.name;if(zl.has(t))return Et.debug(`There were multiple attempts to register component ${t}.`),!1;zl.set(t,e);for(const n of fs.values())Hd(n,e);for(const n of n_.values())Hd(n,e);return!0}function vm(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function pt(e){return e.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Zt=new Di("app","Firebase",r_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new kr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Zt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $i=e_;function ym(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:jl,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Zt.create("bad-app-name",{appName:String(i)});if(n||(n=fm()),!n)throw Zt.create("no-options");const o=fs.get(i);if(o){if(ds(n,o.options)&&ds(r,o.config))return o;throw Zt.create("duplicate-app",{appName:i})}const s=new cw(i);for(const l of zl.values())s.addComponent(l);const a=new i_(n,r,s);return fs.set(i,a),a}function o_(e=jl){const t=fs.get(e);if(!t&&e===jl&&fm())return ym();if(!t)throw Zt.create("no-app",{appName:e});return t}function sr(e,t,n){var r;let i=(r=t_[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${t}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Et.warn(a.join(" "));return}Ci(new kr(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s_="firebase-heartbeat-database",a_=1,Ti="firebase-heartbeat-store";let Ta=null;function wm(){return Ta||(Ta=Ew(s_,a_,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Ti)}catch(n){console.warn(n)}}}}).catch(e=>{throw Zt.create("idb-open",{originalErrorMessage:e.message})})),Ta}async function l_(e){try{const n=(await wm()).transaction(Ti),r=await n.objectStore(Ti).get(_m(e));return await n.done,r}catch(t){if(t instanceof an)Et.warn(t.message);else{const n=Zt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Et.warn(n.message)}}}async function Vd(e,t){try{const r=(await wm()).transaction(Ti,"readwrite");await r.objectStore(Ti).put(t,_m(e)),await r.done}catch(n){if(n instanceof an)Et.warn(n.message);else{const r=Zt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Et.warn(r.message)}}}function _m(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u_=1024,c_=30*24*60*60*1e3;class d_{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new h_(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Wd();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(s=>s.date===o)?void 0:(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const a=new Date(s.date).valueOf();return Date.now()-a<=c_}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Et.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Wd(),{heartbeatsToSend:r,unsentEntries:i}=f_(this._heartbeatsCache.heartbeats),o=cm(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return Et.warn(n),""}}}function Wd(){return new Date().toISOString().substring(0,10)}function f_(e,t=u_){const n=[];let r=e.slice();for(const i of e){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),Gd(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Gd(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class h_{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return X1()?Z1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await l_(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Vd(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Vd(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Gd(e){return cm(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p_(e){Ci(new kr("platform-logger",t=>new Cw(t),"PRIVATE")),Ci(new kr("heartbeat",t=>new d_(t),"PRIVATE")),sr($l,Bd,e),sr($l,Bd,"esm2017"),sr("fire-js","")}p_("");var m_="firebase",g_="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */sr(m_,g_,"app");function Sm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const v_=Sm,km=new Di("auth","Firebase",Sm());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hs=new pm("@firebase/auth");function y_(e,...t){hs.logLevel<=H.WARN&&hs.warn(`Auth (${$i}): ${e}`,...t)}function Ro(e,...t){hs.logLevel<=H.ERROR&&hs.error(`Auth (${$i}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(e,...t){throw Qu(e,...t)}function Je(e,...t){return Qu(e,...t)}function Yu(e,t,n){const r=Object.assign(Object.assign({},v_()),{[t]:n});return new Di("auth","Firebase",r).create(t,{appName:e.name})}function In(e){return Yu(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function w_(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&st(e,"argument-error"),Yu(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Qu(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return km.create(e,...t)}function A(e,t,...n){if(!e)throw Qu(t,...n)}function mt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Ro(t),new Error(t)}function xt(e,t){e||mt(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ul(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function __(){return Kd()==="http:"||Kd()==="https:"}function Kd(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(__()||Q1()||"connection"in navigator)?navigator.onLine:!0}function k_(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(t,n){this.shortDelay=t,this.longDelay=n,xt(n>t,"Short delay should be less than long delay!"),this.isMobile=K1()||q1()}get(){return S_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qu(e,t){xt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;mt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;mt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;mt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x_=new ji(3e4,6e4);function Ju(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Or(e,t,n,r,i={}){return xm(e,i,async()=>{let o={},s={};r&&(t==="GET"?s=r:o={body:JSON.stringify(r)});const a=Mi(Object.assign({key:e.config.apiKey},s)).slice(1),l=await e._getAdditionalHeaders();l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode);const u=Object.assign({method:t,headers:l},o);return Y1()||(u.referrerPolicy="no-referrer"),Em.fetch()(Im(e,e.config.apiHost,n,a),u)})}async function xm(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},E_),t);try{const i=new C_(e),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw uo(e,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw uo(e,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw uo(e,"email-already-in-use",s);if(l==="USER_DISABLED")throw uo(e,"user-disabled",s);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Yu(e,f,u);st(e,f)}}catch(i){if(i instanceof an)throw i;st(e,"network-request-failed",{message:String(i)})}}async function I_(e,t,n,r,i={}){const o=await Or(e,t,n,r,i);return"mfaPendingCredential"in o&&st(e,"multi-factor-auth-required",{_serverResponse:o}),o}function Im(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?qu(e.config,i):`${e.config.apiScheme}://${i}`}class C_{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Je(this.auth,"network-request-failed")),x_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function uo(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Je(e,t,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T_(e,t){return Or(e,"POST","/v1/accounts:delete",t)}async function Cm(e,t){return Or(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function P_(e,t=!1){const n=Nr(e),r=await n.getIdToken(t),i=Xu(r);A(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:ri(Pa(i.auth_time)),issuedAtTime:ri(Pa(i.iat)),expirationTime:ri(Pa(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Pa(e){return Number(e)*1e3}function Xu(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Ro("JWT malformed, contained fewer than 3 sections"),null;try{const i=dm(n);return i?JSON.parse(i):(Ro("Failed to decode base64 JWT payload"),null)}catch(i){return Ro("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Yd(e){const t=Xu(e);return A(t,"internal-error"),A(typeof t.exp<"u","internal-error"),A(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pi(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof an&&R_(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function R_({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ri(this.lastLoginAt),this.creationTime=ri(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ps(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Pi(e,Cm(n,{idToken:r}));A(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?Tm(o.providerUserInfo):[],a=A_(e.providerData,s),l=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(a!=null&&a.length),f=l?u:!1,d={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Fl(o.createdAt,o.lastLoginAt),isAnonymous:f};Object.assign(e,d)}async function O_(e){const t=Nr(e);await ps(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function A_(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function Tm(e){return e.map(t=>{var{providerId:n}=t,r=zu(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function b_(e,t){const n=await xm(e,{},async()=>{const r=Mi({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=Im(e,i,"/v1/token",`key=${o}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Em.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function L_(e,t){return Or(e,"POST","/v2/accounts:revokeToken",Ju(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){A(t.idToken,"internal-error"),A(typeof t.idToken<"u","internal-error"),A(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Yd(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){A(t.length!==0,"internal-error");const n=Yd(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(A(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await b_(t,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new ar;return r&&(A(typeof r=="string","internal-error",{appName:t}),s.refreshToken=r),i&&(A(typeof i=="string","internal-error",{appName:t}),s.accessToken=i),o&&(A(typeof o=="number","internal-error",{appName:t}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new ar,this.toJSON())}_performRefresh(){return mt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(e,t){A(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class gt{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,o=zu(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new N_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Fl(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await Pi(this,this.stsTokenManager.getToken(this.auth,t));return A(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return P_(this,t)}reload(){return O_(this)}_assign(t){this!==t&&(A(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new gt(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){A(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await ps(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(pt(this.auth.app))return Promise.reject(In(this.auth));const t=await this.getIdToken();return await Pi(this,T_(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,o,s,a,l,u,f;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,g=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,w=(s=n.photoURL)!==null&&s!==void 0?s:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,h=(u=n.createdAt)!==null&&u!==void 0?u:void 0,c=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:p,emailVerified:y,isAnonymous:x,providerData:C,stsTokenManager:k}=n;A(p&&k,t,"internal-error");const N=ar.fromJSON(this.name,k);A(typeof p=="string",t,"internal-error"),Rt(d,t.name),Rt(m,t.name),A(typeof y=="boolean",t,"internal-error"),A(typeof x=="boolean",t,"internal-error"),Rt(g,t.name),Rt(w,t.name),Rt(_,t.name),Rt(E,t.name),Rt(h,t.name),Rt(c,t.name);const j=new gt({uid:p,auth:t,email:m,emailVerified:y,displayName:d,isAnonymous:x,photoURL:w,phoneNumber:g,tenantId:_,stsTokenManager:N,createdAt:h,lastLoginAt:c});return C&&Array.isArray(C)&&(j.providerData=C.map(D=>Object.assign({},D))),E&&(j._redirectEventId=E),j}static async _fromIdTokenResponse(t,n,r=!1){const i=new ar;i.updateFromServerResponse(n);const o=new gt({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await ps(o),o}static async _fromGetAccountInfoResponse(t,n,r){const i=n.users[0];A(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?Tm(i.providerUserInfo):[],s=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),a=new ar;a.updateFromIdToken(r);const l=new gt({uid:i.localId,auth:t,stsTokenManager:a,isAnonymous:s}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Fl(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qd=new Map;function vt(e){xt(e instanceof Function,"Expected a class definition");let t=Qd.get(e);return t?(xt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Qd.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Pm.type="NONE";const qd=Pm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function No(e,t,n){return`firebase:${e}:${t}:${n}`}class lr{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=No(this.userKey,i.apiKey,o),this.fullPersistenceKey=No("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?gt._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new lr(vt(qd),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||vt(qd);const s=No(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const f=await u._get(s);if(f){const d=gt._fromJSON(t,f);u!==o&&(a=d),o=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new lr(o,t,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new lr(o,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jd(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Am(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Rm(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Lm(t))return"Blackberry";if(Dm(t))return"Webos";if(Nm(t))return"Safari";if((t.includes("chrome/")||Om(t))&&!t.includes("edge/"))return"Chrome";if(bm(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Rm(e=ye()){return/firefox\//i.test(e)}function Nm(e=ye()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Om(e=ye()){return/crios\//i.test(e)}function Am(e=ye()){return/iemobile/i.test(e)}function bm(e=ye()){return/android/i.test(e)}function Lm(e=ye()){return/blackberry/i.test(e)}function Dm(e=ye()){return/webos/i.test(e)}function Zu(e=ye()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function D_(e=ye()){var t;return Zu(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function M_(){return J1()&&document.documentMode===10}function Mm(e=ye()){return Zu(e)||bm(e)||Dm(e)||Lm(e)||/windows phone/i.test(e)||Am(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $m(e,t=[]){let n;switch(e){case"Browser":n=Jd(ye());break;case"Worker":n=`${Jd(ye())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${$i}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=o=>new Promise((s,a)=>{try{const l=t(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j_(e,t={}){return Or(e,"GET","/v2/passwordPolicy",Ju(e,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z_=6;class U_{constructor(t){var n,r,i,o;const s=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=s.minPasswordLength)!==null&&n!==void 0?n:z_,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=t.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,o,s,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsUppercaseLetter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(s=l.containsNumericCharacter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Xd(this),this.idTokenSubscription=new Xd(this),this.beforeStateQueue=new $_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=km,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=vt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await lr.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await Cm(this,{idToken:t}),r=await gt._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(pt(this.app)){const s=this.app.settings.authIdToken;return s?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(s).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!s||s===a)&&(l!=null&&l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return A(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await ps(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=k_()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(pt(this.app))return Promise.reject(In(this));const n=t?Nr(t):null;return n&&A(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&A(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return pt(this.app)?Promise.reject(In(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return pt(this.app)?Promise.reject(In(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(vt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await j_(this),n=new U_(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Di("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await L_(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&vt(t)||this._popupRedirectResolver;A(n,this,"argument-error"),this.redirectPersistenceManager=await lr.create(this,[vt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let s=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(A(a,this,"internal-error"),a.then(()=>{s||o(this.currentUser)}),typeof n=="function"){const l=t.addObserver(n,r,i);return()=>{s=!0,l()}}else{const l=t.addObserver(n);return()=>{s=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return A(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=$m(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&y_(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Fs(e){return Nr(e)}class Xd{constructor(t){this.auth=t,this.observer=null,this.addObserver=iw(n=>this.observer=n)}get next(){return A(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ec={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function B_(e){ec=e}function H_(e){return ec.loadJS(e)}function V_(){return ec.gapiScript}function W_(e){return`__${e}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G_(e,t){const n=vm(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(ds(o,t??{}))return i;st(i,"already-initialized")}return n.initialize({options:t})}function K_(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(vt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function Y_(e,t,n){const r=Fs(e);A(r._canInitEmulator,r,"emulator-config-failed"),A(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!1,o=jm(t),{host:s,port:a}=Q_(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),q_()}function jm(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Q_(e){const t=jm(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:Zd(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:Zd(s)}}}function Zd(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function q_(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return mt("not implemented")}_getIdTokenResponse(t){return mt("not implemented")}_linkToIdToken(t,n){return mt("not implemented")}_getReauthenticationResolver(t){return mt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ur(e,t){return I_(e,"POST","/v1/accounts:signInWithIdp",Ju(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J_="http://localhost";class bn extends zm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new bn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):st("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,o=zu(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new bn(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(t){const n=this.buildRequest();return ur(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,ur(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,ur(t,n)}buildRequest(){const t={requestUri:J_,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Mi(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi extends tc{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt extends zi{constructor(){super("facebook.com")}static credential(t){return bn._fromParams({providerId:Mt.PROVIDER_ID,signInMethod:Mt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Mt.credentialFromTaggedObject(t)}static credentialFromError(t){return Mt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Mt.credential(t.oauthAccessToken)}catch{return null}}}Mt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Mt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt extends zi{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return bn._fromParams({providerId:dt.PROVIDER_ID,signInMethod:dt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return dt.credentialFromTaggedObject(t)}static credentialFromError(t){return dt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return dt.credential(n,r)}catch{return null}}}dt.GOOGLE_SIGN_IN_METHOD="google.com";dt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t extends zi{constructor(){super("github.com")}static credential(t){return bn._fromParams({providerId:$t.PROVIDER_ID,signInMethod:$t.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return $t.credentialFromTaggedObject(t)}static credentialFromError(t){return $t.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return $t.credential(t.oauthAccessToken)}catch{return null}}}$t.GITHUB_SIGN_IN_METHOD="github.com";$t.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt extends zi{constructor(){super("twitter.com")}static credential(t,n){return bn._fromParams({providerId:jt.PROVIDER_ID,signInMethod:jt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return jt.credentialFromTaggedObject(t)}static credentialFromError(t){return jt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return jt.credential(n,r)}catch{return null}}}jt.TWITTER_SIGN_IN_METHOD="twitter.com";jt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const o=await gt._fromIdTokenResponse(t,r,i),s=ef(r);return new Er({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=ef(r);return new Er({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function ef(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms extends an{constructor(t,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ms.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new ms(t,n,r,i)}}function Um(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?ms._fromErrorAndOperation(e,o,t,r):o})}async function X_(e,t,n=!1){const r=await Pi(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Er._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z_(e,t,n=!1){const{auth:r}=e;if(pt(r.app))return Promise.reject(In(r));const i="reauthenticate";try{const o=await Pi(e,Um(r,i,t,e),n);A(o.idToken,r,"internal-error");const s=Xu(o.idToken);A(s,r,"internal-error");const{sub:a}=s;return A(e.uid===a,r,"user-mismatch"),Er._forOperation(e,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&st(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eS(e,t,n=!1){if(pt(e.app))return Promise.reject(In(e));const r="signIn",i=await Um(e,r,t),o=await Er._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}function tS(e,t,n,r){return Nr(e).onIdTokenChanged(t,n,r)}function nS(e,t,n){return Nr(e).beforeAuthStateChanged(t,n)}const gs="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(gs,"1"),this.storage.removeItem(gs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rS=1e3,iS=10;class Bm extends Fm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Mm(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=t.key;n?this.detachListener():this.stopPolling();const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);M_()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,iS):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},rS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Bm.type="LOCAL";const oS=Bm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm extends Fm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Hm.type="SESSION";const Vm=Hm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sS(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Bs(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async u=>u(n.origin,o)),l=await sS(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Bs.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nc(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aS{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const u=nc("",20);i.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(d){const m=d;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(f),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(m.data.response);break;default:clearTimeout(f),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(){return window}function lS(e){ot().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wm(){return typeof ot().WorkerGlobalScope<"u"&&typeof ot().importScripts=="function"}async function uS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function cS(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function dS(){return Wm()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gm="firebaseLocalStorageDb",fS=1,vs="firebaseLocalStorage",Km="fbase_key";class Ui{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Hs(e,t){return e.transaction([vs],t?"readwrite":"readonly").objectStore(vs)}function hS(){const e=indexedDB.deleteDatabase(Gm);return new Ui(e).toPromise()}function Bl(){const e=indexedDB.open(Gm,fS);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(vs,{keyPath:Km})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(vs)?t(r):(r.close(),await hS(),t(await Bl()))})})}async function tf(e,t,n){const r=Hs(e,!0).put({[Km]:t,value:n});return new Ui(r).toPromise()}async function pS(e,t){const n=Hs(e,!1).get(t),r=await new Ui(n).toPromise();return r===void 0?null:r.value}function nf(e,t){const n=Hs(e,!0).delete(t);return new Ui(n).toPromise()}const mS=800,gS=3;class Ym{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Bl(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>gS)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Wm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Bs._getInstance(dS()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await uS(),!this.activeServiceWorker)return;this.sender=new aS(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||cS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Bl();return await tf(t,gs,"1"),await nf(t,gs),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>tf(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>pS(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>nf(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=Hs(i,!1).getAll();return new Ui(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:o}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),mS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ym.type="LOCAL";const vS=Ym;new ji(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qm(e,t){return t?vt(t):(A(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc extends zm{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return ur(t,this._buildIdpRequest())}_linkToIdToken(t,n){return ur(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return ur(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function yS(e){return eS(e.auth,new rc(e),e.bypassAuthState)}function wS(e){const{auth:t,user:n}=e;return A(n,t,"internal-error"),Z_(n,new rc(e),e.bypassAuthState)}async function _S(e){const{auth:t,user:n}=e;return A(n,t,"internal-error"),X_(n,new rc(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(t,n,r,i,o=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=t;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return yS;case"linkViaPopup":case"linkViaRedirect":return _S;case"reauthViaPopup":case"reauthViaRedirect":return wS;default:st(this.auth,"internal-error")}}resolve(t){xt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){xt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SS=new ji(2e3,1e4);async function kS(e,t,n){if(pt(e.app))return Promise.reject(Je(e,"operation-not-supported-in-this-environment"));const r=Fs(e);w_(e,t,tc);const i=Qm(r,n);return new Sn(r,"signInViaPopup",t,i).executeNotNull()}class Sn extends qm{constructor(t,n,r,i,o){super(t,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,Sn.currentPopupAction&&Sn.currentPopupAction.cancel(),Sn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return A(t,this.auth,"internal-error"),t}async onExecution(){xt(this.filter.length===1,"Popup operations only handle one event");const t=nc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Je(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Je(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Sn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Je(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,SS.get())};t()}}Sn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ES="pendingRedirect",Oo=new Map;class xS extends qm{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Oo.get(this.auth._key());if(!t){try{const r=await IS(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Oo.set(this.auth._key(),t)}return this.bypassAuthState||Oo.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function IS(e,t){const n=PS(t),r=TS(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function CS(e,t){Oo.set(e._key(),t)}function TS(e){return vt(e._redirectPersistence)}function PS(e){return No(ES,e.config.apiKey,e.name)}async function RS(e,t,n=!1){if(pt(e.app))return Promise.reject(In(e));const r=Fs(e),i=Qm(r,t),s=await new xS(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NS=10*60*1e3;class OS{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!AS(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Jm(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Je(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=NS&&this.cachedEventUids.clear(),this.cachedEventUids.has(rf(t))}saveEventToCache(t){this.cachedEventUids.add(rf(t)),this.lastProcessedEventTime=Date.now()}}function rf(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Jm({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function AS(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Jm(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bS(e,t={}){return Or(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,DS=/^https?/;async function MS(e){if(e.config.emulator)return;const{authorizedDomains:t}=await bS(e);for(const n of t)try{if($S(n))return}catch{}st(e,"unauthorized-domain")}function $S(e){const t=Ul(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return s.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!DS.test(n))return!1;if(LS.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jS=new ji(3e4,6e4);function of(){const e=ot().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function zS(e){return new Promise((t,n)=>{var r,i,o;function s(){of(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{of(),n(Je(e,"network-request-failed"))},timeout:jS.get()})}if(!((i=(r=ot().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((o=ot().gapi)===null||o===void 0)&&o.load)s();else{const a=W_("iframefcb");return ot()[a]=()=>{gapi.load?s():n(Je(e,"network-request-failed"))},H_(`${V_()}?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw Ao=null,t})}let Ao=null;function US(e){return Ao=Ao||zS(e),Ao}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FS=new ji(5e3,15e3),BS="__/auth/iframe",HS="emulator/auth/iframe",VS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},WS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function GS(e){const t=e.config;A(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?qu(t,HS):`https://${e.config.authDomain}/${BS}`,r={apiKey:t.apiKey,appName:e.name,v:$i},i=WS.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Mi(r).slice(1)}`}async function KS(e){const t=await US(e),n=ot().gapi;return A(n,e,"internal-error"),t.open({where:document.body,url:GS(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:VS,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=Je(e,"network-request-failed"),a=ot().setTimeout(()=>{o(s)},FS.get());function l(){ot().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},QS=500,qS=600,JS="_blank",XS="http://localhost";class sf{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ZS(e,t,n,r=QS,i=qS){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},YS),{width:r.toString(),height:i.toString(),top:o,left:s}),u=ye().toLowerCase();n&&(a=Om(u)?JS:n),Rm(u)&&(t=t||XS,l.scrollbars="yes");const f=Object.entries(l).reduce((m,[g,w])=>`${m}${g}=${w},`,"");if(D_(u)&&a!=="_self")return ek(t||"",a),new sf(null);const d=window.open(t||"",a,f);A(d,e,"popup-blocked");try{d.focus()}catch{}return new sf(d)}function ek(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tk="__/auth/handler",nk="emulator/auth/handler",rk=encodeURIComponent("fac");async function af(e,t,n,r,i,o){A(e.config.authDomain,e,"auth-domain-config-required"),A(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:$i,eventId:i};if(t instanceof tc){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",rw(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[f,d]of Object.entries({}))s[f]=d}if(t instanceof zi){const f=t.getScopes().filter(d=>d!=="");f.length>0&&(s.scopes=f.join(","))}e.tenantId&&(s.tid=e.tenantId);const a=s;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const l=await e._getAppCheckToken(),u=l?`#${rk}=${encodeURIComponent(l)}`:"";return`${ik(e)}?${Mi(a).slice(1)}${u}`}function ik({config:e}){return e.emulator?qu(e,nk):`https://${e.authDomain}/${tk}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ra="webStorageSupport";class ok{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Vm,this._completeRedirectFn=RS,this._overrideRedirectResult=CS}async _openPopup(t,n,r,i){var o;xt((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await af(t,n,r,Ul(),i);return ZS(t,s,nc())}async _openRedirect(t,n,r,i){await this._originValidation(t);const o=await af(t,n,r,Ul(),i);return lS(o),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(xt(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await KS(t),r=new OS(t);return n.register("authEvent",i=>(A(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Ra,{type:Ra},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[Ra];s!==void 0&&n(!!s),st(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=MS(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Mm()||Nm()||Zu()}}const sk=ok;var lf="@firebase/auth",uf="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ak{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){A(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lk(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function uk(e){Ci(new kr("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),o=t.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;A(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:s,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:$m(e)},u=new F_(r,i,o,l);return K_(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Ci(new kr("auth-internal",t=>{const n=Fs(t.getProvider("auth").getImmediate());return(r=>new ak(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),sr(lf,uf,lk(e)),sr(lf,uf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ck=5*60,dk=hm("authIdTokenMaxAge")||ck;let cf=null;const fk=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>dk)return;const i=n==null?void 0:n.token;cf!==i&&(cf=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function hk(e=o_()){const t=vm(e,"auth");if(t.isInitialized())return t.getImmediate();const n=G_(e,{popupRedirectResolver:sk,persistence:[vS,oS,Vm]}),r=hm("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const s=fk(o.toString());nS(n,s,()=>s(n.currentUser)),tS(n,a=>s(a))}}const i=W1("auth");return i&&Y_(n,`http://${i}`),n}function pk(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}B_({loadJS(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const o=Je("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",pk().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});uk("Browser");const mk={apiKey:"AIzaSyA3PfG0zFffbq3bWRNQmrd5emFnR3npcOo",authDomain:"cloud-computing-763fc.firebaseapp.com",projectId:"cloud-computing-763fc",storageBucket:"cloud-computing-763fc.firebasestorage.app",messagingSenderId:"440181901188",appId:"1:440181901188:web:76d30975425d566ca57fd1",measurementId:"G-PSSJY6YYZS"},gk=ym(mk),bo=hk(gk),Xm="http://localhost:8001",vk=async e=>{try{const t=await fetch(`${Xm}/login-google`,{method:"POST",headers:{Authorization:`Bearer ${e}`}});if(!t.ok)throw new Error("Failed to validate token");return await t.json()}catch(t){throw console.error("Error validating token:",t),t}},yk=async e=>{try{const t=await fetch(`${Xm}/logout`,{method:"POST",headers:{Authorization:`Bearer ${e}`}});if(!t.ok)throw new Error("Failed to logout from backend");return await t.json()}catch(t){throw console.error("Error logging out:",t),t}},Zm=S.createContext(null),wk=({children:e})=>{const[t,n]=S.useState(null),[r,i]=S.useState(!0);S.useEffect(()=>{const s=bo.onAuthStateChanged(async l=>{if(l)try{const u=await l.getIdToken(),{access_token:f}=await vk(u),d={email:l.email,name:l.displayName,accessToken:f,idToken:u};sessionStorage.setItem("user",JSON.stringify(d)),n(d)}catch(u){console.error("Error setting up user:",u),sessionStorage.removeItem("user"),n(null)}else sessionStorage.removeItem("user"),n(null);i(!1)}),a=sessionStorage.getItem("user");return a&&n(JSON.parse(a)),()=>s()},[]);const o=async()=>{try{const s=JSON.parse(sessionStorage.getItem("user")),a=s==null?void 0:s.accessToken;a&&await yk(a),await bo.signOut(),sessionStorage.removeItem("user"),n(null)}catch(s){console.error("Error during sign out:",s),await bo.signOut(),sessionStorage.removeItem("user"),n(null)}};return v.jsx(Zm.Provider,{value:{user:t,loading:r,signOut:o},children:e})},ic=()=>{const e=S.useContext(Zm);if(!e)throw new Error("useAuth must be used within an AuthProvider");return e},_k=T.button`
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 10px 20px;
  background: linear-gradient(45deg, #00ffff, #ff00ff);
  border: none;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  transition: transform 0.2s;
  z-index: 1000;

  &:hover {
    transform: translateY(-2px);
  }
`,Sk=T.button`
  color: white;
  background: linear-gradient(45deg, #00ffff, #ff00ff);
  padding: 12px 15px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s;
  min-width: 110px;
  margin-left: 30px;
  margin-right: 30px;
  line-height: normal;
  align-self: center;

  &:hover {
    transform: translateY(-2px);
  }
`,kk=({variant:e="nav"})=>{const t=async()=>{const r=new dt;try{await kS(bo,r)}catch(i){console.error("Error signing in:",i)}},n=e==="nav"?Sk:_k;return v.jsx(n,{onClick:t,children:"Sign In"})},Ek=am`
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 200% 0%;
  }
`,xk=T.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color: ${e=>e.$backgroundColor};
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  z-index: 3;
  position: fixed;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 4px;
    background: linear-gradient(
      90deg, 
      rgba(0, 255, 255, 0.2) 0%,
      rgba(255, 0, 255, 0.2) 50%,
      rgba(0, 255, 255, 0.2) 100%
    );
    background-size: 200% 100%;
    animation: ${Ek} 2s linear infinite;
  }
`,Ik=T.div`
  width: 100%;
  margin: 0;
  padding: 0;
  // background-color: rgba(15,15,45, 0.5);
  backdrop-filter: blur(10px);
`,Ck=T.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 0 0 40px; // Remove right padding, keep left padding for logo
  height: 74px;
`,Tk=T.div`
  font-size: 24px;
  font-weight: bold;
  background: ${e=>e.theme.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,Pk=T.div`
  display: flex;
  gap: 0px;
  height: 100%;

  a:last-child {
    margin-right: 0; 
    padding-right: 0;
  }
  
  a {
    color: ${e=>e.theme.colors.text};
    text-decoration: none;
    transition: all 0.3s;
    position: relative;
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 150px;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0px;
      left: 0;
      width: 0;
      height: 3px;
      background-color: #fff;
      transition: width 0.3s ease;
    }

    &:hover {
      color: #fff;
      background-color: rgba(255, 255, 255, 0.1);
      
      &::after {
        width: 100%;
      }
    }
  }
`,Rk=T.div`
  position: relative;
  display: inline-block;
`,Nk=T.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: #161922;
  border-radius: 8px;
  min-width: 150px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  opacity: ${e=>e.$isOpen?1:0};
  visibility: ${e=>e.$isOpen?"visible":"hidden"};
  transform: translateY(${e=>e.$isOpen?"0px":"-10px"});
  transition: all 0.3s ease;
`,co=T.div`
  padding: 12px 16px;
  color: ${e=>e.$isSignOut?"#ff4757":"rgba(255, 255, 255, 0.8)"};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    color: white;
  }

  &:first-child {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  &:last-child {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`,Ok=e=>{switch(e){case"/browse":return"#07071f";default:return"rgba(15, 15, 45, 0.5)"}},Ak=()=>{const e=$n(),t=Pr(),n=Ok(e.pathname),{user:r,signOut:i}=ic(),[o,s]=S.useState(!1);return S.useEffect(()=>{s(!1)},[r]),v.jsx(xk,{$backgroundColor:n,children:v.jsx(Ik,{children:v.jsxs(Ck,{children:[v.jsx(so,{to:"/",style:{textDecoration:"none"},children:v.jsx(Tk,{children:"GameMatch"})}),v.jsxs(Pk,{children:[v.jsx(so,{to:"/",children:"Home"}),v.jsx(so,{to:"/browse",children:"Browse Games"}),r?v.jsxs(Rk,{onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),children:[v.jsx(so,{to:"/profile",children:r.name||"Profile"}),v.jsxs(Nk,{$isOpen:o,children:[v.jsx(co,{children:"Settings"}),v.jsx(co,{children:"My Favorites"}),v.jsx(co,{onClick:()=>t("/match-history"),children:"Match History"}),v.jsx(co,{$isSignOut:!0,onClick:i,children:"Sign Out"})]})]}):v.jsx(kk,{variant:"nav"})]})]})})})},bk=T.div`
  text-align: center;
  padding: 100px 0;
`,Lk=T.h1`
  font-size: 48px;
  margin-bottom: 20px;
  background: ${e=>e.theme.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,Dk=T.p`
  font-size: 20px;
  color: ${e=>e.theme.colors.textSecondary};
  margin-bottom: 40px;
`;/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mk=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),eg=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var $k={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jk=S.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:o,iconNode:s,...a},l)=>S.createElement("svg",{ref:l,...$k,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:eg("lucide",i),...a},[...s.map(([u,f])=>S.createElement(u,f)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=(e,t)=>{const n=S.forwardRef(({className:r,...i},o)=>S.createElement(jk,{ref:o,iconNode:t,className:eg(`lucide-${Mk(e)}`,r),...i}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zk=tg("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng=tg("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]),jn="http://localhost:8000",Uk=async({page:e=1,pageSize:t=20,title:n=null,gameId:r=null,genre:i=null}={})=>{try{const o=new URLSearchParams({page:e.toString(),page_size:t.toString()});n&&o.append("title",n),r&&o.append("gameId",r),i&&o.append("genre",i);const s=await fetch(`${jn}/games?${o}`);if(!s.ok)throw new Error(`HTTP error! status: ${s.status}`);return await s.json()}catch(o){throw console.error("Error fetching games:",o),o}},Fk=async e=>{try{const t=new URLSearchParams({title:e,page_size:100}),n=await fetch(`${jn}/games?${t}`);if(!n.ok)throw new Error(`HTTP error! status: ${n.status}`);return await n.json()}catch(t){throw console.error("Error searching games:",t),t}},Bk=async(e,t)=>{try{const n=await fetch(`${jn}/games/${e}/${t}`,{method:"PUT"});if(!n.ok)throw new Error(`HTTP error! status: ${n.status}`);return await n.json()}catch(n){throw console.error("Error updating favored game:",n),n}},Hk=async e=>{try{const t=await fetch(`${jn}/match-requests`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);return await t.json()}catch(t){throw console.error("Error creating match request:",t),t}},Vk=async({MatchRequestId:e})=>{try{const t=await fetch(`${jn}/match-requests/match`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({MatchRequestId:e})});if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);return await t.json()}catch(t){throw console.error("Error starting match:",t),t}},Wk=async e=>{try{const t=await fetch(`${jn}/match/status/${e}`);if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);return await t.json()}catch(t){throw console.error("Error fetching match status:",t),t}},Gk=async({userId:e,page:t=1,pageSize:n=10})=>{try{const r=new URLSearchParams({page:t.toString(),page_size:n.toString()}),i=await fetch(`${jn}/match-requests?${r}`);if(console.log(i),!i.ok)throw new Error(`HTTP error! status: ${i.status}`);const o=await i.json();return{matchRequests:o.matchRequests||[],links:o.links||{},total:o.total||0}}catch(r){throw console.error("Error fetching match requests:",r),r}},Kk=T.div`
  position: relative;
  flex: 1;
  max-width: 400px;
`,Yk=T.input`
  width: 100%;
  border: none;
  color: white;
  font-size: 1rem;
  
  ${e=>e.variant==="browse"&&Ii`
    padding: 12px 40px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;

    &:focus {
      outline: none;
      background: rgba(255, 255, 255, 0.15);
    }

    &::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }
  `}

  ${e=>e.variant==="home"&&Ii`
    padding: 15px;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.05);
    font-size: 16px;
    outline: none;
    transition: all 0.3s;

    &:focus {
      background: rgba(255, 255, 255, 0.1);
      box-shadow: 0 0 10px rgba(0, 255, 255, 0.3);
    }
  `}
`,Qk=T.div`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, 0.5);
  // Only show for browse variant
  display: ${e=>e.variant==="browse"?"block":"none"};
`,rg=S.forwardRef(({variant:e="browse"},t)=>{const[n,r]=S.useState(""),i=Pr(),o=async()=>{if(n.trim())try{const a=await Fk(n.trim());i("/search",{state:{results:a}})}catch(a){console.error("Search failed:",a)}};S.useImperativeHandle(t,()=>({triggerSearch:o}));const s=a=>{a.key==="Enter"&&o()};return v.jsxs(Kk,{children:[v.jsx(Qk,{variant:e,children:v.jsx(ng,{size:20})}),v.jsx(Yk,{placeholder:"Search games...",value:n,onChange:a=>r(a.target.value),onKeyPress:s,variant:e})]})}),qk=T.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 30px;
  border-radius: 15px;
  backdrop-filter: blur(10px);
  max-width: 600px;
  margin: 0 auto;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.2);
`,Jk=T.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;T.input`
  flex: 1;
  padding: 15px;
  border: none;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  font-size: 16px;
  outline: none;
  transition: all 0.3s;

  &:focus {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 10px rgba(0, 255, 255, 0.3);
  }
`;const Xk=T.button`
  padding: 15px 30px;
  border: none;
  border-radius: 8px;
  background: ${e=>e.theme.gradients.primary};
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-2px);
  }
`,Zk=T.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  margin-top: 20px;
`,eE=T.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 10px 20px;
  border-radius: 20px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }
`,tE=T.img`
  width: 100%;
  aspect-ratio: 3/4;
  object-fit: cover;
`,nE=()=>{const e=S.useRef(),[t,n]=S.useState([]);return S.useEffect(()=>{(async()=>{try{const o=await fetch("http://localhost:8005/recommendations/abcd");if(!o.ok)throw new Error("Failed to fetch recommendations");const s=await o.json();n(s.games||[])}catch(i){console.error("Error fetching recommendations:",i)}})()},[]),v.jsxs(qk,{children:[v.jsxs(Jk,{children:[v.jsx(rg,{ref:e,variant:"home"}),v.jsx(Xk,{onClick:()=>{var r;return(r=e.current)==null?void 0:r.triggerSearch()},children:"Find Match"})]}),v.jsx(Zk,{children:t.length>0?t.map(r=>v.jsxs("div",{style:{marginBottom:"10px"},children:[v.jsx(tE,{src:r.links.image.href==="No image available"?"images/ph1.png":r.links.image.href,alt:r.title}),v.jsx(eE,{children:r.title})]},r.gameId)):v.jsx("p",{children:"Loading recommended games..."})})]})},rE=()=>v.jsxs(bk,{children:[v.jsx(Lk,{children:"Find Your Perfect Gaming Partner"}),v.jsx(Dk,{children:"Connect with players who share your gaming schedule and style"}),v.jsx(nE,{})]}),iE=am`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
  100% { transform: translateY(0px) rotate(360deg); }
`,oE=T.div`
  position: fixed;  // Change to fixed
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
`,Na=T.div`
  position: absolute;
  width: ${e=>e.size}px;
  height: ${e=>e.size}px;
  background: radial-gradient(circle at center, 
    rgba(0, 255, 255, 0.2), 
    rgba(255, 0, 255, 0.1)
  );
  border-radius: 50%;
  animation: ${iE} 8s infinite;
  animation-delay: ${e=>e.delay}s;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.2),
              inset 0 0 20px rgba(255, 0, 255, 0.2);
  backdrop-filter: blur(5px);
  top: ${e=>e.top}%;
  left: ${e=>e.left}%;
  pointer-events: none;  // Add this to ensure orbs don't block interaction
`,sE=()=>v.jsxs(oE,{children:[v.jsx(Na,{size:100,delay:0,top:20,left:10}),v.jsx(Na,{size:60,delay:-2,top:60,left:80}),v.jsx(Na,{size:40,delay:-4,top:30,left:90})]}),aE=T.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`,lE=()=>(S.useEffect(()=>{window.particlesJS&&window.particlesJS("particles-js",{particles:{number:{value:100,density:{enable:!0,value_area:1e3}},color:{value:"#ffffff"},shape:{type:"circle"},opacity:{value:.3,random:!1},size:{value:2,random:!0},line_linked:{enable:!0,distance:150,color:"#ffffff",opacity:.2,width:1},move:{enable:!0,speed:2,direction:"none",random:!0,straight:!1,out_mode:"out",bounce:!1}},interactivity:{detect_on:"window",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:140,line_linked:{opacity:.4}},push:{particles_nb:4}}},retina_detect:!0})},[]),v.jsx(aE,{id:"particles-js"})),uE=T.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  padding: 80px 40px 40px;
`,cE=()=>v.jsxs(v.Fragment,{children:[v.jsx(lE,{}),v.jsx(sE,{}),v.jsx(uE,{children:v.jsx(rE,{})})]}),dE=T.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  gap: 8px;
`,Oa=T.button`
  padding: 8px 12px;
  background: ${e=>e.active?"rgba(255, 255, 255, 0.1)":"transparent"};
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  color: ${e=>e.active?"white":"rgba(255, 255, 255, 0.7)"};
  cursor: ${e=>e.disabled?"not-allowed":"pointer"};
  opacity: ${e=>e.disabled?.5:1};
  transition: all 0.2s;

  &:hover:not(:disabled) {
    background: rgba(255, 255, 255, 0.1);
    color: white;
  }
`,fE=T.span`
  color: rgba(255, 255, 255, 0.7);
  padding: 8px;
`,hE=({currentPage:e,hasNextPage:t,onPageChange:n})=>{const r=()=>{const i=[];if(i.push(1),e<=3)for(let o=2;o<=Math.min(5,e+(t?1:0));o++)i.push(o);else i.push("..."),i.push(e-1),i.push(e),t&&i.push(e+1);return i};return v.jsxs(dE,{children:[v.jsx(Oa,{onClick:()=>n(e-1),disabled:e===1,children:"Previous"}),r().map((i,o)=>i==="..."?v.jsx(fE,{children:"..."},`ellipsis-${o}`):v.jsx(Oa,{active:i===e,onClick:()=>n(i),children:i},i)),v.jsx(Oa,{onClick:()=>n(e+1),disabled:!t,children:"Next"})]})},pE=T.div`
  position: relative;
  background: #161922;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease;
  height: fit-content;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2); 
  max-width: 250px; 
  margin: 0 auto; 

  &:hover {
    transform: translateY(-10px);
  }
`,mE=T.img`
  width: 100%;
  aspect-ratio: 3/4;
  object-fit: cover;
`,gE=T.div`
  padding: 15px;
  position: relative; 
  background: #161922;
  z-index: 1; 
`,vE=T.h3`
  margin: 0;
  font-size: 0.9rem;
  margin-bottom: 5px;
  color: rgba(255, 255, 255, 0.9);
  letter-spacing: 0.2px;
  padding-left: 30px;
`,yE=T.div`
  position: absolute;
  bottom: 15px;
  left: 15px;
  z-index: 2;
  cursor: pointer;
  padding: 8px;
  margin: -8px;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.2);
    
    svg {
      color: #ff4757; // Red color on hover
      fill: #ff4757; // Also change the fill on hover
    }
  }
`,wE="b0b4f96f-966c-11ef-a4c6-0affd085b90b",_E=({game:e,onClick:t})=>{const[n,r]=S.useState(!1),[i,o]=S.useState(!1),s=async a=>{if(a.stopPropagation(),!i)try{o(!0),await Bk(wE,e.gameId),r(!n)}catch(l){console.error("Failed to update favored game:",l)}finally{o(!1)}};return v.jsxs(pE,{onClick:t,children:[v.jsx(yE,{onClick:s,children:v.jsx(zk,{size:24,fill:n?"red":"none",color:"white",style:{opacity:i?.5:1,transition:"all 0.2s"}})}),v.jsx(mE,{src:e.links.image.href,alt:e.title}),v.jsx(gE,{children:v.jsx(vE,{children:e.title})})]})},SE=T.div`
  color: white;
  padding-top: 74px;
  background-color: #22242f; // Much lighter background for content area
  min-height: 100vh;
`,kE=T.div`
  position: fixed;
  top: 74px;
  left: 0;
  right: 0;
  background-color: #0d0d17; // Darker background for subnav
  backdrop-filter: blur(10px);
  z-index: 10;
  padding: 20px 0;
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2); // Add shadow for depth
  justify-content: center;
`,EE=T.div`
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  gap: 40px;
  align-items: center;
  justify-content: center;
`,xE=T.div`
  position: relative;
  flex: 1;
  max-width: 400px;
`;T.input`
  width: 100%;
  padding: 12px 40px;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 1rem;

  &:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.15);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;const IE=T.div`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, 0.5);
`,CE=T.div`
  display: flex;
  gap: 20px;
`,Nt=T.div`
  color: ${e=>e.active?"white":"rgba(255, 255, 255, 0.5)"};
  cursor: pointer;
  transition: all 0.3s ease; // Changed to 'all' to animate both color and background
  font-size: 1rem;
  padding: 6px 16px; // Add padding to create rectangle shape
  border-radius: 6px; // Rounded corners
  background: ${e=>e.active?"rgba(255, 255, 255, 0.1)":"rgba(255, 255, 255, 0.05)"};
  
  &:hover {
    color: white;
    background: rgba(255, 255, 255, 0.15);
  }
`,TE=T.div`
  padding: 15px;
`,PE=T.h3`
  margin: 0;
  font-size: 0.9rem;
  margin-bottom: 5px;
  color: rgba(255, 255, 255, 0.9); // Slightly dimmed for better aesthetics
  letter-spacing: 0.2px; // Optional: adds a bit of spacing between letters
`,ig=T.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); // Exactly 4 cards per row
  gap: 24px;
  max-width: 1600px;
  margin: 0 auto;
  padding: 40px;
  height: calc(100vh - 140px); // Full height minus nav and subnav
  overflow-y: auto; // Enable vertical scrolling
  margin-top: 120px;
  padding: 20px 100px;
`,RE=T.div`
  background: #161922;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease;
  height: fit-content;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2); 
  max-width: 250px; 
  margin: 0 auto; 


  &:hover {
    transform: translateY(-10px);
  }
`,NE=T.img`
  width: 100%;
  aspect-ratio: 3/4;
  object-fit: cover;
`;T.div`
  position: absolute;
  bottom: 15px;
  left: 15px;
  z-index: 2;
  cursor: pointer;
  padding: 8px; // Larger clickable area
  margin: -8px; // Offset padding to keep position
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.2);
  }
`;const OE=()=>{const e=S.useRef(null),[t,n]=S.useState([]),[r,i]=S.useState(!0),[o,s]=S.useState(1),[a,l]=S.useState(!1),[u,f]=S.useState("All"),d=Pr(),m=S.useRef(!0),g=h=>{d(`/games/${h.gameId}`,{state:{game:h}})},w=async(h,c)=>{try{i(!0);const p=await Uk({page:h,genre:c==="All"?null:c});n(p.games),l(!!p.links.next)}catch(p){console.error("Error fetching games:",p),l(!1)}finally{i(!1)}};S.useEffect(()=>{if(m.current){m.current=!1;return}w(o,u)},[o,u]);const _=h=>{if(s(h),e.current){const c=e.current;c.scrollTo({top:0,behavior:"smooth"}),setTimeout(()=>{c.scrollTop=0},0)}},E=h=>{f(h),s(1),e.current&&(e.current.scrollTop=0)};return v.jsxs(SE,{children:[v.jsx(kE,{children:v.jsxs(EE,{children:[v.jsxs(xE,{children:[v.jsx(IE,{children:v.jsx(ng,{size:20})}),v.jsx(rg,{variant:"browse",placeholder:"Search games..."})]}),v.jsxs(CE,{children:[v.jsx(Nt,{active:u==="All",onClick:()=>E("All"),children:"All"}),v.jsx(Nt,{active:u==="Arcade",onClick:()=>E("Arcade"),children:"Arcade"}),v.jsx(Nt,{active:u==="Shooter",onClick:()=>E("Shooter"),children:"Shooter"}),v.jsx(Nt,{active:u==="Platform",onClick:()=>E("Platform"),children:"Platform"}),v.jsx(Nt,{active:u==="Adventure",onClick:()=>E("Adventure"),children:"Adventure"}),v.jsx(Nt,{active:u==="Fighting",onClick:()=>E("Fighting"),children:"Fighting"}),v.jsx(Nt,{active:u==="Puzzle",onClick:()=>E("Puzzle"),children:"Puzzle"}),v.jsx(Nt,{active:u==="Other",onClick:()=>E("Other"),children:"Other"})]})]})}),v.jsx(ig,{ref:e,children:r?v.jsx("div",{children:"Loading..."}):t.map(h=>v.jsx(_E,{game:h,onClick:()=>g(h)},h.gameId))}),v.jsx(hE,{currentPage:o,hasNextPage:a,onPageChange:_})]})},AE=T.div`
  color: white;
  padding-top: 74px;
  background-color: #22242f;
  min-height: 100vh;
  display: flex;
  justify-content: center;
`,bE=T.div`
  max-width: 1200px;
  width: 100%;
  padding: 40px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center; // This will help center children
`,LE=T.h1`
  font-size: 2.5rem;
  margin-bottom: 40px;
  background: linear-gradient(45deg, #00ffff, #ff00ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
  width: 100%;
  text-align: left;
`,DE=T.div`
  display: flex;
  gap: 40px;
  background: rgba(255, 255, 255, 0.05);
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  width: 100%; // Ensure it takes full width
  margin-bottom: 50px;
`,ME=T.div`
  flex: 0 0 300px; // Fixed width
  height: 400px; // Fixed height
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
`,$E=T.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,jE=T.div`
  flex: 1;
  max-height: 500px; // Match image height
  overflow-y: auto;
  padding-right: 20px;

  /* Scrollbar styling */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 4px;
    
    &:hover {
      background: rgba(255, 255, 255, 0.3);
    }
  }
`,zE=T.p`
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  text-align: middle;
  text-indent: 2em; // Adds paragraph indentation
  padding: 0 10px; // Optional: adds some padding on the sides
`;T.div`
  width: 100%; // Take full width of parent
  display: flex;
  justify-content: center; // Center the button
  margin-top: 50px;
`;const UE=T.button`
  padding: 15px 60px;
  font-size: 1.2rem;
  font-weight: 500;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background: linear-gradient(45deg, #00ffff, #ff00ff);
  color: white;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 255, 255, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 255, 255, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`,FE=()=>{var i;const e=$n(),t=Pr(),n=(i=e.state)==null?void 0:i.game,r=o=>{t(`/match-request/${o.gameId}`,{state:{game:o}})};return v.jsx(AE,{children:v.jsxs(bE,{children:[v.jsx(LE,{children:n==null?void 0:n.title}),v.jsxs(DE,{children:[v.jsx(ME,{children:v.jsx($E,{src:n==null?void 0:n.links.image.href,alt:n==null?void 0:n.title})}),v.jsx(jE,{children:v.jsx(zE,{children:n==null?void 0:n.description})})]}),v.jsx(UE,{onClick:()=>r(n),children:"Match"})]})})},BE=T.div`
  color: white;
  padding-top: 74px;
  background-color: #22242f;
  min-height: 100vh;
`,HE=T.div`
  max-width: 1600px;
  width: 100%;
  margin: 0 auto;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`,VE=T(ig)`
  margin-top: 0; // Override the margin since we don't have the subnav here
`,WE=T.div`
  text-align: center;
  padding: 100px 20px;
  color: rgba(255, 255, 255, 0.9);

  h2 {
    font-size: 2rem;
    margin-bottom: 20px;
    background: linear-gradient(45deg, #00ffff, #ff00ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.7);
  }
`,GE=()=>{var o;const e=$n(),t=Pr(),n=(o=e.state)==null?void 0:o.results,r=(n==null?void 0:n.games)||[],i=s=>{t(`/games/${s.gameId}`,{state:{game:s}})};return v.jsx(BE,{children:v.jsx(HE,{children:r.length===0?v.jsxs(WE,{children:[v.jsx("h2",{children:"No games found"}),v.jsx("p",{children:"We couldn't find any games matching your search. Try different keywords?"})]}):v.jsx(VE,{children:r.map(s=>v.jsxs(RE,{onClick:()=>i(s),children:[v.jsx(NE,{src:s.links.image.href,alt:s.title}),v.jsx(TE,{children:v.jsx(PE,{children:s.title})})]},s.gameId))})})})},KE=T.div`
  color: white;
  background-color: #22242f;
  min-height: 100vh;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,YE=T.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`,QE=T.input`
  padding: 10px;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.1);
  color: white;

  &:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.2);
  }
`,qE=T.button`
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  background: linear-gradient(45deg, #00ffff, #ff00ff);
  color: white;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 255, 255, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`,JE=()=>{const{gameId:e}=ly(),{user:t}=ic(),[n,r]=S.useState(""),i=async()=>{try{const o={userId:t==null?void 0:t.idToken,gameId:e,expireDate:n};await Hk(o),alert("Match request created successfully!")}catch(o){console.error("Error creating match request:",o),alert("Failed to create match request.")}};return v.jsx(KE,{children:v.jsxs(YE,{children:[v.jsx("h2",{children:"Create Match Request"}),v.jsx("label",{htmlFor:"expireDate",children:"Expiration Date"}),v.jsx(QE,{type:"date",id:"expireDate",value:n,onChange:o=>r(o.target.value)}),v.jsx(qE,{onClick:i,children:"Submit"})]})})},XE=T.div`
  color: white;
  background-color: #22242f;
  min-height: 100vh;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`,ZE=T.div`
  width: 100%;
  max-width: 800px;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`,ex=T.div`
  background: ${e=>e.selected?"rgba(0, 255, 255, 0.2)":"rgba(255, 255, 255, 0.1)"};
  border: ${e=>e.selected?"2px solid #00ffff":"2px solid transparent"};
  padding: 20px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }

  div {
    margin-bottom: 5px;
  }
`,tx=T.div`
  display: flex;
  gap: 10px;
  margin: 20px 0;
`,df=T.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  color: white;
  background: ${e=>e.active?"#00ffff":"rgba(255, 255, 255, 0.1)"};
  box-shadow: ${e=>e.active?"0 0 10px #00ffff":"none"};
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 255, 255, 0.2);
  }

  &:disabled {
    background: rgba(255, 255, 255, 0.05);
    cursor: not-allowed;
  }
`,nx=()=>{const{user:e}=ic(),[t,n]=S.useState([]),[r,i]=S.useState(1),[o,s]=S.useState(null),[a,l]=S.useState(1),u=10;S.useEffect(()=>{(async()=>{try{const g=await Gk({userId:e==null?void 0:e.idToken,page:r,page_size:u}),w=await Promise.all(g.matchRequests.map(async _=>{const E=await Wk(_.matchRequestId);return{..._,status:E.status}}));n(w),l(Math.ceil(g.total/u))}catch(g){console.error("Error fetching match requests:",g)}})()},[e==null?void 0:e.idToken,r]);const f=m=>{s(m)},d=async()=>{if(!o){alert("Please select a match request to start matching.");return}try{await Vk({MatchRequestId:o}),alert("Matching started successfully!")}catch(m){console.error("Error starting matching:",m),alert("Failed to start matching.")}};return v.jsxs(XE,{children:[v.jsx("h2",{children:"Match History"}),v.jsx(ZE,{children:t.map(m=>v.jsxs(ex,{onClick:()=>f(m.matchRequestId),selected:m.matchRequestId===o,children:[v.jsxs("div",{children:["Game ID: ",m.gameId]}),v.jsxs("div",{children:["Status: ",m.status]}),v.jsxs("div",{children:["Expiration Date: ",m.expireDate]})]},m.matchRequestId))}),v.jsx(tx,{children:[...Array(a)].map((m,g)=>v.jsx(df,{onClick:()=>i(g+1),active:r===g+1,children:g+1},g))}),v.jsx(df,{onClick:d,disabled:!o,children:"Start Matching"})]})};function rx(){return v.jsx(wk,{children:v.jsxs(A1,{theme:$1,children:[v.jsx(M1,{}),v.jsx(Ak,{}),v.jsxs(xy,{children:[v.jsx(mn,{path:"/",element:v.jsx(cE,{})}),v.jsx(mn,{path:"/browse",element:v.jsx(OE,{})}),v.jsx(mn,{path:"/games/:gameId",element:v.jsx(FE,{})}),v.jsx(mn,{path:"/search",element:v.jsx(GE,{})}),v.jsx(mn,{path:"/match-request/:gameId",element:v.jsx(JE,{})}),v.jsx(mn,{path:"/match-history",element:v.jsx(nx,{})})]})]})})}xp(document.getElementById("root")).render(v.jsx(S.StrictMode,{children:v.jsx(Oy,{children:v.jsx(rx,{})})}));
