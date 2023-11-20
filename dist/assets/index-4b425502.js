(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();function Ne(e,t){return function(){return e.apply(t,arguments)}}const{toString:et}=Object.prototype,{getPrototypeOf:ie}=Object,z=(e=>t=>{const n=et.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),_=e=>(e=e.toLowerCase(),t=>z(t)===e),J=e=>t=>typeof t===e,{isArray:L}=Array,B=J("undefined");function tt(e){return e!==null&&!B(e)&&e.constructor!==null&&!B(e.constructor)&&S(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Pe=_("ArrayBuffer");function nt(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Pe(e.buffer),t}const rt=J("string"),S=J("function"),Fe=J("number"),$=e=>e!==null&&typeof e=="object",ot=e=>e===!0||e===!1,j=e=>{if(z(e)!=="object")return!1;const t=ie(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},st=_("Date"),it=_("File"),at=_("Blob"),ct=_("FileList"),ut=e=>$(e)&&S(e.pipe),lt=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||S(e.append)&&((t=z(e))==="formdata"||t==="object"&&S(e.toString)&&e.toString()==="[object FormData]"))},dt=_("URLSearchParams"),ft=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function U(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),L(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const s=n?Object.getOwnPropertyNames(e):Object.keys(e),i=s.length;let u;for(r=0;r<i;r++)u=s[r],t.call(null,e[u],u,e)}}function Le(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const De=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Be=e=>!B(e)&&e!==De;function Q(){const{caseless:e}=Be(this)&&this||{},t={},n=(r,o)=>{const s=e&&Le(t,o)||o;j(t[s])&&j(r)?t[s]=Q(t[s],r):j(r)?t[s]=Q({},r):L(r)?t[s]=r.slice():t[s]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&U(arguments[r],n);return t}const pt=(e,t,n,{allOwnKeys:r}={})=>(U(t,(o,s)=>{n&&S(o)?e[s]=Ne(o,n):e[s]=o},{allOwnKeys:r}),e),mt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),ht=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},yt=(e,t,n,r)=>{let o,s,i;const u={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),s=o.length;s-- >0;)i=o[s],(!r||r(i,e,t))&&!u[i]&&(t[i]=e[i],u[i]=!0);e=n!==!1&&ie(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},wt=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Et=e=>{if(!e)return null;if(L(e))return e;let t=e.length;if(!Fe(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},bt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&ie(Uint8Array)),gt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=r.next())&&!o.done;){const s=o.value;t.call(e,s[0],s[1])}},St=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Rt=_("HTMLFormElement"),Ot=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),pe=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),_t=_("RegExp"),Ue=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};U(n,(o,s)=>{let i;(i=t(o,s,e))!==!1&&(r[s]=i||o)}),Object.defineProperties(e,r)},Tt=e=>{Ue(e,(t,n)=>{if(S(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(S(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},At=(e,t)=>{const n={},r=o=>{o.forEach(s=>{n[s]=!0})};return L(e)?r(e):r(String(e).split(t)),n},xt=()=>{},Ct=(e,t)=>(e=+e,Number.isFinite(e)?e:t),v="abcdefghijklmnopqrstuvwxyz",me="0123456789",Me={DIGIT:me,ALPHA:v,ALPHA_DIGIT:v+v.toUpperCase()+me},Nt=(e=16,t=Me.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Pt(e){return!!(e&&S(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Ft=e=>{const t=new Array(10),n=(r,o)=>{if($(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[o]=r;const s=L(r)?[]:{};return U(r,(i,u)=>{const d=n(i,o+1);!B(d)&&(s[u]=d)}),t[o]=void 0,s}}return r};return n(e,0)},Lt=_("AsyncFunction"),Dt=e=>e&&($(e)||S(e))&&S(e.then)&&S(e.catch),a={isArray:L,isArrayBuffer:Pe,isBuffer:tt,isFormData:lt,isArrayBufferView:nt,isString:rt,isNumber:Fe,isBoolean:ot,isObject:$,isPlainObject:j,isUndefined:B,isDate:st,isFile:it,isBlob:at,isRegExp:_t,isFunction:S,isStream:ut,isURLSearchParams:dt,isTypedArray:bt,isFileList:ct,forEach:U,merge:Q,extend:pt,trim:ft,stripBOM:mt,inherits:ht,toFlatObject:yt,kindOf:z,kindOfTest:_,endsWith:wt,toArray:Et,forEachEntry:gt,matchAll:St,isHTMLForm:Rt,hasOwnProperty:pe,hasOwnProp:pe,reduceDescriptors:Ue,freezeMethods:Tt,toObjectSet:At,toCamelCase:Ot,noop:xt,toFiniteNumber:Ct,findKey:Le,global:De,isContextDefined:Be,ALPHABET:Me,generateString:Nt,isSpecCompliantForm:Pt,toJSONObject:Ft,isAsyncFn:Lt,isThenable:Dt};function h(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}a.inherits(h,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const ke=h.prototype,je={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{je[e]={value:e}});Object.defineProperties(h,je);Object.defineProperty(ke,"isAxiosError",{value:!0});h.from=(e,t,n,r,o,s)=>{const i=Object.create(ke);return a.toFlatObject(e,i,function(d){return d!==Error.prototype},u=>u!=="isAxiosError"),h.call(i,e.message,t,n,r,o),i.cause=e,i.name=e.name,s&&Object.assign(i,s),i};const Bt=null;function Z(e){return a.isPlainObject(e)||a.isArray(e)}function Ie(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function he(e,t,n){return e?e.concat(t).map(function(o,s){return o=Ie(o),!n&&s?"["+o+"]":o}).join(n?".":""):t}function Ut(e){return a.isArray(e)&&!e.some(Z)}const Mt=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function W(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(m,g){return!a.isUndefined(g[m])});const r=n.metaTokens,o=n.visitor||c,s=n.dots,i=n.indexes,d=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(o))throw new TypeError("visitor must be a function");function f(l){if(l===null)return"";if(a.isDate(l))return l.toISOString();if(!d&&a.isBlob(l))throw new h("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(l)||a.isTypedArray(l)?d&&typeof Blob=="function"?new Blob([l]):Buffer.from(l):l}function c(l,m,g){let T=l;if(l&&!g&&typeof l=="object"){if(a.endsWith(m,"{}"))m=r?m:m.slice(0,-2),l=JSON.stringify(l);else if(a.isArray(l)&&Ut(l)||(a.isFileList(l)||a.endsWith(m,"[]"))&&(T=a.toArray(l)))return m=Ie(m),T.forEach(function(k,Ye){!(a.isUndefined(k)||k===null)&&t.append(i===!0?he([m],Ye,s):i===null?m:m+"[]",f(k))}),!1}return Z(l)?!0:(t.append(he(g,m,s),f(l)),!1)}const p=[],w=Object.assign(Mt,{defaultVisitor:c,convertValue:f,isVisitable:Z});function b(l,m){if(!a.isUndefined(l)){if(p.indexOf(l)!==-1)throw Error("Circular reference detected in "+m.join("."));p.push(l),a.forEach(l,function(T,R){(!(a.isUndefined(T)||T===null)&&o.call(t,T,a.isString(R)?R.trim():R,m,w))===!0&&b(T,m?m.concat(R):[R])}),p.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return b(e),t}function ye(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function ae(e,t){this._pairs=[],e&&W(e,this,t)}const He=ae.prototype;He.append=function(t,n){this._pairs.push([t,n])};He.toString=function(t){const n=t?function(r){return t.call(this,r,ye)}:ye;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function kt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function qe(e,t,n){if(!t)return e;const r=n&&n.encode||kt,o=n&&n.serialize;let s;if(o?s=o(t,n):s=a.isURLSearchParams(t)?t.toString():new ae(t,n).toString(r),s){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e}class jt{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const we=jt,ze={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},It=typeof URLSearchParams<"u"?URLSearchParams:ae,Ht=typeof FormData<"u"?FormData:null,qt=typeof Blob<"u"?Blob:null,zt=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),Jt=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),O={isBrowser:!0,classes:{URLSearchParams:It,FormData:Ht,Blob:qt},isStandardBrowserEnv:zt,isStandardBrowserWebWorkerEnv:Jt,protocols:["http","https","file","blob","url","data"]};function $t(e,t){return W(e,new O.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,s){return O.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},t))}function Wt(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Vt(e){const t={},n=Object.keys(e);let r;const o=n.length;let s;for(r=0;r<o;r++)s=n[r],t[s]=e[s];return t}function Je(e){function t(n,r,o,s){let i=n[s++];const u=Number.isFinite(+i),d=s>=n.length;return i=!i&&a.isArray(o)?o.length:i,d?(a.hasOwnProp(o,i)?o[i]=[o[i],r]:o[i]=r,!u):((!o[i]||!a.isObject(o[i]))&&(o[i]=[]),t(n,r,o[i],s)&&a.isArray(o[i])&&(o[i]=Vt(o[i])),!u)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,o)=>{t(Wt(r),o,n,0)}),n}return null}function vt(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const ce={transitional:ze,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,s=a.isObject(t);if(s&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return o&&o?JSON.stringify(Je(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let u;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return $t(t,this.formSerializer).toString();if((u=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return W(u?{"files[]":t}:t,d&&new d,this.formSerializer)}}return s||o?(n.setContentType("application/json",!1),vt(t)):t}],transformResponse:[function(t){const n=this.transitional||ce.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||o)){const i=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(u){if(i)throw u.name==="SyntaxError"?h.from(u,h.ERR_BAD_RESPONSE,this,null,this.response):u}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:O.classes.FormData,Blob:O.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{ce.headers[e]={}});const ue=ce,Kt=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Gt=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(i){o=i.indexOf(":"),n=i.substring(0,o).trim().toLowerCase(),r=i.substring(o+1).trim(),!(!n||t[n]&&Kt[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Ee=Symbol("internals");function D(e){return e&&String(e).trim().toLowerCase()}function I(e){return e===!1||e==null?e:a.isArray(e)?e.map(I):String(e)}function Xt(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const Qt=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function K(e,t,n,r,o){if(a.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function Zt(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Yt(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,s,i){return this[r].call(this,t,o,s,i)},configurable:!0})})}class V{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function s(u,d,f){const c=D(d);if(!c)throw new Error("header name must be a non-empty string");const p=a.findKey(o,c);(!p||o[p]===void 0||f===!0||f===void 0&&o[p]!==!1)&&(o[p||d]=I(u))}const i=(u,d)=>a.forEach(u,(f,c)=>s(f,c,d));return a.isPlainObject(t)||t instanceof this.constructor?i(t,n):a.isString(t)&&(t=t.trim())&&!Qt(t)?i(Gt(t),n):t!=null&&s(n,t,r),this}get(t,n){if(t=D(t),t){const r=a.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return Xt(o);if(a.isFunction(n))return n.call(this,o,r);if(a.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=D(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||K(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function s(i){if(i=D(i),i){const u=a.findKey(r,i);u&&(!n||K(r,r[u],u,n))&&(delete r[u],o=!0)}}return a.isArray(t)?t.forEach(s):s(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const s=n[r];(!t||K(this,this[s],s,t,!0))&&(delete this[s],o=!0)}return o}normalize(t){const n=this,r={};return a.forEach(this,(o,s)=>{const i=a.findKey(r,s);if(i){n[i]=I(o),delete n[s];return}const u=t?Zt(s):String(s).trim();u!==s&&delete n[s],n[u]=I(o),r[u]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[Ee]=this[Ee]={accessors:{}}).accessors,o=this.prototype;function s(i){const u=D(i);r[u]||(Yt(o,i),r[u]=!0)}return a.isArray(t)?t.forEach(s):s(t),this}}V.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(V.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(V);const A=V;function G(e,t){const n=this||ue,r=t||n,o=A.from(r.headers);let s=r.data;return a.forEach(e,function(u){s=u.call(n,s,o.normalize(),t?t.status:void 0)}),o.normalize(),s}function $e(e){return!!(e&&e.__CANCEL__)}function M(e,t,n){h.call(this,e??"canceled",h.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(M,h,{__CANCEL__:!0});function en(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new h("Request failed with status code "+n.status,[h.ERR_BAD_REQUEST,h.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const tn=O.isStandardBrowserEnv?function(){return{write:function(n,r,o,s,i,u){const d=[];d.push(n+"="+encodeURIComponent(r)),a.isNumber(o)&&d.push("expires="+new Date(o).toGMTString()),a.isString(s)&&d.push("path="+s),a.isString(i)&&d.push("domain="+i),u===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function nn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function rn(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function We(e,t){return e&&!nn(t)?rn(e,t):t}const on=O.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function o(s){let i=s;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=o(window.location.href),function(i){const u=a.isString(i)?o(i):i;return u.protocol===r.protocol&&u.host===r.host}}():function(){return function(){return!0}}();function sn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function an(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,s=0,i;return t=t!==void 0?t:1e3,function(d){const f=Date.now(),c=r[s];i||(i=f),n[o]=d,r[o]=f;let p=s,w=0;for(;p!==o;)w+=n[p++],p=p%e;if(o=(o+1)%e,o===s&&(s=(s+1)%e),f-i<t)return;const b=c&&f-c;return b?Math.round(w*1e3/b):void 0}}function be(e,t){let n=0;const r=an(50,250);return o=>{const s=o.loaded,i=o.lengthComputable?o.total:void 0,u=s-n,d=r(u),f=s<=i;n=s;const c={loaded:s,total:i,progress:i?s/i:void 0,bytes:u,rate:d||void 0,estimated:d&&i&&f?(i-s)/d:void 0,event:o};c[t?"download":"upload"]=!0,e(c)}}const cn=typeof XMLHttpRequest<"u",un=cn&&function(e){return new Promise(function(n,r){let o=e.data;const s=A.from(e.headers).normalize(),i=e.responseType;let u;function d(){e.cancelToken&&e.cancelToken.unsubscribe(u),e.signal&&e.signal.removeEventListener("abort",u)}let f;a.isFormData(o)&&(O.isStandardBrowserEnv||O.isStandardBrowserWebWorkerEnv?s.setContentType(!1):s.getContentType(/^\s*multipart\/form-data/)?a.isString(f=s.getContentType())&&s.setContentType(f.replace(/^\s*(multipart\/form-data);+/,"$1")):s.setContentType("multipart/form-data"));let c=new XMLHttpRequest;if(e.auth){const l=e.auth.username||"",m=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";s.set("Authorization","Basic "+btoa(l+":"+m))}const p=We(e.baseURL,e.url);c.open(e.method.toUpperCase(),qe(p,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function w(){if(!c)return;const l=A.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),g={data:!i||i==="text"||i==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:l,config:e,request:c};en(function(R){n(R),d()},function(R){r(R),d()},g),c=null}if("onloadend"in c?c.onloadend=w:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(w)},c.onabort=function(){c&&(r(new h("Request aborted",h.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new h("Network Error",h.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let m=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const g=e.transitional||ze;e.timeoutErrorMessage&&(m=e.timeoutErrorMessage),r(new h(m,g.clarifyTimeoutError?h.ETIMEDOUT:h.ECONNABORTED,e,c)),c=null},O.isStandardBrowserEnv){const l=(e.withCredentials||on(p))&&e.xsrfCookieName&&tn.read(e.xsrfCookieName);l&&s.set(e.xsrfHeaderName,l)}o===void 0&&s.setContentType(null),"setRequestHeader"in c&&a.forEach(s.toJSON(),function(m,g){c.setRequestHeader(g,m)}),a.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),i&&i!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",be(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",be(e.onUploadProgress)),(e.cancelToken||e.signal)&&(u=l=>{c&&(r(!l||l.type?new M(null,e,c):l),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(u),e.signal&&(e.signal.aborted?u():e.signal.addEventListener("abort",u)));const b=sn(p);if(b&&O.protocols.indexOf(b)===-1){r(new h("Unsupported protocol "+b+":",h.ERR_BAD_REQUEST,e));return}c.send(o||null)})},Y={http:Bt,xhr:un};a.forEach(Y,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const ge=e=>`- ${e}`,ln=e=>a.isFunction(e)||e===null||e===!1,Ve={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let s=0;s<t;s++){n=e[s];let i;if(r=n,!ln(n)&&(r=Y[(i=String(n)).toLowerCase()],r===void 0))throw new h(`Unknown adapter '${i}'`);if(r)break;o[i||"#"+s]=r}if(!r){const s=Object.entries(o).map(([u,d])=>`adapter ${u} `+(d===!1?"is not supported by the environment":"is not available in the build"));let i=t?s.length>1?`since :
`+s.map(ge).join(`
`):" "+ge(s[0]):"as no adapter specified";throw new h("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return r},adapters:Y};function X(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new M(null,e)}function Se(e){return X(e),e.headers=A.from(e.headers),e.data=G.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Ve.getAdapter(e.adapter||ue.adapter)(e).then(function(r){return X(e),r.data=G.call(e,e.transformResponse,r),r.headers=A.from(r.headers),r},function(r){return $e(r)||(X(e),r&&r.response&&(r.response.data=G.call(e,e.transformResponse,r.response),r.response.headers=A.from(r.response.headers))),Promise.reject(r)})}const Re=e=>e instanceof A?e.toJSON():e;function F(e,t){t=t||{};const n={};function r(f,c,p){return a.isPlainObject(f)&&a.isPlainObject(c)?a.merge.call({caseless:p},f,c):a.isPlainObject(c)?a.merge({},c):a.isArray(c)?c.slice():c}function o(f,c,p){if(a.isUndefined(c)){if(!a.isUndefined(f))return r(void 0,f,p)}else return r(f,c,p)}function s(f,c){if(!a.isUndefined(c))return r(void 0,c)}function i(f,c){if(a.isUndefined(c)){if(!a.isUndefined(f))return r(void 0,f)}else return r(void 0,c)}function u(f,c,p){if(p in t)return r(f,c);if(p in e)return r(void 0,f)}const d={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:u,headers:(f,c)=>o(Re(f),Re(c),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(c){const p=d[c]||o,w=p(e[c],t[c],c);a.isUndefined(w)&&p!==u||(n[c]=w)}),n}const ve="1.5.1",le={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{le[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Oe={};le.transitional=function(t,n,r){function o(s,i){return"[Axios v"+ve+"] Transitional option '"+s+"'"+i+(r?". "+r:"")}return(s,i,u)=>{if(t===!1)throw new h(o(i," has been removed"+(n?" in "+n:"")),h.ERR_DEPRECATED);return n&&!Oe[i]&&(Oe[i]=!0,console.warn(o(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(s,i,u):!0}};function dn(e,t,n){if(typeof e!="object")throw new h("options must be an object",h.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const s=r[o],i=t[s];if(i){const u=e[s],d=u===void 0||i(u,s,e);if(d!==!0)throw new h("option "+s+" must be "+d,h.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new h("Unknown option "+s,h.ERR_BAD_OPTION)}}const ee={assertOptions:dn,validators:le},x=ee.validators;class q{constructor(t){this.defaults=t,this.interceptors={request:new we,response:new we}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=F(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:s}=n;r!==void 0&&ee.assertOptions(r,{silentJSONParsing:x.transitional(x.boolean),forcedJSONParsing:x.transitional(x.boolean),clarifyTimeoutError:x.transitional(x.boolean)},!1),o!=null&&(a.isFunction(o)?n.paramsSerializer={serialize:o}:ee.assertOptions(o,{encode:x.function,serialize:x.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=s&&a.merge(s.common,s[n.method]);s&&a.forEach(["delete","get","head","post","put","patch","common"],l=>{delete s[l]}),n.headers=A.concat(i,s);const u=[];let d=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(n)===!1||(d=d&&m.synchronous,u.unshift(m.fulfilled,m.rejected))});const f=[];this.interceptors.response.forEach(function(m){f.push(m.fulfilled,m.rejected)});let c,p=0,w;if(!d){const l=[Se.bind(this),void 0];for(l.unshift.apply(l,u),l.push.apply(l,f),w=l.length,c=Promise.resolve(n);p<w;)c=c.then(l[p++],l[p++]);return c}w=u.length;let b=n;for(p=0;p<w;){const l=u[p++],m=u[p++];try{b=l(b)}catch(g){m.call(this,g);break}}try{c=Se.call(this,b)}catch(l){return Promise.reject(l)}for(p=0,w=f.length;p<w;)c=c.then(f[p++],f[p++]);return c}getUri(t){t=F(this.defaults,t);const n=We(t.baseURL,t.url);return qe(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){q.prototype[t]=function(n,r){return this.request(F(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(s,i,u){return this.request(F(u||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:i}))}}q.prototype[t]=n(),q.prototype[t+"Form"]=n(!0)});const H=q;class de{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(o=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](o);r._listeners=null}),this.promise.then=o=>{let s;const i=new Promise(u=>{r.subscribe(u),s=u}).then(o);return i.cancel=function(){r.unsubscribe(s)},i},t(function(s,i,u){r.reason||(r.reason=new M(s,i,u),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new de(function(o){t=o}),cancel:t}}}const fn=de;function pn(e){return function(n){return e.apply(null,n)}}function mn(e){return a.isObject(e)&&e.isAxiosError===!0}const te={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(te).forEach(([e,t])=>{te[t]=e});const hn=te;function Ke(e){const t=new H(e),n=Ne(H.prototype.request,t);return a.extend(n,H.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return Ke(F(e,o))},n}const y=Ke(ue);y.Axios=H;y.CanceledError=M;y.CancelToken=fn;y.isCancel=$e;y.VERSION=ve;y.toFormData=W;y.AxiosError=h;y.Cancel=y.CanceledError;y.all=function(t){return Promise.all(t)};y.spread=pn;y.isAxiosError=mn;y.mergeConfig=F;y.AxiosHeaders=A;y.formToJSON=e=>Je(a.isHTMLForm(e)?new FormData(e):e);y.getAdapter=Ve.getAdapter;y.HttpStatusCode=hn;y.default=y;const yn=y;function wn(e,t,n,r){return yn.get(r,{params:{latitude:e,longitude:t,timezone:n}}).then(({data:o})=>(console.log(o),{current:En(o),daily:bn(o),hourly:gn(o)}))}function En({current:e,daily:t}){const{is_day:n,temperature_2m:r,windspeed_10m:o,weathercode:s}=e,{temperature_2m_max:[i],temperature_2m_min:[u],apparent_temperature_max:[d],apparent_temperature_min:[f],precipitation_sum:[c]}=t;return{day:n,currentTemp:Math.round(r),highTemp:Math.round(i),lowTemp:Math.round(u),highFeelsLike:Math.round(d),lowFeelsLike:Math.round(f),windSpeed:Math.round(o),precip:Math.round(c*100)/100,iconCode:s}}function bn({daily:e}){return e.time.map((t,n)=>({timestamp:t*1e3,iconCode:e.weathercode[n],maxTemp:Math.round(e.temperature_2m_max[n])}))}function gn({hourly:e,current:t}){return e.time.map((n,r)=>({timestamp:n*1e3,iconCode:e.weathercode[r],temp:Math.round(e.temperature_2m[r]),feelsLike:Math.round(e.apparent_temperature[r]),windSpeed:Math.round(e.windspeed_10m[r]),precip:Math.round(e.precipitation[r]*100)/100})).filter(({timestamp:n})=>n>=t.time*1e3)}const Ge=new Map;N([0,1],"sun");N([2],"cloud-sun");N([3],"cloud");N([45,48],"smog");N([51,53,55,56,57,61,63,65,66,67,80,81,82],"cloud-showers-heavy");N([71,73,75,77,85,86],"snowflake");N([95,96,99],"cloud-bolt");function N(e,t){e.forEach(n=>{Ge.set(n,t)})}const Xe=new Map;P([0,1],"moon");P([2],"cloud-moon");P([3],"cloud");P([45,48],"smog");P([51,53,55,56,57,61,63,65,66,67,80,81,82],"cloud-showers-heavy");P([71,73,75,77,85,86],"snowflake");P([95,96,99],"cloud-bolt");function P(e,t){e.forEach(n=>{Xe.set(n,t)})}const Sn=document.querySelector("[data-current-icon]"),_e=document.querySelector("[data-day-section]"),Rn=document.getElementById("day-card-template"),Qe=new Intl.DateTimeFormat(void 0,{weekday:"long"}),Te=document.querySelector("[data-hour-section]"),On=document.getElementById("hour-row-template-imperial"),_n=document.getElementById("hour-row-template-metric"),Ze=new Intl.DateTimeFormat(void 0,{hour:"numeric"}),Tn=new Intl.DateTimeFormat(void 0,{hour:"numeric",hour12:!1});let ne=Ze;const C=document.querySelector("[data-toggle-switch]"),Ae=document.querySelector("[data-header-degrees]"),xe=document.querySelector("[data-header-wind]"),Ce=document.querySelector("[data-header-percip]");let re="https://api.open-meteo.com/v1/forecast?&current=temperature_2m,is_day,weathercode,windspeed_10m&hourly=temperature_2m,apparent_temperature,precipitation,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timeformat=unixtime";const An="https://api.open-meteo.com/v1/forecast?&current=temperature_2m,is_day,weathercode,windspeed_10m&hourly=temperature_2m,apparent_temperature,precipitation,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timeformat=unixtime",xn="https://api.open-meteo.com/v1/forecast?&current=temperature_2m,is_day,weathercode,windspeed_10m&hourly=temperature_2m,apparent_temperature,precipitation,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum&timeformat=unixtime";function oe({coords:e}){wn(e.latitude,e.longitude,Intl.DateTimeFormat().resolvedOptions().timeZone,re).then(Cn).catch(t=>{console.error(t),alert("Error getting weather")})}function se(){alert("Something went wrong with getting your location. Please allow us to use your location and refresh the page")}function Cn(e){let t;C.classList[0]==="toggle-f"?t=On:t=_n,console.log(e),Ln(e.current),Nn(e.current),Pn(e.daily,e.current),Fn(e.hourly,e.current,t,ne),document.body.classList.remove("blurred")}function E(e,t,{parent:n=document}={}){n.querySelector(`[data-${e}]`).textContent=t}function fe(e,t){return console.log(t),t===0?`./icons/${Xe.get(e)}.svg`:`./icons/${Ge.get(e)}.svg`}function Nn(e){Sn.src=fe(e.iconCode,e.day),E("current-temp",e.currentTemp),E("current-high",e.highTemp),E("current-low",e.lowTemp),E("current-fl-high",e.highFeelsLike),E("current-fl-low",e.lowFeelsLike),E("current-wind",e.windSpeed),E("current-precip",e.precip)}function Pn(e,t){_e.innerHTML="",e.forEach(n=>{const r=Rn.content.cloneNode(!0);E("temp",n.maxTemp,{parent:r}),E("date",Qe.format(n.timestamp),{parent:r}),r.querySelector("[data-icon]").src=fe(n.iconCode,t.day),_e.append(r)})}function Fn(e,t,n,r){Te.innerHTML="",e.slice(0,12).forEach(s=>{const i=n.content.cloneNode(!0);E("temp",s.temp,{parent:i}),E("fl-temp",s.feelsLike,{parent:i}),E("wind",s.windSpeed,{parent:i}),E("precip",s.precip,{parent:i}),E("day",Qe.format(s.timestamp),{parent:i}),E("time",r.format(s.timestamp),{parent:i}),i.querySelector("[data-icon]").src=fe(s.iconCode,t.day),Te.append(i)})}function Ln(e){e.day}navigator.geolocation.getCurrentPosition(oe,se);C.addEventListener("click",()=>{C.classList[0]==="toggle-f"?(C.classList.remove("toggle-f"),C.classList.add("toggle-c"),re=xn,navigator.geolocation.getCurrentPosition(oe,se),Ae.textContent="°C",xe.textContent="km/s",Ce.textContent="cm",ne=Tn):(C.classList.remove("toggle-c"),C.classList.add("toggle-f"),re=An,navigator.geolocation.getCurrentPosition(oe,se),Ae.textContent="°F",xe.textContent="mph",Ce.textContent="in",ne=Ze)});