"use strict";var l=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var m=l(function(K,x){
var T=require("path").resolve,B=require('@stdlib/fs-read-wasm/dist').sync,V=B(T(__dirname,"..","src","main.wasm"));x.exports=V
});var q=l(function(Q,_){
var g=require('@stdlib/assert-is-wasm-memory/dist'),w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=require('@stdlib/utils-inherit/dist'),M=require('@stdlib/wasm-module-wrapper/dist'),z=require('@stdlib/error-tools-fmtprodmsg/dist'),D=m();function o(e){if(!(this instanceof o))return new o(e);if(!g(e))throw new TypeError(z('26vH0',e));return M.call(this,D,e,{env:{memory:e}}),this}j(o,M);w(o.prototype,"main",function(r,i,u,a,s,t){return this._instance.exports.c_saxpy(r,i,u,a,s,t),s});w(o.prototype,"ndarray",function(r,i,u,a,s,t,v,c){return this._instance.exports.c_saxpy_ndarray(r,i,u,a,s,t,v,c),t});_.exports=o
});var A=l(function(U,W){
var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),L=require('@stdlib/utils-inherit/dist'),b=require('@stdlib/strided-base-stride2offset/dist'),P=require('@stdlib/strided-base-read-dataview/dist').ndarray,k=require('@stdlib/wasm-memory/dist'),C=require('@stdlib/wasm-base-arrays2ptrs/dist'),E=require('@stdlib/wasm-base-strided2object/dist'),f=q();function p(){return this instanceof p?(f.call(this,new k({initial:0})),this):new p}L(p,f);R(p.prototype,"main",function(r,i,u,a,s,t){return this.ndarray(r,i,u,a,b(r,a),s,t,b(r,t))});R(p.prototype,"ndarray",function(r,i,u,a,s,t,v,c){var d,y,n;return d=C(this,[E(r,u,a,s),E(r,t,v,c)]),y=d[0],n=d[1],f.prototype.ndarray.call(this,r,i,y.ptr,y.stride,y.offset,n.ptr,n.stride,n.offset),n.copy&&P(r,this.view,n.stride*n.BYTES_PER_ELEMENT,n.ptr,t,v,c,!0),t});W.exports=p
});var S=l(function(Z,O){
var F=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),G=A(),H=q(),h=new G;h.initializeSync();F(h,"Module",H.bind(null));O.exports=h
});var I=S();module.exports=I;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
