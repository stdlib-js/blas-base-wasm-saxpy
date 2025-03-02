// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import A from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-inherit@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-stride2offset@v0.1.0-esm/index.mjs";import{ndarray as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-read-dataview@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/wasm-memory@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/wasm-base-arrays2ptrs@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/wasm-base-strided2object@v0.0.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-wasm-memory@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/wasm-module-wrapper@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-base64-to-uint8array@esm/index.mjs";var g=a("AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEYA2AAAGAGf31/f39/AGAIf31/f39/f38AAg8BA2VudgZtZW1vcnkCAAADBAMAAQIHTAQRX193YXNtX2NhbGxfY3RvcnMAABhfX3dhc21fYXBwbHlfZGF0YV9yZWxvY3MAAAdjX3NheHB5AAEPY19zYXhweV9uZGFycmF5AAIK8wIDAwABCy8AIAAgASACIANBASAAayIAIANsQQAgA0EATBsgBCAFIAAgBWxBACAFQQBMGxACC7wCAQJ/AkAgAEEATCABQwAAAABbcg0AIANBAUcgBkEBR3JFBEAgAEEDcSIGBEADQCAGIAhGRQRAIAUgB0ECdGoiAyABIAIgBEECdGoqAgCUIAMqAgCSOAIAIAhBAWohCCAHQQFqIQcgBEEBaiEEDAELCyAAQQRIDQILA0AgACAGTA0CIAUgB0ECdGoiAyABIAIgBEECdGoiCCoCAJQgAyoCAJI4AgAgAyABIAgqAgSUIAMqAgSSOAIEIAMgASAIKgIIlCADKgIIkjgCCCADIAEgCCoCDJQgAyoCDJI4AgwgBkEEaiEGIAdBBGohByAEQQRqIQQMAAsACwNAIAAgCEYNASAFIAdBAnRqIgkgASACIARBAnRqKgIAlCAJKgIAkjgCACAIQQFqIQggBiAHaiEHIAMgBGohBAwACwALCw==");function p(A){if(!(this instanceof p))return new p(A);if(!d(A))throw new TypeError(m("invalid argument. Must provide a WebAssembly memory instance. Value: `%s`.",A));return o.call(this,g,A,{env:{memory:A}}),this}function h(){return this instanceof h?(p.call(this,new r({initial:0})),this):new h}t(p,o),A(p.prototype,"main",(function(A,t,s,e,r,i){return this._instance.exports.c_saxpy(A,t,s,e,r,i),r})),A(p.prototype,"ndarray",(function(A,t,s,e,r,i,n,d){return this._instance.exports.c_saxpy_ndarray(A,t,s,e,r,i,n,d),i})),t(h,p),A(h.prototype,"main",(function(A,t,e,r,i,n){return this.ndarray(A,t,e,r,s(A,r),i,n,s(A,n))})),A(h.prototype,"ndarray",(function(A,t,s,r,d,o,m,a){var g,h,I;return h=(g=i(this,[n(A,s,r,d),n(A,o,m,a)]))[0],I=g[1],p.prototype.ndarray.call(this,A,t,h.ptr,h.stride,h.offset,I.ptr,I.stride,I.offset),I.copy&&e(A,this.view,I.stride*I.BYTES_PER_ELEMENT,I.ptr,o,m,a,!0),o}));var I=new h;I.initializeSync(),A(I,"Module",p);export{p as Module,I as default};
//# sourceMappingURL=index.mjs.map
