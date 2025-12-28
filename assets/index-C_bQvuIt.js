var Fm=Object.defineProperty;var Um=(i,t,e)=>t in i?Fm(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var Ee=(i,t,e)=>Um(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function hu(i){const t=Object.create(null);for(const e of i.split(","))t[e]=1;return e=>e in t}const Me={},lr=[],oi=()=>{},vf=()=>!1,Na=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&(i.charCodeAt(2)>122||i.charCodeAt(2)<97),du=i=>i.startsWith("onUpdate:"),tn=Object.assign,fu=(i,t)=>{const e=i.indexOf(t);e>-1&&i.splice(e,1)},Om=Object.prototype.hasOwnProperty,pe=(i,t)=>Om.call(i,t),Jt=Array.isArray,cr=i=>xo(i)==="[object Map]",Fa=i=>xo(i)==="[object Set]",oh=i=>xo(i)==="[object Date]",ee=i=>typeof i=="function",ze=i=>typeof i=="string",ci=i=>typeof i=="symbol",Ae=i=>i!==null&&typeof i=="object",xf=i=>(Ae(i)||ee(i))&&ee(i.then)&&ee(i.catch),yf=Object.prototype.toString,xo=i=>yf.call(i),Bm=i=>xo(i).slice(8,-1),Sf=i=>xo(i)==="[object Object]",pu=i=>ze(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,$r=hu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ua=i=>{const t=Object.create(null);return e=>t[e]||(t[e]=i(e))},zm=/-\w/g,ss=Ua(i=>i.replace(zm,t=>t.slice(1).toUpperCase())),km=/\B([A-Z])/g,Fs=Ua(i=>i.replace(km,"-$1").toLowerCase()),Mf=Ua(i=>i.charAt(0).toUpperCase()+i.slice(1)),Qa=Ua(i=>i?`on${Mf(i)}`:""),is=(i,t)=>!Object.is(i,t),aa=(i,...t)=>{for(let e=0;e<i.length;e++)i[e](...t)},bf=(i,t,e,n=!1)=>{Object.defineProperty(i,t,{configurable:!0,enumerable:!1,writable:n,value:e})},Oa=i=>{const t=parseFloat(i);return isNaN(t)?i:t};let ah;const Ba=()=>ah||(ah=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function $e(i){if(Jt(i)){const t={};for(let e=0;e<i.length;e++){const n=i[e],s=ze(n)?Wm(n):$e(n);if(s)for(const r in s)t[r]=s[r]}return t}else if(ze(i)||Ae(i))return i}const Vm=/;(?![^(]*\))/g,Hm=/:([^]+)/,Gm=/\/\*[^]*?\*\//g;function Wm(i){const t={};return i.replace(Gm,"").split(Vm).forEach(e=>{if(e){const n=e.split(Hm);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function Wn(i){let t="";if(ze(i))t=i;else if(Jt(i))for(let e=0;e<i.length;e++){const n=Wn(i[e]);n&&(t+=n+" ")}else if(Ae(i))for(const e in i)i[e]&&(t+=e+" ");return t.trim()}const qm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Xm=hu(qm);function wf(i){return!!i||i===""}function jm(i,t){if(i.length!==t.length)return!1;let e=!0;for(let n=0;e&&n<i.length;n++)e=za(i[n],t[n]);return e}function za(i,t){if(i===t)return!0;let e=oh(i),n=oh(t);if(e||n)return e&&n?i.getTime()===t.getTime():!1;if(e=ci(i),n=ci(t),e||n)return i===t;if(e=Jt(i),n=Jt(t),e||n)return e&&n?jm(i,t):!1;if(e=Ae(i),n=Ae(t),e||n){if(!e||!n)return!1;const s=Object.keys(i).length,r=Object.keys(t).length;if(s!==r)return!1;for(const o in i){const a=i.hasOwnProperty(o),l=t.hasOwnProperty(o);if(a&&!l||!a&&l||!za(i[o],t[o]))return!1}}return String(i)===String(t)}function Ym(i,t){return i.findIndex(e=>za(e,t))}const Ef=i=>!!(i&&i.__v_isRef===!0),me=i=>ze(i)?i:i==null?"":Jt(i)||Ae(i)&&(i.toString===yf||!ee(i.toString))?Ef(i)?me(i.value):JSON.stringify(i,Tf,2):String(i),Tf=(i,t)=>Ef(t)?Tf(i,t.value):cr(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[n,s],r)=>(e[tl(n,r)+" =>"]=s,e),{})}:Fa(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>tl(e))}:ci(t)?tl(t):Ae(t)&&!Jt(t)&&!Sf(t)?String(t):t,tl=(i,t="")=>{var e;return ci(i)?`Symbol(${(e=i.description)!=null?e:t})`:i};/**
* @vue/reactivity v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let pn;class $m{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=pn,!t&&pn&&(this.index=(pn.scopes||(pn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=pn;try{return pn=this,t()}finally{pn=e}}}on(){++this._on===1&&(this.prevScope=pn,pn=this)}off(){this._on>0&&--this._on===0&&(pn=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let e,n;for(e=0,n=this.effects.length;e<n;e++)this.effects[e].stop();for(this.effects.length=0,e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Km(){return pn}let Te;const el=new WeakSet;class Af{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,pn&&pn.active&&pn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,el.has(this)&&(el.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Rf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,lh(this),Pf(this);const t=Te,e=jn;Te=this,jn=!0;try{return this.fn()}finally{If(this),Te=t,jn=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)_u(t);this.deps=this.depsTail=void 0,lh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?el.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ql(this)&&this.run()}get dirty(){return Ql(this)}}let Cf=0,Kr,Zr;function Rf(i,t=!1){if(i.flags|=8,t){i.next=Zr,Zr=i;return}i.next=Kr,Kr=i}function mu(){Cf++}function gu(){if(--Cf>0)return;if(Zr){let t=Zr;for(Zr=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let i;for(;Kr;){let t=Kr;for(Kr=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(n){i||(i=n)}t=e}}if(i)throw i}function Pf(i){for(let t=i.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function If(i){let t,e=i.depsTail,n=e;for(;n;){const s=n.prevDep;n.version===-1?(n===e&&(e=s),_u(n),Zm(n)):t=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=s}i.deps=t,i.depsTail=e}function Ql(i){for(let t=i.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Lf(t.dep.computed)||t.dep.version!==t.version))return!0;return!!i._dirty}function Lf(i){if(i.flags&4&&!(i.flags&16)||(i.flags&=-17,i.globalVersion===ro)||(i.globalVersion=ro,!i.isSSR&&i.flags&128&&(!i.deps&&!i._dirty||!Ql(i))))return;i.flags|=2;const t=i.dep,e=Te,n=jn;Te=i,jn=!0;try{Pf(i);const s=i.fn(i._value);(t.version===0||is(s,i._value))&&(i.flags|=128,i._value=s,t.version++)}catch(s){throw t.version++,s}finally{Te=e,jn=n,If(i),i.flags&=-3}}function _u(i,t=!1){const{dep:e,prevSub:n,nextSub:s}=i;if(n&&(n.nextSub=s,i.prevSub=void 0),s&&(s.prevSub=n,i.nextSub=void 0),e.subs===i&&(e.subs=n,!n&&e.computed)){e.computed.flags&=-5;for(let r=e.computed.deps;r;r=r.nextDep)_u(r,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function Zm(i){const{prevDep:t,nextDep:e}=i;t&&(t.nextDep=e,i.prevDep=void 0),e&&(e.prevDep=t,i.nextDep=void 0)}let jn=!0;const Df=[];function Bi(){Df.push(jn),jn=!1}function zi(){const i=Df.pop();jn=i===void 0?!0:i}function lh(i){const{cleanup:t}=i;if(i.cleanup=void 0,t){const e=Te;Te=void 0;try{t()}finally{Te=e}}}let ro=0;class Jm{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class vu{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!Te||!jn||Te===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==Te)e=this.activeLink=new Jm(Te,this),Te.deps?(e.prevDep=Te.depsTail,Te.depsTail.nextDep=e,Te.depsTail=e):Te.deps=Te.depsTail=e,Nf(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const n=e.nextDep;n.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=n),e.prevDep=Te.depsTail,e.nextDep=void 0,Te.depsTail.nextDep=e,Te.depsTail=e,Te.deps===e&&(Te.deps=n)}return e}trigger(t){this.version++,ro++,this.notify(t)}notify(t){mu();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{gu()}}}function Nf(i){if(i.dep.sc++,i.sub.flags&4){const t=i.dep.computed;if(t&&!i.dep.subs){t.flags|=20;for(let n=t.deps;n;n=n.nextDep)Nf(n)}const e=i.dep.subs;e!==i&&(i.prevSub=e,e&&(e.nextSub=i)),i.dep.subs=i}}const tc=new WeakMap,Cs=Symbol(""),ec=Symbol(""),oo=Symbol("");function Ye(i,t,e){if(jn&&Te){let n=tc.get(i);n||tc.set(i,n=new Map);let s=n.get(e);s||(n.set(e,s=new vu),s.map=n,s.key=e),s.track()}}function Ri(i,t,e,n,s,r){const o=tc.get(i);if(!o){ro++;return}const a=l=>{l&&l.trigger()};if(mu(),t==="clear")o.forEach(a);else{const l=Jt(i),c=l&&pu(e);if(l&&e==="length"){const u=Number(n);o.forEach((d,h)=>{(h==="length"||h===oo||!ci(h)&&h>=u)&&a(d)})}else switch((e!==void 0||o.has(void 0))&&a(o.get(e)),c&&a(o.get(oo)),t){case"add":l?c&&a(o.get("length")):(a(o.get(Cs)),cr(i)&&a(o.get(ec)));break;case"delete":l||(a(o.get(Cs)),cr(i)&&a(o.get(ec)));break;case"set":cr(i)&&a(o.get(Cs));break}}gu()}function zs(i){const t=fe(i);return t===i?t:(Ye(t,"iterate",oo),Fn(i)?t:t.map(Yn))}function ka(i){return Ye(i=fe(i),"iterate",oo),i}function Ji(i,t){return ki(i)?Rs(i)?gr(Yn(t)):gr(t):Yn(t)}const Qm={__proto__:null,[Symbol.iterator](){return nl(this,Symbol.iterator,i=>Ji(this,i))},concat(...i){return zs(this).concat(...i.map(t=>Jt(t)?zs(t):t))},entries(){return nl(this,"entries",i=>(i[1]=Ji(this,i[1]),i))},every(i,t){return gi(this,"every",i,t,void 0,arguments)},filter(i,t){return gi(this,"filter",i,t,e=>e.map(n=>Ji(this,n)),arguments)},find(i,t){return gi(this,"find",i,t,e=>Ji(this,e),arguments)},findIndex(i,t){return gi(this,"findIndex",i,t,void 0,arguments)},findLast(i,t){return gi(this,"findLast",i,t,e=>Ji(this,e),arguments)},findLastIndex(i,t){return gi(this,"findLastIndex",i,t,void 0,arguments)},forEach(i,t){return gi(this,"forEach",i,t,void 0,arguments)},includes(...i){return il(this,"includes",i)},indexOf(...i){return il(this,"indexOf",i)},join(i){return zs(this).join(i)},lastIndexOf(...i){return il(this,"lastIndexOf",i)},map(i,t){return gi(this,"map",i,t,void 0,arguments)},pop(){return Pr(this,"pop")},push(...i){return Pr(this,"push",i)},reduce(i,...t){return ch(this,"reduce",i,t)},reduceRight(i,...t){return ch(this,"reduceRight",i,t)},shift(){return Pr(this,"shift")},some(i,t){return gi(this,"some",i,t,void 0,arguments)},splice(...i){return Pr(this,"splice",i)},toReversed(){return zs(this).toReversed()},toSorted(i){return zs(this).toSorted(i)},toSpliced(...i){return zs(this).toSpliced(...i)},unshift(...i){return Pr(this,"unshift",i)},values(){return nl(this,"values",i=>Ji(this,i))}};function nl(i,t,e){const n=ka(i),s=n[t]();return n!==i&&!Fn(i)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=e(r.value)),r}),s}const tg=Array.prototype;function gi(i,t,e,n,s,r){const o=ka(i),a=o!==i&&!Fn(i),l=o[t];if(l!==tg[t]){const d=l.apply(i,r);return a?Yn(d):d}let c=e;o!==i&&(a?c=function(d,h){return e.call(this,Ji(i,d),h,i)}:e.length>2&&(c=function(d,h){return e.call(this,d,h,i)}));const u=l.call(o,c,n);return a&&s?s(u):u}function ch(i,t,e,n){const s=ka(i);let r=e;return s!==i&&(Fn(i)?e.length>3&&(r=function(o,a,l){return e.call(this,o,a,l,i)}):r=function(o,a,l){return e.call(this,o,Ji(i,a),l,i)}),s[t](r,...n)}function il(i,t,e){const n=fe(i);Ye(n,"iterate",oo);const s=n[t](...e);return(s===-1||s===!1)&&Su(e[0])?(e[0]=fe(e[0]),n[t](...e)):s}function Pr(i,t,e=[]){Bi(),mu();const n=fe(i)[t].apply(i,e);return gu(),zi(),n}const eg=hu("__proto__,__v_isRef,__isVue"),Ff=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(ci));function ng(i){ci(i)||(i=String(i));const t=fe(this);return Ye(t,"has",i),t.hasOwnProperty(i)}class Uf{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,n){if(e==="__v_skip")return t.__v_skip;const s=this._isReadonly,r=this._isShallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return r;if(e==="__v_raw")return n===(s?r?dg:kf:r?zf:Bf).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(n)?t:void 0;const o=Jt(t);if(!s){let l;if(o&&(l=Qm[e]))return l;if(e==="hasOwnProperty")return ng}const a=Reflect.get(t,e,Ze(t)?t:n);if((ci(e)?Ff.has(e):eg(e))||(s||Ye(t,"get",e),r))return a;if(Ze(a)){const l=o&&pu(e)?a:a.value;return s&&Ae(l)?ic(l):l}return Ae(a)?s?ic(a):Us(a):a}}class Of extends Uf{constructor(t=!1){super(!1,t)}set(t,e,n,s){let r=t[e];const o=Jt(t)&&pu(e);if(!this._isShallow){const c=ki(r);if(!Fn(n)&&!ki(n)&&(r=fe(r),n=fe(n)),!o&&Ze(r)&&!Ze(n))return c||(r.value=n),!0}const a=o?Number(e)<t.length:pe(t,e),l=Reflect.set(t,e,n,Ze(t)?t:s);return t===fe(s)&&(a?is(n,r)&&Ri(t,"set",e,n):Ri(t,"add",e,n)),l}deleteProperty(t,e){const n=pe(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&Ri(t,"delete",e,void 0),s}has(t,e){const n=Reflect.has(t,e);return(!ci(e)||!Ff.has(e))&&Ye(t,"has",e),n}ownKeys(t){return Ye(t,"iterate",Jt(t)?"length":Cs),Reflect.ownKeys(t)}}class ig extends Uf{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const sg=new Of,rg=new ig,og=new Of(!0);const nc=i=>i,Ao=i=>Reflect.getPrototypeOf(i);function ag(i,t,e){return function(...n){const s=this.__v_raw,r=fe(s),o=cr(r),a=i==="entries"||i===Symbol.iterator&&o,l=i==="keys"&&o,c=s[i](...n),u=e?nc:t?gr:Yn;return!t&&Ye(r,"iterate",l?ec:Cs),{next(){const{value:d,done:h}=c.next();return h?{value:d,done:h}:{value:a?[u(d[0]),u(d[1])]:u(d),done:h}},[Symbol.iterator](){return this}}}}function Co(i){return function(...t){return i==="delete"?!1:i==="clear"?void 0:this}}function lg(i,t){const e={get(s){const r=this.__v_raw,o=fe(r),a=fe(s);i||(is(s,a)&&Ye(o,"get",s),Ye(o,"get",a));const{has:l}=Ao(o),c=t?nc:i?gr:Yn;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!i&&Ye(fe(s),"iterate",Cs),s.size},has(s){const r=this.__v_raw,o=fe(r),a=fe(s);return i||(is(s,a)&&Ye(o,"has",s),Ye(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=fe(a),c=t?nc:i?gr:Yn;return!i&&Ye(l,"iterate",Cs),a.forEach((u,d)=>s.call(r,c(u),c(d),o))}};return tn(e,i?{add:Co("add"),set:Co("set"),delete:Co("delete"),clear:Co("clear")}:{add(s){!t&&!Fn(s)&&!ki(s)&&(s=fe(s));const r=fe(this);return Ao(r).has.call(r,s)||(r.add(s),Ri(r,"add",s,s)),this},set(s,r){!t&&!Fn(r)&&!ki(r)&&(r=fe(r));const o=fe(this),{has:a,get:l}=Ao(o);let c=a.call(o,s);c||(s=fe(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?is(r,u)&&Ri(o,"set",s,r):Ri(o,"add",s,r),this},delete(s){const r=fe(this),{has:o,get:a}=Ao(r);let l=o.call(r,s);l||(s=fe(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&Ri(r,"delete",s,void 0),c},clear(){const s=fe(this),r=s.size!==0,o=s.clear();return r&&Ri(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=ag(s,i,t)}),e}function xu(i,t){const e=lg(i,t);return(n,s,r)=>s==="__v_isReactive"?!i:s==="__v_isReadonly"?i:s==="__v_raw"?n:Reflect.get(pe(e,s)&&s in n?e:n,s,r)}const cg={get:xu(!1,!1)},ug={get:xu(!1,!0)},hg={get:xu(!0,!1)};const Bf=new WeakMap,zf=new WeakMap,kf=new WeakMap,dg=new WeakMap;function fg(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function pg(i){return i.__v_skip||!Object.isExtensible(i)?0:fg(Bm(i))}function Us(i){return ki(i)?i:yu(i,!1,sg,cg,Bf)}function mg(i){return yu(i,!1,og,ug,zf)}function ic(i){return yu(i,!0,rg,hg,kf)}function yu(i,t,e,n,s){if(!Ae(i)||i.__v_raw&&!(t&&i.__v_isReactive))return i;const r=pg(i);if(r===0)return i;const o=s.get(i);if(o)return o;const a=new Proxy(i,r===2?n:e);return s.set(i,a),a}function Rs(i){return ki(i)?Rs(i.__v_raw):!!(i&&i.__v_isReactive)}function ki(i){return!!(i&&i.__v_isReadonly)}function Fn(i){return!!(i&&i.__v_isShallow)}function Su(i){return i?!!i.__v_raw:!1}function fe(i){const t=i&&i.__v_raw;return t?fe(t):i}function gg(i){return!pe(i,"__v_skip")&&Object.isExtensible(i)&&bf(i,"__v_skip",!0),i}const Yn=i=>Ae(i)?Us(i):i,gr=i=>Ae(i)?ic(i):i;function Ze(i){return i?i.__v_isRef===!0:!1}function te(i){return _g(i,!1)}function _g(i,t){return Ze(i)?i:new vg(i,t)}class vg{constructor(t,e){this.dep=new vu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:fe(t),this._value=e?t:Yn(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,n=this.__v_isShallow||Fn(t)||ki(t);t=n?t:fe(t),is(t,e)&&(this._rawValue=t,this._value=n?t:Yn(t),this.dep.trigger())}}function Wt(i){return Ze(i)?i.value:i}const xg={get:(i,t,e)=>t==="__v_raw"?i:Wt(Reflect.get(i,t,e)),set:(i,t,e,n)=>{const s=i[t];return Ze(s)&&!Ze(e)?(s.value=e,!0):Reflect.set(i,t,e,n)}};function Vf(i){return Rs(i)?i:new Proxy(i,xg)}class yg{constructor(t,e,n){this.fn=t,this.setter=e,this._value=void 0,this.dep=new vu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ro-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&Te!==this)return Rf(this,!0),!0}get value(){const t=this.dep.track();return Lf(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Sg(i,t,e=!1){let n,s;return ee(i)?n=i:(n=i.get,s=i.set),new yg(n,s,e)}const Ro={},xa=new WeakMap;let Ss;function Mg(i,t=!1,e=Ss){if(e){let n=xa.get(e);n||xa.set(e,n=[]),n.push(i)}}function bg(i,t,e=Me){const{immediate:n,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=e,c=v=>s?v:Fn(v)||s===!1||s===0?Pi(v,1):Pi(v);let u,d,h,f,p=!1,_=!1;if(Ze(i)?(d=()=>i.value,p=Fn(i)):Rs(i)?(d=()=>c(i),p=!0):Jt(i)?(_=!0,p=i.some(v=>Rs(v)||Fn(v)),d=()=>i.map(v=>{if(Ze(v))return v.value;if(Rs(v))return c(v);if(ee(v))return l?l(v,2):v()})):ee(i)?t?d=l?()=>l(i,2):i:d=()=>{if(h){Bi();try{h()}finally{zi()}}const v=Ss;Ss=u;try{return l?l(i,3,[f]):i(f)}finally{Ss=v}}:d=oi,t&&s){const v=d,M=s===!0?1/0:s;d=()=>Pi(v(),M)}const m=Km(),g=()=>{u.stop(),m&&m.active&&fu(m.effects,u)};if(r&&t){const v=t;t=(...M)=>{v(...M),g()}}let x=_?new Array(i.length).fill(Ro):Ro;const S=v=>{if(!(!(u.flags&1)||!u.dirty&&!v))if(t){const M=u.run();if(s||p||(_?M.some((w,A)=>is(w,x[A])):is(M,x))){h&&h();const w=Ss;Ss=u;try{const A=[M,x===Ro?void 0:_&&x[0]===Ro?[]:x,f];x=M,l?l(t,3,A):t(...A)}finally{Ss=w}}}else u.run()};return a&&a(S),u=new Af(d),u.scheduler=o?()=>o(S,!1):S,f=v=>Mg(v,!1,u),h=u.onStop=()=>{const v=xa.get(u);if(v){if(l)l(v,4);else for(const M of v)M();xa.delete(u)}},t?n?S(!0):x=u.run():o?o(S.bind(null,!0),!0):u.run(),g.pause=u.pause.bind(u),g.resume=u.resume.bind(u),g.stop=g,g}function Pi(i,t=1/0,e){if(t<=0||!Ae(i)||i.__v_skip||(e=e||new Map,(e.get(i)||0)>=t))return i;if(e.set(i,t),t--,Ze(i))Pi(i.value,t,e);else if(Jt(i))for(let n=0;n<i.length;n++)Pi(i[n],t,e);else if(Fa(i)||cr(i))i.forEach(n=>{Pi(n,t,e)});else if(Sf(i)){for(const n in i)Pi(i[n],t,e);for(const n of Object.getOwnPropertySymbols(i))Object.prototype.propertyIsEnumerable.call(i,n)&&Pi(i[n],t,e)}return i}/**
* @vue/runtime-core v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function yo(i,t,e,n){try{return n?i(...n):i()}catch(s){Va(s,t,e)}}function ui(i,t,e,n){if(ee(i)){const s=yo(i,t,e,n);return s&&xf(s)&&s.catch(r=>{Va(r,t,e)}),s}if(Jt(i)){const s=[];for(let r=0;r<i.length;r++)s.push(ui(i[r],t,e,n));return s}}function Va(i,t,e,n=!0){const s=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||Me;if(t){let a=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](i,l,c)===!1)return}a=a.parent}if(r){Bi(),yo(r,null,10,[i,l,c]),zi();return}}wg(i,e,s,n,o)}function wg(i,t,e,n=!0,s=!1){if(s)throw i;console.error(i)}const on=[];let ei=-1;const ur=[];let Qi=null,sr=0;const Hf=Promise.resolve();let ya=null;function Gf(i){const t=ya||Hf;return i?t.then(this?i.bind(this):i):t}function Eg(i){let t=ei+1,e=on.length;for(;t<e;){const n=t+e>>>1,s=on[n],r=ao(s);r<i||r===i&&s.flags&2?t=n+1:e=n}return t}function Mu(i){if(!(i.flags&1)){const t=ao(i),e=on[on.length-1];!e||!(i.flags&2)&&t>=ao(e)?on.push(i):on.splice(Eg(t),0,i),i.flags|=1,Wf()}}function Wf(){ya||(ya=Hf.then(Xf))}function Tg(i){Jt(i)?ur.push(...i):Qi&&i.id===-1?Qi.splice(sr+1,0,i):i.flags&1||(ur.push(i),i.flags|=1),Wf()}function uh(i,t,e=ei+1){for(;e<on.length;e++){const n=on[e];if(n&&n.flags&2){if(i&&n.id!==i.uid)continue;on.splice(e,1),e--,n.flags&4&&(n.flags&=-2),n(),n.flags&4||(n.flags&=-2)}}}function qf(i){if(ur.length){const t=[...new Set(ur)].sort((e,n)=>ao(e)-ao(n));if(ur.length=0,Qi){Qi.push(...t);return}for(Qi=t,sr=0;sr<Qi.length;sr++){const e=Qi[sr];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}Qi=null,sr=0}}const ao=i=>i.id==null?i.flags&2?-1:1/0:i.id;function Xf(i){try{for(ei=0;ei<on.length;ei++){const t=on[ei];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),yo(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;ei<on.length;ei++){const t=on[ei];t&&(t.flags&=-2)}ei=-1,on.length=0,qf(),ya=null,(on.length||ur.length)&&Xf()}}let Nn=null,jf=null;function Sa(i){const t=Nn;return Nn=i,jf=i&&i.type.__scopeId||null,t}function Ag(i,t=Nn,e){if(!t||i._n)return i;const n=(...s)=>{n._d&&yh(-1);const r=Sa(t);let o;try{o=i(...s)}finally{Sa(r),n._d&&yh(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function Ma(i,t){if(Nn===null)return i;const e=qa(Nn),n=i.dirs||(i.dirs=[]);for(let s=0;s<t.length;s++){let[r,o,a,l=Me]=t[s];r&&(ee(r)&&(r={mounted:r,updated:r}),r.deep&&Pi(o),n.push({dir:r,instance:e,value:o,oldValue:void 0,arg:a,modifiers:l}))}return i}function ds(i,t,e,n){const s=i.dirs,r=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[n];l&&(Bi(),ui(l,e,8,[i.el,a,i,t]),zi())}}function Cg(i,t){if(an){let e=an.provides;const n=an.parent&&an.parent.provides;n===e&&(e=an.provides=Object.create(n)),e[i]=t}}function la(i,t,e=!1){const n=T0();if(n||hr){let s=hr?hr._context.provides:n?n.parent==null||n.ce?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:void 0;if(s&&i in s)return s[i];if(arguments.length>1)return e&&ee(t)?t.call(n&&n.proxy):t}}const Rg=Symbol.for("v-scx"),Pg=()=>la(Rg);function Ni(i,t,e){return Yf(i,t,e)}function Yf(i,t,e=Me){const{immediate:n,deep:s,flush:r,once:o}=e,a=tn({},e),l=t&&n||!t&&r!=="post";let c;if(co){if(r==="sync"){const f=Pg();c=f.__watcherHandles||(f.__watcherHandles=[])}else if(!l){const f=()=>{};return f.stop=oi,f.resume=oi,f.pause=oi,f}}const u=an;a.call=(f,p,_)=>ui(f,u,p,_);let d=!1;r==="post"?a.scheduler=f=>{bn(f,u&&u.suspense)}:r!=="sync"&&(d=!0,a.scheduler=(f,p)=>{p?f():Mu(f)}),a.augmentJob=f=>{t&&(f.flags|=4),d&&(f.flags|=2,u&&(f.id=u.uid,f.i=u))};const h=bg(i,t,a);return co&&(c?c.push(h):l&&h()),h}function Ig(i,t,e){const n=this.proxy,s=ze(i)?i.includes(".")?$f(n,i):()=>n[i]:i.bind(n,n);let r;ee(t)?r=t:(r=t.handler,e=t);const o=So(this),a=Yf(s,r.bind(n),e);return o(),a}function $f(i,t){const e=t.split(".");return()=>{let n=i;for(let s=0;s<e.length&&n;s++)n=n[e[s]];return n}}const Lg=Symbol("_vte"),Dg=i=>i.__isTeleport,Ng=Symbol("_leaveCb");function bu(i,t){i.shapeFlag&6&&i.component?(i.transition=t,bu(i.component.subTree,t)):i.shapeFlag&128?(i.ssContent.transition=t.clone(i.ssContent),i.ssFallback.transition=t.clone(i.ssFallback)):i.transition=t}function as(i,t){return ee(i)?tn({name:i.name},t,{setup:i}):i}function Kf(i){i.ids=[i.ids[0]+i.ids[2]+++"-",0,0]}const ba=new WeakMap;function Jr(i,t,e,n,s=!1){if(Jt(i)){i.forEach((p,_)=>Jr(p,t&&(Jt(t)?t[_]:t),e,n,s));return}if(Qr(n)&&!s){n.shapeFlag&512&&n.type.__asyncResolved&&n.component.subTree.component&&Jr(i,t,e,n.component.subTree);return}const r=n.shapeFlag&4?qa(n.component):n.el,o=s?null:r,{i:a,r:l}=i,c=t&&t.r,u=a.refs===Me?a.refs={}:a.refs,d=a.setupState,h=fe(d),f=d===Me?vf:p=>pe(h,p);if(c!=null&&c!==l){if(hh(t),ze(c))u[c]=null,f(c)&&(d[c]=null);else if(Ze(c)){c.value=null;const p=t;p.k&&(u[p.k]=null)}}if(ee(l))yo(l,a,12,[o,u]);else{const p=ze(l),_=Ze(l);if(p||_){const m=()=>{if(i.f){const g=p?f(l)?d[l]:u[l]:l.value;if(s)Jt(g)&&fu(g,r);else if(Jt(g))g.includes(r)||g.push(r);else if(p)u[l]=[r],f(l)&&(d[l]=u[l]);else{const x=[r];l.value=x,i.k&&(u[i.k]=x)}}else p?(u[l]=o,f(l)&&(d[l]=o)):_&&(l.value=o,i.k&&(u[i.k]=o))};if(o){const g=()=>{m(),ba.delete(i)};g.id=-1,ba.set(i,g),bn(g,e)}else hh(i),m()}}}function hh(i){const t=ba.get(i);t&&(t.flags|=8,ba.delete(i))}Ba().requestIdleCallback;Ba().cancelIdleCallback;const Qr=i=>!!i.type.__asyncLoader,Zf=i=>i.type.__isKeepAlive;function Fg(i,t){Jf(i,"a",t)}function Ug(i,t){Jf(i,"da",t)}function Jf(i,t,e=an){const n=i.__wdc||(i.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return i()});if(Ha(t,n,e),e){let s=e.parent;for(;s&&s.parent;)Zf(s.parent.vnode)&&Og(n,t,e,s),s=s.parent}}function Og(i,t,e,n){const s=Ha(t,i,n,!0);ls(()=>{fu(n[t],s)},e)}function Ha(i,t,e=an,n=!1){if(e){const s=e[i]||(e[i]=[]),r=t.__weh||(t.__weh=(...o)=>{Bi();const a=So(e),l=ui(t,e,i,o);return a(),zi(),l});return n?s.unshift(r):s.push(r),r}}const Gi=i=>(t,e=an)=>{(!co||i==="sp")&&Ha(i,(...n)=>t(...n),e)},Bg=Gi("bm"),Er=Gi("m"),zg=Gi("bu"),kg=Gi("u"),Vg=Gi("bum"),ls=Gi("um"),Hg=Gi("sp"),Gg=Gi("rtg"),Wg=Gi("rtc");function qg(i,t=an){Ha("ec",i,t)}const Xg=Symbol.for("v-ndc");function gn(i,t,e,n){let s;const r=e,o=Jt(i);if(o||ze(i)){const a=o&&Rs(i);let l=!1,c=!1;a&&(l=!Fn(i),c=ki(i),i=ka(i)),s=new Array(i.length);for(let u=0,d=i.length;u<d;u++)s[u]=t(l?c?gr(Yn(i[u])):Yn(i[u]):i[u],u,void 0,r)}else if(typeof i=="number"){s=new Array(i);for(let a=0;a<i;a++)s[a]=t(a+1,a,void 0,r)}else if(Ae(i))if(i[Symbol.iterator])s=Array.from(i,(a,l)=>t(a,l,void 0,r));else{const a=Object.keys(i);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=t(i[u],u,l,r)}}else s=[];return s}const sc=i=>i?xp(i)?qa(i):sc(i.parent):null,to=tn(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>sc(i.parent),$root:i=>sc(i.root),$host:i=>i.ce,$emit:i=>i.emit,$options:i=>tp(i),$forceUpdate:i=>i.f||(i.f=()=>{Mu(i.update)}),$nextTick:i=>i.n||(i.n=Gf.bind(i.proxy)),$watch:i=>Ig.bind(i)}),sl=(i,t)=>i!==Me&&!i.__isScriptSetup&&pe(i,t),jg={get({_:i},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:n,data:s,props:r,accessCache:o,type:a,appContext:l}=i;if(t[0]!=="$"){const h=o[t];if(h!==void 0)switch(h){case 1:return n[t];case 2:return s[t];case 4:return e[t];case 3:return r[t]}else{if(sl(n,t))return o[t]=1,n[t];if(s!==Me&&pe(s,t))return o[t]=2,s[t];if(pe(r,t))return o[t]=3,r[t];if(e!==Me&&pe(e,t))return o[t]=4,e[t];rc&&(o[t]=0)}}const c=to[t];let u,d;if(c)return t==="$attrs"&&Ye(i.attrs,"get",""),c(i);if((u=a.__cssModules)&&(u=u[t]))return u;if(e!==Me&&pe(e,t))return o[t]=4,e[t];if(d=l.config.globalProperties,pe(d,t))return d[t]},set({_:i},t,e){const{data:n,setupState:s,ctx:r}=i;return sl(s,t)?(s[t]=e,!0):n!==Me&&pe(n,t)?(n[t]=e,!0):pe(i.props,t)||t[0]==="$"&&t.slice(1)in i?!1:(r[t]=e,!0)},has({_:{data:i,setupState:t,accessCache:e,ctx:n,appContext:s,props:r,type:o}},a){let l;return!!(e[a]||i!==Me&&a[0]!=="$"&&pe(i,a)||sl(t,a)||pe(r,a)||pe(n,a)||pe(to,a)||pe(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(i,t,e){return e.get!=null?i._.accessCache[t]=0:pe(e,"value")&&this.set(i,t,e.value,null),Reflect.defineProperty(i,t,e)}};function dh(i){return Jt(i)?i.reduce((t,e)=>(t[e]=null,t),{}):i}let rc=!0;function Yg(i){const t=tp(i),e=i.proxy,n=i.ctx;rc=!1,t.beforeCreate&&fh(t.beforeCreate,i,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:h,beforeUpdate:f,updated:p,activated:_,deactivated:m,beforeDestroy:g,beforeUnmount:x,destroyed:S,unmounted:v,render:M,renderTracked:w,renderTriggered:A,errorCaptured:L,serverPrefetch:b,expose:E,inheritAttrs:D,components:k,directives:U,filters:W}=t;if(c&&$g(c,n,null),o)for(const H in o){const q=o[H];ee(q)&&(n[H]=q.bind(e))}if(s){const H=s.call(e,e);Ae(H)&&(i.data=Us(H))}if(rc=!0,r)for(const H in r){const q=r[H],ut=ee(q)?q.bind(e,e):ee(q.get)?q.get.bind(e,e):oi,gt=!ee(q)&&ee(q.set)?q.set.bind(e):oi,dt=Au({get:ut,set:gt});Object.defineProperty(n,H,{enumerable:!0,configurable:!0,get:()=>dt.value,set:_t=>dt.value=_t})}if(a)for(const H in a)Qf(a[H],n,e,H);if(l){const H=ee(l)?l.call(e):l;Reflect.ownKeys(H).forEach(q=>{Cg(q,H[q])})}u&&fh(u,i,"c");function O(H,q){Jt(q)?q.forEach(ut=>H(ut.bind(e))):q&&H(q.bind(e))}if(O(Bg,d),O(Er,h),O(zg,f),O(kg,p),O(Fg,_),O(Ug,m),O(qg,L),O(Wg,w),O(Gg,A),O(Vg,x),O(ls,v),O(Hg,b),Jt(E))if(E.length){const H=i.exposed||(i.exposed={});E.forEach(q=>{Object.defineProperty(H,q,{get:()=>e[q],set:ut=>e[q]=ut,enumerable:!0})})}else i.exposed||(i.exposed={});M&&i.render===oi&&(i.render=M),D!=null&&(i.inheritAttrs=D),k&&(i.components=k),U&&(i.directives=U),b&&Kf(i)}function $g(i,t,e=oi){Jt(i)&&(i=oc(i));for(const n in i){const s=i[n];let r;Ae(s)?"default"in s?r=la(s.from||n,s.default,!0):r=la(s.from||n):r=la(s),Ze(r)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[n]=r}}function fh(i,t,e){ui(Jt(i)?i.map(n=>n.bind(t.proxy)):i.bind(t.proxy),t,e)}function Qf(i,t,e,n){let s=n.includes(".")?$f(e,n):()=>e[n];if(ze(i)){const r=t[i];ee(r)&&Ni(s,r)}else if(ee(i))Ni(s,i.bind(e));else if(Ae(i))if(Jt(i))i.forEach(r=>Qf(r,t,e,n));else{const r=ee(i.handler)?i.handler.bind(e):t[i.handler];ee(r)&&Ni(s,r,i)}}function tp(i){const t=i.type,{mixins:e,extends:n}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=i.appContext,a=r.get(t);let l;return a?l=a:!s.length&&!e&&!n?l=t:(l={},s.length&&s.forEach(c=>wa(l,c,o,!0)),wa(l,t,o)),Ae(t)&&r.set(t,l),l}function wa(i,t,e,n=!1){const{mixins:s,extends:r}=t;r&&wa(i,r,e,!0),s&&s.forEach(o=>wa(i,o,e,!0));for(const o in t)if(!(n&&o==="expose")){const a=Kg[o]||e&&e[o];i[o]=a?a(i[o],t[o]):t[o]}return i}const Kg={data:ph,props:mh,emits:mh,methods:qr,computed:qr,beforeCreate:nn,created:nn,beforeMount:nn,mounted:nn,beforeUpdate:nn,updated:nn,beforeDestroy:nn,beforeUnmount:nn,destroyed:nn,unmounted:nn,activated:nn,deactivated:nn,errorCaptured:nn,serverPrefetch:nn,components:qr,directives:qr,watch:Jg,provide:ph,inject:Zg};function ph(i,t){return t?i?function(){return tn(ee(i)?i.call(this,this):i,ee(t)?t.call(this,this):t)}:t:i}function Zg(i,t){return qr(oc(i),oc(t))}function oc(i){if(Jt(i)){const t={};for(let e=0;e<i.length;e++)t[i[e]]=i[e];return t}return i}function nn(i,t){return i?[...new Set([].concat(i,t))]:t}function qr(i,t){return i?tn(Object.create(null),i,t):t}function mh(i,t){return i?Jt(i)&&Jt(t)?[...new Set([...i,...t])]:tn(Object.create(null),dh(i),dh(t??{})):t}function Jg(i,t){if(!i)return t;if(!t)return i;const e=tn(Object.create(null),i);for(const n in t)e[n]=nn(i[n],t[n]);return e}function ep(){return{app:null,config:{isNativeTag:vf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Qg=0;function t0(i,t){return function(n,s=null){ee(n)||(n=tn({},n)),s!=null&&!Ae(s)&&(s=null);const r=ep(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:Qg++,_component:n,_props:s,_container:null,_context:r,_instance:null,version:L0,get config(){return r.config},set config(u){},use(u,...d){return o.has(u)||(u&&ee(u.install)?(o.add(u),u.install(c,...d)):ee(u)&&(o.add(u),u(c,...d))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,d){return d?(r.components[u]=d,c):r.components[u]},directive(u,d){return d?(r.directives[u]=d,c):r.directives[u]},mount(u,d,h){if(!l){const f=c._ceVNode||Tn(n,s);return f.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),i(f,u,h),l=!0,c._container=u,u.__vue_app__=c,qa(f.component)}},onUnmount(u){a.push(u)},unmount(){l&&(ui(a,c._instance,16),i(null,c._container),delete c._container.__vue_app__)},provide(u,d){return r.provides[u]=d,c},runWithContext(u){const d=hr;hr=c;try{return u()}finally{hr=d}}};return c}}let hr=null;const e0=(i,t)=>t==="modelValue"||t==="model-value"?i.modelModifiers:i[`${t}Modifiers`]||i[`${ss(t)}Modifiers`]||i[`${Fs(t)}Modifiers`];function n0(i,t,...e){if(i.isUnmounted)return;const n=i.vnode.props||Me;let s=e;const r=t.startsWith("update:"),o=r&&e0(n,t.slice(7));o&&(o.trim&&(s=e.map(u=>ze(u)?u.trim():u)),o.number&&(s=e.map(Oa)));let a,l=n[a=Qa(t)]||n[a=Qa(ss(t))];!l&&r&&(l=n[a=Qa(Fs(t))]),l&&ui(l,i,6,s);const c=n[a+"Once"];if(c){if(!i.emitted)i.emitted={};else if(i.emitted[a])return;i.emitted[a]=!0,ui(c,i,6,s)}}const i0=new WeakMap;function np(i,t,e=!1){const n=e?i0:t.emitsCache,s=n.get(i);if(s!==void 0)return s;const r=i.emits;let o={},a=!1;if(!ee(i)){const l=c=>{const u=np(c,t,!0);u&&(a=!0,tn(o,u))};!e&&t.mixins.length&&t.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!r&&!a?(Ae(i)&&n.set(i,null),null):(Jt(r)?r.forEach(l=>o[l]=null):tn(o,r),Ae(i)&&n.set(i,o),o)}function Ga(i,t){return!i||!Na(t)?!1:(t=t.slice(2).replace(/Once$/,""),pe(i,t[0].toLowerCase()+t.slice(1))||pe(i,Fs(t))||pe(i,t))}function gh(i){const{type:t,vnode:e,proxy:n,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:d,data:h,setupState:f,ctx:p,inheritAttrs:_}=i,m=Sa(i);let g,x;try{if(e.shapeFlag&4){const v=s||n,M=v;g=ni(c.call(M,v,u,d,f,h,p)),x=a}else{const v=t;g=ni(v.length>1?v(d,{attrs:a,slots:o,emit:l}):v(d,null)),x=t.props?a:s0(a)}}catch(v){eo.length=0,Va(v,i,1),g=Tn(rs)}let S=g;if(x&&_!==!1){const v=Object.keys(x),{shapeFlag:M}=S;v.length&&M&7&&(r&&v.some(du)&&(x=r0(x,r)),S=_r(S,x,!1,!0))}return e.dirs&&(S=_r(S,null,!1,!0),S.dirs=S.dirs?S.dirs.concat(e.dirs):e.dirs),e.transition&&bu(S,e.transition),g=S,Sa(m),g}const s0=i=>{let t;for(const e in i)(e==="class"||e==="style"||Na(e))&&((t||(t={}))[e]=i[e]);return t},r0=(i,t)=>{const e={};for(const n in i)(!du(n)||!(n.slice(9)in t))&&(e[n]=i[n]);return e};function o0(i,t,e){const{props:n,children:s,component:r}=i,{props:o,children:a,patchFlag:l}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return n?_h(n,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let d=0;d<u.length;d++){const h=u[d];if(o[h]!==n[h]&&!Ga(c,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?_h(n,o,c):!0:!!o;return!1}function _h(i,t,e){const n=Object.keys(t);if(n.length!==Object.keys(i).length)return!0;for(let s=0;s<n.length;s++){const r=n[s];if(t[r]!==i[r]&&!Ga(e,r))return!0}return!1}function a0({vnode:i,parent:t},e){for(;t;){const n=t.subTree;if(n.suspense&&n.suspense.activeBranch===i&&(n.el=i.el),n===i)(i=t.vnode).el=e,t=t.parent;else break}}const ip={},sp=()=>Object.create(ip),rp=i=>Object.getPrototypeOf(i)===ip;function l0(i,t,e,n=!1){const s={},r=sp();i.propsDefaults=Object.create(null),op(i,t,s,r);for(const o in i.propsOptions[0])o in s||(s[o]=void 0);e?i.props=n?s:mg(s):i.type.props?i.props=s:i.props=r,i.attrs=r}function c0(i,t,e,n){const{props:s,attrs:r,vnode:{patchFlag:o}}=i,a=fe(s),[l]=i.propsOptions;let c=!1;if((n||o>0)&&!(o&16)){if(o&8){const u=i.vnode.dynamicProps;for(let d=0;d<u.length;d++){let h=u[d];if(Ga(i.emitsOptions,h))continue;const f=t[h];if(l)if(pe(r,h))f!==r[h]&&(r[h]=f,c=!0);else{const p=ss(h);s[p]=ac(l,a,p,f,i,!1)}else f!==r[h]&&(r[h]=f,c=!0)}}}else{op(i,t,s,r)&&(c=!0);let u;for(const d in a)(!t||!pe(t,d)&&((u=Fs(d))===d||!pe(t,u)))&&(l?e&&(e[d]!==void 0||e[u]!==void 0)&&(s[d]=ac(l,a,d,void 0,i,!0)):delete s[d]);if(r!==a)for(const d in r)(!t||!pe(t,d))&&(delete r[d],c=!0)}c&&Ri(i.attrs,"set","")}function op(i,t,e,n){const[s,r]=i.propsOptions;let o=!1,a;if(t)for(let l in t){if($r(l))continue;const c=t[l];let u;s&&pe(s,u=ss(l))?!r||!r.includes(u)?e[u]=c:(a||(a={}))[u]=c:Ga(i.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,o=!0)}if(r){const l=fe(e),c=a||Me;for(let u=0;u<r.length;u++){const d=r[u];e[d]=ac(s,l,d,c[d],i,!pe(c,d))}}return o}function ac(i,t,e,n,s,r){const o=i[e];if(o!=null){const a=pe(o,"default");if(a&&n===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ee(l)){const{propsDefaults:c}=s;if(e in c)n=c[e];else{const u=So(s);n=c[e]=l.call(null,t),u()}}else n=l;s.ce&&s.ce._setProp(e,n)}o[0]&&(r&&!a?n=!1:o[1]&&(n===""||n===Fs(e))&&(n=!0))}return n}const u0=new WeakMap;function ap(i,t,e=!1){const n=e?u0:t.propsCache,s=n.get(i);if(s)return s;const r=i.props,o={},a=[];let l=!1;if(!ee(i)){const u=d=>{l=!0;const[h,f]=ap(d,t,!0);tn(o,h),f&&a.push(...f)};!e&&t.mixins.length&&t.mixins.forEach(u),i.extends&&u(i.extends),i.mixins&&i.mixins.forEach(u)}if(!r&&!l)return Ae(i)&&n.set(i,lr),lr;if(Jt(r))for(let u=0;u<r.length;u++){const d=ss(r[u]);vh(d)&&(o[d]=Me)}else if(r)for(const u in r){const d=ss(u);if(vh(d)){const h=r[u],f=o[d]=Jt(h)||ee(h)?{type:h}:tn({},h),p=f.type;let _=!1,m=!0;if(Jt(p))for(let g=0;g<p.length;++g){const x=p[g],S=ee(x)&&x.name;if(S==="Boolean"){_=!0;break}else S==="String"&&(m=!1)}else _=ee(p)&&p.name==="Boolean";f[0]=_,f[1]=m,(_||pe(f,"default"))&&a.push(d)}}const c=[o,a];return Ae(i)&&n.set(i,c),c}function vh(i){return i[0]!=="$"&&!$r(i)}const wu=i=>i==="_"||i==="_ctx"||i==="$stable",Eu=i=>Jt(i)?i.map(ni):[ni(i)],h0=(i,t,e)=>{if(t._n)return t;const n=Ag((...s)=>Eu(t(...s)),e);return n._c=!1,n},lp=(i,t,e)=>{const n=i._ctx;for(const s in i){if(wu(s))continue;const r=i[s];if(ee(r))t[s]=h0(s,r,n);else if(r!=null){const o=Eu(r);t[s]=()=>o}}},cp=(i,t)=>{const e=Eu(t);i.slots.default=()=>e},up=(i,t,e)=>{for(const n in t)(e||!wu(n))&&(i[n]=t[n])},d0=(i,t,e)=>{const n=i.slots=sp();if(i.vnode.shapeFlag&32){const s=t._;s?(up(n,t,e),e&&bf(n,"_",s,!0)):lp(t,n)}else t&&cp(i,t)},f0=(i,t,e)=>{const{vnode:n,slots:s}=i;let r=!0,o=Me;if(n.shapeFlag&32){const a=t._;a?e&&a===1?r=!1:up(s,t,e):(r=!t.$stable,lp(t,s)),o=t}else t&&(cp(i,t),o={default:1});if(r)for(const a in s)!wu(a)&&o[a]==null&&delete s[a]},bn=v0;function p0(i){return m0(i)}function m0(i,t){const e=Ba();e.__VUE__=!0;const{insert:n,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:h,setScopeId:f=oi,insertStaticContent:p}=i,_=(I,N,F,G=null,V=null,$=null,R=void 0,st=null,Q=!!N.dynamicChildren)=>{if(I===N)return;I&&!Ir(I,N)&&(G=Y(I),_t(I,V,$,!0),I=null),N.patchFlag===-2&&(Q=!1,N.dynamicChildren=null);const{type:it,ref:at,shapeFlag:C}=N;switch(it){case Wa:m(I,N,F,G);break;case rs:g(I,N,F,G);break;case ca:I==null&&x(N,F,G,R);break;case Re:k(I,N,F,G,V,$,R,st,Q);break;default:C&1?M(I,N,F,G,V,$,R,st,Q):C&6?U(I,N,F,G,V,$,R,st,Q):(C&64||C&128)&&it.process(I,N,F,G,V,$,R,st,Q,lt)}at!=null&&V?Jr(at,I&&I.ref,$,N||I,!N):at==null&&I&&I.ref!=null&&Jr(I.ref,null,$,I,!0)},m=(I,N,F,G)=>{if(I==null)n(N.el=a(N.children),F,G);else{const V=N.el=I.el;N.children!==I.children&&c(V,N.children)}},g=(I,N,F,G)=>{I==null?n(N.el=l(N.children||""),F,G):N.el=I.el},x=(I,N,F,G)=>{[I.el,I.anchor]=p(I.children,N,F,G,I.el,I.anchor)},S=({el:I,anchor:N},F,G)=>{let V;for(;I&&I!==N;)V=h(I),n(I,F,G),I=V;n(N,F,G)},v=({el:I,anchor:N})=>{let F;for(;I&&I!==N;)F=h(I),s(I),I=F;s(N)},M=(I,N,F,G,V,$,R,st,Q)=>{if(N.type==="svg"?R="svg":N.type==="math"&&(R="mathml"),I==null)w(N,F,G,V,$,R,st,Q);else{const it=I.el&&I.el._isVueCE?I.el:null;try{it&&it._beginPatch(),b(I,N,V,$,R,st,Q)}finally{it&&it._endPatch()}}},w=(I,N,F,G,V,$,R,st)=>{let Q,it;const{props:at,shapeFlag:C,transition:y,dirs:z}=I;if(Q=I.el=o(I.type,$,at&&at.is,at),C&8?u(Q,I.children):C&16&&L(I.children,Q,null,G,V,rl(I,$),R,st),z&&ds(I,null,G,"created"),A(Q,I,I.scopeId,R,G),at){for(const rt in at)rt!=="value"&&!$r(rt)&&r(Q,rt,null,at[rt],$,G);"value"in at&&r(Q,"value",null,at.value,$),(it=at.onVnodeBeforeMount)&&Kn(it,G,I)}z&&ds(I,null,G,"beforeMount");const j=g0(V,y);j&&y.beforeEnter(Q),n(Q,N,F),((it=at&&at.onVnodeMounted)||j||z)&&bn(()=>{it&&Kn(it,G,I),j&&y.enter(Q),z&&ds(I,null,G,"mounted")},V)},A=(I,N,F,G,V)=>{if(F&&f(I,F),G)for(let $=0;$<G.length;$++)f(I,G[$]);if(V){let $=V.subTree;if(N===$||pp($.type)&&($.ssContent===N||$.ssFallback===N)){const R=V.vnode;A(I,R,R.scopeId,R.slotScopeIds,V.parent)}}},L=(I,N,F,G,V,$,R,st,Q=0)=>{for(let it=Q;it<I.length;it++){const at=I[it]=st?ts(I[it]):ni(I[it]);_(null,at,N,F,G,V,$,R,st)}},b=(I,N,F,G,V,$,R)=>{const st=N.el=I.el;let{patchFlag:Q,dynamicChildren:it,dirs:at}=N;Q|=I.patchFlag&16;const C=I.props||Me,y=N.props||Me;let z;if(F&&fs(F,!1),(z=y.onVnodeBeforeUpdate)&&Kn(z,F,N,I),at&&ds(N,I,F,"beforeUpdate"),F&&fs(F,!0),(C.innerHTML&&y.innerHTML==null||C.textContent&&y.textContent==null)&&u(st,""),it?E(I.dynamicChildren,it,st,F,G,rl(N,V),$):R||q(I,N,st,null,F,G,rl(N,V),$,!1),Q>0){if(Q&16)D(st,C,y,F,V);else if(Q&2&&C.class!==y.class&&r(st,"class",null,y.class,V),Q&4&&r(st,"style",C.style,y.style,V),Q&8){const j=N.dynamicProps;for(let rt=0;rt<j.length;rt++){const tt=j[rt],Ct=C[tt],xt=y[tt];(xt!==Ct||tt==="value")&&r(st,tt,Ct,xt,V,F)}}Q&1&&I.children!==N.children&&u(st,N.children)}else!R&&it==null&&D(st,C,y,F,V);((z=y.onVnodeUpdated)||at)&&bn(()=>{z&&Kn(z,F,N,I),at&&ds(N,I,F,"updated")},G)},E=(I,N,F,G,V,$,R)=>{for(let st=0;st<N.length;st++){const Q=I[st],it=N[st],at=Q.el&&(Q.type===Re||!Ir(Q,it)||Q.shapeFlag&198)?d(Q.el):F;_(Q,it,at,null,G,V,$,R,!0)}},D=(I,N,F,G,V)=>{if(N!==F){if(N!==Me)for(const $ in N)!$r($)&&!($ in F)&&r(I,$,N[$],null,V,G);for(const $ in F){if($r($))continue;const R=F[$],st=N[$];R!==st&&$!=="value"&&r(I,$,st,R,V,G)}"value"in F&&r(I,"value",N.value,F.value,V)}},k=(I,N,F,G,V,$,R,st,Q)=>{const it=N.el=I?I.el:a(""),at=N.anchor=I?I.anchor:a("");let{patchFlag:C,dynamicChildren:y,slotScopeIds:z}=N;z&&(st=st?st.concat(z):z),I==null?(n(it,F,G),n(at,F,G),L(N.children||[],F,at,V,$,R,st,Q)):C>0&&C&64&&y&&I.dynamicChildren&&I.dynamicChildren.length===y.length?(E(I.dynamicChildren,y,F,V,$,R,st),(N.key!=null||V&&N===V.subTree)&&hp(I,N,!0)):q(I,N,F,at,V,$,R,st,Q)},U=(I,N,F,G,V,$,R,st,Q)=>{N.slotScopeIds=st,I==null?N.shapeFlag&512?V.ctx.activate(N,F,G,R,Q):W(N,F,G,V,$,R,Q):B(I,N,Q)},W=(I,N,F,G,V,$,R)=>{const st=I.component=E0(I,G,V);if(Zf(I)&&(st.ctx.renderer=lt),A0(st,!1,R),st.asyncDep){if(V&&V.registerDep(st,O,R),!I.el){const Q=st.subTree=Tn(rs);g(null,Q,N,F),I.placeholder=Q.el}}else O(st,I,N,F,V,$,R)},B=(I,N,F)=>{const G=N.component=I.component;if(o0(I,N,F))if(G.asyncDep&&!G.asyncResolved){H(G,N,F);return}else G.next=N,G.update();else N.el=I.el,G.vnode=N},O=(I,N,F,G,V,$,R)=>{const st=()=>{if(I.isMounted){let{next:C,bu:y,u:z,parent:j,vnode:rt}=I;{const zt=dp(I);if(zt){C&&(C.el=rt.el,H(I,C,R)),zt.asyncDep.then(()=>{I.isUnmounted||st()});return}}let tt=C,Ct;fs(I,!1),C?(C.el=rt.el,H(I,C,R)):C=rt,y&&aa(y),(Ct=C.props&&C.props.onVnodeBeforeUpdate)&&Kn(Ct,j,C,rt),fs(I,!0);const xt=gh(I),Tt=I.subTree;I.subTree=xt,_(Tt,xt,d(Tt.el),Y(Tt),I,V,$),C.el=xt.el,tt===null&&a0(I,xt.el),z&&bn(z,V),(Ct=C.props&&C.props.onVnodeUpdated)&&bn(()=>Kn(Ct,j,C,rt),V)}else{let C;const{el:y,props:z}=N,{bm:j,m:rt,parent:tt,root:Ct,type:xt}=I,Tt=Qr(N);fs(I,!1),j&&aa(j),!Tt&&(C=z&&z.onVnodeBeforeMount)&&Kn(C,tt,N),fs(I,!0);{Ct.ce&&Ct.ce._def.shadowRoot!==!1&&Ct.ce._injectChildStyle(xt);const zt=I.subTree=gh(I);_(null,zt,F,G,I,V,$),N.el=zt.el}if(rt&&bn(rt,V),!Tt&&(C=z&&z.onVnodeMounted)){const zt=N;bn(()=>Kn(C,tt,zt),V)}(N.shapeFlag&256||tt&&Qr(tt.vnode)&&tt.vnode.shapeFlag&256)&&I.a&&bn(I.a,V),I.isMounted=!0,N=F=G=null}};I.scope.on();const Q=I.effect=new Af(st);I.scope.off();const it=I.update=Q.run.bind(Q),at=I.job=Q.runIfDirty.bind(Q);at.i=I,at.id=I.uid,Q.scheduler=()=>Mu(at),fs(I,!0),it()},H=(I,N,F)=>{N.component=I;const G=I.vnode.props;I.vnode=N,I.next=null,c0(I,N.props,G,F),f0(I,N.children,F),Bi(),uh(I),zi()},q=(I,N,F,G,V,$,R,st,Q=!1)=>{const it=I&&I.children,at=I?I.shapeFlag:0,C=N.children,{patchFlag:y,shapeFlag:z}=N;if(y>0){if(y&128){gt(it,C,F,G,V,$,R,st,Q);return}else if(y&256){ut(it,C,F,G,V,$,R,st,Q);return}}z&8?(at&16&&X(it,V,$),C!==it&&u(F,C)):at&16?z&16?gt(it,C,F,G,V,$,R,st,Q):X(it,V,$,!0):(at&8&&u(F,""),z&16&&L(C,F,G,V,$,R,st,Q))},ut=(I,N,F,G,V,$,R,st,Q)=>{I=I||lr,N=N||lr;const it=I.length,at=N.length,C=Math.min(it,at);let y;for(y=0;y<C;y++){const z=N[y]=Q?ts(N[y]):ni(N[y]);_(I[y],z,F,null,V,$,R,st,Q)}it>at?X(I,V,$,!0,!1,C):L(N,F,G,V,$,R,st,Q,C)},gt=(I,N,F,G,V,$,R,st,Q)=>{let it=0;const at=N.length;let C=I.length-1,y=at-1;for(;it<=C&&it<=y;){const z=I[it],j=N[it]=Q?ts(N[it]):ni(N[it]);if(Ir(z,j))_(z,j,F,null,V,$,R,st,Q);else break;it++}for(;it<=C&&it<=y;){const z=I[C],j=N[y]=Q?ts(N[y]):ni(N[y]);if(Ir(z,j))_(z,j,F,null,V,$,R,st,Q);else break;C--,y--}if(it>C){if(it<=y){const z=y+1,j=z<at?N[z].el:G;for(;it<=y;)_(null,N[it]=Q?ts(N[it]):ni(N[it]),F,j,V,$,R,st,Q),it++}}else if(it>y)for(;it<=C;)_t(I[it],V,$,!0),it++;else{const z=it,j=it,rt=new Map;for(it=j;it<=y;it++){const Rt=N[it]=Q?ts(N[it]):ni(N[it]);Rt.key!=null&&rt.set(Rt.key,it)}let tt,Ct=0;const xt=y-j+1;let Tt=!1,zt=0;const yt=new Array(xt);for(it=0;it<xt;it++)yt[it]=0;for(it=z;it<=C;it++){const Rt=I[it];if(Ct>=xt){_t(Rt,V,$,!0);continue}let Dt;if(Rt.key!=null)Dt=rt.get(Rt.key);else for(tt=j;tt<=y;tt++)if(yt[tt-j]===0&&Ir(Rt,N[tt])){Dt=tt;break}Dt===void 0?_t(Rt,V,$,!0):(yt[Dt-j]=it+1,Dt>=zt?zt=Dt:Tt=!0,_(Rt,N[Dt],F,null,V,$,R,st,Q),Ct++)}const Et=Tt?_0(yt):lr;for(tt=Et.length-1,it=xt-1;it>=0;it--){const Rt=j+it,Dt=N[Rt],At=N[Rt+1],Yt=Rt+1<at?At.el||fp(At):G;yt[it]===0?_(null,Dt,F,Yt,V,$,R,st,Q):Tt&&(tt<0||it!==Et[tt]?dt(Dt,F,Yt,2):tt--)}}},dt=(I,N,F,G,V=null)=>{const{el:$,type:R,transition:st,children:Q,shapeFlag:it}=I;if(it&6){dt(I.component.subTree,N,F,G);return}if(it&128){I.suspense.move(N,F,G);return}if(it&64){R.move(I,N,F,lt);return}if(R===Re){n($,N,F);for(let C=0;C<Q.length;C++)dt(Q[C],N,F,G);n(I.anchor,N,F);return}if(R===ca){S(I,N,F);return}if(G!==2&&it&1&&st)if(G===0)st.beforeEnter($),n($,N,F),bn(()=>st.enter($),V);else{const{leave:C,delayLeave:y,afterLeave:z}=st,j=()=>{I.ctx.isUnmounted?s($):n($,N,F)},rt=()=>{$._isLeaving&&$[Ng](!0),C($,()=>{j(),z&&z()})};y?y($,j,rt):rt()}else n($,N,F)},_t=(I,N,F,G=!1,V=!1)=>{const{type:$,props:R,ref:st,children:Q,dynamicChildren:it,shapeFlag:at,patchFlag:C,dirs:y,cacheIndex:z}=I;if(C===-2&&(V=!1),st!=null&&(Bi(),Jr(st,null,F,I,!0),zi()),z!=null&&(N.renderCache[z]=void 0),at&256){N.ctx.deactivate(I);return}const j=at&1&&y,rt=!Qr(I);let tt;if(rt&&(tt=R&&R.onVnodeBeforeUnmount)&&Kn(tt,N,I),at&6)et(I.component,F,G);else{if(at&128){I.suspense.unmount(F,G);return}j&&ds(I,null,N,"beforeUnmount"),at&64?I.type.remove(I,N,F,lt,G):it&&!it.hasOnce&&($!==Re||C>0&&C&64)?X(it,N,F,!1,!0):($===Re&&C&384||!V&&at&16)&&X(Q,N,F),G&&Lt(I)}(rt&&(tt=R&&R.onVnodeUnmounted)||j)&&bn(()=>{tt&&Kn(tt,N,I),j&&ds(I,null,N,"unmounted")},F)},Lt=I=>{const{type:N,el:F,anchor:G,transition:V}=I;if(N===Re){ot(F,G);return}if(N===ca){v(I);return}const $=()=>{s(F),V&&!V.persisted&&V.afterLeave&&V.afterLeave()};if(I.shapeFlag&1&&V&&!V.persisted){const{leave:R,delayLeave:st}=V,Q=()=>R(F,$);st?st(I.el,$,Q):Q()}else $()},ot=(I,N)=>{let F;for(;I!==N;)F=h(I),s(I),I=F;s(N)},et=(I,N,F)=>{const{bum:G,scope:V,job:$,subTree:R,um:st,m:Q,a:it}=I;xh(Q),xh(it),G&&aa(G),V.stop(),$&&($.flags|=8,_t(R,I,N,F)),st&&bn(st,N),bn(()=>{I.isUnmounted=!0},N)},X=(I,N,F,G=!1,V=!1,$=0)=>{for(let R=$;R<I.length;R++)_t(I[R],N,F,G,V)},Y=I=>{if(I.shapeFlag&6)return Y(I.component.subTree);if(I.shapeFlag&128)return I.suspense.next();const N=h(I.anchor||I.el),F=N&&N[Lg];return F?h(F):N};let ft=!1;const mt=(I,N,F)=>{let G;I==null?N._vnode&&(_t(N._vnode,null,null,!0),G=N._vnode.component):_(N._vnode||null,I,N,null,null,null,F),N._vnode=I,ft||(ft=!0,uh(G),qf(),ft=!1)},lt={p:_,um:_t,m:dt,r:Lt,mt:W,mc:L,pc:q,pbc:E,n:Y,o:i};return{render:mt,hydrate:void 0,createApp:t0(mt)}}function rl({type:i,props:t},e){return e==="svg"&&i==="foreignObject"||e==="mathml"&&i==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function fs({effect:i,job:t},e){e?(i.flags|=32,t.flags|=4):(i.flags&=-33,t.flags&=-5)}function g0(i,t){return(!i||i&&!i.pendingBranch)&&t&&!t.persisted}function hp(i,t,e=!1){const n=i.children,s=t.children;if(Jt(n)&&Jt(s))for(let r=0;r<n.length;r++){const o=n[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=ts(s[r]),a.el=o.el),!e&&a.patchFlag!==-2&&hp(o,a)),a.type===Wa&&(a.patchFlag!==-1?a.el=o.el:a.__elIndex=r+(i.type===Re?1:0)),a.type===rs&&!a.el&&(a.el=o.el)}}function _0(i){const t=i.slice(),e=[0];let n,s,r,o,a;const l=i.length;for(n=0;n<l;n++){const c=i[n];if(c!==0){if(s=e[e.length-1],i[s]<c){t[n]=s,e.push(n);continue}for(r=0,o=e.length-1;r<o;)a=r+o>>1,i[e[a]]<c?r=a+1:o=a;c<i[e[r]]&&(r>0&&(t[n]=e[r-1]),e[r]=n)}}for(r=e.length,o=e[r-1];r-- >0;)e[r]=o,o=t[o];return e}function dp(i){const t=i.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:dp(t)}function xh(i){if(i)for(let t=0;t<i.length;t++)i[t].flags|=8}function fp(i){if(i.placeholder)return i.placeholder;const t=i.component;return t?fp(t.subTree):null}const pp=i=>i.__isSuspense;function v0(i,t){t&&t.pendingBranch?Jt(i)?t.effects.push(...i):t.effects.push(i):Tg(i)}const Re=Symbol.for("v-fgt"),Wa=Symbol.for("v-txt"),rs=Symbol.for("v-cmt"),ca=Symbol.for("v-stc"),eo=[];let En=null;function qt(i=!1){eo.push(En=i?null:[])}function x0(){eo.pop(),En=eo[eo.length-1]||null}let lo=1;function yh(i,t=!1){lo+=i,i<0&&En&&t&&(En.hasOnce=!0)}function mp(i){return i.dynamicChildren=lo>0?En||lr:null,x0(),lo>0&&En&&En.push(i),i}function Kt(i,t,e,n,s,r){return mp(pt(i,t,e,n,s,r,!0))}function rr(i,t,e,n,s){return mp(Tn(i,t,e,n,s,!0))}function gp(i){return i?i.__v_isVNode===!0:!1}function Ir(i,t){return i.type===t.type&&i.key===t.key}const _p=({key:i})=>i??null,ua=({ref:i,ref_key:t,ref_for:e})=>(typeof i=="number"&&(i=""+i),i!=null?ze(i)||Ze(i)||ee(i)?{i:Nn,r:i,k:t,f:!!e}:i:null);function pt(i,t=null,e=null,n=0,s=null,r=i===Re?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:t,key:t&&_p(t),ref:t&&ua(t),scopeId:jf,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:n,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Nn};return a?(Tu(l,e),r&128&&i.normalize(l)):e&&(l.shapeFlag|=ze(e)?8:16),lo>0&&!o&&En&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&En.push(l),l}const Tn=y0;function y0(i,t=null,e=null,n=0,s=null,r=!1){if((!i||i===Xg)&&(i=rs),gp(i)){const a=_r(i,t,!0);return e&&Tu(a,e),lo>0&&!r&&En&&(a.shapeFlag&6?En[En.indexOf(i)]=a:En.push(a)),a.patchFlag=-2,a}if(I0(i)&&(i=i.__vccOpts),t){t=S0(t);let{class:a,style:l}=t;a&&!ze(a)&&(t.class=Wn(a)),Ae(l)&&(Su(l)&&!Jt(l)&&(l=tn({},l)),t.style=$e(l))}const o=ze(i)?1:pp(i)?128:Dg(i)?64:Ae(i)?4:ee(i)?2:0;return pt(i,t,e,n,s,o,r,!0)}function S0(i){return i?Su(i)||rp(i)?tn({},i):i:null}function _r(i,t,e=!1,n=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=i,c=t?M0(s||{},t):s,u={__v_isVNode:!0,__v_skip:!0,type:i.type,props:c,key:c&&_p(c),ref:t&&t.ref?e&&r?Jt(r)?r.concat(ua(t)):[r,ua(t)]:ua(t):r,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:a,target:i.target,targetStart:i.targetStart,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:t&&i.type!==Re?o===-1?16:o|16:o,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:l,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&_r(i.ssContent),ssFallback:i.ssFallback&&_r(i.ssFallback),placeholder:i.placeholder,el:i.el,anchor:i.anchor,ctx:i.ctx,ce:i.ce};return l&&n&&bu(u,l.clone(u)),u}function Ea(i=" ",t=0){return Tn(Wa,null,i,t)}function vp(i,t){const e=Tn(ca,null,i);return e.staticCount=t,e}function _n(i="",t=!1){return t?(qt(),rr(rs,null,i)):Tn(rs,null,i)}function ni(i){return i==null||typeof i=="boolean"?Tn(rs):Jt(i)?Tn(Re,null,i.slice()):gp(i)?ts(i):Tn(Wa,null,String(i))}function ts(i){return i.el===null&&i.patchFlag!==-1||i.memo?i:_r(i)}function Tu(i,t){let e=0;const{shapeFlag:n}=i;if(t==null)t=null;else if(Jt(t))e=16;else if(typeof t=="object")if(n&65){const s=t.default;s&&(s._c&&(s._d=!1),Tu(i,s()),s._c&&(s._d=!0));return}else{e=32;const s=t._;!s&&!rp(t)?t._ctx=Nn:s===3&&Nn&&(Nn.slots._===1?t._=1:(t._=2,i.patchFlag|=1024))}else ee(t)?(t={default:t,_ctx:Nn},e=32):(t=String(t),n&64?(e=16,t=[Ea(t)]):e=8);i.children=t,i.shapeFlag|=e}function M0(...i){const t={};for(let e=0;e<i.length;e++){const n=i[e];for(const s in n)if(s==="class")t.class!==n.class&&(t.class=Wn([t.class,n.class]));else if(s==="style")t.style=$e([t.style,n.style]);else if(Na(s)){const r=t[s],o=n[s];o&&r!==o&&!(Jt(r)&&r.includes(o))&&(t[s]=r?[].concat(r,o):o)}else s!==""&&(t[s]=n[s])}return t}function Kn(i,t,e,n=null){ui(i,t,7,[e,n])}const b0=ep();let w0=0;function E0(i,t,e){const n=i.type,s=(t?t.appContext:i.appContext)||b0,r={uid:w0++,vnode:i,type:n,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new $m(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ap(n,s),emitsOptions:np(n,s),emit:null,emitted:null,propsDefaults:Me,inheritAttrs:n.inheritAttrs,ctx:Me,data:Me,props:Me,attrs:Me,slots:Me,refs:Me,setupState:Me,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=n0.bind(null,r),i.ce&&i.ce(r),r}let an=null;const T0=()=>an||Nn;let Ta,lc;{const i=Ba(),t=(e,n)=>{let s;return(s=i[e])||(s=i[e]=[]),s.push(n),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Ta=t("__VUE_INSTANCE_SETTERS__",e=>an=e),lc=t("__VUE_SSR_SETTERS__",e=>co=e)}const So=i=>{const t=an;return Ta(i),i.scope.on(),()=>{i.scope.off(),Ta(t)}},Sh=()=>{an&&an.scope.off(),Ta(null)};function xp(i){return i.vnode.shapeFlag&4}let co=!1;function A0(i,t=!1,e=!1){t&&lc(t);const{props:n,children:s}=i.vnode,r=xp(i);l0(i,n,r,t),d0(i,s,e||t);const o=r?C0(i,t):void 0;return t&&lc(!1),o}function C0(i,t){const e=i.type;i.accessCache=Object.create(null),i.proxy=new Proxy(i.ctx,jg);const{setup:n}=e;if(n){Bi();const s=i.setupContext=n.length>1?P0(i):null,r=So(i),o=yo(n,i,0,[i.props,s]),a=xf(o);if(zi(),r(),(a||i.sp)&&!Qr(i)&&Kf(i),a){if(o.then(Sh,Sh),t)return o.then(l=>{Mh(i,l)}).catch(l=>{Va(l,i,0)});i.asyncDep=o}else Mh(i,o)}else yp(i)}function Mh(i,t,e){ee(t)?i.type.__ssrInlineRender?i.ssrRender=t:i.render=t:Ae(t)&&(i.setupState=Vf(t)),yp(i)}function yp(i,t,e){const n=i.type;i.render||(i.render=n.render||oi);{const s=So(i);Bi();try{Yg(i)}finally{zi(),s()}}}const R0={get(i,t){return Ye(i,"get",""),i[t]}};function P0(i){const t=e=>{i.exposed=e||{}};return{attrs:new Proxy(i.attrs,R0),slots:i.slots,emit:i.emit,expose:t}}function qa(i){return i.exposed?i.exposeProxy||(i.exposeProxy=new Proxy(Vf(gg(i.exposed)),{get(t,e){if(e in t)return t[e];if(e in to)return to[e](i)},has(t,e){return e in t||e in to}})):i.proxy}function I0(i){return ee(i)&&"__vccOpts"in i}const Au=(i,t)=>Sg(i,t,co),L0="3.5.26";/**
* @vue/runtime-dom v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let cc;const bh=typeof window<"u"&&window.trustedTypes;if(bh)try{cc=bh.createPolicy("vue",{createHTML:i=>i})}catch{}const Sp=cc?i=>cc.createHTML(i):i=>i,D0="http://www.w3.org/2000/svg",N0="http://www.w3.org/1998/Math/MathML",Ai=typeof document<"u"?document:null,wh=Ai&&Ai.createElement("template"),F0={insert:(i,t,e)=>{t.insertBefore(i,e||null)},remove:i=>{const t=i.parentNode;t&&t.removeChild(i)},createElement:(i,t,e,n)=>{const s=t==="svg"?Ai.createElementNS(D0,i):t==="mathml"?Ai.createElementNS(N0,i):e?Ai.createElement(i,{is:e}):Ai.createElement(i);return i==="select"&&n&&n.multiple!=null&&s.setAttribute("multiple",n.multiple),s},createText:i=>Ai.createTextNode(i),createComment:i=>Ai.createComment(i),setText:(i,t)=>{i.nodeValue=t},setElementText:(i,t)=>{i.textContent=t},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>Ai.querySelector(i),setScopeId(i,t){i.setAttribute(t,"")},insertStaticContent(i,t,e,n,s,r){const o=e?e.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),e),!(s===r||!(s=s.nextSibling)););else{wh.innerHTML=Sp(n==="svg"?`<svg>${i}</svg>`:n==="mathml"?`<math>${i}</math>`:i);const a=wh.content;if(n==="svg"||n==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},U0=Symbol("_vtc");function O0(i,t,e){const n=i[U0];n&&(t=(t?[t,...n]:[...n]).join(" ")),t==null?i.removeAttribute("class"):e?i.setAttribute("class",t):i.className=t}const Eh=Symbol("_vod"),B0=Symbol("_vsh"),z0=Symbol(""),k0=/(?:^|;)\s*display\s*:/;function V0(i,t,e){const n=i.style,s=ze(e);let r=!1;if(e&&!s){if(t)if(ze(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();e[a]==null&&ha(n,a,"")}else for(const o in t)e[o]==null&&ha(n,o,"");for(const o in e)o==="display"&&(r=!0),ha(n,o,e[o])}else if(s){if(t!==e){const o=n[z0];o&&(e+=";"+o),n.cssText=e,r=k0.test(e)}}else t&&i.removeAttribute("style");Eh in i&&(i[Eh]=r?n.display:"",i[B0]&&(n.display="none"))}const Th=/\s*!important$/;function ha(i,t,e){if(Jt(e))e.forEach(n=>ha(i,t,n));else if(e==null&&(e=""),t.startsWith("--"))i.setProperty(t,e);else{const n=H0(i,t);Th.test(e)?i.setProperty(Fs(n),e.replace(Th,""),"important"):i[n]=e}}const Ah=["Webkit","Moz","ms"],ol={};function H0(i,t){const e=ol[t];if(e)return e;let n=ss(t);if(n!=="filter"&&n in i)return ol[t]=n;n=Mf(n);for(let s=0;s<Ah.length;s++){const r=Ah[s]+n;if(r in i)return ol[t]=r}return t}const Ch="http://www.w3.org/1999/xlink";function Rh(i,t,e,n,s,r=Xm(t)){n&&t.startsWith("xlink:")?e==null?i.removeAttributeNS(Ch,t.slice(6,t.length)):i.setAttributeNS(Ch,t,e):e==null||r&&!wf(e)?i.removeAttribute(t):i.setAttribute(t,r?"":ci(e)?String(e):e)}function Ph(i,t,e,n,s){if(t==="innerHTML"||t==="textContent"){e!=null&&(i[t]=t==="innerHTML"?Sp(e):e);return}const r=i.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?i.getAttribute("value")||"":i.value,l=e==null?i.type==="checkbox"?"on":"":String(e);(a!==l||!("_value"in i))&&(i.value=l),e==null&&i.removeAttribute(t),i._value=e;return}let o=!1;if(e===""||e==null){const a=typeof i[t];a==="boolean"?e=wf(e):e==null&&a==="string"?(e="",o=!0):a==="number"&&(e=0,o=!0)}try{i[t]=e}catch{}o&&i.removeAttribute(s||t)}function Ms(i,t,e,n){i.addEventListener(t,e,n)}function G0(i,t,e,n){i.removeEventListener(t,e,n)}const Ih=Symbol("_vei");function W0(i,t,e,n,s=null){const r=i[Ih]||(i[Ih]={}),o=r[t];if(n&&o)o.value=n;else{const[a,l]=q0(t);if(n){const c=r[t]=Y0(n,s);Ms(i,a,c,l)}else o&&(G0(i,a,o,l),r[t]=void 0)}}const Lh=/(?:Once|Passive|Capture)$/;function q0(i){let t;if(Lh.test(i)){t={};let n;for(;n=i.match(Lh);)i=i.slice(0,i.length-n[0].length),t[n[0].toLowerCase()]=!0}return[i[2]===":"?i.slice(3):Fs(i.slice(2)),t]}let al=0;const X0=Promise.resolve(),j0=()=>al||(X0.then(()=>al=0),al=Date.now());function Y0(i,t){const e=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=e.attached)return;ui($0(n,e.value),t,5,[n])};return e.value=i,e.attached=j0(),e}function $0(i,t){if(Jt(t)){const e=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{e.call(i),i._stopped=!0},t.map(n=>s=>!s._stopped&&n&&n(s))}else return t}const Dh=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&i.charCodeAt(2)>96&&i.charCodeAt(2)<123,K0=(i,t,e,n,s,r)=>{const o=s==="svg";t==="class"?O0(i,n,o):t==="style"?V0(i,e,n):Na(t)?du(t)||W0(i,t,e,n,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Z0(i,t,n,o))?(Ph(i,t,n),!i.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Rh(i,t,n,o,r,t!=="value")):i._isVueCE&&(/[A-Z]/.test(t)||!ze(n))?Ph(i,ss(t),n,r,t):(t==="true-value"?i._trueValue=n:t==="false-value"&&(i._falseValue=n),Rh(i,t,n,o))};function Z0(i,t,e,n){if(n)return!!(t==="innerHTML"||t==="textContent"||t in i&&Dh(t)&&ee(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&i.tagName==="IFRAME"||t==="form"||t==="list"&&i.tagName==="INPUT"||t==="type"&&i.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=i.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Dh(t)&&ze(e)?!1:t in i}const Aa=i=>{const t=i.props["onUpdate:modelValue"]||!1;return Jt(t)?e=>aa(t,e):t};function J0(i){i.target.composing=!0}function Nh(i){const t=i.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const dr=Symbol("_assign");function Fh(i,t,e){return t&&(i=i.trim()),e&&(i=Oa(i)),i}const uc={created(i,{modifiers:{lazy:t,trim:e,number:n}},s){i[dr]=Aa(s);const r=n||s.props&&s.props.type==="number";Ms(i,t?"change":"input",o=>{o.target.composing||i[dr](Fh(i.value,e,r))}),(e||r)&&Ms(i,"change",()=>{i.value=Fh(i.value,e,r)}),t||(Ms(i,"compositionstart",J0),Ms(i,"compositionend",Nh),Ms(i,"change",Nh))},mounted(i,{value:t}){i.value=t??""},beforeUpdate(i,{value:t,oldValue:e,modifiers:{lazy:n,trim:s,number:r}},o){if(i[dr]=Aa(o),i.composing)return;const a=(r||i.type==="number")&&!/^0\d/.test(i.value)?Oa(i.value):i.value,l=t??"";a!==l&&(document.activeElement===i&&i.type!=="range"&&(n&&t===e||s&&i.value.trim()===l)||(i.value=l))}},Q0={deep:!0,created(i,{value:t,modifiers:{number:e}},n){const s=Fa(t);Ms(i,"change",()=>{const r=Array.prototype.filter.call(i.options,o=>o.selected).map(o=>e?Oa(Ca(o)):Ca(o));i[dr](i.multiple?s?new Set(r):r:r[0]),i._assigning=!0,Gf(()=>{i._assigning=!1})}),i[dr]=Aa(n)},mounted(i,{value:t}){Uh(i,t)},beforeUpdate(i,t,e){i[dr]=Aa(e)},updated(i,{value:t}){i._assigning||Uh(i,t)}};function Uh(i,t){const e=i.multiple,n=Jt(t);if(!(e&&!n&&!Fa(t))){for(let s=0,r=i.options.length;s<r;s++){const o=i.options[s],a=Ca(o);if(e)if(n){const l=typeof a;l==="string"||l==="number"?o.selected=t.some(c=>String(c)===String(a)):o.selected=Ym(t,a)>-1}else o.selected=t.has(a);else if(za(Ca(o),t)){i.selectedIndex!==s&&(i.selectedIndex=s);return}}!e&&i.selectedIndex!==-1&&(i.selectedIndex=-1)}}function Ca(i){return"_value"in i?i._value:i.value}const t_=["ctrl","shift","alt","meta"],e_={stop:i=>i.stopPropagation(),prevent:i=>i.preventDefault(),self:i=>i.target!==i.currentTarget,ctrl:i=>!i.ctrlKey,shift:i=>!i.shiftKey,alt:i=>!i.altKey,meta:i=>!i.metaKey,left:i=>"button"in i&&i.button!==0,middle:i=>"button"in i&&i.button!==1,right:i=>"button"in i&&i.button!==2,exact:(i,t)=>t_.some(e=>i[`${e}Key`]&&!t.includes(e))},vr=(i,t)=>{const e=i._withMods||(i._withMods={}),n=t.join(".");return e[n]||(e[n]=(s,...r)=>{for(let o=0;o<t.length;o++){const a=e_[t[o]];if(a&&a(s,t))return}return i(s,...r)})},n_=tn({patchProp:K0},F0);let Oh;function i_(){return Oh||(Oh=p0(n_))}const s_=(...i)=>{const t=i_().createApp(...i),{mount:e}=t;return t.mount=n=>{const s=o_(n);if(!s)return;const r=t._component;!ee(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=e(s,!1,r_(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function r_(i){if(i instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&i instanceof MathMLElement)return"mathml"}function o_(i){return ze(i)?document.querySelector(i):i}const Mp="star_words_settings",a_={speechRate:.9,volume:1,voiceURI:null,p1Color:91368,p2Color:15208739},Bh=localStorage.getItem(Mp),l_=Bh?JSON.parse(Bh):a_,Fe=Us(l_);Ni(Fe,i=>{localStorage.setItem(Mp,JSON.stringify(i))});const Lr=window.speechSynthesis,c_=window.AudioContext||window.webkitAudioContext,ce=new c_,ll={SUCCESS:"https://raw.githubusercontent.com/walles/numbervaders/master/app/src/main/res/raw/medal_earned_tada.mp3",WRONG:"https://raw.githubusercontent.com/walles/numbervaders/master/app/src/main/res/raw/wrong_answer.wav",EXPLOSION:"https://raw.githubusercontent.com/walles/numbervaders/master/app/src/main/res/raw/cannon_explosion.mp3"},cl={},u_=i=>(cl[i]||(cl[i]=new Audio(i)),cl[i]);function Tr(){const i=c=>{const u=u_(c);u.currentTime=0,u.volume=.4,u.play().catch(d=>console.warn("SFX playback blocked or failed:",d))},t=(c,u="sine",d=.1,h=.1)=>{ce.state==="suspended"&&ce.resume();const f=ce.createOscillator(),p=ce.createGain();f.type=u,f.frequency.setValueAtTime(c,ce.currentTime),p.gain.setValueAtTime(h,ce.currentTime),p.gain.exponentialRampToValueAtTime(.001,ce.currentTime+d),f.connect(p),p.connect(ce.destination),f.start(),f.stop(ce.currentTime+d)};return{speak:(c,u=!0)=>{if(!Lr)return;const d=new SpeechSynthesisUtterance(c),h=/[\u4e00-\u9fa5\u3105-\u3129\u02CA\u02C7\u02CB\u02D9]/.test(c);d.lang=h?"zh-TW":"en-US",d.rate=Fe.speechRate;const f=Lr.getVoices();if(Fe.voiceURI){const p=f.find(_=>_.voiceURI===Fe.voiceURI);p&&(d.voice=p,d.lang=p.lang)}else if(h){const p=f.find(_=>_.lang.includes("zh-TW"))||f.find(_=>_.lang.includes("zh"))||f.find(_=>_.lang.includes("TW"));p&&(d.voice=p)}else{const p=f.find(m=>m.name==="Google US English"),_=f.find(m=>m.lang==="en-US");p?d.voice=p:_&&(d.voice=_)}u&&Lr.cancel(),u?setTimeout(()=>Lr.speak(d),50):Lr.speak(d)},playCorrect:()=>{t(1046.5,"sine",.15,.05),setTimeout(()=>t(1318.51,"sine",.25,.05),80)},playSuccess:()=>i(ll.SUCCESS),playWrong:()=>i(ll.WRONG),playExplosion:()=>i(ll.EXPLOSION),playThrust:()=>{ce.state==="suspended"&&ce.resume();const c=.8,u=ce.sampleRate*c,d=ce.createBuffer(1,u,ce.sampleRate),h=d.getChannelData(0);for(let g=0;g<u;g++)h[g]=Math.random()*2-1;const f=ce.createBufferSource();f.buffer=d;const p=ce.createBiquadFilter();p.type="lowpass",p.Q.value=1;const _=ce.currentTime;p.frequency.setValueAtTime(5e3,_),p.frequency.exponentialRampToValueAtTime(400,_+c);const m=ce.createGain();m.gain.setValueAtTime(0,_),m.gain.linearRampToValueAtTime(.08,_+.04),m.gain.exponentialRampToValueAtTime(.001,_+c),f.connect(p),p.connect(m),m.connect(ce.destination),f.start(),f.stop(_+c)},playTone:t,playBrake:()=>{ce.state==="suspended"&&ce.resume();const c=ce.currentTime,u=.6,d=ce.sampleRate*u,h=ce.createBuffer(1,d,ce.sampleRate),f=h.getChannelData(0);for(let M=0;M<d;M++){const w=Math.random()*2-1,A=Math.sin(M*.05)>0?1:.5;f[M]=w*A}const p=ce.createBufferSource();p.buffer=h;const _=ce.createBiquadFilter();_.type="bandpass",_.frequency.setValueAtTime(2500,c),_.frequency.exponentialRampToValueAtTime(800,c+u),_.Q.value=3;const m=ce.createOscillator();m.type="sawtooth",m.frequency.setValueAtTime(3500,c),m.frequency.exponentialRampToValueAtTime(1200,c+u);const g=ce.createOscillator();g.type="triangle",g.frequency.setValueAtTime(3550,c),g.frequency.exponentialRampToValueAtTime(1250,c+u);const x=ce.createOscillator();x.type="sine",x.frequency.value=50;const S=ce.createGain();S.gain.value=100,x.connect(S),S.connect(m.frequency),S.connect(g.frequency);const v=ce.createGain();v.gain.setValueAtTime(0,c),v.gain.linearRampToValueAtTime(.12,c+.05),v.gain.exponentialRampToValueAtTime(.001,c+u),p.connect(_),_.connect(v),m.connect(v),g.connect(v),v.connect(ce.destination),p.start(),m.start(),g.start(),x.start(),p.stop(c+u),m.stop(c+u),g.stop(c+u),x.stop(c+u)}}}const h_=[{q:"does",t:"做",tags:["verb"],exps:["He does work"]},{q:"pail",t:"提桶",tags:["object"],exps:["A blue pail"]},{q:"main",t:"主要的",tags:["adjective"],exps:["The main road"]},{q:"at",t:"在",tags:["preposition"],exps:["At the park"]},{q:"has",t:"有",tags:["verb"],exps:["She has apple"]},{q:"new",t:"新的",tags:["adjective"],exps:["A new car"]},{q:"year",t:"年",tags:["time"],exps:["A happy year"]},{q:"fun",t:"真有趣",tags:["adjective"],exps:["Play is fun"]},{q:"party",t:"派對",tags:["social"],exps:["A birthday party"]},{q:"green",t:"綠色",tags:["color"],exps:["Green grass"]}],d_=Object.freeze(Object.defineProperty({__proto__:null,default:h_},Symbol.toStringTag,{value:"Module"})),f_=[{q:"cat",t:"貓",tags:["animal"],exps:["A small cat"]},{q:"dog",t:"狗",tags:["animal"],exps:["A bark dog"]},{q:"bird",t:"鳥",tags:["animal"],exps:["A blue bird"]},{q:"lion",t:"獅子",tags:["animal"],exps:["A king lion"]},{q:"tiger",t:"老虎",tags:["animal"],exps:["A fast tiger"]},{q:"monkey",t:"猴子",tags:["animal"],exps:["A funny monkey"]},{q:"rabbit",t:"兔子",tags:["animal"],exps:["A long-eared rabbit"]},{q:"elephant",t:"大象",tags:["animal"],exps:["A huge elephant"]}],p_=Object.freeze(Object.defineProperty({__proto__:null,default:f_},Symbol.toStringTag,{value:"Module"})),m_=[{q:"cat",t:"貓",tags:["animal"],exps:["A cute cat"]},{q:"dog",t:"狗",tags:["animal"],exps:["A loyal dog"]},{q:"elephant",t:"大象",tags:["animal"],exps:["A giant elephant"]},{q:"lion",t:"獅子",tags:["animal"],exps:["A brave lion"]},{q:"monkey",t:"猴子",tags:["animal"],exps:["A clever monkey"]},{q:"rabbit",t:"兔子",tags:["animal"],exps:["A jumping rabbit"]},{q:"tiger",t:"老虎",tags:["animal"],exps:["A powerful tiger"]},{q:"bird",t:"鳥",tags:["animal"],exps:["A flying bird"]},{q:"apple",t:"蘋果",tags:["fruit"],exps:["A sweet apple"]},{q:"banana",t:"香蕉",tags:["fruit"],exps:["A yellow banana"]},{q:"orange",t:"橘子",tags:["fruit"],exps:["A juicy orange"]},{q:"grape",t:"葡萄",tags:["fruit"],exps:["A purple grape"]},{q:"lemon",t:"檸檬",tags:["fruit"],exps:["A sour lemon"]},{q:"strawberry",t:"草莓",tags:["fruit"],exps:["A red strawberry"]},{q:"red",t:"紅色",tags:["color"],exps:["Red apple"]},{q:"blue",t:"藍色",tags:["color"],exps:["Blue sky"]},{q:"green",t:"綠色",tags:["color"],exps:["Green grass"]},{q:"yellow",t:"黃色",tags:["color"],exps:["Yellow sun"]},{q:"purple",t:"紫色",tags:["color"],exps:["Purple flower"]},{q:"black",t:"黑色",tags:["color"],exps:["Black cat"]},{q:"white",t:"白色",tags:["color"],exps:["White cloud"]},{q:"one",t:"一",tags:["number"],exps:["One book"]},{q:"two",t:"二",tags:["number"],exps:["Two pens"]},{q:"three",t:"三",tags:["number"],exps:["Three birds"]},{q:"four",t:"四",tags:["number"],exps:["Four chairs"]},{q:"five",t:"五",tags:["number"],exps:["Five fingers"]},{q:"ten",t:"十",tags:["number"],exps:["Ten toes"]},{q:"water",t:"水",tags:["nature"],exps:["Clean water"]},{q:"sun",t:"太陽",tags:["nature"],exps:["The bright sun"]},{q:"moon",t:"月亮",tags:["nature"],exps:["The silver moon"]},{q:"star",t:"星星",tags:["nature"],exps:["A shining star"]},{q:"tree",t:"樹",tags:["nature"],exps:["A tall tree"]},{q:"flower",t:"花",tags:["nature"],exps:["A pretty flower"]},{q:"sea",t:"大海",tags:["nature"],exps:["Deep blue sea"]},{q:"house",t:"房子",tags:["object"],exps:["A big house"]},{q:"car",t:"汽車",tags:["object"],exps:["A fast car"]},{q:"book",t:"書",tags:["object"],exps:["An old book"]},{q:"pen",t:"筆",tags:["object"],exps:["A blue pen"]},{q:"table",t:"桌子",tags:["object"],exps:["A wooden table"]},{q:"chair",t:"椅子",tags:["object"],exps:["A comfortable chair"]},{q:"phone",t:"電話",tags:["object"],exps:["A smart phone"]},{q:"computer",t:"電腦",tags:["object"],exps:["A new computer"]},{q:"hat",t:"帽子",tags:["clothes"],exps:["A warm hat"]},{q:"shoes",t:"鞋子",tags:["clothes"],exps:["Black shoes"]},{q:"shirt",t:"襯衫",tags:["clothes"],exps:["A white shirt"]},{q:"pants",t:"褲子",tags:["clothes"],exps:["Blue pants"]},{q:"mother",t:"母親",tags:["family"],exps:["I love mother"]},{q:"father",t:"父親",tags:["family"],exps:["I love father"]},{q:"brother",t:"兄弟",tags:["family"],exps:["My little brother"]},{q:"sister",t:"姐妹",tags:["family"],exps:["My big sister"]},{q:"baby",t:"嬰兒",tags:["family"],exps:["A crying baby"]},{q:"friend",t:"朋友",tags:["people"],exps:["A good friend"]},{q:"doctor",t:"醫生",tags:["people"],exps:["A kind doctor"]},{q:"teacher",t:"老師",tags:["people"],exps:["A great teacher"]},{q:"student",t:"學生",tags:["people"],exps:["A hard student"]},{q:"run",t:"跑",tags:["verb"],exps:["I run fast"]},{q:"jump",t:"跳",tags:["verb"],exps:["I jump high"]},{q:"eat",t:"吃",tags:["verb"],exps:["I eat apple"]},{q:"drink",t:"喝",tags:["verb"],exps:["I drink water"]},{q:"sleep",t:"睡覺",tags:["verb"],exps:["I sleep early"]},{q:"read",t:"讀",tags:["verb"],exps:["I read book"]},{q:"write",t:"寫",tags:["verb"],exps:["I write letter"]},{q:"sing",t:"唱",tags:["verb"],exps:["I sing song"]},{q:"dance",t:"跳舞",tags:["verb"],exps:["I dance well"]},{q:"work",t:"工作",tags:["verb"],exps:["I work hard"]},{q:"play",t:"玩",tags:["verb"],exps:["I play game"]},{q:"hot",t:"熱",tags:["adjective"],exps:["Hot water"]},{q:"cold",t:"冷",tags:["adjective"],exps:["Cold wind"]},{q:"big",t:"大",tags:["adjective"],exps:["Big elephant"]},{q:"small",t:"小",tags:["adjective"],exps:["Small cat"]},{q:"good",t:"好",tags:["adjective"],exps:["Good boy"]},{q:"bad",t:"差",tags:["adjective"],exps:["Bad luck"]},{q:"happy",t:"開心",tags:["adjective"],exps:["Happy baby"]},{q:"sad",t:"難過",tags:["adjective"],exps:["Sad face"]},{q:"fast",t:"快",tags:["adjective"],exps:["Fast car"]},{q:"slow",t:"慢",tags:["adjective"],exps:["Slow turtle"]},{q:"day",t:"白天",tags:["time"],exps:["A bright day"]},{q:"night",t:"晚上",tags:["time"],exps:["A dark night"]},{q:"morning",t:"早上",tags:["time"],exps:["Good morning"]},{q:"evening",t:"傍晚",tags:["time"],exps:["Good evening"]},{q:"today",t:"今天",tags:["time"],exps:["Today is good"]},{q:"tomorrow",t:"明天",tags:["time"],exps:["See you tomorrow"]},{q:"monday",t:"星期一",tags:["time"],exps:["Work on Monday"]},{q:"sunday",t:"星期日",tags:["time"],exps:["Rest on Sunday"]},{q:"school",t:"學校",tags:["place"],exps:["Go to school"]},{q:"park",t:"公園",tags:["place"],exps:["Play in park"]},{q:"hospital",t:"醫院",tags:["place"],exps:["A big hospital"]},{q:"store",t:"商店",tags:["place"],exps:["Open a store"]},{q:"bread",t:"麵包",tags:["food"],exps:["Fresh bread"]},{q:"milk",t:"牛奶",tags:["food"],exps:["White milk"]},{q:"egg",t:"蛋",tags:["food"],exps:["One egg"]},{q:"rice",t:"米飯",tags:["food"],exps:["Eat rice"]},{q:"meat",t:"肉",tags:["food"],exps:["Good meat"]},{q:"cake",t:"蛋糕",tags:["food"],exps:["A sweet cake"]},{q:"ice cream",t:"冰淇淋",tags:["food"],exps:["Cold ice cream"]},{q:"box",t:"盒子",tags:["object"],exps:["A heavy box"]},{q:"key",t:"鑰匙",tags:["object"],exps:["The silver key"]},{q:"cup",t:"杯子",tags:["object"],exps:["Drink in cup"]},{q:"spoon",t:"湯匙",tags:["object"],exps:["A small spoon"]},{q:"fork",t:"叉子",tags:["object"],exps:["Eat with fork"]},{q:"knife",t:"刀子",tags:["object"],exps:["A sharp knife"]},{q:"rain",t:"雨",tags:["nature"],exps:["See the rain"]},{q:"snow",t:"雪",tags:["nature"],exps:["White snow"]},{q:"wind",t:"風",tags:["nature"],exps:["Strong wind"]},{q:"mountain",t:"山",tags:["nature"],exps:["A high mountain"]},{q:"river",t:"河流",tags:["nature"],exps:["A long river"]},{q:"cloud",t:"雲",tags:["nature"],exps:["A soft cloud"]},{q:"sky",t:"天空",tags:["nature"],exps:["Blue sky"]},{q:"hand",t:"手",tags:["body"],exps:["My small hand"]},{q:"foot",t:"腳",tags:["body"],exps:["My left foot"]},{q:"eye",t:"眼睛",tags:["body"],exps:["Big eyes"]},{q:"ear",t:"耳朵",tags:["body"],exps:["Long ears"]},{q:"nose",t:"鼻子",tags:["body"],exps:["My red nose"]},{q:"mouth",t:"嘴巴",tags:["body"],exps:["A small mouth"]},{q:"hair",t:"頭髮",tags:["body"],exps:["Long hair"]},{q:"face",t:"臉",tags:["body"],exps:["A happy face"]},{q:"head",t:"頭",tags:["body"],exps:["My big head"]},{q:"heart",t:"心臟",tags:["body"],exps:["A kind heart"]},{q:"fish",t:"魚",tags:["animal"],exps:["A swimming fish"]},{q:"horse",t:"馬",tags:["animal"],exps:["A running horse"]},{q:"cow",t:"母牛",tags:["animal"],exps:["A milking cow"]},{q:"sheep",t:"綿羊",tags:["animal"],exps:["A white sheep"]},{q:"duck",t:"鴨子",tags:["animal"],exps:["A swimming duck"]},{q:"pig",t:"豬",tags:["animal"],exps:["A fat pig"]},{q:"bee",t:"蜜蜂",tags:["animal"],exps:["A busy bee"]},{q:"bus",t:"公車",tags:["transport"],exps:["Wait for bus"]},{q:"train",t:"火車",tags:["transport"],exps:["Take the train"]},{q:"plane",t:"飛機",tags:["transport"],exps:["Fly a plane"]},{q:"bike",t:"腳踏車",tags:["transport"],exps:["Ride a bike"]},{q:"boat",t:"小船",tags:["transport"],exps:["Sail a boat"]},{q:"truck",t:"卡車",tags:["transport"],exps:["A heavy truck"]},{q:"walk",t:"走路",tags:["verb"],exps:["I walk slow"]},{q:"fly",t:"飛",tags:["verb"],exps:["Birds fly high"]},{q:"swim",t:"游泳",tags:["verb"],exps:["I swim well"]},{q:"talk",t:"說話",tags:["verb"],exps:["Talk to friend"]},{q:"listen",t:"聽",tags:["verb"],exps:["Listen to music"]},{q:"smile",t:"微笑",tags:["verb"],exps:["A happy smile"]},{q:"laugh",t:"大笑",tags:["verb"],exps:["They laugh loud"]},{q:"cry",t:"哭",tags:["verb"],exps:["Don't cry now"]},{q:"think",t:"思考",tags:["verb"],exps:["I think hard"]},{q:"learn",t:"學習",tags:["verb"],exps:["Learn new word"]},{q:"watch",t:"看 (觀察)",tags:["verb"],exps:["Watch movie"]},{q:"long",t:"長",tags:["adjective"],exps:["A long road"]},{q:"short",t:"短",tags:["adjective"],exps:["A short hair"]},{q:"new",t:"新",tags:["adjective"],exps:["A new world"]},{q:"old",t:"舊",tags:["adjective"],exps:["An old friend"]},{q:"beautiful",t:"漂亮",tags:["adjective"],exps:["Beautiful flower"]},{q:"ugly",t:"醜陋",tags:["adjective"],exps:["An ugly box"]},{q:"clean",t:"乾淨",tags:["adjective"],exps:["A clean room"]},{q:"dirty",t:"髒",tags:["adjective"],exps:["Dirty shoes"]},{q:"rich",t:"富有",tags:["adjective"],exps:["A rich man"]},{q:"poor",t:"貧窮",tags:["adjective"],exps:["A poor family"]},{q:"window",t:"窗戶",tags:["object"],exps:["Open the window"]},{q:"door",t:"門",tags:["object"],exps:["Close the door"]},{q:"bed",t:"床",tags:["object"],exps:["Go to bed"]},{q:"clock",t:"時鐘",tags:["object"],exps:["A round clock"]},{q:"lamp",t:"燈",tags:["object"],exps:["Turn on lamp"]},{q:"mirror",t:"鏡子",tags:["object"],exps:["Look in mirror"]},{q:"soap",t:"肥皂",tags:["object"],exps:["Use some soap"]},{q:"towel",t:"毛巾",tags:["object"],exps:["A dry towel"]},{q:"city",t:"城市",tags:["place"],exps:["A busy city"]},{q:"country",t:"國家",tags:["place"],exps:["My home country"]},{q:"road",t:"道路",tags:["place"],exps:["A wide road"]},{q:"bridge",t:"橋",tags:["place"],exps:["Cross the bridge"]},{q:"garden",t:"花園",tags:["place"],exps:["A green garden"]},{q:"farm",t:"農場",tags:["place"],exps:["An old farm"]},{q:"forest",t:"森林",tags:["place"],exps:["A dark forest"]},{q:"island",t:"島嶼",tags:["place"],exps:["A small island"]},{q:"lake",t:"湖泊",tags:["place"],exps:["A mountain lake"]},{q:"kitchen",t:"廚房",tags:["place"],exps:["Cook in kitchen"]},{q:"room",t:"房間",tags:["place"],exps:["In my room"]},{q:"orange",t:"橘色",tags:["color"],exps:["Orange orange"]},{q:"pink",t:"粉紅色",tags:["color"],exps:["Pink dress"]},{q:"brown",t:"咖啡色",tags:["color"],exps:["Brown dog"]},{q:"gray",t:"灰色",tags:["color"],exps:["Gray sky"]},{q:"silver",t:"銀色",tags:["color"],exps:["Silver moon"]},{q:"gold",t:"金色",tags:["color"],exps:["Gold ring"]},{q:"soup",t:"湯",tags:["food"],exps:["Chicken soup"]},{q:"salad",t:"沙拉",tags:["food"],exps:["Green salad"]},{q:"pizza",t:"披薩",tags:["food"],exps:["Eat pizza"]},{q:"burger",t:"漢堡",tags:["food"],exps:["Beef burger"]},{q:"juice",t:"果汁",tags:["food"],exps:["Orange juice"]},{q:"tea",t:"茶",tags:["food"],exps:["Hot tea"]},{q:"coffee",t:"咖啡",tags:["food"],exps:["Black coffee"]},{q:"ball",t:"球",tags:["object"],exps:["Kick the ball"]},{q:"toy",t:"玩具",tags:["object"],exps:["Play with toy"]},{q:"gift",t:"禮物",tags:["object"],exps:["A small gift"]},{q:"camera",t:"相機",tags:["object"],exps:["Take my camera"]},{q:"map",t:"地圖",tags:["object"],exps:["Road map"]},{q:"umbrella",t:"傘",tags:["object"],exps:["Blue umbrella"]},{q:"money",t:"錢",tags:["object"],exps:["I have money"]},{q:"music",t:"音樂",tags:["concept"],exps:["Play loud music"]},{q:"time",t:"時間",tags:["concept"],exps:["No more time"]},{q:"love",t:"愛",tags:["concept"],exps:["I love you"]},{q:"help",t:"幫助",tags:["verb"],exps:["Please help me"]},{q:"look",t:"看",tags:["verb"],exps:["Look out"]},{q:"give",t:"給",tags:["verb"],exps:["Give me book"]},{q:"buy",t:"買",tags:["verb"],exps:["Buy a car"]},{q:"sell",t:"賣",tags:["verb"],exps:["Sell my house"]},{q:"open",t:"打開",tags:["verb"],exps:["Open your eye"]},{q:"close",t:"關閉",tags:["verb"],exps:["Close your heart"]},{q:"start",t:"開始",tags:["verb"],exps:["Start adventure"]},{q:"stop",t:"停止",tags:["verb"],exps:["Stop crying"]},{q:"quiet",t:"安靜",tags:["adjective"],exps:["Quiet forest"]},{q:"loud",t:"大聲",tags:["adjective"],exps:["Loud music"]},{q:"smart",t:"聰明",tags:["adjective"],exps:["A smart boy"]},{q:"cool",t:"酷/涼快",tags:["adjective"],exps:["A cool wind"]},{q:"winter",t:"冬天",tags:["time"],exps:["A cold winter"]},{q:"summer",t:"夏天",tags:["time"],exps:["A hot summer"]},{q:"sand",t:"沙子",tags:["nature"],exps:["Yellow sand"]},{q:"beach",t:"海灘",tags:["nature"],exps:["A beautiful beach"]},{q:"grass",t:"草",tags:["nature"],exps:["Green grass"]}],g_=Object.freeze(Object.defineProperty({__proto__:null,default:m_},Symbol.toStringTag,{value:"Module"})),__=[{a:"ㄅㄚ",q:"八"},{a:"ㄏㄨㄚˊ",q:"華"},{a:"ㄇㄛˊ",q:"磨"},{a:"ㄈㄤ",q:"方"},{a:"ㄉㄚˋ",q:"大"},{a:"ㄊㄧㄢ",q:"天"},{a:"ㄋㄧㄠˇ",q:"鳥"},{a:"ㄌㄨㄥˊ",q:"龍"},{a:"ㄍㄨㄛˊ",voiceText:"國",q:"國"},{a:"ㄎㄞ",q:"開"},{a:"ㄏㄠˇ",q:"好"},{a:"ㄐㄧㄚ",q:"家"},{a:"ㄑㄧㄥ",q:"青"},{a:"ㄒㄧㄠˇ",q:"小"},{a:"ㄓㄨㄥ",q:"中"},{a:"ㄔㄜ",q:"車"},{a:"ㄕㄨ",q:"書"},{a:"ㄖㄣˊ",q:"人"},{a:"ㄗㄞˋ",q:"在"},{a:"ㄘㄠˇ",q:"草"},{a:"ㄙㄢ",q:"三"},{a:"ㄧㄤˊ",q:"羊"},{a:"ㄨㄛˇ",q:"我"},{a:"ㄩˊ",q:"魚"},{a:"ㄇㄠ",q:"貓"},{a:"ㄍㄡˇ",q:"狗"},{a:"ㄕㄢ",q:"山"},{a:"ㄕㄨㄟˇ",q:"水"},{a:"ㄎㄨㄥ",q:"空"},{a:"ㄅㄞˊ",q:"白"}],v_=Object.freeze(Object.defineProperty({__proto__:null,default:__},Symbol.toStringTag,{value:"Module"})),x_=[{q:"爸",a:"ㄅㄚˋ",exps:["爸爸"]},{q:"大",a:"ㄉㄚˋ",exps:["大小"]},{q:"老",a:"ㄌㄠˇ",exps:["老師"]},{q:"日",a:"ㄖˋ",exps:["日本"]},{q:"白",a:"ㄅㄞˊ",exps:["白色"]},{q:"弟",a:"ㄉㄧˋ",exps:["兄弟"]},{q:"藍",a:"ㄌㄢˊ",exps:["藍天"]},{q:"熱",a:"ㄖㄜˋ",exps:["熱水"]},{q:"本",a:"ㄅㄣˇ",exps:["書本"]},{q:"豆",a:"ㄉㄡˋ",exps:["豆漿"]},{q:"亮",a:"ㄌㄧㄤˋ",exps:["明亮"]},{q:"人",a:"ㄖㄣˊ",exps:["大人"]},{q:"報",a:"ㄅㄠˋ",exps:["報紙"]},{q:"電",a:"ㄉㄧㄢˋ",exps:["電腦"]},{q:"路",a:"ㄌㄨˋ",exps:["馬路"]},{q:"肉",a:"ㄖㄡˋ",exps:["烤肉"]},{q:"步",a:"ㄅㄨˋ",exps:["散步"]},{q:"燈",a:"ㄉㄥ",exps:["電燈"]},{q:"路",a:"ㄌㄨˋ",exps:["馬路"]},{q:"軟",a:"ㄖㄨㄢˇ",exps:["柔軟"]},{q:"冰",a:"ㄅㄧㄥ",exps:["冰塊"]},{q:"島",a:"ㄉㄠˇ",exps:["島嶼"]},{q:"禮",a:"ㄌㄧˇ",exps:["禮物"]},{q:"龍",a:"ㄌㄨㄥˊ",exps:["恐龍"]}],y_=Object.freeze(Object.defineProperty({__proto__:null,default:x_},Symbol.toStringTag,{value:"Module"})),S_=[{q:"跳",a:"ㄊㄧㄠˋ",exps:["跳舞"]},{q:"蝦",a:"ㄒㄧㄚ",exps:["龍蝦"]},{q:"解",a:"ㄐㄧㄝˇ",exps:["解答"]},{q:"球",a:"ㄑㄧㄡˊ",exps:["皮球"]},{q:"現",a:"ㄒㄧㄢˋ",exps:["現況"]},{q:"亮",a:"ㄌㄧㄤˋ",exps:["明亮"]},{q:"聽",a:"ㄊㄧㄥ",exps:["聽話"]},{q:"抓",a:"ㄓㄨㄚ",exps:["抓癢"]},{q:"國",a:"ㄍㄨㄛˊ",exps:["國家"]},{q:"快",a:"ㄎㄨㄞˋ",exps:["快速"]},{q:"睡",a:"ㄕㄨㄟˋ",exps:["睡覺"]},{q:"船",a:"ㄔㄨㄢˊ",exps:["帆船"]},{q:"滾",a:"ㄍㄨㄣˇ",exps:["滾動"]},{q:"光",a:"ㄍㄨㄤ",exps:["陽光"]},{q:"紅",a:"ㄏㄨㄥˊ",exps:["紅色"]},{q:"雪",a:"ㄒㄩㄝˇ",exps:["雪人"]},{q:"選",a:"ㄒㄩㄢˇ",exps:["選擇"]},{q:"裙",a:"ㄑㄩㄣˊ",exps:["短裙"]},{q:"雄",a:"ㄒㄩㄥˊ",exps:["英雄"]},{q:"夾",a:"ㄐㄧㄚˊ",exps:["夾擊"]},{q:"烈",a:"ㄌㄧㄝˋ",exps:["強烈"]},{q:"鳥",a:"ㄋㄧㄠˇ",exps:["小鳥"]},{q:"六",a:"ㄌㄧㄡˋ",exps:["星期六"]},{q:"麵",a:"ㄇㄧㄢˋ",exps:["麵包"]},{q:"牆",a:"ㄑㄧㄤˊ",exps:["牆角"]},{q:"刷",a:"ㄕㄨㄚ",exps:["刷子"]},{q:"火",a:"ㄏㄨㄛˇ",exps:["火燄"]},{q:"壞",a:"ㄏㄨㄞˋ",exps:["壞蛋"]},{q:"退",a:"ㄊㄨㄟˋ",exps:["退步"]},{q:"短",a:"ㄉㄨㄢˇ",exps:["短缺"]},{q:"婚",a:"ㄏㄨㄣ",exps:["結婚"]},{q:"黃",a:"ㄏㄨㄤˊ",exps:["黃金"]},{q:"中",a:"ㄓㄨㄥ",exps:["中央"]},{q:"學",a:"ㄒㄩㄝˊ",exps:["求學"]},{q:"捐",a:"ㄐㄩㄢ",exps:["捐贈"]},{q:"運",a:"ㄩㄣˋ",exps:["運動"]},{q:"窮",a:"ㄑㄩㄥˊ",exps:["貧窮"]}],M_=Object.freeze(Object.defineProperty({__proto__:null,default:S_},Symbol.toStringTag,{value:"Module"})),b_=[{q:"字",a:"ㄗˋ",exps:["文字"]},{q:"止",a:"ㄓˇ",exps:["停止"]},{q:"死",a:"ㄙˇ",exps:["死亡"]},{q:"市",a:"ㄕˋ",exps:["城市"]},{q:"子",a:"ㄗˇ",exps:["子彈"]},{q:"紙",a:"ㄓˇ",exps:["報紙"]},{q:"寺",a:"ㄙˋ",exps:["寺廟"]},{q:"是",a:"ㄕˋ",exps:["是非"]},{q:"鯨",a:"ㄐㄧㄥ",exps:["鯨魚"]},{q:"金",a:"ㄐㄧㄣ",exps:["黃金"]},{q:"風",a:"ㄈㄥ",exps:["風箏"]},{q:"分",a:"ㄈㄣ",exps:["分工"]},{q:"層",a:"ㄘㄥˊ",exps:["樓層"]},{q:"乘",a:"ㄔㄥˊ",exps:["乘車"]},{q:"博",a:"ㄅㄛˊ",exps:["博學"]},{q:"偶",a:"ㄡˇ",exps:["偶像"]},{q:"佛",a:"ㄈㄛˊ",exps:["佛祖"]},{q:"剖",a:"ㄆㄡˇ",exps:["解剖"]},{q:"老",a:"ㄌㄠˇ",exps:["老師"]},{q:"腦",a:"ㄋㄠˇ",exps:["大腦"]},{q:"雷",a:"ㄌㄟˊ",exps:["雷電"]},{q:"內",a:"ㄋㄟˋ",exps:["內容"]},{q:"空",a:"ㄎㄨㄥ",exps:["空間"]},{q:"昆",a:"ㄎㄨㄣ",exps:["昆蟲"]},{q:"正",a:"ㄓㄥˋ",exps:["立正"]},{q:"珍",a:"ㄓㄣ",exps:["珍惜"]}],w_=Object.freeze(Object.defineProperty({__proto__:null,default:b_},Symbol.toStringTag,{value:"Module"})),zh=Object.assign({"../assets/vocabularies/251222.json":d_,"../assets/vocabularies/animals.json":p_,"../assets/vocabularies/default.json":g_,"../assets/vocabularies/zhuyin.json":v_,"../assets/vocabularies/ㄅㄉㄌ.json":y_,"../assets/vocabularies/三拼字.json":M_,"../assets/vocabularies/刁鑽音.json":w_}),Ra=[];var _f;for(const i in zh){const t=((_f=i.split("/").pop())==null?void 0:_f.replace(".json",""))||"unknown",e=zh[i].default;Ra.push({name:t,path:i,data:e})}const Cu=Us({currentListName:localStorage.getItem("vocab_list")||"default"}),E_=Au(()=>{var t;const i=Ra.find(e=>e.name===Cu.currentListName);return i?i.data:((t=Ra[0])==null?void 0:t.data)||[]}),T_=i=>{Cu.currentListName=i,localStorage.setItem("vocab_list",i)},Ii={state:Cu,lists:Ra,currentList:E_,selectList:T_};function A_(i){const{speak:t,playCorrect:e,playExplosion:n,playThrust:s}=Tr(),r=te("menu"),o=te(0),a=te(null),l=te([]),c=te({x:50,y:80}),u=te(null),d=Us(new Set),h=.15,f=1.8;let p=0,_=null,m=null,g=0,x=2e3,S=1;const v=()=>{r.value="playing",o.value=0,l.value=[],S=1,c.value={x:50,y:80},u.value=null,A(),g=performance.now(),_=requestAnimationFrame(b),m=window.setInterval(L,x)},M=()=>{_&&cancelAnimationFrame(_),m&&clearInterval(m)},w=()=>{if(!a.value)return;const k=a.value,U=k.q,W=k.exps&&k.exps.length>0?`. ${k.exps[0]}`:"";t(`${U}${W}`)},A=()=>{const k=Ii.currentList.value;if(k.length===0)return;const U=Math.floor(Math.random()*k.length);a.value=k[U],w()},L=()=>{if(r.value!=="playing")return;const k=Ii.currentList.value;if(k.length===0)return;const U=Math.random()<.4;let W=a.value;if(!U||!W){let B,O=0;do B=k[Math.floor(Math.random()*k.length)],O++;while(B===a.value&&O<10);W=B}W&&l.value.push({id:Date.now()+Math.random(),word:W,x:Math.random()*80+10,y:-10,speed:(Math.random()*.2+.3)*S,isTarget:W===a.value})},b=k=>{const U=k-g;g=k;const W=c.value.x,B=c.value.y;let O=0,H=0;if(d.has("ArrowLeft")&&(O-=1),d.has("ArrowRight")&&(O+=1),d.has("ArrowUp")&&(H-=1),d.has("ArrowDown")&&(H+=1),O!==0||H!==0){u.value=null;const dt=Math.sqrt(O*O+H*H),_t=O/dt,Lt=H/dt,ot=window.innerWidth,et=window.innerHeight-100,X=ot/et,Y=f*(U/16);c.value.x=Math.max(5,Math.min(95,c.value.x+_t*Y)),c.value.y=Math.max(5,Math.min(95,c.value.y+Lt*Y*X))}else if(u.value){const dt=1-Math.pow(1-h,U/16);c.value.x+=(u.value.x-c.value.x)*dt,c.value.y+=(u.value.y-c.value.y)*dt,Math.abs(u.value.x-c.value.x)<.1&&Math.abs(u.value.y-c.value.y)<.1&&(u.value=null)}Math.abs(c.value.x-W)>.1||Math.abs(c.value.y-B)>.1?p<=0&&(s(),p=1):p=0,l.value.forEach(dt=>{dt.y+=dt.speed*(U/16)}),l.value=l.value.filter(dt=>!(dt.y>110));const ut=12,gt=10;l.value=l.value.filter(dt=>{var et,X;const _t=Math.abs(dt.x-c.value.x),Lt=Math.abs(dt.y-c.value.y);return _t<ut/2+3&&Lt<gt/2+3?dt.isTarget?(o.value+=10,S+=.05,e(),(et=i==null?void 0:i.onHitCorrect)==null||et.call(i,dt.x,dt.y),A(),!1):(o.value=Math.max(0,o.value-5),n(),(X=i==null?void 0:i.onHitWrong)==null||X.call(i,dt.x,dt.y),!1):!0}),r.value==="playing"&&(_=requestAnimationFrame(b))},E=(k,U)=>{u.value={x:Math.max(5,Math.min(95,k)),y:Math.max(5,Math.min(95,U))}},D=(k,U)=>{U?d.add(k):d.delete(k)};return ls(()=>{M()}),{gameState:r,score:o,currentTarget:a,fallingItems:l,playerPos:c,startGame:v,setPlayerTarget:E,setKey:D,speak:t,announceTarget:w}}const C_={class:"ui-header"},R_={class:"header-left"},P_={class:"header-center"},I_={key:0,class:"target-display"},L_={class:"header-right"},D_={class:"score-board"},N_={class:"value"},F_={class:"game-world"},U_={class:"meteor-body"},O_={key:0,class:"score-popup"},B_=as({__name:"FallingWordsGame",emits:["exit"],setup(i,{emit:t}){const e=t,n=te([]);let s=0;const r=(S,v)=>{const M=s++;n.value.push({id:M,x:S,y:v}),setTimeout(()=>{n.value=n.value.filter(w=>w.id!==M)},500)},{gameState:o,score:a,currentTarget:l,fallingItems:c,playerPos:u,startGame:d,setKey:h,setPlayerTarget:f,announceTarget:p}=A_({onHitWrong:(S,v)=>r(S,v)}),_=S=>{o.value==="playing"&&(S.key==="Escape"&&e("exit"),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(S.key)&&h(S.key,!0))},m=S=>{["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(S.key)&&h(S.key,!1)},g=S=>{if(o.value!=="playing")return;const v=S.target;if(v.closest("button")||v.closest(".back-btn")||v.closest(".target-word"))return;let M,w;if(S instanceof MouseEvent)M=S.clientX,w=S.clientY;else{const k=S.touches[0];if(!k)return;M=k.clientX,w=k.clientY}const A=100,L=window.innerHeight-A;let b=w-A;b=Math.max(0,Math.min(L,b));const E=M/window.innerWidth*100,D=b/L*100;f(E,D)},x=te(!1);return Ni(a,(S,v)=>{S>v&&(x.value=!0,setTimeout(()=>{x.value=!1},1e3))}),Er(()=>{window.addEventListener("keydown",_),window.addEventListener("keyup",m),d()}),ls(()=>{window.removeEventListener("keydown",_),window.removeEventListener("keyup",m)}),(S,v)=>(qt(),Kt("div",{class:"game-container",onClick:g,onTouchstart:g},[v[7]||(v[7]=pt("div",{class:"stars"},null,-1)),v[8]||(v[8]=pt("div",{class:"stars2"},null,-1)),pt("div",C_,[pt("div",R_,[pt("button",{class:"back-btn",onClick:v[0]||(v[0]=vr(M=>S.$emit("exit"),["stop"]))},"⬅ BACK")]),pt("div",P_,[Wt(l)?(qt(),Kt("div",I_,[v[3]||(v[3]=pt("div",{class:"target-hint"},"FIND:",-1)),pt("div",{class:"target-word",onClick:v[1]||(v[1]=vr(M=>Wt(p)(),["stop"]))},[Ea(me(Wt(l).t)+" ",1),v[2]||(v[2]=pt("span",{class:"audio-icon"},"🔊",-1))])])):_n("",!0)]),pt("div",L_,[pt("div",D_,[v[4]||(v[4]=pt("span",{class:"label"},"SCORE",-1)),pt("span",N_,me(Wt(a)),1)])])]),pt("div",F_,[(qt(!0),Kt(Re,null,gn(n.value,M=>(qt(),Kt("div",{key:M.id,class:"explosion",style:$e({left:M.x+"%",top:M.y+"%"})},"💥",4))),128)),(qt(!0),Kt(Re,null,gn(Wt(c),M=>(qt(),Kt("div",{key:M.id,class:"falling-item",style:$e({left:M.x+"%",top:M.y+"%"})},[pt("div",U_,me(M.word.q),1),v[5]||(v[5]=pt("div",{class:"meteor-tail"},null,-1))],4))),128)),pt("div",{class:"player",style:$e({left:Wt(u).x+"%",top:Wt(u).y+"%"})},[x.value?(qt(),Kt("div",O_,"+10!")):_n("",!0),v[6]||(v[6]=vp('<svg viewBox="0 0 512 512" width="70" height="80" class="rocket-svg" data-v-fdf2f3fe><path d="M150,450 q-50,0 -30,-100 l30,50 z" fill="#ff4d4d" stroke="#333" stroke-width="4" data-v-fdf2f3fe></path><path d="M362,450 q50,0 30,-100 l-30,50 z" fill="#ff4d4d" stroke="#333" stroke-width="4" data-v-fdf2f3fe></path><path d="M256,20 c-100,200 -80,350 -80,400 h160 c0,-50 20,-200 -80,-400z" fill="#f5f5f5" stroke="#333" stroke-width="6" data-v-fdf2f3fe></path><path d="M256,20 c40,150 40,300 40,400 h-80 c0,-100 0,-250 40,-400z" fill="#e0e0e0" data-v-fdf2f3fe></path><path d="M256,20 c-30,60 -35,100 -35,130 h70 c0,-30 -5,-70 -35,-130z" fill="#ff4d4d" stroke="#333" stroke-width="4" data-v-fdf2f3fe></path><circle cx="256" cy="240" r="35" fill="#66ccff" stroke="#333" stroke-width="6" data-v-fdf2f3fe></circle><path d="M256,215 q20,10 0,50" fill="white" opacity="0.3" data-v-fdf2f3fe></path><path d="M220,430 q36,80 72,0" fill="#ffeb3b" class="main-flame" stroke="#ff9800" stroke-width="2" data-v-fdf2f3fe></path><path d="M236,430 q20,50 40,0" fill="#fff" opacity="0.8" class="inner-flame" data-v-fdf2f3fe></path></svg>',1))],4)])],32))}}),cs=(i,t)=>{const e=i.__vccOpts||i;for(const[n,s]of t)e[n]=s;return e},z_=cs(B_,[["__scopeId","data-v-fdf2f3fe"]]);function k_(i){const{speak:t,playCorrect:e,playSuccess:n,playExplosion:s,playThrust:r}=Tr(),o=te("menu"),a=te(0),l=te(null),c=te(0),u=te([]),d=te([]),h=te({x:50,y:80}),f=te(null),p=Us(new Set),_=.15,m=1.8;let g=0,x=null,S=null,v=0,M=1200,w=1;const A=()=>{o.value="playing",a.value=0,u.value=[],w=1,h.value={x:50,y:80},f.value=null,c.value=0,E(),v=performance.now(),x=requestAnimationFrame(k),S=window.setInterval(D,M)},L=()=>{x&&cancelAnimationFrame(x),S&&clearInterval(S)},b=()=>{if(!l.value)return;const B=l.value,O=B.q,H=B.exps&&B.exps.length>0?`. ${B.exps[0]}`:"";t(`${O}${H}`)},E=()=>{const B=Ii.currentList.value;if(B.length===0)return;const O=Math.floor(Math.random()*B.length);l.value=B[O],c.value=0;const H=l.value.a||l.value.q,q=[...new Set(H.split(""))],gt="abcdefghijklmnopqrstuvwxyz".split("").filter(ot=>!q.some(et=>et.toLowerCase()===ot)).sort(()=>Math.random()-.5),dt=/^[A-Z]/.test(H),_t=gt.map(ot=>dt&&Math.random()<.3?ot.toUpperCase():ot),Lt=[...q,..._t.slice(0,Math.max(0,8-q.length))];d.value=Lt.slice(0,8),b()},D=()=>{if(o.value!=="playing"||!l.value)return;const B=l.value,H=(B.a||B.q)[c.value],q=Math.random()<.4;let ut=H;if(!q){const gt=d.value.filter(dt=>dt!==H);ut=gt[Math.floor(Math.random()*gt.length)]||(H===H.toUpperCase()?"X":"x")}u.value.push({id:Date.now()+Math.random(),char:ut,x:Math.random()*80+10,y:-10,speed:(Math.random()*.2+.3)*w,isTarget:ut===H})},k=B=>{const O=B-v;v=B;const H=h.value.x,q=h.value.y;let ut=0,gt=0;if(p.has("ArrowLeft")&&(ut-=1),p.has("ArrowRight")&&(ut+=1),p.has("ArrowUp")&&(gt-=1),p.has("ArrowDown")&&(gt+=1),ut!==0||gt!==0){f.value=null;const ot=Math.sqrt(ut*ut+gt*gt),et=ut/ot,X=gt/ot,Y=window.innerWidth,ft=window.innerHeight-100,mt=Y/ft,lt=m*(O/16);h.value.x=Math.max(5,Math.min(95,h.value.x+et*lt)),h.value.y=Math.max(5,Math.min(95,h.value.y+X*lt*mt))}else if(f.value){const ot=1-Math.pow(1-_,O/16);h.value.x+=(f.value.x-h.value.x)*ot,h.value.y+=(f.value.y-h.value.y)*ot,Math.abs(f.value.x-h.value.x)<.1&&Math.abs(f.value.y-h.value.y)<.1&&(f.value=null)}Math.abs(h.value.x-H)>.1||Math.abs(h.value.y-q)>.1?g<=0&&(r(),g=1):g=0,u.value.forEach(ot=>{ot.y+=ot.speed*(O/16)}),u.value=u.value.filter(ot=>ot.y<=110);const _t=12,Lt=10;u.value=u.value.filter(ot=>{var ft,mt;const et=Math.abs(ot.x-h.value.x),X=Math.abs(ot.y-h.value.y);if(et<_t/2+3&&X<Lt/2+3){const lt=l.value,St=(lt==null?void 0:lt.a)||(lt==null?void 0:lt.q)||"",I=St[c.value];return ot.char===I?(a.value+=10,c.value++,(ft=i==null?void 0:i.onHitCorrect)==null||ft.call(i,ot.x,ot.y),c.value>=St.length?(a.value+=50,w+=.05,n(),E()):e(),!1):(s(),(mt=i==null?void 0:i.onHitWrong)==null||mt.call(i,ot.x,ot.y),c.value=0,b(),!1)}return!0}),o.value==="playing"&&(x=requestAnimationFrame(k))},U=(B,O)=>{f.value={x:Math.max(5,Math.min(95,B)),y:Math.max(5,Math.min(95,O))}},W=(B,O)=>{O?p.add(B):p.delete(B)};return ls(()=>{L()}),{gameState:o,score:a,currentTarget:l,spellingIndex:c,fallingItems:u,playerPos:h,startGame:A,setPlayerTarget:U,setKey:W,speak:t,announceTarget:b}}const V_={class:"ui-header"},H_={class:"header-left"},G_={class:"header-center"},W_={key:0,class:"spelling-display"},q_={class:"chinese-hint"},X_={class:"header-right"},j_={class:"score-board"},Y_={class:"value"},$_={class:"game-world"},K_={class:"meteor-letter"},Z_={key:0,class:"score-popup"},J_=as({__name:"SpellingGame",emits:["exit"],setup(i,{emit:t}){const e=t,n=te([]);let s=0;const r=(M,w)=>{const A=s++;n.value.push({id:A,x:M,y:w}),setTimeout(()=>{n.value=n.value.filter(L=>L.id!==A)},500)},{gameState:o,score:a,currentTarget:l,spellingIndex:c,fallingItems:u,playerPos:d,startGame:h,setKey:f,setPlayerTarget:p,announceTarget:_}=k_({onHitWrong:(M,w)=>r(M,w)}),m=M=>{o.value==="playing"&&(M.key==="Escape"&&e("exit"),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(M.key)&&f(M.key,!0))},g=M=>{["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(M.key)&&f(M.key,!1)},x=M=>{if(o.value!=="playing")return;const w=M.target;if(w.closest("button")||w.closest(".back-btn")||w.closest(".target-word"))return;let A,L;if(M instanceof MouseEvent)A=M.clientX,L=M.clientY;else{const W=M.touches[0];if(!W)return;A=W.clientX,L=W.clientY}const b=100,E=window.innerHeight-b;let D=L-b;D=Math.max(0,Math.min(E,D));const k=A/window.innerWidth*100,U=D/E*100;p(k,U)},S=te(!1);Ni(a,(M,w)=>{M>w&&(S.value=!0,setTimeout(()=>{S.value=!1},1e3))}),Er(()=>{window.addEventListener("keydown",m),window.addEventListener("keyup",g),h()}),ls(()=>{window.removeEventListener("keydown",m),window.removeEventListener("keyup",g)});const v=Au(()=>l.value?l.value.q.split("").map((M,w)=>({char:M,isCaught:w<c.value,isCurrent:w===c.value})):[]);return(M,w)=>(qt(),Kt("div",{class:"game-container",onClick:x,onTouchstart:x},[w[6]||(w[6]=pt("div",{class:"stars"},null,-1)),w[7]||(w[7]=pt("div",{class:"stars2"},null,-1)),pt("div",V_,[pt("div",H_,[pt("button",{class:"back-btn",onClick:w[0]||(w[0]=vr(A=>M.$emit("exit"),["stop"]))},"⬅ BACK")]),pt("div",G_,[Wt(l)?(qt(),Kt("div",W_,[pt("div",q_,me(Wt(l).t),1),pt("div",{class:"word-progress",onClick:w[1]||(w[1]=vr(A=>Wt(_)(),["stop"]))},[(qt(!0),Kt(Re,null,gn(v.value,(A,L)=>(qt(),Kt("span",{key:L,class:Wn(["char-box",{caught:A.isCaught,current:A.isCurrent}])},me(A.char),3))),128)),w[2]||(w[2]=pt("span",{class:"audio-icon"},"🔊",-1))])])):_n("",!0)]),pt("div",X_,[pt("div",j_,[w[3]||(w[3]=pt("span",{class:"label"},"SCORE",-1)),pt("span",Y_,me(Wt(a)),1)])])]),pt("div",$_,[(qt(!0),Kt(Re,null,gn(n.value,A=>(qt(),Kt("div",{key:A.id,class:"explosion",style:$e({left:A.x+"%",top:A.y+"%"})},"💥",4))),128)),(qt(!0),Kt(Re,null,gn(Wt(u),A=>(qt(),Kt("div",{key:A.id,class:"falling-item",style:$e({left:A.x+"%",top:A.y+"%"})},[pt("div",K_,me(A.char),1),w[4]||(w[4]=pt("div",{class:"meteor-tail"},null,-1))],4))),128)),pt("div",{class:"player",style:$e({left:Wt(d).x+"%",top:Wt(d).y+"%"})},[S.value?(qt(),Kt("div",Z_,"+10!")):_n("",!0),w[5]||(w[5]=vp('<svg viewBox="0 0 512 512" width="100" height="65" class="ufo-svg" data-v-31301ed5><ellipse cx="256" cy="320" rx="200" ry="60" fill="#9e9e9e" stroke="#424242" stroke-width="8" data-v-31301ed5></ellipse><ellipse cx="256" cy="310" rx="180" ry="50" fill="#bdbdbd" data-v-31301ed5></ellipse><path d="M160,300 q96,-150 192,0" fill="#66ccff" opacity="0.8" stroke="#333" stroke-width="5" data-v-31301ed5></path><path d="M200,240 q56,-40 112,0" fill="white" opacity="0.3" data-v-31301ed5></path><circle cx="120" cy="330" r="10" fill="#ffeb3b" class="ufo-light" data-v-31301ed5></circle><circle cx="188" cy="350" r="12" fill="#ffeb3b" class="ufo-light" style="animation-delay:0.2s;" data-v-31301ed5></circle><circle cx="256" cy="360" r="14" fill="#ffeb3b" class="ufo-light" style="animation-delay:0.4s;" data-v-31301ed5></circle><circle cx="324" cy="350" r="12" fill="#ffeb3b" class="ufo-light" style="animation-delay:0.6s;" data-v-31301ed5></circle><circle cx="392" cy="330" r="10" fill="#ffeb3b" class="ufo-light" style="animation-delay:0.8s;" data-v-31301ed5></circle></svg>',1))],4)])],32))}}),Q_=cs(J_,[["__scopeId","data-v-31301ed5"]]);function tv(){const{speak:i,playCorrect:t,playSuccess:e,playExplosion:n}=Tr(),s=te(0),r=te(0),o=te(0),a=te(null),l=te([]),c=te(!1),u=["a","e","i","o","u"],d="bcdfghjklmnpqrstvwxyz".split(""),h=_=>{const m=_.split(""),g=m.length,x=Math.random(),S=M=>M===M.toUpperCase()&&M!==M.toLowerCase();if(x<.3){const M=m[0],w=M.toLowerCase(),A=S(M);if(d.includes(w)){let L=d[Math.floor(Math.random()*d.length)];A&&(L=L.toUpperCase()),m[0]=L}else if(u.includes(w)){const L=u.filter(E=>E!==w);let b=L[Math.floor(Math.random()*L.length)];A&&(b=b.toUpperCase()),m[0]=b}return m.join("")}if(x<.6)for(let M=0;M<g;M++){const w=m[M],A=w.toLowerCase(),L=S(w);if(u.includes(A)){const b=u.filter(D=>D!==A);let E=b[Math.floor(Math.random()*b.length)];return L&&(E=E.toUpperCase()),m[M]=E,m.join("")}}if(x<.8)for(let M=0;M<g;M++){const w=m[M],A=w.toLowerCase(),L=S(w);if(d.includes(A)){let b=d[Math.floor(Math.random()*d.length)];return L&&(b=b.toUpperCase()),m[M]=b,m.join("")}}const v=Math.floor(Math.random()*g);return m[v]===m[v+1]?m.splice(v,1):m.splice(v,0,m[v]),m.join("")},f=()=>{c.value=!1;const _=Ii.currentList.value;if(_.length===0)return;const m=_[Math.floor(Math.random()*_.length)];a.value=m;const g=m.q,x=new Set;x.add(g);let S=0;for(;x.size<4&&S<100;){let w=h(g);w!==g&&x.add(w),S++}for(;x.size<4;){let w=g+(Math.random()>.5?"s":"e");x.add(w)}l.value=Array.from(x).sort(()=>Math.random()-.5).map(w=>({text:w,isCorrect:w===g}));const v=m.q,M=m.exps&&m.exps.length>0?`. ${m.exps[0]}`:"";i(`${v}${M}`)};return{p1Score:s,p2Score:r,currentTarget:a,options:l,nextRound:f,handleChoice:(_,m)=>{if(c.value||!a.value)return!1;if(m.isCorrect){c.value=!0,t(),_===1?s.value++:r.value++;const g=s.value>r.value?1:r.value>s.value?2:0;return g!==0&&g!==o.value&&e(),o.value=g,setTimeout(f,1e3),!0}else{n(),_===1?s.value=Math.max(0,s.value-1):r.value=Math.max(0,r.value-1);const g=s.value>r.value?1:r.value>s.value?2:0;return g!==0&&g!==o.value&&e(),o.value=g,!1}},speak:i}}const ev={class:"duel-container"},nv={class:"center-strip"},iv={class:"strip-side p2-side rot-180"},sv={key:0,class:"trophy-container"},rv={class:"score-display",style:{color:"#FFA726"}},ov={class:"strip-center"},av={class:"text-content"},lv={class:"text-content"},cv={class:"strip-side p1-side"},uv={key:0,class:"trophy-container"},hv={class:"score-display",style:{color:"#42A5F5"}},dv={class:"player-zone p2"},fv={class:"options-grid"},pv=["onClick"],mv={class:"btn-text"},gv={class:"player-zone p1"},_v={class:"options-grid"},vv=["onClick"],xv={class:"btn-text"},yv=as({__name:"DuelGame",emits:["exit"],setup(i,{emit:t}){const{p1Score:e,p2Score:n,currentTarget:s,options:r,nextRound:o,handleChoice:a,speak:l}=tv(),c=te([]);let u=0;const d=(h,f,p)=>{if(!a(f,p)){const m=u++;c.value.push({id:m,x:h.clientX,y:h.clientY}),setTimeout(()=>{c.value=c.value.filter(g=>g.id!==m)},500)}};return Er(()=>{o()}),(h,f)=>{var p,_,m,g,x,S;return qt(),Kt("div",ev,[(qt(!0),Kt(Re,null,gn(c.value,v=>(qt(),Kt("div",{key:v.id,class:"explosion",style:$e({left:v.x+"px",top:v.y+"px"})},"💥",4))),128)),pt("div",nv,[pt("div",iv,[Wt(n)>Wt(e)?(qt(),Kt("div",sv,[...f[3]||(f[3]=[pt("div",{class:"trophy-icon"},"🏆",-1)])])):_n("",!0),pt("div",rv,me(Wt(n)),1)]),pt("div",ov,[pt("div",{class:"target-mini rot-180",onClick:f[0]||(f[0]=v=>Wt(s)&&Wt(l)(Wt(s).q)),style:$e({"--char-count":((_=(p=Wt(s))==null?void 0:p.t)==null?void 0:_.length)||1})},[pt("span",av,me((m=Wt(s))==null?void 0:m.t),1)],4),pt("button",{class:"exit-btn",onClick:f[1]||(f[1]=v=>h.$emit("exit"))},"EXIT"),pt("div",{class:"target-mini",onClick:f[2]||(f[2]=v=>Wt(s)&&Wt(l)(Wt(s).q)),style:$e({"--char-count":((x=(g=Wt(s))==null?void 0:g.t)==null?void 0:x.length)||1})},[pt("span",lv,me((S=Wt(s))==null?void 0:S.t),1)],4)]),pt("div",cv,[Wt(e)>Wt(n)?(qt(),Kt("div",uv,[...f[4]||(f[4]=[pt("div",{class:"trophy-icon"},"🏆",-1)])])):_n("",!0),pt("div",hv,me(Wt(e)),1)])]),pt("div",dv,[pt("div",fv,[(qt(!0),Kt(Re,null,gn(Wt(r),v=>(qt(),Kt("button",{key:"p2-"+v.text,class:"option-btn",onClick:M=>d(M,2,v),style:$e({"--char-count":v.text.length})},[pt("span",mv,me(v.text),1)],12,pv))),128))])]),pt("div",gv,[pt("div",_v,[(qt(!0),Kt(Re,null,gn(Wt(r),v=>(qt(),Kt("button",{key:"p1-"+v.text,class:"option-btn",onClick:M=>d(M,1,v),style:$e({"--char-count":v.text.length})},[pt("span",xv,me(v.text),1)],12,vv))),128))])])])}}}),Sv=cs(yv,[["__scopeId","data-v-b30ff539"]]);function Mv(i){const e=te({x:0,y:0,character:"knight",holding:null}),n=te([]),s=te("Waiting for command..."),r=te({type:null,direction:null,x:0,y:0}),o=p=>{e.value.character=p},a=(p,_,m,g)=>{let x=_,S=m;for(let v=0;v<g;v++)x>=0&&x<10&&S>=0&&S<10&&!(x===0&&S===0)&&p.push({id:`water-${v}`,type:"water",x,y:S}),Math.random()>.5?x++:S++},l=(p,_,m)=>{[[-1,-1],[-1,0],[-1,1],[0,-1],[0,0],[0,1],[1,-1],[1,0],[1,1]].forEach(([x,S],v)=>{const M=_+x,w=m+S;M>=0&&M<10&&w>=0&&w<10&&!(M===0&&w===0)&&Math.random()>.3&&p.push({id:`tree-${_}-${m}-${v}`,type:"tree",x:M,y:w})})},c=()=>{const p=[];p.push({id:"bug1",type:"bug-green",x:7,y:3}),p.push({id:"bug2",type:"bug-blue",x:3,y:8}),p.push({id:"bug3",type:"bug-green",x:8,y:7}),a(p,2,0,6),l(p,6,5),[[4,2],[5,2],[2,5],[2,6]].forEach(([m,g],x)=>{p.some(S=>S.x===m&&S.y===g)||p.push({id:`rock-${x}`,type:"rock",x:m,y:g})}),p.push({id:"box1",type:"box",x:1,y:2}),p.push({id:"box2",type:"box",x:5,y:8}),n.value=p,e.value={x:0,y:0,character:e.value.character,holding:null}},u=(p,_)=>p<0||p>=10||_<0||_>=10?!1:!n.value.some(m=>m.x===p&&m.y===_&&(["rock","tree","water"].includes(m.type)||m.type.startsWith("bug"))),d=p=>{s.value=`Heard: "${p}"`;const _=h(p);_?f(_):s.value=`Sorry, I didn't understand "${p}"`},h=p=>{const _=p.toLowerCase().trim(),m=_.split(/\s+/),g=M=>M.some(w=>m.includes(w)),x=()=>g(["up","top","north","above","op","app"])?"up":g(["down","bottom","south","below","don","town","dan"])?"down":g(["left","west","lef","let"])?"left":g(["right","east","rite","write","wright"])?"right":null,S=()=>{const M={zero:0,oh:0,one:1,won:1,wan:1,two:2,to:2,too:2,tu:2,three:3,tree:3,free:3,four:4,for:4,fore:4,five:5,fife:5,six:6,sex:6,sicks:6,seven:7,heaven:7,eight:8,ate:8,ait:8,nine:9,nein:9,ten:10,tin:10};for(const A of m)if(M[A]!==void 0)return M[A];const w=_.match(/\d+/);return w?parseInt(w[0]):1};if(g(["pickup","grab","take","get","pick"]))return{action:"pickup",direction:"up"};const v=x();return v?g(["throw","toss","chuck","hurl","fro"])?{action:"throw",direction:v}:g(["attack","atack","atak","strike","hit","kill","fight"])?{action:"attack",direction:v}:{action:"move",direction:v,steps:S()}:null},f=async p=>{var v,M,w,A;let{x:_,y:m}=e.value;const g=p.direction==="left"?-1:p.direction==="right"?1:0,x=p.direction==="up"?-1:p.direction==="down"?1:0;if(p.action==="pickup"){const L=n.value.findIndex(b=>b.x===_&&b.y===m&&b.type==="box");L!==-1&&!e.value.holding?(e.value.holding="box",n.value.splice(L,1),s.value="Picked up a box!"):e.value.holding?s.value="Already holding something!":s.value="Nothing to pick up here.";return}if(p.action==="throw"){if(!e.value.holding){s.value="Not holding anything to throw!";return}const L=_+g,b=m+x;r.value={type:"throw",direction:p.direction,x:_,y:m},s.value=`Throwing ${p.direction}...`,await new Promise(D=>setTimeout(D,600)),r.value={type:null,direction:null,x:0,y:0};const E=n.value.findIndex(D=>D.x===L&&D.y===b&&D.type.startsWith("bug"));if(E!==-1){const D=n.value[E];s.value=`Boom! Threw box at ${D.type}!`,n.value.splice(E,1),e.value.holding=null,(v=i==null?void 0:i.onWin)==null||v.call(i)}else L>=0&&L<10&&b>=0&&b<10&&!n.value.some(D=>D.x===L&&D.y===b)?(n.value.push({id:`box-thrown-${Date.now()}`,type:"box",x:L,y:b}),e.value.holding=null,s.value="Box thrown!"):s.value="Can't throw there!";return}if(p.action==="attack"){const L=_+g,b=m+x;r.value={type:"attack",direction:p.direction,x:_,y:m},s.value=`Attacking ${p.direction}...`,await new Promise(D=>setTimeout(D,500)),r.value={type:null,direction:null,x:0,y:0};const E=n.value.findIndex(D=>D.x===L&&D.y===b&&D.type.startsWith("bug"));if(E!==-1){const D=n.value[E];s.value=`Bravo! Defeated the ${D.type}!`,n.value.splice(E,1),(M=i==null?void 0:i.onWin)==null||M.call(i),u(L,b)&&(e.value.x=L,e.value.y=b)}else n.value.some(k=>k.x===L&&k.y===b&&["rock","tree","water"].includes(k.type))?(s.value="Clang! Hit an obstacle.",(w=i==null?void 0:i.onHitObstacle)==null||w.call(i)):s.value="Missed!";return}const S=p.steps||1;for(let L=0;L<S;L++){const b=_+g,E=m+x;if(u(b,E))_=b,m=E,e.value.x=_,e.value.y=m,await new Promise(D=>setTimeout(D,200));else{s.value="Blocked!",(A=i==null?void 0:i.onHitObstacle)==null||A.call(i);break}}};return{gridSize:10,player:e,entities:n,message:s,animation:r,initLevel:c,processCommand:d,setCharacter:o}}const bv={key:0,class:"char-select-screen"},wv={class:"char-options"},Ev={key:1,class:"ck-container"},Tv={class:"header"},Av={class:"status-bar"},Cv={key:0,class:"holding-display"},Rv={class:"msg-box"},Pv={class:"entity-icon"},Iv={class:"controls"},Lv={class:"mic-icon"},Dv={class:"btn-text"},Nv=as({__name:"CodeKnight",emits:["exit"],setup(i,{emit:t}){const{playSuccess:e,playExplosion:n,playTone:s}=Tr(),{gridSize:r,player:o,entities:a,message:l,animation:c,initLevel:u,processCommand:d,setCharacter:h}=Mv({onWin:()=>e(),onHitObstacle:()=>n()}),f=te(!1),p=te(!0),_=te(!1),m=M=>{h(M),p.value=!1,u()},g=()=>{const M=window.SpeechRecognition||window.webkitSpeechRecognition;if(!M){alert("Voice recognition not supported in this browser.");return}if(_.value){console.log("Already processing a command, ignoring...");return}const w=new M;w.lang="en-US",w.continuous=!1,w.interimResults=!1,w.maxAlternatives=3,w.start(),f.value=!0,s(880,"sine",.1),w.onresult=async A=>{if(_.value){console.log("Command already processing, skipping...");return}if(_.value=!0,f.value=!1,!A.results[0].isFinal){console.log("Interim result, skipping..."),_.value=!1;return}for(let L=0;L<A.results[0].length;L++){const b=A.results[0][L].transcript,E=A.results[0][L].confidence;if(console.log(`Alternative ${L}: "${b}" (confidence: ${E})`),E<.3){console.log(`Skipping low confidence alternative ${L}`);continue}const D=l.value;if(d(b),l.value!==D&&!l.value.includes("didn't understand"))break}await new Promise(L=>setTimeout(L,500)),_.value=!1},w.onerror=A=>{if(console.error("Speech recognition error:",A.error),f.value=!1,_.value=!1,A.error==="no-speech")l.value="No speech detected. Try again!";else if(A.error==="audio-capture")l.value="Microphone not found!";else{if(A.error==="aborted")return;l.value=`Error: ${A.error}`}},w.onend=()=>{f.value=!1}},x=(M,w)=>{if(o.value.x===M&&o.value.y===w)return"player";const A=a.value.find(L=>L.x===M&&L.y===w);return(A==null?void 0:A.type)||null},S=M=>{if(M==="player")return o.value.character==="knight"?"🛡️":"🤖";switch(M){case"bug-green":return"🐛";case"bug-blue":return"👾";case"rock":return"🪨";case"water":return"💧";case"tree":return"🌳";case"box":return"📦";default:return""}},v=(M,w)=>{if(o.value.x===M&&o.value.y===w)return"player";const A=a.value.find(L=>L.x===M&&L.y===w);return(A==null?void 0:A.type)||""};return(M,w)=>p.value?(qt(),Kt("div",bv,[w[6]||(w[6]=pt("h1",{class:"select-title"},"Choose Your Hero",-1)),pt("div",wv,[pt("div",{class:"char-card",onClick:w[0]||(w[0]=A=>m("knight"))},[...w[4]||(w[4]=[pt("div",{class:"char-icon"},"🛡️",-1),pt("div",{class:"char-name"},"Knight",-1),pt("div",{class:"char-desc"},"Brave warrior with sword",-1)])]),pt("div",{class:"char-card",onClick:w[1]||(w[1]=A=>m("robot"))},[...w[5]||(w[5]=[pt("div",{class:"char-icon"},"🤖",-1),pt("div",{class:"char-name"},"Robot",-1),pt("div",{class:"char-desc"},"Tech-powered fighter",-1)])])]),pt("button",{class:"back-btn-select",onClick:w[2]||(w[2]=A=>M.$emit("exit"))},"⬅ Back to Menu")])):(qt(),Kt("div",Ev,[pt("div",Tv,[pt("button",{class:"back-btn",onClick:w[3]||(w[3]=A=>M.$emit("exit"))},"⬅ BACK"),w[7]||(w[7]=pt("div",{class:"game-title"},"Code Knight",-1)),pt("div",Av,[Wt(o).holding?(qt(),Kt("div",Cv," Holding: "+me(S(Wt(o).holding)),1)):_n("",!0),pt("div",Rv,me(Wt(l)),1)])]),pt("div",{class:"grid-board",style:$e({"--size":Wt(r)})},[(qt(!0),Kt(Re,null,gn(Wt(r),A=>(qt(),Kt(Re,{key:"row-"+A},[(qt(!0),Kt(Re,null,gn(Wt(r),L=>(qt(),Kt("div",{key:"cell-"+(L-1)+"-"+(A-1),class:Wn(["cell",v(L-1,A-1)])},[pt("div",Pv,me(S(x(L-1,A-1))),1),Wt(c).type==="attack"&&Wt(c).x===L-1&&Wt(c).y===A-1?(qt(),Kt("div",{key:0,class:Wn(["attack-slash","slash-"+Wt(c).direction])},"⚔️",2)):_n("",!0),Wt(c).type==="throw"&&Wt(c).x===L-1&&Wt(c).y===A-1?(qt(),Kt("div",{key:1,class:Wn(["throw-projectile","throw-"+Wt(c).direction])},"📦",2)):_n("",!0)],2))),128))],64))),128))],4),pt("div",Iv,[pt("button",{class:Wn(["mic-btn",{listening:f.value}]),onClick:g},[pt("span",Lv,me(f.value?"📡":"🎤"),1),pt("span",Dv,me(f.value?"Listening...":"Push to Talk"),1)],2),w[8]||(w[8]=pt("div",{class:"hints"},' Just say: "Right two" | "Down" | "Attack left" | "Pickup" | "Throw up" ',-1))])]))}}),Fv=cs(Nv,[["__scopeId","data-v-6d211ac8"]]);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ru="182",fr={ROTATE:0,DOLLY:1,PAN:2},or={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Uv=0,kh=1,Ov=2,da=1,Bv=2,Xr=3,os=0,vn=1,Hn=2,Fi=0,pr=1,hc=2,Vh=3,Hh=4,zv=5,bs=100,kv=101,Vv=102,Hv=103,Gv=104,Wv=200,qv=201,Xv=202,jv=203,dc=204,fc=205,Yv=206,$v=207,Kv=208,Zv=209,Jv=210,Qv=211,tx=212,ex=213,nx=214,pc=0,mc=1,gc=2,xr=3,_c=4,vc=5,xc=6,yc=7,bp=0,ix=1,sx=2,ai=0,wp=1,Ep=2,Tp=3,Ap=4,Cp=5,Rp=6,Pp=7,Ip=300,Ls=301,yr=302,Sc=303,Mc=304,Xa=306,bc=1e3,Li=1001,wc=1002,qe=1003,rx=1004,Po=1005,Ke=1006,ul=1007,Ts=1008,wn=1009,Lp=1010,Dp=1011,uo=1012,Pu=1013,hi=1014,si=1015,Vi=1016,Iu=1017,Lu=1018,ho=1020,Np=35902,Fp=35899,Up=1021,Op=1022,qn=1023,Hi=1026,As=1027,Bp=1028,Du=1029,Sr=1030,Nu=1031,Fu=1033,fa=33776,pa=33777,ma=33778,ga=33779,Ec=35840,Tc=35841,Ac=35842,Cc=35843,Rc=36196,Pc=37492,Ic=37496,Lc=37488,Dc=37489,Nc=37490,Fc=37491,Uc=37808,Oc=37809,Bc=37810,zc=37811,kc=37812,Vc=37813,Hc=37814,Gc=37815,Wc=37816,qc=37817,Xc=37818,jc=37819,Yc=37820,$c=37821,Kc=36492,Zc=36494,Jc=36495,Qc=36283,tu=36284,eu=36285,nu=36286,ox=3200,zp=0,ax=1,es="",Ln="srgb",Mr="srgb-linear",Pa="linear",ve="srgb",ks=7680,Gh=519,lx=512,cx=513,ux=514,Uu=515,hx=516,dx=517,Ou=518,fx=519,Wh=35044,qh="300 es",ri=2e3,Ia=2001;function kp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function La(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function px(){const i=La("canvas");return i.style.display="block",i}const Xh={};function jh(...i){const t="THREE."+i.shift();console.log(t,...i)}function Zt(...i){const t="THREE."+i.shift();console.warn(t,...i)}function le(...i){const t="THREE."+i.shift();console.error(t,...i)}function fo(...i){const t=i.join(" ");t in Xh||(Xh[t]=!0,Zt(...i))}function mx(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}class Os{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_a=Math.PI/180,iu=180/Math.PI;function Ar(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xe[i&255]+Xe[i>>8&255]+Xe[i>>16&255]+Xe[i>>24&255]+"-"+Xe[t&255]+Xe[t>>8&255]+"-"+Xe[t>>16&15|64]+Xe[t>>24&255]+"-"+Xe[e&63|128]+Xe[e>>8&255]+"-"+Xe[e>>16&255]+Xe[e>>24&255]+Xe[n&255]+Xe[n>>8&255]+Xe[n>>16&255]+Xe[n>>24&255]).toLowerCase()}function re(i,t,e){return Math.max(t,Math.min(e,i))}function gx(i,t){return(i%t+t)%t}function hl(i,t,e){return(1-e)*i+e*t}function Dr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function hn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const _x={DEG2RAD:_a};class bt{constructor(t=0,e=0){bt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}let Ds=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3],h=r[o+0],f=r[o+1],p=r[o+2],_=r[o+3];if(a<=0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d;return}if(a>=1){t[e+0]=h,t[e+1]=f,t[e+2]=p,t[e+3]=_;return}if(d!==_||l!==h||c!==f||u!==p){let m=l*h+c*f+u*p+d*_;m<0&&(h=-h,f=-f,p=-p,_=-_,m=-m);let g=1-a;if(m<.9995){const x=Math.acos(m),S=Math.sin(x);g=Math.sin(g*x)/S,a=Math.sin(a*x)/S,l=l*g+h*a,c=c*g+f*a,u=u*g+p*a,d=d*g+_*a}else{l=l*g+h*a,c=c*g+f*a,u=u*g+p*a,d=d*g+_*a;const x=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=x,c*=x,u*=x,d*=x}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=r[o],h=r[o+1],f=r[o+2],p=r[o+3];return t[e]=a*p+u*d+l*f-c*h,t[e+1]=l*p+u*h+c*d-a*f,t[e+2]=c*p+u*f+a*h-l*d,t[e+3]=u*p-a*d-l*h-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),d=a(r/2),h=l(n/2),f=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=h*u*d+c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d-h*f*p;break;case"YXZ":this._x=h*u*d+c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d+h*f*p;break;case"ZXY":this._x=h*u*d-c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d-h*f*p;break;case"ZYX":this._x=h*u*d-c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d+h*f*p;break;case"YZX":this._x=h*u*d+c*f*p,this._y=c*f*d+h*u*p,this._z=c*u*p-h*f*d,this._w=c*u*d-h*f*p;break;case"XZY":this._x=h*u*d-c*f*p,this._y=c*f*d-h*u*p,this._z=c*u*p+h*f*d,this._w=c*u*d+h*f*p;break;default:Zt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],d=e[10],h=n+a+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(u-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(re(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e<=0)return this;if(e>=1)return this.copy(t);let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class Z{constructor(t=0,e=0,n=0){Z.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Yh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Yh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),u=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*u,this.y=n+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return dl.copy(this).projectOnVector(t),this.sub(dl)}reflect(t){return this.sub(dl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const dl=new Z,Yh=new Ds;class ie{constructor(t,e,n,s,r,o,a,l,c){ie.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],p=n[8],_=s[0],m=s[3],g=s[6],x=s[1],S=s[4],v=s[7],M=s[2],w=s[5],A=s[8];return r[0]=o*_+a*x+l*M,r[3]=o*m+a*S+l*w,r[6]=o*g+a*v+l*A,r[1]=c*_+u*x+d*M,r[4]=c*m+u*S+d*w,r[7]=c*g+u*v+d*A,r[2]=h*_+f*x+p*M,r[5]=h*m+f*S+p*w,r[8]=h*g+f*v+p*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=u*o-a*c,h=a*l-u*r,f=c*r-o*l,p=e*d+n*h+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return t[0]=d*_,t[1]=(s*c-u*n)*_,t[2]=(a*n-s*o)*_,t[3]=h*_,t[4]=(u*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(fl.makeScale(t,e)),this}rotate(t){return this.premultiply(fl.makeRotation(-t)),this}translate(t,e){return this.premultiply(fl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const fl=new ie,$h=new ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kh=new ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vx(){const i={enabled:!0,workingColorSpace:Mr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ve&&(s.r=Ui(s.r),s.g=Ui(s.g),s.b=Ui(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ve&&(s.r=mr(s.r),s.g=mr(s.g),s.b=mr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===es?Pa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return fo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return fo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Mr]:{primaries:t,whitePoint:n,transfer:Pa,toXYZ:$h,fromXYZ:Kh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ln},outputColorSpaceConfig:{drawingBufferColorSpace:Ln}},[Ln]:{primaries:t,whitePoint:n,transfer:ve,toXYZ:$h,fromXYZ:Kh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ln}}}),i}const ue=vx();function Ui(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function mr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Vs;class xx{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Vs===void 0&&(Vs=La("canvas")),Vs.width=t.width,Vs.height=t.height;const s=Vs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Vs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=La("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ui(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ui(e[n]/255)*255):e[n]=Ui(e[n]);return{data:e,width:t.width,height:t.height}}else return Zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let yx=0;class Bu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yx++}),this.uuid=Ar(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(pl(s[o].image)):r.push(pl(s[o]))}else r=pl(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function pl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?xx.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Zt("Texture: Unable to serialize Texture."),{})}let Sx=0;const ml=new Z;class Je extends Os{constructor(t=Je.DEFAULT_IMAGE,e=Je.DEFAULT_MAPPING,n=Li,s=Li,r=Ke,o=Ts,a=qn,l=wn,c=Je.DEFAULT_ANISOTROPY,u=es){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sx++}),this.uuid=Ar(),this.name="",this.source=new Bu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new bt(0,0),this.repeat=new bt(1,1),this.center=new bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ml).x}get height(){return this.source.getSize(ml).y}get depth(){return this.source.getSize(ml).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Zt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Zt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ip)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case bc:t.x=t.x-Math.floor(t.x);break;case Li:t.x=t.x<0?0:1;break;case wc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case bc:t.y=t.y-Math.floor(t.y);break;case Li:t.y=t.y<0?0:1;break;case wc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Je.DEFAULT_IMAGE=null;Je.DEFAULT_MAPPING=Ip;Je.DEFAULT_ANISOTROPY=1;class Ne{constructor(t=0,e=0,n=0,s=1){Ne.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],p=l[9],_=l[2],m=l[6],g=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,v=(f+1)/2,M=(g+1)/2,w=(u+h)/4,A=(d+_)/4,L=(p+m)/4;return S>v&&S>M?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=w/n,r=A/n):v>M?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=w/s,r=L/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=A/r,s=L/r),this.set(n,s,r,e),this}let x=Math.sqrt((m-p)*(m-p)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(x)<.001&&(x=1),this.x=(m-p)/x,this.y=(d-_)/x,this.z=(h-u)/x,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this.w=re(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this.w=re(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Mx extends Os{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ke,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ne(0,0,t,e),this.scissorTest=!1,this.viewport=new Ne(0,0,t,e);const s={width:t,height:e,depth:n.depth},r=new Je(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Ke,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Bu(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class li extends Mx{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Vp extends Je{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=qe,this.minFilter=qe,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class bx extends Je{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=qe,this.minFilter=qe,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mo{constructor(t=new Z(1/0,1/0,1/0),e=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(On.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(On.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=On.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,On):On.fromBufferAttribute(r,o),On.applyMatrix4(t.matrixWorld),this.expandByPoint(On);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Io.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Io.copy(n.boundingBox)),Io.applyMatrix4(t.matrixWorld),this.union(Io)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,On),On.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Nr),Lo.subVectors(this.max,Nr),Hs.subVectors(t.a,Nr),Gs.subVectors(t.b,Nr),Ws.subVectors(t.c,Nr),Wi.subVectors(Gs,Hs),qi.subVectors(Ws,Gs),ps.subVectors(Hs,Ws);let e=[0,-Wi.z,Wi.y,0,-qi.z,qi.y,0,-ps.z,ps.y,Wi.z,0,-Wi.x,qi.z,0,-qi.x,ps.z,0,-ps.x,-Wi.y,Wi.x,0,-qi.y,qi.x,0,-ps.y,ps.x,0];return!gl(e,Hs,Gs,Ws,Lo)||(e=[1,0,0,0,1,0,0,0,1],!gl(e,Hs,Gs,Ws,Lo))?!1:(Do.crossVectors(Wi,qi),e=[Do.x,Do.y,Do.z],gl(e,Hs,Gs,Ws,Lo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,On).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(On).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(_i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),_i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),_i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),_i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),_i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),_i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),_i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),_i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(_i),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const _i=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],On=new Z,Io=new Mo,Hs=new Z,Gs=new Z,Ws=new Z,Wi=new Z,qi=new Z,ps=new Z,Nr=new Z,Lo=new Z,Do=new Z,ms=new Z;function gl(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ms.fromArray(i,r);const a=s.x*Math.abs(ms.x)+s.y*Math.abs(ms.y)+s.z*Math.abs(ms.z),l=t.dot(ms),c=e.dot(ms),u=n.dot(ms);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const wx=new Mo,Fr=new Z,_l=new Z;class zu{constructor(t=new Z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):wx.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Fr.subVectors(t,this.center);const e=Fr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Fr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(_l.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Fr.copy(t.center).add(_l)),this.expandByPoint(Fr.copy(t.center).sub(_l))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const vi=new Z,vl=new Z,No=new Z,Xi=new Z,xl=new Z,Fo=new Z,yl=new Z;let ku=class{constructor(t=new Z,e=new Z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,vi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=vi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(vi.copy(this.origin).addScaledVector(this.direction,e),vi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){vl.copy(t).add(e).multiplyScalar(.5),No.copy(e).sub(t).normalize(),Xi.copy(this.origin).sub(vl);const r=t.distanceTo(e)*.5,o=-this.direction.dot(No),a=Xi.dot(this.direction),l=-Xi.dot(No),c=Xi.lengthSq(),u=Math.abs(1-o*o);let d,h,f,p;if(u>0)if(d=o*l-a,h=o*a-l,p=r*u,d>=0)if(h>=-p)if(h<=p){const _=1/u;d*=_,h*=_,f=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h<=-p?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c):h<=p?(d=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(vl).addScaledVector(No,h),f}intersectSphere(t,e){vi.subVectors(t.center,this.origin);const n=vi.dot(this.direction),s=vi.dot(vi)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(a=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,vi)!==null}intersectTriangle(t,e,n,s,r){xl.subVectors(e,t),Fo.subVectors(n,t),yl.crossVectors(xl,Fo);let o=this.direction.dot(yl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Xi.subVectors(this.origin,t);const l=a*this.direction.dot(Fo.crossVectors(Xi,Fo));if(l<0)return null;const c=a*this.direction.dot(xl.cross(Xi));if(c<0||l+c>o)return null;const u=-a*Xi.dot(yl);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class Pe{constructor(t,e,n,s,r,o,a,l,c,u,d,h,f,p,_,m){Pe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,u,d,h,f,p,_,m)}set(t,e,n,s,r,o,a,l,c,u,d,h,f,p,_,m){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=d,g[14]=h,g[3]=f,g[7]=p,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,n=t.elements,s=1/qs.setFromMatrixColumn(t,0).length(),r=1/qs.setFromMatrixColumn(t,1).length(),o=1/qs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const h=o*u,f=o*d,p=a*u,_=a*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=f+p*c,e[5]=h-_*c,e[9]=-a*l,e[2]=_-h*c,e[6]=p+f*c,e[10]=o*l}else if(t.order==="YXZ"){const h=l*u,f=l*d,p=c*u,_=c*d;e[0]=h+_*a,e[4]=p*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=f*a-p,e[6]=_+h*a,e[10]=o*l}else if(t.order==="ZXY"){const h=l*u,f=l*d,p=c*u,_=c*d;e[0]=h-_*a,e[4]=-o*d,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*u,e[9]=_-h*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const h=o*u,f=o*d,p=a*u,_=a*d;e[0]=l*u,e[4]=p*c-f,e[8]=h*c+_,e[1]=l*d,e[5]=_*c+h,e[9]=f*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const h=o*l,f=o*c,p=a*l,_=a*c;e[0]=l*u,e[4]=_-h*d,e[8]=p*d+f,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=f*d+p,e[10]=h-_*d}else if(t.order==="XZY"){const h=o*l,f=o*c,p=a*l,_=a*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=h*d+_,e[5]=o*u,e[9]=f*d-p,e[2]=p*d-f,e[6]=a*u,e[10]=_*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ex,t,Tx)}lookAt(t,e,n){const s=this.elements;return Sn.subVectors(t,e),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),ji.crossVectors(n,Sn),ji.lengthSq()===0&&(Math.abs(n.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),ji.crossVectors(n,Sn)),ji.normalize(),Uo.crossVectors(Sn,ji),s[0]=ji.x,s[4]=Uo.x,s[8]=Sn.x,s[1]=ji.y,s[5]=Uo.y,s[9]=Sn.y,s[2]=ji.z,s[6]=Uo.z,s[10]=Sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],p=n[2],_=n[6],m=n[10],g=n[14],x=n[3],S=n[7],v=n[11],M=n[15],w=s[0],A=s[4],L=s[8],b=s[12],E=s[1],D=s[5],k=s[9],U=s[13],W=s[2],B=s[6],O=s[10],H=s[14],q=s[3],ut=s[7],gt=s[11],dt=s[15];return r[0]=o*w+a*E+l*W+c*q,r[4]=o*A+a*D+l*B+c*ut,r[8]=o*L+a*k+l*O+c*gt,r[12]=o*b+a*U+l*H+c*dt,r[1]=u*w+d*E+h*W+f*q,r[5]=u*A+d*D+h*B+f*ut,r[9]=u*L+d*k+h*O+f*gt,r[13]=u*b+d*U+h*H+f*dt,r[2]=p*w+_*E+m*W+g*q,r[6]=p*A+_*D+m*B+g*ut,r[10]=p*L+_*k+m*O+g*gt,r[14]=p*b+_*U+m*H+g*dt,r[3]=x*w+S*E+v*W+M*q,r[7]=x*A+S*D+v*B+M*ut,r[11]=x*L+S*k+v*O+M*gt,r[15]=x*b+S*U+v*H+M*dt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],d=t[6],h=t[10],f=t[14],p=t[3],_=t[7],m=t[11],g=t[15],x=l*f-c*h,S=a*f-c*d,v=a*h-l*d,M=o*f-c*u,w=o*h-l*u,A=o*d-a*u;return e*(_*x-m*S+g*v)-n*(p*x-m*M+g*w)+s*(p*S-_*M+g*A)-r*(p*v-_*w+m*A)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=t[9],h=t[10],f=t[11],p=t[12],_=t[13],m=t[14],g=t[15],x=d*m*c-_*h*c+_*l*f-a*m*f-d*l*g+a*h*g,S=p*h*c-u*m*c-p*l*f+o*m*f+u*l*g-o*h*g,v=u*_*c-p*d*c+p*a*f-o*_*f-u*a*g+o*d*g,M=p*d*l-u*_*l-p*a*h+o*_*h+u*a*m-o*d*m,w=e*x+n*S+s*v+r*M;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return t[0]=x*A,t[1]=(_*h*r-d*m*r-_*s*f+n*m*f+d*s*g-n*h*g)*A,t[2]=(a*m*r-_*l*r+_*s*c-n*m*c-a*s*g+n*l*g)*A,t[3]=(d*l*r-a*h*r-d*s*c+n*h*c+a*s*f-n*l*f)*A,t[4]=S*A,t[5]=(u*m*r-p*h*r+p*s*f-e*m*f-u*s*g+e*h*g)*A,t[6]=(p*l*r-o*m*r-p*s*c+e*m*c+o*s*g-e*l*g)*A,t[7]=(o*h*r-u*l*r+u*s*c-e*h*c-o*s*f+e*l*f)*A,t[8]=v*A,t[9]=(p*d*r-u*_*r-p*n*f+e*_*f+u*n*g-e*d*g)*A,t[10]=(o*_*r-p*a*r+p*n*c-e*_*c-o*n*g+e*a*g)*A,t[11]=(u*a*r-o*d*r-u*n*c+e*d*c+o*n*f-e*a*f)*A,t[12]=M*A,t[13]=(u*_*s-p*d*s+p*n*h-e*_*h-u*n*m+e*d*m)*A,t[14]=(p*a*s-o*_*s-p*n*l+e*_*l+o*n*m-e*a*m)*A,t[15]=(o*d*s-u*a*s+u*n*l-e*d*l-o*n*h+e*a*h)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,d=a+a,h=r*c,f=r*u,p=r*d,_=o*u,m=o*d,g=a*d,x=l*c,S=l*u,v=l*d,M=n.x,w=n.y,A=n.z;return s[0]=(1-(_+g))*M,s[1]=(f+v)*M,s[2]=(p-S)*M,s[3]=0,s[4]=(f-v)*w,s[5]=(1-(h+g))*w,s[6]=(m+x)*w,s[7]=0,s[8]=(p+S)*A,s[9]=(m-x)*A,s[10]=(1-(h+_))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;if(t.x=s[12],t.y=s[13],t.z=s[14],this.determinant()===0)return n.set(1,1,1),e.identity(),this;let r=qs.set(s[0],s[1],s[2]).length();const o=qs.set(s[4],s[5],s[6]).length(),a=qs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),Bn.copy(this);const c=1/r,u=1/o,d=1/a;return Bn.elements[0]*=c,Bn.elements[1]*=c,Bn.elements[2]*=c,Bn.elements[4]*=u,Bn.elements[5]*=u,Bn.elements[6]*=u,Bn.elements[8]*=d,Bn.elements[9]*=d,Bn.elements[10]*=d,e.setFromRotationMatrix(Bn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=ri,l=!1){const c=this.elements,u=2*r/(e-t),d=2*r/(n-s),h=(e+t)/(e-t),f=(n+s)/(n-s);let p,_;if(l)p=r/(o-r),_=o*r/(o-r);else if(a===ri)p=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Ia)p=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=ri,l=!1){const c=this.elements,u=2/(e-t),d=2/(n-s),h=-(e+t)/(e-t),f=-(n+s)/(n-s);let p,_;if(l)p=1/(o-r),_=o/(o-r);else if(a===ri)p=-2/(o-r),_=-(o+r)/(o-r);else if(a===Ia)p=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const qs=new Z,Bn=new Pe,Ex=new Z(0,0,0),Tx=new Z(1,1,1),ji=new Z,Uo=new Z,Sn=new Z,Zh=new Pe,Jh=new Ds;class di{constructor(t=0,e=0,n=0,s=di.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-re(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(re(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-re(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(re(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-re(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Zh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Zh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Jh.setFromEuler(this),this.setFromQuaternion(Jh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}di.DEFAULT_ORDER="XYZ";class Vu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ax=0;const Qh=new Z,Xs=new Ds,xi=new Pe,Oo=new Z,Ur=new Z,Cx=new Z,Rx=new Ds,td=new Z(1,0,0),ed=new Z(0,1,0),nd=new Z(0,0,1),id={type:"added"},Px={type:"removed"},js={type:"childadded",child:null},Sl={type:"childremoved",child:null};class Qe extends Os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ax++}),this.uuid=Ar(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qe.DEFAULT_UP.clone();const t=new Z,e=new di,n=new Ds,s=new Z(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Pe},normalMatrix:{value:new ie}}),this.matrix=new Pe,this.matrixWorld=new Pe,this.matrixAutoUpdate=Qe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Xs.setFromAxisAngle(t,e),this.quaternion.multiply(Xs),this}rotateOnWorldAxis(t,e){return Xs.setFromAxisAngle(t,e),this.quaternion.premultiply(Xs),this}rotateX(t){return this.rotateOnAxis(td,t)}rotateY(t){return this.rotateOnAxis(ed,t)}rotateZ(t){return this.rotateOnAxis(nd,t)}translateOnAxis(t,e){return Qh.copy(t).applyQuaternion(this.quaternion),this.position.add(Qh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(td,t)}translateY(t){return this.translateOnAxis(ed,t)}translateZ(t){return this.translateOnAxis(nd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Oo.copy(t):Oo.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(Ur,Oo,this.up):xi.lookAt(Oo,Ur,this.up),this.quaternion.setFromRotationMatrix(xi),s&&(xi.extractRotation(s.matrixWorld),Xs.setFromRotationMatrix(xi),this.quaternion.premultiply(Xs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(le("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(id),js.child=t,this.dispatchEvent(js),js.child=null):le("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Px),Sl.child=t,this.dispatchEvent(Sl),Sl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),xi.multiply(t.parent.matrixWorld)),t.applyMatrix4(xi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(id),js.child=t,this.dispatchEvent(js),js.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,t,Cx),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ur,Rx,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),d=o(t.shapes),h=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Qe.DEFAULT_UP=new Z(0,1,0);Qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const zn=new Z,yi=new Z,Ml=new Z,Si=new Z,Ys=new Z,$s=new Z,sd=new Z,bl=new Z,wl=new Z,El=new Z,Tl=new Ne,Al=new Ne,Cl=new Ne;class Gn{constructor(t=new Z,e=new Z,n=new Z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),zn.subVectors(t,e),s.cross(zn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){zn.subVectors(s,e),yi.subVectors(n,e),Ml.subVectors(t,e);const o=zn.dot(zn),a=zn.dot(yi),l=zn.dot(Ml),c=yi.dot(yi),u=yi.dot(Ml),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const h=1/d,f=(c*l-a*u)*h,p=(o*u-a*l)*h;return r.set(1-f-p,p,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Si)===null?!1:Si.x>=0&&Si.y>=0&&Si.x+Si.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Si.x),l.addScaledVector(o,Si.y),l.addScaledVector(a,Si.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Tl.setScalar(0),Al.setScalar(0),Cl.setScalar(0),Tl.fromBufferAttribute(t,e),Al.fromBufferAttribute(t,n),Cl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Tl,r.x),o.addScaledVector(Al,r.y),o.addScaledVector(Cl,r.z),o}static isFrontFacing(t,e,n,s){return zn.subVectors(n,e),yi.subVectors(t,e),zn.cross(yi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return zn.subVectors(this.c,this.b),yi.subVectors(this.a,this.b),zn.cross(yi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Gn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Gn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Gn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Gn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Gn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Ys.subVectors(s,n),$s.subVectors(r,n),bl.subVectors(t,n);const l=Ys.dot(bl),c=$s.dot(bl);if(l<=0&&c<=0)return e.copy(n);wl.subVectors(t,s);const u=Ys.dot(wl),d=$s.dot(wl);if(u>=0&&d<=u)return e.copy(s);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(Ys,o);El.subVectors(t,r);const f=Ys.dot(El),p=$s.dot(El);if(p>=0&&f<=p)return e.copy(r);const _=f*c-l*p;if(_<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector($s,a);const m=u*p-f*d;if(m<=0&&d-u>=0&&f-p>=0)return sd.subVectors(r,s),a=(d-u)/(d-u+(f-p)),e.copy(s).addScaledVector(sd,a);const g=1/(m+_+h);return o=_*g,a=h*g,e.copy(n).addScaledVector(Ys,o).addScaledVector($s,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Hp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yi={h:0,s:0,l:0},Bo={h:0,s:0,l:0};function Rl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class ae{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ln){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ue.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ue.workingColorSpace){return this.r=t,this.g=e,this.b=n,ue.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ue.workingColorSpace){if(t=gx(t,1),e=re(e,0,1),n=re(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Rl(o,r,t+1/3),this.g=Rl(o,r,t),this.b=Rl(o,r,t-1/3)}return ue.colorSpaceToWorking(this,s),this}setStyle(t,e=Ln){function n(r){r!==void 0&&parseFloat(r)<1&&Zt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Zt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ln){const n=Hp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Zt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ui(t.r),this.g=Ui(t.g),this.b=Ui(t.b),this}copyLinearToSRGB(t){return this.r=mr(t.r),this.g=mr(t.g),this.b=mr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ln){return ue.workingToColorSpace(je.copy(this),t),Math.round(re(je.r*255,0,255))*65536+Math.round(re(je.g*255,0,255))*256+Math.round(re(je.b*255,0,255))}getHexString(t=Ln){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ue.workingColorSpace){ue.workingToColorSpace(je.copy(this),e);const n=je.r,s=je.g,r=je.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ue.workingColorSpace){return ue.workingToColorSpace(je.copy(this),e),t.r=je.r,t.g=je.g,t.b=je.b,t}getStyle(t=Ln){ue.workingToColorSpace(je.copy(this),t);const e=je.r,n=je.g,s=je.b;return t!==Ln?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Yi),this.setHSL(Yi.h+t,Yi.s+e,Yi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Yi),t.getHSL(Bo);const n=hl(Yi.h,Bo.h,e),s=hl(Yi.s,Bo.s,e),r=hl(Yi.l,Bo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const je=new ae;ae.NAMES=Hp;let Ix=0,bo=class extends Os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ix++}),this.uuid=Ar(),this.name="",this.type="Material",this.blending=pr,this.side=os,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dc,this.blendDst=fc,this.blendEquation=bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ae(0,0,0),this.blendAlpha=0,this.depthFunc=xr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ks,this.stencilZFail=ks,this.stencilZPass=ks,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Zt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Zt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==pr&&(n.blending=this.blending),this.side!==os&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==dc&&(n.blendSrc=this.blendSrc),this.blendDst!==fc&&(n.blendDst=this.blendDst),this.blendEquation!==bs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==xr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ks&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ks&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ks&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};class po extends bo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.combine=bp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Oe=new Z,zo=new bt;let Lx=0;class Un{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Lx++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Wh,this.updateRanges=[],this.gpuType=si,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)zo.fromBufferAttribute(this,e),zo.applyMatrix3(t),this.setXY(e,zo.x,zo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix3(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix4(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyNormalMatrix(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.transformDirection(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Dr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=hn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Dr(e,this.array)),e}setX(t,e){return this.normalized&&(e=hn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Dr(e,this.array)),e}setY(t,e){return this.normalized&&(e=hn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Dr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=hn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Dr(e,this.array)),e}setW(t,e){return this.normalized&&(e=hn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=hn(e,this.array),n=hn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=hn(e,this.array),n=hn(n,this.array),s=hn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=hn(e,this.array),n=hn(n,this.array),s=hn(s,this.array),r=hn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Wh&&(t.usage=this.usage),t}}class Gp extends Un{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Wp extends Un{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ln extends Un{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Dx=0;const Pn=new Pe,Pl=new Qe,Ks=new Z,Mn=new Mo,Or=new Mo,We=new Z;class An extends Os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dx++}),this.uuid=Ar(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(kp(t)?Wp:Gp)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ie().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Pn.makeRotationFromQuaternion(t),this.applyMatrix4(Pn),this}rotateX(t){return Pn.makeRotationX(t),this.applyMatrix4(Pn),this}rotateY(t){return Pn.makeRotationY(t),this.applyMatrix4(Pn),this}rotateZ(t){return Pn.makeRotationZ(t),this.applyMatrix4(Pn),this}translate(t,e,n){return Pn.makeTranslation(t,e,n),this.applyMatrix4(Pn),this}scale(t,e,n){return Pn.makeScale(t,e,n),this.applyMatrix4(Pn),this}lookAt(t){return Pl.lookAt(t),Pl.updateMatrix(),this.applyMatrix4(Pl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ks).negate(),this.translate(Ks.x,Ks.y,Ks.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ln(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){le("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Mn.setFromBufferAttribute(r),this.morphTargetsRelative?(We.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(We),We.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(We)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&le('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zu);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){le("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(t){const n=this.boundingSphere.center;if(Mn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Or.setFromBufferAttribute(a),this.morphTargetsRelative?(We.addVectors(Mn.min,Or.min),Mn.expandByPoint(We),We.addVectors(Mn.max,Or.max),Mn.expandByPoint(We)):(Mn.expandByPoint(Or.min),Mn.expandByPoint(Or.max))}Mn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)We.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(We));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)We.fromBufferAttribute(a,c),l&&(Ks.fromBufferAttribute(t,c),We.add(Ks)),s=Math.max(s,n.distanceToSquared(We))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&le('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){le("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Un(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<n.count;L++)a[L]=new Z,l[L]=new Z;const c=new Z,u=new Z,d=new Z,h=new bt,f=new bt,p=new bt,_=new Z,m=new Z;function g(L,b,E){c.fromBufferAttribute(n,L),u.fromBufferAttribute(n,b),d.fromBufferAttribute(n,E),h.fromBufferAttribute(r,L),f.fromBufferAttribute(r,b),p.fromBufferAttribute(r,E),u.sub(c),d.sub(c),f.sub(h),p.sub(h);const D=1/(f.x*p.y-p.x*f.y);isFinite(D)&&(_.copy(u).multiplyScalar(p.y).addScaledVector(d,-f.y).multiplyScalar(D),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-p.x).multiplyScalar(D),a[L].add(_),a[b].add(_),a[E].add(_),l[L].add(m),l[b].add(m),l[E].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let L=0,b=x.length;L<b;++L){const E=x[L],D=E.start,k=E.count;for(let U=D,W=D+k;U<W;U+=3)g(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const S=new Z,v=new Z,M=new Z,w=new Z;function A(L){M.fromBufferAttribute(s,L),w.copy(M);const b=a[L];S.copy(b),S.sub(M.multiplyScalar(M.dot(b))).normalize(),v.crossVectors(w,b);const D=v.dot(l[L])<0?-1:1;o.setXYZW(L,S.x,S.y,S.z,D)}for(let L=0,b=x.length;L<b;++L){const E=x[L],D=E.start,k=E.count;for(let U=D,W=D+k;U<W;U+=3)A(t.getX(U+0)),A(t.getX(U+1)),A(t.getX(U+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Un(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const s=new Z,r=new Z,o=new Z,a=new Z,l=new Z,c=new Z,u=new Z,d=new Z;if(t)for(let h=0,f=t.count;h<f;h+=3){const p=t.getX(h+0),_=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=e.count;h<f;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)We.fromBufferAttribute(t,e),We.normalize(),t.setXYZ(e,We.x,We.y,We.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let f=0,p=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*u;for(let g=0;g<u;g++)h[p++]=c[f++]}return new Un(h,u,d)}if(this.index===null)return Zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new An,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],f=t(h,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d];u.push(f.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],d=r[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const rd=new Pe,gs=new ku,ko=new zu,od=new Z,Vo=new Z,Ho=new Z,Go=new Z,Il=new Z,Wo=new Z,ad=new Z,qo=new Z;class ne extends Qe{constructor(t=new An,e=new po){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Wo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],d=r[l];u!==0&&(Il.fromBufferAttribute(d,t),o?Wo.addScaledVector(Il,u):Wo.addScaledVector(Il.sub(e),u))}e.add(Wo)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ko.copy(n.boundingSphere),ko.applyMatrix4(r),gs.copy(t.ray).recast(t.near),!(ko.containsPoint(gs.origin)===!1&&(gs.intersectSphere(ko,od)===null||gs.origin.distanceToSquared(od)>(t.far-t.near)**2))&&(rd.copy(r).invert(),gs.copy(t.ray).applyMatrix4(rd),!(n.boundingBox!==null&&gs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,gs)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=h.length;p<_;p++){const m=h[p],g=o[m.materialIndex],x=Math.max(m.start,f.start),S=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=x,M=S;v<M;v+=3){const w=a.getX(v),A=a.getX(v+1),L=a.getX(v+2);s=Xo(this,g,t,n,c,u,d,w,A,L),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const p=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=p,g=_;m<g;m+=3){const x=a.getX(m),S=a.getX(m+1),v=a.getX(m+2);s=Xo(this,o,t,n,c,u,d,x,S,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,_=h.length;p<_;p++){const m=h[p],g=o[m.materialIndex],x=Math.max(m.start,f.start),S=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=x,M=S;v<M;v+=3){const w=v,A=v+1,L=v+2;s=Xo(this,g,t,n,c,u,d,w,A,L),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const p=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=p,g=_;m<g;m+=3){const x=m,S=m+1,v=m+2;s=Xo(this,o,t,n,c,u,d,x,S,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Nx(i,t,e,n,s,r,o,a){let l;if(t.side===vn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===os,a),l===null)return null;qo.copy(a),qo.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(qo);return c<e.near||c>e.far?null:{distance:c,point:qo.clone(),object:i}}function Xo(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Vo),i.getVertexPosition(l,Ho),i.getVertexPosition(c,Go);const u=Nx(i,t,e,n,Vo,Ho,Go,ad);if(u){const d=new Z;Gn.getBarycoord(ad,Vo,Ho,Go,d),s&&(u.uv=Gn.getInterpolatedAttribute(s,a,l,c,d,new bt)),r&&(u.uv1=Gn.getInterpolatedAttribute(r,a,l,c,d,new bt)),o&&(u.normal=Gn.getInterpolatedAttribute(o,a,l,c,d,new Z),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new Z,materialIndex:0};Gn.getNormal(Vo,Ho,Go,h.normal),u.face=h,u.barycoord=d}return u}class Oi extends An{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],d=[];let h=0,f=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,s,o,2),p("x","z","y",1,-1,t,n,-e,s,o,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ln(c,3)),this.setAttribute("normal",new ln(u,3)),this.setAttribute("uv",new ln(d,2));function p(_,m,g,x,S,v,M,w,A,L,b){const E=v/A,D=M/L,k=v/2,U=M/2,W=w/2,B=A+1,O=L+1;let H=0,q=0;const ut=new Z;for(let gt=0;gt<O;gt++){const dt=gt*D-U;for(let _t=0;_t<B;_t++){const Lt=_t*E-k;ut[_]=Lt*x,ut[m]=dt*S,ut[g]=W,c.push(ut.x,ut.y,ut.z),ut[_]=0,ut[m]=0,ut[g]=w>0?1:-1,u.push(ut.x,ut.y,ut.z),d.push(_t/A),d.push(1-gt/L),H+=1}}for(let gt=0;gt<L;gt++)for(let dt=0;dt<A;dt++){const _t=h+dt+B*gt,Lt=h+dt+B*(gt+1),ot=h+(dt+1)+B*(gt+1),et=h+(dt+1)+B*gt;l.push(_t,Lt,et),l.push(Lt,ot,et),q+=6}a.addGroup(f,q,b),f+=q,h+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function br(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function sn(i){const t={};for(let e=0;e<i.length;e++){const n=br(i[e]);for(const s in n)t[s]=n[s]}return t}function Fx(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function qp(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ue.workingColorSpace}const Ux={clone:br,merge:sn};var Ox=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fi extends bo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ox,this.fragmentShader=Bx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=br(t.uniforms),this.uniformsGroups=Fx(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Xp extends Qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pe,this.projectionMatrix=new Pe,this.projectionMatrixInverse=new Pe,this.coordinateSystem=ri,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $i=new Z,ld=new bt,cd=new bt;class Dn extends Xp{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=iu*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(_a*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return iu*2*Math.atan(Math.tan(_a*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){$i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set($i.x,$i.y).multiplyScalar(-t/$i.z),$i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($i.x,$i.y).multiplyScalar(-t/$i.z)}getViewSize(t,e){return this.getViewBounds(t,ld,cd),e.subVectors(cd,ld)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(_a*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Zs=-90,Js=1;class zx extends Qe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Dn(Zs,Js,t,e);s.layers=this.layers,this.add(s);const r=new Dn(Zs,Js,t,e);r.layers=this.layers,this.add(r);const o=new Dn(Zs,Js,t,e);o.layers=this.layers,this.add(o);const a=new Dn(Zs,Js,t,e);a.layers=this.layers,this.add(a);const l=new Dn(Zs,Js,t,e);l.layers=this.layers,this.add(l);const c=new Dn(Zs,Js,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===ri)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ia)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(d,h,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class jp extends Je{constructor(t=[],e=Ls,n,s,r,o,a,l,c,u){super(t,e,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Yp extends li{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new jp(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Oi(5,5,5),r=new fi({name:"CubemapFromEquirect",uniforms:br(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:vn,blending:Fi});r.uniforms.tEquirect.value=e;const o=new ne(s,r),a=e.minFilter;return e.minFilter===Ts&&(e.minFilter=Ke),new zx(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}class Di extends Qe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kx={type:"move"};class Ll{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Di,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Di,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Di,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),g=this._getHandJoint(c,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&h>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(kx)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Di;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Hu{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new ae(t),this.near=e,this.far=n}clone(){return new Hu(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class $p extends Qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new di,this.environmentIntensity=1,this.environmentRotation=new di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Vx extends Je{constructor(t=null,e=1,n=1,s,r,o,a,l,c=qe,u=qe,d,h){super(null,o,a,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Dl=new Z,Hx=new Z,Gx=new ie;let Ci=class{constructor(t=new Z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Dl.subVectors(n,e).cross(Hx.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Dl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Gx.getNormalMatrix(t),s=this.coplanarPoint(Dl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}};const _s=new zu,Wx=new bt(.5,.5),jo=new Z;class Gu{constructor(t=new Ci,e=new Ci,n=new Ci,s=new Ci,r=new Ci,o=new Ci){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ri,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],f=r[7],p=r[8],_=r[9],m=r[10],g=r[11],x=r[12],S=r[13],v=r[14],M=r[15];if(s[0].setComponents(c-o,f-u,g-p,M-x).normalize(),s[1].setComponents(c+o,f+u,g+p,M+x).normalize(),s[2].setComponents(c+a,f+d,g+_,M+S).normalize(),s[3].setComponents(c-a,f-d,g-_,M-S).normalize(),n)s[4].setComponents(l,h,m,v).normalize(),s[5].setComponents(c-l,f-h,g-m,M-v).normalize();else if(s[4].setComponents(c-l,f-h,g-m,M-v).normalize(),e===ri)s[5].setComponents(c+l,f+h,g+m,M+v).normalize();else if(e===Ia)s[5].setComponents(l,h,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_s.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),_s.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_s)}intersectsSprite(t){_s.center.set(0,0,0);const e=Wx.distanceTo(t.center);return _s.radius=.7071067811865476+e,_s.applyMatrix4(t.matrixWorld),this.intersectsSphere(_s)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(jo.x=s.normal.x>0?t.max.x:t.min.x,jo.y=s.normal.y>0?t.max.y:t.min.y,jo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(jo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Kp extends Je{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class mo extends Je{constructor(t,e,n=hi,s,r,o,a=qe,l=qe,c,u=Hi,d=1){if(u!==Hi&&u!==As)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:d};super(h,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Bu(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class qx extends mo{constructor(t,e=hi,n=Ls,s,r,o=qe,a=qe,l,c=Hi){const u={width:t,height:t,depth:1},d=[u,u,u,u,u,u];super(t,t,e,n,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Zp extends Je{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Wu extends An{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],h=[],f=[];let p=0;const _=[],m=n/2;let g=0;x(),o===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new ln(d,3)),this.setAttribute("normal",new ln(h,3)),this.setAttribute("uv",new ln(f,2));function x(){const v=new Z,M=new Z;let w=0;const A=(e-t)/n;for(let L=0;L<=r;L++){const b=[],E=L/r,D=E*(e-t)+t;for(let k=0;k<=s;k++){const U=k/s,W=U*l+a,B=Math.sin(W),O=Math.cos(W);M.x=D*B,M.y=-E*n+m,M.z=D*O,d.push(M.x,M.y,M.z),v.set(B,A,O).normalize(),h.push(v.x,v.y,v.z),f.push(U,1-E),b.push(p++)}_.push(b)}for(let L=0;L<s;L++)for(let b=0;b<r;b++){const E=_[b][L],D=_[b+1][L],k=_[b+1][L+1],U=_[b][L+1];(t>0||b!==0)&&(u.push(E,D,U),w+=3),(e>0||b!==r-1)&&(u.push(D,k,U),w+=3)}c.addGroup(g,w,0),g+=w}function S(v){const M=p,w=new bt,A=new Z;let L=0;const b=v===!0?t:e,E=v===!0?1:-1;for(let k=1;k<=s;k++)d.push(0,m*E,0),h.push(0,E,0),f.push(.5,.5),p++;const D=p;for(let k=0;k<=s;k++){const W=k/s*l+a,B=Math.cos(W),O=Math.sin(W);A.x=b*O,A.y=m*E,A.z=b*B,d.push(A.x,A.y,A.z),h.push(0,E,0),w.x=B*.5+.5,w.y=O*.5*E+.5,f.push(w.x,w.y),p++}for(let k=0;k<s;k++){const U=M+k,W=D+k;v===!0?u.push(W,W+1,U):u.push(W+1,W,U),L+=3}c.addGroup(g,L,v===!0?1:2),g+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wu(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class pi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Zt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const u=n[s],h=n[s+1]-u,f=(o-u)/h;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new bt:new Z);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new Z,s=[],r=[],o=[],a=new Z,l=new Pe;for(let f=0;f<=t;f++){const p=f/t;s[f]=this.getTangentAt(p,new Z)}r[0]=new Z,o[0]=new Z;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),h<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(re(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(re(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class qu extends pi{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new bt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*u-f*d+this.aX,c=h*d+f*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Xx extends qu{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Xu(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,d){let h=(o-r)/c-(a-r)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+d)+(l-a)/d;h*=u,f*=u,s(o,a,h,f)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const Yo=new Z,Nl=new Xu,Fl=new Xu,Ul=new Xu;class jx extends pi{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new Z){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Yo.subVectors(s[0],s[1]).add(s[0]),c=Yo);const d=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Yo.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Yo),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(u),f);_<1e-4&&(_=1),p<1e-4&&(p=_),m<1e-4&&(m=_),Nl.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,p,_,m),Fl.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,p,_,m),Ul.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,p,_,m)}else this.curveType==="catmullrom"&&(Nl.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),Fl.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),Ul.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return n.set(Nl.calc(l),Fl.calc(l),Ul.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new Z().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function ud(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function Yx(i,t){const e=1-i;return e*e*t}function $x(i,t){return 2*(1-i)*i*t}function Kx(i,t){return i*i*t}function no(i,t,e,n){return Yx(i,t)+$x(i,e)+Kx(i,n)}function Zx(i,t){const e=1-i;return e*e*e*t}function Jx(i,t){const e=1-i;return 3*e*e*i*t}function Qx(i,t){return 3*(1-i)*i*i*t}function ty(i,t){return i*i*i*t}function io(i,t,e,n,s){return Zx(i,t)+Jx(i,e)+Qx(i,n)+ty(i,s)}class Jp extends pi{constructor(t=new bt,e=new bt,n=new bt,s=new bt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new bt){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(io(t,s.x,r.x,o.x,a.x),io(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ey extends pi{constructor(t=new Z,e=new Z,n=new Z,s=new Z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Z){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(io(t,s.x,r.x,o.x,a.x),io(t,s.y,r.y,o.y,a.y),io(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Qp extends pi{constructor(t=new bt,e=new bt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new bt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new bt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ny extends pi{constructor(t=new Z,e=new Z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new Z){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Z){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class tm extends pi{constructor(t=new bt,e=new bt,n=new bt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new bt){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(no(t,s.x,r.x,o.x),no(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class iy extends pi{constructor(t=new Z,e=new Z,n=new Z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Z){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(no(t,s.x,r.x,o.x),no(t,s.y,r.y,o.y),no(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class em extends pi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new bt){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(ud(a,l.x,c.x,u.x,d.x),ud(a,l.y,c.y,u.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new bt().fromArray(s))}return this}}var su=Object.freeze({__proto__:null,ArcCurve:Xx,CatmullRomCurve3:jx,CubicBezierCurve:Jp,CubicBezierCurve3:ey,EllipseCurve:qu,LineCurve:Qp,LineCurve3:ny,QuadraticBezierCurve:tm,QuadraticBezierCurve3:iy,SplineCurve:em});class sy extends pi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new su[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new su[s.type]().fromJSON(s))}return this}}class hd extends sy{constructor(t){super(),this.type="Path",this.currentPoint=new bt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Qp(this.currentPoint.clone(),new bt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new tm(this.currentPoint.clone(),new bt(t,e),new bt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new Jp(this.currentPoint.clone(),new bt(t,e),new bt(n,s),new bt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new em(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){const c=new qu(t,e,n,s,r,o,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}let nm=class extends hd{constructor(t){super(t),this.uuid=Ar(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new hd().fromJSON(s))}return this}};function ry(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=im(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=uy(i,t,r,e)),i.length>80*e){a=i[0],l=i[1];let u=a,d=l;for(let h=e;h<s;h+=e){const f=i[h],p=i[h+1];f<a&&(a=f),p<l&&(l=p),f>u&&(u=f),p>d&&(d=p)}c=Math.max(u-a,d-l),c=c!==0?32767/c:0}return go(r,o,e,a,l,c,0),o}function im(i,t,e,n,s){let r;if(s===Sy(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=dd(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=dd(o/n|0,i[o],i[o+1],r);return r&&wr(r,r.next)&&(vo(r),r=r.next),r}function Ns(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(wr(e,e.next)||Ie(e.prev,e,e.next)===0)){if(vo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function go(i,t,e,n,s,r,o){if(!i)return;!o&&r&&my(i,n,s,r);let a=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?ay(i,n,s,r):oy(i)){t.push(l.i,i.i,c.i),vo(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=ly(Ns(i),t),go(i,t,e,n,s,r,2)):o===2&&cy(i,t,e,n,s,r):go(Ns(i),t,e,n,s,r,1);break}}}function oy(i){const t=i.prev,e=i,n=i.next;if(Ie(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,u=Math.min(s,r,o),d=Math.min(a,l,c),h=Math.max(s,r,o),f=Math.max(a,l,c);let p=n.next;for(;p!==t;){if(p.x>=u&&p.x<=h&&p.y>=d&&p.y<=f&&jr(s,a,r,l,o,c,p.x,p.y)&&Ie(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function ay(i,t,e,n){const s=i.prev,r=i,o=i.next;if(Ie(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,u=s.y,d=r.y,h=o.y,f=Math.min(a,l,c),p=Math.min(u,d,h),_=Math.max(a,l,c),m=Math.max(u,d,h),g=ru(f,p,t,e,n),x=ru(_,m,t,e,n);let S=i.prevZ,v=i.nextZ;for(;S&&S.z>=g&&v&&v.z<=x;){if(S.x>=f&&S.x<=_&&S.y>=p&&S.y<=m&&S!==s&&S!==o&&jr(a,u,l,d,c,h,S.x,S.y)&&Ie(S.prev,S,S.next)>=0||(S=S.prevZ,v.x>=f&&v.x<=_&&v.y>=p&&v.y<=m&&v!==s&&v!==o&&jr(a,u,l,d,c,h,v.x,v.y)&&Ie(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;S&&S.z>=g;){if(S.x>=f&&S.x<=_&&S.y>=p&&S.y<=m&&S!==s&&S!==o&&jr(a,u,l,d,c,h,S.x,S.y)&&Ie(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;v&&v.z<=x;){if(v.x>=f&&v.x<=_&&v.y>=p&&v.y<=m&&v!==s&&v!==o&&jr(a,u,l,d,c,h,v.x,v.y)&&Ie(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function ly(i,t){let e=i;do{const n=e.prev,s=e.next.next;!wr(n,s)&&rm(n,e,e.next,s)&&_o(n,s)&&_o(s,n)&&(t.push(n.i,e.i,s.i),vo(e),vo(e.next),e=i=s),e=e.next}while(e!==i);return Ns(e)}function cy(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&vy(o,a)){let l=om(o,a);o=Ns(o,o.next),l=Ns(l,l.next),go(o,t,e,n,s,r,0),go(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function uy(i,t,e,n){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=im(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(_y(c))}s.sort(hy);for(let r=0;r<s.length;r++)e=dy(s[r],e);return e}function hy(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function dy(i,t){const e=fy(i,t);if(!e)return t;const n=om(e,i);return Ns(n,n.next),Ns(e,e.next)}function fy(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,o;if(wr(i,e))return e;do{if(wr(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,o=e.x<e.next.x?e:e.next,d===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,c=o.y;let u=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&sm(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){const d=Math.abs(s-e.y)/(n-e.x);_o(e,i)&&(d<u||d===u&&(e.x>o.x||e.x===o.x&&py(o,e)))&&(o=e,u=d)}e=e.next}while(e!==a);return o}function py(i,t){return Ie(i.prev,i,t.prev)<0&&Ie(t.next,i,i.next)<0}function my(i,t,e,n){let s=i;do s.z===0&&(s.z=ru(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,gy(s)}function gy(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function ru(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function _y(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function sm(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function jr(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&sm(i,t,e,n,s,r,o,a)}function vy(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!xy(i,t)&&(_o(i,t)&&_o(t,i)&&yy(i,t)&&(Ie(i.prev,i,t.prev)||Ie(i,t.prev,t))||wr(i,t)&&Ie(i.prev,i,i.next)>0&&Ie(t.prev,t,t.next)>0)}function Ie(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function wr(i,t){return i.x===t.x&&i.y===t.y}function rm(i,t,e,n){const s=Ko(Ie(i,t,e)),r=Ko(Ie(i,t,n)),o=Ko(Ie(e,n,i)),a=Ko(Ie(e,n,t));return!!(s!==r&&o!==a||s===0&&$o(i,e,t)||r===0&&$o(i,n,t)||o===0&&$o(e,i,n)||a===0&&$o(e,t,n))}function $o(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ko(i){return i>0?1:i<0?-1:0}function xy(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&rm(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function _o(i,t){return Ie(i.prev,i,i.next)<0?Ie(i,t,i.next)>=0&&Ie(i,i.prev,t)>=0:Ie(i,t,i.prev)<0||Ie(i,i.next,t)<0}function yy(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function om(i,t){const e=ou(i.i,i.x,i.y),n=ou(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function dd(i,t,e,n){const s=ou(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function vo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ou(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Sy(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class My{static triangulate(t,e,n=2){return ry(t,e,n)}}class ar{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return ar.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];fd(t),pd(n,t);let o=t.length;e.forEach(fd);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,pd(n,e[l]);const a=My.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function fd(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function pd(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class ju extends An{constructor(t=new nm([new bt(.5,.5),new bt(-.5,.5),new bt(-.5,-.5),new bt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new ln(s,3)),this.setAttribute("uv",new ln(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const g=e.extrudePath,x=e.UVGenerator!==void 0?e.UVGenerator:by;let S,v=!1,M,w,A,L;if(g){S=g.getSpacedPoints(u),v=!0,h=!1;const F=g.isCatmullRomCurve3?g.closed:!1;M=g.computeFrenetFrames(u,F),w=new Z,A=new Z,L=new Z}h||(m=0,f=0,p=0,_=0);const b=a.extractPoints(c);let E=b.shape;const D=b.holes;if(!ar.isClockWise(E)){E=E.reverse();for(let F=0,G=D.length;F<G;F++){const V=D[F];ar.isClockWise(V)&&(D[F]=V.reverse())}}function U(F){const V=10000000000000001e-36;let $=F[0];for(let R=1;R<=F.length;R++){const st=R%F.length,Q=F[st],it=Q.x-$.x,at=Q.y-$.y,C=it*it+at*at,y=Math.max(Math.abs(Q.x),Math.abs(Q.y),Math.abs($.x),Math.abs($.y)),z=V*y*y;if(C<=z){F.splice(st,1),R--;continue}$=Q}}U(E),D.forEach(U);const W=D.length,B=E;for(let F=0;F<W;F++){const G=D[F];E=E.concat(G)}function O(F,G,V){return G||le("ExtrudeGeometry: vec does not exist"),F.clone().addScaledVector(G,V)}const H=E.length;function q(F,G,V){let $,R,st;const Q=F.x-G.x,it=F.y-G.y,at=V.x-F.x,C=V.y-F.y,y=Q*Q+it*it,z=Q*C-it*at;if(Math.abs(z)>Number.EPSILON){const j=Math.sqrt(y),rt=Math.sqrt(at*at+C*C),tt=G.x-it/j,Ct=G.y+Q/j,xt=V.x-C/rt,Tt=V.y+at/rt,zt=((xt-tt)*C-(Tt-Ct)*at)/(Q*C-it*at);$=tt+Q*zt-F.x,R=Ct+it*zt-F.y;const yt=$*$+R*R;if(yt<=2)return new bt($,R);st=Math.sqrt(yt/2)}else{let j=!1;Q>Number.EPSILON?at>Number.EPSILON&&(j=!0):Q<-Number.EPSILON?at<-Number.EPSILON&&(j=!0):Math.sign(it)===Math.sign(C)&&(j=!0),j?($=-it,R=Q,st=Math.sqrt(y)):($=Q,R=it,st=Math.sqrt(y/2))}return new bt($/st,R/st)}const ut=[];for(let F=0,G=B.length,V=G-1,$=F+1;F<G;F++,V++,$++)V===G&&(V=0),$===G&&($=0),ut[F]=q(B[F],B[V],B[$]);const gt=[];let dt,_t=ut.concat();for(let F=0,G=W;F<G;F++){const V=D[F];dt=[];for(let $=0,R=V.length,st=R-1,Q=$+1;$<R;$++,st++,Q++)st===R&&(st=0),Q===R&&(Q=0),dt[$]=q(V[$],V[st],V[Q]);gt.push(dt),_t=_t.concat(dt)}let Lt;if(m===0)Lt=ar.triangulateShape(B,D);else{const F=[],G=[];for(let V=0;V<m;V++){const $=V/m,R=f*Math.cos($*Math.PI/2),st=p*Math.sin($*Math.PI/2)+_;for(let Q=0,it=B.length;Q<it;Q++){const at=O(B[Q],ut[Q],st);mt(at.x,at.y,-R),$===0&&F.push(at)}for(let Q=0,it=W;Q<it;Q++){const at=D[Q];dt=gt[Q];const C=[];for(let y=0,z=at.length;y<z;y++){const j=O(at[y],dt[y],st);mt(j.x,j.y,-R),$===0&&C.push(j)}$===0&&G.push(C)}}Lt=ar.triangulateShape(F,G)}const ot=Lt.length,et=p+_;for(let F=0;F<H;F++){const G=h?O(E[F],_t[F],et):E[F];v?(A.copy(M.normals[0]).multiplyScalar(G.x),w.copy(M.binormals[0]).multiplyScalar(G.y),L.copy(S[0]).add(A).add(w),mt(L.x,L.y,L.z)):mt(G.x,G.y,0)}for(let F=1;F<=u;F++)for(let G=0;G<H;G++){const V=h?O(E[G],_t[G],et):E[G];v?(A.copy(M.normals[F]).multiplyScalar(V.x),w.copy(M.binormals[F]).multiplyScalar(V.y),L.copy(S[F]).add(A).add(w),mt(L.x,L.y,L.z)):mt(V.x,V.y,d/u*F)}for(let F=m-1;F>=0;F--){const G=F/m,V=f*Math.cos(G*Math.PI/2),$=p*Math.sin(G*Math.PI/2)+_;for(let R=0,st=B.length;R<st;R++){const Q=O(B[R],ut[R],$);mt(Q.x,Q.y,d+V)}for(let R=0,st=D.length;R<st;R++){const Q=D[R];dt=gt[R];for(let it=0,at=Q.length;it<at;it++){const C=O(Q[it],dt[it],$);v?mt(C.x,C.y+S[u-1].y,S[u-1].x+V):mt(C.x,C.y,d+V)}}}X(),Y();function X(){const F=s.length/3;if(h){let G=0,V=H*G;for(let $=0;$<ot;$++){const R=Lt[$];lt(R[2]+V,R[1]+V,R[0]+V)}G=u+m*2,V=H*G;for(let $=0;$<ot;$++){const R=Lt[$];lt(R[0]+V,R[1]+V,R[2]+V)}}else{for(let G=0;G<ot;G++){const V=Lt[G];lt(V[2],V[1],V[0])}for(let G=0;G<ot;G++){const V=Lt[G];lt(V[0]+H*u,V[1]+H*u,V[2]+H*u)}}n.addGroup(F,s.length/3-F,0)}function Y(){const F=s.length/3;let G=0;ft(B,G),G+=B.length;for(let V=0,$=D.length;V<$;V++){const R=D[V];ft(R,G),G+=R.length}n.addGroup(F,s.length/3-F,1)}function ft(F,G){let V=F.length;for(;--V>=0;){const $=V;let R=V-1;R<0&&(R=F.length-1);for(let st=0,Q=u+m*2;st<Q;st++){const it=H*st,at=H*(st+1),C=G+$+it,y=G+R+it,z=G+R+at,j=G+$+at;St(C,y,z,j)}}}function mt(F,G,V){l.push(F),l.push(G),l.push(V)}function lt(F,G,V){I(F),I(G),I(V);const $=s.length/3,R=x.generateTopUV(n,s,$-3,$-2,$-1);N(R[0]),N(R[1]),N(R[2])}function St(F,G,V,$){I(F),I(G),I($),I(G),I(V),I($);const R=s.length/3,st=x.generateSideWallUV(n,s,R-6,R-3,R-2,R-1);N(st[0]),N(st[1]),N(st[3]),N(st[1]),N(st[2]),N(st[3])}function I(F){s.push(l[F*3+0]),s.push(l[F*3+1]),s.push(l[F*3+2])}function N(F){r.push(F.x),r.push(F.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return wy(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new su[s.type]().fromJSON(s)),new ju(n,t.options)}}const by={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],u=t[s*3+1];return[new bt(r,o),new bt(a,l),new bt(c,u)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],d=t[n*3+2],h=t[s*3],f=t[s*3+1],p=t[s*3+2],_=t[r*3],m=t[r*3+1],g=t[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new bt(o,1-l),new bt(c,1-d),new bt(h,1-p),new bt(_,1-g)]:[new bt(a,1-l),new bt(u,1-d),new bt(f,1-p),new bt(m,1-g)]}};function wy(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class mn extends An{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,d=t/a,h=e/l,f=[],p=[],_=[],m=[];for(let g=0;g<u;g++){const x=g*h-o;for(let S=0;S<c;S++){const v=S*d-r;p.push(v,-x,0),_.push(0,0,1),m.push(S/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let x=0;x<a;x++){const S=x+c*g,v=x+c*(g+1),M=x+1+c*(g+1),w=x+1+c*g;f.push(S,v,w),f.push(v,M,w)}this.setIndex(f),this.setAttribute("position",new ln(p,3)),this.setAttribute("normal",new ln(_,3)),this.setAttribute("uv",new ln(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mn(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ey extends fi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class rn extends bo{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zp,this.normalScale=new bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ty extends bo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ox,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ay extends bo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class am extends Qe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ae(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}const Ol=new Pe,md=new Z,gd=new Z;class Cy{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new bt(512,512),this.mapType=wn,this.map=null,this.mapPass=null,this.matrix=new Pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gu,this._frameExtents=new bt(1,1),this._viewportCount=1,this._viewports=[new Ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;md.setFromMatrixPosition(t.matrixWorld),e.position.copy(md),gd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(gd),e.updateMatrixWorld(),Ol.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ol,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ol)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class ja extends Xp{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Ry extends Cy{constructor(){super(new ja(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class lm extends am{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Qe.DEFAULT_UP),this.updateMatrix(),this.target=new Qe,this.shadow=new Ry}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class cm extends am{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Py extends Dn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const _d=new Pe;class vd{constructor(t,e,n=0,s=1/0){this.ray=new ku(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Vu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):le("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return _d.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(_d),this}intersectObject(t,e=!0,n=[]){return au(t,this,n,e),n.sort(xd),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)au(t[s],this,n,e);return n.sort(xd),n}}function xd(i,t){return i.distance-t.distance}function au(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)au(r[o],t,e,!0)}}class yd{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=re(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(re(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Iy extends Os{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){Zt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Sd(i,t,e,n){const s=Ly(n);switch(e){case Up:return i*t;case Bp:return i*t/s.components*s.byteLength;case Du:return i*t/s.components*s.byteLength;case Sr:return i*t*2/s.components*s.byteLength;case Nu:return i*t*2/s.components*s.byteLength;case Op:return i*t*3/s.components*s.byteLength;case qn:return i*t*4/s.components*s.byteLength;case Fu:return i*t*4/s.components*s.byteLength;case fa:case pa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ma:case ga:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Tc:case Cc:return Math.max(i,16)*Math.max(t,8)/4;case Ec:case Ac:return Math.max(i,8)*Math.max(t,8)/2;case Rc:case Pc:case Lc:case Dc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ic:case Nc:case Fc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Uc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Oc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Bc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case zc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case kc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Vc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Hc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Gc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Wc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case qc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Xc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case jc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Yc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case $c:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Kc:case Zc:case Jc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Qc:case tu:return Math.ceil(i/4)*Math.ceil(t/4)*8;case eu:case nu:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ly(i){switch(i){case wn:case Lp:return{byteLength:1,components:1};case uo:case Dp:case Vi:return{byteLength:2,components:1};case Iu:case Lu:return{byteLength:2,components:4};case hi:case Pu:case si:return{byteLength:4,components:1};case Np:case Fp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ru}}));typeof window<"u"&&(window.__THREE__?Zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ru);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function um(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Dy(i){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,d=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const u=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,u);else{d.sort((f,p)=>f.start-p.start);let h=0;for(let f=1;f<d.length;f++){const p=d[h],_=d[f];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++h,d[h]=_)}d.length=h+1;for(let f=0,p=d.length;f<p;f++){const _=d[f];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Ny=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Uy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Oy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,By=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ky=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Vy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Gy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,jy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Yy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$y=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ky=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,tS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,eS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,nS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,iS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,sS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,rS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,oS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,aS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uS="gl_FragColor = linearToOutputTexel( gl_FragColor );",hS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,fS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,pS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,mS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,_S=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,SS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,MS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ES=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,TS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,AS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,CS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,RS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,PS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,IS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,LS=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,DS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,NS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,FS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,US=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,OS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,BS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,VS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,HS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,GS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,WS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,XS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,YS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$S=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,KS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ZS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,JS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,QS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,iM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,oM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,aM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,cM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,uM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,gM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,_M=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,vM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,xM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,SM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,MM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,bM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,EM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,TM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,AM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,CM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,RM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,PM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,IM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,LM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const DM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,NM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,UM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,BM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,kM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,VM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,HM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,GM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,WM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,XM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,YM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$M=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,JM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,tb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,eb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ib=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,sb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ob=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ab=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,lb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ub=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,hb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,db=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,se={alphahash_fragment:Ny,alphahash_pars_fragment:Fy,alphamap_fragment:Uy,alphamap_pars_fragment:Oy,alphatest_fragment:By,alphatest_pars_fragment:zy,aomap_fragment:ky,aomap_pars_fragment:Vy,batching_pars_vertex:Hy,batching_vertex:Gy,begin_vertex:Wy,beginnormal_vertex:qy,bsdfs:Xy,iridescence_fragment:jy,bumpmap_pars_fragment:Yy,clipping_planes_fragment:$y,clipping_planes_pars_fragment:Ky,clipping_planes_pars_vertex:Zy,clipping_planes_vertex:Jy,color_fragment:Qy,color_pars_fragment:tS,color_pars_vertex:eS,color_vertex:nS,common:iS,cube_uv_reflection_fragment:sS,defaultnormal_vertex:rS,displacementmap_pars_vertex:oS,displacementmap_vertex:aS,emissivemap_fragment:lS,emissivemap_pars_fragment:cS,colorspace_fragment:uS,colorspace_pars_fragment:hS,envmap_fragment:dS,envmap_common_pars_fragment:fS,envmap_pars_fragment:pS,envmap_pars_vertex:mS,envmap_physical_pars_fragment:TS,envmap_vertex:gS,fog_vertex:_S,fog_pars_vertex:vS,fog_fragment:xS,fog_pars_fragment:yS,gradientmap_pars_fragment:SS,lightmap_pars_fragment:MS,lights_lambert_fragment:bS,lights_lambert_pars_fragment:wS,lights_pars_begin:ES,lights_toon_fragment:AS,lights_toon_pars_fragment:CS,lights_phong_fragment:RS,lights_phong_pars_fragment:PS,lights_physical_fragment:IS,lights_physical_pars_fragment:LS,lights_fragment_begin:DS,lights_fragment_maps:NS,lights_fragment_end:FS,logdepthbuf_fragment:US,logdepthbuf_pars_fragment:OS,logdepthbuf_pars_vertex:BS,logdepthbuf_vertex:zS,map_fragment:kS,map_pars_fragment:VS,map_particle_fragment:HS,map_particle_pars_fragment:GS,metalnessmap_fragment:WS,metalnessmap_pars_fragment:qS,morphinstance_vertex:XS,morphcolor_vertex:jS,morphnormal_vertex:YS,morphtarget_pars_vertex:$S,morphtarget_vertex:KS,normal_fragment_begin:ZS,normal_fragment_maps:JS,normal_pars_fragment:QS,normal_pars_vertex:tM,normal_vertex:eM,normalmap_pars_fragment:nM,clearcoat_normal_fragment_begin:iM,clearcoat_normal_fragment_maps:sM,clearcoat_pars_fragment:rM,iridescence_pars_fragment:oM,opaque_fragment:aM,packing:lM,premultiplied_alpha_fragment:cM,project_vertex:uM,dithering_fragment:hM,dithering_pars_fragment:dM,roughnessmap_fragment:fM,roughnessmap_pars_fragment:pM,shadowmap_pars_fragment:mM,shadowmap_pars_vertex:gM,shadowmap_vertex:_M,shadowmask_pars_fragment:vM,skinbase_vertex:xM,skinning_pars_vertex:yM,skinning_vertex:SM,skinnormal_vertex:MM,specularmap_fragment:bM,specularmap_pars_fragment:wM,tonemapping_fragment:EM,tonemapping_pars_fragment:TM,transmission_fragment:AM,transmission_pars_fragment:CM,uv_pars_fragment:RM,uv_pars_vertex:PM,uv_vertex:IM,worldpos_vertex:LM,background_vert:DM,background_frag:NM,backgroundCube_vert:FM,backgroundCube_frag:UM,cube_vert:OM,cube_frag:BM,depth_vert:zM,depth_frag:kM,distance_vert:VM,distance_frag:HM,equirect_vert:GM,equirect_frag:WM,linedashed_vert:qM,linedashed_frag:XM,meshbasic_vert:jM,meshbasic_frag:YM,meshlambert_vert:$M,meshlambert_frag:KM,meshmatcap_vert:ZM,meshmatcap_frag:JM,meshnormal_vert:QM,meshnormal_frag:tb,meshphong_vert:eb,meshphong_frag:nb,meshphysical_vert:ib,meshphysical_frag:sb,meshtoon_vert:rb,meshtoon_frag:ob,points_vert:ab,points_frag:lb,shadow_vert:cb,shadow_frag:ub,sprite_vert:hb,sprite_frag:db},Nt={common:{diffuse:{value:new ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ie}},envmap:{envMap:{value:null},envMapRotation:{value:new ie},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ie},normalScale:{value:new bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0},uvTransform:{value:new ie}},sprite:{diffuse:{value:new ae(16777215)},opacity:{value:1},center:{value:new bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}}},ii={basic:{uniforms:sn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:se.meshbasic_vert,fragmentShader:se.meshbasic_frag},lambert:{uniforms:sn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new ae(0)}}]),vertexShader:se.meshlambert_vert,fragmentShader:se.meshlambert_frag},phong:{uniforms:sn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new ae(0)},specular:{value:new ae(1118481)},shininess:{value:30}}]),vertexShader:se.meshphong_vert,fragmentShader:se.meshphong_frag},standard:{uniforms:sn([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag},toon:{uniforms:sn([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new ae(0)}}]),vertexShader:se.meshtoon_vert,fragmentShader:se.meshtoon_frag},matcap:{uniforms:sn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:se.meshmatcap_vert,fragmentShader:se.meshmatcap_frag},points:{uniforms:sn([Nt.points,Nt.fog]),vertexShader:se.points_vert,fragmentShader:se.points_frag},dashed:{uniforms:sn([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:se.linedashed_vert,fragmentShader:se.linedashed_frag},depth:{uniforms:sn([Nt.common,Nt.displacementmap]),vertexShader:se.depth_vert,fragmentShader:se.depth_frag},normal:{uniforms:sn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:se.meshnormal_vert,fragmentShader:se.meshnormal_frag},sprite:{uniforms:sn([Nt.sprite,Nt.fog]),vertexShader:se.sprite_vert,fragmentShader:se.sprite_frag},background:{uniforms:{uvTransform:{value:new ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:se.background_vert,fragmentShader:se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ie}},vertexShader:se.backgroundCube_vert,fragmentShader:se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:se.cube_vert,fragmentShader:se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:se.equirect_vert,fragmentShader:se.equirect_frag},distance:{uniforms:sn([Nt.common,Nt.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:se.distance_vert,fragmentShader:se.distance_frag},shadow:{uniforms:sn([Nt.lights,Nt.fog,{color:{value:new ae(0)},opacity:{value:1}}]),vertexShader:se.shadow_vert,fragmentShader:se.shadow_frag}};ii.physical={uniforms:sn([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ie},clearcoatNormalScale:{value:new bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ie},sheen:{value:0},sheenColor:{value:new ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ie},transmissionSamplerSize:{value:new bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ie},attenuationDistance:{value:0},attenuationColor:{value:new ae(0)},specularColor:{value:new ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ie},anisotropyVector:{value:new bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ie}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag};const Zo={r:0,b:0,g:0},vs=new di,fb=new Pe;function pb(i,t,e,n,s,r,o){const a=new ae(0);let l=r===!0?0:1,c,u,d=null,h=0,f=null;function p(S){let v=S.isScene===!0?S.background:null;return v&&v.isTexture&&(v=(S.backgroundBlurriness>0?e:t).get(v)),v}function _(S){let v=!1;const M=p(S);M===null?g(a,l):M&&M.isColor&&(g(M,1),v=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(S,v){const M=p(v);M&&(M.isCubeTexture||M.mapping===Xa)?(u===void 0&&(u=new ne(new Oi(1,1,1),new fi({name:"BackgroundCubeMaterial",uniforms:br(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,A,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),vs.copy(v.backgroundRotation),vs.x*=-1,vs.y*=-1,vs.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(fb.makeRotationFromEuler(vs)),u.material.toneMapped=ue.getTransfer(M.colorSpace)!==ve,(d!==M||h!==M.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,d=M,h=M.version,f=i.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new ne(new mn(2,2),new fi({name:"BackgroundMaterial",uniforms:br(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:os,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=ue.getTransfer(M.colorSpace)!==ve,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||h!==M.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,d=M,h=M.version,f=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function g(S,v){S.getRGB(Zo,qp(i)),n.buffers.color.setClear(Zo.r,Zo.g,Zo.b,v,o)}function x(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,v=1){a.set(S),l=v,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,g(a,l)},render:_,addToRenderList:m,dispose:x}}function mb(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,o=!1;function a(E,D,k,U,W){let B=!1;const O=d(U,k,D);r!==O&&(r=O,c(r.object)),B=f(E,U,k,W),B&&p(E,U,k,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,v(E,D,k,U),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return i.createVertexArray()}function c(E){return i.bindVertexArray(E)}function u(E){return i.deleteVertexArray(E)}function d(E,D,k){const U=k.wireframe===!0;let W=n[E.id];W===void 0&&(W={},n[E.id]=W);let B=W[D.id];B===void 0&&(B={},W[D.id]=B);let O=B[U];return O===void 0&&(O=h(l()),B[U]=O),O}function h(E){const D=[],k=[],U=[];for(let W=0;W<e;W++)D[W]=0,k[W]=0,U[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:k,attributeDivisors:U,object:E,attributes:{},index:null}}function f(E,D,k,U){const W=r.attributes,B=D.attributes;let O=0;const H=k.getAttributes();for(const q in H)if(H[q].location>=0){const gt=W[q];let dt=B[q];if(dt===void 0&&(q==="instanceMatrix"&&E.instanceMatrix&&(dt=E.instanceMatrix),q==="instanceColor"&&E.instanceColor&&(dt=E.instanceColor)),gt===void 0||gt.attribute!==dt||dt&&gt.data!==dt.data)return!0;O++}return r.attributesNum!==O||r.index!==U}function p(E,D,k,U){const W={},B=D.attributes;let O=0;const H=k.getAttributes();for(const q in H)if(H[q].location>=0){let gt=B[q];gt===void 0&&(q==="instanceMatrix"&&E.instanceMatrix&&(gt=E.instanceMatrix),q==="instanceColor"&&E.instanceColor&&(gt=E.instanceColor));const dt={};dt.attribute=gt,gt&&gt.data&&(dt.data=gt.data),W[q]=dt,O++}r.attributes=W,r.attributesNum=O,r.index=U}function _(){const E=r.newAttributes;for(let D=0,k=E.length;D<k;D++)E[D]=0}function m(E){g(E,0)}function g(E,D){const k=r.newAttributes,U=r.enabledAttributes,W=r.attributeDivisors;k[E]=1,U[E]===0&&(i.enableVertexAttribArray(E),U[E]=1),W[E]!==D&&(i.vertexAttribDivisor(E,D),W[E]=D)}function x(){const E=r.newAttributes,D=r.enabledAttributes;for(let k=0,U=D.length;k<U;k++)D[k]!==E[k]&&(i.disableVertexAttribArray(k),D[k]=0)}function S(E,D,k,U,W,B,O){O===!0?i.vertexAttribIPointer(E,D,k,W,B):i.vertexAttribPointer(E,D,k,U,W,B)}function v(E,D,k,U){_();const W=U.attributes,B=k.getAttributes(),O=D.defaultAttributeValues;for(const H in B){const q=B[H];if(q.location>=0){let ut=W[H];if(ut===void 0&&(H==="instanceMatrix"&&E.instanceMatrix&&(ut=E.instanceMatrix),H==="instanceColor"&&E.instanceColor&&(ut=E.instanceColor)),ut!==void 0){const gt=ut.normalized,dt=ut.itemSize,_t=t.get(ut);if(_t===void 0)continue;const Lt=_t.buffer,ot=_t.type,et=_t.bytesPerElement,X=ot===i.INT||ot===i.UNSIGNED_INT||ut.gpuType===Pu;if(ut.isInterleavedBufferAttribute){const Y=ut.data,ft=Y.stride,mt=ut.offset;if(Y.isInstancedInterleavedBuffer){for(let lt=0;lt<q.locationSize;lt++)g(q.location+lt,Y.meshPerAttribute);E.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let lt=0;lt<q.locationSize;lt++)m(q.location+lt);i.bindBuffer(i.ARRAY_BUFFER,Lt);for(let lt=0;lt<q.locationSize;lt++)S(q.location+lt,dt/q.locationSize,ot,gt,ft*et,(mt+dt/q.locationSize*lt)*et,X)}else{if(ut.isInstancedBufferAttribute){for(let Y=0;Y<q.locationSize;Y++)g(q.location+Y,ut.meshPerAttribute);E.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Y=0;Y<q.locationSize;Y++)m(q.location+Y);i.bindBuffer(i.ARRAY_BUFFER,Lt);for(let Y=0;Y<q.locationSize;Y++)S(q.location+Y,dt/q.locationSize,ot,gt,dt*et,dt/q.locationSize*Y*et,X)}}else if(O!==void 0){const gt=O[H];if(gt!==void 0)switch(gt.length){case 2:i.vertexAttrib2fv(q.location,gt);break;case 3:i.vertexAttrib3fv(q.location,gt);break;case 4:i.vertexAttrib4fv(q.location,gt);break;default:i.vertexAttrib1fv(q.location,gt)}}}}x()}function M(){L();for(const E in n){const D=n[E];for(const k in D){const U=D[k];for(const W in U)u(U[W].object),delete U[W];delete D[k]}delete n[E]}}function w(E){if(n[E.id]===void 0)return;const D=n[E.id];for(const k in D){const U=D[k];for(const W in U)u(U[W].object),delete U[W];delete D[k]}delete n[E.id]}function A(E){for(const D in n){const k=n[D];if(k[E.id]===void 0)continue;const U=k[E.id];for(const W in U)u(U[W].object),delete U[W];delete k[E.id]}}function L(){b(),o=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:b,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function gb(i,t,e){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,d){d!==0&&(i.drawArraysInstanced(n,c,u,d),e.update(u,n,d))}function a(c,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let f=0;for(let p=0;p<d;p++)f+=u[p];e.update(f,n,1)}function l(c,u,d,h){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<c.length;p++)o(c[p],u[p],h[p]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,d);let p=0;for(let _=0;_<d;_++)p+=u[_]*h[_];e.update(p,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function _b(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==qn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const L=A===Vi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==wn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==si&&!L)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(Zt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:x,maxVaryings:S,maxFragmentUniforms:v,maxSamples:M,samples:w}}function vb(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Ci,a=new ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||n!==0||s;return s=h,n=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,f){const p=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,g=i.get(d);if(!s||p===null||p.length===0||r&&!m)r?u(null):c();else{const x=r?0:n,S=x*4;let v=g.clippingState||null;l.value=v,v=u(p,h,S,f);for(let M=0;M!==S;++M)v[M]=e[M];g.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,h,f,p){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,p!==!0||m===null){const g=f+_*4,x=h.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<g)&&(m=new Float32Array(g));for(let S=0,v=f;S!==_;++S,v+=4)o.copy(d[S]).applyMatrix4(x,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function xb(i){let t=new WeakMap;function e(o,a){return a===Sc?o.mapping=Ls:a===Mc&&(o.mapping=yr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Sc||a===Mc)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Yp(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const ns=4,Md=[.125,.215,.35,.446,.526,.582],ws=20,yb=256,Br=new ja,bd=new ae;let Bl=null,zl=0,kl=0,Vl=!1;const Sb=new Z;class wd{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=Sb}=r;Bl=this._renderer.getRenderTarget(),zl=this._renderer.getActiveCubeFace(),kl=this._renderer.getActiveMipmapLevel(),Vl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ad(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Td(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Bl,zl,kl),this._renderer.xr.enabled=Vl,t.scissorTest=!1,Qs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ls||t.mapping===yr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Bl=this._renderer.getRenderTarget(),zl=this._renderer.getActiveCubeFace(),kl=this._renderer.getActiveMipmapLevel(),Vl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ke,minFilter:Ke,generateMipmaps:!1,type:Vi,format:qn,colorSpace:Mr,depthBuffer:!1},s=Ed(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ed(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Mb(r)),this._blurMaterial=wb(r,t,e),this._ggxMaterial=bb(r,t,e)}return s}_compileMaterial(t){const e=new ne(new An,t);this._renderer.compile(e,Br)}_sceneToCubeUV(t,e,n,s,r){const l=new Dn(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(bd),d.toneMapping=ai,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ne(new Oi,new po({name:"PMREM.Background",side:vn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let g=!1;const x=t.background;x?x.isColor&&(m.color.copy(x),t.background=null,g=!0):(m.color.copy(bd),g=!0);for(let S=0;S<6;S++){const v=S%3;v===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[S],r.y,r.z)):v===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[S]));const M=this._cubeSize;Qs(s,v*M,S>2?M:0,M,M),d.setRenderTarget(s),g&&d.render(_,l),d.render(t,l)}d.toneMapping=f,d.autoClear=h,t.background=x}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ls||t.mapping===yr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ad()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Td());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Qs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Br)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,c=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=0+c*1.25,f=d*h,{_lodMax:p}=this,_=this._sizeLods[n],m=3*_*(n>p-ns?n-p+ns:0),g=4*(this._cubeSize-_);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=p-e,Qs(r,m,g,3*_,2*_),s.setRenderTarget(r),s.render(a,Br),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,Qs(t,m,g,3*_,2*_),s.setRenderTarget(t),s.render(a,Br)}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&le("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[s];d.material=c;const h=c.uniforms,f=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ws-1),_=r/p,m=isFinite(r)?1+Math.floor(u*_):ws;m>ws&&Zt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ws}`);const g=[];let x=0;for(let A=0;A<ws;++A){const L=A/_,b=Math.exp(-L*L/2);g.push(b),A===0?x+=b:A<m&&(x+=2*b)}for(let A=0;A<g.length;A++)g[A]=g[A]/x;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=g,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:S}=this;h.dTheta.value=p,h.mipInt.value=S-n;const v=this._sizeLods[s],M=3*v*(s>S-ns?s-S+ns:0),w=4*(this._cubeSize-v);Qs(e,M,w,3*v,2*v),l.setRenderTarget(e),l.render(d,Br)}}function Mb(i){const t=[],e=[],n=[];let s=i;const r=i-ns+1+Md.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-ns?l=Md[o-i+ns-1]:o===0&&(l=0),e.push(l);const c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,p=6,_=3,m=2,g=1,x=new Float32Array(_*p*f),S=new Float32Array(m*p*f),v=new Float32Array(g*p*f);for(let w=0;w<f;w++){const A=w%3*2/3-1,L=w>2?0:-1,b=[A,L,0,A+2/3,L,0,A+2/3,L+1,0,A,L,0,A+2/3,L+1,0,A,L+1,0];x.set(b,_*p*w),S.set(h,m*p*w);const E=[w,w,w,w,w,w];v.set(E,g*p*w)}const M=new An;M.setAttribute("position",new Un(x,_)),M.setAttribute("uv",new Un(S,m)),M.setAttribute("faceIndex",new Un(v,g)),n.push(new ne(M,null)),s>ns&&s--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function Ed(i,t,e){const n=new li(i,t,e);return n.texture.mapping=Xa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function bb(i,t,e){return new fi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:yb,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ya(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function wb(i,t,e){const n=new Float32Array(ws),s=new Z(0,1,0);return new fi({name:"SphericalGaussianBlur",defines:{n:ws,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ya(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Td(){return new fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ya(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Ad(){return new fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ya(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function Ya(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Eb(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Sc||l===Mc,u=l===Ls||l===yr;if(c||u){let d=t.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return e===null&&(e=new wd(i)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return c&&f&&f.height>0||u&&f&&s(f)?(e===null&&(e=new wd(i)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Tb(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&fo("WebGLRenderer: "+n+" extension not supported."),s}}}function Ab(i,t,e,n){const s={},r=new WeakMap;function o(d){const h=d.target;h.index!==null&&t.remove(h.index);for(const p in h.attributes)t.remove(h.attributes[p]);h.removeEventListener("dispose",o),delete s[h.id];const f=r.get(h);f&&(t.remove(f),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(d,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,e.memory.geometries++),h}function l(d){const h=d.attributes;for(const f in h)t.update(h[f],i.ARRAY_BUFFER)}function c(d){const h=[],f=d.index,p=d.attributes.position;let _=0;if(f!==null){const x=f.array;_=f.version;for(let S=0,v=x.length;S<v;S+=3){const M=x[S+0],w=x[S+1],A=x[S+2];h.push(M,w,w,A,A,M)}}else if(p!==void 0){const x=p.array;_=p.version;for(let S=0,v=x.length/3-1;S<v;S+=3){const M=S+0,w=S+1,A=S+2;h.push(M,w,w,A,A,M)}}else return;const m=new(kp(h)?Wp:Gp)(h,1);m.version=_;const g=r.get(d);g&&t.remove(g),r.set(d,m)}function u(d){const h=r.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function Cb(i,t,e){let n;function s(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,f){i.drawElements(n,f,r,h*o),e.update(f,n,1)}function c(h,f,p){p!==0&&(i.drawElementsInstanced(n,f,r,h*o,p),e.update(f,n,p))}function u(h,f,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,h,0,p);let m=0;for(let g=0;g<p;g++)m+=f[g];e.update(m,n,1)}function d(h,f,p,_){if(p===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<h.length;g++)c(h[g]/o,f[g],_[g]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,h,0,_,0,p);let g=0;for(let x=0;x<p;x++)g+=f[x]*_[x];e.update(g,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Rb(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:le("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Pb(i,t,e){const n=new WeakMap,s=new Ne;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==d){let E=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",E)};var f=E;h!==void 0&&h.texture.dispose();const p=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let v=0;p===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let M=a.attributes.position.count*v,w=1;M>t.maxTextureSize&&(w=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const A=new Float32Array(M*w*4*d),L=new Vp(A,M,w,d);L.type=si,L.needsUpdate=!0;const b=v*4;for(let D=0;D<d;D++){const k=g[D],U=x[D],W=S[D],B=M*w*4*D;for(let O=0;O<k.count;O++){const H=O*b;p===!0&&(s.fromBufferAttribute(k,O),A[B+H+0]=s.x,A[B+H+1]=s.y,A[B+H+2]=s.z,A[B+H+3]=0),_===!0&&(s.fromBufferAttribute(U,O),A[B+H+4]=s.x,A[B+H+5]=s.y,A[B+H+6]=s.z,A[B+H+7]=0),m===!0&&(s.fromBufferAttribute(W,O),A[B+H+8]=s.x,A[B+H+9]=s.y,A[B+H+10]=s.z,A[B+H+11]=W.itemSize===4?s.w:1)}}h={count:d,texture:L,size:new bt(M,w)},n.set(a,h),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let p=0;for(let m=0;m<c.length;m++)p+=c[m];const _=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Ib(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,d=t.get(l,u);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return d}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const Lb={[wp]:"LINEAR_TONE_MAPPING",[Ep]:"REINHARD_TONE_MAPPING",[Tp]:"CINEON_TONE_MAPPING",[Ap]:"ACES_FILMIC_TONE_MAPPING",[Rp]:"AGX_TONE_MAPPING",[Pp]:"NEUTRAL_TONE_MAPPING",[Cp]:"CUSTOM_TONE_MAPPING"};function Db(i,t,e,n,s){const r=new li(t,e,{type:i,depthBuffer:n,stencilBuffer:s}),o=new li(t,e,{type:Vi,depthBuffer:!1,stencilBuffer:!1}),a=new An;a.setAttribute("position",new ln([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new ln([0,2,0,0,2,0],2));const l=new Ey({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new ne(a,l),u=new ja(-1,1,1,-1,0,1);let d=null,h=null,f=!1,p,_=null,m=[],g=!1;this.setSize=function(x,S){r.setSize(x,S),o.setSize(x,S);for(let v=0;v<m.length;v++){const M=m[v];M.setSize&&M.setSize(x,S)}},this.setEffects=function(x){m=x,g=m.length>0&&m[0].isRenderPass===!0;const S=r.width,v=r.height;for(let M=0;M<m.length;M++){const w=m[M];w.setSize&&w.setSize(S,v)}},this.begin=function(x,S){if(f||x.toneMapping===ai&&m.length===0)return!1;if(_=S,S!==null){const v=S.width,M=S.height;(r.width!==v||r.height!==M)&&this.setSize(v,M)}return g===!1&&x.setRenderTarget(r),p=x.toneMapping,x.toneMapping=ai,!0},this.hasRenderPass=function(){return g},this.end=function(x,S){x.toneMapping=p,f=!0;let v=r,M=o;for(let w=0;w<m.length;w++){const A=m[w];if(A.enabled!==!1&&(A.render(x,M,v,S),A.needsSwap!==!1)){const L=v;v=M,M=L}}if(d!==x.outputColorSpace||h!==x.toneMapping){d=x.outputColorSpace,h=x.toneMapping,l.defines={},ue.getTransfer(d)===ve&&(l.defines.SRGB_TRANSFER="");const w=Lb[h];w&&(l.defines[w]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=v.texture,x.setRenderTarget(_),x.render(c,u),_=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){r.dispose(),o.dispose(),a.dispose(),l.dispose()}}const hm=new Je,lu=new mo(1,1),dm=new Vp,fm=new bx,pm=new jp,Cd=[],Rd=[],Pd=new Float32Array(16),Id=new Float32Array(9),Ld=new Float32Array(4);function Cr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Cd[s];if(r===void 0&&(r=new Float32Array(s),Cd[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function He(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ge(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function $a(i,t){let e=Rd[t];e===void 0&&(e=new Int32Array(t),Rd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Nb(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Fb(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2fv(this.addr,t),Ge(e,t)}}function Ub(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(He(e,t))return;i.uniform3fv(this.addr,t),Ge(e,t)}}function Ob(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4fv(this.addr,t),Ge(e,t)}}function Bb(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ge(e,t)}else{if(He(e,n))return;Ld.set(n),i.uniformMatrix2fv(this.addr,!1,Ld),Ge(e,n)}}function zb(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ge(e,t)}else{if(He(e,n))return;Id.set(n),i.uniformMatrix3fv(this.addr,!1,Id),Ge(e,n)}}function kb(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ge(e,t)}else{if(He(e,n))return;Pd.set(n),i.uniformMatrix4fv(this.addr,!1,Pd),Ge(e,n)}}function Vb(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Hb(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2iv(this.addr,t),Ge(e,t)}}function Gb(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;i.uniform3iv(this.addr,t),Ge(e,t)}}function Wb(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4iv(this.addr,t),Ge(e,t)}}function qb(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Xb(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2uiv(this.addr,t),Ge(e,t)}}function jb(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;i.uniform3uiv(this.addr,t),Ge(e,t)}}function Yb(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4uiv(this.addr,t),Ge(e,t)}}function $b(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(lu.compareFunction=e.isReversedDepthBuffer()?Ou:Uu,r=lu):r=hm,e.setTexture2D(t||r,s)}function Kb(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||fm,s)}function Zb(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||pm,s)}function Jb(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||dm,s)}function Qb(i){switch(i){case 5126:return Nb;case 35664:return Fb;case 35665:return Ub;case 35666:return Ob;case 35674:return Bb;case 35675:return zb;case 35676:return kb;case 5124:case 35670:return Vb;case 35667:case 35671:return Hb;case 35668:case 35672:return Gb;case 35669:case 35673:return Wb;case 5125:return qb;case 36294:return Xb;case 36295:return jb;case 36296:return Yb;case 35678:case 36198:case 36298:case 36306:case 35682:return $b;case 35679:case 36299:case 36307:return Kb;case 35680:case 36300:case 36308:case 36293:return Zb;case 36289:case 36303:case 36311:case 36292:return Jb}}function tw(i,t){i.uniform1fv(this.addr,t)}function ew(i,t){const e=Cr(t,this.size,2);i.uniform2fv(this.addr,e)}function nw(i,t){const e=Cr(t,this.size,3);i.uniform3fv(this.addr,e)}function iw(i,t){const e=Cr(t,this.size,4);i.uniform4fv(this.addr,e)}function sw(i,t){const e=Cr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function rw(i,t){const e=Cr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function ow(i,t){const e=Cr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function aw(i,t){i.uniform1iv(this.addr,t)}function lw(i,t){i.uniform2iv(this.addr,t)}function cw(i,t){i.uniform3iv(this.addr,t)}function uw(i,t){i.uniform4iv(this.addr,t)}function hw(i,t){i.uniform1uiv(this.addr,t)}function dw(i,t){i.uniform2uiv(this.addr,t)}function fw(i,t){i.uniform3uiv(this.addr,t)}function pw(i,t){i.uniform4uiv(this.addr,t)}function mw(i,t,e){const n=this.cache,s=t.length,r=$a(e,s);He(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=lu:o=hm;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function gw(i,t,e){const n=this.cache,s=t.length,r=$a(e,s);He(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||fm,r[o])}function _w(i,t,e){const n=this.cache,s=t.length,r=$a(e,s);He(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||pm,r[o])}function vw(i,t,e){const n=this.cache,s=t.length,r=$a(e,s);He(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||dm,r[o])}function xw(i){switch(i){case 5126:return tw;case 35664:return ew;case 35665:return nw;case 35666:return iw;case 35674:return sw;case 35675:return rw;case 35676:return ow;case 5124:case 35670:return aw;case 35667:case 35671:return lw;case 35668:case 35672:return cw;case 35669:case 35673:return uw;case 5125:return hw;case 36294:return dw;case 36295:return fw;case 36296:return pw;case 35678:case 36198:case 36298:case 36306:case 35682:return mw;case 35679:case 36299:case 36307:return gw;case 35680:case 36300:case 36308:case 36293:return _w;case 36289:case 36303:case 36311:case 36292:return vw}}class yw{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Qb(e.type)}}class Sw{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=xw(e.type)}}class Mw{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Hl=/(\w+)(\])?(\[|\.)?/g;function Dd(i,t){i.seq.push(t),i.map[t.id]=t}function bw(i,t,e){const n=i.name,s=n.length;for(Hl.lastIndex=0;;){const r=Hl.exec(n),o=Hl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Dd(e,c===void 0?new yw(a,i,t):new Sw(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new Mw(a),Dd(e,d)),e=d}}}class va{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);bw(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Nd(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const ww=37297;let Ew=0;function Tw(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Fd=new ie;function Aw(i){ue._getMatrix(Fd,ue.workingColorSpace,i);const t=`mat3( ${Fd.elements.map(e=>e.toFixed(4))} )`;switch(ue.getTransfer(i)){case Pa:return[t,"LinearTransferOETF"];case ve:return[t,"sRGBTransferOETF"];default:return Zt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Ud(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Tw(i.getShaderSource(t),a)}else return r}function Cw(i,t){const e=Aw(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const Rw={[wp]:"Linear",[Ep]:"Reinhard",[Tp]:"Cineon",[Ap]:"ACESFilmic",[Rp]:"AgX",[Pp]:"Neutral",[Cp]:"Custom"};function Pw(i,t){const e=Rw[t];return e===void 0?(Zt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Jo=new Z;function Iw(){ue.getLuminanceCoefficients(Jo);const i=Jo.x.toFixed(4),t=Jo.y.toFixed(4),e=Jo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Lw(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yr).join(`
`)}function Dw(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Nw(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Yr(i){return i!==""}function Od(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Bd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Fw=/^[ \t]*#include +<([\w\d./]+)>/gm;function cu(i){return i.replace(Fw,Ow)}const Uw=new Map;function Ow(i,t){let e=se[t];if(e===void 0){const n=Uw.get(t);if(n!==void 0)e=se[n],Zt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return cu(e)}const Bw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zd(i){return i.replace(Bw,zw)}function zw(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function kd(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const kw={[da]:"SHADOWMAP_TYPE_PCF",[Xr]:"SHADOWMAP_TYPE_VSM"};function Vw(i){return kw[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Hw={[Ls]:"ENVMAP_TYPE_CUBE",[yr]:"ENVMAP_TYPE_CUBE",[Xa]:"ENVMAP_TYPE_CUBE_UV"};function Gw(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Hw[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const Ww={[yr]:"ENVMAP_MODE_REFRACTION"};function qw(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Ww[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Xw={[bp]:"ENVMAP_BLENDING_MULTIPLY",[ix]:"ENVMAP_BLENDING_MIX",[sx]:"ENVMAP_BLENDING_ADD"};function jw(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Xw[i.combine]||"ENVMAP_BLENDING_NONE"}function Yw(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function $w(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Vw(e),c=Gw(e),u=qw(e),d=jw(e),h=Yw(e),f=Lw(e),p=Dw(r),_=s.createProgram();let m,g,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Yr).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Yr).join(`
`),g.length>0&&(g+=`
`)):(m=[kd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yr).join(`
`),g=[kd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ai?"#define TONE_MAPPING":"",e.toneMapping!==ai?se.tonemapping_pars_fragment:"",e.toneMapping!==ai?Pw("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",se.colorspace_pars_fragment,Cw("linearToOutputTexel",e.outputColorSpace),Iw(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Yr).join(`
`)),o=cu(o),o=Od(o,e),o=Bd(o,e),a=cu(a),a=Od(a,e),a=Bd(a,e),o=zd(o),a=zd(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",e.glslVersion===qh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===qh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const S=x+m+o,v=x+g+a,M=Nd(s,s.VERTEX_SHADER,S),w=Nd(s,s.FRAGMENT_SHADER,v);s.attachShader(_,M),s.attachShader(_,w),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(D){if(i.debug.checkShaderErrors){const k=s.getProgramInfoLog(_)||"",U=s.getShaderInfoLog(M)||"",W=s.getShaderInfoLog(w)||"",B=k.trim(),O=U.trim(),H=W.trim();let q=!0,ut=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,M,w);else{const gt=Ud(s,M,"vertex"),dt=Ud(s,w,"fragment");le("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+B+`
`+gt+`
`+dt)}else B!==""?Zt("WebGLProgram: Program Info Log:",B):(O===""||H==="")&&(ut=!1);ut&&(D.diagnostics={runnable:q,programLog:B,vertexShader:{log:O,prefix:m},fragmentShader:{log:H,prefix:g}})}s.deleteShader(M),s.deleteShader(w),L=new va(s,_),b=Nw(s,_)}let L;this.getUniforms=function(){return L===void 0&&A(this),L};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(_,ww)),E},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ew++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=w,this}let Kw=0;class Zw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Jw(t),e.set(t,n)),n}}class Jw{constructor(t){this.id=Kw++,this.code=t,this.usedTimes=0}}function Qw(i,t,e,n,s,r,o){const a=new Vu,l=new Zw,c=new Set,u=[],d=new Map,h=s.logarithmicDepthBuffer;let f=s.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,E,D,k,U){const W=k.fog,B=U.geometry,O=b.isMeshStandardMaterial?k.environment:null,H=(b.isMeshStandardMaterial?e:t).get(b.envMap||O),q=H&&H.mapping===Xa?H.image.height:null,ut=p[b.type];b.precision!==null&&(f=s.getMaxPrecision(b.precision),f!==b.precision&&Zt("WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const gt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,dt=gt!==void 0?gt.length:0;let _t=0;B.morphAttributes.position!==void 0&&(_t=1),B.morphAttributes.normal!==void 0&&(_t=2),B.morphAttributes.color!==void 0&&(_t=3);let Lt,ot,et,X;if(ut){const ge=ii[ut];Lt=ge.vertexShader,ot=ge.fragmentShader}else Lt=b.vertexShader,ot=b.fragmentShader,l.update(b),et=l.getVertexShaderID(b),X=l.getFragmentShaderID(b);const Y=i.getRenderTarget(),ft=i.state.buffers.depth.getReversed(),mt=U.isInstancedMesh===!0,lt=U.isBatchedMesh===!0,St=!!b.map,I=!!b.matcap,N=!!H,F=!!b.aoMap,G=!!b.lightMap,V=!!b.bumpMap,$=!!b.normalMap,R=!!b.displacementMap,st=!!b.emissiveMap,Q=!!b.metalnessMap,it=!!b.roughnessMap,at=b.anisotropy>0,C=b.clearcoat>0,y=b.dispersion>0,z=b.iridescence>0,j=b.sheen>0,rt=b.transmission>0,tt=at&&!!b.anisotropyMap,Ct=C&&!!b.clearcoatMap,xt=C&&!!b.clearcoatNormalMap,Tt=C&&!!b.clearcoatRoughnessMap,zt=z&&!!b.iridescenceMap,yt=z&&!!b.iridescenceThicknessMap,Et=j&&!!b.sheenColorMap,Rt=j&&!!b.sheenRoughnessMap,Dt=!!b.specularMap,At=!!b.specularColorMap,Yt=!!b.specularIntensityMap,K=rt&&!!b.transmissionMap,Ut=rt&&!!b.thicknessMap,wt=!!b.gradientMap,Bt=!!b.alphaMap,Mt=b.alphaTest>0,vt=!!b.alphaHash,Pt=!!b.extensions;let Qt=ai;b.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Qt=i.toneMapping);const be={shaderID:ut,shaderType:b.type,shaderName:b.name,vertexShader:Lt,fragmentShader:ot,defines:b.defines,customVertexShaderID:et,customFragmentShaderID:X,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:lt,batchingColor:lt&&U._colorsTexture!==null,instancing:mt,instancingColor:mt&&U.instanceColor!==null,instancingMorph:mt&&U.morphTexture!==null,outputColorSpace:Y===null?i.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Mr,alphaToCoverage:!!b.alphaToCoverage,map:St,matcap:I,envMap:N,envMapMode:N&&H.mapping,envMapCubeUVHeight:q,aoMap:F,lightMap:G,bumpMap:V,normalMap:$,displacementMap:R,emissiveMap:st,normalMapObjectSpace:$&&b.normalMapType===ax,normalMapTangentSpace:$&&b.normalMapType===zp,metalnessMap:Q,roughnessMap:it,anisotropy:at,anisotropyMap:tt,clearcoat:C,clearcoatMap:Ct,clearcoatNormalMap:xt,clearcoatRoughnessMap:Tt,dispersion:y,iridescence:z,iridescenceMap:zt,iridescenceThicknessMap:yt,sheen:j,sheenColorMap:Et,sheenRoughnessMap:Rt,specularMap:Dt,specularColorMap:At,specularIntensityMap:Yt,transmission:rt,transmissionMap:K,thicknessMap:Ut,gradientMap:wt,opaque:b.transparent===!1&&b.blending===pr&&b.alphaToCoverage===!1,alphaMap:Bt,alphaTest:Mt,alphaHash:vt,combine:b.combine,mapUv:St&&_(b.map.channel),aoMapUv:F&&_(b.aoMap.channel),lightMapUv:G&&_(b.lightMap.channel),bumpMapUv:V&&_(b.bumpMap.channel),normalMapUv:$&&_(b.normalMap.channel),displacementMapUv:R&&_(b.displacementMap.channel),emissiveMapUv:st&&_(b.emissiveMap.channel),metalnessMapUv:Q&&_(b.metalnessMap.channel),roughnessMapUv:it&&_(b.roughnessMap.channel),anisotropyMapUv:tt&&_(b.anisotropyMap.channel),clearcoatMapUv:Ct&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:xt&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Tt&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:zt&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:yt&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:Rt&&_(b.sheenRoughnessMap.channel),specularMapUv:Dt&&_(b.specularMap.channel),specularColorMapUv:At&&_(b.specularColorMap.channel),specularIntensityMapUv:Yt&&_(b.specularIntensityMap.channel),transmissionMapUv:K&&_(b.transmissionMap.channel),thicknessMapUv:Ut&&_(b.thicknessMap.channel),alphaMapUv:Bt&&_(b.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&($||at),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!B.attributes.uv&&(St||Bt),fog:!!W,useFog:b.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ft,skinning:U.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:dt,morphTextureStride:_t,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Qt,decodeVideoTexture:St&&b.map.isVideoTexture===!0&&ue.getTransfer(b.map.colorSpace)===ve,decodeVideoTextureEmissive:st&&b.emissiveMap.isVideoTexture===!0&&ue.getTransfer(b.emissiveMap.colorSpace)===ve,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Hn,flipSided:b.side===vn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Pt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pt&&b.extensions.multiDraw===!0||lt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return be.vertexUv1s=c.has(1),be.vertexUv2s=c.has(2),be.vertexUv3s=c.has(3),c.clear(),be}function g(b){const E=[];if(b.shaderID?E.push(b.shaderID):(E.push(b.customVertexShaderID),E.push(b.customFragmentShaderID)),b.defines!==void 0)for(const D in b.defines)E.push(D),E.push(b.defines[D]);return b.isRawShaderMaterial===!1&&(x(E,b),S(E,b),E.push(i.outputColorSpace)),E.push(b.customProgramCacheKey),E.join()}function x(b,E){b.push(E.precision),b.push(E.outputColorSpace),b.push(E.envMapMode),b.push(E.envMapCubeUVHeight),b.push(E.mapUv),b.push(E.alphaMapUv),b.push(E.lightMapUv),b.push(E.aoMapUv),b.push(E.bumpMapUv),b.push(E.normalMapUv),b.push(E.displacementMapUv),b.push(E.emissiveMapUv),b.push(E.metalnessMapUv),b.push(E.roughnessMapUv),b.push(E.anisotropyMapUv),b.push(E.clearcoatMapUv),b.push(E.clearcoatNormalMapUv),b.push(E.clearcoatRoughnessMapUv),b.push(E.iridescenceMapUv),b.push(E.iridescenceThicknessMapUv),b.push(E.sheenColorMapUv),b.push(E.sheenRoughnessMapUv),b.push(E.specularMapUv),b.push(E.specularColorMapUv),b.push(E.specularIntensityMapUv),b.push(E.transmissionMapUv),b.push(E.thicknessMapUv),b.push(E.combine),b.push(E.fogExp2),b.push(E.sizeAttenuation),b.push(E.morphTargetsCount),b.push(E.morphAttributeCount),b.push(E.numDirLights),b.push(E.numPointLights),b.push(E.numSpotLights),b.push(E.numSpotLightMaps),b.push(E.numHemiLights),b.push(E.numRectAreaLights),b.push(E.numDirLightShadows),b.push(E.numPointLightShadows),b.push(E.numSpotLightShadows),b.push(E.numSpotLightShadowsWithMaps),b.push(E.numLightProbes),b.push(E.shadowMapType),b.push(E.toneMapping),b.push(E.numClippingPlanes),b.push(E.numClipIntersection),b.push(E.depthPacking)}function S(b,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),b.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),b.push(a.mask)}function v(b){const E=p[b.type];let D;if(E){const k=ii[E];D=Ux.clone(k.uniforms)}else D=b.uniforms;return D}function M(b,E){let D=d.get(E);return D!==void 0?++D.usedTimes:(D=new $w(i,E,b,r),u.push(D),d.set(E,D)),D}function w(b){if(--b.usedTimes===0){const E=u.indexOf(b);u[E]=u[u.length-1],u.pop(),d.delete(b.cacheKey),b.destroy()}}function A(b){l.remove(b)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:g,getUniforms:v,acquireProgram:M,releaseProgram:w,releaseShaderCache:A,programs:u,dispose:L}}function tE(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function eE(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Vd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Hd(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d,h,f,p,_,m){let g=i[t];return g===void 0?(g={id:d.id,object:d,geometry:h,material:f,groupOrder:p,renderOrder:d.renderOrder,z:_,group:m},i[t]=g):(g.id=d.id,g.object=d,g.geometry=h,g.material=f,g.groupOrder=p,g.renderOrder=d.renderOrder,g.z=_,g.group=m),t++,g}function a(d,h,f,p,_,m){const g=o(d,h,f,p,_,m);f.transmission>0?n.push(g):f.transparent===!0?s.push(g):e.push(g)}function l(d,h,f,p,_,m){const g=o(d,h,f,p,_,m);f.transmission>0?n.unshift(g):f.transparent===!0?s.unshift(g):e.unshift(g)}function c(d,h){e.length>1&&e.sort(d||eE),n.length>1&&n.sort(h||Vd),s.length>1&&s.sort(h||Vd)}function u(){for(let d=t,h=i.length;d<h;d++){const f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function nE(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Hd,i.set(n,[o])):s>=r.length?(o=new Hd,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function iE(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new Z,color:new ae};break;case"SpotLight":e={position:new Z,direction:new Z,color:new ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Z,color:new ae,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Z,skyColor:new ae,groundColor:new ae};break;case"RectAreaLight":e={color:new ae,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return i[t.id]=e,e}}}function sE(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let rE=0;function oE(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function aE(i){const t=new iE,e=sE(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new Z);const s=new Z,r=new Pe,o=new Pe;function a(c){let u=0,d=0,h=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,p=0,_=0,m=0,g=0,x=0,S=0,v=0,M=0,w=0,A=0;c.sort(oE);for(let b=0,E=c.length;b<E;b++){const D=c[b],k=D.color,U=D.intensity,W=D.distance;let B=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Sr?B=D.shadow.map.texture:B=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=k.r*U,d+=k.g*U,h+=k.b*U;else if(D.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(D.sh.coefficients[O],U);A++}else if(D.isDirectionalLight){const O=t.get(D);if(O.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const H=D.shadow,q=e.get(D);q.shadowIntensity=H.intensity,q.shadowBias=H.bias,q.shadowNormalBias=H.normalBias,q.shadowRadius=H.radius,q.shadowMapSize=H.mapSize,n.directionalShadow[f]=q,n.directionalShadowMap[f]=B,n.directionalShadowMatrix[f]=D.shadow.matrix,x++}n.directional[f]=O,f++}else if(D.isSpotLight){const O=t.get(D);O.position.setFromMatrixPosition(D.matrixWorld),O.color.copy(k).multiplyScalar(U),O.distance=W,O.coneCos=Math.cos(D.angle),O.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),O.decay=D.decay,n.spot[_]=O;const H=D.shadow;if(D.map&&(n.spotLightMap[M]=D.map,M++,H.updateMatrices(D),D.castShadow&&w++),n.spotLightMatrix[_]=H.matrix,D.castShadow){const q=e.get(D);q.shadowIntensity=H.intensity,q.shadowBias=H.bias,q.shadowNormalBias=H.normalBias,q.shadowRadius=H.radius,q.shadowMapSize=H.mapSize,n.spotShadow[_]=q,n.spotShadowMap[_]=B,v++}_++}else if(D.isRectAreaLight){const O=t.get(D);O.color.copy(k).multiplyScalar(U),O.halfWidth.set(D.width*.5,0,0),O.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=O,m++}else if(D.isPointLight){const O=t.get(D);if(O.color.copy(D.color).multiplyScalar(D.intensity),O.distance=D.distance,O.decay=D.decay,D.castShadow){const H=D.shadow,q=e.get(D);q.shadowIntensity=H.intensity,q.shadowBias=H.bias,q.shadowNormalBias=H.normalBias,q.shadowRadius=H.radius,q.shadowMapSize=H.mapSize,q.shadowCameraNear=H.camera.near,q.shadowCameraFar=H.camera.far,n.pointShadow[p]=q,n.pointShadowMap[p]=B,n.pointShadowMatrix[p]=D.shadow.matrix,S++}n.point[p]=O,p++}else if(D.isHemisphereLight){const O=t.get(D);O.skyColor.copy(D.color).multiplyScalar(U),O.groundColor.copy(D.groundColor).multiplyScalar(U),n.hemi[g]=O,g++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Nt.LTC_FLOAT_1,n.rectAreaLTC2=Nt.LTC_FLOAT_2):(n.rectAreaLTC1=Nt.LTC_HALF_1,n.rectAreaLTC2=Nt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const L=n.hash;(L.directionalLength!==f||L.pointLength!==p||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==g||L.numDirectionalShadows!==x||L.numPointShadows!==S||L.numSpotShadows!==v||L.numSpotMaps!==M||L.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=p,n.hemi.length=g,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=v+M-w,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=A,L.directionalLength=f,L.pointLength=p,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=g,L.numDirectionalShadows=x,L.numPointShadows=S,L.numSpotShadows=v,L.numSpotMaps=M,L.numLightProbes=A,n.version=rE++)}function l(c,u){let d=0,h=0,f=0,p=0,_=0;const m=u.matrixWorldInverse;for(let g=0,x=c.length;g<x;g++){const S=c[g];if(S.isDirectionalLight){const v=n.directional[d];v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),d++}else if(S.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),f++}else if(S.isRectAreaLight){const v=n.rectArea[p];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(S.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),p++}else if(S.isPointLight){const v=n.point[h];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),h++}else if(S.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function Gd(i){const t=new aE(i),e=[],n=[];function s(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function lE(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Gd(i),t.set(s,[a])):r>=o.length?(a=new Gd(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const cE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,hE=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],dE=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],Wd=new Pe,zr=new Z,Gl=new Z;function fE(i,t,e){let n=new Gu;const s=new bt,r=new bt,o=new Ne,a=new Ty,l=new Ay,c={},u=e.maxTextureSize,d={[os]:vn,[vn]:os,[Hn]:Hn},h=new fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new bt},radius:{value:4}},vertexShader:cE,fragmentShader:uE}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const p=new An;p.setAttribute("position",new Un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ne(p,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=da;let g=this.type;this.render=function(w,A,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;w.type===Bv&&(Zt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),w.type=da);const b=i.getRenderTarget(),E=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),k=i.state;k.setBlending(Fi),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const U=g!==this.type;U&&A.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach(B=>B.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,B=w.length;W<B;W++){const O=w[W],H=O.shadow;if(H===void 0){Zt("WebGLShadowMap:",O,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const q=H.getFrameExtents();if(s.multiply(q),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/q.x),s.x=r.x*q.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/q.y),s.y=r.y*q.y,H.mapSize.y=r.y)),H.map===null||U===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Xr){if(O.isPointLight){Zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new li(s.x,s.y,{format:Sr,type:Vi,minFilter:Ke,magFilter:Ke,generateMipmaps:!1}),H.map.texture.name=O.name+".shadowMap",H.map.depthTexture=new mo(s.x,s.y,si),H.map.depthTexture.name=O.name+".shadowMapDepth",H.map.depthTexture.format=Hi,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=qe,H.map.depthTexture.magFilter=qe}else{O.isPointLight?(H.map=new Yp(s.x),H.map.depthTexture=new qx(s.x,hi)):(H.map=new li(s.x,s.y),H.map.depthTexture=new mo(s.x,s.y,hi)),H.map.depthTexture.name=O.name+".shadowMap",H.map.depthTexture.format=Hi;const gt=i.state.buffers.depth.getReversed();this.type===da?(H.map.depthTexture.compareFunction=gt?Ou:Uu,H.map.depthTexture.minFilter=Ke,H.map.depthTexture.magFilter=Ke):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=qe,H.map.depthTexture.magFilter=qe)}H.camera.updateProjectionMatrix()}const ut=H.map.isWebGLCubeRenderTarget?6:1;for(let gt=0;gt<ut;gt++){if(H.map.isWebGLCubeRenderTarget)i.setRenderTarget(H.map,gt),i.clear();else{gt===0&&(i.setRenderTarget(H.map),i.clear());const dt=H.getViewport(gt);o.set(r.x*dt.x,r.y*dt.y,r.x*dt.z,r.y*dt.w),k.viewport(o)}if(O.isPointLight){const dt=H.camera,_t=H.matrix,Lt=O.distance||dt.far;Lt!==dt.far&&(dt.far=Lt,dt.updateProjectionMatrix()),zr.setFromMatrixPosition(O.matrixWorld),dt.position.copy(zr),Gl.copy(dt.position),Gl.add(hE[gt]),dt.up.copy(dE[gt]),dt.lookAt(Gl),dt.updateMatrixWorld(),_t.makeTranslation(-zr.x,-zr.y,-zr.z),Wd.multiplyMatrices(dt.projectionMatrix,dt.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Wd,dt.coordinateSystem,dt.reversedDepth)}else H.updateMatrices(O);n=H.getFrustum(),v(A,L,H.camera,O,this.type)}H.isPointLightShadow!==!0&&this.type===Xr&&x(H,L),H.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(b,E,D)};function x(w,A){const L=t.update(_);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new li(s.x,s.y,{format:Sr,type:Vi})),h.uniforms.shadow_pass.value=w.map.depthTexture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(A,null,L,h,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(A,null,L,f,_,null)}function S(w,A,L,b){let E=null;const D=L.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)E=D;else if(E=L.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const k=E.uuid,U=A.uuid;let W=c[k];W===void 0&&(W={},c[k]=W);let B=W[U];B===void 0&&(B=E.clone(),W[U]=B,A.addEventListener("dispose",M)),E=B}if(E.visible=A.visible,E.wireframe=A.wireframe,b===Xr?E.side=A.shadowSide!==null?A.shadowSide:A.side:E.side=A.shadowSide!==null?A.shadowSide:d[A.side],E.alphaMap=A.alphaMap,E.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,E.map=A.map,E.clipShadows=A.clipShadows,E.clippingPlanes=A.clippingPlanes,E.clipIntersection=A.clipIntersection,E.displacementMap=A.displacementMap,E.displacementScale=A.displacementScale,E.displacementBias=A.displacementBias,E.wireframeLinewidth=A.wireframeLinewidth,E.linewidth=A.linewidth,L.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const k=i.properties.get(E);k.light=L}return E}function v(w,A,L,b,E){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&E===Xr)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,w.matrixWorld);const U=t.update(w),W=w.material;if(Array.isArray(W)){const B=U.groups;for(let O=0,H=B.length;O<H;O++){const q=B[O],ut=W[q.materialIndex];if(ut&&ut.visible){const gt=S(w,ut,b,E);w.onBeforeShadow(i,w,A,L,U,gt,q),i.renderBufferDirect(L,null,U,gt,w,q),w.onAfterShadow(i,w,A,L,U,gt,q)}}}else if(W.visible){const B=S(w,W,b,E);w.onBeforeShadow(i,w,A,L,U,B,null),i.renderBufferDirect(L,null,U,B,w,null),w.onAfterShadow(i,w,A,L,U,B,null)}}const k=w.children;for(let U=0,W=k.length;U<W;U++)v(k[U],A,L,b,E)}function M(w){w.target.removeEventListener("dispose",M);for(const L in c){const b=c[L],E=w.target.uuid;E in b&&(b[E].dispose(),delete b[E])}}}const pE={[pc]:mc,[gc]:xc,[_c]:yc,[xr]:vc,[mc]:pc,[xc]:gc,[yc]:_c,[vc]:xr};function mE(i,t){function e(){let K=!1;const Ut=new Ne;let wt=null;const Bt=new Ne(0,0,0,0);return{setMask:function(Mt){wt!==Mt&&!K&&(i.colorMask(Mt,Mt,Mt,Mt),wt=Mt)},setLocked:function(Mt){K=Mt},setClear:function(Mt,vt,Pt,Qt,be){be===!0&&(Mt*=Qt,vt*=Qt,Pt*=Qt),Ut.set(Mt,vt,Pt,Qt),Bt.equals(Ut)===!1&&(i.clearColor(Mt,vt,Pt,Qt),Bt.copy(Ut))},reset:function(){K=!1,wt=null,Bt.set(-1,0,0,0)}}}function n(){let K=!1,Ut=!1,wt=null,Bt=null,Mt=null;return{setReversed:function(vt){if(Ut!==vt){const Pt=t.get("EXT_clip_control");vt?Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.ZERO_TO_ONE_EXT):Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.NEGATIVE_ONE_TO_ONE_EXT),Ut=vt;const Qt=Mt;Mt=null,this.setClear(Qt)}},getReversed:function(){return Ut},setTest:function(vt){vt?Y(i.DEPTH_TEST):ft(i.DEPTH_TEST)},setMask:function(vt){wt!==vt&&!K&&(i.depthMask(vt),wt=vt)},setFunc:function(vt){if(Ut&&(vt=pE[vt]),Bt!==vt){switch(vt){case pc:i.depthFunc(i.NEVER);break;case mc:i.depthFunc(i.ALWAYS);break;case gc:i.depthFunc(i.LESS);break;case xr:i.depthFunc(i.LEQUAL);break;case _c:i.depthFunc(i.EQUAL);break;case vc:i.depthFunc(i.GEQUAL);break;case xc:i.depthFunc(i.GREATER);break;case yc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Bt=vt}},setLocked:function(vt){K=vt},setClear:function(vt){Mt!==vt&&(Ut&&(vt=1-vt),i.clearDepth(vt),Mt=vt)},reset:function(){K=!1,wt=null,Bt=null,Mt=null,Ut=!1}}}function s(){let K=!1,Ut=null,wt=null,Bt=null,Mt=null,vt=null,Pt=null,Qt=null,be=null;return{setTest:function(ge){K||(ge?Y(i.STENCIL_TEST):ft(i.STENCIL_TEST))},setMask:function(ge){Ut!==ge&&!K&&(i.stencilMask(ge),Ut=ge)},setFunc:function(ge,$n,mi){(wt!==ge||Bt!==$n||Mt!==mi)&&(i.stencilFunc(ge,$n,mi),wt=ge,Bt=$n,Mt=mi)},setOp:function(ge,$n,mi){(vt!==ge||Pt!==$n||Qt!==mi)&&(i.stencilOp(ge,$n,mi),vt=ge,Pt=$n,Qt=mi)},setLocked:function(ge){K=ge},setClear:function(ge){be!==ge&&(i.clearStencil(ge),be=ge)},reset:function(){K=!1,Ut=null,wt=null,Bt=null,Mt=null,vt=null,Pt=null,Qt=null,be=null}}}const r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let u={},d={},h=new WeakMap,f=[],p=null,_=!1,m=null,g=null,x=null,S=null,v=null,M=null,w=null,A=new ae(0,0,0),L=0,b=!1,E=null,D=null,k=null,U=null,W=null;const B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,H=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(q)[1]),O=H>=1):q.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),O=H>=2);let ut=null,gt={};const dt=i.getParameter(i.SCISSOR_BOX),_t=i.getParameter(i.VIEWPORT),Lt=new Ne().fromArray(dt),ot=new Ne().fromArray(_t);function et(K,Ut,wt,Bt){const Mt=new Uint8Array(4),vt=i.createTexture();i.bindTexture(K,vt),i.texParameteri(K,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(K,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Pt=0;Pt<wt;Pt++)K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?i.texImage3D(Ut,0,i.RGBA,1,1,Bt,0,i.RGBA,i.UNSIGNED_BYTE,Mt):i.texImage2D(Ut+Pt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Mt);return vt}const X={};X[i.TEXTURE_2D]=et(i.TEXTURE_2D,i.TEXTURE_2D,1),X[i.TEXTURE_CUBE_MAP]=et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[i.TEXTURE_2D_ARRAY]=et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),X[i.TEXTURE_3D]=et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Y(i.DEPTH_TEST),o.setFunc(xr),V(!1),$(kh),Y(i.CULL_FACE),F(Fi);function Y(K){u[K]!==!0&&(i.enable(K),u[K]=!0)}function ft(K){u[K]!==!1&&(i.disable(K),u[K]=!1)}function mt(K,Ut){return d[K]!==Ut?(i.bindFramebuffer(K,Ut),d[K]=Ut,K===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=Ut),K===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=Ut),!0):!1}function lt(K,Ut){let wt=f,Bt=!1;if(K){wt=h.get(Ut),wt===void 0&&(wt=[],h.set(Ut,wt));const Mt=K.textures;if(wt.length!==Mt.length||wt[0]!==i.COLOR_ATTACHMENT0){for(let vt=0,Pt=Mt.length;vt<Pt;vt++)wt[vt]=i.COLOR_ATTACHMENT0+vt;wt.length=Mt.length,Bt=!0}}else wt[0]!==i.BACK&&(wt[0]=i.BACK,Bt=!0);Bt&&i.drawBuffers(wt)}function St(K){return p!==K?(i.useProgram(K),p=K,!0):!1}const I={[bs]:i.FUNC_ADD,[kv]:i.FUNC_SUBTRACT,[Vv]:i.FUNC_REVERSE_SUBTRACT};I[Hv]=i.MIN,I[Gv]=i.MAX;const N={[Wv]:i.ZERO,[qv]:i.ONE,[Xv]:i.SRC_COLOR,[dc]:i.SRC_ALPHA,[Jv]:i.SRC_ALPHA_SATURATE,[Kv]:i.DST_COLOR,[Yv]:i.DST_ALPHA,[jv]:i.ONE_MINUS_SRC_COLOR,[fc]:i.ONE_MINUS_SRC_ALPHA,[Zv]:i.ONE_MINUS_DST_COLOR,[$v]:i.ONE_MINUS_DST_ALPHA,[Qv]:i.CONSTANT_COLOR,[tx]:i.ONE_MINUS_CONSTANT_COLOR,[ex]:i.CONSTANT_ALPHA,[nx]:i.ONE_MINUS_CONSTANT_ALPHA};function F(K,Ut,wt,Bt,Mt,vt,Pt,Qt,be,ge){if(K===Fi){_===!0&&(ft(i.BLEND),_=!1);return}if(_===!1&&(Y(i.BLEND),_=!0),K!==zv){if(K!==m||ge!==b){if((g!==bs||v!==bs)&&(i.blendEquation(i.FUNC_ADD),g=bs,v=bs),ge)switch(K){case pr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case hc:i.blendFunc(i.ONE,i.ONE);break;case Vh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Hh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:le("WebGLState: Invalid blending: ",K);break}else switch(K){case pr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case hc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Vh:le("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Hh:le("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:le("WebGLState: Invalid blending: ",K);break}x=null,S=null,M=null,w=null,A.set(0,0,0),L=0,m=K,b=ge}return}Mt=Mt||Ut,vt=vt||wt,Pt=Pt||Bt,(Ut!==g||Mt!==v)&&(i.blendEquationSeparate(I[Ut],I[Mt]),g=Ut,v=Mt),(wt!==x||Bt!==S||vt!==M||Pt!==w)&&(i.blendFuncSeparate(N[wt],N[Bt],N[vt],N[Pt]),x=wt,S=Bt,M=vt,w=Pt),(Qt.equals(A)===!1||be!==L)&&(i.blendColor(Qt.r,Qt.g,Qt.b,be),A.copy(Qt),L=be),m=K,b=!1}function G(K,Ut){K.side===Hn?ft(i.CULL_FACE):Y(i.CULL_FACE);let wt=K.side===vn;Ut&&(wt=!wt),V(wt),K.blending===pr&&K.transparent===!1?F(Fi):F(K.blending,K.blendEquation,K.blendSrc,K.blendDst,K.blendEquationAlpha,K.blendSrcAlpha,K.blendDstAlpha,K.blendColor,K.blendAlpha,K.premultipliedAlpha),o.setFunc(K.depthFunc),o.setTest(K.depthTest),o.setMask(K.depthWrite),r.setMask(K.colorWrite);const Bt=K.stencilWrite;a.setTest(Bt),Bt&&(a.setMask(K.stencilWriteMask),a.setFunc(K.stencilFunc,K.stencilRef,K.stencilFuncMask),a.setOp(K.stencilFail,K.stencilZFail,K.stencilZPass)),st(K.polygonOffset,K.polygonOffsetFactor,K.polygonOffsetUnits),K.alphaToCoverage===!0?Y(i.SAMPLE_ALPHA_TO_COVERAGE):ft(i.SAMPLE_ALPHA_TO_COVERAGE)}function V(K){E!==K&&(K?i.frontFace(i.CW):i.frontFace(i.CCW),E=K)}function $(K){K!==Uv?(Y(i.CULL_FACE),K!==D&&(K===kh?i.cullFace(i.BACK):K===Ov?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ft(i.CULL_FACE),D=K}function R(K){K!==k&&(O&&i.lineWidth(K),k=K)}function st(K,Ut,wt){K?(Y(i.POLYGON_OFFSET_FILL),(U!==Ut||W!==wt)&&(i.polygonOffset(Ut,wt),U=Ut,W=wt)):ft(i.POLYGON_OFFSET_FILL)}function Q(K){K?Y(i.SCISSOR_TEST):ft(i.SCISSOR_TEST)}function it(K){K===void 0&&(K=i.TEXTURE0+B-1),ut!==K&&(i.activeTexture(K),ut=K)}function at(K,Ut,wt){wt===void 0&&(ut===null?wt=i.TEXTURE0+B-1:wt=ut);let Bt=gt[wt];Bt===void 0&&(Bt={type:void 0,texture:void 0},gt[wt]=Bt),(Bt.type!==K||Bt.texture!==Ut)&&(ut!==wt&&(i.activeTexture(wt),ut=wt),i.bindTexture(K,Ut||X[K]),Bt.type=K,Bt.texture=Ut)}function C(){const K=gt[ut];K!==void 0&&K.type!==void 0&&(i.bindTexture(K.type,null),K.type=void 0,K.texture=void 0)}function y(){try{i.compressedTexImage2D(...arguments)}catch(K){le("WebGLState:",K)}}function z(){try{i.compressedTexImage3D(...arguments)}catch(K){le("WebGLState:",K)}}function j(){try{i.texSubImage2D(...arguments)}catch(K){le("WebGLState:",K)}}function rt(){try{i.texSubImage3D(...arguments)}catch(K){le("WebGLState:",K)}}function tt(){try{i.compressedTexSubImage2D(...arguments)}catch(K){le("WebGLState:",K)}}function Ct(){try{i.compressedTexSubImage3D(...arguments)}catch(K){le("WebGLState:",K)}}function xt(){try{i.texStorage2D(...arguments)}catch(K){le("WebGLState:",K)}}function Tt(){try{i.texStorage3D(...arguments)}catch(K){le("WebGLState:",K)}}function zt(){try{i.texImage2D(...arguments)}catch(K){le("WebGLState:",K)}}function yt(){try{i.texImage3D(...arguments)}catch(K){le("WebGLState:",K)}}function Et(K){Lt.equals(K)===!1&&(i.scissor(K.x,K.y,K.z,K.w),Lt.copy(K))}function Rt(K){ot.equals(K)===!1&&(i.viewport(K.x,K.y,K.z,K.w),ot.copy(K))}function Dt(K,Ut){let wt=c.get(Ut);wt===void 0&&(wt=new WeakMap,c.set(Ut,wt));let Bt=wt.get(K);Bt===void 0&&(Bt=i.getUniformBlockIndex(Ut,K.name),wt.set(K,Bt))}function At(K,Ut){const Bt=c.get(Ut).get(K);l.get(Ut)!==Bt&&(i.uniformBlockBinding(Ut,Bt,K.__bindingPointIndex),l.set(Ut,Bt))}function Yt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ut=null,gt={},d={},h=new WeakMap,f=[],p=null,_=!1,m=null,g=null,x=null,S=null,v=null,M=null,w=null,A=new ae(0,0,0),L=0,b=!1,E=null,D=null,k=null,U=null,W=null,Lt.set(0,0,i.canvas.width,i.canvas.height),ot.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Y,disable:ft,bindFramebuffer:mt,drawBuffers:lt,useProgram:St,setBlending:F,setMaterial:G,setFlipSided:V,setCullFace:$,setLineWidth:R,setPolygonOffset:st,setScissorTest:Q,activeTexture:it,bindTexture:at,unbindTexture:C,compressedTexImage2D:y,compressedTexImage3D:z,texImage2D:zt,texImage3D:yt,updateUBOMapping:Dt,uniformBlockBinding:At,texStorage2D:xt,texStorage3D:Tt,texSubImage2D:j,texSubImage3D:rt,compressedTexSubImage2D:tt,compressedTexSubImage3D:Ct,scissor:Et,viewport:Rt,reset:Yt}}function gE(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new bt,u=new WeakMap;let d;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(C,y){return f?new OffscreenCanvas(C,y):La("canvas")}function _(C,y,z){let j=1;const rt=at(C);if((rt.width>z||rt.height>z)&&(j=z/Math.max(rt.width,rt.height)),j<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const tt=Math.floor(j*rt.width),Ct=Math.floor(j*rt.height);d===void 0&&(d=p(tt,Ct));const xt=y?p(tt,Ct):d;return xt.width=tt,xt.height=Ct,xt.getContext("2d").drawImage(C,0,0,tt,Ct),Zt("WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+tt+"x"+Ct+")."),xt}else return"data"in C&&Zt("WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),C;return C}function m(C){return C.generateMipmaps}function g(C){i.generateMipmap(C)}function x(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(C,y,z,j,rt=!1){if(C!==null){if(i[C]!==void 0)return i[C];Zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let tt=y;if(y===i.RED&&(z===i.FLOAT&&(tt=i.R32F),z===i.HALF_FLOAT&&(tt=i.R16F),z===i.UNSIGNED_BYTE&&(tt=i.R8)),y===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(tt=i.R8UI),z===i.UNSIGNED_SHORT&&(tt=i.R16UI),z===i.UNSIGNED_INT&&(tt=i.R32UI),z===i.BYTE&&(tt=i.R8I),z===i.SHORT&&(tt=i.R16I),z===i.INT&&(tt=i.R32I)),y===i.RG&&(z===i.FLOAT&&(tt=i.RG32F),z===i.HALF_FLOAT&&(tt=i.RG16F),z===i.UNSIGNED_BYTE&&(tt=i.RG8)),y===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(tt=i.RG8UI),z===i.UNSIGNED_SHORT&&(tt=i.RG16UI),z===i.UNSIGNED_INT&&(tt=i.RG32UI),z===i.BYTE&&(tt=i.RG8I),z===i.SHORT&&(tt=i.RG16I),z===i.INT&&(tt=i.RG32I)),y===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(tt=i.RGB8UI),z===i.UNSIGNED_SHORT&&(tt=i.RGB16UI),z===i.UNSIGNED_INT&&(tt=i.RGB32UI),z===i.BYTE&&(tt=i.RGB8I),z===i.SHORT&&(tt=i.RGB16I),z===i.INT&&(tt=i.RGB32I)),y===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(tt=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(tt=i.RGBA16UI),z===i.UNSIGNED_INT&&(tt=i.RGBA32UI),z===i.BYTE&&(tt=i.RGBA8I),z===i.SHORT&&(tt=i.RGBA16I),z===i.INT&&(tt=i.RGBA32I)),y===i.RGB&&(z===i.UNSIGNED_INT_5_9_9_9_REV&&(tt=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(tt=i.R11F_G11F_B10F)),y===i.RGBA){const Ct=rt?Pa:ue.getTransfer(j);z===i.FLOAT&&(tt=i.RGBA32F),z===i.HALF_FLOAT&&(tt=i.RGBA16F),z===i.UNSIGNED_BYTE&&(tt=Ct===ve?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(tt=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(tt=i.RGB5_A1)}return(tt===i.R16F||tt===i.R32F||tt===i.RG16F||tt===i.RG32F||tt===i.RGBA16F||tt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function v(C,y){let z;return C?y===null||y===hi||y===ho?z=i.DEPTH24_STENCIL8:y===si?z=i.DEPTH32F_STENCIL8:y===uo&&(z=i.DEPTH24_STENCIL8,Zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===hi||y===ho?z=i.DEPTH_COMPONENT24:y===si?z=i.DEPTH_COMPONENT32F:y===uo&&(z=i.DEPTH_COMPONENT16),z}function M(C,y){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==qe&&C.minFilter!==Ke?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function w(C){const y=C.target;y.removeEventListener("dispose",w),L(y),y.isVideoTexture&&u.delete(y)}function A(C){const y=C.target;y.removeEventListener("dispose",A),E(y)}function L(C){const y=n.get(C);if(y.__webglInit===void 0)return;const z=C.source,j=h.get(z);if(j){const rt=j[y.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&b(C),Object.keys(j).length===0&&h.delete(z)}n.remove(C)}function b(C){const y=n.get(C);i.deleteTexture(y.__webglTexture);const z=C.source,j=h.get(z);delete j[y.__cacheKey],o.memory.textures--}function E(C){const y=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(y.__webglFramebuffer[j]))for(let rt=0;rt<y.__webglFramebuffer[j].length;rt++)i.deleteFramebuffer(y.__webglFramebuffer[j][rt]);else i.deleteFramebuffer(y.__webglFramebuffer[j]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[j])}else{if(Array.isArray(y.__webglFramebuffer))for(let j=0;j<y.__webglFramebuffer.length;j++)i.deleteFramebuffer(y.__webglFramebuffer[j]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let j=0;j<y.__webglColorRenderbuffer.length;j++)y.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[j]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const z=C.textures;for(let j=0,rt=z.length;j<rt;j++){const tt=n.get(z[j]);tt.__webglTexture&&(i.deleteTexture(tt.__webglTexture),o.memory.textures--),n.remove(z[j])}n.remove(C)}let D=0;function k(){D=0}function U(){const C=D;return C>=s.maxTextures&&Zt("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),D+=1,C}function W(C){const y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function B(C,y){const z=n.get(C);if(C.isVideoTexture&&Q(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&z.__version!==C.version){const j=C.image;if(j===null)Zt("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)Zt("WebGLRenderer: Texture marked for update but image is incomplete");else{X(z,C,y);return}}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+y)}function O(C,y){const z=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){X(z,C,y);return}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+y)}function H(C,y){const z=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){X(z,C,y);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+y)}function q(C,y){const z=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&z.__version!==C.version){Y(z,C,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+y)}const ut={[bc]:i.REPEAT,[Li]:i.CLAMP_TO_EDGE,[wc]:i.MIRRORED_REPEAT},gt={[qe]:i.NEAREST,[rx]:i.NEAREST_MIPMAP_NEAREST,[Po]:i.NEAREST_MIPMAP_LINEAR,[Ke]:i.LINEAR,[ul]:i.LINEAR_MIPMAP_NEAREST,[Ts]:i.LINEAR_MIPMAP_LINEAR},dt={[lx]:i.NEVER,[fx]:i.ALWAYS,[cx]:i.LESS,[Uu]:i.LEQUAL,[ux]:i.EQUAL,[Ou]:i.GEQUAL,[hx]:i.GREATER,[dx]:i.NOTEQUAL};function _t(C,y){if(y.type===si&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Ke||y.magFilter===ul||y.magFilter===Po||y.magFilter===Ts||y.minFilter===Ke||y.minFilter===ul||y.minFilter===Po||y.minFilter===Ts)&&Zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,ut[y.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,ut[y.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,ut[y.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,gt[y.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,gt[y.minFilter]),y.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,dt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===qe||y.minFilter!==Po&&y.minFilter!==Ts||y.type===si&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Lt(C,y){let z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",w));const j=y.source;let rt=h.get(j);rt===void 0&&(rt={},h.set(j,rt));const tt=W(y);if(tt!==C.__cacheKey){rt[tt]===void 0&&(rt[tt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),rt[tt].usedTimes++;const Ct=rt[C.__cacheKey];Ct!==void 0&&(rt[C.__cacheKey].usedTimes--,Ct.usedTimes===0&&b(y)),C.__cacheKey=tt,C.__webglTexture=rt[tt].texture}return z}function ot(C,y,z){return Math.floor(Math.floor(C/z)/y)}function et(C,y,z,j){const tt=C.updateRanges;if(tt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,z,j,y.data);else{tt.sort((yt,Et)=>yt.start-Et.start);let Ct=0;for(let yt=1;yt<tt.length;yt++){const Et=tt[Ct],Rt=tt[yt],Dt=Et.start+Et.count,At=ot(Rt.start,y.width,4),Yt=ot(Et.start,y.width,4);Rt.start<=Dt+1&&At===Yt&&ot(Rt.start+Rt.count-1,y.width,4)===At?Et.count=Math.max(Et.count,Rt.start+Rt.count-Et.start):(++Ct,tt[Ct]=Rt)}tt.length=Ct+1;const xt=i.getParameter(i.UNPACK_ROW_LENGTH),Tt=i.getParameter(i.UNPACK_SKIP_PIXELS),zt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let yt=0,Et=tt.length;yt<Et;yt++){const Rt=tt[yt],Dt=Math.floor(Rt.start/4),At=Math.ceil(Rt.count/4),Yt=Dt%y.width,K=Math.floor(Dt/y.width),Ut=At,wt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Yt),i.pixelStorei(i.UNPACK_SKIP_ROWS,K),e.texSubImage2D(i.TEXTURE_2D,0,Yt,K,Ut,wt,z,j,y.data)}C.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,xt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Tt),i.pixelStorei(i.UNPACK_SKIP_ROWS,zt)}}function X(C,y,z){let j=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(j=i.TEXTURE_3D);const rt=Lt(C,y),tt=y.source;e.bindTexture(j,C.__webglTexture,i.TEXTURE0+z);const Ct=n.get(tt);if(tt.version!==Ct.__version||rt===!0){e.activeTexture(i.TEXTURE0+z);const xt=ue.getPrimaries(ue.workingColorSpace),Tt=y.colorSpace===es?null:ue.getPrimaries(y.colorSpace),zt=y.colorSpace===es||xt===Tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt);let yt=_(y.image,!1,s.maxTextureSize);yt=it(y,yt);const Et=r.convert(y.format,y.colorSpace),Rt=r.convert(y.type);let Dt=S(y.internalFormat,Et,Rt,y.colorSpace,y.isVideoTexture);_t(j,y);let At;const Yt=y.mipmaps,K=y.isVideoTexture!==!0,Ut=Ct.__version===void 0||rt===!0,wt=tt.dataReady,Bt=M(y,yt);if(y.isDepthTexture)Dt=v(y.format===As,y.type),Ut&&(K?e.texStorage2D(i.TEXTURE_2D,1,Dt,yt.width,yt.height):e.texImage2D(i.TEXTURE_2D,0,Dt,yt.width,yt.height,0,Et,Rt,null));else if(y.isDataTexture)if(Yt.length>0){K&&Ut&&e.texStorage2D(i.TEXTURE_2D,Bt,Dt,Yt[0].width,Yt[0].height);for(let Mt=0,vt=Yt.length;Mt<vt;Mt++)At=Yt[Mt],K?wt&&e.texSubImage2D(i.TEXTURE_2D,Mt,0,0,At.width,At.height,Et,Rt,At.data):e.texImage2D(i.TEXTURE_2D,Mt,Dt,At.width,At.height,0,Et,Rt,At.data);y.generateMipmaps=!1}else K?(Ut&&e.texStorage2D(i.TEXTURE_2D,Bt,Dt,yt.width,yt.height),wt&&et(y,yt,Et,Rt)):e.texImage2D(i.TEXTURE_2D,0,Dt,yt.width,yt.height,0,Et,Rt,yt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){K&&Ut&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Bt,Dt,Yt[0].width,Yt[0].height,yt.depth);for(let Mt=0,vt=Yt.length;Mt<vt;Mt++)if(At=Yt[Mt],y.format!==qn)if(Et!==null)if(K){if(wt)if(y.layerUpdates.size>0){const Pt=Sd(At.width,At.height,y.format,y.type);for(const Qt of y.layerUpdates){const be=At.data.subarray(Qt*Pt/At.data.BYTES_PER_ELEMENT,(Qt+1)*Pt/At.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Mt,0,0,Qt,At.width,At.height,1,Et,be)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Mt,0,0,0,At.width,At.height,yt.depth,Et,At.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Mt,Dt,At.width,At.height,yt.depth,0,At.data,0,0);else Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else K?wt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Mt,0,0,0,At.width,At.height,yt.depth,Et,Rt,At.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Mt,Dt,At.width,At.height,yt.depth,0,Et,Rt,At.data)}else{K&&Ut&&e.texStorage2D(i.TEXTURE_2D,Bt,Dt,Yt[0].width,Yt[0].height);for(let Mt=0,vt=Yt.length;Mt<vt;Mt++)At=Yt[Mt],y.format!==qn?Et!==null?K?wt&&e.compressedTexSubImage2D(i.TEXTURE_2D,Mt,0,0,At.width,At.height,Et,At.data):e.compressedTexImage2D(i.TEXTURE_2D,Mt,Dt,At.width,At.height,0,At.data):Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):K?wt&&e.texSubImage2D(i.TEXTURE_2D,Mt,0,0,At.width,At.height,Et,Rt,At.data):e.texImage2D(i.TEXTURE_2D,Mt,Dt,At.width,At.height,0,Et,Rt,At.data)}else if(y.isDataArrayTexture)if(K){if(Ut&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Bt,Dt,yt.width,yt.height,yt.depth),wt)if(y.layerUpdates.size>0){const Mt=Sd(yt.width,yt.height,y.format,y.type);for(const vt of y.layerUpdates){const Pt=yt.data.subarray(vt*Mt/yt.data.BYTES_PER_ELEMENT,(vt+1)*Mt/yt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,vt,yt.width,yt.height,1,Et,Rt,Pt)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,yt.width,yt.height,yt.depth,Et,Rt,yt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Dt,yt.width,yt.height,yt.depth,0,Et,Rt,yt.data);else if(y.isData3DTexture)K?(Ut&&e.texStorage3D(i.TEXTURE_3D,Bt,Dt,yt.width,yt.height,yt.depth),wt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,yt.width,yt.height,yt.depth,Et,Rt,yt.data)):e.texImage3D(i.TEXTURE_3D,0,Dt,yt.width,yt.height,yt.depth,0,Et,Rt,yt.data);else if(y.isFramebufferTexture){if(Ut)if(K)e.texStorage2D(i.TEXTURE_2D,Bt,Dt,yt.width,yt.height);else{let Mt=yt.width,vt=yt.height;for(let Pt=0;Pt<Bt;Pt++)e.texImage2D(i.TEXTURE_2D,Pt,Dt,Mt,vt,0,Et,Rt,null),Mt>>=1,vt>>=1}}else if(Yt.length>0){if(K&&Ut){const Mt=at(Yt[0]);e.texStorage2D(i.TEXTURE_2D,Bt,Dt,Mt.width,Mt.height)}for(let Mt=0,vt=Yt.length;Mt<vt;Mt++)At=Yt[Mt],K?wt&&e.texSubImage2D(i.TEXTURE_2D,Mt,0,0,Et,Rt,At):e.texImage2D(i.TEXTURE_2D,Mt,Dt,Et,Rt,At);y.generateMipmaps=!1}else if(K){if(Ut){const Mt=at(yt);e.texStorage2D(i.TEXTURE_2D,Bt,Dt,Mt.width,Mt.height)}wt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Et,Rt,yt)}else e.texImage2D(i.TEXTURE_2D,0,Dt,Et,Rt,yt);m(y)&&g(j),Ct.__version=tt.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function Y(C,y,z){if(y.image.length!==6)return;const j=Lt(C,y),rt=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+z);const tt=n.get(rt);if(rt.version!==tt.__version||j===!0){e.activeTexture(i.TEXTURE0+z);const Ct=ue.getPrimaries(ue.workingColorSpace),xt=y.colorSpace===es?null:ue.getPrimaries(y.colorSpace),Tt=y.colorSpace===es||Ct===xt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);const zt=y.isCompressedTexture||y.image[0].isCompressedTexture,yt=y.image[0]&&y.image[0].isDataTexture,Et=[];for(let vt=0;vt<6;vt++)!zt&&!yt?Et[vt]=_(y.image[vt],!0,s.maxCubemapSize):Et[vt]=yt?y.image[vt].image:y.image[vt],Et[vt]=it(y,Et[vt]);const Rt=Et[0],Dt=r.convert(y.format,y.colorSpace),At=r.convert(y.type),Yt=S(y.internalFormat,Dt,At,y.colorSpace),K=y.isVideoTexture!==!0,Ut=tt.__version===void 0||j===!0,wt=rt.dataReady;let Bt=M(y,Rt);_t(i.TEXTURE_CUBE_MAP,y);let Mt;if(zt){K&&Ut&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Bt,Yt,Rt.width,Rt.height);for(let vt=0;vt<6;vt++){Mt=Et[vt].mipmaps;for(let Pt=0;Pt<Mt.length;Pt++){const Qt=Mt[Pt];y.format!==qn?Dt!==null?K?wt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Pt,0,0,Qt.width,Qt.height,Dt,Qt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Pt,Yt,Qt.width,Qt.height,0,Qt.data):Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):K?wt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Pt,0,0,Qt.width,Qt.height,Dt,At,Qt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Pt,Yt,Qt.width,Qt.height,0,Dt,At,Qt.data)}}}else{if(Mt=y.mipmaps,K&&Ut){Mt.length>0&&Bt++;const vt=at(Et[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Bt,Yt,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(yt){K?wt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Et[vt].width,Et[vt].height,Dt,At,Et[vt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,Yt,Et[vt].width,Et[vt].height,0,Dt,At,Et[vt].data);for(let Pt=0;Pt<Mt.length;Pt++){const be=Mt[Pt].image[vt].image;K?wt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Pt+1,0,0,be.width,be.height,Dt,At,be.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Pt+1,Yt,be.width,be.height,0,Dt,At,be.data)}}else{K?wt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Dt,At,Et[vt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,Yt,Dt,At,Et[vt]);for(let Pt=0;Pt<Mt.length;Pt++){const Qt=Mt[Pt];K?wt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Pt+1,0,0,Dt,At,Qt.image[vt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Pt+1,Yt,Dt,At,Qt.image[vt])}}}m(y)&&g(i.TEXTURE_CUBE_MAP),tt.__version=rt.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function ft(C,y,z,j,rt,tt){const Ct=r.convert(z.format,z.colorSpace),xt=r.convert(z.type),Tt=S(z.internalFormat,Ct,xt,z.colorSpace),zt=n.get(y),yt=n.get(z);if(yt.__renderTarget=y,!zt.__hasExternalTextures){const Et=Math.max(1,y.width>>tt),Rt=Math.max(1,y.height>>tt);rt===i.TEXTURE_3D||rt===i.TEXTURE_2D_ARRAY?e.texImage3D(rt,tt,Tt,Et,Rt,y.depth,0,Ct,xt,null):e.texImage2D(rt,tt,Tt,Et,Rt,0,Ct,xt,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),st(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,rt,yt.__webglTexture,0,R(y)):(rt===i.TEXTURE_2D||rt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,rt,yt.__webglTexture,tt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function mt(C,y,z){if(i.bindRenderbuffer(i.RENDERBUFFER,C),y.depthBuffer){const j=y.depthTexture,rt=j&&j.isDepthTexture?j.type:null,tt=v(y.stencilBuffer,rt),Ct=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;st(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,R(y),tt,y.width,y.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,R(y),tt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,tt,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ct,i.RENDERBUFFER,C)}else{const j=y.textures;for(let rt=0;rt<j.length;rt++){const tt=j[rt],Ct=r.convert(tt.format,tt.colorSpace),xt=r.convert(tt.type),Tt=S(tt.internalFormat,Ct,xt,tt.colorSpace);st(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,R(y),Tt,y.width,y.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,R(y),Tt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Tt,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function lt(C,y,z){const j=y.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const rt=n.get(y.depthTexture);if(rt.__renderTarget=y,(!rt.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),j){if(rt.__webglInit===void 0&&(rt.__webglInit=!0,y.depthTexture.addEventListener("dispose",w)),rt.__webglTexture===void 0){rt.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,rt.__webglTexture),_t(i.TEXTURE_CUBE_MAP,y.depthTexture);const zt=r.convert(y.depthTexture.format),yt=r.convert(y.depthTexture.type);let Et;y.depthTexture.format===Hi?Et=i.DEPTH_COMPONENT24:y.depthTexture.format===As&&(Et=i.DEPTH24_STENCIL8);for(let Rt=0;Rt<6;Rt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,Et,y.width,y.height,0,zt,yt,null)}}else B(y.depthTexture,0);const tt=rt.__webglTexture,Ct=R(y),xt=j?i.TEXTURE_CUBE_MAP_POSITIVE_X+z:i.TEXTURE_2D,Tt=y.depthTexture.format===As?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(y.depthTexture.format===Hi)st(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Tt,xt,tt,0,Ct):i.framebufferTexture2D(i.FRAMEBUFFER,Tt,xt,tt,0);else if(y.depthTexture.format===As)st(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Tt,xt,tt,0,Ct):i.framebufferTexture2D(i.FRAMEBUFFER,Tt,xt,tt,0);else throw new Error("Unknown depthTexture format")}function St(C){const y=n.get(C),z=C.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==C.depthTexture){const j=C.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),j){const rt=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,j.removeEventListener("dispose",rt)};j.addEventListener("dispose",rt),y.__depthDisposeCallback=rt}y.__boundDepthTexture=j}if(C.depthTexture&&!y.__autoAllocateDepthBuffer)if(z)for(let j=0;j<6;j++)lt(y.__webglFramebuffer[j],C,j);else{const j=C.texture.mipmaps;j&&j.length>0?lt(y.__webglFramebuffer[0],C,0):lt(y.__webglFramebuffer,C,0)}else if(z){y.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[j]),y.__webglDepthbuffer[j]===void 0)y.__webglDepthbuffer[j]=i.createRenderbuffer(),mt(y.__webglDepthbuffer[j],C,!1);else{const rt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=y.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,tt)}}else{const j=C.texture.mipmaps;if(j&&j.length>0?e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),mt(y.__webglDepthbuffer,C,!1);else{const rt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,tt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function I(C,y,z){const j=n.get(C);y!==void 0&&ft(j.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&St(C)}function N(C){const y=C.texture,z=n.get(C),j=n.get(y);C.addEventListener("dispose",A);const rt=C.textures,tt=C.isWebGLCubeRenderTarget===!0,Ct=rt.length>1;if(Ct||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=y.version,o.memory.textures++),tt){z.__webglFramebuffer=[];for(let xt=0;xt<6;xt++)if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer[xt]=[];for(let Tt=0;Tt<y.mipmaps.length;Tt++)z.__webglFramebuffer[xt][Tt]=i.createFramebuffer()}else z.__webglFramebuffer[xt]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer=[];for(let xt=0;xt<y.mipmaps.length;xt++)z.__webglFramebuffer[xt]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(Ct)for(let xt=0,Tt=rt.length;xt<Tt;xt++){const zt=n.get(rt[xt]);zt.__webglTexture===void 0&&(zt.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&st(C)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let xt=0;xt<rt.length;xt++){const Tt=rt[xt];z.__webglColorRenderbuffer[xt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[xt]);const zt=r.convert(Tt.format,Tt.colorSpace),yt=r.convert(Tt.type),Et=S(Tt.internalFormat,zt,yt,Tt.colorSpace,C.isXRRenderTarget===!0),Rt=R(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Rt,Et,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,z.__webglColorRenderbuffer[xt])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),mt(z.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(tt){e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),_t(i.TEXTURE_CUBE_MAP,y);for(let xt=0;xt<6;xt++)if(y.mipmaps&&y.mipmaps.length>0)for(let Tt=0;Tt<y.mipmaps.length;Tt++)ft(z.__webglFramebuffer[xt][Tt],C,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Tt);else ft(z.__webglFramebuffer[xt],C,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0);m(y)&&g(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ct){for(let xt=0,Tt=rt.length;xt<Tt;xt++){const zt=rt[xt],yt=n.get(zt);let Et=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Et=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Et,yt.__webglTexture),_t(Et,zt),ft(z.__webglFramebuffer,C,zt,i.COLOR_ATTACHMENT0+xt,Et,0),m(zt)&&g(Et)}e.unbindTexture()}else{let xt=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(xt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(xt,j.__webglTexture),_t(xt,y),y.mipmaps&&y.mipmaps.length>0)for(let Tt=0;Tt<y.mipmaps.length;Tt++)ft(z.__webglFramebuffer[Tt],C,y,i.COLOR_ATTACHMENT0,xt,Tt);else ft(z.__webglFramebuffer,C,y,i.COLOR_ATTACHMENT0,xt,0);m(y)&&g(xt),e.unbindTexture()}C.depthBuffer&&St(C)}function F(C){const y=C.textures;for(let z=0,j=y.length;z<j;z++){const rt=y[z];if(m(rt)){const tt=x(C),Ct=n.get(rt).__webglTexture;e.bindTexture(tt,Ct),g(tt),e.unbindTexture()}}}const G=[],V=[];function $(C){if(C.samples>0){if(st(C)===!1){const y=C.textures,z=C.width,j=C.height;let rt=i.COLOR_BUFFER_BIT;const tt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ct=n.get(C),xt=y.length>1;if(xt)for(let zt=0;zt<y.length;zt++)e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+zt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+zt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer);const Tt=C.texture.mipmaps;Tt&&Tt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let zt=0;zt<y.length;zt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(rt|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(rt|=i.STENCIL_BUFFER_BIT)),xt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[zt]);const yt=n.get(y[zt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,yt,0)}i.blitFramebuffer(0,0,z,j,0,0,z,j,rt,i.NEAREST),l===!0&&(G.length=0,V.length=0,G.push(i.COLOR_ATTACHMENT0+zt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(G.push(tt),V.push(tt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,V)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,G))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),xt)for(let zt=0;zt<y.length;zt++){e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+zt,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[zt]);const yt=n.get(y[zt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+zt,i.TEXTURE_2D,yt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const y=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function R(C){return Math.min(s.maxSamples,C.samples)}function st(C){const y=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Q(C){const y=o.render.frame;u.get(C)!==y&&(u.set(C,y),C.update())}function it(C,y){const z=C.colorSpace,j=C.format,rt=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||z!==Mr&&z!==es&&(ue.getTransfer(z)===ve?(j!==qn||rt!==wn)&&Zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):le("WebGLTextures: Unsupported texture color space:",z)),y}function at(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=k,this.setTexture2D=B,this.setTexture2DArray=O,this.setTexture3D=H,this.setTextureCube=q,this.rebindTextures=I,this.setupRenderTarget=N,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=$,this.setupDepthRenderbuffer=St,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=st,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function _E(i,t){function e(n,s=es){let r;const o=ue.getTransfer(s);if(n===wn)return i.UNSIGNED_BYTE;if(n===Iu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Lu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Np)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Fp)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Lp)return i.BYTE;if(n===Dp)return i.SHORT;if(n===uo)return i.UNSIGNED_SHORT;if(n===Pu)return i.INT;if(n===hi)return i.UNSIGNED_INT;if(n===si)return i.FLOAT;if(n===Vi)return i.HALF_FLOAT;if(n===Up)return i.ALPHA;if(n===Op)return i.RGB;if(n===qn)return i.RGBA;if(n===Hi)return i.DEPTH_COMPONENT;if(n===As)return i.DEPTH_STENCIL;if(n===Bp)return i.RED;if(n===Du)return i.RED_INTEGER;if(n===Sr)return i.RG;if(n===Nu)return i.RG_INTEGER;if(n===Fu)return i.RGBA_INTEGER;if(n===fa||n===pa||n===ma||n===ga)if(o===ve)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===fa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ga)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===fa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===pa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ma)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ga)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ec||n===Tc||n===Ac||n===Cc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ec)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Tc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ac)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Cc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Rc||n===Pc||n===Ic||n===Lc||n===Dc||n===Nc||n===Fc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Rc||n===Pc)return o===ve?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ic)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Lc)return r.COMPRESSED_R11_EAC;if(n===Dc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Nc)return r.COMPRESSED_RG11_EAC;if(n===Fc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Uc||n===Oc||n===Bc||n===zc||n===kc||n===Vc||n===Hc||n===Gc||n===Wc||n===qc||n===Xc||n===jc||n===Yc||n===$c)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Uc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Oc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Bc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===zc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===kc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Vc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Hc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Gc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Wc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===qc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Xc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===jc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Yc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$c)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Kc||n===Zc||n===Jc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Kc)return o===ve?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Zc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Jc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Qc||n===tu||n===eu||n===nu)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Qc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===tu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===eu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===nu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ho?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const vE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class yE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Zp(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new fi({vertexShader:vE,fragmentShader:xE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ne(new mn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class SE extends Os{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,p=null;const _=typeof XRWebGLBinding<"u",m=new yE,g={},x=e.getContextAttributes();let S=null,v=null;const M=[],w=[],A=new bt;let L=null;const b=new Dn;b.viewport=new Ne;const E=new Dn;E.viewport=new Ne;const D=[b,E],k=new Py;let U=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let Y=M[X];return Y===void 0&&(Y=new Ll,M[X]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(X){let Y=M[X];return Y===void 0&&(Y=new Ll,M[X]=Y),Y.getGripSpace()},this.getHand=function(X){let Y=M[X];return Y===void 0&&(Y=new Ll,M[X]=Y),Y.getHandSpace()};function B(X){const Y=w.indexOf(X.inputSource);if(Y===-1)return;const ft=M[Y];ft!==void 0&&(ft.update(X.inputSource,X.frame,c||o),ft.dispatchEvent({type:X.type,data:X.inputSource}))}function O(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",H);for(let X=0;X<M.length;X++){const Y=w[X];Y!==null&&(w[X]=null,M[X].disconnect(Y))}U=null,W=null,m.reset();for(const X in g)delete g[X];t.setRenderTarget(S),f=null,h=null,d=null,s=null,v=null,et.stop(),n.isPresenting=!1,t.setPixelRatio(L),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&Zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&Zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(S=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",O),s.addEventListener("inputsourceschange",H),x.xrCompatible!==!0&&await e.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ft=null,mt=null,lt=null;x.depth&&(lt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ft=x.stencil?As:Hi,mt=x.stencil?ho:hi);const St={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(St),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),v=new li(h.textureWidth,h.textureHeight,{format:qn,type:wn,depthTexture:new mo(h.textureWidth,h.textureHeight,mt,void 0,void 0,void 0,void 0,void 0,void 0,ft),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ft={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,ft),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new li(f.framebufferWidth,f.framebufferHeight,{format:qn,type:wn,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),et.setContext(s),et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function H(X){for(let Y=0;Y<X.removed.length;Y++){const ft=X.removed[Y],mt=w.indexOf(ft);mt>=0&&(w[mt]=null,M[mt].disconnect(ft))}for(let Y=0;Y<X.added.length;Y++){const ft=X.added[Y];let mt=w.indexOf(ft);if(mt===-1){for(let St=0;St<M.length;St++)if(St>=w.length){w.push(ft),mt=St;break}else if(w[St]===null){w[St]=ft,mt=St;break}if(mt===-1)break}const lt=M[mt];lt&&lt.connect(ft)}}const q=new Z,ut=new Z;function gt(X,Y,ft){q.setFromMatrixPosition(Y.matrixWorld),ut.setFromMatrixPosition(ft.matrixWorld);const mt=q.distanceTo(ut),lt=Y.projectionMatrix.elements,St=ft.projectionMatrix.elements,I=lt[14]/(lt[10]-1),N=lt[14]/(lt[10]+1),F=(lt[9]+1)/lt[5],G=(lt[9]-1)/lt[5],V=(lt[8]-1)/lt[0],$=(St[8]+1)/St[0],R=I*V,st=I*$,Q=mt/(-V+$),it=Q*-V;if(Y.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(it),X.translateZ(Q),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),lt[10]===-1)X.projectionMatrix.copy(Y.projectionMatrix),X.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{const at=I+Q,C=N+Q,y=R-it,z=st+(mt-it),j=F*N/C*at,rt=G*N/C*at;X.projectionMatrix.makePerspective(y,z,j,rt,at,C),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function dt(X,Y){Y===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(Y.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let Y=X.near,ft=X.far;m.texture!==null&&(m.depthNear>0&&(Y=m.depthNear),m.depthFar>0&&(ft=m.depthFar)),k.near=E.near=b.near=Y,k.far=E.far=b.far=ft,(U!==k.near||W!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),U=k.near,W=k.far),k.layers.mask=X.layers.mask|6,b.layers.mask=k.layers.mask&3,E.layers.mask=k.layers.mask&5;const mt=X.parent,lt=k.cameras;dt(k,mt);for(let St=0;St<lt.length;St++)dt(lt[St],mt);lt.length===2?gt(k,b,E):k.projectionMatrix.copy(b.projectionMatrix),_t(X,k,mt)};function _t(X,Y,ft){ft===null?X.matrix.copy(Y.matrixWorld):(X.matrix.copy(ft.matrixWorld),X.matrix.invert(),X.matrix.multiply(Y.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(Y.projectionMatrix),X.projectionMatrixInverse.copy(Y.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=iu*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(X){l=X,h!==null&&(h.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(X){return g[X]};let Lt=null;function ot(X,Y){if(u=Y.getViewerPose(c||o),p=Y,u!==null){const ft=u.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let mt=!1;ft.length!==k.cameras.length&&(k.cameras.length=0,mt=!0);for(let N=0;N<ft.length;N++){const F=ft[N];let G=null;if(f!==null)G=f.getViewport(F);else{const $=d.getViewSubImage(h,F);G=$.viewport,N===0&&(t.setRenderTargetTextures(v,$.colorTexture,$.depthStencilTexture),t.setRenderTarget(v))}let V=D[N];V===void 0&&(V=new Dn,V.layers.enable(N),V.viewport=new Ne,D[N]=V),V.matrix.fromArray(F.transform.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale),V.projectionMatrix.fromArray(F.projectionMatrix),V.projectionMatrixInverse.copy(V.projectionMatrix).invert(),V.viewport.set(G.x,G.y,G.width,G.height),N===0&&(k.matrix.copy(V.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),mt===!0&&k.cameras.push(V)}const lt=s.enabledFeatures;if(lt&&lt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=n.getBinding();const N=d.getDepthInformation(ft[0]);N&&N.isValid&&N.texture&&m.init(N,s.renderState)}if(lt&&lt.includes("camera-access")&&_){t.state.unbindTexture(),d=n.getBinding();for(let N=0;N<ft.length;N++){const F=ft[N].camera;if(F){let G=g[F];G||(G=new Zp,g[F]=G);const V=d.getCameraImage(F);G.sourceTexture=V}}}}for(let ft=0;ft<M.length;ft++){const mt=w[ft],lt=M[ft];mt!==null&&lt!==void 0&&lt.update(mt,Y,c||o)}Lt&&Lt(X,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),p=null}const et=new um;et.setAnimationLoop(ot),this.setAnimationLoop=function(X){Lt=X},this.dispose=function(){}}}const xs=new di,ME=new Pe;function bE(i,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,qp(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,x,S,v){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(m,g):g.isMeshToonMaterial?(r(m,g),d(m,g)):g.isMeshPhongMaterial?(r(m,g),u(m,g)):g.isMeshStandardMaterial?(r(m,g),h(m,g),g.isMeshPhysicalMaterial&&f(m,g,v)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),_(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,x,S):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===vn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===vn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const x=t.get(g),S=x.envMap,v=x.envMapRotation;S&&(m.envMap.value=S,xs.copy(v),xs.x*=-1,xs.y*=-1,xs.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(xs.y*=-1,xs.z*=-1),m.envMapRotation.value.setFromMatrix4(ME.makeRotationFromEuler(xs)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,x,S){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*x,m.scale.value=S*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function h(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,x){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===vn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){const x=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function wE(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,S){const v=S.program;n.uniformBlockBinding(x,v)}function c(x,S){let v=s[x.id];v===void 0&&(p(x),v=u(x),s[x.id]=v,x.addEventListener("dispose",m));const M=S.program;n.updateUBOMapping(x,M);const w=t.render.frame;r[x.id]!==w&&(h(x),r[x.id]=w)}function u(x){const S=d();x.__bindingPointIndex=S;const v=i.createBuffer(),M=x.__size,w=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,M,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,v),v}function d(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return le("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const S=s[x.id],v=x.uniforms,M=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let w=0,A=v.length;w<A;w++){const L=Array.isArray(v[w])?v[w]:[v[w]];for(let b=0,E=L.length;b<E;b++){const D=L[b];if(f(D,w,b,M)===!0){const k=D.__offset,U=Array.isArray(D.value)?D.value:[D.value];let W=0;for(let B=0;B<U.length;B++){const O=U[B],H=_(O);typeof O=="number"||typeof O=="boolean"?(D.__data[0]=O,i.bufferSubData(i.UNIFORM_BUFFER,k+W,D.__data)):O.isMatrix3?(D.__data[0]=O.elements[0],D.__data[1]=O.elements[1],D.__data[2]=O.elements[2],D.__data[3]=0,D.__data[4]=O.elements[3],D.__data[5]=O.elements[4],D.__data[6]=O.elements[5],D.__data[7]=0,D.__data[8]=O.elements[6],D.__data[9]=O.elements[7],D.__data[10]=O.elements[8],D.__data[11]=0):(O.toArray(D.__data,W),W+=H.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,S,v,M){const w=x.value,A=S+"_"+v;if(M[A]===void 0)return typeof w=="number"||typeof w=="boolean"?M[A]=w:M[A]=w.clone(),!0;{const L=M[A];if(typeof w=="number"||typeof w=="boolean"){if(L!==w)return M[A]=w,!0}else if(L.equals(w)===!1)return L.copy(w),!0}return!1}function p(x){const S=x.uniforms;let v=0;const M=16;for(let A=0,L=S.length;A<L;A++){const b=Array.isArray(S[A])?S[A]:[S[A]];for(let E=0,D=b.length;E<D;E++){const k=b[E],U=Array.isArray(k.value)?k.value:[k.value];for(let W=0,B=U.length;W<B;W++){const O=U[W],H=_(O),q=v%M,ut=q%H.boundary,gt=q+ut;v+=ut,gt!==0&&M-gt<H.storage&&(v+=M-gt),k.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=v,v+=H.storage}}}const w=v%M;return w>0&&(v+=M-w),x.__size=v,x.__cache={},this}function _(x){const S={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(S.boundary=4,S.storage=4):x.isVector2?(S.boundary=8,S.storage=8):x.isVector3||x.isColor?(S.boundary=16,S.storage=12):x.isVector4?(S.boundary=16,S.storage=16):x.isMatrix3?(S.boundary=48,S.storage=48):x.isMatrix4?(S.boundary=64,S.storage=64):x.isTexture?Zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Zt("WebGLRenderer: Unsupported uniform value type.",x),S}function m(x){const S=x.target;S.removeEventListener("dispose",m);const v=o.indexOf(S.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function g(){for(const x in s)i.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:l,update:c,dispose:g}}const EE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Zn=null;function TE(){return Zn===null&&(Zn=new Vx(EE,16,16,Sr,Vi),Zn.name="DFG_LUT",Zn.minFilter=Ke,Zn.magFilter=Ke,Zn.wrapS=Li,Zn.wrapT=Li,Zn.generateMipmaps=!1,Zn.needsUpdate=!0),Zn}class mm{constructor(t={}){const{canvas:e=px(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=wn}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const _=f,m=new Set([Fu,Nu,Du]),g=new Set([wn,hi,uo,ho,Iu,Lu]),x=new Uint32Array(4),S=new Int32Array(4);let v=null,M=null;const w=[],A=[];let L=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ai,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let E=!1;this._outputColorSpace=Ln;let D=0,k=0,U=null,W=-1,B=null;const O=new Ne,H=new Ne;let q=null;const ut=new ae(0);let gt=0,dt=e.width,_t=e.height,Lt=1,ot=null,et=null;const X=new Ne(0,0,dt,_t),Y=new Ne(0,0,dt,_t);let ft=!1;const mt=new Gu;let lt=!1,St=!1;const I=new Pe,N=new Z,F=new Ne,G={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let V=!1;function $(){return U===null?Lt:1}let R=n;function st(P,J){return e.getContext(P,J)}try{const P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ru}`),e.addEventListener("webglcontextlost",Qt,!1),e.addEventListener("webglcontextrestored",be,!1),e.addEventListener("webglcontextcreationerror",ge,!1),R===null){const J="webgl2";if(R=st(J,P),R===null)throw st(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw le("WebGLRenderer: "+P.message),P}let Q,it,at,C,y,z,j,rt,tt,Ct,xt,Tt,zt,yt,Et,Rt,Dt,At,Yt,K,Ut,wt,Bt,Mt;function vt(){Q=new Tb(R),Q.init(),wt=new _E(R,Q),it=new _b(R,Q,t,wt),at=new mE(R,Q),it.reversedDepthBuffer&&h&&at.buffers.depth.setReversed(!0),C=new Rb(R),y=new tE,z=new gE(R,Q,at,y,it,wt,C),j=new xb(b),rt=new Eb(b),tt=new Dy(R),Bt=new mb(R,tt),Ct=new Ab(R,tt,C,Bt),xt=new Ib(R,Ct,tt,C),Yt=new Pb(R,it,z),Rt=new vb(y),Tt=new Qw(b,j,rt,Q,it,Bt,Rt),zt=new bE(b,y),yt=new nE,Et=new lE(Q),At=new pb(b,j,rt,at,xt,p,l),Dt=new fE(b,xt,it),Mt=new wE(R,C,it,at),K=new gb(R,Q,C),Ut=new Cb(R,Q,C),C.programs=Tt.programs,b.capabilities=it,b.extensions=Q,b.properties=y,b.renderLists=yt,b.shadowMap=Dt,b.state=at,b.info=C}vt(),_!==wn&&(L=new Db(_,e.width,e.height,s,r));const Pt=new SE(b,R);this.xr=Pt,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const P=Q.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=Q.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return Lt},this.setPixelRatio=function(P){P!==void 0&&(Lt=P,this.setSize(dt,_t,!1))},this.getSize=function(P){return P.set(dt,_t)},this.setSize=function(P,J,ht=!0){if(Pt.isPresenting){Zt("WebGLRenderer: Can't change size while VR device is presenting.");return}dt=P,_t=J,e.width=Math.floor(P*Lt),e.height=Math.floor(J*Lt),ht===!0&&(e.style.width=P+"px",e.style.height=J+"px"),L!==null&&L.setSize(e.width,e.height),this.setViewport(0,0,P,J)},this.getDrawingBufferSize=function(P){return P.set(dt*Lt,_t*Lt).floor()},this.setDrawingBufferSize=function(P,J,ht){dt=P,_t=J,Lt=ht,e.width=Math.floor(P*ht),e.height=Math.floor(J*ht),this.setViewport(0,0,P,J)},this.setEffects=function(P){if(_===wn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(P){for(let J=0;J<P.length;J++)if(P[J].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(P||[])},this.getCurrentViewport=function(P){return P.copy(O)},this.getViewport=function(P){return P.copy(X)},this.setViewport=function(P,J,ht,ct){P.isVector4?X.set(P.x,P.y,P.z,P.w):X.set(P,J,ht,ct),at.viewport(O.copy(X).multiplyScalar(Lt).round())},this.getScissor=function(P){return P.copy(Y)},this.setScissor=function(P,J,ht,ct){P.isVector4?Y.set(P.x,P.y,P.z,P.w):Y.set(P,J,ht,ct),at.scissor(H.copy(Y).multiplyScalar(Lt).round())},this.getScissorTest=function(){return ft},this.setScissorTest=function(P){at.setScissorTest(ft=P)},this.setOpaqueSort=function(P){ot=P},this.setTransparentSort=function(P){et=P},this.getClearColor=function(P){return P.copy(At.getClearColor())},this.setClearColor=function(){At.setClearColor(...arguments)},this.getClearAlpha=function(){return At.getClearAlpha()},this.setClearAlpha=function(){At.setClearAlpha(...arguments)},this.clear=function(P=!0,J=!0,ht=!0){let ct=0;if(P){let nt=!1;if(U!==null){const It=U.texture.format;nt=m.has(It)}if(nt){const It=U.texture.type,kt=g.has(It),Ft=At.getClearColor(),Ht=At.getClearAlpha(),Gt=Ft.r,$t=Ft.g,Xt=Ft.b;kt?(x[0]=Gt,x[1]=$t,x[2]=Xt,x[3]=Ht,R.clearBufferuiv(R.COLOR,0,x)):(S[0]=Gt,S[1]=$t,S[2]=Xt,S[3]=Ht,R.clearBufferiv(R.COLOR,0,S))}else ct|=R.COLOR_BUFFER_BIT}J&&(ct|=R.DEPTH_BUFFER_BIT),ht&&(ct|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(ct)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Qt,!1),e.removeEventListener("webglcontextrestored",be,!1),e.removeEventListener("webglcontextcreationerror",ge,!1),At.dispose(),yt.dispose(),Et.dispose(),y.dispose(),j.dispose(),rt.dispose(),xt.dispose(),Bt.dispose(),Mt.dispose(),Tt.dispose(),Pt.dispose(),Pt.removeEventListener("sessionstart",Qu),Pt.removeEventListener("sessionend",th),us.stop()};function Qt(P){P.preventDefault(),jh("WebGLRenderer: Context Lost."),E=!0}function be(){jh("WebGLRenderer: Context Restored."),E=!1;const P=C.autoReset,J=Dt.enabled,ht=Dt.autoUpdate,ct=Dt.needsUpdate,nt=Dt.type;vt(),C.autoReset=P,Dt.enabled=J,Dt.autoUpdate=ht,Dt.needsUpdate=ct,Dt.type=nt}function ge(P){le("WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function $n(P){const J=P.target;J.removeEventListener("dispose",$n),mi(J)}function mi(P){Am(P),y.remove(P)}function Am(P){const J=y.get(P).programs;J!==void 0&&(J.forEach(function(ht){Tt.releaseProgram(ht)}),P.isShaderMaterial&&Tt.releaseShaderCache(P))}this.renderBufferDirect=function(P,J,ht,ct,nt,It){J===null&&(J=G);const kt=nt.isMesh&&nt.matrixWorld.determinant()<0,Ft=Rm(P,J,ht,ct,nt);at.setMaterial(ct,kt);let Ht=ht.index,Gt=1;if(ct.wireframe===!0){if(Ht=Ct.getWireframeAttribute(ht),Ht===void 0)return;Gt=2}const $t=ht.drawRange,Xt=ht.attributes.position;let oe=$t.start*Gt,xe=($t.start+$t.count)*Gt;It!==null&&(oe=Math.max(oe,It.start*Gt),xe=Math.min(xe,(It.start+It.count)*Gt)),Ht!==null?(oe=Math.max(oe,0),xe=Math.min(xe,Ht.count)):Xt!=null&&(oe=Math.max(oe,0),xe=Math.min(xe,Xt.count));const Le=xe-oe;if(Le<0||Le===1/0)return;Bt.setup(nt,ct,Ft,ht,Ht);let De,Se=K;if(Ht!==null&&(De=tt.get(Ht),Se=Ut,Se.setIndex(De)),nt.isMesh)ct.wireframe===!0?(at.setLineWidth(ct.wireframeLinewidth*$()),Se.setMode(R.LINES)):Se.setMode(R.TRIANGLES);else if(nt.isLine){let jt=ct.linewidth;jt===void 0&&(jt=1),at.setLineWidth(jt*$()),nt.isLineSegments?Se.setMode(R.LINES):nt.isLineLoop?Se.setMode(R.LINE_LOOP):Se.setMode(R.LINE_STRIP)}else nt.isPoints?Se.setMode(R.POINTS):nt.isSprite&&Se.setMode(R.TRIANGLES);if(nt.isBatchedMesh)if(nt._multiDrawInstances!==null)fo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Se.renderMultiDrawInstances(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount,nt._multiDrawInstances);else if(Q.get("WEBGL_multi_draw"))Se.renderMultiDraw(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount);else{const jt=nt._multiDrawStarts,_e=nt._multiDrawCounts,he=nt._multiDrawCount,xn=Ht?tt.get(Ht).bytesPerElement:1,Bs=y.get(ct).currentProgram.getUniforms();for(let yn=0;yn<he;yn++)Bs.setValue(R,"_gl_DrawID",yn),Se.render(jt[yn]/xn,_e[yn])}else if(nt.isInstancedMesh)Se.renderInstances(oe,Le,nt.count);else if(ht.isInstancedBufferGeometry){const jt=ht._maxInstanceCount!==void 0?ht._maxInstanceCount:1/0,_e=Math.min(ht.instanceCount,jt);Se.renderInstances(oe,Le,_e)}else Se.render(oe,Le)};function Ju(P,J,ht){P.transparent===!0&&P.side===Hn&&P.forceSinglePass===!1?(P.side=vn,P.needsUpdate=!0,To(P,J,ht),P.side=os,P.needsUpdate=!0,To(P,J,ht),P.side=Hn):To(P,J,ht)}this.compile=function(P,J,ht=null){ht===null&&(ht=P),M=Et.get(ht),M.init(J),A.push(M),ht.traverseVisible(function(nt){nt.isLight&&nt.layers.test(J.layers)&&(M.pushLight(nt),nt.castShadow&&M.pushShadow(nt))}),P!==ht&&P.traverseVisible(function(nt){nt.isLight&&nt.layers.test(J.layers)&&(M.pushLight(nt),nt.castShadow&&M.pushShadow(nt))}),M.setupLights();const ct=new Set;return P.traverse(function(nt){if(!(nt.isMesh||nt.isPoints||nt.isLine||nt.isSprite))return;const It=nt.material;if(It)if(Array.isArray(It))for(let kt=0;kt<It.length;kt++){const Ft=It[kt];Ju(Ft,ht,nt),ct.add(Ft)}else Ju(It,ht,nt),ct.add(It)}),M=A.pop(),ct},this.compileAsync=function(P,J,ht=null){const ct=this.compile(P,J,ht);return new Promise(nt=>{function It(){if(ct.forEach(function(kt){y.get(kt).currentProgram.isReady()&&ct.delete(kt)}),ct.size===0){nt(P);return}setTimeout(It,10)}Q.get("KHR_parallel_shader_compile")!==null?It():setTimeout(It,10)})};let Ka=null;function Cm(P){Ka&&Ka(P)}function Qu(){us.stop()}function th(){us.start()}const us=new um;us.setAnimationLoop(Cm),typeof self<"u"&&us.setContext(self),this.setAnimationLoop=function(P){Ka=P,Pt.setAnimationLoop(P),P===null?us.stop():us.start()},Pt.addEventListener("sessionstart",Qu),Pt.addEventListener("sessionend",th),this.render=function(P,J){if(J!==void 0&&J.isCamera!==!0){le("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;const ht=Pt.enabled===!0&&Pt.isPresenting===!0,ct=L!==null&&(U===null||ht)&&L.begin(b,U);if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),Pt.enabled===!0&&Pt.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(Pt.cameraAutoUpdate===!0&&Pt.updateCamera(J),J=Pt.getCamera()),P.isScene===!0&&P.onBeforeRender(b,P,J,U),M=Et.get(P,A.length),M.init(J),A.push(M),I.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),mt.setFromProjectionMatrix(I,ri,J.reversedDepth),St=this.localClippingEnabled,lt=Rt.init(this.clippingPlanes,St),v=yt.get(P,w.length),v.init(),w.push(v),Pt.enabled===!0&&Pt.isPresenting===!0){const kt=b.xr.getDepthSensingMesh();kt!==null&&Za(kt,J,-1/0,b.sortObjects)}Za(P,J,0,b.sortObjects),v.finish(),b.sortObjects===!0&&v.sort(ot,et),V=Pt.enabled===!1||Pt.isPresenting===!1||Pt.hasDepthSensing()===!1,V&&At.addToRenderList(v,P),this.info.render.frame++,lt===!0&&Rt.beginShadows();const nt=M.state.shadowsArray;if(Dt.render(nt,P,J),lt===!0&&Rt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ct&&L.hasRenderPass())===!1){const kt=v.opaque,Ft=v.transmissive;if(M.setupLights(),J.isArrayCamera){const Ht=J.cameras;if(Ft.length>0)for(let Gt=0,$t=Ht.length;Gt<$t;Gt++){const Xt=Ht[Gt];nh(kt,Ft,P,Xt)}V&&At.render(P);for(let Gt=0,$t=Ht.length;Gt<$t;Gt++){const Xt=Ht[Gt];eh(v,P,Xt,Xt.viewport)}}else Ft.length>0&&nh(kt,Ft,P,J),V&&At.render(P),eh(v,P,J)}U!==null&&k===0&&(z.updateMultisampleRenderTarget(U),z.updateRenderTargetMipmap(U)),ct&&L.end(b),P.isScene===!0&&P.onAfterRender(b,P,J),Bt.resetDefaultState(),W=-1,B=null,A.pop(),A.length>0?(M=A[A.length-1],lt===!0&&Rt.setGlobalState(b.clippingPlanes,M.state.camera)):M=null,w.pop(),w.length>0?v=w[w.length-1]:v=null};function Za(P,J,ht,ct){if(P.visible===!1)return;if(P.layers.test(J.layers)){if(P.isGroup)ht=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(J);else if(P.isLight)M.pushLight(P),P.castShadow&&M.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||mt.intersectsSprite(P)){ct&&F.setFromMatrixPosition(P.matrixWorld).applyMatrix4(I);const kt=xt.update(P),Ft=P.material;Ft.visible&&v.push(P,kt,Ft,ht,F.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||mt.intersectsObject(P))){const kt=xt.update(P),Ft=P.material;if(ct&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),F.copy(P.boundingSphere.center)):(kt.boundingSphere===null&&kt.computeBoundingSphere(),F.copy(kt.boundingSphere.center)),F.applyMatrix4(P.matrixWorld).applyMatrix4(I)),Array.isArray(Ft)){const Ht=kt.groups;for(let Gt=0,$t=Ht.length;Gt<$t;Gt++){const Xt=Ht[Gt],oe=Ft[Xt.materialIndex];oe&&oe.visible&&v.push(P,kt,oe,ht,F.z,Xt)}}else Ft.visible&&v.push(P,kt,Ft,ht,F.z,null)}}const It=P.children;for(let kt=0,Ft=It.length;kt<Ft;kt++)Za(It[kt],J,ht,ct)}function eh(P,J,ht,ct){const{opaque:nt,transmissive:It,transparent:kt}=P;M.setupLightsView(ht),lt===!0&&Rt.setGlobalState(b.clippingPlanes,ht),ct&&at.viewport(O.copy(ct)),nt.length>0&&Eo(nt,J,ht),It.length>0&&Eo(It,J,ht),kt.length>0&&Eo(kt,J,ht),at.buffers.depth.setTest(!0),at.buffers.depth.setMask(!0),at.buffers.color.setMask(!0),at.setPolygonOffset(!1)}function nh(P,J,ht,ct){if((ht.isScene===!0?ht.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[ct.id]===void 0){const oe=Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[ct.id]=new li(1,1,{generateMipmaps:!0,type:oe?Vi:wn,minFilter:Ts,samples:it.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ue.workingColorSpace})}const It=M.state.transmissionRenderTarget[ct.id],kt=ct.viewport||O;It.setSize(kt.z*b.transmissionResolutionScale,kt.w*b.transmissionResolutionScale);const Ft=b.getRenderTarget(),Ht=b.getActiveCubeFace(),Gt=b.getActiveMipmapLevel();b.setRenderTarget(It),b.getClearColor(ut),gt=b.getClearAlpha(),gt<1&&b.setClearColor(16777215,.5),b.clear(),V&&At.render(ht);const $t=b.toneMapping;b.toneMapping=ai;const Xt=ct.viewport;if(ct.viewport!==void 0&&(ct.viewport=void 0),M.setupLightsView(ct),lt===!0&&Rt.setGlobalState(b.clippingPlanes,ct),Eo(P,ht,ct),z.updateMultisampleRenderTarget(It),z.updateRenderTargetMipmap(It),Q.has("WEBGL_multisampled_render_to_texture")===!1){let oe=!1;for(let xe=0,Le=J.length;xe<Le;xe++){const De=J[xe],{object:Se,geometry:jt,material:_e,group:he}=De;if(_e.side===Hn&&Se.layers.test(ct.layers)){const xn=_e.side;_e.side=vn,_e.needsUpdate=!0,ih(Se,ht,ct,jt,_e,he),_e.side=xn,_e.needsUpdate=!0,oe=!0}}oe===!0&&(z.updateMultisampleRenderTarget(It),z.updateRenderTargetMipmap(It))}b.setRenderTarget(Ft,Ht,Gt),b.setClearColor(ut,gt),Xt!==void 0&&(ct.viewport=Xt),b.toneMapping=$t}function Eo(P,J,ht){const ct=J.isScene===!0?J.overrideMaterial:null;for(let nt=0,It=P.length;nt<It;nt++){const kt=P[nt],{object:Ft,geometry:Ht,group:Gt}=kt;let $t=kt.material;$t.allowOverride===!0&&ct!==null&&($t=ct),Ft.layers.test(ht.layers)&&ih(Ft,J,ht,Ht,$t,Gt)}}function ih(P,J,ht,ct,nt,It){P.onBeforeRender(b,J,ht,ct,nt,It),P.modelViewMatrix.multiplyMatrices(ht.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),nt.onBeforeRender(b,J,ht,ct,P,It),nt.transparent===!0&&nt.side===Hn&&nt.forceSinglePass===!1?(nt.side=vn,nt.needsUpdate=!0,b.renderBufferDirect(ht,J,ct,nt,P,It),nt.side=os,nt.needsUpdate=!0,b.renderBufferDirect(ht,J,ct,nt,P,It),nt.side=Hn):b.renderBufferDirect(ht,J,ct,nt,P,It),P.onAfterRender(b,J,ht,ct,nt,It)}function To(P,J,ht){J.isScene!==!0&&(J=G);const ct=y.get(P),nt=M.state.lights,It=M.state.shadowsArray,kt=nt.state.version,Ft=Tt.getParameters(P,nt.state,It,J,ht),Ht=Tt.getProgramCacheKey(Ft);let Gt=ct.programs;ct.environment=P.isMeshStandardMaterial?J.environment:null,ct.fog=J.fog,ct.envMap=(P.isMeshStandardMaterial?rt:j).get(P.envMap||ct.environment),ct.envMapRotation=ct.environment!==null&&P.envMap===null?J.environmentRotation:P.envMapRotation,Gt===void 0&&(P.addEventListener("dispose",$n),Gt=new Map,ct.programs=Gt);let $t=Gt.get(Ht);if($t!==void 0){if(ct.currentProgram===$t&&ct.lightsStateVersion===kt)return rh(P,Ft),$t}else Ft.uniforms=Tt.getUniforms(P),P.onBeforeCompile(Ft,b),$t=Tt.acquireProgram(Ft,Ht),Gt.set(Ht,$t),ct.uniforms=Ft.uniforms;const Xt=ct.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Xt.clippingPlanes=Rt.uniform),rh(P,Ft),ct.needsLights=Im(P),ct.lightsStateVersion=kt,ct.needsLights&&(Xt.ambientLightColor.value=nt.state.ambient,Xt.lightProbe.value=nt.state.probe,Xt.directionalLights.value=nt.state.directional,Xt.directionalLightShadows.value=nt.state.directionalShadow,Xt.spotLights.value=nt.state.spot,Xt.spotLightShadows.value=nt.state.spotShadow,Xt.rectAreaLights.value=nt.state.rectArea,Xt.ltc_1.value=nt.state.rectAreaLTC1,Xt.ltc_2.value=nt.state.rectAreaLTC2,Xt.pointLights.value=nt.state.point,Xt.pointLightShadows.value=nt.state.pointShadow,Xt.hemisphereLights.value=nt.state.hemi,Xt.directionalShadowMap.value=nt.state.directionalShadowMap,Xt.directionalShadowMatrix.value=nt.state.directionalShadowMatrix,Xt.spotShadowMap.value=nt.state.spotShadowMap,Xt.spotLightMatrix.value=nt.state.spotLightMatrix,Xt.spotLightMap.value=nt.state.spotLightMap,Xt.pointShadowMap.value=nt.state.pointShadowMap,Xt.pointShadowMatrix.value=nt.state.pointShadowMatrix),ct.currentProgram=$t,ct.uniformsList=null,$t}function sh(P){if(P.uniformsList===null){const J=P.currentProgram.getUniforms();P.uniformsList=va.seqWithValue(J.seq,P.uniforms)}return P.uniformsList}function rh(P,J){const ht=y.get(P);ht.outputColorSpace=J.outputColorSpace,ht.batching=J.batching,ht.batchingColor=J.batchingColor,ht.instancing=J.instancing,ht.instancingColor=J.instancingColor,ht.instancingMorph=J.instancingMorph,ht.skinning=J.skinning,ht.morphTargets=J.morphTargets,ht.morphNormals=J.morphNormals,ht.morphColors=J.morphColors,ht.morphTargetsCount=J.morphTargetsCount,ht.numClippingPlanes=J.numClippingPlanes,ht.numIntersection=J.numClipIntersection,ht.vertexAlphas=J.vertexAlphas,ht.vertexTangents=J.vertexTangents,ht.toneMapping=J.toneMapping}function Rm(P,J,ht,ct,nt){J.isScene!==!0&&(J=G),z.resetTextureUnits();const It=J.fog,kt=ct.isMeshStandardMaterial?J.environment:null,Ft=U===null?b.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Mr,Ht=(ct.isMeshStandardMaterial?rt:j).get(ct.envMap||kt),Gt=ct.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,$t=!!ht.attributes.tangent&&(!!ct.normalMap||ct.anisotropy>0),Xt=!!ht.morphAttributes.position,oe=!!ht.morphAttributes.normal,xe=!!ht.morphAttributes.color;let Le=ai;ct.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Le=b.toneMapping);const De=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,Se=De!==void 0?De.length:0,jt=y.get(ct),_e=M.state.lights;if(lt===!0&&(St===!0||P!==B)){const en=P===B&&ct.id===W;Rt.setState(ct,P,en)}let he=!1;ct.version===jt.__version?(jt.needsLights&&jt.lightsStateVersion!==_e.state.version||jt.outputColorSpace!==Ft||nt.isBatchedMesh&&jt.batching===!1||!nt.isBatchedMesh&&jt.batching===!0||nt.isBatchedMesh&&jt.batchingColor===!0&&nt.colorTexture===null||nt.isBatchedMesh&&jt.batchingColor===!1&&nt.colorTexture!==null||nt.isInstancedMesh&&jt.instancing===!1||!nt.isInstancedMesh&&jt.instancing===!0||nt.isSkinnedMesh&&jt.skinning===!1||!nt.isSkinnedMesh&&jt.skinning===!0||nt.isInstancedMesh&&jt.instancingColor===!0&&nt.instanceColor===null||nt.isInstancedMesh&&jt.instancingColor===!1&&nt.instanceColor!==null||nt.isInstancedMesh&&jt.instancingMorph===!0&&nt.morphTexture===null||nt.isInstancedMesh&&jt.instancingMorph===!1&&nt.morphTexture!==null||jt.envMap!==Ht||ct.fog===!0&&jt.fog!==It||jt.numClippingPlanes!==void 0&&(jt.numClippingPlanes!==Rt.numPlanes||jt.numIntersection!==Rt.numIntersection)||jt.vertexAlphas!==Gt||jt.vertexTangents!==$t||jt.morphTargets!==Xt||jt.morphNormals!==oe||jt.morphColors!==xe||jt.toneMapping!==Le||jt.morphTargetsCount!==Se)&&(he=!0):(he=!0,jt.__version=ct.version);let xn=jt.currentProgram;he===!0&&(xn=To(ct,J,nt));let Bs=!1,yn=!1,Rr=!1;const we=xn.getUniforms(),cn=jt.uniforms;if(at.useProgram(xn.program)&&(Bs=!0,yn=!0,Rr=!0),ct.id!==W&&(W=ct.id,yn=!0),Bs||B!==P){at.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),we.setValue(R,"projectionMatrix",P.projectionMatrix),we.setValue(R,"viewMatrix",P.matrixWorldInverse);const un=we.map.cameraPosition;un!==void 0&&un.setValue(R,N.setFromMatrixPosition(P.matrixWorld)),it.logarithmicDepthBuffer&&we.setValue(R,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(ct.isMeshPhongMaterial||ct.isMeshToonMaterial||ct.isMeshLambertMaterial||ct.isMeshBasicMaterial||ct.isMeshStandardMaterial||ct.isShaderMaterial)&&we.setValue(R,"isOrthographic",P.isOrthographicCamera===!0),B!==P&&(B=P,yn=!0,Rr=!0)}if(jt.needsLights&&(_e.state.directionalShadowMap.length>0&&we.setValue(R,"directionalShadowMap",_e.state.directionalShadowMap,z),_e.state.spotShadowMap.length>0&&we.setValue(R,"spotShadowMap",_e.state.spotShadowMap,z),_e.state.pointShadowMap.length>0&&we.setValue(R,"pointShadowMap",_e.state.pointShadowMap,z)),nt.isSkinnedMesh){we.setOptional(R,nt,"bindMatrix"),we.setOptional(R,nt,"bindMatrixInverse");const en=nt.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),we.setValue(R,"boneTexture",en.boneTexture,z))}nt.isBatchedMesh&&(we.setOptional(R,nt,"batchingTexture"),we.setValue(R,"batchingTexture",nt._matricesTexture,z),we.setOptional(R,nt,"batchingIdTexture"),we.setValue(R,"batchingIdTexture",nt._indirectTexture,z),we.setOptional(R,nt,"batchingColorTexture"),nt._colorsTexture!==null&&we.setValue(R,"batchingColorTexture",nt._colorsTexture,z));const Rn=ht.morphAttributes;if((Rn.position!==void 0||Rn.normal!==void 0||Rn.color!==void 0)&&Yt.update(nt,ht,xn),(yn||jt.receiveShadow!==nt.receiveShadow)&&(jt.receiveShadow=nt.receiveShadow,we.setValue(R,"receiveShadow",nt.receiveShadow)),ct.isMeshGouraudMaterial&&ct.envMap!==null&&(cn.envMap.value=Ht,cn.flipEnvMap.value=Ht.isCubeTexture&&Ht.isRenderTargetTexture===!1?-1:1),ct.isMeshStandardMaterial&&ct.envMap===null&&J.environment!==null&&(cn.envMapIntensity.value=J.environmentIntensity),cn.dfgLUT!==void 0&&(cn.dfgLUT.value=TE()),yn&&(we.setValue(R,"toneMappingExposure",b.toneMappingExposure),jt.needsLights&&Pm(cn,Rr),It&&ct.fog===!0&&zt.refreshFogUniforms(cn,It),zt.refreshMaterialUniforms(cn,ct,Lt,_t,M.state.transmissionRenderTarget[P.id]),va.upload(R,sh(jt),cn,z)),ct.isShaderMaterial&&ct.uniformsNeedUpdate===!0&&(va.upload(R,sh(jt),cn,z),ct.uniformsNeedUpdate=!1),ct.isSpriteMaterial&&we.setValue(R,"center",nt.center),we.setValue(R,"modelViewMatrix",nt.modelViewMatrix),we.setValue(R,"normalMatrix",nt.normalMatrix),we.setValue(R,"modelMatrix",nt.matrixWorld),ct.isShaderMaterial||ct.isRawShaderMaterial){const en=ct.uniformsGroups;for(let un=0,Ja=en.length;un<Ja;un++){const hs=en[un];Mt.update(hs,xn),Mt.bind(hs,xn)}}return xn}function Pm(P,J){P.ambientLightColor.needsUpdate=J,P.lightProbe.needsUpdate=J,P.directionalLights.needsUpdate=J,P.directionalLightShadows.needsUpdate=J,P.pointLights.needsUpdate=J,P.pointLightShadows.needsUpdate=J,P.spotLights.needsUpdate=J,P.spotLightShadows.needsUpdate=J,P.rectAreaLights.needsUpdate=J,P.hemisphereLights.needsUpdate=J}function Im(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(P,J,ht){const ct=y.get(P);ct.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,ct.__autoAllocateDepthBuffer===!1&&(ct.__useRenderToTexture=!1),y.get(P.texture).__webglTexture=J,y.get(P.depthTexture).__webglTexture=ct.__autoAllocateDepthBuffer?void 0:ht,ct.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,J){const ht=y.get(P);ht.__webglFramebuffer=J,ht.__useDefaultFramebuffer=J===void 0};const Lm=R.createFramebuffer();this.setRenderTarget=function(P,J=0,ht=0){U=P,D=J,k=ht;let ct=null,nt=!1,It=!1;if(P){const Ft=y.get(P);if(Ft.__useDefaultFramebuffer!==void 0){at.bindFramebuffer(R.FRAMEBUFFER,Ft.__webglFramebuffer),O.copy(P.viewport),H.copy(P.scissor),q=P.scissorTest,at.viewport(O),at.scissor(H),at.setScissorTest(q),W=-1;return}else if(Ft.__webglFramebuffer===void 0)z.setupRenderTarget(P);else if(Ft.__hasExternalTextures)z.rebindTextures(P,y.get(P.texture).__webglTexture,y.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const $t=P.depthTexture;if(Ft.__boundDepthTexture!==$t){if($t!==null&&y.has($t)&&(P.width!==$t.image.width||P.height!==$t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");z.setupDepthRenderbuffer(P)}}const Ht=P.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(It=!0);const Gt=y.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Gt[J])?ct=Gt[J][ht]:ct=Gt[J],nt=!0):P.samples>0&&z.useMultisampledRTT(P)===!1?ct=y.get(P).__webglMultisampledFramebuffer:Array.isArray(Gt)?ct=Gt[ht]:ct=Gt,O.copy(P.viewport),H.copy(P.scissor),q=P.scissorTest}else O.copy(X).multiplyScalar(Lt).floor(),H.copy(Y).multiplyScalar(Lt).floor(),q=ft;if(ht!==0&&(ct=Lm),at.bindFramebuffer(R.FRAMEBUFFER,ct)&&at.drawBuffers(P,ct),at.viewport(O),at.scissor(H),at.setScissorTest(q),nt){const Ft=y.get(P.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ft.__webglTexture,ht)}else if(It){const Ft=J;for(let Ht=0;Ht<P.textures.length;Ht++){const Gt=y.get(P.textures[Ht]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+Ht,Gt.__webglTexture,ht,Ft)}}else if(P!==null&&ht!==0){const Ft=y.get(P.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Ft.__webglTexture,ht)}W=-1},this.readRenderTargetPixels=function(P,J,ht,ct,nt,It,kt,Ft=0){if(!(P&&P.isWebGLRenderTarget)){le("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ht=y.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&kt!==void 0&&(Ht=Ht[kt]),Ht){at.bindFramebuffer(R.FRAMEBUFFER,Ht);try{const Gt=P.textures[Ft],$t=Gt.format,Xt=Gt.type;if(!it.textureFormatReadable($t)){le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!it.textureTypeReadable(Xt)){le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=P.width-ct&&ht>=0&&ht<=P.height-nt&&(P.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Ft),R.readPixels(J,ht,ct,nt,wt.convert($t),wt.convert(Xt),It))}finally{const Gt=U!==null?y.get(U).__webglFramebuffer:null;at.bindFramebuffer(R.FRAMEBUFFER,Gt)}}},this.readRenderTargetPixelsAsync=async function(P,J,ht,ct,nt,It,kt,Ft=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ht=y.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&kt!==void 0&&(Ht=Ht[kt]),Ht)if(J>=0&&J<=P.width-ct&&ht>=0&&ht<=P.height-nt){at.bindFramebuffer(R.FRAMEBUFFER,Ht);const Gt=P.textures[Ft],$t=Gt.format,Xt=Gt.type;if(!it.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!it.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const oe=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,oe),R.bufferData(R.PIXEL_PACK_BUFFER,It.byteLength,R.STREAM_READ),P.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Ft),R.readPixels(J,ht,ct,nt,wt.convert($t),wt.convert(Xt),0);const xe=U!==null?y.get(U).__webglFramebuffer:null;at.bindFramebuffer(R.FRAMEBUFFER,xe);const Le=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await mx(R,Le,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,oe),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,It),R.deleteBuffer(oe),R.deleteSync(Le),It}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,J=null,ht=0){const ct=Math.pow(2,-ht),nt=Math.floor(P.image.width*ct),It=Math.floor(P.image.height*ct),kt=J!==null?J.x:0,Ft=J!==null?J.y:0;z.setTexture2D(P,0),R.copyTexSubImage2D(R.TEXTURE_2D,ht,0,0,kt,Ft,nt,It),at.unbindTexture()};const Dm=R.createFramebuffer(),Nm=R.createFramebuffer();this.copyTextureToTexture=function(P,J,ht=null,ct=null,nt=0,It=null){It===null&&(nt!==0?(fo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),It=nt,nt=0):It=0);let kt,Ft,Ht,Gt,$t,Xt,oe,xe,Le;const De=P.isCompressedTexture?P.mipmaps[It]:P.image;if(ht!==null)kt=ht.max.x-ht.min.x,Ft=ht.max.y-ht.min.y,Ht=ht.isBox3?ht.max.z-ht.min.z:1,Gt=ht.min.x,$t=ht.min.y,Xt=ht.isBox3?ht.min.z:0;else{const Rn=Math.pow(2,-nt);kt=Math.floor(De.width*Rn),Ft=Math.floor(De.height*Rn),P.isDataArrayTexture?Ht=De.depth:P.isData3DTexture?Ht=Math.floor(De.depth*Rn):Ht=1,Gt=0,$t=0,Xt=0}ct!==null?(oe=ct.x,xe=ct.y,Le=ct.z):(oe=0,xe=0,Le=0);const Se=wt.convert(J.format),jt=wt.convert(J.type);let _e;J.isData3DTexture?(z.setTexture3D(J,0),_e=R.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(z.setTexture2DArray(J,0),_e=R.TEXTURE_2D_ARRAY):(z.setTexture2D(J,0),_e=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,J.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,J.unpackAlignment);const he=R.getParameter(R.UNPACK_ROW_LENGTH),xn=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Bs=R.getParameter(R.UNPACK_SKIP_PIXELS),yn=R.getParameter(R.UNPACK_SKIP_ROWS),Rr=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,De.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,De.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Gt),R.pixelStorei(R.UNPACK_SKIP_ROWS,$t),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Xt);const we=P.isDataArrayTexture||P.isData3DTexture,cn=J.isDataArrayTexture||J.isData3DTexture;if(P.isDepthTexture){const Rn=y.get(P),en=y.get(J),un=y.get(Rn.__renderTarget),Ja=y.get(en.__renderTarget);at.bindFramebuffer(R.READ_FRAMEBUFFER,un.__webglFramebuffer),at.bindFramebuffer(R.DRAW_FRAMEBUFFER,Ja.__webglFramebuffer);for(let hs=0;hs<Ht;hs++)we&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,y.get(P).__webglTexture,nt,Xt+hs),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,y.get(J).__webglTexture,It,Le+hs)),R.blitFramebuffer(Gt,$t,kt,Ft,oe,xe,kt,Ft,R.DEPTH_BUFFER_BIT,R.NEAREST);at.bindFramebuffer(R.READ_FRAMEBUFFER,null),at.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(nt!==0||P.isRenderTargetTexture||y.has(P)){const Rn=y.get(P),en=y.get(J);at.bindFramebuffer(R.READ_FRAMEBUFFER,Dm),at.bindFramebuffer(R.DRAW_FRAMEBUFFER,Nm);for(let un=0;un<Ht;un++)we?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Rn.__webglTexture,nt,Xt+un):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Rn.__webglTexture,nt),cn?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,en.__webglTexture,It,Le+un):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,en.__webglTexture,It),nt!==0?R.blitFramebuffer(Gt,$t,kt,Ft,oe,xe,kt,Ft,R.COLOR_BUFFER_BIT,R.NEAREST):cn?R.copyTexSubImage3D(_e,It,oe,xe,Le+un,Gt,$t,kt,Ft):R.copyTexSubImage2D(_e,It,oe,xe,Gt,$t,kt,Ft);at.bindFramebuffer(R.READ_FRAMEBUFFER,null),at.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else cn?P.isDataTexture||P.isData3DTexture?R.texSubImage3D(_e,It,oe,xe,Le,kt,Ft,Ht,Se,jt,De.data):J.isCompressedArrayTexture?R.compressedTexSubImage3D(_e,It,oe,xe,Le,kt,Ft,Ht,Se,De.data):R.texSubImage3D(_e,It,oe,xe,Le,kt,Ft,Ht,Se,jt,De):P.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,It,oe,xe,kt,Ft,Se,jt,De.data):P.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,It,oe,xe,De.width,De.height,Se,De.data):R.texSubImage2D(R.TEXTURE_2D,It,oe,xe,kt,Ft,Se,jt,De);R.pixelStorei(R.UNPACK_ROW_LENGTH,he),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,xn),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Bs),R.pixelStorei(R.UNPACK_SKIP_ROWS,yn),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Rr),It===0&&J.generateMipmaps&&R.generateMipmap(_e),at.unbindTexture()},this.initRenderTarget=function(P){y.get(P).__webglFramebuffer===void 0&&z.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?z.setTextureCube(P,0):P.isData3DTexture?z.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?z.setTexture2DArray(P,0):z.setTexture2D(P,0),at.unbindTexture()},this.resetState=function(){D=0,k=0,U=null,at.reset(),Bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ue._getDrawingBufferColorSpace(t),e.unpackColorSpace=ue._getUnpackColorSpace()}}class Xn{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){const t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){const t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){const e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new T);const e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new T);const n=this.elements,s=t.x,r=t.y,o=t.z;return e.x=n[0]*s+n[1]*r+n[2]*o,e.y=n[3]*s+n[4]*r+n[5]*o,e.z=n[6]*s+n[7]*r+n[8]*o,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new Xn);const n=this.elements,s=t.elements,r=e.elements,o=n[0],a=n[1],l=n[2],c=n[3],u=n[4],d=n[5],h=n[6],f=n[7],p=n[8],_=s[0],m=s[1],g=s[2],x=s[3],S=s[4],v=s[5],M=s[6],w=s[7],A=s[8];return r[0]=o*_+a*x+l*M,r[1]=o*m+a*S+l*w,r[2]=o*g+a*v+l*A,r[3]=c*_+u*x+d*M,r[4]=c*m+u*S+d*w,r[5]=c*g+u*v+d*A,r[6]=h*_+f*x+p*M,r[7]=h*m+f*S+p*w,r[8]=h*g+f*v+p*A,e}scale(t,e){e===void 0&&(e=new Xn);const n=this.elements,s=e.elements;for(let r=0;r!==3;r++)s[3*r+0]=t.x*n[3*r+0],s[3*r+1]=t.y*n[3*r+1],s[3*r+2]=t.z*n[3*r+2];return e}solve(t,e){e===void 0&&(e=new T);const n=3,s=4,r=[];let o,a;for(o=0;o<n*s;o++)r.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)r[o+s*a]=this.elements[o+3*a];r[3+4*0]=t.x,r[3+4*1]=t.y,r[3+4*2]=t.z;let l=3;const c=l;let u;const d=4;let h;do{if(o=c-l,r[o+s*o]===0){for(a=o+1;a<c;a++)if(r[o+s*a]!==0){u=d;do h=d-u,r[h+s*o]+=r[h+s*a];while(--u);break}}if(r[o+s*o]!==0)for(a=o+1;a<c;a++){const f=r[o+s*a]/r[o+s*o];u=d;do h=d-u,r[h+s*a]=h<=o?0:r[h+s*a]-r[h+s*o]*f;while(--u)}}while(--l);if(e.z=r[2*s+3]/r[2*s+2],e.y=(r[1*s+3]-r[1*s+2]*e.z)/r[1*s+1],e.x=(r[0*s+3]-r[0*s+2]*e.z-r[0*s+1]*e.y)/r[0*s+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="";const e=",";for(let n=0;n<9;n++)t+=this.elements[n]+e;return t}reverse(t){t===void 0&&(t=new Xn);const e=3,n=6,s=AE;let r,o;for(r=0;r<3;r++)for(o=0;o<3;o++)s[r+n*o]=this.elements[r+3*o];s[3+6*0]=1,s[3+6*1]=0,s[3+6*2]=0,s[4+6*0]=0,s[4+6*1]=1,s[4+6*2]=0,s[5+6*0]=0,s[5+6*1]=0,s[5+6*2]=1;let a=3;const l=a;let c;const u=n;let d;do{if(r=l-a,s[r+n*r]===0){for(o=r+1;o<l;o++)if(s[r+n*o]!==0){c=u;do d=u-c,s[d+n*r]+=s[d+n*o];while(--c);break}}if(s[r+n*r]!==0)for(o=r+1;o<l;o++){const h=s[r+n*o]/s[r+n*r];c=u;do d=u-c,s[d+n*o]=d<=r?0:s[d+n*o]-s[d+n*r]*h;while(--c)}}while(--a);r=2;do{o=r-1;do{const h=s[r+n*o]/s[r+n*r];c=n;do d=n-c,s[d+n*o]=s[d+n*o]-s[d+n*r]*h;while(--c)}while(o--)}while(--r);r=2;do{const h=1/s[r+n*r];c=n;do d=n-c,s[d+n*r]=s[d+n*r]*h;while(--c)}while(r--);r=2;do{o=2;do{if(d=s[e+o+n*r],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(r,o,d)}while(o--)}while(r--);return t}setRotationFromQuaternion(t){const e=t.x,n=t.y,s=t.z,r=t.w,o=e+e,a=n+n,l=s+s,c=e*o,u=e*a,d=e*l,h=n*a,f=n*l,p=s*l,_=r*o,m=r*a,g=r*l,x=this.elements;return x[3*0+0]=1-(h+p),x[3*0+1]=u-g,x[3*0+2]=d+m,x[3*1+0]=u+g,x[3*1+1]=1-(c+p),x[3*1+2]=f-_,x[3*2+0]=d-m,x[3*2+1]=f+_,x[3*2+2]=1-(c+h),this}transpose(t){t===void 0&&(t=new Xn);const e=this.elements,n=t.elements;let s;return n[0]=e[0],n[4]=e[4],n[8]=e[8],s=e[1],n[1]=e[3],n[3]=s,s=e[2],n[2]=e[6],n[6]=s,s=e[5],n[5]=e[7],n[7]=s,t}}const AE=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class T{constructor(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.z=n}cross(t,e){e===void 0&&(e=new T);const n=t.x,s=t.y,r=t.z,o=this.x,a=this.y,l=this.z;return e.x=a*r-l*s,e.y=l*n-o*r,e.z=o*s-a*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new T(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new T(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new Xn([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const t=this.x,e=this.y,n=this.z,s=Math.sqrt(t*t+e*e+n*n);if(s>0){const r=1/s;this.x*=r,this.y*=r,this.z*=r}else this.x=0,this.y=0,this.z=0;return s}unit(t){t===void 0&&(t=new T);const e=this.x,n=this.y,s=this.z;let r=Math.sqrt(e*e+n*n+s*s);return r>0?(r=1/r,t.x=e*r,t.y=n*r,t.z=s*r):(t.x=1,t.y=0,t.z=0),t}length(){const t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z;return Math.sqrt((r-e)*(r-e)+(o-n)*(o-n)+(a-s)*(a-s))}distanceSquared(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z;return(r-e)*(r-e)+(o-n)*(o-n)+(a-s)*(a-s)}scale(t,e){e===void 0&&(e=new T);const n=this.x,s=this.y,r=this.z;return e.x=t*n,e.y=t*s,e.z=t*r,e}vmul(t,e){return e===void 0&&(e=new T),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n){return n===void 0&&(n=new T),n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new T),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){const n=this.length();if(n>0){const s=CE,r=1/n;s.set(this.x*r,this.y*r,this.z*r);const o=RE;Math.abs(s.x)<.9?(o.set(1,0,0),s.cross(o,t)):(o.set(0,1,0),s.cross(o,t)),s.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){const s=this.x,r=this.y,o=this.z;n.x=s+(t.x-s)*e,n.y=r+(t.y-r)*e,n.z=o+(t.z-o)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(qd),qd.almostEquals(t,e)}clone(){return new T(this.x,this.y,this.z)}}T.ZERO=new T(0,0,0);T.UNIT_X=new T(1,0,0);T.UNIT_Y=new T(0,1,0);T.UNIT_Z=new T(0,0,1);const CE=new T,RE=new T,qd=new T;class Cn{constructor(t){t===void 0&&(t={}),this.lowerBound=new T,this.upperBound=new T,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,s){const r=this.lowerBound,o=this.upperBound,a=n;r.copy(t[0]),a&&a.vmult(r,r),o.copy(r);for(let l=1;l<t.length;l++){let c=t[l];a&&(a.vmult(c,Xd),c=Xd),c.x>o.x&&(o.x=c.x),c.x<r.x&&(r.x=c.x),c.y>o.y&&(o.y=c.y),c.y<r.y&&(r.y=c.y),c.z>o.z&&(o.z=c.z),c.z<r.z&&(r.z=c.z)}return e&&(e.vadd(r,r),e.vadd(o,o)),s&&(r.x-=s,r.y-=s,r.z-=s,o.x+=s,o.y+=s,o.z+=s),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new Cn().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){const e=this.lowerBound,n=this.upperBound,s=t.lowerBound,r=t.upperBound,o=s.x<=n.x&&n.x<=r.x||e.x<=r.x&&r.x<=n.x,a=s.y<=n.y&&n.y<=r.y||e.y<=r.y&&r.y<=n.y,l=s.z<=n.z&&n.z<=r.z||e.z<=r.z&&r.z<=n.z;return o&&a&&l}volume(){const t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){const e=this.lowerBound,n=this.upperBound,s=t.lowerBound,r=t.upperBound;return e.x<=s.x&&n.x>=r.x&&e.y<=s.y&&n.y>=r.y&&e.z<=s.z&&n.z>=r.z}getCorners(t,e,n,s,r,o,a,l){const c=this.lowerBound,u=this.upperBound;t.copy(c),e.set(u.x,c.y,c.z),n.set(u.x,u.y,c.z),s.set(c.x,u.y,u.z),r.set(u.x,c.y,u.z),o.set(c.x,u.y,c.z),a.set(c.x,c.y,u.z),l.copy(u)}toLocalFrame(t,e){const n=jd,s=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],d=n[7];this.getCorners(s,r,o,a,l,c,u,d);for(let h=0;h!==8;h++){const f=n[h];t.pointToLocal(f,f)}return e.setFromPoints(n)}toWorldFrame(t,e){const n=jd,s=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],d=n[7];this.getCorners(s,r,o,a,l,c,u,d);for(let h=0;h!==8;h++){const f=n[h];t.pointToWorld(f,f)}return e.setFromPoints(n)}overlapsRay(t){const{direction:e,from:n}=t,s=1/e.x,r=1/e.y,o=1/e.z,a=(this.lowerBound.x-n.x)*s,l=(this.upperBound.x-n.x)*s,c=(this.lowerBound.y-n.y)*r,u=(this.upperBound.y-n.y)*r,d=(this.lowerBound.z-n.z)*o,h=(this.upperBound.z-n.z)*o,f=Math.max(Math.max(Math.min(a,l),Math.min(c,u)),Math.min(d,h)),p=Math.min(Math.min(Math.max(a,l),Math.max(c,u)),Math.max(d,h));return!(p<0||f>p)}}const Xd=new T,jd=[new T,new T,new T,new T,new T,new T,new T,new T];class Yd{constructor(){this.matrix=[]}get(t,e){let{index:n}=t,{index:s}=e;if(s>n){const r=s;s=n,n=r}return this.matrix[(n*(n+1)>>1)+s-1]}set(t,e,n){let{index:s}=t,{index:r}=e;if(r>s){const o=r;r=s,s=o}this.matrix[(s*(s+1)>>1)+r-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}}class gm{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;const n=this._listeners;if(n[t]===void 0)return this;const s=n[t].indexOf(e);return s!==-1&&n[t].splice(s,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;const n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let s=0,r=n.length;s<r;s++)n[s].call(this,t)}return this}}class Ue{constructor(t,e,n,s){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),s===void 0&&(s=1),this.x=t,this.y=e,this.z=n,this.w=s}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){const n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new T),this.normalize();const e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){const n=PE,s=IE;t.tangents(n,s),this.setFromAxisAngle(n,Math.PI)}else{const n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new Ue);const n=this.x,s=this.y,r=this.z,o=this.w,a=t.x,l=t.y,c=t.z,u=t.w;return e.x=n*u+o*a+s*c-r*l,e.y=s*u+o*l+r*a-n*c,e.z=r*u+o*c+n*l-s*a,e.w=o*u-n*a-s*l-r*c,e}inverse(t){t===void 0&&(t=new Ue);const e=this.x,n=this.y,s=this.z,r=this.w;this.conjugate(t);const o=1/(e*e+n*n+s*s+r*r);return t.x*=o,t.y*=o,t.z*=o,t.w*=o,t}conjugate(t){return t===void 0&&(t=new Ue),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){const t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new T);const n=t.x,s=t.y,r=t.z,o=this.x,a=this.y,l=this.z,c=this.w,u=c*n+a*r-l*s,d=c*s+l*n-o*r,h=c*r+o*s-a*n,f=-o*n-a*s-l*r;return e.x=u*c+f*-o+d*-l-h*-a,e.y=d*c+f*-a+h*-o-u*-l,e.z=h*c+f*-l+u*-a-d*-o,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let n,s,r;const o=this.x,a=this.y,l=this.z,c=this.w;switch(e){case"YZX":const u=o*a+l*c;if(u>.499&&(n=2*Math.atan2(o,c),s=Math.PI/2,r=0),u<-.499&&(n=-2*Math.atan2(o,c),s=-Math.PI/2,r=0),n===void 0){const d=o*o,h=a*a,f=l*l;n=Math.atan2(2*a*c-2*o*l,1-2*h-2*f),s=Math.asin(2*u),r=Math.atan2(2*o*c-2*a*l,1-2*d-2*f)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=s,t.x=r}setFromEuler(t,e,n,s){s===void 0&&(s="XYZ");const r=Math.cos(t/2),o=Math.cos(e/2),a=Math.cos(n/2),l=Math.sin(t/2),c=Math.sin(e/2),u=Math.sin(n/2);return s==="XYZ"?(this.x=l*o*a+r*c*u,this.y=r*c*a-l*o*u,this.z=r*o*u+l*c*a,this.w=r*o*a-l*c*u):s==="YXZ"?(this.x=l*o*a+r*c*u,this.y=r*c*a-l*o*u,this.z=r*o*u-l*c*a,this.w=r*o*a+l*c*u):s==="ZXY"?(this.x=l*o*a-r*c*u,this.y=r*c*a+l*o*u,this.z=r*o*u+l*c*a,this.w=r*o*a-l*c*u):s==="ZYX"?(this.x=l*o*a-r*c*u,this.y=r*c*a+l*o*u,this.z=r*o*u-l*c*a,this.w=r*o*a+l*c*u):s==="YZX"?(this.x=l*o*a+r*c*u,this.y=r*c*a+l*o*u,this.z=r*o*u-l*c*a,this.w=r*o*a-l*c*u):s==="XZY"&&(this.x=l*o*a-r*c*u,this.y=r*c*a-l*o*u,this.z=r*o*u+l*c*a,this.w=r*o*a+l*c*u),this}clone(){return new Ue(this.x,this.y,this.z,this.w)}slerp(t,e,n){n===void 0&&(n=new Ue);const s=this.x,r=this.y,o=this.z,a=this.w;let l=t.x,c=t.y,u=t.z,d=t.w,h,f,p,_,m;return f=s*l+r*c+o*u+a*d,f<0&&(f=-f,l=-l,c=-c,u=-u,d=-d),1-f>1e-6?(h=Math.acos(f),p=Math.sin(h),_=Math.sin((1-e)*h)/p,m=Math.sin(e*h)/p):(_=1-e,m=e),n.x=_*s+m*l,n.y=_*r+m*c,n.z=_*o+m*u,n.w=_*a+m*d,n}integrate(t,e,n,s){s===void 0&&(s=new Ue);const r=t.x*n.x,o=t.y*n.y,a=t.z*n.z,l=this.x,c=this.y,u=this.z,d=this.w,h=e*.5;return s.x+=h*(r*d+o*u-a*c),s.y+=h*(o*d+a*l-r*u),s.z+=h*(a*d+r*c-o*l),s.w+=h*(-r*l-o*c-a*u),s}}const PE=new T,IE=new T,LE={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class Vt{constructor(t){t===void 0&&(t={}),this.id=Vt.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,s){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}Vt.idCounter=0;Vt.types=LE;class de{constructor(t){t===void 0&&(t={}),this.position=new T,this.quaternion=new Ue,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return de.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return de.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new T),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,s){return s===void 0&&(s=new T),n.vsub(t,s),e.conjugate($d),$d.vmult(s,s),s}static pointToWorldFrame(t,e,n,s){return s===void 0&&(s=new T),e.vmult(n,s),s.vadd(t,s),s}static vectorToWorldFrame(t,e,n){return n===void 0&&(n=new T),t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,s){return s===void 0&&(s=new T),e.w*=-1,e.vmult(n,s),e.w*=-1,s}}const $d=new Ue;class so extends Vt{constructor(t){t===void 0&&(t={});const{vertices:e=[],faces:n=[],normals:s=[],axes:r,boundingSphereRadius:o}=t;super({type:Vt.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=s,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=r?r.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;const s=new T;for(let r=0;r!==t.length;r++){const o=t[r],a=o.length;for(let l=0;l!==a;l++){const c=(l+1)%a;e[o[l]].vsub(e[o[c]],s),s.normalize();let u=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(s)||n[d].almostEquals(s)){u=!0;break}u||n.push(s.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let s=0;s<this.faces[t].length;s++)if(!this.vertices[this.faces[t][s]])throw new Error(`Vertex ${this.faces[t][s]} not found!`);const e=this.faceNormals[t]||new T;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;const n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let s=0;s<this.faces[t].length;s++)console.warn(`.vertices[${this.faces[t][s]}] = Vec3(${this.vertices[this.faces[t][s]].toString()})`)}}}getFaceNormal(t,e){const n=this.faces[t],s=this.vertices[n[0]],r=this.vertices[n[1]],o=this.vertices[n[2]];so.computeNormal(s,r,o,e)}static computeNormal(t,e,n,s){const r=new T,o=new T;e.vsub(t,o),n.vsub(e,r),r.cross(o,s),s.isZero()||s.normalize()}clipAgainstHull(t,e,n,s,r,o,a,l,c){const u=new T;let d=-1,h=-Number.MAX_VALUE;for(let p=0;p<n.faces.length;p++){u.copy(n.faceNormals[p]),r.vmult(u,u);const _=u.dot(o);_>h&&(h=_,d=p)}const f=[];for(let p=0;p<n.faces[d].length;p++){const _=n.vertices[n.faces[d][p]],m=new T;m.copy(_),r.vmult(m,m),s.vadd(m,m),f.push(m)}d>=0&&this.clipFaceAgainstHull(o,t,e,f,a,l,c)}findSeparatingAxis(t,e,n,s,r,o,a,l){const c=new T,u=new T,d=new T,h=new T,f=new T,p=new T;let _=Number.MAX_VALUE;const m=this;if(m.uniqueAxes)for(let g=0;g!==m.uniqueAxes.length;g++){n.vmult(m.uniqueAxes[g],c);const x=m.testSepAxis(c,t,e,n,s,r);if(x===!1)return!1;x<_&&(_=x,o.copy(c))}else{const g=a?a.length:m.faces.length;for(let x=0;x<g;x++){const S=a?a[x]:x;c.copy(m.faceNormals[S]),n.vmult(c,c);const v=m.testSepAxis(c,t,e,n,s,r);if(v===!1)return!1;v<_&&(_=v,o.copy(c))}}if(t.uniqueAxes)for(let g=0;g!==t.uniqueAxes.length;g++){r.vmult(t.uniqueAxes[g],u);const x=m.testSepAxis(u,t,e,n,s,r);if(x===!1)return!1;x<_&&(_=x,o.copy(u))}else{const g=l?l.length:t.faces.length;for(let x=0;x<g;x++){const S=l?l[x]:x;u.copy(t.faceNormals[S]),r.vmult(u,u);const v=m.testSepAxis(u,t,e,n,s,r);if(v===!1)return!1;v<_&&(_=v,o.copy(u))}}for(let g=0;g!==m.uniqueEdges.length;g++){n.vmult(m.uniqueEdges[g],h);for(let x=0;x!==t.uniqueEdges.length;x++)if(r.vmult(t.uniqueEdges[x],f),h.cross(f,p),!p.almostZero()){p.normalize();const S=m.testSepAxis(p,t,e,n,s,r);if(S===!1)return!1;S<_&&(_=S,o.copy(p))}}return s.vsub(e,d),d.dot(o)>0&&o.negate(o),!0}testSepAxis(t,e,n,s,r,o){const a=this;so.project(a,t,n,s,Wl),so.project(e,t,r,o,ql);const l=Wl[0],c=Wl[1],u=ql[0],d=ql[1];if(l<d||u<c)return!1;const h=l-d,f=u-c;return h<f?h:f}calculateLocalInertia(t,e){const n=new T,s=new T;this.computeLocalAABB(s,n);const r=n.x-s.x,o=n.y-s.y,a=n.z-s.z;e.x=1/12*t*(2*o*2*o+2*a*2*a),e.y=1/12*t*(2*r*2*r+2*a*2*a),e.z=1/12*t*(2*o*2*o+2*r*2*r)}getPlaneConstantOfFace(t){const e=this.faces[t],n=this.faceNormals[t],s=this.vertices[e[0]];return-n.dot(s)}clipFaceAgainstHull(t,e,n,s,r,o,a){const l=new T,c=new T,u=new T,d=new T,h=new T,f=new T,p=new T,_=new T,m=this,g=[],x=s,S=g;let v=-1,M=Number.MAX_VALUE;for(let E=0;E<m.faces.length;E++){l.copy(m.faceNormals[E]),n.vmult(l,l);const D=l.dot(t);D<M&&(M=D,v=E)}if(v<0)return;const w=m.faces[v];w.connectedFaces=[];for(let E=0;E<m.faces.length;E++)for(let D=0;D<m.faces[E].length;D++)w.indexOf(m.faces[E][D])!==-1&&E!==v&&w.connectedFaces.indexOf(E)===-1&&w.connectedFaces.push(E);const A=w.length;for(let E=0;E<A;E++){const D=m.vertices[w[E]],k=m.vertices[w[(E+1)%A]];D.vsub(k,c),u.copy(c),n.vmult(u,u),e.vadd(u,u),d.copy(this.faceNormals[v]),n.vmult(d,d),e.vadd(d,d),u.cross(d,h),h.negate(h),f.copy(D),n.vmult(f,f),e.vadd(f,f);const U=w.connectedFaces[E];p.copy(this.faceNormals[U]);const W=this.getPlaneConstantOfFace(U);_.copy(p),n.vmult(_,_);const B=W-_.dot(e);for(this.clipFaceAgainstPlane(x,S,_,B);x.length;)x.shift();for(;S.length;)x.push(S.shift())}p.copy(this.faceNormals[v]);const L=this.getPlaneConstantOfFace(v);_.copy(p),n.vmult(_,_);const b=L-_.dot(e);for(let E=0;E<x.length;E++){let D=_.dot(x[E])+b;if(D<=r&&(console.log(`clamped: depth=${D} to minDist=${r}`),D=r),D<=o){const k=x[E];if(D<=1e-6){const U={point:k,normal:_,depth:D};a.push(U)}}}}clipFaceAgainstPlane(t,e,n,s){let r,o;const a=t.length;if(a<2)return e;let l=t[t.length-1],c=t[0];r=n.dot(l)+s;for(let u=0;u<a;u++){if(c=t[u],o=n.dot(c)+s,r<0)if(o<0){const d=new T;d.copy(c),e.push(d)}else{const d=new T;l.lerp(c,r/(r-o),d),e.push(d)}else if(o<0){const d=new T;l.lerp(c,r/(r-o),d),e.push(d),e.push(c)}l=c,r=o}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new T);const n=this.vertices,s=this.worldVertices;for(let r=0;r!==this.vertices.length;r++)e.vmult(n[r],s[r]),t.vadd(s[r],s[r]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){const n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let s=0;s<this.vertices.length;s++){const r=n[s];r.x<t.x?t.x=r.x:r.x>e.x&&(e.x=r.x),r.y<t.y?t.y=r.y:r.y>e.y&&(e.y=r.y),r.z<t.z?t.z=r.z:r.z>e.z&&(e.z=r.z)}}computeWorldFaceNormals(t){const e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new T);const n=this.faceNormals,s=this.worldFaceNormals;for(let r=0;r!==e;r++)t.vmult(n[r],s[r]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0;const e=this.vertices;for(let n=0;n!==e.length;n++){const s=e[n].lengthSquared();s>t&&(t=s)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,s){const r=this.vertices;let o,a,l,c,u,d,h=new T;for(let f=0;f<r.length;f++){h.copy(r[f]),e.vmult(h,h),t.vadd(h,h);const p=h;(o===void 0||p.x<o)&&(o=p.x),(c===void 0||p.x>c)&&(c=p.x),(a===void 0||p.y<a)&&(a=p.y),(u===void 0||p.y>u)&&(u=p.y),(l===void 0||p.z<l)&&(l=p.z),(d===void 0||p.z>d)&&(d=p.z)}n.set(o,a,l),s.set(c,u,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new T);const e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){const n=this.vertices.length,s=this.vertices;if(e){for(let r=0;r<n;r++){const o=s[r];e.vmult(o,o)}for(let r=0;r<this.faceNormals.length;r++){const o=this.faceNormals[r];e.vmult(o,o)}}if(t)for(let r=0;r<n;r++){const o=s[r];o.vadd(t,o)}}pointIsInside(t){const e=this.vertices,n=this.faces,s=this.faceNormals,r=new T;this.getAveragePointLocal(r);for(let o=0;o<this.faces.length;o++){let a=s[o];const l=e[n[o][0]],c=new T;t.vsub(l,c);const u=a.dot(c),d=new T;r.vsub(l,d);const h=a.dot(d);if(u<0&&h>0||u>0&&h<0)return!1}return-1}static project(t,e,n,s,r){const o=t.vertices.length,a=DE;let l=0,c=0;const u=NE,d=t.vertices;u.setZero(),de.vectorToLocalFrame(n,s,e,a),de.pointToLocalFrame(n,s,u,u);const h=u.dot(a);c=l=d[0].dot(a);for(let f=1;f<o;f++){const p=d[f].dot(a);p>l&&(l=p),p<c&&(c=p)}if(c-=h,l-=h,c>l){const f=c;c=l,l=f}r[0]=l,r[1]=c}}const Wl=[],ql=[];new T;const DE=new T,NE=new T;class Vn extends Vt{constructor(t){super({type:Vt.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,s=T,r=[new s(-t,-e,-n),new s(t,-e,-n),new s(t,e,-n),new s(-t,e,-n),new s(-t,-e,n),new s(t,-e,n),new s(t,e,n),new s(-t,e,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new s(0,0,1),new s(0,1,0),new s(1,0,0)],l=new so({vertices:r,faces:o,axes:a});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new T),Vn.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){const s=t;n.x=1/12*e*(2*s.y*2*s.y+2*s.z*2*s.z),n.y=1/12*e*(2*s.x*2*s.x+2*s.z*2*s.z),n.z=1/12*e*(2*s.y*2*s.y+2*s.x*2*s.x)}getSideNormals(t,e){const n=t,s=this.halfExtents;if(n[0].set(s.x,0,0),n[1].set(0,s.y,0),n[2].set(0,0,s.z),n[3].set(-s.x,0,0),n[4].set(0,-s.y,0),n[5].set(0,0,-s.z),e!==void 0)for(let r=0;r!==n.length;r++)e.vmult(n[r],n[r]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){const s=this.halfExtents,r=[[s.x,s.y,s.z],[-s.x,s.y,s.z],[-s.x,-s.y,s.z],[-s.x,-s.y,-s.z],[s.x,-s.y,-s.z],[s.x,s.y,-s.z],[-s.x,s.y,-s.z],[s.x,-s.y,s.z]];for(let o=0;o<r.length;o++)Ki.set(r[o][0],r[o][1],r[o][2]),e.vmult(Ki,Ki),t.vadd(Ki,Ki),n(Ki.x,Ki.y,Ki.z)}calculateWorldAABB(t,e,n,s){const r=this.halfExtents;Jn[0].set(r.x,r.y,r.z),Jn[1].set(-r.x,r.y,r.z),Jn[2].set(-r.x,-r.y,r.z),Jn[3].set(-r.x,-r.y,-r.z),Jn[4].set(r.x,-r.y,-r.z),Jn[5].set(r.x,r.y,-r.z),Jn[6].set(-r.x,r.y,-r.z),Jn[7].set(r.x,-r.y,r.z);const o=Jn[0];e.vmult(o,o),t.vadd(o,o),s.copy(o),n.copy(o);for(let a=1;a<8;a++){const l=Jn[a];e.vmult(l,l),t.vadd(l,l);const c=l.x,u=l.y,d=l.z;c>s.x&&(s.x=c),u>s.y&&(s.y=u),d>s.z&&(s.z=d),c<n.x&&(n.x=c),u<n.y&&(n.y=u),d<n.z&&(n.z=d)}}}const Ki=new T,Jn=[new T,new T,new T,new T,new T,new T,new T,new T],Yu={DYNAMIC:1,STATIC:2,KINEMATIC:4},$u={AWAKE:0,SLEEPY:1,SLEEPING:2};class Ot extends gm{constructor(t){t===void 0&&(t={}),super(),this.id=Ot.idCounter++,this.index=-1,this.world=null,this.vlambda=new T,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new T,this.previousPosition=new T,this.interpolatedPosition=new T,this.initPosition=new T,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new T,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new T,this.force=new T;const e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?Ot.STATIC:Ot.DYNAMIC,typeof t.type==typeof Ot.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=Ot.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new T,this.quaternion=new Ue,this.initQuaternion=new Ue,this.previousQuaternion=new Ue,this.interpolatedQuaternion=new Ue,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new T,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new T,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new T,this.invInertia=new T,this.invInertiaWorld=new Xn,this.invMassSolve=0,this.invInertiaSolve=new T,this.invInertiaWorldSolve=new Xn,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new T(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new T(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new Cn,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new T,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){const t=this.sleepState;this.sleepState=Ot.AWAKE,this.wakeUpAfterNarrowphase=!1,t===Ot.SLEEPING&&this.dispatchEvent(Ot.wakeupEvent)}sleep(){this.sleepState=Ot.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){const e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),s=this.sleepSpeedLimit**2;e===Ot.AWAKE&&n<s?(this.sleepState=Ot.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(Ot.sleepyEvent)):e===Ot.SLEEPY&&n>s?this.wakeUp():e===Ot.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(Ot.sleepEvent))}}updateSolveMassProperties(){this.sleepState===Ot.SLEEPING||this.type===Ot.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new T),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new T),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new T),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new T),this.quaternion.vmult(t,e),e}addShape(t,e,n){const s=new T,r=new Ue;return e&&s.copy(e),n&&r.copy(n),this.shapes.push(t),this.shapeOffsets.push(s),this.shapeOrientations.push(r),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){const e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){const t=this.shapes,e=this.shapeOffsets,n=t.length;let s=0;for(let r=0;r!==n;r++){const o=t[r];o.updateBoundingSphereRadius();const a=e[r].length(),l=o.boundingSphereRadius;a+l>s&&(s=a+l)}this.boundingRadius=s}updateAABB(){const t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,s=t.length,r=FE,o=UE,a=this.quaternion,l=this.aabb,c=OE;for(let u=0;u!==s;u++){const d=t[u];a.vmult(e[u],r),r.vadd(this.position,r),a.mult(n[u],o),d.calculateWorldAABB(r,o,c.lowerBound,c.upperBound),u===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){const e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){const n=BE,s=zE;n.setRotationFromQuaternion(this.quaternion),n.transpose(s),n.scale(e,n),n.mmult(s,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new T),this.type!==Ot.DYNAMIC)return;this.sleepState===Ot.SLEEPING&&this.wakeUp();const n=kE;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new T),this.type!==Ot.DYNAMIC)return;const n=VE,s=HE;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,s),this.applyForce(n,s)}applyTorque(t){this.type===Ot.DYNAMIC&&(this.sleepState===Ot.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new T),this.type!==Ot.DYNAMIC)return;this.sleepState===Ot.SLEEPING&&this.wakeUp();const n=e,s=GE;s.copy(t),s.scale(this.invMass,s),this.velocity.vadd(s,this.velocity);const r=WE;n.cross(t,r),this.invInertiaWorld.vmult(r,r),this.angularVelocity.vadd(r,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new T),this.type!==Ot.DYNAMIC)return;const n=qE,s=XE;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,s),this.applyImpulse(n,s)}updateMassProperties(){const t=jE;this.invMass=this.mass>0?1/this.mass:0;const e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),Vn.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){const n=new T;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===Ot.DYNAMIC||this.type===Ot.KINEMATIC)||this.sleepState===Ot.SLEEPING)return;const s=this.velocity,r=this.angularVelocity,o=this.position,a=this.force,l=this.torque,c=this.quaternion,u=this.invMass,d=this.invInertiaWorld,h=this.linearFactor,f=u*t;s.x+=a.x*f*h.x,s.y+=a.y*f*h.y,s.z+=a.z*f*h.z;const p=d.elements,_=this.angularFactor,m=l.x*_.x,g=l.y*_.y,x=l.z*_.z;r.x+=t*(p[0]*m+p[1]*g+p[2]*x),r.y+=t*(p[3]*m+p[4]*g+p[5]*x),r.z+=t*(p[6]*m+p[7]*g+p[8]*x),o.x+=s.x*t,o.y+=s.y*t,o.z+=s.z*t,c.integrate(this.angularVelocity,t,this.angularFactor,c),e&&(n?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}Ot.idCounter=0;Ot.COLLIDE_EVENT_NAME="collide";Ot.DYNAMIC=Yu.DYNAMIC;Ot.STATIC=Yu.STATIC;Ot.KINEMATIC=Yu.KINEMATIC;Ot.AWAKE=$u.AWAKE;Ot.SLEEPY=$u.SLEEPY;Ot.SLEEPING=$u.SLEEPING;Ot.wakeupEvent={type:"wakeup"};Ot.sleepyEvent={type:"sleepy"};Ot.sleepEvent={type:"sleep"};const FE=new T,UE=new Ue,OE=new Cn,BE=new Xn,zE=new Xn;new Xn;const kE=new T,VE=new T,HE=new T,GE=new T,WE=new T,qE=new T,XE=new T,jE=new T;class YE{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!(!(t.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&t.collisionFilterMask)||(t.type&Ot.STATIC||t.sleepState===Ot.SLEEPING)&&(e.type&Ot.STATIC||e.sleepState===Ot.SLEEPING))}intersectionTest(t,e,n,s){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,s):this.doBoundingSphereBroadphase(t,e,n,s)}doBoundingSphereBroadphase(t,e,n,s){const r=$E;e.position.vsub(t.position,r);const o=(t.boundingRadius+e.boundingRadius)**2;r.lengthSquared()<o&&(n.push(t),s.push(e))}doBoundingBoxBroadphase(t,e,n,s){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),s.push(e))}makePairsUnique(t,e){const n=KE,s=ZE,r=JE,o=t.length;for(let a=0;a!==o;a++)s[a]=t[a],r[a]=e[a];t.length=0,e.length=0;for(let a=0;a!==o;a++){const l=s[a].id,c=r[a].id,u=l<c?`${l},${c}`:`${c},${l}`;n[u]=a,n.keys.push(u)}for(let a=0;a!==n.keys.length;a++){const l=n.keys.pop(),c=n[l];t.push(s[c]),e.push(r[c]),delete n[l]}}setWorld(t){}static boundingSphereCheck(t,e){const n=new T;t.position.vsub(e.position,n);const s=t.shapes[0],r=e.shapes[0];return Math.pow(s.boundingSphereRadius+r.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const $E=new T;new T;new Ue;new T;const KE={keys:[]},ZE=[],JE=[];new T;new T;new T;class QE extends YE{constructor(){super()}collisionPairs(t,e,n){const s=t.bodies,r=s.length;let o,a;for(let l=0;l!==r;l++)for(let c=0;c!==l;c++)o=s[l],a=s[c],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,e,n)}aabbQuery(t,e,n){n===void 0&&(n=[]);for(let s=0;s<t.bodies.length;s++){const r=t.bodies[s];r.aabbNeedsUpdate&&r.updateAABB(),r.aabb.overlaps(e)&&n.push(r)}return n}}class Da{constructor(){this.rayFromWorld=new T,this.rayToWorld=new T,this.hitNormalWorld=new T,this.hitPointWorld=new T,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,s,r,o,a){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(s),this.shape=r,this.body=o,this.distance=a}}let _m,vm,xm,ym,Sm,Mm,bm;const Ku={CLOSEST:1,ANY:2,ALL:4};_m=Vt.types.SPHERE;vm=Vt.types.PLANE;xm=Vt.types.BOX;ym=Vt.types.CYLINDER;Sm=Vt.types.CONVEXPOLYHEDRON;Mm=Vt.types.HEIGHTFIELD;bm=Vt.types.TRIMESH;class Be{get[_m](){return this._intersectSphere}get[vm](){return this._intersectPlane}get[xm](){return this._intersectBox}get[ym](){return this._intersectConvex}get[Sm](){return this._intersectConvex}get[Mm](){return this._intersectHeightfield}get[bm](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new T),e===void 0&&(e=new T),this.from=t.clone(),this.to=e.clone(),this.direction=new T,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=Be.ANY,this.result=new Da,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||Be.ANY,this.result=e.result||new Da,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Kd),Xl.length=0,t.broadphase.aabbQuery(t,Kd,Xl),this.intersectBodies(Xl),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!t.collisionResponse||!(this.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&this.collisionFilterMask))return;const s=tT,r=eT;for(let o=0,a=t.shapes.length;o<a;o++){const l=t.shapes[o];if(!(n&&!l.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[o],r),t.quaternion.vmult(t.shapeOffsets[o],s),s.vadd(t.position,s),this.intersectShape(l,r,s,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,s=t.length;!this.result.shouldStop&&n<s;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,s){const r=this.from;if(mT(r,this.direction,n)>t.boundingSphereRadius)return;const a=this[t.type];a&&a.call(this,t,e,n,s,t)}_intersectBox(t,e,n,s,r){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,s,r)}_intersectPlane(t,e,n,s,r){const o=this.from,a=this.to,l=this.direction,c=new T(0,0,1);e.vmult(c,c);const u=new T;o.vsub(n,u);const d=u.dot(c);a.vsub(n,u);const h=u.dot(c);if(d*h>0||o.distanceTo(a)<d)return;const f=c.dot(l);if(Math.abs(f)<this.precision)return;const p=new T,_=new T,m=new T;o.vsub(n,p);const g=-c.dot(p)/f;l.scale(g,_),o.vadd(_,m),this.reportIntersection(c,m,r,s,-1)}getAABB(t){const{lowerBound:e,upperBound:n}=t,s=this.to,r=this.from;e.x=Math.min(s.x,r.x),e.y=Math.min(s.y,r.y),e.z=Math.min(s.z,r.z),n.x=Math.max(s.x,r.x),n.y=Math.max(s.y,r.y),n.z=Math.max(s.z,r.z)}_intersectHeightfield(t,e,n,s,r){t.data,t.elementSize;const o=nT;o.from.copy(this.from),o.to.copy(this.to),de.pointToLocalFrame(n,e,o.from,o.from),de.pointToLocalFrame(n,e,o.to,o.to),o.updateDirection();const a=iT;let l,c,u,d;l=c=0,u=d=t.data.length-1;const h=new Cn;o.getAABB(h),t.getIndexOfPosition(h.lowerBound.x,h.lowerBound.y,a,!0),l=Math.max(l,a[0]),c=Math.max(c,a[1]),t.getIndexOfPosition(h.upperBound.x,h.upperBound.y,a,!0),u=Math.min(u,a[0]+1),d=Math.min(d,a[1]+1);for(let f=l;f<u;f++)for(let p=c;p<d;p++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(f,p,h),!!h.overlapsRay(o)){if(t.getConvexTrianglePillar(f,p,!1),de.pointToWorldFrame(n,e,t.pillarOffset,Qo),this._intersectConvex(t.pillarConvex,e,Qo,s,r,Zd),this.result.shouldStop)return;t.getConvexTrianglePillar(f,p,!0),de.pointToWorldFrame(n,e,t.pillarOffset,Qo),this._intersectConvex(t.pillarConvex,e,Qo,s,r,Zd)}}}_intersectSphere(t,e,n,s,r){const o=this.from,a=this.to,l=t.radius,c=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,u=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),d=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-l**2,h=u**2-4*c*d,f=sT,p=rT;if(!(h<0))if(h===0)o.lerp(a,h,f),f.vsub(n,p),p.normalize(),this.reportIntersection(p,f,r,s,-1);else{const _=(-u-Math.sqrt(h))/(2*c),m=(-u+Math.sqrt(h))/(2*c);if(_>=0&&_<=1&&(o.lerp(a,_,f),f.vsub(n,p),p.normalize(),this.reportIntersection(p,f,r,s,-1)),this.result.shouldStop)return;m>=0&&m<=1&&(o.lerp(a,m,f),f.vsub(n,p),p.normalize(),this.reportIntersection(p,f,r,s,-1))}}_intersectConvex(t,e,n,s,r,o){const a=oT,l=Jd,c=o&&o.faceList||null,u=t.faces,d=t.vertices,h=t.faceNormals,f=this.direction,p=this.from,_=this.to,m=p.distanceTo(_),g=c?c.length:u.length,x=this.result;for(let S=0;!x.shouldStop&&S<g;S++){const v=c?c[S]:S,M=u[v],w=h[v],A=e,L=n;l.copy(d[M[0]]),A.vmult(l,l),l.vadd(L,l),l.vsub(p,l),A.vmult(w,a);const b=f.dot(a);if(Math.abs(b)<this.precision)continue;const E=a.dot(l)/b;if(!(E<0)){f.scale(E,dn),dn.vadd(p,dn),kn.copy(d[M[0]]),A.vmult(kn,kn),L.vadd(kn,kn);for(let D=1;!x.shouldStop&&D<M.length-1;D++){Qn.copy(d[M[D]]),ti.copy(d[M[D+1]]),A.vmult(Qn,Qn),A.vmult(ti,ti),L.vadd(Qn,Qn),L.vadd(ti,ti);const k=dn.distanceTo(p);!(Be.pointInTriangle(dn,kn,Qn,ti)||Be.pointInTriangle(dn,Qn,kn,ti))||k>m||this.reportIntersection(a,dn,r,s,v)}}}}_intersectTrimesh(t,e,n,s,r,o){const a=aT,l=fT,c=pT,u=Jd,d=lT,h=cT,f=uT,p=dT,_=hT,m=t.indices;t.vertices;const g=this.from,x=this.to,S=this.direction;c.position.copy(n),c.quaternion.copy(e),de.vectorToLocalFrame(n,e,S,d),de.pointToLocalFrame(n,e,g,h),de.pointToLocalFrame(n,e,x,f),f.x*=t.scale.x,f.y*=t.scale.y,f.z*=t.scale.z,h.x*=t.scale.x,h.y*=t.scale.y,h.z*=t.scale.z,f.vsub(h,d),d.normalize();const v=h.distanceSquared(f);t.tree.rayQuery(this,c,l);for(let M=0,w=l.length;!this.result.shouldStop&&M!==w;M++){const A=l[M];t.getNormal(A,a),t.getVertex(m[A*3],kn),kn.vsub(h,u);const L=d.dot(a),b=a.dot(u)/L;if(b<0)continue;d.scale(b,dn),dn.vadd(h,dn),t.getVertex(m[A*3+1],Qn),t.getVertex(m[A*3+2],ti);const E=dn.distanceSquared(h);!(Be.pointInTriangle(dn,Qn,kn,ti)||Be.pointInTriangle(dn,kn,Qn,ti))||E>v||(de.vectorToWorldFrame(e,a,_),de.pointToWorldFrame(n,e,dn,p),this.reportIntersection(_,p,r,s,A))}l.length=0}reportIntersection(t,e,n,s,r){const o=this.from,a=this.to,l=o.distanceTo(e),c=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(c.hitFaceIndex=typeof r<"u"?r:-1,this.mode){case Be.ALL:this.hasHit=!0,c.set(o,a,t,e,n,s,l),c.hasHit=!0,this.callback(c);break;case Be.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(o,a,t,e,n,s,l));break;case Be.ANY:this.hasHit=!0,c.hasHit=!0,c.set(o,a,t,e,n,s,l),c.shouldStop=!0;break}}static pointInTriangle(t,e,n,s){s.vsub(e,Es),n.vsub(e,kr),t.vsub(e,jl);const r=Es.dot(Es),o=Es.dot(kr),a=Es.dot(jl),l=kr.dot(kr),c=kr.dot(jl);let u,d;return(u=l*a-o*c)>=0&&(d=r*c-o*a)>=0&&u+d<r*l-o*o}}Be.CLOSEST=Ku.CLOSEST;Be.ANY=Ku.ANY;Be.ALL=Ku.ALL;const Kd=new Cn,Xl=[],kr=new T,jl=new T,tT=new T,eT=new Ue,dn=new T,kn=new T,Qn=new T,ti=new T;new T;new Da;const Zd={faceList:[0]},Qo=new T,nT=new Be,iT=[],sT=new T,rT=new T,oT=new T;new T;new T;const Jd=new T,aT=new T,lT=new T,cT=new T,uT=new T,hT=new T,dT=new T;new Cn;const fT=[],pT=new de,Es=new T,ta=new T;function mT(i,t,e){e.vsub(i,Es);const n=Es.dot(t);return t.scale(n,ta),ta.vadd(i,ta),e.distanceTo(ta)}class gT{static defaults(t,e){t===void 0&&(t={});for(let n in e)n in t||(t[n]=e[n]);return t}}class Qd{constructor(){this.spatial=new T,this.rotational=new T}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}}class wo{constructor(t,e,n,s){n===void 0&&(n=-1e6),s===void 0&&(s=1e6),this.id=wo.idCounter++,this.minForce=n,this.maxForce=s,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new Qd,this.jacobianElementB=new Qd,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){const s=e,r=t,o=n;this.a=4/(o*(1+4*s)),this.b=4*s/(1+4*s),this.eps=4/(o*o*r*(1+4*s))}computeB(t,e,n){const s=this.computeGW(),r=this.computeGq(),o=this.computeGiMf();return-r*t-s*e-o*n}computeGq(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,r=n.position,o=s.position;return t.spatial.dot(r)+e.spatial.dot(o)}computeGW(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,r=n.velocity,o=s.velocity,a=n.angularVelocity,l=s.angularVelocity;return t.multiplyVectors(r,a)+e.multiplyVectors(o,l)}computeGWlambda(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,r=n.vlambda,o=s.vlambda,a=n.wlambda,l=s.wlambda;return t.multiplyVectors(r,a)+e.multiplyVectors(o,l)}computeGiMf(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,r=n.force,o=n.torque,a=s.force,l=s.torque,c=n.invMassSolve,u=s.invMassSolve;return r.scale(c,tf),a.scale(u,ef),n.invInertiaWorldSolve.vmult(o,nf),s.invInertiaWorldSolve.vmult(l,sf),t.multiplyVectors(tf,nf)+e.multiplyVectors(ef,sf)}computeGiMGt(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,r=n.invMassSolve,o=s.invMassSolve,a=n.invInertiaWorldSolve,l=s.invInertiaWorldSolve;let c=r+o;return a.vmult(t.rotational,ea),c+=ea.dot(t.rotational),l.vmult(e.rotational,ea),c+=ea.dot(e.rotational),c}addToWlambda(t){const e=this.jacobianElementA,n=this.jacobianElementB,s=this.bi,r=this.bj,o=_T;s.vlambda.addScaledVector(s.invMassSolve*t,e.spatial,s.vlambda),r.vlambda.addScaledVector(r.invMassSolve*t,n.spatial,r.vlambda),s.invInertiaWorldSolve.vmult(e.rotational,o),s.wlambda.addScaledVector(t,o,s.wlambda),r.invInertiaWorldSolve.vmult(n.rotational,o),r.wlambda.addScaledVector(t,o,r.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}wo.idCounter=0;const tf=new T,ef=new T,nf=new T,sf=new T,ea=new T,_T=new T;class vT extends wo{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,0,n),this.restitution=0,this.ri=new T,this.rj=new T,this.ni=new T}computeB(t){const e=this.a,n=this.b,s=this.bi,r=this.bj,o=this.ri,a=this.rj,l=xT,c=yT,u=s.velocity,d=s.angularVelocity;s.force,s.torque;const h=r.velocity,f=r.angularVelocity;r.force,r.torque;const p=ST,_=this.jacobianElementA,m=this.jacobianElementB,g=this.ni;o.cross(g,l),a.cross(g,c),g.negate(_.spatial),l.negate(_.rotational),m.spatial.copy(g),m.rotational.copy(c),p.copy(r.position),p.vadd(a,p),p.vsub(s.position,p),p.vsub(o,p);const x=g.dot(p),S=this.restitution+1,v=S*h.dot(g)-S*u.dot(g)+f.dot(c)-d.dot(l),M=this.computeGiMf();return-x*e-v*n-t*M}getImpactVelocityAlongNormal(){const t=MT,e=bT,n=wT,s=ET,r=TT;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,s),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(s,e),t.vsub(e,r),this.ni.dot(r)}}const xT=new T,yT=new T,ST=new T,MT=new T,bT=new T,wT=new T,ET=new T,TT=new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;class rf extends wo{constructor(t,e,n){super(t,e,-n,n),this.ri=new T,this.rj=new T,this.t=new T}computeB(t){this.a;const e=this.b;this.bi,this.bj;const n=this.ri,s=this.rj,r=AT,o=CT,a=this.t;n.cross(a,r),s.cross(a,o);const l=this.jacobianElementA,c=this.jacobianElementB;a.negate(l.spatial),r.negate(l.rotational),c.spatial.copy(a),c.rotational.copy(o);const u=this.computeGW(),d=this.computeGiMf();return-u*e-t*d}}const AT=new T,CT=new T;class Ps{constructor(t,e,n){n=gT.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=Ps.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}Ps.idCounter=0;class Is{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=Is.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}}Is.idCounter=0;new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;new Be;new T;new T;new T;new T(1,0,0),new T(0,1,0),new T(0,0,1);new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;class RT extends Vt{constructor(){super({type:Vt.types.PLANE}),this.worldNormal=new T,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(t){const e=this.worldNormal;e.set(0,0,1),t.vmult(e,e),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(t,e){return e===void 0&&(e=new T),e}volume(){return Number.MAX_VALUE}calculateWorldAABB(t,e,n,s){Mi.set(0,0,1),e.vmult(Mi,Mi);const r=Number.MAX_VALUE;n.set(-r,-r,-r),s.set(r,r,r),Mi.x===1?s.x=t.x:Mi.x===-1&&(n.x=t.x),Mi.y===1?s.y=t.y:Mi.y===-1&&(n.y=t.y),Mi.z===1?s.z=t.z:Mi.z===-1&&(n.z=t.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}}const Mi=new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;new T;new Cn;new T;new Cn;new T;new T;new T;new T;new T;new T;new T;new Cn;new T;new de;new Cn;class PT{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){const e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}}class wm extends PT{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0;const s=this.iterations,r=this.tolerance*this.tolerance,o=this.equations,a=o.length,l=e.bodies,c=l.length,u=t;let d,h,f,p,_,m;if(a!==0)for(let v=0;v!==c;v++)l[v].updateSolveMassProperties();const g=LT,x=DT,S=IT;g.length=a,x.length=a,S.length=a;for(let v=0;v!==a;v++){const M=o[v];S[v]=0,x[v]=M.computeB(u),g[v]=1/M.computeC()}if(a!==0){for(let w=0;w!==c;w++){const A=l[w],L=A.vlambda,b=A.wlambda;L.set(0,0,0),b.set(0,0,0)}for(n=0;n!==s;n++){p=0;for(let w=0;w!==a;w++){const A=o[w];d=x[w],h=g[w],m=S[w],_=A.computeGWlambda(),f=h*(d-_-A.eps*m),m+f<A.minForce?f=A.minForce-m:m+f>A.maxForce&&(f=A.maxForce-m),S[w]+=f,p+=f>0?f:-f,A.addToWlambda(f)}if(p*p<r)break}for(let w=0;w!==c;w++){const A=l[w],L=A.velocity,b=A.angularVelocity;A.vlambda.vmul(A.linearFactor,A.vlambda),L.vadd(A.vlambda,L),A.wlambda.vmul(A.angularFactor,A.wlambda),b.vadd(A.wlambda,b)}let v=o.length;const M=1/u;for(;v--;)o[v].multiplier=S[v]*M}return n}}const IT=[],LT=[],DT=[];class NT{constructor(){this.objects=[],this.type=Object}release(){const t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){const e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}}class FT extends NT{constructor(){super(...arguments),this.type=T}constructObject(){return new T}}const Ce={sphereSphere:Vt.types.SPHERE,spherePlane:Vt.types.SPHERE|Vt.types.PLANE,boxBox:Vt.types.BOX|Vt.types.BOX,sphereBox:Vt.types.SPHERE|Vt.types.BOX,planeBox:Vt.types.PLANE|Vt.types.BOX,convexConvex:Vt.types.CONVEXPOLYHEDRON,sphereConvex:Vt.types.SPHERE|Vt.types.CONVEXPOLYHEDRON,planeConvex:Vt.types.PLANE|Vt.types.CONVEXPOLYHEDRON,boxConvex:Vt.types.BOX|Vt.types.CONVEXPOLYHEDRON,sphereHeightfield:Vt.types.SPHERE|Vt.types.HEIGHTFIELD,boxHeightfield:Vt.types.BOX|Vt.types.HEIGHTFIELD,convexHeightfield:Vt.types.CONVEXPOLYHEDRON|Vt.types.HEIGHTFIELD,sphereParticle:Vt.types.PARTICLE|Vt.types.SPHERE,planeParticle:Vt.types.PLANE|Vt.types.PARTICLE,boxParticle:Vt.types.BOX|Vt.types.PARTICLE,convexParticle:Vt.types.PARTICLE|Vt.types.CONVEXPOLYHEDRON,cylinderCylinder:Vt.types.CYLINDER,sphereCylinder:Vt.types.SPHERE|Vt.types.CYLINDER,planeCylinder:Vt.types.PLANE|Vt.types.CYLINDER,boxCylinder:Vt.types.BOX|Vt.types.CYLINDER,convexCylinder:Vt.types.CONVEXPOLYHEDRON|Vt.types.CYLINDER,heightfieldCylinder:Vt.types.HEIGHTFIELD|Vt.types.CYLINDER,particleCylinder:Vt.types.PARTICLE|Vt.types.CYLINDER,sphereTrimesh:Vt.types.SPHERE|Vt.types.TRIMESH,planeTrimesh:Vt.types.PLANE|Vt.types.TRIMESH};class UT{get[Ce.sphereSphere](){return this.sphereSphere}get[Ce.spherePlane](){return this.spherePlane}get[Ce.boxBox](){return this.boxBox}get[Ce.sphereBox](){return this.sphereBox}get[Ce.planeBox](){return this.planeBox}get[Ce.convexConvex](){return this.convexConvex}get[Ce.sphereConvex](){return this.sphereConvex}get[Ce.planeConvex](){return this.planeConvex}get[Ce.boxConvex](){return this.boxConvex}get[Ce.sphereHeightfield](){return this.sphereHeightfield}get[Ce.boxHeightfield](){return this.boxHeightfield}get[Ce.convexHeightfield](){return this.convexHeightfield}get[Ce.sphereParticle](){return this.sphereParticle}get[Ce.planeParticle](){return this.planeParticle}get[Ce.boxParticle](){return this.boxParticle}get[Ce.convexParticle](){return this.convexParticle}get[Ce.cylinderCylinder](){return this.convexConvex}get[Ce.sphereCylinder](){return this.sphereConvex}get[Ce.planeCylinder](){return this.planeConvex}get[Ce.boxCylinder](){return this.boxConvex}get[Ce.convexCylinder](){return this.convexConvex}get[Ce.heightfieldCylinder](){return this.heightfieldCylinder}get[Ce.particleCylinder](){return this.particleCylinder}get[Ce.sphereTrimesh](){return this.sphereTrimesh}get[Ce.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new FT,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,s,r,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=t,a.bj=e):a=new vT(t,e),a.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&s.collisionResponse;const l=this.currentContactMaterial;a.restitution=l.restitution,a.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);const c=n.material||t.material,u=s.material||e.material;return c&&u&&c.restitution>=0&&u.restitution>=0&&(a.restitution=c.restitution*u.restitution),a.si=r||n,a.sj=o||s,a}createFrictionEquationsFromContact(t,e){const n=t.bi,s=t.bj,r=t.si,o=t.sj,a=this.world,l=this.currentContactMaterial;let c=l.friction;const u=r.material||n.material,d=o.material||s.material;if(u&&d&&u.friction>=0&&d.friction>=0&&(c=u.friction*d.friction),c>0){const h=c*(a.frictionGravity||a.gravity).length();let f=n.invMass+s.invMass;f>0&&(f=1/f);const p=this.frictionEquationPool,_=p.length?p.pop():new rf(n,s,h*f),m=p.length?p.pop():new rf(n,s,h*f);return _.bi=m.bi=n,_.bj=m.bj=s,_.minForce=m.minForce=-h*f,_.maxForce=m.maxForce=h*f,_.ri.copy(t.ri),_.rj.copy(t.rj),m.ri.copy(t.ri),m.rj.copy(t.rj),t.ni.tangents(_.t,m.t),_.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),m.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),_.enabled=m.enabled=t.enabled,e.push(_,m),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;const n=this.frictionResult[this.frictionResult.length-2],s=this.frictionResult[this.frictionResult.length-1];ys.setZero(),tr.setZero(),er.setZero();const r=e.bi;e.bj;for(let a=0;a!==t;a++)e=this.result[this.result.length-1-a],e.bi!==r?(ys.vadd(e.ni,ys),tr.vadd(e.ri,tr),er.vadd(e.rj,er)):(ys.vsub(e.ni,ys),tr.vadd(e.rj,tr),er.vadd(e.ri,er));const o=1/t;tr.scale(o,n.ri),er.scale(o,n.rj),s.ri.copy(n.ri),s.rj.copy(n.rj),ys.normalize(),ys.tangents(n.t,s.t)}getContacts(t,e,n,s,r,o,a){this.contactPointPool=r,this.frictionEquationPool=a,this.result=s,this.frictionResult=o;const l=zT,c=kT,u=OT,d=BT;for(let h=0,f=t.length;h!==f;h++){const p=t[h],_=e[h];let m=null;p.material&&_.material&&(m=n.getContactMaterial(p.material,_.material)||null);const g=p.type&Ot.KINEMATIC&&_.type&Ot.STATIC||p.type&Ot.STATIC&&_.type&Ot.KINEMATIC||p.type&Ot.KINEMATIC&&_.type&Ot.KINEMATIC;for(let x=0;x<p.shapes.length;x++){p.quaternion.mult(p.shapeOrientations[x],l),p.quaternion.vmult(p.shapeOffsets[x],u),u.vadd(p.position,u);const S=p.shapes[x];for(let v=0;v<_.shapes.length;v++){_.quaternion.mult(_.shapeOrientations[v],c),_.quaternion.vmult(_.shapeOffsets[v],d),d.vadd(_.position,d);const M=_.shapes[v];if(!(S.collisionFilterMask&M.collisionFilterGroup&&M.collisionFilterMask&S.collisionFilterGroup)||u.distanceTo(d)>S.boundingSphereRadius+M.boundingSphereRadius)continue;let w=null;S.material&&M.material&&(w=n.getContactMaterial(S.material,M.material)||null),this.currentContactMaterial=w||m||n.defaultContactMaterial;const A=S.type|M.type,L=this[A];if(L){let b=!1;S.type<M.type?b=L.call(this,S,M,u,d,l,c,p,_,S,M,g):b=L.call(this,M,S,d,u,c,l,_,p,S,M,g),b&&g&&(n.shapeOverlapKeeper.set(S.id,M.id),n.bodyOverlapKeeper.set(p.id,_.id))}}}}}sphereSphere(t,e,n,s,r,o,a,l,c,u,d){if(d)return n.distanceSquared(s)<(t.radius+e.radius)**2;const h=this.createContactEquation(a,l,t,e,c,u);s.vsub(n,h.ni),h.ni.normalize(),h.ri.copy(h.ni),h.rj.copy(h.ni),h.ri.scale(t.radius,h.ri),h.rj.scale(-e.radius,h.rj),h.ri.vadd(n,h.ri),h.ri.vsub(a.position,h.ri),h.rj.vadd(s,h.rj),h.rj.vsub(l.position,h.rj),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}spherePlane(t,e,n,s,r,o,a,l,c,u,d){const h=this.createContactEquation(a,l,t,e,c,u);if(h.ni.set(0,0,1),o.vmult(h.ni,h.ni),h.ni.negate(h.ni),h.ni.normalize(),h.ni.scale(t.radius,h.ri),n.vsub(s,na),h.ni.scale(h.ni.dot(na),of),na.vsub(of,h.rj),-na.dot(h.ni)<=t.radius){if(d)return!0;const f=h.ri,p=h.rj;f.vadd(n,f),f.vsub(a.position,f),p.vadd(s,p),p.vsub(l.position,p),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}}boxBox(t,e,n,s,r,o,a,l,c,u,d){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,s,r,o,a,l,t,e,d)}sphereBox(t,e,n,s,r,o,a,l,c,u,d){const h=this.v3pool,f=d1;n.vsub(s,ia),e.getSideNormals(f,o);const p=t.radius;let _=!1;const m=p1,g=m1,x=g1;let S=null,v=0,M=0,w=0,A=null;for(let O=0,H=f.length;O!==H&&_===!1;O++){const q=c1;q.copy(f[O]);const ut=q.length();q.normalize();const gt=ia.dot(q);if(gt<ut+p&&gt>0){const dt=u1,_t=h1;dt.copy(f[(O+1)%3]),_t.copy(f[(O+2)%3]);const Lt=dt.length(),ot=_t.length();dt.normalize(),_t.normalize();const et=ia.dot(dt),X=ia.dot(_t);if(et<Lt&&et>-Lt&&X<ot&&X>-ot){const Y=Math.abs(gt-ut-p);if((A===null||Y<A)&&(A=Y,M=et,w=X,S=ut,m.copy(q),g.copy(dt),x.copy(_t),v++,d))return!0}}}if(v){_=!0;const O=this.createContactEquation(a,l,t,e,c,u);m.scale(-p,O.ri),O.ni.copy(m),O.ni.negate(O.ni),m.scale(S,m),g.scale(M,g),m.vadd(g,m),x.scale(w,x),m.vadd(x,O.rj),O.ri.vadd(n,O.ri),O.ri.vsub(a.position,O.ri),O.rj.vadd(s,O.rj),O.rj.vsub(l.position,O.rj),this.result.push(O),this.createFrictionEquationsFromContact(O,this.frictionResult)}let L=h.get();const b=f1;for(let O=0;O!==2&&!_;O++)for(let H=0;H!==2&&!_;H++)for(let q=0;q!==2&&!_;q++)if(L.set(0,0,0),O?L.vadd(f[0],L):L.vsub(f[0],L),H?L.vadd(f[1],L):L.vsub(f[1],L),q?L.vadd(f[2],L):L.vsub(f[2],L),s.vadd(L,b),b.vsub(n,b),b.lengthSquared()<p*p){if(d)return!0;_=!0;const ut=this.createContactEquation(a,l,t,e,c,u);ut.ri.copy(b),ut.ri.normalize(),ut.ni.copy(ut.ri),ut.ri.scale(p,ut.ri),ut.rj.copy(L),ut.ri.vadd(n,ut.ri),ut.ri.vsub(a.position,ut.ri),ut.rj.vadd(s,ut.rj),ut.rj.vsub(l.position,ut.rj),this.result.push(ut),this.createFrictionEquationsFromContact(ut,this.frictionResult)}h.release(L),L=null;const E=h.get(),D=h.get(),k=h.get(),U=h.get(),W=h.get(),B=f.length;for(let O=0;O!==B&&!_;O++)for(let H=0;H!==B&&!_;H++)if(O%3!==H%3){f[H].cross(f[O],E),E.normalize(),f[O].vadd(f[H],D),k.copy(n),k.vsub(D,k),k.vsub(s,k);const q=k.dot(E);E.scale(q,U);let ut=0;for(;ut===O%3||ut===H%3;)ut++;W.copy(n),W.vsub(U,W),W.vsub(D,W),W.vsub(s,W);const gt=Math.abs(q),dt=W.length();if(gt<f[ut].length()&&dt<p){if(d)return!0;_=!0;const _t=this.createContactEquation(a,l,t,e,c,u);D.vadd(U,_t.rj),_t.rj.copy(_t.rj),W.negate(_t.ni),_t.ni.normalize(),_t.ri.copy(_t.rj),_t.ri.vadd(s,_t.ri),_t.ri.vsub(n,_t.ri),_t.ri.normalize(),_t.ri.scale(p,_t.ri),_t.ri.vadd(n,_t.ri),_t.ri.vsub(a.position,_t.ri),_t.rj.vadd(s,_t.rj),_t.rj.vsub(l.position,_t.rj),this.result.push(_t),this.createFrictionEquationsFromContact(_t,this.frictionResult)}}h.release(E,D,k,U,W)}planeBox(t,e,n,s,r,o,a,l,c,u,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,s,r,o,a,l,t,e,d)}convexConvex(t,e,n,s,r,o,a,l,c,u,d,h,f){const p=I1;if(!(n.distanceTo(s)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,r,s,o,p,h,f)){const _=[],m=L1;t.clipAgainstHull(n,r,e,s,o,p,-100,100,_);let g=0;for(let x=0;x!==_.length;x++){if(d)return!0;const S=this.createContactEquation(a,l,t,e,c,u),v=S.ri,M=S.rj;p.negate(S.ni),_[x].normal.negate(m),m.scale(_[x].depth,m),_[x].point.vadd(m,v),M.copy(_[x].point),v.vsub(n,v),M.vsub(s,M),v.vadd(n,v),v.vsub(a.position,v),M.vadd(s,M),M.vsub(l.position,M),this.result.push(S),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(S,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}}sphereConvex(t,e,n,s,r,o,a,l,c,u,d){const h=this.v3pool;n.vsub(s,_1);const f=e.faceNormals,p=e.faces,_=e.vertices,m=t.radius;let g=!1;for(let x=0;x!==_.length;x++){const S=_[x],v=S1;o.vmult(S,v),s.vadd(v,v);const M=y1;if(v.vsub(n,M),M.lengthSquared()<m*m){if(d)return!0;g=!0;const w=this.createContactEquation(a,l,t,e,c,u);w.ri.copy(M),w.ri.normalize(),w.ni.copy(w.ri),w.ri.scale(m,w.ri),v.vsub(s,w.rj),w.ri.vadd(n,w.ri),w.ri.vsub(a.position,w.ri),w.rj.vadd(s,w.rj),w.rj.vsub(l.position,w.rj),this.result.push(w),this.createFrictionEquationsFromContact(w,this.frictionResult);return}}for(let x=0,S=p.length;x!==S&&g===!1;x++){const v=f[x],M=p[x],w=M1;o.vmult(v,w);const A=b1;o.vmult(_[M[0]],A),A.vadd(s,A);const L=w1;w.scale(-m,L),n.vadd(L,L);const b=E1;L.vsub(A,b);const E=b.dot(w),D=T1;if(n.vsub(A,D),E<0&&D.dot(w)>0){const k=[];for(let U=0,W=M.length;U!==W;U++){const B=h.get();o.vmult(_[M[U]],B),s.vadd(B,B),k.push(B)}if(l1(k,w,n)){if(d)return!0;g=!0;const U=this.createContactEquation(a,l,t,e,c,u);w.scale(-m,U.ri),w.negate(U.ni);const W=h.get();w.scale(-E,W);const B=h.get();w.scale(-m,B),n.vsub(s,U.rj),U.rj.vadd(B,U.rj),U.rj.vadd(W,U.rj),U.rj.vadd(s,U.rj),U.rj.vsub(l.position,U.rj),U.ri.vadd(n,U.ri),U.ri.vsub(a.position,U.ri),h.release(W),h.release(B),this.result.push(U),this.createFrictionEquationsFromContact(U,this.frictionResult);for(let O=0,H=k.length;O!==H;O++)h.release(k[O]);return}else for(let U=0;U!==M.length;U++){const W=h.get(),B=h.get();o.vmult(_[M[(U+1)%M.length]],W),o.vmult(_[M[(U+2)%M.length]],B),s.vadd(W,W),s.vadd(B,B);const O=v1;B.vsub(W,O);const H=x1;O.unit(H);const q=h.get(),ut=h.get();n.vsub(W,ut);const gt=ut.dot(H);H.scale(gt,q),q.vadd(W,q);const dt=h.get();if(q.vsub(n,dt),gt>0&&gt*gt<O.lengthSquared()&&dt.lengthSquared()<m*m){if(d)return!0;const _t=this.createContactEquation(a,l,t,e,c,u);q.vsub(s,_t.rj),q.vsub(n,_t.ni),_t.ni.normalize(),_t.ni.scale(m,_t.ri),_t.rj.vadd(s,_t.rj),_t.rj.vsub(l.position,_t.rj),_t.ri.vadd(n,_t.ri),_t.ri.vsub(a.position,_t.ri),this.result.push(_t),this.createFrictionEquationsFromContact(_t,this.frictionResult);for(let Lt=0,ot=k.length;Lt!==ot;Lt++)h.release(k[Lt]);h.release(W),h.release(B),h.release(q),h.release(dt),h.release(ut);return}h.release(W),h.release(B),h.release(q),h.release(dt),h.release(ut)}for(let U=0,W=k.length;U!==W;U++)h.release(k[U])}}}planeConvex(t,e,n,s,r,o,a,l,c,u,d){const h=A1,f=C1;f.set(0,0,1),r.vmult(f,f);let p=0;const _=R1;for(let m=0;m!==e.vertices.length;m++)if(h.copy(e.vertices[m]),o.vmult(h,h),s.vadd(h,h),h.vsub(n,_),f.dot(_)<=0){if(d)return!0;const x=this.createContactEquation(a,l,t,e,c,u),S=P1;f.scale(f.dot(_),S),h.vsub(S,S),S.vsub(n,x.ri),x.ni.copy(f),h.vsub(s,x.rj),x.ri.vadd(n,x.ri),x.ri.vsub(a.position,x.ri),x.rj.vadd(s,x.rj),x.rj.vsub(l.position,x.rj),this.result.push(x),p++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(x,this.frictionResult)}this.enableFrictionReduction&&p&&this.createFrictionFromAverage(p)}boxConvex(t,e,n,s,r,o,a,l,c,u,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,s,r,o,a,l,t,e,d)}sphereHeightfield(t,e,n,s,r,o,a,l,c,u,d){const h=e.data,f=t.radius,p=e.elementSize,_=W1,m=G1;de.pointToLocalFrame(s,o,n,m);let g=Math.floor((m.x-f)/p)-1,x=Math.ceil((m.x+f)/p)+1,S=Math.floor((m.y-f)/p)-1,v=Math.ceil((m.y+f)/p)+1;if(x<0||v<0||g>h.length||S>h[0].length)return;g<0&&(g=0),x<0&&(x=0),S<0&&(S=0),v<0&&(v=0),g>=h.length&&(g=h.length-1),x>=h.length&&(x=h.length-1),v>=h[0].length&&(v=h[0].length-1),S>=h[0].length&&(S=h[0].length-1);const M=[];e.getRectMinMax(g,S,x,v,M);const w=M[0],A=M[1];if(m.z-f>A||m.z+f<w)return;const L=this.result;for(let b=g;b<x;b++)for(let E=S;E<v;E++){const D=L.length;let k=!1;if(e.getConvexTrianglePillar(b,E,!1),de.pointToWorldFrame(s,o,e.pillarOffset,_),n.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(k=this.sphereConvex(t,e.pillarConvex,n,_,r,o,a,l,t,e,d)),d&&k||(e.getConvexTrianglePillar(b,E,!0),de.pointToWorldFrame(s,o,e.pillarOffset,_),n.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(k=this.sphereConvex(t,e.pillarConvex,n,_,r,o,a,l,t,e,d)),d&&k))return!0;if(L.length-D>2)return}}boxHeightfield(t,e,n,s,r,o,a,l,c,u,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,s,r,o,a,l,t,e,d)}convexHeightfield(t,e,n,s,r,o,a,l,c,u,d){const h=e.data,f=e.elementSize,p=t.boundingSphereRadius,_=V1,m=H1,g=k1;de.pointToLocalFrame(s,o,n,g);let x=Math.floor((g.x-p)/f)-1,S=Math.ceil((g.x+p)/f)+1,v=Math.floor((g.y-p)/f)-1,M=Math.ceil((g.y+p)/f)+1;if(S<0||M<0||x>h.length||v>h[0].length)return;x<0&&(x=0),S<0&&(S=0),v<0&&(v=0),M<0&&(M=0),x>=h.length&&(x=h.length-1),S>=h.length&&(S=h.length-1),M>=h[0].length&&(M=h[0].length-1),v>=h[0].length&&(v=h[0].length-1);const w=[];e.getRectMinMax(x,v,S,M,w);const A=w[0],L=w[1];if(!(g.z-p>L||g.z+p<A))for(let b=x;b<S;b++)for(let E=v;E<M;E++){let D=!1;if(e.getConvexTrianglePillar(b,E,!1),de.pointToWorldFrame(s,o,e.pillarOffset,_),n.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(D=this.convexConvex(t,e.pillarConvex,n,_,r,o,a,l,null,null,d,m,null)),d&&D||(e.getConvexTrianglePillar(b,E,!0),de.pointToWorldFrame(s,o,e.pillarOffset,_),n.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(D=this.convexConvex(t,e.pillarConvex,n,_,r,o,a,l,null,null,d,m,null)),d&&D))return!0}}sphereParticle(t,e,n,s,r,o,a,l,c,u,d){const h=U1;if(h.set(0,0,1),s.vsub(n,h),h.lengthSquared()<=t.radius*t.radius){if(d)return!0;const p=this.createContactEquation(l,a,e,t,c,u);h.normalize(),p.rj.copy(h),p.rj.scale(t.radius,p.rj),p.ni.copy(h),p.ni.negate(p.ni),p.ri.set(0,0,0),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}}planeParticle(t,e,n,s,r,o,a,l,c,u,d){const h=D1;h.set(0,0,1),a.quaternion.vmult(h,h);const f=N1;if(s.vsub(a.position,f),h.dot(f)<=0){if(d)return!0;const _=this.createContactEquation(l,a,e,t,c,u);_.ni.copy(h),_.ni.negate(_.ni),_.ri.set(0,0,0);const m=F1;h.scale(h.dot(s),m),s.vsub(m,m),_.rj.copy(m),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}}boxParticle(t,e,n,s,r,o,a,l,c,u,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,s,r,o,a,l,t,e,d)}convexParticle(t,e,n,s,r,o,a,l,c,u,d){let h=-1;const f=B1,p=z1;let _=null;const m=O1;if(m.copy(s),m.vsub(n,m),r.conjugate(af),af.vmult(m,m),t.pointIsInside(m)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,r),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(r);for(let g=0,x=t.faces.length;g!==x;g++){const S=[t.worldVertices[t.faces[g][0]]],v=t.worldFaceNormals[g];s.vsub(S[0],lf);const M=-v.dot(lf);if(_===null||Math.abs(M)<Math.abs(_)){if(d)return!0;_=M,h=g,f.copy(v)}}if(h!==-1){const g=this.createContactEquation(l,a,e,t,c,u);f.scale(_,p),p.vadd(s,p),p.vsub(n,p),g.rj.copy(p),f.negate(g.ni),g.ri.set(0,0,0);const x=g.ri,S=g.rj;x.vadd(s,x),x.vsub(l.position,x),S.vadd(n,S),S.vsub(a.position,S),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,s,r,o,a,l,c,u,d){return this.convexHeightfield(e,t,s,n,o,r,l,a,c,u,d)}particleCylinder(t,e,n,s,r,o,a,l,c,u,d){return this.convexParticle(e,t,s,n,o,r,l,a,c,u,d)}sphereTrimesh(t,e,n,s,r,o,a,l,c,u,d){const h=YT,f=$T,p=KT,_=ZT,m=JT,g=QT,x=i1,S=jT,v=qT,M=s1;de.pointToLocalFrame(s,o,n,m);const w=t.radius;x.lowerBound.set(m.x-w,m.y-w,m.z-w),x.upperBound.set(m.x+w,m.y+w,m.z+w),e.getTrianglesInAABB(x,M);const A=XT,L=t.radius*t.radius;for(let U=0;U<M.length;U++)for(let W=0;W<3;W++)if(e.getVertex(e.indices[M[U]*3+W],A),A.vsub(m,v),v.lengthSquared()<=L){if(S.copy(A),de.pointToWorldFrame(s,o,S,A),A.vsub(n,v),d)return!0;let B=this.createContactEquation(a,l,t,e,c,u);B.ni.copy(v),B.ni.normalize(),B.ri.copy(B.ni),B.ri.scale(t.radius,B.ri),B.ri.vadd(n,B.ri),B.ri.vsub(a.position,B.ri),B.rj.copy(A),B.rj.vsub(l.position,B.rj),this.result.push(B),this.createFrictionEquationsFromContact(B,this.frictionResult)}for(let U=0;U<M.length;U++)for(let W=0;W<3;W++){e.getVertex(e.indices[M[U]*3+W],h),e.getVertex(e.indices[M[U]*3+(W+1)%3],f),f.vsub(h,p),m.vsub(f,g);const B=g.dot(p);m.vsub(h,g);let O=g.dot(p);if(O>0&&B<0&&(m.vsub(h,g),_.copy(p),_.normalize(),O=g.dot(_),_.scale(O,g),g.vadd(h,g),g.distanceTo(m)<t.radius)){if(d)return!0;const q=this.createContactEquation(a,l,t,e,c,u);g.vsub(m,q.ni),q.ni.normalize(),q.ni.scale(t.radius,q.ri),q.ri.vadd(n,q.ri),q.ri.vsub(a.position,q.ri),de.pointToWorldFrame(s,o,g,g),g.vsub(l.position,q.rj),de.vectorToWorldFrame(o,q.ni,q.ni),de.vectorToWorldFrame(o,q.ri,q.ri),this.result.push(q),this.createFrictionEquationsFromContact(q,this.frictionResult)}}const b=t1,E=e1,D=n1,k=WT;for(let U=0,W=M.length;U!==W;U++){e.getTriangleVertices(M[U],b,E,D),e.getNormal(M[U],k),m.vsub(b,g);let B=g.dot(k);if(k.scale(B,g),m.vsub(g,g),B=g.distanceTo(m),Be.pointInTriangle(g,b,E,D)&&B<t.radius){if(d)return!0;let O=this.createContactEquation(a,l,t,e,c,u);g.vsub(m,O.ni),O.ni.normalize(),O.ni.scale(t.radius,O.ri),O.ri.vadd(n,O.ri),O.ri.vsub(a.position,O.ri),de.pointToWorldFrame(s,o,g,g),g.vsub(l.position,O.rj),de.vectorToWorldFrame(o,O.ni,O.ni),de.vectorToWorldFrame(o,O.ri,O.ri),this.result.push(O),this.createFrictionEquationsFromContact(O,this.frictionResult)}}M.length=0}planeTrimesh(t,e,n,s,r,o,a,l,c,u,d){const h=new T,f=VT;f.set(0,0,1),r.vmult(f,f);for(let p=0;p<e.vertices.length/3;p++){e.getVertex(p,h);const _=new T;_.copy(h),de.pointToWorldFrame(s,o,_,h);const m=HT;if(h.vsub(n,m),f.dot(m)<=0){if(d)return!0;const x=this.createContactEquation(a,l,t,e,c,u);x.ni.copy(f);const S=GT;f.scale(m.dot(f),S),h.vsub(S,S),x.ri.copy(S),x.ri.vsub(a.position,x.ri),x.rj.copy(h),x.rj.vsub(l.position,x.rj),this.result.push(x),this.createFrictionEquationsFromContact(x,this.frictionResult)}}}}const ys=new T,tr=new T,er=new T,OT=new T,BT=new T,zT=new Ue,kT=new Ue,VT=new T,HT=new T,GT=new T,WT=new T,qT=new T;new T;const XT=new T,jT=new T,YT=new T,$T=new T,KT=new T,ZT=new T,JT=new T,QT=new T,t1=new T,e1=new T,n1=new T,i1=new Cn,s1=[],na=new T,of=new T,r1=new T,o1=new T,a1=new T;function l1(i,t,e){let n=null;const s=i.length;for(let r=0;r!==s;r++){const o=i[r],a=r1;i[(r+1)%s].vsub(o,a);const l=o1;a.cross(t,l);const c=a1;e.vsub(o,c);const u=l.dot(c);if(n===null||u>0&&n===!0||u<=0&&n===!1){n===null&&(n=u>0);continue}else return!1}return!0}const ia=new T,c1=new T,u1=new T,h1=new T,d1=[new T,new T,new T,new T,new T,new T],f1=new T,p1=new T,m1=new T,g1=new T,_1=new T,v1=new T,x1=new T,y1=new T,S1=new T,M1=new T,b1=new T,w1=new T,E1=new T,T1=new T;new T;new T;const A1=new T,C1=new T,R1=new T,P1=new T,I1=new T,L1=new T,D1=new T,N1=new T,F1=new T,U1=new T,af=new Ue,O1=new T;new T;const B1=new T,lf=new T,z1=new T,k1=new T,V1=new T,H1=[0],G1=new T,W1=new T;class cf{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){const n=e;e=t,t=n}return t<<16|e}set(t,e){const n=this.getKey(t,e),s=this.current;let r=0;for(;n>s[r];)r++;if(n!==s[r]){for(let o=s.length-1;o>=r;o--)s[o+1]=s[o];s[r]=n}}tick(){const t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){const n=this.current,s=this.previous,r=n.length,o=s.length;let a=0;for(let l=0;l<r;l++){let c=!1;const u=n[l];for(;u>s[a];)a++;c=u===s[a],c||uf(t,u)}a=0;for(let l=0;l<o;l++){let c=!1;const u=s[l];for(;u>n[a];)a++;c=n[a]===u,c||uf(e,u)}}}function uf(i,t){i.push((t&4294901760)>>16,t&65535)}const Yl=(i,t)=>i<t?`${i}-${t}`:`${t}-${i}`;class q1{constructor(){this.data={keys:[]}}get(t,e){const n=Yl(t,e);return this.data[n]}set(t,e,n){const s=Yl(t,e);this.get(t,e)||this.data.keys.push(s),this.data[s]=n}delete(t,e){const n=Yl(t,e),s=this.data.keys.indexOf(n);s!==-1&&this.data.keys.splice(s,1),delete this.data[n]}reset(){const t=this.data,e=t.keys;for(;e.length>0;){const n=e.pop();delete t[n]}}}class X1 extends gm{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new T,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new T,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new QE,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new wm,this.constraints=[],this.narrowphase=new UT(this),this.collisionMatrix=new Yd,this.collisionMatrixPrevious=new Yd,this.bodyOverlapKeeper=new cf,this.shapeOverlapKeeper=new cf,this.contactmaterials=[],this.contactMaterialTable=new q1,this.defaultMaterial=new Is("default"),this.defaultContactMaterial=new Ps(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){const t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){const e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof Da?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n,s){return n===void 0&&(n={}),n.mode=Be.ALL,n.from=t,n.to=e,n.callback=s,$l.intersectWorld(this,n)}raycastAny(t,e,n,s){return n===void 0&&(n={}),n.mode=Be.ANY,n.from=t,n.to=e,n.result=s,$l.intersectWorld(this,n)}raycastClosest(t,e,n,s){return n===void 0&&(n={}),n.mode=Be.CLOSEST,n.from=t,n.to=e,n.result=s,$l.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof Ot&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;const e=this.bodies.length-1,n=this.bodies,s=n.indexOf(t);if(s!==-1){n.splice(s,1);for(let r=0;r!==n.length;r++)n[r].index=r;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){const e=this.bodies;for(let n=0;n<e.length;n++){const s=e[n].shapes;for(let r=0;r<s.length;r++){const o=s[r];if(o.id===t)return o}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){const e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);const n=Ve.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{const s=n-this.lastCallTime;this.step(t,s,e)}this.lastCallTime=n}step(t,e,n){if(n===void 0&&(n=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;const s=Ve.now();let r=0;for(;this.accumulator>=t&&r<n&&(this.internalStep(t),this.accumulator-=t,r++,!(Ve.now()-s>t*1e3)););this.accumulator=this.accumulator%t;const o=this.accumulator/t;for(let a=0;a!==this.bodies.length;a++){const l=this.bodies[a];l.previousPosition.lerp(l.position,o,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,o,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;const e=this.contacts,n=Z1,s=J1,r=this.bodies.length,o=this.bodies,a=this.solver,l=this.gravity,c=this.doProfiling,u=this.profile,d=Ot.DYNAMIC;let h=-1/0;const f=this.constraints,p=K1;l.length();const _=l.x,m=l.y,g=l.z;let x=0;for(c&&(h=Ve.now()),x=0;x!==r;x++){const U=o[x];if(U.type===d){const W=U.force,B=U.mass;W.x+=B*_,W.y+=B*m,W.z+=B*g}}for(let U=0,W=this.subsystems.length;U!==W;U++)this.subsystems[U].update();c&&(h=Ve.now()),n.length=0,s.length=0,this.broadphase.collisionPairs(this,n,s),c&&(u.broadphase=Ve.now()-h);let S=f.length;for(x=0;x!==S;x++){const U=f[x];if(!U.collideConnected)for(let W=n.length-1;W>=0;W-=1)(U.bodyA===n[W]&&U.bodyB===s[W]||U.bodyB===n[W]&&U.bodyA===s[W])&&(n.splice(W,1),s.splice(W,1))}this.collisionMatrixTick(),c&&(h=Ve.now());const v=$1,M=e.length;for(x=0;x!==M;x++)v.push(e[x]);e.length=0;const w=this.frictionEquations.length;for(x=0;x!==w;x++)p.push(this.frictionEquations[x]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,s,this,e,v,this.frictionEquations,p),c&&(u.narrowphase=Ve.now()-h),c&&(h=Ve.now()),x=0;x<this.frictionEquations.length;x++)a.addEquation(this.frictionEquations[x]);const A=e.length;for(let U=0;U!==A;U++){const W=e[U],B=W.bi,O=W.bj,H=W.si,q=W.sj;let ut;if(B.material&&O.material?ut=this.getContactMaterial(B.material,O.material)||this.defaultContactMaterial:ut=this.defaultContactMaterial,ut.friction,B.material&&O.material&&(B.material.friction>=0&&O.material.friction>=0&&B.material.friction*O.material.friction,B.material.restitution>=0&&O.material.restitution>=0&&(W.restitution=B.material.restitution*O.material.restitution)),a.addEquation(W),B.allowSleep&&B.type===Ot.DYNAMIC&&B.sleepState===Ot.SLEEPING&&O.sleepState===Ot.AWAKE&&O.type!==Ot.STATIC){const gt=O.velocity.lengthSquared()+O.angularVelocity.lengthSquared(),dt=O.sleepSpeedLimit**2;gt>=dt*2&&(B.wakeUpAfterNarrowphase=!0)}if(O.allowSleep&&O.type===Ot.DYNAMIC&&O.sleepState===Ot.SLEEPING&&B.sleepState===Ot.AWAKE&&B.type!==Ot.STATIC){const gt=B.velocity.lengthSquared()+B.angularVelocity.lengthSquared(),dt=B.sleepSpeedLimit**2;gt>=dt*2&&(O.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(B,O,!0),this.collisionMatrixPrevious.get(B,O)||(Vr.body=O,Vr.contact=W,B.dispatchEvent(Vr),Vr.body=B,O.dispatchEvent(Vr)),this.bodyOverlapKeeper.set(B.id,O.id),this.shapeOverlapKeeper.set(H.id,q.id)}for(this.emitContactEvents(),c&&(u.makeContactConstraints=Ve.now()-h,h=Ve.now()),x=0;x!==r;x++){const U=o[x];U.wakeUpAfterNarrowphase&&(U.wakeUp(),U.wakeUpAfterNarrowphase=!1)}for(S=f.length,x=0;x!==S;x++){const U=f[x];U.update();for(let W=0,B=U.equations.length;W!==B;W++){const O=U.equations[W];a.addEquation(O)}}a.solve(t,this),c&&(u.solve=Ve.now()-h),a.removeAllEquations();const L=Math.pow;for(x=0;x!==r;x++){const U=o[x];if(U.type&d){const W=L(1-U.linearDamping,t),B=U.velocity;B.scale(W,B);const O=U.angularVelocity;if(O){const H=L(1-U.angularDamping,t);O.scale(H,O)}}}this.dispatchEvent(Y1),c&&(h=Ve.now());const E=this.stepnumber%(this.quatNormalizeSkip+1)===0,D=this.quatNormalizeFast;for(x=0;x!==r;x++)o[x].integrate(t,E,D);this.clearForces(),this.broadphase.dirty=!0,c&&(u.integrate=Ve.now()-h),this.stepnumber+=1,this.dispatchEvent(j1);let k=!0;if(this.allowSleep)for(k=!1,x=0;x!==r;x++){const U=o[x];U.sleepTick(this.time),U.sleepState!==Ot.SLEEPING&&(k=!0)}this.hasActiveBodies=k}emitContactEvents(){const t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(bi,wi),t){for(let r=0,o=bi.length;r<o;r+=2)Hr.bodyA=this.getBodyById(bi[r]),Hr.bodyB=this.getBodyById(bi[r+1]),this.dispatchEvent(Hr);Hr.bodyA=Hr.bodyB=null}if(e){for(let r=0,o=wi.length;r<o;r+=2)Gr.bodyA=this.getBodyById(wi[r]),Gr.bodyB=this.getBodyById(wi[r+1]),this.dispatchEvent(Gr);Gr.bodyA=Gr.bodyB=null}bi.length=wi.length=0;const n=this.hasAnyEventListener("beginShapeContact"),s=this.hasAnyEventListener("endShapeContact");if((n||s)&&this.shapeOverlapKeeper.getDiff(bi,wi),n){for(let r=0,o=bi.length;r<o;r+=2){const a=this.getShapeById(bi[r]),l=this.getShapeById(bi[r+1]);Ei.shapeA=a,Ei.shapeB=l,a&&(Ei.bodyA=a.body),l&&(Ei.bodyB=l.body),this.dispatchEvent(Ei)}Ei.bodyA=Ei.bodyB=Ei.shapeA=Ei.shapeB=null}if(s){for(let r=0,o=wi.length;r<o;r+=2){const a=this.getShapeById(wi[r]),l=this.getShapeById(wi[r+1]);Ti.shapeA=a,Ti.shapeB=l,a&&(Ti.bodyA=a.body),l&&(Ti.bodyB=l.body),this.dispatchEvent(Ti)}Ti.bodyA=Ti.bodyB=Ti.shapeA=Ti.shapeB=null}}clearForces(){const t=this.bodies,e=t.length;for(let n=0;n!==e;n++){const s=t[n];s.force,s.torque,s.force.set(0,0,0),s.torque.set(0,0,0)}}}new Cn;const $l=new Be,Ve=globalThis.performance||{};if(!Ve.now){let i=Date.now();Ve.timing&&Ve.timing.navigationStart&&(i=Ve.timing.navigationStart),Ve.now=()=>Date.now()-i}new T;const j1={type:"postStep"},Y1={type:"preStep"},Vr={type:Ot.COLLIDE_EVENT_NAME,body:null,contact:null},$1=[],K1=[],Z1=[],J1=[],bi=[],wi=[],Hr={type:"beginContact",bodyA:null,bodyB:null},Gr={type:"endContact",bodyA:null,bodyB:null},Ei={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Ti={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Em=(i,t,e="white",n=256)=>{const s=document.createElement("canvas");s.width=n,s.height=n;const r=s.getContext("2d");return r.fillStyle=t,r.fillRect(0,0,n,n),r.fillStyle=e,r.font=`bold ${n*.7}px Arial`,r.textAlign="center",r.textBaseline="middle",r.fillText(i,n/2,n*.45),r.fillStyle="rgba(255, 255, 255, 0.15)",r.fillRect(n*.2,n*.82,n*.6,n*.08),new Kp(s)},nr=(i,t,e,n)=>{const s=new nm,r=-i/2,o=-t/2;return s.moveTo(r+n,o),s.lineTo(r+i-n,o),s.quadraticCurveTo(r+i,o,r+i,o+n),s.lineTo(r+i,o+t-n),s.quadraticCurveTo(r+i,o+t,r+i-n,o+t),s.lineTo(r+n,o+t),s.quadraticCurveTo(r,o+t,r,o+t-n),s.lineTo(r,o+n),s.quadraticCurveTo(r,o,r+n,o),new ju(s,{depth:e,bevelEnabled:!0,bevelThickness:.2,bevelSize:.2,bevelSegments:3})},hf=(i,t,e,n,s,r=0)=>{const o=i/2,a=t/2,l=e/2,c=n/2,u=-c+r,d=c+r,h=[-o,0,-a,o,0,-a,o,0,a,-o,0,a,-l,s,u,l,s,u,l,s,d,-l,s,d],f=[0,1,3,1,2,3,4,7,5,5,7,6,3,2,7,2,6,7,0,4,1,1,4,5,1,5,2,5,6,2,0,3,4,3,7,4],p=new An;return p.setAttribute("position",new ln(h,3)),p.setIndex(f),p.computeVertexNormals(),p},uu=(i,t="A")=>{const e=new Di,n=4,s=8.5,r=1.4,o=n,a=s,l=n+.4,c=s+.4,u=.75,d=.6,h=u+.1,f=1.05,p=n*.85,_=s*.7,m=n*.7,g=s*.3,x=h+r,S=new rn({color:i,metalness:.2,roughness:.6,flatShading:!0}),v=new rn({color:3355443,metalness:.2,roughness:.8}),M=new rn({color:16777215,emissive:16777215,emissiveIntensity:2}),w=new rn({color:16711680,emissive:16711680,emissiveIntensity:2}),A=new Wu(u,u,d,24);A.rotateZ(Math.PI/2);const L=l/2-.1,b=s*.35;[[-L,u,-b],[L,u,-b],[-L,u,b],[L,u,b]].forEach(j=>{const rt=new ne(A,v);rt.position.set(j[0],j[1],j[2]),rt.castShadow=!0,e.add(rt)});const D=hf(l,c,o,a,r,0),k=new ne(D,S);k.name="car_body",k.position.y=h,k.castShadow=!0,k.receiveShadow=!0,e.add(k);const W=hf(p,_,m,g,f,-.8),B=new ne(W,S);B.name="car_body",B.position.set(0,x,-1),B.castShadow=!0,B.receiveShadow=!0,e.add(B);const O=.8,H=.3,q=.2,ut=new Oi(O,H,q),gt=.7,dt=h+r*gt,_t=c/2*(1-gt)+a/2*gt,Lt=n/3,ot=new ne(ut,M);ot.position.set(-Lt,dt,_t),ot.translateZ(q/2);const et=Math.atan2((c-a)/2,r);ot.rotation.x=-et,e.add(ot);const X=new ne(ut,M);X.position.set(Lt,dt,_t),X.rotation.x=-et,X.translateZ(q/2),e.add(X);const Y=new ne(ut,w);Y.rotation.x=et,Y.position.set(-Lt,dt,-_t),Y.translateZ(-q/2),Y.position.z-=q/2,e.add(Y);const ft=new ne(ut,w);ft.rotation.x=et,ft.position.set(Lt,dt,-_t),ft.position.z-=q/2,e.add(ft);const mt=new po({map:Em(t,"#00000000","white"),transparent:!0,side:Hn}),lt=new ne(new mn(5,5),mt);lt.rotation.x=-Math.PI/2,lt.rotation.z=Math.PI,lt.position.set(0,x+f+.05,-1.5),e.add(lt);const St=new Di;St.name="light_beams";const I=14,N=1,F=7,G=new An,V=new Float32Array([-N/2,0,0,N/2,0,0,-F/2,0,I,F/2,0,I]),$=new Float32Array([0,1,1,1,0,0,1,0]);G.setAttribute("position",new Un(V,3)),G.setAttribute("uv",new Un($,2)),G.setIndex([0,1,3,0,3,2]);const R=document.createElement("canvas");R.width=128,R.height=256;const st=R.getContext("2d"),Q=st.createRadialGradient(64,10,0,64,10,240);Q.addColorStop(0,"rgba(255,255,255,0.4)"),Q.addColorStop(.4,"rgba(255,255,255,0.1)"),Q.addColorStop(1,"rgba(255,255,255,0)"),st.fillStyle=Q,st.fillRect(0,0,128,256);const it=new Kp(R),at=new po({map:it,transparent:!0,blending:hc,depthWrite:!1,side:Hn}),C=dt-.5,y=new ne(G,at);y.position.set(-Lt,C,_t),St.add(y);const z=new ne(G,at);return z.position.set(Lt,C,_t),St.add(z),St.visible=!1,e.add(St),e},df=2e3,Q1=80,sa=35e4,ra=100,tA=15e3,In=36,eA=5e4,ff=!1,Wr=1,ir=2,Zi=4,Kl=8,Zl=16;function nA(i,t){let e,n,s,r,o,a;const l=[],c=[],u=[],d=[],h=[];let f=[],p=0,_={P1:0,P2:0},m={word:[],currentQ:"",currentExp:"",nextSlotIndex:0,isGameOver:!1,gameOverTime:0,isClearing:!1,currentWordIndex:0};const g=new Is("car"),x=new Is("ground"),S=new Is("obstacle");function v(){const ot=new ae,et=Math.random()*.12,X=.4+Math.random()*.4,Y=.15+Math.random()*.15;return ot.setHSL(et,X,Y),ot}class M{constructor(et,X,Y,ft,mt,lt){Ee(this,"mesh");Ee(this,"body");Ee(this,"id");Ee(this,"char");Ee(this,"team");Ee(this,"isParking",!1);Ee(this,"targetSpot",null);Ee(this,"isParkedFinal",!1);Ee(this,"lightBeams");Ee(this,"isExiting",!1);Ee(this,"exitTargetZ",0);Ee(this,"isEntering",!0);Ee(this,"targetEntryZ",0);Ee(this,"entrySpeedMult",1);Ee(this,"shakeTime",0);Ee(this,"stuckTimer",0);Ee(this,"reverseTimer",0);this.id=et,this.char=mt,this.team=lt,this.mesh=uu(ft,mt),this.updateColor(ft);const St=this.mesh.getObjectByName("light_beams");St instanceof Di?this.lightBeams=St:(this.lightBeams=new Di,this.mesh.add(this.lightBeams)),e.add(this.mesh),this.body=new Ot({mass:df,material:g,linearDamping:.75,angularDamping:.95});const I=4.2,N=1.5,F=8.5;this.body.addShape(new Vn(new T(I/2,N/2,F*.95/2))),this.body.position.set(X,2,Y),lt==="P1"&&this.body.quaternion.setFromEuler(0,Math.PI,0),this.body.angularFactor.set(0,1,0),this.body.collisionFilterGroup=Zi,this.body.collisionFilterMask=Wr|ir|Zi,r.addBody(this.body),this.mesh.userData.carId=et,this.body.allowSleep=!1,this.body.addEventListener("collide",G=>{var $;if(this.isParkedFinal)return;const V=G.body;if((($=V.material)==null?void 0:$.name)==="car"){const R=l.find(st=>st.body===V);if(R&&!R.isParkedFinal&&this.isParking&&R.isParking){const st=new T(this.targetSpot.x,0,this.targetSpot.z);this.body.position.distanceTo(st)<V.position.distanceTo(st)&&V.applyImpulse(V.position.vsub(this.body.position).unit().scale(eA),new T(0,0,0))}}})}applySeparation(et){if(!this.isParkedFinal)for(const X of et){if(X===this||X.isExiting)continue;const Y=this.body.position.distanceTo(X.body.position),ft=6;if(Y<ft){const mt=this.body.position.vsub(X.body.position);mt.y=0,mt.length()<.1&&(mt.x=1);const lt=(ft-Y)*5e4;this.body.applyImpulse(mt.unit().scale(lt),new T(0,0,0))}}}update(){const et=this.body.velocity,X=et.length();if(X>ra&&et.scale(ra/X,et),this.mesh.position.copy(this.body.position),this.mesh.quaternion.copy(this.body.quaternion),this.shakeTime>0){this.shakeTime-=.016;const Y=Math.sin(this.shakeTime*40)*this.shakeTime;this.mesh.position.y+=Math.abs(Y)*1.2,this.mesh.rotation.z+=Y*.2}!this.isParkedFinal&&Math.abs(this.body.velocity.y)>.1&&(this.body.velocity.y*=.8),this.isExiting?this.body.collisionFilterMask=Wr|ir|Zi:this.isEntering?this.body.collisionFilterMask=Wr|ir|Zi|Kl|Zl:this.body.collisionFilterMask=Wr|ir|Zi|Kl|Zl,this.isExiting?(this.driveToExit(),this.lightBeams.visible=!0):this.isEntering?(this.driveToEntry(),this.lightBeams.visible=!0):this.isParking&&this.targetSpot&&!this.isParkedFinal?(this.driveToTarget(),this.lightBeams.visible=!0):this.lightBeams.visible=!1}driveToEntry(){const et=this.targetEntryZ-this.body.position.z,X=this.team==="P1",Y=X?-1:1;if(this.body.quaternion.setFromEuler(0,X?Math.PI:0,0),this.body.angularVelocity.set(0,0,0),Y===-1&&et>-.5||Y===1&&et<.5){this.isEntering=!1,this.body.velocity.set(0,0,0),this.body.force.set(0,0,0);return}const ft=1.5,mt=new T(0,0,Y*sa*1.2*this.entrySpeedMult*ft);this.body.applyForce(mt,new T(0,0,0)),this.body.velocity.x*=.95}driveToExit(){const et=this.exitTargetZ,X=0-this.body.position.x,Y=et-this.body.position.z,ft=Math.atan2(X,Y),mt=new T(0,0,1);this.body.quaternion.vmult(mt,mt);const lt=Math.atan2(mt.x,mt.z);let St=ft-lt;for(;St>Math.PI;)St-=Math.PI*2;for(;St<-Math.PI;)St+=Math.PI*2;this.body.angularVelocity.y=St*5,Math.cos(St)>.1&&this.body.applyForce(mt.scale(sa*1.8),new T(0,0,0))}driveToTarget(){if(!this.targetSpot)return;if(this.targetSpot.occupied){this.isParking=!1,this.targetSpot=null,this.body.velocity.set(0,0,0),this.body.angularVelocity.set(0,0,0);return}const et=new T(this.targetSpot.x,.5,this.targetSpot.z),X=et.x-this.body.position.x,Y=et.z-this.body.position.z,ft=Math.sqrt(X*X+Y*Y),mt=Math.atan2(X,Y),lt=new T(0,0,1);this.body.quaternion.vmult(lt,lt);const St=Math.atan2(lt.x,lt.z);let I=mt-St;for(;I>Math.PI;)I-=Math.PI*2;for(;I<-Math.PI;)I+=Math.PI*2;const N=Math.abs(I),F=(i.clientHeight>i.clientWidth?In/(i.clientWidth/i.clientHeight*1.5):In)*.9;if(Math.abs(this.body.position.z)>F){const $=this.body.position.z>0?-1e5:1e5;this.body.applyForce(new T(0,0,$),new T(0,0,0))}if(ft<1.8&&N<1.2){this.finishParking(et);return}const G=this.team==="P1"?t.p1Speed.value:t.p2Speed.value;if(this.reverseTimer>0){this.reverseTimer--,this.body.angularVelocity.y=-Math.sin(I)*5;const $=sa*.8*G;this.body.applyForce(lt.scale(-$),new T(0,0,0));const R=new T(0,1,0).cross(lt,new T);this.body.velocity.x-=R.x*this.body.velocity.dot(R)*.95,this.body.velocity.z-=R.z*this.body.velocity.dot(R)*.95;return}if(N>2||ft<20&&N>1&&this.body.velocity.length()<5){this.reverseTimer=50;return}if(this.body.angularVelocity.y=I*5,Math.cos(I)>.1){const $=sa*Math.min(1,ft/6)*G;this.body.applyForce(lt.scale($),new T(0,0,0))}const V=new T(0,1,0).cross(lt,new T);this.body.velocity.x-=V.x*this.body.velocity.dot(V)*.8,this.body.velocity.z-=V.z*this.body.velocity.dot(V)*.8}boost(){if(this.isParkedFinal)return;const et=new T(0,0,1);this.body.quaternion.vmult(et,et),this.body.applyImpulse(et.scale(tA),new T(0,0,0))}shake(){if(this.shakeTime=.4,!this.isParkedFinal){this.body.applyImpulse(new T(0,2e3,0),new T(.5,0,.5));const et=new T((Math.random()-.5)*15e3,0,(Math.random()-.5)*15e3);this.body.applyImpulse(et,new T(0,0,0))}}finishParking(et){if(this.targetSpot.occupied){this.isParking=!1,this.targetSpot=null;return}this.targetSpot.occupied=!0,this.isParkedFinal=!0,this.isParking=!1,this.body.position.copy(et),this.body.velocity.set(0,0,0),this.body.angularVelocity.set(0,0,0),this.body.type=Ot.STATIC,this.body.mass=0,this.body.updateMassProperties(),this.team==="P1"?(_.P1++,t.onScore("P1",_.P1)):(_.P2++,t.onScore("P2",_.P2)),t.onParkSuccess()}updateColor(et){this.mesh.traverse(X=>{X instanceof ne&&X.name==="car_body"&&X.material instanceof rn&&X.material.color.set(et)})}park(et){this.targetSpot=et,this.isParking=!0,this.body.wakeUp()}exit(){this.isExiting=!0,this.isParkedFinal=!1,this.isParking=!1,this.body.type=Ot.DYNAMIC,this.body.mass=df,this.body.updateMassProperties(),this.exitTargetZ=this.team==="P1"?150:-150,this.body.wakeUp()}}class w{constructor(et,X,Y,ft=null){Ee(this,"mesh");Ee(this,"body");Ee(this,"legs",[]);Ee(this,"tail",null);Ee(this,"target",new Z);Ee(this,"state","idle");Ee(this,"timer",0);Ee(this,"team",null);this.team=ft,this.mesh=new Di;const mt=new rn({color:Y,roughness:.8}),lt=.5,St=nr(1.8,3,1.2,lt),I=new ne(St,mt);I.rotation.x=Math.PI/2,I.position.y=1.3,I.castShadow=!0,this.mesh.add(I);const N=nr(1.2,1.2,1.2,lt*.8),F=new ne(N,mt);F.rotation.x=Math.PI/2,F.position.set(0,2,1.5),F.castShadow=!0,this.mesh.add(F);const G=new rn({color:6106637}),V=nr(.4,.4,.8,.15),$=new ne(V,G);$.rotation.x=Math.PI/2,$.position.set(.5,2.6,1.5),this.mesh.add($);const R=new ne(V,G);if(R.rotation.x=Math.PI/2,R.position.set(-.5,2.6,1.5),this.mesh.add(R),this.team){const at=new rn({color:this.team==="P1"?Fe.p1Color:Fe.p2Color,emissive:this.team==="P1"?Fe.p1Color:Fe.p2Color,emissiveIntensity:.5}),C=nr(1.3,1.3,.3,.1),y=new ne(C,at);y.rotation.x=Math.PI/2,y.position.set(0,1.8,1),this.mesh.add(y)}const st=nr(.5,.5,1,.25);[[.6,.5,1],[-.6,.5,1],[.6,.5,-1],[-.6,.5,-1]].forEach(at=>{const C=new ne(st,mt);C.rotation.x=Math.PI/2,C.position.set(at[0],at[1],at[2]),this.mesh.add(C),this.legs.push(C)});const it=nr(.3,1,.3,.1);this.tail=new ne(it,mt),this.tail.rotation.x=Math.PI/2,this.tail.position.set(0,1.5,-1.5),this.mesh.add(this.tail),e.add(this.mesh),this.body=new Ot({mass:10,material:S}),this.body.addShape(new Vn(new T(.9,.6,1.5))),this.body.position.set(et,.5,X),this.body.collisionFilterGroup=ir,this.body.collisionFilterMask=Wr|Zi|ir,r.addBody(this.body),this.body.angularFactor.set(0,1,0),this.body.quaternion.set(0,0,0,1),this.pickNewTarget()}pickNewTarget(){if(this.team&&!m.isGameOver&&c.length>0){const St=c.find((I,N)=>!I.occupied&&N>=m.nextSlotIndex);if(St){const I=l.find(N=>N.team===this.team&&N.char===St.char&&!N.isParkedFinal&&!N.isParking);if(I){this.target.copy(I.mesh.position),this.state="walking",this.timer=60;return}}}const et=i.clientWidth,X=i.clientHeight,Y=et/X,ft=X>et?In/(Y*1.5):In,mt=ft*Y,lt=ft*(1-120/X);this.target.set((Math.random()-.5)*mt*1.6,0,(Math.random()-.5)*lt*1.6),this.state="walking",this.timer=100}update(){if(this.mesh.position.copy(this.body.position),this.mesh.quaternion.copy(this.body.quaternion),this.team&&!m.isGameOver){const et=c.find((X,Y)=>!X.occupied&&Y>=m.nextSlotIndex);if(et){const X=l.find(Y=>Y.team===this.team&&Y.char===et.char&&!Y.isParkedFinal&&!Y.isParking);if(X){this.target.copy(X.mesh.position);const Y=new Z().subVectors(this.mesh.position,X.mesh.position).normalize();this.target.add(Y.multiplyScalar(4.5)),this.state="walking"}else this.timer<=0&&this.pickNewTarget()}}if(this.state==="walking"){const et=this.target.clone().sub(this.mesh.position);if(et.y=0,et.length()<1.5||this.timer<=0)this.state="idle",this.timer=this.team?10:60+Math.random()*120,this.body.velocity.set(0,0,0);else{this.timer--;const X=Math.atan2(et.x,et.z),Y=new T;this.body.quaternion.toEuler(Y);const ft=Y.y;let mt=X-ft;for(;mt>Math.PI;)mt-=Math.PI*2;for(;mt<-Math.PI;)mt+=Math.PI*2;this.body.angularVelocity.y=mt*5;const lt=new T(0,0,1);this.body.quaternion.vmult(lt,lt);const St=this.team?12:8;this.body.velocity.x=lt.x*St,this.body.velocity.z=lt.z*St,this.legs.forEach((I,N)=>{I.position.y=.5+Math.sin(Date.now()*.015+N)*.25})}}else this.timer--,this.timer<=0&&this.pickNewTarget();if(this.tail){const et=this.state==="walking"?.02:.01;this.tail.rotation.z=Math.sin(Date.now()*et)*.5}}destroy(){e.remove(this.mesh),r.removeBody(this.body)}}function A(){e=new $p,e.background=new ae(328965),e.fog=new Hu(328965,150,400),s=new mm({antialias:!0,canvas:i}),i.style.touchAction="none",s.setSize(i.clientWidth,i.clientHeight),s.shadowMap.enabled=!0,b(),window.addEventListener("resize",b),e.add(new cm(16777215,.5));const ot=new lm(16777215,.6);ot.position.set(0,200,0),ot.castShadow=!0,ot.shadow.camera.left=-200,ot.shadow.camera.right=200,ot.shadow.camera.top=200,ot.shadow.camera.bottom=-200,ot.shadow.camera.near=1,ot.shadow.camera.far=400,ot.shadow.bias=1e-4,ot.shadow.mapSize.set(2048,2048),e.add(ot),r=new X1,r.gravity.set(0,-9.82,0),r.solver instanceof wm&&(r.solver.iterations=50),r.allowSleep=!1,r.addContactMaterial(new Ps(g,x,{friction:.05,restitution:.1})),r.addContactMaterial(new Ps(g,S,{friction:.02,restitution:.1})),r.addContactMaterial(new Ps(g,g,{friction:.05,restitution:0}));const et=new rn({color:1710618,roughness:.8,metalness:0});o=new ne(new mn(1e3,1e3),et),o.rotation.x=-Math.PI/2,o.receiveShadow=!0,e.add(o),a=new Ot({mass:0,material:x}),a.addShape(new RT),a.quaternion.setFromEuler(-Math.PI/2,0,0),r.addBody(a),U(-200,200,-15,15);const X=new rn({color:16711935,transparent:!0,opacity:.3,visible:ff});for(let Y=0;Y<4;Y++){const ft=new Ot({mass:0,material:x});ft.collisionFilterGroup=Kl,ft.collisionFilterMask=Zi,r.addBody(ft);const mt=new ne(new Oi(1,1,1),X);mt.renderOrder=999,mt.raycast=()=>{},e.add(mt),h.push({body:ft,mesh:mt})}b(),window.addEventListener("keydown",Y=>{Y.key.toLowerCase()==="t"&&L()}),W(),Ni(()=>Fe.p1Color,Y=>{Y!==void 0&&l.filter(ft=>ft.team==="P1").forEach(ft=>ft.updateColor(Y))}),Ni(()=>Fe.p2Color,Y=>{Y!==void 0&&l.filter(ft=>ft.team==="P2").forEach(ft=>ft.updateColor(Y))}),H()}function L(){const ot=Math.random()>.5?"P1":"P2",et=new M(l.length,0,0,16777215,"T",ot);et.isEntering=!1;const X=Math.random()*Math.PI*2;et.body.velocity.set(Math.cos(X)*150,0,Math.sin(X)*150),l.push(et),console.log("Test Car Spawned!")}function b(){const ot=i.clientWidth,et=i.clientHeight,X=ot/et,Y=et>ot?In/(X*1.5):In;n?(n.left=-Y*X,n.right=Y*X,n.top=Y,n.bottom=-Y,n.updateProjectionMatrix()):(n=new ja(-Y*X,Y*X,Y,-Y,.1,1e3),n.position.set(0,150,0),n.lookAt(0,0,0)),s.setSize(ot,et)}let E=5,D=0;function k(){if(h.length!==4)return;const ot=i.clientWidth,et=i.clientHeight,X=ot/et,Y=et>ot?In/(X*1.5):In;E>1&&(E-=.04,E<1&&(E=1));const ft=(Y*X+.5)*E,mt=(Y*(1-120/et)+.5)*E,lt=50,St=100,I=1,N=Math.abs(E-D)>.1;N&&(D=E),h[0].body.position.set(0,0,-mt-lt/2),N&&(h[0].body.shapes=[],h[0].body.addShape(new Vn(new T(ft+lt,St/2,lt/2)))),h[0].mesh.position.set(0,St/2,-mt+I/2),h[0].mesh.scale.set(ft*2+2,St,I),h[1].body.position.set(0,0,mt+lt/2),N&&(h[1].body.shapes=[],h[1].body.addShape(new Vn(new T(ft+lt,St/2,lt/2)))),h[1].mesh.position.set(0,St/2,mt-I/2),h[1].mesh.scale.set(ft*2+2,St,I),h[2].body.position.set(-ft-lt/2,0,0),N&&(h[2].body.shapes=[],h[2].body.addShape(new Vn(new T(lt/2,St/2,mt+lt)))),h[2].mesh.position.set(-ft+I/2,St/2,0),h[2].mesh.scale.set(I,St,mt*2+2),h[3].body.position.set(ft+lt/2,0,0),N&&(h[3].body.shapes=[],h[3].body.addShape(new Vn(new T(lt/2,St/2,mt+lt)))),h[3].mesh.position.set(ft-I/2,St/2,0),h[3].mesh.scale.set(I,St,mt*2+2)}function U(ot,et,X,Y){const lt=new po({color:10053120}),St=X-ot;if(St>0){const N=new mn(1,St),F=new ne(N,lt);F.rotation.x=-Math.PI/2,F.position.set(-2.5/2,.06,ot+St/2),F.name="road_marking",e.add(F);const G=new ne(N,lt);G.rotation.x=-Math.PI/2,G.position.set(2.5/2,.06,ot+St/2),G.name="road_marking",e.add(G)}const I=et-Y;if(I>0){const N=new mn(1,I),F=new ne(N,lt);F.rotation.x=-Math.PI/2,F.position.set(-2.5/2,.06,Y+I/2),F.name="road_marking",e.add(F);const G=new ne(N,lt);G.rotation.x=-Math.PI/2,G.position.set(2.5/2,.06,Y+I/2),G.name="road_marking",e.add(G)}}function W(){E=5;const ot=Ii.currentList.value;if(ot.length===0)return;const et=ot[Math.floor(Math.random()*ot.length)];m.word=(et.a||et.q).split(""),m.currentQ=et.q,m.currentExp=et.exps&&et.exps.length>0?`，${et.exps[0]}`:"",m.nextSlotIndex=0,m.isGameOver=!1,m.isClearing=!1,c.length=0;const X=i.clientWidth,Y=i.clientHeight,ft=X/Y,mt=Y>X?In/(ft*1.5):In,lt=[];e.traverse(j=>{j.name&&(j.name.startsWith("spot_")||j.name==="road_marking")&&lt.push(j)}),lt.forEach(j=>e.remove(j));const St=m.word.length,I=mt*ft*2*.9,N=12,F=16,G=Math.max(1,Math.floor(I/N)),V=Math.ceil(St/G),$=7,R=11;let st=0,Q=0;for(let j=0;j<St;j++){const rt=Math.floor(j/G),tt=j%G,Ct=rt===V-1&&St%G||G,xt=(tt-(Ct-1)/2)*N,Tt=(rt-(V-1)/2)*F;j===0?(st=Tt,Q=Tt):(st=Math.min(st,Tt),Q=Math.max(Q,Tt)),c.push({char:m.word[j],occupied:!1,x:xt,z:Tt,winnerTeam:null});const zt=new rn({color:16777215,transparent:!0,opacity:.6,emissive:16777215,emissiveIntensity:.2}),yt=new ne(new mn($,.3),zt);yt.rotation.x=-Math.PI/2,yt.position.set(xt,.07,Tt-R/2),yt.name=`spot_frame_${j}_t`,e.add(yt);const Et=new ne(new mn($,.3),zt);Et.rotation.x=-Math.PI/2,Et.position.set(xt,.07,Tt+R/2),Et.name=`spot_frame_${j}_b`,e.add(Et);const Rt=new ne(new mn(.3,R),zt);Rt.rotation.x=-Math.PI/2,Rt.position.set(xt-$/2,.07,Tt),Rt.name=`spot_frame_${j}_l`,e.add(Rt);const Dt=new ne(new mn(.3,R),zt);Dt.rotation.x=-Math.PI/2,Dt.position.set(xt+$/2,.07,Tt),Dt.name=`spot_frame_${j}_r`,e.add(Dt);const At=5,Yt=new ne(new mn(At,At),new rn({map:Em(m.word[j],"#00000000","rgba(255,255,255,0.4)"),transparent:!0,emissive:16777215,emissiveIntensity:.1}));Yt.name=`spot_label_${j}`,Yt.rotation.x=-Math.PI/2,Yt.position.set(xt,.08,Tt),Yt.raycast=()=>{},e.add(Yt)}const it=10;U(-200,200,st-it,Q+it),d.push(new w(-20,0,13808780,"P1")),d.push(new w(20,0,16777215,"P2"));for(let j=0;j<15;j++){const rt=2+Math.random()*3,tt=new T((Math.random()-.5)*110,rt/2,(Math.random()-.5)*(Q-st+20)),Ct=new ne(new Oi(rt,rt,rt),new rn({color:v(),metalness:.6,roughness:.4}));Ct.castShadow=!0,Ct.receiveShadow=!0,e.add(Ct);const xt=new Ot({mass:Q1,material:S,position:tt});xt.addShape(new Vn(new T(rt/2,rt/2,rt/2))),r.addBody(xt),u.push({mesh:Ct,body:xt})}const at=15,C=2,y=new rn({color:16711935,transparent:!0,opacity:.3,visible:ff});[Q+it,st-it].forEach(j=>{const rt=new Ot({mass:0});rt.addShape(new Vn(new T(150,at/2,C/2))),rt.position.set(0,at/2,j),rt.collisionFilterGroup=Zl,rt.collisionFilterMask=Zi,r.addBody(rt);const tt=new ne(new Oi(300,at,C),y);tt.position.set(0,at/2,j),tt.raycast=()=>{},e.add(tt),f.push({mesh:tt,body:rt})}),B("P1",Q+22,Fe.p1Color||91368),B("P2",st-22,Fe.p2Color||15208739),t.onSpeak(m.currentQ+m.currentExp)}function B(ot,et,X){const Y=Math.max(4,Math.ceil(m.word.length*1.5)),mt=m.word.some(F=>/[\u3105-\u3129\u312A-\u312F\u02CA\u02C7\u02CB\u02D9]/.test(F))?"ㄅㄆㄇㄈㄉㄊㄋㄌㄍㄎㄏㄐㄑㄒㄓㄔㄕㄖㄗㄘㄙㄧㄨㄩㄚㄛㄜㄝㄞㄟㄠㄡㄢㄣㄤㄥㄦˊˇˋ".split(""):"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),lt=[];for(let F=0;F<m.word.length;F++)lt.push(m.word[F]);for(;lt.length<Y;){const F=mt[Math.floor(Math.random()*mt.length)];m.word.includes(F)||lt.push(F)}lt.sort(()=>Math.random()-.5);const St=i.clientWidth/i.clientHeight,N=(i.clientHeight>i.clientWidth?In/(St*1.5):In)*St*.8;lt.forEach((F,G)=>{const V=ot==="P1"?140:-140,$=N*2/(lt.length+1),R=-N+(G+1)*$+(Math.random()-.5)*5,st=new M(l.length,R,V,X,F,ot),Q=(Math.random()-.5)*.4;st.body.quaternion.setFromEuler(0,(ot==="P1"?Math.PI:0)+Q,0),st.body.quaternion.setFromEuler(0,(ot==="P1"?Math.PI:0)+Q,0),st.targetEntryZ=et+(Math.random()-.5)*10,st.entrySpeedMult=1+Math.random()*.8,l.push(st)})}let O;function H(){if(O=requestAnimationFrame(H),r.step(1/60),k(),m.isGameOver)m.isClearing?l.every(et=>Math.abs(et.body.position.z)>120)&&(p===0&&(p=Date.now()),Date.now()-p>300&&(p=0,ut())):Date.now()-m.gameOverTime>800&&(m.isClearing=!0,l.forEach(ot=>ot.exit()));else{for(;m.nextSlotIndex<c.length&&c[m.nextSlotIndex].occupied;)m.nextSlotIndex++;c.every(ot=>ot.occupied)&&(m.isGameOver=!0,m.gameOverTime=Date.now(),t.onSpeak(m.currentQ))}if(l.forEach(ot=>{ot.applySeparation(l),ot.update()}),d.forEach(ot=>ot.update()),q.isDragging&&q.car){const ot=q.car,et=ot.body,X=20;et.velocity.x=(q.targetPos.x-et.position.x)*X,et.velocity.z=(q.targetPos.z-et.position.z)*X,ot.isParking||(et.angularVelocity.set(0,0,0),et.quaternion.copy(q.startRot))}u.forEach(ot=>{const et=ot.body.velocity;et.length()>ra&&et.scale(ra/et.length(),et),ot.mesh.position.copy(ot.body.position),ot.mesh.quaternion.copy(ot.body.quaternion)}),s.render(e,n)}const q={car:null,isDragging:!1,startPos:new bt,startRot:new Ue,targetPos:new Z,plane:new Ci(new Z(0,1,0),0),rect:null};function ut(){l.forEach(et=>{e.remove(et.mesh),r.removeBody(et.body)}),l.length=0,d.forEach(et=>et.destroy()),d.length=0,u.forEach(et=>{e.remove(et.mesh),r.removeBody(et.body)}),u.length=0;const ot=[];e.traverse(et=>{et.name&&(et.name.startsWith("spot_")||et.name==="mission_complete_label")&&ot.push(et)}),ot.forEach(et=>e.remove(et)),W()}function gt(){f.length!==0&&(f.forEach(ot=>{e.remove(ot.mesh),r.removeBody(ot.body)}),f=[])}function dt(ot){gt();const et=i.getBoundingClientRect();q.rect=et;const X=new bt((ot.clientX-et.left)/et.width*2-1,-((ot.clientY-et.top)/et.height)*2+1);q.startPos.set(ot.clientX,ot.clientY);const Y=new vd;Y.setFromCamera(X,n);const ft=Y.intersectObjects(e.children,!0);console.log(`Click detected. Hits: ${ft.length}`),ft.forEach((lt,St)=>{var I;return console.log(` Hit ${St}: ${lt.object.name||"unnamed"} (Parent: ${((I=lt.object.parent)==null?void 0:I.name)||"none"})`)});let mt=!1;for(const lt of ft){let St=lt.object;for(;St&&St.userData.carId===void 0&&St.parent;)St=St.parent;if(St&&St.userData.carId!==void 0){const I=St.userData.carId,N=l.find(F=>F.id===I);if(N)if(console.log(`Found Car ID: ${I}, Team: ${N.team}, isEntering: ${N.isEntering}, isParkedFinal: ${N.isParkedFinal}, Z: ${N.body.position.z.toFixed(1)}`),!N.isParkedFinal&&Math.abs(N.body.position.z)<135){q.car=N,q.isDragging=!1,q.startRot.copy(N.body.quaternion),Y.ray.intersectPlane(q.plane,q.targetPos),mt=!0,console.log("-> SUCCESS: Car selected for drag/click.");break}else console.log("-> REJECTED: Car state or position not valid for interaction.")}}mt||console.warn("No car found at click position.")}function _t(ot){if(q.car&&(q.isDragging||Math.sqrt(Math.pow(ot.clientX-q.startPos.x,2)+Math.pow(ot.clientY-q.startPos.y,2))>5&&(q.isDragging=!0),q.isDragging)){const et=q.rect||i.getBoundingClientRect(),X=new bt((ot.clientX-et.left)/et.width*2-1,-((ot.clientY-et.top)/et.height)*2+1),Y=new vd;Y.setFromCamera(X,n),Y.ray.intersectPlane(q.plane,q.targetPos),q.car.isParking&&(q.car.stuckTimer=0)}}function Lt(){if(q.car){if(!q.isDragging){const ot=q.car;if(!ot.isParking&&!ot.isParkedFinal){t.onSpeak(ot.char);let et=!1;for(let X=m.nextSlotIndex;X<m.word.length;X++)if(c[X].char===ot.char&&!c[X].occupied){if(l.some(mt=>mt.team===ot.team&&mt.isParking&&mt.targetSpot===c[X]))continue;if(X===m.nextSlotIndex||l.some(mt=>mt.isParking&&mt.targetSpot===c[X-1])){ot.park(c[X]),et=!0;break}}et||(t.onParkFail(),ot.shake())}else ot.shake(),ot.isParking&&ot.boost()}q.car=null,q.isDragging=!1}}return A(),i.addEventListener("pointerdown",dt),document.addEventListener("pointermove",_t),document.addEventListener("pointerup",Lt),ls(()=>{cancelAnimationFrame(O),i.removeEventListener("pointerdown",dt),document.removeEventListener("pointermove",_t),document.removeEventListener("pointerup",Lt),window.removeEventListener("resize",b),s.dispose()}),{scores:_,gameState:m}}const pf={type:"change"},Zu={type:"start"},Tm={type:"end"},oa=new ku,mf=new Ci,iA=Math.cos(70*_x.DEG2RAD),ke=new Z,fn=2*Math.PI,ye={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Jl=1e-6;class sA extends Iy{constructor(t,e=null){super(t,e),this.state=ye.NONE,this.target=new Z,this.cursor=new Z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:fr.ROTATE,MIDDLE:fr.DOLLY,RIGHT:fr.PAN},this.touches={ONE:or.ROTATE,TWO:or.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new Z,this._lastQuaternion=new Ds,this._lastTargetPosition=new Z,this._quat=new Ds().setFromUnitVectors(t.up,new Z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new yd,this._sphericalDelta=new yd,this._scale=1,this._panOffset=new Z,this._rotateStart=new bt,this._rotateEnd=new bt,this._rotateDelta=new bt,this._panStart=new bt,this._panEnd=new bt,this._panDelta=new bt,this._dollyStart=new bt,this._dollyEnd=new bt,this._dollyDelta=new bt,this._dollyDirection=new Z,this._mouse=new bt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=oA.bind(this),this._onPointerDown=rA.bind(this),this._onPointerUp=aA.bind(this),this._onContextMenu=pA.bind(this),this._onMouseWheel=uA.bind(this),this._onKeyDown=hA.bind(this),this._onTouchStart=dA.bind(this),this._onTouchMove=fA.bind(this),this._onMouseDown=lA.bind(this),this._onMouseMove=cA.bind(this),this._interceptControlDown=mA.bind(this),this._interceptControlUp=gA.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(pf),this.update(),this.state=ye.NONE}update(t=null){const e=this.object.position;ke.copy(e).sub(this.target),ke.applyQuaternion(this._quat),this._spherical.setFromVector3(ke),this.autoRotate&&this.state===ye.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=fn:n>Math.PI&&(n-=fn),s<-Math.PI?s+=fn:s>Math.PI&&(s-=fn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(ke.setFromSpherical(this._spherical),ke.applyQuaternion(this._quatInverse),e.copy(this.target).add(ke),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=ke.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new Z(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new Z(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=ke.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(oa.origin.copy(this.object.position),oa.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(oa.direction))<iA?this.object.lookAt(this.target):(mf.setFromNormalAndCoplanarPoint(this.object.up,this.target),oa.intersectPlane(mf,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Jl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Jl||this._lastTargetPosition.distanceToSquared(this.target)>Jl?(this.dispatchEvent(pf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?fn/60*this.autoRotateSpeed*t:fn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){ke.setFromMatrixColumn(e,0),ke.multiplyScalar(-t),this._panOffset.add(ke)}_panUp(t,e){this.screenSpacePanning===!0?ke.setFromMatrixColumn(e,1):(ke.setFromMatrixColumn(e,0),ke.crossVectors(this.object.up,ke)),ke.multiplyScalar(t),this._panOffset.add(ke)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;ke.copy(s).sub(this.target);let r=ke.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(fn*this._rotateDelta.x/e.clientHeight),this._rotateUp(fn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(fn*this._rotateDelta.x/e.clientHeight),this._rotateUp(fn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new bt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function rA(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function oA(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function aA(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Tm),this.state=ye.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function lA(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case fr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ye.DOLLY;break;case fr.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ye.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ye.ROTATE}break;case fr.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ye.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ye.PAN}break;default:this.state=ye.NONE}this.state!==ye.NONE&&this.dispatchEvent(Zu)}function cA(i){switch(this.state){case ye.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ye.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ye.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function uA(i){this.enabled===!1||this.enableZoom===!1||this.state!==ye.NONE||(i.preventDefault(),this.dispatchEvent(Zu),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Tm))}function hA(i){this.enabled!==!1&&this._handleKeyDown(i)}function dA(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case or.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ye.TOUCH_ROTATE;break;case or.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ye.TOUCH_PAN;break;default:this.state=ye.NONE}break;case 2:switch(this.touches.TWO){case or.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ye.TOUCH_DOLLY_PAN;break;case or.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ye.TOUCH_DOLLY_ROTATE;break;default:this.state=ye.NONE}break;default:this.state=ye.NONE}this.state!==ye.NONE&&this.dispatchEvent(Zu)}function fA(i){switch(this._trackPointer(i),this.state){case ye.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ye.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ye.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ye.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ye.NONE}}function pA(i){this.enabled!==!1&&i.preventDefault()}function mA(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function gA(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const _A=as({__name:"ThreeCarPreview",props:{color:{}},setup(i){const t=i,e=te(null);let n,s,r,o,a,l;Er(()=>{if(!e.value)return;n=new $p,n.background=new ae(3355443),s=new Dn(45,e.value.clientWidth/e.value.clientHeight,.1,100),s.position.set(10,8,10),s.lookAt(0,0,0),r=new mm({antialias:!0,alpha:!0}),r.setSize(e.value.clientWidth,e.value.clientHeight),r.shadowMap.enabled=!0,e.value.appendChild(r.domElement);const d=new cm(16777215,.6);n.add(d);const h=new lm(16777215,1);h.position.set(10,20,10),h.castShadow=!0,n.add(h);const f=new ne(new mn(50,50),new rn({color:3355443,roughness:1,metalness:0}));f.rotation.x=-Math.PI/2,f.receiveShadow=!0,n.add(f),a=uu(t.color,"A"),n.add(a),o=new sA(s,r.domElement),o.enablePan=!1,o.enableZoom=!0,o.minDistance=5,o.maxDistance=30,o.maxPolarAngle=Math.PI/2-.1,o.target.set(0,1,0),o.update(),u(),window.addEventListener("resize",c)}),ls(()=>{cancelAnimationFrame(l),window.removeEventListener("resize",c),r&&r.dispose()}),Ni(()=>t.color,d=>{a&&(n.remove(a),a=uu(d,"A"),n.add(a))});function c(){!e.value||!s||!r||(s.aspect=e.value.clientWidth/e.value.clientHeight,s.updateProjectionMatrix(),r.setSize(e.value.clientWidth,e.value.clientHeight))}function u(){l=requestAnimationFrame(u),o.update(),r.render(n,s)}return(d,h)=>(qt(),Kt("div",{ref_key:"container",ref:e,class:"preview-container"},null,512))}}),vA=cs(_A,[["__scopeId","data-v-784804dc"]]),xA={class:"modal"},yA={class:"modal-header"},SA={class:"preview-area"},MA={class:"color-picker"},bA=["onClick"],wA=as({__name:"CarCustomizeDialog",props:{team:{},modelValue:{type:Boolean}},emits:["update:modelValue"],setup(i,{emit:t}){const e=i,n=t,s=te(e.team==="P1"?Fe.p1Color||91368:Fe.p2Color||15208739),r=[15208739,91368,1080336,16755200,8918936,48370,16777215,3355443,16711935,16766720];function o(){e.team==="P1"?Fe.p1Color=s.value:Fe.p2Color=s.value,a()}function a(){n("update:modelValue",!1)}return(l,c)=>i.modelValue?(qt(),Kt("div",{key:0,class:"modal-overlay",onClick:vr(a,["self"])},[pt("div",xA,[pt("div",yA,[pt("h3",null,"Customize "+me(i.team)+" Car",1),pt("button",{class:"close-btn",onClick:a},"×")]),pt("div",SA,[Tn(vA,{color:s.value},null,8,["color"]),c[0]||(c[0]=pt("div",{class:"drag-hint"},"Drag to Rotate",-1))]),pt("div",MA,[(qt(),Kt(Re,null,gn(r,u=>pt("div",{key:u,class:Wn(["color-dot",{active:s.value===u}]),style:$e({backgroundColor:"#"+u.toString(16).padStart(6,"0")}),onClick:d=>s.value=u},null,14,bA)),64))]),pt("div",{class:"actions"},[pt("button",{class:"btn-cancel",onClick:a},"Cancel"),pt("button",{class:"btn-save",onClick:o},"Save")])])])):_n("",!0)}}),gf=cs(wA,[["__scopeId","data-v-0cf81de9"]]),EA={class:"game-container"},TA={class:"function-area p2"},AA={class:"ctrl-group"},CA={class:"score-display"},RA={key:0,class:"trophy"},PA={class:"function-area p1"},IA={class:"ctrl-group"},LA={class:"score-display"},DA={key:0,class:"trophy"},NA=as({__name:"ParkingGame",emits:["exit"],setup(i,{emit:t}){const e=te(!1),n=te(!1),s=t,{speak:r,playTone:o,playWrong:a}=Tr(),l=te(null),c=te(1),u=te(1),d=te(0),h=te(0);return window.addEventListener("hashchange",()=>{window.location.hash.replace("#/","")||s("exit")}),Er(()=>{window.location.hash="#/parking-jam",l.value&&nA(l.value,{p1Speed:c,p2Speed:u,onScore:(f,p)=>{f==="P1"?d.value=p:h.value=p,o(600,"sine",.1)},onWin:()=>{o(800,"triangle",.3)},onSpeak:f=>r(f),onParkSuccess:()=>o(1e3,"sine",.05),onParkFail:()=>a()})}),(f,p)=>(qt(),Kt("div",EA,[pt("canvas",{ref_key:"canvasRef",ref:l,class:"webgl"},null,512),pt("div",TA,[pt("div",AA,[pt("button",{class:"icon-btn",onClick:p[0]||(p[0]=_=>n.value=!0)},"⚙️"),Ma(pt("input",{type:"range","onUpdate:modelValue":p[1]||(p[1]=_=>u.value=_),min:"0.5",max:"3.0",step:"0.1",class:"speed-slider"},null,512),[[uc,u.value,void 0,{number:!0}]])]),pt("div",CA,[Ea(me(h.value)+" ",1),h.value>d.value?(qt(),Kt("span",RA,"🏆")):_n("",!0)])]),pt("div",PA,[pt("div",IA,[pt("button",{class:"icon-btn",onClick:p[2]||(p[2]=_=>e.value=!0)},"⚙️"),Ma(pt("input",{type:"range","onUpdate:modelValue":p[3]||(p[3]=_=>c.value=_),min:"0.5",max:"3.0",step:"0.1",class:"speed-slider"},null,512),[[uc,c.value,void 0,{number:!0}]])]),pt("div",LA,[Ea(me(d.value)+" ",1),d.value>h.value?(qt(),Kt("span",DA,"🏆")):_n("",!0)])]),Tn(gf,{modelValue:e.value,"onUpdate:modelValue":p[4]||(p[4]=_=>e.value=_),team:"P1"},null,8,["modelValue"]),Tn(gf,{modelValue:n.value,"onUpdate:modelValue":p[5]||(p[5]=_=>n.value=_),team:"P2"},null,8,["modelValue"])]))}}),FA=cs(NA,[["__scopeId","data-v-880576e5"]]),UA={key:0,class:"portal-container"},OA={class:"settings-panel"},BA={class:"setting-item"},zA={class:"setting-item"},kA={class:"setting-item"},VA=["value"],HA={class:"games-grid"},GA=["onClick"],WA={class:"game-icon"},qA={class:"game-info"},XA={class:"modal-content"},jA={class:"modal-header"},YA={class:"vocab-list"},$A=["onClick"],KA={class:"vocab-name"},ZA={class:"vocab-count"},JA=as({__name:"App",setup(i){const{speak:t}=Tr(),e=te(window.location.hash.replace("#/","")||null),n=te(!1),s=[{id:"parking-jam",name:"Parking Jam",desc:"Race to park cars!",icon:"🚗"},{id:"falling-words",name:"Star Words",desc:"Catch the words in space!",icon:"🚀"},{id:"spelling-mode",name:"Spell Master",desc:"Spell words letter by letter!",icon:"🛸"},{id:"duel-mode",name:"Duel",desc:"2-Player Battle!",icon:"⚔️"},{id:"code-knight",name:"Code Knight",desc:"Control by your voice!",icon:"🛡️"},{id:"coming-soon",name:"More Games",desc:"Coming Soon...",icon:"🔐"}];window.addEventListener("hashchange",()=>{const h=window.location.hash.replace("#/","");e.value=h||null});const r=h=>{h!=="coming-soon"&&(e.value=h,window.location.hash=`#/${h}`)},o=()=>{e.value=null,window.location.hash=""},a=te([]),l=()=>{a.value=window.speechSynthesis.getVoices().filter(h=>h.lang.startsWith("en")||h.lang.startsWith("zh"))},c=()=>{t("Hello, 你好")};l(),window.speechSynthesis.onvoiceschanged!==void 0&&(window.speechSynthesis.onvoiceschanged=l);const u=()=>{n.value=!n.value},d=h=>{Ii.selectList(h),n.value=!1};return(h,f)=>e.value?e.value==="falling-words"?(qt(),rr(z_,{key:1,onExit:o})):e.value==="spelling-mode"?(qt(),rr(Q_,{key:2,onExit:o})):e.value==="duel-mode"?(qt(),rr(Sv,{key:3,onExit:o})):e.value==="code-knight"?(qt(),rr(Fv,{key:4,onExit:o})):e.value==="parking-jam"?(qt(),rr(FA,{key:5,onExit:o})):_n("",!0):(qt(),Kt("div",UA,[f[8]||(f[8]=pt("h1",{class:"portal-title"},"Kid's Learning Ark",-1)),pt("div",OA,[pt("div",BA,[f[4]||(f[4]=pt("label",null,"Vocabulary:",-1)),pt("button",{class:"vocab-btn",onClick:u}," 📖 "+me(Wt(Ii).state.currentListName),1)]),pt("div",zA,[pt("label",null,"Speech Speed: "+me(Wt(Fe).speechRate)+"x",1),Ma(pt("input",{type:"range",min:"0.5",max:"2.0",step:"0.1","onUpdate:modelValue":f[0]||(f[0]=p=>Wt(Fe).speechRate=p)},null,512),[[uc,Wt(Fe).speechRate,void 0,{number:!0}]])]),pt("div",kA,[f[6]||(f[6]=pt("label",null,"Game Voice:",-1)),Ma(pt("select",{"onUpdate:modelValue":f[1]||(f[1]=p=>Wt(Fe).voiceURI=p)},[f[5]||(f[5]=pt("option",{value:null},"Default (Auto)",-1)),(qt(!0),Kt(Re,null,gn(a.value,p=>(qt(),Kt("option",{key:p.voiceURI,value:p.voiceURI},me(p.name),9,VA))),128))],512),[[Q0,Wt(Fe).voiceURI]])]),pt("div",{class:"test-voice"},[pt("button",{onClick:c},"Test Voice")])]),pt("div",HA,[(qt(),Kt(Re,null,gn(s,p=>pt("div",{key:p.id,class:Wn(["game-card",{disabled:p.id==="coming-soon"}]),onClick:_=>r(p.id)},[pt("div",WA,me(p.icon),1),pt("div",qA,[pt("h3",null,me(p.name),1),pt("p",null,me(p.desc),1)])],10,GA)),64))]),n.value?(qt(),Kt("div",{key:0,class:"modal-overlay",onClick:f[3]||(f[3]=vr(p=>n.value=!1,["self"]))},[pt("div",XA,[pt("div",jA,[f[7]||(f[7]=pt("h2",null,"Select Vocabulary",-1)),pt("button",{class:"close-btn",onClick:f[2]||(f[2]=p=>n.value=!1)},"×")]),pt("div",YA,[(qt(!0),Kt(Re,null,gn(Wt(Ii).lists,p=>(qt(),Kt("div",{key:p.name,class:Wn(["vocab-item",{active:p.name===Wt(Ii).state.currentListName}]),onClick:_=>d(p.name)},[pt("span",KA,me(p.name),1),pt("span",ZA,me(p.data.length)+" words",1)],10,$A))),128))])])])):_n("",!0)]))}}),QA=cs(JA,[["__scopeId","data-v-80f295cb"]]);s_(QA).mount("#app");
