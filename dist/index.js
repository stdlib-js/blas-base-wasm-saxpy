"use strict";var l=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var m=l(function(K,x){
var T=require("path").resolve,B=require('@stdlib/fs-read-wasm/dist').sync,V=B(T(__dirname,"..","src","main.wasm"));x.exports=V
});var q=l(function(Q,_){
var g=require('@stdlib/assert-is-wasm-memory/dist'),w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=require('@stdlib/utils-inherit/dist'),M=require('@stdlib/wasm-module-wrapper/dist'),z=require('@stdlib/error-tools-fmtprodmsg/dist'),D=m();function o(e){if(!(this instanceof o))return new o(e);if(!g(e))throw new TypeError(z('26vH0',e));return M.call(this,D,e,{env:{memory:e}}),this}j(o,M);w(o.prototype,"main",function(r,n,u,i,a,t){return this._instance.exports.c_saxpy(r,n,u,i,a,t),a});w(o.prototype,"ndarray",function(r,n,u,i,a,t,v,c){return this._instance.exports.c_saxpy_ndarray(r,n,u,i,a,t,v,c),t});_.exports=o
});var A=l(function(U,W){
var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),L=require('@stdlib/utils-inherit/dist'),b=require('@stdlib/strided-base-stride2offset/dist'),P=require('@stdlib/strided-base-read-dataview/dist').ndarray,k=require('@stdlib/wasm-memory/dist'),C=require('@stdlib/wasm-base-arrays2ptrs/dist'),E=require('@stdlib/wasm-base-strided2object/dist'),f=q();function p(){return this instanceof p?(f.call(this,new k({initial:0})),this):new p}L(p,f);R(p.prototype,"main",function(r,n,u,i,a,t){return this.ndarray(r,n,u,i,b(r,i),a,t,b(r,t))});R(p.prototype,"ndarray",function(r,n,u,i,a,t,v,c){var d,y,s;return d=C(this,[E(r,u,i,a),E(r,t,v,c)]),y=d[0],s=d[1],f.prototype.ndarray.call(this,r,n,y.ptr,y.stride,y.offset,s.ptr,s.stride,s.offset),s.copy&&P(r,this.view,s.stride*s.BYTES_PER_ELEMENT,s.ptr,t,v,c,!0),t});W.exports=p
});var S=l(function(Z,O){
var F=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),G=A(),H=q(),h=new G;h.initializeSync();F(h,"Module",H.bind(null));O.exports=h
});var I=S();module.exports=I;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
