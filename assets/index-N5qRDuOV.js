var fm=Object.defineProperty;var dm=(i,t,e)=>t in i?fm(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var Te=(i,t,e)=>dm(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function eu(i){const t=Object.create(null);for(const e of i.split(","))t[e]=1;return e=>e in t}const Se={},Js=[],Qn=()=>{},td=()=>!1,Ea=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&(i.charCodeAt(2)>122||i.charCodeAt(2)<97),nu=i=>i.startsWith("onUpdate:"),Ke=Object.assign,iu=(i,t)=>{const e=i.indexOf(t);e>-1&&i.splice(e,1)},pm=Object.prototype.hasOwnProperty,pe=(i,t)=>pm.call(i,t),Kt=Array.isArray,Qs=i=>uo(i)==="[object Map]",Ta=i=>uo(i)==="[object Set]",$u=i=>uo(i)==="[object Date]",te=i=>typeof i=="function",Oe=i=>typeof i=="string",si=i=>typeof i=="symbol",Ee=i=>i!==null&&typeof i=="object",ed=i=>(Ee(i)||te(i))&&te(i.then)&&te(i.catch),nd=Object.prototype.toString,uo=i=>nd.call(i),mm=i=>uo(i).slice(8,-1),id=i=>uo(i)==="[object Object]",su=i=>Oe(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,Vr=eu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Aa=i=>{const t=Object.create(null);return e=>t[e]||(t[e]=i(e))},gm=/-\w/g,Qi=Aa(i=>i.replace(gm,t=>t.slice(1).toUpperCase())),vm=/\B([A-Z])/g,As=Aa(i=>i.replace(vm,"-$1").toLowerCase()),sd=Aa(i=>i.charAt(0).toUpperCase()+i.slice(1)),Wa=Aa(i=>i?`on${sd(i)}`:""),Ji=(i,t)=>!Object.is(i,t),ta=(i,...t)=>{for(let e=0;e<i.length;e++)i[e](...t)},rd=(i,t,e,n=!1)=>{Object.defineProperty(i,t,{configurable:!0,enumerable:!1,writable:n,value:e})},Ca=i=>{const t=parseFloat(i);return isNaN(t)?i:t};let Yu;const Ra=()=>Yu||(Yu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function nn(i){if(Kt(i)){const t={};for(let e=0;e<i.length;e++){const n=i[e],s=Oe(n)?Sm(n):nn(n);if(s)for(const r in s)t[r]=s[r]}return t}else if(Oe(i)||Ee(i))return i}const xm=/;(?![^(]*\))/g,_m=/:([^]+)/,ym=/\/\*[^]*?\*\//g;function Sm(i){const t={};return i.replace(ym,"").split(xm).forEach(e=>{if(e){const n=e.split(_m);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function Kn(i){let t="";if(Oe(i))t=i;else if(Kt(i))for(let e=0;e<i.length;e++){const n=Kn(i[e]);n&&(t+=n+" ")}else if(Ee(i))for(const e in i)i[e]&&(t+=e+" ");return t.trim()}const Mm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",bm=eu(Mm);function od(i){return!!i||i===""}function wm(i,t){if(i.length!==t.length)return!1;let e=!0;for(let n=0;e&&n<i.length;n++)e=Pa(i[n],t[n]);return e}function Pa(i,t){if(i===t)return!0;let e=$u(i),n=$u(t);if(e||n)return e&&n?i.getTime()===t.getTime():!1;if(e=si(i),n=si(t),e||n)return i===t;if(e=Kt(i),n=Kt(t),e||n)return e&&n?wm(i,t):!1;if(e=Ee(i),n=Ee(t),e||n){if(!e||!n)return!1;const s=Object.keys(i).length,r=Object.keys(t).length;if(s!==r)return!1;for(const o in i){const a=i.hasOwnProperty(o),l=t.hasOwnProperty(o);if(a&&!l||!a&&l||!Pa(i[o],t[o]))return!1}}return String(i)===String(t)}function Em(i,t){return i.findIndex(e=>Pa(e,t))}const ad=i=>!!(i&&i.__v_isRef===!0),xe=i=>Oe(i)?i:i==null?"":Kt(i)||Ee(i)&&(i.toString===nd||!te(i.toString))?ad(i)?xe(i.value):JSON.stringify(i,ld,2):String(i),ld=(i,t)=>ad(t)?ld(i,t.value):Qs(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[n,s],r)=>(e[Xa(n,r)+" =>"]=s,e),{})}:Ta(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Xa(e))}:si(t)?Xa(t):Ee(t)&&!Kt(t)&&!id(t)?String(t):t,Xa=(i,t="")=>{var e;return si(i)?`Symbol(${(e=i.description)!=null?e:t})`:i};/**
* @vue/reactivity v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let cn;class Tm{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=cn,!t&&cn&&(this.index=(cn.scopes||(cn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=cn;try{return cn=this,t()}finally{cn=e}}}on(){++this._on===1&&(this.prevScope=cn,cn=this)}off(){this._on>0&&--this._on===0&&(cn=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let e,n;for(e=0,n=this.effects.length;e<n;e++)this.effects[e].stop();for(this.effects.length=0,e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Am(){return cn}let we;const qa=new WeakSet;class cd{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,cn&&cn.active&&cn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,qa.has(this)&&(qa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||hd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ju(this),fd(this);const t=we,e=Un;we=this,Un=!0;try{return this.fn()}finally{dd(this),we=t,Un=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)au(t);this.deps=this.depsTail=void 0,ju(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?qa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Wl(this)&&this.run()}get dirty(){return Wl(this)}}let ud=0,kr,Gr;function hd(i,t=!1){if(i.flags|=8,t){i.next=Gr,Gr=i;return}i.next=kr,kr=i}function ru(){ud++}function ou(){if(--ud>0)return;if(Gr){let t=Gr;for(Gr=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let i;for(;kr;){let t=kr;for(kr=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(n){i||(i=n)}t=e}}if(i)throw i}function fd(i){for(let t=i.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function dd(i){let t,e=i.depsTail,n=e;for(;n;){const s=n.prevDep;n.version===-1?(n===e&&(e=s),au(n),Cm(n)):t=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=s}i.deps=t,i.depsTail=e}function Wl(i){for(let t=i.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(pd(t.dep.computed)||t.dep.version!==t.version))return!0;return!!i._dirty}function pd(i){if(i.flags&4&&!(i.flags&16)||(i.flags&=-17,i.globalVersion===Zr)||(i.globalVersion=Zr,!i.isSSR&&i.flags&128&&(!i.deps&&!i._dirty||!Wl(i))))return;i.flags|=2;const t=i.dep,e=we,n=Un;we=i,Un=!0;try{fd(i);const s=i.fn(i._value);(t.version===0||Ji(s,i._value))&&(i.flags|=128,i._value=s,t.version++)}catch(s){throw t.version++,s}finally{we=e,Un=n,dd(i),i.flags&=-3}}function au(i,t=!1){const{dep:e,prevSub:n,nextSub:s}=i;if(n&&(n.nextSub=s,i.prevSub=void 0),s&&(s.prevSub=n,i.nextSub=void 0),e.subs===i&&(e.subs=n,!n&&e.computed)){e.computed.flags&=-5;for(let r=e.computed.deps;r;r=r.nextDep)au(r,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function Cm(i){const{prevDep:t,nextDep:e}=i;t&&(t.nextDep=e,i.prevDep=void 0),e&&(e.prevDep=t,i.nextDep=void 0)}let Un=!0;const md=[];function Li(){md.push(Un),Un=!1}function Di(){const i=md.pop();Un=i===void 0?!0:i}function ju(i){const{cleanup:t}=i;if(i.cleanup=void 0,t){const e=we;we=void 0;try{t()}finally{we=e}}}let Zr=0;class Rm{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class lu{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!we||!Un||we===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==we)e=this.activeLink=new Rm(we,this),we.deps?(e.prevDep=we.depsTail,we.depsTail.nextDep=e,we.depsTail=e):we.deps=we.depsTail=e,gd(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const n=e.nextDep;n.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=n),e.prevDep=we.depsTail,e.nextDep=void 0,we.depsTail.nextDep=e,we.depsTail=e,we.deps===e&&(we.deps=n)}return e}trigger(t){this.version++,Zr++,this.notify(t)}notify(t){ru();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{ou()}}}function gd(i){if(i.dep.sc++,i.sub.flags&4){const t=i.dep.computed;if(t&&!i.dep.subs){t.flags|=20;for(let n=t.deps;n;n=n.nextDep)gd(n)}const e=i.dep.subs;e!==i&&(i.prevSub=e,e&&(e.nextSub=i)),i.dep.subs=i}}const Xl=new WeakMap,Ss=Symbol(""),ql=Symbol(""),Jr=Symbol("");function Xe(i,t,e){if(Un&&we){let n=Xl.get(i);n||Xl.set(i,n=new Map);let s=n.get(e);s||(n.set(e,s=new lu),s.map=n,s.key=e),s.track()}}function wi(i,t,e,n,s,r){const o=Xl.get(i);if(!o){Zr++;return}const a=l=>{l&&l.trigger()};if(ru(),t==="clear")o.forEach(a);else{const l=Kt(i),c=l&&su(e);if(l&&e==="length"){const u=Number(n);o.forEach((f,h)=>{(h==="length"||h===Jr||!si(h)&&h>=u)&&a(f)})}else switch((e!==void 0||o.has(void 0))&&a(o.get(e)),c&&a(o.get(Jr)),t){case"add":l?c&&a(o.get("length")):(a(o.get(Ss)),Qs(i)&&a(o.get(ql)));break;case"delete":l||(a(o.get(Ss)),Qs(i)&&a(o.get(ql)));break;case"set":Qs(i)&&a(o.get(Ss));break}}ou()}function Is(i){const t=de(i);return t===i?t:(Xe(t,"iterate",Jr),wn(i)?t:t.map(zn))}function Ia(i){return Xe(i=de(i),"iterate",Jr),i}function qi(i,t){return Ni(i)?Ms(i)?or(zn(t)):or(t):zn(t)}const Pm={__proto__:null,[Symbol.iterator](){return $a(this,Symbol.iterator,i=>qi(this,i))},concat(...i){return Is(this).concat(...i.map(t=>Kt(t)?Is(t):t))},entries(){return $a(this,"entries",i=>(i[1]=qi(this,i[1]),i))},every(i,t){return fi(this,"every",i,t,void 0,arguments)},filter(i,t){return fi(this,"filter",i,t,e=>e.map(n=>qi(this,n)),arguments)},find(i,t){return fi(this,"find",i,t,e=>qi(this,e),arguments)},findIndex(i,t){return fi(this,"findIndex",i,t,void 0,arguments)},findLast(i,t){return fi(this,"findLast",i,t,e=>qi(this,e),arguments)},findLastIndex(i,t){return fi(this,"findLastIndex",i,t,void 0,arguments)},forEach(i,t){return fi(this,"forEach",i,t,void 0,arguments)},includes(...i){return Ya(this,"includes",i)},indexOf(...i){return Ya(this,"indexOf",i)},join(i){return Is(this).join(i)},lastIndexOf(...i){return Ya(this,"lastIndexOf",i)},map(i,t){return fi(this,"map",i,t,void 0,arguments)},pop(){return Sr(this,"pop")},push(...i){return Sr(this,"push",i)},reduce(i,...t){return Ku(this,"reduce",i,t)},reduceRight(i,...t){return Ku(this,"reduceRight",i,t)},shift(){return Sr(this,"shift")},some(i,t){return fi(this,"some",i,t,void 0,arguments)},splice(...i){return Sr(this,"splice",i)},toReversed(){return Is(this).toReversed()},toSorted(i){return Is(this).toSorted(i)},toSpliced(...i){return Is(this).toSpliced(...i)},unshift(...i){return Sr(this,"unshift",i)},values(){return $a(this,"values",i=>qi(this,i))}};function $a(i,t,e){const n=Ia(i),s=n[t]();return n!==i&&!wn(i)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=e(r.value)),r}),s}const Im=Array.prototype;function fi(i,t,e,n,s,r){const o=Ia(i),a=o!==i&&!wn(i),l=o[t];if(l!==Im[t]){const f=l.apply(i,r);return a?zn(f):f}let c=e;o!==i&&(a?c=function(f,h){return e.call(this,qi(i,f),h,i)}:e.length>2&&(c=function(f,h){return e.call(this,f,h,i)}));const u=l.call(o,c,n);return a&&s?s(u):u}function Ku(i,t,e,n){const s=Ia(i);let r=e;return s!==i&&(wn(i)?e.length>3&&(r=function(o,a,l){return e.call(this,o,a,l,i)}):r=function(o,a,l){return e.call(this,o,qi(i,a),l,i)}),s[t](r,...n)}function Ya(i,t,e){const n=de(i);Xe(n,"iterate",Jr);const s=n[t](...e);return(s===-1||s===!1)&&hu(e[0])?(e[0]=de(e[0]),n[t](...e)):s}function Sr(i,t,e=[]){Li(),ru();const n=de(i)[t].apply(i,e);return ou(),Di(),n}const Lm=eu("__proto__,__v_isRef,__isVue"),vd=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(si));function Dm(i){si(i)||(i=String(i));const t=de(this);return Xe(t,"has",i),t.hasOwnProperty(i)}class xd{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,n){if(e==="__v_skip")return t.__v_skip;const s=this._isReadonly,r=this._isShallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return r;if(e==="__v_raw")return n===(s?r?Hm:Md:r?Sd:yd).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(n)?t:void 0;const o=Kt(t);if(!s){let l;if(o&&(l=Pm[e]))return l;if(e==="hasOwnProperty")return Dm}const a=Reflect.get(t,e,$e(t)?t:n);if((si(e)?vd.has(e):Lm(e))||(s||Xe(t,"get",e),r))return a;if($e(a)){const l=o&&su(e)?a:a.value;return s&&Ee(l)?Yl(l):l}return Ee(a)?s?Yl(a):Cs(a):a}}class _d extends xd{constructor(t=!1){super(!1,t)}set(t,e,n,s){let r=t[e];const o=Kt(t)&&su(e);if(!this._isShallow){const c=Ni(r);if(!wn(n)&&!Ni(n)&&(r=de(r),n=de(n)),!o&&$e(r)&&!$e(n))return c||(r.value=n),!0}const a=o?Number(e)<t.length:pe(t,e),l=Reflect.set(t,e,n,$e(t)?t:s);return t===de(s)&&(a?Ji(n,r)&&wi(t,"set",e,n):wi(t,"add",e,n)),l}deleteProperty(t,e){const n=pe(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&wi(t,"delete",e,void 0),s}has(t,e){const n=Reflect.has(t,e);return(!si(e)||!vd.has(e))&&Xe(t,"has",e),n}ownKeys(t){return Xe(t,"iterate",Kt(t)?"length":Ss),Reflect.ownKeys(t)}}class Nm extends xd{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const Fm=new _d,Um=new Nm,Om=new _d(!0);const $l=i=>i,So=i=>Reflect.getPrototypeOf(i);function Bm(i,t,e){return function(...n){const s=this.__v_raw,r=de(s),o=Qs(r),a=i==="entries"||i===Symbol.iterator&&o,l=i==="keys"&&o,c=s[i](...n),u=e?$l:t?or:zn;return!t&&Xe(r,"iterate",l?ql:Ss),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function Mo(i){return function(...t){return i==="delete"?!1:i==="clear"?void 0:this}}function zm(i,t){const e={get(s){const r=this.__v_raw,o=de(r),a=de(s);i||(Ji(s,a)&&Xe(o,"get",s),Xe(o,"get",a));const{has:l}=So(o),c=t?$l:i?or:zn;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!i&&Xe(de(s),"iterate",Ss),s.size},has(s){const r=this.__v_raw,o=de(r),a=de(s);return i||(Ji(s,a)&&Xe(o,"has",s),Xe(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=de(a),c=t?$l:i?or:zn;return!i&&Xe(l,"iterate",Ss),a.forEach((u,f)=>s.call(r,c(u),c(f),o))}};return Ke(e,i?{add:Mo("add"),set:Mo("set"),delete:Mo("delete"),clear:Mo("clear")}:{add(s){!t&&!wn(s)&&!Ni(s)&&(s=de(s));const r=de(this);return So(r).has.call(r,s)||(r.add(s),wi(r,"add",s,s)),this},set(s,r){!t&&!wn(r)&&!Ni(r)&&(r=de(r));const o=de(this),{has:a,get:l}=So(o);let c=a.call(o,s);c||(s=de(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?Ji(r,u)&&wi(o,"set",s,r):wi(o,"add",s,r),this},delete(s){const r=de(this),{has:o,get:a}=So(r);let l=o.call(r,s);l||(s=de(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&wi(r,"delete",s,void 0),c},clear(){const s=de(this),r=s.size!==0,o=s.clear();return r&&wi(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=Bm(s,i,t)}),e}function cu(i,t){const e=zm(i,t);return(n,s,r)=>s==="__v_isReactive"?!i:s==="__v_isReadonly"?i:s==="__v_raw"?n:Reflect.get(pe(e,s)&&s in n?e:n,s,r)}const Vm={get:cu(!1,!1)},km={get:cu(!1,!0)},Gm={get:cu(!0,!1)};const yd=new WeakMap,Sd=new WeakMap,Md=new WeakMap,Hm=new WeakMap;function Wm(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Xm(i){return i.__v_skip||!Object.isExtensible(i)?0:Wm(mm(i))}function Cs(i){return Ni(i)?i:uu(i,!1,Fm,Vm,yd)}function qm(i){return uu(i,!1,Om,km,Sd)}function Yl(i){return uu(i,!0,Um,Gm,Md)}function uu(i,t,e,n,s){if(!Ee(i)||i.__v_raw&&!(t&&i.__v_isReactive))return i;const r=Xm(i);if(r===0)return i;const o=s.get(i);if(o)return o;const a=new Proxy(i,r===2?n:e);return s.set(i,a),a}function Ms(i){return Ni(i)?Ms(i.__v_raw):!!(i&&i.__v_isReactive)}function Ni(i){return!!(i&&i.__v_isReadonly)}function wn(i){return!!(i&&i.__v_isShallow)}function hu(i){return i?!!i.__v_raw:!1}function de(i){const t=i&&i.__v_raw;return t?de(t):i}function $m(i){return!pe(i,"__v_skip")&&Object.isExtensible(i)&&rd(i,"__v_skip",!0),i}const zn=i=>Ee(i)?Cs(i):i,or=i=>Ee(i)?Yl(i):i;function $e(i){return i?i.__v_isRef===!0:!1}function ie(i){return Ym(i,!1)}function Ym(i,t){return $e(i)?i:new jm(i,t)}class jm{constructor(t,e){this.dep=new lu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:de(t),this._value=e?t:zn(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,n=this.__v_isShallow||wn(t)||Ni(t);t=n?t:de(t),Ji(t,e)&&(this._rawValue=t,this._value=n?t:zn(t),this.dep.trigger())}}function Wt(i){return $e(i)?i.value:i}const Km={get:(i,t,e)=>t==="__v_raw"?i:Wt(Reflect.get(i,t,e)),set:(i,t,e,n)=>{const s=i[t];return $e(s)&&!$e(e)?(s.value=e,!0):Reflect.set(i,t,e,n)}};function bd(i){return Ms(i)?i:new Proxy(i,Km)}class Zm{constructor(t,e,n){this.fn=t,this.setter=e,this._value=void 0,this.dep=new lu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Zr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&we!==this)return hd(this,!0),!0}get value(){const t=this.dep.track();return pd(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Jm(i,t,e=!1){let n,s;return te(i)?n=i:(n=i.get,s=i.set),new Zm(n,s,e)}const bo={},ha=new WeakMap;let ds;function Qm(i,t=!1,e=ds){if(e){let n=ha.get(e);n||ha.set(e,n=[]),n.push(i)}}function tg(i,t,e=Se){const{immediate:n,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=e,c=x=>s?x:wn(x)||s===!1||s===0?Ei(x,1):Ei(x);let u,f,h,d,m=!1,v=!1;if($e(i)?(f=()=>i.value,m=wn(i)):Ms(i)?(f=()=>c(i),m=!0):Kt(i)?(v=!0,m=i.some(x=>Ms(x)||wn(x)),f=()=>i.map(x=>{if($e(x))return x.value;if(Ms(x))return c(x);if(te(x))return l?l(x,2):x()})):te(i)?t?f=l?()=>l(i,2):i:f=()=>{if(h){Li();try{h()}finally{Di()}}const x=ds;ds=u;try{return l?l(i,3,[d]):i(d)}finally{ds=x}}:f=Qn,t&&s){const x=f,M=s===!0?1/0:s;f=()=>Ei(x(),M)}const p=Am(),g=()=>{u.stop(),p&&p.active&&iu(p.effects,u)};if(r&&t){const x=t;t=(...M)=>{x(...M),g()}}let _=v?new Array(i.length).fill(bo):bo;const S=x=>{if(!(!(u.flags&1)||!u.dirty&&!x))if(t){const M=u.run();if(s||m||(v?M.some((w,A)=>Ji(w,_[A])):Ji(M,_))){h&&h();const w=ds;ds=u;try{const A=[M,_===bo?void 0:v&&_[0]===bo?[]:_,d];_=M,l?l(t,3,A):t(...A)}finally{ds=w}}}else u.run()};return a&&a(S),u=new cd(f),u.scheduler=o?()=>o(S,!1):S,d=x=>Qm(x,!1,u),h=u.onStop=()=>{const x=ha.get(u);if(x){if(l)l(x,4);else for(const M of x)M();ha.delete(u)}},t?n?S(!0):_=u.run():o?o(S.bind(null,!0),!0):u.run(),g.pause=u.pause.bind(u),g.resume=u.resume.bind(u),g.stop=g,g}function Ei(i,t=1/0,e){if(t<=0||!Ee(i)||i.__v_skip||(e=e||new Map,(e.get(i)||0)>=t))return i;if(e.set(i,t),t--,$e(i))Ei(i.value,t,e);else if(Kt(i))for(let n=0;n<i.length;n++)Ei(i[n],t,e);else if(Ta(i)||Qs(i))i.forEach(n=>{Ei(n,t,e)});else if(id(i)){for(const n in i)Ei(i[n],t,e);for(const n of Object.getOwnPropertySymbols(i))Object.prototype.propertyIsEnumerable.call(i,n)&&Ei(i[n],t,e)}return i}/**
* @vue/runtime-core v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ho(i,t,e,n){try{return n?i(...n):i()}catch(s){La(s,t,e)}}function ri(i,t,e,n){if(te(i)){const s=ho(i,t,e,n);return s&&ed(s)&&s.catch(r=>{La(r,t,e)}),s}if(Kt(i)){const s=[];for(let r=0;r<i.length;r++)s.push(ri(i[r],t,e,n));return s}}function La(i,t,e,n=!0){const s=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||Se;if(t){let a=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](i,l,c)===!1)return}a=a.parent}if(r){Li(),ho(r,null,10,[i,l,c]),Di();return}}eg(i,e,s,n,o)}function eg(i,t,e,n=!0,s=!1){if(s)throw i;console.error(i)}const en=[];let $n=-1;const tr=[];let $i=null,js=0;const wd=Promise.resolve();let fa=null;function Ed(i){const t=fa||wd;return i?t.then(this?i.bind(this):i):t}function ng(i){let t=$n+1,e=en.length;for(;t<e;){const n=t+e>>>1,s=en[n],r=Qr(s);r<i||r===i&&s.flags&2?t=n+1:e=n}return t}function fu(i){if(!(i.flags&1)){const t=Qr(i),e=en[en.length-1];!e||!(i.flags&2)&&t>=Qr(e)?en.push(i):en.splice(ng(t),0,i),i.flags|=1,Td()}}function Td(){fa||(fa=wd.then(Cd))}function ig(i){Kt(i)?tr.push(...i):$i&&i.id===-1?$i.splice(js+1,0,i):i.flags&1||(tr.push(i),i.flags|=1),Td()}function Zu(i,t,e=$n+1){for(;e<en.length;e++){const n=en[e];if(n&&n.flags&2){if(i&&n.id!==i.uid)continue;en.splice(e,1),e--,n.flags&4&&(n.flags&=-2),n(),n.flags&4||(n.flags&=-2)}}}function Ad(i){if(tr.length){const t=[...new Set(tr)].sort((e,n)=>Qr(e)-Qr(n));if(tr.length=0,$i){$i.push(...t);return}for($i=t,js=0;js<$i.length;js++){const e=$i[js];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}$i=null,js=0}}const Qr=i=>i.id==null?i.flags&2?-1:1/0:i.id;function Cd(i){try{for($n=0;$n<en.length;$n++){const t=en[$n];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),ho(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;$n<en.length;$n++){const t=en[$n];t&&(t.flags&=-2)}$n=-1,en.length=0,Ad(),fa=null,(en.length||tr.length)&&Cd()}}let bn=null,Rd=null;function da(i){const t=bn;return bn=i,Rd=i&&i.type.__scopeId||null,t}function sg(i,t=bn,e){if(!t||i._n)return i;const n=(...s)=>{n._d&&ah(-1);const r=da(t);let o;try{o=i(...s)}finally{da(r),n._d&&ah(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function pa(i,t){if(bn===null)return i;const e=Ua(bn),n=i.dirs||(i.dirs=[]);for(let s=0;s<t.length;s++){let[r,o,a,l=Se]=t[s];r&&(te(r)&&(r={mounted:r,updated:r}),r.deep&&Ei(o),n.push({dir:r,instance:e,value:o,oldValue:void 0,arg:a,modifiers:l}))}return i}function ss(i,t,e,n){const s=i.dirs,r=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[n];l&&(Li(),ri(l,e,8,[i.el,a,i,t]),Di())}}function rg(i,t){if(sn){let e=sn.provides;const n=sn.parent&&sn.parent.provides;n===e&&(e=sn.provides=Object.create(n)),e[i]=t}}function ea(i,t,e=!1){const n=i0();if(n||nr){let s=nr?nr._context.provides:n?n.parent==null||n.ce?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:void 0;if(s&&i in s)return s[i];if(arguments.length>1)return e&&te(t)?t.call(n&&n.proxy):t}}const og=Symbol.for("v-scx"),ag=()=>ea(og);function er(i,t,e){return Pd(i,t,e)}function Pd(i,t,e=Se){const{immediate:n,deep:s,flush:r,once:o}=e,a=Ke({},e),l=t&&n||!t&&r!=="post";let c;if(eo){if(r==="sync"){const d=ag();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=Qn,d.resume=Qn,d.pause=Qn,d}}const u=sn;a.call=(d,m,v)=>ri(d,u,m,v);let f=!1;r==="post"?a.scheduler=d=>{mn(d,u&&u.suspense)}:r!=="sync"&&(f=!0,a.scheduler=(d,m)=>{m?d():fu(d)}),a.augmentJob=d=>{t&&(d.flags|=4),f&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const h=tg(i,t,a);return eo&&(c?c.push(h):l&&h()),h}function lg(i,t,e){const n=this.proxy,s=Oe(i)?i.includes(".")?Id(n,i):()=>n[i]:i.bind(n,n);let r;te(t)?r=t:(r=t.handler,e=t);const o=po(this),a=Pd(s,r.bind(n),e);return o(),a}function Id(i,t){const e=t.split(".");return()=>{let n=i;for(let s=0;s<e.length&&n;s++)n=n[e[s]];return n}}const cg=Symbol("_vte"),ug=i=>i.__isTeleport,hg=Symbol("_leaveCb");function du(i,t){i.shapeFlag&6&&i.component?(i.transition=t,du(i.component.subTree,t)):i.shapeFlag&128?(i.ssContent.transition=t.clone(i.ssContent),i.ssFallback.transition=t.clone(i.ssFallback)):i.transition=t}function pr(i,t){return te(i)?Ke({name:i.name},t,{setup:i}):i}function Ld(i){i.ids=[i.ids[0]+i.ids[2]+++"-",0,0]}const ma=new WeakMap;function Hr(i,t,e,n,s=!1){if(Kt(i)){i.forEach((m,v)=>Hr(m,t&&(Kt(t)?t[v]:t),e,n,s));return}if(Wr(n)&&!s){n.shapeFlag&512&&n.type.__asyncResolved&&n.component.subTree.component&&Hr(i,t,e,n.component.subTree);return}const r=n.shapeFlag&4?Ua(n.component):n.el,o=s?null:r,{i:a,r:l}=i,c=t&&t.r,u=a.refs===Se?a.refs={}:a.refs,f=a.setupState,h=de(f),d=f===Se?td:m=>pe(h,m);if(c!=null&&c!==l){if(Ju(t),Oe(c))u[c]=null,d(c)&&(f[c]=null);else if($e(c)){c.value=null;const m=t;m.k&&(u[m.k]=null)}}if(te(l))ho(l,a,12,[o,u]);else{const m=Oe(l),v=$e(l);if(m||v){const p=()=>{if(i.f){const g=m?d(l)?f[l]:u[l]:l.value;if(s)Kt(g)&&iu(g,r);else if(Kt(g))g.includes(r)||g.push(r);else if(m)u[l]=[r],d(l)&&(f[l]=u[l]);else{const _=[r];l.value=_,i.k&&(u[i.k]=_)}}else m?(u[l]=o,d(l)&&(f[l]=o)):v&&(l.value=o,i.k&&(u[i.k]=o))};if(o){const g=()=>{p(),ma.delete(i)};g.id=-1,ma.set(i,g),mn(g,e)}else Ju(i),p()}}}function Ju(i){const t=ma.get(i);t&&(t.flags|=8,ma.delete(i))}Ra().requestIdleCallback;Ra().cancelIdleCallback;const Wr=i=>!!i.type.__asyncLoader,Dd=i=>i.type.__isKeepAlive;function fg(i,t){Nd(i,"a",t)}function dg(i,t){Nd(i,"da",t)}function Nd(i,t,e=sn){const n=i.__wdc||(i.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return i()});if(Da(t,n,e),e){let s=e.parent;for(;s&&s.parent;)Dd(s.parent.vnode)&&pg(n,t,e,s),s=s.parent}}function pg(i,t,e,n){const s=Da(t,i,n,!0);Rs(()=>{iu(n[t],s)},e)}function Da(i,t,e=sn,n=!1){if(e){const s=e[i]||(e[i]=[]),r=t.__weh||(t.__weh=(...o)=>{Li();const a=po(e),l=ri(t,e,i,o);return a(),Di(),l});return n?s.unshift(r):s.push(r),r}}const Oi=i=>(t,e=sn)=>{(!eo||i==="sp")&&Da(i,(...n)=>t(...n),e)},mg=Oi("bm"),fo=Oi("m"),gg=Oi("bu"),vg=Oi("u"),xg=Oi("bum"),Rs=Oi("um"),_g=Oi("sp"),yg=Oi("rtg"),Sg=Oi("rtc");function Mg(i,t=sn){Da("ec",i,t)}const bg=Symbol.for("v-ndc");function xn(i,t,e,n){let s;const r=e,o=Kt(i);if(o||Oe(i)){const a=o&&Ms(i);let l=!1,c=!1;a&&(l=!wn(i),c=Ni(i),i=Ia(i)),s=new Array(i.length);for(let u=0,f=i.length;u<f;u++)s[u]=t(l?c?or(zn(i[u])):zn(i[u]):i[u],u,void 0,r)}else if(typeof i=="number"){s=new Array(i);for(let a=0;a<i;a++)s[a]=t(a+1,a,void 0,r)}else if(Ee(i))if(i[Symbol.iterator])s=Array.from(i,(a,l)=>t(a,l,void 0,r));else{const a=Object.keys(i);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=t(i[u],u,l,r)}}else s=[];return s}const jl=i=>i?np(i)?Ua(i):jl(i.parent):null,Xr=Ke(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>jl(i.parent),$root:i=>jl(i.root),$host:i=>i.ce,$emit:i=>i.emit,$options:i=>Ud(i),$forceUpdate:i=>i.f||(i.f=()=>{fu(i.update)}),$nextTick:i=>i.n||(i.n=Ed.bind(i.proxy)),$watch:i=>lg.bind(i)}),ja=(i,t)=>i!==Se&&!i.__isScriptSetup&&pe(i,t),wg={get({_:i},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:n,data:s,props:r,accessCache:o,type:a,appContext:l}=i;if(t[0]!=="$"){const h=o[t];if(h!==void 0)switch(h){case 1:return n[t];case 2:return s[t];case 4:return e[t];case 3:return r[t]}else{if(ja(n,t))return o[t]=1,n[t];if(s!==Se&&pe(s,t))return o[t]=2,s[t];if(pe(r,t))return o[t]=3,r[t];if(e!==Se&&pe(e,t))return o[t]=4,e[t];Kl&&(o[t]=0)}}const c=Xr[t];let u,f;if(c)return t==="$attrs"&&Xe(i.attrs,"get",""),c(i);if((u=a.__cssModules)&&(u=u[t]))return u;if(e!==Se&&pe(e,t))return o[t]=4,e[t];if(f=l.config.globalProperties,pe(f,t))return f[t]},set({_:i},t,e){const{data:n,setupState:s,ctx:r}=i;return ja(s,t)?(s[t]=e,!0):n!==Se&&pe(n,t)?(n[t]=e,!0):pe(i.props,t)||t[0]==="$"&&t.slice(1)in i?!1:(r[t]=e,!0)},has({_:{data:i,setupState:t,accessCache:e,ctx:n,appContext:s,props:r,type:o}},a){let l;return!!(e[a]||i!==Se&&a[0]!=="$"&&pe(i,a)||ja(t,a)||pe(r,a)||pe(n,a)||pe(Xr,a)||pe(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(i,t,e){return e.get!=null?i._.accessCache[t]=0:pe(e,"value")&&this.set(i,t,e.value,null),Reflect.defineProperty(i,t,e)}};function Qu(i){return Kt(i)?i.reduce((t,e)=>(t[e]=null,t),{}):i}let Kl=!0;function Eg(i){const t=Ud(i),e=i.proxy,n=i.ctx;Kl=!1,t.beforeCreate&&th(t.beforeCreate,i,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:m,activated:v,deactivated:p,beforeDestroy:g,beforeUnmount:_,destroyed:S,unmounted:x,render:M,renderTracked:w,renderTriggered:A,errorCaptured:F,serverPrefetch:b,expose:T,inheritAttrs:L,components:X,directives:O,filters:q}=t;if(c&&Tg(c,n,null),o)for(const W in o){const j=o[W];te(j)&&(n[W]=j.bind(e))}if(s){const W=s.call(e,e);Ee(W)&&(i.data=Cs(W))}if(Kl=!0,r)for(const W in r){const j=r[W],ft=te(j)?j.bind(e,e):te(j.get)?j.get.bind(e,e):Qn,at=!te(j)&&te(j.set)?j.set.bind(e):Qn,dt=vu({get:ft,set:at});Object.defineProperty(n,W,{enumerable:!0,configurable:!0,get:()=>dt.value,set:xt=>dt.value=xt})}if(a)for(const W in a)Fd(a[W],n,e,W);if(l){const W=te(l)?l.call(e):l;Reflect.ownKeys(W).forEach(j=>{rg(j,W[j])})}u&&th(u,i,"c");function U(W,j){Kt(j)?j.forEach(ft=>W(ft.bind(e))):j&&W(j.bind(e))}if(U(mg,f),U(fo,h),U(gg,d),U(vg,m),U(fg,v),U(dg,p),U(Mg,F),U(Sg,w),U(yg,A),U(xg,_),U(Rs,x),U(_g,b),Kt(T))if(T.length){const W=i.exposed||(i.exposed={});T.forEach(j=>{Object.defineProperty(W,j,{get:()=>e[j],set:ft=>e[j]=ft,enumerable:!0})})}else i.exposed||(i.exposed={});M&&i.render===Qn&&(i.render=M),L!=null&&(i.inheritAttrs=L),X&&(i.components=X),O&&(i.directives=O),b&&Ld(i)}function Tg(i,t,e=Qn){Kt(i)&&(i=Zl(i));for(const n in i){const s=i[n];let r;Ee(s)?"default"in s?r=ea(s.from||n,s.default,!0):r=ea(s.from||n):r=ea(s),$e(r)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[n]=r}}function th(i,t,e){ri(Kt(i)?i.map(n=>n.bind(t.proxy)):i.bind(t.proxy),t,e)}function Fd(i,t,e,n){let s=n.includes(".")?Id(e,n):()=>e[n];if(Oe(i)){const r=t[i];te(r)&&er(s,r)}else if(te(i))er(s,i.bind(e));else if(Ee(i))if(Kt(i))i.forEach(r=>Fd(r,t,e,n));else{const r=te(i.handler)?i.handler.bind(e):t[i.handler];te(r)&&er(s,r,i)}}function Ud(i){const t=i.type,{mixins:e,extends:n}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=i.appContext,a=r.get(t);let l;return a?l=a:!s.length&&!e&&!n?l=t:(l={},s.length&&s.forEach(c=>ga(l,c,o,!0)),ga(l,t,o)),Ee(t)&&r.set(t,l),l}function ga(i,t,e,n=!1){const{mixins:s,extends:r}=t;r&&ga(i,r,e,!0),s&&s.forEach(o=>ga(i,o,e,!0));for(const o in t)if(!(n&&o==="expose")){const a=Ag[o]||e&&e[o];i[o]=a?a(i[o],t[o]):t[o]}return i}const Ag={data:eh,props:nh,emits:nh,methods:Ur,computed:Ur,beforeCreate:Je,created:Je,beforeMount:Je,mounted:Je,beforeUpdate:Je,updated:Je,beforeDestroy:Je,beforeUnmount:Je,destroyed:Je,unmounted:Je,activated:Je,deactivated:Je,errorCaptured:Je,serverPrefetch:Je,components:Ur,directives:Ur,watch:Rg,provide:eh,inject:Cg};function eh(i,t){return t?i?function(){return Ke(te(i)?i.call(this,this):i,te(t)?t.call(this,this):t)}:t:i}function Cg(i,t){return Ur(Zl(i),Zl(t))}function Zl(i){if(Kt(i)){const t={};for(let e=0;e<i.length;e++)t[i[e]]=i[e];return t}return i}function Je(i,t){return i?[...new Set([].concat(i,t))]:t}function Ur(i,t){return i?Ke(Object.create(null),i,t):t}function nh(i,t){return i?Kt(i)&&Kt(t)?[...new Set([...i,...t])]:Ke(Object.create(null),Qu(i),Qu(t??{})):t}function Rg(i,t){if(!i)return t;if(!t)return i;const e=Ke(Object.create(null),i);for(const n in t)e[n]=Je(i[n],t[n]);return e}function Od(){return{app:null,config:{isNativeTag:td,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Pg=0;function Ig(i,t){return function(n,s=null){te(n)||(n=Ke({},n)),s!=null&&!Ee(s)&&(s=null);const r=Od(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:Pg++,_component:n,_props:s,_container:null,_context:r,_instance:null,version:c0,get config(){return r.config},set config(u){},use(u,...f){return o.has(u)||(u&&te(u.install)?(o.add(u),u.install(c,...f)):te(u)&&(o.add(u),u(c,...f))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,f){return f?(r.components[u]=f,c):r.components[u]},directive(u,f){return f?(r.directives[u]=f,c):r.directives[u]},mount(u,f,h){if(!l){const d=c._ceVNode||ti(n,s);return d.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),i(d,u,h),l=!0,c._container=u,u.__vue_app__=c,Ua(d.component)}},onUnmount(u){a.push(u)},unmount(){l&&(ri(a,c._instance,16),i(null,c._container),delete c._container.__vue_app__)},provide(u,f){return r.provides[u]=f,c},runWithContext(u){const f=nr;nr=c;try{return u()}finally{nr=f}}};return c}}let nr=null;const Lg=(i,t)=>t==="modelValue"||t==="model-value"?i.modelModifiers:i[`${t}Modifiers`]||i[`${Qi(t)}Modifiers`]||i[`${As(t)}Modifiers`];function Dg(i,t,...e){if(i.isUnmounted)return;const n=i.vnode.props||Se;let s=e;const r=t.startsWith("update:"),o=r&&Lg(n,t.slice(7));o&&(o.trim&&(s=e.map(u=>Oe(u)?u.trim():u)),o.number&&(s=e.map(Ca)));let a,l=n[a=Wa(t)]||n[a=Wa(Qi(t))];!l&&r&&(l=n[a=Wa(As(t))]),l&&ri(l,i,6,s);const c=n[a+"Once"];if(c){if(!i.emitted)i.emitted={};else if(i.emitted[a])return;i.emitted[a]=!0,ri(c,i,6,s)}}const Ng=new WeakMap;function Bd(i,t,e=!1){const n=e?Ng:t.emitsCache,s=n.get(i);if(s!==void 0)return s;const r=i.emits;let o={},a=!1;if(!te(i)){const l=c=>{const u=Bd(c,t,!0);u&&(a=!0,Ke(o,u))};!e&&t.mixins.length&&t.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!r&&!a?(Ee(i)&&n.set(i,null),null):(Kt(r)?r.forEach(l=>o[l]=null):Ke(o,r),Ee(i)&&n.set(i,o),o)}function Na(i,t){return!i||!Ea(t)?!1:(t=t.slice(2).replace(/Once$/,""),pe(i,t[0].toLowerCase()+t.slice(1))||pe(i,As(t))||pe(i,t))}function ih(i){const{type:t,vnode:e,proxy:n,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:d,ctx:m,inheritAttrs:v}=i,p=da(i);let g,_;try{if(e.shapeFlag&4){const x=s||n,M=x;g=Yn(c.call(M,x,u,f,d,h,m)),_=a}else{const x=t;g=Yn(x.length>1?x(f,{attrs:a,slots:o,emit:l}):x(f,null)),_=t.props?a:Fg(a)}}catch(x){qr.length=0,La(x,i,1),g=ti(ts)}let S=g;if(_&&v!==!1){const x=Object.keys(_),{shapeFlag:M}=S;x.length&&M&7&&(r&&x.some(nu)&&(_=Ug(_,r)),S=ar(S,_,!1,!0))}return e.dirs&&(S=ar(S,null,!1,!0),S.dirs=S.dirs?S.dirs.concat(e.dirs):e.dirs),e.transition&&du(S,e.transition),g=S,da(p),g}const Fg=i=>{let t;for(const e in i)(e==="class"||e==="style"||Ea(e))&&((t||(t={}))[e]=i[e]);return t},Ug=(i,t)=>{const e={};for(const n in i)(!nu(n)||!(n.slice(9)in t))&&(e[n]=i[n]);return e};function Og(i,t,e){const{props:n,children:s,component:r}=i,{props:o,children:a,patchFlag:l}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return n?sh(n,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==n[h]&&!Na(c,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?sh(n,o,c):!0:!!o;return!1}function sh(i,t,e){const n=Object.keys(t);if(n.length!==Object.keys(i).length)return!0;for(let s=0;s<n.length;s++){const r=n[s];if(t[r]!==i[r]&&!Na(e,r))return!0}return!1}function Bg({vnode:i,parent:t},e){for(;t;){const n=t.subTree;if(n.suspense&&n.suspense.activeBranch===i&&(n.el=i.el),n===i)(i=t.vnode).el=e,t=t.parent;else break}}const zd={},Vd=()=>Object.create(zd),kd=i=>Object.getPrototypeOf(i)===zd;function zg(i,t,e,n=!1){const s={},r=Vd();i.propsDefaults=Object.create(null),Gd(i,t,s,r);for(const o in i.propsOptions[0])o in s||(s[o]=void 0);e?i.props=n?s:qm(s):i.type.props?i.props=s:i.props=r,i.attrs=r}function Vg(i,t,e,n){const{props:s,attrs:r,vnode:{patchFlag:o}}=i,a=de(s),[l]=i.propsOptions;let c=!1;if((n||o>0)&&!(o&16)){if(o&8){const u=i.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Na(i.emitsOptions,h))continue;const d=t[h];if(l)if(pe(r,h))d!==r[h]&&(r[h]=d,c=!0);else{const m=Qi(h);s[m]=Jl(l,a,m,d,i,!1)}else d!==r[h]&&(r[h]=d,c=!0)}}}else{Gd(i,t,s,r)&&(c=!0);let u;for(const f in a)(!t||!pe(t,f)&&((u=As(f))===f||!pe(t,u)))&&(l?e&&(e[f]!==void 0||e[u]!==void 0)&&(s[f]=Jl(l,a,f,void 0,i,!0)):delete s[f]);if(r!==a)for(const f in r)(!t||!pe(t,f))&&(delete r[f],c=!0)}c&&wi(i.attrs,"set","")}function Gd(i,t,e,n){const[s,r]=i.propsOptions;let o=!1,a;if(t)for(let l in t){if(Vr(l))continue;const c=t[l];let u;s&&pe(s,u=Qi(l))?!r||!r.includes(u)?e[u]=c:(a||(a={}))[u]=c:Na(i.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,o=!0)}if(r){const l=de(e),c=a||Se;for(let u=0;u<r.length;u++){const f=r[u];e[f]=Jl(s,l,f,c[f],i,!pe(c,f))}}return o}function Jl(i,t,e,n,s,r){const o=i[e];if(o!=null){const a=pe(o,"default");if(a&&n===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&te(l)){const{propsDefaults:c}=s;if(e in c)n=c[e];else{const u=po(s);n=c[e]=l.call(null,t),u()}}else n=l;s.ce&&s.ce._setProp(e,n)}o[0]&&(r&&!a?n=!1:o[1]&&(n===""||n===As(e))&&(n=!0))}return n}const kg=new WeakMap;function Hd(i,t,e=!1){const n=e?kg:t.propsCache,s=n.get(i);if(s)return s;const r=i.props,o={},a=[];let l=!1;if(!te(i)){const u=f=>{l=!0;const[h,d]=Hd(f,t,!0);Ke(o,h),d&&a.push(...d)};!e&&t.mixins.length&&t.mixins.forEach(u),i.extends&&u(i.extends),i.mixins&&i.mixins.forEach(u)}if(!r&&!l)return Ee(i)&&n.set(i,Js),Js;if(Kt(r))for(let u=0;u<r.length;u++){const f=Qi(r[u]);rh(f)&&(o[f]=Se)}else if(r)for(const u in r){const f=Qi(u);if(rh(f)){const h=r[u],d=o[f]=Kt(h)||te(h)?{type:h}:Ke({},h),m=d.type;let v=!1,p=!0;if(Kt(m))for(let g=0;g<m.length;++g){const _=m[g],S=te(_)&&_.name;if(S==="Boolean"){v=!0;break}else S==="String"&&(p=!1)}else v=te(m)&&m.name==="Boolean";d[0]=v,d[1]=p,(v||pe(d,"default"))&&a.push(f)}}const c=[o,a];return Ee(i)&&n.set(i,c),c}function rh(i){return i[0]!=="$"&&!Vr(i)}const pu=i=>i==="_"||i==="_ctx"||i==="$stable",mu=i=>Kt(i)?i.map(Yn):[Yn(i)],Gg=(i,t,e)=>{if(t._n)return t;const n=sg((...s)=>mu(t(...s)),e);return n._c=!1,n},Wd=(i,t,e)=>{const n=i._ctx;for(const s in i){if(pu(s))continue;const r=i[s];if(te(r))t[s]=Gg(s,r,n);else if(r!=null){const o=mu(r);t[s]=()=>o}}},Xd=(i,t)=>{const e=mu(t);i.slots.default=()=>e},qd=(i,t,e)=>{for(const n in t)(e||!pu(n))&&(i[n]=t[n])},Hg=(i,t,e)=>{const n=i.slots=Vd();if(i.vnode.shapeFlag&32){const s=t._;s?(qd(n,t,e),e&&rd(n,"_",s,!0)):Wd(t,n)}else t&&Xd(i,t)},Wg=(i,t,e)=>{const{vnode:n,slots:s}=i;let r=!0,o=Se;if(n.shapeFlag&32){const a=t._;a?e&&a===1?r=!1:qd(s,t,e):(r=!t.$stable,Wd(t,s)),o=t}else t&&(Xd(i,t),o={default:1});if(r)for(const a in s)!pu(a)&&o[a]==null&&delete s[a]},mn=jg;function Xg(i){return qg(i)}function qg(i,t){const e=Ra();e.__VUE__=!0;const{insert:n,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=Qn,insertStaticContent:m}=i,v=(I,N,D,z=null,H=null,$=null,R=void 0,it=null,et=!!N.dynamicChildren)=>{if(I===N)return;I&&!Mr(I,N)&&(z=G(I),xt(I,H,$,!0),I=null),N.patchFlag===-2&&(et=!1,N.dynamicChildren=null);const{type:tt,ref:st,shapeFlag:C}=N;switch(tt){case Fa:p(I,N,D,z);break;case ts:g(I,N,D,z);break;case na:I==null&&_(N,D,z,R);break;case Ce:X(I,N,D,z,H,$,R,it,et);break;default:C&1?M(I,N,D,z,H,$,R,it,et):C&6?O(I,N,D,z,H,$,R,it,et):(C&64||C&128)&&tt.process(I,N,D,z,H,$,R,it,et,lt)}st!=null&&H?Hr(st,I&&I.ref,$,N||I,!N):st==null&&I&&I.ref!=null&&Hr(I.ref,null,$,I,!0)},p=(I,N,D,z)=>{if(I==null)n(N.el=a(N.children),D,z);else{const H=N.el=I.el;N.children!==I.children&&c(H,N.children)}},g=(I,N,D,z)=>{I==null?n(N.el=l(N.children||""),D,z):N.el=I.el},_=(I,N,D,z)=>{[I.el,I.anchor]=m(I.children,N,D,z,I.el,I.anchor)},S=({el:I,anchor:N},D,z)=>{let H;for(;I&&I!==N;)H=h(I),n(I,D,z),I=H;n(N,D,z)},x=({el:I,anchor:N})=>{let D;for(;I&&I!==N;)D=h(I),s(I),I=D;s(N)},M=(I,N,D,z,H,$,R,it,et)=>{if(N.type==="svg"?R="svg":N.type==="math"&&(R="mathml"),I==null)w(N,D,z,H,$,R,it,et);else{const tt=I.el&&I.el._isVueCE?I.el:null;try{tt&&tt._beginPatch(),b(I,N,H,$,R,it,et)}finally{tt&&tt._endPatch()}}},w=(I,N,D,z,H,$,R,it)=>{let et,tt;const{props:st,shapeFlag:C,transition:y,dirs:B}=I;if(et=I.el=o(I.type,$,st&&st.is,st),C&8?u(et,I.children):C&16&&F(I.children,et,null,z,H,Ka(I,$),R,it),B&&ss(I,null,z,"created"),A(et,I,I.scopeId,R,z),st){for(const ht in st)ht!=="value"&&!Vr(ht)&&r(et,ht,null,st[ht],$,z);"value"in st&&r(et,"value",null,st.value,$),(tt=st.onVnodeBeforeMount)&&kn(tt,z,I)}B&&ss(I,null,z,"beforeMount");const Z=$g(H,y);Z&&y.beforeEnter(et),n(et,N,D),((tt=st&&st.onVnodeMounted)||Z||B)&&mn(()=>{tt&&kn(tt,z,I),Z&&y.enter(et),B&&ss(I,null,z,"mounted")},H)},A=(I,N,D,z,H)=>{if(D&&d(I,D),z)for(let $=0;$<z.length;$++)d(I,z[$]);if(H){let $=H.subTree;if(N===$||Kd($.type)&&($.ssContent===N||$.ssFallback===N)){const R=H.vnode;A(I,R,R.scopeId,R.slotScopeIds,H.parent)}}},F=(I,N,D,z,H,$,R,it,et=0)=>{for(let tt=et;tt<I.length;tt++){const st=I[tt]=it?Yi(I[tt]):Yn(I[tt]);v(null,st,N,D,z,H,$,R,it)}},b=(I,N,D,z,H,$,R)=>{const it=N.el=I.el;let{patchFlag:et,dynamicChildren:tt,dirs:st}=N;et|=I.patchFlag&16;const C=I.props||Se,y=N.props||Se;let B;if(D&&rs(D,!1),(B=y.onVnodeBeforeUpdate)&&kn(B,D,N,I),st&&ss(N,I,D,"beforeUpdate"),D&&rs(D,!0),(C.innerHTML&&y.innerHTML==null||C.textContent&&y.textContent==null)&&u(it,""),tt?T(I.dynamicChildren,tt,it,D,z,Ka(N,H),$):R||j(I,N,it,null,D,z,Ka(N,H),$,!1),et>0){if(et&16)L(it,C,y,D,H);else if(et&2&&C.class!==y.class&&r(it,"class",null,y.class,H),et&4&&r(it,"style",C.style,y.style,H),et&8){const Z=N.dynamicProps;for(let ht=0;ht<Z.length;ht++){const Q=Z[ht],_t=C[Q],gt=y[Q];(gt!==_t||Q==="value")&&r(it,Q,_t,gt,H,D)}}et&1&&I.children!==N.children&&u(it,N.children)}else!R&&tt==null&&L(it,C,y,D,H);((B=y.onVnodeUpdated)||st)&&mn(()=>{B&&kn(B,D,N,I),st&&ss(N,I,D,"updated")},z)},T=(I,N,D,z,H,$,R)=>{for(let it=0;it<N.length;it++){const et=I[it],tt=N[it],st=et.el&&(et.type===Ce||!Mr(et,tt)||et.shapeFlag&198)?f(et.el):D;v(et,tt,st,null,z,H,$,R,!0)}},L=(I,N,D,z,H)=>{if(N!==D){if(N!==Se)for(const $ in N)!Vr($)&&!($ in D)&&r(I,$,N[$],null,H,z);for(const $ in D){if(Vr($))continue;const R=D[$],it=N[$];R!==it&&$!=="value"&&r(I,$,it,R,H,z)}"value"in D&&r(I,"value",N.value,D.value,H)}},X=(I,N,D,z,H,$,R,it,et)=>{const tt=N.el=I?I.el:a(""),st=N.anchor=I?I.anchor:a("");let{patchFlag:C,dynamicChildren:y,slotScopeIds:B}=N;B&&(it=it?it.concat(B):B),I==null?(n(tt,D,z),n(st,D,z),F(N.children||[],D,st,H,$,R,it,et)):C>0&&C&64&&y&&I.dynamicChildren&&I.dynamicChildren.length===y.length?(T(I.dynamicChildren,y,D,H,$,R,it),(N.key!=null||H&&N===H.subTree)&&$d(I,N,!0)):j(I,N,D,st,H,$,R,it,et)},O=(I,N,D,z,H,$,R,it,et)=>{N.slotScopeIds=it,I==null?N.shapeFlag&512?H.ctx.activate(N,D,z,R,et):q(N,D,z,H,$,R,et):V(I,N,et)},q=(I,N,D,z,H,$,R)=>{const it=I.component=n0(I,z,H);if(Dd(I)&&(it.ctx.renderer=lt),s0(it,!1,R),it.asyncDep){if(H&&H.registerDep(it,U,R),!I.el){const et=it.subTree=ti(ts);g(null,et,N,D),I.placeholder=et.el}}else U(it,I,N,D,H,$,R)},V=(I,N,D)=>{const z=N.component=I.component;if(Og(I,N,D))if(z.asyncDep&&!z.asyncResolved){W(z,N,D);return}else z.next=N,z.update();else N.el=I.el,z.vnode=N},U=(I,N,D,z,H,$,R)=>{const it=()=>{if(I.isMounted){let{next:C,bu:y,u:B,parent:Z,vnode:ht}=I;{const Nt=Yd(I);if(Nt){C&&(C.el=ht.el,W(I,C,R)),Nt.asyncDep.then(()=>{I.isUnmounted||it()});return}}let Q=C,_t;rs(I,!1),C?(C.el=ht.el,W(I,C,R)):C=ht,y&&ta(y),(_t=C.props&&C.props.onVnodeBeforeUpdate)&&kn(_t,Z,C,ht),rs(I,!0);const gt=ih(I),Et=I.subTree;I.subTree=gt,v(Et,gt,f(Et.el),G(Et),I,H,$),C.el=gt.el,Q===null&&Bg(I,gt.el),B&&mn(B,H),(_t=C.props&&C.props.onVnodeUpdated)&&mn(()=>kn(_t,Z,C,ht),H)}else{let C;const{el:y,props:B}=N,{bm:Z,m:ht,parent:Q,root:_t,type:gt}=I,Et=Wr(N);rs(I,!1),Z&&ta(Z),!Et&&(C=B&&B.onVnodeBeforeMount)&&kn(C,Q,N),rs(I,!0);{_t.ce&&_t.ce._def.shadowRoot!==!1&&_t.ce._injectChildStyle(gt);const Nt=I.subTree=ih(I);v(null,Nt,D,z,I,H,$),N.el=Nt.el}if(ht&&mn(ht,H),!Et&&(C=B&&B.onVnodeMounted)){const Nt=N;mn(()=>kn(C,Q,Nt),H)}(N.shapeFlag&256||Q&&Wr(Q.vnode)&&Q.vnode.shapeFlag&256)&&I.a&&mn(I.a,H),I.isMounted=!0,N=D=z=null}};I.scope.on();const et=I.effect=new cd(it);I.scope.off();const tt=I.update=et.run.bind(et),st=I.job=et.runIfDirty.bind(et);st.i=I,st.id=I.uid,et.scheduler=()=>fu(st),rs(I,!0),tt()},W=(I,N,D)=>{N.component=I;const z=I.vnode.props;I.vnode=N,I.next=null,Vg(I,N.props,z,D),Wg(I,N.children,D),Li(),Zu(I),Di()},j=(I,N,D,z,H,$,R,it,et=!1)=>{const tt=I&&I.children,st=I?I.shapeFlag:0,C=N.children,{patchFlag:y,shapeFlag:B}=N;if(y>0){if(y&128){at(tt,C,D,z,H,$,R,it,et);return}else if(y&256){ft(tt,C,D,z,H,$,R,it,et);return}}B&8?(st&16&&k(tt,H,$),C!==tt&&u(D,C)):st&16?B&16?at(tt,C,D,z,H,$,R,it,et):k(tt,H,$,!0):(st&8&&u(D,""),B&16&&F(C,D,z,H,$,R,it,et))},ft=(I,N,D,z,H,$,R,it,et)=>{I=I||Js,N=N||Js;const tt=I.length,st=N.length,C=Math.min(tt,st);let y;for(y=0;y<C;y++){const B=N[y]=et?Yi(N[y]):Yn(N[y]);v(I[y],B,D,null,H,$,R,it,et)}tt>st?k(I,H,$,!0,!1,C):F(N,D,z,H,$,R,it,et,C)},at=(I,N,D,z,H,$,R,it,et)=>{let tt=0;const st=N.length;let C=I.length-1,y=st-1;for(;tt<=C&&tt<=y;){const B=I[tt],Z=N[tt]=et?Yi(N[tt]):Yn(N[tt]);if(Mr(B,Z))v(B,Z,D,null,H,$,R,it,et);else break;tt++}for(;tt<=C&&tt<=y;){const B=I[C],Z=N[y]=et?Yi(N[y]):Yn(N[y]);if(Mr(B,Z))v(B,Z,D,null,H,$,R,it,et);else break;C--,y--}if(tt>C){if(tt<=y){const B=y+1,Z=B<st?N[B].el:z;for(;tt<=y;)v(null,N[tt]=et?Yi(N[tt]):Yn(N[tt]),D,Z,H,$,R,it,et),tt++}}else if(tt>y)for(;tt<=C;)xt(I[tt],H,$,!0),tt++;else{const B=tt,Z=tt,ht=new Map;for(tt=Z;tt<=y;tt++){const Tt=N[tt]=et?Yi(N[tt]):Yn(N[tt]);Tt.key!=null&&ht.set(Tt.key,tt)}let Q,_t=0;const gt=y-Z+1;let Et=!1,Nt=0;const mt=new Array(gt);for(tt=0;tt<gt;tt++)mt[tt]=0;for(tt=B;tt<=C;tt++){const Tt=I[tt];if(_t>=gt){xt(Tt,H,$,!0);continue}let Rt;if(Tt.key!=null)Rt=ht.get(Tt.key);else for(Q=Z;Q<=y;Q++)if(mt[Q-Z]===0&&Mr(Tt,N[Q])){Rt=Q;break}Rt===void 0?xt(Tt,H,$,!0):(mt[Rt-Z]=tt+1,Rt>=Nt?Nt=Rt:Et=!0,v(Tt,N[Rt],D,null,H,$,R,it,et),_t++)}const St=Et?Yg(mt):Js;for(Q=St.length-1,tt=gt-1;tt>=0;tt--){const Tt=Z+tt,Rt=N[Tt],bt=N[Tt+1],Gt=Tt+1<st?bt.el||jd(bt):z;mt[tt]===0?v(null,Rt,D,Gt,H,$,R,it,et):Et&&(Q<0||tt!==St[Q]?dt(Rt,D,Gt,2):Q--)}}},dt=(I,N,D,z,H=null)=>{const{el:$,type:R,transition:it,children:et,shapeFlag:tt}=I;if(tt&6){dt(I.component.subTree,N,D,z);return}if(tt&128){I.suspense.move(N,D,z);return}if(tt&64){R.move(I,N,D,lt);return}if(R===Ce){n($,N,D);for(let C=0;C<et.length;C++)dt(et[C],N,D,z);n(I.anchor,N,D);return}if(R===na){S(I,N,D);return}if(z!==2&&tt&1&&it)if(z===0)it.beforeEnter($),n($,N,D),mn(()=>it.enter($),H);else{const{leave:C,delayLeave:y,afterLeave:B}=it,Z=()=>{I.ctx.isUnmounted?s($):n($,N,D)},ht=()=>{$._isLeaving&&$[hg](!0),C($,()=>{Z(),B&&B()})};y?y($,Z,ht):ht()}else n($,N,D)},xt=(I,N,D,z=!1,H=!1)=>{const{type:$,props:R,ref:it,children:et,dynamicChildren:tt,shapeFlag:st,patchFlag:C,dirs:y,cacheIndex:B}=I;if(C===-2&&(H=!1),it!=null&&(Li(),Hr(it,null,D,I,!0),Di()),B!=null&&(N.renderCache[B]=void 0),st&256){N.ctx.deactivate(I);return}const Z=st&1&&y,ht=!Wr(I);let Q;if(ht&&(Q=R&&R.onVnodeBeforeUnmount)&&kn(Q,N,I),st&6)jt(I.component,D,z);else{if(st&128){I.suspense.unmount(D,z);return}Z&&ss(I,null,N,"beforeUnmount"),st&64?I.type.remove(I,N,D,lt,z):tt&&!tt.hasOnce&&($!==Ce||C>0&&C&64)?k(tt,N,D,!1,!0):($===Ce&&C&384||!H&&st&16)&&k(et,N,D),z&&Ft(I)}(ht&&(Q=R&&R.onVnodeUnmounted)||Z)&&mn(()=>{Q&&kn(Q,N,I),Z&&ss(I,null,N,"unmounted")},D)},Ft=I=>{const{type:N,el:D,anchor:z,transition:H}=I;if(N===Ce){kt(D,z);return}if(N===na){x(I);return}const $=()=>{s(D),H&&!H.persisted&&H.afterLeave&&H.afterLeave()};if(I.shapeFlag&1&&H&&!H.persisted){const{leave:R,delayLeave:it}=H,et=()=>R(D,$);it?it(I.el,$,et):et()}else $()},kt=(I,N)=>{let D;for(;I!==N;)D=h(I),s(I),I=D;s(N)},jt=(I,N,D)=>{const{bum:z,scope:H,job:$,subTree:R,um:it,m:et,a:tt}=I;oh(et),oh(tt),z&&ta(z),H.stop(),$&&($.flags|=8,xt(R,I,N,D)),it&&mn(it,N),mn(()=>{I.isUnmounted=!0},N)},k=(I,N,D,z=!1,H=!1,$=0)=>{for(let R=$;R<I.length;R++)xt(I[R],N,D,z,H)},G=I=>{if(I.shapeFlag&6)return G(I.component.subTree);if(I.shapeFlag&128)return I.suspense.next();const N=h(I.anchor||I.el),D=N&&N[cg];return D?h(D):N};let rt=!1;const ct=(I,N,D)=>{let z;I==null?N._vnode&&(xt(N._vnode,null,null,!0),z=N._vnode.component):v(N._vnode||null,I,N,null,null,null,D),N._vnode=I,rt||(rt=!0,Zu(z),Ad(),rt=!1)},lt={p:v,um:xt,m:dt,r:Ft,mt:q,mc:F,pc:j,pbc:T,n:G,o:i};return{render:ct,hydrate:void 0,createApp:Ig(ct)}}function Ka({type:i,props:t},e){return e==="svg"&&i==="foreignObject"||e==="mathml"&&i==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function rs({effect:i,job:t},e){e?(i.flags|=32,t.flags|=4):(i.flags&=-33,t.flags&=-5)}function $g(i,t){return(!i||i&&!i.pendingBranch)&&t&&!t.persisted}function $d(i,t,e=!1){const n=i.children,s=t.children;if(Kt(n)&&Kt(s))for(let r=0;r<n.length;r++){const o=n[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Yi(s[r]),a.el=o.el),!e&&a.patchFlag!==-2&&$d(o,a)),a.type===Fa&&(a.patchFlag!==-1?a.el=o.el:a.__elIndex=r+(i.type===Ce?1:0)),a.type===ts&&!a.el&&(a.el=o.el)}}function Yg(i){const t=i.slice(),e=[0];let n,s,r,o,a;const l=i.length;for(n=0;n<l;n++){const c=i[n];if(c!==0){if(s=e[e.length-1],i[s]<c){t[n]=s,e.push(n);continue}for(r=0,o=e.length-1;r<o;)a=r+o>>1,i[e[a]]<c?r=a+1:o=a;c<i[e[r]]&&(r>0&&(t[n]=e[r-1]),e[r]=n)}}for(r=e.length,o=e[r-1];r-- >0;)e[r]=o,o=t[o];return e}function Yd(i){const t=i.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Yd(t)}function oh(i){if(i)for(let t=0;t<i.length;t++)i[t].flags|=8}function jd(i){if(i.placeholder)return i.placeholder;const t=i.component;return t?jd(t.subTree):null}const Kd=i=>i.__isSuspense;function jg(i,t){t&&t.pendingBranch?Kt(i)?t.effects.push(...i):t.effects.push(i):ig(i)}const Ce=Symbol.for("v-fgt"),Fa=Symbol.for("v-txt"),ts=Symbol.for("v-cmt"),na=Symbol.for("v-stc"),qr=[];let vn=null;function Yt(i=!1){qr.push(vn=i?null:[])}function Kg(){qr.pop(),vn=qr[qr.length-1]||null}let to=1;function ah(i,t=!1){to+=i,i<0&&vn&&t&&(vn.hasOnce=!0)}function Zd(i){return i.dynamicChildren=to>0?vn||Js:null,Kg(),to>0&&vn&&vn.push(i),i}function Qt(i,t,e,n,s,r){return Zd(vt(i,t,e,n,s,r,!0))}function Ks(i,t,e,n,s){return Zd(ti(i,t,e,n,s,!0))}function Jd(i){return i?i.__v_isVNode===!0:!1}function Mr(i,t){return i.type===t.type&&i.key===t.key}const Qd=({key:i})=>i??null,ia=({ref:i,ref_key:t,ref_for:e})=>(typeof i=="number"&&(i=""+i),i!=null?Oe(i)||$e(i)||te(i)?{i:bn,r:i,k:t,f:!!e}:i:null);function vt(i,t=null,e=null,n=0,s=null,r=i===Ce?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:t,key:t&&Qd(t),ref:t&&ia(t),scopeId:Rd,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:n,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:bn};return a?(gu(l,e),r&128&&i.normalize(l)):e&&(l.shapeFlag|=Oe(e)?8:16),to>0&&!o&&vn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&vn.push(l),l}const ti=Zg;function Zg(i,t=null,e=null,n=0,s=null,r=!1){if((!i||i===bg)&&(i=ts),Jd(i)){const a=ar(i,t,!0);return e&&gu(a,e),to>0&&!r&&vn&&(a.shapeFlag&6?vn[vn.indexOf(i)]=a:vn.push(a)),a.patchFlag=-2,a}if(l0(i)&&(i=i.__vccOpts),t){t=Jg(t);let{class:a,style:l}=t;a&&!Oe(a)&&(t.class=Kn(a)),Ee(l)&&(hu(l)&&!Kt(l)&&(l=Ke({},l)),t.style=nn(l))}const o=Oe(i)?1:Kd(i)?128:ug(i)?64:Ee(i)?4:te(i)?2:0;return vt(i,t,e,n,s,o,r,!0)}function Jg(i){return i?hu(i)||kd(i)?Ke({},i):i:null}function ar(i,t,e=!1,n=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=i,c=t?Qg(s||{},t):s,u={__v_isVNode:!0,__v_skip:!0,type:i.type,props:c,key:c&&Qd(c),ref:t&&t.ref?e&&r?Kt(r)?r.concat(ia(t)):[r,ia(t)]:ia(t):r,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:a,target:i.target,targetStart:i.targetStart,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:t&&i.type!==Ce?o===-1?16:o|16:o,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:l,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&ar(i.ssContent),ssFallback:i.ssFallback&&ar(i.ssFallback),placeholder:i.placeholder,el:i.el,anchor:i.anchor,ctx:i.ctx,ce:i.ce};return l&&n&&du(u,l.clone(u)),u}function tp(i=" ",t=0){return ti(Fa,null,i,t)}function ep(i,t){const e=ti(na,null,i);return e.staticCount=t,e}function On(i="",t=!1){return t?(Yt(),Ks(ts,null,i)):ti(ts,null,i)}function Yn(i){return i==null||typeof i=="boolean"?ti(ts):Kt(i)?ti(Ce,null,i.slice()):Jd(i)?Yi(i):ti(Fa,null,String(i))}function Yi(i){return i.el===null&&i.patchFlag!==-1||i.memo?i:ar(i)}function gu(i,t){let e=0;const{shapeFlag:n}=i;if(t==null)t=null;else if(Kt(t))e=16;else if(typeof t=="object")if(n&65){const s=t.default;s&&(s._c&&(s._d=!1),gu(i,s()),s._c&&(s._d=!0));return}else{e=32;const s=t._;!s&&!kd(t)?t._ctx=bn:s===3&&bn&&(bn.slots._===1?t._=1:(t._=2,i.patchFlag|=1024))}else te(t)?(t={default:t,_ctx:bn},e=32):(t=String(t),n&64?(e=16,t=[tp(t)]):e=8);i.children=t,i.shapeFlag|=e}function Qg(...i){const t={};for(let e=0;e<i.length;e++){const n=i[e];for(const s in n)if(s==="class")t.class!==n.class&&(t.class=Kn([t.class,n.class]));else if(s==="style")t.style=nn([t.style,n.style]);else if(Ea(s)){const r=t[s],o=n[s];o&&r!==o&&!(Kt(r)&&r.includes(o))&&(t[s]=r?[].concat(r,o):o)}else s!==""&&(t[s]=n[s])}return t}function kn(i,t,e,n=null){ri(i,t,7,[e,n])}const t0=Od();let e0=0;function n0(i,t,e){const n=i.type,s=(t?t.appContext:i.appContext)||t0,r={uid:e0++,vnode:i,type:n,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Tm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Hd(n,s),emitsOptions:Bd(n,s),emit:null,emitted:null,propsDefaults:Se,inheritAttrs:n.inheritAttrs,ctx:Se,data:Se,props:Se,attrs:Se,slots:Se,refs:Se,setupState:Se,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=Dg.bind(null,r),i.ce&&i.ce(r),r}let sn=null;const i0=()=>sn||bn;let va,Ql;{const i=Ra(),t=(e,n)=>{let s;return(s=i[e])||(s=i[e]=[]),s.push(n),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};va=t("__VUE_INSTANCE_SETTERS__",e=>sn=e),Ql=t("__VUE_SSR_SETTERS__",e=>eo=e)}const po=i=>{const t=sn;return va(i),i.scope.on(),()=>{i.scope.off(),va(t)}},lh=()=>{sn&&sn.scope.off(),va(null)};function np(i){return i.vnode.shapeFlag&4}let eo=!1;function s0(i,t=!1,e=!1){t&&Ql(t);const{props:n,children:s}=i.vnode,r=np(i);zg(i,n,r,t),Hg(i,s,e||t);const o=r?r0(i,t):void 0;return t&&Ql(!1),o}function r0(i,t){const e=i.type;i.accessCache=Object.create(null),i.proxy=new Proxy(i.ctx,wg);const{setup:n}=e;if(n){Li();const s=i.setupContext=n.length>1?a0(i):null,r=po(i),o=ho(n,i,0,[i.props,s]),a=ed(o);if(Di(),r(),(a||i.sp)&&!Wr(i)&&Ld(i),a){if(o.then(lh,lh),t)return o.then(l=>{ch(i,l)}).catch(l=>{La(l,i,0)});i.asyncDep=o}else ch(i,o)}else ip(i)}function ch(i,t,e){te(t)?i.type.__ssrInlineRender?i.ssrRender=t:i.render=t:Ee(t)&&(i.setupState=bd(t)),ip(i)}function ip(i,t,e){const n=i.type;i.render||(i.render=n.render||Qn);{const s=po(i);Li();try{Eg(i)}finally{Di(),s()}}}const o0={get(i,t){return Xe(i,"get",""),i[t]}};function a0(i){const t=e=>{i.exposed=e||{}};return{attrs:new Proxy(i.attrs,o0),slots:i.slots,emit:i.emit,expose:t}}function Ua(i){return i.exposed?i.exposeProxy||(i.exposeProxy=new Proxy(bd($m(i.exposed)),{get(t,e){if(e in t)return t[e];if(e in Xr)return Xr[e](i)},has(t,e){return e in t||e in Xr}})):i.proxy}function l0(i){return te(i)&&"__vccOpts"in i}const vu=(i,t)=>Jm(i,t,eo),c0="3.5.26";/**
* @vue/runtime-dom v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let tc;const uh=typeof window<"u"&&window.trustedTypes;if(uh)try{tc=uh.createPolicy("vue",{createHTML:i=>i})}catch{}const sp=tc?i=>tc.createHTML(i):i=>i,u0="http://www.w3.org/2000/svg",h0="http://www.w3.org/1998/Math/MathML",bi=typeof document<"u"?document:null,hh=bi&&bi.createElement("template"),f0={insert:(i,t,e)=>{t.insertBefore(i,e||null)},remove:i=>{const t=i.parentNode;t&&t.removeChild(i)},createElement:(i,t,e,n)=>{const s=t==="svg"?bi.createElementNS(u0,i):t==="mathml"?bi.createElementNS(h0,i):e?bi.createElement(i,{is:e}):bi.createElement(i);return i==="select"&&n&&n.multiple!=null&&s.setAttribute("multiple",n.multiple),s},createText:i=>bi.createTextNode(i),createComment:i=>bi.createComment(i),setText:(i,t)=>{i.nodeValue=t},setElementText:(i,t)=>{i.textContent=t},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>bi.querySelector(i),setScopeId(i,t){i.setAttribute(t,"")},insertStaticContent(i,t,e,n,s,r){const o=e?e.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),e),!(s===r||!(s=s.nextSibling)););else{hh.innerHTML=sp(n==="svg"?`<svg>${i}</svg>`:n==="mathml"?`<math>${i}</math>`:i);const a=hh.content;if(n==="svg"||n==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},d0=Symbol("_vtc");function p0(i,t,e){const n=i[d0];n&&(t=(t?[t,...n]:[...n]).join(" ")),t==null?i.removeAttribute("class"):e?i.setAttribute("class",t):i.className=t}const fh=Symbol("_vod"),m0=Symbol("_vsh"),g0=Symbol(""),v0=/(?:^|;)\s*display\s*:/;function x0(i,t,e){const n=i.style,s=Oe(e);let r=!1;if(e&&!s){if(t)if(Oe(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();e[a]==null&&sa(n,a,"")}else for(const o in t)e[o]==null&&sa(n,o,"");for(const o in e)o==="display"&&(r=!0),sa(n,o,e[o])}else if(s){if(t!==e){const o=n[g0];o&&(e+=";"+o),n.cssText=e,r=v0.test(e)}}else t&&i.removeAttribute("style");fh in i&&(i[fh]=r?n.display:"",i[m0]&&(n.display="none"))}const dh=/\s*!important$/;function sa(i,t,e){if(Kt(e))e.forEach(n=>sa(i,t,n));else if(e==null&&(e=""),t.startsWith("--"))i.setProperty(t,e);else{const n=_0(i,t);dh.test(e)?i.setProperty(As(n),e.replace(dh,""),"important"):i[n]=e}}const ph=["Webkit","Moz","ms"],Za={};function _0(i,t){const e=Za[t];if(e)return e;let n=Qi(t);if(n!=="filter"&&n in i)return Za[t]=n;n=sd(n);for(let s=0;s<ph.length;s++){const r=ph[s]+n;if(r in i)return Za[t]=r}return t}const mh="http://www.w3.org/1999/xlink";function gh(i,t,e,n,s,r=bm(t)){n&&t.startsWith("xlink:")?e==null?i.removeAttributeNS(mh,t.slice(6,t.length)):i.setAttributeNS(mh,t,e):e==null||r&&!od(e)?i.removeAttribute(t):i.setAttribute(t,r?"":si(e)?String(e):e)}function vh(i,t,e,n,s){if(t==="innerHTML"||t==="textContent"){e!=null&&(i[t]=t==="innerHTML"?sp(e):e);return}const r=i.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?i.getAttribute("value")||"":i.value,l=e==null?i.type==="checkbox"?"on":"":String(e);(a!==l||!("_value"in i))&&(i.value=l),e==null&&i.removeAttribute(t),i._value=e;return}let o=!1;if(e===""||e==null){const a=typeof i[t];a==="boolean"?e=od(e):e==null&&a==="string"?(e="",o=!0):a==="number"&&(e=0,o=!0)}try{i[t]=e}catch{}o&&i.removeAttribute(s||t)}function ps(i,t,e,n){i.addEventListener(t,e,n)}function y0(i,t,e,n){i.removeEventListener(t,e,n)}const xh=Symbol("_vei");function S0(i,t,e,n,s=null){const r=i[xh]||(i[xh]={}),o=r[t];if(n&&o)o.value=n;else{const[a,l]=M0(t);if(n){const c=r[t]=E0(n,s);ps(i,a,c,l)}else o&&(y0(i,a,o,l),r[t]=void 0)}}const _h=/(?:Once|Passive|Capture)$/;function M0(i){let t;if(_h.test(i)){t={};let n;for(;n=i.match(_h);)i=i.slice(0,i.length-n[0].length),t[n[0].toLowerCase()]=!0}return[i[2]===":"?i.slice(3):As(i.slice(2)),t]}let Ja=0;const b0=Promise.resolve(),w0=()=>Ja||(b0.then(()=>Ja=0),Ja=Date.now());function E0(i,t){const e=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=e.attached)return;ri(T0(n,e.value),t,5,[n])};return e.value=i,e.attached=w0(),e}function T0(i,t){if(Kt(t)){const e=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{e.call(i),i._stopped=!0},t.map(n=>s=>!s._stopped&&n&&n(s))}else return t}const yh=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&i.charCodeAt(2)>96&&i.charCodeAt(2)<123,A0=(i,t,e,n,s,r)=>{const o=s==="svg";t==="class"?p0(i,n,o):t==="style"?x0(i,e,n):Ea(t)?nu(t)||S0(i,t,e,n,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):C0(i,t,n,o))?(vh(i,t,n),!i.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&gh(i,t,n,o,r,t!=="value")):i._isVueCE&&(/[A-Z]/.test(t)||!Oe(n))?vh(i,Qi(t),n,r,t):(t==="true-value"?i._trueValue=n:t==="false-value"&&(i._falseValue=n),gh(i,t,n,o))};function C0(i,t,e,n){if(n)return!!(t==="innerHTML"||t==="textContent"||t in i&&yh(t)&&te(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&i.tagName==="IFRAME"||t==="form"||t==="list"&&i.tagName==="INPUT"||t==="type"&&i.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=i.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return yh(t)&&Oe(e)?!1:t in i}const xa=i=>{const t=i.props["onUpdate:modelValue"]||!1;return Kt(t)?e=>ta(t,e):t};function R0(i){i.target.composing=!0}function Sh(i){const t=i.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const ir=Symbol("_assign");function Mh(i,t,e){return t&&(i=i.trim()),e&&(i=Ca(i)),i}const ec={created(i,{modifiers:{lazy:t,trim:e,number:n}},s){i[ir]=xa(s);const r=n||s.props&&s.props.type==="number";ps(i,t?"change":"input",o=>{o.target.composing||i[ir](Mh(i.value,e,r))}),(e||r)&&ps(i,"change",()=>{i.value=Mh(i.value,e,r)}),t||(ps(i,"compositionstart",R0),ps(i,"compositionend",Sh),ps(i,"change",Sh))},mounted(i,{value:t}){i.value=t??""},beforeUpdate(i,{value:t,oldValue:e,modifiers:{lazy:n,trim:s,number:r}},o){if(i[ir]=xa(o),i.composing)return;const a=(r||i.type==="number")&&!/^0\d/.test(i.value)?Ca(i.value):i.value,l=t??"";a!==l&&(document.activeElement===i&&i.type!=="range"&&(n&&t===e||s&&i.value.trim()===l)||(i.value=l))}},P0={deep:!0,created(i,{value:t,modifiers:{number:e}},n){const s=Ta(t);ps(i,"change",()=>{const r=Array.prototype.filter.call(i.options,o=>o.selected).map(o=>e?Ca(_a(o)):_a(o));i[ir](i.multiple?s?new Set(r):r:r[0]),i._assigning=!0,Ed(()=>{i._assigning=!1})}),i[ir]=xa(n)},mounted(i,{value:t}){bh(i,t)},beforeUpdate(i,t,e){i[ir]=xa(e)},updated(i,{value:t}){i._assigning||bh(i,t)}};function bh(i,t){const e=i.multiple,n=Kt(t);if(!(e&&!n&&!Ta(t))){for(let s=0,r=i.options.length;s<r;s++){const o=i.options[s],a=_a(o);if(e)if(n){const l=typeof a;l==="string"||l==="number"?o.selected=t.some(c=>String(c)===String(a)):o.selected=Em(t,a)>-1}else o.selected=t.has(a);else if(Pa(_a(o),t)){i.selectedIndex!==s&&(i.selectedIndex=s);return}}!e&&i.selectedIndex!==-1&&(i.selectedIndex=-1)}}function _a(i){return"_value"in i?i._value:i.value}const I0=["ctrl","shift","alt","meta"],L0={stop:i=>i.stopPropagation(),prevent:i=>i.preventDefault(),self:i=>i.target!==i.currentTarget,ctrl:i=>!i.ctrlKey,shift:i=>!i.shiftKey,alt:i=>!i.altKey,meta:i=>!i.metaKey,left:i=>"button"in i&&i.button!==0,middle:i=>"button"in i&&i.button!==1,right:i=>"button"in i&&i.button!==2,exact:(i,t)=>I0.some(e=>i[`${e}Key`]&&!t.includes(e))},no=(i,t)=>{const e=i._withMods||(i._withMods={}),n=t.join(".");return e[n]||(e[n]=(s,...r)=>{for(let o=0;o<t.length;o++){const a=L0[t[o]];if(a&&a(s,t))return}return i(s,...r)})},D0=Ke({patchProp:A0},f0);let wh;function N0(){return wh||(wh=Xg(D0))}const F0=(...i)=>{const t=N0().createApp(...i),{mount:e}=t;return t.mount=n=>{const s=O0(n);if(!s)return;const r=t._component;!te(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=e(s,!1,U0(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function U0(i){if(i instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&i instanceof MathMLElement)return"mathml"}function O0(i){return Oe(i)?document.querySelector(i):i}const rp="star_words_settings",B0={speechRate:.9,volume:1,voiceURI:null},Eh=localStorage.getItem(rp),z0=Eh?JSON.parse(Eh):B0,Ti=Cs(z0);er(Ti,i=>{localStorage.setItem(rp,JSON.stringify(i))});const br=window.speechSynthesis,V0=window.AudioContext||window.webkitAudioContext,ce=new V0,Qa={SUCCESS:"https://raw.githubusercontent.com/walles/numbervaders/master/app/src/main/res/raw/medal_earned_tada.mp3",WRONG:"https://raw.githubusercontent.com/walles/numbervaders/master/app/src/main/res/raw/wrong_answer.wav",EXPLOSION:"https://raw.githubusercontent.com/walles/numbervaders/master/app/src/main/res/raw/cannon_explosion.mp3"},tl={},k0=i=>(tl[i]||(tl[i]=new Audio(i)),tl[i]);function mr(){const i=c=>{const u=k0(c);u.currentTime=0,u.volume=.4,u.play().catch(f=>console.warn("SFX playback blocked or failed:",f))},t=(c,u="sine",f=.1,h=.1)=>{ce.state==="suspended"&&ce.resume();const d=ce.createOscillator(),m=ce.createGain();d.type=u,d.frequency.setValueAtTime(c,ce.currentTime),m.gain.setValueAtTime(h,ce.currentTime),m.gain.exponentialRampToValueAtTime(.001,ce.currentTime+f),d.connect(m),m.connect(ce.destination),d.start(),d.stop(ce.currentTime+f)};return{speak:(c,u=!0)=>{if(!br)return;const f=new SpeechSynthesisUtterance(c),h=/[\u4e00-\u9fa5\u3105-\u3129\u02CA\u02C7\u02CB\u02D9]/.test(c);f.lang=h?"zh-TW":"en-US",f.rate=Ti.speechRate;const d=br.getVoices();if(Ti.voiceURI){const m=d.find(v=>v.voiceURI===Ti.voiceURI);m&&(f.voice=m,f.lang=m.lang)}else if(h){const m=d.find(v=>v.lang.includes("zh-TW"))||d.find(v=>v.lang.includes("zh"))||d.find(v=>v.lang.includes("TW"));m&&(f.voice=m)}else{const m=d.find(p=>p.name==="Google US English"),v=d.find(p=>p.lang==="en-US");m?f.voice=m:v&&(f.voice=v)}u&&br.cancel(),u?setTimeout(()=>br.speak(f),50):br.speak(f)},playCorrect:()=>{t(1046.5,"sine",.15,.05),setTimeout(()=>t(1318.51,"sine",.25,.05),80)},playSuccess:()=>i(Qa.SUCCESS),playWrong:()=>i(Qa.WRONG),playExplosion:()=>i(Qa.EXPLOSION),playThrust:()=>{ce.state==="suspended"&&ce.resume();const c=.8,u=ce.sampleRate*c,f=ce.createBuffer(1,u,ce.sampleRate),h=f.getChannelData(0);for(let g=0;g<u;g++)h[g]=Math.random()*2-1;const d=ce.createBufferSource();d.buffer=f;const m=ce.createBiquadFilter();m.type="lowpass",m.Q.value=1;const v=ce.currentTime;m.frequency.setValueAtTime(5e3,v),m.frequency.exponentialRampToValueAtTime(400,v+c);const p=ce.createGain();p.gain.setValueAtTime(0,v),p.gain.linearRampToValueAtTime(.08,v+.04),p.gain.exponentialRampToValueAtTime(.001,v+c),d.connect(m),m.connect(p),p.connect(ce.destination),d.start(),d.stop(v+c)},playTone:t,playBrake:()=>{ce.state==="suspended"&&ce.resume();const c=ce.currentTime,u=.6,f=ce.sampleRate*u,h=ce.createBuffer(1,f,ce.sampleRate),d=h.getChannelData(0);for(let M=0;M<f;M++){const w=Math.random()*2-1,A=Math.sin(M*.05)>0?1:.5;d[M]=w*A}const m=ce.createBufferSource();m.buffer=h;const v=ce.createBiquadFilter();v.type="bandpass",v.frequency.setValueAtTime(2500,c),v.frequency.exponentialRampToValueAtTime(800,c+u),v.Q.value=3;const p=ce.createOscillator();p.type="sawtooth",p.frequency.setValueAtTime(3500,c),p.frequency.exponentialRampToValueAtTime(1200,c+u);const g=ce.createOscillator();g.type="triangle",g.frequency.setValueAtTime(3550,c),g.frequency.exponentialRampToValueAtTime(1250,c+u);const _=ce.createOscillator();_.type="sine",_.frequency.value=50;const S=ce.createGain();S.gain.value=100,_.connect(S),S.connect(p.frequency),S.connect(g.frequency);const x=ce.createGain();x.gain.setValueAtTime(0,c),x.gain.linearRampToValueAtTime(.12,c+.05),x.gain.exponentialRampToValueAtTime(.001,c+u),m.connect(v),v.connect(x),p.connect(x),g.connect(x),x.connect(ce.destination),m.start(),p.start(),g.start(),_.start(),m.stop(c+u),p.stop(c+u),g.stop(c+u),_.stop(c+u)}}}const G0=[{text:"does",translation:"做",category:"verb",example:"He does work"},{text:"pail",translation:"提桶",category:"object",example:"A blue pail"},{text:"main",translation:"主要的",category:"adjective",example:"The main road"},{text:"at",translation:"在",category:"preposition",example:"At the park"},{text:"has",translation:"有",category:"verb",example:"She has apple"},{text:"new",translation:"新的",category:"adjective",example:"A new car"},{text:"year",translation:"年",category:"time",example:"A happy year"},{text:"fun",translation:"真有趣",category:"adjective",example:"Play is fun"},{text:"party",translation:"派對",category:"social",example:"A birthday party"},{text:"green",translation:"綠色",category:"color",example:"Green grass"}],H0=Object.freeze(Object.defineProperty({__proto__:null,default:G0},Symbol.toStringTag,{value:"Module"})),W0=[{text:"cat",translation:"貓",category:"animal",example:"A small cat"},{text:"dog",translation:"狗",category:"animal",example:"A bark dog"},{text:"bird",translation:"鳥",category:"animal",example:"A blue bird"},{text:"lion",translation:"獅子",category:"animal",example:"A king lion"},{text:"tiger",translation:"老虎",category:"animal",example:"A fast tiger"},{text:"monkey",translation:"猴子",category:"animal",example:"A funny monkey"},{text:"rabbit",translation:"兔子",category:"animal",example:"A long-eared rabbit"},{text:"elephant",translation:"大象",category:"animal",example:"A huge elephant"}],X0=Object.freeze(Object.defineProperty({__proto__:null,default:W0},Symbol.toStringTag,{value:"Module"})),q0=[{text:"cat",translation:"貓",category:"animal",example:"A cute cat"},{text:"dog",translation:"狗",category:"animal",example:"A loyal dog"},{text:"elephant",translation:"大象",category:"animal",example:"A giant elephant"},{text:"lion",translation:"獅子",category:"animal",example:"A brave lion"},{text:"monkey",translation:"猴子",category:"animal",example:"A clever monkey"},{text:"rabbit",translation:"兔子",category:"animal",example:"A jumping rabbit"},{text:"tiger",translation:"老虎",category:"animal",example:"A powerful tiger"},{text:"bird",translation:"鳥",category:"animal",example:"A flying bird"},{text:"apple",translation:"蘋果",category:"fruit",example:"A sweet apple"},{text:"banana",translation:"香蕉",category:"fruit",example:"A yellow banana"},{text:"orange",translation:"橘子",category:"fruit",example:"A juicy orange"},{text:"grape",translation:"葡萄",category:"fruit",example:"A purple grape"},{text:"lemon",translation:"檸檬",category:"fruit",example:"A sour lemon"},{text:"strawberry",translation:"草莓",category:"fruit",example:"A red strawberry"},{text:"red",translation:"紅色",category:"color",example:"Red apple"},{text:"blue",translation:"藍色",category:"color",example:"Blue sky"},{text:"green",translation:"綠色",category:"color",example:"Green grass"},{text:"yellow",translation:"黃色",category:"color",example:"Yellow sun"},{text:"purple",translation:"紫色",category:"color",example:"Purple flower"},{text:"black",translation:"黑色",category:"color",example:"Black cat"},{text:"white",translation:"白色",category:"color",example:"White cloud"},{text:"one",translation:"一",category:"number",example:"One book"},{text:"two",translation:"二",category:"number",example:"Two pens"},{text:"three",translation:"三",category:"number",example:"Three birds"},{text:"four",translation:"四",category:"number",example:"Four chairs"},{text:"five",translation:"五",category:"number",example:"Five fingers"},{text:"ten",translation:"十",category:"number",example:"Ten toes"},{text:"water",translation:"水",category:"nature",example:"Clean water"},{text:"sun",translation:"太陽",category:"nature",example:"The bright sun"},{text:"moon",translation:"月亮",category:"nature",example:"The silver moon"},{text:"star",translation:"星星",category:"nature",example:"A shining star"},{text:"tree",translation:"樹",category:"nature",example:"A tall tree"},{text:"flower",translation:"花",category:"nature",example:"A pretty flower"},{text:"sea",translation:"大海",category:"nature",example:"Deep blue sea"},{text:"house",translation:"房子",category:"object",example:"A big house"},{text:"car",translation:"汽車",category:"object",example:"A fast car"},{text:"book",translation:"書",category:"object",example:"An old book"},{text:"pen",translation:"筆",category:"object",example:"A blue pen"},{text:"table",translation:"桌子",category:"object",example:"A wooden table"},{text:"chair",translation:"椅子",category:"object",example:"A comfortable chair"},{text:"phone",translation:"電話",category:"object",example:"A smart phone"},{text:"computer",translation:"電腦",category:"object",example:"A new computer"},{text:"hat",translation:"帽子",category:"clothes",example:"A warm hat"},{text:"shoes",translation:"鞋子",category:"clothes",example:"Black shoes"},{text:"shirt",translation:"襯衫",category:"clothes",example:"A white shirt"},{text:"pants",translation:"褲子",category:"clothes",example:"Blue pants"},{text:"mother",translation:"母親",category:"family",example:"I love mother"},{text:"father",translation:"父親",category:"family",example:"I love father"},{text:"brother",translation:"兄弟",category:"family",example:"My little brother"},{text:"sister",translation:"姐妹",category:"family",example:"My big sister"},{text:"baby",translation:"嬰兒",category:"family",example:"A crying baby"},{text:"friend",translation:"朋友",category:"people",example:"A good friend"},{text:"doctor",translation:"醫生",category:"people",example:"A kind doctor"},{text:"teacher",translation:"老師",category:"people",example:"A great teacher"},{text:"student",translation:"學生",category:"people",example:"A hard student"},{text:"run",translation:"跑",category:"verb",example:"I run fast"},{text:"jump",translation:"跳",category:"verb",example:"I jump high"},{text:"eat",translation:"吃",category:"verb",example:"I eat apple"},{text:"drink",translation:"喝",category:"verb",example:"I drink water"},{text:"sleep",translation:"睡覺",category:"verb",example:"I sleep early"},{text:"read",translation:"讀",category:"verb",example:"I read book"},{text:"write",translation:"寫",category:"verb",example:"I write letter"},{text:"sing",translation:"唱",category:"verb",example:"I sing song"},{text:"dance",translation:"跳舞",category:"verb",example:"I dance well"},{text:"work",translation:"工作",category:"verb",example:"I work hard"},{text:"play",translation:"玩",category:"verb",example:"I play game"},{text:"hot",translation:"熱",category:"adjective",example:"Hot water"},{text:"cold",translation:"冷",category:"adjective",example:"Cold wind"},{text:"big",translation:"大",category:"adjective",example:"Big elephant"},{text:"small",translation:"小",category:"adjective",example:"Small cat"},{text:"good",translation:"好",category:"adjective",example:"Good boy"},{text:"bad",translation:"差",category:"adjective",example:"Bad luck"},{text:"happy",translation:"開心",category:"adjective",example:"Happy baby"},{text:"sad",translation:"難過",category:"adjective",example:"Sad face"},{text:"fast",translation:"快",category:"adjective",example:"Fast car"},{text:"slow",translation:"慢",category:"adjective",example:"Slow turtle"},{text:"day",translation:"白天",category:"time",example:"A bright day"},{text:"night",translation:"晚上",category:"time",example:"A dark night"},{text:"morning",translation:"早上",category:"time",example:"Good morning"},{text:"evening",translation:"傍晚",category:"time",example:"Good evening"},{text:"today",translation:"今天",category:"time",example:"Today is good"},{text:"tomorrow",translation:"明天",category:"time",example:"See you tomorrow"},{text:"monday",translation:"星期一",category:"time",example:"Work on Monday"},{text:"sunday",translation:"星期日",category:"time",example:"Rest on Sunday"},{text:"school",translation:"學校",category:"place",example:"Go to school"},{text:"park",translation:"公園",category:"place",example:"Play in park"},{text:"hospital",translation:"醫院",category:"place",example:"A big hospital"},{text:"store",translation:"商店",category:"place",example:"Open a store"},{text:"bread",translation:"麵包",category:"food",example:"Fresh bread"},{text:"milk",translation:"牛奶",category:"food",example:"White milk"},{text:"egg",translation:"蛋",category:"food",example:"One egg"},{text:"rice",translation:"米飯",category:"food",example:"Eat rice"},{text:"meat",translation:"肉",category:"food",example:"Good meat"},{text:"cake",translation:"蛋糕",category:"food",example:"A sweet cake"},{text:"ice cream",translation:"冰淇淋",category:"food",example:"Cold ice cream"},{text:"box",translation:"盒子",category:"object",example:"A heavy box"},{text:"key",translation:"鑰匙",category:"object",example:"The silver key"},{text:"cup",translation:"杯子",category:"object",example:"Drink in cup"},{text:"spoon",translation:"湯匙",category:"object",example:"A small spoon"},{text:"fork",translation:"叉子",category:"object",example:"Eat with fork"},{text:"knife",translation:"刀子",category:"object",example:"A sharp knife"},{text:"rain",translation:"雨",category:"nature",example:"See the rain"},{text:"snow",translation:"雪",category:"nature",example:"White snow"},{text:"wind",translation:"風",category:"nature",example:"Strong wind"},{text:"mountain",translation:"山",category:"nature",example:"A high mountain"},{text:"river",translation:"河流",category:"nature",example:"A long river"},{text:"cloud",translation:"雲",category:"nature",example:"A soft cloud"},{text:"sky",translation:"天空",category:"nature",example:"Blue sky"},{text:"hand",translation:"手",category:"body",example:"My small hand"},{text:"foot",translation:"腳",category:"body",example:"My left foot"},{text:"eye",translation:"眼睛",category:"body",example:"Big eyes"},{text:"ear",translation:"耳朵",category:"body",example:"Long ears"},{text:"nose",translation:"鼻子",category:"body",example:"My red nose"},{text:"mouth",translation:"嘴巴",category:"body",example:"A small mouth"},{text:"hair",translation:"頭髮",category:"body",example:"Long hair"},{text:"face",translation:"臉",category:"body",example:"A happy face"},{text:"head",translation:"頭",category:"body",example:"My big head"},{text:"heart",translation:"心臟",category:"body",example:"A kind heart"},{text:"fish",translation:"魚",category:"animal",example:"A swimming fish"},{text:"horse",translation:"馬",category:"animal",example:"A running horse"},{text:"cow",translation:"母牛",category:"animal",example:"A milking cow"},{text:"sheep",translation:"綿羊",category:"animal",example:"A white sheep"},{text:"duck",translation:"鴨子",category:"animal",example:"A swimming duck"},{text:"pig",translation:"豬",category:"animal",example:"A fat pig"},{text:"bee",translation:"蜜蜂",category:"animal",example:"A busy bee"},{text:"bus",translation:"公車",category:"transport",example:"Wait for bus"},{text:"train",translation:"火車",category:"transport",example:"Take the train"},{text:"plane",translation:"飛機",category:"transport",example:"Fly a plane"},{text:"bike",translation:"腳踏車",category:"transport",example:"Ride a bike"},{text:"boat",translation:"小船",category:"transport",example:"Sail a boat"},{text:"truck",translation:"卡車",category:"transport",example:"A heavy truck"},{text:"walk",translation:"走路",category:"verb",example:"I walk slow"},{text:"fly",translation:"飛",category:"verb",example:"Birds fly high"},{text:"swim",translation:"游泳",category:"verb",example:"I swim well"},{text:"talk",translation:"說話",category:"verb",example:"Talk to friend"},{text:"listen",translation:"聽",category:"verb",example:"Listen to music"},{text:"smile",translation:"微笑",category:"verb",example:"A happy smile"},{text:"laugh",translation:"大笑",category:"verb",example:"They laugh loud"},{text:"cry",translation:"哭",category:"verb",example:"Don't cry now"},{text:"think",translation:"思考",category:"verb",example:"I think hard"},{text:"learn",translation:"學習",category:"verb",example:"Learn new word"},{text:"watch",translation:"看 (觀察)",category:"verb",example:"Watch movie"},{text:"long",translation:"長",category:"adjective",example:"A long road"},{text:"short",translation:"短",category:"adjective",example:"A short hair"},{text:"new",translation:"新",category:"adjective",example:"A new world"},{text:"old",translation:"舊",category:"adjective",example:"An old friend"},{text:"beautiful",translation:"漂亮",category:"adjective",example:"Beautiful flower"},{text:"ugly",translation:"醜陋",category:"adjective",example:"An ugly box"},{text:"clean",translation:"乾淨",category:"adjective",example:"A clean room"},{text:"dirty",translation:"髒",category:"adjective",example:"Dirty shoes"},{text:"rich",translation:"富有",category:"adjective",example:"A rich man"},{text:"poor",translation:"貧窮",category:"adjective",example:"A poor family"},{text:"window",translation:"窗戶",category:"object",example:"Open the window"},{text:"door",translation:"門",category:"object",example:"Close the door"},{text:"bed",translation:"床",category:"object",example:"Go to bed"},{text:"clock",translation:"時鐘",category:"object",example:"A round clock"},{text:"lamp",translation:"燈",category:"object",example:"Turn on lamp"},{text:"mirror",translation:"鏡子",category:"object",example:"Look in mirror"},{text:"soap",translation:"肥皂",category:"object",example:"Use some soap"},{text:"towel",translation:"毛巾",category:"object",example:"A dry towel"},{text:"city",translation:"城市",category:"place",example:"A busy city"},{text:"country",translation:"國家",category:"place",example:"My home country"},{text:"road",translation:"道路",category:"place",example:"A wide road"},{text:"bridge",translation:"橋",category:"place",example:"Cross the bridge"},{text:"garden",translation:"花園",category:"place",example:"A green garden"},{text:"farm",translation:"農場",category:"place",example:"An old farm"},{text:"forest",translation:"森林",category:"place",example:"A dark forest"},{text:"island",translation:"島嶼",category:"place",example:"A small island"},{text:"lake",translation:"湖泊",category:"place",example:"A mountain lake"},{text:"kitchen",translation:"廚房",category:"place",example:"Cook in kitchen"},{text:"room",translation:"房間",category:"place",example:"In my room"},{text:"orange",translation:"橘色",category:"color",example:"Orange orange"},{text:"pink",translation:"粉紅色",category:"color",example:"Pink dress"},{text:"brown",translation:"咖啡色",category:"color",example:"Brown dog"},{text:"gray",translation:"灰色",category:"color",example:"Gray sky"},{text:"silver",translation:"銀色",category:"color",example:"Silver moon"},{text:"gold",translation:"金色",category:"color",example:"Gold ring"},{text:"soup",translation:"湯",category:"food",example:"Chicken soup"},{text:"salad",translation:"沙拉",category:"food",example:"Green salad"},{text:"pizza",translation:"披薩",category:"food",example:"Eat pizza"},{text:"burger",translation:"漢堡",category:"food",example:"Beef burger"},{text:"juice",translation:"果汁",category:"food",example:"Orange juice"},{text:"tea",translation:"茶",category:"food",example:"Hot tea"},{text:"coffee",translation:"咖啡",category:"food",example:"Black coffee"},{text:"ball",translation:"球",category:"object",example:"Kick the ball"},{text:"toy",translation:"玩具",category:"object",example:"Play with toy"},{text:"gift",translation:"禮物",category:"object",example:"A small gift"},{text:"camera",translation:"相機",category:"object",example:"Take my camera"},{text:"map",translation:"地圖",category:"object",example:"Road map"},{text:"umbrella",translation:"傘",category:"object",example:"Blue umbrella"},{text:"money",translation:"錢",category:"object",example:"I have money"},{text:"music",translation:"音樂",category:"concept",example:"Play loud music"},{text:"time",translation:"時間",category:"concept",example:"No more time"},{text:"love",translation:"愛",category:"concept",example:"I love you"},{text:"help",translation:"幫助",category:"verb",example:"Please help me"},{text:"look",translation:"看",category:"verb",example:"Look out"},{text:"give",translation:"給",category:"verb",example:"Give me book"},{text:"buy",translation:"買",category:"verb",example:"Buy a car"},{text:"sell",translation:"賣",category:"verb",example:"Sell my house"},{text:"open",translation:"打開",category:"verb",example:"Open your eye"},{text:"close",translation:"關閉",category:"verb",example:"Close your heart"},{text:"start",translation:"開始",category:"verb",example:"Start adventure"},{text:"stop",translation:"停止",category:"verb",example:"Stop crying"},{text:"quiet",translation:"安靜",category:"adjective",example:"Quiet forest"},{text:"loud",translation:"大聲",category:"adjective",example:"Loud music"},{text:"smart",translation:"聰明",category:"adjective",example:"A smart boy"},{text:"cool",translation:"酷/涼快",category:"adjective",example:"A cool wind"},{text:"winter",translation:"冬天",category:"time",example:"A cold winter"},{text:"summer",translation:"夏天",category:"time",example:"A hot summer"},{text:"sand",translation:"沙子",category:"nature",example:"Yellow sand"},{text:"beach",translation:"海灘",category:"nature",example:"A beautiful beach"},{text:"grass",translation:"草",category:"nature",example:"Green grass"}],$0=Object.freeze(Object.defineProperty({__proto__:null,default:q0},Symbol.toStringTag,{value:"Module"})),Y0=[{text:"ㄅㄚ",translation:"八"},{text:"ㄏㄨㄚˊ",translation:"華"},{text:"ㄇㄛˊ",translation:"磨"},{text:"ㄈㄤ",translation:"方"},{text:"ㄉㄚˋ",translation:"大"},{text:"ㄊㄧㄢ",translation:"天"},{text:"ㄋㄧㄠˇ",translation:"鳥"},{text:"ㄌㄨㄥˊ",translation:"龍"},{text:"ㄍㄨㄛˊ",voiceText:"國",translation:"國"},{text:"ㄎㄞ",translation:"開"},{text:"ㄏㄠˇ",translation:"好"},{text:"ㄐㄧㄚ",translation:"家"},{text:"ㄑㄧㄥ",translation:"青"},{text:"ㄒㄧㄠˇ",translation:"小"},{text:"ㄓㄨㄥ",translation:"中"},{text:"ㄔㄜ",translation:"車"},{text:"ㄕㄨ",translation:"書"},{text:"ㄖㄣˊ",translation:"人"},{text:"ㄗㄞˋ",translation:"在"},{text:"ㄘㄠˇ",translation:"草"},{text:"ㄙㄢ",translation:"三"},{text:"ㄧㄤˊ",translation:"羊"},{text:"ㄨㄛˇ",translation:"我"},{text:"ㄩˊ",translation:"魚"},{text:"ㄇㄠ",translation:"貓"},{text:"ㄍㄡˇ",translation:"狗"},{text:"ㄕㄢ",translation:"山"},{text:"ㄕㄨㄟˇ",translation:"水"},{text:"ㄎㄨㄥ",translation:"空"},{text:"ㄅㄞˊ",translation:"白"}],j0=Object.freeze(Object.defineProperty({__proto__:null,default:Y0},Symbol.toStringTag,{value:"Module"})),Th=Object.assign({"../assets/vocabularies/251222.json":H0,"../assets/vocabularies/animals.json":X0,"../assets/vocabularies/default.json":$0,"../assets/vocabularies/zhuyin.json":j0}),ya=[];var Qf;for(const i in Th){const t=((Qf=i.split("/").pop())==null?void 0:Qf.replace(".json",""))||"unknown",e=Th[i].default;ya.push({name:t,path:i,data:e})}const xu=Cs({currentListName:localStorage.getItem("vocab_list")||"default"}),K0=vu(()=>{var t;const i=ya.find(e=>e.name===xu.currentListName);return i?i.data:((t=ya[0])==null?void 0:t.data)||[]}),Z0=i=>{xu.currentListName=i,localStorage.setItem("vocab_list",i)},Ai={state:xu,lists:ya,currentList:K0,selectList:Z0};function J0(i){const{speak:t,playCorrect:e,playExplosion:n,playThrust:s}=mr(),r=ie("menu"),o=ie(0),a=ie(null),l=ie([]),c=ie({x:50,y:80}),u=ie(null),f=Cs(new Set),h=.15,d=1.8;let m=0,v=null,p=null,g=0,_=2e3,S=1;const x=()=>{r.value="playing",o.value=0,l.value=[],S=1,c.value={x:50,y:80},u.value=null,A(),g=performance.now(),v=requestAnimationFrame(b),p=window.setInterval(F,_)},M=()=>{v&&cancelAnimationFrame(v),p&&clearInterval(p)},w=()=>{if(!a.value)return;const X=a.value.text,O=X.split("").join(","),q=a.value.example?`. ${a.value.example}`:"";t(`${X}, (${O}), ${X}${q}`)},A=()=>{const X=Ai.currentList.value;if(X.length===0)return;const O=Math.floor(Math.random()*X.length);a.value=X[O],w()},F=()=>{if(r.value!=="playing")return;const X=Ai.currentList.value;if(X.length===0)return;const O=Math.random()<.4;let q=a.value;if(!O||!q){let V,U=0;do V=X[Math.floor(Math.random()*X.length)],U++;while(V===a.value&&U<10);q=V}q&&l.value.push({id:Date.now()+Math.random(),word:q,x:Math.random()*80+10,y:-10,speed:(Math.random()*.2+.3)*S,isTarget:q===a.value})},b=X=>{const O=X-g;g=X;const q=c.value.x,V=c.value.y;let U=0,W=0;if(f.has("ArrowLeft")&&(U-=1),f.has("ArrowRight")&&(U+=1),f.has("ArrowUp")&&(W-=1),f.has("ArrowDown")&&(W+=1),U!==0||W!==0){u.value=null;const dt=Math.sqrt(U*U+W*W),xt=U/dt,Ft=W/dt,kt=window.innerWidth,jt=window.innerHeight-100,k=kt/jt,G=d*(O/16);c.value.x=Math.max(5,Math.min(95,c.value.x+xt*G)),c.value.y=Math.max(5,Math.min(95,c.value.y+Ft*G*k))}else if(u.value){const dt=1-Math.pow(1-h,O/16);c.value.x+=(u.value.x-c.value.x)*dt,c.value.y+=(u.value.y-c.value.y)*dt,Math.abs(u.value.x-c.value.x)<.1&&Math.abs(u.value.y-c.value.y)<.1&&(u.value=null)}Math.abs(c.value.x-q)>.1||Math.abs(c.value.y-V)>.1?m<=0&&(s(),m=1):m=0,l.value.forEach(dt=>{dt.y+=dt.speed*(O/16)}),l.value=l.value.filter(dt=>!(dt.y>110));const ft=12,at=10;l.value=l.value.filter(dt=>{var jt,k;const xt=Math.abs(dt.x-c.value.x),Ft=Math.abs(dt.y-c.value.y);return xt<ft/2+3&&Ft<at/2+3?dt.isTarget?(o.value+=10,S+=.05,e(),(jt=i==null?void 0:i.onHitCorrect)==null||jt.call(i,dt.x,dt.y),A(),!1):(o.value=Math.max(0,o.value-5),n(),(k=i==null?void 0:i.onHitWrong)==null||k.call(i,dt.x,dt.y),!1):!0}),r.value==="playing"&&(v=requestAnimationFrame(b))},T=(X,O)=>{u.value={x:Math.max(5,Math.min(95,X)),y:Math.max(5,Math.min(95,O))}},L=(X,O)=>{O?f.add(X):f.delete(X)};return Rs(()=>{M()}),{gameState:r,score:o,currentTarget:a,fallingItems:l,playerPos:c,startGame:x,setPlayerTarget:T,setKey:L,speak:t,announceTarget:w}}const Q0={class:"ui-header"},tv={class:"header-left"},ev={class:"header-center"},nv={key:0,class:"target-display"},iv={class:"header-right"},sv={class:"score-board"},rv={class:"value"},ov={class:"game-world"},av={class:"meteor-body"},lv={key:0,class:"score-popup"},cv=pr({__name:"FallingWordsGame",emits:["exit"],setup(i,{emit:t}){const e=t,n=ie([]);let s=0;const r=(S,x)=>{const M=s++;n.value.push({id:M,x:S,y:x}),setTimeout(()=>{n.value=n.value.filter(w=>w.id!==M)},500)},{gameState:o,score:a,currentTarget:l,fallingItems:c,playerPos:u,startGame:f,setKey:h,setPlayerTarget:d,announceTarget:m}=J0({onHitWrong:(S,x)=>r(S,x)}),v=S=>{o.value==="playing"&&(S.key==="Escape"&&e("exit"),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(S.key)&&h(S.key,!0))},p=S=>{["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(S.key)&&h(S.key,!1)},g=S=>{if(o.value!=="playing")return;const x=S.target;if(x.closest("button")||x.closest(".back-btn")||x.closest(".target-word"))return;let M,w;if(S instanceof MouseEvent)M=S.clientX,w=S.clientY;else{const X=S.touches[0];if(!X)return;M=X.clientX,w=X.clientY}const A=100,F=window.innerHeight-A;let b=w-A;b=Math.max(0,Math.min(F,b));const T=M/window.innerWidth*100,L=b/F*100;d(T,L)},_=ie(!1);return er(a,(S,x)=>{S>x&&(_.value=!0,setTimeout(()=>{_.value=!1},1e3))}),fo(()=>{window.addEventListener("keydown",v),window.addEventListener("keyup",p),f()}),Rs(()=>{window.removeEventListener("keydown",v),window.removeEventListener("keyup",p)}),(S,x)=>(Yt(),Qt("div",{class:"game-container",onClick:g,onTouchstart:g},[x[7]||(x[7]=vt("div",{class:"stars"},null,-1)),x[8]||(x[8]=vt("div",{class:"stars2"},null,-1)),vt("div",Q0,[vt("div",tv,[vt("button",{class:"back-btn",onClick:x[0]||(x[0]=no(M=>S.$emit("exit"),["stop"]))},"⬅ BACK")]),vt("div",ev,[Wt(l)?(Yt(),Qt("div",nv,[x[3]||(x[3]=vt("div",{class:"target-hint"},"FIND:",-1)),vt("div",{class:"target-word",onClick:x[1]||(x[1]=no(M=>Wt(m)(),["stop"]))},[tp(xe(Wt(l).translation)+" ",1),x[2]||(x[2]=vt("span",{class:"audio-icon"},"🔊",-1))])])):On("",!0)]),vt("div",iv,[vt("div",sv,[x[4]||(x[4]=vt("span",{class:"label"},"SCORE",-1)),vt("span",rv,xe(Wt(a)),1)])])]),vt("div",ov,[(Yt(!0),Qt(Ce,null,xn(n.value,M=>(Yt(),Qt("div",{key:M.id,class:"explosion",style:nn({left:M.x+"%",top:M.y+"%"})},"💥",4))),128)),(Yt(!0),Qt(Ce,null,xn(Wt(c),M=>(Yt(),Qt("div",{key:M.id,class:"falling-item",style:nn({left:M.x+"%",top:M.y+"%"})},[vt("div",av,xe(M.word.text),1),x[5]||(x[5]=vt("div",{class:"meteor-tail"},null,-1))],4))),128)),vt("div",{class:"player",style:nn({left:Wt(u).x+"%",top:Wt(u).y+"%"})},[_.value?(Yt(),Qt("div",lv,"+10!")):On("",!0),x[6]||(x[6]=ep('<svg viewBox="0 0 512 512" width="70" height="80" class="rocket-svg" data-v-ddbd5704><path d="M150,450 q-50,0 -30,-100 l30,50 z" fill="#ff4d4d" stroke="#333" stroke-width="4" data-v-ddbd5704></path><path d="M362,450 q50,0 30,-100 l-30,50 z" fill="#ff4d4d" stroke="#333" stroke-width="4" data-v-ddbd5704></path><path d="M256,20 c-100,200 -80,350 -80,400 h160 c0,-50 20,-200 -80,-400z" fill="#f5f5f5" stroke="#333" stroke-width="6" data-v-ddbd5704></path><path d="M256,20 c40,150 40,300 40,400 h-80 c0,-100 0,-250 40,-400z" fill="#e0e0e0" data-v-ddbd5704></path><path d="M256,20 c-30,60 -35,100 -35,130 h70 c0,-30 -5,-70 -35,-130z" fill="#ff4d4d" stroke="#333" stroke-width="4" data-v-ddbd5704></path><circle cx="256" cy="240" r="35" fill="#66ccff" stroke="#333" stroke-width="6" data-v-ddbd5704></circle><path d="M256,215 q20,10 0,50" fill="white" opacity="0.3" data-v-ddbd5704></path><path d="M220,430 q36,80 72,0" fill="#ffeb3b" class="main-flame" stroke="#ff9800" stroke-width="2" data-v-ddbd5704></path><path d="M236,430 q20,50 40,0" fill="#fff" opacity="0.8" class="inner-flame" data-v-ddbd5704></path></svg>',1))],4)])],32))}}),gr=(i,t)=>{const e=i.__vccOpts||i;for(const[n,s]of t)e[n]=s;return e},uv=gr(cv,[["__scopeId","data-v-ddbd5704"]]);function hv(i){const{speak:t,playCorrect:e,playSuccess:n,playExplosion:s,playThrust:r}=mr(),o=ie("menu"),a=ie(0),l=ie(null),c=ie(0),u=ie([]),f=ie([]),h=ie({x:50,y:80}),d=ie(null),m=Cs(new Set),v=.15,p=1.8;let g=0,_=null,S=null,x=0,M=1200,w=1;const A=()=>{o.value="playing",a.value=0,u.value=[],w=1,h.value={x:50,y:80},d.value=null,c.value=0,T(),x=performance.now(),_=requestAnimationFrame(X),S=window.setInterval(L,M)},F=()=>{_&&cancelAnimationFrame(_),S&&clearInterval(S)},b=()=>{if(!l.value)return;const V=l.value.text,U=V.split("").join(","),W=l.value.example?`. ${l.value.example}`:"";t(`${V}, (${U}), ${V}${W}`)},T=()=>{const V=Ai.currentList.value;if(V.length===0)return;const U=Math.floor(Math.random()*V.length);l.value=V[U],c.value=0;const W=[...new Set(l.value.text.split(""))],ft="abcdefghijklmnopqrstuvwxyz".split("").filter(Ft=>!W.some(kt=>kt.toLowerCase()===Ft)).sort(()=>Math.random()-.5),at=/^[A-Z]/.test(l.value.text),dt=ft.map(Ft=>at&&Math.random()<.3?Ft.toUpperCase():Ft),xt=[...W,...dt.slice(0,Math.max(0,8-W.length))];f.value=xt.slice(0,8),b()},L=()=>{if(o.value!=="playing"||!l.value)return;const U=l.value.text[c.value],W=Math.random()<.4;let j=U;if(!W){const ft=f.value.filter(at=>at!==U);j=ft[Math.floor(Math.random()*ft.length)]||(U===U.toUpperCase()?"X":"x")}u.value.push({id:Date.now()+Math.random(),char:j,x:Math.random()*80+10,y:-10,speed:(Math.random()*.2+.3)*w,isTarget:j===U})},X=V=>{const U=V-x;x=V;const W=h.value.x,j=h.value.y;let ft=0,at=0;if(m.has("ArrowLeft")&&(ft-=1),m.has("ArrowRight")&&(ft+=1),m.has("ArrowUp")&&(at-=1),m.has("ArrowDown")&&(at+=1),ft!==0||at!==0){d.value=null;const kt=Math.sqrt(ft*ft+at*at),jt=ft/kt,k=at/kt,G=window.innerWidth,rt=window.innerHeight-100,ct=G/rt,lt=p*(U/16);h.value.x=Math.max(5,Math.min(95,h.value.x+jt*lt)),h.value.y=Math.max(5,Math.min(95,h.value.y+k*lt*ct))}else if(d.value){const kt=1-Math.pow(1-v,U/16);h.value.x+=(d.value.x-h.value.x)*kt,h.value.y+=(d.value.y-h.value.y)*kt,Math.abs(d.value.x-h.value.x)<.1&&Math.abs(d.value.y-h.value.y)<.1&&(d.value=null)}Math.abs(h.value.x-W)>.1||Math.abs(h.value.y-j)>.1?g<=0&&(r(),g=1):g=0,u.value.forEach(kt=>{kt.y+=kt.speed*(U/16)}),u.value=u.value.filter(kt=>kt.y<=110);const xt=12,Ft=10;u.value=u.value.filter(kt=>{var rt,ct,lt;const jt=Math.abs(kt.x-h.value.x),k=Math.abs(kt.y-h.value.y);if(jt<xt/2+3&&k<Ft/2+3){const pt=((rt=l.value)==null?void 0:rt.text)||"",I=pt[c.value];return kt.char===I?(a.value+=10,c.value++,(ct=i==null?void 0:i.onHitCorrect)==null||ct.call(i,kt.x,kt.y),c.value>=pt.length?(a.value+=50,w+=.05,n(),T()):e(),!1):(s(),(lt=i==null?void 0:i.onHitWrong)==null||lt.call(i,kt.x,kt.y),c.value=0,b(),!1)}return!0}),o.value==="playing"&&(_=requestAnimationFrame(X))},O=(V,U)=>{d.value={x:Math.max(5,Math.min(95,V)),y:Math.max(5,Math.min(95,U))}},q=(V,U)=>{U?m.add(V):m.delete(V)};return Rs(()=>{F()}),{gameState:o,score:a,currentTarget:l,spellingIndex:c,fallingItems:u,playerPos:h,startGame:A,setPlayerTarget:O,setKey:q,speak:t,announceTarget:b}}const fv={class:"ui-header"},dv={class:"header-left"},pv={class:"header-center"},mv={key:0,class:"spelling-display"},gv={class:"chinese-hint"},vv={class:"header-right"},xv={class:"score-board"},_v={class:"value"},yv={class:"game-world"},Sv={class:"meteor-letter"},Mv={key:0,class:"score-popup"},bv=pr({__name:"SpellingGame",emits:["exit"],setup(i,{emit:t}){const e=t,n=ie([]);let s=0;const r=(M,w)=>{const A=s++;n.value.push({id:A,x:M,y:w}),setTimeout(()=>{n.value=n.value.filter(F=>F.id!==A)},500)},{gameState:o,score:a,currentTarget:l,spellingIndex:c,fallingItems:u,playerPos:f,startGame:h,setKey:d,setPlayerTarget:m,announceTarget:v}=hv({onHitWrong:(M,w)=>r(M,w)}),p=M=>{o.value==="playing"&&(M.key==="Escape"&&e("exit"),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(M.key)&&d(M.key,!0))},g=M=>{["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(M.key)&&d(M.key,!1)},_=M=>{if(o.value!=="playing")return;const w=M.target;if(w.closest("button")||w.closest(".back-btn")||w.closest(".target-word"))return;let A,F;if(M instanceof MouseEvent)A=M.clientX,F=M.clientY;else{const q=M.touches[0];if(!q)return;A=q.clientX,F=q.clientY}const b=100,T=window.innerHeight-b;let L=F-b;L=Math.max(0,Math.min(T,L));const X=A/window.innerWidth*100,O=L/T*100;m(X,O)},S=ie(!1);er(a,(M,w)=>{M>w&&(S.value=!0,setTimeout(()=>{S.value=!1},1e3))}),fo(()=>{window.addEventListener("keydown",p),window.addEventListener("keyup",g),h()}),Rs(()=>{window.removeEventListener("keydown",p),window.removeEventListener("keyup",g)});const x=vu(()=>l.value?l.value.text.split("").map((M,w)=>({char:M,isCaught:w<c.value,isCurrent:w===c.value})):[]);return(M,w)=>(Yt(),Qt("div",{class:"game-container",onClick:_,onTouchstart:_},[w[6]||(w[6]=vt("div",{class:"stars"},null,-1)),w[7]||(w[7]=vt("div",{class:"stars2"},null,-1)),vt("div",fv,[vt("div",dv,[vt("button",{class:"back-btn",onClick:w[0]||(w[0]=no(A=>M.$emit("exit"),["stop"]))},"⬅ BACK")]),vt("div",pv,[Wt(l)?(Yt(),Qt("div",mv,[vt("div",gv,xe(Wt(l).translation),1),vt("div",{class:"word-progress",onClick:w[1]||(w[1]=no(A=>Wt(v)(),["stop"]))},[(Yt(!0),Qt(Ce,null,xn(x.value,(A,F)=>(Yt(),Qt("span",{key:F,class:Kn(["char-box",{caught:A.isCaught,current:A.isCurrent}])},xe(A.char),3))),128)),w[2]||(w[2]=vt("span",{class:"audio-icon"},"🔊",-1))])])):On("",!0)]),vt("div",vv,[vt("div",xv,[w[3]||(w[3]=vt("span",{class:"label"},"SCORE",-1)),vt("span",_v,xe(Wt(a)),1)])])]),vt("div",yv,[(Yt(!0),Qt(Ce,null,xn(n.value,A=>(Yt(),Qt("div",{key:A.id,class:"explosion",style:nn({left:A.x+"%",top:A.y+"%"})},"💥",4))),128)),(Yt(!0),Qt(Ce,null,xn(Wt(u),A=>(Yt(),Qt("div",{key:A.id,class:"falling-item",style:nn({left:A.x+"%",top:A.y+"%"})},[vt("div",Sv,xe(A.char),1),w[4]||(w[4]=vt("div",{class:"meteor-tail"},null,-1))],4))),128)),vt("div",{class:"player",style:nn({left:Wt(f).x+"%",top:Wt(f).y+"%"})},[S.value?(Yt(),Qt("div",Mv,"+10!")):On("",!0),w[5]||(w[5]=ep('<svg viewBox="0 0 512 512" width="100" height="65" class="ufo-svg" data-v-c330fed4><ellipse cx="256" cy="320" rx="200" ry="60" fill="#9e9e9e" stroke="#424242" stroke-width="8" data-v-c330fed4></ellipse><ellipse cx="256" cy="310" rx="180" ry="50" fill="#bdbdbd" data-v-c330fed4></ellipse><path d="M160,300 q96,-150 192,0" fill="#66ccff" opacity="0.8" stroke="#333" stroke-width="5" data-v-c330fed4></path><path d="M200,240 q56,-40 112,0" fill="white" opacity="0.3" data-v-c330fed4></path><circle cx="120" cy="330" r="10" fill="#ffeb3b" class="ufo-light" data-v-c330fed4></circle><circle cx="188" cy="350" r="12" fill="#ffeb3b" class="ufo-light" style="animation-delay:0.2s;" data-v-c330fed4></circle><circle cx="256" cy="360" r="14" fill="#ffeb3b" class="ufo-light" style="animation-delay:0.4s;" data-v-c330fed4></circle><circle cx="324" cy="350" r="12" fill="#ffeb3b" class="ufo-light" style="animation-delay:0.6s;" data-v-c330fed4></circle><circle cx="392" cy="330" r="10" fill="#ffeb3b" class="ufo-light" style="animation-delay:0.8s;" data-v-c330fed4></circle></svg>',1))],4)])],32))}}),wv=gr(bv,[["__scopeId","data-v-c330fed4"]]);function Ev(){const{speak:i,playCorrect:t,playSuccess:e,playExplosion:n}=mr(),s=ie(0),r=ie(0),o=ie(0),a=ie(null),l=ie([]),c=ie(!1),u=["a","e","i","o","u"],f="bcdfghjklmnpqrstvwxyz".split(""),h=v=>{const p=v.split(""),g=p.length,_=Math.random(),S=M=>M===M.toUpperCase()&&M!==M.toLowerCase();if(_<.3){const M=p[0],w=M.toLowerCase(),A=S(M);if(f.includes(w)){let F=f[Math.floor(Math.random()*f.length)];A&&(F=F.toUpperCase()),p[0]=F}else if(u.includes(w)){const F=u.filter(T=>T!==w);let b=F[Math.floor(Math.random()*F.length)];A&&(b=b.toUpperCase()),p[0]=b}return p.join("")}if(_<.6)for(let M=0;M<g;M++){const w=p[M],A=w.toLowerCase(),F=S(w);if(u.includes(A)){const b=u.filter(L=>L!==A);let T=b[Math.floor(Math.random()*b.length)];return F&&(T=T.toUpperCase()),p[M]=T,p.join("")}}if(_<.8)for(let M=0;M<g;M++){const w=p[M],A=w.toLowerCase(),F=S(w);if(f.includes(A)){let b=f[Math.floor(Math.random()*f.length)];return F&&(b=b.toUpperCase()),p[M]=b,p.join("")}}const x=Math.floor(Math.random()*g);return p[x]===p[x+1]?p.splice(x,1):p.splice(x,0,p[x]),p.join("")},d=()=>{c.value=!1;const v=Ai.currentList.value;if(v.length===0)return;const p=v[Math.floor(Math.random()*v.length)];a.value=p;const g=p.text,_=new Set;_.add(g);let S=0;for(;_.size<4&&S<100;){let A=h(g);A!==g&&_.add(A),S++}for(;_.size<4;){let A=g+(Math.random()>.5?"s":"e");_.add(A)}l.value=Array.from(_).sort(()=>Math.random()-.5).map(A=>({text:A,isCorrect:A===g}));const x=p.text,M=x.split("").join(","),w=p.example?`. ${p.example}`:"";i(`${x}, (${M}), ${x}${w}`)};return{p1Score:s,p2Score:r,currentTarget:a,options:l,nextRound:d,handleChoice:(v,p)=>{if(c.value||!a.value)return!1;if(p.isCorrect){c.value=!0,t(),v===1?s.value++:r.value++;const g=s.value>r.value?1:r.value>s.value?2:0;return g!==0&&g!==o.value&&e(),o.value=g,setTimeout(d,1e3),!0}else{n(),v===1?s.value=Math.max(0,s.value-1):r.value=Math.max(0,r.value-1);const g=s.value>r.value?1:r.value>s.value?2:0;return g!==0&&g!==o.value&&e(),o.value=g,!1}},speak:i}}const Tv={class:"duel-container"},Av={class:"center-strip"},Cv={class:"strip-side p2-side rot-180"},Rv={key:0,class:"trophy-container"},Pv={class:"score-display",style:{color:"#FFA726"}},Iv={class:"strip-center"},Lv={class:"text-content"},Dv={class:"text-content"},Nv={class:"strip-side p1-side"},Fv={key:0,class:"trophy-container"},Uv={class:"score-display",style:{color:"#42A5F5"}},Ov={class:"player-zone p2"},Bv={class:"options-grid"},zv=["onClick"],Vv={class:"btn-text"},kv={class:"player-zone p1"},Gv={class:"options-grid"},Hv=["onClick"],Wv={class:"btn-text"},Xv=pr({__name:"DuelGame",emits:["exit"],setup(i,{emit:t}){const{p1Score:e,p2Score:n,currentTarget:s,options:r,nextRound:o,handleChoice:a,speak:l}=Ev(),c=ie([]);let u=0;const f=(h,d,m)=>{if(!a(d,m)){const p=u++;c.value.push({id:p,x:h.clientX,y:h.clientY}),setTimeout(()=>{c.value=c.value.filter(g=>g.id!==p)},500)}};return fo(()=>{o()}),(h,d)=>{var m,v,p,g,_,S;return Yt(),Qt("div",Tv,[(Yt(!0),Qt(Ce,null,xn(c.value,x=>(Yt(),Qt("div",{key:x.id,class:"explosion",style:nn({left:x.x+"px",top:x.y+"px"})},"💥",4))),128)),vt("div",Av,[vt("div",Cv,[Wt(n)>Wt(e)?(Yt(),Qt("div",Rv,[...d[3]||(d[3]=[vt("div",{class:"trophy-icon"},"🏆",-1)])])):On("",!0),vt("div",Pv,xe(Wt(n)),1)]),vt("div",Iv,[vt("div",{class:"target-mini rot-180",onClick:d[0]||(d[0]=x=>Wt(s)&&Wt(l)(Wt(s).text)),style:nn({"--char-count":((v=(m=Wt(s))==null?void 0:m.translation)==null?void 0:v.length)||1})},[vt("span",Lv,xe((p=Wt(s))==null?void 0:p.translation),1)],4),vt("button",{class:"exit-btn",onClick:d[1]||(d[1]=x=>h.$emit("exit"))},"EXIT"),vt("div",{class:"target-mini",onClick:d[2]||(d[2]=x=>Wt(s)&&Wt(l)(Wt(s).text)),style:nn({"--char-count":((_=(g=Wt(s))==null?void 0:g.translation)==null?void 0:_.length)||1})},[vt("span",Dv,xe((S=Wt(s))==null?void 0:S.translation),1)],4)]),vt("div",Nv,[Wt(e)>Wt(n)?(Yt(),Qt("div",Fv,[...d[4]||(d[4]=[vt("div",{class:"trophy-icon"},"🏆",-1)])])):On("",!0),vt("div",Uv,xe(Wt(e)),1)])]),vt("div",Ov,[vt("div",Bv,[(Yt(!0),Qt(Ce,null,xn(Wt(r),x=>(Yt(),Qt("button",{key:"p2-"+x.text,class:"option-btn",onClick:M=>f(M,2,x),style:nn({"--char-count":x.text.length})},[vt("span",Vv,xe(x.text),1)],12,zv))),128))])]),vt("div",kv,[vt("div",Gv,[(Yt(!0),Qt(Ce,null,xn(Wt(r),x=>(Yt(),Qt("button",{key:"p1-"+x.text,class:"option-btn",onClick:M=>f(M,1,x),style:nn({"--char-count":x.text.length})},[vt("span",Wv,xe(x.text),1)],12,Hv))),128))])])])}}}),qv=gr(Xv,[["__scopeId","data-v-2263c6e0"]]);function $v(i){const e=ie({x:0,y:0,character:"knight",holding:null}),n=ie([]),s=ie("Waiting for command..."),r=ie({type:null,direction:null,x:0,y:0}),o=m=>{e.value.character=m},a=(m,v,p,g)=>{let _=v,S=p;for(let x=0;x<g;x++)_>=0&&_<10&&S>=0&&S<10&&!(_===0&&S===0)&&m.push({id:`water-${x}`,type:"water",x:_,y:S}),Math.random()>.5?_++:S++},l=(m,v,p)=>{[[-1,-1],[-1,0],[-1,1],[0,-1],[0,0],[0,1],[1,-1],[1,0],[1,1]].forEach(([_,S],x)=>{const M=v+_,w=p+S;M>=0&&M<10&&w>=0&&w<10&&!(M===0&&w===0)&&Math.random()>.3&&m.push({id:`tree-${v}-${p}-${x}`,type:"tree",x:M,y:w})})},c=()=>{const m=[];m.push({id:"bug1",type:"bug-green",x:7,y:3}),m.push({id:"bug2",type:"bug-blue",x:3,y:8}),m.push({id:"bug3",type:"bug-green",x:8,y:7}),a(m,2,0,6),l(m,6,5),[[4,2],[5,2],[2,5],[2,6]].forEach(([p,g],_)=>{m.some(S=>S.x===p&&S.y===g)||m.push({id:`rock-${_}`,type:"rock",x:p,y:g})}),m.push({id:"box1",type:"box",x:1,y:2}),m.push({id:"box2",type:"box",x:5,y:8}),n.value=m,e.value={x:0,y:0,character:e.value.character,holding:null}},u=(m,v)=>m<0||m>=10||v<0||v>=10?!1:!n.value.some(p=>p.x===m&&p.y===v&&(["rock","tree","water"].includes(p.type)||p.type.startsWith("bug"))),f=m=>{s.value=`Heard: "${m}"`;const v=h(m);v?d(v):s.value=`Sorry, I didn't understand "${m}"`},h=m=>{const v=m.toLowerCase().trim(),p=v.split(/\s+/),g=M=>M.some(w=>p.includes(w)),_=()=>g(["up","top","north","above","op","app"])?"up":g(["down","bottom","south","below","don","town","dan"])?"down":g(["left","west","lef","let"])?"left":g(["right","east","rite","write","wright"])?"right":null,S=()=>{const M={zero:0,oh:0,one:1,won:1,wan:1,two:2,to:2,too:2,tu:2,three:3,tree:3,free:3,four:4,for:4,fore:4,five:5,fife:5,six:6,sex:6,sicks:6,seven:7,heaven:7,eight:8,ate:8,ait:8,nine:9,nein:9,ten:10,tin:10};for(const A of p)if(M[A]!==void 0)return M[A];const w=v.match(/\d+/);return w?parseInt(w[0]):1};if(g(["pickup","grab","take","get","pick"]))return{action:"pickup",direction:"up"};const x=_();return x?g(["throw","toss","chuck","hurl","fro"])?{action:"throw",direction:x}:g(["attack","atack","atak","strike","hit","kill","fight"])?{action:"attack",direction:x}:{action:"move",direction:x,steps:S()}:null},d=async m=>{var x,M,w,A;let{x:v,y:p}=e.value;const g=m.direction==="left"?-1:m.direction==="right"?1:0,_=m.direction==="up"?-1:m.direction==="down"?1:0;if(m.action==="pickup"){const F=n.value.findIndex(b=>b.x===v&&b.y===p&&b.type==="box");F!==-1&&!e.value.holding?(e.value.holding="box",n.value.splice(F,1),s.value="Picked up a box!"):e.value.holding?s.value="Already holding something!":s.value="Nothing to pick up here.";return}if(m.action==="throw"){if(!e.value.holding){s.value="Not holding anything to throw!";return}const F=v+g,b=p+_;r.value={type:"throw",direction:m.direction,x:v,y:p},s.value=`Throwing ${m.direction}...`,await new Promise(L=>setTimeout(L,600)),r.value={type:null,direction:null,x:0,y:0};const T=n.value.findIndex(L=>L.x===F&&L.y===b&&L.type.startsWith("bug"));if(T!==-1){const L=n.value[T];s.value=`Boom! Threw box at ${L.type}!`,n.value.splice(T,1),e.value.holding=null,(x=i==null?void 0:i.onWin)==null||x.call(i)}else F>=0&&F<10&&b>=0&&b<10&&!n.value.some(L=>L.x===F&&L.y===b)?(n.value.push({id:`box-thrown-${Date.now()}`,type:"box",x:F,y:b}),e.value.holding=null,s.value="Box thrown!"):s.value="Can't throw there!";return}if(m.action==="attack"){const F=v+g,b=p+_;r.value={type:"attack",direction:m.direction,x:v,y:p},s.value=`Attacking ${m.direction}...`,await new Promise(L=>setTimeout(L,500)),r.value={type:null,direction:null,x:0,y:0};const T=n.value.findIndex(L=>L.x===F&&L.y===b&&L.type.startsWith("bug"));if(T!==-1){const L=n.value[T];s.value=`Bravo! Defeated the ${L.type}!`,n.value.splice(T,1),(M=i==null?void 0:i.onWin)==null||M.call(i),u(F,b)&&(e.value.x=F,e.value.y=b)}else n.value.some(X=>X.x===F&&X.y===b&&["rock","tree","water"].includes(X.type))?(s.value="Clang! Hit an obstacle.",(w=i==null?void 0:i.onHitObstacle)==null||w.call(i)):s.value="Missed!";return}const S=m.steps||1;for(let F=0;F<S;F++){const b=v+g,T=p+_;if(u(b,T))v=b,p=T,e.value.x=v,e.value.y=p,await new Promise(L=>setTimeout(L,200));else{s.value="Blocked!",(A=i==null?void 0:i.onHitObstacle)==null||A.call(i);break}}};return{gridSize:10,player:e,entities:n,message:s,animation:r,initLevel:c,processCommand:f,setCharacter:o}}const Yv={key:0,class:"char-select-screen"},jv={class:"char-options"},Kv={key:1,class:"ck-container"},Zv={class:"header"},Jv={class:"status-bar"},Qv={key:0,class:"holding-display"},tx={class:"msg-box"},ex={class:"entity-icon"},nx={class:"controls"},ix={class:"mic-icon"},sx={class:"btn-text"},rx=pr({__name:"CodeKnight",emits:["exit"],setup(i,{emit:t}){const{playSuccess:e,playExplosion:n,playTone:s}=mr(),{gridSize:r,player:o,entities:a,message:l,animation:c,initLevel:u,processCommand:f,setCharacter:h}=$v({onWin:()=>e(),onHitObstacle:()=>n()}),d=ie(!1),m=ie(!0),v=ie(!1),p=M=>{h(M),m.value=!1,u()},g=()=>{const M=window.SpeechRecognition||window.webkitSpeechRecognition;if(!M){alert("Voice recognition not supported in this browser.");return}if(v.value){console.log("Already processing a command, ignoring...");return}const w=new M;w.lang="en-US",w.continuous=!1,w.interimResults=!1,w.maxAlternatives=3,w.start(),d.value=!0,s(880,"sine",.1),w.onresult=async A=>{if(v.value){console.log("Command already processing, skipping...");return}if(v.value=!0,d.value=!1,!A.results[0].isFinal){console.log("Interim result, skipping..."),v.value=!1;return}for(let F=0;F<A.results[0].length;F++){const b=A.results[0][F].transcript,T=A.results[0][F].confidence;if(console.log(`Alternative ${F}: "${b}" (confidence: ${T})`),T<.3){console.log(`Skipping low confidence alternative ${F}`);continue}const L=l.value;if(f(b),l.value!==L&&!l.value.includes("didn't understand"))break}await new Promise(F=>setTimeout(F,500)),v.value=!1},w.onerror=A=>{if(console.error("Speech recognition error:",A.error),d.value=!1,v.value=!1,A.error==="no-speech")l.value="No speech detected. Try again!";else if(A.error==="audio-capture")l.value="Microphone not found!";else{if(A.error==="aborted")return;l.value=`Error: ${A.error}`}},w.onend=()=>{d.value=!1}},_=(M,w)=>{if(o.value.x===M&&o.value.y===w)return"player";const A=a.value.find(F=>F.x===M&&F.y===w);return(A==null?void 0:A.type)||null},S=M=>{if(M==="player")return o.value.character==="knight"?"🛡️":"🤖";switch(M){case"bug-green":return"🐛";case"bug-blue":return"👾";case"rock":return"🪨";case"water":return"💧";case"tree":return"🌳";case"box":return"📦";default:return""}},x=(M,w)=>{if(o.value.x===M&&o.value.y===w)return"player";const A=a.value.find(F=>F.x===M&&F.y===w);return(A==null?void 0:A.type)||""};return(M,w)=>m.value?(Yt(),Qt("div",Yv,[w[6]||(w[6]=vt("h1",{class:"select-title"},"Choose Your Hero",-1)),vt("div",jv,[vt("div",{class:"char-card",onClick:w[0]||(w[0]=A=>p("knight"))},[...w[4]||(w[4]=[vt("div",{class:"char-icon"},"🛡️",-1),vt("div",{class:"char-name"},"Knight",-1),vt("div",{class:"char-desc"},"Brave warrior with sword",-1)])]),vt("div",{class:"char-card",onClick:w[1]||(w[1]=A=>p("robot"))},[...w[5]||(w[5]=[vt("div",{class:"char-icon"},"🤖",-1),vt("div",{class:"char-name"},"Robot",-1),vt("div",{class:"char-desc"},"Tech-powered fighter",-1)])])]),vt("button",{class:"back-btn-select",onClick:w[2]||(w[2]=A=>M.$emit("exit"))},"⬅ Back to Menu")])):(Yt(),Qt("div",Kv,[vt("div",Zv,[vt("button",{class:"back-btn",onClick:w[3]||(w[3]=A=>M.$emit("exit"))},"⬅ BACK"),w[7]||(w[7]=vt("div",{class:"game-title"},"Code Knight",-1)),vt("div",Jv,[Wt(o).holding?(Yt(),Qt("div",Qv," Holding: "+xe(S(Wt(o).holding)),1)):On("",!0),vt("div",tx,xe(Wt(l)),1)])]),vt("div",{class:"grid-board",style:nn({"--size":Wt(r)})},[(Yt(!0),Qt(Ce,null,xn(Wt(r),A=>(Yt(),Qt(Ce,{key:"row-"+A},[(Yt(!0),Qt(Ce,null,xn(Wt(r),F=>(Yt(),Qt("div",{key:"cell-"+(F-1)+"-"+(A-1),class:Kn(["cell",x(F-1,A-1)])},[vt("div",ex,xe(S(_(F-1,A-1))),1),Wt(c).type==="attack"&&Wt(c).x===F-1&&Wt(c).y===A-1?(Yt(),Qt("div",{key:0,class:Kn(["attack-slash","slash-"+Wt(c).direction])},"⚔️",2)):On("",!0),Wt(c).type==="throw"&&Wt(c).x===F-1&&Wt(c).y===A-1?(Yt(),Qt("div",{key:1,class:Kn(["throw-projectile","throw-"+Wt(c).direction])},"📦",2)):On("",!0)],2))),128))],64))),128))],4),vt("div",nx,[vt("button",{class:Kn(["mic-btn",{listening:d.value}]),onClick:g},[vt("span",ix,xe(d.value?"📡":"🎤"),1),vt("span",sx,xe(d.value?"Listening...":"Push to Talk"),1)],2),w[8]||(w[8]=vt("div",{class:"hints"},' Just say: "Right two" | "Down" | "Attack left" | "Pickup" | "Throw up" ',-1))])]))}}),ox=gr(rx,[["__scopeId","data-v-6d211ac8"]]);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _u="182",ax=0,Ah=1,lx=2,ra=1,cx=2,Or=3,es=0,un=1,Ln=2,Pi=0,sr=1,nc=2,Ch=3,Rh=4,ux=5,ms=100,hx=101,fx=102,dx=103,px=104,mx=200,gx=201,vx=202,xx=203,ic=204,sc=205,_x=206,yx=207,Sx=208,Mx=209,bx=210,wx=211,Ex=212,Tx=213,Ax=214,rc=0,oc=1,ac=2,lr=3,lc=4,cc=5,uc=6,hc=7,op=0,Cx=1,Rx=2,ei=0,ap=1,lp=2,cp=3,up=4,hp=5,fp=6,dp=7,pp=300,Es=301,cr=302,fc=303,dc=304,Oa=306,pc=1e3,Ci=1001,mc=1002,Ge=1003,Px=1004,wo=1005,qe=1006,el=1007,xs=1008,gn=1009,mp=1010,gp=1011,io=1012,yu=1013,oi=1014,Zn=1015,Fi=1016,Su=1017,Mu=1018,so=1020,vp=35902,xp=35899,_p=1021,yp=1022,Nn=1023,Ui=1026,_s=1027,Sp=1028,bu=1029,ur=1030,wu=1031,Eu=1033,oa=33776,aa=33777,la=33778,ca=33779,gc=35840,vc=35841,xc=35842,_c=35843,yc=36196,Sc=37492,Mc=37496,bc=37488,wc=37489,Ec=37490,Tc=37491,Ac=37808,Cc=37809,Rc=37810,Pc=37811,Ic=37812,Lc=37813,Dc=37814,Nc=37815,Fc=37816,Uc=37817,Oc=37818,Bc=37819,zc=37820,Vc=37821,kc=36492,Gc=36494,Hc=36495,Wc=36283,Xc=36284,qc=36285,$c=36286,Ix=3200,Mp=0,Lx=1,Ki="",Mn="srgb",hr="srgb-linear",Sa="linear",ve="srgb",Ls=7680,Ph=519,Dx=512,Nx=513,Fx=514,Tu=515,Ux=516,Ox=517,Au=518,Bx=519,Ih=35044,Lh="300 es",Jn=2e3,Ma=2001;function bp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ba(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function zx(){const i=ba("canvas");return i.style.display="block",i}const Dh={};function Nh(...i){const t="THREE."+i.shift();console.log(t,...i)}function Zt(...i){const t="THREE."+i.shift();console.warn(t,...i)}function ae(...i){const t="THREE."+i.shift();console.error(t,...i)}function ro(...i){const t=i.join(" ");t in Dh||(Dh[t]=!0,Zt(...i))}function Vx(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}class vr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const He=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],nl=Math.PI/180,Yc=180/Math.PI;function xr(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(He[i&255]+He[i>>8&255]+He[i>>16&255]+He[i>>24&255]+"-"+He[t&255]+He[t>>8&255]+"-"+He[t>>16&15|64]+He[t>>24&255]+"-"+He[e&63|128]+He[e>>8&255]+"-"+He[e>>16&255]+He[e>>24&255]+He[n&255]+He[n>>8&255]+He[n>>16&255]+He[n>>24&255]).toLowerCase()}function re(i,t,e){return Math.max(t,Math.min(e,i))}function kx(i,t){return(i%t+t)%t}function il(i,t,e){return(1-e)*i+e*t}function wr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function an(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Lt{constructor(t=0,e=0){Lt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}let mo=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],f=n[s+3],h=r[o+0],d=r[o+1],m=r[o+2],v=r[o+3];if(a<=0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f;return}if(a>=1){t[e+0]=h,t[e+1]=d,t[e+2]=m,t[e+3]=v;return}if(f!==v||l!==h||c!==d||u!==m){let p=l*h+c*d+u*m+f*v;p<0&&(h=-h,d=-d,m=-m,v=-v,p=-p);let g=1-a;if(p<.9995){const _=Math.acos(p),S=Math.sin(_);g=Math.sin(g*_)/S,a=Math.sin(a*_)/S,l=l*g+h*a,c=c*g+d*a,u=u*g+m*a,f=f*g+v*a}else{l=l*g+h*a,c=c*g+d*a,u=u*g+m*a,f=f*g+v*a;const _=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=_,c*=_,u*=_,f*=_}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],f=r[o],h=r[o+1],d=r[o+2],m=r[o+3];return t[e]=a*m+u*f+l*d-c*h,t[e+1]=l*m+u*h+c*f-a*d,t[e+2]=c*m+u*d+a*h-l*f,t[e+3]=u*m-a*f-l*h-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),f=a(r/2),h=l(n/2),d=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=h*u*f+c*d*m,this._y=c*d*f-h*u*m,this._z=c*u*m+h*d*f,this._w=c*u*f-h*d*m;break;case"YXZ":this._x=h*u*f+c*d*m,this._y=c*d*f-h*u*m,this._z=c*u*m-h*d*f,this._w=c*u*f+h*d*m;break;case"ZXY":this._x=h*u*f-c*d*m,this._y=c*d*f+h*u*m,this._z=c*u*m+h*d*f,this._w=c*u*f-h*d*m;break;case"ZYX":this._x=h*u*f-c*d*m,this._y=c*d*f+h*u*m,this._z=c*u*m-h*d*f,this._w=c*u*f+h*d*m;break;case"YZX":this._x=h*u*f+c*d*m,this._y=c*d*f+h*u*m,this._z=c*u*m-h*d*f,this._w=c*u*f-h*d*m;break;case"XZY":this._x=h*u*f-c*d*m,this._y=c*d*f-h*u*m,this._z=c*u*m+h*d*f,this._w=c*u*f+h*d*m;break;default:Zt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],f=e[10],h=n+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>f){const d=2*Math.sqrt(1+n-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-n-f);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(re(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e<=0)return this;if(e>=1)return this.copy(t);let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class J{constructor(t=0,e=0,n=0){J.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Fh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Fh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),u=2*(a*e-r*s),f=2*(r*n-o*e);return this.x=e+l*c+o*f-a*u,this.y=n+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return sl.copy(this).projectOnVector(t),this.sub(sl)}reflect(t){return this.sub(sl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const sl=new J,Fh=new mo;class ee{constructor(t,e,n,s,r,o,a,l,c){ee.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],m=n[8],v=s[0],p=s[3],g=s[6],_=s[1],S=s[4],x=s[7],M=s[2],w=s[5],A=s[8];return r[0]=o*v+a*_+l*M,r[3]=o*p+a*S+l*w,r[6]=o*g+a*x+l*A,r[1]=c*v+u*_+f*M,r[4]=c*p+u*S+f*w,r[7]=c*g+u*x+f*A,r[2]=h*v+d*_+m*M,r[5]=h*p+d*S+m*w,r[8]=h*g+d*x+m*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=u*o-a*c,h=a*l-u*r,d=c*r-o*l,m=e*f+n*h+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return t[0]=f*v,t[1]=(s*c-u*n)*v,t[2]=(a*n-s*o)*v,t[3]=h*v,t[4]=(u*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=d*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(rl.makeScale(t,e)),this}rotate(t){return this.premultiply(rl.makeRotation(-t)),this}translate(t,e){return this.premultiply(rl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const rl=new ee,Uh=new ee().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Oh=new ee().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Gx(){const i={enabled:!0,workingColorSpace:hr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ve&&(s.r=Ii(s.r),s.g=Ii(s.g),s.b=Ii(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ve&&(s.r=rr(s.r),s.g=rr(s.g),s.b=rr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ki?Sa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ro("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ro("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[hr]:{primaries:t,whitePoint:n,transfer:Sa,toXYZ:Uh,fromXYZ:Oh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Mn},outputColorSpaceConfig:{drawingBufferColorSpace:Mn}},[Mn]:{primaries:t,whitePoint:n,transfer:ve,toXYZ:Uh,fromXYZ:Oh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Mn}}}),i}const ue=Gx();function Ii(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function rr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ds;class Hx{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ds===void 0&&(Ds=ba("canvas")),Ds.width=t.width,Ds.height=t.height;const s=Ds.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ds}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ba("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ii(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ii(e[n]/255)*255):e[n]=Ii(e[n]);return{data:e,width:t.width,height:t.height}}else return Zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Wx=0;class Cu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Wx++}),this.uuid=xr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ol(s[o].image)):r.push(ol(s[o]))}else r=ol(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function ol(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Hx.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Zt("Texture: Unable to serialize Texture."),{})}let Xx=0;const al=new J;class Ye extends vr{constructor(t=Ye.DEFAULT_IMAGE,e=Ye.DEFAULT_MAPPING,n=Ci,s=Ci,r=qe,o=xs,a=Nn,l=gn,c=Ye.DEFAULT_ANISOTROPY,u=Ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xx++}),this.uuid=xr(),this.name="",this.source=new Cu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ee,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(al).x}get height(){return this.source.getSize(al).y}get depth(){return this.source.getSize(al).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Zt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Zt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==pp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case pc:t.x=t.x-Math.floor(t.x);break;case Ci:t.x=t.x<0?0:1;break;case mc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case pc:t.y=t.y-Math.floor(t.y);break;case Ci:t.y=t.y<0?0:1;break;case mc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ye.DEFAULT_IMAGE=null;Ye.DEFAULT_MAPPING=pp;Ye.DEFAULT_ANISOTROPY=1;class De{constructor(t=0,e=0,n=0,s=1){De.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],m=l[9],v=l[2],p=l[6],g=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-v)<.01&&Math.abs(m-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+v)<.1&&Math.abs(m+p)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,x=(d+1)/2,M=(g+1)/2,w=(u+h)/4,A=(f+v)/4,F=(m+p)/4;return S>x&&S>M?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=w/n,r=A/n):x>M?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=w/s,r=F/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=A/r,s=F/r),this.set(n,s,r,e),this}let _=Math.sqrt((p-m)*(p-m)+(f-v)*(f-v)+(h-u)*(h-u));return Math.abs(_)<.001&&(_=1),this.x=(p-m)/_,this.y=(f-v)/_,this.z=(h-u)/_,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this.w=re(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this.w=re(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qx extends vr{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new De(0,0,t,e),this.scissorTest=!1,this.viewport=new De(0,0,t,e);const s={width:t,height:e,depth:n.depth},r=new Ye(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:qe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Cu(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ni extends qx{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class wp extends Ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class $x extends Ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class go{constructor(t=new J(1/0,1/0,1/0),e=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(En.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(En.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=En.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,En):En.fromBufferAttribute(r,o),En.applyMatrix4(t.matrixWorld),this.expandByPoint(En);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Eo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Eo.copy(n.boundingBox)),Eo.applyMatrix4(t.matrixWorld),this.union(Eo)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,En),En.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Er),To.subVectors(this.max,Er),Ns.subVectors(t.a,Er),Fs.subVectors(t.b,Er),Us.subVectors(t.c,Er),Bi.subVectors(Fs,Ns),zi.subVectors(Us,Fs),os.subVectors(Ns,Us);let e=[0,-Bi.z,Bi.y,0,-zi.z,zi.y,0,-os.z,os.y,Bi.z,0,-Bi.x,zi.z,0,-zi.x,os.z,0,-os.x,-Bi.y,Bi.x,0,-zi.y,zi.x,0,-os.y,os.x,0];return!ll(e,Ns,Fs,Us,To)||(e=[1,0,0,0,1,0,0,0,1],!ll(e,Ns,Fs,Us,To))?!1:(Ao.crossVectors(Bi,zi),e=[Ao.x,Ao.y,Ao.z],ll(e,Ns,Fs,Us,To))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,En).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(En).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(di),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const di=[new J,new J,new J,new J,new J,new J,new J,new J],En=new J,Eo=new go,Ns=new J,Fs=new J,Us=new J,Bi=new J,zi=new J,os=new J,Er=new J,To=new J,Ao=new J,as=new J;function ll(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){as.fromArray(i,r);const a=s.x*Math.abs(as.x)+s.y*Math.abs(as.y)+s.z*Math.abs(as.z),l=t.dot(as),c=e.dot(as),u=n.dot(as);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Yx=new go,Tr=new J,cl=new J;class Ru{constructor(t=new J,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Yx.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Tr.subVectors(t,this.center);const e=Tr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Tr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(cl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Tr.copy(t.center).add(cl)),this.expandByPoint(Tr.copy(t.center).sub(cl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const pi=new J,ul=new J,Co=new J,Vi=new J,hl=new J,Ro=new J,fl=new J;let Ep=class{constructor(t=new J,e=new J(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,pi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=pi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(pi.copy(this.origin).addScaledVector(this.direction,e),pi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ul.copy(t).add(e).multiplyScalar(.5),Co.copy(e).sub(t).normalize(),Vi.copy(this.origin).sub(ul);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Co),a=Vi.dot(this.direction),l=-Vi.dot(Co),c=Vi.lengthSq(),u=Math.abs(1-o*o);let f,h,d,m;if(u>0)if(f=o*l-a,h=o*a-l,m=r*u,f>=0)if(h>=-m)if(h<=m){const v=1/u;f*=v,h*=v,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-m?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c):h<=m?(f=0,h=Math.min(Math.max(-r,-l),r),d=h*(h+2*l)+c):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(ul).addScaledVector(Co,h),d}intersectSphere(t,e){pi.subVectors(t.center,this.origin);const n=pi.dot(this.direction),s=pi.dot(pi)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(a=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,pi)!==null}intersectTriangle(t,e,n,s,r){hl.subVectors(e,t),Ro.subVectors(n,t),fl.crossVectors(hl,Ro);let o=this.direction.dot(fl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Vi.subVectors(this.origin,t);const l=a*this.direction.dot(Ro.crossVectors(Vi,Ro));if(l<0)return null;const c=a*this.direction.dot(hl.cross(Vi));if(c<0||l+c>o)return null;const u=-a*Vi.dot(fl);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class Re{constructor(t,e,n,s,r,o,a,l,c,u,f,h,d,m,v,p){Re.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,u,f,h,d,m,v,p)}set(t,e,n,s,r,o,a,l,c,u,f,h,d,m,v,p){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=f,g[14]=h,g[3]=d,g[7]=m,g[11]=v,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Re().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,n=t.elements,s=1/Os.setFromMatrixColumn(t,0).length(),r=1/Os.setFromMatrixColumn(t,1).length(),o=1/Os.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const h=o*u,d=o*f,m=a*u,v=a*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=d+m*c,e[5]=h-v*c,e[9]=-a*l,e[2]=v-h*c,e[6]=m+d*c,e[10]=o*l}else if(t.order==="YXZ"){const h=l*u,d=l*f,m=c*u,v=c*f;e[0]=h+v*a,e[4]=m*a-d,e[8]=o*c,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=d*a-m,e[6]=v+h*a,e[10]=o*l}else if(t.order==="ZXY"){const h=l*u,d=l*f,m=c*u,v=c*f;e[0]=h-v*a,e[4]=-o*f,e[8]=m+d*a,e[1]=d+m*a,e[5]=o*u,e[9]=v-h*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const h=o*u,d=o*f,m=a*u,v=a*f;e[0]=l*u,e[4]=m*c-d,e[8]=h*c+v,e[1]=l*f,e[5]=v*c+h,e[9]=d*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const h=o*l,d=o*c,m=a*l,v=a*c;e[0]=l*u,e[4]=v-h*f,e[8]=m*f+d,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*f+m,e[10]=h-v*f}else if(t.order==="XZY"){const h=o*l,d=o*c,m=a*l,v=a*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=h*f+v,e[5]=o*u,e[9]=d*f-m,e[2]=m*f-d,e[6]=a*u,e[10]=v*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(jx,t,Kx)}lookAt(t,e,n){const s=this.elements;return dn.subVectors(t,e),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),ki.crossVectors(n,dn),ki.lengthSq()===0&&(Math.abs(n.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),ki.crossVectors(n,dn)),ki.normalize(),Po.crossVectors(dn,ki),s[0]=ki.x,s[4]=Po.x,s[8]=dn.x,s[1]=ki.y,s[5]=Po.y,s[9]=dn.y,s[2]=ki.z,s[6]=Po.z,s[10]=dn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],m=n[2],v=n[6],p=n[10],g=n[14],_=n[3],S=n[7],x=n[11],M=n[15],w=s[0],A=s[4],F=s[8],b=s[12],T=s[1],L=s[5],X=s[9],O=s[13],q=s[2],V=s[6],U=s[10],W=s[14],j=s[3],ft=s[7],at=s[11],dt=s[15];return r[0]=o*w+a*T+l*q+c*j,r[4]=o*A+a*L+l*V+c*ft,r[8]=o*F+a*X+l*U+c*at,r[12]=o*b+a*O+l*W+c*dt,r[1]=u*w+f*T+h*q+d*j,r[5]=u*A+f*L+h*V+d*ft,r[9]=u*F+f*X+h*U+d*at,r[13]=u*b+f*O+h*W+d*dt,r[2]=m*w+v*T+p*q+g*j,r[6]=m*A+v*L+p*V+g*ft,r[10]=m*F+v*X+p*U+g*at,r[14]=m*b+v*O+p*W+g*dt,r[3]=_*w+S*T+x*q+M*j,r[7]=_*A+S*L+x*V+M*ft,r[11]=_*F+S*X+x*U+M*at,r[15]=_*b+S*O+x*W+M*dt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],f=t[6],h=t[10],d=t[14],m=t[3],v=t[7],p=t[11],g=t[15],_=l*d-c*h,S=a*d-c*f,x=a*h-l*f,M=o*d-c*u,w=o*h-l*u,A=o*f-a*u;return e*(v*_-p*S+g*x)-n*(m*_-p*M+g*w)+s*(m*S-v*M+g*A)-r*(m*x-v*w+p*A)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=t[9],h=t[10],d=t[11],m=t[12],v=t[13],p=t[14],g=t[15],_=f*p*c-v*h*c+v*l*d-a*p*d-f*l*g+a*h*g,S=m*h*c-u*p*c-m*l*d+o*p*d+u*l*g-o*h*g,x=u*v*c-m*f*c+m*a*d-o*v*d-u*a*g+o*f*g,M=m*f*l-u*v*l-m*a*h+o*v*h+u*a*p-o*f*p,w=e*_+n*S+s*x+r*M;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return t[0]=_*A,t[1]=(v*h*r-f*p*r-v*s*d+n*p*d+f*s*g-n*h*g)*A,t[2]=(a*p*r-v*l*r+v*s*c-n*p*c-a*s*g+n*l*g)*A,t[3]=(f*l*r-a*h*r-f*s*c+n*h*c+a*s*d-n*l*d)*A,t[4]=S*A,t[5]=(u*p*r-m*h*r+m*s*d-e*p*d-u*s*g+e*h*g)*A,t[6]=(m*l*r-o*p*r-m*s*c+e*p*c+o*s*g-e*l*g)*A,t[7]=(o*h*r-u*l*r+u*s*c-e*h*c-o*s*d+e*l*d)*A,t[8]=x*A,t[9]=(m*f*r-u*v*r-m*n*d+e*v*d+u*n*g-e*f*g)*A,t[10]=(o*v*r-m*a*r+m*n*c-e*v*c-o*n*g+e*a*g)*A,t[11]=(u*a*r-o*f*r-u*n*c+e*f*c+o*n*d-e*a*d)*A,t[12]=M*A,t[13]=(u*v*s-m*f*s+m*n*h-e*v*h-u*n*p+e*f*p)*A,t[14]=(m*a*s-o*v*s-m*n*l+e*v*l+o*n*p-e*a*p)*A,t[15]=(o*f*s-u*a*s+u*n*l-e*f*l-o*n*h+e*a*h)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,f=a+a,h=r*c,d=r*u,m=r*f,v=o*u,p=o*f,g=a*f,_=l*c,S=l*u,x=l*f,M=n.x,w=n.y,A=n.z;return s[0]=(1-(v+g))*M,s[1]=(d+x)*M,s[2]=(m-S)*M,s[3]=0,s[4]=(d-x)*w,s[5]=(1-(h+g))*w,s[6]=(p+_)*w,s[7]=0,s[8]=(m+S)*A,s[9]=(p-_)*A,s[10]=(1-(h+v))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;if(t.x=s[12],t.y=s[13],t.z=s[14],this.determinant()===0)return n.set(1,1,1),e.identity(),this;let r=Os.set(s[0],s[1],s[2]).length();const o=Os.set(s[4],s[5],s[6]).length(),a=Os.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),Tn.copy(this);const c=1/r,u=1/o,f=1/a;return Tn.elements[0]*=c,Tn.elements[1]*=c,Tn.elements[2]*=c,Tn.elements[4]*=u,Tn.elements[5]*=u,Tn.elements[6]*=u,Tn.elements[8]*=f,Tn.elements[9]*=f,Tn.elements[10]*=f,e.setFromRotationMatrix(Tn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Jn,l=!1){const c=this.elements,u=2*r/(e-t),f=2*r/(n-s),h=(e+t)/(e-t),d=(n+s)/(n-s);let m,v;if(l)m=r/(o-r),v=o*r/(o-r);else if(a===Jn)m=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Ma)m=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Jn,l=!1){const c=this.elements,u=2/(e-t),f=2/(n-s),h=-(e+t)/(e-t),d=-(n+s)/(n-s);let m,v;if(l)m=1/(o-r),v=o/(o-r);else if(a===Jn)m=-2/(o-r),v=-(o+r)/(o-r);else if(a===Ma)m=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Os=new J,Tn=new Re,jx=new J(0,0,0),Kx=new J(1,1,1),ki=new J,Po=new J,dn=new J,Bh=new Re,zh=new mo;class ai{constructor(t=0,e=0,n=0,s=ai.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-re(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(re(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-re(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(re(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-re(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Bh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Bh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return zh.setFromEuler(this),this.setFromQuaternion(zh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ai.DEFAULT_ORDER="XYZ";class Pu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Zx=0;const Vh=new J,Bs=new mo,mi=new Re,Io=new J,Ar=new J,Jx=new J,Qx=new mo,kh=new J(1,0,0),Gh=new J(0,1,0),Hh=new J(0,0,1),Wh={type:"added"},t_={type:"removed"},zs={type:"childadded",child:null},dl={type:"childremoved",child:null};class je extends vr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zx++}),this.uuid=xr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=je.DEFAULT_UP.clone();const t=new J,e=new ai,n=new mo,s=new J(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Re},normalMatrix:{value:new ee}}),this.matrix=new Re,this.matrixWorld=new Re,this.matrixAutoUpdate=je.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Bs.setFromAxisAngle(t,e),this.quaternion.multiply(Bs),this}rotateOnWorldAxis(t,e){return Bs.setFromAxisAngle(t,e),this.quaternion.premultiply(Bs),this}rotateX(t){return this.rotateOnAxis(kh,t)}rotateY(t){return this.rotateOnAxis(Gh,t)}rotateZ(t){return this.rotateOnAxis(Hh,t)}translateOnAxis(t,e){return Vh.copy(t).applyQuaternion(this.quaternion),this.position.add(Vh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(kh,t)}translateY(t){return this.translateOnAxis(Gh,t)}translateZ(t){return this.translateOnAxis(Hh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Io.copy(t):Io.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(Ar,Io,this.up):mi.lookAt(Io,Ar,this.up),this.quaternion.setFromRotationMatrix(mi),s&&(mi.extractRotation(s.matrixWorld),Bs.setFromRotationMatrix(mi),this.quaternion.premultiply(Bs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ae("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Wh),zs.child=t,this.dispatchEvent(zs),zs.child=null):ae("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(t_),dl.child=t,this.dispatchEvent(dl),dl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),mi.multiply(t.parent.matrixWorld)),t.applyMatrix4(mi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Wh),zs.child=t,this.dispatchEvent(zs),zs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,t,Jx),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,Qx,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),f=o(t.shapes),h=o(t.skeletons),d=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}je.DEFAULT_UP=new J(0,1,0);je.DEFAULT_MATRIX_AUTO_UPDATE=!0;je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const An=new J,gi=new J,pl=new J,vi=new J,Vs=new J,ks=new J,Xh=new J,ml=new J,gl=new J,vl=new J,xl=new De,_l=new De,yl=new De;class Dn{constructor(t=new J,e=new J,n=new J){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),An.subVectors(t,e),s.cross(An);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){An.subVectors(s,e),gi.subVectors(n,e),pl.subVectors(t,e);const o=An.dot(An),a=An.dot(gi),l=An.dot(pl),c=gi.dot(gi),u=gi.dot(pl),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const h=1/f,d=(c*l-a*u)*h,m=(o*u-a*l)*h;return r.set(1-d-m,m,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,vi.x),l.addScaledVector(o,vi.y),l.addScaledVector(a,vi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return xl.setScalar(0),_l.setScalar(0),yl.setScalar(0),xl.fromBufferAttribute(t,e),_l.fromBufferAttribute(t,n),yl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(xl,r.x),o.addScaledVector(_l,r.y),o.addScaledVector(yl,r.z),o}static isFrontFacing(t,e,n,s){return An.subVectors(n,e),gi.subVectors(t,e),An.cross(gi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return An.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),An.cross(gi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Dn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Dn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Dn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Dn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Dn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Vs.subVectors(s,n),ks.subVectors(r,n),ml.subVectors(t,n);const l=Vs.dot(ml),c=ks.dot(ml);if(l<=0&&c<=0)return e.copy(n);gl.subVectors(t,s);const u=Vs.dot(gl),f=ks.dot(gl);if(u>=0&&f<=u)return e.copy(s);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(Vs,o);vl.subVectors(t,r);const d=Vs.dot(vl),m=ks.dot(vl);if(m>=0&&d<=m)return e.copy(r);const v=d*c-l*m;if(v<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(ks,a);const p=u*m-d*f;if(p<=0&&f-u>=0&&d-m>=0)return Xh.subVectors(r,s),a=(f-u)/(f-u+(d-m)),e.copy(s).addScaledVector(Xh,a);const g=1/(p+v+h);return o=v*g,a=h*g,e.copy(n).addScaledVector(Vs,o).addScaledVector(ks,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Tp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gi={h:0,s:0,l:0},Lo={h:0,s:0,l:0};function Sl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class le{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Mn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ue.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ue.workingColorSpace){return this.r=t,this.g=e,this.b=n,ue.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ue.workingColorSpace){if(t=kx(t,1),e=re(e,0,1),n=re(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Sl(o,r,t+1/3),this.g=Sl(o,r,t),this.b=Sl(o,r,t-1/3)}return ue.colorSpaceToWorking(this,s),this}setStyle(t,e=Mn){function n(r){r!==void 0&&parseFloat(r)<1&&Zt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Zt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Mn){const n=Tp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Zt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ii(t.r),this.g=Ii(t.g),this.b=Ii(t.b),this}copyLinearToSRGB(t){return this.r=rr(t.r),this.g=rr(t.g),this.b=rr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Mn){return ue.workingToColorSpace(We.copy(this),t),Math.round(re(We.r*255,0,255))*65536+Math.round(re(We.g*255,0,255))*256+Math.round(re(We.b*255,0,255))}getHexString(t=Mn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ue.workingColorSpace){ue.workingToColorSpace(We.copy(this),e);const n=We.r,s=We.g,r=We.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ue.workingColorSpace){return ue.workingToColorSpace(We.copy(this),e),t.r=We.r,t.g=We.g,t.b=We.b,t}getStyle(t=Mn){ue.workingToColorSpace(We.copy(this),t);const e=We.r,n=We.g,s=We.b;return t!==Mn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Gi),this.setHSL(Gi.h+t,Gi.s+e,Gi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Gi),t.getHSL(Lo);const n=il(Gi.h,Lo.h,e),s=il(Gi.s,Lo.s,e),r=il(Gi.l,Lo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const We=new le;le.NAMES=Tp;let e_=0,vo=class extends vr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:e_++}),this.uuid=xr(),this.name="",this.type="Material",this.blending=sr,this.side=es,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ic,this.blendDst=sc,this.blendEquation=ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new le(0,0,0),this.blendAlpha=0,this.depthFunc=lr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ph,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ls,this.stencilZFail=Ls,this.stencilZPass=Ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Zt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Zt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==sr&&(n.blending=this.blending),this.side!==es&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ic&&(n.blendSrc=this.blendSrc),this.blendDst!==sc&&(n.blendDst=this.blendDst),this.blendEquation!==ms&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==lr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ph&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ls&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ls&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ls&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};class $r extends vo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.combine=op,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Fe=new J,Do=new Lt;let n_=0;class ii{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:n_++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ih,this.updateRanges=[],this.gpuType=Zn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Do.fromBufferAttribute(this,e),Do.applyMatrix3(t),this.setXY(e,Do.x,Do.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix3(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix4(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyNormalMatrix(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.transformDirection(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=wr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=an(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=wr(e,this.array)),e}setX(t,e){return this.normalized&&(e=an(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=wr(e,this.array)),e}setY(t,e){return this.normalized&&(e=an(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=wr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=an(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=wr(e,this.array)),e}setW(t,e){return this.normalized&&(e=an(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=an(e,this.array),n=an(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=an(e,this.array),n=an(n,this.array),s=an(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=an(e,this.array),n=an(n,this.array),s=an(s,this.array),r=an(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ih&&(t.usage=this.usage),t}}class Ap extends ii{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Cp extends ii{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Bn extends ii{constructor(t,e,n){super(new Float32Array(t),e,n)}}let i_=0;const Sn=new Re,Ml=new je,Gs=new J,pn=new go,Cr=new go,ke=new J;class ci extends vr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:i_++}),this.uuid=xr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(bp(t)?Cp:Ap)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ee().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Sn.makeRotationFromQuaternion(t),this.applyMatrix4(Sn),this}rotateX(t){return Sn.makeRotationX(t),this.applyMatrix4(Sn),this}rotateY(t){return Sn.makeRotationY(t),this.applyMatrix4(Sn),this}rotateZ(t){return Sn.makeRotationZ(t),this.applyMatrix4(Sn),this}translate(t,e,n){return Sn.makeTranslation(t,e,n),this.applyMatrix4(Sn),this}scale(t,e,n){return Sn.makeScale(t,e,n),this.applyMatrix4(Sn),this}lookAt(t){return Ml.lookAt(t),Ml.updateMatrix(),this.applyMatrix4(Ml.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gs).negate(),this.translate(Gs.x,Gs.y,Gs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Bn(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new go);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ae("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];pn.setFromBufferAttribute(r),this.morphTargetsRelative?(ke.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(ke),ke.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(ke)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ae('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ru);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ae("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(t){const n=this.boundingSphere.center;if(pn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Cr.setFromBufferAttribute(a),this.morphTargetsRelative?(ke.addVectors(pn.min,Cr.min),pn.expandByPoint(ke),ke.addVectors(pn.max,Cr.max),pn.expandByPoint(ke)):(pn.expandByPoint(Cr.min),pn.expandByPoint(Cr.max))}pn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)ke.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ke));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)ke.fromBufferAttribute(a,c),l&&(Gs.fromBufferAttribute(t,c),ke.add(Gs)),s=Math.max(s,n.distanceToSquared(ke))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ae('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ae("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ii(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let F=0;F<n.count;F++)a[F]=new J,l[F]=new J;const c=new J,u=new J,f=new J,h=new Lt,d=new Lt,m=new Lt,v=new J,p=new J;function g(F,b,T){c.fromBufferAttribute(n,F),u.fromBufferAttribute(n,b),f.fromBufferAttribute(n,T),h.fromBufferAttribute(r,F),d.fromBufferAttribute(r,b),m.fromBufferAttribute(r,T),u.sub(c),f.sub(c),d.sub(h),m.sub(h);const L=1/(d.x*m.y-m.x*d.y);isFinite(L)&&(v.copy(u).multiplyScalar(m.y).addScaledVector(f,-d.y).multiplyScalar(L),p.copy(f).multiplyScalar(d.x).addScaledVector(u,-m.x).multiplyScalar(L),a[F].add(v),a[b].add(v),a[T].add(v),l[F].add(p),l[b].add(p),l[T].add(p))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let F=0,b=_.length;F<b;++F){const T=_[F],L=T.start,X=T.count;for(let O=L,q=L+X;O<q;O+=3)g(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const S=new J,x=new J,M=new J,w=new J;function A(F){M.fromBufferAttribute(s,F),w.copy(M);const b=a[F];S.copy(b),S.sub(M.multiplyScalar(M.dot(b))).normalize(),x.crossVectors(w,b);const L=x.dot(l[F])<0?-1:1;o.setXYZW(F,S.x,S.y,S.z,L)}for(let F=0,b=_.length;F<b;++F){const T=_[F],L=T.start,X=T.count;for(let O=L,q=L+X;O<q;O+=3)A(t.getX(O+0)),A(t.getX(O+1)),A(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ii(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const s=new J,r=new J,o=new J,a=new J,l=new J,c=new J,u=new J,f=new J;if(t)for(let h=0,d=t.count;h<d;h+=3){const m=t.getX(h+0),v=t.getX(h+1),p=t.getX(h+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,p),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,d=e.count;h<d;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ke.fromBufferAttribute(t,e),ke.normalize(),t.setXYZ(e,ke.x,ke.y,ke.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,m=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?d=l[v]*a.data.stride+a.offset:d=l[v]*u;for(let g=0;g<u;g++)h[m++]=c[d++]}return new ii(h,u,f)}if(this.index===null)return Zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ci,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=t(h,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const qh=new Re,ls=new Ep,No=new Ru,$h=new J,Fo=new J,Uo=new J,Oo=new J,bl=new J,Bo=new J,Yh=new J,zo=new J;class oe extends je{constructor(t=new ci,e=new $r){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Bo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],f=r[l];u!==0&&(bl.fromBufferAttribute(f,t),o?Bo.addScaledVector(bl,u):Bo.addScaledVector(bl.sub(e),u))}e.add(Bo)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),No.copy(n.boundingSphere),No.applyMatrix4(r),ls.copy(t.ray).recast(t.near),!(No.containsPoint(ls.origin)===!1&&(ls.intersectSphere(No,$h)===null||ls.origin.distanceToSquared($h)>(t.far-t.near)**2))&&(qh.copy(r).invert(),ls.copy(t.ray).applyMatrix4(qh),!(n.boundingBox!==null&&ls.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ls)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,v=h.length;m<v;m++){const p=h[m],g=o[p.materialIndex],_=Math.max(p.start,d.start),S=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let x=_,M=S;x<M;x+=3){const w=a.getX(x),A=a.getX(x+1),F=a.getX(x+2);s=Vo(this,g,t,n,c,u,f,w,A,F),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const m=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let p=m,g=v;p<g;p+=3){const _=a.getX(p),S=a.getX(p+1),x=a.getX(p+2);s=Vo(this,o,t,n,c,u,f,_,S,x),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,v=h.length;m<v;m++){const p=h[m],g=o[p.materialIndex],_=Math.max(p.start,d.start),S=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let x=_,M=S;x<M;x+=3){const w=x,A=x+1,F=x+2;s=Vo(this,g,t,n,c,u,f,w,A,F),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const m=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let p=m,g=v;p<g;p+=3){const _=p,S=p+1,x=p+2;s=Vo(this,o,t,n,c,u,f,_,S,x),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function s_(i,t,e,n,s,r,o,a){let l;if(t.side===un?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===es,a),l===null)return null;zo.copy(a),zo.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(zo);return c<e.near||c>e.far?null:{distance:c,point:zo.clone(),object:i}}function Vo(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Fo),i.getVertexPosition(l,Uo),i.getVertexPosition(c,Oo);const u=s_(i,t,e,n,Fo,Uo,Oo,Yh);if(u){const f=new J;Dn.getBarycoord(Yh,Fo,Uo,Oo,f),s&&(u.uv=Dn.getInterpolatedAttribute(s,a,l,c,f,new Lt)),r&&(u.uv1=Dn.getInterpolatedAttribute(r,a,l,c,f,new Lt)),o&&(u.normal=Dn.getInterpolatedAttribute(o,a,l,c,f,new J),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new J,materialIndex:0};Dn.getNormal(Fo,Uo,Oo,h.normal),u.face=h,u.barycoord=f}return u}class Ri extends ci{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Bn(c,3)),this.setAttribute("normal",new Bn(u,3)),this.setAttribute("uv",new Bn(f,2));function m(v,p,g,_,S,x,M,w,A,F,b){const T=x/A,L=M/F,X=x/2,O=M/2,q=w/2,V=A+1,U=F+1;let W=0,j=0;const ft=new J;for(let at=0;at<U;at++){const dt=at*L-O;for(let xt=0;xt<V;xt++){const Ft=xt*T-X;ft[v]=Ft*_,ft[p]=dt*S,ft[g]=q,c.push(ft.x,ft.y,ft.z),ft[v]=0,ft[p]=0,ft[g]=w>0?1:-1,u.push(ft.x,ft.y,ft.z),f.push(xt/A),f.push(1-at/F),W+=1}}for(let at=0;at<F;at++)for(let dt=0;dt<A;dt++){const xt=h+dt+V*at,Ft=h+dt+V*(at+1),kt=h+(dt+1)+V*(at+1),jt=h+(dt+1)+V*at;l.push(xt,Ft,jt),l.push(Ft,kt,jt),j+=6}a.addGroup(d,j,b),d+=j,h+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ri(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function fr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Qe(i){const t={};for(let e=0;e<i.length;e++){const n=fr(i[e]);for(const s in n)t[s]=n[s]}return t}function r_(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Rp(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ue.workingColorSpace}const o_={clone:fr,merge:Qe};var a_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,l_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class li extends vo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=a_,this.fragmentShader=l_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=fr(t.uniforms),this.uniformsGroups=r_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Pp extends je{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Re,this.projectionMatrix=new Re,this.projectionMatrixInverse=new Re,this.coordinateSystem=Jn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Hi=new J,jh=new Lt,Kh=new Lt;class In extends Pp{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Yc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(nl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Yc*2*Math.atan(Math.tan(nl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Hi.x,Hi.y).multiplyScalar(-t/Hi.z),Hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hi.x,Hi.y).multiplyScalar(-t/Hi.z)}getViewSize(t,e){return this.getViewBounds(t,jh,Kh),e.subVectors(Kh,jh)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(nl*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Hs=-90,Ws=1;class c_ extends je{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new In(Hs,Ws,t,e);s.layers=this.layers,this.add(s);const r=new In(Hs,Ws,t,e);r.layers=this.layers,this.add(r);const o=new In(Hs,Ws,t,e);o.layers=this.layers,this.add(o);const a=new In(Hs,Ws,t,e);a.layers=this.layers,this.add(a);const l=new In(Hs,Ws,t,e);l.layers=this.layers,this.add(l);const c=new In(Hs,Ws,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Jn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ma)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(f,h,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Ip extends Ye{constructor(t=[],e=Es,n,s,r,o,a,l,c,u){super(t,e,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Lp extends ni{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ip(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ri(5,5,5),r=new li({name:"CubemapFromEquirect",uniforms:fr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:un,blending:Pi});r.uniforms.tEquirect.value=e;const o=new oe(s,r),a=e.minFilter;return e.minFilter===xs&&(e.minFilter=qe),new c_(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}class ys extends je{constructor(){super(),this.isGroup=!0,this.type="Group"}}const u_={type:"move"};class wl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ys,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ys,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ys,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const v of t.hand.values()){const p=e.getJointPose(v,n),g=this._getHandJoint(c,v);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,m=.005;c.inputState.pinching&&h>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(u_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ys;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Iu{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new le(t),this.near=e,this.far=n}clone(){return new Iu(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class h_ extends je{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ai,this.environmentIntensity=1,this.environmentRotation=new ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class f_ extends Ye{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Ge,u=Ge,f,h){super(null,o,a,l,c,u,s,r,f,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const El=new J,d_=new J,p_=new ee;let ji=class{constructor(t=new J(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=El.subVectors(n,e).cross(d_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(El),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||p_.getNormalMatrix(t),s=this.coplanarPoint(El).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}};const cs=new Ru,m_=new Lt(.5,.5),ko=new J;class Lu{constructor(t=new ji,e=new ji,n=new ji,s=new ji,r=new ji,o=new ji){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Jn,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],f=r[5],h=r[6],d=r[7],m=r[8],v=r[9],p=r[10],g=r[11],_=r[12],S=r[13],x=r[14],M=r[15];if(s[0].setComponents(c-o,d-u,g-m,M-_).normalize(),s[1].setComponents(c+o,d+u,g+m,M+_).normalize(),s[2].setComponents(c+a,d+f,g+v,M+S).normalize(),s[3].setComponents(c-a,d-f,g-v,M-S).normalize(),n)s[4].setComponents(l,h,p,x).normalize(),s[5].setComponents(c-l,d-h,g-p,M-x).normalize();else if(s[4].setComponents(c-l,d-h,g-p,M-x).normalize(),e===Jn)s[5].setComponents(c+l,d+h,g+p,M+x).normalize();else if(e===Ma)s[5].setComponents(l,h,p,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),cs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),cs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(cs)}intersectsSprite(t){cs.center.set(0,0,0);const e=m_.distanceTo(t.center);return cs.radius=.7071067811865476+e,cs.applyMatrix4(t.matrixWorld),this.intersectsSphere(cs)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(ko.x=s.normal.x>0?t.max.x:t.min.x,ko.y=s.normal.y>0?t.max.y:t.min.y,ko.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ko)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Zh extends Ye{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class oo extends Ye{constructor(t,e,n=oi,s,r,o,a=Ge,l=Ge,c,u=Ui,f=1){if(u!==Ui&&u!==_s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:f};super(h,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Cu(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class g_ extends oo{constructor(t,e=oi,n=Es,s,r,o=Ge,a=Ge,l,c=Ui){const u={width:t,height:t,depth:1},f=[u,u,u,u,u,u];super(t,t,e,n,s,r,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Dp extends Ye{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class ui{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Zt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const u=n[s],h=n[s+1]-u,d=(o-u)/h;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new Lt:new J);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new J,s=[],r=[],o=[],a=new J,l=new Re;for(let d=0;d<=t;d++){const m=d/t;s[d]=this.getTangentAt(m,new J)}r[0]=new J,o[0]=new J;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),f=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),h<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(re(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,m))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(re(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],d*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Du extends ui{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Lt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,d=c-this.aY;l=h*u-d*f+this.aX,c=h*f+d*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class v_ extends Du{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Nu(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,f){let h=(o-r)/c-(a-r)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+f)+(l-a)/f;h*=u,d*=u,s(o,a,h,d)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const Go=new J,Tl=new Nu,Al=new Nu,Cl=new Nu;class x_ extends ui{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new J){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Go.subVectors(s[0],s[1]).add(s[0]),c=Go);const f=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Go.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Go),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(f),d),v=Math.pow(f.distanceToSquared(h),d),p=Math.pow(h.distanceToSquared(u),d);v<1e-4&&(v=1),m<1e-4&&(m=v),p<1e-4&&(p=v),Tl.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,m,v,p),Al.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,m,v,p),Cl.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,m,v,p)}else this.curveType==="catmullrom"&&(Tl.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),Al.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),Cl.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return n.set(Tl.calc(l),Al.calc(l),Cl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new J().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Jh(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function __(i,t){const e=1-i;return e*e*t}function y_(i,t){return 2*(1-i)*i*t}function S_(i,t){return i*i*t}function Yr(i,t,e,n){return __(i,t)+y_(i,e)+S_(i,n)}function M_(i,t){const e=1-i;return e*e*e*t}function b_(i,t){const e=1-i;return 3*e*e*i*t}function w_(i,t){return 3*(1-i)*i*i*t}function E_(i,t){return i*i*i*t}function jr(i,t,e,n,s){return M_(i,t)+b_(i,e)+w_(i,n)+E_(i,s)}class Np extends ui{constructor(t=new Lt,e=new Lt,n=new Lt,s=new Lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Lt){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(jr(t,s.x,r.x,o.x,a.x),jr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class T_ extends ui{constructor(t=new J,e=new J,n=new J,s=new J){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new J){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(jr(t,s.x,r.x,o.x,a.x),jr(t,s.y,r.y,o.y,a.y),jr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Fp extends ui{constructor(t=new Lt,e=new Lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Lt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class A_ extends ui{constructor(t=new J,e=new J){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new J){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new J){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Up extends ui{constructor(t=new Lt,e=new Lt,n=new Lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Lt){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Yr(t,s.x,r.x,o.x),Yr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class C_ extends ui{constructor(t=new J,e=new J,n=new J){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new J){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Yr(t,s.x,r.x,o.x),Yr(t,s.y,r.y,o.y),Yr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Op extends ui{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Lt){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return n.set(Jh(a,l.x,c.x,u.x,f.x),Jh(a,l.y,c.y,u.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new Lt().fromArray(s))}return this}}var jc=Object.freeze({__proto__:null,ArcCurve:v_,CatmullRomCurve3:x_,CubicBezierCurve:Np,CubicBezierCurve3:T_,EllipseCurve:Du,LineCurve:Fp,LineCurve3:A_,QuadraticBezierCurve:Up,QuadraticBezierCurve3:C_,SplineCurve:Op});class R_ extends ui{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new jc[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new jc[s.type]().fromJSON(s))}return this}}class Qh extends R_{constructor(t){super(),this.type="Path",this.currentPoint=new Lt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Fp(this.currentPoint.clone(),new Lt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Up(this.currentPoint.clone(),new Lt(t,e),new Lt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new Np(this.currentPoint.clone(),new Lt(t,e),new Lt(n,s),new Lt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Op(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){const c=new Du(t,e,n,s,r,o,a,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}let Bp=class extends Qh{constructor(t){super(t),this.uuid=xr(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Qh().fromJSON(s))}return this}};function P_(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=zp(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=F_(i,t,r,e)),i.length>80*e){a=i[0],l=i[1];let u=a,f=l;for(let h=e;h<s;h+=e){const d=i[h],m=i[h+1];d<a&&(a=d),m<l&&(l=m),d>u&&(u=d),m>f&&(f=m)}c=Math.max(u-a,f-l),c=c!==0?32767/c:0}return ao(r,o,e,a,l,c,0),o}function zp(i,t,e,n,s){let r;if(s===q_(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=tf(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=tf(o/n|0,i[o],i[o+1],r);return r&&dr(r,r.next)&&(co(r),r=r.next),r}function Ts(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(dr(e,e.next)||Pe(e.prev,e,e.next)===0)){if(co(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function ao(i,t,e,n,s,r,o){if(!i)return;!o&&r&&V_(i,n,s,r);let a=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?L_(i,n,s,r):I_(i)){t.push(l.i,i.i,c.i),co(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=D_(Ts(i),t),ao(i,t,e,n,s,r,2)):o===2&&N_(i,t,e,n,s,r):ao(Ts(i),t,e,n,s,r,1);break}}}function I_(i){const t=i.prev,e=i,n=i.next;if(Pe(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,u=Math.min(s,r,o),f=Math.min(a,l,c),h=Math.max(s,r,o),d=Math.max(a,l,c);let m=n.next;for(;m!==t;){if(m.x>=u&&m.x<=h&&m.y>=f&&m.y<=d&&Br(s,a,r,l,o,c,m.x,m.y)&&Pe(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function L_(i,t,e,n){const s=i.prev,r=i,o=i.next;if(Pe(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,u=s.y,f=r.y,h=o.y,d=Math.min(a,l,c),m=Math.min(u,f,h),v=Math.max(a,l,c),p=Math.max(u,f,h),g=Kc(d,m,t,e,n),_=Kc(v,p,t,e,n);let S=i.prevZ,x=i.nextZ;for(;S&&S.z>=g&&x&&x.z<=_;){if(S.x>=d&&S.x<=v&&S.y>=m&&S.y<=p&&S!==s&&S!==o&&Br(a,u,l,f,c,h,S.x,S.y)&&Pe(S.prev,S,S.next)>=0||(S=S.prevZ,x.x>=d&&x.x<=v&&x.y>=m&&x.y<=p&&x!==s&&x!==o&&Br(a,u,l,f,c,h,x.x,x.y)&&Pe(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;S&&S.z>=g;){if(S.x>=d&&S.x<=v&&S.y>=m&&S.y<=p&&S!==s&&S!==o&&Br(a,u,l,f,c,h,S.x,S.y)&&Pe(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;x&&x.z<=_;){if(x.x>=d&&x.x<=v&&x.y>=m&&x.y<=p&&x!==s&&x!==o&&Br(a,u,l,f,c,h,x.x,x.y)&&Pe(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function D_(i,t){let e=i;do{const n=e.prev,s=e.next.next;!dr(n,s)&&kp(n,e,e.next,s)&&lo(n,s)&&lo(s,n)&&(t.push(n.i,e.i,s.i),co(e),co(e.next),e=i=s),e=e.next}while(e!==i);return Ts(e)}function N_(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&H_(o,a)){let l=Gp(o,a);o=Ts(o,o.next),l=Ts(l,l.next),ao(o,t,e,n,s,r,0),ao(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function F_(i,t,e,n){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=zp(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(G_(c))}s.sort(U_);for(let r=0;r<s.length;r++)e=O_(s[r],e);return e}function U_(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function O_(i,t){const e=B_(i,t);if(!e)return t;const n=Gp(e,i);return Ts(n,n.next),Ts(e,e.next)}function B_(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,o;if(dr(i,e))return e;do{if(dr(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const f=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>r&&(r=f,o=e.x<e.next.x?e:e.next,f===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,c=o.y;let u=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Vp(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){const f=Math.abs(s-e.y)/(n-e.x);lo(e,i)&&(f<u||f===u&&(e.x>o.x||e.x===o.x&&z_(o,e)))&&(o=e,u=f)}e=e.next}while(e!==a);return o}function z_(i,t){return Pe(i.prev,i,t.prev)<0&&Pe(t.next,i,i.next)<0}function V_(i,t,e,n){let s=i;do s.z===0&&(s.z=Kc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,k_(s)}function k_(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Kc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function G_(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Vp(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Br(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Vp(i,t,e,n,s,r,o,a)}function H_(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!W_(i,t)&&(lo(i,t)&&lo(t,i)&&X_(i,t)&&(Pe(i.prev,i,t.prev)||Pe(i,t.prev,t))||dr(i,t)&&Pe(i.prev,i,i.next)>0&&Pe(t.prev,t,t.next)>0)}function Pe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function dr(i,t){return i.x===t.x&&i.y===t.y}function kp(i,t,e,n){const s=Wo(Pe(i,t,e)),r=Wo(Pe(i,t,n)),o=Wo(Pe(e,n,i)),a=Wo(Pe(e,n,t));return!!(s!==r&&o!==a||s===0&&Ho(i,e,t)||r===0&&Ho(i,n,t)||o===0&&Ho(e,i,n)||a===0&&Ho(e,t,n))}function Ho(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Wo(i){return i>0?1:i<0?-1:0}function W_(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&kp(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function lo(i,t){return Pe(i.prev,i,i.next)<0?Pe(i,t,i.next)>=0&&Pe(i,i.prev,t)>=0:Pe(i,t,i.prev)<0||Pe(i,i.next,t)<0}function X_(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Gp(i,t){const e=Zc(i.i,i.x,i.y),n=Zc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function tf(i,t,e,n){const s=Zc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function co(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Zc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function q_(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class $_{static triangulate(t,e,n=2){return P_(t,e,n)}}class Zs{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Zs.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];ef(t),nf(n,t);let o=t.length;e.forEach(ef);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,nf(n,e[l]);const a=$_.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function ef(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function nf(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Fu extends ci{constructor(t=new Bp([new Lt(.5,.5),new Lt(-.5,.5),new Lt(-.5,-.5),new Lt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new Bn(s,3)),this.setAttribute("uv",new Bn(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:d-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const g=e.extrudePath,_=e.UVGenerator!==void 0?e.UVGenerator:Y_;let S,x=!1,M,w,A,F;if(g){S=g.getSpacedPoints(u),x=!0,h=!1;const D=g.isCatmullRomCurve3?g.closed:!1;M=g.computeFrenetFrames(u,D),w=new J,A=new J,F=new J}h||(p=0,d=0,m=0,v=0);const b=a.extractPoints(c);let T=b.shape;const L=b.holes;if(!Zs.isClockWise(T)){T=T.reverse();for(let D=0,z=L.length;D<z;D++){const H=L[D];Zs.isClockWise(H)&&(L[D]=H.reverse())}}function O(D){const H=10000000000000001e-36;let $=D[0];for(let R=1;R<=D.length;R++){const it=R%D.length,et=D[it],tt=et.x-$.x,st=et.y-$.y,C=tt*tt+st*st,y=Math.max(Math.abs(et.x),Math.abs(et.y),Math.abs($.x),Math.abs($.y)),B=H*y*y;if(C<=B){D.splice(it,1),R--;continue}$=et}}O(T),L.forEach(O);const q=L.length,V=T;for(let D=0;D<q;D++){const z=L[D];T=T.concat(z)}function U(D,z,H){return z||ae("ExtrudeGeometry: vec does not exist"),D.clone().addScaledVector(z,H)}const W=T.length;function j(D,z,H){let $,R,it;const et=D.x-z.x,tt=D.y-z.y,st=H.x-D.x,C=H.y-D.y,y=et*et+tt*tt,B=et*C-tt*st;if(Math.abs(B)>Number.EPSILON){const Z=Math.sqrt(y),ht=Math.sqrt(st*st+C*C),Q=z.x-tt/Z,_t=z.y+et/Z,gt=H.x-C/ht,Et=H.y+st/ht,Nt=((gt-Q)*C-(Et-_t)*st)/(et*C-tt*st);$=Q+et*Nt-D.x,R=_t+tt*Nt-D.y;const mt=$*$+R*R;if(mt<=2)return new Lt($,R);it=Math.sqrt(mt/2)}else{let Z=!1;et>Number.EPSILON?st>Number.EPSILON&&(Z=!0):et<-Number.EPSILON?st<-Number.EPSILON&&(Z=!0):Math.sign(tt)===Math.sign(C)&&(Z=!0),Z?($=-tt,R=et,it=Math.sqrt(y)):($=et,R=tt,it=Math.sqrt(y/2))}return new Lt($/it,R/it)}const ft=[];for(let D=0,z=V.length,H=z-1,$=D+1;D<z;D++,H++,$++)H===z&&(H=0),$===z&&($=0),ft[D]=j(V[D],V[H],V[$]);const at=[];let dt,xt=ft.concat();for(let D=0,z=q;D<z;D++){const H=L[D];dt=[];for(let $=0,R=H.length,it=R-1,et=$+1;$<R;$++,it++,et++)it===R&&(it=0),et===R&&(et=0),dt[$]=j(H[$],H[it],H[et]);at.push(dt),xt=xt.concat(dt)}let Ft;if(p===0)Ft=Zs.triangulateShape(V,L);else{const D=[],z=[];for(let H=0;H<p;H++){const $=H/p,R=d*Math.cos($*Math.PI/2),it=m*Math.sin($*Math.PI/2)+v;for(let et=0,tt=V.length;et<tt;et++){const st=U(V[et],ft[et],it);ct(st.x,st.y,-R),$===0&&D.push(st)}for(let et=0,tt=q;et<tt;et++){const st=L[et];dt=at[et];const C=[];for(let y=0,B=st.length;y<B;y++){const Z=U(st[y],dt[y],it);ct(Z.x,Z.y,-R),$===0&&C.push(Z)}$===0&&z.push(C)}}Ft=Zs.triangulateShape(D,z)}const kt=Ft.length,jt=m+v;for(let D=0;D<W;D++){const z=h?U(T[D],xt[D],jt):T[D];x?(A.copy(M.normals[0]).multiplyScalar(z.x),w.copy(M.binormals[0]).multiplyScalar(z.y),F.copy(S[0]).add(A).add(w),ct(F.x,F.y,F.z)):ct(z.x,z.y,0)}for(let D=1;D<=u;D++)for(let z=0;z<W;z++){const H=h?U(T[z],xt[z],jt):T[z];x?(A.copy(M.normals[D]).multiplyScalar(H.x),w.copy(M.binormals[D]).multiplyScalar(H.y),F.copy(S[D]).add(A).add(w),ct(F.x,F.y,F.z)):ct(H.x,H.y,f/u*D)}for(let D=p-1;D>=0;D--){const z=D/p,H=d*Math.cos(z*Math.PI/2),$=m*Math.sin(z*Math.PI/2)+v;for(let R=0,it=V.length;R<it;R++){const et=U(V[R],ft[R],$);ct(et.x,et.y,f+H)}for(let R=0,it=L.length;R<it;R++){const et=L[R];dt=at[R];for(let tt=0,st=et.length;tt<st;tt++){const C=U(et[tt],dt[tt],$);x?ct(C.x,C.y+S[u-1].y,S[u-1].x+H):ct(C.x,C.y,f+H)}}}k(),G();function k(){const D=s.length/3;if(h){let z=0,H=W*z;for(let $=0;$<kt;$++){const R=Ft[$];lt(R[2]+H,R[1]+H,R[0]+H)}z=u+p*2,H=W*z;for(let $=0;$<kt;$++){const R=Ft[$];lt(R[0]+H,R[1]+H,R[2]+H)}}else{for(let z=0;z<kt;z++){const H=Ft[z];lt(H[2],H[1],H[0])}for(let z=0;z<kt;z++){const H=Ft[z];lt(H[0]+W*u,H[1]+W*u,H[2]+W*u)}}n.addGroup(D,s.length/3-D,0)}function G(){const D=s.length/3;let z=0;rt(V,z),z+=V.length;for(let H=0,$=L.length;H<$;H++){const R=L[H];rt(R,z),z+=R.length}n.addGroup(D,s.length/3-D,1)}function rt(D,z){let H=D.length;for(;--H>=0;){const $=H;let R=H-1;R<0&&(R=D.length-1);for(let it=0,et=u+p*2;it<et;it++){const tt=W*it,st=W*(it+1),C=z+$+tt,y=z+R+tt,B=z+R+st,Z=z+$+st;pt(C,y,B,Z)}}}function ct(D,z,H){l.push(D),l.push(z),l.push(H)}function lt(D,z,H){I(D),I(z),I(H);const $=s.length/3,R=_.generateTopUV(n,s,$-3,$-2,$-1);N(R[0]),N(R[1]),N(R[2])}function pt(D,z,H,$){I(D),I(z),I($),I(z),I(H),I($);const R=s.length/3,it=_.generateSideWallUV(n,s,R-6,R-3,R-2,R-1);N(it[0]),N(it[1]),N(it[3]),N(it[1]),N(it[2]),N(it[3])}function I(D){s.push(l[D*3+0]),s.push(l[D*3+1]),s.push(l[D*3+2])}function N(D){r.push(D.x),r.push(D.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return j_(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new jc[s.type]().fromJSON(s)),new Fu(n,t.options)}}const Y_={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[s*3],u=t[s*3+1];return[new Lt(r,o),new Lt(a,l),new Lt(c,u)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],f=t[n*3+2],h=t[s*3],d=t[s*3+1],m=t[s*3+2],v=t[r*3],p=t[r*3+1],g=t[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new Lt(o,1-l),new Lt(c,1-f),new Lt(h,1-m),new Lt(v,1-g)]:[new Lt(a,1-l),new Lt(u,1-f),new Lt(d,1-m),new Lt(p,1-g)]}};function j_(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class tn extends ci{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,f=t/a,h=e/l,d=[],m=[],v=[],p=[];for(let g=0;g<u;g++){const _=g*h-o;for(let S=0;S<c;S++){const x=S*f-r;m.push(x,-_,0),v.push(0,0,1),p.push(S/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let _=0;_<a;_++){const S=_+c*g,x=_+c*(g+1),M=_+1+c*(g+1),w=_+1+c*g;d.push(S,x,w),d.push(x,M,w)}this.setIndex(d),this.setAttribute("position",new Bn(m,3)),this.setAttribute("normal",new Bn(v,3)),this.setAttribute("uv",new Bn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tn(t.width,t.height,t.widthSegments,t.heightSegments)}}class K_ extends li{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Cn extends vo{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mp,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Z_ extends vo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ix,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class J_ extends vo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Hp extends je{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new le(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}const Rl=new Re,sf=new J,rf=new J;class Q_{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Lt(512,512),this.mapType=gn,this.map=null,this.mapPass=null,this.matrix=new Re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Lu,this._frameExtents=new Lt(1,1),this._viewportCount=1,this._viewports=[new De(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;sf.setFromMatrixPosition(t.matrixWorld),e.position.copy(sf),rf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(rf),e.updateMatrixWorld(),Rl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rl,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Rl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Ba extends Pp{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class ty extends Q_{constructor(){super(new Ba(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ey extends Hp{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(je.DEFAULT_UP),this.updateMatrix(),this.target=new je,this.shadow=new ty}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class ny extends Hp{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class iy extends In{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const of=new Re;class af{constructor(t,e,n=0,s=1/0){this.ray=new Ep(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Pu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ae("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return of.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(of),this}intersectObject(t,e=!0,n=[]){return Jc(t,this,n,e),n.sort(lf),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Jc(t[s],this,n,e);return n.sort(lf),n}}function lf(i,t){return i.distance-t.distance}function Jc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Jc(r[o],t,e,!0)}}function cf(i,t,e,n){const s=sy(n);switch(e){case _p:return i*t;case Sp:return i*t/s.components*s.byteLength;case bu:return i*t/s.components*s.byteLength;case ur:return i*t*2/s.components*s.byteLength;case wu:return i*t*2/s.components*s.byteLength;case yp:return i*t*3/s.components*s.byteLength;case Nn:return i*t*4/s.components*s.byteLength;case Eu:return i*t*4/s.components*s.byteLength;case oa:case aa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case la:case ca:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case vc:case _c:return Math.max(i,16)*Math.max(t,8)/4;case gc:case xc:return Math.max(i,8)*Math.max(t,8)/2;case yc:case Sc:case bc:case wc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Mc:case Ec:case Tc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ac:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Cc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Rc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Pc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ic:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Lc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Dc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Nc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Fc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Uc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Oc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Bc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case zc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Vc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case kc:case Gc:case Hc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Wc:case Xc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case qc:case $c:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function sy(i){switch(i){case gn:case mp:return{byteLength:1,components:1};case io:case gp:case Fi:return{byteLength:2,components:1};case Su:case Mu:return{byteLength:2,components:4};case oi:case yu:case Zn:return{byteLength:4,components:1};case vp:case xp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_u}}));typeof window<"u"&&(window.__THREE__?Zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_u);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Wp(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function ry(i){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){const u=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,u);else{f.sort((d,m)=>d.start-m.start);let h=0;for(let d=1;d<f.length;d++){const m=f[h],v=f[d];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++h,f[h]=v)}f.length=h+1;for(let d=0,m=f.length;d<m;d++){const v=f[d];i.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var oy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ay=`#ifdef USE_ALPHAHASH
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
#endif`,ly=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fy=`#ifdef USE_AOMAP
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
#endif`,dy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,py=`#ifdef USE_BATCHING
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
#endif`,my=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_y=`#ifdef USE_IRIDESCENCE
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
#endif`,yy=`#ifdef USE_BUMPMAP
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
#endif`,Sy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,My=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,by=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ey=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ty=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ay=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Cy=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ry=`#define PI 3.141592653589793
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
} // validated`,Py=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Iy=`vec3 transformedNormal = objectNormal;
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
#endif`,Ly=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ny=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Uy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Oy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,By=`#ifdef USE_ENVMAP
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
#endif`,zy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Vy=`#ifdef USE_ENVMAP
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
#endif`,ky=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gy=`#ifdef USE_ENVMAP
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
#endif`,Hy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$y=`#ifdef USE_GRADIENTMAP
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
}`,Yy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ky=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zy=`uniform bool receiveShadow;
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
#endif`,Jy=`#ifdef USE_ENVMAP
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
#endif`,Qy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,eS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,iS=`PhysicalMaterial material;
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
#endif`,sS=`uniform sampler2D dfgLUT;
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
}`,rS=`
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
#endif`,oS=`#if defined( RE_IndirectDiffuse )
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
#endif`,aS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,mS=`#if defined( USE_POINTS_UV )
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
#endif`,gS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_S=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,SS=`#ifdef USE_MORPHTARGETS
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
#endif`,MS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,wS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ES=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,TS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,AS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,CS=`#ifdef USE_NORMALMAP
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
#endif`,RS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,PS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,IS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,LS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,DS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,NS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,FS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,US=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,OS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,BS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,VS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,GS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,HS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,WS=`float getShadowMask() {
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
}`,XS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qS=`#ifdef USE_SKINNING
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
#endif`,$S=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,YS=`#ifdef USE_SKINNING
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
#endif`,jS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,KS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ZS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,JS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,QS=`#ifdef USE_TRANSMISSION
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
#endif`,tM=`#ifdef USE_TRANSMISSION
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
#endif`,eM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,oM=`uniform sampler2D t2D;
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
}`,aM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,cM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hM=`#include <common>
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
}`,fM=`#if DEPTH_PACKING == 3200
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
}`,dM=`#define DISTANCE
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
}`,pM=`#define DISTANCE
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
}`,mM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vM=`uniform float scale;
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
}`,xM=`uniform vec3 diffuse;
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
}`,_M=`#include <common>
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
}`,yM=`uniform vec3 diffuse;
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
}`,SM=`#define LAMBERT
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
}`,MM=`#define LAMBERT
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
}`,bM=`#define MATCAP
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
}`,wM=`#define MATCAP
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
}`,EM=`#define NORMAL
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
}`,TM=`#define NORMAL
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
}`,AM=`#define PHONG
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
}`,CM=`#define PHONG
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
}`,RM=`#define STANDARD
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
}`,PM=`#define STANDARD
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
}`,IM=`#define TOON
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
}`,LM=`#define TOON
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
}`,DM=`uniform float size;
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
}`,NM=`uniform vec3 diffuse;
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
}`,FM=`#include <common>
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
}`,UM=`uniform vec3 color;
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
}`,OM=`uniform float rotation;
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
}`,BM=`uniform vec3 diffuse;
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
}`,ne={alphahash_fragment:oy,alphahash_pars_fragment:ay,alphamap_fragment:ly,alphamap_pars_fragment:cy,alphatest_fragment:uy,alphatest_pars_fragment:hy,aomap_fragment:fy,aomap_pars_fragment:dy,batching_pars_vertex:py,batching_vertex:my,begin_vertex:gy,beginnormal_vertex:vy,bsdfs:xy,iridescence_fragment:_y,bumpmap_pars_fragment:yy,clipping_planes_fragment:Sy,clipping_planes_pars_fragment:My,clipping_planes_pars_vertex:by,clipping_planes_vertex:wy,color_fragment:Ey,color_pars_fragment:Ty,color_pars_vertex:Ay,color_vertex:Cy,common:Ry,cube_uv_reflection_fragment:Py,defaultnormal_vertex:Iy,displacementmap_pars_vertex:Ly,displacementmap_vertex:Dy,emissivemap_fragment:Ny,emissivemap_pars_fragment:Fy,colorspace_fragment:Uy,colorspace_pars_fragment:Oy,envmap_fragment:By,envmap_common_pars_fragment:zy,envmap_pars_fragment:Vy,envmap_pars_vertex:ky,envmap_physical_pars_fragment:Jy,envmap_vertex:Gy,fog_vertex:Hy,fog_pars_vertex:Wy,fog_fragment:Xy,fog_pars_fragment:qy,gradientmap_pars_fragment:$y,lightmap_pars_fragment:Yy,lights_lambert_fragment:jy,lights_lambert_pars_fragment:Ky,lights_pars_begin:Zy,lights_toon_fragment:Qy,lights_toon_pars_fragment:tS,lights_phong_fragment:eS,lights_phong_pars_fragment:nS,lights_physical_fragment:iS,lights_physical_pars_fragment:sS,lights_fragment_begin:rS,lights_fragment_maps:oS,lights_fragment_end:aS,logdepthbuf_fragment:lS,logdepthbuf_pars_fragment:cS,logdepthbuf_pars_vertex:uS,logdepthbuf_vertex:hS,map_fragment:fS,map_pars_fragment:dS,map_particle_fragment:pS,map_particle_pars_fragment:mS,metalnessmap_fragment:gS,metalnessmap_pars_fragment:vS,morphinstance_vertex:xS,morphcolor_vertex:_S,morphnormal_vertex:yS,morphtarget_pars_vertex:SS,morphtarget_vertex:MS,normal_fragment_begin:bS,normal_fragment_maps:wS,normal_pars_fragment:ES,normal_pars_vertex:TS,normal_vertex:AS,normalmap_pars_fragment:CS,clearcoat_normal_fragment_begin:RS,clearcoat_normal_fragment_maps:PS,clearcoat_pars_fragment:IS,iridescence_pars_fragment:LS,opaque_fragment:DS,packing:NS,premultiplied_alpha_fragment:FS,project_vertex:US,dithering_fragment:OS,dithering_pars_fragment:BS,roughnessmap_fragment:zS,roughnessmap_pars_fragment:VS,shadowmap_pars_fragment:kS,shadowmap_pars_vertex:GS,shadowmap_vertex:HS,shadowmask_pars_fragment:WS,skinbase_vertex:XS,skinning_pars_vertex:qS,skinning_vertex:$S,skinnormal_vertex:YS,specularmap_fragment:jS,specularmap_pars_fragment:KS,tonemapping_fragment:ZS,tonemapping_pars_fragment:JS,transmission_fragment:QS,transmission_pars_fragment:tM,uv_pars_fragment:eM,uv_pars_vertex:nM,uv_vertex:iM,worldpos_vertex:sM,background_vert:rM,background_frag:oM,backgroundCube_vert:aM,backgroundCube_frag:lM,cube_vert:cM,cube_frag:uM,depth_vert:hM,depth_frag:fM,distance_vert:dM,distance_frag:pM,equirect_vert:mM,equirect_frag:gM,linedashed_vert:vM,linedashed_frag:xM,meshbasic_vert:_M,meshbasic_frag:yM,meshlambert_vert:SM,meshlambert_frag:MM,meshmatcap_vert:bM,meshmatcap_frag:wM,meshnormal_vert:EM,meshnormal_frag:TM,meshphong_vert:AM,meshphong_frag:CM,meshphysical_vert:RM,meshphysical_frag:PM,meshtoon_vert:IM,meshtoon_frag:LM,points_vert:DM,points_frag:NM,shadow_vert:FM,shadow_frag:UM,sprite_vert:OM,sprite_frag:BM},It={common:{diffuse:{value:new le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ee}},envmap:{envMap:{value:null},envMapRotation:{value:new ee},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ee}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ee}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ee},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ee},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ee},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ee}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ee}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ee}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0},uvTransform:{value:new ee}},sprite:{diffuse:{value:new le(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}}},jn={basic:{uniforms:Qe([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.fog]),vertexShader:ne.meshbasic_vert,fragmentShader:ne.meshbasic_frag},lambert:{uniforms:Qe([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new le(0)}}]),vertexShader:ne.meshlambert_vert,fragmentShader:ne.meshlambert_frag},phong:{uniforms:Qe([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new le(0)},specular:{value:new le(1118481)},shininess:{value:30}}]),vertexShader:ne.meshphong_vert,fragmentShader:ne.meshphong_frag},standard:{uniforms:Qe([It.common,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.roughnessmap,It.metalnessmap,It.fog,It.lights,{emissive:{value:new le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag},toon:{uniforms:Qe([It.common,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.gradientmap,It.fog,It.lights,{emissive:{value:new le(0)}}]),vertexShader:ne.meshtoon_vert,fragmentShader:ne.meshtoon_frag},matcap:{uniforms:Qe([It.common,It.bumpmap,It.normalmap,It.displacementmap,It.fog,{matcap:{value:null}}]),vertexShader:ne.meshmatcap_vert,fragmentShader:ne.meshmatcap_frag},points:{uniforms:Qe([It.points,It.fog]),vertexShader:ne.points_vert,fragmentShader:ne.points_frag},dashed:{uniforms:Qe([It.common,It.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ne.linedashed_vert,fragmentShader:ne.linedashed_frag},depth:{uniforms:Qe([It.common,It.displacementmap]),vertexShader:ne.depth_vert,fragmentShader:ne.depth_frag},normal:{uniforms:Qe([It.common,It.bumpmap,It.normalmap,It.displacementmap,{opacity:{value:1}}]),vertexShader:ne.meshnormal_vert,fragmentShader:ne.meshnormal_frag},sprite:{uniforms:Qe([It.sprite,It.fog]),vertexShader:ne.sprite_vert,fragmentShader:ne.sprite_frag},background:{uniforms:{uvTransform:{value:new ee},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ne.background_vert,fragmentShader:ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ee}},vertexShader:ne.backgroundCube_vert,fragmentShader:ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ne.cube_vert,fragmentShader:ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ne.equirect_vert,fragmentShader:ne.equirect_frag},distance:{uniforms:Qe([It.common,It.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ne.distance_vert,fragmentShader:ne.distance_frag},shadow:{uniforms:Qe([It.lights,It.fog,{color:{value:new le(0)},opacity:{value:1}}]),vertexShader:ne.shadow_vert,fragmentShader:ne.shadow_frag}};jn.physical={uniforms:Qe([jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ee},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ee},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ee},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ee},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ee},sheen:{value:0},sheenColor:{value:new le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ee},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ee},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ee},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ee},attenuationDistance:{value:0},attenuationColor:{value:new le(0)},specularColor:{value:new le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ee},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ee},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ee}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag};const Xo={r:0,b:0,g:0},us=new ai,zM=new Re;function VM(i,t,e,n,s,r,o){const a=new le(0);let l=r===!0?0:1,c,u,f=null,h=0,d=null;function m(S){let x=S.isScene===!0?S.background:null;return x&&x.isTexture&&(x=(S.backgroundBlurriness>0?e:t).get(x)),x}function v(S){let x=!1;const M=m(S);M===null?g(a,l):M&&M.isColor&&(g(M,1),x=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(S,x){const M=m(x);M&&(M.isCubeTexture||M.mapping===Oa)?(u===void 0&&(u=new oe(new Ri(1,1,1),new li({name:"BackgroundCubeMaterial",uniforms:fr(jn.backgroundCube.uniforms),vertexShader:jn.backgroundCube.vertexShader,fragmentShader:jn.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,A,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),us.copy(x.backgroundRotation),us.x*=-1,us.y*=-1,us.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(us.y*=-1,us.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(zM.makeRotationFromEuler(us)),u.material.toneMapped=ue.getTransfer(M.colorSpace)!==ve,(f!==M||h!==M.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,f=M,h=M.version,d=i.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new oe(new tn(2,2),new li({name:"BackgroundMaterial",uniforms:fr(jn.background.uniforms),vertexShader:jn.background.vertexShader,fragmentShader:jn.background.fragmentShader,side:es,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=ue.getTransfer(M.colorSpace)!==ve,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||h!==M.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,f=M,h=M.version,d=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function g(S,x){S.getRGB(Xo,Rp(i)),n.buffers.color.setClear(Xo.r,Xo.g,Xo.b,x,o)}function _(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,x=1){a.set(S),l=x,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,g(a,l)},render:v,addToRenderList:p,dispose:_}}function kM(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,o=!1;function a(T,L,X,O,q){let V=!1;const U=f(O,X,L);r!==U&&(r=U,c(r.object)),V=d(T,O,X,q),V&&m(T,O,X,q),q!==null&&t.update(q,i.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,x(T,L,X,O),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function l(){return i.createVertexArray()}function c(T){return i.bindVertexArray(T)}function u(T){return i.deleteVertexArray(T)}function f(T,L,X){const O=X.wireframe===!0;let q=n[T.id];q===void 0&&(q={},n[T.id]=q);let V=q[L.id];V===void 0&&(V={},q[L.id]=V);let U=V[O];return U===void 0&&(U=h(l()),V[O]=U),U}function h(T){const L=[],X=[],O=[];for(let q=0;q<e;q++)L[q]=0,X[q]=0,O[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:X,attributeDivisors:O,object:T,attributes:{},index:null}}function d(T,L,X,O){const q=r.attributes,V=L.attributes;let U=0;const W=X.getAttributes();for(const j in W)if(W[j].location>=0){const at=q[j];let dt=V[j];if(dt===void 0&&(j==="instanceMatrix"&&T.instanceMatrix&&(dt=T.instanceMatrix),j==="instanceColor"&&T.instanceColor&&(dt=T.instanceColor)),at===void 0||at.attribute!==dt||dt&&at.data!==dt.data)return!0;U++}return r.attributesNum!==U||r.index!==O}function m(T,L,X,O){const q={},V=L.attributes;let U=0;const W=X.getAttributes();for(const j in W)if(W[j].location>=0){let at=V[j];at===void 0&&(j==="instanceMatrix"&&T.instanceMatrix&&(at=T.instanceMatrix),j==="instanceColor"&&T.instanceColor&&(at=T.instanceColor));const dt={};dt.attribute=at,at&&at.data&&(dt.data=at.data),q[j]=dt,U++}r.attributes=q,r.attributesNum=U,r.index=O}function v(){const T=r.newAttributes;for(let L=0,X=T.length;L<X;L++)T[L]=0}function p(T){g(T,0)}function g(T,L){const X=r.newAttributes,O=r.enabledAttributes,q=r.attributeDivisors;X[T]=1,O[T]===0&&(i.enableVertexAttribArray(T),O[T]=1),q[T]!==L&&(i.vertexAttribDivisor(T,L),q[T]=L)}function _(){const T=r.newAttributes,L=r.enabledAttributes;for(let X=0,O=L.length;X<O;X++)L[X]!==T[X]&&(i.disableVertexAttribArray(X),L[X]=0)}function S(T,L,X,O,q,V,U){U===!0?i.vertexAttribIPointer(T,L,X,q,V):i.vertexAttribPointer(T,L,X,O,q,V)}function x(T,L,X,O){v();const q=O.attributes,V=X.getAttributes(),U=L.defaultAttributeValues;for(const W in V){const j=V[W];if(j.location>=0){let ft=q[W];if(ft===void 0&&(W==="instanceMatrix"&&T.instanceMatrix&&(ft=T.instanceMatrix),W==="instanceColor"&&T.instanceColor&&(ft=T.instanceColor)),ft!==void 0){const at=ft.normalized,dt=ft.itemSize,xt=t.get(ft);if(xt===void 0)continue;const Ft=xt.buffer,kt=xt.type,jt=xt.bytesPerElement,k=kt===i.INT||kt===i.UNSIGNED_INT||ft.gpuType===yu;if(ft.isInterleavedBufferAttribute){const G=ft.data,rt=G.stride,ct=ft.offset;if(G.isInstancedInterleavedBuffer){for(let lt=0;lt<j.locationSize;lt++)g(j.location+lt,G.meshPerAttribute);T.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let lt=0;lt<j.locationSize;lt++)p(j.location+lt);i.bindBuffer(i.ARRAY_BUFFER,Ft);for(let lt=0;lt<j.locationSize;lt++)S(j.location+lt,dt/j.locationSize,kt,at,rt*jt,(ct+dt/j.locationSize*lt)*jt,k)}else{if(ft.isInstancedBufferAttribute){for(let G=0;G<j.locationSize;G++)g(j.location+G,ft.meshPerAttribute);T.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let G=0;G<j.locationSize;G++)p(j.location+G);i.bindBuffer(i.ARRAY_BUFFER,Ft);for(let G=0;G<j.locationSize;G++)S(j.location+G,dt/j.locationSize,kt,at,dt*jt,dt/j.locationSize*G*jt,k)}}else if(U!==void 0){const at=U[W];if(at!==void 0)switch(at.length){case 2:i.vertexAttrib2fv(j.location,at);break;case 3:i.vertexAttrib3fv(j.location,at);break;case 4:i.vertexAttrib4fv(j.location,at);break;default:i.vertexAttrib1fv(j.location,at)}}}}_()}function M(){F();for(const T in n){const L=n[T];for(const X in L){const O=L[X];for(const q in O)u(O[q].object),delete O[q];delete L[X]}delete n[T]}}function w(T){if(n[T.id]===void 0)return;const L=n[T.id];for(const X in L){const O=L[X];for(const q in O)u(O[q].object),delete O[q];delete L[X]}delete n[T.id]}function A(T){for(const L in n){const X=n[L];if(X[T.id]===void 0)continue;const O=X[T.id];for(const q in O)u(O[q].object),delete O[q];delete X[T.id]}}function F(){b(),o=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:F,resetDefaultState:b,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:p,disableUnusedAttributes:_}}function GM(i,t,e){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,f){f!==0&&(i.drawArraysInstanced(n,c,u,f),e.update(u,n,f))}function a(c,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,f);let d=0;for(let m=0;m<f;m++)d+=u[m];e.update(d,n,1)}function l(c,u,f,h){if(f===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<c.length;m++)o(c[m],u[m],h[m]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,f);let m=0;for(let v=0;v<f;v++)m+=u[v]*h[v];e.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function HM(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==Nn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const F=A===Fi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==gn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Zn&&!F)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(Zt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:_,maxVaryings:S,maxFragmentUniforms:x,maxSamples:M,samples:w}}function WM(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new ji,a=new ee,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||s;return s=h,n=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){const m=f.clippingPlanes,v=f.clipIntersection,p=f.clipShadows,g=i.get(f);if(!s||m===null||m.length===0||r&&!p)r?u(null):c();else{const _=r?0:n,S=_*4;let x=g.clippingState||null;l.value=x,x=u(m,h,S,d);for(let M=0;M!==S;++M)x[M]=e[M];g.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,d,m){const v=f!==null?f.length:0;let p=null;if(v!==0){if(p=l.value,m!==!0||p===null){const g=d+v*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<g)&&(p=new Float32Array(g));for(let S=0,x=d;S!==v;++S,x+=4)o.copy(f[S]).applyMatrix4(_,a),o.normal.toArray(p,x),p[x+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}function XM(i){let t=new WeakMap;function e(o,a){return a===fc?o.mapping=Es:a===dc&&(o.mapping=cr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===fc||a===dc)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Lp(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const Zi=4,uf=[.125,.215,.35,.446,.526,.582],gs=20,qM=256,Rr=new Ba,hf=new le;let Pl=null,Il=0,Ll=0,Dl=!1;const $M=new J;class ff{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=$M}=r;Pl=this._renderer.getRenderTarget(),Il=this._renderer.getActiveCubeFace(),Ll=this._renderer.getActiveMipmapLevel(),Dl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Pl,Il,Ll),this._renderer.xr.enabled=Dl,t.scissorTest=!1,Xs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Es||t.mapping===cr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Pl=this._renderer.getRenderTarget(),Il=this._renderer.getActiveCubeFace(),Ll=this._renderer.getActiveMipmapLevel(),Dl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:qe,minFilter:qe,generateMipmaps:!1,type:Fi,format:Nn,colorSpace:hr,depthBuffer:!1},s=df(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=df(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=YM(r)),this._blurMaterial=KM(r,t,e),this._ggxMaterial=jM(r,t,e)}return s}_compileMaterial(t){const e=new oe(new ci,t);this._renderer.compile(e,Rr)}_sceneToCubeUV(t,e,n,s,r){const l=new In(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(hf),f.toneMapping=ei,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new oe(new Ri,new $r({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,p=v.material;let g=!1;const _=t.background;_?_.isColor&&(p.color.copy(_),t.background=null,g=!0):(p.color.copy(hf),g=!0);for(let S=0;S<6;S++){const x=S%3;x===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[S],r.y,r.z)):x===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[S]));const M=this._cubeSize;Xs(s,x*M,S>2?M:0,M,M),f.setRenderTarget(s),g&&f.render(v,l),f.render(t,l)}f.toneMapping=d,f.autoClear=h,t.background=_}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Es||t.mapping===cr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=mf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pf());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Xs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Rr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,c=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=0+c*1.25,d=f*h,{_lodMax:m}=this,v=this._sizeLods[n],p=3*v*(n>m-Zi?n-m+Zi:0),g=4*(this._cubeSize-v);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=m-e,Xs(r,p,g,3*v,2*v),s.setRenderTarget(r),s.render(a,Rr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-n,Xs(t,p,g,3*v,2*v),s.setRenderTarget(t),s.render(a,Rr)}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&ae("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[s];f.material=c;const h=c.uniforms,d=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*gs-1),v=r/m,p=isFinite(r)?1+Math.floor(u*v):gs;p>gs&&Zt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${gs}`);const g=[];let _=0;for(let A=0;A<gs;++A){const F=A/v,b=Math.exp(-F*F/2);g.push(b),A===0?_+=b:A<p&&(_+=2*b)}for(let A=0;A<g.length;A++)g[A]=g[A]/_;h.envMap.value=t.texture,h.samples.value=p,h.weights.value=g,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:S}=this;h.dTheta.value=m,h.mipInt.value=S-n;const x=this._sizeLods[s],M=3*x*(s>S-Zi?s-S+Zi:0),w=4*(this._cubeSize-x);Xs(e,M,w,3*x,2*x),l.setRenderTarget(e),l.render(f,Rr)}}function YM(i){const t=[],e=[],n=[];let s=i;const r=i-Zi+1+uf.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-Zi?l=uf[o-i+Zi-1]:o===0&&(l=0),e.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,m=6,v=3,p=2,g=1,_=new Float32Array(v*m*d),S=new Float32Array(p*m*d),x=new Float32Array(g*m*d);for(let w=0;w<d;w++){const A=w%3*2/3-1,F=w>2?0:-1,b=[A,F,0,A+2/3,F,0,A+2/3,F+1,0,A,F,0,A+2/3,F+1,0,A,F+1,0];_.set(b,v*m*w),S.set(h,p*m*w);const T=[w,w,w,w,w,w];x.set(T,g*m*w)}const M=new ci;M.setAttribute("position",new ii(_,v)),M.setAttribute("uv",new ii(S,p)),M.setAttribute("faceIndex",new ii(x,g)),n.push(new oe(M,null)),s>Zi&&s--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function df(i,t,e){const n=new ni(i,t,e);return n.texture.mapping=Oa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function jM(i,t,e){return new li({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:qM,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:za(),fragmentShader:`

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
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function KM(i,t,e){const n=new Float32Array(gs),s=new J(0,1,0);return new li({name:"SphericalGaussianBlur",defines:{n:gs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:za(),fragmentShader:`

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
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function pf(){return new li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:za(),fragmentShader:`

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
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function mf(){return new li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:za(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function za(){return`

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
	`}function ZM(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===fc||l===dc,u=l===Es||l===cr;if(c||u){let f=t.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return e===null&&(e=new ff(i)),f=c?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&s(d)?(e===null&&(e=new ff(i)),f=c?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function JM(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&ro("WebGLRenderer: "+n+" extension not supported."),s}}}function QM(i,t,e,n){const s={},r=new WeakMap;function o(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const m in h.attributes)t.remove(h.attributes[m]);h.removeEventListener("dispose",o),delete s[h.id];const d=r.get(h);d&&(t.remove(d),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,e.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)t.update(h[d],i.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,m=f.attributes.position;let v=0;if(d!==null){const _=d.array;v=d.version;for(let S=0,x=_.length;S<x;S+=3){const M=_[S+0],w=_[S+1],A=_[S+2];h.push(M,w,w,A,A,M)}}else if(m!==void 0){const _=m.array;v=m.version;for(let S=0,x=_.length/3-1;S<x;S+=3){const M=S+0,w=S+1,A=S+2;h.push(M,w,w,A,A,M)}}else return;const p=new(bp(h)?Cp:Ap)(h,1);p.version=v;const g=r.get(f);g&&t.remove(g),r.set(f,p)}function u(f){const h=r.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function tb(i,t,e){let n;function s(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,d){i.drawElements(n,d,r,h*o),e.update(d,n,1)}function c(h,d,m){m!==0&&(i.drawElementsInstanced(n,d,r,h*o,m),e.update(d,n,m))}function u(h,d,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,h,0,m);let p=0;for(let g=0;g<m;g++)p+=d[g];e.update(p,n,1)}function f(h,d,m,v){if(m===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<h.length;g++)c(h[g]/o,d[g],v[g]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,r,h,0,v,0,m);let g=0;for(let _=0;_<m;_++)g+=d[_]*v[_];e.update(g,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function eb(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:ae("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function nb(i,t,e){const n=new WeakMap,s=new De;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==f){let T=function(){F.dispose(),n.delete(a),a.removeEventListener("dispose",T)};var d=T;h!==void 0&&h.texture.dispose();const m=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let x=0;m===!0&&(x=1),v===!0&&(x=2),p===!0&&(x=3);let M=a.attributes.position.count*x,w=1;M>t.maxTextureSize&&(w=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const A=new Float32Array(M*w*4*f),F=new wp(A,M,w,f);F.type=Zn,F.needsUpdate=!0;const b=x*4;for(let L=0;L<f;L++){const X=g[L],O=_[L],q=S[L],V=M*w*4*L;for(let U=0;U<X.count;U++){const W=U*b;m===!0&&(s.fromBufferAttribute(X,U),A[V+W+0]=s.x,A[V+W+1]=s.y,A[V+W+2]=s.z,A[V+W+3]=0),v===!0&&(s.fromBufferAttribute(O,U),A[V+W+4]=s.x,A[V+W+5]=s.y,A[V+W+6]=s.z,A[V+W+7]=0),p===!0&&(s.fromBufferAttribute(q,U),A[V+W+8]=s.x,A[V+W+9]=s.y,A[V+W+10]=s.z,A[V+W+11]=q.itemSize===4?s.w:1)}}h={count:f,texture:F,size:new Lt(M,w)},n.set(a,h),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let m=0;for(let p=0;p<c.length;p++)m+=c[p];const v=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function ib(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,f=t.get(l,u);if(s.get(f)!==c&&(t.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return f}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const sb={[ap]:"LINEAR_TONE_MAPPING",[lp]:"REINHARD_TONE_MAPPING",[cp]:"CINEON_TONE_MAPPING",[up]:"ACES_FILMIC_TONE_MAPPING",[fp]:"AGX_TONE_MAPPING",[dp]:"NEUTRAL_TONE_MAPPING",[hp]:"CUSTOM_TONE_MAPPING"};function rb(i,t,e,n,s){const r=new ni(t,e,{type:i,depthBuffer:n,stencilBuffer:s}),o=new ni(t,e,{type:Fi,depthBuffer:!1,stencilBuffer:!1}),a=new ci;a.setAttribute("position",new Bn([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Bn([0,2,0,0,2,0],2));const l=new K_({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new oe(a,l),u=new Ba(-1,1,1,-1,0,1);let f=null,h=null,d=!1,m,v=null,p=[],g=!1;this.setSize=function(_,S){r.setSize(_,S),o.setSize(_,S);for(let x=0;x<p.length;x++){const M=p[x];M.setSize&&M.setSize(_,S)}},this.setEffects=function(_){p=_,g=p.length>0&&p[0].isRenderPass===!0;const S=r.width,x=r.height;for(let M=0;M<p.length;M++){const w=p[M];w.setSize&&w.setSize(S,x)}},this.begin=function(_,S){if(d||_.toneMapping===ei&&p.length===0)return!1;if(v=S,S!==null){const x=S.width,M=S.height;(r.width!==x||r.height!==M)&&this.setSize(x,M)}return g===!1&&_.setRenderTarget(r),m=_.toneMapping,_.toneMapping=ei,!0},this.hasRenderPass=function(){return g},this.end=function(_,S){_.toneMapping=m,d=!0;let x=r,M=o;for(let w=0;w<p.length;w++){const A=p[w];if(A.enabled!==!1&&(A.render(_,M,x,S),A.needsSwap!==!1)){const F=x;x=M,M=F}}if(f!==_.outputColorSpace||h!==_.toneMapping){f=_.outputColorSpace,h=_.toneMapping,l.defines={},ue.getTransfer(f)===ve&&(l.defines.SRGB_TRANSFER="");const w=sb[h];w&&(l.defines[w]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=x.texture,_.setRenderTarget(v),_.render(c,u),v=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){r.dispose(),o.dispose(),a.dispose(),l.dispose()}}const Xp=new Ye,Qc=new oo(1,1),qp=new wp,$p=new $x,Yp=new Ip,gf=[],vf=[],xf=new Float32Array(16),_f=new Float32Array(9),yf=new Float32Array(4);function _r(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=gf[s];if(r===void 0&&(r=new Float32Array(s),gf[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function ze(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ve(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Va(i,t){let e=vf[t];e===void 0&&(e=new Int32Array(t),vf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function ob(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function ab(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2fv(this.addr,t),Ve(e,t)}}function lb(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ze(e,t))return;i.uniform3fv(this.addr,t),Ve(e,t)}}function cb(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4fv(this.addr,t),Ve(e,t)}}function ub(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ve(e,t)}else{if(ze(e,n))return;yf.set(n),i.uniformMatrix2fv(this.addr,!1,yf),Ve(e,n)}}function hb(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ve(e,t)}else{if(ze(e,n))return;_f.set(n),i.uniformMatrix3fv(this.addr,!1,_f),Ve(e,n)}}function fb(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ve(e,t)}else{if(ze(e,n))return;xf.set(n),i.uniformMatrix4fv(this.addr,!1,xf),Ve(e,n)}}function db(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function pb(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2iv(this.addr,t),Ve(e,t)}}function mb(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;i.uniform3iv(this.addr,t),Ve(e,t)}}function gb(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4iv(this.addr,t),Ve(e,t)}}function vb(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function xb(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2uiv(this.addr,t),Ve(e,t)}}function _b(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;i.uniform3uiv(this.addr,t),Ve(e,t)}}function yb(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4uiv(this.addr,t),Ve(e,t)}}function Sb(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Qc.compareFunction=e.isReversedDepthBuffer()?Au:Tu,r=Qc):r=Xp,e.setTexture2D(t||r,s)}function Mb(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||$p,s)}function bb(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Yp,s)}function wb(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||qp,s)}function Eb(i){switch(i){case 5126:return ob;case 35664:return ab;case 35665:return lb;case 35666:return cb;case 35674:return ub;case 35675:return hb;case 35676:return fb;case 5124:case 35670:return db;case 35667:case 35671:return pb;case 35668:case 35672:return mb;case 35669:case 35673:return gb;case 5125:return vb;case 36294:return xb;case 36295:return _b;case 36296:return yb;case 35678:case 36198:case 36298:case 36306:case 35682:return Sb;case 35679:case 36299:case 36307:return Mb;case 35680:case 36300:case 36308:case 36293:return bb;case 36289:case 36303:case 36311:case 36292:return wb}}function Tb(i,t){i.uniform1fv(this.addr,t)}function Ab(i,t){const e=_r(t,this.size,2);i.uniform2fv(this.addr,e)}function Cb(i,t){const e=_r(t,this.size,3);i.uniform3fv(this.addr,e)}function Rb(i,t){const e=_r(t,this.size,4);i.uniform4fv(this.addr,e)}function Pb(i,t){const e=_r(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Ib(i,t){const e=_r(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Lb(i,t){const e=_r(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Db(i,t){i.uniform1iv(this.addr,t)}function Nb(i,t){i.uniform2iv(this.addr,t)}function Fb(i,t){i.uniform3iv(this.addr,t)}function Ub(i,t){i.uniform4iv(this.addr,t)}function Ob(i,t){i.uniform1uiv(this.addr,t)}function Bb(i,t){i.uniform2uiv(this.addr,t)}function zb(i,t){i.uniform3uiv(this.addr,t)}function Vb(i,t){i.uniform4uiv(this.addr,t)}function kb(i,t,e){const n=this.cache,s=t.length,r=Va(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),Ve(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Qc:o=Xp;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function Gb(i,t,e){const n=this.cache,s=t.length,r=Va(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),Ve(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||$p,r[o])}function Hb(i,t,e){const n=this.cache,s=t.length,r=Va(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),Ve(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Yp,r[o])}function Wb(i,t,e){const n=this.cache,s=t.length,r=Va(e,s);ze(n,r)||(i.uniform1iv(this.addr,r),Ve(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||qp,r[o])}function Xb(i){switch(i){case 5126:return Tb;case 35664:return Ab;case 35665:return Cb;case 35666:return Rb;case 35674:return Pb;case 35675:return Ib;case 35676:return Lb;case 5124:case 35670:return Db;case 35667:case 35671:return Nb;case 35668:case 35672:return Fb;case 35669:case 35673:return Ub;case 5125:return Ob;case 36294:return Bb;case 36295:return zb;case 36296:return Vb;case 35678:case 36198:case 36298:case 36306:case 35682:return kb;case 35679:case 36299:case 36307:return Gb;case 35680:case 36300:case 36308:case 36293:return Hb;case 36289:case 36303:case 36311:case 36292:return Wb}}class qb{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Eb(e.type)}}class $b{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Xb(e.type)}}class Yb{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Nl=/(\w+)(\])?(\[|\.)?/g;function Sf(i,t){i.seq.push(t),i.map[t.id]=t}function jb(i,t,e){const n=i.name,s=n.length;for(Nl.lastIndex=0;;){const r=Nl.exec(n),o=Nl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Sf(e,c===void 0?new qb(a,i,t):new $b(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new Yb(a),Sf(e,f)),e=f}}}class ua{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);jb(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Mf(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Kb=37297;let Zb=0;function Jb(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const bf=new ee;function Qb(i){ue._getMatrix(bf,ue.workingColorSpace,i);const t=`mat3( ${bf.elements.map(e=>e.toFixed(4))} )`;switch(ue.getTransfer(i)){case Sa:return[t,"LinearTransferOETF"];case ve:return[t,"sRGBTransferOETF"];default:return Zt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function wf(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Jb(i.getShaderSource(t),a)}else return r}function tw(i,t){const e=Qb(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const ew={[ap]:"Linear",[lp]:"Reinhard",[cp]:"Cineon",[up]:"ACESFilmic",[fp]:"AgX",[dp]:"Neutral",[hp]:"Custom"};function nw(i,t){const e=ew[t];return e===void 0?(Zt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const qo=new J;function iw(){ue.getLuminanceCoefficients(qo);const i=qo.x.toFixed(4),t=qo.y.toFixed(4),e=qo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sw(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zr).join(`
`)}function rw(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ow(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function zr(i){return i!==""}function Ef(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Tf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const aw=/^[ \t]*#include +<([\w\d./]+)>/gm;function tu(i){return i.replace(aw,cw)}const lw=new Map;function cw(i,t){let e=ne[t];if(e===void 0){const n=lw.get(t);if(n!==void 0)e=ne[n],Zt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return tu(e)}const uw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Af(i){return i.replace(uw,hw)}function hw(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Cf(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}const fw={[ra]:"SHADOWMAP_TYPE_PCF",[Or]:"SHADOWMAP_TYPE_VSM"};function dw(i){return fw[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const pw={[Es]:"ENVMAP_TYPE_CUBE",[cr]:"ENVMAP_TYPE_CUBE",[Oa]:"ENVMAP_TYPE_CUBE_UV"};function mw(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":pw[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const gw={[cr]:"ENVMAP_MODE_REFRACTION"};function vw(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":gw[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const xw={[op]:"ENVMAP_BLENDING_MULTIPLY",[Cx]:"ENVMAP_BLENDING_MIX",[Rx]:"ENVMAP_BLENDING_ADD"};function _w(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":xw[i.combine]||"ENVMAP_BLENDING_NONE"}function yw(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Sw(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=dw(e),c=mw(e),u=vw(e),f=_w(e),h=yw(e),d=sw(e),m=rw(r),v=s.createProgram();let p,g,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(zr).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(zr).join(`
`),g.length>0&&(g+=`
`)):(p=[Cf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zr).join(`
`),g=[Cf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ei?"#define TONE_MAPPING":"",e.toneMapping!==ei?ne.tonemapping_pars_fragment:"",e.toneMapping!==ei?nw("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ne.colorspace_pars_fragment,tw("linearToOutputTexel",e.outputColorSpace),iw(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(zr).join(`
`)),o=tu(o),o=Ef(o,e),o=Tf(o,e),a=tu(a),a=Ef(a,e),a=Tf(a,e),o=Af(o),a=Af(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",e.glslVersion===Lh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Lh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const S=_+p+o,x=_+g+a,M=Mf(s,s.VERTEX_SHADER,S),w=Mf(s,s.FRAGMENT_SHADER,x);s.attachShader(v,M),s.attachShader(v,w),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function A(L){if(i.debug.checkShaderErrors){const X=s.getProgramInfoLog(v)||"",O=s.getShaderInfoLog(M)||"",q=s.getShaderInfoLog(w)||"",V=X.trim(),U=O.trim(),W=q.trim();let j=!0,ft=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,M,w);else{const at=wf(s,M,"vertex"),dt=wf(s,w,"fragment");ae("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+V+`
`+at+`
`+dt)}else V!==""?Zt("WebGLProgram: Program Info Log:",V):(U===""||W==="")&&(ft=!1);ft&&(L.diagnostics={runnable:j,programLog:V,vertexShader:{log:U,prefix:p},fragmentShader:{log:W,prefix:g}})}s.deleteShader(M),s.deleteShader(w),F=new ua(s,v),b=ow(s,v)}let F;this.getUniforms=function(){return F===void 0&&A(this),F};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(v,Kb)),T},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Zb++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=M,this.fragmentShader=w,this}let Mw=0;class bw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new ww(t),e.set(t,n)),n}}class ww{constructor(t){this.id=Mw++,this.code=t,this.usedTimes=0}}function Ew(i,t,e,n,s,r,o){const a=new Pu,l=new bw,c=new Set,u=[],f=new Map,h=s.logarithmicDepthBuffer;let d=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return c.add(b),b===0?"uv":`uv${b}`}function p(b,T,L,X,O){const q=X.fog,V=O.geometry,U=b.isMeshStandardMaterial?X.environment:null,W=(b.isMeshStandardMaterial?e:t).get(b.envMap||U),j=W&&W.mapping===Oa?W.image.height:null,ft=m[b.type];b.precision!==null&&(d=s.getMaxPrecision(b.precision),d!==b.precision&&Zt("WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));const at=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,dt=at!==void 0?at.length:0;let xt=0;V.morphAttributes.position!==void 0&&(xt=1),V.morphAttributes.normal!==void 0&&(xt=2),V.morphAttributes.color!==void 0&&(xt=3);let Ft,kt,jt,k;if(ft){const me=jn[ft];Ft=me.vertexShader,kt=me.fragmentShader}else Ft=b.vertexShader,kt=b.fragmentShader,l.update(b),jt=l.getVertexShaderID(b),k=l.getFragmentShaderID(b);const G=i.getRenderTarget(),rt=i.state.buffers.depth.getReversed(),ct=O.isInstancedMesh===!0,lt=O.isBatchedMesh===!0,pt=!!b.map,I=!!b.matcap,N=!!W,D=!!b.aoMap,z=!!b.lightMap,H=!!b.bumpMap,$=!!b.normalMap,R=!!b.displacementMap,it=!!b.emissiveMap,et=!!b.metalnessMap,tt=!!b.roughnessMap,st=b.anisotropy>0,C=b.clearcoat>0,y=b.dispersion>0,B=b.iridescence>0,Z=b.sheen>0,ht=b.transmission>0,Q=st&&!!b.anisotropyMap,_t=C&&!!b.clearcoatMap,gt=C&&!!b.clearcoatNormalMap,Et=C&&!!b.clearcoatRoughnessMap,Nt=B&&!!b.iridescenceMap,mt=B&&!!b.iridescenceThicknessMap,St=Z&&!!b.sheenColorMap,Tt=Z&&!!b.sheenRoughnessMap,Rt=!!b.specularMap,bt=!!b.specularColorMap,Gt=!!b.specularIntensityMap,Y=ht&&!!b.transmissionMap,At=ht&&!!b.thicknessMap,wt=!!b.gradientMap,Ot=!!b.alphaMap,Mt=b.alphaTest>0,yt=!!b.alphaHash,Ct=!!b.extensions;let Jt=ei;b.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Jt=i.toneMapping);const Me={shaderID:ft,shaderType:b.type,shaderName:b.name,vertexShader:Ft,fragmentShader:kt,defines:b.defines,customVertexShaderID:jt,customFragmentShaderID:k,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:lt,batchingColor:lt&&O._colorsTexture!==null,instancing:ct,instancingColor:ct&&O.instanceColor!==null,instancingMorph:ct&&O.morphTexture!==null,outputColorSpace:G===null?i.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:hr,alphaToCoverage:!!b.alphaToCoverage,map:pt,matcap:I,envMap:N,envMapMode:N&&W.mapping,envMapCubeUVHeight:j,aoMap:D,lightMap:z,bumpMap:H,normalMap:$,displacementMap:R,emissiveMap:it,normalMapObjectSpace:$&&b.normalMapType===Lx,normalMapTangentSpace:$&&b.normalMapType===Mp,metalnessMap:et,roughnessMap:tt,anisotropy:st,anisotropyMap:Q,clearcoat:C,clearcoatMap:_t,clearcoatNormalMap:gt,clearcoatRoughnessMap:Et,dispersion:y,iridescence:B,iridescenceMap:Nt,iridescenceThicknessMap:mt,sheen:Z,sheenColorMap:St,sheenRoughnessMap:Tt,specularMap:Rt,specularColorMap:bt,specularIntensityMap:Gt,transmission:ht,transmissionMap:Y,thicknessMap:At,gradientMap:wt,opaque:b.transparent===!1&&b.blending===sr&&b.alphaToCoverage===!1,alphaMap:Ot,alphaTest:Mt,alphaHash:yt,combine:b.combine,mapUv:pt&&v(b.map.channel),aoMapUv:D&&v(b.aoMap.channel),lightMapUv:z&&v(b.lightMap.channel),bumpMapUv:H&&v(b.bumpMap.channel),normalMapUv:$&&v(b.normalMap.channel),displacementMapUv:R&&v(b.displacementMap.channel),emissiveMapUv:it&&v(b.emissiveMap.channel),metalnessMapUv:et&&v(b.metalnessMap.channel),roughnessMapUv:tt&&v(b.roughnessMap.channel),anisotropyMapUv:Q&&v(b.anisotropyMap.channel),clearcoatMapUv:_t&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:gt&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Et&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Nt&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:mt&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:St&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:Tt&&v(b.sheenRoughnessMap.channel),specularMapUv:Rt&&v(b.specularMap.channel),specularColorMapUv:bt&&v(b.specularColorMap.channel),specularIntensityMapUv:Gt&&v(b.specularIntensityMap.channel),transmissionMapUv:Y&&v(b.transmissionMap.channel),thicknessMapUv:At&&v(b.thicknessMap.channel),alphaMapUv:Ot&&v(b.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&($||st),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!V.attributes.uv&&(pt||Ot),fog:!!q,useFog:b.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:rt,skinning:O.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:dt,morphTextureStride:xt,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Jt,decodeVideoTexture:pt&&b.map.isVideoTexture===!0&&ue.getTransfer(b.map.colorSpace)===ve,decodeVideoTextureEmissive:it&&b.emissiveMap.isVideoTexture===!0&&ue.getTransfer(b.emissiveMap.colorSpace)===ve,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ln,flipSided:b.side===un,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ct&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ct&&b.extensions.multiDraw===!0||lt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Me.vertexUv1s=c.has(1),Me.vertexUv2s=c.has(2),Me.vertexUv3s=c.has(3),c.clear(),Me}function g(b){const T=[];if(b.shaderID?T.push(b.shaderID):(T.push(b.customVertexShaderID),T.push(b.customFragmentShaderID)),b.defines!==void 0)for(const L in b.defines)T.push(L),T.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(_(T,b),S(T,b),T.push(i.outputColorSpace)),T.push(b.customProgramCacheKey),T.join()}function _(b,T){b.push(T.precision),b.push(T.outputColorSpace),b.push(T.envMapMode),b.push(T.envMapCubeUVHeight),b.push(T.mapUv),b.push(T.alphaMapUv),b.push(T.lightMapUv),b.push(T.aoMapUv),b.push(T.bumpMapUv),b.push(T.normalMapUv),b.push(T.displacementMapUv),b.push(T.emissiveMapUv),b.push(T.metalnessMapUv),b.push(T.roughnessMapUv),b.push(T.anisotropyMapUv),b.push(T.clearcoatMapUv),b.push(T.clearcoatNormalMapUv),b.push(T.clearcoatRoughnessMapUv),b.push(T.iridescenceMapUv),b.push(T.iridescenceThicknessMapUv),b.push(T.sheenColorMapUv),b.push(T.sheenRoughnessMapUv),b.push(T.specularMapUv),b.push(T.specularColorMapUv),b.push(T.specularIntensityMapUv),b.push(T.transmissionMapUv),b.push(T.thicknessMapUv),b.push(T.combine),b.push(T.fogExp2),b.push(T.sizeAttenuation),b.push(T.morphTargetsCount),b.push(T.morphAttributeCount),b.push(T.numDirLights),b.push(T.numPointLights),b.push(T.numSpotLights),b.push(T.numSpotLightMaps),b.push(T.numHemiLights),b.push(T.numRectAreaLights),b.push(T.numDirLightShadows),b.push(T.numPointLightShadows),b.push(T.numSpotLightShadows),b.push(T.numSpotLightShadowsWithMaps),b.push(T.numLightProbes),b.push(T.shadowMapType),b.push(T.toneMapping),b.push(T.numClippingPlanes),b.push(T.numClipIntersection),b.push(T.depthPacking)}function S(b,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),b.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),b.push(a.mask)}function x(b){const T=m[b.type];let L;if(T){const X=jn[T];L=o_.clone(X.uniforms)}else L=b.uniforms;return L}function M(b,T){let L=f.get(T);return L!==void 0?++L.usedTimes:(L=new Sw(i,T,b,r),u.push(L),f.set(T,L)),L}function w(b){if(--b.usedTimes===0){const T=u.indexOf(b);u[T]=u[u.length-1],u.pop(),f.delete(b.cacheKey),b.destroy()}}function A(b){l.remove(b)}function F(){l.dispose()}return{getParameters:p,getProgramCacheKey:g,getUniforms:x,acquireProgram:M,releaseProgram:w,releaseShaderCache:A,programs:u,dispose:F}}function Tw(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Aw(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Rf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Pf(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f,h,d,m,v,p){let g=i[t];return g===void 0?(g={id:f.id,object:f,geometry:h,material:d,groupOrder:m,renderOrder:f.renderOrder,z:v,group:p},i[t]=g):(g.id=f.id,g.object=f,g.geometry=h,g.material=d,g.groupOrder=m,g.renderOrder=f.renderOrder,g.z=v,g.group=p),t++,g}function a(f,h,d,m,v,p){const g=o(f,h,d,m,v,p);d.transmission>0?n.push(g):d.transparent===!0?s.push(g):e.push(g)}function l(f,h,d,m,v,p){const g=o(f,h,d,m,v,p);d.transmission>0?n.unshift(g):d.transparent===!0?s.unshift(g):e.unshift(g)}function c(f,h){e.length>1&&e.sort(f||Aw),n.length>1&&n.sort(h||Rf),s.length>1&&s.sort(h||Rf)}function u(){for(let f=t,h=i.length;f<h;f++){const d=i[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function Cw(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Pf,i.set(n,[o])):s>=r.length?(o=new Pf,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Rw(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new J,color:new le};break;case"SpotLight":e={position:new J,direction:new J,color:new le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new J,color:new le,distance:0,decay:0};break;case"HemisphereLight":e={direction:new J,skyColor:new le,groundColor:new le};break;case"RectAreaLight":e={color:new le,position:new J,halfWidth:new J,halfHeight:new J};break}return i[t.id]=e,e}}}function Pw(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Iw=0;function Lw(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Dw(i){const t=new Rw,e=Pw(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new J);const s=new J,r=new Re,o=new Re;function a(c){let u=0,f=0,h=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let d=0,m=0,v=0,p=0,g=0,_=0,S=0,x=0,M=0,w=0,A=0;c.sort(Lw);for(let b=0,T=c.length;b<T;b++){const L=c[b],X=L.color,O=L.intensity,q=L.distance;let V=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===ur?V=L.shadow.map.texture:V=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=X.r*O,f+=X.g*O,h+=X.b*O;else if(L.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(L.sh.coefficients[U],O);A++}else if(L.isDirectionalLight){const U=t.get(L);if(U.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const W=L.shadow,j=e.get(L);j.shadowIntensity=W.intensity,j.shadowBias=W.bias,j.shadowNormalBias=W.normalBias,j.shadowRadius=W.radius,j.shadowMapSize=W.mapSize,n.directionalShadow[d]=j,n.directionalShadowMap[d]=V,n.directionalShadowMatrix[d]=L.shadow.matrix,_++}n.directional[d]=U,d++}else if(L.isSpotLight){const U=t.get(L);U.position.setFromMatrixPosition(L.matrixWorld),U.color.copy(X).multiplyScalar(O),U.distance=q,U.coneCos=Math.cos(L.angle),U.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),U.decay=L.decay,n.spot[v]=U;const W=L.shadow;if(L.map&&(n.spotLightMap[M]=L.map,M++,W.updateMatrices(L),L.castShadow&&w++),n.spotLightMatrix[v]=W.matrix,L.castShadow){const j=e.get(L);j.shadowIntensity=W.intensity,j.shadowBias=W.bias,j.shadowNormalBias=W.normalBias,j.shadowRadius=W.radius,j.shadowMapSize=W.mapSize,n.spotShadow[v]=j,n.spotShadowMap[v]=V,x++}v++}else if(L.isRectAreaLight){const U=t.get(L);U.color.copy(X).multiplyScalar(O),U.halfWidth.set(L.width*.5,0,0),U.halfHeight.set(0,L.height*.5,0),n.rectArea[p]=U,p++}else if(L.isPointLight){const U=t.get(L);if(U.color.copy(L.color).multiplyScalar(L.intensity),U.distance=L.distance,U.decay=L.decay,L.castShadow){const W=L.shadow,j=e.get(L);j.shadowIntensity=W.intensity,j.shadowBias=W.bias,j.shadowNormalBias=W.normalBias,j.shadowRadius=W.radius,j.shadowMapSize=W.mapSize,j.shadowCameraNear=W.camera.near,j.shadowCameraFar=W.camera.far,n.pointShadow[m]=j,n.pointShadowMap[m]=V,n.pointShadowMatrix[m]=L.shadow.matrix,S++}n.point[m]=U,m++}else if(L.isHemisphereLight){const U=t.get(L);U.skyColor.copy(L.color).multiplyScalar(O),U.groundColor.copy(L.groundColor).multiplyScalar(O),n.hemi[g]=U,g++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=It.LTC_FLOAT_1,n.rectAreaLTC2=It.LTC_FLOAT_2):(n.rectAreaLTC1=It.LTC_HALF_1,n.rectAreaLTC2=It.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const F=n.hash;(F.directionalLength!==d||F.pointLength!==m||F.spotLength!==v||F.rectAreaLength!==p||F.hemiLength!==g||F.numDirectionalShadows!==_||F.numPointShadows!==S||F.numSpotShadows!==x||F.numSpotMaps!==M||F.numLightProbes!==A)&&(n.directional.length=d,n.spot.length=v,n.rectArea.length=p,n.point.length=m,n.hemi.length=g,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=x+M-w,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=A,F.directionalLength=d,F.pointLength=m,F.spotLength=v,F.rectAreaLength=p,F.hemiLength=g,F.numDirectionalShadows=_,F.numPointShadows=S,F.numSpotShadows=x,F.numSpotMaps=M,F.numLightProbes=A,n.version=Iw++)}function l(c,u){let f=0,h=0,d=0,m=0,v=0;const p=u.matrixWorldInverse;for(let g=0,_=c.length;g<_;g++){const S=c[g];if(S.isDirectionalLight){const x=n.directional[f];x.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(p),f++}else if(S.isSpotLight){const x=n.spot[d];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(p),x.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(p),d++}else if(S.isRectAreaLight){const x=n.rectArea[m];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(p),o.identity(),r.copy(S.matrixWorld),r.premultiply(p),o.extractRotation(r),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),m++}else if(S.isPointLight){const x=n.point[h];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(p),h++}else if(S.isHemisphereLight){const x=n.hemi[v];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(p),v++}}}return{setup:a,setupView:l,state:n}}function If(i){const t=new Dw(i),e=[],n=[];function s(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Nw(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new If(i),t.set(s,[a])):r>=o.length?(a=new If(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const Fw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Uw=`uniform sampler2D shadow_pass;
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
}`,Ow=[new J(1,0,0),new J(-1,0,0),new J(0,1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1)],Bw=[new J(0,-1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1),new J(0,-1,0),new J(0,-1,0)],Lf=new Re,Pr=new J,Fl=new J;function zw(i,t,e){let n=new Lu;const s=new Lt,r=new Lt,o=new De,a=new Z_,l=new J_,c={},u=e.maxTextureSize,f={[es]:un,[un]:es,[Ln]:Ln},h=new li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:Fw,fragmentShader:Uw}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const m=new ci;m.setAttribute("position",new ii(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new oe(m,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ra;let g=this.type;this.render=function(w,A,F){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;w.type===cx&&(Zt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),w.type=ra);const b=i.getRenderTarget(),T=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),X=i.state;X.setBlending(Pi),X.buffers.depth.getReversed()===!0?X.buffers.color.setClear(0,0,0,0):X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const O=g!==this.type;O&&A.traverse(function(q){q.material&&(Array.isArray(q.material)?q.material.forEach(V=>V.needsUpdate=!0):q.material.needsUpdate=!0)});for(let q=0,V=w.length;q<V;q++){const U=w[q],W=U.shadow;if(W===void 0){Zt("WebGLShadowMap:",U,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const j=W.getFrameExtents();if(s.multiply(j),r.copy(W.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/j.x),s.x=r.x*j.x,W.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/j.y),s.y=r.y*j.y,W.mapSize.y=r.y)),W.map===null||O===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Or){if(U.isPointLight){Zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new ni(s.x,s.y,{format:ur,type:Fi,minFilter:qe,magFilter:qe,generateMipmaps:!1}),W.map.texture.name=U.name+".shadowMap",W.map.depthTexture=new oo(s.x,s.y,Zn),W.map.depthTexture.name=U.name+".shadowMapDepth",W.map.depthTexture.format=Ui,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Ge,W.map.depthTexture.magFilter=Ge}else{U.isPointLight?(W.map=new Lp(s.x),W.map.depthTexture=new g_(s.x,oi)):(W.map=new ni(s.x,s.y),W.map.depthTexture=new oo(s.x,s.y,oi)),W.map.depthTexture.name=U.name+".shadowMap",W.map.depthTexture.format=Ui;const at=i.state.buffers.depth.getReversed();this.type===ra?(W.map.depthTexture.compareFunction=at?Au:Tu,W.map.depthTexture.minFilter=qe,W.map.depthTexture.magFilter=qe):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Ge,W.map.depthTexture.magFilter=Ge)}W.camera.updateProjectionMatrix()}const ft=W.map.isWebGLCubeRenderTarget?6:1;for(let at=0;at<ft;at++){if(W.map.isWebGLCubeRenderTarget)i.setRenderTarget(W.map,at),i.clear();else{at===0&&(i.setRenderTarget(W.map),i.clear());const dt=W.getViewport(at);o.set(r.x*dt.x,r.y*dt.y,r.x*dt.z,r.y*dt.w),X.viewport(o)}if(U.isPointLight){const dt=W.camera,xt=W.matrix,Ft=U.distance||dt.far;Ft!==dt.far&&(dt.far=Ft,dt.updateProjectionMatrix()),Pr.setFromMatrixPosition(U.matrixWorld),dt.position.copy(Pr),Fl.copy(dt.position),Fl.add(Ow[at]),dt.up.copy(Bw[at]),dt.lookAt(Fl),dt.updateMatrixWorld(),xt.makeTranslation(-Pr.x,-Pr.y,-Pr.z),Lf.multiplyMatrices(dt.projectionMatrix,dt.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Lf,dt.coordinateSystem,dt.reversedDepth)}else W.updateMatrices(U);n=W.getFrustum(),x(A,F,W.camera,U,this.type)}W.isPointLightShadow!==!0&&this.type===Or&&_(W,F),W.needsUpdate=!1}g=this.type,p.needsUpdate=!1,i.setRenderTarget(b,T,L)};function _(w,A){const F=t.update(v);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ni(s.x,s.y,{format:ur,type:Fi})),h.uniforms.shadow_pass.value=w.map.depthTexture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(A,null,F,h,v,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(A,null,F,d,v,null)}function S(w,A,F,b){let T=null;const L=F.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)T=L;else if(T=F.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const X=T.uuid,O=A.uuid;let q=c[X];q===void 0&&(q={},c[X]=q);let V=q[O];V===void 0&&(V=T.clone(),q[O]=V,A.addEventListener("dispose",M)),T=V}if(T.visible=A.visible,T.wireframe=A.wireframe,b===Or?T.side=A.shadowSide!==null?A.shadowSide:A.side:T.side=A.shadowSide!==null?A.shadowSide:f[A.side],T.alphaMap=A.alphaMap,T.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,T.map=A.map,T.clipShadows=A.clipShadows,T.clippingPlanes=A.clippingPlanes,T.clipIntersection=A.clipIntersection,T.displacementMap=A.displacementMap,T.displacementScale=A.displacementScale,T.displacementBias=A.displacementBias,T.wireframeLinewidth=A.wireframeLinewidth,T.linewidth=A.linewidth,F.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const X=i.properties.get(T);X.light=F}return T}function x(w,A,F,b,T){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&T===Or)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,w.matrixWorld);const O=t.update(w),q=w.material;if(Array.isArray(q)){const V=O.groups;for(let U=0,W=V.length;U<W;U++){const j=V[U],ft=q[j.materialIndex];if(ft&&ft.visible){const at=S(w,ft,b,T);w.onBeforeShadow(i,w,A,F,O,at,j),i.renderBufferDirect(F,null,O,at,w,j),w.onAfterShadow(i,w,A,F,O,at,j)}}}else if(q.visible){const V=S(w,q,b,T);w.onBeforeShadow(i,w,A,F,O,V,null),i.renderBufferDirect(F,null,O,V,w,null),w.onAfterShadow(i,w,A,F,O,V,null)}}const X=w.children;for(let O=0,q=X.length;O<q;O++)x(X[O],A,F,b,T)}function M(w){w.target.removeEventListener("dispose",M);for(const F in c){const b=c[F],T=w.target.uuid;T in b&&(b[T].dispose(),delete b[T])}}}const Vw={[rc]:oc,[ac]:uc,[lc]:hc,[lr]:cc,[oc]:rc,[uc]:ac,[hc]:lc,[cc]:lr};function kw(i,t){function e(){let Y=!1;const At=new De;let wt=null;const Ot=new De(0,0,0,0);return{setMask:function(Mt){wt!==Mt&&!Y&&(i.colorMask(Mt,Mt,Mt,Mt),wt=Mt)},setLocked:function(Mt){Y=Mt},setClear:function(Mt,yt,Ct,Jt,Me){Me===!0&&(Mt*=Jt,yt*=Jt,Ct*=Jt),At.set(Mt,yt,Ct,Jt),Ot.equals(At)===!1&&(i.clearColor(Mt,yt,Ct,Jt),Ot.copy(At))},reset:function(){Y=!1,wt=null,Ot.set(-1,0,0,0)}}}function n(){let Y=!1,At=!1,wt=null,Ot=null,Mt=null;return{setReversed:function(yt){if(At!==yt){const Ct=t.get("EXT_clip_control");yt?Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.ZERO_TO_ONE_EXT):Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.NEGATIVE_ONE_TO_ONE_EXT),At=yt;const Jt=Mt;Mt=null,this.setClear(Jt)}},getReversed:function(){return At},setTest:function(yt){yt?G(i.DEPTH_TEST):rt(i.DEPTH_TEST)},setMask:function(yt){wt!==yt&&!Y&&(i.depthMask(yt),wt=yt)},setFunc:function(yt){if(At&&(yt=Vw[yt]),Ot!==yt){switch(yt){case rc:i.depthFunc(i.NEVER);break;case oc:i.depthFunc(i.ALWAYS);break;case ac:i.depthFunc(i.LESS);break;case lr:i.depthFunc(i.LEQUAL);break;case lc:i.depthFunc(i.EQUAL);break;case cc:i.depthFunc(i.GEQUAL);break;case uc:i.depthFunc(i.GREATER);break;case hc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ot=yt}},setLocked:function(yt){Y=yt},setClear:function(yt){Mt!==yt&&(At&&(yt=1-yt),i.clearDepth(yt),Mt=yt)},reset:function(){Y=!1,wt=null,Ot=null,Mt=null,At=!1}}}function s(){let Y=!1,At=null,wt=null,Ot=null,Mt=null,yt=null,Ct=null,Jt=null,Me=null;return{setTest:function(me){Y||(me?G(i.STENCIL_TEST):rt(i.STENCIL_TEST))},setMask:function(me){At!==me&&!Y&&(i.stencilMask(me),At=me)},setFunc:function(me,Vn,hi){(wt!==me||Ot!==Vn||Mt!==hi)&&(i.stencilFunc(me,Vn,hi),wt=me,Ot=Vn,Mt=hi)},setOp:function(me,Vn,hi){(yt!==me||Ct!==Vn||Jt!==hi)&&(i.stencilOp(me,Vn,hi),yt=me,Ct=Vn,Jt=hi)},setLocked:function(me){Y=me},setClear:function(me){Me!==me&&(i.clearStencil(me),Me=me)},reset:function(){Y=!1,At=null,wt=null,Ot=null,Mt=null,yt=null,Ct=null,Jt=null,Me=null}}}const r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,d=[],m=null,v=!1,p=null,g=null,_=null,S=null,x=null,M=null,w=null,A=new le(0,0,0),F=0,b=!1,T=null,L=null,X=null,O=null,q=null;const V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,W=0;const j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(j)[1]),U=W>=1):j.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),U=W>=2);let ft=null,at={};const dt=i.getParameter(i.SCISSOR_BOX),xt=i.getParameter(i.VIEWPORT),Ft=new De().fromArray(dt),kt=new De().fromArray(xt);function jt(Y,At,wt,Ot){const Mt=new Uint8Array(4),yt=i.createTexture();i.bindTexture(Y,yt),i.texParameteri(Y,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Y,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ct=0;Ct<wt;Ct++)Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY?i.texImage3D(At,0,i.RGBA,1,1,Ot,0,i.RGBA,i.UNSIGNED_BYTE,Mt):i.texImage2D(At+Ct,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Mt);return yt}const k={};k[i.TEXTURE_2D]=jt(i.TEXTURE_2D,i.TEXTURE_2D,1),k[i.TEXTURE_CUBE_MAP]=jt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),k[i.TEXTURE_2D_ARRAY]=jt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),k[i.TEXTURE_3D]=jt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),G(i.DEPTH_TEST),o.setFunc(lr),H(!1),$(Ah),G(i.CULL_FACE),D(Pi);function G(Y){u[Y]!==!0&&(i.enable(Y),u[Y]=!0)}function rt(Y){u[Y]!==!1&&(i.disable(Y),u[Y]=!1)}function ct(Y,At){return f[Y]!==At?(i.bindFramebuffer(Y,At),f[Y]=At,Y===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=At),Y===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=At),!0):!1}function lt(Y,At){let wt=d,Ot=!1;if(Y){wt=h.get(At),wt===void 0&&(wt=[],h.set(At,wt));const Mt=Y.textures;if(wt.length!==Mt.length||wt[0]!==i.COLOR_ATTACHMENT0){for(let yt=0,Ct=Mt.length;yt<Ct;yt++)wt[yt]=i.COLOR_ATTACHMENT0+yt;wt.length=Mt.length,Ot=!0}}else wt[0]!==i.BACK&&(wt[0]=i.BACK,Ot=!0);Ot&&i.drawBuffers(wt)}function pt(Y){return m!==Y?(i.useProgram(Y),m=Y,!0):!1}const I={[ms]:i.FUNC_ADD,[hx]:i.FUNC_SUBTRACT,[fx]:i.FUNC_REVERSE_SUBTRACT};I[dx]=i.MIN,I[px]=i.MAX;const N={[mx]:i.ZERO,[gx]:i.ONE,[vx]:i.SRC_COLOR,[ic]:i.SRC_ALPHA,[bx]:i.SRC_ALPHA_SATURATE,[Sx]:i.DST_COLOR,[_x]:i.DST_ALPHA,[xx]:i.ONE_MINUS_SRC_COLOR,[sc]:i.ONE_MINUS_SRC_ALPHA,[Mx]:i.ONE_MINUS_DST_COLOR,[yx]:i.ONE_MINUS_DST_ALPHA,[wx]:i.CONSTANT_COLOR,[Ex]:i.ONE_MINUS_CONSTANT_COLOR,[Tx]:i.CONSTANT_ALPHA,[Ax]:i.ONE_MINUS_CONSTANT_ALPHA};function D(Y,At,wt,Ot,Mt,yt,Ct,Jt,Me,me){if(Y===Pi){v===!0&&(rt(i.BLEND),v=!1);return}if(v===!1&&(G(i.BLEND),v=!0),Y!==ux){if(Y!==p||me!==b){if((g!==ms||x!==ms)&&(i.blendEquation(i.FUNC_ADD),g=ms,x=ms),me)switch(Y){case sr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case nc:i.blendFunc(i.ONE,i.ONE);break;case Ch:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Rh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ae("WebGLState: Invalid blending: ",Y);break}else switch(Y){case sr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case nc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ch:ae("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Rh:ae("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ae("WebGLState: Invalid blending: ",Y);break}_=null,S=null,M=null,w=null,A.set(0,0,0),F=0,p=Y,b=me}return}Mt=Mt||At,yt=yt||wt,Ct=Ct||Ot,(At!==g||Mt!==x)&&(i.blendEquationSeparate(I[At],I[Mt]),g=At,x=Mt),(wt!==_||Ot!==S||yt!==M||Ct!==w)&&(i.blendFuncSeparate(N[wt],N[Ot],N[yt],N[Ct]),_=wt,S=Ot,M=yt,w=Ct),(Jt.equals(A)===!1||Me!==F)&&(i.blendColor(Jt.r,Jt.g,Jt.b,Me),A.copy(Jt),F=Me),p=Y,b=!1}function z(Y,At){Y.side===Ln?rt(i.CULL_FACE):G(i.CULL_FACE);let wt=Y.side===un;At&&(wt=!wt),H(wt),Y.blending===sr&&Y.transparent===!1?D(Pi):D(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),o.setFunc(Y.depthFunc),o.setTest(Y.depthTest),o.setMask(Y.depthWrite),r.setMask(Y.colorWrite);const Ot=Y.stencilWrite;a.setTest(Ot),Ot&&(a.setMask(Y.stencilWriteMask),a.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),a.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),it(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?G(i.SAMPLE_ALPHA_TO_COVERAGE):rt(i.SAMPLE_ALPHA_TO_COVERAGE)}function H(Y){T!==Y&&(Y?i.frontFace(i.CW):i.frontFace(i.CCW),T=Y)}function $(Y){Y!==ax?(G(i.CULL_FACE),Y!==L&&(Y===Ah?i.cullFace(i.BACK):Y===lx?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):rt(i.CULL_FACE),L=Y}function R(Y){Y!==X&&(U&&i.lineWidth(Y),X=Y)}function it(Y,At,wt){Y?(G(i.POLYGON_OFFSET_FILL),(O!==At||q!==wt)&&(i.polygonOffset(At,wt),O=At,q=wt)):rt(i.POLYGON_OFFSET_FILL)}function et(Y){Y?G(i.SCISSOR_TEST):rt(i.SCISSOR_TEST)}function tt(Y){Y===void 0&&(Y=i.TEXTURE0+V-1),ft!==Y&&(i.activeTexture(Y),ft=Y)}function st(Y,At,wt){wt===void 0&&(ft===null?wt=i.TEXTURE0+V-1:wt=ft);let Ot=at[wt];Ot===void 0&&(Ot={type:void 0,texture:void 0},at[wt]=Ot),(Ot.type!==Y||Ot.texture!==At)&&(ft!==wt&&(i.activeTexture(wt),ft=wt),i.bindTexture(Y,At||k[Y]),Ot.type=Y,Ot.texture=At)}function C(){const Y=at[ft];Y!==void 0&&Y.type!==void 0&&(i.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function y(){try{i.compressedTexImage2D(...arguments)}catch(Y){ae("WebGLState:",Y)}}function B(){try{i.compressedTexImage3D(...arguments)}catch(Y){ae("WebGLState:",Y)}}function Z(){try{i.texSubImage2D(...arguments)}catch(Y){ae("WebGLState:",Y)}}function ht(){try{i.texSubImage3D(...arguments)}catch(Y){ae("WebGLState:",Y)}}function Q(){try{i.compressedTexSubImage2D(...arguments)}catch(Y){ae("WebGLState:",Y)}}function _t(){try{i.compressedTexSubImage3D(...arguments)}catch(Y){ae("WebGLState:",Y)}}function gt(){try{i.texStorage2D(...arguments)}catch(Y){ae("WebGLState:",Y)}}function Et(){try{i.texStorage3D(...arguments)}catch(Y){ae("WebGLState:",Y)}}function Nt(){try{i.texImage2D(...arguments)}catch(Y){ae("WebGLState:",Y)}}function mt(){try{i.texImage3D(...arguments)}catch(Y){ae("WebGLState:",Y)}}function St(Y){Ft.equals(Y)===!1&&(i.scissor(Y.x,Y.y,Y.z,Y.w),Ft.copy(Y))}function Tt(Y){kt.equals(Y)===!1&&(i.viewport(Y.x,Y.y,Y.z,Y.w),kt.copy(Y))}function Rt(Y,At){let wt=c.get(At);wt===void 0&&(wt=new WeakMap,c.set(At,wt));let Ot=wt.get(Y);Ot===void 0&&(Ot=i.getUniformBlockIndex(At,Y.name),wt.set(Y,Ot))}function bt(Y,At){const Ot=c.get(At).get(Y);l.get(At)!==Ot&&(i.uniformBlockBinding(At,Ot,Y.__bindingPointIndex),l.set(At,Ot))}function Gt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ft=null,at={},f={},h=new WeakMap,d=[],m=null,v=!1,p=null,g=null,_=null,S=null,x=null,M=null,w=null,A=new le(0,0,0),F=0,b=!1,T=null,L=null,X=null,O=null,q=null,Ft.set(0,0,i.canvas.width,i.canvas.height),kt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:G,disable:rt,bindFramebuffer:ct,drawBuffers:lt,useProgram:pt,setBlending:D,setMaterial:z,setFlipSided:H,setCullFace:$,setLineWidth:R,setPolygonOffset:it,setScissorTest:et,activeTexture:tt,bindTexture:st,unbindTexture:C,compressedTexImage2D:y,compressedTexImage3D:B,texImage2D:Nt,texImage3D:mt,updateUBOMapping:Rt,uniformBlockBinding:bt,texStorage2D:gt,texStorage3D:Et,texSubImage2D:Z,texSubImage3D:ht,compressedTexSubImage2D:Q,compressedTexSubImage3D:_t,scissor:St,viewport:Tt,reset:Gt}}function Gw(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Lt,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(C,y){return d?new OffscreenCanvas(C,y):ba("canvas")}function v(C,y,B){let Z=1;const ht=st(C);if((ht.width>B||ht.height>B)&&(Z=B/Math.max(ht.width,ht.height)),Z<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Q=Math.floor(Z*ht.width),_t=Math.floor(Z*ht.height);f===void 0&&(f=m(Q,_t));const gt=y?m(Q,_t):f;return gt.width=Q,gt.height=_t,gt.getContext("2d").drawImage(C,0,0,Q,_t),Zt("WebGLRenderer: Texture has been resized from ("+ht.width+"x"+ht.height+") to ("+Q+"x"+_t+")."),gt}else return"data"in C&&Zt("WebGLRenderer: Image in DataTexture is too big ("+ht.width+"x"+ht.height+")."),C;return C}function p(C){return C.generateMipmaps}function g(C){i.generateMipmap(C)}function _(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(C,y,B,Z,ht=!1){if(C!==null){if(i[C]!==void 0)return i[C];Zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Q=y;if(y===i.RED&&(B===i.FLOAT&&(Q=i.R32F),B===i.HALF_FLOAT&&(Q=i.R16F),B===i.UNSIGNED_BYTE&&(Q=i.R8)),y===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(Q=i.R8UI),B===i.UNSIGNED_SHORT&&(Q=i.R16UI),B===i.UNSIGNED_INT&&(Q=i.R32UI),B===i.BYTE&&(Q=i.R8I),B===i.SHORT&&(Q=i.R16I),B===i.INT&&(Q=i.R32I)),y===i.RG&&(B===i.FLOAT&&(Q=i.RG32F),B===i.HALF_FLOAT&&(Q=i.RG16F),B===i.UNSIGNED_BYTE&&(Q=i.RG8)),y===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(Q=i.RG8UI),B===i.UNSIGNED_SHORT&&(Q=i.RG16UI),B===i.UNSIGNED_INT&&(Q=i.RG32UI),B===i.BYTE&&(Q=i.RG8I),B===i.SHORT&&(Q=i.RG16I),B===i.INT&&(Q=i.RG32I)),y===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),B===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),B===i.UNSIGNED_INT&&(Q=i.RGB32UI),B===i.BYTE&&(Q=i.RGB8I),B===i.SHORT&&(Q=i.RGB16I),B===i.INT&&(Q=i.RGB32I)),y===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),B===i.UNSIGNED_INT&&(Q=i.RGBA32UI),B===i.BYTE&&(Q=i.RGBA8I),B===i.SHORT&&(Q=i.RGBA16I),B===i.INT&&(Q=i.RGBA32I)),y===i.RGB&&(B===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(Q=i.R11F_G11F_B10F)),y===i.RGBA){const _t=ht?Sa:ue.getTransfer(Z);B===i.FLOAT&&(Q=i.RGBA32F),B===i.HALF_FLOAT&&(Q=i.RGBA16F),B===i.UNSIGNED_BYTE&&(Q=_t===ve?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function x(C,y){let B;return C?y===null||y===oi||y===so?B=i.DEPTH24_STENCIL8:y===Zn?B=i.DEPTH32F_STENCIL8:y===io&&(B=i.DEPTH24_STENCIL8,Zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===oi||y===so?B=i.DEPTH_COMPONENT24:y===Zn?B=i.DEPTH_COMPONENT32F:y===io&&(B=i.DEPTH_COMPONENT16),B}function M(C,y){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==Ge&&C.minFilter!==qe?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function w(C){const y=C.target;y.removeEventListener("dispose",w),F(y),y.isVideoTexture&&u.delete(y)}function A(C){const y=C.target;y.removeEventListener("dispose",A),T(y)}function F(C){const y=n.get(C);if(y.__webglInit===void 0)return;const B=C.source,Z=h.get(B);if(Z){const ht=Z[y.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&b(C),Object.keys(Z).length===0&&h.delete(B)}n.remove(C)}function b(C){const y=n.get(C);i.deleteTexture(y.__webglTexture);const B=C.source,Z=h.get(B);delete Z[y.__cacheKey],o.memory.textures--}function T(C){const y=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(y.__webglFramebuffer[Z]))for(let ht=0;ht<y.__webglFramebuffer[Z].length;ht++)i.deleteFramebuffer(y.__webglFramebuffer[Z][ht]);else i.deleteFramebuffer(y.__webglFramebuffer[Z]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[Z])}else{if(Array.isArray(y.__webglFramebuffer))for(let Z=0;Z<y.__webglFramebuffer.length;Z++)i.deleteFramebuffer(y.__webglFramebuffer[Z]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Z=0;Z<y.__webglColorRenderbuffer.length;Z++)y.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[Z]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const B=C.textures;for(let Z=0,ht=B.length;Z<ht;Z++){const Q=n.get(B[Z]);Q.__webglTexture&&(i.deleteTexture(Q.__webglTexture),o.memory.textures--),n.remove(B[Z])}n.remove(C)}let L=0;function X(){L=0}function O(){const C=L;return C>=s.maxTextures&&Zt("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),L+=1,C}function q(C){const y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function V(C,y){const B=n.get(C);if(C.isVideoTexture&&et(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&B.__version!==C.version){const Z=C.image;if(Z===null)Zt("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)Zt("WebGLRenderer: Texture marked for update but image is incomplete");else{k(B,C,y);return}}else C.isExternalTexture&&(B.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+y)}function U(C,y){const B=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){k(B,C,y);return}else C.isExternalTexture&&(B.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+y)}function W(C,y){const B=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){k(B,C,y);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+y)}function j(C,y){const B=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&B.__version!==C.version){G(B,C,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+y)}const ft={[pc]:i.REPEAT,[Ci]:i.CLAMP_TO_EDGE,[mc]:i.MIRRORED_REPEAT},at={[Ge]:i.NEAREST,[Px]:i.NEAREST_MIPMAP_NEAREST,[wo]:i.NEAREST_MIPMAP_LINEAR,[qe]:i.LINEAR,[el]:i.LINEAR_MIPMAP_NEAREST,[xs]:i.LINEAR_MIPMAP_LINEAR},dt={[Dx]:i.NEVER,[Bx]:i.ALWAYS,[Nx]:i.LESS,[Tu]:i.LEQUAL,[Fx]:i.EQUAL,[Au]:i.GEQUAL,[Ux]:i.GREATER,[Ox]:i.NOTEQUAL};function xt(C,y){if(y.type===Zn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===qe||y.magFilter===el||y.magFilter===wo||y.magFilter===xs||y.minFilter===qe||y.minFilter===el||y.minFilter===wo||y.minFilter===xs)&&Zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,ft[y.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,ft[y.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,ft[y.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,at[y.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,at[y.minFilter]),y.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,dt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Ge||y.minFilter!==wo&&y.minFilter!==xs||y.type===Zn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Ft(C,y){let B=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",w));const Z=y.source;let ht=h.get(Z);ht===void 0&&(ht={},h.set(Z,ht));const Q=q(y);if(Q!==C.__cacheKey){ht[Q]===void 0&&(ht[Q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),ht[Q].usedTimes++;const _t=ht[C.__cacheKey];_t!==void 0&&(ht[C.__cacheKey].usedTimes--,_t.usedTimes===0&&b(y)),C.__cacheKey=Q,C.__webglTexture=ht[Q].texture}return B}function kt(C,y,B){return Math.floor(Math.floor(C/B)/y)}function jt(C,y,B,Z){const Q=C.updateRanges;if(Q.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,B,Z,y.data);else{Q.sort((mt,St)=>mt.start-St.start);let _t=0;for(let mt=1;mt<Q.length;mt++){const St=Q[_t],Tt=Q[mt],Rt=St.start+St.count,bt=kt(Tt.start,y.width,4),Gt=kt(St.start,y.width,4);Tt.start<=Rt+1&&bt===Gt&&kt(Tt.start+Tt.count-1,y.width,4)===bt?St.count=Math.max(St.count,Tt.start+Tt.count-St.start):(++_t,Q[_t]=Tt)}Q.length=_t+1;const gt=i.getParameter(i.UNPACK_ROW_LENGTH),Et=i.getParameter(i.UNPACK_SKIP_PIXELS),Nt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let mt=0,St=Q.length;mt<St;mt++){const Tt=Q[mt],Rt=Math.floor(Tt.start/4),bt=Math.ceil(Tt.count/4),Gt=Rt%y.width,Y=Math.floor(Rt/y.width),At=bt,wt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Gt),i.pixelStorei(i.UNPACK_SKIP_ROWS,Y),e.texSubImage2D(i.TEXTURE_2D,0,Gt,Y,At,wt,B,Z,y.data)}C.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,gt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Et),i.pixelStorei(i.UNPACK_SKIP_ROWS,Nt)}}function k(C,y,B){let Z=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Z=i.TEXTURE_3D);const ht=Ft(C,y),Q=y.source;e.bindTexture(Z,C.__webglTexture,i.TEXTURE0+B);const _t=n.get(Q);if(Q.version!==_t.__version||ht===!0){e.activeTexture(i.TEXTURE0+B);const gt=ue.getPrimaries(ue.workingColorSpace),Et=y.colorSpace===Ki?null:ue.getPrimaries(y.colorSpace),Nt=y.colorSpace===Ki||gt===Et?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt);let mt=v(y.image,!1,s.maxTextureSize);mt=tt(y,mt);const St=r.convert(y.format,y.colorSpace),Tt=r.convert(y.type);let Rt=S(y.internalFormat,St,Tt,y.colorSpace,y.isVideoTexture);xt(Z,y);let bt;const Gt=y.mipmaps,Y=y.isVideoTexture!==!0,At=_t.__version===void 0||ht===!0,wt=Q.dataReady,Ot=M(y,mt);if(y.isDepthTexture)Rt=x(y.format===_s,y.type),At&&(Y?e.texStorage2D(i.TEXTURE_2D,1,Rt,mt.width,mt.height):e.texImage2D(i.TEXTURE_2D,0,Rt,mt.width,mt.height,0,St,Tt,null));else if(y.isDataTexture)if(Gt.length>0){Y&&At&&e.texStorage2D(i.TEXTURE_2D,Ot,Rt,Gt[0].width,Gt[0].height);for(let Mt=0,yt=Gt.length;Mt<yt;Mt++)bt=Gt[Mt],Y?wt&&e.texSubImage2D(i.TEXTURE_2D,Mt,0,0,bt.width,bt.height,St,Tt,bt.data):e.texImage2D(i.TEXTURE_2D,Mt,Rt,bt.width,bt.height,0,St,Tt,bt.data);y.generateMipmaps=!1}else Y?(At&&e.texStorage2D(i.TEXTURE_2D,Ot,Rt,mt.width,mt.height),wt&&jt(y,mt,St,Tt)):e.texImage2D(i.TEXTURE_2D,0,Rt,mt.width,mt.height,0,St,Tt,mt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Y&&At&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ot,Rt,Gt[0].width,Gt[0].height,mt.depth);for(let Mt=0,yt=Gt.length;Mt<yt;Mt++)if(bt=Gt[Mt],y.format!==Nn)if(St!==null)if(Y){if(wt)if(y.layerUpdates.size>0){const Ct=cf(bt.width,bt.height,y.format,y.type);for(const Jt of y.layerUpdates){const Me=bt.data.subarray(Jt*Ct/bt.data.BYTES_PER_ELEMENT,(Jt+1)*Ct/bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Mt,0,0,Jt,bt.width,bt.height,1,St,Me)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Mt,0,0,0,bt.width,bt.height,mt.depth,St,bt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Mt,Rt,bt.width,bt.height,mt.depth,0,bt.data,0,0);else Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Y?wt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Mt,0,0,0,bt.width,bt.height,mt.depth,St,Tt,bt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Mt,Rt,bt.width,bt.height,mt.depth,0,St,Tt,bt.data)}else{Y&&At&&e.texStorage2D(i.TEXTURE_2D,Ot,Rt,Gt[0].width,Gt[0].height);for(let Mt=0,yt=Gt.length;Mt<yt;Mt++)bt=Gt[Mt],y.format!==Nn?St!==null?Y?wt&&e.compressedTexSubImage2D(i.TEXTURE_2D,Mt,0,0,bt.width,bt.height,St,bt.data):e.compressedTexImage2D(i.TEXTURE_2D,Mt,Rt,bt.width,bt.height,0,bt.data):Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Y?wt&&e.texSubImage2D(i.TEXTURE_2D,Mt,0,0,bt.width,bt.height,St,Tt,bt.data):e.texImage2D(i.TEXTURE_2D,Mt,Rt,bt.width,bt.height,0,St,Tt,bt.data)}else if(y.isDataArrayTexture)if(Y){if(At&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ot,Rt,mt.width,mt.height,mt.depth),wt)if(y.layerUpdates.size>0){const Mt=cf(mt.width,mt.height,y.format,y.type);for(const yt of y.layerUpdates){const Ct=mt.data.subarray(yt*Mt/mt.data.BYTES_PER_ELEMENT,(yt+1)*Mt/mt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,yt,mt.width,mt.height,1,St,Tt,Ct)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,mt.width,mt.height,mt.depth,St,Tt,mt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Rt,mt.width,mt.height,mt.depth,0,St,Tt,mt.data);else if(y.isData3DTexture)Y?(At&&e.texStorage3D(i.TEXTURE_3D,Ot,Rt,mt.width,mt.height,mt.depth),wt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,mt.width,mt.height,mt.depth,St,Tt,mt.data)):e.texImage3D(i.TEXTURE_3D,0,Rt,mt.width,mt.height,mt.depth,0,St,Tt,mt.data);else if(y.isFramebufferTexture){if(At)if(Y)e.texStorage2D(i.TEXTURE_2D,Ot,Rt,mt.width,mt.height);else{let Mt=mt.width,yt=mt.height;for(let Ct=0;Ct<Ot;Ct++)e.texImage2D(i.TEXTURE_2D,Ct,Rt,Mt,yt,0,St,Tt,null),Mt>>=1,yt>>=1}}else if(Gt.length>0){if(Y&&At){const Mt=st(Gt[0]);e.texStorage2D(i.TEXTURE_2D,Ot,Rt,Mt.width,Mt.height)}for(let Mt=0,yt=Gt.length;Mt<yt;Mt++)bt=Gt[Mt],Y?wt&&e.texSubImage2D(i.TEXTURE_2D,Mt,0,0,St,Tt,bt):e.texImage2D(i.TEXTURE_2D,Mt,Rt,St,Tt,bt);y.generateMipmaps=!1}else if(Y){if(At){const Mt=st(mt);e.texStorage2D(i.TEXTURE_2D,Ot,Rt,Mt.width,Mt.height)}wt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,St,Tt,mt)}else e.texImage2D(i.TEXTURE_2D,0,Rt,St,Tt,mt);p(y)&&g(Z),_t.__version=Q.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function G(C,y,B){if(y.image.length!==6)return;const Z=Ft(C,y),ht=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+B);const Q=n.get(ht);if(ht.version!==Q.__version||Z===!0){e.activeTexture(i.TEXTURE0+B);const _t=ue.getPrimaries(ue.workingColorSpace),gt=y.colorSpace===Ki?null:ue.getPrimaries(y.colorSpace),Et=y.colorSpace===Ki||_t===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);const Nt=y.isCompressedTexture||y.image[0].isCompressedTexture,mt=y.image[0]&&y.image[0].isDataTexture,St=[];for(let yt=0;yt<6;yt++)!Nt&&!mt?St[yt]=v(y.image[yt],!0,s.maxCubemapSize):St[yt]=mt?y.image[yt].image:y.image[yt],St[yt]=tt(y,St[yt]);const Tt=St[0],Rt=r.convert(y.format,y.colorSpace),bt=r.convert(y.type),Gt=S(y.internalFormat,Rt,bt,y.colorSpace),Y=y.isVideoTexture!==!0,At=Q.__version===void 0||Z===!0,wt=ht.dataReady;let Ot=M(y,Tt);xt(i.TEXTURE_CUBE_MAP,y);let Mt;if(Nt){Y&&At&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ot,Gt,Tt.width,Tt.height);for(let yt=0;yt<6;yt++){Mt=St[yt].mipmaps;for(let Ct=0;Ct<Mt.length;Ct++){const Jt=Mt[Ct];y.format!==Nn?Rt!==null?Y?wt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Ct,0,0,Jt.width,Jt.height,Rt,Jt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Ct,Gt,Jt.width,Jt.height,0,Jt.data):Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?wt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Ct,0,0,Jt.width,Jt.height,Rt,bt,Jt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Ct,Gt,Jt.width,Jt.height,0,Rt,bt,Jt.data)}}}else{if(Mt=y.mipmaps,Y&&At){Mt.length>0&&Ot++;const yt=st(St[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ot,Gt,yt.width,yt.height)}for(let yt=0;yt<6;yt++)if(mt){Y?wt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,St[yt].width,St[yt].height,Rt,bt,St[yt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,Gt,St[yt].width,St[yt].height,0,Rt,bt,St[yt].data);for(let Ct=0;Ct<Mt.length;Ct++){const Me=Mt[Ct].image[yt].image;Y?wt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Ct+1,0,0,Me.width,Me.height,Rt,bt,Me.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Ct+1,Gt,Me.width,Me.height,0,Rt,bt,Me.data)}}else{Y?wt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,Rt,bt,St[yt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,Gt,Rt,bt,St[yt]);for(let Ct=0;Ct<Mt.length;Ct++){const Jt=Mt[Ct];Y?wt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Ct+1,0,0,Rt,bt,Jt.image[yt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Ct+1,Gt,Rt,bt,Jt.image[yt])}}}p(y)&&g(i.TEXTURE_CUBE_MAP),Q.__version=ht.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function rt(C,y,B,Z,ht,Q){const _t=r.convert(B.format,B.colorSpace),gt=r.convert(B.type),Et=S(B.internalFormat,_t,gt,B.colorSpace),Nt=n.get(y),mt=n.get(B);if(mt.__renderTarget=y,!Nt.__hasExternalTextures){const St=Math.max(1,y.width>>Q),Tt=Math.max(1,y.height>>Q);ht===i.TEXTURE_3D||ht===i.TEXTURE_2D_ARRAY?e.texImage3D(ht,Q,Et,St,Tt,y.depth,0,_t,gt,null):e.texImage2D(ht,Q,Et,St,Tt,0,_t,gt,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),it(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,ht,mt.__webglTexture,0,R(y)):(ht===i.TEXTURE_2D||ht>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,ht,mt.__webglTexture,Q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ct(C,y,B){if(i.bindRenderbuffer(i.RENDERBUFFER,C),y.depthBuffer){const Z=y.depthTexture,ht=Z&&Z.isDepthTexture?Z.type:null,Q=x(y.stencilBuffer,ht),_t=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;it(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,R(y),Q,y.width,y.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,R(y),Q,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Q,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,_t,i.RENDERBUFFER,C)}else{const Z=y.textures;for(let ht=0;ht<Z.length;ht++){const Q=Z[ht],_t=r.convert(Q.format,Q.colorSpace),gt=r.convert(Q.type),Et=S(Q.internalFormat,_t,gt,Q.colorSpace);it(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,R(y),Et,y.width,y.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,R(y),Et,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Et,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function lt(C,y,B){const Z=y.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ht=n.get(y.depthTexture);if(ht.__renderTarget=y,(!ht.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Z){if(ht.__webglInit===void 0&&(ht.__webglInit=!0,y.depthTexture.addEventListener("dispose",w)),ht.__webglTexture===void 0){ht.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,ht.__webglTexture),xt(i.TEXTURE_CUBE_MAP,y.depthTexture);const Nt=r.convert(y.depthTexture.format),mt=r.convert(y.depthTexture.type);let St;y.depthTexture.format===Ui?St=i.DEPTH_COMPONENT24:y.depthTexture.format===_s&&(St=i.DEPTH24_STENCIL8);for(let Tt=0;Tt<6;Tt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,St,y.width,y.height,0,Nt,mt,null)}}else V(y.depthTexture,0);const Q=ht.__webglTexture,_t=R(y),gt=Z?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,Et=y.depthTexture.format===_s?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(y.depthTexture.format===Ui)it(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Et,gt,Q,0,_t):i.framebufferTexture2D(i.FRAMEBUFFER,Et,gt,Q,0);else if(y.depthTexture.format===_s)it(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Et,gt,Q,0,_t):i.framebufferTexture2D(i.FRAMEBUFFER,Et,gt,Q,0);else throw new Error("Unknown depthTexture format")}function pt(C){const y=n.get(C),B=C.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==C.depthTexture){const Z=C.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Z){const ht=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Z.removeEventListener("dispose",ht)};Z.addEventListener("dispose",ht),y.__depthDisposeCallback=ht}y.__boundDepthTexture=Z}if(C.depthTexture&&!y.__autoAllocateDepthBuffer)if(B)for(let Z=0;Z<6;Z++)lt(y.__webglFramebuffer[Z],C,Z);else{const Z=C.texture.mipmaps;Z&&Z.length>0?lt(y.__webglFramebuffer[0],C,0):lt(y.__webglFramebuffer,C,0)}else if(B){y.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[Z]),y.__webglDepthbuffer[Z]===void 0)y.__webglDepthbuffer[Z]=i.createRenderbuffer(),ct(y.__webglDepthbuffer[Z],C,!1);else{const ht=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=y.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,ht,i.RENDERBUFFER,Q)}}else{const Z=C.texture.mipmaps;if(Z&&Z.length>0?e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),ct(y.__webglDepthbuffer,C,!1);else{const ht=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,ht,i.RENDERBUFFER,Q)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function I(C,y,B){const Z=n.get(C);y!==void 0&&rt(Z.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&pt(C)}function N(C){const y=C.texture,B=n.get(C),Z=n.get(y);C.addEventListener("dispose",A);const ht=C.textures,Q=C.isWebGLCubeRenderTarget===!0,_t=ht.length>1;if(_t||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=y.version,o.memory.textures++),Q){B.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer[gt]=[];for(let Et=0;Et<y.mipmaps.length;Et++)B.__webglFramebuffer[gt][Et]=i.createFramebuffer()}else B.__webglFramebuffer[gt]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer=[];for(let gt=0;gt<y.mipmaps.length;gt++)B.__webglFramebuffer[gt]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(_t)for(let gt=0,Et=ht.length;gt<Et;gt++){const Nt=n.get(ht[gt]);Nt.__webglTexture===void 0&&(Nt.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&it(C)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let gt=0;gt<ht.length;gt++){const Et=ht[gt];B.__webglColorRenderbuffer[gt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[gt]);const Nt=r.convert(Et.format,Et.colorSpace),mt=r.convert(Et.type),St=S(Et.internalFormat,Nt,mt,Et.colorSpace,C.isXRRenderTarget===!0),Tt=R(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt,St,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,B.__webglColorRenderbuffer[gt])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),ct(B.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),xt(i.TEXTURE_CUBE_MAP,y);for(let gt=0;gt<6;gt++)if(y.mipmaps&&y.mipmaps.length>0)for(let Et=0;Et<y.mipmaps.length;Et++)rt(B.__webglFramebuffer[gt][Et],C,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Et);else rt(B.__webglFramebuffer[gt],C,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);p(y)&&g(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(_t){for(let gt=0,Et=ht.length;gt<Et;gt++){const Nt=ht[gt],mt=n.get(Nt);let St=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(St=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(St,mt.__webglTexture),xt(St,Nt),rt(B.__webglFramebuffer,C,Nt,i.COLOR_ATTACHMENT0+gt,St,0),p(Nt)&&g(St)}e.unbindTexture()}else{let gt=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(gt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(gt,Z.__webglTexture),xt(gt,y),y.mipmaps&&y.mipmaps.length>0)for(let Et=0;Et<y.mipmaps.length;Et++)rt(B.__webglFramebuffer[Et],C,y,i.COLOR_ATTACHMENT0,gt,Et);else rt(B.__webglFramebuffer,C,y,i.COLOR_ATTACHMENT0,gt,0);p(y)&&g(gt),e.unbindTexture()}C.depthBuffer&&pt(C)}function D(C){const y=C.textures;for(let B=0,Z=y.length;B<Z;B++){const ht=y[B];if(p(ht)){const Q=_(C),_t=n.get(ht).__webglTexture;e.bindTexture(Q,_t),g(Q),e.unbindTexture()}}}const z=[],H=[];function $(C){if(C.samples>0){if(it(C)===!1){const y=C.textures,B=C.width,Z=C.height;let ht=i.COLOR_BUFFER_BIT;const Q=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=n.get(C),gt=y.length>1;if(gt)for(let Nt=0;Nt<y.length;Nt++)e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer);const Et=C.texture.mipmaps;Et&&Et.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let Nt=0;Nt<y.length;Nt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ht|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ht|=i.STENCIL_BUFFER_BIT)),gt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_t.__webglColorRenderbuffer[Nt]);const mt=n.get(y[Nt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,mt,0)}i.blitFramebuffer(0,0,B,Z,0,0,B,Z,ht,i.NEAREST),l===!0&&(z.length=0,H.length=0,z.push(i.COLOR_ATTACHMENT0+Nt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(z.push(Q),H.push(Q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,H)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,z))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),gt)for(let Nt=0;Nt<y.length;Nt++){e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.RENDERBUFFER,_t.__webglColorRenderbuffer[Nt]);const mt=n.get(y[Nt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Nt,i.TEXTURE_2D,mt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const y=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function R(C){return Math.min(s.maxSamples,C.samples)}function it(C){const y=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function et(C){const y=o.render.frame;u.get(C)!==y&&(u.set(C,y),C.update())}function tt(C,y){const B=C.colorSpace,Z=C.format,ht=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||B!==hr&&B!==Ki&&(ue.getTransfer(B)===ve?(Z!==Nn||ht!==gn)&&Zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ae("WebGLTextures: Unsupported texture color space:",B)),y}function st(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=X,this.setTexture2D=V,this.setTexture2DArray=U,this.setTexture3D=W,this.setTextureCube=j,this.rebindTextures=I,this.setupRenderTarget=N,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=$,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=rt,this.useMultisampledRTT=it,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Hw(i,t){function e(n,s=Ki){let r;const o=ue.getTransfer(s);if(n===gn)return i.UNSIGNED_BYTE;if(n===Su)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Mu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===vp)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===xp)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===mp)return i.BYTE;if(n===gp)return i.SHORT;if(n===io)return i.UNSIGNED_SHORT;if(n===yu)return i.INT;if(n===oi)return i.UNSIGNED_INT;if(n===Zn)return i.FLOAT;if(n===Fi)return i.HALF_FLOAT;if(n===_p)return i.ALPHA;if(n===yp)return i.RGB;if(n===Nn)return i.RGBA;if(n===Ui)return i.DEPTH_COMPONENT;if(n===_s)return i.DEPTH_STENCIL;if(n===Sp)return i.RED;if(n===bu)return i.RED_INTEGER;if(n===ur)return i.RG;if(n===wu)return i.RG_INTEGER;if(n===Eu)return i.RGBA_INTEGER;if(n===oa||n===aa||n===la||n===ca)if(o===ve)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===oa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===la)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===oa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===aa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===la)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ca)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===gc||n===vc||n===xc||n===_c)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===gc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===vc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===xc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===_c)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===yc||n===Sc||n===Mc||n===bc||n===wc||n===Ec||n===Tc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===yc||n===Sc)return o===ve?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Mc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===bc)return r.COMPRESSED_R11_EAC;if(n===wc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ec)return r.COMPRESSED_RG11_EAC;if(n===Tc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ac||n===Cc||n===Rc||n===Pc||n===Ic||n===Lc||n===Dc||n===Nc||n===Fc||n===Uc||n===Oc||n===Bc||n===zc||n===Vc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ac)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Cc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Rc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Pc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ic)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Lc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Dc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Nc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Uc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Oc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Bc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===zc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Vc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===kc||n===Gc||n===Hc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===kc)return o===ve?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Gc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Hc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Wc||n===Xc||n===qc||n===$c)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Wc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Xc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===qc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===$c)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===so?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Ww=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Xw=`
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

}`;class qw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Dp(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new li({vertexShader:Ww,fragmentShader:Xw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new oe(new tn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $w extends vr{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,m=null;const v=typeof XRWebGLBinding<"u",p=new qw,g={},_=e.getContextAttributes();let S=null,x=null;const M=[],w=[],A=new Lt;let F=null;const b=new In;b.viewport=new De;const T=new In;T.viewport=new De;const L=[b,T],X=new iy;let O=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let G=M[k];return G===void 0&&(G=new wl,M[k]=G),G.getTargetRaySpace()},this.getControllerGrip=function(k){let G=M[k];return G===void 0&&(G=new wl,M[k]=G),G.getGripSpace()},this.getHand=function(k){let G=M[k];return G===void 0&&(G=new wl,M[k]=G),G.getHandSpace()};function V(k){const G=w.indexOf(k.inputSource);if(G===-1)return;const rt=M[G];rt!==void 0&&(rt.update(k.inputSource,k.frame,c||o),rt.dispatchEvent({type:k.type,data:k.inputSource}))}function U(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",W);for(let k=0;k<M.length;k++){const G=w[k];G!==null&&(w[k]=null,M[k].disconnect(G))}O=null,q=null,p.reset();for(const k in g)delete g[k];t.setRenderTarget(S),d=null,h=null,f=null,s=null,x=null,jt.stop(),n.isPresenting=!1,t.setPixelRatio(F),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,n.isPresenting===!0&&Zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,n.isPresenting===!0&&Zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(k){if(s=k,s!==null){if(S=t.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",U),s.addEventListener("inputsourceschange",W),_.xrCompatible!==!0&&await e.makeXRCompatible(),F=t.getPixelRatio(),t.getSize(A),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let rt=null,ct=null,lt=null;_.depth&&(lt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=_.stencil?_s:Ui,ct=_.stencil?so:oi);const pt={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(pt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),x=new ni(h.textureWidth,h.textureHeight,{format:Nn,type:gn,depthTexture:new oo(h.textureWidth,h.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const rt={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,rt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new ni(d.framebufferWidth,d.framebufferHeight,{format:Nn,type:gn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),jt.setContext(s),jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function W(k){for(let G=0;G<k.removed.length;G++){const rt=k.removed[G],ct=w.indexOf(rt);ct>=0&&(w[ct]=null,M[ct].disconnect(rt))}for(let G=0;G<k.added.length;G++){const rt=k.added[G];let ct=w.indexOf(rt);if(ct===-1){for(let pt=0;pt<M.length;pt++)if(pt>=w.length){w.push(rt),ct=pt;break}else if(w[pt]===null){w[pt]=rt,ct=pt;break}if(ct===-1)break}const lt=M[ct];lt&&lt.connect(rt)}}const j=new J,ft=new J;function at(k,G,rt){j.setFromMatrixPosition(G.matrixWorld),ft.setFromMatrixPosition(rt.matrixWorld);const ct=j.distanceTo(ft),lt=G.projectionMatrix.elements,pt=rt.projectionMatrix.elements,I=lt[14]/(lt[10]-1),N=lt[14]/(lt[10]+1),D=(lt[9]+1)/lt[5],z=(lt[9]-1)/lt[5],H=(lt[8]-1)/lt[0],$=(pt[8]+1)/pt[0],R=I*H,it=I*$,et=ct/(-H+$),tt=et*-H;if(G.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(tt),k.translateZ(et),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),lt[10]===-1)k.projectionMatrix.copy(G.projectionMatrix),k.projectionMatrixInverse.copy(G.projectionMatrixInverse);else{const st=I+et,C=N+et,y=R-tt,B=it+(ct-tt),Z=D*N/C*st,ht=z*N/C*st;k.projectionMatrix.makePerspective(y,B,Z,ht,st,C),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}}function dt(k,G){G===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(G.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(s===null)return;let G=k.near,rt=k.far;p.texture!==null&&(p.depthNear>0&&(G=p.depthNear),p.depthFar>0&&(rt=p.depthFar)),X.near=T.near=b.near=G,X.far=T.far=b.far=rt,(O!==X.near||q!==X.far)&&(s.updateRenderState({depthNear:X.near,depthFar:X.far}),O=X.near,q=X.far),X.layers.mask=k.layers.mask|6,b.layers.mask=X.layers.mask&3,T.layers.mask=X.layers.mask&5;const ct=k.parent,lt=X.cameras;dt(X,ct);for(let pt=0;pt<lt.length;pt++)dt(lt[pt],ct);lt.length===2?at(X,b,T):X.projectionMatrix.copy(b.projectionMatrix),xt(k,X,ct)};function xt(k,G,rt){rt===null?k.matrix.copy(G.matrixWorld):(k.matrix.copy(rt.matrixWorld),k.matrix.invert(),k.matrix.multiply(G.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(G.projectionMatrix),k.projectionMatrixInverse.copy(G.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Yc*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(k){l=k,h!==null&&(h.fixedFoveation=k),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=k)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(X)},this.getCameraTexture=function(k){return g[k]};let Ft=null;function kt(k,G){if(u=G.getViewerPose(c||o),m=G,u!==null){const rt=u.views;d!==null&&(t.setRenderTargetFramebuffer(x,d.framebuffer),t.setRenderTarget(x));let ct=!1;rt.length!==X.cameras.length&&(X.cameras.length=0,ct=!0);for(let N=0;N<rt.length;N++){const D=rt[N];let z=null;if(d!==null)z=d.getViewport(D);else{const $=f.getViewSubImage(h,D);z=$.viewport,N===0&&(t.setRenderTargetTextures(x,$.colorTexture,$.depthStencilTexture),t.setRenderTarget(x))}let H=L[N];H===void 0&&(H=new In,H.layers.enable(N),H.viewport=new De,L[N]=H),H.matrix.fromArray(D.transform.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale),H.projectionMatrix.fromArray(D.projectionMatrix),H.projectionMatrixInverse.copy(H.projectionMatrix).invert(),H.viewport.set(z.x,z.y,z.width,z.height),N===0&&(X.matrix.copy(H.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),ct===!0&&X.cameras.push(H)}const lt=s.enabledFeatures;if(lt&&lt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){f=n.getBinding();const N=f.getDepthInformation(rt[0]);N&&N.isValid&&N.texture&&p.init(N,s.renderState)}if(lt&&lt.includes("camera-access")&&v){t.state.unbindTexture(),f=n.getBinding();for(let N=0;N<rt.length;N++){const D=rt[N].camera;if(D){let z=g[D];z||(z=new Dp,g[D]=z);const H=f.getCameraImage(D);z.sourceTexture=H}}}}for(let rt=0;rt<M.length;rt++){const ct=w[rt],lt=M[rt];ct!==null&&lt!==void 0&&lt.update(ct,G,c||o)}Ft&&Ft(k,G),G.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:G}),m=null}const jt=new Wp;jt.setAnimationLoop(kt),this.setAnimationLoop=function(k){Ft=k},this.dispose=function(){}}}const hs=new ai,Yw=new Re;function jw(i,t){function e(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,Rp(i)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function s(p,g,_,S,x){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(p,g):g.isMeshToonMaterial?(r(p,g),f(p,g)):g.isMeshPhongMaterial?(r(p,g),u(p,g)):g.isMeshStandardMaterial?(r(p,g),h(p,g),g.isMeshPhysicalMaterial&&d(p,g,x)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),v(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?l(p,g,_,S):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,e(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===un&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,e(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===un&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,e(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,e(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);const _=t.get(g),S=_.envMap,x=_.envMapRotation;S&&(p.envMap.value=S,hs.copy(x),hs.x*=-1,hs.y*=-1,hs.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(hs.y*=-1,hs.z*=-1),p.envMapRotation.value.setFromMatrix4(Yw.makeRotationFromEuler(hs)),p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,_,S){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*_,p.scale.value=S*.5,g.map&&(p.map.value=g.map,e(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function u(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function f(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function h(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function d(p,g,_){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===un&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function v(p,g){const _=t.get(g).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Kw(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,S){const x=S.program;n.uniformBlockBinding(_,x)}function c(_,S){let x=s[_.id];x===void 0&&(m(_),x=u(_),s[_.id]=x,_.addEventListener("dispose",p));const M=S.program;n.updateUBOMapping(_,M);const w=t.render.frame;r[_.id]!==w&&(h(_),r[_.id]=w)}function u(_){const S=f();_.__bindingPointIndex=S;const x=i.createBuffer(),M=_.__size,w=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,M,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,x),x}function f(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return ae("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const S=s[_.id],x=_.uniforms,M=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let w=0,A=x.length;w<A;w++){const F=Array.isArray(x[w])?x[w]:[x[w]];for(let b=0,T=F.length;b<T;b++){const L=F[b];if(d(L,w,b,M)===!0){const X=L.__offset,O=Array.isArray(L.value)?L.value:[L.value];let q=0;for(let V=0;V<O.length;V++){const U=O[V],W=v(U);typeof U=="number"||typeof U=="boolean"?(L.__data[0]=U,i.bufferSubData(i.UNIFORM_BUFFER,X+q,L.__data)):U.isMatrix3?(L.__data[0]=U.elements[0],L.__data[1]=U.elements[1],L.__data[2]=U.elements[2],L.__data[3]=0,L.__data[4]=U.elements[3],L.__data[5]=U.elements[4],L.__data[6]=U.elements[5],L.__data[7]=0,L.__data[8]=U.elements[6],L.__data[9]=U.elements[7],L.__data[10]=U.elements[8],L.__data[11]=0):(U.toArray(L.__data,q),q+=W.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,X,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(_,S,x,M){const w=_.value,A=S+"_"+x;if(M[A]===void 0)return typeof w=="number"||typeof w=="boolean"?M[A]=w:M[A]=w.clone(),!0;{const F=M[A];if(typeof w=="number"||typeof w=="boolean"){if(F!==w)return M[A]=w,!0}else if(F.equals(w)===!1)return F.copy(w),!0}return!1}function m(_){const S=_.uniforms;let x=0;const M=16;for(let A=0,F=S.length;A<F;A++){const b=Array.isArray(S[A])?S[A]:[S[A]];for(let T=0,L=b.length;T<L;T++){const X=b[T],O=Array.isArray(X.value)?X.value:[X.value];for(let q=0,V=O.length;q<V;q++){const U=O[q],W=v(U),j=x%M,ft=j%W.boundary,at=j+ft;x+=ft,at!==0&&M-at<W.storage&&(x+=M-at),X.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=x,x+=W.storage}}}const w=x%M;return w>0&&(x+=M-w),_.__size=x,_.__cache={},this}function v(_){const S={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(S.boundary=4,S.storage=4):_.isVector2?(S.boundary=8,S.storage=8):_.isVector3||_.isColor?(S.boundary=16,S.storage=12):_.isVector4?(S.boundary=16,S.storage=16):_.isMatrix3?(S.boundary=48,S.storage=48):_.isMatrix4?(S.boundary=64,S.storage=64):_.isTexture?Zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Zt("WebGLRenderer: Unsupported uniform value type.",_),S}function p(_){const S=_.target;S.removeEventListener("dispose",p);const x=o.indexOf(S.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function g(){for(const _ in s)i.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:g}}const Zw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Gn=null;function Jw(){return Gn===null&&(Gn=new f_(Zw,16,16,ur,Fi),Gn.name="DFG_LUT",Gn.minFilter=qe,Gn.magFilter=qe,Gn.wrapS=Ci,Gn.wrapT=Ci,Gn.generateMipmaps=!1,Gn.needsUpdate=!0),Gn}class Qw{constructor(t={}){const{canvas:e=zx(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=gn}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;const v=d,p=new Set([Eu,wu,bu]),g=new Set([gn,oi,io,so,Su,Mu]),_=new Uint32Array(4),S=new Int32Array(4);let x=null,M=null;const w=[],A=[];let F=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let T=!1;this._outputColorSpace=Mn;let L=0,X=0,O=null,q=-1,V=null;const U=new De,W=new De;let j=null;const ft=new le(0);let at=0,dt=e.width,xt=e.height,Ft=1,kt=null,jt=null;const k=new De(0,0,dt,xt),G=new De(0,0,dt,xt);let rt=!1;const ct=new Lu;let lt=!1,pt=!1;const I=new Re,N=new J,D=new De,z={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let H=!1;function $(){return O===null?Ft:1}let R=n;function it(P,K){return e.getContext(P,K)}try{const P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${_u}`),e.addEventListener("webglcontextlost",Jt,!1),e.addEventListener("webglcontextrestored",Me,!1),e.addEventListener("webglcontextcreationerror",me,!1),R===null){const K="webgl2";if(R=it(K,P),R===null)throw it(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw ae("WebGLRenderer: "+P.message),P}let et,tt,st,C,y,B,Z,ht,Q,_t,gt,Et,Nt,mt,St,Tt,Rt,bt,Gt,Y,At,wt,Ot,Mt;function yt(){et=new JM(R),et.init(),wt=new Hw(R,et),tt=new HM(R,et,t,wt),st=new kw(R,et),tt.reversedDepthBuffer&&h&&st.buffers.depth.setReversed(!0),C=new eb(R),y=new Tw,B=new Gw(R,et,st,y,tt,wt,C),Z=new XM(b),ht=new ZM(b),Q=new ry(R),Ot=new kM(R,Q),_t=new QM(R,Q,C,Ot),gt=new ib(R,_t,Q,C),Gt=new nb(R,tt,B),Tt=new WM(y),Et=new Ew(b,Z,ht,et,tt,Ot,Tt),Nt=new jw(b,y),mt=new Cw,St=new Nw(et),bt=new VM(b,Z,ht,st,gt,m,l),Rt=new zw(b,gt,tt),Mt=new Kw(R,C,tt,st),Y=new GM(R,et,C),At=new tb(R,et,C),C.programs=Et.programs,b.capabilities=tt,b.extensions=et,b.properties=y,b.renderLists=mt,b.shadowMap=Rt,b.state=st,b.info=C}yt(),v!==gn&&(F=new rb(v,e.width,e.height,s,r));const Ct=new $w(b,R);this.xr=Ct,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const P=et.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=et.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return Ft},this.setPixelRatio=function(P){P!==void 0&&(Ft=P,this.setSize(dt,xt,!1))},this.getSize=function(P){return P.set(dt,xt)},this.setSize=function(P,K,ut=!0){if(Ct.isPresenting){Zt("WebGLRenderer: Can't change size while VR device is presenting.");return}dt=P,xt=K,e.width=Math.floor(P*Ft),e.height=Math.floor(K*Ft),ut===!0&&(e.style.width=P+"px",e.style.height=K+"px"),F!==null&&F.setSize(e.width,e.height),this.setViewport(0,0,P,K)},this.getDrawingBufferSize=function(P){return P.set(dt*Ft,xt*Ft).floor()},this.setDrawingBufferSize=function(P,K,ut){dt=P,xt=K,Ft=ut,e.width=Math.floor(P*ut),e.height=Math.floor(K*ut),this.setViewport(0,0,P,K)},this.setEffects=function(P){if(v===gn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(P){for(let K=0;K<P.length;K++)if(P[K].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(P||[])},this.getCurrentViewport=function(P){return P.copy(U)},this.getViewport=function(P){return P.copy(k)},this.setViewport=function(P,K,ut,ot){P.isVector4?k.set(P.x,P.y,P.z,P.w):k.set(P,K,ut,ot),st.viewport(U.copy(k).multiplyScalar(Ft).round())},this.getScissor=function(P){return P.copy(G)},this.setScissor=function(P,K,ut,ot){P.isVector4?G.set(P.x,P.y,P.z,P.w):G.set(P,K,ut,ot),st.scissor(W.copy(G).multiplyScalar(Ft).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(P){st.setScissorTest(rt=P)},this.setOpaqueSort=function(P){kt=P},this.setTransparentSort=function(P){jt=P},this.getClearColor=function(P){return P.copy(bt.getClearColor())},this.setClearColor=function(){bt.setClearColor(...arguments)},this.getClearAlpha=function(){return bt.getClearAlpha()},this.setClearAlpha=function(){bt.setClearAlpha(...arguments)},this.clear=function(P=!0,K=!0,ut=!0){let ot=0;if(P){let nt=!1;if(O!==null){const Pt=O.texture.format;nt=p.has(Pt)}if(nt){const Pt=O.texture.type,Bt=g.has(Pt),Dt=bt.getClearColor(),Vt=bt.getClearAlpha(),Ht=Dt.r,$t=Dt.g,Xt=Dt.b;Bt?(_[0]=Ht,_[1]=$t,_[2]=Xt,_[3]=Vt,R.clearBufferuiv(R.COLOR,0,_)):(S[0]=Ht,S[1]=$t,S[2]=Xt,S[3]=Vt,R.clearBufferiv(R.COLOR,0,S))}else ot|=R.COLOR_BUFFER_BIT}K&&(ot|=R.DEPTH_BUFFER_BIT),ut&&(ot|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Jt,!1),e.removeEventListener("webglcontextrestored",Me,!1),e.removeEventListener("webglcontextcreationerror",me,!1),bt.dispose(),mt.dispose(),St.dispose(),y.dispose(),Z.dispose(),ht.dispose(),gt.dispose(),Ot.dispose(),Mt.dispose(),Et.dispose(),Ct.dispose(),Ct.removeEventListener("sessionstart",Vu),Ct.removeEventListener("sessionend",ku),ns.stop()};function Jt(P){P.preventDefault(),Nh("WebGLRenderer: Context Lost."),T=!0}function Me(){Nh("WebGLRenderer: Context Restored."),T=!1;const P=C.autoReset,K=Rt.enabled,ut=Rt.autoUpdate,ot=Rt.needsUpdate,nt=Rt.type;yt(),C.autoReset=P,Rt.enabled=K,Rt.autoUpdate=ut,Rt.needsUpdate=ot,Rt.type=nt}function me(P){ae("WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Vn(P){const K=P.target;K.removeEventListener("dispose",Vn),hi(K)}function hi(P){sm(P),y.remove(P)}function sm(P){const K=y.get(P).programs;K!==void 0&&(K.forEach(function(ut){Et.releaseProgram(ut)}),P.isShaderMaterial&&Et.releaseShaderCache(P))}this.renderBufferDirect=function(P,K,ut,ot,nt,Pt){K===null&&(K=z);const Bt=nt.isMesh&&nt.matrixWorld.determinant()<0,Dt=om(P,K,ut,ot,nt);st.setMaterial(ot,Bt);let Vt=ut.index,Ht=1;if(ot.wireframe===!0){if(Vt=_t.getWireframeAttribute(ut),Vt===void 0)return;Ht=2}const $t=ut.drawRange,Xt=ut.attributes.position;let se=$t.start*Ht,_e=($t.start+$t.count)*Ht;Pt!==null&&(se=Math.max(se,Pt.start*Ht),_e=Math.min(_e,(Pt.start+Pt.count)*Ht)),Vt!==null?(se=Math.max(se,0),_e=Math.min(_e,Vt.count)):Xt!=null&&(se=Math.max(se,0),_e=Math.min(_e,Xt.count));const Ie=_e-se;if(Ie<0||Ie===1/0)return;Ot.setup(nt,ot,Dt,ut,Vt);let Le,ye=Y;if(Vt!==null&&(Le=Q.get(Vt),ye=At,ye.setIndex(Le)),nt.isMesh)ot.wireframe===!0?(st.setLineWidth(ot.wireframeLinewidth*$()),ye.setMode(R.LINES)):ye.setMode(R.TRIANGLES);else if(nt.isLine){let qt=ot.linewidth;qt===void 0&&(qt=1),st.setLineWidth(qt*$()),nt.isLineSegments?ye.setMode(R.LINES):nt.isLineLoop?ye.setMode(R.LINE_LOOP):ye.setMode(R.LINE_STRIP)}else nt.isPoints?ye.setMode(R.POINTS):nt.isSprite&&ye.setMode(R.TRIANGLES);if(nt.isBatchedMesh)if(nt._multiDrawInstances!==null)ro("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ye.renderMultiDrawInstances(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount,nt._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))ye.renderMultiDraw(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount);else{const qt=nt._multiDrawStarts,ge=nt._multiDrawCounts,he=nt._multiDrawCount,hn=Vt?Q.get(Vt).bytesPerElement:1,Ps=y.get(ot).currentProgram.getUniforms();for(let fn=0;fn<he;fn++)Ps.setValue(R,"_gl_DrawID",fn),ye.render(qt[fn]/hn,ge[fn])}else if(nt.isInstancedMesh)ye.renderInstances(se,Ie,nt.count);else if(ut.isInstancedBufferGeometry){const qt=ut._maxInstanceCount!==void 0?ut._maxInstanceCount:1/0,ge=Math.min(ut.instanceCount,qt);ye.renderInstances(se,Ie,ge)}else ye.render(se,Ie)};function zu(P,K,ut){P.transparent===!0&&P.side===Ln&&P.forceSinglePass===!1?(P.side=un,P.needsUpdate=!0,yo(P,K,ut),P.side=es,P.needsUpdate=!0,yo(P,K,ut),P.side=Ln):yo(P,K,ut)}this.compile=function(P,K,ut=null){ut===null&&(ut=P),M=St.get(ut),M.init(K),A.push(M),ut.traverseVisible(function(nt){nt.isLight&&nt.layers.test(K.layers)&&(M.pushLight(nt),nt.castShadow&&M.pushShadow(nt))}),P!==ut&&P.traverseVisible(function(nt){nt.isLight&&nt.layers.test(K.layers)&&(M.pushLight(nt),nt.castShadow&&M.pushShadow(nt))}),M.setupLights();const ot=new Set;return P.traverse(function(nt){if(!(nt.isMesh||nt.isPoints||nt.isLine||nt.isSprite))return;const Pt=nt.material;if(Pt)if(Array.isArray(Pt))for(let Bt=0;Bt<Pt.length;Bt++){const Dt=Pt[Bt];zu(Dt,ut,nt),ot.add(Dt)}else zu(Pt,ut,nt),ot.add(Pt)}),M=A.pop(),ot},this.compileAsync=function(P,K,ut=null){const ot=this.compile(P,K,ut);return new Promise(nt=>{function Pt(){if(ot.forEach(function(Bt){y.get(Bt).currentProgram.isReady()&&ot.delete(Bt)}),ot.size===0){nt(P);return}setTimeout(Pt,10)}et.get("KHR_parallel_shader_compile")!==null?Pt():setTimeout(Pt,10)})};let ka=null;function rm(P){ka&&ka(P)}function Vu(){ns.stop()}function ku(){ns.start()}const ns=new Wp;ns.setAnimationLoop(rm),typeof self<"u"&&ns.setContext(self),this.setAnimationLoop=function(P){ka=P,Ct.setAnimationLoop(P),P===null?ns.stop():ns.start()},Ct.addEventListener("sessionstart",Vu),Ct.addEventListener("sessionend",ku),this.render=function(P,K){if(K!==void 0&&K.isCamera!==!0){ae("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;const ut=Ct.enabled===!0&&Ct.isPresenting===!0,ot=F!==null&&(O===null||ut)&&F.begin(b,O);if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Ct.enabled===!0&&Ct.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(Ct.cameraAutoUpdate===!0&&Ct.updateCamera(K),K=Ct.getCamera()),P.isScene===!0&&P.onBeforeRender(b,P,K,O),M=St.get(P,A.length),M.init(K),A.push(M),I.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),ct.setFromProjectionMatrix(I,Jn,K.reversedDepth),pt=this.localClippingEnabled,lt=Tt.init(this.clippingPlanes,pt),x=mt.get(P,w.length),x.init(),w.push(x),Ct.enabled===!0&&Ct.isPresenting===!0){const Bt=b.xr.getDepthSensingMesh();Bt!==null&&Ga(Bt,K,-1/0,b.sortObjects)}Ga(P,K,0,b.sortObjects),x.finish(),b.sortObjects===!0&&x.sort(kt,jt),H=Ct.enabled===!1||Ct.isPresenting===!1||Ct.hasDepthSensing()===!1,H&&bt.addToRenderList(x,P),this.info.render.frame++,lt===!0&&Tt.beginShadows();const nt=M.state.shadowsArray;if(Rt.render(nt,P,K),lt===!0&&Tt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ot&&F.hasRenderPass())===!1){const Bt=x.opaque,Dt=x.transmissive;if(M.setupLights(),K.isArrayCamera){const Vt=K.cameras;if(Dt.length>0)for(let Ht=0,$t=Vt.length;Ht<$t;Ht++){const Xt=Vt[Ht];Hu(Bt,Dt,P,Xt)}H&&bt.render(P);for(let Ht=0,$t=Vt.length;Ht<$t;Ht++){const Xt=Vt[Ht];Gu(x,P,Xt,Xt.viewport)}}else Dt.length>0&&Hu(Bt,Dt,P,K),H&&bt.render(P),Gu(x,P,K)}O!==null&&X===0&&(B.updateMultisampleRenderTarget(O),B.updateRenderTargetMipmap(O)),ot&&F.end(b),P.isScene===!0&&P.onAfterRender(b,P,K),Ot.resetDefaultState(),q=-1,V=null,A.pop(),A.length>0?(M=A[A.length-1],lt===!0&&Tt.setGlobalState(b.clippingPlanes,M.state.camera)):M=null,w.pop(),w.length>0?x=w[w.length-1]:x=null};function Ga(P,K,ut,ot){if(P.visible===!1)return;if(P.layers.test(K.layers)){if(P.isGroup)ut=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(K);else if(P.isLight)M.pushLight(P),P.castShadow&&M.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||ct.intersectsSprite(P)){ot&&D.setFromMatrixPosition(P.matrixWorld).applyMatrix4(I);const Bt=gt.update(P),Dt=P.material;Dt.visible&&x.push(P,Bt,Dt,ut,D.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||ct.intersectsObject(P))){const Bt=gt.update(P),Dt=P.material;if(ot&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),D.copy(P.boundingSphere.center)):(Bt.boundingSphere===null&&Bt.computeBoundingSphere(),D.copy(Bt.boundingSphere.center)),D.applyMatrix4(P.matrixWorld).applyMatrix4(I)),Array.isArray(Dt)){const Vt=Bt.groups;for(let Ht=0,$t=Vt.length;Ht<$t;Ht++){const Xt=Vt[Ht],se=Dt[Xt.materialIndex];se&&se.visible&&x.push(P,Bt,se,ut,D.z,Xt)}}else Dt.visible&&x.push(P,Bt,Dt,ut,D.z,null)}}const Pt=P.children;for(let Bt=0,Dt=Pt.length;Bt<Dt;Bt++)Ga(Pt[Bt],K,ut,ot)}function Gu(P,K,ut,ot){const{opaque:nt,transmissive:Pt,transparent:Bt}=P;M.setupLightsView(ut),lt===!0&&Tt.setGlobalState(b.clippingPlanes,ut),ot&&st.viewport(U.copy(ot)),nt.length>0&&_o(nt,K,ut),Pt.length>0&&_o(Pt,K,ut),Bt.length>0&&_o(Bt,K,ut),st.buffers.depth.setTest(!0),st.buffers.depth.setMask(!0),st.buffers.color.setMask(!0),st.setPolygonOffset(!1)}function Hu(P,K,ut,ot){if((ut.isScene===!0?ut.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[ot.id]===void 0){const se=et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[ot.id]=new ni(1,1,{generateMipmaps:!0,type:se?Fi:gn,minFilter:xs,samples:tt.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ue.workingColorSpace})}const Pt=M.state.transmissionRenderTarget[ot.id],Bt=ot.viewport||U;Pt.setSize(Bt.z*b.transmissionResolutionScale,Bt.w*b.transmissionResolutionScale);const Dt=b.getRenderTarget(),Vt=b.getActiveCubeFace(),Ht=b.getActiveMipmapLevel();b.setRenderTarget(Pt),b.getClearColor(ft),at=b.getClearAlpha(),at<1&&b.setClearColor(16777215,.5),b.clear(),H&&bt.render(ut);const $t=b.toneMapping;b.toneMapping=ei;const Xt=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),M.setupLightsView(ot),lt===!0&&Tt.setGlobalState(b.clippingPlanes,ot),_o(P,ut,ot),B.updateMultisampleRenderTarget(Pt),B.updateRenderTargetMipmap(Pt),et.has("WEBGL_multisampled_render_to_texture")===!1){let se=!1;for(let _e=0,Ie=K.length;_e<Ie;_e++){const Le=K[_e],{object:ye,geometry:qt,material:ge,group:he}=Le;if(ge.side===Ln&&ye.layers.test(ot.layers)){const hn=ge.side;ge.side=un,ge.needsUpdate=!0,Wu(ye,ut,ot,qt,ge,he),ge.side=hn,ge.needsUpdate=!0,se=!0}}se===!0&&(B.updateMultisampleRenderTarget(Pt),B.updateRenderTargetMipmap(Pt))}b.setRenderTarget(Dt,Vt,Ht),b.setClearColor(ft,at),Xt!==void 0&&(ot.viewport=Xt),b.toneMapping=$t}function _o(P,K,ut){const ot=K.isScene===!0?K.overrideMaterial:null;for(let nt=0,Pt=P.length;nt<Pt;nt++){const Bt=P[nt],{object:Dt,geometry:Vt,group:Ht}=Bt;let $t=Bt.material;$t.allowOverride===!0&&ot!==null&&($t=ot),Dt.layers.test(ut.layers)&&Wu(Dt,K,ut,Vt,$t,Ht)}}function Wu(P,K,ut,ot,nt,Pt){P.onBeforeRender(b,K,ut,ot,nt,Pt),P.modelViewMatrix.multiplyMatrices(ut.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),nt.onBeforeRender(b,K,ut,ot,P,Pt),nt.transparent===!0&&nt.side===Ln&&nt.forceSinglePass===!1?(nt.side=un,nt.needsUpdate=!0,b.renderBufferDirect(ut,K,ot,nt,P,Pt),nt.side=es,nt.needsUpdate=!0,b.renderBufferDirect(ut,K,ot,nt,P,Pt),nt.side=Ln):b.renderBufferDirect(ut,K,ot,nt,P,Pt),P.onAfterRender(b,K,ut,ot,nt,Pt)}function yo(P,K,ut){K.isScene!==!0&&(K=z);const ot=y.get(P),nt=M.state.lights,Pt=M.state.shadowsArray,Bt=nt.state.version,Dt=Et.getParameters(P,nt.state,Pt,K,ut),Vt=Et.getProgramCacheKey(Dt);let Ht=ot.programs;ot.environment=P.isMeshStandardMaterial?K.environment:null,ot.fog=K.fog,ot.envMap=(P.isMeshStandardMaterial?ht:Z).get(P.envMap||ot.environment),ot.envMapRotation=ot.environment!==null&&P.envMap===null?K.environmentRotation:P.envMapRotation,Ht===void 0&&(P.addEventListener("dispose",Vn),Ht=new Map,ot.programs=Ht);let $t=Ht.get(Vt);if($t!==void 0){if(ot.currentProgram===$t&&ot.lightsStateVersion===Bt)return qu(P,Dt),$t}else Dt.uniforms=Et.getUniforms(P),P.onBeforeCompile(Dt,b),$t=Et.acquireProgram(Dt,Vt),Ht.set(Vt,$t),ot.uniforms=Dt.uniforms;const Xt=ot.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Xt.clippingPlanes=Tt.uniform),qu(P,Dt),ot.needsLights=lm(P),ot.lightsStateVersion=Bt,ot.needsLights&&(Xt.ambientLightColor.value=nt.state.ambient,Xt.lightProbe.value=nt.state.probe,Xt.directionalLights.value=nt.state.directional,Xt.directionalLightShadows.value=nt.state.directionalShadow,Xt.spotLights.value=nt.state.spot,Xt.spotLightShadows.value=nt.state.spotShadow,Xt.rectAreaLights.value=nt.state.rectArea,Xt.ltc_1.value=nt.state.rectAreaLTC1,Xt.ltc_2.value=nt.state.rectAreaLTC2,Xt.pointLights.value=nt.state.point,Xt.pointLightShadows.value=nt.state.pointShadow,Xt.hemisphereLights.value=nt.state.hemi,Xt.directionalShadowMap.value=nt.state.directionalShadowMap,Xt.directionalShadowMatrix.value=nt.state.directionalShadowMatrix,Xt.spotShadowMap.value=nt.state.spotShadowMap,Xt.spotLightMatrix.value=nt.state.spotLightMatrix,Xt.spotLightMap.value=nt.state.spotLightMap,Xt.pointShadowMap.value=nt.state.pointShadowMap,Xt.pointShadowMatrix.value=nt.state.pointShadowMatrix),ot.currentProgram=$t,ot.uniformsList=null,$t}function Xu(P){if(P.uniformsList===null){const K=P.currentProgram.getUniforms();P.uniformsList=ua.seqWithValue(K.seq,P.uniforms)}return P.uniformsList}function qu(P,K){const ut=y.get(P);ut.outputColorSpace=K.outputColorSpace,ut.batching=K.batching,ut.batchingColor=K.batchingColor,ut.instancing=K.instancing,ut.instancingColor=K.instancingColor,ut.instancingMorph=K.instancingMorph,ut.skinning=K.skinning,ut.morphTargets=K.morphTargets,ut.morphNormals=K.morphNormals,ut.morphColors=K.morphColors,ut.morphTargetsCount=K.morphTargetsCount,ut.numClippingPlanes=K.numClippingPlanes,ut.numIntersection=K.numClipIntersection,ut.vertexAlphas=K.vertexAlphas,ut.vertexTangents=K.vertexTangents,ut.toneMapping=K.toneMapping}function om(P,K,ut,ot,nt){K.isScene!==!0&&(K=z),B.resetTextureUnits();const Pt=K.fog,Bt=ot.isMeshStandardMaterial?K.environment:null,Dt=O===null?b.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:hr,Vt=(ot.isMeshStandardMaterial?ht:Z).get(ot.envMap||Bt),Ht=ot.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,$t=!!ut.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),Xt=!!ut.morphAttributes.position,se=!!ut.morphAttributes.normal,_e=!!ut.morphAttributes.color;let Ie=ei;ot.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Ie=b.toneMapping);const Le=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,ye=Le!==void 0?Le.length:0,qt=y.get(ot),ge=M.state.lights;if(lt===!0&&(pt===!0||P!==V)){const Ze=P===V&&ot.id===q;Tt.setState(ot,P,Ze)}let he=!1;ot.version===qt.__version?(qt.needsLights&&qt.lightsStateVersion!==ge.state.version||qt.outputColorSpace!==Dt||nt.isBatchedMesh&&qt.batching===!1||!nt.isBatchedMesh&&qt.batching===!0||nt.isBatchedMesh&&qt.batchingColor===!0&&nt.colorTexture===null||nt.isBatchedMesh&&qt.batchingColor===!1&&nt.colorTexture!==null||nt.isInstancedMesh&&qt.instancing===!1||!nt.isInstancedMesh&&qt.instancing===!0||nt.isSkinnedMesh&&qt.skinning===!1||!nt.isSkinnedMesh&&qt.skinning===!0||nt.isInstancedMesh&&qt.instancingColor===!0&&nt.instanceColor===null||nt.isInstancedMesh&&qt.instancingColor===!1&&nt.instanceColor!==null||nt.isInstancedMesh&&qt.instancingMorph===!0&&nt.morphTexture===null||nt.isInstancedMesh&&qt.instancingMorph===!1&&nt.morphTexture!==null||qt.envMap!==Vt||ot.fog===!0&&qt.fog!==Pt||qt.numClippingPlanes!==void 0&&(qt.numClippingPlanes!==Tt.numPlanes||qt.numIntersection!==Tt.numIntersection)||qt.vertexAlphas!==Ht||qt.vertexTangents!==$t||qt.morphTargets!==Xt||qt.morphNormals!==se||qt.morphColors!==_e||qt.toneMapping!==Ie||qt.morphTargetsCount!==ye)&&(he=!0):(he=!0,qt.__version=ot.version);let hn=qt.currentProgram;he===!0&&(hn=yo(ot,K,nt));let Ps=!1,fn=!1,yr=!1;const be=hn.getUniforms(),rn=qt.uniforms;if(st.useProgram(hn.program)&&(Ps=!0,fn=!0,yr=!0),ot.id!==q&&(q=ot.id,fn=!0),Ps||V!==P){st.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),be.setValue(R,"projectionMatrix",P.projectionMatrix),be.setValue(R,"viewMatrix",P.matrixWorldInverse);const on=be.map.cameraPosition;on!==void 0&&on.setValue(R,N.setFromMatrixPosition(P.matrixWorld)),tt.logarithmicDepthBuffer&&be.setValue(R,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&be.setValue(R,"isOrthographic",P.isOrthographicCamera===!0),V!==P&&(V=P,fn=!0,yr=!0)}if(qt.needsLights&&(ge.state.directionalShadowMap.length>0&&be.setValue(R,"directionalShadowMap",ge.state.directionalShadowMap,B),ge.state.spotShadowMap.length>0&&be.setValue(R,"spotShadowMap",ge.state.spotShadowMap,B),ge.state.pointShadowMap.length>0&&be.setValue(R,"pointShadowMap",ge.state.pointShadowMap,B)),nt.isSkinnedMesh){be.setOptional(R,nt,"bindMatrix"),be.setOptional(R,nt,"bindMatrixInverse");const Ze=nt.skeleton;Ze&&(Ze.boneTexture===null&&Ze.computeBoneTexture(),be.setValue(R,"boneTexture",Ze.boneTexture,B))}nt.isBatchedMesh&&(be.setOptional(R,nt,"batchingTexture"),be.setValue(R,"batchingTexture",nt._matricesTexture,B),be.setOptional(R,nt,"batchingIdTexture"),be.setValue(R,"batchingIdTexture",nt._indirectTexture,B),be.setOptional(R,nt,"batchingColorTexture"),nt._colorsTexture!==null&&be.setValue(R,"batchingColorTexture",nt._colorsTexture,B));const yn=ut.morphAttributes;if((yn.position!==void 0||yn.normal!==void 0||yn.color!==void 0)&&Gt.update(nt,ut,hn),(fn||qt.receiveShadow!==nt.receiveShadow)&&(qt.receiveShadow=nt.receiveShadow,be.setValue(R,"receiveShadow",nt.receiveShadow)),ot.isMeshGouraudMaterial&&ot.envMap!==null&&(rn.envMap.value=Vt,rn.flipEnvMap.value=Vt.isCubeTexture&&Vt.isRenderTargetTexture===!1?-1:1),ot.isMeshStandardMaterial&&ot.envMap===null&&K.environment!==null&&(rn.envMapIntensity.value=K.environmentIntensity),rn.dfgLUT!==void 0&&(rn.dfgLUT.value=Jw()),fn&&(be.setValue(R,"toneMappingExposure",b.toneMappingExposure),qt.needsLights&&am(rn,yr),Pt&&ot.fog===!0&&Nt.refreshFogUniforms(rn,Pt),Nt.refreshMaterialUniforms(rn,ot,Ft,xt,M.state.transmissionRenderTarget[P.id]),ua.upload(R,Xu(qt),rn,B)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(ua.upload(R,Xu(qt),rn,B),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&be.setValue(R,"center",nt.center),be.setValue(R,"modelViewMatrix",nt.modelViewMatrix),be.setValue(R,"normalMatrix",nt.normalMatrix),be.setValue(R,"modelMatrix",nt.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){const Ze=ot.uniformsGroups;for(let on=0,Ha=Ze.length;on<Ha;on++){const is=Ze[on];Mt.update(is,hn),Mt.bind(is,hn)}}return hn}function am(P,K){P.ambientLightColor.needsUpdate=K,P.lightProbe.needsUpdate=K,P.directionalLights.needsUpdate=K,P.directionalLightShadows.needsUpdate=K,P.pointLights.needsUpdate=K,P.pointLightShadows.needsUpdate=K,P.spotLights.needsUpdate=K,P.spotLightShadows.needsUpdate=K,P.rectAreaLights.needsUpdate=K,P.hemisphereLights.needsUpdate=K}function lm(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(P,K,ut){const ot=y.get(P);ot.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,ot.__autoAllocateDepthBuffer===!1&&(ot.__useRenderToTexture=!1),y.get(P.texture).__webglTexture=K,y.get(P.depthTexture).__webglTexture=ot.__autoAllocateDepthBuffer?void 0:ut,ot.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,K){const ut=y.get(P);ut.__webglFramebuffer=K,ut.__useDefaultFramebuffer=K===void 0};const cm=R.createFramebuffer();this.setRenderTarget=function(P,K=0,ut=0){O=P,L=K,X=ut;let ot=null,nt=!1,Pt=!1;if(P){const Dt=y.get(P);if(Dt.__useDefaultFramebuffer!==void 0){st.bindFramebuffer(R.FRAMEBUFFER,Dt.__webglFramebuffer),U.copy(P.viewport),W.copy(P.scissor),j=P.scissorTest,st.viewport(U),st.scissor(W),st.setScissorTest(j),q=-1;return}else if(Dt.__webglFramebuffer===void 0)B.setupRenderTarget(P);else if(Dt.__hasExternalTextures)B.rebindTextures(P,y.get(P.texture).__webglTexture,y.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const $t=P.depthTexture;if(Dt.__boundDepthTexture!==$t){if($t!==null&&y.has($t)&&(P.width!==$t.image.width||P.height!==$t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");B.setupDepthRenderbuffer(P)}}const Vt=P.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(Pt=!0);const Ht=y.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Ht[K])?ot=Ht[K][ut]:ot=Ht[K],nt=!0):P.samples>0&&B.useMultisampledRTT(P)===!1?ot=y.get(P).__webglMultisampledFramebuffer:Array.isArray(Ht)?ot=Ht[ut]:ot=Ht,U.copy(P.viewport),W.copy(P.scissor),j=P.scissorTest}else U.copy(k).multiplyScalar(Ft).floor(),W.copy(G).multiplyScalar(Ft).floor(),j=rt;if(ut!==0&&(ot=cm),st.bindFramebuffer(R.FRAMEBUFFER,ot)&&st.drawBuffers(P,ot),st.viewport(U),st.scissor(W),st.setScissorTest(j),nt){const Dt=y.get(P.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+K,Dt.__webglTexture,ut)}else if(Pt){const Dt=K;for(let Vt=0;Vt<P.textures.length;Vt++){const Ht=y.get(P.textures[Vt]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+Vt,Ht.__webglTexture,ut,Dt)}}else if(P!==null&&ut!==0){const Dt=y.get(P.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Dt.__webglTexture,ut)}q=-1},this.readRenderTargetPixels=function(P,K,ut,ot,nt,Pt,Bt,Dt=0){if(!(P&&P.isWebGLRenderTarget)){ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Vt=y.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Bt!==void 0&&(Vt=Vt[Bt]),Vt){st.bindFramebuffer(R.FRAMEBUFFER,Vt);try{const Ht=P.textures[Dt],$t=Ht.format,Xt=Ht.type;if(!tt.textureFormatReadable($t)){ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!tt.textureTypeReadable(Xt)){ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=P.width-ot&&ut>=0&&ut<=P.height-nt&&(P.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Dt),R.readPixels(K,ut,ot,nt,wt.convert($t),wt.convert(Xt),Pt))}finally{const Ht=O!==null?y.get(O).__webglFramebuffer:null;st.bindFramebuffer(R.FRAMEBUFFER,Ht)}}},this.readRenderTargetPixelsAsync=async function(P,K,ut,ot,nt,Pt,Bt,Dt=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Vt=y.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Bt!==void 0&&(Vt=Vt[Bt]),Vt)if(K>=0&&K<=P.width-ot&&ut>=0&&ut<=P.height-nt){st.bindFramebuffer(R.FRAMEBUFFER,Vt);const Ht=P.textures[Dt],$t=Ht.format,Xt=Ht.type;if(!tt.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!tt.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const se=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,se),R.bufferData(R.PIXEL_PACK_BUFFER,Pt.byteLength,R.STREAM_READ),P.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Dt),R.readPixels(K,ut,ot,nt,wt.convert($t),wt.convert(Xt),0);const _e=O!==null?y.get(O).__webglFramebuffer:null;st.bindFramebuffer(R.FRAMEBUFFER,_e);const Ie=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Vx(R,Ie,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,se),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,Pt),R.deleteBuffer(se),R.deleteSync(Ie),Pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,K=null,ut=0){const ot=Math.pow(2,-ut),nt=Math.floor(P.image.width*ot),Pt=Math.floor(P.image.height*ot),Bt=K!==null?K.x:0,Dt=K!==null?K.y:0;B.setTexture2D(P,0),R.copyTexSubImage2D(R.TEXTURE_2D,ut,0,0,Bt,Dt,nt,Pt),st.unbindTexture()};const um=R.createFramebuffer(),hm=R.createFramebuffer();this.copyTextureToTexture=function(P,K,ut=null,ot=null,nt=0,Pt=null){Pt===null&&(nt!==0?(ro("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Pt=nt,nt=0):Pt=0);let Bt,Dt,Vt,Ht,$t,Xt,se,_e,Ie;const Le=P.isCompressedTexture?P.mipmaps[Pt]:P.image;if(ut!==null)Bt=ut.max.x-ut.min.x,Dt=ut.max.y-ut.min.y,Vt=ut.isBox3?ut.max.z-ut.min.z:1,Ht=ut.min.x,$t=ut.min.y,Xt=ut.isBox3?ut.min.z:0;else{const yn=Math.pow(2,-nt);Bt=Math.floor(Le.width*yn),Dt=Math.floor(Le.height*yn),P.isDataArrayTexture?Vt=Le.depth:P.isData3DTexture?Vt=Math.floor(Le.depth*yn):Vt=1,Ht=0,$t=0,Xt=0}ot!==null?(se=ot.x,_e=ot.y,Ie=ot.z):(se=0,_e=0,Ie=0);const ye=wt.convert(K.format),qt=wt.convert(K.type);let ge;K.isData3DTexture?(B.setTexture3D(K,0),ge=R.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(B.setTexture2DArray(K,0),ge=R.TEXTURE_2D_ARRAY):(B.setTexture2D(K,0),ge=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,K.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,K.unpackAlignment);const he=R.getParameter(R.UNPACK_ROW_LENGTH),hn=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Ps=R.getParameter(R.UNPACK_SKIP_PIXELS),fn=R.getParameter(R.UNPACK_SKIP_ROWS),yr=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,Le.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Le.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ht),R.pixelStorei(R.UNPACK_SKIP_ROWS,$t),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Xt);const be=P.isDataArrayTexture||P.isData3DTexture,rn=K.isDataArrayTexture||K.isData3DTexture;if(P.isDepthTexture){const yn=y.get(P),Ze=y.get(K),on=y.get(yn.__renderTarget),Ha=y.get(Ze.__renderTarget);st.bindFramebuffer(R.READ_FRAMEBUFFER,on.__webglFramebuffer),st.bindFramebuffer(R.DRAW_FRAMEBUFFER,Ha.__webglFramebuffer);for(let is=0;is<Vt;is++)be&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,y.get(P).__webglTexture,nt,Xt+is),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,y.get(K).__webglTexture,Pt,Ie+is)),R.blitFramebuffer(Ht,$t,Bt,Dt,se,_e,Bt,Dt,R.DEPTH_BUFFER_BIT,R.NEAREST);st.bindFramebuffer(R.READ_FRAMEBUFFER,null),st.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(nt!==0||P.isRenderTargetTexture||y.has(P)){const yn=y.get(P),Ze=y.get(K);st.bindFramebuffer(R.READ_FRAMEBUFFER,um),st.bindFramebuffer(R.DRAW_FRAMEBUFFER,hm);for(let on=0;on<Vt;on++)be?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,yn.__webglTexture,nt,Xt+on):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,yn.__webglTexture,nt),rn?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ze.__webglTexture,Pt,Ie+on):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Ze.__webglTexture,Pt),nt!==0?R.blitFramebuffer(Ht,$t,Bt,Dt,se,_e,Bt,Dt,R.COLOR_BUFFER_BIT,R.NEAREST):rn?R.copyTexSubImage3D(ge,Pt,se,_e,Ie+on,Ht,$t,Bt,Dt):R.copyTexSubImage2D(ge,Pt,se,_e,Ht,$t,Bt,Dt);st.bindFramebuffer(R.READ_FRAMEBUFFER,null),st.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else rn?P.isDataTexture||P.isData3DTexture?R.texSubImage3D(ge,Pt,se,_e,Ie,Bt,Dt,Vt,ye,qt,Le.data):K.isCompressedArrayTexture?R.compressedTexSubImage3D(ge,Pt,se,_e,Ie,Bt,Dt,Vt,ye,Le.data):R.texSubImage3D(ge,Pt,se,_e,Ie,Bt,Dt,Vt,ye,qt,Le):P.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,Pt,se,_e,Bt,Dt,ye,qt,Le.data):P.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,Pt,se,_e,Le.width,Le.height,ye,Le.data):R.texSubImage2D(R.TEXTURE_2D,Pt,se,_e,Bt,Dt,ye,qt,Le);R.pixelStorei(R.UNPACK_ROW_LENGTH,he),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,hn),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ps),R.pixelStorei(R.UNPACK_SKIP_ROWS,fn),R.pixelStorei(R.UNPACK_SKIP_IMAGES,yr),Pt===0&&K.generateMipmaps&&R.generateMipmap(ge),st.unbindTexture()},this.initRenderTarget=function(P){y.get(P).__webglFramebuffer===void 0&&B.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?B.setTextureCube(P,0):P.isData3DTexture?B.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?B.setTexture2DArray(P,0):B.setTexture2D(P,0),st.unbindTexture()},this.resetState=function(){L=0,X=0,O=null,st.reset(),Ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ue._getDrawingBufferColorSpace(t),e.unpackColorSpace=ue._getUnpackColorSpace()}}class Fn{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){const t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){const t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){const e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new E);const e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new E);const n=this.elements,s=t.x,r=t.y,o=t.z;return e.x=n[0]*s+n[1]*r+n[2]*o,e.y=n[3]*s+n[4]*r+n[5]*o,e.z=n[6]*s+n[7]*r+n[8]*o,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new Fn);const n=this.elements,s=t.elements,r=e.elements,o=n[0],a=n[1],l=n[2],c=n[3],u=n[4],f=n[5],h=n[6],d=n[7],m=n[8],v=s[0],p=s[1],g=s[2],_=s[3],S=s[4],x=s[5],M=s[6],w=s[7],A=s[8];return r[0]=o*v+a*_+l*M,r[1]=o*p+a*S+l*w,r[2]=o*g+a*x+l*A,r[3]=c*v+u*_+f*M,r[4]=c*p+u*S+f*w,r[5]=c*g+u*x+f*A,r[6]=h*v+d*_+m*M,r[7]=h*p+d*S+m*w,r[8]=h*g+d*x+m*A,e}scale(t,e){e===void 0&&(e=new Fn);const n=this.elements,s=e.elements;for(let r=0;r!==3;r++)s[3*r+0]=t.x*n[3*r+0],s[3*r+1]=t.y*n[3*r+1],s[3*r+2]=t.z*n[3*r+2];return e}solve(t,e){e===void 0&&(e=new E);const n=3,s=4,r=[];let o,a;for(o=0;o<n*s;o++)r.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)r[o+s*a]=this.elements[o+3*a];r[3+4*0]=t.x,r[3+4*1]=t.y,r[3+4*2]=t.z;let l=3;const c=l;let u;const f=4;let h;do{if(o=c-l,r[o+s*o]===0){for(a=o+1;a<c;a++)if(r[o+s*a]!==0){u=f;do h=f-u,r[h+s*o]+=r[h+s*a];while(--u);break}}if(r[o+s*o]!==0)for(a=o+1;a<c;a++){const d=r[o+s*a]/r[o+s*o];u=f;do h=f-u,r[h+s*a]=h<=o?0:r[h+s*a]-r[h+s*o]*d;while(--u)}}while(--l);if(e.z=r[2*s+3]/r[2*s+2],e.y=(r[1*s+3]-r[1*s+2]*e.z)/r[1*s+1],e.x=(r[0*s+3]-r[0*s+2]*e.z-r[0*s+1]*e.y)/r[0*s+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="";const e=",";for(let n=0;n<9;n++)t+=this.elements[n]+e;return t}reverse(t){t===void 0&&(t=new Fn);const e=3,n=6,s=tE;let r,o;for(r=0;r<3;r++)for(o=0;o<3;o++)s[r+n*o]=this.elements[r+3*o];s[3+6*0]=1,s[3+6*1]=0,s[3+6*2]=0,s[4+6*0]=0,s[4+6*1]=1,s[4+6*2]=0,s[5+6*0]=0,s[5+6*1]=0,s[5+6*2]=1;let a=3;const l=a;let c;const u=n;let f;do{if(r=l-a,s[r+n*r]===0){for(o=r+1;o<l;o++)if(s[r+n*o]!==0){c=u;do f=u-c,s[f+n*r]+=s[f+n*o];while(--c);break}}if(s[r+n*r]!==0)for(o=r+1;o<l;o++){const h=s[r+n*o]/s[r+n*r];c=u;do f=u-c,s[f+n*o]=f<=r?0:s[f+n*o]-s[f+n*r]*h;while(--c)}}while(--a);r=2;do{o=r-1;do{const h=s[r+n*o]/s[r+n*r];c=n;do f=n-c,s[f+n*o]=s[f+n*o]-s[f+n*r]*h;while(--c)}while(o--)}while(--r);r=2;do{const h=1/s[r+n*r];c=n;do f=n-c,s[f+n*r]=s[f+n*r]*h;while(--c)}while(r--);r=2;do{o=2;do{if(f=s[e+o+n*r],isNaN(f)||f===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(r,o,f)}while(o--)}while(r--);return t}setRotationFromQuaternion(t){const e=t.x,n=t.y,s=t.z,r=t.w,o=e+e,a=n+n,l=s+s,c=e*o,u=e*a,f=e*l,h=n*a,d=n*l,m=s*l,v=r*o,p=r*a,g=r*l,_=this.elements;return _[3*0+0]=1-(h+m),_[3*0+1]=u-g,_[3*0+2]=f+p,_[3*1+0]=u+g,_[3*1+1]=1-(c+m),_[3*1+2]=d-v,_[3*2+0]=f-p,_[3*2+1]=d+v,_[3*2+2]=1-(c+h),this}transpose(t){t===void 0&&(t=new Fn);const e=this.elements,n=t.elements;let s;return n[0]=e[0],n[4]=e[4],n[8]=e[8],s=e[1],n[1]=e[3],n[3]=s,s=e[2],n[2]=e[6],n[6]=s,s=e[5],n[5]=e[7],n[7]=s,t}}const tE=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class E{constructor(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.z=n}cross(t,e){e===void 0&&(e=new E);const n=t.x,s=t.y,r=t.z,o=this.x,a=this.y,l=this.z;return e.x=a*r-l*s,e.y=l*n-o*r,e.z=o*s-a*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new E(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new E(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new Fn([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const t=this.x,e=this.y,n=this.z,s=Math.sqrt(t*t+e*e+n*n);if(s>0){const r=1/s;this.x*=r,this.y*=r,this.z*=r}else this.x=0,this.y=0,this.z=0;return s}unit(t){t===void 0&&(t=new E);const e=this.x,n=this.y,s=this.z;let r=Math.sqrt(e*e+n*n+s*s);return r>0?(r=1/r,t.x=e*r,t.y=n*r,t.z=s*r):(t.x=1,t.y=0,t.z=0),t}length(){const t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z;return Math.sqrt((r-e)*(r-e)+(o-n)*(o-n)+(a-s)*(a-s))}distanceSquared(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z;return(r-e)*(r-e)+(o-n)*(o-n)+(a-s)*(a-s)}scale(t,e){e===void 0&&(e=new E);const n=this.x,s=this.y,r=this.z;return e.x=t*n,e.y=t*s,e.z=t*r,e}vmul(t,e){return e===void 0&&(e=new E),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n){return n===void 0&&(n=new E),n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new E),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){const n=this.length();if(n>0){const s=eE,r=1/n;s.set(this.x*r,this.y*r,this.z*r);const o=nE;Math.abs(s.x)<.9?(o.set(1,0,0),s.cross(o,t)):(o.set(0,1,0),s.cross(o,t)),s.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){const s=this.x,r=this.y,o=this.z;n.x=s+(t.x-s)*e,n.y=r+(t.y-r)*e,n.z=o+(t.z-o)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(Df),Df.almostEquals(t,e)}clone(){return new E(this.x,this.y,this.z)}}E.ZERO=new E(0,0,0);E.UNIT_X=new E(1,0,0);E.UNIT_Y=new E(0,1,0);E.UNIT_Z=new E(0,0,1);const eE=new E,nE=new E,Df=new E;class _n{constructor(t){t===void 0&&(t={}),this.lowerBound=new E,this.upperBound=new E,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,s){const r=this.lowerBound,o=this.upperBound,a=n;r.copy(t[0]),a&&a.vmult(r,r),o.copy(r);for(let l=1;l<t.length;l++){let c=t[l];a&&(a.vmult(c,Nf),c=Nf),c.x>o.x&&(o.x=c.x),c.x<r.x&&(r.x=c.x),c.y>o.y&&(o.y=c.y),c.y<r.y&&(r.y=c.y),c.z>o.z&&(o.z=c.z),c.z<r.z&&(r.z=c.z)}return e&&(e.vadd(r,r),e.vadd(o,o)),s&&(r.x-=s,r.y-=s,r.z-=s,o.x+=s,o.y+=s,o.z+=s),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new _n().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){const e=this.lowerBound,n=this.upperBound,s=t.lowerBound,r=t.upperBound,o=s.x<=n.x&&n.x<=r.x||e.x<=r.x&&r.x<=n.x,a=s.y<=n.y&&n.y<=r.y||e.y<=r.y&&r.y<=n.y,l=s.z<=n.z&&n.z<=r.z||e.z<=r.z&&r.z<=n.z;return o&&a&&l}volume(){const t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){const e=this.lowerBound,n=this.upperBound,s=t.lowerBound,r=t.upperBound;return e.x<=s.x&&n.x>=r.x&&e.y<=s.y&&n.y>=r.y&&e.z<=s.z&&n.z>=r.z}getCorners(t,e,n,s,r,o,a,l){const c=this.lowerBound,u=this.upperBound;t.copy(c),e.set(u.x,c.y,c.z),n.set(u.x,u.y,c.z),s.set(c.x,u.y,u.z),r.set(u.x,c.y,u.z),o.set(c.x,u.y,c.z),a.set(c.x,c.y,u.z),l.copy(u)}toLocalFrame(t,e){const n=Ff,s=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],f=n[7];this.getCorners(s,r,o,a,l,c,u,f);for(let h=0;h!==8;h++){const d=n[h];t.pointToLocal(d,d)}return e.setFromPoints(n)}toWorldFrame(t,e){const n=Ff,s=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],f=n[7];this.getCorners(s,r,o,a,l,c,u,f);for(let h=0;h!==8;h++){const d=n[h];t.pointToWorld(d,d)}return e.setFromPoints(n)}overlapsRay(t){const{direction:e,from:n}=t,s=1/e.x,r=1/e.y,o=1/e.z,a=(this.lowerBound.x-n.x)*s,l=(this.upperBound.x-n.x)*s,c=(this.lowerBound.y-n.y)*r,u=(this.upperBound.y-n.y)*r,f=(this.lowerBound.z-n.z)*o,h=(this.upperBound.z-n.z)*o,d=Math.max(Math.max(Math.min(a,l),Math.min(c,u)),Math.min(f,h)),m=Math.min(Math.min(Math.max(a,l),Math.max(c,u)),Math.max(f,h));return!(m<0||d>m)}}const Nf=new E,Ff=[new E,new E,new E,new E,new E,new E,new E,new E];class Uf{constructor(){this.matrix=[]}get(t,e){let{index:n}=t,{index:s}=e;if(s>n){const r=s;s=n,n=r}return this.matrix[(n*(n+1)>>1)+s-1]}set(t,e,n){let{index:s}=t,{index:r}=e;if(r>s){const o=r;r=s,s=o}this.matrix[(s*(s+1)>>1)+r-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}}class jp{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;const n=this._listeners;if(n[t]===void 0)return this;const s=n[t].indexOf(e);return s!==-1&&n[t].splice(s,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;const n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let s=0,r=n.length;s<r;s++)n[s].call(this,t)}return this}}class Ne{constructor(t,e,n,s){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),s===void 0&&(s=1),this.x=t,this.y=e,this.z=n,this.w=s}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){const n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new E),this.normalize();const e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){const n=iE,s=sE;t.tangents(n,s),this.setFromAxisAngle(n,Math.PI)}else{const n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new Ne);const n=this.x,s=this.y,r=this.z,o=this.w,a=t.x,l=t.y,c=t.z,u=t.w;return e.x=n*u+o*a+s*c-r*l,e.y=s*u+o*l+r*a-n*c,e.z=r*u+o*c+n*l-s*a,e.w=o*u-n*a-s*l-r*c,e}inverse(t){t===void 0&&(t=new Ne);const e=this.x,n=this.y,s=this.z,r=this.w;this.conjugate(t);const o=1/(e*e+n*n+s*s+r*r);return t.x*=o,t.y*=o,t.z*=o,t.w*=o,t}conjugate(t){return t===void 0&&(t=new Ne),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){const t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new E);const n=t.x,s=t.y,r=t.z,o=this.x,a=this.y,l=this.z,c=this.w,u=c*n+a*r-l*s,f=c*s+l*n-o*r,h=c*r+o*s-a*n,d=-o*n-a*s-l*r;return e.x=u*c+d*-o+f*-l-h*-a,e.y=f*c+d*-a+h*-o-u*-l,e.z=h*c+d*-l+u*-a-f*-o,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let n,s,r;const o=this.x,a=this.y,l=this.z,c=this.w;switch(e){case"YZX":const u=o*a+l*c;if(u>.499&&(n=2*Math.atan2(o,c),s=Math.PI/2,r=0),u<-.499&&(n=-2*Math.atan2(o,c),s=-Math.PI/2,r=0),n===void 0){const f=o*o,h=a*a,d=l*l;n=Math.atan2(2*a*c-2*o*l,1-2*h-2*d),s=Math.asin(2*u),r=Math.atan2(2*o*c-2*a*l,1-2*f-2*d)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=s,t.x=r}setFromEuler(t,e,n,s){s===void 0&&(s="XYZ");const r=Math.cos(t/2),o=Math.cos(e/2),a=Math.cos(n/2),l=Math.sin(t/2),c=Math.sin(e/2),u=Math.sin(n/2);return s==="XYZ"?(this.x=l*o*a+r*c*u,this.y=r*c*a-l*o*u,this.z=r*o*u+l*c*a,this.w=r*o*a-l*c*u):s==="YXZ"?(this.x=l*o*a+r*c*u,this.y=r*c*a-l*o*u,this.z=r*o*u-l*c*a,this.w=r*o*a+l*c*u):s==="ZXY"?(this.x=l*o*a-r*c*u,this.y=r*c*a+l*o*u,this.z=r*o*u+l*c*a,this.w=r*o*a-l*c*u):s==="ZYX"?(this.x=l*o*a-r*c*u,this.y=r*c*a+l*o*u,this.z=r*o*u-l*c*a,this.w=r*o*a+l*c*u):s==="YZX"?(this.x=l*o*a+r*c*u,this.y=r*c*a+l*o*u,this.z=r*o*u-l*c*a,this.w=r*o*a-l*c*u):s==="XZY"&&(this.x=l*o*a-r*c*u,this.y=r*c*a-l*o*u,this.z=r*o*u+l*c*a,this.w=r*o*a+l*c*u),this}clone(){return new Ne(this.x,this.y,this.z,this.w)}slerp(t,e,n){n===void 0&&(n=new Ne);const s=this.x,r=this.y,o=this.z,a=this.w;let l=t.x,c=t.y,u=t.z,f=t.w,h,d,m,v,p;return d=s*l+r*c+o*u+a*f,d<0&&(d=-d,l=-l,c=-c,u=-u,f=-f),1-d>1e-6?(h=Math.acos(d),m=Math.sin(h),v=Math.sin((1-e)*h)/m,p=Math.sin(e*h)/m):(v=1-e,p=e),n.x=v*s+p*l,n.y=v*r+p*c,n.z=v*o+p*u,n.w=v*a+p*f,n}integrate(t,e,n,s){s===void 0&&(s=new Ne);const r=t.x*n.x,o=t.y*n.y,a=t.z*n.z,l=this.x,c=this.y,u=this.z,f=this.w,h=e*.5;return s.x+=h*(r*f+o*u-a*c),s.y+=h*(o*f+a*l-r*u),s.z+=h*(a*f+r*c-o*l),s.w+=h*(-r*l-o*c-a*u),s}}const iE=new E,sE=new E,rE={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class zt{constructor(t){t===void 0&&(t={}),this.id=zt.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,s){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}zt.idCounter=0;zt.types=rE;class fe{constructor(t){t===void 0&&(t={}),this.position=new E,this.quaternion=new Ne,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return fe.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return fe.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new E),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,s){return s===void 0&&(s=new E),n.vsub(t,s),e.conjugate(Of),Of.vmult(s,s),s}static pointToWorldFrame(t,e,n,s){return s===void 0&&(s=new E),e.vmult(n,s),s.vadd(t,s),s}static vectorToWorldFrame(t,e,n){return n===void 0&&(n=new E),t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,s){return s===void 0&&(s=new E),e.w*=-1,e.vmult(n,s),e.w*=-1,s}}const Of=new Ne;class Kr extends zt{constructor(t){t===void 0&&(t={});const{vertices:e=[],faces:n=[],normals:s=[],axes:r,boundingSphereRadius:o}=t;super({type:zt.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=s,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=r?r.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;const s=new E;for(let r=0;r!==t.length;r++){const o=t[r],a=o.length;for(let l=0;l!==a;l++){const c=(l+1)%a;e[o[l]].vsub(e[o[c]],s),s.normalize();let u=!1;for(let f=0;f!==n.length;f++)if(n[f].almostEquals(s)||n[f].almostEquals(s)){u=!0;break}u||n.push(s.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let s=0;s<this.faces[t].length;s++)if(!this.vertices[this.faces[t][s]])throw new Error(`Vertex ${this.faces[t][s]} not found!`);const e=this.faceNormals[t]||new E;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;const n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let s=0;s<this.faces[t].length;s++)console.warn(`.vertices[${this.faces[t][s]}] = Vec3(${this.vertices[this.faces[t][s]].toString()})`)}}}getFaceNormal(t,e){const n=this.faces[t],s=this.vertices[n[0]],r=this.vertices[n[1]],o=this.vertices[n[2]];Kr.computeNormal(s,r,o,e)}static computeNormal(t,e,n,s){const r=new E,o=new E;e.vsub(t,o),n.vsub(e,r),r.cross(o,s),s.isZero()||s.normalize()}clipAgainstHull(t,e,n,s,r,o,a,l,c){const u=new E;let f=-1,h=-Number.MAX_VALUE;for(let m=0;m<n.faces.length;m++){u.copy(n.faceNormals[m]),r.vmult(u,u);const v=u.dot(o);v>h&&(h=v,f=m)}const d=[];for(let m=0;m<n.faces[f].length;m++){const v=n.vertices[n.faces[f][m]],p=new E;p.copy(v),r.vmult(p,p),s.vadd(p,p),d.push(p)}f>=0&&this.clipFaceAgainstHull(o,t,e,d,a,l,c)}findSeparatingAxis(t,e,n,s,r,o,a,l){const c=new E,u=new E,f=new E,h=new E,d=new E,m=new E;let v=Number.MAX_VALUE;const p=this;if(p.uniqueAxes)for(let g=0;g!==p.uniqueAxes.length;g++){n.vmult(p.uniqueAxes[g],c);const _=p.testSepAxis(c,t,e,n,s,r);if(_===!1)return!1;_<v&&(v=_,o.copy(c))}else{const g=a?a.length:p.faces.length;for(let _=0;_<g;_++){const S=a?a[_]:_;c.copy(p.faceNormals[S]),n.vmult(c,c);const x=p.testSepAxis(c,t,e,n,s,r);if(x===!1)return!1;x<v&&(v=x,o.copy(c))}}if(t.uniqueAxes)for(let g=0;g!==t.uniqueAxes.length;g++){r.vmult(t.uniqueAxes[g],u);const _=p.testSepAxis(u,t,e,n,s,r);if(_===!1)return!1;_<v&&(v=_,o.copy(u))}else{const g=l?l.length:t.faces.length;for(let _=0;_<g;_++){const S=l?l[_]:_;u.copy(t.faceNormals[S]),r.vmult(u,u);const x=p.testSepAxis(u,t,e,n,s,r);if(x===!1)return!1;x<v&&(v=x,o.copy(u))}}for(let g=0;g!==p.uniqueEdges.length;g++){n.vmult(p.uniqueEdges[g],h);for(let _=0;_!==t.uniqueEdges.length;_++)if(r.vmult(t.uniqueEdges[_],d),h.cross(d,m),!m.almostZero()){m.normalize();const S=p.testSepAxis(m,t,e,n,s,r);if(S===!1)return!1;S<v&&(v=S,o.copy(m))}}return s.vsub(e,f),f.dot(o)>0&&o.negate(o),!0}testSepAxis(t,e,n,s,r,o){const a=this;Kr.project(a,t,n,s,Ul),Kr.project(e,t,r,o,Ol);const l=Ul[0],c=Ul[1],u=Ol[0],f=Ol[1];if(l<f||u<c)return!1;const h=l-f,d=u-c;return h<d?h:d}calculateLocalInertia(t,e){const n=new E,s=new E;this.computeLocalAABB(s,n);const r=n.x-s.x,o=n.y-s.y,a=n.z-s.z;e.x=1/12*t*(2*o*2*o+2*a*2*a),e.y=1/12*t*(2*r*2*r+2*a*2*a),e.z=1/12*t*(2*o*2*o+2*r*2*r)}getPlaneConstantOfFace(t){const e=this.faces[t],n=this.faceNormals[t],s=this.vertices[e[0]];return-n.dot(s)}clipFaceAgainstHull(t,e,n,s,r,o,a){const l=new E,c=new E,u=new E,f=new E,h=new E,d=new E,m=new E,v=new E,p=this,g=[],_=s,S=g;let x=-1,M=Number.MAX_VALUE;for(let T=0;T<p.faces.length;T++){l.copy(p.faceNormals[T]),n.vmult(l,l);const L=l.dot(t);L<M&&(M=L,x=T)}if(x<0)return;const w=p.faces[x];w.connectedFaces=[];for(let T=0;T<p.faces.length;T++)for(let L=0;L<p.faces[T].length;L++)w.indexOf(p.faces[T][L])!==-1&&T!==x&&w.connectedFaces.indexOf(T)===-1&&w.connectedFaces.push(T);const A=w.length;for(let T=0;T<A;T++){const L=p.vertices[w[T]],X=p.vertices[w[(T+1)%A]];L.vsub(X,c),u.copy(c),n.vmult(u,u),e.vadd(u,u),f.copy(this.faceNormals[x]),n.vmult(f,f),e.vadd(f,f),u.cross(f,h),h.negate(h),d.copy(L),n.vmult(d,d),e.vadd(d,d);const O=w.connectedFaces[T];m.copy(this.faceNormals[O]);const q=this.getPlaneConstantOfFace(O);v.copy(m),n.vmult(v,v);const V=q-v.dot(e);for(this.clipFaceAgainstPlane(_,S,v,V);_.length;)_.shift();for(;S.length;)_.push(S.shift())}m.copy(this.faceNormals[x]);const F=this.getPlaneConstantOfFace(x);v.copy(m),n.vmult(v,v);const b=F-v.dot(e);for(let T=0;T<_.length;T++){let L=v.dot(_[T])+b;if(L<=r&&(console.log(`clamped: depth=${L} to minDist=${r}`),L=r),L<=o){const X=_[T];if(L<=1e-6){const O={point:X,normal:v,depth:L};a.push(O)}}}}clipFaceAgainstPlane(t,e,n,s){let r,o;const a=t.length;if(a<2)return e;let l=t[t.length-1],c=t[0];r=n.dot(l)+s;for(let u=0;u<a;u++){if(c=t[u],o=n.dot(c)+s,r<0)if(o<0){const f=new E;f.copy(c),e.push(f)}else{const f=new E;l.lerp(c,r/(r-o),f),e.push(f)}else if(o<0){const f=new E;l.lerp(c,r/(r-o),f),e.push(f),e.push(c)}l=c,r=o}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new E);const n=this.vertices,s=this.worldVertices;for(let r=0;r!==this.vertices.length;r++)e.vmult(n[r],s[r]),t.vadd(s[r],s[r]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){const n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let s=0;s<this.vertices.length;s++){const r=n[s];r.x<t.x?t.x=r.x:r.x>e.x&&(e.x=r.x),r.y<t.y?t.y=r.y:r.y>e.y&&(e.y=r.y),r.z<t.z?t.z=r.z:r.z>e.z&&(e.z=r.z)}}computeWorldFaceNormals(t){const e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new E);const n=this.faceNormals,s=this.worldFaceNormals;for(let r=0;r!==e;r++)t.vmult(n[r],s[r]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0;const e=this.vertices;for(let n=0;n!==e.length;n++){const s=e[n].lengthSquared();s>t&&(t=s)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,s){const r=this.vertices;let o,a,l,c,u,f,h=new E;for(let d=0;d<r.length;d++){h.copy(r[d]),e.vmult(h,h),t.vadd(h,h);const m=h;(o===void 0||m.x<o)&&(o=m.x),(c===void 0||m.x>c)&&(c=m.x),(a===void 0||m.y<a)&&(a=m.y),(u===void 0||m.y>u)&&(u=m.y),(l===void 0||m.z<l)&&(l=m.z),(f===void 0||m.z>f)&&(f=m.z)}n.set(o,a,l),s.set(c,u,f)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new E);const e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){const n=this.vertices.length,s=this.vertices;if(e){for(let r=0;r<n;r++){const o=s[r];e.vmult(o,o)}for(let r=0;r<this.faceNormals.length;r++){const o=this.faceNormals[r];e.vmult(o,o)}}if(t)for(let r=0;r<n;r++){const o=s[r];o.vadd(t,o)}}pointIsInside(t){const e=this.vertices,n=this.faces,s=this.faceNormals,r=new E;this.getAveragePointLocal(r);for(let o=0;o<this.faces.length;o++){let a=s[o];const l=e[n[o][0]],c=new E;t.vsub(l,c);const u=a.dot(c),f=new E;r.vsub(l,f);const h=a.dot(f);if(u<0&&h>0||u>0&&h<0)return!1}return-1}static project(t,e,n,s,r){const o=t.vertices.length,a=oE;let l=0,c=0;const u=aE,f=t.vertices;u.setZero(),fe.vectorToLocalFrame(n,s,e,a),fe.pointToLocalFrame(n,s,u,u);const h=u.dot(a);c=l=f[0].dot(a);for(let d=1;d<o;d++){const m=f[d].dot(a);m>l&&(l=m),m<c&&(c=m)}if(c-=h,l-=h,c>l){const d=c;c=l,l=d}r[0]=l,r[1]=c}}const Ul=[],Ol=[];new E;const oE=new E,aE=new E;class Pn extends zt{constructor(t){super({type:zt.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,s=E,r=[new s(-t,-e,-n),new s(t,-e,-n),new s(t,e,-n),new s(-t,e,-n),new s(-t,-e,n),new s(t,-e,n),new s(t,e,n),new s(-t,e,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new s(0,0,1),new s(0,1,0),new s(1,0,0)],l=new Kr({vertices:r,faces:o,axes:a});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new E),Pn.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){const s=t;n.x=1/12*e*(2*s.y*2*s.y+2*s.z*2*s.z),n.y=1/12*e*(2*s.x*2*s.x+2*s.z*2*s.z),n.z=1/12*e*(2*s.y*2*s.y+2*s.x*2*s.x)}getSideNormals(t,e){const n=t,s=this.halfExtents;if(n[0].set(s.x,0,0),n[1].set(0,s.y,0),n[2].set(0,0,s.z),n[3].set(-s.x,0,0),n[4].set(0,-s.y,0),n[5].set(0,0,-s.z),e!==void 0)for(let r=0;r!==n.length;r++)e.vmult(n[r],n[r]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){const s=this.halfExtents,r=[[s.x,s.y,s.z],[-s.x,s.y,s.z],[-s.x,-s.y,s.z],[-s.x,-s.y,-s.z],[s.x,-s.y,-s.z],[s.x,s.y,-s.z],[-s.x,s.y,-s.z],[s.x,-s.y,s.z]];for(let o=0;o<r.length;o++)Wi.set(r[o][0],r[o][1],r[o][2]),e.vmult(Wi,Wi),t.vadd(Wi,Wi),n(Wi.x,Wi.y,Wi.z)}calculateWorldAABB(t,e,n,s){const r=this.halfExtents;Hn[0].set(r.x,r.y,r.z),Hn[1].set(-r.x,r.y,r.z),Hn[2].set(-r.x,-r.y,r.z),Hn[3].set(-r.x,-r.y,-r.z),Hn[4].set(r.x,-r.y,-r.z),Hn[5].set(r.x,r.y,-r.z),Hn[6].set(-r.x,r.y,-r.z),Hn[7].set(r.x,-r.y,r.z);const o=Hn[0];e.vmult(o,o),t.vadd(o,o),s.copy(o),n.copy(o);for(let a=1;a<8;a++){const l=Hn[a];e.vmult(l,l),t.vadd(l,l);const c=l.x,u=l.y,f=l.z;c>s.x&&(s.x=c),u>s.y&&(s.y=u),f>s.z&&(s.z=f),c<n.x&&(n.x=c),u<n.y&&(n.y=u),f<n.z&&(n.z=f)}}}const Wi=new E,Hn=[new E,new E,new E,new E,new E,new E,new E,new E],Uu={DYNAMIC:1,STATIC:2,KINEMATIC:4},Ou={AWAKE:0,SLEEPY:1,SLEEPING:2};class Ut extends jp{constructor(t){t===void 0&&(t={}),super(),this.id=Ut.idCounter++,this.index=-1,this.world=null,this.vlambda=new E,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new E,this.previousPosition=new E,this.interpolatedPosition=new E,this.initPosition=new E,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new E,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new E,this.force=new E;const e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?Ut.STATIC:Ut.DYNAMIC,typeof t.type==typeof Ut.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=Ut.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new E,this.quaternion=new Ne,this.initQuaternion=new Ne,this.previousQuaternion=new Ne,this.interpolatedQuaternion=new Ne,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new E,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new E,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new E,this.invInertia=new E,this.invInertiaWorld=new Fn,this.invMassSolve=0,this.invInertiaSolve=new E,this.invInertiaWorldSolve=new Fn,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new E(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new E(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new _n,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new E,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){const t=this.sleepState;this.sleepState=Ut.AWAKE,this.wakeUpAfterNarrowphase=!1,t===Ut.SLEEPING&&this.dispatchEvent(Ut.wakeupEvent)}sleep(){this.sleepState=Ut.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){const e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),s=this.sleepSpeedLimit**2;e===Ut.AWAKE&&n<s?(this.sleepState=Ut.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(Ut.sleepyEvent)):e===Ut.SLEEPY&&n>s?this.wakeUp():e===Ut.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(Ut.sleepEvent))}}updateSolveMassProperties(){this.sleepState===Ut.SLEEPING||this.type===Ut.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new E),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new E),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new E),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new E),this.quaternion.vmult(t,e),e}addShape(t,e,n){const s=new E,r=new Ne;return e&&s.copy(e),n&&r.copy(n),this.shapes.push(t),this.shapeOffsets.push(s),this.shapeOrientations.push(r),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){const e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){const t=this.shapes,e=this.shapeOffsets,n=t.length;let s=0;for(let r=0;r!==n;r++){const o=t[r];o.updateBoundingSphereRadius();const a=e[r].length(),l=o.boundingSphereRadius;a+l>s&&(s=a+l)}this.boundingRadius=s}updateAABB(){const t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,s=t.length,r=lE,o=cE,a=this.quaternion,l=this.aabb,c=uE;for(let u=0;u!==s;u++){const f=t[u];a.vmult(e[u],r),r.vadd(this.position,r),a.mult(n[u],o),f.calculateWorldAABB(r,o,c.lowerBound,c.upperBound),u===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){const e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){const n=hE,s=fE;n.setRotationFromQuaternion(this.quaternion),n.transpose(s),n.scale(e,n),n.mmult(s,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new E),this.type!==Ut.DYNAMIC)return;this.sleepState===Ut.SLEEPING&&this.wakeUp();const n=dE;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new E),this.type!==Ut.DYNAMIC)return;const n=pE,s=mE;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,s),this.applyForce(n,s)}applyTorque(t){this.type===Ut.DYNAMIC&&(this.sleepState===Ut.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new E),this.type!==Ut.DYNAMIC)return;this.sleepState===Ut.SLEEPING&&this.wakeUp();const n=e,s=gE;s.copy(t),s.scale(this.invMass,s),this.velocity.vadd(s,this.velocity);const r=vE;n.cross(t,r),this.invInertiaWorld.vmult(r,r),this.angularVelocity.vadd(r,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new E),this.type!==Ut.DYNAMIC)return;const n=xE,s=_E;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,s),this.applyImpulse(n,s)}updateMassProperties(){const t=yE;this.invMass=this.mass>0?1/this.mass:0;const e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),Pn.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){const n=new E;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===Ut.DYNAMIC||this.type===Ut.KINEMATIC)||this.sleepState===Ut.SLEEPING)return;const s=this.velocity,r=this.angularVelocity,o=this.position,a=this.force,l=this.torque,c=this.quaternion,u=this.invMass,f=this.invInertiaWorld,h=this.linearFactor,d=u*t;s.x+=a.x*d*h.x,s.y+=a.y*d*h.y,s.z+=a.z*d*h.z;const m=f.elements,v=this.angularFactor,p=l.x*v.x,g=l.y*v.y,_=l.z*v.z;r.x+=t*(m[0]*p+m[1]*g+m[2]*_),r.y+=t*(m[3]*p+m[4]*g+m[5]*_),r.z+=t*(m[6]*p+m[7]*g+m[8]*_),o.x+=s.x*t,o.y+=s.y*t,o.z+=s.z*t,c.integrate(this.angularVelocity,t,this.angularFactor,c),e&&(n?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}Ut.idCounter=0;Ut.COLLIDE_EVENT_NAME="collide";Ut.DYNAMIC=Uu.DYNAMIC;Ut.STATIC=Uu.STATIC;Ut.KINEMATIC=Uu.KINEMATIC;Ut.AWAKE=Ou.AWAKE;Ut.SLEEPY=Ou.SLEEPY;Ut.SLEEPING=Ou.SLEEPING;Ut.wakeupEvent={type:"wakeup"};Ut.sleepyEvent={type:"sleepy"};Ut.sleepEvent={type:"sleep"};const lE=new E,cE=new Ne,uE=new _n,hE=new Fn,fE=new Fn;new Fn;const dE=new E,pE=new E,mE=new E,gE=new E,vE=new E,xE=new E,_E=new E,yE=new E;class SE{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!(!(t.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&t.collisionFilterMask)||(t.type&Ut.STATIC||t.sleepState===Ut.SLEEPING)&&(e.type&Ut.STATIC||e.sleepState===Ut.SLEEPING))}intersectionTest(t,e,n,s){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,s):this.doBoundingSphereBroadphase(t,e,n,s)}doBoundingSphereBroadphase(t,e,n,s){const r=ME;e.position.vsub(t.position,r);const o=(t.boundingRadius+e.boundingRadius)**2;r.lengthSquared()<o&&(n.push(t),s.push(e))}doBoundingBoxBroadphase(t,e,n,s){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),s.push(e))}makePairsUnique(t,e){const n=bE,s=wE,r=EE,o=t.length;for(let a=0;a!==o;a++)s[a]=t[a],r[a]=e[a];t.length=0,e.length=0;for(let a=0;a!==o;a++){const l=s[a].id,c=r[a].id,u=l<c?`${l},${c}`:`${c},${l}`;n[u]=a,n.keys.push(u)}for(let a=0;a!==n.keys.length;a++){const l=n.keys.pop(),c=n[l];t.push(s[c]),e.push(r[c]),delete n[l]}}setWorld(t){}static boundingSphereCheck(t,e){const n=new E;t.position.vsub(e.position,n);const s=t.shapes[0],r=e.shapes[0];return Math.pow(s.boundingSphereRadius+r.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const ME=new E;new E;new Ne;new E;const bE={keys:[]},wE=[],EE=[];new E;new E;new E;class TE extends SE{constructor(){super()}collisionPairs(t,e,n){const s=t.bodies,r=s.length;let o,a;for(let l=0;l!==r;l++)for(let c=0;c!==l;c++)o=s[l],a=s[c],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,e,n)}aabbQuery(t,e,n){n===void 0&&(n=[]);for(let s=0;s<t.bodies.length;s++){const r=t.bodies[s];r.aabbNeedsUpdate&&r.updateAABB(),r.aabb.overlaps(e)&&n.push(r)}return n}}class wa{constructor(){this.rayFromWorld=new E,this.rayToWorld=new E,this.hitNormalWorld=new E,this.hitPointWorld=new E,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,s,r,o,a){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(s),this.shape=r,this.body=o,this.distance=a}}let Kp,Zp,Jp,Qp,tm,em,nm;const Bu={CLOSEST:1,ANY:2,ALL:4};Kp=zt.types.SPHERE;Zp=zt.types.PLANE;Jp=zt.types.BOX;Qp=zt.types.CYLINDER;tm=zt.types.CONVEXPOLYHEDRON;em=zt.types.HEIGHTFIELD;nm=zt.types.TRIMESH;class Ue{get[Kp](){return this._intersectSphere}get[Zp](){return this._intersectPlane}get[Jp](){return this._intersectBox}get[Qp](){return this._intersectConvex}get[tm](){return this._intersectConvex}get[em](){return this._intersectHeightfield}get[nm](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new E),e===void 0&&(e=new E),this.from=t.clone(),this.to=e.clone(),this.direction=new E,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=Ue.ANY,this.result=new wa,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||Ue.ANY,this.result=e.result||new wa,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Bf),Bl.length=0,t.broadphase.aabbQuery(t,Bf,Bl),this.intersectBodies(Bl),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!t.collisionResponse||!(this.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&this.collisionFilterMask))return;const s=AE,r=CE;for(let o=0,a=t.shapes.length;o<a;o++){const l=t.shapes[o];if(!(n&&!l.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[o],r),t.quaternion.vmult(t.shapeOffsets[o],s),s.vadd(t.position,s),this.intersectShape(l,r,s,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,s=t.length;!this.result.shouldStop&&n<s;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,s){const r=this.from;if(GE(r,this.direction,n)>t.boundingSphereRadius)return;const a=this[t.type];a&&a.call(this,t,e,n,s,t)}_intersectBox(t,e,n,s,r){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,s,r)}_intersectPlane(t,e,n,s,r){const o=this.from,a=this.to,l=this.direction,c=new E(0,0,1);e.vmult(c,c);const u=new E;o.vsub(n,u);const f=u.dot(c);a.vsub(n,u);const h=u.dot(c);if(f*h>0||o.distanceTo(a)<f)return;const d=c.dot(l);if(Math.abs(d)<this.precision)return;const m=new E,v=new E,p=new E;o.vsub(n,m);const g=-c.dot(m)/d;l.scale(g,v),o.vadd(v,p),this.reportIntersection(c,p,r,s,-1)}getAABB(t){const{lowerBound:e,upperBound:n}=t,s=this.to,r=this.from;e.x=Math.min(s.x,r.x),e.y=Math.min(s.y,r.y),e.z=Math.min(s.z,r.z),n.x=Math.max(s.x,r.x),n.y=Math.max(s.y,r.y),n.z=Math.max(s.z,r.z)}_intersectHeightfield(t,e,n,s,r){t.data,t.elementSize;const o=RE;o.from.copy(this.from),o.to.copy(this.to),fe.pointToLocalFrame(n,e,o.from,o.from),fe.pointToLocalFrame(n,e,o.to,o.to),o.updateDirection();const a=PE;let l,c,u,f;l=c=0,u=f=t.data.length-1;const h=new _n;o.getAABB(h),t.getIndexOfPosition(h.lowerBound.x,h.lowerBound.y,a,!0),l=Math.max(l,a[0]),c=Math.max(c,a[1]),t.getIndexOfPosition(h.upperBound.x,h.upperBound.y,a,!0),u=Math.min(u,a[0]+1),f=Math.min(f,a[1]+1);for(let d=l;d<u;d++)for(let m=c;m<f;m++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(d,m,h),!!h.overlapsRay(o)){if(t.getConvexTrianglePillar(d,m,!1),fe.pointToWorldFrame(n,e,t.pillarOffset,$o),this._intersectConvex(t.pillarConvex,e,$o,s,r,zf),this.result.shouldStop)return;t.getConvexTrianglePillar(d,m,!0),fe.pointToWorldFrame(n,e,t.pillarOffset,$o),this._intersectConvex(t.pillarConvex,e,$o,s,r,zf)}}}_intersectSphere(t,e,n,s,r){const o=this.from,a=this.to,l=t.radius,c=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,u=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),f=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-l**2,h=u**2-4*c*f,d=IE,m=LE;if(!(h<0))if(h===0)o.lerp(a,h,d),d.vsub(n,m),m.normalize(),this.reportIntersection(m,d,r,s,-1);else{const v=(-u-Math.sqrt(h))/(2*c),p=(-u+Math.sqrt(h))/(2*c);if(v>=0&&v<=1&&(o.lerp(a,v,d),d.vsub(n,m),m.normalize(),this.reportIntersection(m,d,r,s,-1)),this.result.shouldStop)return;p>=0&&p<=1&&(o.lerp(a,p,d),d.vsub(n,m),m.normalize(),this.reportIntersection(m,d,r,s,-1))}}_intersectConvex(t,e,n,s,r,o){const a=DE,l=Vf,c=o&&o.faceList||null,u=t.faces,f=t.vertices,h=t.faceNormals,d=this.direction,m=this.from,v=this.to,p=m.distanceTo(v),g=c?c.length:u.length,_=this.result;for(let S=0;!_.shouldStop&&S<g;S++){const x=c?c[S]:S,M=u[x],w=h[x],A=e,F=n;l.copy(f[M[0]]),A.vmult(l,l),l.vadd(F,l),l.vsub(m,l),A.vmult(w,a);const b=d.dot(a);if(Math.abs(b)<this.precision)continue;const T=a.dot(l)/b;if(!(T<0)){d.scale(T,ln),ln.vadd(m,ln),Rn.copy(f[M[0]]),A.vmult(Rn,Rn),F.vadd(Rn,Rn);for(let L=1;!_.shouldStop&&L<M.length-1;L++){Wn.copy(f[M[L]]),Xn.copy(f[M[L+1]]),A.vmult(Wn,Wn),A.vmult(Xn,Xn),F.vadd(Wn,Wn),F.vadd(Xn,Xn);const X=ln.distanceTo(m);!(Ue.pointInTriangle(ln,Rn,Wn,Xn)||Ue.pointInTriangle(ln,Wn,Rn,Xn))||X>p||this.reportIntersection(a,ln,r,s,x)}}}}_intersectTrimesh(t,e,n,s,r,o){const a=NE,l=VE,c=kE,u=Vf,f=FE,h=UE,d=OE,m=zE,v=BE,p=t.indices;t.vertices;const g=this.from,_=this.to,S=this.direction;c.position.copy(n),c.quaternion.copy(e),fe.vectorToLocalFrame(n,e,S,f),fe.pointToLocalFrame(n,e,g,h),fe.pointToLocalFrame(n,e,_,d),d.x*=t.scale.x,d.y*=t.scale.y,d.z*=t.scale.z,h.x*=t.scale.x,h.y*=t.scale.y,h.z*=t.scale.z,d.vsub(h,f),f.normalize();const x=h.distanceSquared(d);t.tree.rayQuery(this,c,l);for(let M=0,w=l.length;!this.result.shouldStop&&M!==w;M++){const A=l[M];t.getNormal(A,a),t.getVertex(p[A*3],Rn),Rn.vsub(h,u);const F=f.dot(a),b=a.dot(u)/F;if(b<0)continue;f.scale(b,ln),ln.vadd(h,ln),t.getVertex(p[A*3+1],Wn),t.getVertex(p[A*3+2],Xn);const T=ln.distanceSquared(h);!(Ue.pointInTriangle(ln,Wn,Rn,Xn)||Ue.pointInTriangle(ln,Rn,Wn,Xn))||T>x||(fe.vectorToWorldFrame(e,a,v),fe.pointToWorldFrame(n,e,ln,m),this.reportIntersection(v,m,r,s,A))}l.length=0}reportIntersection(t,e,n,s,r){const o=this.from,a=this.to,l=o.distanceTo(e),c=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(c.hitFaceIndex=typeof r<"u"?r:-1,this.mode){case Ue.ALL:this.hasHit=!0,c.set(o,a,t,e,n,s,l),c.hasHit=!0,this.callback(c);break;case Ue.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(o,a,t,e,n,s,l));break;case Ue.ANY:this.hasHit=!0,c.hasHit=!0,c.set(o,a,t,e,n,s,l),c.shouldStop=!0;break}}static pointInTriangle(t,e,n,s){s.vsub(e,vs),n.vsub(e,Ir),t.vsub(e,zl);const r=vs.dot(vs),o=vs.dot(Ir),a=vs.dot(zl),l=Ir.dot(Ir),c=Ir.dot(zl);let u,f;return(u=l*a-o*c)>=0&&(f=r*c-o*a)>=0&&u+f<r*l-o*o}}Ue.CLOSEST=Bu.CLOSEST;Ue.ANY=Bu.ANY;Ue.ALL=Bu.ALL;const Bf=new _n,Bl=[],Ir=new E,zl=new E,AE=new E,CE=new Ne,ln=new E,Rn=new E,Wn=new E,Xn=new E;new E;new wa;const zf={faceList:[0]},$o=new E,RE=new Ue,PE=[],IE=new E,LE=new E,DE=new E;new E;new E;const Vf=new E,NE=new E,FE=new E,UE=new E,OE=new E,BE=new E,zE=new E;new _n;const VE=[],kE=new fe,vs=new E,Yo=new E;function GE(i,t,e){e.vsub(i,vs);const n=vs.dot(t);return t.scale(n,Yo),Yo.vadd(i,Yo),e.distanceTo(Yo)}class HE{static defaults(t,e){t===void 0&&(t={});for(let n in e)n in t||(t[n]=e[n]);return t}}class kf{constructor(){this.spatial=new E,this.rotational=new E}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}}class xo{constructor(t,e,n,s){n===void 0&&(n=-1e6),s===void 0&&(s=1e6),this.id=xo.idCounter++,this.minForce=n,this.maxForce=s,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new kf,this.jacobianElementB=new kf,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){const s=e,r=t,o=n;this.a=4/(o*(1+4*s)),this.b=4*s/(1+4*s),this.eps=4/(o*o*r*(1+4*s))}computeB(t,e,n){const s=this.computeGW(),r=this.computeGq(),o=this.computeGiMf();return-r*t-s*e-o*n}computeGq(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,r=n.position,o=s.position;return t.spatial.dot(r)+e.spatial.dot(o)}computeGW(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,r=n.velocity,o=s.velocity,a=n.angularVelocity,l=s.angularVelocity;return t.multiplyVectors(r,a)+e.multiplyVectors(o,l)}computeGWlambda(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,r=n.vlambda,o=s.vlambda,a=n.wlambda,l=s.wlambda;return t.multiplyVectors(r,a)+e.multiplyVectors(o,l)}computeGiMf(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,r=n.force,o=n.torque,a=s.force,l=s.torque,c=n.invMassSolve,u=s.invMassSolve;return r.scale(c,Gf),a.scale(u,Hf),n.invInertiaWorldSolve.vmult(o,Wf),s.invInertiaWorldSolve.vmult(l,Xf),t.multiplyVectors(Gf,Wf)+e.multiplyVectors(Hf,Xf)}computeGiMGt(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,s=this.bj,r=n.invMassSolve,o=s.invMassSolve,a=n.invInertiaWorldSolve,l=s.invInertiaWorldSolve;let c=r+o;return a.vmult(t.rotational,jo),c+=jo.dot(t.rotational),l.vmult(e.rotational,jo),c+=jo.dot(e.rotational),c}addToWlambda(t){const e=this.jacobianElementA,n=this.jacobianElementB,s=this.bi,r=this.bj,o=WE;s.vlambda.addScaledVector(s.invMassSolve*t,e.spatial,s.vlambda),r.vlambda.addScaledVector(r.invMassSolve*t,n.spatial,r.vlambda),s.invInertiaWorldSolve.vmult(e.rotational,o),s.wlambda.addScaledVector(t,o,s.wlambda),r.invInertiaWorldSolve.vmult(n.rotational,o),r.wlambda.addScaledVector(t,o,r.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}xo.idCounter=0;const Gf=new E,Hf=new E,Wf=new E,Xf=new E,jo=new E,WE=new E;class XE extends xo{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,0,n),this.restitution=0,this.ri=new E,this.rj=new E,this.ni=new E}computeB(t){const e=this.a,n=this.b,s=this.bi,r=this.bj,o=this.ri,a=this.rj,l=qE,c=$E,u=s.velocity,f=s.angularVelocity;s.force,s.torque;const h=r.velocity,d=r.angularVelocity;r.force,r.torque;const m=YE,v=this.jacobianElementA,p=this.jacobianElementB,g=this.ni;o.cross(g,l),a.cross(g,c),g.negate(v.spatial),l.negate(v.rotational),p.spatial.copy(g),p.rotational.copy(c),m.copy(r.position),m.vadd(a,m),m.vsub(s.position,m),m.vsub(o,m);const _=g.dot(m),S=this.restitution+1,x=S*h.dot(g)-S*u.dot(g)+d.dot(c)-f.dot(l),M=this.computeGiMf();return-_*e-x*n-t*M}getImpactVelocityAlongNormal(){const t=jE,e=KE,n=ZE,s=JE,r=QE;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,s),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(s,e),t.vsub(e,r),this.ni.dot(r)}}const qE=new E,$E=new E,YE=new E,jE=new E,KE=new E,ZE=new E,JE=new E,QE=new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;class qf extends xo{constructor(t,e,n){super(t,e,-n,n),this.ri=new E,this.rj=new E,this.t=new E}computeB(t){this.a;const e=this.b;this.bi,this.bj;const n=this.ri,s=this.rj,r=tT,o=eT,a=this.t;n.cross(a,r),s.cross(a,o);const l=this.jacobianElementA,c=this.jacobianElementB;a.negate(l.spatial),r.negate(l.rotational),c.spatial.copy(a),c.rotational.copy(o);const u=this.computeGW(),f=this.computeGiMf();return-u*e-t*f}}const tT=new E,eT=new E;class bs{constructor(t,e,n){n=HE.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=bs.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}bs.idCounter=0;class ws{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=ws.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}}ws.idCounter=0;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new Ue;new E;new E;new E;new E(1,0,0),new E(0,1,0),new E(0,0,1);new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;class nT extends zt{constructor(){super({type:zt.types.PLANE}),this.worldNormal=new E,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(t){const e=this.worldNormal;e.set(0,0,1),t.vmult(e,e),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(t,e){return e===void 0&&(e=new E),e}volume(){return Number.MAX_VALUE}calculateWorldAABB(t,e,n,s){xi.set(0,0,1),e.vmult(xi,xi);const r=Number.MAX_VALUE;n.set(-r,-r,-r),s.set(r,r,r),xi.x===1?s.x=t.x:xi.x===-1&&(n.x=t.x),xi.y===1?s.y=t.y:xi.y===-1&&(n.y=t.y),xi.z===1?s.z=t.z:xi.z===-1&&(n.z=t.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}}const xi=new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new _n;new E;new _n;new E;new E;new E;new E;new E;new E;new E;new _n;new E;new fe;new _n;class iT{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){const e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}}class im extends iT{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0;const s=this.iterations,r=this.tolerance*this.tolerance,o=this.equations,a=o.length,l=e.bodies,c=l.length,u=t;let f,h,d,m,v,p;if(a!==0)for(let x=0;x!==c;x++)l[x].updateSolveMassProperties();const g=rT,_=oT,S=sT;g.length=a,_.length=a,S.length=a;for(let x=0;x!==a;x++){const M=o[x];S[x]=0,_[x]=M.computeB(u),g[x]=1/M.computeC()}if(a!==0){for(let w=0;w!==c;w++){const A=l[w],F=A.vlambda,b=A.wlambda;F.set(0,0,0),b.set(0,0,0)}for(n=0;n!==s;n++){m=0;for(let w=0;w!==a;w++){const A=o[w];f=_[w],h=g[w],p=S[w],v=A.computeGWlambda(),d=h*(f-v-A.eps*p),p+d<A.minForce?d=A.minForce-p:p+d>A.maxForce&&(d=A.maxForce-p),S[w]+=d,m+=d>0?d:-d,A.addToWlambda(d)}if(m*m<r)break}for(let w=0;w!==c;w++){const A=l[w],F=A.velocity,b=A.angularVelocity;A.vlambda.vmul(A.linearFactor,A.vlambda),F.vadd(A.vlambda,F),A.wlambda.vmul(A.angularFactor,A.wlambda),b.vadd(A.wlambda,b)}let x=o.length;const M=1/u;for(;x--;)o[x].multiplier=S[x]*M}return n}}const sT=[],rT=[],oT=[];class aT{constructor(){this.objects=[],this.type=Object}release(){const t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){const e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}}class lT extends aT{constructor(){super(...arguments),this.type=E}constructObject(){return new E}}const Ae={sphereSphere:zt.types.SPHERE,spherePlane:zt.types.SPHERE|zt.types.PLANE,boxBox:zt.types.BOX|zt.types.BOX,sphereBox:zt.types.SPHERE|zt.types.BOX,planeBox:zt.types.PLANE|zt.types.BOX,convexConvex:zt.types.CONVEXPOLYHEDRON,sphereConvex:zt.types.SPHERE|zt.types.CONVEXPOLYHEDRON,planeConvex:zt.types.PLANE|zt.types.CONVEXPOLYHEDRON,boxConvex:zt.types.BOX|zt.types.CONVEXPOLYHEDRON,sphereHeightfield:zt.types.SPHERE|zt.types.HEIGHTFIELD,boxHeightfield:zt.types.BOX|zt.types.HEIGHTFIELD,convexHeightfield:zt.types.CONVEXPOLYHEDRON|zt.types.HEIGHTFIELD,sphereParticle:zt.types.PARTICLE|zt.types.SPHERE,planeParticle:zt.types.PLANE|zt.types.PARTICLE,boxParticle:zt.types.BOX|zt.types.PARTICLE,convexParticle:zt.types.PARTICLE|zt.types.CONVEXPOLYHEDRON,cylinderCylinder:zt.types.CYLINDER,sphereCylinder:zt.types.SPHERE|zt.types.CYLINDER,planeCylinder:zt.types.PLANE|zt.types.CYLINDER,boxCylinder:zt.types.BOX|zt.types.CYLINDER,convexCylinder:zt.types.CONVEXPOLYHEDRON|zt.types.CYLINDER,heightfieldCylinder:zt.types.HEIGHTFIELD|zt.types.CYLINDER,particleCylinder:zt.types.PARTICLE|zt.types.CYLINDER,sphereTrimesh:zt.types.SPHERE|zt.types.TRIMESH,planeTrimesh:zt.types.PLANE|zt.types.TRIMESH};class cT{get[Ae.sphereSphere](){return this.sphereSphere}get[Ae.spherePlane](){return this.spherePlane}get[Ae.boxBox](){return this.boxBox}get[Ae.sphereBox](){return this.sphereBox}get[Ae.planeBox](){return this.planeBox}get[Ae.convexConvex](){return this.convexConvex}get[Ae.sphereConvex](){return this.sphereConvex}get[Ae.planeConvex](){return this.planeConvex}get[Ae.boxConvex](){return this.boxConvex}get[Ae.sphereHeightfield](){return this.sphereHeightfield}get[Ae.boxHeightfield](){return this.boxHeightfield}get[Ae.convexHeightfield](){return this.convexHeightfield}get[Ae.sphereParticle](){return this.sphereParticle}get[Ae.planeParticle](){return this.planeParticle}get[Ae.boxParticle](){return this.boxParticle}get[Ae.convexParticle](){return this.convexParticle}get[Ae.cylinderCylinder](){return this.convexConvex}get[Ae.sphereCylinder](){return this.sphereConvex}get[Ae.planeCylinder](){return this.planeConvex}get[Ae.boxCylinder](){return this.boxConvex}get[Ae.convexCylinder](){return this.convexConvex}get[Ae.heightfieldCylinder](){return this.heightfieldCylinder}get[Ae.particleCylinder](){return this.particleCylinder}get[Ae.sphereTrimesh](){return this.sphereTrimesh}get[Ae.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new lT,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,s,r,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=t,a.bj=e):a=new XE(t,e),a.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&s.collisionResponse;const l=this.currentContactMaterial;a.restitution=l.restitution,a.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);const c=n.material||t.material,u=s.material||e.material;return c&&u&&c.restitution>=0&&u.restitution>=0&&(a.restitution=c.restitution*u.restitution),a.si=r||n,a.sj=o||s,a}createFrictionEquationsFromContact(t,e){const n=t.bi,s=t.bj,r=t.si,o=t.sj,a=this.world,l=this.currentContactMaterial;let c=l.friction;const u=r.material||n.material,f=o.material||s.material;if(u&&f&&u.friction>=0&&f.friction>=0&&(c=u.friction*f.friction),c>0){const h=c*(a.frictionGravity||a.gravity).length();let d=n.invMass+s.invMass;d>0&&(d=1/d);const m=this.frictionEquationPool,v=m.length?m.pop():new qf(n,s,h*d),p=m.length?m.pop():new qf(n,s,h*d);return v.bi=p.bi=n,v.bj=p.bj=s,v.minForce=p.minForce=-h*d,v.maxForce=p.maxForce=h*d,v.ri.copy(t.ri),v.rj.copy(t.rj),p.ri.copy(t.ri),p.rj.copy(t.rj),t.ni.tangents(v.t,p.t),v.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),p.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),v.enabled=p.enabled=t.enabled,e.push(v,p),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;const n=this.frictionResult[this.frictionResult.length-2],s=this.frictionResult[this.frictionResult.length-1];fs.setZero(),qs.setZero(),$s.setZero();const r=e.bi;e.bj;for(let a=0;a!==t;a++)e=this.result[this.result.length-1-a],e.bi!==r?(fs.vadd(e.ni,fs),qs.vadd(e.ri,qs),$s.vadd(e.rj,$s)):(fs.vsub(e.ni,fs),qs.vadd(e.rj,qs),$s.vadd(e.ri,$s));const o=1/t;qs.scale(o,n.ri),$s.scale(o,n.rj),s.ri.copy(n.ri),s.rj.copy(n.rj),fs.normalize(),fs.tangents(n.t,s.t)}getContacts(t,e,n,s,r,o,a){this.contactPointPool=r,this.frictionEquationPool=a,this.result=s,this.frictionResult=o;const l=fT,c=dT,u=uT,f=hT;for(let h=0,d=t.length;h!==d;h++){const m=t[h],v=e[h];let p=null;m.material&&v.material&&(p=n.getContactMaterial(m.material,v.material)||null);const g=m.type&Ut.KINEMATIC&&v.type&Ut.STATIC||m.type&Ut.STATIC&&v.type&Ut.KINEMATIC||m.type&Ut.KINEMATIC&&v.type&Ut.KINEMATIC;for(let _=0;_<m.shapes.length;_++){m.quaternion.mult(m.shapeOrientations[_],l),m.quaternion.vmult(m.shapeOffsets[_],u),u.vadd(m.position,u);const S=m.shapes[_];for(let x=0;x<v.shapes.length;x++){v.quaternion.mult(v.shapeOrientations[x],c),v.quaternion.vmult(v.shapeOffsets[x],f),f.vadd(v.position,f);const M=v.shapes[x];if(!(S.collisionFilterMask&M.collisionFilterGroup&&M.collisionFilterMask&S.collisionFilterGroup)||u.distanceTo(f)>S.boundingSphereRadius+M.boundingSphereRadius)continue;let w=null;S.material&&M.material&&(w=n.getContactMaterial(S.material,M.material)||null),this.currentContactMaterial=w||p||n.defaultContactMaterial;const A=S.type|M.type,F=this[A];if(F){let b=!1;S.type<M.type?b=F.call(this,S,M,u,f,l,c,m,v,S,M,g):b=F.call(this,M,S,f,u,c,l,v,m,S,M,g),b&&g&&(n.shapeOverlapKeeper.set(S.id,M.id),n.bodyOverlapKeeper.set(m.id,v.id))}}}}}sphereSphere(t,e,n,s,r,o,a,l,c,u,f){if(f)return n.distanceSquared(s)<(t.radius+e.radius)**2;const h=this.createContactEquation(a,l,t,e,c,u);s.vsub(n,h.ni),h.ni.normalize(),h.ri.copy(h.ni),h.rj.copy(h.ni),h.ri.scale(t.radius,h.ri),h.rj.scale(-e.radius,h.rj),h.ri.vadd(n,h.ri),h.ri.vsub(a.position,h.ri),h.rj.vadd(s,h.rj),h.rj.vsub(l.position,h.rj),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}spherePlane(t,e,n,s,r,o,a,l,c,u,f){const h=this.createContactEquation(a,l,t,e,c,u);if(h.ni.set(0,0,1),o.vmult(h.ni,h.ni),h.ni.negate(h.ni),h.ni.normalize(),h.ni.scale(t.radius,h.ri),n.vsub(s,Ko),h.ni.scale(h.ni.dot(Ko),$f),Ko.vsub($f,h.rj),-Ko.dot(h.ni)<=t.radius){if(f)return!0;const d=h.ri,m=h.rj;d.vadd(n,d),d.vsub(a.position,d),m.vadd(s,m),m.vsub(l.position,m),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}}boxBox(t,e,n,s,r,o,a,l,c,u,f){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,s,r,o,a,l,t,e,f)}sphereBox(t,e,n,s,r,o,a,l,c,u,f){const h=this.v3pool,d=zT;n.vsub(s,Zo),e.getSideNormals(d,o);const m=t.radius;let v=!1;const p=kT,g=GT,_=HT;let S=null,x=0,M=0,w=0,A=null;for(let U=0,W=d.length;U!==W&&v===!1;U++){const j=UT;j.copy(d[U]);const ft=j.length();j.normalize();const at=Zo.dot(j);if(at<ft+m&&at>0){const dt=OT,xt=BT;dt.copy(d[(U+1)%3]),xt.copy(d[(U+2)%3]);const Ft=dt.length(),kt=xt.length();dt.normalize(),xt.normalize();const jt=Zo.dot(dt),k=Zo.dot(xt);if(jt<Ft&&jt>-Ft&&k<kt&&k>-kt){const G=Math.abs(at-ft-m);if((A===null||G<A)&&(A=G,M=jt,w=k,S=ft,p.copy(j),g.copy(dt),_.copy(xt),x++,f))return!0}}}if(x){v=!0;const U=this.createContactEquation(a,l,t,e,c,u);p.scale(-m,U.ri),U.ni.copy(p),U.ni.negate(U.ni),p.scale(S,p),g.scale(M,g),p.vadd(g,p),_.scale(w,_),p.vadd(_,U.rj),U.ri.vadd(n,U.ri),U.ri.vsub(a.position,U.ri),U.rj.vadd(s,U.rj),U.rj.vsub(l.position,U.rj),this.result.push(U),this.createFrictionEquationsFromContact(U,this.frictionResult)}let F=h.get();const b=VT;for(let U=0;U!==2&&!v;U++)for(let W=0;W!==2&&!v;W++)for(let j=0;j!==2&&!v;j++)if(F.set(0,0,0),U?F.vadd(d[0],F):F.vsub(d[0],F),W?F.vadd(d[1],F):F.vsub(d[1],F),j?F.vadd(d[2],F):F.vsub(d[2],F),s.vadd(F,b),b.vsub(n,b),b.lengthSquared()<m*m){if(f)return!0;v=!0;const ft=this.createContactEquation(a,l,t,e,c,u);ft.ri.copy(b),ft.ri.normalize(),ft.ni.copy(ft.ri),ft.ri.scale(m,ft.ri),ft.rj.copy(F),ft.ri.vadd(n,ft.ri),ft.ri.vsub(a.position,ft.ri),ft.rj.vadd(s,ft.rj),ft.rj.vsub(l.position,ft.rj),this.result.push(ft),this.createFrictionEquationsFromContact(ft,this.frictionResult)}h.release(F),F=null;const T=h.get(),L=h.get(),X=h.get(),O=h.get(),q=h.get(),V=d.length;for(let U=0;U!==V&&!v;U++)for(let W=0;W!==V&&!v;W++)if(U%3!==W%3){d[W].cross(d[U],T),T.normalize(),d[U].vadd(d[W],L),X.copy(n),X.vsub(L,X),X.vsub(s,X);const j=X.dot(T);T.scale(j,O);let ft=0;for(;ft===U%3||ft===W%3;)ft++;q.copy(n),q.vsub(O,q),q.vsub(L,q),q.vsub(s,q);const at=Math.abs(j),dt=q.length();if(at<d[ft].length()&&dt<m){if(f)return!0;v=!0;const xt=this.createContactEquation(a,l,t,e,c,u);L.vadd(O,xt.rj),xt.rj.copy(xt.rj),q.negate(xt.ni),xt.ni.normalize(),xt.ri.copy(xt.rj),xt.ri.vadd(s,xt.ri),xt.ri.vsub(n,xt.ri),xt.ri.normalize(),xt.ri.scale(m,xt.ri),xt.ri.vadd(n,xt.ri),xt.ri.vsub(a.position,xt.ri),xt.rj.vadd(s,xt.rj),xt.rj.vsub(l.position,xt.rj),this.result.push(xt),this.createFrictionEquationsFromContact(xt,this.frictionResult)}}h.release(T,L,X,O,q)}planeBox(t,e,n,s,r,o,a,l,c,u,f){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,s,r,o,a,l,t,e,f)}convexConvex(t,e,n,s,r,o,a,l,c,u,f,h,d){const m=s1;if(!(n.distanceTo(s)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,r,s,o,m,h,d)){const v=[],p=r1;t.clipAgainstHull(n,r,e,s,o,m,-100,100,v);let g=0;for(let _=0;_!==v.length;_++){if(f)return!0;const S=this.createContactEquation(a,l,t,e,c,u),x=S.ri,M=S.rj;m.negate(S.ni),v[_].normal.negate(p),p.scale(v[_].depth,p),v[_].point.vadd(p,x),M.copy(v[_].point),x.vsub(n,x),M.vsub(s,M),x.vadd(n,x),x.vsub(a.position,x),M.vadd(s,M),M.vsub(l.position,M),this.result.push(S),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(S,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}}sphereConvex(t,e,n,s,r,o,a,l,c,u,f){const h=this.v3pool;n.vsub(s,WT);const d=e.faceNormals,m=e.faces,v=e.vertices,p=t.radius;let g=!1;for(let _=0;_!==v.length;_++){const S=v[_],x=YT;o.vmult(S,x),s.vadd(x,x);const M=$T;if(x.vsub(n,M),M.lengthSquared()<p*p){if(f)return!0;g=!0;const w=this.createContactEquation(a,l,t,e,c,u);w.ri.copy(M),w.ri.normalize(),w.ni.copy(w.ri),w.ri.scale(p,w.ri),x.vsub(s,w.rj),w.ri.vadd(n,w.ri),w.ri.vsub(a.position,w.ri),w.rj.vadd(s,w.rj),w.rj.vsub(l.position,w.rj),this.result.push(w),this.createFrictionEquationsFromContact(w,this.frictionResult);return}}for(let _=0,S=m.length;_!==S&&g===!1;_++){const x=d[_],M=m[_],w=jT;o.vmult(x,w);const A=KT;o.vmult(v[M[0]],A),A.vadd(s,A);const F=ZT;w.scale(-p,F),n.vadd(F,F);const b=JT;F.vsub(A,b);const T=b.dot(w),L=QT;if(n.vsub(A,L),T<0&&L.dot(w)>0){const X=[];for(let O=0,q=M.length;O!==q;O++){const V=h.get();o.vmult(v[M[O]],V),s.vadd(V,V),X.push(V)}if(FT(X,w,n)){if(f)return!0;g=!0;const O=this.createContactEquation(a,l,t,e,c,u);w.scale(-p,O.ri),w.negate(O.ni);const q=h.get();w.scale(-T,q);const V=h.get();w.scale(-p,V),n.vsub(s,O.rj),O.rj.vadd(V,O.rj),O.rj.vadd(q,O.rj),O.rj.vadd(s,O.rj),O.rj.vsub(l.position,O.rj),O.ri.vadd(n,O.ri),O.ri.vsub(a.position,O.ri),h.release(q),h.release(V),this.result.push(O),this.createFrictionEquationsFromContact(O,this.frictionResult);for(let U=0,W=X.length;U!==W;U++)h.release(X[U]);return}else for(let O=0;O!==M.length;O++){const q=h.get(),V=h.get();o.vmult(v[M[(O+1)%M.length]],q),o.vmult(v[M[(O+2)%M.length]],V),s.vadd(q,q),s.vadd(V,V);const U=XT;V.vsub(q,U);const W=qT;U.unit(W);const j=h.get(),ft=h.get();n.vsub(q,ft);const at=ft.dot(W);W.scale(at,j),j.vadd(q,j);const dt=h.get();if(j.vsub(n,dt),at>0&&at*at<U.lengthSquared()&&dt.lengthSquared()<p*p){if(f)return!0;const xt=this.createContactEquation(a,l,t,e,c,u);j.vsub(s,xt.rj),j.vsub(n,xt.ni),xt.ni.normalize(),xt.ni.scale(p,xt.ri),xt.rj.vadd(s,xt.rj),xt.rj.vsub(l.position,xt.rj),xt.ri.vadd(n,xt.ri),xt.ri.vsub(a.position,xt.ri),this.result.push(xt),this.createFrictionEquationsFromContact(xt,this.frictionResult);for(let Ft=0,kt=X.length;Ft!==kt;Ft++)h.release(X[Ft]);h.release(q),h.release(V),h.release(j),h.release(dt),h.release(ft);return}h.release(q),h.release(V),h.release(j),h.release(dt),h.release(ft)}for(let O=0,q=X.length;O!==q;O++)h.release(X[O])}}}planeConvex(t,e,n,s,r,o,a,l,c,u,f){const h=t1,d=e1;d.set(0,0,1),r.vmult(d,d);let m=0;const v=n1;for(let p=0;p!==e.vertices.length;p++)if(h.copy(e.vertices[p]),o.vmult(h,h),s.vadd(h,h),h.vsub(n,v),d.dot(v)<=0){if(f)return!0;const _=this.createContactEquation(a,l,t,e,c,u),S=i1;d.scale(d.dot(v),S),h.vsub(S,S),S.vsub(n,_.ri),_.ni.copy(d),h.vsub(s,_.rj),_.ri.vadd(n,_.ri),_.ri.vsub(a.position,_.ri),_.rj.vadd(s,_.rj),_.rj.vsub(l.position,_.rj),this.result.push(_),m++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(_,this.frictionResult)}this.enableFrictionReduction&&m&&this.createFrictionFromAverage(m)}boxConvex(t,e,n,s,r,o,a,l,c,u,f){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,s,r,o,a,l,t,e,f)}sphereHeightfield(t,e,n,s,r,o,a,l,c,u,f){const h=e.data,d=t.radius,m=e.elementSize,v=v1,p=g1;fe.pointToLocalFrame(s,o,n,p);let g=Math.floor((p.x-d)/m)-1,_=Math.ceil((p.x+d)/m)+1,S=Math.floor((p.y-d)/m)-1,x=Math.ceil((p.y+d)/m)+1;if(_<0||x<0||g>h.length||S>h[0].length)return;g<0&&(g=0),_<0&&(_=0),S<0&&(S=0),x<0&&(x=0),g>=h.length&&(g=h.length-1),_>=h.length&&(_=h.length-1),x>=h[0].length&&(x=h[0].length-1),S>=h[0].length&&(S=h[0].length-1);const M=[];e.getRectMinMax(g,S,_,x,M);const w=M[0],A=M[1];if(p.z-d>A||p.z+d<w)return;const F=this.result;for(let b=g;b<_;b++)for(let T=S;T<x;T++){const L=F.length;let X=!1;if(e.getConvexTrianglePillar(b,T,!1),fe.pointToWorldFrame(s,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(X=this.sphereConvex(t,e.pillarConvex,n,v,r,o,a,l,t,e,f)),f&&X||(e.getConvexTrianglePillar(b,T,!0),fe.pointToWorldFrame(s,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(X=this.sphereConvex(t,e.pillarConvex,n,v,r,o,a,l,t,e,f)),f&&X))return!0;if(F.length-L>2)return}}boxHeightfield(t,e,n,s,r,o,a,l,c,u,f){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,s,r,o,a,l,t,e,f)}convexHeightfield(t,e,n,s,r,o,a,l,c,u,f){const h=e.data,d=e.elementSize,m=t.boundingSphereRadius,v=p1,p=m1,g=d1;fe.pointToLocalFrame(s,o,n,g);let _=Math.floor((g.x-m)/d)-1,S=Math.ceil((g.x+m)/d)+1,x=Math.floor((g.y-m)/d)-1,M=Math.ceil((g.y+m)/d)+1;if(S<0||M<0||_>h.length||x>h[0].length)return;_<0&&(_=0),S<0&&(S=0),x<0&&(x=0),M<0&&(M=0),_>=h.length&&(_=h.length-1),S>=h.length&&(S=h.length-1),M>=h[0].length&&(M=h[0].length-1),x>=h[0].length&&(x=h[0].length-1);const w=[];e.getRectMinMax(_,x,S,M,w);const A=w[0],F=w[1];if(!(g.z-m>F||g.z+m<A))for(let b=_;b<S;b++)for(let T=x;T<M;T++){let L=!1;if(e.getConvexTrianglePillar(b,T,!1),fe.pointToWorldFrame(s,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(L=this.convexConvex(t,e.pillarConvex,n,v,r,o,a,l,null,null,f,p,null)),f&&L||(e.getConvexTrianglePillar(b,T,!0),fe.pointToWorldFrame(s,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(L=this.convexConvex(t,e.pillarConvex,n,v,r,o,a,l,null,null,f,p,null)),f&&L))return!0}}sphereParticle(t,e,n,s,r,o,a,l,c,u,f){const h=c1;if(h.set(0,0,1),s.vsub(n,h),h.lengthSquared()<=t.radius*t.radius){if(f)return!0;const m=this.createContactEquation(l,a,e,t,c,u);h.normalize(),m.rj.copy(h),m.rj.scale(t.radius,m.rj),m.ni.copy(h),m.ni.negate(m.ni),m.ri.set(0,0,0),this.result.push(m),this.createFrictionEquationsFromContact(m,this.frictionResult)}}planeParticle(t,e,n,s,r,o,a,l,c,u,f){const h=o1;h.set(0,0,1),a.quaternion.vmult(h,h);const d=a1;if(s.vsub(a.position,d),h.dot(d)<=0){if(f)return!0;const v=this.createContactEquation(l,a,e,t,c,u);v.ni.copy(h),v.ni.negate(v.ni),v.ri.set(0,0,0);const p=l1;h.scale(h.dot(s),p),s.vsub(p,p),v.rj.copy(p),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}boxParticle(t,e,n,s,r,o,a,l,c,u,f){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,s,r,o,a,l,t,e,f)}convexParticle(t,e,n,s,r,o,a,l,c,u,f){let h=-1;const d=h1,m=f1;let v=null;const p=u1;if(p.copy(s),p.vsub(n,p),r.conjugate(Yf),Yf.vmult(p,p),t.pointIsInside(p)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,r),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(r);for(let g=0,_=t.faces.length;g!==_;g++){const S=[t.worldVertices[t.faces[g][0]]],x=t.worldFaceNormals[g];s.vsub(S[0],jf);const M=-x.dot(jf);if(v===null||Math.abs(M)<Math.abs(v)){if(f)return!0;v=M,h=g,d.copy(x)}}if(h!==-1){const g=this.createContactEquation(l,a,e,t,c,u);d.scale(v,m),m.vadd(s,m),m.vsub(n,m),g.rj.copy(m),d.negate(g.ni),g.ri.set(0,0,0);const _=g.ri,S=g.rj;_.vadd(s,_),_.vsub(l.position,_),S.vadd(n,S),S.vsub(a.position,S),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,s,r,o,a,l,c,u,f){return this.convexHeightfield(e,t,s,n,o,r,l,a,c,u,f)}particleCylinder(t,e,n,s,r,o,a,l,c,u,f){return this.convexParticle(e,t,s,n,o,r,l,a,c,u,f)}sphereTrimesh(t,e,n,s,r,o,a,l,c,u,f){const h=ST,d=MT,m=bT,v=wT,p=ET,g=TT,_=PT,S=yT,x=xT,M=IT;fe.pointToLocalFrame(s,o,n,p);const w=t.radius;_.lowerBound.set(p.x-w,p.y-w,p.z-w),_.upperBound.set(p.x+w,p.y+w,p.z+w),e.getTrianglesInAABB(_,M);const A=_T,F=t.radius*t.radius;for(let O=0;O<M.length;O++)for(let q=0;q<3;q++)if(e.getVertex(e.indices[M[O]*3+q],A),A.vsub(p,x),x.lengthSquared()<=F){if(S.copy(A),fe.pointToWorldFrame(s,o,S,A),A.vsub(n,x),f)return!0;let V=this.createContactEquation(a,l,t,e,c,u);V.ni.copy(x),V.ni.normalize(),V.ri.copy(V.ni),V.ri.scale(t.radius,V.ri),V.ri.vadd(n,V.ri),V.ri.vsub(a.position,V.ri),V.rj.copy(A),V.rj.vsub(l.position,V.rj),this.result.push(V),this.createFrictionEquationsFromContact(V,this.frictionResult)}for(let O=0;O<M.length;O++)for(let q=0;q<3;q++){e.getVertex(e.indices[M[O]*3+q],h),e.getVertex(e.indices[M[O]*3+(q+1)%3],d),d.vsub(h,m),p.vsub(d,g);const V=g.dot(m);p.vsub(h,g);let U=g.dot(m);if(U>0&&V<0&&(p.vsub(h,g),v.copy(m),v.normalize(),U=g.dot(v),v.scale(U,g),g.vadd(h,g),g.distanceTo(p)<t.radius)){if(f)return!0;const j=this.createContactEquation(a,l,t,e,c,u);g.vsub(p,j.ni),j.ni.normalize(),j.ni.scale(t.radius,j.ri),j.ri.vadd(n,j.ri),j.ri.vsub(a.position,j.ri),fe.pointToWorldFrame(s,o,g,g),g.vsub(l.position,j.rj),fe.vectorToWorldFrame(o,j.ni,j.ni),fe.vectorToWorldFrame(o,j.ri,j.ri),this.result.push(j),this.createFrictionEquationsFromContact(j,this.frictionResult)}}const b=AT,T=CT,L=RT,X=vT;for(let O=0,q=M.length;O!==q;O++){e.getTriangleVertices(M[O],b,T,L),e.getNormal(M[O],X),p.vsub(b,g);let V=g.dot(X);if(X.scale(V,g),p.vsub(g,g),V=g.distanceTo(p),Ue.pointInTriangle(g,b,T,L)&&V<t.radius){if(f)return!0;let U=this.createContactEquation(a,l,t,e,c,u);g.vsub(p,U.ni),U.ni.normalize(),U.ni.scale(t.radius,U.ri),U.ri.vadd(n,U.ri),U.ri.vsub(a.position,U.ri),fe.pointToWorldFrame(s,o,g,g),g.vsub(l.position,U.rj),fe.vectorToWorldFrame(o,U.ni,U.ni),fe.vectorToWorldFrame(o,U.ri,U.ri),this.result.push(U),this.createFrictionEquationsFromContact(U,this.frictionResult)}}M.length=0}planeTrimesh(t,e,n,s,r,o,a,l,c,u,f){const h=new E,d=pT;d.set(0,0,1),r.vmult(d,d);for(let m=0;m<e.vertices.length/3;m++){e.getVertex(m,h);const v=new E;v.copy(h),fe.pointToWorldFrame(s,o,v,h);const p=mT;if(h.vsub(n,p),d.dot(p)<=0){if(f)return!0;const _=this.createContactEquation(a,l,t,e,c,u);_.ni.copy(d);const S=gT;d.scale(p.dot(d),S),h.vsub(S,S),_.ri.copy(S),_.ri.vsub(a.position,_.ri),_.rj.copy(h),_.rj.vsub(l.position,_.rj),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}}}}const fs=new E,qs=new E,$s=new E,uT=new E,hT=new E,fT=new Ne,dT=new Ne,pT=new E,mT=new E,gT=new E,vT=new E,xT=new E;new E;const _T=new E,yT=new E,ST=new E,MT=new E,bT=new E,wT=new E,ET=new E,TT=new E,AT=new E,CT=new E,RT=new E,PT=new _n,IT=[],Ko=new E,$f=new E,LT=new E,DT=new E,NT=new E;function FT(i,t,e){let n=null;const s=i.length;for(let r=0;r!==s;r++){const o=i[r],a=LT;i[(r+1)%s].vsub(o,a);const l=DT;a.cross(t,l);const c=NT;e.vsub(o,c);const u=l.dot(c);if(n===null||u>0&&n===!0||u<=0&&n===!1){n===null&&(n=u>0);continue}else return!1}return!0}const Zo=new E,UT=new E,OT=new E,BT=new E,zT=[new E,new E,new E,new E,new E,new E],VT=new E,kT=new E,GT=new E,HT=new E,WT=new E,XT=new E,qT=new E,$T=new E,YT=new E,jT=new E,KT=new E,ZT=new E,JT=new E,QT=new E;new E;new E;const t1=new E,e1=new E,n1=new E,i1=new E,s1=new E,r1=new E,o1=new E,a1=new E,l1=new E,c1=new E,Yf=new Ne,u1=new E;new E;const h1=new E,jf=new E,f1=new E,d1=new E,p1=new E,m1=[0],g1=new E,v1=new E;class Kf{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){const n=e;e=t,t=n}return t<<16|e}set(t,e){const n=this.getKey(t,e),s=this.current;let r=0;for(;n>s[r];)r++;if(n!==s[r]){for(let o=s.length-1;o>=r;o--)s[o+1]=s[o];s[r]=n}}tick(){const t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){const n=this.current,s=this.previous,r=n.length,o=s.length;let a=0;for(let l=0;l<r;l++){let c=!1;const u=n[l];for(;u>s[a];)a++;c=u===s[a],c||Zf(t,u)}a=0;for(let l=0;l<o;l++){let c=!1;const u=s[l];for(;u>n[a];)a++;c=n[a]===u,c||Zf(e,u)}}}function Zf(i,t){i.push((t&4294901760)>>16,t&65535)}const Vl=(i,t)=>i<t?`${i}-${t}`:`${t}-${i}`;class x1{constructor(){this.data={keys:[]}}get(t,e){const n=Vl(t,e);return this.data[n]}set(t,e,n){const s=Vl(t,e);this.get(t,e)||this.data.keys.push(s),this.data[s]=n}delete(t,e){const n=Vl(t,e),s=this.data.keys.indexOf(n);s!==-1&&this.data.keys.splice(s,1),delete this.data[n]}reset(){const t=this.data,e=t.keys;for(;e.length>0;){const n=e.pop();delete t[n]}}}class _1 extends jp{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new E,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new E,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new TE,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new im,this.constraints=[],this.narrowphase=new cT(this),this.collisionMatrix=new Uf,this.collisionMatrixPrevious=new Uf,this.bodyOverlapKeeper=new Kf,this.shapeOverlapKeeper=new Kf,this.contactmaterials=[],this.contactMaterialTable=new x1,this.defaultMaterial=new ws("default"),this.defaultContactMaterial=new bs(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){const t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){const e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof wa?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n,s){return n===void 0&&(n={}),n.mode=Ue.ALL,n.from=t,n.to=e,n.callback=s,kl.intersectWorld(this,n)}raycastAny(t,e,n,s){return n===void 0&&(n={}),n.mode=Ue.ANY,n.from=t,n.to=e,n.result=s,kl.intersectWorld(this,n)}raycastClosest(t,e,n,s){return n===void 0&&(n={}),n.mode=Ue.CLOSEST,n.from=t,n.to=e,n.result=s,kl.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof Ut&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;const e=this.bodies.length-1,n=this.bodies,s=n.indexOf(t);if(s!==-1){n.splice(s,1);for(let r=0;r!==n.length;r++)n[r].index=r;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){const e=this.bodies;for(let n=0;n<e.length;n++){const s=e[n].shapes;for(let r=0;r<s.length;r++){const o=s[r];if(o.id===t)return o}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){const e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);const n=Be.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{const s=n-this.lastCallTime;this.step(t,s,e)}this.lastCallTime=n}step(t,e,n){if(n===void 0&&(n=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;const s=Be.now();let r=0;for(;this.accumulator>=t&&r<n&&(this.internalStep(t),this.accumulator-=t,r++,!(Be.now()-s>t*1e3)););this.accumulator=this.accumulator%t;const o=this.accumulator/t;for(let a=0;a!==this.bodies.length;a++){const l=this.bodies[a];l.previousPosition.lerp(l.position,o,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,o,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;const e=this.contacts,n=w1,s=E1,r=this.bodies.length,o=this.bodies,a=this.solver,l=this.gravity,c=this.doProfiling,u=this.profile,f=Ut.DYNAMIC;let h=-1/0;const d=this.constraints,m=b1;l.length();const v=l.x,p=l.y,g=l.z;let _=0;for(c&&(h=Be.now()),_=0;_!==r;_++){const O=o[_];if(O.type===f){const q=O.force,V=O.mass;q.x+=V*v,q.y+=V*p,q.z+=V*g}}for(let O=0,q=this.subsystems.length;O!==q;O++)this.subsystems[O].update();c&&(h=Be.now()),n.length=0,s.length=0,this.broadphase.collisionPairs(this,n,s),c&&(u.broadphase=Be.now()-h);let S=d.length;for(_=0;_!==S;_++){const O=d[_];if(!O.collideConnected)for(let q=n.length-1;q>=0;q-=1)(O.bodyA===n[q]&&O.bodyB===s[q]||O.bodyB===n[q]&&O.bodyA===s[q])&&(n.splice(q,1),s.splice(q,1))}this.collisionMatrixTick(),c&&(h=Be.now());const x=M1,M=e.length;for(_=0;_!==M;_++)x.push(e[_]);e.length=0;const w=this.frictionEquations.length;for(_=0;_!==w;_++)m.push(this.frictionEquations[_]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,s,this,e,x,this.frictionEquations,m),c&&(u.narrowphase=Be.now()-h),c&&(h=Be.now()),_=0;_<this.frictionEquations.length;_++)a.addEquation(this.frictionEquations[_]);const A=e.length;for(let O=0;O!==A;O++){const q=e[O],V=q.bi,U=q.bj,W=q.si,j=q.sj;let ft;if(V.material&&U.material?ft=this.getContactMaterial(V.material,U.material)||this.defaultContactMaterial:ft=this.defaultContactMaterial,ft.friction,V.material&&U.material&&(V.material.friction>=0&&U.material.friction>=0&&V.material.friction*U.material.friction,V.material.restitution>=0&&U.material.restitution>=0&&(q.restitution=V.material.restitution*U.material.restitution)),a.addEquation(q),V.allowSleep&&V.type===Ut.DYNAMIC&&V.sleepState===Ut.SLEEPING&&U.sleepState===Ut.AWAKE&&U.type!==Ut.STATIC){const at=U.velocity.lengthSquared()+U.angularVelocity.lengthSquared(),dt=U.sleepSpeedLimit**2;at>=dt*2&&(V.wakeUpAfterNarrowphase=!0)}if(U.allowSleep&&U.type===Ut.DYNAMIC&&U.sleepState===Ut.SLEEPING&&V.sleepState===Ut.AWAKE&&V.type!==Ut.STATIC){const at=V.velocity.lengthSquared()+V.angularVelocity.lengthSquared(),dt=V.sleepSpeedLimit**2;at>=dt*2&&(U.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(V,U,!0),this.collisionMatrixPrevious.get(V,U)||(Lr.body=U,Lr.contact=q,V.dispatchEvent(Lr),Lr.body=V,U.dispatchEvent(Lr)),this.bodyOverlapKeeper.set(V.id,U.id),this.shapeOverlapKeeper.set(W.id,j.id)}for(this.emitContactEvents(),c&&(u.makeContactConstraints=Be.now()-h,h=Be.now()),_=0;_!==r;_++){const O=o[_];O.wakeUpAfterNarrowphase&&(O.wakeUp(),O.wakeUpAfterNarrowphase=!1)}for(S=d.length,_=0;_!==S;_++){const O=d[_];O.update();for(let q=0,V=O.equations.length;q!==V;q++){const U=O.equations[q];a.addEquation(U)}}a.solve(t,this),c&&(u.solve=Be.now()-h),a.removeAllEquations();const F=Math.pow;for(_=0;_!==r;_++){const O=o[_];if(O.type&f){const q=F(1-O.linearDamping,t),V=O.velocity;V.scale(q,V);const U=O.angularVelocity;if(U){const W=F(1-O.angularDamping,t);U.scale(W,U)}}}this.dispatchEvent(S1),c&&(h=Be.now());const T=this.stepnumber%(this.quatNormalizeSkip+1)===0,L=this.quatNormalizeFast;for(_=0;_!==r;_++)o[_].integrate(t,T,L);this.clearForces(),this.broadphase.dirty=!0,c&&(u.integrate=Be.now()-h),this.stepnumber+=1,this.dispatchEvent(y1);let X=!0;if(this.allowSleep)for(X=!1,_=0;_!==r;_++){const O=o[_];O.sleepTick(this.time),O.sleepState!==Ut.SLEEPING&&(X=!0)}this.hasActiveBodies=X}emitContactEvents(){const t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(_i,yi),t){for(let r=0,o=_i.length;r<o;r+=2)Dr.bodyA=this.getBodyById(_i[r]),Dr.bodyB=this.getBodyById(_i[r+1]),this.dispatchEvent(Dr);Dr.bodyA=Dr.bodyB=null}if(e){for(let r=0,o=yi.length;r<o;r+=2)Nr.bodyA=this.getBodyById(yi[r]),Nr.bodyB=this.getBodyById(yi[r+1]),this.dispatchEvent(Nr);Nr.bodyA=Nr.bodyB=null}_i.length=yi.length=0;const n=this.hasAnyEventListener("beginShapeContact"),s=this.hasAnyEventListener("endShapeContact");if((n||s)&&this.shapeOverlapKeeper.getDiff(_i,yi),n){for(let r=0,o=_i.length;r<o;r+=2){const a=this.getShapeById(_i[r]),l=this.getShapeById(_i[r+1]);Si.shapeA=a,Si.shapeB=l,a&&(Si.bodyA=a.body),l&&(Si.bodyB=l.body),this.dispatchEvent(Si)}Si.bodyA=Si.bodyB=Si.shapeA=Si.shapeB=null}if(s){for(let r=0,o=yi.length;r<o;r+=2){const a=this.getShapeById(yi[r]),l=this.getShapeById(yi[r+1]);Mi.shapeA=a,Mi.shapeB=l,a&&(Mi.bodyA=a.body),l&&(Mi.bodyB=l.body),this.dispatchEvent(Mi)}Mi.bodyA=Mi.bodyB=Mi.shapeA=Mi.shapeB=null}}clearForces(){const t=this.bodies,e=t.length;for(let n=0;n!==e;n++){const s=t[n];s.force,s.torque,s.force.set(0,0,0),s.torque.set(0,0,0)}}}new _n;const kl=new Ue,Be=globalThis.performance||{};if(!Be.now){let i=Date.now();Be.timing&&Be.timing.navigationStart&&(i=Be.timing.navigationStart),Be.now=()=>Date.now()-i}new E;const y1={type:"postStep"},S1={type:"preStep"},Lr={type:Ut.COLLIDE_EVENT_NAME,body:null,contact:null},M1=[],b1=[],w1=[],E1=[],_i=[],yi=[],Dr={type:"beginContact",bodyA:null,bodyB:null},Nr={type:"endContact",bodyA:null,bodyB:null},Si={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Mi={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Jf=2e3,T1=80,Jo=35e4,Qo=100,A1=15e3,qn=36,C1=5e4,Fr=1,Ys=2,Xi=4,Gl=8,Hl=16;function R1(i,t){let e,n,s,r,o,a;const l=[],c=[],u=[],f=[],h=[];let d=[],m=0,v={P1:0,P2:0},p={word:[],nextSlotIndex:0,isGameOver:!1,gameOverTime:0,isClearing:!1,currentWordIndex:0};const g=new ws("car"),_=new ws("ground"),S=new ws("obstacle");function x(k,G,rt="white",ct=256){const lt=document.createElement("canvas");lt.width=ct,lt.height=ct;const pt=lt.getContext("2d");return pt.fillStyle=G,pt.fillRect(0,0,ct,ct),pt.fillStyle=rt,pt.font=`bold ${ct*.7}px Arial`,pt.textAlign="center",pt.textBaseline="middle",pt.fillText(k,ct/2,ct*.45),pt.fillRect(ct*.2,ct*.82,ct*.6,ct*.08),new Zh(lt)}const M=(k,G,rt,ct)=>{const lt=new Bp,pt=-k/2,I=-G/2;return lt.moveTo(pt+ct,I),lt.lineTo(pt+k-ct,I),lt.quadraticCurveTo(pt+k,I,pt+k,I+ct),lt.lineTo(pt+k,I+G-ct),lt.quadraticCurveTo(pt+k,I+G,pt+k-ct,I+G),lt.lineTo(pt+ct,I+G),lt.quadraticCurveTo(pt,I+G,pt,I+G-ct),lt.lineTo(pt,I+ct),lt.quadraticCurveTo(pt,I,pt+ct,I),new Fu(lt,{depth:rt,bevelEnabled:!0,bevelThickness:.2,bevelSize:.2,bevelSegments:3})};function w(){const k=new le,G=Math.random()*.12,rt=.4+Math.random()*.4,ct=.15+Math.random()*.15;return k.setHSL(G,rt,ct),k}class A{constructor(G,rt,ct,lt,pt,I){Te(this,"mesh");Te(this,"body");Te(this,"id");Te(this,"char");Te(this,"team");Te(this,"isParking",!1);Te(this,"targetSpot",null);Te(this,"isParkedFinal",!1);Te(this,"lightBeams");Te(this,"isExiting",!1);Te(this,"exitTargetZ",0);Te(this,"isEntering",!0);Te(this,"targetEntryZ",0);Te(this,"entrySpeedMult",1);Te(this,"shakeTime",0);Te(this,"stuckTimer",0);Te(this,"reverseTimer",0);this.id=G,this.char=pt,this.team=I;const N=4.5,D=2,z=8.5,H=.8;this.mesh=new ys;const $=new Cn({color:lt,metalness:.8,roughness:.2}),R=M(N,z,D*.6,H),it=new oe(R,$);it.rotation.x=Math.PI/2,it.position.y=D*.3,it.name="car_base",it.castShadow=!0,it.receiveShadow=!0,this.mesh.add(it);const et=M(N*.85,z*.45,D*.5,H*.6),tt=new oe(et,$);tt.rotation.x=Math.PI/2,tt.position.set(0,D*1,-.6),tt.name="car_cabin",tt.castShadow=!0,tt.receiveShadow=!0,this.mesh.add(tt);const st=new oe(new tn(N*.8,D*.8),new Cn({color:8965375,transparent:!0,opacity:.6,metalness:1,roughness:0,side:Ln}));st.position.set(0,D*.9,1.4),st.rotation.x=-Math.PI/3.2,st.name="car_ws",this.mesh.add(st);const C=new Ri(.8,.4,.2),y=new Cn({color:16777215,emissive:16777215,emissiveIntensity:1}),B=new oe(C,y);B.position.set(-1.4,D*.3,z/2),B.name="car_hl_l",this.mesh.add(B);const Z=new oe(C,y);Z.position.set(1.4,D*.3,z/2),Z.name="car_hl_r",this.mesh.add(Z);const ht=new $r({map:x(pt,"#00000000","white"),transparent:!0,side:Ln}),Q=new oe(new tn(4,4),ht);Q.rotation.x=-Math.PI/2,Q.rotation.z=Math.PI,Q.position.set(0,D*1.55,-1.2),Q.name="car_label",this.mesh.add(Q),this.lightBeams=new ys;const _t=new tn(1.2,12),gt=_t.attributes.position;gt.setX(2,-4.5),gt.setX(3,4.5);const Et=document.createElement("canvas");Et.width=128,Et.height=256;const Nt=Et.getContext("2d"),mt=Nt.createRadialGradient(64,10,0,64,10,240);mt.addColorStop(0,"rgba(255,255,255,0.5)"),mt.addColorStop(.2,"rgba(255,255,255,0.2)"),mt.addColorStop(.6,"rgba(255,255,255,0.05)"),mt.addColorStop(1,"rgba(255,255,255,0)"),Nt.fillStyle=mt,Nt.fillRect(0,0,128,256);const St=new Zh(Et),Tt=new $r({map:St,transparent:!0,blending:nc,depthWrite:!1});[[-1.4,.12,z/2+6],[1.4,.12,z/2+6]].forEach(bt=>{const Gt=new oe(_t,Tt);Gt.rotation.x=-Math.PI/2,Gt.position.set(bt[0],bt[1],bt[2]),this.lightBeams.add(Gt)}),this.mesh.add(this.lightBeams),this.lightBeams.visible=!1,e.add(this.mesh),this.body=new Ut({mass:Jf,material:g,linearDamping:.75,angularDamping:.95}),this.body.addShape(new Pn(new E(N/2,D/2,z/2))),this.body.position.set(rt,2,ct),I==="P1"&&this.body.quaternion.setFromEuler(0,Math.PI,0),this.body.angularFactor.set(0,1,0),this.body.collisionFilterGroup=Xi,this.body.collisionFilterMask=Fr|Ys|Xi,r.addBody(this.body),this.mesh.userData.carId=G,this.body.allowSleep=!1,this.body.addEventListener("collide",bt=>{var Y;if(this.isParkedFinal)return;const Gt=bt.body;if(((Y=Gt.material)==null?void 0:Y.name)==="car"){const At=l.find(wt=>wt.body===Gt);if(At&&!At.isParkedFinal&&this.isParking&&At.isParking){const wt=new E(this.targetSpot.x,0,this.targetSpot.z);this.body.position.distanceTo(wt)<Gt.position.distanceTo(wt)&&Gt.applyImpulse(Gt.position.vsub(this.body.position).unit().scale(C1),new E(0,0,0))}}})}applySeparation(G){if(!this.isParkedFinal)for(const rt of G){if(rt===this||rt.isExiting)continue;const ct=this.body.position.distanceTo(rt.body.position),lt=6;if(ct<lt){const pt=this.body.position.vsub(rt.body.position);pt.y=0,pt.length()<.1&&(pt.x=1);const I=(lt-ct)*5e4;this.body.applyImpulse(pt.unit().scale(I),new E(0,0,0))}}}update(){const G=this.body.velocity,rt=G.length();if(rt>Qo&&G.scale(Qo/rt,G),this.mesh.position.copy(this.body.position),this.mesh.quaternion.copy(this.body.quaternion),this.shakeTime>0){this.shakeTime-=.016;const ct=Math.sin(this.shakeTime*40)*this.shakeTime;this.mesh.position.y+=Math.abs(ct)*1.2,this.mesh.rotation.z+=ct*.2}!this.isParkedFinal&&Math.abs(this.body.velocity.y)>.1&&(this.body.velocity.y*=.8),this.isExiting?this.body.collisionFilterMask=Fr|Ys|Xi:this.isEntering?this.body.collisionFilterMask=Fr|Ys|Xi|Gl|Hl:this.body.collisionFilterMask=Fr|Ys|Xi|Gl|Hl,this.isExiting?(this.driveToExit(),this.lightBeams.visible=!0):this.isEntering?(this.driveToEntry(),this.lightBeams.visible=!0):this.isParking&&this.targetSpot&&!this.isParkedFinal?(this.driveToTarget(),this.lightBeams.visible=!0):this.lightBeams.visible=!1}driveToEntry(){const G=this.targetEntryZ-this.body.position.z;if(Math.abs(G)<1){this.isEntering=!1,this.body.velocity.set(0,0,0);return}const rt=new E(0,0,1);this.body.quaternion.vmult(rt,rt);const ct=this.team==="P1"?t.p1Speed.value:t.p2Speed.value;this.body.applyForce(rt.scale(Jo*1.2*this.entrySpeedMult*ct),new E(0,0,0)),this.body.velocity.x*=.95}driveToExit(){const G=this.exitTargetZ,rt=0-this.body.position.x,ct=G-this.body.position.z,lt=Math.atan2(rt,ct),pt=new E(0,0,1);this.body.quaternion.vmult(pt,pt);const I=Math.atan2(pt.x,pt.z);let N=lt-I;for(;N>Math.PI;)N-=Math.PI*2;for(;N<-Math.PI;)N+=Math.PI*2;this.body.angularVelocity.y=N*5;const D=this.team==="P1"?t.p1Speed.value:t.p2Speed.value;Math.cos(N)>.1&&this.body.applyForce(pt.scale(Jo*D),new E(0,0,0))}driveToTarget(){if(!this.targetSpot)return;if(this.targetSpot.occupied){this.isParking=!1,this.targetSpot=null,this.body.velocity.set(0,0,0),this.body.angularVelocity.set(0,0,0);return}const G=new E(this.targetSpot.x,.5,this.targetSpot.z),rt=G.x-this.body.position.x,ct=G.z-this.body.position.z,lt=Math.sqrt(rt*rt+ct*ct),pt=Math.atan2(rt,ct),I=new E(0,0,1);this.body.quaternion.vmult(I,I);const N=Math.atan2(I.x,I.z);let D=pt-N;for(;D>Math.PI;)D-=Math.PI*2;for(;D<-Math.PI;)D+=Math.PI*2;const z=Math.abs(D);if(lt<1.8&&z<1.2){this.finishParking(G);return}const H=this.team==="P1"?t.p1Speed.value:t.p2Speed.value;if(this.reverseTimer>0){this.reverseTimer--,this.body.angularVelocity.y=-Math.sin(D)*5;const R=Jo*.8*H;this.body.applyForce(I.scale(-R),new E(0,0,0));const it=new E(0,1,0).cross(I,new E);this.body.velocity.x-=it.x*this.body.velocity.dot(it)*.95,this.body.velocity.z-=it.z*this.body.velocity.dot(it)*.95;return}if(z>2||lt<20&&z>1&&this.body.velocity.length()<5){this.reverseTimer=50;return}if(this.body.angularVelocity.y=D*5,Math.cos(D)>.1){const R=Jo*Math.min(1,lt/6)*H;this.body.applyForce(I.scale(R),new E(0,0,0))}const $=new E(0,1,0).cross(I,new E);this.body.velocity.x-=$.x*this.body.velocity.dot($)*.97,this.body.velocity.z-=$.z*this.body.velocity.dot($)*.97}boost(){if(this.isParkedFinal)return;const G=new E(0,0,1);this.body.quaternion.vmult(G,G),this.body.applyImpulse(G.scale(A1),new E(0,0,0))}shake(){if(this.shakeTime=.4,!this.isParkedFinal){this.body.applyImpulse(new E(0,2e3,0),new E(.5,0,.5));const G=new E((Math.random()-.5)*15e3,0,(Math.random()-.5)*15e3);this.body.applyImpulse(G,new E(0,0,0))}}finishParking(G){if(this.targetSpot.occupied){this.isParking=!1,this.targetSpot=null;return}this.targetSpot.occupied=!0,this.isParkedFinal=!0,this.isParking=!1,this.body.position.copy(G),this.body.velocity.set(0,0,0),this.body.angularVelocity.set(0,0,0),this.body.type=Ut.STATIC,this.body.mass=0,this.body.updateMassProperties(),this.team==="P1"?(v.P1++,t.onScore("P1",v.P1)):(v.P2++,t.onScore("P2",v.P2)),t.onParkSuccess()}park(G){this.targetSpot=G,this.isParking=!0,this.body.wakeUp()}exit(){this.isExiting=!0,this.isParkedFinal=!1,this.isParking=!1,this.body.type=Ut.DYNAMIC,this.body.mass=Jf,this.body.updateMassProperties(),this.exitTargetZ=this.team==="P1"?150:-150,this.body.wakeUp()}}class F{constructor(G,rt,ct){Te(this,"mesh");Te(this,"body");Te(this,"legs",[]);Te(this,"tail",null);Te(this,"target",new J);Te(this,"state","idle");Te(this,"timer",0);this.mesh=new ys;const lt=new Cn({color:ct,roughness:.8}),pt=.5,I=M(1.8,3,1.2,pt),N=new oe(I,lt);N.rotation.x=Math.PI/2,N.position.y=1.3,N.castShadow=!0,this.mesh.add(N);const D=M(1.2,1.2,1.2,pt*.8),z=new oe(D,lt);z.rotation.x=Math.PI/2,z.position.set(0,2,1.5),z.castShadow=!0,this.mesh.add(z);const H=new Cn({color:6106637}),$=M(.4,.4,.8,.15),R=new oe($,H);R.rotation.x=Math.PI/2,R.position.set(.5,2.6,1.5),this.mesh.add(R);const it=new oe($,H);it.rotation.x=Math.PI/2,it.position.set(-.5,2.6,1.5),this.mesh.add(it);const et=M(.5,.5,1,.25);[[.6,.5,1],[-.6,.5,1],[.6,.5,-1],[-.6,.5,-1]].forEach(C=>{const y=new oe(et,lt);y.rotation.x=Math.PI/2,y.position.set(C[0],C[1],C[2]),this.mesh.add(y),this.legs.push(y)});const st=M(.3,1,.3,.1);this.tail=new oe(st,lt),this.tail.rotation.x=Math.PI/2,this.tail.position.set(0,1.5,-1.5),this.mesh.add(this.tail),e.add(this.mesh),this.body=new Ut({mass:10,material:S}),this.body.addShape(new Pn(new E(.9,.6,1.5))),this.body.position.set(G,.5,rt),this.body.collisionFilterGroup=Ys,this.body.collisionFilterMask=Fr|Xi|Ys,r.addBody(this.body),this.body.angularFactor.set(0,1,0),this.body.quaternion.set(0,0,0,1),this.pickNewTarget()}pickNewTarget(){const G=i.clientWidth,rt=i.clientHeight,ct=G/rt,lt=rt>G?qn/(ct*1.5):qn,pt=lt*ct,I=lt*(1-120/rt);this.target.set((Math.random()-.5)*pt*1.6,0,(Math.random()-.5)*I*1.6),this.state="walking",this.timer=150+Math.random()*300}update(){if(this.mesh.position.copy(this.body.position),this.mesh.quaternion.copy(this.body.quaternion),this.state==="walking"){const G=this.target.clone().sub(this.mesh.position);if(G.y=0,G.length()<2||this.timer<=0)this.state="idle",this.timer=60+Math.random()*120,this.body.velocity.set(0,0,0);else{this.timer--;const rt=Math.atan2(G.x,G.z),ct=new E;this.body.quaternion.toEuler(ct);const lt=ct.y;let pt=rt-lt;for(;pt>Math.PI;)pt-=Math.PI*2;for(;pt<-Math.PI;)pt+=Math.PI*2;this.body.angularVelocity.y=pt*5;const I=new E(0,0,1);this.body.quaternion.vmult(I,I),this.body.velocity.x=I.x*8,this.body.velocity.z=I.z*8,this.legs.forEach((N,D)=>{N.position.y=.5+Math.sin(Date.now()*.01+D)*.2})}}else this.timer--,this.timer<=0&&this.pickNewTarget();if(this.tail){const G=this.state==="walking"?.02:.01;this.tail.rotation.z=Math.sin(Date.now()*G)*.5}}destroy(){e.remove(this.mesh),r.removeBody(this.body)}}function b(){e=new h_,e.background=new le(328965),e.fog=new Iu(328965,150,400),s=new Qw({antialias:!0,canvas:i}),i.style.touchAction="none",s.setSize(i.clientWidth,i.clientHeight),s.shadowMap.enabled=!0,L(),window.addEventListener("resize",L),e.add(new ny(16777215,.4));const k=new ey(16777215,.8);k.position.set(40,180,40),k.castShadow=!0,k.shadow.camera.left=-200,k.shadow.camera.right=200,k.shadow.camera.top=200,k.shadow.camera.bottom=-200,k.shadow.camera.near=1,k.shadow.camera.far=400,k.shadow.bias=1e-4,k.shadow.mapSize.set(2048,2048),e.add(k),r=new _1,r.gravity.set(0,-9.82,0),r.solver instanceof im&&(r.solver.iterations=50),r.allowSleep=!1,r.addContactMaterial(new bs(g,_,{friction:.05,restitution:.1})),r.addContactMaterial(new bs(g,S,{friction:.1,restitution:.1})),r.addContactMaterial(new bs(g,g,{friction:.5,restitution:0}));const G=new Cn({color:1710618,roughness:.8,metalness:0});o=new oe(new tn(1e3,1e3),G),o.rotation.x=-Math.PI/2,o.receiveShadow=!0,e.add(o),a=new Ut({mass:0,material:_}),a.addShape(new nT),a.quaternion.setFromEuler(-Math.PI/2,0,0),r.addBody(a),V(-200,200,-15,15);const rt=new Cn({color:16711935,transparent:!0,opacity:.3,metalness:.5,roughness:.1});for(let ct=0;ct<4;ct++){const lt=new Ut({mass:0,material:_});lt.collisionFilterGroup=Gl,lt.collisionFilterMask=Xi,r.addBody(lt);const pt=new oe(new Ri(1,1,1),rt);pt.renderOrder=999,pt.raycast=()=>{},e.add(pt),h.push({body:lt,mesh:pt})}L(),window.addEventListener("keydown",ct=>{ct.key.toLowerCase()==="t"&&T()}),U(),ft()}function T(){const k=Math.random()>.5?"P1":"P2",G=new A(l.length,0,0,16777215,"T",k);G.isEntering=!1;const rt=Math.random()*Math.PI*2;G.body.velocity.set(Math.cos(rt)*150,0,Math.sin(rt)*150),l.push(G),console.log("Test Car Spawned!")}function L(){const k=i.clientWidth,G=i.clientHeight,rt=k/G,ct=G>k?qn/(rt*1.5):qn;n?(n.left=-ct*rt,n.right=ct*rt,n.top=ct,n.bottom=-ct,n.updateProjectionMatrix()):(n=new Ba(-ct*rt,ct*rt,ct,-ct,.1,1e3),n.position.set(0,150,0),n.lookAt(0,0,0)),s.setSize(k,G)}let X=5,O=0;function q(){if(h.length!==4)return;const k=i.clientWidth,G=i.clientHeight,rt=k/G,ct=G>k?qn/(rt*1.5):qn;X>1&&(X-=.04,X<1&&(X=1));const lt=(ct*rt+.5)*X,pt=(ct*(1-120/G)+.5)*X,I=50,N=100,D=1,z=Math.abs(X-O)>.1;z&&(O=X),h[0].body.position.set(0,0,-pt-I/2),z&&(h[0].body.shapes=[],h[0].body.addShape(new Pn(new E(lt+I,N/2,I/2)))),h[0].mesh.position.set(0,N/2,-pt+D/2),h[0].mesh.scale.set(lt*2+2,N,D),h[1].body.position.set(0,0,pt+I/2),z&&(h[1].body.shapes=[],h[1].body.addShape(new Pn(new E(lt+I,N/2,I/2)))),h[1].mesh.position.set(0,N/2,pt-D/2),h[1].mesh.scale.set(lt*2+2,N,D),h[2].body.position.set(-lt-I/2,0,0),z&&(h[2].body.shapes=[],h[2].body.addShape(new Pn(new E(I/2,N/2,pt+I)))),h[2].mesh.position.set(-lt+D/2,N/2,0),h[2].mesh.scale.set(D,N,pt*2+2),h[3].body.position.set(lt+I/2,0,0),z&&(h[3].body.shapes=[],h[3].body.addShape(new Pn(new E(I/2,N/2,pt+I)))),h[3].mesh.position.set(lt-D/2,N/2,0),h[3].mesh.scale.set(D,N,pt*2+2)}function V(k,G,rt,ct){const I=new $r({color:16750848}),N=rt-k;if(N>0){const z=new tn(1,N),H=new oe(z,I);H.rotation.x=-Math.PI/2,H.position.set(-2.5/2,.06,k+N/2),H.name="road_marking",e.add(H);const $=new oe(z,I);$.rotation.x=-Math.PI/2,$.position.set(2.5/2,.06,k+N/2),$.name="road_marking",e.add($)}const D=G-ct;if(D>0){const z=new tn(1,D),H=new oe(z,I);H.rotation.x=-Math.PI/2,H.position.set(-2.5/2,.06,ct+D/2),H.name="road_marking",e.add(H);const $=new oe(z,I);$.rotation.x=-Math.PI/2,$.position.set(2.5/2,.06,ct+D/2),$.name="road_marking",e.add($)}}function U(){X=5;const k=Ai.currentList.value;if(k.length===0)return;const G=k[Math.floor(Math.random()*k.length)];p.word=G.text.split(""),p.nextSlotIndex=0,p.isGameOver=!1,p.isClearing=!1,c.length=0;const rt=i.clientWidth,ct=i.clientHeight,lt=rt/ct,pt=ct>rt?qn/(lt*1.5):qn,I=[];e.traverse(_t=>{_t.name&&(_t.name.startsWith("spot_")||_t.name==="road_marking")&&I.push(_t)}),I.forEach(_t=>e.remove(_t));const N=p.word.length,D=pt*lt*2*.9,z=12,H=16,$=Math.max(1,Math.floor(D/z)),R=Math.ceil(N/$),it=7,et=11;let tt=0,st=0;for(let _t=0;_t<N;_t++){const gt=Math.floor(_t/$),Et=_t%$,Nt=gt===R-1&&N%$||$,mt=(Et-(Nt-1)/2)*z,St=(gt-(R-1)/2)*H;_t===0?(tt=St,st=St):(tt=Math.min(tt,St),st=Math.max(st,St)),c.push({char:p.word[_t],occupied:!1,x:mt,z:St,winnerTeam:null});const Tt=new Cn({color:16777215,transparent:!0,opacity:.6,emissive:16777215,emissiveIntensity:.2}),Rt=new oe(new tn(it,.3),Tt);Rt.rotation.x=-Math.PI/2,Rt.position.set(mt,.07,St-et/2),Rt.name=`spot_frame_${_t}_t`,e.add(Rt);const bt=new oe(new tn(it,.3),Tt);bt.rotation.x=-Math.PI/2,bt.position.set(mt,.07,St+et/2),bt.name=`spot_frame_${_t}_b`,e.add(bt);const Gt=new oe(new tn(.3,et),Tt);Gt.rotation.x=-Math.PI/2,Gt.position.set(mt-it/2,.07,St),Gt.name=`spot_frame_${_t}_l`,e.add(Gt);const Y=new oe(new tn(.3,et),Tt);Y.rotation.x=-Math.PI/2,Y.position.set(mt+it/2,.07,St),Y.name=`spot_frame_${_t}_r`,e.add(Y);const At=new oe(new tn(5.5,5.5),new Cn({map:x(p.word[_t],"#00000000","rgba(255,255,255,0.4)"),transparent:!0,emissive:16777215,emissiveIntensity:.1}));At.name=`spot_label_${_t}`,At.rotation.x=-Math.PI/2,At.position.set(mt,.08,St),At.raycast=()=>{},e.add(At)}const C=10;V(-200,200,tt-C,st+C);const y=[16777215,16763904];for(let _t=0;_t<y.length;_t++)f.push(new F((Math.random()-.5)*50,(Math.random()-.5)*30,y[_t]));for(let _t=0;_t<15;_t++){const gt=2+Math.random()*3,Et=new E((Math.random()-.5)*110,gt/2,(Math.random()-.5)*(st-tt+20)),Nt=new oe(new Ri(gt,gt,gt),new Cn({color:w(),metalness:.6,roughness:.4}));Nt.castShadow=!0,Nt.receiveShadow=!0,e.add(Nt);const mt=new Ut({mass:T1,material:S,position:Et});mt.addShape(new Pn(new E(gt/2,gt/2,gt/2))),r.addBody(mt),u.push({mesh:Nt,body:mt})}const B=15,Z=2,ht=new Cn({color:16711935,transparent:!0,opacity:.3});[st+C,tt-C].forEach(_t=>{const gt=new Ut({mass:0});gt.addShape(new Pn(new E(150,B/2,Z/2))),gt.position.set(0,B/2,_t),gt.collisionFilterGroup=Hl,gt.collisionFilterMask=Xi,r.addBody(gt);const Et=new oe(new Ri(300,B,Z),ht);Et.position.set(0,B/2,_t),Et.raycast=()=>{},e.add(Et),d.push({mesh:Et,body:gt})}),W("P1",st+22,91368),W("P2",tt-22,15208739),t.onSpeak(p.word.join(""))}function W(k,G,rt){const ct=Math.max(4,Math.ceil(p.word.length*1.5)),lt=[];for(let D=0;D<ct;D++)lt.push(p.word[D%p.word.length]);lt.sort(()=>Math.random()-.5);const pt=i.clientWidth/i.clientHeight,N=(i.clientHeight>i.clientWidth?qn/(pt*1.5):qn)*pt*.8;lt.forEach((D,z)=>{const H=k==="P1"?140:-140,$=N*2/(lt.length+1),R=-N+(z+1)*$+(Math.random()-.5)*5,it=new A(l.length,R,H,rt,D,k),et=(Math.random()-.5)*.4;it.body.quaternion.setFromEuler(0,(k==="P1"?Math.PI:0)+et,0),it.body.quaternion.setFromEuler(0,(k==="P1"?Math.PI:0)+et,0),it.targetEntryZ=G+(Math.random()-.5)*10,it.entrySpeedMult=1+Math.random()*.8,l.push(it)})}let j;function ft(){if(j=requestAnimationFrame(ft),r.step(1/60),q(),p.isGameOver)p.isClearing?l.every(G=>Math.abs(G.body.position.z)>120)&&(m===0&&(m=Date.now()),Date.now()-m>300&&(m=0,dt())):Date.now()-p.gameOverTime>800&&(p.isClearing=!0,l.forEach(k=>k.exit()));else{for(;p.nextSlotIndex<c.length&&c[p.nextSlotIndex].occupied;)p.nextSlotIndex++;c.every(k=>k.occupied)&&(p.isGameOver=!0,p.gameOverTime=Date.now(),t.onSpeak(p.word.join("")))}if(l.forEach(k=>{k.applySeparation(l),k.update()}),f.forEach(k=>k.update()),at.isDragging&&at.car){const k=at.car,G=k.body,rt=20;G.velocity.x=(at.targetPos.x-G.position.x)*rt,G.velocity.z=(at.targetPos.z-G.position.z)*rt,k.isParking||(G.angularVelocity.set(0,0,0),G.quaternion.copy(at.startRot))}u.forEach(k=>{const G=k.body.velocity;G.length()>Qo&&G.scale(Qo/G.length(),G),k.mesh.position.copy(k.body.position),k.mesh.quaternion.copy(k.body.quaternion)}),s.render(e,n)}const at={car:null,isDragging:!1,startPos:new Lt,startRot:new Ne,targetPos:new J,plane:new ji(new J(0,1,0),0),rect:null};function dt(){l.forEach(G=>{e.remove(G.mesh),r.removeBody(G.body)}),l.length=0,f.forEach(G=>G.destroy()),f.length=0,u.forEach(G=>{e.remove(G.mesh),r.removeBody(G.body)}),u.length=0;const k=[];e.traverse(G=>{G.name&&(G.name.startsWith("spot_")||G.name==="mission_complete_label")&&k.push(G)}),k.forEach(G=>e.remove(G)),U()}function xt(){d.length!==0&&(d.forEach(k=>{e.remove(k.mesh),r.removeBody(k.body)}),d=[])}function Ft(k){xt();const G=i.getBoundingClientRect();at.rect=G;const rt=new Lt((k.clientX-G.left)/G.width*2-1,-((k.clientY-G.top)/G.height)*2+1);at.startPos.set(k.clientX,k.clientY);const ct=new af;ct.setFromCamera(rt,n);const lt=ct.intersectObjects(e.children,!0);console.log(`Click detected. Hits: ${lt.length}`),lt.forEach((I,N)=>{var D;return console.log(` Hit ${N}: ${I.object.name||"unnamed"} (Parent: ${((D=I.object.parent)==null?void 0:D.name)||"none"})`)});let pt=!1;for(const I of lt){let N=I.object;for(;N&&N.userData.carId===void 0&&N.parent;)N=N.parent;if(N&&N.userData.carId!==void 0){const D=N.userData.carId,z=l.find(H=>H.id===D);if(z)if(console.log(`Found Car ID: ${D}, Team: ${z.team}, isEntering: ${z.isEntering}, isParkedFinal: ${z.isParkedFinal}, Z: ${z.body.position.z.toFixed(1)}`),!z.isParkedFinal&&Math.abs(z.body.position.z)<135){at.car=z,at.isDragging=!1,at.startRot.copy(z.body.quaternion),ct.ray.intersectPlane(at.plane,at.targetPos),pt=!0,console.log("-> SUCCESS: Car selected for drag/click.");break}else console.log("-> REJECTED: Car state or position not valid for interaction.")}}pt||console.warn("No car found at click position.")}function kt(k){if(at.car&&(at.isDragging||Math.sqrt(Math.pow(k.clientX-at.startPos.x,2)+Math.pow(k.clientY-at.startPos.y,2))>5&&(at.isDragging=!0),at.isDragging)){const G=at.rect||i.getBoundingClientRect(),rt=new Lt((k.clientX-G.left)/G.width*2-1,-((k.clientY-G.top)/G.height)*2+1),ct=new af;ct.setFromCamera(rt,n),ct.ray.intersectPlane(at.plane,at.targetPos),at.car.isParking&&(at.car.stuckTimer=0)}}function jt(){if(at.car){if(!at.isDragging){const k=at.car;if(!k.isParking&&!k.isParkedFinal){t.onSpeak(k.char);let G=!1;for(let rt=p.nextSlotIndex;rt<p.word.length;rt++)if(c[rt].char===k.char&&!c[rt].occupied){if(l.some(pt=>pt.team===k.team&&pt.isParking&&pt.targetSpot===c[rt]))continue;if(rt===p.nextSlotIndex||l.some(pt=>pt.isParking&&pt.targetSpot===c[rt-1])){k.park(c[rt]),G=!0;break}}G||(t.onParkFail(),k.shake())}else k.shake(),k.isParking&&k.boost()}at.car=null,at.isDragging=!1}}return b(),i.addEventListener("pointerdown",Ft),document.addEventListener("pointermove",kt),document.addEventListener("pointerup",jt),Rs(()=>{cancelAnimationFrame(j),i.removeEventListener("pointerdown",Ft),document.removeEventListener("pointermove",kt),document.removeEventListener("pointerup",jt),window.removeEventListener("resize",L),s.dispose()}),{scores:v,gameState:p}}const P1={class:"game-container"},I1={class:"function-area p2"},L1={class:"ctrl-group"},D1={class:"score-display"},N1={class:"function-area p1"},F1={class:"ctrl-group"},U1={class:"score-display"},O1=pr({__name:"ParkingGame",emits:["exit"],setup(i,{emit:t}){const e=t,{speak:n,playTone:s,playWrong:r}=mr(),o=ie(null),a=ie(1),l=ie(1),c=ie(0),u=ie(0);return window.addEventListener("hashchange",()=>{window.location.hash.replace("#/","")||e("exit")}),fo(()=>{window.location.hash="#/parking-jam",o.value&&R1(o.value,{p1Speed:a,p2Speed:l,onScore:(f,h)=>{f==="P1"?c.value=h:u.value=h,s(600,"sine",.1)},onWin:()=>{s(800,"triangle",.3)},onSpeak:f=>n(f),onParkSuccess:()=>s(1e3,"sine",.05),onParkFail:()=>r()})}),(f,h)=>(Yt(),Qt("div",P1,[vt("canvas",{ref_key:"canvasRef",ref:o,class:"webgl"},null,512),vt("div",I1,[vt("div",L1,[pa(vt("input",{type:"range","onUpdate:modelValue":h[0]||(h[0]=d=>l.value=d),min:"0.5",max:"3.0",step:"0.1",class:"speed-slider"},null,512),[[ec,l.value,void 0,{number:!0}]])]),vt("div",D1,xe(u.value),1)]),vt("div",N1,[vt("div",F1,[pa(vt("input",{type:"range","onUpdate:modelValue":h[1]||(h[1]=d=>a.value=d),min:"0.5",max:"3.0",step:"0.1",class:"speed-slider"},null,512),[[ec,a.value,void 0,{number:!0}]])]),vt("div",U1,xe(c.value),1)])]))}}),B1=gr(O1,[["__scopeId","data-v-b5dba3ce"]]),z1={key:0,class:"portal-container"},V1={class:"settings-panel"},k1={class:"setting-item"},G1={class:"setting-item"},H1={class:"setting-item"},W1=["value"],X1={class:"games-grid"},q1=["onClick"],$1={class:"game-icon"},Y1={class:"game-info"},j1={class:"modal-content"},K1={class:"modal-header"},Z1={class:"vocab-list"},J1=["onClick"],Q1={class:"vocab-name"},tA={class:"vocab-count"},eA=pr({__name:"App",setup(i){const{speak:t}=mr(),e=ie(window.location.hash.replace("#/","")||null),n=ie(!1),s=[{id:"falling-words",name:"Star Words",desc:"Catch the words in space!",icon:"🚀"},{id:"spelling-mode",name:"Spell Master",desc:"Spell words letter by letter!",icon:"🛸"},{id:"duel-mode",name:"Duel",desc:"2-Player Battle!",icon:"⚔️"},{id:"code-knight",name:"Code Knight",desc:"Control by your voice!",icon:"🛡️"},{id:"parking-jam",name:"Parking Jam",desc:"Race to park cars!",icon:"🚗"},{id:"coming-soon",name:"More Games",desc:"Coming Soon...",icon:"🔐"}];window.addEventListener("hashchange",()=>{const h=window.location.hash.replace("#/","");e.value=h||null});const r=h=>{h!=="coming-soon"&&(e.value=h,window.location.hash=`#/${h}`)},o=()=>{e.value=null,window.location.hash=""},a=ie([]),l=()=>{a.value=window.speechSynthesis.getVoices().filter(h=>h.lang.startsWith("en")||h.lang.startsWith("zh"))},c=()=>{t("Hello, 你好")};l(),window.speechSynthesis.onvoiceschanged!==void 0&&(window.speechSynthesis.onvoiceschanged=l);const u=()=>{n.value=!n.value},f=h=>{Ai.selectList(h),n.value=!1};return(h,d)=>e.value?e.value==="falling-words"?(Yt(),Ks(uv,{key:1,onExit:o})):e.value==="spelling-mode"?(Yt(),Ks(wv,{key:2,onExit:o})):e.value==="duel-mode"?(Yt(),Ks(qv,{key:3,onExit:o})):e.value==="code-knight"?(Yt(),Ks(ox,{key:4,onExit:o})):e.value==="parking-jam"?(Yt(),Ks(B1,{key:5,onExit:o})):On("",!0):(Yt(),Qt("div",z1,[d[8]||(d[8]=vt("h1",{class:"portal-title"},"Kid's Learning Ark",-1)),vt("div",V1,[vt("div",k1,[d[4]||(d[4]=vt("label",null,"Vocabulary:",-1)),vt("button",{class:"vocab-btn",onClick:u}," 📖 "+xe(Wt(Ai).state.currentListName),1)]),vt("div",G1,[vt("label",null,"Speech Speed: "+xe(Wt(Ti).speechRate)+"x",1),pa(vt("input",{type:"range",min:"0.5",max:"2.0",step:"0.1","onUpdate:modelValue":d[0]||(d[0]=m=>Wt(Ti).speechRate=m)},null,512),[[ec,Wt(Ti).speechRate,void 0,{number:!0}]])]),vt("div",H1,[d[6]||(d[6]=vt("label",null,"Game Voice:",-1)),pa(vt("select",{"onUpdate:modelValue":d[1]||(d[1]=m=>Wt(Ti).voiceURI=m)},[d[5]||(d[5]=vt("option",{value:null},"Default (Auto)",-1)),(Yt(!0),Qt(Ce,null,xn(a.value,m=>(Yt(),Qt("option",{key:m.voiceURI,value:m.voiceURI},xe(m.name),9,W1))),128))],512),[[P0,Wt(Ti).voiceURI]])]),vt("div",{class:"test-voice"},[vt("button",{onClick:c},"Test Voice")])]),vt("div",X1,[(Yt(),Qt(Ce,null,xn(s,m=>vt("div",{key:m.id,class:Kn(["game-card",{disabled:m.id==="coming-soon"}]),onClick:v=>r(m.id)},[vt("div",$1,xe(m.icon),1),vt("div",Y1,[vt("h3",null,xe(m.name),1),vt("p",null,xe(m.desc),1)])],10,q1)),64))]),n.value?(Yt(),Qt("div",{key:0,class:"modal-overlay",onClick:d[3]||(d[3]=no(m=>n.value=!1,["self"]))},[vt("div",j1,[vt("div",K1,[d[7]||(d[7]=vt("h2",null,"Select Vocabulary",-1)),vt("button",{class:"close-btn",onClick:d[2]||(d[2]=m=>n.value=!1)},"×")]),vt("div",Z1,[(Yt(!0),Qt(Ce,null,xn(Wt(Ai).lists,m=>(Yt(),Qt("div",{key:m.name,class:Kn(["vocab-item",{active:m.name===Wt(Ai).state.currentListName}]),onClick:v=>f(m.name)},[vt("span",Q1,xe(m.name),1),vt("span",tA,xe(m.data.length)+" words",1)],10,J1))),128))])])])):On("",!0)]))}}),nA=gr(eA,[["__scopeId","data-v-c468e9c2"]]);F0(nA).mount("#app");
