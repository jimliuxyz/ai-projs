var dm=Object.defineProperty;var pm=(n,t,e)=>t in n?dm(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var Te=(n,t,e)=>pm(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function eu(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const Se={},Js=[],Qn=()=>{},ed=()=>!1,Ea=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),nu=n=>n.startsWith("onUpdate:"),Ke=Object.assign,iu=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},mm=Object.prototype.hasOwnProperty,pe=(n,t)=>mm.call(n,t),Kt=Array.isArray,Qs=n=>uo(n)==="[object Map]",Ta=n=>uo(n)==="[object Set]",$u=n=>uo(n)==="[object Date]",te=n=>typeof n=="function",Oe=n=>typeof n=="string",si=n=>typeof n=="symbol",Ee=n=>n!==null&&typeof n=="object",nd=n=>(Ee(n)||te(n))&&te(n.then)&&te(n.catch),id=Object.prototype.toString,uo=n=>id.call(n),gm=n=>uo(n).slice(8,-1),sd=n=>uo(n)==="[object Object]",su=n=>Oe(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Vr=eu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Aa=n=>{const t=Object.create(null);return e=>t[e]||(t[e]=n(e))},vm=/-\w/g,Qi=Aa(n=>n.replace(vm,t=>t.slice(1).toUpperCase())),_m=/\B([A-Z])/g,As=Aa(n=>n.replace(_m,"-$1").toLowerCase()),rd=Aa(n=>n.charAt(0).toUpperCase()+n.slice(1)),Wa=Aa(n=>n?`on${rd(n)}`:""),Ji=(n,t)=>!Object.is(n,t),ta=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},od=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},Ca=n=>{const t=parseFloat(n);return isNaN(t)?n:t};let Yu;const Ra=()=>Yu||(Yu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function nn(n){if(Kt(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],s=Oe(i)?Mm(i):nn(i);if(s)for(const r in s)t[r]=s[r]}return t}else if(Oe(n)||Ee(n))return n}const xm=/;(?![^(]*\))/g,ym=/:([^]+)/,Sm=/\/\*[^]*?\*\//g;function Mm(n){const t={};return n.replace(Sm,"").split(xm).forEach(e=>{if(e){const i=e.split(ym);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function Kn(n){let t="";if(Oe(n))t=n;else if(Kt(n))for(let e=0;e<n.length;e++){const i=Kn(n[e]);i&&(t+=i+" ")}else if(Ee(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const bm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",wm=eu(bm);function ad(n){return!!n||n===""}function Em(n,t){if(n.length!==t.length)return!1;let e=!0;for(let i=0;e&&i<n.length;i++)e=Pa(n[i],t[i]);return e}function Pa(n,t){if(n===t)return!0;let e=$u(n),i=$u(t);if(e||i)return e&&i?n.getTime()===t.getTime():!1;if(e=si(n),i=si(t),e||i)return n===t;if(e=Kt(n),i=Kt(t),e||i)return e&&i?Em(n,t):!1;if(e=Ee(n),i=Ee(t),e||i){if(!e||!i)return!1;const s=Object.keys(n).length,r=Object.keys(t).length;if(s!==r)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=t.hasOwnProperty(o);if(a&&!l||!a&&l||!Pa(n[o],t[o]))return!1}}return String(n)===String(t)}function Tm(n,t){return n.findIndex(e=>Pa(e,t))}const ld=n=>!!(n&&n.__v_isRef===!0),_e=n=>Oe(n)?n:n==null?"":Kt(n)||Ee(n)&&(n.toString===id||!te(n.toString))?ld(n)?_e(n.value):JSON.stringify(n,cd,2):String(n),cd=(n,t)=>ld(t)?cd(n,t.value):Qs(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[i,s],r)=>(e[qa(i,r)+" =>"]=s,e),{})}:Ta(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>qa(e))}:si(t)?qa(t):Ee(t)&&!Kt(t)&&!sd(t)?String(t):t,qa=(n,t="")=>{var e;return si(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};/**
* @vue/reactivity v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let cn;class Am{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=cn,!t&&cn&&(this.index=(cn.scopes||(cn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=cn;try{return cn=this,t()}finally{cn=e}}}on(){++this._on===1&&(this.prevScope=cn,cn=this)}off(){this._on>0&&--this._on===0&&(cn=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(this.effects.length=0,e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){for(e=0,i=this.scopes.length;e<i;e++)this.scopes[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Cm(){return cn}let we;const Xa=new WeakSet;class ud{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,cn&&cn.active&&cn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Xa.has(this)&&(Xa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||fd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ju(this),dd(this);const t=we,e=On;we=this,On=!0;try{return this.fn()}finally{pd(this),we=t,On=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)au(t);this.deps=this.depsTail=void 0,ju(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Xa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Wl(this)&&this.run()}get dirty(){return Wl(this)}}let hd=0,kr,Gr;function fd(n,t=!1){if(n.flags|=8,t){n.next=Gr,Gr=n;return}n.next=kr,kr=n}function ru(){hd++}function ou(){if(--hd>0)return;if(Gr){let t=Gr;for(Gr=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let n;for(;kr;){let t=kr;for(kr=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function dd(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function pd(n){let t,e=n.depsTail,i=e;for(;i;){const s=i.prevDep;i.version===-1?(i===e&&(e=s),au(i),Rm(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=t,n.depsTail=e}function Wl(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(md(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function md(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Zr)||(n.globalVersion=Zr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Wl(n))))return;n.flags|=2;const t=n.dep,e=we,i=On;we=n,On=!0;try{dd(n);const s=n.fn(n._value);(t.version===0||Ji(s,n._value))&&(n.flags|=128,n._value=s,t.version++)}catch(s){throw t.version++,s}finally{we=e,On=i,pd(n),n.flags&=-3}}function au(n,t=!1){const{dep:e,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i,!i&&e.computed)){e.computed.flags&=-5;for(let r=e.computed.deps;r;r=r.nextDep)au(r,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function Rm(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let On=!0;const gd=[];function Li(){gd.push(On),On=!1}function Di(){const n=gd.pop();On=n===void 0?!0:n}function ju(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=we;we=void 0;try{t()}finally{we=e}}}let Zr=0;class Pm{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class lu{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!we||!On||we===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==we)e=this.activeLink=new Pm(we,this),we.deps?(e.prevDep=we.depsTail,we.depsTail.nextDep=e,we.depsTail=e):we.deps=we.depsTail=e,vd(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=we.depsTail,e.nextDep=void 0,we.depsTail.nextDep=e,we.depsTail=e,we.deps===e&&(we.deps=i)}return e}trigger(t){this.version++,Zr++,this.notify(t)}notify(t){ru();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{ou()}}}function vd(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)vd(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const ql=new WeakMap,Ss=Symbol(""),Xl=Symbol(""),Jr=Symbol("");function qe(n,t,e){if(On&&we){let i=ql.get(n);i||ql.set(n,i=new Map);let s=i.get(e);s||(i.set(e,s=new lu),s.map=i,s.key=e),s.track()}}function wi(n,t,e,i,s,r){const o=ql.get(n);if(!o){Zr++;return}const a=l=>{l&&l.trigger()};if(ru(),t==="clear")o.forEach(a);else{const l=Kt(n),c=l&&su(e);if(l&&e==="length"){const u=Number(i);o.forEach((f,h)=>{(h==="length"||h===Jr||!si(h)&&h>=u)&&a(f)})}else switch((e!==void 0||o.has(void 0))&&a(o.get(e)),c&&a(o.get(Jr)),t){case"add":l?c&&a(o.get("length")):(a(o.get(Ss)),Qs(n)&&a(o.get(Xl)));break;case"delete":l||(a(o.get(Ss)),Qs(n)&&a(o.get(Xl)));break;case"set":Qs(n)&&a(o.get(Ss));break}}ou()}function Is(n){const t=de(n);return t===n?t:(qe(t,"iterate",Jr),En(n)?t:t.map(Vn))}function Ia(n){return qe(n=de(n),"iterate",Jr),n}function Xi(n,t){return Ni(n)?Ms(n)?or(Vn(t)):or(t):Vn(t)}const Im={__proto__:null,[Symbol.iterator](){return $a(this,Symbol.iterator,n=>Xi(this,n))},concat(...n){return Is(this).concat(...n.map(t=>Kt(t)?Is(t):t))},entries(){return $a(this,"entries",n=>(n[1]=Xi(this,n[1]),n))},every(n,t){return fi(this,"every",n,t,void 0,arguments)},filter(n,t){return fi(this,"filter",n,t,e=>e.map(i=>Xi(this,i)),arguments)},find(n,t){return fi(this,"find",n,t,e=>Xi(this,e),arguments)},findIndex(n,t){return fi(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return fi(this,"findLast",n,t,e=>Xi(this,e),arguments)},findLastIndex(n,t){return fi(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return fi(this,"forEach",n,t,void 0,arguments)},includes(...n){return Ya(this,"includes",n)},indexOf(...n){return Ya(this,"indexOf",n)},join(n){return Is(this).join(n)},lastIndexOf(...n){return Ya(this,"lastIndexOf",n)},map(n,t){return fi(this,"map",n,t,void 0,arguments)},pop(){return Sr(this,"pop")},push(...n){return Sr(this,"push",n)},reduce(n,...t){return Ku(this,"reduce",n,t)},reduceRight(n,...t){return Ku(this,"reduceRight",n,t)},shift(){return Sr(this,"shift")},some(n,t){return fi(this,"some",n,t,void 0,arguments)},splice(...n){return Sr(this,"splice",n)},toReversed(){return Is(this).toReversed()},toSorted(n){return Is(this).toSorted(n)},toSpliced(...n){return Is(this).toSpliced(...n)},unshift(...n){return Sr(this,"unshift",n)},values(){return $a(this,"values",n=>Xi(this,n))}};function $a(n,t,e){const i=Ia(n),s=i[t]();return i!==n&&!En(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=e(r.value)),r}),s}const Lm=Array.prototype;function fi(n,t,e,i,s,r){const o=Ia(n),a=o!==n&&!En(n),l=o[t];if(l!==Lm[t]){const f=l.apply(n,r);return a?Vn(f):f}let c=e;o!==n&&(a?c=function(f,h){return e.call(this,Xi(n,f),h,n)}:e.length>2&&(c=function(f,h){return e.call(this,f,h,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function Ku(n,t,e,i){const s=Ia(n);let r=e;return s!==n&&(En(n)?e.length>3&&(r=function(o,a,l){return e.call(this,o,a,l,n)}):r=function(o,a,l){return e.call(this,o,Xi(n,a),l,n)}),s[t](r,...i)}function Ya(n,t,e){const i=de(n);qe(i,"iterate",Jr);const s=i[t](...e);return(s===-1||s===!1)&&hu(e[0])?(e[0]=de(e[0]),i[t](...e)):s}function Sr(n,t,e=[]){Li(),ru();const i=de(n)[t].apply(n,e);return ou(),Di(),i}const Dm=eu("__proto__,__v_isRef,__isVue"),_d=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(si));function Nm(n){si(n)||(n=String(n));const t=de(this);return qe(t,"has",n),t.hasOwnProperty(n)}class xd{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){if(e==="__v_skip")return t.__v_skip;const s=this._isReadonly,r=this._isShallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return r;if(e==="__v_raw")return i===(s?r?Wm:bd:r?Md:Sd).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const o=Kt(t);if(!s){let l;if(o&&(l=Im[e]))return l;if(e==="hasOwnProperty")return Nm}const a=Reflect.get(t,e,$e(t)?t:i);if((si(e)?_d.has(e):Dm(e))||(s||qe(t,"get",e),r))return a;if($e(a)){const l=o&&su(e)?a:a.value;return s&&Ee(l)?Yl(l):l}return Ee(a)?s?Yl(a):Cs(a):a}}class yd extends xd{constructor(t=!1){super(!1,t)}set(t,e,i,s){let r=t[e];const o=Kt(t)&&su(e);if(!this._isShallow){const c=Ni(r);if(!En(i)&&!Ni(i)&&(r=de(r),i=de(i)),!o&&$e(r)&&!$e(i))return c||(r.value=i),!0}const a=o?Number(e)<t.length:pe(t,e),l=Reflect.set(t,e,i,$e(t)?t:s);return t===de(s)&&(a?Ji(i,r)&&wi(t,"set",e,i):wi(t,"add",e,i)),l}deleteProperty(t,e){const i=pe(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&i&&wi(t,"delete",e,void 0),s}has(t,e){const i=Reflect.has(t,e);return(!si(e)||!_d.has(e))&&qe(t,"has",e),i}ownKeys(t){return qe(t,"iterate",Kt(t)?"length":Ss),Reflect.ownKeys(t)}}class Fm extends xd{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const Um=new yd,Om=new Fm,Bm=new yd(!0);const $l=n=>n,So=n=>Reflect.getPrototypeOf(n);function zm(n,t,e){return function(...i){const s=this.__v_raw,r=de(s),o=Qs(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=e?$l:t?or:Vn;return!t&&qe(r,"iterate",l?Xl:Ss),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function Mo(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function Vm(n,t){const e={get(s){const r=this.__v_raw,o=de(r),a=de(s);n||(Ji(s,a)&&qe(o,"get",s),qe(o,"get",a));const{has:l}=So(o),c=t?$l:n?or:Vn;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&qe(de(s),"iterate",Ss),s.size},has(s){const r=this.__v_raw,o=de(r),a=de(s);return n||(Ji(s,a)&&qe(o,"has",s),qe(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=de(a),c=t?$l:n?or:Vn;return!n&&qe(l,"iterate",Ss),a.forEach((u,f)=>s.call(r,c(u),c(f),o))}};return Ke(e,n?{add:Mo("add"),set:Mo("set"),delete:Mo("delete"),clear:Mo("clear")}:{add(s){!t&&!En(s)&&!Ni(s)&&(s=de(s));const r=de(this);return So(r).has.call(r,s)||(r.add(s),wi(r,"add",s,s)),this},set(s,r){!t&&!En(r)&&!Ni(r)&&(r=de(r));const o=de(this),{has:a,get:l}=So(o);let c=a.call(o,s);c||(s=de(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?Ji(r,u)&&wi(o,"set",s,r):wi(o,"add",s,r),this},delete(s){const r=de(this),{has:o,get:a}=So(r);let l=o.call(r,s);l||(s=de(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&wi(r,"delete",s,void 0),c},clear(){const s=de(this),r=s.size!==0,o=s.clear();return r&&wi(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=zm(s,n,t)}),e}function cu(n,t){const e=Vm(n,t);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(pe(e,s)&&s in i?e:i,s,r)}const km={get:cu(!1,!1)},Gm={get:cu(!1,!0)},Hm={get:cu(!0,!1)};const Sd=new WeakMap,Md=new WeakMap,bd=new WeakMap,Wm=new WeakMap;function qm(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Xm(n){return n.__v_skip||!Object.isExtensible(n)?0:qm(gm(n))}function Cs(n){return Ni(n)?n:uu(n,!1,Um,km,Sd)}function $m(n){return uu(n,!1,Bm,Gm,Md)}function Yl(n){return uu(n,!0,Om,Hm,bd)}function uu(n,t,e,i,s){if(!Ee(n)||n.__v_raw&&!(t&&n.__v_isReactive))return n;const r=Xm(n);if(r===0)return n;const o=s.get(n);if(o)return o;const a=new Proxy(n,r===2?i:e);return s.set(n,a),a}function Ms(n){return Ni(n)?Ms(n.__v_raw):!!(n&&n.__v_isReactive)}function Ni(n){return!!(n&&n.__v_isReadonly)}function En(n){return!!(n&&n.__v_isShallow)}function hu(n){return n?!!n.__v_raw:!1}function de(n){const t=n&&n.__v_raw;return t?de(t):n}function Ym(n){return!pe(n,"__v_skip")&&Object.isExtensible(n)&&od(n,"__v_skip",!0),n}const Vn=n=>Ee(n)?Cs(n):n,or=n=>Ee(n)?Yl(n):n;function $e(n){return n?n.__v_isRef===!0:!1}function ie(n){return jm(n,!1)}function jm(n,t){return $e(n)?n:new Km(n,t)}class Km{constructor(t,e){this.dep=new lu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:de(t),this._value=e?t:Vn(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||En(t)||Ni(t);t=i?t:de(t),Ji(t,e)&&(this._rawValue=t,this._value=i?t:Vn(t),this.dep.trigger())}}function Wt(n){return $e(n)?n.value:n}const Zm={get:(n,t,e)=>t==="__v_raw"?n:Wt(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const s=n[t];return $e(s)&&!$e(e)?(s.value=e,!0):Reflect.set(n,t,e,i)}};function wd(n){return Ms(n)?n:new Proxy(n,Zm)}class Jm{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new lu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Zr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&we!==this)return fd(this,!0),!0}get value(){const t=this.dep.track();return md(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Qm(n,t,e=!1){let i,s;return te(n)?i=n:(i=n.get,s=n.set),new Jm(i,s,e)}const bo={},ha=new WeakMap;let ds;function tg(n,t=!1,e=ds){if(e){let i=ha.get(e);i||ha.set(e,i=[]),i.push(n)}}function eg(n,t,e=Se){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=e,c=_=>s?_:En(_)||s===!1||s===0?Ei(_,1):Ei(_);let u,f,h,d,m=!1,v=!1;if($e(n)?(f=()=>n.value,m=En(n)):Ms(n)?(f=()=>c(n),m=!0):Kt(n)?(v=!0,m=n.some(_=>Ms(_)||En(_)),f=()=>n.map(_=>{if($e(_))return _.value;if(Ms(_))return c(_);if(te(_))return l?l(_,2):_()})):te(n)?t?f=l?()=>l(n,2):n:f=()=>{if(h){Li();try{h()}finally{Di()}}const _=ds;ds=u;try{return l?l(n,3,[d]):n(d)}finally{ds=_}}:f=Qn,t&&s){const _=f,M=s===!0?1/0:s;f=()=>Ei(_(),M)}const p=Cm(),g=()=>{u.stop(),p&&p.active&&iu(p.effects,u)};if(r&&t){const _=t;t=(...M)=>{_(...M),g()}}let x=v?new Array(n.length).fill(bo):bo;const S=_=>{if(!(!(u.flags&1)||!u.dirty&&!_))if(t){const M=u.run();if(s||m||(v?M.some((b,C)=>Ji(b,x[C])):Ji(M,x))){h&&h();const b=ds;ds=u;try{const C=[M,x===bo?void 0:v&&x[0]===bo?[]:x,d];x=M,l?l(t,3,C):t(...C)}finally{ds=b}}}else u.run()};return a&&a(S),u=new ud(f),u.scheduler=o?()=>o(S,!1):S,d=_=>tg(_,!1,u),h=u.onStop=()=>{const _=ha.get(u);if(_){if(l)l(_,4);else for(const M of _)M();ha.delete(u)}},t?i?S(!0):x=u.run():o?o(S.bind(null,!0),!0):u.run(),g.pause=u.pause.bind(u),g.resume=u.resume.bind(u),g.stop=g,g}function Ei(n,t=1/0,e){if(t<=0||!Ee(n)||n.__v_skip||(e=e||new Map,(e.get(n)||0)>=t))return n;if(e.set(n,t),t--,$e(n))Ei(n.value,t,e);else if(Kt(n))for(let i=0;i<n.length;i++)Ei(n[i],t,e);else if(Ta(n)||Qs(n))n.forEach(i=>{Ei(i,t,e)});else if(sd(n)){for(const i in n)Ei(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Ei(n[i],t,e)}return n}/**
* @vue/runtime-core v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ho(n,t,e,i){try{return i?n(...i):n()}catch(s){La(s,t,e)}}function ri(n,t,e,i){if(te(n)){const s=ho(n,t,e,i);return s&&nd(s)&&s.catch(r=>{La(r,t,e)}),s}if(Kt(n)){const s=[];for(let r=0;r<n.length;r++)s.push(ri(n[r],t,e,i));return s}}function La(n,t,e,i=!0){const s=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||Se;if(t){let a=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(r){Li(),ho(r,null,10,[n,l,c]),Di();return}}ng(n,e,s,i,o)}function ng(n,t,e,i=!0,s=!1){if(s)throw n;console.error(n)}const en=[];let $n=-1;const tr=[];let $i=null,js=0;const Ed=Promise.resolve();let fa=null;function Td(n){const t=fa||Ed;return n?t.then(this?n.bind(this):n):t}function ig(n){let t=$n+1,e=en.length;for(;t<e;){const i=t+e>>>1,s=en[i],r=Qr(s);r<n||r===n&&s.flags&2?t=i+1:e=i}return t}function fu(n){if(!(n.flags&1)){const t=Qr(n),e=en[en.length-1];!e||!(n.flags&2)&&t>=Qr(e)?en.push(n):en.splice(ig(t),0,n),n.flags|=1,Ad()}}function Ad(){fa||(fa=Ed.then(Rd))}function sg(n){Kt(n)?tr.push(...n):$i&&n.id===-1?$i.splice(js+1,0,n):n.flags&1||(tr.push(n),n.flags|=1),Ad()}function Zu(n,t,e=$n+1){for(;e<en.length;e++){const i=en[e];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;en.splice(e,1),e--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Cd(n){if(tr.length){const t=[...new Set(tr)].sort((e,i)=>Qr(e)-Qr(i));if(tr.length=0,$i){$i.push(...t);return}for($i=t,js=0;js<$i.length;js++){const e=$i[js];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}$i=null,js=0}}const Qr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Rd(n){try{for($n=0;$n<en.length;$n++){const t=en[$n];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),ho(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;$n<en.length;$n++){const t=en[$n];t&&(t.flags&=-2)}$n=-1,en.length=0,Cd(),fa=null,(en.length||tr.length)&&Rd()}}let wn=null,Pd=null;function da(n){const t=wn;return wn=n,Pd=n&&n.type.__scopeId||null,t}function rg(n,t=wn,e){if(!t||n._n)return n;const i=(...s)=>{i._d&&ah(-1);const r=da(t);let o;try{o=n(...s)}finally{da(r),i._d&&ah(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function pa(n,t){if(wn===null)return n;const e=Ua(wn),i=n.dirs||(n.dirs=[]);for(let s=0;s<t.length;s++){let[r,o,a,l=Se]=t[s];r&&(te(r)&&(r={mounted:r,updated:r}),r.deep&&Ei(o),i.push({dir:r,instance:e,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function ss(n,t,e,i){const s=n.dirs,r=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Li(),ri(l,e,8,[n.el,a,n,t]),Di())}}function og(n,t){if(sn){let e=sn.provides;const i=sn.parent&&sn.parent.provides;i===e&&(e=sn.provides=Object.create(i)),e[n]=t}}function ea(n,t,e=!1){const i=s0();if(i||nr){let s=nr?nr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return e&&te(t)?t.call(i&&i.proxy):t}}const ag=Symbol.for("v-scx"),lg=()=>ea(ag);function er(n,t,e){return Id(n,t,e)}function Id(n,t,e=Se){const{immediate:i,deep:s,flush:r,once:o}=e,a=Ke({},e),l=t&&i||!t&&r!=="post";let c;if(eo){if(r==="sync"){const d=lg();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=Qn,d.resume=Qn,d.pause=Qn,d}}const u=sn;a.call=(d,m,v)=>ri(d,u,m,v);let f=!1;r==="post"?a.scheduler=d=>{mn(d,u&&u.suspense)}:r!=="sync"&&(f=!0,a.scheduler=(d,m)=>{m?d():fu(d)}),a.augmentJob=d=>{t&&(d.flags|=4),f&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const h=eg(n,t,a);return eo&&(c?c.push(h):l&&h()),h}function cg(n,t,e){const i=this.proxy,s=Oe(n)?n.includes(".")?Ld(i,n):()=>i[n]:n.bind(i,i);let r;te(t)?r=t:(r=t.handler,e=t);const o=po(this),a=Id(s,r.bind(i),e);return o(),a}function Ld(n,t){const e=t.split(".");return()=>{let i=n;for(let s=0;s<e.length&&i;s++)i=i[e[s]];return i}}const ug=Symbol("_vte"),hg=n=>n.__isTeleport,fg=Symbol("_leaveCb");function du(n,t){n.shapeFlag&6&&n.component?(n.transition=t,du(n.component.subTree,t)):n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}function pr(n,t){return te(n)?Ke({name:n.name},t,{setup:n}):n}function Dd(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}const ma=new WeakMap;function Hr(n,t,e,i,s=!1){if(Kt(n)){n.forEach((m,v)=>Hr(m,t&&(Kt(t)?t[v]:t),e,i,s));return}if(Wr(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Hr(n,t,e,i.component.subTree);return}const r=i.shapeFlag&4?Ua(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=t&&t.r,u=a.refs===Se?a.refs={}:a.refs,f=a.setupState,h=de(f),d=f===Se?ed:m=>pe(h,m);if(c!=null&&c!==l){if(Ju(t),Oe(c))u[c]=null,d(c)&&(f[c]=null);else if($e(c)){c.value=null;const m=t;m.k&&(u[m.k]=null)}}if(te(l))ho(l,a,12,[o,u]);else{const m=Oe(l),v=$e(l);if(m||v){const p=()=>{if(n.f){const g=m?d(l)?f[l]:u[l]:l.value;if(s)Kt(g)&&iu(g,r);else if(Kt(g))g.includes(r)||g.push(r);else if(m)u[l]=[r],d(l)&&(f[l]=u[l]);else{const x=[r];l.value=x,n.k&&(u[n.k]=x)}}else m?(u[l]=o,d(l)&&(f[l]=o)):v&&(l.value=o,n.k&&(u[n.k]=o))};if(o){const g=()=>{p(),ma.delete(n)};g.id=-1,ma.set(n,g),mn(g,e)}else Ju(n),p()}}}function Ju(n){const t=ma.get(n);t&&(t.flags|=8,ma.delete(n))}Ra().requestIdleCallback;Ra().cancelIdleCallback;const Wr=n=>!!n.type.__asyncLoader,Nd=n=>n.type.__isKeepAlive;function dg(n,t){Fd(n,"a",t)}function pg(n,t){Fd(n,"da",t)}function Fd(n,t,e=sn){const i=n.__wdc||(n.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Da(t,i,e),e){let s=e.parent;for(;s&&s.parent;)Nd(s.parent.vnode)&&mg(i,t,e,s),s=s.parent}}function mg(n,t,e,i){const s=Da(t,n,i,!0);Rs(()=>{iu(i[t],s)},e)}function Da(n,t,e=sn,i=!1){if(e){const s=e[n]||(e[n]=[]),r=t.__weh||(t.__weh=(...o)=>{Li();const a=po(e),l=ri(t,e,n,o);return a(),Di(),l});return i?s.unshift(r):s.push(r),r}}const Oi=n=>(t,e=sn)=>{(!eo||n==="sp")&&Da(n,(...i)=>t(...i),e)},gg=Oi("bm"),fo=Oi("m"),vg=Oi("bu"),_g=Oi("u"),xg=Oi("bum"),Rs=Oi("um"),yg=Oi("sp"),Sg=Oi("rtg"),Mg=Oi("rtc");function bg(n,t=sn){Da("ec",n,t)}const wg=Symbol.for("v-ndc");function _n(n,t,e,i){let s;const r=e,o=Kt(n);if(o||Oe(n)){const a=o&&Ms(n);let l=!1,c=!1;a&&(l=!En(n),c=Ni(n),n=Ia(n)),s=new Array(n.length);for(let u=0,f=n.length;u<f;u++)s[u]=t(l?c?or(Vn(n[u])):Vn(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=t(a+1,a,void 0,r)}else if(Ee(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>t(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=t(n[u],u,l,r)}}else s=[];return s}const jl=n=>n?ip(n)?Ua(n):jl(n.parent):null,qr=Ke(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>jl(n.parent),$root:n=>jl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Od(n),$forceUpdate:n=>n.f||(n.f=()=>{fu(n.update)}),$nextTick:n=>n.n||(n.n=Td.bind(n.proxy)),$watch:n=>cg.bind(n)}),ja=(n,t)=>n!==Se&&!n.__isScriptSetup&&pe(n,t),Eg={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(t[0]!=="$"){const h=o[t];if(h!==void 0)switch(h){case 1:return i[t];case 2:return s[t];case 4:return e[t];case 3:return r[t]}else{if(ja(i,t))return o[t]=1,i[t];if(s!==Se&&pe(s,t))return o[t]=2,s[t];if(pe(r,t))return o[t]=3,r[t];if(e!==Se&&pe(e,t))return o[t]=4,e[t];Kl&&(o[t]=0)}}const c=qr[t];let u,f;if(c)return t==="$attrs"&&qe(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[t]))return u;if(e!==Se&&pe(e,t))return o[t]=4,e[t];if(f=l.config.globalProperties,pe(f,t))return f[t]},set({_:n},t,e){const{data:i,setupState:s,ctx:r}=n;return ja(s,t)?(s[t]=e,!0):i!==Se&&pe(i,t)?(i[t]=e,!0):pe(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(r[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(e[a]||n!==Se&&a[0]!=="$"&&pe(n,a)||ja(t,a)||pe(r,a)||pe(i,a)||pe(qr,a)||pe(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:pe(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function Qu(n){return Kt(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let Kl=!0;function Tg(n){const t=Od(n),e=n.proxy,i=n.ctx;Kl=!1,t.beforeCreate&&th(t.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:m,activated:v,deactivated:p,beforeDestroy:g,beforeUnmount:x,destroyed:S,unmounted:_,render:M,renderTracked:b,renderTriggered:C,errorCaptured:F,serverPrefetch:w,expose:T,inheritAttrs:L,components:q,directives:O,filters:X}=t;if(c&&Ag(c,i,null),o)for(const W in o){const j=o[W];te(j)&&(i[W]=j.bind(e))}if(s){const W=s.call(e,e);Ee(W)&&(n.data=Cs(W))}if(Kl=!0,r)for(const W in r){const j=r[W],ft=te(j)?j.bind(e,e):te(j.get)?j.get.bind(e,e):Qn,lt=!te(j)&&te(j.set)?j.set.bind(e):Qn,dt=vu({get:ft,set:lt});Object.defineProperty(i,W,{enumerable:!0,configurable:!0,get:()=>dt.value,set:_t=>dt.value=_t})}if(a)for(const W in a)Ud(a[W],i,e,W);if(l){const W=te(l)?l.call(e):l;Reflect.ownKeys(W).forEach(j=>{og(j,W[j])})}u&&th(u,n,"c");function U(W,j){Kt(j)?j.forEach(ft=>W(ft.bind(e))):j&&W(j.bind(e))}if(U(gg,f),U(fo,h),U(vg,d),U(_g,m),U(dg,v),U(pg,p),U(bg,F),U(Mg,b),U(Sg,C),U(xg,x),U(Rs,_),U(yg,w),Kt(T))if(T.length){const W=n.exposed||(n.exposed={});T.forEach(j=>{Object.defineProperty(W,j,{get:()=>e[j],set:ft=>e[j]=ft,enumerable:!0})})}else n.exposed||(n.exposed={});M&&n.render===Qn&&(n.render=M),L!=null&&(n.inheritAttrs=L),q&&(n.components=q),O&&(n.directives=O),w&&Dd(n)}function Ag(n,t,e=Qn){Kt(n)&&(n=Zl(n));for(const i in n){const s=n[i];let r;Ee(s)?"default"in s?r=ea(s.from||i,s.default,!0):r=ea(s.from||i):r=ea(s),$e(r)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[i]=r}}function th(n,t,e){ri(Kt(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function Ud(n,t,e,i){let s=i.includes(".")?Ld(e,i):()=>e[i];if(Oe(n)){const r=t[n];te(r)&&er(s,r)}else if(te(n))er(s,n.bind(e));else if(Ee(n))if(Kt(n))n.forEach(r=>Ud(r,t,e,i));else{const r=te(n.handler)?n.handler.bind(e):t[n.handler];te(r)&&er(s,r,n)}}function Od(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(t);let l;return a?l=a:!s.length&&!e&&!i?l=t:(l={},s.length&&s.forEach(c=>ga(l,c,o,!0)),ga(l,t,o)),Ee(t)&&r.set(t,l),l}function ga(n,t,e,i=!1){const{mixins:s,extends:r}=t;r&&ga(n,r,e,!0),s&&s.forEach(o=>ga(n,o,e,!0));for(const o in t)if(!(i&&o==="expose")){const a=Cg[o]||e&&e[o];n[o]=a?a(n[o],t[o]):t[o]}return n}const Cg={data:eh,props:nh,emits:nh,methods:Ur,computed:Ur,beforeCreate:Je,created:Je,beforeMount:Je,mounted:Je,beforeUpdate:Je,updated:Je,beforeDestroy:Je,beforeUnmount:Je,destroyed:Je,unmounted:Je,activated:Je,deactivated:Je,errorCaptured:Je,serverPrefetch:Je,components:Ur,directives:Ur,watch:Pg,provide:eh,inject:Rg};function eh(n,t){return t?n?function(){return Ke(te(n)?n.call(this,this):n,te(t)?t.call(this,this):t)}:t:n}function Rg(n,t){return Ur(Zl(n),Zl(t))}function Zl(n){if(Kt(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function Je(n,t){return n?[...new Set([].concat(n,t))]:t}function Ur(n,t){return n?Ke(Object.create(null),n,t):t}function nh(n,t){return n?Kt(n)&&Kt(t)?[...new Set([...n,...t])]:Ke(Object.create(null),Qu(n),Qu(t??{})):t}function Pg(n,t){if(!n)return t;if(!t)return n;const e=Ke(Object.create(null),n);for(const i in t)e[i]=Je(n[i],t[i]);return e}function Bd(){return{app:null,config:{isNativeTag:ed,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ig=0;function Lg(n,t){return function(i,s=null){te(i)||(i=Ke({},i)),s!=null&&!Ee(s)&&(s=null);const r=Bd(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:Ig++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:u0,get config(){return r.config},set config(u){},use(u,...f){return o.has(u)||(u&&te(u.install)?(o.add(u),u.install(c,...f)):te(u)&&(o.add(u),u(c,...f))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,f){return f?(r.components[u]=f,c):r.components[u]},directive(u,f){return f?(r.directives[u]=f,c):r.directives[u]},mount(u,f,h){if(!l){const d=c._ceVNode||ti(i,s);return d.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),n(d,u,h),l=!0,c._container=u,u.__vue_app__=c,Ua(d.component)}},onUnmount(u){a.push(u)},unmount(){l&&(ri(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return r.provides[u]=f,c},runWithContext(u){const f=nr;nr=c;try{return u()}finally{nr=f}}};return c}}let nr=null;const Dg=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${Qi(t)}Modifiers`]||n[`${As(t)}Modifiers`];function Ng(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||Se;let s=e;const r=t.startsWith("update:"),o=r&&Dg(i,t.slice(7));o&&(o.trim&&(s=e.map(u=>Oe(u)?u.trim():u)),o.number&&(s=e.map(Ca)));let a,l=i[a=Wa(t)]||i[a=Wa(Qi(t))];!l&&r&&(l=i[a=Wa(As(t))]),l&&ri(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,ri(c,n,6,s)}}const Fg=new WeakMap;function zd(n,t,e=!1){const i=e?Fg:t.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!te(n)){const l=c=>{const u=zd(c,t,!0);u&&(a=!0,Ke(o,u))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(Ee(n)&&i.set(n,null),null):(Kt(r)?r.forEach(l=>o[l]=null):Ke(o,r),Ee(n)&&i.set(n,o),o)}function Na(n,t){return!n||!Ea(t)?!1:(t=t.slice(2).replace(/Once$/,""),pe(n,t[0].toLowerCase()+t.slice(1))||pe(n,As(t))||pe(n,t))}function ih(n){const{type:t,vnode:e,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:d,ctx:m,inheritAttrs:v}=n,p=da(n);let g,x;try{if(e.shapeFlag&4){const _=s||i,M=_;g=Yn(c.call(M,_,u,f,d,h,m)),x=a}else{const _=t;g=Yn(_.length>1?_(f,{attrs:a,slots:o,emit:l}):_(f,null)),x=t.props?a:Ug(a)}}catch(_){Xr.length=0,La(_,n,1),g=ti(ts)}let S=g;if(x&&v!==!1){const _=Object.keys(x),{shapeFlag:M}=S;_.length&&M&7&&(r&&_.some(nu)&&(x=Og(x,r)),S=ar(S,x,!1,!0))}return e.dirs&&(S=ar(S,null,!1,!0),S.dirs=S.dirs?S.dirs.concat(e.dirs):e.dirs),e.transition&&du(S,e.transition),g=S,da(p),g}const Ug=n=>{let t;for(const e in n)(e==="class"||e==="style"||Ea(e))&&((t||(t={}))[e]=n[e]);return t},Og=(n,t)=>{const e={};for(const i in n)(!nu(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function Bg(n,t,e){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?sh(i,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!Na(c,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?sh(i,o,c):!0:!!o;return!1}function sh(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(t[r]!==n[r]&&!Na(e,r))return!0}return!1}function zg({vnode:n,parent:t},e){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=t.vnode).el=e,t=t.parent;else break}}const Vd={},kd=()=>Object.create(Vd),Gd=n=>Object.getPrototypeOf(n)===Vd;function Vg(n,t,e,i=!1){const s={},r=kd();n.propsDefaults=Object.create(null),Hd(n,t,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);e?n.props=i?s:$m(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function kg(n,t,e,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=de(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Na(n.emitsOptions,h))continue;const d=t[h];if(l)if(pe(r,h))d!==r[h]&&(r[h]=d,c=!0);else{const m=Qi(h);s[m]=Jl(l,a,m,d,n,!1)}else d!==r[h]&&(r[h]=d,c=!0)}}}else{Hd(n,t,s,r)&&(c=!0);let u;for(const f in a)(!t||!pe(t,f)&&((u=As(f))===f||!pe(t,u)))&&(l?e&&(e[f]!==void 0||e[u]!==void 0)&&(s[f]=Jl(l,a,f,void 0,n,!0)):delete s[f]);if(r!==a)for(const f in r)(!t||!pe(t,f))&&(delete r[f],c=!0)}c&&wi(n.attrs,"set","")}function Hd(n,t,e,i){const[s,r]=n.propsOptions;let o=!1,a;if(t)for(let l in t){if(Vr(l))continue;const c=t[l];let u;s&&pe(s,u=Qi(l))?!r||!r.includes(u)?e[u]=c:(a||(a={}))[u]=c:Na(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=de(e),c=a||Se;for(let u=0;u<r.length;u++){const f=r[u];e[f]=Jl(s,l,f,c[f],n,!pe(c,f))}}return o}function Jl(n,t,e,i,s,r){const o=n[e];if(o!=null){const a=pe(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&te(l)){const{propsDefaults:c}=s;if(e in c)i=c[e];else{const u=po(s);i=c[e]=l.call(null,t),u()}}else i=l;s.ce&&s.ce._setProp(e,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===As(e))&&(i=!0))}return i}const Gg=new WeakMap;function Wd(n,t,e=!1){const i=e?Gg:t.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!te(n)){const u=f=>{l=!0;const[h,d]=Wd(f,t,!0);Ke(o,h),d&&a.push(...d)};!e&&t.mixins.length&&t.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return Ee(n)&&i.set(n,Js),Js;if(Kt(r))for(let u=0;u<r.length;u++){const f=Qi(r[u]);rh(f)&&(o[f]=Se)}else if(r)for(const u in r){const f=Qi(u);if(rh(f)){const h=r[u],d=o[f]=Kt(h)||te(h)?{type:h}:Ke({},h),m=d.type;let v=!1,p=!0;if(Kt(m))for(let g=0;g<m.length;++g){const x=m[g],S=te(x)&&x.name;if(S==="Boolean"){v=!0;break}else S==="String"&&(p=!1)}else v=te(m)&&m.name==="Boolean";d[0]=v,d[1]=p,(v||pe(d,"default"))&&a.push(f)}}const c=[o,a];return Ee(n)&&i.set(n,c),c}function rh(n){return n[0]!=="$"&&!Vr(n)}const pu=n=>n==="_"||n==="_ctx"||n==="$stable",mu=n=>Kt(n)?n.map(Yn):[Yn(n)],Hg=(n,t,e)=>{if(t._n)return t;const i=rg((...s)=>mu(t(...s)),e);return i._c=!1,i},qd=(n,t,e)=>{const i=n._ctx;for(const s in n){if(pu(s))continue;const r=n[s];if(te(r))t[s]=Hg(s,r,i);else if(r!=null){const o=mu(r);t[s]=()=>o}}},Xd=(n,t)=>{const e=mu(t);n.slots.default=()=>e},$d=(n,t,e)=>{for(const i in t)(e||!pu(i))&&(n[i]=t[i])},Wg=(n,t,e)=>{const i=n.slots=kd();if(n.vnode.shapeFlag&32){const s=t._;s?($d(i,t,e),e&&od(i,"_",s,!0)):qd(t,i)}else t&&Xd(n,t)},qg=(n,t,e)=>{const{vnode:i,slots:s}=n;let r=!0,o=Se;if(i.shapeFlag&32){const a=t._;a?e&&a===1?r=!1:$d(s,t,e):(r=!t.$stable,qd(t,s)),o=t}else t&&(Xd(n,t),o={default:1});if(r)for(const a in s)!pu(a)&&o[a]==null&&delete s[a]},mn=Kg;function Xg(n){return $g(n)}function $g(n,t){const e=Ra();e.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=Qn,insertStaticContent:m}=n,v=(I,N,D,k=null,H=null,$=null,R=void 0,nt=null,Q=!!N.dynamicChildren)=>{if(I===N)return;I&&!Mr(I,N)&&(k=z(I),_t(I,H,$,!0),I=null),N.patchFlag===-2&&(Q=!1,N.dynamicChildren=null);const{type:et,ref:st,shapeFlag:A}=N;switch(et){case Fa:p(I,N,D,k);break;case ts:g(I,N,D,k);break;case na:I==null&&x(N,D,k,R);break;case Ce:q(I,N,D,k,H,$,R,nt,Q);break;default:A&1?M(I,N,D,k,H,$,R,nt,Q):A&6?O(I,N,D,k,H,$,R,nt,Q):(A&64||A&128)&&et.process(I,N,D,k,H,$,R,nt,Q,rt)}st!=null&&H?Hr(st,I&&I.ref,$,N||I,!N):st==null&&I&&I.ref!=null&&Hr(I.ref,null,$,I,!0)},p=(I,N,D,k)=>{if(I==null)i(N.el=a(N.children),D,k);else{const H=N.el=I.el;N.children!==I.children&&c(H,N.children)}},g=(I,N,D,k)=>{I==null?i(N.el=l(N.children||""),D,k):N.el=I.el},x=(I,N,D,k)=>{[I.el,I.anchor]=m(I.children,N,D,k,I.el,I.anchor)},S=({el:I,anchor:N},D,k)=>{let H;for(;I&&I!==N;)H=h(I),i(I,D,k),I=H;i(N,D,k)},_=({el:I,anchor:N})=>{let D;for(;I&&I!==N;)D=h(I),s(I),I=D;s(N)},M=(I,N,D,k,H,$,R,nt,Q)=>{if(N.type==="svg"?R="svg":N.type==="math"&&(R="mathml"),I==null)b(N,D,k,H,$,R,nt,Q);else{const et=I.el&&I.el._isVueCE?I.el:null;try{et&&et._beginPatch(),w(I,N,H,$,R,nt,Q)}finally{et&&et._endPatch()}}},b=(I,N,D,k,H,$,R,nt)=>{let Q,et;const{props:st,shapeFlag:A,transition:y,dirs:B}=I;if(Q=I.el=o(I.type,$,st&&st.is,st),A&8?u(Q,I.children):A&16&&F(I.children,Q,null,k,H,Ka(I,$),R,nt),B&&ss(I,null,k,"created"),C(Q,I,I.scopeId,R,k),st){for(const ht in st)ht!=="value"&&!Vr(ht)&&r(Q,ht,null,st[ht],$,k);"value"in st&&r(Q,"value",null,st.value,$),(et=st.onVnodeBeforeMount)&&Gn(et,k,I)}B&&ss(I,null,k,"beforeMount");const Z=Yg(H,y);Z&&y.beforeEnter(Q),i(Q,N,D),((et=st&&st.onVnodeMounted)||Z||B)&&mn(()=>{et&&Gn(et,k,I),Z&&y.enter(Q),B&&ss(I,null,k,"mounted")},H)},C=(I,N,D,k,H)=>{if(D&&d(I,D),k)for(let $=0;$<k.length;$++)d(I,k[$]);if(H){let $=H.subTree;if(N===$||Zd($.type)&&($.ssContent===N||$.ssFallback===N)){const R=H.vnode;C(I,R,R.scopeId,R.slotScopeIds,H.parent)}}},F=(I,N,D,k,H,$,R,nt,Q=0)=>{for(let et=Q;et<I.length;et++){const st=I[et]=nt?Yi(I[et]):Yn(I[et]);v(null,st,N,D,k,H,$,R,nt)}},w=(I,N,D,k,H,$,R)=>{const nt=N.el=I.el;let{patchFlag:Q,dynamicChildren:et,dirs:st}=N;Q|=I.patchFlag&16;const A=I.props||Se,y=N.props||Se;let B;if(D&&rs(D,!1),(B=y.onVnodeBeforeUpdate)&&Gn(B,D,N,I),st&&ss(N,I,D,"beforeUpdate"),D&&rs(D,!0),(A.innerHTML&&y.innerHTML==null||A.textContent&&y.textContent==null)&&u(nt,""),et?T(I.dynamicChildren,et,nt,D,k,Ka(N,H),$):R||j(I,N,nt,null,D,k,Ka(N,H),$,!1),Q>0){if(Q&16)L(nt,A,y,D,H);else if(Q&2&&A.class!==y.class&&r(nt,"class",null,y.class,H),Q&4&&r(nt,"style",A.style,y.style,H),Q&8){const Z=N.dynamicProps;for(let ht=0;ht<Z.length;ht++){const tt=Z[ht],xt=A[tt],gt=y[tt];(gt!==xt||tt==="value")&&r(nt,tt,xt,gt,H,D)}}Q&1&&I.children!==N.children&&u(nt,N.children)}else!R&&et==null&&L(nt,A,y,D,H);((B=y.onVnodeUpdated)||st)&&mn(()=>{B&&Gn(B,D,N,I),st&&ss(N,I,D,"updated")},k)},T=(I,N,D,k,H,$,R)=>{for(let nt=0;nt<N.length;nt++){const Q=I[nt],et=N[nt],st=Q.el&&(Q.type===Ce||!Mr(Q,et)||Q.shapeFlag&198)?f(Q.el):D;v(Q,et,st,null,k,H,$,R,!0)}},L=(I,N,D,k,H)=>{if(N!==D){if(N!==Se)for(const $ in N)!Vr($)&&!($ in D)&&r(I,$,N[$],null,H,k);for(const $ in D){if(Vr($))continue;const R=D[$],nt=N[$];R!==nt&&$!=="value"&&r(I,$,nt,R,H,k)}"value"in D&&r(I,"value",N.value,D.value,H)}},q=(I,N,D,k,H,$,R,nt,Q)=>{const et=N.el=I?I.el:a(""),st=N.anchor=I?I.anchor:a("");let{patchFlag:A,dynamicChildren:y,slotScopeIds:B}=N;B&&(nt=nt?nt.concat(B):B),I==null?(i(et,D,k),i(st,D,k),F(N.children||[],D,st,H,$,R,nt,Q)):A>0&&A&64&&y&&I.dynamicChildren&&I.dynamicChildren.length===y.length?(T(I.dynamicChildren,y,D,H,$,R,nt),(N.key!=null||H&&N===H.subTree)&&Yd(I,N,!0)):j(I,N,D,st,H,$,R,nt,Q)},O=(I,N,D,k,H,$,R,nt,Q)=>{N.slotScopeIds=nt,I==null?N.shapeFlag&512?H.ctx.activate(N,D,k,R,Q):X(N,D,k,H,$,R,Q):V(I,N,Q)},X=(I,N,D,k,H,$,R)=>{const nt=I.component=i0(I,k,H);if(Nd(I)&&(nt.ctx.renderer=rt),r0(nt,!1,R),nt.asyncDep){if(H&&H.registerDep(nt,U,R),!I.el){const Q=nt.subTree=ti(ts);g(null,Q,N,D),I.placeholder=Q.el}}else U(nt,I,N,D,H,$,R)},V=(I,N,D)=>{const k=N.component=I.component;if(Bg(I,N,D))if(k.asyncDep&&!k.asyncResolved){W(k,N,D);return}else k.next=N,k.update();else N.el=I.el,k.vnode=N},U=(I,N,D,k,H,$,R)=>{const nt=()=>{if(I.isMounted){let{next:A,bu:y,u:B,parent:Z,vnode:ht}=I;{const Nt=jd(I);if(Nt){A&&(A.el=ht.el,W(I,A,R)),Nt.asyncDep.then(()=>{I.isUnmounted||nt()});return}}let tt=A,xt;rs(I,!1),A?(A.el=ht.el,W(I,A,R)):A=ht,y&&ta(y),(xt=A.props&&A.props.onVnodeBeforeUpdate)&&Gn(xt,Z,A,ht),rs(I,!0);const gt=ih(I),Et=I.subTree;I.subTree=gt,v(Et,gt,f(Et.el),z(Et),I,H,$),A.el=gt.el,tt===null&&zg(I,gt.el),B&&mn(B,H),(xt=A.props&&A.props.onVnodeUpdated)&&mn(()=>Gn(xt,Z,A,ht),H)}else{let A;const{el:y,props:B}=N,{bm:Z,m:ht,parent:tt,root:xt,type:gt}=I,Et=Wr(N);rs(I,!1),Z&&ta(Z),!Et&&(A=B&&B.onVnodeBeforeMount)&&Gn(A,tt,N),rs(I,!0);{xt.ce&&xt.ce._def.shadowRoot!==!1&&xt.ce._injectChildStyle(gt);const Nt=I.subTree=ih(I);v(null,Nt,D,k,I,H,$),N.el=Nt.el}if(ht&&mn(ht,H),!Et&&(A=B&&B.onVnodeMounted)){const Nt=N;mn(()=>Gn(A,tt,Nt),H)}(N.shapeFlag&256||tt&&Wr(tt.vnode)&&tt.vnode.shapeFlag&256)&&I.a&&mn(I.a,H),I.isMounted=!0,N=D=k=null}};I.scope.on();const Q=I.effect=new ud(nt);I.scope.off();const et=I.update=Q.run.bind(Q),st=I.job=Q.runIfDirty.bind(Q);st.i=I,st.id=I.uid,Q.scheduler=()=>fu(st),rs(I,!0),et()},W=(I,N,D)=>{N.component=I;const k=I.vnode.props;I.vnode=N,I.next=null,kg(I,N.props,k,D),qg(I,N.children,D),Li(),Zu(I),Di()},j=(I,N,D,k,H,$,R,nt,Q=!1)=>{const et=I&&I.children,st=I?I.shapeFlag:0,A=N.children,{patchFlag:y,shapeFlag:B}=N;if(y>0){if(y&128){lt(et,A,D,k,H,$,R,nt,Q);return}else if(y&256){ft(et,A,D,k,H,$,R,nt,Q);return}}B&8?(st&16&&G(et,H,$),A!==et&&u(D,A)):st&16?B&16?lt(et,A,D,k,H,$,R,nt,Q):G(et,H,$,!0):(st&8&&u(D,""),B&16&&F(A,D,k,H,$,R,nt,Q))},ft=(I,N,D,k,H,$,R,nt,Q)=>{I=I||Js,N=N||Js;const et=I.length,st=N.length,A=Math.min(et,st);let y;for(y=0;y<A;y++){const B=N[y]=Q?Yi(N[y]):Yn(N[y]);v(I[y],B,D,null,H,$,R,nt,Q)}et>st?G(I,H,$,!0,!1,A):F(N,D,k,H,$,R,nt,Q,A)},lt=(I,N,D,k,H,$,R,nt,Q)=>{let et=0;const st=N.length;let A=I.length-1,y=st-1;for(;et<=A&&et<=y;){const B=I[et],Z=N[et]=Q?Yi(N[et]):Yn(N[et]);if(Mr(B,Z))v(B,Z,D,null,H,$,R,nt,Q);else break;et++}for(;et<=A&&et<=y;){const B=I[A],Z=N[y]=Q?Yi(N[y]):Yn(N[y]);if(Mr(B,Z))v(B,Z,D,null,H,$,R,nt,Q);else break;A--,y--}if(et>A){if(et<=y){const B=y+1,Z=B<st?N[B].el:k;for(;et<=y;)v(null,N[et]=Q?Yi(N[et]):Yn(N[et]),D,Z,H,$,R,nt,Q),et++}}else if(et>y)for(;et<=A;)_t(I[et],H,$,!0),et++;else{const B=et,Z=et,ht=new Map;for(et=Z;et<=y;et++){const Tt=N[et]=Q?Yi(N[et]):Yn(N[et]);Tt.key!=null&&ht.set(Tt.key,et)}let tt,xt=0;const gt=y-Z+1;let Et=!1,Nt=0;const mt=new Array(gt);for(et=0;et<gt;et++)mt[et]=0;for(et=B;et<=A;et++){const Tt=I[et];if(xt>=gt){_t(Tt,H,$,!0);continue}let Rt;if(Tt.key!=null)Rt=ht.get(Tt.key);else for(tt=Z;tt<=y;tt++)if(mt[tt-Z]===0&&Mr(Tt,N[tt])){Rt=tt;break}Rt===void 0?_t(Tt,H,$,!0):(mt[Rt-Z]=et+1,Rt>=Nt?Nt=Rt:Et=!0,v(Tt,N[Rt],D,null,H,$,R,nt,Q),xt++)}const St=Et?jg(mt):Js;for(tt=St.length-1,et=gt-1;et>=0;et--){const Tt=Z+et,Rt=N[Tt],bt=N[Tt+1],Gt=Tt+1<st?bt.el||Kd(bt):k;mt[et]===0?v(null,Rt,D,Gt,H,$,R,nt,Q):Et&&(tt<0||et!==St[tt]?dt(Rt,D,Gt,2):tt--)}}},dt=(I,N,D,k,H=null)=>{const{el:$,type:R,transition:nt,children:Q,shapeFlag:et}=I;if(et&6){dt(I.component.subTree,N,D,k);return}if(et&128){I.suspense.move(N,D,k);return}if(et&64){R.move(I,N,D,rt);return}if(R===Ce){i($,N,D);for(let A=0;A<Q.length;A++)dt(Q[A],N,D,k);i(I.anchor,N,D);return}if(R===na){S(I,N,D);return}if(k!==2&&et&1&&nt)if(k===0)nt.beforeEnter($),i($,N,D),mn(()=>nt.enter($),H);else{const{leave:A,delayLeave:y,afterLeave:B}=nt,Z=()=>{I.ctx.isUnmounted?s($):i($,N,D)},ht=()=>{$._isLeaving&&$[fg](!0),A($,()=>{Z(),B&&B()})};y?y($,Z,ht):ht()}else i($,N,D)},_t=(I,N,D,k=!1,H=!1)=>{const{type:$,props:R,ref:nt,children:Q,dynamicChildren:et,shapeFlag:st,patchFlag:A,dirs:y,cacheIndex:B}=I;if(A===-2&&(H=!1),nt!=null&&(Li(),Hr(nt,null,D,I,!0),Di()),B!=null&&(N.renderCache[B]=void 0),st&256){N.ctx.deactivate(I);return}const Z=st&1&&y,ht=!Wr(I);let tt;if(ht&&(tt=R&&R.onVnodeBeforeUnmount)&&Gn(tt,N,I),st&6)$t(I.component,D,k);else{if(st&128){I.suspense.unmount(D,k);return}Z&&ss(I,null,N,"beforeUnmount"),st&64?I.type.remove(I,N,D,rt,k):et&&!et.hasOnce&&($!==Ce||A>0&&A&64)?G(et,N,D,!1,!0):($===Ce&&A&384||!H&&st&16)&&G(Q,N,D),k&&Ut(I)}(ht&&(tt=R&&R.onVnodeUnmounted)||Z)&&mn(()=>{tt&&Gn(tt,N,I),Z&&ss(I,null,N,"unmounted")},D)},Ut=I=>{const{type:N,el:D,anchor:k,transition:H}=I;if(N===Ce){zt(D,k);return}if(N===na){_(I);return}const $=()=>{s(D),H&&!H.persisted&&H.afterLeave&&H.afterLeave()};if(I.shapeFlag&1&&H&&!H.persisted){const{leave:R,delayLeave:nt}=H,Q=()=>R(D,$);nt?nt(I.el,$,Q):Q()}else $()},zt=(I,N)=>{let D;for(;I!==N;)D=h(I),s(I),I=D;s(N)},$t=(I,N,D)=>{const{bum:k,scope:H,job:$,subTree:R,um:nt,m:Q,a:et}=I;oh(Q),oh(et),k&&ta(k),H.stop(),$&&($.flags|=8,_t(R,I,N,D)),nt&&mn(nt,N),mn(()=>{I.isUnmounted=!0},N)},G=(I,N,D,k=!1,H=!1,$=0)=>{for(let R=$;R<I.length;R++)_t(I[R],N,D,k,H)},z=I=>{if(I.shapeFlag&6)return z(I.component.subTree);if(I.shapeFlag&128)return I.suspense.next();const N=h(I.anchor||I.el),D=N&&N[ug];return D?h(D):N};let ot=!1;const ct=(I,N,D)=>{let k;I==null?N._vnode&&(_t(N._vnode,null,null,!0),k=N._vnode.component):v(N._vnode||null,I,N,null,null,null,D),N._vnode=I,ot||(ot=!0,Zu(k),Cd(),ot=!1)},rt={p:v,um:_t,m:dt,r:Ut,mt:X,mc:F,pc:j,pbc:T,n:z,o:n};return{render:ct,hydrate:void 0,createApp:Lg(ct)}}function Ka({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function rs({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function Yg(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function Yd(n,t,e=!1){const i=n.children,s=t.children;if(Kt(i)&&Kt(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Yi(s[r]),a.el=o.el),!e&&a.patchFlag!==-2&&Yd(o,a)),a.type===Fa&&(a.patchFlag!==-1?a.el=o.el:a.__elIndex=r+(n.type===Ce?1:0)),a.type===ts&&!a.el&&(a.el=o.el)}}function jg(n){const t=n.slice(),e=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=e[e.length-1],n[s]<c){t[i]=s,e.push(i);continue}for(r=0,o=e.length-1;r<o;)a=r+o>>1,n[e[a]]<c?r=a+1:o=a;c<n[e[r]]&&(r>0&&(t[i]=e[r-1]),e[r]=i)}}for(r=e.length,o=e[r-1];r-- >0;)e[r]=o,o=t[o];return e}function jd(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:jd(t)}function oh(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}function Kd(n){if(n.placeholder)return n.placeholder;const t=n.component;return t?Kd(t.subTree):null}const Zd=n=>n.__isSuspense;function Kg(n,t){t&&t.pendingBranch?Kt(n)?t.effects.push(...n):t.effects.push(n):sg(n)}const Ce=Symbol.for("v-fgt"),Fa=Symbol.for("v-txt"),ts=Symbol.for("v-cmt"),na=Symbol.for("v-stc"),Xr=[];let vn=null;function jt(n=!1){Xr.push(vn=n?null:[])}function Zg(){Xr.pop(),vn=Xr[Xr.length-1]||null}let to=1;function ah(n,t=!1){to+=n,n<0&&vn&&t&&(vn.hasOnce=!0)}function Jd(n){return n.dynamicChildren=to>0?vn||Js:null,Zg(),to>0&&vn&&vn.push(n),n}function Qt(n,t,e,i,s,r){return Jd(vt(n,t,e,i,s,r,!0))}function Ks(n,t,e,i,s){return Jd(ti(n,t,e,i,s,!0))}function Qd(n){return n?n.__v_isVNode===!0:!1}function Mr(n,t){return n.type===t.type&&n.key===t.key}const tp=({key:n})=>n??null,ia=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?Oe(n)||$e(n)||te(n)?{i:wn,r:n,k:t,f:!!e}:n:null);function vt(n,t=null,e=null,i=0,s=null,r=n===Ce?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&tp(t),ref:t&&ia(t),scopeId:Pd,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:wn};return a?(gu(l,e),r&128&&n.normalize(l)):e&&(l.shapeFlag|=Oe(e)?8:16),to>0&&!o&&vn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&vn.push(l),l}const ti=Jg;function Jg(n,t=null,e=null,i=0,s=null,r=!1){if((!n||n===wg)&&(n=ts),Qd(n)){const a=ar(n,t,!0);return e&&gu(a,e),to>0&&!r&&vn&&(a.shapeFlag&6?vn[vn.indexOf(n)]=a:vn.push(a)),a.patchFlag=-2,a}if(c0(n)&&(n=n.__vccOpts),t){t=Qg(t);let{class:a,style:l}=t;a&&!Oe(a)&&(t.class=Kn(a)),Ee(l)&&(hu(l)&&!Kt(l)&&(l=Ke({},l)),t.style=nn(l))}const o=Oe(n)?1:Zd(n)?128:hg(n)?64:Ee(n)?4:te(n)?2:0;return vt(n,t,e,i,s,o,r,!0)}function Qg(n){return n?hu(n)||Gd(n)?Ke({},n):n:null}function ar(n,t,e=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=t?t0(s||{},t):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&tp(c),ref:t&&t.ref?e&&r?Kt(r)?r.concat(ia(t)):[r,ia(t)]:ia(t):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==Ce?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&ar(n.ssContent),ssFallback:n.ssFallback&&ar(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&du(u,l.clone(u)),u}function ep(n=" ",t=0){return ti(Fa,null,n,t)}function np(n,t){const e=ti(na,null,n);return e.staticCount=t,e}function Bn(n="",t=!1){return t?(jt(),Ks(ts,null,n)):ti(ts,null,n)}function Yn(n){return n==null||typeof n=="boolean"?ti(ts):Kt(n)?ti(Ce,null,n.slice()):Qd(n)?Yi(n):ti(Fa,null,String(n))}function Yi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:ar(n)}function gu(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(Kt(t))e=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),gu(n,s()),s._c&&(s._d=!0));return}else{e=32;const s=t._;!s&&!Gd(t)?t._ctx=wn:s===3&&wn&&(wn.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else te(t)?(t={default:t,_ctx:wn},e=32):(t=String(t),i&64?(e=16,t=[ep(t)]):e=8);n.children=t,n.shapeFlag|=e}function t0(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=Kn([t.class,i.class]));else if(s==="style")t.style=nn([t.style,i.style]);else if(Ea(s)){const r=t[s],o=i[s];o&&r!==o&&!(Kt(r)&&r.includes(o))&&(t[s]=r?[].concat(r,o):o)}else s!==""&&(t[s]=i[s])}return t}function Gn(n,t,e,i=null){ri(n,t,7,[e,i])}const e0=Bd();let n0=0;function i0(n,t,e){const i=n.type,s=(t?t.appContext:n.appContext)||e0,r={uid:n0++,vnode:n,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Am(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Wd(i,s),emitsOptions:zd(i,s),emit:null,emitted:null,propsDefaults:Se,inheritAttrs:i.inheritAttrs,ctx:Se,data:Se,props:Se,attrs:Se,slots:Se,refs:Se,setupState:Se,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=Ng.bind(null,r),n.ce&&n.ce(r),r}let sn=null;const s0=()=>sn||wn;let va,Ql;{const n=Ra(),t=(e,i)=>{let s;return(s=n[e])||(s=n[e]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};va=t("__VUE_INSTANCE_SETTERS__",e=>sn=e),Ql=t("__VUE_SSR_SETTERS__",e=>eo=e)}const po=n=>{const t=sn;return va(n),n.scope.on(),()=>{n.scope.off(),va(t)}},lh=()=>{sn&&sn.scope.off(),va(null)};function ip(n){return n.vnode.shapeFlag&4}let eo=!1;function r0(n,t=!1,e=!1){t&&Ql(t);const{props:i,children:s}=n.vnode,r=ip(n);Vg(n,i,r,t),Wg(n,s,e||t);const o=r?o0(n,t):void 0;return t&&Ql(!1),o}function o0(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Eg);const{setup:i}=e;if(i){Li();const s=n.setupContext=i.length>1?l0(n):null,r=po(n),o=ho(i,n,0,[n.props,s]),a=nd(o);if(Di(),r(),(a||n.sp)&&!Wr(n)&&Dd(n),a){if(o.then(lh,lh),t)return o.then(l=>{ch(n,l)}).catch(l=>{La(l,n,0)});n.asyncDep=o}else ch(n,o)}else sp(n)}function ch(n,t,e){te(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:Ee(t)&&(n.setupState=wd(t)),sp(n)}function sp(n,t,e){const i=n.type;n.render||(n.render=i.render||Qn);{const s=po(n);Li();try{Tg(n)}finally{Di(),s()}}}const a0={get(n,t){return qe(n,"get",""),n[t]}};function l0(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,a0),slots:n.slots,emit:n.emit,expose:t}}function Ua(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(wd(Ym(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in qr)return qr[e](n)},has(t,e){return e in t||e in qr}})):n.proxy}function c0(n){return te(n)&&"__vccOpts"in n}const vu=(n,t)=>Qm(n,t,eo),u0="3.5.26";/**
* @vue/runtime-dom v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let tc;const uh=typeof window<"u"&&window.trustedTypes;if(uh)try{tc=uh.createPolicy("vue",{createHTML:n=>n})}catch{}const rp=tc?n=>tc.createHTML(n):n=>n,h0="http://www.w3.org/2000/svg",f0="http://www.w3.org/1998/Math/MathML",bi=typeof document<"u"?document:null,hh=bi&&bi.createElement("template"),d0={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const s=t==="svg"?bi.createElementNS(h0,n):t==="mathml"?bi.createElementNS(f0,n):e?bi.createElement(n,{is:e}):bi.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>bi.createTextNode(n),createComment:n=>bi.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>bi.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,s,r){const o=e?e.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),e),!(s===r||!(s=s.nextSibling)););else{hh.innerHTML=rp(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=hh.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},p0=Symbol("_vtc");function m0(n,t,e){const i=n[p0];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const fh=Symbol("_vod"),g0=Symbol("_vsh"),v0=Symbol(""),_0=/(?:^|;)\s*display\s*:/;function x0(n,t,e){const i=n.style,s=Oe(e);let r=!1;if(e&&!s){if(t)if(Oe(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();e[a]==null&&sa(i,a,"")}else for(const o in t)e[o]==null&&sa(i,o,"");for(const o in e)o==="display"&&(r=!0),sa(i,o,e[o])}else if(s){if(t!==e){const o=i[v0];o&&(e+=";"+o),i.cssText=e,r=_0.test(e)}}else t&&n.removeAttribute("style");fh in n&&(n[fh]=r?i.display:"",n[g0]&&(i.display="none"))}const dh=/\s*!important$/;function sa(n,t,e){if(Kt(e))e.forEach(i=>sa(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const i=y0(n,t);dh.test(e)?n.setProperty(As(i),e.replace(dh,""),"important"):n[i]=e}}const ph=["Webkit","Moz","ms"],Za={};function y0(n,t){const e=Za[t];if(e)return e;let i=Qi(t);if(i!=="filter"&&i in n)return Za[t]=i;i=rd(i);for(let s=0;s<ph.length;s++){const r=ph[s]+i;if(r in n)return Za[t]=r}return t}const mh="http://www.w3.org/1999/xlink";function gh(n,t,e,i,s,r=wm(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(mh,t.slice(6,t.length)):n.setAttributeNS(mh,t,e):e==null||r&&!ad(e)?n.removeAttribute(t):n.setAttribute(t,r?"":si(e)?String(e):e)}function vh(n,t,e,i,s){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?rp(e):e);return}const r=n.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=e==null?n.type==="checkbox"?"on":"":String(e);(a!==l||!("_value"in n))&&(n.value=l),e==null&&n.removeAttribute(t),n._value=e;return}let o=!1;if(e===""||e==null){const a=typeof n[t];a==="boolean"?e=ad(e):e==null&&a==="string"?(e="",o=!0):a==="number"&&(e=0,o=!0)}try{n[t]=e}catch{}o&&n.removeAttribute(s||t)}function ps(n,t,e,i){n.addEventListener(t,e,i)}function S0(n,t,e,i){n.removeEventListener(t,e,i)}const _h=Symbol("_vei");function M0(n,t,e,i,s=null){const r=n[_h]||(n[_h]={}),o=r[t];if(i&&o)o.value=i;else{const[a,l]=b0(t);if(i){const c=r[t]=T0(i,s);ps(n,a,c,l)}else o&&(S0(n,a,o,l),r[t]=void 0)}}const xh=/(?:Once|Passive|Capture)$/;function b0(n){let t;if(xh.test(n)){t={};let i;for(;i=n.match(xh);)n=n.slice(0,n.length-i[0].length),t[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):As(n.slice(2)),t]}let Ja=0;const w0=Promise.resolve(),E0=()=>Ja||(w0.then(()=>Ja=0),Ja=Date.now());function T0(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;ri(A0(i,e.value),t,5,[i])};return e.value=n,e.attached=E0(),e}function A0(n,t){if(Kt(t)){const e=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{e.call(n),n._stopped=!0},t.map(i=>s=>!s._stopped&&i&&i(s))}else return t}const yh=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,C0=(n,t,e,i,s,r)=>{const o=s==="svg";t==="class"?m0(n,i,o):t==="style"?x0(n,e,i):Ea(t)?nu(t)||M0(n,t,e,i,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):R0(n,t,i,o))?(vh(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&gh(n,t,i,o,r,t!=="value")):n._isVueCE&&(/[A-Z]/.test(t)||!Oe(i))?vh(n,Qi(t),i,r,t):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),gh(n,t,i,o))};function R0(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&yh(t)&&te(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&n.tagName==="IFRAME"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return yh(t)&&Oe(e)?!1:t in n}const _a=n=>{const t=n.props["onUpdate:modelValue"]||!1;return Kt(t)?e=>ta(t,e):t};function P0(n){n.target.composing=!0}function Sh(n){const t=n.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const ir=Symbol("_assign");function Mh(n,t,e){return t&&(n=n.trim()),e&&(n=Ca(n)),n}const ec={created(n,{modifiers:{lazy:t,trim:e,number:i}},s){n[ir]=_a(s);const r=i||s.props&&s.props.type==="number";ps(n,t?"change":"input",o=>{o.target.composing||n[ir](Mh(n.value,e,r))}),(e||r)&&ps(n,"change",()=>{n.value=Mh(n.value,e,r)}),t||(ps(n,"compositionstart",P0),ps(n,"compositionend",Sh),ps(n,"change",Sh))},mounted(n,{value:t}){n.value=t??""},beforeUpdate(n,{value:t,oldValue:e,modifiers:{lazy:i,trim:s,number:r}},o){if(n[ir]=_a(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?Ca(n.value):n.value,l=t??"";a!==l&&(document.activeElement===n&&n.type!=="range"&&(i&&t===e||s&&n.value.trim()===l)||(n.value=l))}},I0={deep:!0,created(n,{value:t,modifiers:{number:e}},i){const s=Ta(t);ps(n,"change",()=>{const r=Array.prototype.filter.call(n.options,o=>o.selected).map(o=>e?Ca(xa(o)):xa(o));n[ir](n.multiple?s?new Set(r):r:r[0]),n._assigning=!0,Td(()=>{n._assigning=!1})}),n[ir]=_a(i)},mounted(n,{value:t}){bh(n,t)},beforeUpdate(n,t,e){n[ir]=_a(e)},updated(n,{value:t}){n._assigning||bh(n,t)}};function bh(n,t){const e=n.multiple,i=Kt(t);if(!(e&&!i&&!Ta(t))){for(let s=0,r=n.options.length;s<r;s++){const o=n.options[s],a=xa(o);if(e)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=t.some(c=>String(c)===String(a)):o.selected=Tm(t,a)>-1}else o.selected=t.has(a);else if(Pa(xa(o),t)){n.selectedIndex!==s&&(n.selectedIndex=s);return}}!e&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function xa(n){return"_value"in n?n._value:n.value}const L0=["ctrl","shift","alt","meta"],D0={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,t)=>L0.some(e=>n[`${e}Key`]&&!t.includes(e))},no=(n,t)=>{const e=n._withMods||(n._withMods={}),i=t.join(".");return e[i]||(e[i]=(s,...r)=>{for(let o=0;o<t.length;o++){const a=D0[t[o]];if(a&&a(s,t))return}return n(s,...r)})},N0=Ke({patchProp:C0},d0);let wh;function F0(){return wh||(wh=Xg(N0))}const U0=(...n)=>{const t=F0().createApp(...n),{mount:e}=t;return t.mount=i=>{const s=B0(i);if(!s)return;const r=t._component;!te(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=e(s,!1,O0(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function O0(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function B0(n){return Oe(n)?document.querySelector(n):n}const op="star_words_settings",z0={speechRate:.9,volume:1,voiceURI:null},Eh=localStorage.getItem(op),V0=Eh?JSON.parse(Eh):z0,Ti=Cs(V0);er(Ti,n=>{localStorage.setItem(op,JSON.stringify(n))});const br=window.speechSynthesis,k0=window.AudioContext||window.webkitAudioContext,ce=new k0,Qa={SUCCESS:"https://raw.githubusercontent.com/walles/numbervaders/master/app/src/main/res/raw/medal_earned_tada.mp3",WRONG:"https://raw.githubusercontent.com/walles/numbervaders/master/app/src/main/res/raw/wrong_answer.wav",EXPLOSION:"https://raw.githubusercontent.com/walles/numbervaders/master/app/src/main/res/raw/cannon_explosion.mp3"},tl={},G0=n=>(tl[n]||(tl[n]=new Audio(n)),tl[n]);function mr(){const n=c=>{const u=G0(c);u.currentTime=0,u.volume=.4,u.play().catch(f=>console.warn("SFX playback blocked or failed:",f))},t=(c,u="sine",f=.1,h=.1)=>{ce.state==="suspended"&&ce.resume();const d=ce.createOscillator(),m=ce.createGain();d.type=u,d.frequency.setValueAtTime(c,ce.currentTime),m.gain.setValueAtTime(h,ce.currentTime),m.gain.exponentialRampToValueAtTime(.001,ce.currentTime+f),d.connect(m),m.connect(ce.destination),d.start(),d.stop(ce.currentTime+f)};return{speak:(c,u=!0)=>{if(!br)return;const f=new SpeechSynthesisUtterance(c),h=/[\u4e00-\u9fa5\u3105-\u3129\u02CA\u02C7\u02CB\u02D9]/.test(c);f.lang=h?"zh-TW":"en-US",f.rate=Ti.speechRate;const d=br.getVoices();if(Ti.voiceURI){const m=d.find(v=>v.voiceURI===Ti.voiceURI);m&&(f.voice=m,f.lang=m.lang)}else if(h){const m=d.find(v=>v.lang.includes("zh-TW"))||d.find(v=>v.lang.includes("zh"))||d.find(v=>v.lang.includes("TW"));m&&(f.voice=m)}else{const m=d.find(p=>p.name==="Google US English"),v=d.find(p=>p.lang==="en-US");m?f.voice=m:v&&(f.voice=v)}u&&br.cancel(),u?setTimeout(()=>br.speak(f),50):br.speak(f)},playCorrect:()=>{t(1046.5,"sine",.15,.05),setTimeout(()=>t(1318.51,"sine",.25,.05),80)},playSuccess:()=>n(Qa.SUCCESS),playWrong:()=>n(Qa.WRONG),playExplosion:()=>n(Qa.EXPLOSION),playThrust:()=>{ce.state==="suspended"&&ce.resume();const c=.8,u=ce.sampleRate*c,f=ce.createBuffer(1,u,ce.sampleRate),h=f.getChannelData(0);for(let g=0;g<u;g++)h[g]=Math.random()*2-1;const d=ce.createBufferSource();d.buffer=f;const m=ce.createBiquadFilter();m.type="lowpass",m.Q.value=1;const v=ce.currentTime;m.frequency.setValueAtTime(5e3,v),m.frequency.exponentialRampToValueAtTime(400,v+c);const p=ce.createGain();p.gain.setValueAtTime(0,v),p.gain.linearRampToValueAtTime(.08,v+.04),p.gain.exponentialRampToValueAtTime(.001,v+c),d.connect(m),m.connect(p),p.connect(ce.destination),d.start(),d.stop(v+c)},playTone:t,playBrake:()=>{ce.state==="suspended"&&ce.resume();const c=ce.currentTime,u=.6,f=ce.sampleRate*u,h=ce.createBuffer(1,f,ce.sampleRate),d=h.getChannelData(0);for(let M=0;M<f;M++){const b=Math.random()*2-1,C=Math.sin(M*.05)>0?1:.5;d[M]=b*C}const m=ce.createBufferSource();m.buffer=h;const v=ce.createBiquadFilter();v.type="bandpass",v.frequency.setValueAtTime(2500,c),v.frequency.exponentialRampToValueAtTime(800,c+u),v.Q.value=3;const p=ce.createOscillator();p.type="sawtooth",p.frequency.setValueAtTime(3500,c),p.frequency.exponentialRampToValueAtTime(1200,c+u);const g=ce.createOscillator();g.type="triangle",g.frequency.setValueAtTime(3550,c),g.frequency.exponentialRampToValueAtTime(1250,c+u);const x=ce.createOscillator();x.type="sine",x.frequency.value=50;const S=ce.createGain();S.gain.value=100,x.connect(S),S.connect(p.frequency),S.connect(g.frequency);const _=ce.createGain();_.gain.setValueAtTime(0,c),_.gain.linearRampToValueAtTime(.12,c+.05),_.gain.exponentialRampToValueAtTime(.001,c+u),m.connect(v),v.connect(_),p.connect(_),g.connect(_),_.connect(ce.destination),m.start(),p.start(),g.start(),x.start(),m.stop(c+u),p.stop(c+u),g.stop(c+u),x.stop(c+u)}}}const H0=[{q:"does",t:"做",tags:["verb"],exps:["He does work"]},{q:"pail",t:"提桶",tags:["object"],exps:["A blue pail"]},{q:"main",t:"主要的",tags:["adjective"],exps:["The main road"]},{q:"at",t:"在",tags:["preposition"],exps:["At the park"]},{q:"has",t:"有",tags:["verb"],exps:["She has apple"]},{q:"new",t:"新的",tags:["adjective"],exps:["A new car"]},{q:"year",t:"年",tags:["time"],exps:["A happy year"]},{q:"fun",t:"真有趣",tags:["adjective"],exps:["Play is fun"]},{q:"party",t:"派對",tags:["social"],exps:["A birthday party"]},{q:"green",t:"綠色",tags:["color"],exps:["Green grass"]}],W0=Object.freeze(Object.defineProperty({__proto__:null,default:H0},Symbol.toStringTag,{value:"Module"})),q0=[{q:"cat",t:"貓",tags:["animal"],exps:["A small cat"]},{q:"dog",t:"狗",tags:["animal"],exps:["A bark dog"]},{q:"bird",t:"鳥",tags:["animal"],exps:["A blue bird"]},{q:"lion",t:"獅子",tags:["animal"],exps:["A king lion"]},{q:"tiger",t:"老虎",tags:["animal"],exps:["A fast tiger"]},{q:"monkey",t:"猴子",tags:["animal"],exps:["A funny monkey"]},{q:"rabbit",t:"兔子",tags:["animal"],exps:["A long-eared rabbit"]},{q:"elephant",t:"大象",tags:["animal"],exps:["A huge elephant"]}],X0=Object.freeze(Object.defineProperty({__proto__:null,default:q0},Symbol.toStringTag,{value:"Module"})),$0=[{q:"cat",t:"貓",tags:["animal"],exps:["A cute cat"]},{q:"dog",t:"狗",tags:["animal"],exps:["A loyal dog"]},{q:"elephant",t:"大象",tags:["animal"],exps:["A giant elephant"]},{q:"lion",t:"獅子",tags:["animal"],exps:["A brave lion"]},{q:"monkey",t:"猴子",tags:["animal"],exps:["A clever monkey"]},{q:"rabbit",t:"兔子",tags:["animal"],exps:["A jumping rabbit"]},{q:"tiger",t:"老虎",tags:["animal"],exps:["A powerful tiger"]},{q:"bird",t:"鳥",tags:["animal"],exps:["A flying bird"]},{q:"apple",t:"蘋果",tags:["fruit"],exps:["A sweet apple"]},{q:"banana",t:"香蕉",tags:["fruit"],exps:["A yellow banana"]},{q:"orange",t:"橘子",tags:["fruit"],exps:["A juicy orange"]},{q:"grape",t:"葡萄",tags:["fruit"],exps:["A purple grape"]},{q:"lemon",t:"檸檬",tags:["fruit"],exps:["A sour lemon"]},{q:"strawberry",t:"草莓",tags:["fruit"],exps:["A red strawberry"]},{q:"red",t:"紅色",tags:["color"],exps:["Red apple"]},{q:"blue",t:"藍色",tags:["color"],exps:["Blue sky"]},{q:"green",t:"綠色",tags:["color"],exps:["Green grass"]},{q:"yellow",t:"黃色",tags:["color"],exps:["Yellow sun"]},{q:"purple",t:"紫色",tags:["color"],exps:["Purple flower"]},{q:"black",t:"黑色",tags:["color"],exps:["Black cat"]},{q:"white",t:"白色",tags:["color"],exps:["White cloud"]},{q:"one",t:"一",tags:["number"],exps:["One book"]},{q:"two",t:"二",tags:["number"],exps:["Two pens"]},{q:"three",t:"三",tags:["number"],exps:["Three birds"]},{q:"four",t:"四",tags:["number"],exps:["Four chairs"]},{q:"five",t:"五",tags:["number"],exps:["Five fingers"]},{q:"ten",t:"十",tags:["number"],exps:["Ten toes"]},{q:"water",t:"水",tags:["nature"],exps:["Clean water"]},{q:"sun",t:"太陽",tags:["nature"],exps:["The bright sun"]},{q:"moon",t:"月亮",tags:["nature"],exps:["The silver moon"]},{q:"star",t:"星星",tags:["nature"],exps:["A shining star"]},{q:"tree",t:"樹",tags:["nature"],exps:["A tall tree"]},{q:"flower",t:"花",tags:["nature"],exps:["A pretty flower"]},{q:"sea",t:"大海",tags:["nature"],exps:["Deep blue sea"]},{q:"house",t:"房子",tags:["object"],exps:["A big house"]},{q:"car",t:"汽車",tags:["object"],exps:["A fast car"]},{q:"book",t:"書",tags:["object"],exps:["An old book"]},{q:"pen",t:"筆",tags:["object"],exps:["A blue pen"]},{q:"table",t:"桌子",tags:["object"],exps:["A wooden table"]},{q:"chair",t:"椅子",tags:["object"],exps:["A comfortable chair"]},{q:"phone",t:"電話",tags:["object"],exps:["A smart phone"]},{q:"computer",t:"電腦",tags:["object"],exps:["A new computer"]},{q:"hat",t:"帽子",tags:["clothes"],exps:["A warm hat"]},{q:"shoes",t:"鞋子",tags:["clothes"],exps:["Black shoes"]},{q:"shirt",t:"襯衫",tags:["clothes"],exps:["A white shirt"]},{q:"pants",t:"褲子",tags:["clothes"],exps:["Blue pants"]},{q:"mother",t:"母親",tags:["family"],exps:["I love mother"]},{q:"father",t:"父親",tags:["family"],exps:["I love father"]},{q:"brother",t:"兄弟",tags:["family"],exps:["My little brother"]},{q:"sister",t:"姐妹",tags:["family"],exps:["My big sister"]},{q:"baby",t:"嬰兒",tags:["family"],exps:["A crying baby"]},{q:"friend",t:"朋友",tags:["people"],exps:["A good friend"]},{q:"doctor",t:"醫生",tags:["people"],exps:["A kind doctor"]},{q:"teacher",t:"老師",tags:["people"],exps:["A great teacher"]},{q:"student",t:"學生",tags:["people"],exps:["A hard student"]},{q:"run",t:"跑",tags:["verb"],exps:["I run fast"]},{q:"jump",t:"跳",tags:["verb"],exps:["I jump high"]},{q:"eat",t:"吃",tags:["verb"],exps:["I eat apple"]},{q:"drink",t:"喝",tags:["verb"],exps:["I drink water"]},{q:"sleep",t:"睡覺",tags:["verb"],exps:["I sleep early"]},{q:"read",t:"讀",tags:["verb"],exps:["I read book"]},{q:"write",t:"寫",tags:["verb"],exps:["I write letter"]},{q:"sing",t:"唱",tags:["verb"],exps:["I sing song"]},{q:"dance",t:"跳舞",tags:["verb"],exps:["I dance well"]},{q:"work",t:"工作",tags:["verb"],exps:["I work hard"]},{q:"play",t:"玩",tags:["verb"],exps:["I play game"]},{q:"hot",t:"熱",tags:["adjective"],exps:["Hot water"]},{q:"cold",t:"冷",tags:["adjective"],exps:["Cold wind"]},{q:"big",t:"大",tags:["adjective"],exps:["Big elephant"]},{q:"small",t:"小",tags:["adjective"],exps:["Small cat"]},{q:"good",t:"好",tags:["adjective"],exps:["Good boy"]},{q:"bad",t:"差",tags:["adjective"],exps:["Bad luck"]},{q:"happy",t:"開心",tags:["adjective"],exps:["Happy baby"]},{q:"sad",t:"難過",tags:["adjective"],exps:["Sad face"]},{q:"fast",t:"快",tags:["adjective"],exps:["Fast car"]},{q:"slow",t:"慢",tags:["adjective"],exps:["Slow turtle"]},{q:"day",t:"白天",tags:["time"],exps:["A bright day"]},{q:"night",t:"晚上",tags:["time"],exps:["A dark night"]},{q:"morning",t:"早上",tags:["time"],exps:["Good morning"]},{q:"evening",t:"傍晚",tags:["time"],exps:["Good evening"]},{q:"today",t:"今天",tags:["time"],exps:["Today is good"]},{q:"tomorrow",t:"明天",tags:["time"],exps:["See you tomorrow"]},{q:"monday",t:"星期一",tags:["time"],exps:["Work on Monday"]},{q:"sunday",t:"星期日",tags:["time"],exps:["Rest on Sunday"]},{q:"school",t:"學校",tags:["place"],exps:["Go to school"]},{q:"park",t:"公園",tags:["place"],exps:["Play in park"]},{q:"hospital",t:"醫院",tags:["place"],exps:["A big hospital"]},{q:"store",t:"商店",tags:["place"],exps:["Open a store"]},{q:"bread",t:"麵包",tags:["food"],exps:["Fresh bread"]},{q:"milk",t:"牛奶",tags:["food"],exps:["White milk"]},{q:"egg",t:"蛋",tags:["food"],exps:["One egg"]},{q:"rice",t:"米飯",tags:["food"],exps:["Eat rice"]},{q:"meat",t:"肉",tags:["food"],exps:["Good meat"]},{q:"cake",t:"蛋糕",tags:["food"],exps:["A sweet cake"]},{q:"ice cream",t:"冰淇淋",tags:["food"],exps:["Cold ice cream"]},{q:"box",t:"盒子",tags:["object"],exps:["A heavy box"]},{q:"key",t:"鑰匙",tags:["object"],exps:["The silver key"]},{q:"cup",t:"杯子",tags:["object"],exps:["Drink in cup"]},{q:"spoon",t:"湯匙",tags:["object"],exps:["A small spoon"]},{q:"fork",t:"叉子",tags:["object"],exps:["Eat with fork"]},{q:"knife",t:"刀子",tags:["object"],exps:["A sharp knife"]},{q:"rain",t:"雨",tags:["nature"],exps:["See the rain"]},{q:"snow",t:"雪",tags:["nature"],exps:["White snow"]},{q:"wind",t:"風",tags:["nature"],exps:["Strong wind"]},{q:"mountain",t:"山",tags:["nature"],exps:["A high mountain"]},{q:"river",t:"河流",tags:["nature"],exps:["A long river"]},{q:"cloud",t:"雲",tags:["nature"],exps:["A soft cloud"]},{q:"sky",t:"天空",tags:["nature"],exps:["Blue sky"]},{q:"hand",t:"手",tags:["body"],exps:["My small hand"]},{q:"foot",t:"腳",tags:["body"],exps:["My left foot"]},{q:"eye",t:"眼睛",tags:["body"],exps:["Big eyes"]},{q:"ear",t:"耳朵",tags:["body"],exps:["Long ears"]},{q:"nose",t:"鼻子",tags:["body"],exps:["My red nose"]},{q:"mouth",t:"嘴巴",tags:["body"],exps:["A small mouth"]},{q:"hair",t:"頭髮",tags:["body"],exps:["Long hair"]},{q:"face",t:"臉",tags:["body"],exps:["A happy face"]},{q:"head",t:"頭",tags:["body"],exps:["My big head"]},{q:"heart",t:"心臟",tags:["body"],exps:["A kind heart"]},{q:"fish",t:"魚",tags:["animal"],exps:["A swimming fish"]},{q:"horse",t:"馬",tags:["animal"],exps:["A running horse"]},{q:"cow",t:"母牛",tags:["animal"],exps:["A milking cow"]},{q:"sheep",t:"綿羊",tags:["animal"],exps:["A white sheep"]},{q:"duck",t:"鴨子",tags:["animal"],exps:["A swimming duck"]},{q:"pig",t:"豬",tags:["animal"],exps:["A fat pig"]},{q:"bee",t:"蜜蜂",tags:["animal"],exps:["A busy bee"]},{q:"bus",t:"公車",tags:["transport"],exps:["Wait for bus"]},{q:"train",t:"火車",tags:["transport"],exps:["Take the train"]},{q:"plane",t:"飛機",tags:["transport"],exps:["Fly a plane"]},{q:"bike",t:"腳踏車",tags:["transport"],exps:["Ride a bike"]},{q:"boat",t:"小船",tags:["transport"],exps:["Sail a boat"]},{q:"truck",t:"卡車",tags:["transport"],exps:["A heavy truck"]},{q:"walk",t:"走路",tags:["verb"],exps:["I walk slow"]},{q:"fly",t:"飛",tags:["verb"],exps:["Birds fly high"]},{q:"swim",t:"游泳",tags:["verb"],exps:["I swim well"]},{q:"talk",t:"說話",tags:["verb"],exps:["Talk to friend"]},{q:"listen",t:"聽",tags:["verb"],exps:["Listen to music"]},{q:"smile",t:"微笑",tags:["verb"],exps:["A happy smile"]},{q:"laugh",t:"大笑",tags:["verb"],exps:["They laugh loud"]},{q:"cry",t:"哭",tags:["verb"],exps:["Don't cry now"]},{q:"think",t:"思考",tags:["verb"],exps:["I think hard"]},{q:"learn",t:"學習",tags:["verb"],exps:["Learn new word"]},{q:"watch",t:"看 (觀察)",tags:["verb"],exps:["Watch movie"]},{q:"long",t:"長",tags:["adjective"],exps:["A long road"]},{q:"short",t:"短",tags:["adjective"],exps:["A short hair"]},{q:"new",t:"新",tags:["adjective"],exps:["A new world"]},{q:"old",t:"舊",tags:["adjective"],exps:["An old friend"]},{q:"beautiful",t:"漂亮",tags:["adjective"],exps:["Beautiful flower"]},{q:"ugly",t:"醜陋",tags:["adjective"],exps:["An ugly box"]},{q:"clean",t:"乾淨",tags:["adjective"],exps:["A clean room"]},{q:"dirty",t:"髒",tags:["adjective"],exps:["Dirty shoes"]},{q:"rich",t:"富有",tags:["adjective"],exps:["A rich man"]},{q:"poor",t:"貧窮",tags:["adjective"],exps:["A poor family"]},{q:"window",t:"窗戶",tags:["object"],exps:["Open the window"]},{q:"door",t:"門",tags:["object"],exps:["Close the door"]},{q:"bed",t:"床",tags:["object"],exps:["Go to bed"]},{q:"clock",t:"時鐘",tags:["object"],exps:["A round clock"]},{q:"lamp",t:"燈",tags:["object"],exps:["Turn on lamp"]},{q:"mirror",t:"鏡子",tags:["object"],exps:["Look in mirror"]},{q:"soap",t:"肥皂",tags:["object"],exps:["Use some soap"]},{q:"towel",t:"毛巾",tags:["object"],exps:["A dry towel"]},{q:"city",t:"城市",tags:["place"],exps:["A busy city"]},{q:"country",t:"國家",tags:["place"],exps:["My home country"]},{q:"road",t:"道路",tags:["place"],exps:["A wide road"]},{q:"bridge",t:"橋",tags:["place"],exps:["Cross the bridge"]},{q:"garden",t:"花園",tags:["place"],exps:["A green garden"]},{q:"farm",t:"農場",tags:["place"],exps:["An old farm"]},{q:"forest",t:"森林",tags:["place"],exps:["A dark forest"]},{q:"island",t:"島嶼",tags:["place"],exps:["A small island"]},{q:"lake",t:"湖泊",tags:["place"],exps:["A mountain lake"]},{q:"kitchen",t:"廚房",tags:["place"],exps:["Cook in kitchen"]},{q:"room",t:"房間",tags:["place"],exps:["In my room"]},{q:"orange",t:"橘色",tags:["color"],exps:["Orange orange"]},{q:"pink",t:"粉紅色",tags:["color"],exps:["Pink dress"]},{q:"brown",t:"咖啡色",tags:["color"],exps:["Brown dog"]},{q:"gray",t:"灰色",tags:["color"],exps:["Gray sky"]},{q:"silver",t:"銀色",tags:["color"],exps:["Silver moon"]},{q:"gold",t:"金色",tags:["color"],exps:["Gold ring"]},{q:"soup",t:"湯",tags:["food"],exps:["Chicken soup"]},{q:"salad",t:"沙拉",tags:["food"],exps:["Green salad"]},{q:"pizza",t:"披薩",tags:["food"],exps:["Eat pizza"]},{q:"burger",t:"漢堡",tags:["food"],exps:["Beef burger"]},{q:"juice",t:"果汁",tags:["food"],exps:["Orange juice"]},{q:"tea",t:"茶",tags:["food"],exps:["Hot tea"]},{q:"coffee",t:"咖啡",tags:["food"],exps:["Black coffee"]},{q:"ball",t:"球",tags:["object"],exps:["Kick the ball"]},{q:"toy",t:"玩具",tags:["object"],exps:["Play with toy"]},{q:"gift",t:"禮物",tags:["object"],exps:["A small gift"]},{q:"camera",t:"相機",tags:["object"],exps:["Take my camera"]},{q:"map",t:"地圖",tags:["object"],exps:["Road map"]},{q:"umbrella",t:"傘",tags:["object"],exps:["Blue umbrella"]},{q:"money",t:"錢",tags:["object"],exps:["I have money"]},{q:"music",t:"音樂",tags:["concept"],exps:["Play loud music"]},{q:"time",t:"時間",tags:["concept"],exps:["No more time"]},{q:"love",t:"愛",tags:["concept"],exps:["I love you"]},{q:"help",t:"幫助",tags:["verb"],exps:["Please help me"]},{q:"look",t:"看",tags:["verb"],exps:["Look out"]},{q:"give",t:"給",tags:["verb"],exps:["Give me book"]},{q:"buy",t:"買",tags:["verb"],exps:["Buy a car"]},{q:"sell",t:"賣",tags:["verb"],exps:["Sell my house"]},{q:"open",t:"打開",tags:["verb"],exps:["Open your eye"]},{q:"close",t:"關閉",tags:["verb"],exps:["Close your heart"]},{q:"start",t:"開始",tags:["verb"],exps:["Start adventure"]},{q:"stop",t:"停止",tags:["verb"],exps:["Stop crying"]},{q:"quiet",t:"安靜",tags:["adjective"],exps:["Quiet forest"]},{q:"loud",t:"大聲",tags:["adjective"],exps:["Loud music"]},{q:"smart",t:"聰明",tags:["adjective"],exps:["A smart boy"]},{q:"cool",t:"酷/涼快",tags:["adjective"],exps:["A cool wind"]},{q:"winter",t:"冬天",tags:["time"],exps:["A cold winter"]},{q:"summer",t:"夏天",tags:["time"],exps:["A hot summer"]},{q:"sand",t:"沙子",tags:["nature"],exps:["Yellow sand"]},{q:"beach",t:"海灘",tags:["nature"],exps:["A beautiful beach"]},{q:"grass",t:"草",tags:["nature"],exps:["Green grass"]}],Y0=Object.freeze(Object.defineProperty({__proto__:null,default:$0},Symbol.toStringTag,{value:"Module"})),j0=[{a:"ㄅㄚ",q:"八"},{a:"ㄏㄨㄚˊ",q:"華"},{a:"ㄇㄛˊ",q:"磨"},{a:"ㄈㄤ",q:"方"},{a:"ㄉㄚˋ",q:"大"},{a:"ㄊㄧㄢ",q:"天"},{a:"ㄋㄧㄠˇ",q:"鳥"},{a:"ㄌㄨㄥˊ",q:"龍"},{a:"ㄍㄨㄛˊ",voiceText:"國",q:"國"},{a:"ㄎㄞ",q:"開"},{a:"ㄏㄠˇ",q:"好"},{a:"ㄐㄧㄚ",q:"家"},{a:"ㄑㄧㄥ",q:"青"},{a:"ㄒㄧㄠˇ",q:"小"},{a:"ㄓㄨㄥ",q:"中"},{a:"ㄔㄜ",q:"車"},{a:"ㄕㄨ",q:"書"},{a:"ㄖㄣˊ",q:"人"},{a:"ㄗㄞˋ",q:"在"},{a:"ㄘㄠˇ",q:"草"},{a:"ㄙㄢ",q:"三"},{a:"ㄧㄤˊ",q:"羊"},{a:"ㄨㄛˇ",q:"我"},{a:"ㄩˊ",q:"魚"},{a:"ㄇㄠ",q:"貓"},{a:"ㄍㄡˇ",q:"狗"},{a:"ㄕㄢ",q:"山"},{a:"ㄕㄨㄟˇ",q:"水"},{a:"ㄎㄨㄥ",q:"空"},{a:"ㄅㄞˊ",q:"白"}],K0=Object.freeze(Object.defineProperty({__proto__:null,default:j0},Symbol.toStringTag,{value:"Module"})),Th=Object.assign({"../assets/vocabularies/251222.json":W0,"../assets/vocabularies/animals.json":X0,"../assets/vocabularies/default.json":Y0,"../assets/vocabularies/zhuyin.json":K0}),ya=[];var td;for(const n in Th){const t=((td=n.split("/").pop())==null?void 0:td.replace(".json",""))||"unknown",e=Th[n].default;ya.push({name:t,path:n,data:e})}const _u=Cs({currentListName:localStorage.getItem("vocab_list")||"default"}),Z0=vu(()=>{var t;const n=ya.find(e=>e.name===_u.currentListName);return n?n.data:((t=ya[0])==null?void 0:t.data)||[]}),J0=n=>{_u.currentListName=n,localStorage.setItem("vocab_list",n)},Ai={state:_u,lists:ya,currentList:Z0,selectList:J0};function Q0(n){const{speak:t,playCorrect:e,playExplosion:i,playThrust:s}=mr(),r=ie("menu"),o=ie(0),a=ie(null),l=ie([]),c=ie({x:50,y:80}),u=ie(null),f=Cs(new Set),h=.15,d=1.8;let m=0,v=null,p=null,g=0,x=2e3,S=1;const _=()=>{r.value="playing",o.value=0,l.value=[],S=1,c.value={x:50,y:80},u.value=null,C(),g=performance.now(),v=requestAnimationFrame(w),p=window.setInterval(F,x)},M=()=>{v&&cancelAnimationFrame(v),p&&clearInterval(p)},b=()=>{if(!a.value)return;const q=a.value,O=q.q,X=q.exps&&q.exps.length>0?`. ${q.exps[0]}`:"";t(`${O}${X}`)},C=()=>{const q=Ai.currentList.value;if(q.length===0)return;const O=Math.floor(Math.random()*q.length);a.value=q[O],b()},F=()=>{if(r.value!=="playing")return;const q=Ai.currentList.value;if(q.length===0)return;const O=Math.random()<.4;let X=a.value;if(!O||!X){let V,U=0;do V=q[Math.floor(Math.random()*q.length)],U++;while(V===a.value&&U<10);X=V}X&&l.value.push({id:Date.now()+Math.random(),word:X,x:Math.random()*80+10,y:-10,speed:(Math.random()*.2+.3)*S,isTarget:X===a.value})},w=q=>{const O=q-g;g=q;const X=c.value.x,V=c.value.y;let U=0,W=0;if(f.has("ArrowLeft")&&(U-=1),f.has("ArrowRight")&&(U+=1),f.has("ArrowUp")&&(W-=1),f.has("ArrowDown")&&(W+=1),U!==0||W!==0){u.value=null;const dt=Math.sqrt(U*U+W*W),_t=U/dt,Ut=W/dt,zt=window.innerWidth,$t=window.innerHeight-100,G=zt/$t,z=d*(O/16);c.value.x=Math.max(5,Math.min(95,c.value.x+_t*z)),c.value.y=Math.max(5,Math.min(95,c.value.y+Ut*z*G))}else if(u.value){const dt=1-Math.pow(1-h,O/16);c.value.x+=(u.value.x-c.value.x)*dt,c.value.y+=(u.value.y-c.value.y)*dt,Math.abs(u.value.x-c.value.x)<.1&&Math.abs(u.value.y-c.value.y)<.1&&(u.value=null)}Math.abs(c.value.x-X)>.1||Math.abs(c.value.y-V)>.1?m<=0&&(s(),m=1):m=0,l.value.forEach(dt=>{dt.y+=dt.speed*(O/16)}),l.value=l.value.filter(dt=>!(dt.y>110));const ft=12,lt=10;l.value=l.value.filter(dt=>{var $t,G;const _t=Math.abs(dt.x-c.value.x),Ut=Math.abs(dt.y-c.value.y);return _t<ft/2+3&&Ut<lt/2+3?dt.isTarget?(o.value+=10,S+=.05,e(),($t=n==null?void 0:n.onHitCorrect)==null||$t.call(n,dt.x,dt.y),C(),!1):(o.value=Math.max(0,o.value-5),i(),(G=n==null?void 0:n.onHitWrong)==null||G.call(n,dt.x,dt.y),!1):!0}),r.value==="playing"&&(v=requestAnimationFrame(w))},T=(q,O)=>{u.value={x:Math.max(5,Math.min(95,q)),y:Math.max(5,Math.min(95,O))}},L=(q,O)=>{O?f.add(q):f.delete(q)};return Rs(()=>{M()}),{gameState:r,score:o,currentTarget:a,fallingItems:l,playerPos:c,startGame:_,setPlayerTarget:T,setKey:L,speak:t,announceTarget:b}}const tv={class:"ui-header"},ev={class:"header-left"},nv={class:"header-center"},iv={key:0,class:"target-display"},sv={class:"header-right"},rv={class:"score-board"},ov={class:"value"},av={class:"game-world"},lv={class:"meteor-body"},cv={key:0,class:"score-popup"},uv=pr({__name:"FallingWordsGame",emits:["exit"],setup(n,{emit:t}){const e=t,i=ie([]);let s=0;const r=(S,_)=>{const M=s++;i.value.push({id:M,x:S,y:_}),setTimeout(()=>{i.value=i.value.filter(b=>b.id!==M)},500)},{gameState:o,score:a,currentTarget:l,fallingItems:c,playerPos:u,startGame:f,setKey:h,setPlayerTarget:d,announceTarget:m}=Q0({onHitWrong:(S,_)=>r(S,_)}),v=S=>{o.value==="playing"&&(S.key==="Escape"&&e("exit"),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(S.key)&&h(S.key,!0))},p=S=>{["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(S.key)&&h(S.key,!1)},g=S=>{if(o.value!=="playing")return;const _=S.target;if(_.closest("button")||_.closest(".back-btn")||_.closest(".target-word"))return;let M,b;if(S instanceof MouseEvent)M=S.clientX,b=S.clientY;else{const q=S.touches[0];if(!q)return;M=q.clientX,b=q.clientY}const C=100,F=window.innerHeight-C;let w=b-C;w=Math.max(0,Math.min(F,w));const T=M/window.innerWidth*100,L=w/F*100;d(T,L)},x=ie(!1);return er(a,(S,_)=>{S>_&&(x.value=!0,setTimeout(()=>{x.value=!1},1e3))}),fo(()=>{window.addEventListener("keydown",v),window.addEventListener("keyup",p),f()}),Rs(()=>{window.removeEventListener("keydown",v),window.removeEventListener("keyup",p)}),(S,_)=>(jt(),Qt("div",{class:"game-container",onClick:g,onTouchstart:g},[_[7]||(_[7]=vt("div",{class:"stars"},null,-1)),_[8]||(_[8]=vt("div",{class:"stars2"},null,-1)),vt("div",tv,[vt("div",ev,[vt("button",{class:"back-btn",onClick:_[0]||(_[0]=no(M=>S.$emit("exit"),["stop"]))},"⬅ BACK")]),vt("div",nv,[Wt(l)?(jt(),Qt("div",iv,[_[3]||(_[3]=vt("div",{class:"target-hint"},"FIND:",-1)),vt("div",{class:"target-word",onClick:_[1]||(_[1]=no(M=>Wt(m)(),["stop"]))},[ep(_e(Wt(l).t)+" ",1),_[2]||(_[2]=vt("span",{class:"audio-icon"},"🔊",-1))])])):Bn("",!0)]),vt("div",sv,[vt("div",rv,[_[4]||(_[4]=vt("span",{class:"label"},"SCORE",-1)),vt("span",ov,_e(Wt(a)),1)])])]),vt("div",av,[(jt(!0),Qt(Ce,null,_n(i.value,M=>(jt(),Qt("div",{key:M.id,class:"explosion",style:nn({left:M.x+"%",top:M.y+"%"})},"💥",4))),128)),(jt(!0),Qt(Ce,null,_n(Wt(c),M=>(jt(),Qt("div",{key:M.id,class:"falling-item",style:nn({left:M.x+"%",top:M.y+"%"})},[vt("div",lv,_e(M.word.q),1),_[5]||(_[5]=vt("div",{class:"meteor-tail"},null,-1))],4))),128)),vt("div",{class:"player",style:nn({left:Wt(u).x+"%",top:Wt(u).y+"%"})},[x.value?(jt(),Qt("div",cv,"+10!")):Bn("",!0),_[6]||(_[6]=np('<svg viewBox="0 0 512 512" width="70" height="80" class="rocket-svg" data-v-fdf2f3fe><path d="M150,450 q-50,0 -30,-100 l30,50 z" fill="#ff4d4d" stroke="#333" stroke-width="4" data-v-fdf2f3fe></path><path d="M362,450 q50,0 30,-100 l-30,50 z" fill="#ff4d4d" stroke="#333" stroke-width="4" data-v-fdf2f3fe></path><path d="M256,20 c-100,200 -80,350 -80,400 h160 c0,-50 20,-200 -80,-400z" fill="#f5f5f5" stroke="#333" stroke-width="6" data-v-fdf2f3fe></path><path d="M256,20 c40,150 40,300 40,400 h-80 c0,-100 0,-250 40,-400z" fill="#e0e0e0" data-v-fdf2f3fe></path><path d="M256,20 c-30,60 -35,100 -35,130 h70 c0,-30 -5,-70 -35,-130z" fill="#ff4d4d" stroke="#333" stroke-width="4" data-v-fdf2f3fe></path><circle cx="256" cy="240" r="35" fill="#66ccff" stroke="#333" stroke-width="6" data-v-fdf2f3fe></circle><path d="M256,215 q20,10 0,50" fill="white" opacity="0.3" data-v-fdf2f3fe></path><path d="M220,430 q36,80 72,0" fill="#ffeb3b" class="main-flame" stroke="#ff9800" stroke-width="2" data-v-fdf2f3fe></path><path d="M236,430 q20,50 40,0" fill="#fff" opacity="0.8" class="inner-flame" data-v-fdf2f3fe></path></svg>',1))],4)])],32))}}),gr=(n,t)=>{const e=n.__vccOpts||n;for(const[i,s]of t)e[i]=s;return e},hv=gr(uv,[["__scopeId","data-v-fdf2f3fe"]]);function fv(n){const{speak:t,playCorrect:e,playSuccess:i,playExplosion:s,playThrust:r}=mr(),o=ie("menu"),a=ie(0),l=ie(null),c=ie(0),u=ie([]),f=ie([]),h=ie({x:50,y:80}),d=ie(null),m=Cs(new Set),v=.15,p=1.8;let g=0,x=null,S=null,_=0,M=1200,b=1;const C=()=>{o.value="playing",a.value=0,u.value=[],b=1,h.value={x:50,y:80},d.value=null,c.value=0,T(),_=performance.now(),x=requestAnimationFrame(q),S=window.setInterval(L,M)},F=()=>{x&&cancelAnimationFrame(x),S&&clearInterval(S)},w=()=>{if(!l.value)return;const V=l.value,U=V.q,W=V.exps&&V.exps.length>0?`. ${V.exps[0]}`:"";t(`${U}${W}`)},T=()=>{const V=Ai.currentList.value;if(V.length===0)return;const U=Math.floor(Math.random()*V.length);l.value=V[U],c.value=0;const W=l.value.a||l.value.q,j=[...new Set(W.split(""))],lt="abcdefghijklmnopqrstuvwxyz".split("").filter(zt=>!j.some($t=>$t.toLowerCase()===zt)).sort(()=>Math.random()-.5),dt=/^[A-Z]/.test(W),_t=lt.map(zt=>dt&&Math.random()<.3?zt.toUpperCase():zt),Ut=[...j,..._t.slice(0,Math.max(0,8-j.length))];f.value=Ut.slice(0,8),w()},L=()=>{if(o.value!=="playing"||!l.value)return;const V=l.value,W=(V.a||V.q)[c.value],j=Math.random()<.4;let ft=W;if(!j){const lt=f.value.filter(dt=>dt!==W);ft=lt[Math.floor(Math.random()*lt.length)]||(W===W.toUpperCase()?"X":"x")}u.value.push({id:Date.now()+Math.random(),char:ft,x:Math.random()*80+10,y:-10,speed:(Math.random()*.2+.3)*b,isTarget:ft===W})},q=V=>{const U=V-_;_=V;const W=h.value.x,j=h.value.y;let ft=0,lt=0;if(m.has("ArrowLeft")&&(ft-=1),m.has("ArrowRight")&&(ft+=1),m.has("ArrowUp")&&(lt-=1),m.has("ArrowDown")&&(lt+=1),ft!==0||lt!==0){d.value=null;const zt=Math.sqrt(ft*ft+lt*lt),$t=ft/zt,G=lt/zt,z=window.innerWidth,ot=window.innerHeight-100,ct=z/ot,rt=p*(U/16);h.value.x=Math.max(5,Math.min(95,h.value.x+$t*rt)),h.value.y=Math.max(5,Math.min(95,h.value.y+G*rt*ct))}else if(d.value){const zt=1-Math.pow(1-v,U/16);h.value.x+=(d.value.x-h.value.x)*zt,h.value.y+=(d.value.y-h.value.y)*zt,Math.abs(d.value.x-h.value.x)<.1&&Math.abs(d.value.y-h.value.y)<.1&&(d.value=null)}Math.abs(h.value.x-W)>.1||Math.abs(h.value.y-j)>.1?g<=0&&(r(),g=1):g=0,u.value.forEach(zt=>{zt.y+=zt.speed*(U/16)}),u.value=u.value.filter(zt=>zt.y<=110);const _t=12,Ut=10;u.value=u.value.filter(zt=>{var ot,ct;const $t=Math.abs(zt.x-h.value.x),G=Math.abs(zt.y-h.value.y);if($t<_t/2+3&&G<Ut/2+3){const rt=l.value,pt=(rt==null?void 0:rt.a)||(rt==null?void 0:rt.q)||"",I=pt[c.value];return zt.char===I?(a.value+=10,c.value++,(ot=n==null?void 0:n.onHitCorrect)==null||ot.call(n,zt.x,zt.y),c.value>=pt.length?(a.value+=50,b+=.05,i(),T()):e(),!1):(s(),(ct=n==null?void 0:n.onHitWrong)==null||ct.call(n,zt.x,zt.y),c.value=0,w(),!1)}return!0}),o.value==="playing"&&(x=requestAnimationFrame(q))},O=(V,U)=>{d.value={x:Math.max(5,Math.min(95,V)),y:Math.max(5,Math.min(95,U))}},X=(V,U)=>{U?m.add(V):m.delete(V)};return Rs(()=>{F()}),{gameState:o,score:a,currentTarget:l,spellingIndex:c,fallingItems:u,playerPos:h,startGame:C,setPlayerTarget:O,setKey:X,speak:t,announceTarget:w}}const dv={class:"ui-header"},pv={class:"header-left"},mv={class:"header-center"},gv={key:0,class:"spelling-display"},vv={class:"chinese-hint"},_v={class:"header-right"},xv={class:"score-board"},yv={class:"value"},Sv={class:"game-world"},Mv={class:"meteor-letter"},bv={key:0,class:"score-popup"},wv=pr({__name:"SpellingGame",emits:["exit"],setup(n,{emit:t}){const e=t,i=ie([]);let s=0;const r=(M,b)=>{const C=s++;i.value.push({id:C,x:M,y:b}),setTimeout(()=>{i.value=i.value.filter(F=>F.id!==C)},500)},{gameState:o,score:a,currentTarget:l,spellingIndex:c,fallingItems:u,playerPos:f,startGame:h,setKey:d,setPlayerTarget:m,announceTarget:v}=fv({onHitWrong:(M,b)=>r(M,b)}),p=M=>{o.value==="playing"&&(M.key==="Escape"&&e("exit"),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(M.key)&&d(M.key,!0))},g=M=>{["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(M.key)&&d(M.key,!1)},x=M=>{if(o.value!=="playing")return;const b=M.target;if(b.closest("button")||b.closest(".back-btn")||b.closest(".target-word"))return;let C,F;if(M instanceof MouseEvent)C=M.clientX,F=M.clientY;else{const X=M.touches[0];if(!X)return;C=X.clientX,F=X.clientY}const w=100,T=window.innerHeight-w;let L=F-w;L=Math.max(0,Math.min(T,L));const q=C/window.innerWidth*100,O=L/T*100;m(q,O)},S=ie(!1);er(a,(M,b)=>{M>b&&(S.value=!0,setTimeout(()=>{S.value=!1},1e3))}),fo(()=>{window.addEventListener("keydown",p),window.addEventListener("keyup",g),h()}),Rs(()=>{window.removeEventListener("keydown",p),window.removeEventListener("keyup",g)});const _=vu(()=>l.value?l.value.q.split("").map((M,b)=>({char:M,isCaught:b<c.value,isCurrent:b===c.value})):[]);return(M,b)=>(jt(),Qt("div",{class:"game-container",onClick:x,onTouchstart:x},[b[6]||(b[6]=vt("div",{class:"stars"},null,-1)),b[7]||(b[7]=vt("div",{class:"stars2"},null,-1)),vt("div",dv,[vt("div",pv,[vt("button",{class:"back-btn",onClick:b[0]||(b[0]=no(C=>M.$emit("exit"),["stop"]))},"⬅ BACK")]),vt("div",mv,[Wt(l)?(jt(),Qt("div",gv,[vt("div",vv,_e(Wt(l).t),1),vt("div",{class:"word-progress",onClick:b[1]||(b[1]=no(C=>Wt(v)(),["stop"]))},[(jt(!0),Qt(Ce,null,_n(_.value,(C,F)=>(jt(),Qt("span",{key:F,class:Kn(["char-box",{caught:C.isCaught,current:C.isCurrent}])},_e(C.char),3))),128)),b[2]||(b[2]=vt("span",{class:"audio-icon"},"🔊",-1))])])):Bn("",!0)]),vt("div",_v,[vt("div",xv,[b[3]||(b[3]=vt("span",{class:"label"},"SCORE",-1)),vt("span",yv,_e(Wt(a)),1)])])]),vt("div",Sv,[(jt(!0),Qt(Ce,null,_n(i.value,C=>(jt(),Qt("div",{key:C.id,class:"explosion",style:nn({left:C.x+"%",top:C.y+"%"})},"💥",4))),128)),(jt(!0),Qt(Ce,null,_n(Wt(u),C=>(jt(),Qt("div",{key:C.id,class:"falling-item",style:nn({left:C.x+"%",top:C.y+"%"})},[vt("div",Mv,_e(C.char),1),b[4]||(b[4]=vt("div",{class:"meteor-tail"},null,-1))],4))),128)),vt("div",{class:"player",style:nn({left:Wt(f).x+"%",top:Wt(f).y+"%"})},[S.value?(jt(),Qt("div",bv,"+10!")):Bn("",!0),b[5]||(b[5]=np('<svg viewBox="0 0 512 512" width="100" height="65" class="ufo-svg" data-v-31301ed5><ellipse cx="256" cy="320" rx="200" ry="60" fill="#9e9e9e" stroke="#424242" stroke-width="8" data-v-31301ed5></ellipse><ellipse cx="256" cy="310" rx="180" ry="50" fill="#bdbdbd" data-v-31301ed5></ellipse><path d="M160,300 q96,-150 192,0" fill="#66ccff" opacity="0.8" stroke="#333" stroke-width="5" data-v-31301ed5></path><path d="M200,240 q56,-40 112,0" fill="white" opacity="0.3" data-v-31301ed5></path><circle cx="120" cy="330" r="10" fill="#ffeb3b" class="ufo-light" data-v-31301ed5></circle><circle cx="188" cy="350" r="12" fill="#ffeb3b" class="ufo-light" style="animation-delay:0.2s;" data-v-31301ed5></circle><circle cx="256" cy="360" r="14" fill="#ffeb3b" class="ufo-light" style="animation-delay:0.4s;" data-v-31301ed5></circle><circle cx="324" cy="350" r="12" fill="#ffeb3b" class="ufo-light" style="animation-delay:0.6s;" data-v-31301ed5></circle><circle cx="392" cy="330" r="10" fill="#ffeb3b" class="ufo-light" style="animation-delay:0.8s;" data-v-31301ed5></circle></svg>',1))],4)])],32))}}),Ev=gr(wv,[["__scopeId","data-v-31301ed5"]]);function Tv(){const{speak:n,playCorrect:t,playSuccess:e,playExplosion:i}=mr(),s=ie(0),r=ie(0),o=ie(0),a=ie(null),l=ie([]),c=ie(!1),u=["a","e","i","o","u"],f="bcdfghjklmnpqrstvwxyz".split(""),h=v=>{const p=v.split(""),g=p.length,x=Math.random(),S=M=>M===M.toUpperCase()&&M!==M.toLowerCase();if(x<.3){const M=p[0],b=M.toLowerCase(),C=S(M);if(f.includes(b)){let F=f[Math.floor(Math.random()*f.length)];C&&(F=F.toUpperCase()),p[0]=F}else if(u.includes(b)){const F=u.filter(T=>T!==b);let w=F[Math.floor(Math.random()*F.length)];C&&(w=w.toUpperCase()),p[0]=w}return p.join("")}if(x<.6)for(let M=0;M<g;M++){const b=p[M],C=b.toLowerCase(),F=S(b);if(u.includes(C)){const w=u.filter(L=>L!==C);let T=w[Math.floor(Math.random()*w.length)];return F&&(T=T.toUpperCase()),p[M]=T,p.join("")}}if(x<.8)for(let M=0;M<g;M++){const b=p[M],C=b.toLowerCase(),F=S(b);if(f.includes(C)){let w=f[Math.floor(Math.random()*f.length)];return F&&(w=w.toUpperCase()),p[M]=w,p.join("")}}const _=Math.floor(Math.random()*g);return p[_]===p[_+1]?p.splice(_,1):p.splice(_,0,p[_]),p.join("")},d=()=>{c.value=!1;const v=Ai.currentList.value;if(v.length===0)return;const p=v[Math.floor(Math.random()*v.length)];a.value=p;const g=p.q,x=new Set;x.add(g);let S=0;for(;x.size<4&&S<100;){let b=h(g);b!==g&&x.add(b),S++}for(;x.size<4;){let b=g+(Math.random()>.5?"s":"e");x.add(b)}l.value=Array.from(x).sort(()=>Math.random()-.5).map(b=>({text:b,isCorrect:b===g}));const _=p.q,M=p.exps&&p.exps.length>0?`. ${p.exps[0]}`:"";n(`${_}${M}`)};return{p1Score:s,p2Score:r,currentTarget:a,options:l,nextRound:d,handleChoice:(v,p)=>{if(c.value||!a.value)return!1;if(p.isCorrect){c.value=!0,t(),v===1?s.value++:r.value++;const g=s.value>r.value?1:r.value>s.value?2:0;return g!==0&&g!==o.value&&e(),o.value=g,setTimeout(d,1e3),!0}else{i(),v===1?s.value=Math.max(0,s.value-1):r.value=Math.max(0,r.value-1);const g=s.value>r.value?1:r.value>s.value?2:0;return g!==0&&g!==o.value&&e(),o.value=g,!1}},speak:n}}const Av={class:"duel-container"},Cv={class:"center-strip"},Rv={class:"strip-side p2-side rot-180"},Pv={key:0,class:"trophy-container"},Iv={class:"score-display",style:{color:"#FFA726"}},Lv={class:"strip-center"},Dv={class:"text-content"},Nv={class:"text-content"},Fv={class:"strip-side p1-side"},Uv={key:0,class:"trophy-container"},Ov={class:"score-display",style:{color:"#42A5F5"}},Bv={class:"player-zone p2"},zv={class:"options-grid"},Vv=["onClick"],kv={class:"btn-text"},Gv={class:"player-zone p1"},Hv={class:"options-grid"},Wv=["onClick"],qv={class:"btn-text"},Xv=pr({__name:"DuelGame",emits:["exit"],setup(n,{emit:t}){const{p1Score:e,p2Score:i,currentTarget:s,options:r,nextRound:o,handleChoice:a,speak:l}=Tv(),c=ie([]);let u=0;const f=(h,d,m)=>{if(!a(d,m)){const p=u++;c.value.push({id:p,x:h.clientX,y:h.clientY}),setTimeout(()=>{c.value=c.value.filter(g=>g.id!==p)},500)}};return fo(()=>{o()}),(h,d)=>{var m,v,p,g,x,S;return jt(),Qt("div",Av,[(jt(!0),Qt(Ce,null,_n(c.value,_=>(jt(),Qt("div",{key:_.id,class:"explosion",style:nn({left:_.x+"px",top:_.y+"px"})},"💥",4))),128)),vt("div",Cv,[vt("div",Rv,[Wt(i)>Wt(e)?(jt(),Qt("div",Pv,[...d[3]||(d[3]=[vt("div",{class:"trophy-icon"},"🏆",-1)])])):Bn("",!0),vt("div",Iv,_e(Wt(i)),1)]),vt("div",Lv,[vt("div",{class:"target-mini rot-180",onClick:d[0]||(d[0]=_=>Wt(s)&&Wt(l)(Wt(s).q)),style:nn({"--char-count":((v=(m=Wt(s))==null?void 0:m.t)==null?void 0:v.length)||1})},[vt("span",Dv,_e((p=Wt(s))==null?void 0:p.t),1)],4),vt("button",{class:"exit-btn",onClick:d[1]||(d[1]=_=>h.$emit("exit"))},"EXIT"),vt("div",{class:"target-mini",onClick:d[2]||(d[2]=_=>Wt(s)&&Wt(l)(Wt(s).q)),style:nn({"--char-count":((x=(g=Wt(s))==null?void 0:g.t)==null?void 0:x.length)||1})},[vt("span",Nv,_e((S=Wt(s))==null?void 0:S.t),1)],4)]),vt("div",Fv,[Wt(e)>Wt(i)?(jt(),Qt("div",Uv,[...d[4]||(d[4]=[vt("div",{class:"trophy-icon"},"🏆",-1)])])):Bn("",!0),vt("div",Ov,_e(Wt(e)),1)])]),vt("div",Bv,[vt("div",zv,[(jt(!0),Qt(Ce,null,_n(Wt(r),_=>(jt(),Qt("button",{key:"p2-"+_.text,class:"option-btn",onClick:M=>f(M,2,_),style:nn({"--char-count":_.text.length})},[vt("span",kv,_e(_.text),1)],12,Vv))),128))])]),vt("div",Gv,[vt("div",Hv,[(jt(!0),Qt(Ce,null,_n(Wt(r),_=>(jt(),Qt("button",{key:"p1-"+_.text,class:"option-btn",onClick:M=>f(M,1,_),style:nn({"--char-count":_.text.length})},[vt("span",qv,_e(_.text),1)],12,Wv))),128))])])])}}}),$v=gr(Xv,[["__scopeId","data-v-b30ff539"]]);function Yv(n){const e=ie({x:0,y:0,character:"knight",holding:null}),i=ie([]),s=ie("Waiting for command..."),r=ie({type:null,direction:null,x:0,y:0}),o=m=>{e.value.character=m},a=(m,v,p,g)=>{let x=v,S=p;for(let _=0;_<g;_++)x>=0&&x<10&&S>=0&&S<10&&!(x===0&&S===0)&&m.push({id:`water-${_}`,type:"water",x,y:S}),Math.random()>.5?x++:S++},l=(m,v,p)=>{[[-1,-1],[-1,0],[-1,1],[0,-1],[0,0],[0,1],[1,-1],[1,0],[1,1]].forEach(([x,S],_)=>{const M=v+x,b=p+S;M>=0&&M<10&&b>=0&&b<10&&!(M===0&&b===0)&&Math.random()>.3&&m.push({id:`tree-${v}-${p}-${_}`,type:"tree",x:M,y:b})})},c=()=>{const m=[];m.push({id:"bug1",type:"bug-green",x:7,y:3}),m.push({id:"bug2",type:"bug-blue",x:3,y:8}),m.push({id:"bug3",type:"bug-green",x:8,y:7}),a(m,2,0,6),l(m,6,5),[[4,2],[5,2],[2,5],[2,6]].forEach(([p,g],x)=>{m.some(S=>S.x===p&&S.y===g)||m.push({id:`rock-${x}`,type:"rock",x:p,y:g})}),m.push({id:"box1",type:"box",x:1,y:2}),m.push({id:"box2",type:"box",x:5,y:8}),i.value=m,e.value={x:0,y:0,character:e.value.character,holding:null}},u=(m,v)=>m<0||m>=10||v<0||v>=10?!1:!i.value.some(p=>p.x===m&&p.y===v&&(["rock","tree","water"].includes(p.type)||p.type.startsWith("bug"))),f=m=>{s.value=`Heard: "${m}"`;const v=h(m);v?d(v):s.value=`Sorry, I didn't understand "${m}"`},h=m=>{const v=m.toLowerCase().trim(),p=v.split(/\s+/),g=M=>M.some(b=>p.includes(b)),x=()=>g(["up","top","north","above","op","app"])?"up":g(["down","bottom","south","below","don","town","dan"])?"down":g(["left","west","lef","let"])?"left":g(["right","east","rite","write","wright"])?"right":null,S=()=>{const M={zero:0,oh:0,one:1,won:1,wan:1,two:2,to:2,too:2,tu:2,three:3,tree:3,free:3,four:4,for:4,fore:4,five:5,fife:5,six:6,sex:6,sicks:6,seven:7,heaven:7,eight:8,ate:8,ait:8,nine:9,nein:9,ten:10,tin:10};for(const C of p)if(M[C]!==void 0)return M[C];const b=v.match(/\d+/);return b?parseInt(b[0]):1};if(g(["pickup","grab","take","get","pick"]))return{action:"pickup",direction:"up"};const _=x();return _?g(["throw","toss","chuck","hurl","fro"])?{action:"throw",direction:_}:g(["attack","atack","atak","strike","hit","kill","fight"])?{action:"attack",direction:_}:{action:"move",direction:_,steps:S()}:null},d=async m=>{var _,M,b,C;let{x:v,y:p}=e.value;const g=m.direction==="left"?-1:m.direction==="right"?1:0,x=m.direction==="up"?-1:m.direction==="down"?1:0;if(m.action==="pickup"){const F=i.value.findIndex(w=>w.x===v&&w.y===p&&w.type==="box");F!==-1&&!e.value.holding?(e.value.holding="box",i.value.splice(F,1),s.value="Picked up a box!"):e.value.holding?s.value="Already holding something!":s.value="Nothing to pick up here.";return}if(m.action==="throw"){if(!e.value.holding){s.value="Not holding anything to throw!";return}const F=v+g,w=p+x;r.value={type:"throw",direction:m.direction,x:v,y:p},s.value=`Throwing ${m.direction}...`,await new Promise(L=>setTimeout(L,600)),r.value={type:null,direction:null,x:0,y:0};const T=i.value.findIndex(L=>L.x===F&&L.y===w&&L.type.startsWith("bug"));if(T!==-1){const L=i.value[T];s.value=`Boom! Threw box at ${L.type}!`,i.value.splice(T,1),e.value.holding=null,(_=n==null?void 0:n.onWin)==null||_.call(n)}else F>=0&&F<10&&w>=0&&w<10&&!i.value.some(L=>L.x===F&&L.y===w)?(i.value.push({id:`box-thrown-${Date.now()}`,type:"box",x:F,y:w}),e.value.holding=null,s.value="Box thrown!"):s.value="Can't throw there!";return}if(m.action==="attack"){const F=v+g,w=p+x;r.value={type:"attack",direction:m.direction,x:v,y:p},s.value=`Attacking ${m.direction}...`,await new Promise(L=>setTimeout(L,500)),r.value={type:null,direction:null,x:0,y:0};const T=i.value.findIndex(L=>L.x===F&&L.y===w&&L.type.startsWith("bug"));if(T!==-1){const L=i.value[T];s.value=`Bravo! Defeated the ${L.type}!`,i.value.splice(T,1),(M=n==null?void 0:n.onWin)==null||M.call(n),u(F,w)&&(e.value.x=F,e.value.y=w)}else i.value.some(q=>q.x===F&&q.y===w&&["rock","tree","water"].includes(q.type))?(s.value="Clang! Hit an obstacle.",(b=n==null?void 0:n.onHitObstacle)==null||b.call(n)):s.value="Missed!";return}const S=m.steps||1;for(let F=0;F<S;F++){const w=v+g,T=p+x;if(u(w,T))v=w,p=T,e.value.x=v,e.value.y=p,await new Promise(L=>setTimeout(L,200));else{s.value="Blocked!",(C=n==null?void 0:n.onHitObstacle)==null||C.call(n);break}}};return{gridSize:10,player:e,entities:i,message:s,animation:r,initLevel:c,processCommand:f,setCharacter:o}}const jv={key:0,class:"char-select-screen"},Kv={class:"char-options"},Zv={key:1,class:"ck-container"},Jv={class:"header"},Qv={class:"status-bar"},t_={key:0,class:"holding-display"},e_={class:"msg-box"},n_={class:"entity-icon"},i_={class:"controls"},s_={class:"mic-icon"},r_={class:"btn-text"},o_=pr({__name:"CodeKnight",emits:["exit"],setup(n,{emit:t}){const{playSuccess:e,playExplosion:i,playTone:s}=mr(),{gridSize:r,player:o,entities:a,message:l,animation:c,initLevel:u,processCommand:f,setCharacter:h}=Yv({onWin:()=>e(),onHitObstacle:()=>i()}),d=ie(!1),m=ie(!0),v=ie(!1),p=M=>{h(M),m.value=!1,u()},g=()=>{const M=window.SpeechRecognition||window.webkitSpeechRecognition;if(!M){alert("Voice recognition not supported in this browser.");return}if(v.value){console.log("Already processing a command, ignoring...");return}const b=new M;b.lang="en-US",b.continuous=!1,b.interimResults=!1,b.maxAlternatives=3,b.start(),d.value=!0,s(880,"sine",.1),b.onresult=async C=>{if(v.value){console.log("Command already processing, skipping...");return}if(v.value=!0,d.value=!1,!C.results[0].isFinal){console.log("Interim result, skipping..."),v.value=!1;return}for(let F=0;F<C.results[0].length;F++){const w=C.results[0][F].transcript,T=C.results[0][F].confidence;if(console.log(`Alternative ${F}: "${w}" (confidence: ${T})`),T<.3){console.log(`Skipping low confidence alternative ${F}`);continue}const L=l.value;if(f(w),l.value!==L&&!l.value.includes("didn't understand"))break}await new Promise(F=>setTimeout(F,500)),v.value=!1},b.onerror=C=>{if(console.error("Speech recognition error:",C.error),d.value=!1,v.value=!1,C.error==="no-speech")l.value="No speech detected. Try again!";else if(C.error==="audio-capture")l.value="Microphone not found!";else{if(C.error==="aborted")return;l.value=`Error: ${C.error}`}},b.onend=()=>{d.value=!1}},x=(M,b)=>{if(o.value.x===M&&o.value.y===b)return"player";const C=a.value.find(F=>F.x===M&&F.y===b);return(C==null?void 0:C.type)||null},S=M=>{if(M==="player")return o.value.character==="knight"?"🛡️":"🤖";switch(M){case"bug-green":return"🐛";case"bug-blue":return"👾";case"rock":return"🪨";case"water":return"💧";case"tree":return"🌳";case"box":return"📦";default:return""}},_=(M,b)=>{if(o.value.x===M&&o.value.y===b)return"player";const C=a.value.find(F=>F.x===M&&F.y===b);return(C==null?void 0:C.type)||""};return(M,b)=>m.value?(jt(),Qt("div",jv,[b[6]||(b[6]=vt("h1",{class:"select-title"},"Choose Your Hero",-1)),vt("div",Kv,[vt("div",{class:"char-card",onClick:b[0]||(b[0]=C=>p("knight"))},[...b[4]||(b[4]=[vt("div",{class:"char-icon"},"🛡️",-1),vt("div",{class:"char-name"},"Knight",-1),vt("div",{class:"char-desc"},"Brave warrior with sword",-1)])]),vt("div",{class:"char-card",onClick:b[1]||(b[1]=C=>p("robot"))},[...b[5]||(b[5]=[vt("div",{class:"char-icon"},"🤖",-1),vt("div",{class:"char-name"},"Robot",-1),vt("div",{class:"char-desc"},"Tech-powered fighter",-1)])])]),vt("button",{class:"back-btn-select",onClick:b[2]||(b[2]=C=>M.$emit("exit"))},"⬅ Back to Menu")])):(jt(),Qt("div",Zv,[vt("div",Jv,[vt("button",{class:"back-btn",onClick:b[3]||(b[3]=C=>M.$emit("exit"))},"⬅ BACK"),b[7]||(b[7]=vt("div",{class:"game-title"},"Code Knight",-1)),vt("div",Qv,[Wt(o).holding?(jt(),Qt("div",t_," Holding: "+_e(S(Wt(o).holding)),1)):Bn("",!0),vt("div",e_,_e(Wt(l)),1)])]),vt("div",{class:"grid-board",style:nn({"--size":Wt(r)})},[(jt(!0),Qt(Ce,null,_n(Wt(r),C=>(jt(),Qt(Ce,{key:"row-"+C},[(jt(!0),Qt(Ce,null,_n(Wt(r),F=>(jt(),Qt("div",{key:"cell-"+(F-1)+"-"+(C-1),class:Kn(["cell",_(F-1,C-1)])},[vt("div",n_,_e(S(x(F-1,C-1))),1),Wt(c).type==="attack"&&Wt(c).x===F-1&&Wt(c).y===C-1?(jt(),Qt("div",{key:0,class:Kn(["attack-slash","slash-"+Wt(c).direction])},"⚔️",2)):Bn("",!0),Wt(c).type==="throw"&&Wt(c).x===F-1&&Wt(c).y===C-1?(jt(),Qt("div",{key:1,class:Kn(["throw-projectile","throw-"+Wt(c).direction])},"📦",2)):Bn("",!0)],2))),128))],64))),128))],4),vt("div",i_,[vt("button",{class:Kn(["mic-btn",{listening:d.value}]),onClick:g},[vt("span",s_,_e(d.value?"📡":"🎤"),1),vt("span",r_,_e(d.value?"Listening...":"Push to Talk"),1)],2),b[8]||(b[8]=vt("div",{class:"hints"},' Just say: "Right two" | "Down" | "Attack left" | "Pickup" | "Throw up" ',-1))])]))}}),a_=gr(o_,[["__scopeId","data-v-6d211ac8"]]);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xu="182",l_=0,Ah=1,c_=2,ra=1,u_=2,Or=3,es=0,un=1,Dn=2,Pi=0,sr=1,nc=2,Ch=3,Rh=4,h_=5,ms=100,f_=101,d_=102,p_=103,m_=104,g_=200,v_=201,__=202,x_=203,ic=204,sc=205,y_=206,S_=207,M_=208,b_=209,w_=210,E_=211,T_=212,A_=213,C_=214,rc=0,oc=1,ac=2,lr=3,lc=4,cc=5,uc=6,hc=7,ap=0,R_=1,P_=2,ei=0,lp=1,cp=2,up=3,hp=4,fp=5,dp=6,pp=7,mp=300,Es=301,cr=302,fc=303,dc=304,Oa=306,pc=1e3,Ci=1001,mc=1002,Ge=1003,I_=1004,wo=1005,Xe=1006,el=1007,_s=1008,gn=1009,gp=1010,vp=1011,io=1012,yu=1013,oi=1014,Zn=1015,Fi=1016,Su=1017,Mu=1018,so=1020,_p=35902,xp=35899,yp=1021,Sp=1022,Fn=1023,Ui=1026,xs=1027,Mp=1028,bu=1029,ur=1030,wu=1031,Eu=1033,oa=33776,aa=33777,la=33778,ca=33779,gc=35840,vc=35841,_c=35842,xc=35843,yc=36196,Sc=37492,Mc=37496,bc=37488,wc=37489,Ec=37490,Tc=37491,Ac=37808,Cc=37809,Rc=37810,Pc=37811,Ic=37812,Lc=37813,Dc=37814,Nc=37815,Fc=37816,Uc=37817,Oc=37818,Bc=37819,zc=37820,Vc=37821,kc=36492,Gc=36494,Hc=36495,Wc=36283,qc=36284,Xc=36285,$c=36286,L_=3200,bp=0,D_=1,Ki="",bn="srgb",hr="srgb-linear",Sa="linear",ve="srgb",Ls=7680,Ph=519,N_=512,F_=513,U_=514,Tu=515,O_=516,B_=517,Au=518,z_=519,Ih=35044,Lh="300 es",Jn=2e3,Ma=2001;function wp(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function ba(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function V_(){const n=ba("canvas");return n.style.display="block",n}const Dh={};function Nh(...n){const t="THREE."+n.shift();console.log(t,...n)}function Zt(...n){const t="THREE."+n.shift();console.warn(t,...n)}function ae(...n){const t="THREE."+n.shift();console.error(t,...n)}function ro(...n){const t=n.join(" ");t in Dh||(Dh[t]=!0,Zt(...n))}function k_(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}class vr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const He=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],nl=Math.PI/180,Yc=180/Math.PI;function _r(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(He[n&255]+He[n>>8&255]+He[n>>16&255]+He[n>>24&255]+"-"+He[t&255]+He[t>>8&255]+"-"+He[t>>16&15|64]+He[t>>24&255]+"-"+He[e&63|128]+He[e>>8&255]+"-"+He[e>>16&255]+He[e>>24&255]+He[i&255]+He[i>>8&255]+He[i>>16&255]+He[i>>24&255]).toLowerCase()}function re(n,t,e){return Math.max(t,Math.min(e,n))}function G_(n,t){return(n%t+t)%t}function il(n,t,e){return(1-e)*n+e*t}function wr(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function an(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Lt{constructor(t=0,e=0){Lt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(re(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(re(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}let mo=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3],h=r[o+0],d=r[o+1],m=r[o+2],v=r[o+3];if(a<=0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f;return}if(a>=1){t[e+0]=h,t[e+1]=d,t[e+2]=m,t[e+3]=v;return}if(f!==v||l!==h||c!==d||u!==m){let p=l*h+c*d+u*m+f*v;p<0&&(h=-h,d=-d,m=-m,v=-v,p=-p);let g=1-a;if(p<.9995){const x=Math.acos(p),S=Math.sin(x);g=Math.sin(g*x)/S,a=Math.sin(a*x)/S,l=l*g+h*a,c=c*g+d*a,u=u*g+m*a,f=f*g+v*a}else{l=l*g+h*a,c=c*g+d*a,u=u*g+m*a,f=f*g+v*a;const x=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=x,c*=x,u*=x,f*=x}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[o],h=r[o+1],d=r[o+2],m=r[o+3];return t[e]=a*m+u*f+l*d-c*h,t[e+1]=l*m+u*h+c*f-a*d,t[e+2]=c*m+u*d+a*h-l*f,t[e+3]=u*m-a*f-l*h-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),f=a(r/2),h=l(i/2),d=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=h*u*f+c*d*m,this._y=c*d*f-h*u*m,this._z=c*u*m+h*d*f,this._w=c*u*f-h*d*m;break;case"YXZ":this._x=h*u*f+c*d*m,this._y=c*d*f-h*u*m,this._z=c*u*m-h*d*f,this._w=c*u*f+h*d*m;break;case"ZXY":this._x=h*u*f-c*d*m,this._y=c*d*f+h*u*m,this._z=c*u*m+h*d*f,this._w=c*u*f-h*d*m;break;case"ZYX":this._x=h*u*f-c*d*m,this._y=c*d*f+h*u*m,this._z=c*u*m-h*d*f,this._w=c*u*f+h*d*m;break;case"YZX":this._x=h*u*f+c*d*m,this._y=c*d*f+h*u*m,this._z=c*u*m-h*d*f,this._w=c*u*f-h*d*m;break;case"XZY":this._x=h*u*f-c*d*m,this._y=c*d*f-h*u*m,this._z=c*u*m+h*d*f,this._w=c*u*f+h*d*m;break;default:Zt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],f=e[10],h=i+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>f){const d=2*Math.sqrt(1+i-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-i-f);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(re(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e<=0)return this;if(e>=1)return this.copy(t);let i=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class J{constructor(t=0,e=0,i=0){J.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Fh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Fh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),u=2*(a*e-r*s),f=2*(r*i-o*e);return this.x=e+l*c+o*f-a*u,this.y=i+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(re(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return sl.copy(this).projectOnVector(t),this.sub(sl)}reflect(t){return this.sub(sl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(re(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const sl=new J,Fh=new mo;class ee{constructor(t,e,i,s,r,o,a,l,c){ee.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],m=i[8],v=s[0],p=s[3],g=s[6],x=s[1],S=s[4],_=s[7],M=s[2],b=s[5],C=s[8];return r[0]=o*v+a*x+l*M,r[3]=o*p+a*S+l*b,r[6]=o*g+a*_+l*C,r[1]=c*v+u*x+f*M,r[4]=c*p+u*S+f*b,r[7]=c*g+u*_+f*C,r[2]=h*v+d*x+m*M,r[5]=h*p+d*S+m*b,r[8]=h*g+d*_+m*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=u*o-a*c,h=a*l-u*r,d=c*r-o*l,m=e*f+i*h+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return t[0]=f*v,t[1]=(s*c-u*i)*v,t[2]=(a*i-s*o)*v,t[3]=h*v,t[4]=(u*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=d*v,t[7]=(i*l-c*e)*v,t[8]=(o*e-i*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(rl.makeScale(t,e)),this}rotate(t){return this.premultiply(rl.makeRotation(-t)),this}translate(t,e){return this.premultiply(rl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const rl=new ee,Uh=new ee().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Oh=new ee().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function H_(){const n={enabled:!0,workingColorSpace:hr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ve&&(s.r=Ii(s.r),s.g=Ii(s.g),s.b=Ii(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ve&&(s.r=rr(s.r),s.g=rr(s.g),s.b=rr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ki?Sa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ro("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ro("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[hr]:{primaries:t,whitePoint:i,transfer:Sa,toXYZ:Uh,fromXYZ:Oh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:bn},outputColorSpaceConfig:{drawingBufferColorSpace:bn}},[bn]:{primaries:t,whitePoint:i,transfer:ve,toXYZ:Uh,fromXYZ:Oh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:bn}}}),n}const ue=H_();function Ii(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function rr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ds;class W_{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Ds===void 0&&(Ds=ba("canvas")),Ds.width=t.width,Ds.height=t.height;const s=Ds.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Ds}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ba("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ii(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ii(e[i]/255)*255):e[i]=Ii(e[i]);return{data:e,width:t.width,height:t.height}}else return Zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let q_=0;class Cu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:q_++}),this.uuid=_r(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ol(s[o].image)):r.push(ol(s[o]))}else r=ol(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function ol(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?W_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Zt("Texture: Unable to serialize Texture."),{})}let X_=0;const al=new J;class Ye extends vr{constructor(t=Ye.DEFAULT_IMAGE,e=Ye.DEFAULT_MAPPING,i=Ci,s=Ci,r=Xe,o=_s,a=Fn,l=gn,c=Ye.DEFAULT_ANISOTROPY,u=Ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:X_++}),this.uuid=_r(),this.name="",this.source=new Cu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ee,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(al).x}get height(){return this.source.getSize(al).y}get depth(){return this.source.getSize(al).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){Zt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Zt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==mp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case pc:t.x=t.x-Math.floor(t.x);break;case Ci:t.x=t.x<0?0:1;break;case mc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case pc:t.y=t.y-Math.floor(t.y);break;case Ci:t.y=t.y<0?0:1;break;case mc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ye.DEFAULT_IMAGE=null;Ye.DEFAULT_MAPPING=mp;Ye.DEFAULT_ANISOTROPY=1;class De{constructor(t=0,e=0,i=0,s=1){De.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],m=l[9],v=l[2],p=l[6],g=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-v)<.01&&Math.abs(m-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+v)<.1&&Math.abs(m+p)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,_=(d+1)/2,M=(g+1)/2,b=(u+h)/4,C=(f+v)/4,F=(m+p)/4;return S>_&&S>M?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=b/i,r=C/i):_>M?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=b/s,r=F/s):M<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),i=C/r,s=F/r),this.set(i,s,r,e),this}let x=Math.sqrt((p-m)*(p-m)+(f-v)*(f-v)+(h-u)*(h-u));return Math.abs(x)<.001&&(x=1),this.x=(p-m)/x,this.y=(f-v)/x,this.z=(h-u)/x,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this.w=re(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this.w=re(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(re(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $_ extends vr{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new De(0,0,t,e),this.scissorTest=!1,this.viewport=new De(0,0,t,e);const s={width:t,height:e,depth:i.depth},r=new Ye(s);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:Xe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Cu(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ni extends $_{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Ep extends Ye{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Y_ extends Ye{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class go{constructor(t=new J(1/0,1/0,1/0),e=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Tn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Tn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Tn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Tn):Tn.fromBufferAttribute(r,o),Tn.applyMatrix4(t.matrixWorld),this.expandByPoint(Tn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Eo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Eo.copy(i.boundingBox)),Eo.applyMatrix4(t.matrixWorld),this.union(Eo)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Tn),Tn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Er),To.subVectors(this.max,Er),Ns.subVectors(t.a,Er),Fs.subVectors(t.b,Er),Us.subVectors(t.c,Er),Bi.subVectors(Fs,Ns),zi.subVectors(Us,Fs),os.subVectors(Ns,Us);let e=[0,-Bi.z,Bi.y,0,-zi.z,zi.y,0,-os.z,os.y,Bi.z,0,-Bi.x,zi.z,0,-zi.x,os.z,0,-os.x,-Bi.y,Bi.x,0,-zi.y,zi.x,0,-os.y,os.x,0];return!ll(e,Ns,Fs,Us,To)||(e=[1,0,0,0,1,0,0,0,1],!ll(e,Ns,Fs,Us,To))?!1:(Ao.crossVectors(Bi,zi),e=[Ao.x,Ao.y,Ao.z],ll(e,Ns,Fs,Us,To))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Tn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Tn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(di),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const di=[new J,new J,new J,new J,new J,new J,new J,new J],Tn=new J,Eo=new go,Ns=new J,Fs=new J,Us=new J,Bi=new J,zi=new J,os=new J,Er=new J,To=new J,Ao=new J,as=new J;function ll(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){as.fromArray(n,r);const a=s.x*Math.abs(as.x)+s.y*Math.abs(as.y)+s.z*Math.abs(as.z),l=t.dot(as),c=e.dot(as),u=i.dot(as);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const j_=new go,Tr=new J,cl=new J;class Ru{constructor(t=new J,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):j_.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Tr.subVectors(t,this.center);const e=Tr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Tr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(cl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Tr.copy(t.center).add(cl)),this.expandByPoint(Tr.copy(t.center).sub(cl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const pi=new J,ul=new J,Co=new J,Vi=new J,hl=new J,Ro=new J,fl=new J;let Tp=class{constructor(t=new J,e=new J(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,pi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=pi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(pi.copy(this.origin).addScaledVector(this.direction,e),pi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){ul.copy(t).add(e).multiplyScalar(.5),Co.copy(e).sub(t).normalize(),Vi.copy(this.origin).sub(ul);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Co),a=Vi.dot(this.direction),l=-Vi.dot(Co),c=Vi.lengthSq(),u=Math.abs(1-o*o);let f,h,d,m;if(u>0)if(f=o*l-a,h=o*a-l,m=r*u,f>=0)if(h>=-m)if(h<=m){const v=1/u;f*=v,h*=v,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-m?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c):h<=m?(f=0,h=Math.min(Math.max(-r,-l),r),d=h*(h+2*l)+c):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(ul).addScaledVector(Co,h),d}intersectSphere(t,e){pi.subVectors(t.center,this.origin);const i=pi.dot(this.direction),s=pi.dot(pi)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(i=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(a=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,pi)!==null}intersectTriangle(t,e,i,s,r){hl.subVectors(e,t),Ro.subVectors(i,t),fl.crossVectors(hl,Ro);let o=this.direction.dot(fl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Vi.subVectors(this.origin,t);const l=a*this.direction.dot(Ro.crossVectors(Vi,Ro));if(l<0)return null;const c=a*this.direction.dot(hl.cross(Vi));if(c<0||l+c>o)return null;const u=-a*Vi.dot(fl);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class Re{constructor(t,e,i,s,r,o,a,l,c,u,f,h,d,m,v,p){Re.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,u,f,h,d,m,v,p)}set(t,e,i,s,r,o,a,l,c,u,f,h,d,m,v,p){const g=this.elements;return g[0]=t,g[4]=e,g[8]=i,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=f,g[14]=h,g[3]=d,g[7]=m,g[11]=v,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Re().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,i=t.elements,s=1/Os.setFromMatrixColumn(t,0).length(),r=1/Os.setFromMatrixColumn(t,1).length(),o=1/Os.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const h=o*u,d=o*f,m=a*u,v=a*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=d+m*c,e[5]=h-v*c,e[9]=-a*l,e[2]=v-h*c,e[6]=m+d*c,e[10]=o*l}else if(t.order==="YXZ"){const h=l*u,d=l*f,m=c*u,v=c*f;e[0]=h+v*a,e[4]=m*a-d,e[8]=o*c,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=d*a-m,e[6]=v+h*a,e[10]=o*l}else if(t.order==="ZXY"){const h=l*u,d=l*f,m=c*u,v=c*f;e[0]=h-v*a,e[4]=-o*f,e[8]=m+d*a,e[1]=d+m*a,e[5]=o*u,e[9]=v-h*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const h=o*u,d=o*f,m=a*u,v=a*f;e[0]=l*u,e[4]=m*c-d,e[8]=h*c+v,e[1]=l*f,e[5]=v*c+h,e[9]=d*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const h=o*l,d=o*c,m=a*l,v=a*c;e[0]=l*u,e[4]=v-h*f,e[8]=m*f+d,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*f+m,e[10]=h-v*f}else if(t.order==="XZY"){const h=o*l,d=o*c,m=a*l,v=a*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=h*f+v,e[5]=o*u,e[9]=d*f-m,e[2]=m*f-d,e[6]=a*u,e[10]=v*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(K_,t,Z_)}lookAt(t,e,i){const s=this.elements;return dn.subVectors(t,e),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),ki.crossVectors(i,dn),ki.lengthSq()===0&&(Math.abs(i.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),ki.crossVectors(i,dn)),ki.normalize(),Po.crossVectors(dn,ki),s[0]=ki.x,s[4]=Po.x,s[8]=dn.x,s[1]=ki.y,s[5]=Po.y,s[9]=dn.y,s[2]=ki.z,s[6]=Po.z,s[10]=dn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],m=i[2],v=i[6],p=i[10],g=i[14],x=i[3],S=i[7],_=i[11],M=i[15],b=s[0],C=s[4],F=s[8],w=s[12],T=s[1],L=s[5],q=s[9],O=s[13],X=s[2],V=s[6],U=s[10],W=s[14],j=s[3],ft=s[7],lt=s[11],dt=s[15];return r[0]=o*b+a*T+l*X+c*j,r[4]=o*C+a*L+l*V+c*ft,r[8]=o*F+a*q+l*U+c*lt,r[12]=o*w+a*O+l*W+c*dt,r[1]=u*b+f*T+h*X+d*j,r[5]=u*C+f*L+h*V+d*ft,r[9]=u*F+f*q+h*U+d*lt,r[13]=u*w+f*O+h*W+d*dt,r[2]=m*b+v*T+p*X+g*j,r[6]=m*C+v*L+p*V+g*ft,r[10]=m*F+v*q+p*U+g*lt,r[14]=m*w+v*O+p*W+g*dt,r[3]=x*b+S*T+_*X+M*j,r[7]=x*C+S*L+_*V+M*ft,r[11]=x*F+S*q+_*U+M*lt,r[15]=x*w+S*O+_*W+M*dt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],f=t[6],h=t[10],d=t[14],m=t[3],v=t[7],p=t[11],g=t[15],x=l*d-c*h,S=a*d-c*f,_=a*h-l*f,M=o*d-c*u,b=o*h-l*u,C=o*f-a*u;return e*(v*x-p*S+g*_)-i*(m*x-p*M+g*b)+s*(m*S-v*M+g*C)-r*(m*_-v*b+p*C)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=t[9],h=t[10],d=t[11],m=t[12],v=t[13],p=t[14],g=t[15],x=f*p*c-v*h*c+v*l*d-a*p*d-f*l*g+a*h*g,S=m*h*c-u*p*c-m*l*d+o*p*d+u*l*g-o*h*g,_=u*v*c-m*f*c+m*a*d-o*v*d-u*a*g+o*f*g,M=m*f*l-u*v*l-m*a*h+o*v*h+u*a*p-o*f*p,b=e*x+i*S+s*_+r*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/b;return t[0]=x*C,t[1]=(v*h*r-f*p*r-v*s*d+i*p*d+f*s*g-i*h*g)*C,t[2]=(a*p*r-v*l*r+v*s*c-i*p*c-a*s*g+i*l*g)*C,t[3]=(f*l*r-a*h*r-f*s*c+i*h*c+a*s*d-i*l*d)*C,t[4]=S*C,t[5]=(u*p*r-m*h*r+m*s*d-e*p*d-u*s*g+e*h*g)*C,t[6]=(m*l*r-o*p*r-m*s*c+e*p*c+o*s*g-e*l*g)*C,t[7]=(o*h*r-u*l*r+u*s*c-e*h*c-o*s*d+e*l*d)*C,t[8]=_*C,t[9]=(m*f*r-u*v*r-m*i*d+e*v*d+u*i*g-e*f*g)*C,t[10]=(o*v*r-m*a*r+m*i*c-e*v*c-o*i*g+e*a*g)*C,t[11]=(u*a*r-o*f*r-u*i*c+e*f*c+o*i*d-e*a*d)*C,t[12]=M*C,t[13]=(u*v*s-m*f*s+m*i*h-e*v*h-u*i*p+e*f*p)*C,t[14]=(m*a*s-o*v*s-m*i*l+e*v*l+o*i*p-e*a*p)*C,t[15]=(o*f*s-u*a*s+u*i*l-e*f*l-o*i*h+e*a*h)*C,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,f=a+a,h=r*c,d=r*u,m=r*f,v=o*u,p=o*f,g=a*f,x=l*c,S=l*u,_=l*f,M=i.x,b=i.y,C=i.z;return s[0]=(1-(v+g))*M,s[1]=(d+_)*M,s[2]=(m-S)*M,s[3]=0,s[4]=(d-_)*b,s[5]=(1-(h+g))*b,s[6]=(p+x)*b,s[7]=0,s[8]=(m+S)*C,s[9]=(p-x)*C,s[10]=(1-(h+v))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;if(t.x=s[12],t.y=s[13],t.z=s[14],this.determinant()===0)return i.set(1,1,1),e.identity(),this;let r=Os.set(s[0],s[1],s[2]).length();const o=Os.set(s[4],s[5],s[6]).length(),a=Os.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),An.copy(this);const c=1/r,u=1/o,f=1/a;return An.elements[0]*=c,An.elements[1]*=c,An.elements[2]*=c,An.elements[4]*=u,An.elements[5]*=u,An.elements[6]*=u,An.elements[8]*=f,An.elements[9]*=f,An.elements[10]*=f,e.setFromRotationMatrix(An),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Jn,l=!1){const c=this.elements,u=2*r/(e-t),f=2*r/(i-s),h=(e+t)/(e-t),d=(i+s)/(i-s);let m,v;if(l)m=r/(o-r),v=o*r/(o-r);else if(a===Jn)m=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Ma)m=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Jn,l=!1){const c=this.elements,u=2/(e-t),f=2/(i-s),h=-(e+t)/(e-t),d=-(i+s)/(i-s);let m,v;if(l)m=1/(o-r),v=o/(o-r);else if(a===Jn)m=-2/(o-r),v=-(o+r)/(o-r);else if(a===Ma)m=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Os=new J,An=new Re,K_=new J(0,0,0),Z_=new J(1,1,1),ki=new J,Po=new J,dn=new J,Bh=new Re,zh=new mo;class ai{constructor(t=0,e=0,i=0,s=ai.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-re(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(re(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-re(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(re(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-re(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Bh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Bh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return zh.setFromEuler(this),this.setFromQuaternion(zh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ai.DEFAULT_ORDER="XYZ";class Pu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let J_=0;const Vh=new J,Bs=new mo,mi=new Re,Io=new J,Ar=new J,Q_=new J,tx=new mo,kh=new J(1,0,0),Gh=new J(0,1,0),Hh=new J(0,0,1),Wh={type:"added"},ex={type:"removed"},zs={type:"childadded",child:null},dl={type:"childremoved",child:null};class je extends vr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:J_++}),this.uuid=_r(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=je.DEFAULT_UP.clone();const t=new J,e=new ai,i=new mo,s=new J(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Re},normalMatrix:{value:new ee}}),this.matrix=new Re,this.matrixWorld=new Re,this.matrixAutoUpdate=je.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Bs.setFromAxisAngle(t,e),this.quaternion.multiply(Bs),this}rotateOnWorldAxis(t,e){return Bs.setFromAxisAngle(t,e),this.quaternion.premultiply(Bs),this}rotateX(t){return this.rotateOnAxis(kh,t)}rotateY(t){return this.rotateOnAxis(Gh,t)}rotateZ(t){return this.rotateOnAxis(Hh,t)}translateOnAxis(t,e){return Vh.copy(t).applyQuaternion(this.quaternion),this.position.add(Vh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(kh,t)}translateY(t){return this.translateOnAxis(Gh,t)}translateZ(t){return this.translateOnAxis(Hh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Io.copy(t):Io.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(Ar,Io,this.up):mi.lookAt(Io,Ar,this.up),this.quaternion.setFromRotationMatrix(mi),s&&(mi.extractRotation(s.matrixWorld),Bs.setFromRotationMatrix(mi),this.quaternion.premultiply(Bs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ae("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Wh),zs.child=t,this.dispatchEvent(zs),zs.child=null):ae("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ex),dl.child=t,this.dispatchEvent(dl),dl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),mi.multiply(t.parent.matrixWorld)),t.applyMatrix4(mi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Wh),zs.child=t,this.dispatchEvent(zs),zs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,t,Q_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,tx,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),f=o(t.shapes),h=o(t.skeletons),d=o(t.animations),m=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),m.length>0&&(i.nodes=m)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}je.DEFAULT_UP=new J(0,1,0);je.DEFAULT_MATRIX_AUTO_UPDATE=!0;je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Cn=new J,gi=new J,pl=new J,vi=new J,Vs=new J,ks=new J,qh=new J,ml=new J,gl=new J,vl=new J,_l=new De,xl=new De,yl=new De;class Nn{constructor(t=new J,e=new J,i=new J){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Cn.subVectors(t,e),s.cross(Cn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Cn.subVectors(s,e),gi.subVectors(i,e),pl.subVectors(t,e);const o=Cn.dot(Cn),a=Cn.dot(gi),l=Cn.dot(pl),c=gi.dot(gi),u=gi.dot(pl),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const h=1/f,d=(c*l-a*u)*h,m=(o*u-a*l)*h;return r.set(1-d-m,m,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,vi.x),l.addScaledVector(o,vi.y),l.addScaledVector(a,vi.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return _l.setScalar(0),xl.setScalar(0),yl.setScalar(0),_l.fromBufferAttribute(t,e),xl.fromBufferAttribute(t,i),yl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(_l,r.x),o.addScaledVector(xl,r.y),o.addScaledVector(yl,r.z),o}static isFrontFacing(t,e,i,s){return Cn.subVectors(i,e),gi.subVectors(t,e),Cn.cross(gi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Cn.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),Cn.cross(gi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Nn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Nn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return Nn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return Nn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Nn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;Vs.subVectors(s,i),ks.subVectors(r,i),ml.subVectors(t,i);const l=Vs.dot(ml),c=ks.dot(ml);if(l<=0&&c<=0)return e.copy(i);gl.subVectors(t,s);const u=Vs.dot(gl),f=ks.dot(gl);if(u>=0&&f<=u)return e.copy(s);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(Vs,o);vl.subVectors(t,r);const d=Vs.dot(vl),m=ks.dot(vl);if(m>=0&&d<=m)return e.copy(r);const v=d*c-l*m;if(v<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(i).addScaledVector(ks,a);const p=u*m-d*f;if(p<=0&&f-u>=0&&d-m>=0)return qh.subVectors(r,s),a=(f-u)/(f-u+(d-m)),e.copy(s).addScaledVector(qh,a);const g=1/(p+v+h);return o=v*g,a=h*g,e.copy(i).addScaledVector(Vs,o).addScaledVector(ks,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ap={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gi={h:0,s:0,l:0},Lo={h:0,s:0,l:0};function Sl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class le{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=bn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ue.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=ue.workingColorSpace){return this.r=t,this.g=e,this.b=i,ue.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=ue.workingColorSpace){if(t=G_(t,1),e=re(e,0,1),i=re(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Sl(o,r,t+1/3),this.g=Sl(o,r,t),this.b=Sl(o,r,t-1/3)}return ue.colorSpaceToWorking(this,s),this}setStyle(t,e=bn){function i(r){r!==void 0&&parseFloat(r)<1&&Zt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Zt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=bn){const i=Ap[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Zt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ii(t.r),this.g=Ii(t.g),this.b=Ii(t.b),this}copyLinearToSRGB(t){return this.r=rr(t.r),this.g=rr(t.g),this.b=rr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=bn){return ue.workingToColorSpace(We.copy(this),t),Math.round(re(We.r*255,0,255))*65536+Math.round(re(We.g*255,0,255))*256+Math.round(re(We.b*255,0,255))}getHexString(t=bn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ue.workingColorSpace){ue.workingToColorSpace(We.copy(this),e);const i=We.r,s=We.g,r=We.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ue.workingColorSpace){return ue.workingToColorSpace(We.copy(this),e),t.r=We.r,t.g=We.g,t.b=We.b,t}getStyle(t=bn){ue.workingToColorSpace(We.copy(this),t);const e=We.r,i=We.g,s=We.b;return t!==bn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Gi),this.setHSL(Gi.h+t,Gi.s+e,Gi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Gi),t.getHSL(Lo);const i=il(Gi.h,Lo.h,e),s=il(Gi.s,Lo.s,e),r=il(Gi.l,Lo.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const We=new le;le.NAMES=Ap;let nx=0,vo=class extends vr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nx++}),this.uuid=_r(),this.name="",this.type="Material",this.blending=sr,this.side=es,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ic,this.blendDst=sc,this.blendEquation=ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new le(0,0,0),this.blendAlpha=0,this.depthFunc=lr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ph,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ls,this.stencilZFail=Ls,this.stencilZPass=Ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){Zt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Zt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==sr&&(i.blending=this.blending),this.side!==es&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ic&&(i.blendSrc=this.blendSrc),this.blendDst!==sc&&(i.blendDst=this.blendDst),this.blendEquation!==ms&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==lr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ph&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ls&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ls&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ls&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};class $r extends vo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.combine=ap,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Fe=new J,Do=new Lt;let ix=0;class ii{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ix++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Ih,this.updateRanges=[],this.gpuType=Zn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Do.fromBufferAttribute(this,e),Do.applyMatrix3(t),this.setXY(e,Do.x,Do.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix3(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix4(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Fe.fromBufferAttribute(this,e),Fe.applyNormalMatrix(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Fe.fromBufferAttribute(this,e),Fe.transformDirection(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=wr(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=an(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=wr(e,this.array)),e}setX(t,e){return this.normalized&&(e=an(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=wr(e,this.array)),e}setY(t,e){return this.normalized&&(e=an(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=wr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=an(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=wr(e,this.array)),e}setW(t,e){return this.normalized&&(e=an(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=an(e,this.array),i=an(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=an(e,this.array),i=an(i,this.array),s=an(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=an(e,this.array),i=an(i,this.array),s=an(s,this.array),r=an(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ih&&(t.usage=this.usage),t}}class Cp extends ii{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Rp extends ii{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class zn extends ii{constructor(t,e,i){super(new Float32Array(t),e,i)}}let sx=0;const Sn=new Re,Ml=new je,Gs=new J,pn=new go,Cr=new go,ke=new J;class ci extends vr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sx++}),this.uuid=_r(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(wp(t)?Rp:Cp)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new ee().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Sn.makeRotationFromQuaternion(t),this.applyMatrix4(Sn),this}rotateX(t){return Sn.makeRotationX(t),this.applyMatrix4(Sn),this}rotateY(t){return Sn.makeRotationY(t),this.applyMatrix4(Sn),this}rotateZ(t){return Sn.makeRotationZ(t),this.applyMatrix4(Sn),this}translate(t,e,i){return Sn.makeTranslation(t,e,i),this.applyMatrix4(Sn),this}scale(t,e,i){return Sn.makeScale(t,e,i),this.applyMatrix4(Sn),this}lookAt(t){return Ml.lookAt(t),Ml.updateMatrix(),this.applyMatrix4(Ml.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gs).negate(),this.translate(Gs.x,Gs.y,Gs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new zn(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new go);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ae("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];pn.setFromBufferAttribute(r),this.morphTargetsRelative?(ke.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(ke),ke.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(ke)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ae('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ru);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ae("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(t){const i=this.boundingSphere.center;if(pn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Cr.setFromBufferAttribute(a),this.morphTargetsRelative?(ke.addVectors(pn.min,Cr.min),pn.expandByPoint(ke),ke.addVectors(pn.max,Cr.max),pn.expandByPoint(ke)):(pn.expandByPoint(Cr.min),pn.expandByPoint(Cr.max))}pn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)ke.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(ke));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)ke.fromBufferAttribute(a,c),l&&(Gs.fromBufferAttribute(t,c),ke.add(Gs)),s=Math.max(s,i.distanceToSquared(ke))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ae('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ae("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ii(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let F=0;F<i.count;F++)a[F]=new J,l[F]=new J;const c=new J,u=new J,f=new J,h=new Lt,d=new Lt,m=new Lt,v=new J,p=new J;function g(F,w,T){c.fromBufferAttribute(i,F),u.fromBufferAttribute(i,w),f.fromBufferAttribute(i,T),h.fromBufferAttribute(r,F),d.fromBufferAttribute(r,w),m.fromBufferAttribute(r,T),u.sub(c),f.sub(c),d.sub(h),m.sub(h);const L=1/(d.x*m.y-m.x*d.y);isFinite(L)&&(v.copy(u).multiplyScalar(m.y).addScaledVector(f,-d.y).multiplyScalar(L),p.copy(f).multiplyScalar(d.x).addScaledVector(u,-m.x).multiplyScalar(L),a[F].add(v),a[w].add(v),a[T].add(v),l[F].add(p),l[w].add(p),l[T].add(p))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let F=0,w=x.length;F<w;++F){const T=x[F],L=T.start,q=T.count;for(let O=L,X=L+q;O<X;O+=3)g(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const S=new J,_=new J,M=new J,b=new J;function C(F){M.fromBufferAttribute(s,F),b.copy(M);const w=a[F];S.copy(w),S.sub(M.multiplyScalar(M.dot(w))).normalize(),_.crossVectors(b,w);const L=_.dot(l[F])<0?-1:1;o.setXYZW(F,S.x,S.y,S.z,L)}for(let F=0,w=x.length;F<w;++F){const T=x[F],L=T.start,q=T.count;for(let O=L,X=L+q;O<X;O+=3)C(t.getX(O+0)),C(t.getX(O+1)),C(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ii(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const s=new J,r=new J,o=new J,a=new J,l=new J,c=new J,u=new J,f=new J;if(t)for(let h=0,d=t.count;h<d;h+=3){const m=t.getX(h+0),v=t.getX(h+1),p=t.getX(h+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,p),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,d=e.count;h<d;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ke.fromBufferAttribute(t,e),ke.normalize(),t.setXYZ(e,ke.x,ke.y,ke.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,m=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?d=l[v]*a.data.stride+a.offset:d=l[v]*u;for(let g=0;g<u;g++)h[m++]=c[d++]}return new ii(h,u,f)}if(this.index===null)return Zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ci,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=t(h,i);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xh=new Re,ls=new Tp,No=new Ru,$h=new J,Fo=new J,Uo=new J,Oo=new J,bl=new J,Bo=new J,Yh=new J,zo=new J;class oe extends je{constructor(t=new ci,e=new $r){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Bo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],f=r[l];u!==0&&(bl.fromBufferAttribute(f,t),o?Bo.addScaledVector(bl,u):Bo.addScaledVector(bl.sub(e),u))}e.add(Bo)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),No.copy(i.boundingSphere),No.applyMatrix4(r),ls.copy(t.ray).recast(t.near),!(No.containsPoint(ls.origin)===!1&&(ls.intersectSphere(No,$h)===null||ls.origin.distanceToSquared($h)>(t.far-t.near)**2))&&(Xh.copy(r).invert(),ls.copy(t.ray).applyMatrix4(Xh),!(i.boundingBox!==null&&ls.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ls)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,v=h.length;m<v;m++){const p=h[m],g=o[p.materialIndex],x=Math.max(p.start,d.start),S=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let _=x,M=S;_<M;_+=3){const b=a.getX(_),C=a.getX(_+1),F=a.getX(_+2);s=Vo(this,g,t,i,c,u,f,b,C,F),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const m=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let p=m,g=v;p<g;p+=3){const x=a.getX(p),S=a.getX(p+1),_=a.getX(p+2);s=Vo(this,o,t,i,c,u,f,x,S,_),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,v=h.length;m<v;m++){const p=h[m],g=o[p.materialIndex],x=Math.max(p.start,d.start),S=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let _=x,M=S;_<M;_+=3){const b=_,C=_+1,F=_+2;s=Vo(this,g,t,i,c,u,f,b,C,F),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const m=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let p=m,g=v;p<g;p+=3){const x=p,S=p+1,_=p+2;s=Vo(this,o,t,i,c,u,f,x,S,_),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function rx(n,t,e,i,s,r,o,a){let l;if(t.side===un?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===es,a),l===null)return null;zo.copy(a),zo.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(zo);return c<e.near||c>e.far?null:{distance:c,point:zo.clone(),object:n}}function Vo(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,Fo),n.getVertexPosition(l,Uo),n.getVertexPosition(c,Oo);const u=rx(n,t,e,i,Fo,Uo,Oo,Yh);if(u){const f=new J;Nn.getBarycoord(Yh,Fo,Uo,Oo,f),s&&(u.uv=Nn.getInterpolatedAttribute(s,a,l,c,f,new Lt)),r&&(u.uv1=Nn.getInterpolatedAttribute(r,a,l,c,f,new Lt)),o&&(u.normal=Nn.getInterpolatedAttribute(o,a,l,c,f,new J),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new J,materialIndex:0};Nn.getNormal(Fo,Uo,Oo,h.normal),u.face=h,u.barycoord=f}return u}class Ri extends ci{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;m("z","y","x",-1,-1,i,e,t,o,r,0),m("z","y","x",1,-1,i,e,-t,o,r,1),m("x","z","y",1,1,t,i,e,s,o,2),m("x","z","y",1,-1,t,i,-e,s,o,3),m("x","y","z",1,-1,t,e,i,s,r,4),m("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new zn(c,3)),this.setAttribute("normal",new zn(u,3)),this.setAttribute("uv",new zn(f,2));function m(v,p,g,x,S,_,M,b,C,F,w){const T=_/C,L=M/F,q=_/2,O=M/2,X=b/2,V=C+1,U=F+1;let W=0,j=0;const ft=new J;for(let lt=0;lt<U;lt++){const dt=lt*L-O;for(let _t=0;_t<V;_t++){const Ut=_t*T-q;ft[v]=Ut*x,ft[p]=dt*S,ft[g]=X,c.push(ft.x,ft.y,ft.z),ft[v]=0,ft[p]=0,ft[g]=b>0?1:-1,u.push(ft.x,ft.y,ft.z),f.push(_t/C),f.push(1-lt/F),W+=1}}for(let lt=0;lt<F;lt++)for(let dt=0;dt<C;dt++){const _t=h+dt+V*lt,Ut=h+dt+V*(lt+1),zt=h+(dt+1)+V*(lt+1),$t=h+(dt+1)+V*lt;l.push(_t,Ut,$t),l.push(Ut,zt,$t),j+=6}a.addGroup(d,j,w),d+=j,h+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ri(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function fr(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Qe(n){const t={};for(let e=0;e<n.length;e++){const i=fr(n[e]);for(const s in i)t[s]=i[s]}return t}function ox(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Pp(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ue.workingColorSpace}const ax={clone:fr,merge:Qe};var lx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class li extends vo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lx,this.fragmentShader=cx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=fr(t.uniforms),this.uniformsGroups=ox(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Ip extends je{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Re,this.projectionMatrix=new Re,this.projectionMatrixInverse=new Re,this.coordinateSystem=Jn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Hi=new J,jh=new Lt,Kh=new Lt;class Ln extends Ip{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Yc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(nl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Yc*2*Math.atan(Math.tan(nl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Hi.x,Hi.y).multiplyScalar(-t/Hi.z),Hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Hi.x,Hi.y).multiplyScalar(-t/Hi.z)}getViewSize(t,e){return this.getViewBounds(t,jh,Kh),e.subVectors(Kh,jh)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(nl*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Hs=-90,Ws=1;class ux extends je{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ln(Hs,Ws,t,e);s.layers=this.layers,this.add(s);const r=new Ln(Hs,Ws,t,e);r.layers=this.layers,this.add(r);const o=new Ln(Hs,Ws,t,e);o.layers=this.layers,this.add(o);const a=new Ln(Hs,Ws,t,e);a.layers=this.layers,this.add(a);const l=new Ln(Hs,Ws,t,e);l.layers=this.layers,this.add(l);const c=new Ln(Hs,Ws,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Jn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ma)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(f,h,d),t.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class Lp extends Ye{constructor(t=[],e=Es,i,s,r,o,a,l,c,u){super(t,e,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Dp extends ni{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Lp(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ri(5,5,5),r=new li({name:"CubemapFromEquirect",uniforms:fr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:un,blending:Pi});r.uniforms.tEquirect.value=e;const o=new oe(s,r),a=e.minFilter;return e.minFilter===_s&&(e.minFilter=Xe),new ux(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}class ys extends je{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hx={type:"move"};class wl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ys,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ys,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ys,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const v of t.hand.values()){const p=e.getJointPose(v,i),g=this._getHandJoint(c,v);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,m=.005;c.inputState.pinching&&h>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(hx)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new ys;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class Iu{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new le(t),this.near=e,this.far=i}clone(){return new Iu(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class fx extends je{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ai,this.environmentIntensity=1,this.environmentRotation=new ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class dx extends Ye{constructor(t=null,e=1,i=1,s,r,o,a,l,c=Ge,u=Ge,f,h){super(null,o,a,l,c,u,s,r,f,h),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const El=new J,px=new J,mx=new ee;let ji=class{constructor(t=new J(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=El.subVectors(i,e).cross(px.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(El),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||mx.getNormalMatrix(t),s=this.coplanarPoint(El).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}};const cs=new Ru,gx=new Lt(.5,.5),ko=new J;class Lu{constructor(t=new ji,e=new ji,i=new ji,s=new ji,r=new ji,o=new ji){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Jn,i=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],f=r[5],h=r[6],d=r[7],m=r[8],v=r[9],p=r[10],g=r[11],x=r[12],S=r[13],_=r[14],M=r[15];if(s[0].setComponents(c-o,d-u,g-m,M-x).normalize(),s[1].setComponents(c+o,d+u,g+m,M+x).normalize(),s[2].setComponents(c+a,d+f,g+v,M+S).normalize(),s[3].setComponents(c-a,d-f,g-v,M-S).normalize(),i)s[4].setComponents(l,h,p,_).normalize(),s[5].setComponents(c-l,d-h,g-p,M-_).normalize();else if(s[4].setComponents(c-l,d-h,g-p,M-_).normalize(),e===Jn)s[5].setComponents(c+l,d+h,g+p,M+_).normalize();else if(e===Ma)s[5].setComponents(l,h,p,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),cs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),cs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(cs)}intersectsSprite(t){cs.center.set(0,0,0);const e=gx.distanceTo(t.center);return cs.radius=.7071067811865476+e,cs.applyMatrix4(t.matrixWorld),this.intersectsSphere(cs)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(ko.x=s.normal.x>0?t.max.x:t.min.x,ko.y=s.normal.y>0?t.max.y:t.min.y,ko.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ko)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Zh extends Ye{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class oo extends Ye{constructor(t,e,i=oi,s,r,o,a=Ge,l=Ge,c,u=Ui,f=1){if(u!==Ui&&u!==xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:f};super(h,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Cu(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class vx extends oo{constructor(t,e=oi,i=Es,s,r,o=Ge,a=Ge,l,c=Ui){const u={width:t,height:t,depth:1},f=[u,u,u,u,u,u];super(t,t,e,i,s,r,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Np extends Ye{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class ui{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Zt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const i=this.getLengths();let s=0;const r=i.length;let o;e?o=e:o=t*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const u=i[s],h=i[s+1]-u,d=(o-u)/h;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new Lt:new J);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){const i=new J,s=[],r=[],o=[],a=new J,l=new Re;for(let d=0;d<=t;d++){const m=d/t;s[d]=this.getTangentAt(m,new J)}r[0]=new J,o[0]=new J;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),f=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(re(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,m))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(re(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],d*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Du extends ui{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Lt){const i=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,d=c-this.aY;l=h*u-d*f+this.aX,c=h*f+d*u+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class _x extends Du{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Nu(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,f){let h=(o-r)/c-(a-r)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+f)+(l-a)/f;h*=u,d*=u,s(o,a,h,d)},calc:function(r){const o=r*r,a=o*r;return n+t*r+e*o+i*a}}}const Go=new J,Tl=new Nu,Al=new Nu,Cl=new Nu;class xx extends ui{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new J){const i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Go.subVectors(s[0],s[1]).add(s[0]),c=Go);const f=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Go.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Go),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(f),d),v=Math.pow(f.distanceToSquared(h),d),p=Math.pow(h.distanceToSquared(u),d);v<1e-4&&(v=1),m<1e-4&&(m=v),p<1e-4&&(p=v),Tl.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,m,v,p),Al.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,m,v,p),Cl.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,m,v,p)}else this.curveType==="catmullrom"&&(Tl.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),Al.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),Cl.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return i.set(Tl.calc(l),Al.calc(l),Cl.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new J().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Jh(n,t,e,i,s){const r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function yx(n,t){const e=1-n;return e*e*t}function Sx(n,t){return 2*(1-n)*n*t}function Mx(n,t){return n*n*t}function Yr(n,t,e,i){return yx(n,t)+Sx(n,e)+Mx(n,i)}function bx(n,t){const e=1-n;return e*e*e*t}function wx(n,t){const e=1-n;return 3*e*e*n*t}function Ex(n,t){return 3*(1-n)*n*n*t}function Tx(n,t){return n*n*n*t}function jr(n,t,e,i,s){return bx(n,t)+wx(n,e)+Ex(n,i)+Tx(n,s)}class Fp extends ui{constructor(t=new Lt,e=new Lt,i=new Lt,s=new Lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new Lt){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(jr(t,s.x,r.x,o.x,a.x),jr(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ax extends ui{constructor(t=new J,e=new J,i=new J,s=new J){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new J){const i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(jr(t,s.x,r.x,o.x,a.x),jr(t,s.y,r.y,o.y,a.y),jr(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Up extends ui{constructor(t=new Lt,e=new Lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Lt){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Cx extends ui{constructor(t=new J,e=new J){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new J){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new J){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Op extends ui{constructor(t=new Lt,e=new Lt,i=new Lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new Lt){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Yr(t,s.x,r.x,o.x),Yr(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Rx extends ui{constructor(t=new J,e=new J,i=new J){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new J){const i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Yr(t,s.x,r.x,o.x),Yr(t,s.y,r.y,o.y),Yr(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Bp extends ui{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Lt){const i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return i.set(Jh(a,l.x,c.x,u.x,f.x),Jh(a,l.y,c.y,u.y,f.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new Lt().fromArray(s))}return this}}var jc=Object.freeze({__proto__:null,ArcCurve:_x,CatmullRomCurve3:xx,CubicBezierCurve:Fp,CubicBezierCurve3:Ax,EllipseCurve:Du,LineCurve:Up,LineCurve3:Cx,QuadraticBezierCurve:Op,QuadraticBezierCurve3:Rx,SplineCurve:Bp});class Px extends ui{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new jc[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new jc[s.type]().fromJSON(s))}return this}}class Qh extends Px{constructor(t){super(),this.type="Path",this.currentPoint=new Lt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new Up(this.currentPoint.clone(),new Lt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const r=new Op(this.currentPoint.clone(),new Lt(t,e),new Lt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){const a=new Fp(this.currentPoint.clone(),new Lt(t,e),new Lt(i,s),new Lt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new Bp(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){const c=new Du(t,e,i,s,r,o,a,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}let zp=class extends Qh{constructor(t){super(t),this.uuid=_r(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new Qh().fromJSON(s))}return this}};function Ix(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let r=Vp(n,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=Ux(n,t,r,e)),n.length>80*e){a=n[0],l=n[1];let u=a,f=l;for(let h=e;h<s;h+=e){const d=n[h],m=n[h+1];d<a&&(a=d),m<l&&(l=m),d>u&&(u=d),m>f&&(f=m)}c=Math.max(u-a,f-l),c=c!==0?32767/c:0}return ao(r,o,e,a,l,c,0),o}function Vp(n,t,e,i,s){let r;if(s===$x(n,t,e,i)>0)for(let o=t;o<e;o+=i)r=tf(o/i|0,n[o],n[o+1],r);else for(let o=e-i;o>=t;o-=i)r=tf(o/i|0,n[o],n[o+1],r);return r&&dr(r,r.next)&&(co(r),r=r.next),r}function Ts(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(dr(e,e.next)||Pe(e.prev,e,e.next)===0)){if(co(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function ao(n,t,e,i,s,r,o){if(!n)return;!o&&r&&kx(n,i,s,r);let a=n;for(;n.prev!==n.next;){const l=n.prev,c=n.next;if(r?Dx(n,i,s,r):Lx(n)){t.push(l.i,n.i,c.i),co(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=Nx(Ts(n),t),ao(n,t,e,i,s,r,2)):o===2&&Fx(n,t,e,i,s,r):ao(Ts(n),t,e,i,s,r,1);break}}}function Lx(n){const t=n.prev,e=n,i=n.next;if(Pe(t,e,i)>=0)return!1;const s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,c=i.y,u=Math.min(s,r,o),f=Math.min(a,l,c),h=Math.max(s,r,o),d=Math.max(a,l,c);let m=i.next;for(;m!==t;){if(m.x>=u&&m.x<=h&&m.y>=f&&m.y<=d&&Br(s,a,r,l,o,c,m.x,m.y)&&Pe(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Dx(n,t,e,i){const s=n.prev,r=n,o=n.next;if(Pe(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,u=s.y,f=r.y,h=o.y,d=Math.min(a,l,c),m=Math.min(u,f,h),v=Math.max(a,l,c),p=Math.max(u,f,h),g=Kc(d,m,t,e,i),x=Kc(v,p,t,e,i);let S=n.prevZ,_=n.nextZ;for(;S&&S.z>=g&&_&&_.z<=x;){if(S.x>=d&&S.x<=v&&S.y>=m&&S.y<=p&&S!==s&&S!==o&&Br(a,u,l,f,c,h,S.x,S.y)&&Pe(S.prev,S,S.next)>=0||(S=S.prevZ,_.x>=d&&_.x<=v&&_.y>=m&&_.y<=p&&_!==s&&_!==o&&Br(a,u,l,f,c,h,_.x,_.y)&&Pe(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;S&&S.z>=g;){if(S.x>=d&&S.x<=v&&S.y>=m&&S.y<=p&&S!==s&&S!==o&&Br(a,u,l,f,c,h,S.x,S.y)&&Pe(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;_&&_.z<=x;){if(_.x>=d&&_.x<=v&&_.y>=m&&_.y<=p&&_!==s&&_!==o&&Br(a,u,l,f,c,h,_.x,_.y)&&Pe(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Nx(n,t){let e=n;do{const i=e.prev,s=e.next.next;!dr(i,s)&&Gp(i,e,e.next,s)&&lo(i,s)&&lo(s,i)&&(t.push(i.i,e.i,s.i),co(e),co(e.next),e=n=s),e=e.next}while(e!==n);return Ts(e)}function Fx(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Wx(o,a)){let l=Hp(o,a);o=Ts(o,o.next),l=Ts(l,l.next),ao(o,t,e,i,s,r,0),ao(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function Ux(n,t,e,i){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,c=Vp(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(Hx(c))}s.sort(Ox);for(let r=0;r<s.length;r++)e=Bx(s[r],e);return e}function Ox(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function Bx(n,t){const e=zx(n,t);if(!e)return t;const i=Hp(e,n);return Ts(i,i.next),Ts(e,e.next)}function zx(n,t){let e=t;const i=n.x,s=n.y;let r=-1/0,o;if(dr(n,e))return e;do{if(dr(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const f=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=i&&f>r&&(r=f,o=e.x<e.next.x?e:e.next,f===i))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,c=o.y;let u=1/0;e=o;do{if(i>=e.x&&e.x>=l&&i!==e.x&&kp(s<c?i:r,s,l,c,s<c?r:i,s,e.x,e.y)){const f=Math.abs(s-e.y)/(i-e.x);lo(e,n)&&(f<u||f===u&&(e.x>o.x||e.x===o.x&&Vx(o,e)))&&(o=e,u=f)}e=e.next}while(e!==a);return o}function Vx(n,t){return Pe(n.prev,n,t.prev)<0&&Pe(t.next,n,n.next)<0}function kx(n,t,e,i){let s=n;do s.z===0&&(s.z=Kc(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Gx(s)}function Gx(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let o=i,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,e*=2}while(t>1);return n}function Kc(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Hx(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function kp(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function Br(n,t,e,i,s,r,o,a){return!(n===o&&t===a)&&kp(n,t,e,i,s,r,o,a)}function Wx(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!qx(n,t)&&(lo(n,t)&&lo(t,n)&&Xx(n,t)&&(Pe(n.prev,n,t.prev)||Pe(n,t.prev,t))||dr(n,t)&&Pe(n.prev,n,n.next)>0&&Pe(t.prev,t,t.next)>0)}function Pe(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function dr(n,t){return n.x===t.x&&n.y===t.y}function Gp(n,t,e,i){const s=Wo(Pe(n,t,e)),r=Wo(Pe(n,t,i)),o=Wo(Pe(e,i,n)),a=Wo(Pe(e,i,t));return!!(s!==r&&o!==a||s===0&&Ho(n,e,t)||r===0&&Ho(n,i,t)||o===0&&Ho(e,n,i)||a===0&&Ho(e,t,i))}function Ho(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Wo(n){return n>0?1:n<0?-1:0}function qx(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Gp(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function lo(n,t){return Pe(n.prev,n,n.next)<0?Pe(n,t,n.next)>=0&&Pe(n,n.prev,t)>=0:Pe(n,t,n.prev)<0||Pe(n,n.next,t)<0}function Xx(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Hp(n,t){const e=Zc(n.i,n.x,n.y),i=Zc(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function tf(n,t,e,i){const s=Zc(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function co(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Zc(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function $x(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class Yx{static triangulate(t,e,i=2){return Ix(t,e,i)}}class Zs{static area(t){const e=t.length;let i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return Zs.area(t)<0}static triangulateShape(t,e){const i=[],s=[],r=[];ef(t),nf(i,t);let o=t.length;e.forEach(ef);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,nf(i,e[l]);const a=Yx.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function ef(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function nf(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class Fu extends ci{constructor(t=new zp([new Lt(.5,.5),new Lt(-.5,.5),new Lt(-.5,-.5),new Lt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new zn(s,3)),this.setAttribute("uv",new zn(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:d-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const g=e.extrudePath,x=e.UVGenerator!==void 0?e.UVGenerator:jx;let S,_=!1,M,b,C,F;if(g){S=g.getSpacedPoints(u),_=!0,h=!1;const D=g.isCatmullRomCurve3?g.closed:!1;M=g.computeFrenetFrames(u,D),b=new J,C=new J,F=new J}h||(p=0,d=0,m=0,v=0);const w=a.extractPoints(c);let T=w.shape;const L=w.holes;if(!Zs.isClockWise(T)){T=T.reverse();for(let D=0,k=L.length;D<k;D++){const H=L[D];Zs.isClockWise(H)&&(L[D]=H.reverse())}}function O(D){const H=10000000000000001e-36;let $=D[0];for(let R=1;R<=D.length;R++){const nt=R%D.length,Q=D[nt],et=Q.x-$.x,st=Q.y-$.y,A=et*et+st*st,y=Math.max(Math.abs(Q.x),Math.abs(Q.y),Math.abs($.x),Math.abs($.y)),B=H*y*y;if(A<=B){D.splice(nt,1),R--;continue}$=Q}}O(T),L.forEach(O);const X=L.length,V=T;for(let D=0;D<X;D++){const k=L[D];T=T.concat(k)}function U(D,k,H){return k||ae("ExtrudeGeometry: vec does not exist"),D.clone().addScaledVector(k,H)}const W=T.length;function j(D,k,H){let $,R,nt;const Q=D.x-k.x,et=D.y-k.y,st=H.x-D.x,A=H.y-D.y,y=Q*Q+et*et,B=Q*A-et*st;if(Math.abs(B)>Number.EPSILON){const Z=Math.sqrt(y),ht=Math.sqrt(st*st+A*A),tt=k.x-et/Z,xt=k.y+Q/Z,gt=H.x-A/ht,Et=H.y+st/ht,Nt=((gt-tt)*A-(Et-xt)*st)/(Q*A-et*st);$=tt+Q*Nt-D.x,R=xt+et*Nt-D.y;const mt=$*$+R*R;if(mt<=2)return new Lt($,R);nt=Math.sqrt(mt/2)}else{let Z=!1;Q>Number.EPSILON?st>Number.EPSILON&&(Z=!0):Q<-Number.EPSILON?st<-Number.EPSILON&&(Z=!0):Math.sign(et)===Math.sign(A)&&(Z=!0),Z?($=-et,R=Q,nt=Math.sqrt(y)):($=Q,R=et,nt=Math.sqrt(y/2))}return new Lt($/nt,R/nt)}const ft=[];for(let D=0,k=V.length,H=k-1,$=D+1;D<k;D++,H++,$++)H===k&&(H=0),$===k&&($=0),ft[D]=j(V[D],V[H],V[$]);const lt=[];let dt,_t=ft.concat();for(let D=0,k=X;D<k;D++){const H=L[D];dt=[];for(let $=0,R=H.length,nt=R-1,Q=$+1;$<R;$++,nt++,Q++)nt===R&&(nt=0),Q===R&&(Q=0),dt[$]=j(H[$],H[nt],H[Q]);lt.push(dt),_t=_t.concat(dt)}let Ut;if(p===0)Ut=Zs.triangulateShape(V,L);else{const D=[],k=[];for(let H=0;H<p;H++){const $=H/p,R=d*Math.cos($*Math.PI/2),nt=m*Math.sin($*Math.PI/2)+v;for(let Q=0,et=V.length;Q<et;Q++){const st=U(V[Q],ft[Q],nt);ct(st.x,st.y,-R),$===0&&D.push(st)}for(let Q=0,et=X;Q<et;Q++){const st=L[Q];dt=lt[Q];const A=[];for(let y=0,B=st.length;y<B;y++){const Z=U(st[y],dt[y],nt);ct(Z.x,Z.y,-R),$===0&&A.push(Z)}$===0&&k.push(A)}}Ut=Zs.triangulateShape(D,k)}const zt=Ut.length,$t=m+v;for(let D=0;D<W;D++){const k=h?U(T[D],_t[D],$t):T[D];_?(C.copy(M.normals[0]).multiplyScalar(k.x),b.copy(M.binormals[0]).multiplyScalar(k.y),F.copy(S[0]).add(C).add(b),ct(F.x,F.y,F.z)):ct(k.x,k.y,0)}for(let D=1;D<=u;D++)for(let k=0;k<W;k++){const H=h?U(T[k],_t[k],$t):T[k];_?(C.copy(M.normals[D]).multiplyScalar(H.x),b.copy(M.binormals[D]).multiplyScalar(H.y),F.copy(S[D]).add(C).add(b),ct(F.x,F.y,F.z)):ct(H.x,H.y,f/u*D)}for(let D=p-1;D>=0;D--){const k=D/p,H=d*Math.cos(k*Math.PI/2),$=m*Math.sin(k*Math.PI/2)+v;for(let R=0,nt=V.length;R<nt;R++){const Q=U(V[R],ft[R],$);ct(Q.x,Q.y,f+H)}for(let R=0,nt=L.length;R<nt;R++){const Q=L[R];dt=lt[R];for(let et=0,st=Q.length;et<st;et++){const A=U(Q[et],dt[et],$);_?ct(A.x,A.y+S[u-1].y,S[u-1].x+H):ct(A.x,A.y,f+H)}}}G(),z();function G(){const D=s.length/3;if(h){let k=0,H=W*k;for(let $=0;$<zt;$++){const R=Ut[$];rt(R[2]+H,R[1]+H,R[0]+H)}k=u+p*2,H=W*k;for(let $=0;$<zt;$++){const R=Ut[$];rt(R[0]+H,R[1]+H,R[2]+H)}}else{for(let k=0;k<zt;k++){const H=Ut[k];rt(H[2],H[1],H[0])}for(let k=0;k<zt;k++){const H=Ut[k];rt(H[0]+W*u,H[1]+W*u,H[2]+W*u)}}i.addGroup(D,s.length/3-D,0)}function z(){const D=s.length/3;let k=0;ot(V,k),k+=V.length;for(let H=0,$=L.length;H<$;H++){const R=L[H];ot(R,k),k+=R.length}i.addGroup(D,s.length/3-D,1)}function ot(D,k){let H=D.length;for(;--H>=0;){const $=H;let R=H-1;R<0&&(R=D.length-1);for(let nt=0,Q=u+p*2;nt<Q;nt++){const et=W*nt,st=W*(nt+1),A=k+$+et,y=k+R+et,B=k+R+st,Z=k+$+st;pt(A,y,B,Z)}}}function ct(D,k,H){l.push(D),l.push(k),l.push(H)}function rt(D,k,H){I(D),I(k),I(H);const $=s.length/3,R=x.generateTopUV(i,s,$-3,$-2,$-1);N(R[0]),N(R[1]),N(R[2])}function pt(D,k,H,$){I(D),I(k),I($),I(k),I(H),I($);const R=s.length/3,nt=x.generateSideWallUV(i,s,R-6,R-3,R-2,R-1);N(nt[0]),N(nt[1]),N(nt[3]),N(nt[1]),N(nt[2]),N(nt[3])}function I(D){s.push(l[D*3+0]),s.push(l[D*3+1]),s.push(l[D*3+2])}function N(D){r.push(D.x),r.push(D.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return Kx(e,i,t)}static fromJSON(t,e){const i=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];i.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new jc[s.type]().fromJSON(s)),new Fu(i,t.options)}}const jx={generateTopUV:function(n,t,e,i,s){const r=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],c=t[s*3],u=t[s*3+1];return[new Lt(r,o),new Lt(a,l),new Lt(c,u)]},generateSideWallUV:function(n,t,e,i,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[i*3],u=t[i*3+1],f=t[i*3+2],h=t[s*3],d=t[s*3+1],m=t[s*3+2],v=t[r*3],p=t[r*3+1],g=t[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new Lt(o,1-l),new Lt(c,1-f),new Lt(h,1-m),new Lt(v,1-g)]:[new Lt(a,1-l),new Lt(u,1-f),new Lt(d,1-m),new Lt(p,1-g)]}};function Kx(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class tn extends ci{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,f=t/a,h=e/l,d=[],m=[],v=[],p=[];for(let g=0;g<u;g++){const x=g*h-o;for(let S=0;S<c;S++){const _=S*f-r;m.push(_,-x,0),v.push(0,0,1),p.push(S/a),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let x=0;x<a;x++){const S=x+c*g,_=x+c*(g+1),M=x+1+c*(g+1),b=x+1+c*g;d.push(S,_,b),d.push(_,M,b)}this.setIndex(d),this.setAttribute("position",new zn(m,3)),this.setAttribute("normal",new zn(v,3)),this.setAttribute("uv",new zn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tn(t.width,t.height,t.widthSegments,t.heightSegments)}}class Zx extends li{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Rn extends vo{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bp,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Jx extends vo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=L_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Qx extends vo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Wp extends je{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new le(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}const Rl=new Re,sf=new J,rf=new J;class ty{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Lt(512,512),this.mapType=gn,this.map=null,this.mapPass=null,this.matrix=new Re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Lu,this._frameExtents=new Lt(1,1),this._viewportCount=1,this._viewports=[new De(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;sf.setFromMatrixPosition(t.matrixWorld),e.position.copy(sf),rf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(rf),e.updateMatrixWorld(),Rl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rl,e.coordinateSystem,e.reversedDepth),e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Rl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Ba extends Ip{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class ey extends ty{constructor(){super(new Ba(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ny extends Wp{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(je.DEFAULT_UP),this.updateMatrix(),this.target=new je,this.shadow=new ey}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class iy extends Wp{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class sy extends Ln{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const of=new Re;class af{constructor(t,e,i=0,s=1/0){this.ray=new Tp(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Pu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ae("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return of.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(of),this}intersectObject(t,e=!0,i=[]){return Jc(t,this,i,e),i.sort(lf),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Jc(t[s],this,i,e);return i.sort(lf),i}}function lf(n,t){return n.distance-t.distance}function Jc(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)Jc(r[o],t,e,!0)}}function cf(n,t,e,i){const s=ry(i);switch(e){case yp:return n*t;case Mp:return n*t/s.components*s.byteLength;case bu:return n*t/s.components*s.byteLength;case ur:return n*t*2/s.components*s.byteLength;case wu:return n*t*2/s.components*s.byteLength;case Sp:return n*t*3/s.components*s.byteLength;case Fn:return n*t*4/s.components*s.byteLength;case Eu:return n*t*4/s.components*s.byteLength;case oa:case aa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case la:case ca:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case vc:case xc:return Math.max(n,16)*Math.max(t,8)/4;case gc:case _c:return Math.max(n,8)*Math.max(t,8)/2;case yc:case Sc:case bc:case wc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Mc:case Ec:case Tc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ac:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Cc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Rc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Pc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Ic:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Lc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Dc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Nc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Fc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Uc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Oc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Bc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case zc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Vc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case kc:case Gc:case Hc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Wc:case qc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Xc:case $c:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ry(n){switch(n){case gn:case gp:return{byteLength:1,components:1};case io:case vp:case Fi:return{byteLength:2,components:1};case Su:case Mu:return{byteLength:2,components:4};case oi:case yu:case Zn:return{byteLength:4,components:1};case _p:case xp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xu}}));typeof window<"u"&&(window.__THREE__?Zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xu);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function qp(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function oy(n){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((d,m)=>d.start-m.start);let h=0;for(let d=1;d<f.length;d++){const m=f[h],v=f[d];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++h,f[h]=v)}f.length=h+1;for(let d=0,m=f.length;d<m;d++){const v=f[d];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var ay=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ly=`#ifdef USE_ALPHAHASH
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
#endif`,cy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,uy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dy=`#ifdef USE_AOMAP
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
#endif`,py=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,my=`#ifdef USE_BATCHING
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
#endif`,gy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_y=`vec3 objectNormal = vec3( normal );
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
} // validated`,yy=`#ifdef USE_IRIDESCENCE
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
#endif`,Sy=`#ifdef USE_BUMPMAP
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
#endif`,My=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,by=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ey=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ty=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ay=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Cy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ry=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Py=`#define PI 3.141592653589793
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
} // validated`,Iy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ly=`vec3 transformedNormal = objectNormal;
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
#endif`,Dy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ny=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Uy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Oy="gl_FragColor = linearToOutputTexel( gl_FragColor );",By=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zy=`#ifdef USE_ENVMAP
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
#endif`,Vy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ky=`#ifdef USE_ENVMAP
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
#endif`,Gy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hy=`#ifdef USE_ENVMAP
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
#endif`,Wy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$y=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yy=`#ifdef USE_GRADIENTMAP
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
}`,jy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ky=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jy=`uniform bool receiveShadow;
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
#endif`,Qy=`#ifdef USE_ENVMAP
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
#endif`,tS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,eS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,iS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sS=`PhysicalMaterial material;
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
#endif`,rS=`uniform sampler2D dfgLUT;
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
}`,oS=`
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
#endif`,aS=`#if defined( RE_IndirectDiffuse )
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
#endif`,lS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gS=`#if defined( USE_POINTS_UV )
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
#endif`,vS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_S=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,SS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,MS=`#ifdef USE_MORPHTARGETS
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
#endif`,bS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ES=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,TS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,AS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,CS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,RS=`#ifdef USE_NORMALMAP
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
#endif`,PS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,IS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,LS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,DS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,NS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,FS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,US=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,OS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,BS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,VS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,GS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,HS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,WS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,qS=`float getShadowMask() {
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
#endif`,$S=`#ifdef USE_SKINNING
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
#endif`,YS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jS=`#ifdef USE_SKINNING
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
#endif`,KS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ZS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,JS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,QS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tM=`#ifdef USE_TRANSMISSION
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
#endif`,eM=`#ifdef USE_TRANSMISSION
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
#endif`,nM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const oM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,aM=`uniform sampler2D t2D;
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
}`,lM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,uM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fM=`#include <common>
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
}`,dM=`#if DEPTH_PACKING == 3200
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
}`,pM=`#define DISTANCE
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
}`,mM=`#define DISTANCE
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
}`,gM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_M=`uniform float scale;
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
}`,yM=`#include <common>
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
}`,SM=`uniform vec3 diffuse;
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
}`,MM=`#define LAMBERT
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
}`,bM=`#define LAMBERT
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
}`,wM=`#define MATCAP
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
}`,EM=`#define MATCAP
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
}`,TM=`#define NORMAL
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
}`,AM=`#define NORMAL
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
}`,CM=`#define PHONG
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
}`,RM=`#define PHONG
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
}`,PM=`#define STANDARD
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
}`,IM=`#define STANDARD
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
}`,LM=`#define TOON
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
}`,DM=`#define TOON
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
}`,NM=`uniform float size;
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
}`,FM=`uniform vec3 diffuse;
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
}`,UM=`#include <common>
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
}`,OM=`uniform vec3 color;
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
}`,BM=`uniform float rotation;
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
}`,zM=`uniform vec3 diffuse;
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
}`,ne={alphahash_fragment:ay,alphahash_pars_fragment:ly,alphamap_fragment:cy,alphamap_pars_fragment:uy,alphatest_fragment:hy,alphatest_pars_fragment:fy,aomap_fragment:dy,aomap_pars_fragment:py,batching_pars_vertex:my,batching_vertex:gy,begin_vertex:vy,beginnormal_vertex:_y,bsdfs:xy,iridescence_fragment:yy,bumpmap_pars_fragment:Sy,clipping_planes_fragment:My,clipping_planes_pars_fragment:by,clipping_planes_pars_vertex:wy,clipping_planes_vertex:Ey,color_fragment:Ty,color_pars_fragment:Ay,color_pars_vertex:Cy,color_vertex:Ry,common:Py,cube_uv_reflection_fragment:Iy,defaultnormal_vertex:Ly,displacementmap_pars_vertex:Dy,displacementmap_vertex:Ny,emissivemap_fragment:Fy,emissivemap_pars_fragment:Uy,colorspace_fragment:Oy,colorspace_pars_fragment:By,envmap_fragment:zy,envmap_common_pars_fragment:Vy,envmap_pars_fragment:ky,envmap_pars_vertex:Gy,envmap_physical_pars_fragment:Qy,envmap_vertex:Hy,fog_vertex:Wy,fog_pars_vertex:qy,fog_fragment:Xy,fog_pars_fragment:$y,gradientmap_pars_fragment:Yy,lightmap_pars_fragment:jy,lights_lambert_fragment:Ky,lights_lambert_pars_fragment:Zy,lights_pars_begin:Jy,lights_toon_fragment:tS,lights_toon_pars_fragment:eS,lights_phong_fragment:nS,lights_phong_pars_fragment:iS,lights_physical_fragment:sS,lights_physical_pars_fragment:rS,lights_fragment_begin:oS,lights_fragment_maps:aS,lights_fragment_end:lS,logdepthbuf_fragment:cS,logdepthbuf_pars_fragment:uS,logdepthbuf_pars_vertex:hS,logdepthbuf_vertex:fS,map_fragment:dS,map_pars_fragment:pS,map_particle_fragment:mS,map_particle_pars_fragment:gS,metalnessmap_fragment:vS,metalnessmap_pars_fragment:_S,morphinstance_vertex:xS,morphcolor_vertex:yS,morphnormal_vertex:SS,morphtarget_pars_vertex:MS,morphtarget_vertex:bS,normal_fragment_begin:wS,normal_fragment_maps:ES,normal_pars_fragment:TS,normal_pars_vertex:AS,normal_vertex:CS,normalmap_pars_fragment:RS,clearcoat_normal_fragment_begin:PS,clearcoat_normal_fragment_maps:IS,clearcoat_pars_fragment:LS,iridescence_pars_fragment:DS,opaque_fragment:NS,packing:FS,premultiplied_alpha_fragment:US,project_vertex:OS,dithering_fragment:BS,dithering_pars_fragment:zS,roughnessmap_fragment:VS,roughnessmap_pars_fragment:kS,shadowmap_pars_fragment:GS,shadowmap_pars_vertex:HS,shadowmap_vertex:WS,shadowmask_pars_fragment:qS,skinbase_vertex:XS,skinning_pars_vertex:$S,skinning_vertex:YS,skinnormal_vertex:jS,specularmap_fragment:KS,specularmap_pars_fragment:ZS,tonemapping_fragment:JS,tonemapping_pars_fragment:QS,transmission_fragment:tM,transmission_pars_fragment:eM,uv_pars_fragment:nM,uv_pars_vertex:iM,uv_vertex:sM,worldpos_vertex:rM,background_vert:oM,background_frag:aM,backgroundCube_vert:lM,backgroundCube_frag:cM,cube_vert:uM,cube_frag:hM,depth_vert:fM,depth_frag:dM,distance_vert:pM,distance_frag:mM,equirect_vert:gM,equirect_frag:vM,linedashed_vert:_M,linedashed_frag:xM,meshbasic_vert:yM,meshbasic_frag:SM,meshlambert_vert:MM,meshlambert_frag:bM,meshmatcap_vert:wM,meshmatcap_frag:EM,meshnormal_vert:TM,meshnormal_frag:AM,meshphong_vert:CM,meshphong_frag:RM,meshphysical_vert:PM,meshphysical_frag:IM,meshtoon_vert:LM,meshtoon_frag:DM,points_vert:NM,points_frag:FM,shadow_vert:UM,shadow_frag:OM,sprite_vert:BM,sprite_frag:zM},It={common:{diffuse:{value:new le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ee}},envmap:{envMap:{value:null},envMapRotation:{value:new ee},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ee}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ee}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ee},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ee},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ee},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ee}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ee}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ee}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0},uvTransform:{value:new ee}},sprite:{diffuse:{value:new le(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}}},jn={basic:{uniforms:Qe([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.fog]),vertexShader:ne.meshbasic_vert,fragmentShader:ne.meshbasic_frag},lambert:{uniforms:Qe([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new le(0)}}]),vertexShader:ne.meshlambert_vert,fragmentShader:ne.meshlambert_frag},phong:{uniforms:Qe([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new le(0)},specular:{value:new le(1118481)},shininess:{value:30}}]),vertexShader:ne.meshphong_vert,fragmentShader:ne.meshphong_frag},standard:{uniforms:Qe([It.common,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.roughnessmap,It.metalnessmap,It.fog,It.lights,{emissive:{value:new le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag},toon:{uniforms:Qe([It.common,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.gradientmap,It.fog,It.lights,{emissive:{value:new le(0)}}]),vertexShader:ne.meshtoon_vert,fragmentShader:ne.meshtoon_frag},matcap:{uniforms:Qe([It.common,It.bumpmap,It.normalmap,It.displacementmap,It.fog,{matcap:{value:null}}]),vertexShader:ne.meshmatcap_vert,fragmentShader:ne.meshmatcap_frag},points:{uniforms:Qe([It.points,It.fog]),vertexShader:ne.points_vert,fragmentShader:ne.points_frag},dashed:{uniforms:Qe([It.common,It.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ne.linedashed_vert,fragmentShader:ne.linedashed_frag},depth:{uniforms:Qe([It.common,It.displacementmap]),vertexShader:ne.depth_vert,fragmentShader:ne.depth_frag},normal:{uniforms:Qe([It.common,It.bumpmap,It.normalmap,It.displacementmap,{opacity:{value:1}}]),vertexShader:ne.meshnormal_vert,fragmentShader:ne.meshnormal_frag},sprite:{uniforms:Qe([It.sprite,It.fog]),vertexShader:ne.sprite_vert,fragmentShader:ne.sprite_frag},background:{uniforms:{uvTransform:{value:new ee},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ne.background_vert,fragmentShader:ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ee}},vertexShader:ne.backgroundCube_vert,fragmentShader:ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ne.cube_vert,fragmentShader:ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ne.equirect_vert,fragmentShader:ne.equirect_frag},distance:{uniforms:Qe([It.common,It.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ne.distance_vert,fragmentShader:ne.distance_frag},shadow:{uniforms:Qe([It.lights,It.fog,{color:{value:new le(0)},opacity:{value:1}}]),vertexShader:ne.shadow_vert,fragmentShader:ne.shadow_frag}};jn.physical={uniforms:Qe([jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ee},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ee},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ee},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ee},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ee},sheen:{value:0},sheenColor:{value:new le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ee},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ee},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ee},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ee},attenuationDistance:{value:0},attenuationColor:{value:new le(0)},specularColor:{value:new le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ee},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ee},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ee}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag};const qo={r:0,b:0,g:0},us=new ai,VM=new Re;function kM(n,t,e,i,s,r,o){const a=new le(0);let l=r===!0?0:1,c,u,f=null,h=0,d=null;function m(S){let _=S.isScene===!0?S.background:null;return _&&_.isTexture&&(_=(S.backgroundBlurriness>0?e:t).get(_)),_}function v(S){let _=!1;const M=m(S);M===null?g(a,l):M&&M.isColor&&(g(M,1),_=!0);const b=n.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(S,_){const M=m(_);M&&(M.isCubeTexture||M.mapping===Oa)?(u===void 0&&(u=new oe(new Ri(1,1,1),new li({name:"BackgroundCubeMaterial",uniforms:fr(jn.backgroundCube.uniforms),vertexShader:jn.backgroundCube.vertexShader,fragmentShader:jn.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,C,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),us.copy(_.backgroundRotation),us.x*=-1,us.y*=-1,us.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(us.y*=-1,us.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(VM.makeRotationFromEuler(us)),u.material.toneMapped=ue.getTransfer(M.colorSpace)!==ve,(f!==M||h!==M.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,f=M,h=M.version,d=n.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new oe(new tn(2,2),new li({name:"BackgroundMaterial",uniforms:fr(jn.background.uniforms),vertexShader:jn.background.vertexShader,fragmentShader:jn.background.fragmentShader,side:es,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=ue.getTransfer(M.colorSpace)!==ve,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||h!==M.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,f=M,h=M.version,d=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function g(S,_){S.getRGB(qo,Pp(n)),i.buffers.color.setClear(qo.r,qo.g,qo.b,_,o)}function x(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,_=1){a.set(S),l=_,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,g(a,l)},render:v,addToRenderList:p,dispose:x}}function GM(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,o=!1;function a(T,L,q,O,X){let V=!1;const U=f(O,q,L);r!==U&&(r=U,c(r.object)),V=d(T,O,q,X),V&&m(T,O,q,X),X!==null&&t.update(X,n.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,_(T,L,q,O),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return n.createVertexArray()}function c(T){return n.bindVertexArray(T)}function u(T){return n.deleteVertexArray(T)}function f(T,L,q){const O=q.wireframe===!0;let X=i[T.id];X===void 0&&(X={},i[T.id]=X);let V=X[L.id];V===void 0&&(V={},X[L.id]=V);let U=V[O];return U===void 0&&(U=h(l()),V[O]=U),U}function h(T){const L=[],q=[],O=[];for(let X=0;X<e;X++)L[X]=0,q[X]=0,O[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:q,attributeDivisors:O,object:T,attributes:{},index:null}}function d(T,L,q,O){const X=r.attributes,V=L.attributes;let U=0;const W=q.getAttributes();for(const j in W)if(W[j].location>=0){const lt=X[j];let dt=V[j];if(dt===void 0&&(j==="instanceMatrix"&&T.instanceMatrix&&(dt=T.instanceMatrix),j==="instanceColor"&&T.instanceColor&&(dt=T.instanceColor)),lt===void 0||lt.attribute!==dt||dt&&lt.data!==dt.data)return!0;U++}return r.attributesNum!==U||r.index!==O}function m(T,L,q,O){const X={},V=L.attributes;let U=0;const W=q.getAttributes();for(const j in W)if(W[j].location>=0){let lt=V[j];lt===void 0&&(j==="instanceMatrix"&&T.instanceMatrix&&(lt=T.instanceMatrix),j==="instanceColor"&&T.instanceColor&&(lt=T.instanceColor));const dt={};dt.attribute=lt,lt&&lt.data&&(dt.data=lt.data),X[j]=dt,U++}r.attributes=X,r.attributesNum=U,r.index=O}function v(){const T=r.newAttributes;for(let L=0,q=T.length;L<q;L++)T[L]=0}function p(T){g(T,0)}function g(T,L){const q=r.newAttributes,O=r.enabledAttributes,X=r.attributeDivisors;q[T]=1,O[T]===0&&(n.enableVertexAttribArray(T),O[T]=1),X[T]!==L&&(n.vertexAttribDivisor(T,L),X[T]=L)}function x(){const T=r.newAttributes,L=r.enabledAttributes;for(let q=0,O=L.length;q<O;q++)L[q]!==T[q]&&(n.disableVertexAttribArray(q),L[q]=0)}function S(T,L,q,O,X,V,U){U===!0?n.vertexAttribIPointer(T,L,q,X,V):n.vertexAttribPointer(T,L,q,O,X,V)}function _(T,L,q,O){v();const X=O.attributes,V=q.getAttributes(),U=L.defaultAttributeValues;for(const W in V){const j=V[W];if(j.location>=0){let ft=X[W];if(ft===void 0&&(W==="instanceMatrix"&&T.instanceMatrix&&(ft=T.instanceMatrix),W==="instanceColor"&&T.instanceColor&&(ft=T.instanceColor)),ft!==void 0){const lt=ft.normalized,dt=ft.itemSize,_t=t.get(ft);if(_t===void 0)continue;const Ut=_t.buffer,zt=_t.type,$t=_t.bytesPerElement,G=zt===n.INT||zt===n.UNSIGNED_INT||ft.gpuType===yu;if(ft.isInterleavedBufferAttribute){const z=ft.data,ot=z.stride,ct=ft.offset;if(z.isInstancedInterleavedBuffer){for(let rt=0;rt<j.locationSize;rt++)g(j.location+rt,z.meshPerAttribute);T.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let rt=0;rt<j.locationSize;rt++)p(j.location+rt);n.bindBuffer(n.ARRAY_BUFFER,Ut);for(let rt=0;rt<j.locationSize;rt++)S(j.location+rt,dt/j.locationSize,zt,lt,ot*$t,(ct+dt/j.locationSize*rt)*$t,G)}else{if(ft.isInstancedBufferAttribute){for(let z=0;z<j.locationSize;z++)g(j.location+z,ft.meshPerAttribute);T.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let z=0;z<j.locationSize;z++)p(j.location+z);n.bindBuffer(n.ARRAY_BUFFER,Ut);for(let z=0;z<j.locationSize;z++)S(j.location+z,dt/j.locationSize,zt,lt,dt*$t,dt/j.locationSize*z*$t,G)}}else if(U!==void 0){const lt=U[W];if(lt!==void 0)switch(lt.length){case 2:n.vertexAttrib2fv(j.location,lt);break;case 3:n.vertexAttrib3fv(j.location,lt);break;case 4:n.vertexAttrib4fv(j.location,lt);break;default:n.vertexAttrib1fv(j.location,lt)}}}}x()}function M(){F();for(const T in i){const L=i[T];for(const q in L){const O=L[q];for(const X in O)u(O[X].object),delete O[X];delete L[q]}delete i[T]}}function b(T){if(i[T.id]===void 0)return;const L=i[T.id];for(const q in L){const O=L[q];for(const X in O)u(O[X].object),delete O[X];delete L[q]}delete i[T.id]}function C(T){for(const L in i){const q=i[L];if(q[T.id]===void 0)continue;const O=q[T.id];for(const X in O)u(O[X].object),delete O[X];delete q[T.id]}}function F(){w(),o=!0,r!==s&&(r=s,c(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:F,resetDefaultState:w,dispose:M,releaseStatesOfGeometry:b,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:p,disableUnusedAttributes:x}}function HM(n,t,e){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),e.update(u,i,f))}function a(c,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let d=0;for(let m=0;m<f;m++)d+=u[m];e.update(d,i,1)}function l(c,u,f,h){if(f===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<c.length;m++)o(c[m],u[m],h[m]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let m=0;for(let v=0;v<f;v++)m+=u[v]*h[v];e.update(m,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function WM(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==Fn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const F=C===Fi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==gn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Zn&&!F)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(Zt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),x=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),M=n.getParameter(n.MAX_SAMPLES),b=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:x,maxVaryings:S,maxFragmentUniforms:_,maxSamples:M,samples:b}}function qM(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new ji,a=new ee,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||s;return s=h,i=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){const m=f.clippingPlanes,v=f.clipIntersection,p=f.clipShadows,g=n.get(f);if(!s||m===null||m.length===0||r&&!p)r?u(null):c();else{const x=r?0:i,S=x*4;let _=g.clippingState||null;l.value=_,_=u(m,h,S,d);for(let M=0;M!==S;++M)_[M]=e[M];g.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(f,h,d,m){const v=f!==null?f.length:0;let p=null;if(v!==0){if(p=l.value,m!==!0||p===null){const g=d+v*4,x=h.matrixWorldInverse;a.getNormalMatrix(x),(p===null||p.length<g)&&(p=new Float32Array(g));for(let S=0,_=d;S!==v;++S,_+=4)o.copy(f[S]).applyMatrix4(x,a),o.normal.toArray(p,_),p[_+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}function XM(n){let t=new WeakMap;function e(o,a){return a===fc?o.mapping=Es:a===dc&&(o.mapping=cr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===fc||a===dc)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Dp(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}const Zi=4,uf=[.125,.215,.35,.446,.526,.582],gs=20,$M=256,Rr=new Ba,hf=new le;let Pl=null,Il=0,Ll=0,Dl=!1;const YM=new J;class ff{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){const{size:o=256,position:a=YM}=r;Pl=this._renderer.getRenderTarget(),Il=this._renderer.getActiveCubeFace(),Ll=this._renderer.getActiveMipmapLevel(),Dl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Pl,Il,Ll),this._renderer.xr.enabled=Dl,t.scissorTest=!1,qs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Es||t.mapping===cr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Pl=this._renderer.getRenderTarget(),Il=this._renderer.getActiveCubeFace(),Ll=this._renderer.getActiveMipmapLevel(),Dl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Xe,minFilter:Xe,generateMipmaps:!1,type:Fi,format:Fn,colorSpace:hr,depthBuffer:!1},s=df(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=df(t,e,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=jM(r)),this._blurMaterial=ZM(r,t,e),this._ggxMaterial=KM(r,t,e)}return s}_compileMaterial(t){const e=new oe(new ci,t);this._renderer.compile(e,Rr)}_sceneToCubeUV(t,e,i,s,r){const l=new Ln(90,1,e,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(hf),f.toneMapping=ei,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new oe(new Ri,new $r({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,p=v.material;let g=!1;const x=t.background;x?x.isColor&&(p.color.copy(x),t.background=null,g=!0):(p.color.copy(hf),g=!0);for(let S=0;S<6;S++){const _=S%3;_===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[S],r.y,r.z)):_===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[S]));const M=this._cubeSize;qs(s,_*M,S>2?M:0,M,M),f.setRenderTarget(s),g&&f.render(v,l),f.render(t,l)}f.toneMapping=d,f.autoClear=h,t.background=x}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Es||t.mapping===cr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=mf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pf());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;qs(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Rr)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=0+c*1.25,d=f*h,{_lodMax:m}=this,v=this._sizeLods[i],p=3*v*(i>m-Zi?i-m+Zi:0),g=4*(this._cubeSize-v);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=m-e,qs(r,p,g,3*v,2*v),s.setRenderTarget(r),s.render(a,Rr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-i,qs(t,p,g,3*v,2*v),s.setRenderTarget(t),s.render(a,Rr)}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&ae("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[s];f.material=c;const h=c.uniforms,d=this._sizeLods[i]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*gs-1),v=r/m,p=isFinite(r)?1+Math.floor(u*v):gs;p>gs&&Zt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${gs}`);const g=[];let x=0;for(let C=0;C<gs;++C){const F=C/v,w=Math.exp(-F*F/2);g.push(w),C===0?x+=w:C<p&&(x+=2*w)}for(let C=0;C<g.length;C++)g[C]=g[C]/x;h.envMap.value=t.texture,h.samples.value=p,h.weights.value=g,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:S}=this;h.dTheta.value=m,h.mipInt.value=S-i;const _=this._sizeLods[s],M=3*_*(s>S-Zi?s-S+Zi:0),b=4*(this._cubeSize-_);qs(e,M,b,3*_,2*_),l.setRenderTarget(e),l.render(f,Rr)}}function jM(n){const t=[],e=[],i=[];let s=n;const r=n-Zi+1+uf.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Zi?l=uf[o-n+Zi-1]:o===0&&(l=0),e.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,m=6,v=3,p=2,g=1,x=new Float32Array(v*m*d),S=new Float32Array(p*m*d),_=new Float32Array(g*m*d);for(let b=0;b<d;b++){const C=b%3*2/3-1,F=b>2?0:-1,w=[C,F,0,C+2/3,F,0,C+2/3,F+1,0,C,F,0,C+2/3,F+1,0,C,F+1,0];x.set(w,v*m*b),S.set(h,p*m*b);const T=[b,b,b,b,b,b];_.set(T,g*m*b)}const M=new ci;M.setAttribute("position",new ii(x,v)),M.setAttribute("uv",new ii(S,p)),M.setAttribute("faceIndex",new ii(_,g)),i.push(new oe(M,null)),s>Zi&&s--}return{lodMeshes:i,sizeLods:t,sigmas:e}}function df(n,t,e){const i=new ni(n,t,e);return i.texture.mapping=Oa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function qs(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function KM(n,t,e){return new li({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:$M,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:za(),fragmentShader:`

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
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function ZM(n,t,e){const i=new Float32Array(gs),s=new J(0,1,0);return new li({name:"SphericalGaussianBlur",defines:{n:gs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:za(),fragmentShader:`

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
	`}function JM(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===fc||l===dc,u=l===Es||l===cr;if(c||u){let f=t.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return e===null&&(e=new ff(n)),f=c?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&s(d)?(e===null&&(e=new ff(n)),f=c?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function QM(n){const t={};function e(i){if(t[i]!==void 0)return t[i];const s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&ro("WebGLRenderer: "+i+" extension not supported."),s}}}function tb(n,t,e,i){const s={},r=new WeakMap;function o(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const m in h.attributes)t.remove(h.attributes[m]);h.removeEventListener("dispose",o),delete s[h.id];const d=r.get(h);d&&(t.remove(d),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,e.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)t.update(h[d],n.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,m=f.attributes.position;let v=0;if(d!==null){const x=d.array;v=d.version;for(let S=0,_=x.length;S<_;S+=3){const M=x[S+0],b=x[S+1],C=x[S+2];h.push(M,b,b,C,C,M)}}else if(m!==void 0){const x=m.array;v=m.version;for(let S=0,_=x.length/3-1;S<_;S+=3){const M=S+0,b=S+1,C=S+2;h.push(M,b,b,C,C,M)}}else return;const p=new(wp(h)?Rp:Cp)(h,1);p.version=v;const g=r.get(f);g&&t.remove(g),r.set(f,p)}function u(f){const h=r.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function eb(n,t,e){let i;function s(h){i=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,d){n.drawElements(i,d,r,h*o),e.update(d,i,1)}function c(h,d,m){m!==0&&(n.drawElementsInstanced(i,d,r,h*o,m),e.update(d,i,m))}function u(h,d,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,h,0,m);let p=0;for(let g=0;g<m;g++)p+=d[g];e.update(p,i,1)}function f(h,d,m,v){if(m===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<h.length;g++)c(h[g]/o,d[g],v[g]);else{p.multiDrawElementsInstancedWEBGL(i,d,0,r,h,0,v,0,m);let g=0;for(let x=0;x<m;x++)g+=d[x]*v[x];e.update(g,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function nb(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:ae("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function ib(n,t,e){const i=new WeakMap,s=new De;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let T=function(){F.dispose(),i.delete(a),a.removeEventListener("dispose",T)};var d=T;h!==void 0&&h.texture.dispose();const m=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let _=0;m===!0&&(_=1),v===!0&&(_=2),p===!0&&(_=3);let M=a.attributes.position.count*_,b=1;M>t.maxTextureSize&&(b=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const C=new Float32Array(M*b*4*f),F=new Ep(C,M,b,f);F.type=Zn,F.needsUpdate=!0;const w=_*4;for(let L=0;L<f;L++){const q=g[L],O=x[L],X=S[L],V=M*b*4*L;for(let U=0;U<q.count;U++){const W=U*w;m===!0&&(s.fromBufferAttribute(q,U),C[V+W+0]=s.x,C[V+W+1]=s.y,C[V+W+2]=s.z,C[V+W+3]=0),v===!0&&(s.fromBufferAttribute(O,U),C[V+W+4]=s.x,C[V+W+5]=s.y,C[V+W+6]=s.z,C[V+W+7]=0),p===!0&&(s.fromBufferAttribute(X,U),C[V+W+8]=s.x,C[V+W+9]=s.y,C[V+W+10]=s.z,C[V+W+11]=X.itemSize===4?s.w:1)}}h={count:f,texture:F,size:new Lt(M,b)},i.set(a,h),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let m=0;for(let p=0;p<c.length;p++)m+=c[p];const v=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function sb(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,f=t.get(l,u);if(s.get(f)!==c&&(t.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return f}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const rb={[lp]:"LINEAR_TONE_MAPPING",[cp]:"REINHARD_TONE_MAPPING",[up]:"CINEON_TONE_MAPPING",[hp]:"ACES_FILMIC_TONE_MAPPING",[dp]:"AGX_TONE_MAPPING",[pp]:"NEUTRAL_TONE_MAPPING",[fp]:"CUSTOM_TONE_MAPPING"};function ob(n,t,e,i,s){const r=new ni(t,e,{type:n,depthBuffer:i,stencilBuffer:s}),o=new ni(t,e,{type:Fi,depthBuffer:!1,stencilBuffer:!1}),a=new ci;a.setAttribute("position",new zn([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new zn([0,2,0,0,2,0],2));const l=new Zx({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new oe(a,l),u=new Ba(-1,1,1,-1,0,1);let f=null,h=null,d=!1,m,v=null,p=[],g=!1;this.setSize=function(x,S){r.setSize(x,S),o.setSize(x,S);for(let _=0;_<p.length;_++){const M=p[_];M.setSize&&M.setSize(x,S)}},this.setEffects=function(x){p=x,g=p.length>0&&p[0].isRenderPass===!0;const S=r.width,_=r.height;for(let M=0;M<p.length;M++){const b=p[M];b.setSize&&b.setSize(S,_)}},this.begin=function(x,S){if(d||x.toneMapping===ei&&p.length===0)return!1;if(v=S,S!==null){const _=S.width,M=S.height;(r.width!==_||r.height!==M)&&this.setSize(_,M)}return g===!1&&x.setRenderTarget(r),m=x.toneMapping,x.toneMapping=ei,!0},this.hasRenderPass=function(){return g},this.end=function(x,S){x.toneMapping=m,d=!0;let _=r,M=o;for(let b=0;b<p.length;b++){const C=p[b];if(C.enabled!==!1&&(C.render(x,M,_,S),C.needsSwap!==!1)){const F=_;_=M,M=F}}if(f!==x.outputColorSpace||h!==x.toneMapping){f=x.outputColorSpace,h=x.toneMapping,l.defines={},ue.getTransfer(f)===ve&&(l.defines.SRGB_TRANSFER="");const b=rb[h];b&&(l.defines[b]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=_.texture,x.setRenderTarget(v),x.render(c,u),v=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){r.dispose(),o.dispose(),a.dispose(),l.dispose()}}const Xp=new Ye,Qc=new oo(1,1),$p=new Ep,Yp=new Y_,jp=new Lp,gf=[],vf=[],_f=new Float32Array(16),xf=new Float32Array(9),yf=new Float32Array(4);function xr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=gf[s];if(r===void 0&&(r=new Float32Array(s),gf[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function ze(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ve(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Va(n,t){let e=vf[t];e===void 0&&(e=new Int32Array(t),vf[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function ab(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function lb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;n.uniform2fv(this.addr,t),Ve(e,t)}}function cb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ze(e,t))return;n.uniform3fv(this.addr,t),Ve(e,t)}}function ub(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;n.uniform4fv(this.addr,t),Ve(e,t)}}function hb(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ze(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ve(e,t)}else{if(ze(e,i))return;yf.set(i),n.uniformMatrix2fv(this.addr,!1,yf),Ve(e,i)}}function fb(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ze(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ve(e,t)}else{if(ze(e,i))return;xf.set(i),n.uniformMatrix3fv(this.addr,!1,xf),Ve(e,i)}}function db(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ze(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ve(e,t)}else{if(ze(e,i))return;_f.set(i),n.uniformMatrix4fv(this.addr,!1,_f),Ve(e,i)}}function pb(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function mb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;n.uniform2iv(this.addr,t),Ve(e,t)}}function gb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;n.uniform3iv(this.addr,t),Ve(e,t)}}function vb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;n.uniform4iv(this.addr,t),Ve(e,t)}}function _b(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function xb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;n.uniform2uiv(this.addr,t),Ve(e,t)}}function yb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;n.uniform3uiv(this.addr,t),Ve(e,t)}}function Sb(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;n.uniform4uiv(this.addr,t),Ve(e,t)}}function Mb(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Qc.compareFunction=e.isReversedDepthBuffer()?Au:Tu,r=Qc):r=Xp,e.setTexture2D(t||r,s)}function bb(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Yp,s)}function wb(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||jp,s)}function Eb(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||$p,s)}function Tb(n){switch(n){case 5126:return ab;case 35664:return lb;case 35665:return cb;case 35666:return ub;case 35674:return hb;case 35675:return fb;case 35676:return db;case 5124:case 35670:return pb;case 35667:case 35671:return mb;case 35668:case 35672:return gb;case 35669:case 35673:return vb;case 5125:return _b;case 36294:return xb;case 36295:return yb;case 36296:return Sb;case 35678:case 36198:case 36298:case 36306:case 35682:return Mb;case 35679:case 36299:case 36307:return bb;case 35680:case 36300:case 36308:case 36293:return wb;case 36289:case 36303:case 36311:case 36292:return Eb}}function Ab(n,t){n.uniform1fv(this.addr,t)}function Cb(n,t){const e=xr(t,this.size,2);n.uniform2fv(this.addr,e)}function Rb(n,t){const e=xr(t,this.size,3);n.uniform3fv(this.addr,e)}function Pb(n,t){const e=xr(t,this.size,4);n.uniform4fv(this.addr,e)}function Ib(n,t){const e=xr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Lb(n,t){const e=xr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Db(n,t){const e=xr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Nb(n,t){n.uniform1iv(this.addr,t)}function Fb(n,t){n.uniform2iv(this.addr,t)}function Ub(n,t){n.uniform3iv(this.addr,t)}function Ob(n,t){n.uniform4iv(this.addr,t)}function Bb(n,t){n.uniform1uiv(this.addr,t)}function zb(n,t){n.uniform2uiv(this.addr,t)}function Vb(n,t){n.uniform3uiv(this.addr,t)}function kb(n,t){n.uniform4uiv(this.addr,t)}function Gb(n,t,e){const i=this.cache,s=t.length,r=Va(e,s);ze(i,r)||(n.uniform1iv(this.addr,r),Ve(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Qc:o=Xp;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function Hb(n,t,e){const i=this.cache,s=t.length,r=Va(e,s);ze(i,r)||(n.uniform1iv(this.addr,r),Ve(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Yp,r[o])}function Wb(n,t,e){const i=this.cache,s=t.length,r=Va(e,s);ze(i,r)||(n.uniform1iv(this.addr,r),Ve(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||jp,r[o])}function qb(n,t,e){const i=this.cache,s=t.length,r=Va(e,s);ze(i,r)||(n.uniform1iv(this.addr,r),Ve(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||$p,r[o])}function Xb(n){switch(n){case 5126:return Ab;case 35664:return Cb;case 35665:return Rb;case 35666:return Pb;case 35674:return Ib;case 35675:return Lb;case 35676:return Db;case 5124:case 35670:return Nb;case 35667:case 35671:return Fb;case 35668:case 35672:return Ub;case 35669:case 35673:return Ob;case 5125:return Bb;case 36294:return zb;case 36295:return Vb;case 36296:return kb;case 35678:case 36198:case 36298:case 36306:case 35682:return Gb;case 35679:case 36299:case 36307:return Hb;case 35680:case 36300:case 36308:case 36293:return Wb;case 36289:case 36303:case 36311:case 36292:return qb}}class $b{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Tb(e.type)}}class Yb{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Xb(e.type)}}class jb{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const Nl=/(\w+)(\])?(\[|\.)?/g;function Sf(n,t){n.seq.push(t),n.map[t.id]=t}function Kb(n,t,e){const i=n.name,s=i.length;for(Nl.lastIndex=0;;){const r=Nl.exec(i),o=Nl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Sf(e,c===void 0?new $b(a,n,t):new Yb(a,n,t));break}else{let f=e.map[a];f===void 0&&(f=new jb(a),Sf(e,f)),e=f}}}class ua{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);Kb(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function Mf(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const Zb=37297;let Jb=0;function Qb(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const bf=new ee;function tw(n){ue._getMatrix(bf,ue.workingColorSpace,n);const t=`mat3( ${bf.elements.map(e=>e.toFixed(4))} )`;switch(ue.getTransfer(n)){case Sa:return[t,"LinearTransferOETF"];case ve:return[t,"sRGBTransferOETF"];default:return Zt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function wf(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Qb(n.getShaderSource(t),a)}else return r}function ew(n,t){const e=tw(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const nw={[lp]:"Linear",[cp]:"Reinhard",[up]:"Cineon",[hp]:"ACESFilmic",[dp]:"AgX",[pp]:"Neutral",[fp]:"Custom"};function iw(n,t){const e=nw[t];return e===void 0?(Zt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Xo=new J;function sw(){ue.getLuminanceCoefficients(Xo);const n=Xo.x.toFixed(4),t=Xo.y.toFixed(4),e=Xo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rw(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zr).join(`
`)}function ow(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function aw(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function zr(n){return n!==""}function Ef(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Tf(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const lw=/^[ \t]*#include +<([\w\d./]+)>/gm;function tu(n){return n.replace(lw,uw)}const cw=new Map;function uw(n,t){let e=ne[t];if(e===void 0){const i=cw.get(t);if(i!==void 0)e=ne[i],Zt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return tu(e)}const hw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Af(n){return n.replace(hw,fw)}function fw(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Cf(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const dw={[ra]:"SHADOWMAP_TYPE_PCF",[Or]:"SHADOWMAP_TYPE_VSM"};function pw(n){return dw[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const mw={[Es]:"ENVMAP_TYPE_CUBE",[cr]:"ENVMAP_TYPE_CUBE",[Oa]:"ENVMAP_TYPE_CUBE_UV"};function gw(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":mw[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const vw={[cr]:"ENVMAP_MODE_REFRACTION"};function _w(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":vw[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const xw={[ap]:"ENVMAP_BLENDING_MULTIPLY",[R_]:"ENVMAP_BLENDING_MIX",[P_]:"ENVMAP_BLENDING_ADD"};function yw(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":xw[n.combine]||"ENVMAP_BLENDING_NONE"}function Sw(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Mw(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=pw(e),c=gw(e),u=_w(e),f=yw(e),h=Sw(e),d=rw(e),m=ow(r),v=s.createProgram();let p,g,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(zr).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(zr).join(`
`),g.length>0&&(g+=`
`)):(p=[Cf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zr).join(`
`),g=[Cf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ei?"#define TONE_MAPPING":"",e.toneMapping!==ei?ne.tonemapping_pars_fragment:"",e.toneMapping!==ei?iw("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ne.colorspace_pars_fragment,ew("linearToOutputTexel",e.outputColorSpace),sw(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(zr).join(`
`)),o=tu(o),o=Ef(o,e),o=Tf(o,e),a=tu(a),a=Ef(a,e),a=Tf(a,e),o=Af(o),a=Af(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",e.glslVersion===Lh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Lh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const S=x+p+o,_=x+g+a,M=Mf(s,s.VERTEX_SHADER,S),b=Mf(s,s.FRAGMENT_SHADER,_);s.attachShader(v,M),s.attachShader(v,b),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function C(L){if(n.debug.checkShaderErrors){const q=s.getProgramInfoLog(v)||"",O=s.getShaderInfoLog(M)||"",X=s.getShaderInfoLog(b)||"",V=q.trim(),U=O.trim(),W=X.trim();let j=!0,ft=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,M,b);else{const lt=wf(s,M,"vertex"),dt=wf(s,b,"fragment");ae("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+V+`
`+lt+`
`+dt)}else V!==""?Zt("WebGLProgram: Program Info Log:",V):(U===""||W==="")&&(ft=!1);ft&&(L.diagnostics={runnable:j,programLog:V,vertexShader:{log:U,prefix:p},fragmentShader:{log:W,prefix:g}})}s.deleteShader(M),s.deleteShader(b),F=new ua(s,v),w=aw(s,v)}let F;this.getUniforms=function(){return F===void 0&&C(this),F};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(v,Zb)),T},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Jb++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=M,this.fragmentShader=b,this}let bw=0;class ww{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Ew(t),e.set(t,i)),i}}class Ew{constructor(t){this.id=bw++,this.code=t,this.usedTimes=0}}function Tw(n,t,e,i,s,r,o){const a=new Pu,l=new ww,c=new Set,u=[],f=new Map,h=s.logarithmicDepthBuffer;let d=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(w){return c.add(w),w===0?"uv":`uv${w}`}function p(w,T,L,q,O){const X=q.fog,V=O.geometry,U=w.isMeshStandardMaterial?q.environment:null,W=(w.isMeshStandardMaterial?e:t).get(w.envMap||U),j=W&&W.mapping===Oa?W.image.height:null,ft=m[w.type];w.precision!==null&&(d=s.getMaxPrecision(w.precision),d!==w.precision&&Zt("WebGLProgram.getParameters:",w.precision,"not supported, using",d,"instead."));const lt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,dt=lt!==void 0?lt.length:0;let _t=0;V.morphAttributes.position!==void 0&&(_t=1),V.morphAttributes.normal!==void 0&&(_t=2),V.morphAttributes.color!==void 0&&(_t=3);let Ut,zt,$t,G;if(ft){const me=jn[ft];Ut=me.vertexShader,zt=me.fragmentShader}else Ut=w.vertexShader,zt=w.fragmentShader,l.update(w),$t=l.getVertexShaderID(w),G=l.getFragmentShaderID(w);const z=n.getRenderTarget(),ot=n.state.buffers.depth.getReversed(),ct=O.isInstancedMesh===!0,rt=O.isBatchedMesh===!0,pt=!!w.map,I=!!w.matcap,N=!!W,D=!!w.aoMap,k=!!w.lightMap,H=!!w.bumpMap,$=!!w.normalMap,R=!!w.displacementMap,nt=!!w.emissiveMap,Q=!!w.metalnessMap,et=!!w.roughnessMap,st=w.anisotropy>0,A=w.clearcoat>0,y=w.dispersion>0,B=w.iridescence>0,Z=w.sheen>0,ht=w.transmission>0,tt=st&&!!w.anisotropyMap,xt=A&&!!w.clearcoatMap,gt=A&&!!w.clearcoatNormalMap,Et=A&&!!w.clearcoatRoughnessMap,Nt=B&&!!w.iridescenceMap,mt=B&&!!w.iridescenceThicknessMap,St=Z&&!!w.sheenColorMap,Tt=Z&&!!w.sheenRoughnessMap,Rt=!!w.specularMap,bt=!!w.specularColorMap,Gt=!!w.specularIntensityMap,Y=ht&&!!w.transmissionMap,At=ht&&!!w.thicknessMap,wt=!!w.gradientMap,Ot=!!w.alphaMap,Mt=w.alphaTest>0,yt=!!w.alphaHash,Ct=!!w.extensions;let Jt=ei;w.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Jt=n.toneMapping);const Me={shaderID:ft,shaderType:w.type,shaderName:w.name,vertexShader:Ut,fragmentShader:zt,defines:w.defines,customVertexShaderID:$t,customFragmentShaderID:G,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:d,batching:rt,batchingColor:rt&&O._colorsTexture!==null,instancing:ct,instancingColor:ct&&O.instanceColor!==null,instancingMorph:ct&&O.morphTexture!==null,outputColorSpace:z===null?n.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:hr,alphaToCoverage:!!w.alphaToCoverage,map:pt,matcap:I,envMap:N,envMapMode:N&&W.mapping,envMapCubeUVHeight:j,aoMap:D,lightMap:k,bumpMap:H,normalMap:$,displacementMap:R,emissiveMap:nt,normalMapObjectSpace:$&&w.normalMapType===D_,normalMapTangentSpace:$&&w.normalMapType===bp,metalnessMap:Q,roughnessMap:et,anisotropy:st,anisotropyMap:tt,clearcoat:A,clearcoatMap:xt,clearcoatNormalMap:gt,clearcoatRoughnessMap:Et,dispersion:y,iridescence:B,iridescenceMap:Nt,iridescenceThicknessMap:mt,sheen:Z,sheenColorMap:St,sheenRoughnessMap:Tt,specularMap:Rt,specularColorMap:bt,specularIntensityMap:Gt,transmission:ht,transmissionMap:Y,thicknessMap:At,gradientMap:wt,opaque:w.transparent===!1&&w.blending===sr&&w.alphaToCoverage===!1,alphaMap:Ot,alphaTest:Mt,alphaHash:yt,combine:w.combine,mapUv:pt&&v(w.map.channel),aoMapUv:D&&v(w.aoMap.channel),lightMapUv:k&&v(w.lightMap.channel),bumpMapUv:H&&v(w.bumpMap.channel),normalMapUv:$&&v(w.normalMap.channel),displacementMapUv:R&&v(w.displacementMap.channel),emissiveMapUv:nt&&v(w.emissiveMap.channel),metalnessMapUv:Q&&v(w.metalnessMap.channel),roughnessMapUv:et&&v(w.roughnessMap.channel),anisotropyMapUv:tt&&v(w.anisotropyMap.channel),clearcoatMapUv:xt&&v(w.clearcoatMap.channel),clearcoatNormalMapUv:gt&&v(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Et&&v(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Nt&&v(w.iridescenceMap.channel),iridescenceThicknessMapUv:mt&&v(w.iridescenceThicknessMap.channel),sheenColorMapUv:St&&v(w.sheenColorMap.channel),sheenRoughnessMapUv:Tt&&v(w.sheenRoughnessMap.channel),specularMapUv:Rt&&v(w.specularMap.channel),specularColorMapUv:bt&&v(w.specularColorMap.channel),specularIntensityMapUv:Gt&&v(w.specularIntensityMap.channel),transmissionMapUv:Y&&v(w.transmissionMap.channel),thicknessMapUv:At&&v(w.thicknessMap.channel),alphaMapUv:Ot&&v(w.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&($||st),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!V.attributes.uv&&(pt||Ot),fog:!!X,useFog:w.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ot,skinning:O.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:dt,morphTextureStride:_t,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:Jt,decodeVideoTexture:pt&&w.map.isVideoTexture===!0&&ue.getTransfer(w.map.colorSpace)===ve,decodeVideoTextureEmissive:nt&&w.emissiveMap.isVideoTexture===!0&&ue.getTransfer(w.emissiveMap.colorSpace)===ve,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Dn,flipSided:w.side===un,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ct&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ct&&w.extensions.multiDraw===!0||rt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Me.vertexUv1s=c.has(1),Me.vertexUv2s=c.has(2),Me.vertexUv3s=c.has(3),c.clear(),Me}function g(w){const T=[];if(w.shaderID?T.push(w.shaderID):(T.push(w.customVertexShaderID),T.push(w.customFragmentShaderID)),w.defines!==void 0)for(const L in w.defines)T.push(L),T.push(w.defines[L]);return w.isRawShaderMaterial===!1&&(x(T,w),S(T,w),T.push(n.outputColorSpace)),T.push(w.customProgramCacheKey),T.join()}function x(w,T){w.push(T.precision),w.push(T.outputColorSpace),w.push(T.envMapMode),w.push(T.envMapCubeUVHeight),w.push(T.mapUv),w.push(T.alphaMapUv),w.push(T.lightMapUv),w.push(T.aoMapUv),w.push(T.bumpMapUv),w.push(T.normalMapUv),w.push(T.displacementMapUv),w.push(T.emissiveMapUv),w.push(T.metalnessMapUv),w.push(T.roughnessMapUv),w.push(T.anisotropyMapUv),w.push(T.clearcoatMapUv),w.push(T.clearcoatNormalMapUv),w.push(T.clearcoatRoughnessMapUv),w.push(T.iridescenceMapUv),w.push(T.iridescenceThicknessMapUv),w.push(T.sheenColorMapUv),w.push(T.sheenRoughnessMapUv),w.push(T.specularMapUv),w.push(T.specularColorMapUv),w.push(T.specularIntensityMapUv),w.push(T.transmissionMapUv),w.push(T.thicknessMapUv),w.push(T.combine),w.push(T.fogExp2),w.push(T.sizeAttenuation),w.push(T.morphTargetsCount),w.push(T.morphAttributeCount),w.push(T.numDirLights),w.push(T.numPointLights),w.push(T.numSpotLights),w.push(T.numSpotLightMaps),w.push(T.numHemiLights),w.push(T.numRectAreaLights),w.push(T.numDirLightShadows),w.push(T.numPointLightShadows),w.push(T.numSpotLightShadows),w.push(T.numSpotLightShadowsWithMaps),w.push(T.numLightProbes),w.push(T.shadowMapType),w.push(T.toneMapping),w.push(T.numClippingPlanes),w.push(T.numClipIntersection),w.push(T.depthPacking)}function S(w,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),w.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),w.push(a.mask)}function _(w){const T=m[w.type];let L;if(T){const q=jn[T];L=ax.clone(q.uniforms)}else L=w.uniforms;return L}function M(w,T){let L=f.get(T);return L!==void 0?++L.usedTimes:(L=new Mw(n,T,w,r),u.push(L),f.set(T,L)),L}function b(w){if(--w.usedTimes===0){const T=u.indexOf(w);u[T]=u[u.length-1],u.pop(),f.delete(w.cacheKey),w.destroy()}}function C(w){l.remove(w)}function F(){l.dispose()}return{getParameters:p,getProgramCacheKey:g,getUniforms:_,acquireProgram:M,releaseProgram:b,releaseShaderCache:C,programs:u,dispose:F}}function Aw(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Cw(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Rf(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Pf(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(f,h,d,m,v,p){let g=n[t];return g===void 0?(g={id:f.id,object:f,geometry:h,material:d,groupOrder:m,renderOrder:f.renderOrder,z:v,group:p},n[t]=g):(g.id=f.id,g.object=f,g.geometry=h,g.material=d,g.groupOrder=m,g.renderOrder=f.renderOrder,g.z=v,g.group=p),t++,g}function a(f,h,d,m,v,p){const g=o(f,h,d,m,v,p);d.transmission>0?i.push(g):d.transparent===!0?s.push(g):e.push(g)}function l(f,h,d,m,v,p){const g=o(f,h,d,m,v,p);d.transmission>0?i.unshift(g):d.transparent===!0?s.unshift(g):e.unshift(g)}function c(f,h){e.length>1&&e.sort(f||Cw),i.length>1&&i.sort(h||Rf),s.length>1&&s.sort(h||Rf)}function u(){for(let f=t,h=n.length;f<h;f++){const d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function Rw(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new Pf,n.set(i,[o])):s>=r.length?(o=new Pf,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function Pw(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new J,color:new le};break;case"SpotLight":e={position:new J,direction:new J,color:new le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new J,color:new le,distance:0,decay:0};break;case"HemisphereLight":e={direction:new J,skyColor:new le,groundColor:new le};break;case"RectAreaLight":e={color:new le,position:new J,halfWidth:new J,halfHeight:new J};break}return n[t.id]=e,e}}}function Iw(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let Lw=0;function Dw(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Nw(n){const t=new Pw,e=Iw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new J);const s=new J,r=new Re,o=new Re;function a(c){let u=0,f=0,h=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let d=0,m=0,v=0,p=0,g=0,x=0,S=0,_=0,M=0,b=0,C=0;c.sort(Dw);for(let w=0,T=c.length;w<T;w++){const L=c[w],q=L.color,O=L.intensity,X=L.distance;let V=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===ur?V=L.shadow.map.texture:V=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=q.r*O,f+=q.g*O,h+=q.b*O;else if(L.isLightProbe){for(let U=0;U<9;U++)i.probe[U].addScaledVector(L.sh.coefficients[U],O);C++}else if(L.isDirectionalLight){const U=t.get(L);if(U.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const W=L.shadow,j=e.get(L);j.shadowIntensity=W.intensity,j.shadowBias=W.bias,j.shadowNormalBias=W.normalBias,j.shadowRadius=W.radius,j.shadowMapSize=W.mapSize,i.directionalShadow[d]=j,i.directionalShadowMap[d]=V,i.directionalShadowMatrix[d]=L.shadow.matrix,x++}i.directional[d]=U,d++}else if(L.isSpotLight){const U=t.get(L);U.position.setFromMatrixPosition(L.matrixWorld),U.color.copy(q).multiplyScalar(O),U.distance=X,U.coneCos=Math.cos(L.angle),U.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),U.decay=L.decay,i.spot[v]=U;const W=L.shadow;if(L.map&&(i.spotLightMap[M]=L.map,M++,W.updateMatrices(L),L.castShadow&&b++),i.spotLightMatrix[v]=W.matrix,L.castShadow){const j=e.get(L);j.shadowIntensity=W.intensity,j.shadowBias=W.bias,j.shadowNormalBias=W.normalBias,j.shadowRadius=W.radius,j.shadowMapSize=W.mapSize,i.spotShadow[v]=j,i.spotShadowMap[v]=V,_++}v++}else if(L.isRectAreaLight){const U=t.get(L);U.color.copy(q).multiplyScalar(O),U.halfWidth.set(L.width*.5,0,0),U.halfHeight.set(0,L.height*.5,0),i.rectArea[p]=U,p++}else if(L.isPointLight){const U=t.get(L);if(U.color.copy(L.color).multiplyScalar(L.intensity),U.distance=L.distance,U.decay=L.decay,L.castShadow){const W=L.shadow,j=e.get(L);j.shadowIntensity=W.intensity,j.shadowBias=W.bias,j.shadowNormalBias=W.normalBias,j.shadowRadius=W.radius,j.shadowMapSize=W.mapSize,j.shadowCameraNear=W.camera.near,j.shadowCameraFar=W.camera.far,i.pointShadow[m]=j,i.pointShadowMap[m]=V,i.pointShadowMatrix[m]=L.shadow.matrix,S++}i.point[m]=U,m++}else if(L.isHemisphereLight){const U=t.get(L);U.skyColor.copy(L.color).multiplyScalar(O),U.groundColor.copy(L.groundColor).multiplyScalar(O),i.hemi[g]=U,g++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=It.LTC_FLOAT_1,i.rectAreaLTC2=It.LTC_FLOAT_2):(i.rectAreaLTC1=It.LTC_HALF_1,i.rectAreaLTC2=It.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const F=i.hash;(F.directionalLength!==d||F.pointLength!==m||F.spotLength!==v||F.rectAreaLength!==p||F.hemiLength!==g||F.numDirectionalShadows!==x||F.numPointShadows!==S||F.numSpotShadows!==_||F.numSpotMaps!==M||F.numLightProbes!==C)&&(i.directional.length=d,i.spot.length=v,i.rectArea.length=p,i.point.length=m,i.hemi.length=g,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=_+M-b,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=C,F.directionalLength=d,F.pointLength=m,F.spotLength=v,F.rectAreaLength=p,F.hemiLength=g,F.numDirectionalShadows=x,F.numPointShadows=S,F.numSpotShadows=_,F.numSpotMaps=M,F.numLightProbes=C,i.version=Lw++)}function l(c,u){let f=0,h=0,d=0,m=0,v=0;const p=u.matrixWorldInverse;for(let g=0,x=c.length;g<x;g++){const S=c[g];if(S.isDirectionalLight){const _=i.directional[f];_.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(p),f++}else if(S.isSpotLight){const _=i.spot[d];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(p),_.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(p),d++}else if(S.isRectAreaLight){const _=i.rectArea[m];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(p),o.identity(),r.copy(S.matrixWorld),r.premultiply(p),o.extractRotation(r),_.halfWidth.set(S.width*.5,0,0),_.halfHeight.set(0,S.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),m++}else if(S.isPointLight){const _=i.point[h];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(p),h++}else if(S.isHemisphereLight){const _=i.hemi[v];_.direction.setFromMatrixPosition(S.matrixWorld),_.direction.transformDirection(p),v++}}}return{setup:a,setupView:l,state:i}}function If(n){const t=new Nw(n),e=[],i=[];function s(u){c.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Fw(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new If(n),t.set(s,[a])):r>=o.length?(a=new If(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}const Uw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ow=`uniform sampler2D shadow_pass;
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
}`,Bw=[new J(1,0,0),new J(-1,0,0),new J(0,1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1)],zw=[new J(0,-1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1),new J(0,-1,0),new J(0,-1,0)],Lf=new Re,Pr=new J,Fl=new J;function Vw(n,t,e){let i=new Lu;const s=new Lt,r=new Lt,o=new De,a=new Jx,l=new Qx,c={},u=e.maxTextureSize,f={[es]:un,[un]:es,[Dn]:Dn},h=new li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:Uw,fragmentShader:Ow}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const m=new ci;m.setAttribute("position",new ii(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new oe(m,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ra;let g=this.type;this.render=function(b,C,F){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;b.type===u_&&(Zt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),b.type=ra);const w=n.getRenderTarget(),T=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),q=n.state;q.setBlending(Pi),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const O=g!==this.type;O&&C.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(V=>V.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,V=b.length;X<V;X++){const U=b[X],W=U.shadow;if(W===void 0){Zt("WebGLShadowMap:",U,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const j=W.getFrameExtents();if(s.multiply(j),r.copy(W.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/j.x),s.x=r.x*j.x,W.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/j.y),s.y=r.y*j.y,W.mapSize.y=r.y)),W.map===null||O===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Or){if(U.isPointLight){Zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new ni(s.x,s.y,{format:ur,type:Fi,minFilter:Xe,magFilter:Xe,generateMipmaps:!1}),W.map.texture.name=U.name+".shadowMap",W.map.depthTexture=new oo(s.x,s.y,Zn),W.map.depthTexture.name=U.name+".shadowMapDepth",W.map.depthTexture.format=Ui,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Ge,W.map.depthTexture.magFilter=Ge}else{U.isPointLight?(W.map=new Dp(s.x),W.map.depthTexture=new vx(s.x,oi)):(W.map=new ni(s.x,s.y),W.map.depthTexture=new oo(s.x,s.y,oi)),W.map.depthTexture.name=U.name+".shadowMap",W.map.depthTexture.format=Ui;const lt=n.state.buffers.depth.getReversed();this.type===ra?(W.map.depthTexture.compareFunction=lt?Au:Tu,W.map.depthTexture.minFilter=Xe,W.map.depthTexture.magFilter=Xe):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Ge,W.map.depthTexture.magFilter=Ge)}W.camera.updateProjectionMatrix()}const ft=W.map.isWebGLCubeRenderTarget?6:1;for(let lt=0;lt<ft;lt++){if(W.map.isWebGLCubeRenderTarget)n.setRenderTarget(W.map,lt),n.clear();else{lt===0&&(n.setRenderTarget(W.map),n.clear());const dt=W.getViewport(lt);o.set(r.x*dt.x,r.y*dt.y,r.x*dt.z,r.y*dt.w),q.viewport(o)}if(U.isPointLight){const dt=W.camera,_t=W.matrix,Ut=U.distance||dt.far;Ut!==dt.far&&(dt.far=Ut,dt.updateProjectionMatrix()),Pr.setFromMatrixPosition(U.matrixWorld),dt.position.copy(Pr),Fl.copy(dt.position),Fl.add(Bw[lt]),dt.up.copy(zw[lt]),dt.lookAt(Fl),dt.updateMatrixWorld(),_t.makeTranslation(-Pr.x,-Pr.y,-Pr.z),Lf.multiplyMatrices(dt.projectionMatrix,dt.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Lf,dt.coordinateSystem,dt.reversedDepth)}else W.updateMatrices(U);i=W.getFrustum(),_(C,F,W.camera,U,this.type)}W.isPointLightShadow!==!0&&this.type===Or&&x(W,F),W.needsUpdate=!1}g=this.type,p.needsUpdate=!1,n.setRenderTarget(w,T,L)};function x(b,C){const F=t.update(v);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new ni(s.x,s.y,{format:ur,type:Fi})),h.uniforms.shadow_pass.value=b.map.depthTexture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(C,null,F,h,v,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(C,null,F,d,v,null)}function S(b,C,F,w){let T=null;const L=F.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(L!==void 0)T=L;else if(T=F.isPointLight===!0?l:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const q=T.uuid,O=C.uuid;let X=c[q];X===void 0&&(X={},c[q]=X);let V=X[O];V===void 0&&(V=T.clone(),X[O]=V,C.addEventListener("dispose",M)),T=V}if(T.visible=C.visible,T.wireframe=C.wireframe,w===Or?T.side=C.shadowSide!==null?C.shadowSide:C.side:T.side=C.shadowSide!==null?C.shadowSide:f[C.side],T.alphaMap=C.alphaMap,T.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,T.map=C.map,T.clipShadows=C.clipShadows,T.clippingPlanes=C.clippingPlanes,T.clipIntersection=C.clipIntersection,T.displacementMap=C.displacementMap,T.displacementScale=C.displacementScale,T.displacementBias=C.displacementBias,T.wireframeLinewidth=C.wireframeLinewidth,T.linewidth=C.linewidth,F.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const q=n.properties.get(T);q.light=F}return T}function _(b,C,F,w,T){if(b.visible===!1)return;if(b.layers.test(C.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&T===Or)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,b.matrixWorld);const O=t.update(b),X=b.material;if(Array.isArray(X)){const V=O.groups;for(let U=0,W=V.length;U<W;U++){const j=V[U],ft=X[j.materialIndex];if(ft&&ft.visible){const lt=S(b,ft,w,T);b.onBeforeShadow(n,b,C,F,O,lt,j),n.renderBufferDirect(F,null,O,lt,b,j),b.onAfterShadow(n,b,C,F,O,lt,j)}}}else if(X.visible){const V=S(b,X,w,T);b.onBeforeShadow(n,b,C,F,O,V,null),n.renderBufferDirect(F,null,O,V,b,null),b.onAfterShadow(n,b,C,F,O,V,null)}}const q=b.children;for(let O=0,X=q.length;O<X;O++)_(q[O],C,F,w,T)}function M(b){b.target.removeEventListener("dispose",M);for(const F in c){const w=c[F],T=b.target.uuid;T in w&&(w[T].dispose(),delete w[T])}}}const kw={[rc]:oc,[ac]:uc,[lc]:hc,[lr]:cc,[oc]:rc,[uc]:ac,[hc]:lc,[cc]:lr};function Gw(n,t){function e(){let Y=!1;const At=new De;let wt=null;const Ot=new De(0,0,0,0);return{setMask:function(Mt){wt!==Mt&&!Y&&(n.colorMask(Mt,Mt,Mt,Mt),wt=Mt)},setLocked:function(Mt){Y=Mt},setClear:function(Mt,yt,Ct,Jt,Me){Me===!0&&(Mt*=Jt,yt*=Jt,Ct*=Jt),At.set(Mt,yt,Ct,Jt),Ot.equals(At)===!1&&(n.clearColor(Mt,yt,Ct,Jt),Ot.copy(At))},reset:function(){Y=!1,wt=null,Ot.set(-1,0,0,0)}}}function i(){let Y=!1,At=!1,wt=null,Ot=null,Mt=null;return{setReversed:function(yt){if(At!==yt){const Ct=t.get("EXT_clip_control");yt?Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.ZERO_TO_ONE_EXT):Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.NEGATIVE_ONE_TO_ONE_EXT),At=yt;const Jt=Mt;Mt=null,this.setClear(Jt)}},getReversed:function(){return At},setTest:function(yt){yt?z(n.DEPTH_TEST):ot(n.DEPTH_TEST)},setMask:function(yt){wt!==yt&&!Y&&(n.depthMask(yt),wt=yt)},setFunc:function(yt){if(At&&(yt=kw[yt]),Ot!==yt){switch(yt){case rc:n.depthFunc(n.NEVER);break;case oc:n.depthFunc(n.ALWAYS);break;case ac:n.depthFunc(n.LESS);break;case lr:n.depthFunc(n.LEQUAL);break;case lc:n.depthFunc(n.EQUAL);break;case cc:n.depthFunc(n.GEQUAL);break;case uc:n.depthFunc(n.GREATER);break;case hc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ot=yt}},setLocked:function(yt){Y=yt},setClear:function(yt){Mt!==yt&&(At&&(yt=1-yt),n.clearDepth(yt),Mt=yt)},reset:function(){Y=!1,wt=null,Ot=null,Mt=null,At=!1}}}function s(){let Y=!1,At=null,wt=null,Ot=null,Mt=null,yt=null,Ct=null,Jt=null,Me=null;return{setTest:function(me){Y||(me?z(n.STENCIL_TEST):ot(n.STENCIL_TEST))},setMask:function(me){At!==me&&!Y&&(n.stencilMask(me),At=me)},setFunc:function(me,kn,hi){(wt!==me||Ot!==kn||Mt!==hi)&&(n.stencilFunc(me,kn,hi),wt=me,Ot=kn,Mt=hi)},setOp:function(me,kn,hi){(yt!==me||Ct!==kn||Jt!==hi)&&(n.stencilOp(me,kn,hi),yt=me,Ct=kn,Jt=hi)},setLocked:function(me){Y=me},setClear:function(me){Me!==me&&(n.clearStencil(me),Me=me)},reset:function(){Y=!1,At=null,wt=null,Ot=null,Mt=null,yt=null,Ct=null,Jt=null,Me=null}}}const r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,d=[],m=null,v=!1,p=null,g=null,x=null,S=null,_=null,M=null,b=null,C=new le(0,0,0),F=0,w=!1,T=null,L=null,q=null,O=null,X=null;const V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,W=0;const j=n.getParameter(n.VERSION);j.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(j)[1]),U=W>=1):j.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),U=W>=2);let ft=null,lt={};const dt=n.getParameter(n.SCISSOR_BOX),_t=n.getParameter(n.VIEWPORT),Ut=new De().fromArray(dt),zt=new De().fromArray(_t);function $t(Y,At,wt,Ot){const Mt=new Uint8Array(4),yt=n.createTexture();n.bindTexture(Y,yt),n.texParameteri(Y,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(Y,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ct=0;Ct<wt;Ct++)Y===n.TEXTURE_3D||Y===n.TEXTURE_2D_ARRAY?n.texImage3D(At,0,n.RGBA,1,1,Ot,0,n.RGBA,n.UNSIGNED_BYTE,Mt):n.texImage2D(At+Ct,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Mt);return yt}const G={};G[n.TEXTURE_2D]=$t(n.TEXTURE_2D,n.TEXTURE_2D,1),G[n.TEXTURE_CUBE_MAP]=$t(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),G[n.TEXTURE_2D_ARRAY]=$t(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),G[n.TEXTURE_3D]=$t(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),z(n.DEPTH_TEST),o.setFunc(lr),H(!1),$(Ah),z(n.CULL_FACE),D(Pi);function z(Y){u[Y]!==!0&&(n.enable(Y),u[Y]=!0)}function ot(Y){u[Y]!==!1&&(n.disable(Y),u[Y]=!1)}function ct(Y,At){return f[Y]!==At?(n.bindFramebuffer(Y,At),f[Y]=At,Y===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=At),Y===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=At),!0):!1}function rt(Y,At){let wt=d,Ot=!1;if(Y){wt=h.get(At),wt===void 0&&(wt=[],h.set(At,wt));const Mt=Y.textures;if(wt.length!==Mt.length||wt[0]!==n.COLOR_ATTACHMENT0){for(let yt=0,Ct=Mt.length;yt<Ct;yt++)wt[yt]=n.COLOR_ATTACHMENT0+yt;wt.length=Mt.length,Ot=!0}}else wt[0]!==n.BACK&&(wt[0]=n.BACK,Ot=!0);Ot&&n.drawBuffers(wt)}function pt(Y){return m!==Y?(n.useProgram(Y),m=Y,!0):!1}const I={[ms]:n.FUNC_ADD,[f_]:n.FUNC_SUBTRACT,[d_]:n.FUNC_REVERSE_SUBTRACT};I[p_]=n.MIN,I[m_]=n.MAX;const N={[g_]:n.ZERO,[v_]:n.ONE,[__]:n.SRC_COLOR,[ic]:n.SRC_ALPHA,[w_]:n.SRC_ALPHA_SATURATE,[M_]:n.DST_COLOR,[y_]:n.DST_ALPHA,[x_]:n.ONE_MINUS_SRC_COLOR,[sc]:n.ONE_MINUS_SRC_ALPHA,[b_]:n.ONE_MINUS_DST_COLOR,[S_]:n.ONE_MINUS_DST_ALPHA,[E_]:n.CONSTANT_COLOR,[T_]:n.ONE_MINUS_CONSTANT_COLOR,[A_]:n.CONSTANT_ALPHA,[C_]:n.ONE_MINUS_CONSTANT_ALPHA};function D(Y,At,wt,Ot,Mt,yt,Ct,Jt,Me,me){if(Y===Pi){v===!0&&(ot(n.BLEND),v=!1);return}if(v===!1&&(z(n.BLEND),v=!0),Y!==h_){if(Y!==p||me!==w){if((g!==ms||_!==ms)&&(n.blendEquation(n.FUNC_ADD),g=ms,_=ms),me)switch(Y){case sr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case nc:n.blendFunc(n.ONE,n.ONE);break;case Ch:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Rh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ae("WebGLState: Invalid blending: ",Y);break}else switch(Y){case sr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case nc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Ch:ae("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Rh:ae("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ae("WebGLState: Invalid blending: ",Y);break}x=null,S=null,M=null,b=null,C.set(0,0,0),F=0,p=Y,w=me}return}Mt=Mt||At,yt=yt||wt,Ct=Ct||Ot,(At!==g||Mt!==_)&&(n.blendEquationSeparate(I[At],I[Mt]),g=At,_=Mt),(wt!==x||Ot!==S||yt!==M||Ct!==b)&&(n.blendFuncSeparate(N[wt],N[Ot],N[yt],N[Ct]),x=wt,S=Ot,M=yt,b=Ct),(Jt.equals(C)===!1||Me!==F)&&(n.blendColor(Jt.r,Jt.g,Jt.b,Me),C.copy(Jt),F=Me),p=Y,w=!1}function k(Y,At){Y.side===Dn?ot(n.CULL_FACE):z(n.CULL_FACE);let wt=Y.side===un;At&&(wt=!wt),H(wt),Y.blending===sr&&Y.transparent===!1?D(Pi):D(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),o.setFunc(Y.depthFunc),o.setTest(Y.depthTest),o.setMask(Y.depthWrite),r.setMask(Y.colorWrite);const Ot=Y.stencilWrite;a.setTest(Ot),Ot&&(a.setMask(Y.stencilWriteMask),a.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),a.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),nt(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?z(n.SAMPLE_ALPHA_TO_COVERAGE):ot(n.SAMPLE_ALPHA_TO_COVERAGE)}function H(Y){T!==Y&&(Y?n.frontFace(n.CW):n.frontFace(n.CCW),T=Y)}function $(Y){Y!==l_?(z(n.CULL_FACE),Y!==L&&(Y===Ah?n.cullFace(n.BACK):Y===c_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ot(n.CULL_FACE),L=Y}function R(Y){Y!==q&&(U&&n.lineWidth(Y),q=Y)}function nt(Y,At,wt){Y?(z(n.POLYGON_OFFSET_FILL),(O!==At||X!==wt)&&(n.polygonOffset(At,wt),O=At,X=wt)):ot(n.POLYGON_OFFSET_FILL)}function Q(Y){Y?z(n.SCISSOR_TEST):ot(n.SCISSOR_TEST)}function et(Y){Y===void 0&&(Y=n.TEXTURE0+V-1),ft!==Y&&(n.activeTexture(Y),ft=Y)}function st(Y,At,wt){wt===void 0&&(ft===null?wt=n.TEXTURE0+V-1:wt=ft);let Ot=lt[wt];Ot===void 0&&(Ot={type:void 0,texture:void 0},lt[wt]=Ot),(Ot.type!==Y||Ot.texture!==At)&&(ft!==wt&&(n.activeTexture(wt),ft=wt),n.bindTexture(Y,At||G[Y]),Ot.type=Y,Ot.texture=At)}function A(){const Y=lt[ft];Y!==void 0&&Y.type!==void 0&&(n.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function y(){try{n.compressedTexImage2D(...arguments)}catch(Y){ae("WebGLState:",Y)}}function B(){try{n.compressedTexImage3D(...arguments)}catch(Y){ae("WebGLState:",Y)}}function Z(){try{n.texSubImage2D(...arguments)}catch(Y){ae("WebGLState:",Y)}}function ht(){try{n.texSubImage3D(...arguments)}catch(Y){ae("WebGLState:",Y)}}function tt(){try{n.compressedTexSubImage2D(...arguments)}catch(Y){ae("WebGLState:",Y)}}function xt(){try{n.compressedTexSubImage3D(...arguments)}catch(Y){ae("WebGLState:",Y)}}function gt(){try{n.texStorage2D(...arguments)}catch(Y){ae("WebGLState:",Y)}}function Et(){try{n.texStorage3D(...arguments)}catch(Y){ae("WebGLState:",Y)}}function Nt(){try{n.texImage2D(...arguments)}catch(Y){ae("WebGLState:",Y)}}function mt(){try{n.texImage3D(...arguments)}catch(Y){ae("WebGLState:",Y)}}function St(Y){Ut.equals(Y)===!1&&(n.scissor(Y.x,Y.y,Y.z,Y.w),Ut.copy(Y))}function Tt(Y){zt.equals(Y)===!1&&(n.viewport(Y.x,Y.y,Y.z,Y.w),zt.copy(Y))}function Rt(Y,At){let wt=c.get(At);wt===void 0&&(wt=new WeakMap,c.set(At,wt));let Ot=wt.get(Y);Ot===void 0&&(Ot=n.getUniformBlockIndex(At,Y.name),wt.set(Y,Ot))}function bt(Y,At){const Ot=c.get(At).get(Y);l.get(At)!==Ot&&(n.uniformBlockBinding(At,Ot,Y.__bindingPointIndex),l.set(At,Ot))}function Gt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ft=null,lt={},f={},h=new WeakMap,d=[],m=null,v=!1,p=null,g=null,x=null,S=null,_=null,M=null,b=null,C=new le(0,0,0),F=0,w=!1,T=null,L=null,q=null,O=null,X=null,Ut.set(0,0,n.canvas.width,n.canvas.height),zt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:z,disable:ot,bindFramebuffer:ct,drawBuffers:rt,useProgram:pt,setBlending:D,setMaterial:k,setFlipSided:H,setCullFace:$,setLineWidth:R,setPolygonOffset:nt,setScissorTest:Q,activeTexture:et,bindTexture:st,unbindTexture:A,compressedTexImage2D:y,compressedTexImage3D:B,texImage2D:Nt,texImage3D:mt,updateUBOMapping:Rt,uniformBlockBinding:bt,texStorage2D:gt,texStorage3D:Et,texSubImage2D:Z,texSubImage3D:ht,compressedTexSubImage2D:tt,compressedTexSubImage3D:xt,scissor:St,viewport:Tt,reset:Gt}}function Hw(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Lt,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,y){return d?new OffscreenCanvas(A,y):ba("canvas")}function v(A,y,B){let Z=1;const ht=st(A);if((ht.width>B||ht.height>B)&&(Z=B/Math.max(ht.width,ht.height)),Z<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const tt=Math.floor(Z*ht.width),xt=Math.floor(Z*ht.height);f===void 0&&(f=m(tt,xt));const gt=y?m(tt,xt):f;return gt.width=tt,gt.height=xt,gt.getContext("2d").drawImage(A,0,0,tt,xt),Zt("WebGLRenderer: Texture has been resized from ("+ht.width+"x"+ht.height+") to ("+tt+"x"+xt+")."),gt}else return"data"in A&&Zt("WebGLRenderer: Image in DataTexture is too big ("+ht.width+"x"+ht.height+")."),A;return A}function p(A){return A.generateMipmaps}function g(A){n.generateMipmap(A)}function x(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(A,y,B,Z,ht=!1){if(A!==null){if(n[A]!==void 0)return n[A];Zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let tt=y;if(y===n.RED&&(B===n.FLOAT&&(tt=n.R32F),B===n.HALF_FLOAT&&(tt=n.R16F),B===n.UNSIGNED_BYTE&&(tt=n.R8)),y===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(tt=n.R8UI),B===n.UNSIGNED_SHORT&&(tt=n.R16UI),B===n.UNSIGNED_INT&&(tt=n.R32UI),B===n.BYTE&&(tt=n.R8I),B===n.SHORT&&(tt=n.R16I),B===n.INT&&(tt=n.R32I)),y===n.RG&&(B===n.FLOAT&&(tt=n.RG32F),B===n.HALF_FLOAT&&(tt=n.RG16F),B===n.UNSIGNED_BYTE&&(tt=n.RG8)),y===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(tt=n.RG8UI),B===n.UNSIGNED_SHORT&&(tt=n.RG16UI),B===n.UNSIGNED_INT&&(tt=n.RG32UI),B===n.BYTE&&(tt=n.RG8I),B===n.SHORT&&(tt=n.RG16I),B===n.INT&&(tt=n.RG32I)),y===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(tt=n.RGB8UI),B===n.UNSIGNED_SHORT&&(tt=n.RGB16UI),B===n.UNSIGNED_INT&&(tt=n.RGB32UI),B===n.BYTE&&(tt=n.RGB8I),B===n.SHORT&&(tt=n.RGB16I),B===n.INT&&(tt=n.RGB32I)),y===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(tt=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(tt=n.RGBA16UI),B===n.UNSIGNED_INT&&(tt=n.RGBA32UI),B===n.BYTE&&(tt=n.RGBA8I),B===n.SHORT&&(tt=n.RGBA16I),B===n.INT&&(tt=n.RGBA32I)),y===n.RGB&&(B===n.UNSIGNED_INT_5_9_9_9_REV&&(tt=n.RGB9_E5),B===n.UNSIGNED_INT_10F_11F_11F_REV&&(tt=n.R11F_G11F_B10F)),y===n.RGBA){const xt=ht?Sa:ue.getTransfer(Z);B===n.FLOAT&&(tt=n.RGBA32F),B===n.HALF_FLOAT&&(tt=n.RGBA16F),B===n.UNSIGNED_BYTE&&(tt=xt===ve?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(tt=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(tt=n.RGB5_A1)}return(tt===n.R16F||tt===n.R32F||tt===n.RG16F||tt===n.RG32F||tt===n.RGBA16F||tt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function _(A,y){let B;return A?y===null||y===oi||y===so?B=n.DEPTH24_STENCIL8:y===Zn?B=n.DEPTH32F_STENCIL8:y===io&&(B=n.DEPTH24_STENCIL8,Zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===oi||y===so?B=n.DEPTH_COMPONENT24:y===Zn?B=n.DEPTH_COMPONENT32F:y===io&&(B=n.DEPTH_COMPONENT16),B}function M(A,y){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ge&&A.minFilter!==Xe?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function b(A){const y=A.target;y.removeEventListener("dispose",b),F(y),y.isVideoTexture&&u.delete(y)}function C(A){const y=A.target;y.removeEventListener("dispose",C),T(y)}function F(A){const y=i.get(A);if(y.__webglInit===void 0)return;const B=A.source,Z=h.get(B);if(Z){const ht=Z[y.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&w(A),Object.keys(Z).length===0&&h.delete(B)}i.remove(A)}function w(A){const y=i.get(A);n.deleteTexture(y.__webglTexture);const B=A.source,Z=h.get(B);delete Z[y.__cacheKey],o.memory.textures--}function T(A){const y=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(y.__webglFramebuffer[Z]))for(let ht=0;ht<y.__webglFramebuffer[Z].length;ht++)n.deleteFramebuffer(y.__webglFramebuffer[Z][ht]);else n.deleteFramebuffer(y.__webglFramebuffer[Z]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[Z])}else{if(Array.isArray(y.__webglFramebuffer))for(let Z=0;Z<y.__webglFramebuffer.length;Z++)n.deleteFramebuffer(y.__webglFramebuffer[Z]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Z=0;Z<y.__webglColorRenderbuffer.length;Z++)y.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[Z]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const B=A.textures;for(let Z=0,ht=B.length;Z<ht;Z++){const tt=i.get(B[Z]);tt.__webglTexture&&(n.deleteTexture(tt.__webglTexture),o.memory.textures--),i.remove(B[Z])}i.remove(A)}let L=0;function q(){L=0}function O(){const A=L;return A>=s.maxTextures&&Zt("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),L+=1,A}function X(A){const y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}function V(A,y){const B=i.get(A);if(A.isVideoTexture&&Q(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&B.__version!==A.version){const Z=A.image;if(Z===null)Zt("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)Zt("WebGLRenderer: Texture marked for update but image is incomplete");else{G(B,A,y);return}}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+y)}function U(A,y){const B=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){G(B,A,y);return}else A.isExternalTexture&&(B.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+y)}function W(A,y){const B=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){G(B,A,y);return}e.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+y)}function j(A,y){const B=i.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&B.__version!==A.version){z(B,A,y);return}e.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+y)}const ft={[pc]:n.REPEAT,[Ci]:n.CLAMP_TO_EDGE,[mc]:n.MIRRORED_REPEAT},lt={[Ge]:n.NEAREST,[I_]:n.NEAREST_MIPMAP_NEAREST,[wo]:n.NEAREST_MIPMAP_LINEAR,[Xe]:n.LINEAR,[el]:n.LINEAR_MIPMAP_NEAREST,[_s]:n.LINEAR_MIPMAP_LINEAR},dt={[N_]:n.NEVER,[z_]:n.ALWAYS,[F_]:n.LESS,[Tu]:n.LEQUAL,[U_]:n.EQUAL,[Au]:n.GEQUAL,[O_]:n.GREATER,[B_]:n.NOTEQUAL};function _t(A,y){if(y.type===Zn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Xe||y.magFilter===el||y.magFilter===wo||y.magFilter===_s||y.minFilter===Xe||y.minFilter===el||y.minFilter===wo||y.minFilter===_s)&&Zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,ft[y.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,ft[y.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,ft[y.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,lt[y.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,lt[y.minFilter]),y.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,dt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Ge||y.minFilter!==wo&&y.minFilter!==_s||y.type===Zn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");n.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function Ut(A,y){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",b));const Z=y.source;let ht=h.get(Z);ht===void 0&&(ht={},h.set(Z,ht));const tt=X(y);if(tt!==A.__cacheKey){ht[tt]===void 0&&(ht[tt]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,B=!0),ht[tt].usedTimes++;const xt=ht[A.__cacheKey];xt!==void 0&&(ht[A.__cacheKey].usedTimes--,xt.usedTimes===0&&w(y)),A.__cacheKey=tt,A.__webglTexture=ht[tt].texture}return B}function zt(A,y,B){return Math.floor(Math.floor(A/B)/y)}function $t(A,y,B,Z){const tt=A.updateRanges;if(tt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,B,Z,y.data);else{tt.sort((mt,St)=>mt.start-St.start);let xt=0;for(let mt=1;mt<tt.length;mt++){const St=tt[xt],Tt=tt[mt],Rt=St.start+St.count,bt=zt(Tt.start,y.width,4),Gt=zt(St.start,y.width,4);Tt.start<=Rt+1&&bt===Gt&&zt(Tt.start+Tt.count-1,y.width,4)===bt?St.count=Math.max(St.count,Tt.start+Tt.count-St.start):(++xt,tt[xt]=Tt)}tt.length=xt+1;const gt=n.getParameter(n.UNPACK_ROW_LENGTH),Et=n.getParameter(n.UNPACK_SKIP_PIXELS),Nt=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let mt=0,St=tt.length;mt<St;mt++){const Tt=tt[mt],Rt=Math.floor(Tt.start/4),bt=Math.ceil(Tt.count/4),Gt=Rt%y.width,Y=Math.floor(Rt/y.width),At=bt,wt=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Gt),n.pixelStorei(n.UNPACK_SKIP_ROWS,Y),e.texSubImage2D(n.TEXTURE_2D,0,Gt,Y,At,wt,B,Z,y.data)}A.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,gt),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Et),n.pixelStorei(n.UNPACK_SKIP_ROWS,Nt)}}function G(A,y,B){let Z=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Z=n.TEXTURE_3D);const ht=Ut(A,y),tt=y.source;e.bindTexture(Z,A.__webglTexture,n.TEXTURE0+B);const xt=i.get(tt);if(tt.version!==xt.__version||ht===!0){e.activeTexture(n.TEXTURE0+B);const gt=ue.getPrimaries(ue.workingColorSpace),Et=y.colorSpace===Ki?null:ue.getPrimaries(y.colorSpace),Nt=y.colorSpace===Ki||gt===Et?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt);let mt=v(y.image,!1,s.maxTextureSize);mt=et(y,mt);const St=r.convert(y.format,y.colorSpace),Tt=r.convert(y.type);let Rt=S(y.internalFormat,St,Tt,y.colorSpace,y.isVideoTexture);_t(Z,y);let bt;const Gt=y.mipmaps,Y=y.isVideoTexture!==!0,At=xt.__version===void 0||ht===!0,wt=tt.dataReady,Ot=M(y,mt);if(y.isDepthTexture)Rt=_(y.format===xs,y.type),At&&(Y?e.texStorage2D(n.TEXTURE_2D,1,Rt,mt.width,mt.height):e.texImage2D(n.TEXTURE_2D,0,Rt,mt.width,mt.height,0,St,Tt,null));else if(y.isDataTexture)if(Gt.length>0){Y&&At&&e.texStorage2D(n.TEXTURE_2D,Ot,Rt,Gt[0].width,Gt[0].height);for(let Mt=0,yt=Gt.length;Mt<yt;Mt++)bt=Gt[Mt],Y?wt&&e.texSubImage2D(n.TEXTURE_2D,Mt,0,0,bt.width,bt.height,St,Tt,bt.data):e.texImage2D(n.TEXTURE_2D,Mt,Rt,bt.width,bt.height,0,St,Tt,bt.data);y.generateMipmaps=!1}else Y?(At&&e.texStorage2D(n.TEXTURE_2D,Ot,Rt,mt.width,mt.height),wt&&$t(y,mt,St,Tt)):e.texImage2D(n.TEXTURE_2D,0,Rt,mt.width,mt.height,0,St,Tt,mt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Y&&At&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Ot,Rt,Gt[0].width,Gt[0].height,mt.depth);for(let Mt=0,yt=Gt.length;Mt<yt;Mt++)if(bt=Gt[Mt],y.format!==Fn)if(St!==null)if(Y){if(wt)if(y.layerUpdates.size>0){const Ct=cf(bt.width,bt.height,y.format,y.type);for(const Jt of y.layerUpdates){const Me=bt.data.subarray(Jt*Ct/bt.data.BYTES_PER_ELEMENT,(Jt+1)*Ct/bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Mt,0,0,Jt,bt.width,bt.height,1,St,Me)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Mt,0,0,0,bt.width,bt.height,mt.depth,St,bt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Mt,Rt,bt.width,bt.height,mt.depth,0,bt.data,0,0);else Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Y?wt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,Mt,0,0,0,bt.width,bt.height,mt.depth,St,Tt,bt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,Mt,Rt,bt.width,bt.height,mt.depth,0,St,Tt,bt.data)}else{Y&&At&&e.texStorage2D(n.TEXTURE_2D,Ot,Rt,Gt[0].width,Gt[0].height);for(let Mt=0,yt=Gt.length;Mt<yt;Mt++)bt=Gt[Mt],y.format!==Fn?St!==null?Y?wt&&e.compressedTexSubImage2D(n.TEXTURE_2D,Mt,0,0,bt.width,bt.height,St,bt.data):e.compressedTexImage2D(n.TEXTURE_2D,Mt,Rt,bt.width,bt.height,0,bt.data):Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Y?wt&&e.texSubImage2D(n.TEXTURE_2D,Mt,0,0,bt.width,bt.height,St,Tt,bt.data):e.texImage2D(n.TEXTURE_2D,Mt,Rt,bt.width,bt.height,0,St,Tt,bt.data)}else if(y.isDataArrayTexture)if(Y){if(At&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Ot,Rt,mt.width,mt.height,mt.depth),wt)if(y.layerUpdates.size>0){const Mt=cf(mt.width,mt.height,y.format,y.type);for(const yt of y.layerUpdates){const Ct=mt.data.subarray(yt*Mt/mt.data.BYTES_PER_ELEMENT,(yt+1)*Mt/mt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,yt,mt.width,mt.height,1,St,Tt,Ct)}y.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,mt.width,mt.height,mt.depth,St,Tt,mt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Rt,mt.width,mt.height,mt.depth,0,St,Tt,mt.data);else if(y.isData3DTexture)Y?(At&&e.texStorage3D(n.TEXTURE_3D,Ot,Rt,mt.width,mt.height,mt.depth),wt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,mt.width,mt.height,mt.depth,St,Tt,mt.data)):e.texImage3D(n.TEXTURE_3D,0,Rt,mt.width,mt.height,mt.depth,0,St,Tt,mt.data);else if(y.isFramebufferTexture){if(At)if(Y)e.texStorage2D(n.TEXTURE_2D,Ot,Rt,mt.width,mt.height);else{let Mt=mt.width,yt=mt.height;for(let Ct=0;Ct<Ot;Ct++)e.texImage2D(n.TEXTURE_2D,Ct,Rt,Mt,yt,0,St,Tt,null),Mt>>=1,yt>>=1}}else if(Gt.length>0){if(Y&&At){const Mt=st(Gt[0]);e.texStorage2D(n.TEXTURE_2D,Ot,Rt,Mt.width,Mt.height)}for(let Mt=0,yt=Gt.length;Mt<yt;Mt++)bt=Gt[Mt],Y?wt&&e.texSubImage2D(n.TEXTURE_2D,Mt,0,0,St,Tt,bt):e.texImage2D(n.TEXTURE_2D,Mt,Rt,St,Tt,bt);y.generateMipmaps=!1}else if(Y){if(At){const Mt=st(mt);e.texStorage2D(n.TEXTURE_2D,Ot,Rt,Mt.width,Mt.height)}wt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,St,Tt,mt)}else e.texImage2D(n.TEXTURE_2D,0,Rt,St,Tt,mt);p(y)&&g(Z),xt.__version=tt.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function z(A,y,B){if(y.image.length!==6)return;const Z=Ut(A,y),ht=y.source;e.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+B);const tt=i.get(ht);if(ht.version!==tt.__version||Z===!0){e.activeTexture(n.TEXTURE0+B);const xt=ue.getPrimaries(ue.workingColorSpace),gt=y.colorSpace===Ki?null:ue.getPrimaries(y.colorSpace),Et=y.colorSpace===Ki||xt===gt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);const Nt=y.isCompressedTexture||y.image[0].isCompressedTexture,mt=y.image[0]&&y.image[0].isDataTexture,St=[];for(let yt=0;yt<6;yt++)!Nt&&!mt?St[yt]=v(y.image[yt],!0,s.maxCubemapSize):St[yt]=mt?y.image[yt].image:y.image[yt],St[yt]=et(y,St[yt]);const Tt=St[0],Rt=r.convert(y.format,y.colorSpace),bt=r.convert(y.type),Gt=S(y.internalFormat,Rt,bt,y.colorSpace),Y=y.isVideoTexture!==!0,At=tt.__version===void 0||Z===!0,wt=ht.dataReady;let Ot=M(y,Tt);_t(n.TEXTURE_CUBE_MAP,y);let Mt;if(Nt){Y&&At&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Ot,Gt,Tt.width,Tt.height);for(let yt=0;yt<6;yt++){Mt=St[yt].mipmaps;for(let Ct=0;Ct<Mt.length;Ct++){const Jt=Mt[Ct];y.format!==Fn?Rt!==null?Y?wt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Ct,0,0,Jt.width,Jt.height,Rt,Jt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Ct,Gt,Jt.width,Jt.height,0,Jt.data):Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?wt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Ct,0,0,Jt.width,Jt.height,Rt,bt,Jt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Ct,Gt,Jt.width,Jt.height,0,Rt,bt,Jt.data)}}}else{if(Mt=y.mipmaps,Y&&At){Mt.length>0&&Ot++;const yt=st(St[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Ot,Gt,yt.width,yt.height)}for(let yt=0;yt<6;yt++)if(mt){Y?wt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,St[yt].width,St[yt].height,Rt,bt,St[yt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,Gt,St[yt].width,St[yt].height,0,Rt,bt,St[yt].data);for(let Ct=0;Ct<Mt.length;Ct++){const Me=Mt[Ct].image[yt].image;Y?wt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Ct+1,0,0,Me.width,Me.height,Rt,bt,Me.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Ct+1,Gt,Me.width,Me.height,0,Rt,bt,Me.data)}}else{Y?wt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,Rt,bt,St[yt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,Gt,Rt,bt,St[yt]);for(let Ct=0;Ct<Mt.length;Ct++){const Jt=Mt[Ct];Y?wt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Ct+1,0,0,Rt,bt,Jt.image[yt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Ct+1,Gt,Rt,bt,Jt.image[yt])}}}p(y)&&g(n.TEXTURE_CUBE_MAP),tt.__version=ht.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function ot(A,y,B,Z,ht,tt){const xt=r.convert(B.format,B.colorSpace),gt=r.convert(B.type),Et=S(B.internalFormat,xt,gt,B.colorSpace),Nt=i.get(y),mt=i.get(B);if(mt.__renderTarget=y,!Nt.__hasExternalTextures){const St=Math.max(1,y.width>>tt),Tt=Math.max(1,y.height>>tt);ht===n.TEXTURE_3D||ht===n.TEXTURE_2D_ARRAY?e.texImage3D(ht,tt,Et,St,Tt,y.depth,0,xt,gt,null):e.texImage2D(ht,tt,Et,St,Tt,0,xt,gt,null)}e.bindFramebuffer(n.FRAMEBUFFER,A),nt(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,ht,mt.__webglTexture,0,R(y)):(ht===n.TEXTURE_2D||ht>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,ht,mt.__webglTexture,tt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function ct(A,y,B){if(n.bindRenderbuffer(n.RENDERBUFFER,A),y.depthBuffer){const Z=y.depthTexture,ht=Z&&Z.isDepthTexture?Z.type:null,tt=_(y.stencilBuffer,ht),xt=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;nt(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,R(y),tt,y.width,y.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,R(y),tt,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,tt,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,xt,n.RENDERBUFFER,A)}else{const Z=y.textures;for(let ht=0;ht<Z.length;ht++){const tt=Z[ht],xt=r.convert(tt.format,tt.colorSpace),gt=r.convert(tt.type),Et=S(tt.internalFormat,xt,gt,tt.colorSpace);nt(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,R(y),Et,y.width,y.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,R(y),Et,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,Et,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function rt(A,y,B){const Z=y.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ht=i.get(y.depthTexture);if(ht.__renderTarget=y,(!ht.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Z){if(ht.__webglInit===void 0&&(ht.__webglInit=!0,y.depthTexture.addEventListener("dispose",b)),ht.__webglTexture===void 0){ht.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,ht.__webglTexture),_t(n.TEXTURE_CUBE_MAP,y.depthTexture);const Nt=r.convert(y.depthTexture.format),mt=r.convert(y.depthTexture.type);let St;y.depthTexture.format===Ui?St=n.DEPTH_COMPONENT24:y.depthTexture.format===xs&&(St=n.DEPTH24_STENCIL8);for(let Tt=0;Tt<6;Tt++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,St,y.width,y.height,0,Nt,mt,null)}}else V(y.depthTexture,0);const tt=ht.__webglTexture,xt=R(y),gt=Z?n.TEXTURE_CUBE_MAP_POSITIVE_X+B:n.TEXTURE_2D,Et=y.depthTexture.format===xs?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(y.depthTexture.format===Ui)nt(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Et,gt,tt,0,xt):n.framebufferTexture2D(n.FRAMEBUFFER,Et,gt,tt,0);else if(y.depthTexture.format===xs)nt(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Et,gt,tt,0,xt):n.framebufferTexture2D(n.FRAMEBUFFER,Et,gt,tt,0);else throw new Error("Unknown depthTexture format")}function pt(A){const y=i.get(A),B=A.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==A.depthTexture){const Z=A.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Z){const ht=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Z.removeEventListener("dispose",ht)};Z.addEventListener("dispose",ht),y.__depthDisposeCallback=ht}y.__boundDepthTexture=Z}if(A.depthTexture&&!y.__autoAllocateDepthBuffer)if(B)for(let Z=0;Z<6;Z++)rt(y.__webglFramebuffer[Z],A,Z);else{const Z=A.texture.mipmaps;Z&&Z.length>0?rt(y.__webglFramebuffer[0],A,0):rt(y.__webglFramebuffer,A,0)}else if(B){y.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[Z]),y.__webglDepthbuffer[Z]===void 0)y.__webglDepthbuffer[Z]=n.createRenderbuffer(),ct(y.__webglDepthbuffer[Z],A,!1);else{const ht=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,tt=y.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,tt),n.framebufferRenderbuffer(n.FRAMEBUFFER,ht,n.RENDERBUFFER,tt)}}else{const Z=A.texture.mipmaps;if(Z&&Z.length>0?e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),ct(y.__webglDepthbuffer,A,!1);else{const ht=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,tt=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,tt),n.framebufferRenderbuffer(n.FRAMEBUFFER,ht,n.RENDERBUFFER,tt)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function I(A,y,B){const Z=i.get(A);y!==void 0&&ot(Z.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&pt(A)}function N(A){const y=A.texture,B=i.get(A),Z=i.get(y);A.addEventListener("dispose",C);const ht=A.textures,tt=A.isWebGLCubeRenderTarget===!0,xt=ht.length>1;if(xt||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=y.version,o.memory.textures++),tt){B.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer[gt]=[];for(let Et=0;Et<y.mipmaps.length;Et++)B.__webglFramebuffer[gt][Et]=n.createFramebuffer()}else B.__webglFramebuffer[gt]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer=[];for(let gt=0;gt<y.mipmaps.length;gt++)B.__webglFramebuffer[gt]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(xt)for(let gt=0,Et=ht.length;gt<Et;gt++){const Nt=i.get(ht[gt]);Nt.__webglTexture===void 0&&(Nt.__webglTexture=n.createTexture(),o.memory.textures++)}if(A.samples>0&&nt(A)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let gt=0;gt<ht.length;gt++){const Et=ht[gt];B.__webglColorRenderbuffer[gt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[gt]);const Nt=r.convert(Et.format,Et.colorSpace),mt=r.convert(Et.type),St=S(Et.internalFormat,Nt,mt,Et.colorSpace,A.isXRRenderTarget===!0),Tt=R(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Tt,St,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+gt,n.RENDERBUFFER,B.__webglColorRenderbuffer[gt])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),ct(B.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(tt){e.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),_t(n.TEXTURE_CUBE_MAP,y);for(let gt=0;gt<6;gt++)if(y.mipmaps&&y.mipmaps.length>0)for(let Et=0;Et<y.mipmaps.length;Et++)ot(B.__webglFramebuffer[gt][Et],A,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Et);else ot(B.__webglFramebuffer[gt],A,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);p(y)&&g(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let gt=0,Et=ht.length;gt<Et;gt++){const Nt=ht[gt],mt=i.get(Nt);let St=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(St=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(St,mt.__webglTexture),_t(St,Nt),ot(B.__webglFramebuffer,A,Nt,n.COLOR_ATTACHMENT0+gt,St,0),p(Nt)&&g(St)}e.unbindTexture()}else{let gt=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(gt=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(gt,Z.__webglTexture),_t(gt,y),y.mipmaps&&y.mipmaps.length>0)for(let Et=0;Et<y.mipmaps.length;Et++)ot(B.__webglFramebuffer[Et],A,y,n.COLOR_ATTACHMENT0,gt,Et);else ot(B.__webglFramebuffer,A,y,n.COLOR_ATTACHMENT0,gt,0);p(y)&&g(gt),e.unbindTexture()}A.depthBuffer&&pt(A)}function D(A){const y=A.textures;for(let B=0,Z=y.length;B<Z;B++){const ht=y[B];if(p(ht)){const tt=x(A),xt=i.get(ht).__webglTexture;e.bindTexture(tt,xt),g(tt),e.unbindTexture()}}}const k=[],H=[];function $(A){if(A.samples>0){if(nt(A)===!1){const y=A.textures,B=A.width,Z=A.height;let ht=n.COLOR_BUFFER_BIT;const tt=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xt=i.get(A),gt=y.length>1;if(gt)for(let Nt=0;Nt<y.length;Nt++)e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Nt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Nt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer);const Et=A.texture.mipmaps;Et&&Et.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,xt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let Nt=0;Nt<y.length;Nt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ht|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ht|=n.STENCIL_BUFFER_BIT)),gt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xt.__webglColorRenderbuffer[Nt]);const mt=i.get(y[Nt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,mt,0)}n.blitFramebuffer(0,0,B,Z,0,0,B,Z,ht,n.NEAREST),l===!0&&(k.length=0,H.length=0,k.push(n.COLOR_ATTACHMENT0+Nt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(k.push(tt),H.push(tt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,H)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,k))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),gt)for(let Nt=0;Nt<y.length;Nt++){e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Nt,n.RENDERBUFFER,xt.__webglColorRenderbuffer[Nt]);const mt=i.get(y[Nt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Nt,n.TEXTURE_2D,mt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const y=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function R(A){return Math.min(s.maxSamples,A.samples)}function nt(A){const y=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Q(A){const y=o.render.frame;u.get(A)!==y&&(u.set(A,y),A.update())}function et(A,y){const B=A.colorSpace,Z=A.format,ht=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==hr&&B!==Ki&&(ue.getTransfer(B)===ve?(Z!==Fn||ht!==gn)&&Zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ae("WebGLTextures: Unsupported texture color space:",B)),y}function st(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=q,this.setTexture2D=V,this.setTexture2DArray=U,this.setTexture3D=W,this.setTextureCube=j,this.rebindTextures=I,this.setupRenderTarget=N,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=$,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=ot,this.useMultisampledRTT=nt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Ww(n,t){function e(i,s=Ki){let r;const o=ue.getTransfer(s);if(i===gn)return n.UNSIGNED_BYTE;if(i===Su)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Mu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===_p)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===xp)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===gp)return n.BYTE;if(i===vp)return n.SHORT;if(i===io)return n.UNSIGNED_SHORT;if(i===yu)return n.INT;if(i===oi)return n.UNSIGNED_INT;if(i===Zn)return n.FLOAT;if(i===Fi)return n.HALF_FLOAT;if(i===yp)return n.ALPHA;if(i===Sp)return n.RGB;if(i===Fn)return n.RGBA;if(i===Ui)return n.DEPTH_COMPONENT;if(i===xs)return n.DEPTH_STENCIL;if(i===Mp)return n.RED;if(i===bu)return n.RED_INTEGER;if(i===ur)return n.RG;if(i===wu)return n.RG_INTEGER;if(i===Eu)return n.RGBA_INTEGER;if(i===oa||i===aa||i===la||i===ca)if(o===ve)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===oa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===la)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===oa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===aa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===la)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ca)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===gc||i===vc||i===_c||i===xc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===gc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===vc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===_c)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===xc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===yc||i===Sc||i===Mc||i===bc||i===wc||i===Ec||i===Tc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===yc||i===Sc)return o===ve?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Mc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===bc)return r.COMPRESSED_R11_EAC;if(i===wc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Ec)return r.COMPRESSED_RG11_EAC;if(i===Tc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ac||i===Cc||i===Rc||i===Pc||i===Ic||i===Lc||i===Dc||i===Nc||i===Fc||i===Uc||i===Oc||i===Bc||i===zc||i===Vc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ac)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Cc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Rc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Pc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ic)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Lc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Dc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Nc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Fc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Uc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Oc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Bc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===zc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Vc)return o===ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===kc||i===Gc||i===Hc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===kc)return o===ve?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Gc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Hc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Wc||i===qc||i===Xc||i===$c)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Wc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===qc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Xc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===$c)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===so?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const qw=`
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

}`;class $w{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new Np(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new li({vertexShader:qw,fragmentShader:Xw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new oe(new tn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Yw extends vr{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,m=null;const v=typeof XRWebGLBinding<"u",p=new $w,g={},x=e.getContextAttributes();let S=null,_=null;const M=[],b=[],C=new Lt;let F=null;const w=new Ln;w.viewport=new De;const T=new Ln;T.viewport=new De;const L=[w,T],q=new sy;let O=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let z=M[G];return z===void 0&&(z=new wl,M[G]=z),z.getTargetRaySpace()},this.getControllerGrip=function(G){let z=M[G];return z===void 0&&(z=new wl,M[G]=z),z.getGripSpace()},this.getHand=function(G){let z=M[G];return z===void 0&&(z=new wl,M[G]=z),z.getHandSpace()};function V(G){const z=b.indexOf(G.inputSource);if(z===-1)return;const ot=M[z];ot!==void 0&&(ot.update(G.inputSource,G.frame,c||o),ot.dispatchEvent({type:G.type,data:G.inputSource}))}function U(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",W);for(let G=0;G<M.length;G++){const z=b[G];z!==null&&(b[G]=null,M[G].disconnect(z))}O=null,X=null,p.reset();for(const G in g)delete g[G];t.setRenderTarget(S),d=null,h=null,f=null,s=null,_=null,$t.stop(),i.isPresenting=!1,t.setPixelRatio(F),t.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,i.isPresenting===!0&&Zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,i.isPresenting===!0&&Zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(S=t.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",U),s.addEventListener("inputsourceschange",W),x.xrCompatible!==!0&&await e.makeXRCompatible(),F=t.getPixelRatio(),t.getSize(C),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ot=null,ct=null,rt=null;x.depth&&(rt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=x.stencil?xs:Ui,ct=x.stencil?so:oi);const pt={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(pt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),_=new ni(h.textureWidth,h.textureHeight,{format:Fn,type:gn,depthTexture:new oo(h.textureWidth,h.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ot={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,ot),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new ni(d.framebufferWidth,d.framebufferHeight,{format:Fn,type:gn,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),$t.setContext(s),$t.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function W(G){for(let z=0;z<G.removed.length;z++){const ot=G.removed[z],ct=b.indexOf(ot);ct>=0&&(b[ct]=null,M[ct].disconnect(ot))}for(let z=0;z<G.added.length;z++){const ot=G.added[z];let ct=b.indexOf(ot);if(ct===-1){for(let pt=0;pt<M.length;pt++)if(pt>=b.length){b.push(ot),ct=pt;break}else if(b[pt]===null){b[pt]=ot,ct=pt;break}if(ct===-1)break}const rt=M[ct];rt&&rt.connect(ot)}}const j=new J,ft=new J;function lt(G,z,ot){j.setFromMatrixPosition(z.matrixWorld),ft.setFromMatrixPosition(ot.matrixWorld);const ct=j.distanceTo(ft),rt=z.projectionMatrix.elements,pt=ot.projectionMatrix.elements,I=rt[14]/(rt[10]-1),N=rt[14]/(rt[10]+1),D=(rt[9]+1)/rt[5],k=(rt[9]-1)/rt[5],H=(rt[8]-1)/rt[0],$=(pt[8]+1)/pt[0],R=I*H,nt=I*$,Q=ct/(-H+$),et=Q*-H;if(z.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(et),G.translateZ(Q),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),rt[10]===-1)G.projectionMatrix.copy(z.projectionMatrix),G.projectionMatrixInverse.copy(z.projectionMatrixInverse);else{const st=I+Q,A=N+Q,y=R-et,B=nt+(ct-et),Z=D*N/A*st,ht=k*N/A*st;G.projectionMatrix.makePerspective(y,B,Z,ht,st,A),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function dt(G,z){z===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(z.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;let z=G.near,ot=G.far;p.texture!==null&&(p.depthNear>0&&(z=p.depthNear),p.depthFar>0&&(ot=p.depthFar)),q.near=T.near=w.near=z,q.far=T.far=w.far=ot,(O!==q.near||X!==q.far)&&(s.updateRenderState({depthNear:q.near,depthFar:q.far}),O=q.near,X=q.far),q.layers.mask=G.layers.mask|6,w.layers.mask=q.layers.mask&3,T.layers.mask=q.layers.mask&5;const ct=G.parent,rt=q.cameras;dt(q,ct);for(let pt=0;pt<rt.length;pt++)dt(rt[pt],ct);rt.length===2?lt(q,w,T):q.projectionMatrix.copy(w.projectionMatrix),_t(G,q,ct)};function _t(G,z,ot){ot===null?G.matrix.copy(z.matrixWorld):(G.matrix.copy(ot.matrixWorld),G.matrix.invert(),G.matrix.multiply(z.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(z.projectionMatrix),G.projectionMatrixInverse.copy(z.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Yc*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(G){l=G,h!==null&&(h.fixedFoveation=G),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=G)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(q)},this.getCameraTexture=function(G){return g[G]};let Ut=null;function zt(G,z){if(u=z.getViewerPose(c||o),m=z,u!==null){const ot=u.views;d!==null&&(t.setRenderTargetFramebuffer(_,d.framebuffer),t.setRenderTarget(_));let ct=!1;ot.length!==q.cameras.length&&(q.cameras.length=0,ct=!0);for(let N=0;N<ot.length;N++){const D=ot[N];let k=null;if(d!==null)k=d.getViewport(D);else{const $=f.getViewSubImage(h,D);k=$.viewport,N===0&&(t.setRenderTargetTextures(_,$.colorTexture,$.depthStencilTexture),t.setRenderTarget(_))}let H=L[N];H===void 0&&(H=new Ln,H.layers.enable(N),H.viewport=new De,L[N]=H),H.matrix.fromArray(D.transform.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale),H.projectionMatrix.fromArray(D.projectionMatrix),H.projectionMatrixInverse.copy(H.projectionMatrix).invert(),H.viewport.set(k.x,k.y,k.width,k.height),N===0&&(q.matrix.copy(H.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),ct===!0&&q.cameras.push(H)}const rt=s.enabledFeatures;if(rt&&rt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){f=i.getBinding();const N=f.getDepthInformation(ot[0]);N&&N.isValid&&N.texture&&p.init(N,s.renderState)}if(rt&&rt.includes("camera-access")&&v){t.state.unbindTexture(),f=i.getBinding();for(let N=0;N<ot.length;N++){const D=ot[N].camera;if(D){let k=g[D];k||(k=new Np,g[D]=k);const H=f.getCameraImage(D);k.sourceTexture=H}}}}for(let ot=0;ot<M.length;ot++){const ct=b[ot],rt=M[ot];ct!==null&&rt!==void 0&&rt.update(ct,z,c||o)}Ut&&Ut(G,z),z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:z}),m=null}const $t=new qp;$t.setAnimationLoop(zt),this.setAnimationLoop=function(G){Ut=G},this.dispose=function(){}}}const hs=new ai,jw=new Re;function Kw(n,t){function e(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function i(p,g){g.color.getRGB(p.fogColor.value,Pp(n)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function s(p,g,x,S,_){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(p,g):g.isMeshToonMaterial?(r(p,g),f(p,g)):g.isMeshPhongMaterial?(r(p,g),u(p,g)):g.isMeshStandardMaterial?(r(p,g),h(p,g),g.isMeshPhysicalMaterial&&d(p,g,_)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),v(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?l(p,g,x,S):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,e(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===un&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,e(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===un&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,e(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,e(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);const x=t.get(g),S=x.envMap,_=x.envMapRotation;S&&(p.envMap.value=S,hs.copy(_),hs.x*=-1,hs.y*=-1,hs.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(hs.y*=-1,hs.z*=-1),p.envMapRotation.value.setFromMatrix4(jw.makeRotationFromEuler(hs)),p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,x,S){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*x,p.scale.value=S*.5,g.map&&(p.map.value=g.map,e(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function u(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function f(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function h(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function d(p,g,x){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===un&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function v(p,g){const x=t.get(g).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Zw(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,S){const _=S.program;i.uniformBlockBinding(x,_)}function c(x,S){let _=s[x.id];_===void 0&&(m(x),_=u(x),s[x.id]=_,x.addEventListener("dispose",p));const M=S.program;i.updateUBOMapping(x,M);const b=t.render.frame;r[x.id]!==b&&(h(x),r[x.id]=b)}function u(x){const S=f();x.__bindingPointIndex=S;const _=n.createBuffer(),M=x.__size,b=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,M,b),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,_),_}function f(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return ae("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const S=s[x.id],_=x.uniforms,M=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let b=0,C=_.length;b<C;b++){const F=Array.isArray(_[b])?_[b]:[_[b]];for(let w=0,T=F.length;w<T;w++){const L=F[w];if(d(L,b,w,M)===!0){const q=L.__offset,O=Array.isArray(L.value)?L.value:[L.value];let X=0;for(let V=0;V<O.length;V++){const U=O[V],W=v(U);typeof U=="number"||typeof U=="boolean"?(L.__data[0]=U,n.bufferSubData(n.UNIFORM_BUFFER,q+X,L.__data)):U.isMatrix3?(L.__data[0]=U.elements[0],L.__data[1]=U.elements[1],L.__data[2]=U.elements[2],L.__data[3]=0,L.__data[4]=U.elements[3],L.__data[5]=U.elements[4],L.__data[6]=U.elements[5],L.__data[7]=0,L.__data[8]=U.elements[6],L.__data[9]=U.elements[7],L.__data[10]=U.elements[8],L.__data[11]=0):(U.toArray(L.__data,X),X+=W.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,q,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(x,S,_,M){const b=x.value,C=S+"_"+_;if(M[C]===void 0)return typeof b=="number"||typeof b=="boolean"?M[C]=b:M[C]=b.clone(),!0;{const F=M[C];if(typeof b=="number"||typeof b=="boolean"){if(F!==b)return M[C]=b,!0}else if(F.equals(b)===!1)return F.copy(b),!0}return!1}function m(x){const S=x.uniforms;let _=0;const M=16;for(let C=0,F=S.length;C<F;C++){const w=Array.isArray(S[C])?S[C]:[S[C]];for(let T=0,L=w.length;T<L;T++){const q=w[T],O=Array.isArray(q.value)?q.value:[q.value];for(let X=0,V=O.length;X<V;X++){const U=O[X],W=v(U),j=_%M,ft=j%W.boundary,lt=j+ft;_+=ft,lt!==0&&M-lt<W.storage&&(_+=M-lt),q.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=_,_+=W.storage}}}const b=_%M;return b>0&&(_+=M-b),x.__size=_,x.__cache={},this}function v(x){const S={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(S.boundary=4,S.storage=4):x.isVector2?(S.boundary=8,S.storage=8):x.isVector3||x.isColor?(S.boundary=16,S.storage=12):x.isVector4?(S.boundary=16,S.storage=16):x.isMatrix3?(S.boundary=48,S.storage=48):x.isMatrix4?(S.boundary=64,S.storage=64):x.isTexture?Zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Zt("WebGLRenderer: Unsupported uniform value type.",x),S}function p(x){const S=x.target;S.removeEventListener("dispose",p);const _=o.indexOf(S.__bindingPointIndex);o.splice(_,1),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function g(){for(const x in s)n.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:l,update:c,dispose:g}}const Jw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Hn=null;function Qw(){return Hn===null&&(Hn=new dx(Jw,16,16,ur,Fi),Hn.name="DFG_LUT",Hn.minFilter=Xe,Hn.magFilter=Xe,Hn.wrapS=Ci,Hn.wrapT=Ci,Hn.generateMipmaps=!1,Hn.needsUpdate=!0),Hn}class tE{constructor(t={}){const{canvas:e=V_(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=gn}=t;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const v=d,p=new Set([Eu,wu,bu]),g=new Set([gn,oi,io,so,Su,Mu]),x=new Uint32Array(4),S=new Int32Array(4);let _=null,M=null;const b=[],C=[];let F=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let T=!1;this._outputColorSpace=bn;let L=0,q=0,O=null,X=-1,V=null;const U=new De,W=new De;let j=null;const ft=new le(0);let lt=0,dt=e.width,_t=e.height,Ut=1,zt=null,$t=null;const G=new De(0,0,dt,_t),z=new De(0,0,dt,_t);let ot=!1;const ct=new Lu;let rt=!1,pt=!1;const I=new Re,N=new J,D=new De,k={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let H=!1;function $(){return O===null?Ut:1}let R=i;function nt(P,K){return e.getContext(P,K)}try{const P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${xu}`),e.addEventListener("webglcontextlost",Jt,!1),e.addEventListener("webglcontextrestored",Me,!1),e.addEventListener("webglcontextcreationerror",me,!1),R===null){const K="webgl2";if(R=nt(K,P),R===null)throw nt(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw ae("WebGLRenderer: "+P.message),P}let Q,et,st,A,y,B,Z,ht,tt,xt,gt,Et,Nt,mt,St,Tt,Rt,bt,Gt,Y,At,wt,Ot,Mt;function yt(){Q=new QM(R),Q.init(),wt=new Ww(R,Q),et=new WM(R,Q,t,wt),st=new Gw(R,Q),et.reversedDepthBuffer&&h&&st.buffers.depth.setReversed(!0),A=new nb(R),y=new Aw,B=new Hw(R,Q,st,y,et,wt,A),Z=new XM(w),ht=new JM(w),tt=new oy(R),Ot=new GM(R,tt),xt=new tb(R,tt,A,Ot),gt=new sb(R,xt,tt,A),Gt=new ib(R,et,B),Tt=new qM(y),Et=new Tw(w,Z,ht,Q,et,Ot,Tt),Nt=new Kw(w,y),mt=new Rw,St=new Fw(Q),bt=new kM(w,Z,ht,st,gt,m,l),Rt=new Vw(w,gt,et),Mt=new Zw(R,A,et,st),Y=new HM(R,Q,A),At=new eb(R,Q,A),A.programs=Et.programs,w.capabilities=et,w.extensions=Q,w.properties=y,w.renderLists=mt,w.shadowMap=Rt,w.state=st,w.info=A}yt(),v!==gn&&(F=new ob(v,e.width,e.height,s,r));const Ct=new Yw(w,R);this.xr=Ct,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const P=Q.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=Q.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return Ut},this.setPixelRatio=function(P){P!==void 0&&(Ut=P,this.setSize(dt,_t,!1))},this.getSize=function(P){return P.set(dt,_t)},this.setSize=function(P,K,ut=!0){if(Ct.isPresenting){Zt("WebGLRenderer: Can't change size while VR device is presenting.");return}dt=P,_t=K,e.width=Math.floor(P*Ut),e.height=Math.floor(K*Ut),ut===!0&&(e.style.width=P+"px",e.style.height=K+"px"),F!==null&&F.setSize(e.width,e.height),this.setViewport(0,0,P,K)},this.getDrawingBufferSize=function(P){return P.set(dt*Ut,_t*Ut).floor()},this.setDrawingBufferSize=function(P,K,ut){dt=P,_t=K,Ut=ut,e.width=Math.floor(P*ut),e.height=Math.floor(K*ut),this.setViewport(0,0,P,K)},this.setEffects=function(P){if(v===gn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(P){for(let K=0;K<P.length;K++)if(P[K].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(P||[])},this.getCurrentViewport=function(P){return P.copy(U)},this.getViewport=function(P){return P.copy(G)},this.setViewport=function(P,K,ut,at){P.isVector4?G.set(P.x,P.y,P.z,P.w):G.set(P,K,ut,at),st.viewport(U.copy(G).multiplyScalar(Ut).round())},this.getScissor=function(P){return P.copy(z)},this.setScissor=function(P,K,ut,at){P.isVector4?z.set(P.x,P.y,P.z,P.w):z.set(P,K,ut,at),st.scissor(W.copy(z).multiplyScalar(Ut).round())},this.getScissorTest=function(){return ot},this.setScissorTest=function(P){st.setScissorTest(ot=P)},this.setOpaqueSort=function(P){zt=P},this.setTransparentSort=function(P){$t=P},this.getClearColor=function(P){return P.copy(bt.getClearColor())},this.setClearColor=function(){bt.setClearColor(...arguments)},this.getClearAlpha=function(){return bt.getClearAlpha()},this.setClearAlpha=function(){bt.setClearAlpha(...arguments)},this.clear=function(P=!0,K=!0,ut=!0){let at=0;if(P){let it=!1;if(O!==null){const Pt=O.texture.format;it=p.has(Pt)}if(it){const Pt=O.texture.type,Bt=g.has(Pt),Dt=bt.getClearColor(),kt=bt.getClearAlpha(),Ht=Dt.r,Yt=Dt.g,qt=Dt.b;Bt?(x[0]=Ht,x[1]=Yt,x[2]=qt,x[3]=kt,R.clearBufferuiv(R.COLOR,0,x)):(S[0]=Ht,S[1]=Yt,S[2]=qt,S[3]=kt,R.clearBufferiv(R.COLOR,0,S))}else at|=R.COLOR_BUFFER_BIT}K&&(at|=R.DEPTH_BUFFER_BIT),ut&&(at|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(at)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Jt,!1),e.removeEventListener("webglcontextrestored",Me,!1),e.removeEventListener("webglcontextcreationerror",me,!1),bt.dispose(),mt.dispose(),St.dispose(),y.dispose(),Z.dispose(),ht.dispose(),gt.dispose(),Ot.dispose(),Mt.dispose(),Et.dispose(),Ct.dispose(),Ct.removeEventListener("sessionstart",Vu),Ct.removeEventListener("sessionend",ku),ns.stop()};function Jt(P){P.preventDefault(),Nh("WebGLRenderer: Context Lost."),T=!0}function Me(){Nh("WebGLRenderer: Context Restored."),T=!1;const P=A.autoReset,K=Rt.enabled,ut=Rt.autoUpdate,at=Rt.needsUpdate,it=Rt.type;yt(),A.autoReset=P,Rt.enabled=K,Rt.autoUpdate=ut,Rt.needsUpdate=at,Rt.type=it}function me(P){ae("WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function kn(P){const K=P.target;K.removeEventListener("dispose",kn),hi(K)}function hi(P){rm(P),y.remove(P)}function rm(P){const K=y.get(P).programs;K!==void 0&&(K.forEach(function(ut){Et.releaseProgram(ut)}),P.isShaderMaterial&&Et.releaseShaderCache(P))}this.renderBufferDirect=function(P,K,ut,at,it,Pt){K===null&&(K=k);const Bt=it.isMesh&&it.matrixWorld.determinant()<0,Dt=am(P,K,ut,at,it);st.setMaterial(at,Bt);let kt=ut.index,Ht=1;if(at.wireframe===!0){if(kt=xt.getWireframeAttribute(ut),kt===void 0)return;Ht=2}const Yt=ut.drawRange,qt=ut.attributes.position;let se=Yt.start*Ht,xe=(Yt.start+Yt.count)*Ht;Pt!==null&&(se=Math.max(se,Pt.start*Ht),xe=Math.min(xe,(Pt.start+Pt.count)*Ht)),kt!==null?(se=Math.max(se,0),xe=Math.min(xe,kt.count)):qt!=null&&(se=Math.max(se,0),xe=Math.min(xe,qt.count));const Ie=xe-se;if(Ie<0||Ie===1/0)return;Ot.setup(it,at,Dt,ut,kt);let Le,ye=Y;if(kt!==null&&(Le=tt.get(kt),ye=At,ye.setIndex(Le)),it.isMesh)at.wireframe===!0?(st.setLineWidth(at.wireframeLinewidth*$()),ye.setMode(R.LINES)):ye.setMode(R.TRIANGLES);else if(it.isLine){let Xt=at.linewidth;Xt===void 0&&(Xt=1),st.setLineWidth(Xt*$()),it.isLineSegments?ye.setMode(R.LINES):it.isLineLoop?ye.setMode(R.LINE_LOOP):ye.setMode(R.LINE_STRIP)}else it.isPoints?ye.setMode(R.POINTS):it.isSprite&&ye.setMode(R.TRIANGLES);if(it.isBatchedMesh)if(it._multiDrawInstances!==null)ro("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ye.renderMultiDrawInstances(it._multiDrawStarts,it._multiDrawCounts,it._multiDrawCount,it._multiDrawInstances);else if(Q.get("WEBGL_multi_draw"))ye.renderMultiDraw(it._multiDrawStarts,it._multiDrawCounts,it._multiDrawCount);else{const Xt=it._multiDrawStarts,ge=it._multiDrawCounts,he=it._multiDrawCount,hn=kt?tt.get(kt).bytesPerElement:1,Ps=y.get(at).currentProgram.getUniforms();for(let fn=0;fn<he;fn++)Ps.setValue(R,"_gl_DrawID",fn),ye.render(Xt[fn]/hn,ge[fn])}else if(it.isInstancedMesh)ye.renderInstances(se,Ie,it.count);else if(ut.isInstancedBufferGeometry){const Xt=ut._maxInstanceCount!==void 0?ut._maxInstanceCount:1/0,ge=Math.min(ut.instanceCount,Xt);ye.renderInstances(se,Ie,ge)}else ye.render(se,Ie)};function zu(P,K,ut){P.transparent===!0&&P.side===Dn&&P.forceSinglePass===!1?(P.side=un,P.needsUpdate=!0,yo(P,K,ut),P.side=es,P.needsUpdate=!0,yo(P,K,ut),P.side=Dn):yo(P,K,ut)}this.compile=function(P,K,ut=null){ut===null&&(ut=P),M=St.get(ut),M.init(K),C.push(M),ut.traverseVisible(function(it){it.isLight&&it.layers.test(K.layers)&&(M.pushLight(it),it.castShadow&&M.pushShadow(it))}),P!==ut&&P.traverseVisible(function(it){it.isLight&&it.layers.test(K.layers)&&(M.pushLight(it),it.castShadow&&M.pushShadow(it))}),M.setupLights();const at=new Set;return P.traverse(function(it){if(!(it.isMesh||it.isPoints||it.isLine||it.isSprite))return;const Pt=it.material;if(Pt)if(Array.isArray(Pt))for(let Bt=0;Bt<Pt.length;Bt++){const Dt=Pt[Bt];zu(Dt,ut,it),at.add(Dt)}else zu(Pt,ut,it),at.add(Pt)}),M=C.pop(),at},this.compileAsync=function(P,K,ut=null){const at=this.compile(P,K,ut);return new Promise(it=>{function Pt(){if(at.forEach(function(Bt){y.get(Bt).currentProgram.isReady()&&at.delete(Bt)}),at.size===0){it(P);return}setTimeout(Pt,10)}Q.get("KHR_parallel_shader_compile")!==null?Pt():setTimeout(Pt,10)})};let ka=null;function om(P){ka&&ka(P)}function Vu(){ns.stop()}function ku(){ns.start()}const ns=new qp;ns.setAnimationLoop(om),typeof self<"u"&&ns.setContext(self),this.setAnimationLoop=function(P){ka=P,Ct.setAnimationLoop(P),P===null?ns.stop():ns.start()},Ct.addEventListener("sessionstart",Vu),Ct.addEventListener("sessionend",ku),this.render=function(P,K){if(K!==void 0&&K.isCamera!==!0){ae("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;const ut=Ct.enabled===!0&&Ct.isPresenting===!0,at=F!==null&&(O===null||ut)&&F.begin(w,O);if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Ct.enabled===!0&&Ct.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(Ct.cameraAutoUpdate===!0&&Ct.updateCamera(K),K=Ct.getCamera()),P.isScene===!0&&P.onBeforeRender(w,P,K,O),M=St.get(P,C.length),M.init(K),C.push(M),I.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),ct.setFromProjectionMatrix(I,Jn,K.reversedDepth),pt=this.localClippingEnabled,rt=Tt.init(this.clippingPlanes,pt),_=mt.get(P,b.length),_.init(),b.push(_),Ct.enabled===!0&&Ct.isPresenting===!0){const Bt=w.xr.getDepthSensingMesh();Bt!==null&&Ga(Bt,K,-1/0,w.sortObjects)}Ga(P,K,0,w.sortObjects),_.finish(),w.sortObjects===!0&&_.sort(zt,$t),H=Ct.enabled===!1||Ct.isPresenting===!1||Ct.hasDepthSensing()===!1,H&&bt.addToRenderList(_,P),this.info.render.frame++,rt===!0&&Tt.beginShadows();const it=M.state.shadowsArray;if(Rt.render(it,P,K),rt===!0&&Tt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(at&&F.hasRenderPass())===!1){const Bt=_.opaque,Dt=_.transmissive;if(M.setupLights(),K.isArrayCamera){const kt=K.cameras;if(Dt.length>0)for(let Ht=0,Yt=kt.length;Ht<Yt;Ht++){const qt=kt[Ht];Hu(Bt,Dt,P,qt)}H&&bt.render(P);for(let Ht=0,Yt=kt.length;Ht<Yt;Ht++){const qt=kt[Ht];Gu(_,P,qt,qt.viewport)}}else Dt.length>0&&Hu(Bt,Dt,P,K),H&&bt.render(P),Gu(_,P,K)}O!==null&&q===0&&(B.updateMultisampleRenderTarget(O),B.updateRenderTargetMipmap(O)),at&&F.end(w),P.isScene===!0&&P.onAfterRender(w,P,K),Ot.resetDefaultState(),X=-1,V=null,C.pop(),C.length>0?(M=C[C.length-1],rt===!0&&Tt.setGlobalState(w.clippingPlanes,M.state.camera)):M=null,b.pop(),b.length>0?_=b[b.length-1]:_=null};function Ga(P,K,ut,at){if(P.visible===!1)return;if(P.layers.test(K.layers)){if(P.isGroup)ut=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(K);else if(P.isLight)M.pushLight(P),P.castShadow&&M.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||ct.intersectsSprite(P)){at&&D.setFromMatrixPosition(P.matrixWorld).applyMatrix4(I);const Bt=gt.update(P),Dt=P.material;Dt.visible&&_.push(P,Bt,Dt,ut,D.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||ct.intersectsObject(P))){const Bt=gt.update(P),Dt=P.material;if(at&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),D.copy(P.boundingSphere.center)):(Bt.boundingSphere===null&&Bt.computeBoundingSphere(),D.copy(Bt.boundingSphere.center)),D.applyMatrix4(P.matrixWorld).applyMatrix4(I)),Array.isArray(Dt)){const kt=Bt.groups;for(let Ht=0,Yt=kt.length;Ht<Yt;Ht++){const qt=kt[Ht],se=Dt[qt.materialIndex];se&&se.visible&&_.push(P,Bt,se,ut,D.z,qt)}}else Dt.visible&&_.push(P,Bt,Dt,ut,D.z,null)}}const Pt=P.children;for(let Bt=0,Dt=Pt.length;Bt<Dt;Bt++)Ga(Pt[Bt],K,ut,at)}function Gu(P,K,ut,at){const{opaque:it,transmissive:Pt,transparent:Bt}=P;M.setupLightsView(ut),rt===!0&&Tt.setGlobalState(w.clippingPlanes,ut),at&&st.viewport(U.copy(at)),it.length>0&&xo(it,K,ut),Pt.length>0&&xo(Pt,K,ut),Bt.length>0&&xo(Bt,K,ut),st.buffers.depth.setTest(!0),st.buffers.depth.setMask(!0),st.buffers.color.setMask(!0),st.setPolygonOffset(!1)}function Hu(P,K,ut,at){if((ut.isScene===!0?ut.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[at.id]===void 0){const se=Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[at.id]=new ni(1,1,{generateMipmaps:!0,type:se?Fi:gn,minFilter:_s,samples:et.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ue.workingColorSpace})}const Pt=M.state.transmissionRenderTarget[at.id],Bt=at.viewport||U;Pt.setSize(Bt.z*w.transmissionResolutionScale,Bt.w*w.transmissionResolutionScale);const Dt=w.getRenderTarget(),kt=w.getActiveCubeFace(),Ht=w.getActiveMipmapLevel();w.setRenderTarget(Pt),w.getClearColor(ft),lt=w.getClearAlpha(),lt<1&&w.setClearColor(16777215,.5),w.clear(),H&&bt.render(ut);const Yt=w.toneMapping;w.toneMapping=ei;const qt=at.viewport;if(at.viewport!==void 0&&(at.viewport=void 0),M.setupLightsView(at),rt===!0&&Tt.setGlobalState(w.clippingPlanes,at),xo(P,ut,at),B.updateMultisampleRenderTarget(Pt),B.updateRenderTargetMipmap(Pt),Q.has("WEBGL_multisampled_render_to_texture")===!1){let se=!1;for(let xe=0,Ie=K.length;xe<Ie;xe++){const Le=K[xe],{object:ye,geometry:Xt,material:ge,group:he}=Le;if(ge.side===Dn&&ye.layers.test(at.layers)){const hn=ge.side;ge.side=un,ge.needsUpdate=!0,Wu(ye,ut,at,Xt,ge,he),ge.side=hn,ge.needsUpdate=!0,se=!0}}se===!0&&(B.updateMultisampleRenderTarget(Pt),B.updateRenderTargetMipmap(Pt))}w.setRenderTarget(Dt,kt,Ht),w.setClearColor(ft,lt),qt!==void 0&&(at.viewport=qt),w.toneMapping=Yt}function xo(P,K,ut){const at=K.isScene===!0?K.overrideMaterial:null;for(let it=0,Pt=P.length;it<Pt;it++){const Bt=P[it],{object:Dt,geometry:kt,group:Ht}=Bt;let Yt=Bt.material;Yt.allowOverride===!0&&at!==null&&(Yt=at),Dt.layers.test(ut.layers)&&Wu(Dt,K,ut,kt,Yt,Ht)}}function Wu(P,K,ut,at,it,Pt){P.onBeforeRender(w,K,ut,at,it,Pt),P.modelViewMatrix.multiplyMatrices(ut.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),it.onBeforeRender(w,K,ut,at,P,Pt),it.transparent===!0&&it.side===Dn&&it.forceSinglePass===!1?(it.side=un,it.needsUpdate=!0,w.renderBufferDirect(ut,K,at,it,P,Pt),it.side=es,it.needsUpdate=!0,w.renderBufferDirect(ut,K,at,it,P,Pt),it.side=Dn):w.renderBufferDirect(ut,K,at,it,P,Pt),P.onAfterRender(w,K,ut,at,it,Pt)}function yo(P,K,ut){K.isScene!==!0&&(K=k);const at=y.get(P),it=M.state.lights,Pt=M.state.shadowsArray,Bt=it.state.version,Dt=Et.getParameters(P,it.state,Pt,K,ut),kt=Et.getProgramCacheKey(Dt);let Ht=at.programs;at.environment=P.isMeshStandardMaterial?K.environment:null,at.fog=K.fog,at.envMap=(P.isMeshStandardMaterial?ht:Z).get(P.envMap||at.environment),at.envMapRotation=at.environment!==null&&P.envMap===null?K.environmentRotation:P.envMapRotation,Ht===void 0&&(P.addEventListener("dispose",kn),Ht=new Map,at.programs=Ht);let Yt=Ht.get(kt);if(Yt!==void 0){if(at.currentProgram===Yt&&at.lightsStateVersion===Bt)return Xu(P,Dt),Yt}else Dt.uniforms=Et.getUniforms(P),P.onBeforeCompile(Dt,w),Yt=Et.acquireProgram(Dt,kt),Ht.set(kt,Yt),at.uniforms=Dt.uniforms;const qt=at.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(qt.clippingPlanes=Tt.uniform),Xu(P,Dt),at.needsLights=cm(P),at.lightsStateVersion=Bt,at.needsLights&&(qt.ambientLightColor.value=it.state.ambient,qt.lightProbe.value=it.state.probe,qt.directionalLights.value=it.state.directional,qt.directionalLightShadows.value=it.state.directionalShadow,qt.spotLights.value=it.state.spot,qt.spotLightShadows.value=it.state.spotShadow,qt.rectAreaLights.value=it.state.rectArea,qt.ltc_1.value=it.state.rectAreaLTC1,qt.ltc_2.value=it.state.rectAreaLTC2,qt.pointLights.value=it.state.point,qt.pointLightShadows.value=it.state.pointShadow,qt.hemisphereLights.value=it.state.hemi,qt.directionalShadowMap.value=it.state.directionalShadowMap,qt.directionalShadowMatrix.value=it.state.directionalShadowMatrix,qt.spotShadowMap.value=it.state.spotShadowMap,qt.spotLightMatrix.value=it.state.spotLightMatrix,qt.spotLightMap.value=it.state.spotLightMap,qt.pointShadowMap.value=it.state.pointShadowMap,qt.pointShadowMatrix.value=it.state.pointShadowMatrix),at.currentProgram=Yt,at.uniformsList=null,Yt}function qu(P){if(P.uniformsList===null){const K=P.currentProgram.getUniforms();P.uniformsList=ua.seqWithValue(K.seq,P.uniforms)}return P.uniformsList}function Xu(P,K){const ut=y.get(P);ut.outputColorSpace=K.outputColorSpace,ut.batching=K.batching,ut.batchingColor=K.batchingColor,ut.instancing=K.instancing,ut.instancingColor=K.instancingColor,ut.instancingMorph=K.instancingMorph,ut.skinning=K.skinning,ut.morphTargets=K.morphTargets,ut.morphNormals=K.morphNormals,ut.morphColors=K.morphColors,ut.morphTargetsCount=K.morphTargetsCount,ut.numClippingPlanes=K.numClippingPlanes,ut.numIntersection=K.numClipIntersection,ut.vertexAlphas=K.vertexAlphas,ut.vertexTangents=K.vertexTangents,ut.toneMapping=K.toneMapping}function am(P,K,ut,at,it){K.isScene!==!0&&(K=k),B.resetTextureUnits();const Pt=K.fog,Bt=at.isMeshStandardMaterial?K.environment:null,Dt=O===null?w.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:hr,kt=(at.isMeshStandardMaterial?ht:Z).get(at.envMap||Bt),Ht=at.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,Yt=!!ut.attributes.tangent&&(!!at.normalMap||at.anisotropy>0),qt=!!ut.morphAttributes.position,se=!!ut.morphAttributes.normal,xe=!!ut.morphAttributes.color;let Ie=ei;at.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Ie=w.toneMapping);const Le=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,ye=Le!==void 0?Le.length:0,Xt=y.get(at),ge=M.state.lights;if(rt===!0&&(pt===!0||P!==V)){const Ze=P===V&&at.id===X;Tt.setState(at,P,Ze)}let he=!1;at.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==ge.state.version||Xt.outputColorSpace!==Dt||it.isBatchedMesh&&Xt.batching===!1||!it.isBatchedMesh&&Xt.batching===!0||it.isBatchedMesh&&Xt.batchingColor===!0&&it.colorTexture===null||it.isBatchedMesh&&Xt.batchingColor===!1&&it.colorTexture!==null||it.isInstancedMesh&&Xt.instancing===!1||!it.isInstancedMesh&&Xt.instancing===!0||it.isSkinnedMesh&&Xt.skinning===!1||!it.isSkinnedMesh&&Xt.skinning===!0||it.isInstancedMesh&&Xt.instancingColor===!0&&it.instanceColor===null||it.isInstancedMesh&&Xt.instancingColor===!1&&it.instanceColor!==null||it.isInstancedMesh&&Xt.instancingMorph===!0&&it.morphTexture===null||it.isInstancedMesh&&Xt.instancingMorph===!1&&it.morphTexture!==null||Xt.envMap!==kt||at.fog===!0&&Xt.fog!==Pt||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==Tt.numPlanes||Xt.numIntersection!==Tt.numIntersection)||Xt.vertexAlphas!==Ht||Xt.vertexTangents!==Yt||Xt.morphTargets!==qt||Xt.morphNormals!==se||Xt.morphColors!==xe||Xt.toneMapping!==Ie||Xt.morphTargetsCount!==ye)&&(he=!0):(he=!0,Xt.__version=at.version);let hn=Xt.currentProgram;he===!0&&(hn=yo(at,K,it));let Ps=!1,fn=!1,yr=!1;const be=hn.getUniforms(),rn=Xt.uniforms;if(st.useProgram(hn.program)&&(Ps=!0,fn=!0,yr=!0),at.id!==X&&(X=at.id,fn=!0),Ps||V!==P){st.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),be.setValue(R,"projectionMatrix",P.projectionMatrix),be.setValue(R,"viewMatrix",P.matrixWorldInverse);const on=be.map.cameraPosition;on!==void 0&&on.setValue(R,N.setFromMatrixPosition(P.matrixWorld)),et.logarithmicDepthBuffer&&be.setValue(R,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(at.isMeshPhongMaterial||at.isMeshToonMaterial||at.isMeshLambertMaterial||at.isMeshBasicMaterial||at.isMeshStandardMaterial||at.isShaderMaterial)&&be.setValue(R,"isOrthographic",P.isOrthographicCamera===!0),V!==P&&(V=P,fn=!0,yr=!0)}if(Xt.needsLights&&(ge.state.directionalShadowMap.length>0&&be.setValue(R,"directionalShadowMap",ge.state.directionalShadowMap,B),ge.state.spotShadowMap.length>0&&be.setValue(R,"spotShadowMap",ge.state.spotShadowMap,B),ge.state.pointShadowMap.length>0&&be.setValue(R,"pointShadowMap",ge.state.pointShadowMap,B)),it.isSkinnedMesh){be.setOptional(R,it,"bindMatrix"),be.setOptional(R,it,"bindMatrixInverse");const Ze=it.skeleton;Ze&&(Ze.boneTexture===null&&Ze.computeBoneTexture(),be.setValue(R,"boneTexture",Ze.boneTexture,B))}it.isBatchedMesh&&(be.setOptional(R,it,"batchingTexture"),be.setValue(R,"batchingTexture",it._matricesTexture,B),be.setOptional(R,it,"batchingIdTexture"),be.setValue(R,"batchingIdTexture",it._indirectTexture,B),be.setOptional(R,it,"batchingColorTexture"),it._colorsTexture!==null&&be.setValue(R,"batchingColorTexture",it._colorsTexture,B));const yn=ut.morphAttributes;if((yn.position!==void 0||yn.normal!==void 0||yn.color!==void 0)&&Gt.update(it,ut,hn),(fn||Xt.receiveShadow!==it.receiveShadow)&&(Xt.receiveShadow=it.receiveShadow,be.setValue(R,"receiveShadow",it.receiveShadow)),at.isMeshGouraudMaterial&&at.envMap!==null&&(rn.envMap.value=kt,rn.flipEnvMap.value=kt.isCubeTexture&&kt.isRenderTargetTexture===!1?-1:1),at.isMeshStandardMaterial&&at.envMap===null&&K.environment!==null&&(rn.envMapIntensity.value=K.environmentIntensity),rn.dfgLUT!==void 0&&(rn.dfgLUT.value=Qw()),fn&&(be.setValue(R,"toneMappingExposure",w.toneMappingExposure),Xt.needsLights&&lm(rn,yr),Pt&&at.fog===!0&&Nt.refreshFogUniforms(rn,Pt),Nt.refreshMaterialUniforms(rn,at,Ut,_t,M.state.transmissionRenderTarget[P.id]),ua.upload(R,qu(Xt),rn,B)),at.isShaderMaterial&&at.uniformsNeedUpdate===!0&&(ua.upload(R,qu(Xt),rn,B),at.uniformsNeedUpdate=!1),at.isSpriteMaterial&&be.setValue(R,"center",it.center),be.setValue(R,"modelViewMatrix",it.modelViewMatrix),be.setValue(R,"normalMatrix",it.normalMatrix),be.setValue(R,"modelMatrix",it.matrixWorld),at.isShaderMaterial||at.isRawShaderMaterial){const Ze=at.uniformsGroups;for(let on=0,Ha=Ze.length;on<Ha;on++){const is=Ze[on];Mt.update(is,hn),Mt.bind(is,hn)}}return hn}function lm(P,K){P.ambientLightColor.needsUpdate=K,P.lightProbe.needsUpdate=K,P.directionalLights.needsUpdate=K,P.directionalLightShadows.needsUpdate=K,P.pointLights.needsUpdate=K,P.pointLightShadows.needsUpdate=K,P.spotLights.needsUpdate=K,P.spotLightShadows.needsUpdate=K,P.rectAreaLights.needsUpdate=K,P.hemisphereLights.needsUpdate=K}function cm(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(P,K,ut){const at=y.get(P);at.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,at.__autoAllocateDepthBuffer===!1&&(at.__useRenderToTexture=!1),y.get(P.texture).__webglTexture=K,y.get(P.depthTexture).__webglTexture=at.__autoAllocateDepthBuffer?void 0:ut,at.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,K){const ut=y.get(P);ut.__webglFramebuffer=K,ut.__useDefaultFramebuffer=K===void 0};const um=R.createFramebuffer();this.setRenderTarget=function(P,K=0,ut=0){O=P,L=K,q=ut;let at=null,it=!1,Pt=!1;if(P){const Dt=y.get(P);if(Dt.__useDefaultFramebuffer!==void 0){st.bindFramebuffer(R.FRAMEBUFFER,Dt.__webglFramebuffer),U.copy(P.viewport),W.copy(P.scissor),j=P.scissorTest,st.viewport(U),st.scissor(W),st.setScissorTest(j),X=-1;return}else if(Dt.__webglFramebuffer===void 0)B.setupRenderTarget(P);else if(Dt.__hasExternalTextures)B.rebindTextures(P,y.get(P.texture).__webglTexture,y.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const Yt=P.depthTexture;if(Dt.__boundDepthTexture!==Yt){if(Yt!==null&&y.has(Yt)&&(P.width!==Yt.image.width||P.height!==Yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");B.setupDepthRenderbuffer(P)}}const kt=P.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(Pt=!0);const Ht=y.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Ht[K])?at=Ht[K][ut]:at=Ht[K],it=!0):P.samples>0&&B.useMultisampledRTT(P)===!1?at=y.get(P).__webglMultisampledFramebuffer:Array.isArray(Ht)?at=Ht[ut]:at=Ht,U.copy(P.viewport),W.copy(P.scissor),j=P.scissorTest}else U.copy(G).multiplyScalar(Ut).floor(),W.copy(z).multiplyScalar(Ut).floor(),j=ot;if(ut!==0&&(at=um),st.bindFramebuffer(R.FRAMEBUFFER,at)&&st.drawBuffers(P,at),st.viewport(U),st.scissor(W),st.setScissorTest(j),it){const Dt=y.get(P.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+K,Dt.__webglTexture,ut)}else if(Pt){const Dt=K;for(let kt=0;kt<P.textures.length;kt++){const Ht=y.get(P.textures[kt]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+kt,Ht.__webglTexture,ut,Dt)}}else if(P!==null&&ut!==0){const Dt=y.get(P.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Dt.__webglTexture,ut)}X=-1},this.readRenderTargetPixels=function(P,K,ut,at,it,Pt,Bt,Dt=0){if(!(P&&P.isWebGLRenderTarget)){ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=y.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Bt!==void 0&&(kt=kt[Bt]),kt){st.bindFramebuffer(R.FRAMEBUFFER,kt);try{const Ht=P.textures[Dt],Yt=Ht.format,qt=Ht.type;if(!et.textureFormatReadable(Yt)){ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!et.textureTypeReadable(qt)){ae("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=P.width-at&&ut>=0&&ut<=P.height-it&&(P.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Dt),R.readPixels(K,ut,at,it,wt.convert(Yt),wt.convert(qt),Pt))}finally{const Ht=O!==null?y.get(O).__webglFramebuffer:null;st.bindFramebuffer(R.FRAMEBUFFER,Ht)}}},this.readRenderTargetPixelsAsync=async function(P,K,ut,at,it,Pt,Bt,Dt=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let kt=y.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Bt!==void 0&&(kt=kt[Bt]),kt)if(K>=0&&K<=P.width-at&&ut>=0&&ut<=P.height-it){st.bindFramebuffer(R.FRAMEBUFFER,kt);const Ht=P.textures[Dt],Yt=Ht.format,qt=Ht.type;if(!et.textureFormatReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!et.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const se=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,se),R.bufferData(R.PIXEL_PACK_BUFFER,Pt.byteLength,R.STREAM_READ),P.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Dt),R.readPixels(K,ut,at,it,wt.convert(Yt),wt.convert(qt),0);const xe=O!==null?y.get(O).__webglFramebuffer:null;st.bindFramebuffer(R.FRAMEBUFFER,xe);const Ie=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await k_(R,Ie,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,se),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,Pt),R.deleteBuffer(se),R.deleteSync(Ie),Pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,K=null,ut=0){const at=Math.pow(2,-ut),it=Math.floor(P.image.width*at),Pt=Math.floor(P.image.height*at),Bt=K!==null?K.x:0,Dt=K!==null?K.y:0;B.setTexture2D(P,0),R.copyTexSubImage2D(R.TEXTURE_2D,ut,0,0,Bt,Dt,it,Pt),st.unbindTexture()};const hm=R.createFramebuffer(),fm=R.createFramebuffer();this.copyTextureToTexture=function(P,K,ut=null,at=null,it=0,Pt=null){Pt===null&&(it!==0?(ro("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Pt=it,it=0):Pt=0);let Bt,Dt,kt,Ht,Yt,qt,se,xe,Ie;const Le=P.isCompressedTexture?P.mipmaps[Pt]:P.image;if(ut!==null)Bt=ut.max.x-ut.min.x,Dt=ut.max.y-ut.min.y,kt=ut.isBox3?ut.max.z-ut.min.z:1,Ht=ut.min.x,Yt=ut.min.y,qt=ut.isBox3?ut.min.z:0;else{const yn=Math.pow(2,-it);Bt=Math.floor(Le.width*yn),Dt=Math.floor(Le.height*yn),P.isDataArrayTexture?kt=Le.depth:P.isData3DTexture?kt=Math.floor(Le.depth*yn):kt=1,Ht=0,Yt=0,qt=0}at!==null?(se=at.x,xe=at.y,Ie=at.z):(se=0,xe=0,Ie=0);const ye=wt.convert(K.format),Xt=wt.convert(K.type);let ge;K.isData3DTexture?(B.setTexture3D(K,0),ge=R.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(B.setTexture2DArray(K,0),ge=R.TEXTURE_2D_ARRAY):(B.setTexture2D(K,0),ge=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,K.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,K.unpackAlignment);const he=R.getParameter(R.UNPACK_ROW_LENGTH),hn=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Ps=R.getParameter(R.UNPACK_SKIP_PIXELS),fn=R.getParameter(R.UNPACK_SKIP_ROWS),yr=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,Le.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Le.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ht),R.pixelStorei(R.UNPACK_SKIP_ROWS,Yt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,qt);const be=P.isDataArrayTexture||P.isData3DTexture,rn=K.isDataArrayTexture||K.isData3DTexture;if(P.isDepthTexture){const yn=y.get(P),Ze=y.get(K),on=y.get(yn.__renderTarget),Ha=y.get(Ze.__renderTarget);st.bindFramebuffer(R.READ_FRAMEBUFFER,on.__webglFramebuffer),st.bindFramebuffer(R.DRAW_FRAMEBUFFER,Ha.__webglFramebuffer);for(let is=0;is<kt;is++)be&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,y.get(P).__webglTexture,it,qt+is),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,y.get(K).__webglTexture,Pt,Ie+is)),R.blitFramebuffer(Ht,Yt,Bt,Dt,se,xe,Bt,Dt,R.DEPTH_BUFFER_BIT,R.NEAREST);st.bindFramebuffer(R.READ_FRAMEBUFFER,null),st.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(it!==0||P.isRenderTargetTexture||y.has(P)){const yn=y.get(P),Ze=y.get(K);st.bindFramebuffer(R.READ_FRAMEBUFFER,hm),st.bindFramebuffer(R.DRAW_FRAMEBUFFER,fm);for(let on=0;on<kt;on++)be?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,yn.__webglTexture,it,qt+on):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,yn.__webglTexture,it),rn?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ze.__webglTexture,Pt,Ie+on):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Ze.__webglTexture,Pt),it!==0?R.blitFramebuffer(Ht,Yt,Bt,Dt,se,xe,Bt,Dt,R.COLOR_BUFFER_BIT,R.NEAREST):rn?R.copyTexSubImage3D(ge,Pt,se,xe,Ie+on,Ht,Yt,Bt,Dt):R.copyTexSubImage2D(ge,Pt,se,xe,Ht,Yt,Bt,Dt);st.bindFramebuffer(R.READ_FRAMEBUFFER,null),st.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else rn?P.isDataTexture||P.isData3DTexture?R.texSubImage3D(ge,Pt,se,xe,Ie,Bt,Dt,kt,ye,Xt,Le.data):K.isCompressedArrayTexture?R.compressedTexSubImage3D(ge,Pt,se,xe,Ie,Bt,Dt,kt,ye,Le.data):R.texSubImage3D(ge,Pt,se,xe,Ie,Bt,Dt,kt,ye,Xt,Le):P.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,Pt,se,xe,Bt,Dt,ye,Xt,Le.data):P.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,Pt,se,xe,Le.width,Le.height,ye,Le.data):R.texSubImage2D(R.TEXTURE_2D,Pt,se,xe,Bt,Dt,ye,Xt,Le);R.pixelStorei(R.UNPACK_ROW_LENGTH,he),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,hn),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ps),R.pixelStorei(R.UNPACK_SKIP_ROWS,fn),R.pixelStorei(R.UNPACK_SKIP_IMAGES,yr),Pt===0&&K.generateMipmaps&&R.generateMipmap(ge),st.unbindTexture()},this.initRenderTarget=function(P){y.get(P).__webglFramebuffer===void 0&&B.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?B.setTextureCube(P,0):P.isData3DTexture?B.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?B.setTexture2DArray(P,0):B.setTexture2D(P,0),st.unbindTexture()},this.resetState=function(){L=0,q=0,O=null,st.reset(),Ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ue._getDrawingBufferColorSpace(t),e.unpackColorSpace=ue._getUnpackColorSpace()}}class Un{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){const t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){const t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){const e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new E);const e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new E);const i=this.elements,s=t.x,r=t.y,o=t.z;return e.x=i[0]*s+i[1]*r+i[2]*o,e.y=i[3]*s+i[4]*r+i[5]*o,e.z=i[6]*s+i[7]*r+i[8]*o,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new Un);const i=this.elements,s=t.elements,r=e.elements,o=i[0],a=i[1],l=i[2],c=i[3],u=i[4],f=i[5],h=i[6],d=i[7],m=i[8],v=s[0],p=s[1],g=s[2],x=s[3],S=s[4],_=s[5],M=s[6],b=s[7],C=s[8];return r[0]=o*v+a*x+l*M,r[1]=o*p+a*S+l*b,r[2]=o*g+a*_+l*C,r[3]=c*v+u*x+f*M,r[4]=c*p+u*S+f*b,r[5]=c*g+u*_+f*C,r[6]=h*v+d*x+m*M,r[7]=h*p+d*S+m*b,r[8]=h*g+d*_+m*C,e}scale(t,e){e===void 0&&(e=new Un);const i=this.elements,s=e.elements;for(let r=0;r!==3;r++)s[3*r+0]=t.x*i[3*r+0],s[3*r+1]=t.y*i[3*r+1],s[3*r+2]=t.z*i[3*r+2];return e}solve(t,e){e===void 0&&(e=new E);const i=3,s=4,r=[];let o,a;for(o=0;o<i*s;o++)r.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)r[o+s*a]=this.elements[o+3*a];r[3+4*0]=t.x,r[3+4*1]=t.y,r[3+4*2]=t.z;let l=3;const c=l;let u;const f=4;let h;do{if(o=c-l,r[o+s*o]===0){for(a=o+1;a<c;a++)if(r[o+s*a]!==0){u=f;do h=f-u,r[h+s*o]+=r[h+s*a];while(--u);break}}if(r[o+s*o]!==0)for(a=o+1;a<c;a++){const d=r[o+s*a]/r[o+s*o];u=f;do h=f-u,r[h+s*a]=h<=o?0:r[h+s*a]-r[h+s*o]*d;while(--u)}}while(--l);if(e.z=r[2*s+3]/r[2*s+2],e.y=(r[1*s+3]-r[1*s+2]*e.z)/r[1*s+1],e.x=(r[0*s+3]-r[0*s+2]*e.z-r[0*s+1]*e.y)/r[0*s+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,i){if(i===void 0)return this.elements[e+3*t];this.elements[e+3*t]=i}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="";const e=",";for(let i=0;i<9;i++)t+=this.elements[i]+e;return t}reverse(t){t===void 0&&(t=new Un);const e=3,i=6,s=eE;let r,o;for(r=0;r<3;r++)for(o=0;o<3;o++)s[r+i*o]=this.elements[r+3*o];s[3+6*0]=1,s[3+6*1]=0,s[3+6*2]=0,s[4+6*0]=0,s[4+6*1]=1,s[4+6*2]=0,s[5+6*0]=0,s[5+6*1]=0,s[5+6*2]=1;let a=3;const l=a;let c;const u=i;let f;do{if(r=l-a,s[r+i*r]===0){for(o=r+1;o<l;o++)if(s[r+i*o]!==0){c=u;do f=u-c,s[f+i*r]+=s[f+i*o];while(--c);break}}if(s[r+i*r]!==0)for(o=r+1;o<l;o++){const h=s[r+i*o]/s[r+i*r];c=u;do f=u-c,s[f+i*o]=f<=r?0:s[f+i*o]-s[f+i*r]*h;while(--c)}}while(--a);r=2;do{o=r-1;do{const h=s[r+i*o]/s[r+i*r];c=i;do f=i-c,s[f+i*o]=s[f+i*o]-s[f+i*r]*h;while(--c)}while(o--)}while(--r);r=2;do{const h=1/s[r+i*r];c=i;do f=i-c,s[f+i*r]=s[f+i*r]*h;while(--c)}while(r--);r=2;do{o=2;do{if(f=s[e+o+i*r],isNaN(f)||f===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(r,o,f)}while(o--)}while(r--);return t}setRotationFromQuaternion(t){const e=t.x,i=t.y,s=t.z,r=t.w,o=e+e,a=i+i,l=s+s,c=e*o,u=e*a,f=e*l,h=i*a,d=i*l,m=s*l,v=r*o,p=r*a,g=r*l,x=this.elements;return x[3*0+0]=1-(h+m),x[3*0+1]=u-g,x[3*0+2]=f+p,x[3*1+0]=u+g,x[3*1+1]=1-(c+m),x[3*1+2]=d-v,x[3*2+0]=f-p,x[3*2+1]=d+v,x[3*2+2]=1-(c+h),this}transpose(t){t===void 0&&(t=new Un);const e=this.elements,i=t.elements;let s;return i[0]=e[0],i[4]=e[4],i[8]=e[8],s=e[1],i[1]=e[3],i[3]=s,s=e[2],i[2]=e[6],i[6]=s,s=e[5],i[5]=e[7],i[7]=s,t}}const eE=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class E{constructor(t,e,i){t===void 0&&(t=0),e===void 0&&(e=0),i===void 0&&(i=0),this.x=t,this.y=e,this.z=i}cross(t,e){e===void 0&&(e=new E);const i=t.x,s=t.y,r=t.z,o=this.x,a=this.y,l=this.z;return e.x=a*r-l*s,e.y=l*i-o*r,e.z=o*s-a*i,e}set(t,e,i){return this.x=t,this.y=e,this.z=i,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new E(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new E(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new Un([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const t=this.x,e=this.y,i=this.z,s=Math.sqrt(t*t+e*e+i*i);if(s>0){const r=1/s;this.x*=r,this.y*=r,this.z*=r}else this.x=0,this.y=0,this.z=0;return s}unit(t){t===void 0&&(t=new E);const e=this.x,i=this.y,s=this.z;let r=Math.sqrt(e*e+i*i+s*s);return r>0?(r=1/r,t.x=e*r,t.y=i*r,t.z=s*r):(t.x=1,t.y=0,t.z=0),t}length(){const t=this.x,e=this.y,i=this.z;return Math.sqrt(t*t+e*e+i*i)}lengthSquared(){return this.dot(this)}distanceTo(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z;return Math.sqrt((r-e)*(r-e)+(o-i)*(o-i)+(a-s)*(a-s))}distanceSquared(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z;return(r-e)*(r-e)+(o-i)*(o-i)+(a-s)*(a-s)}scale(t,e){e===void 0&&(e=new E);const i=this.x,s=this.y,r=this.z;return e.x=t*i,e.y=t*s,e.z=t*r,e}vmul(t,e){return e===void 0&&(e=new E),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,i){return i===void 0&&(i=new E),i.x=this.x+t*e.x,i.y=this.y+t*e.y,i.z=this.z+t*e.z,i}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new E),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){const i=this.length();if(i>0){const s=nE,r=1/i;s.set(this.x*r,this.y*r,this.z*r);const o=iE;Math.abs(s.x)<.9?(o.set(1,0,0),s.cross(o,t)):(o.set(0,1,0),s.cross(o,t)),s.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,i){const s=this.x,r=this.y,o=this.z;i.x=s+(t.x-s)*e,i.y=r+(t.y-r)*e,i.z=o+(t.z-o)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(Df),Df.almostEquals(t,e)}clone(){return new E(this.x,this.y,this.z)}}E.ZERO=new E(0,0,0);E.UNIT_X=new E(1,0,0);E.UNIT_Y=new E(0,1,0);E.UNIT_Z=new E(0,0,1);const nE=new E,iE=new E,Df=new E;class xn{constructor(t){t===void 0&&(t={}),this.lowerBound=new E,this.upperBound=new E,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,i,s){const r=this.lowerBound,o=this.upperBound,a=i;r.copy(t[0]),a&&a.vmult(r,r),o.copy(r);for(let l=1;l<t.length;l++){let c=t[l];a&&(a.vmult(c,Nf),c=Nf),c.x>o.x&&(o.x=c.x),c.x<r.x&&(r.x=c.x),c.y>o.y&&(o.y=c.y),c.y<r.y&&(r.y=c.y),c.z>o.z&&(o.z=c.z),c.z<r.z&&(r.z=c.z)}return e&&(e.vadd(r,r),e.vadd(o,o)),s&&(r.x-=s,r.y-=s,r.z-=s,o.x+=s,o.y+=s,o.z+=s),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new xn().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){const e=this.lowerBound,i=this.upperBound,s=t.lowerBound,r=t.upperBound,o=s.x<=i.x&&i.x<=r.x||e.x<=r.x&&r.x<=i.x,a=s.y<=i.y&&i.y<=r.y||e.y<=r.y&&r.y<=i.y,l=s.z<=i.z&&i.z<=r.z||e.z<=r.z&&r.z<=i.z;return o&&a&&l}volume(){const t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){const e=this.lowerBound,i=this.upperBound,s=t.lowerBound,r=t.upperBound;return e.x<=s.x&&i.x>=r.x&&e.y<=s.y&&i.y>=r.y&&e.z<=s.z&&i.z>=r.z}getCorners(t,e,i,s,r,o,a,l){const c=this.lowerBound,u=this.upperBound;t.copy(c),e.set(u.x,c.y,c.z),i.set(u.x,u.y,c.z),s.set(c.x,u.y,u.z),r.set(u.x,c.y,u.z),o.set(c.x,u.y,c.z),a.set(c.x,c.y,u.z),l.copy(u)}toLocalFrame(t,e){const i=Ff,s=i[0],r=i[1],o=i[2],a=i[3],l=i[4],c=i[5],u=i[6],f=i[7];this.getCorners(s,r,o,a,l,c,u,f);for(let h=0;h!==8;h++){const d=i[h];t.pointToLocal(d,d)}return e.setFromPoints(i)}toWorldFrame(t,e){const i=Ff,s=i[0],r=i[1],o=i[2],a=i[3],l=i[4],c=i[5],u=i[6],f=i[7];this.getCorners(s,r,o,a,l,c,u,f);for(let h=0;h!==8;h++){const d=i[h];t.pointToWorld(d,d)}return e.setFromPoints(i)}overlapsRay(t){const{direction:e,from:i}=t,s=1/e.x,r=1/e.y,o=1/e.z,a=(this.lowerBound.x-i.x)*s,l=(this.upperBound.x-i.x)*s,c=(this.lowerBound.y-i.y)*r,u=(this.upperBound.y-i.y)*r,f=(this.lowerBound.z-i.z)*o,h=(this.upperBound.z-i.z)*o,d=Math.max(Math.max(Math.min(a,l),Math.min(c,u)),Math.min(f,h)),m=Math.min(Math.min(Math.max(a,l),Math.max(c,u)),Math.max(f,h));return!(m<0||d>m)}}const Nf=new E,Ff=[new E,new E,new E,new E,new E,new E,new E,new E];class Uf{constructor(){this.matrix=[]}get(t,e){let{index:i}=t,{index:s}=e;if(s>i){const r=s;s=i,i=r}return this.matrix[(i*(i+1)>>1)+s-1]}set(t,e,i){let{index:s}=t,{index:r}=e;if(r>s){const o=r;r=s,s=o}this.matrix[(s*(s+1)>>1)+r-1]=i?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}}class Kp{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;return i[t]===void 0&&(i[t]=[]),i[t].includes(e)||i[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return!!(i[t]!==void 0&&i[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;const i=this._listeners;if(i[t]===void 0)return this;const s=i[t].indexOf(e);return s!==-1&&i[t].splice(s,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;const i=this._listeners[t.type];if(i!==void 0){t.target=this;for(let s=0,r=i.length;s<r;s++)i[s].call(this,t)}return this}}class Ne{constructor(t,e,i,s){t===void 0&&(t=0),e===void 0&&(e=0),i===void 0&&(i=0),s===void 0&&(s=1),this.x=t,this.y=e,this.z=i,this.w=s}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){const i=Math.sin(e*.5);return this.x=t.x*i,this.y=t.y*i,this.z=t.z*i,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new E),this.normalize();const e=2*Math.acos(this.w),i=Math.sqrt(1-this.w*this.w);return i<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/i,t.y=this.y/i,t.z=this.z/i),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){const i=sE,s=rE;t.tangents(i,s),this.setFromAxisAngle(i,Math.PI)}else{const i=t.cross(e);this.x=i.x,this.y=i.y,this.z=i.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new Ne);const i=this.x,s=this.y,r=this.z,o=this.w,a=t.x,l=t.y,c=t.z,u=t.w;return e.x=i*u+o*a+s*c-r*l,e.y=s*u+o*l+r*a-i*c,e.z=r*u+o*c+i*l-s*a,e.w=o*u-i*a-s*l-r*c,e}inverse(t){t===void 0&&(t=new Ne);const e=this.x,i=this.y,s=this.z,r=this.w;this.conjugate(t);const o=1/(e*e+i*i+s*s+r*r);return t.x*=o,t.y*=o,t.z*=o,t.w*=o,t}conjugate(t){return t===void 0&&(t=new Ne),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){const t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new E);const i=t.x,s=t.y,r=t.z,o=this.x,a=this.y,l=this.z,c=this.w,u=c*i+a*r-l*s,f=c*s+l*i-o*r,h=c*r+o*s-a*i,d=-o*i-a*s-l*r;return e.x=u*c+d*-o+f*-l-h*-a,e.y=f*c+d*-a+h*-o-u*-l,e.z=h*c+d*-l+u*-a-f*-o,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let i,s,r;const o=this.x,a=this.y,l=this.z,c=this.w;switch(e){case"YZX":const u=o*a+l*c;if(u>.499&&(i=2*Math.atan2(o,c),s=Math.PI/2,r=0),u<-.499&&(i=-2*Math.atan2(o,c),s=-Math.PI/2,r=0),i===void 0){const f=o*o,h=a*a,d=l*l;i=Math.atan2(2*a*c-2*o*l,1-2*h-2*d),s=Math.asin(2*u),r=Math.atan2(2*o*c-2*a*l,1-2*f-2*d)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=i,t.z=s,t.x=r}setFromEuler(t,e,i,s){s===void 0&&(s="XYZ");const r=Math.cos(t/2),o=Math.cos(e/2),a=Math.cos(i/2),l=Math.sin(t/2),c=Math.sin(e/2),u=Math.sin(i/2);return s==="XYZ"?(this.x=l*o*a+r*c*u,this.y=r*c*a-l*o*u,this.z=r*o*u+l*c*a,this.w=r*o*a-l*c*u):s==="YXZ"?(this.x=l*o*a+r*c*u,this.y=r*c*a-l*o*u,this.z=r*o*u-l*c*a,this.w=r*o*a+l*c*u):s==="ZXY"?(this.x=l*o*a-r*c*u,this.y=r*c*a+l*o*u,this.z=r*o*u+l*c*a,this.w=r*o*a-l*c*u):s==="ZYX"?(this.x=l*o*a-r*c*u,this.y=r*c*a+l*o*u,this.z=r*o*u-l*c*a,this.w=r*o*a+l*c*u):s==="YZX"?(this.x=l*o*a+r*c*u,this.y=r*c*a+l*o*u,this.z=r*o*u-l*c*a,this.w=r*o*a-l*c*u):s==="XZY"&&(this.x=l*o*a-r*c*u,this.y=r*c*a-l*o*u,this.z=r*o*u+l*c*a,this.w=r*o*a+l*c*u),this}clone(){return new Ne(this.x,this.y,this.z,this.w)}slerp(t,e,i){i===void 0&&(i=new Ne);const s=this.x,r=this.y,o=this.z,a=this.w;let l=t.x,c=t.y,u=t.z,f=t.w,h,d,m,v,p;return d=s*l+r*c+o*u+a*f,d<0&&(d=-d,l=-l,c=-c,u=-u,f=-f),1-d>1e-6?(h=Math.acos(d),m=Math.sin(h),v=Math.sin((1-e)*h)/m,p=Math.sin(e*h)/m):(v=1-e,p=e),i.x=v*s+p*l,i.y=v*r+p*c,i.z=v*o+p*u,i.w=v*a+p*f,i}integrate(t,e,i,s){s===void 0&&(s=new Ne);const r=t.x*i.x,o=t.y*i.y,a=t.z*i.z,l=this.x,c=this.y,u=this.z,f=this.w,h=e*.5;return s.x+=h*(r*f+o*u-a*c),s.y+=h*(o*f+a*l-r*u),s.z+=h*(a*f+r*c-o*l),s.w+=h*(-r*l-o*c-a*u),s}}const sE=new E,rE=new E,oE={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class Vt{constructor(t){t===void 0&&(t={}),this.id=Vt.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,i,s){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}Vt.idCounter=0;Vt.types=oE;class fe{constructor(t){t===void 0&&(t={}),this.position=new E,this.quaternion=new Ne,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return fe.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return fe.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new E),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,i,s){return s===void 0&&(s=new E),i.vsub(t,s),e.conjugate(Of),Of.vmult(s,s),s}static pointToWorldFrame(t,e,i,s){return s===void 0&&(s=new E),e.vmult(i,s),s.vadd(t,s),s}static vectorToWorldFrame(t,e,i){return i===void 0&&(i=new E),t.vmult(e,i),i}static vectorToLocalFrame(t,e,i,s){return s===void 0&&(s=new E),e.w*=-1,e.vmult(i,s),e.w*=-1,s}}const Of=new Ne;class Kr extends Vt{constructor(t){t===void 0&&(t={});const{vertices:e=[],faces:i=[],normals:s=[],axes:r,boundingSphereRadius:o}=t;super({type:Vt.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=i,this.faceNormals=s,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=r?r.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const t=this.faces,e=this.vertices,i=this.uniqueEdges;i.length=0;const s=new E;for(let r=0;r!==t.length;r++){const o=t[r],a=o.length;for(let l=0;l!==a;l++){const c=(l+1)%a;e[o[l]].vsub(e[o[c]],s),s.normalize();let u=!1;for(let f=0;f!==i.length;f++)if(i[f].almostEquals(s)||i[f].almostEquals(s)){u=!0;break}u||i.push(s.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let s=0;s<this.faces[t].length;s++)if(!this.vertices[this.faces[t][s]])throw new Error(`Vertex ${this.faces[t][s]} not found!`);const e=this.faceNormals[t]||new E;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;const i=this.vertices[this.faces[t][0]];if(e.dot(i)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let s=0;s<this.faces[t].length;s++)console.warn(`.vertices[${this.faces[t][s]}] = Vec3(${this.vertices[this.faces[t][s]].toString()})`)}}}getFaceNormal(t,e){const i=this.faces[t],s=this.vertices[i[0]],r=this.vertices[i[1]],o=this.vertices[i[2]];Kr.computeNormal(s,r,o,e)}static computeNormal(t,e,i,s){const r=new E,o=new E;e.vsub(t,o),i.vsub(e,r),r.cross(o,s),s.isZero()||s.normalize()}clipAgainstHull(t,e,i,s,r,o,a,l,c){const u=new E;let f=-1,h=-Number.MAX_VALUE;for(let m=0;m<i.faces.length;m++){u.copy(i.faceNormals[m]),r.vmult(u,u);const v=u.dot(o);v>h&&(h=v,f=m)}const d=[];for(let m=0;m<i.faces[f].length;m++){const v=i.vertices[i.faces[f][m]],p=new E;p.copy(v),r.vmult(p,p),s.vadd(p,p),d.push(p)}f>=0&&this.clipFaceAgainstHull(o,t,e,d,a,l,c)}findSeparatingAxis(t,e,i,s,r,o,a,l){const c=new E,u=new E,f=new E,h=new E,d=new E,m=new E;let v=Number.MAX_VALUE;const p=this;if(p.uniqueAxes)for(let g=0;g!==p.uniqueAxes.length;g++){i.vmult(p.uniqueAxes[g],c);const x=p.testSepAxis(c,t,e,i,s,r);if(x===!1)return!1;x<v&&(v=x,o.copy(c))}else{const g=a?a.length:p.faces.length;for(let x=0;x<g;x++){const S=a?a[x]:x;c.copy(p.faceNormals[S]),i.vmult(c,c);const _=p.testSepAxis(c,t,e,i,s,r);if(_===!1)return!1;_<v&&(v=_,o.copy(c))}}if(t.uniqueAxes)for(let g=0;g!==t.uniqueAxes.length;g++){r.vmult(t.uniqueAxes[g],u);const x=p.testSepAxis(u,t,e,i,s,r);if(x===!1)return!1;x<v&&(v=x,o.copy(u))}else{const g=l?l.length:t.faces.length;for(let x=0;x<g;x++){const S=l?l[x]:x;u.copy(t.faceNormals[S]),r.vmult(u,u);const _=p.testSepAxis(u,t,e,i,s,r);if(_===!1)return!1;_<v&&(v=_,o.copy(u))}}for(let g=0;g!==p.uniqueEdges.length;g++){i.vmult(p.uniqueEdges[g],h);for(let x=0;x!==t.uniqueEdges.length;x++)if(r.vmult(t.uniqueEdges[x],d),h.cross(d,m),!m.almostZero()){m.normalize();const S=p.testSepAxis(m,t,e,i,s,r);if(S===!1)return!1;S<v&&(v=S,o.copy(m))}}return s.vsub(e,f),f.dot(o)>0&&o.negate(o),!0}testSepAxis(t,e,i,s,r,o){const a=this;Kr.project(a,t,i,s,Ul),Kr.project(e,t,r,o,Ol);const l=Ul[0],c=Ul[1],u=Ol[0],f=Ol[1];if(l<f||u<c)return!1;const h=l-f,d=u-c;return h<d?h:d}calculateLocalInertia(t,e){const i=new E,s=new E;this.computeLocalAABB(s,i);const r=i.x-s.x,o=i.y-s.y,a=i.z-s.z;e.x=1/12*t*(2*o*2*o+2*a*2*a),e.y=1/12*t*(2*r*2*r+2*a*2*a),e.z=1/12*t*(2*o*2*o+2*r*2*r)}getPlaneConstantOfFace(t){const e=this.faces[t],i=this.faceNormals[t],s=this.vertices[e[0]];return-i.dot(s)}clipFaceAgainstHull(t,e,i,s,r,o,a){const l=new E,c=new E,u=new E,f=new E,h=new E,d=new E,m=new E,v=new E,p=this,g=[],x=s,S=g;let _=-1,M=Number.MAX_VALUE;for(let T=0;T<p.faces.length;T++){l.copy(p.faceNormals[T]),i.vmult(l,l);const L=l.dot(t);L<M&&(M=L,_=T)}if(_<0)return;const b=p.faces[_];b.connectedFaces=[];for(let T=0;T<p.faces.length;T++)for(let L=0;L<p.faces[T].length;L++)b.indexOf(p.faces[T][L])!==-1&&T!==_&&b.connectedFaces.indexOf(T)===-1&&b.connectedFaces.push(T);const C=b.length;for(let T=0;T<C;T++){const L=p.vertices[b[T]],q=p.vertices[b[(T+1)%C]];L.vsub(q,c),u.copy(c),i.vmult(u,u),e.vadd(u,u),f.copy(this.faceNormals[_]),i.vmult(f,f),e.vadd(f,f),u.cross(f,h),h.negate(h),d.copy(L),i.vmult(d,d),e.vadd(d,d);const O=b.connectedFaces[T];m.copy(this.faceNormals[O]);const X=this.getPlaneConstantOfFace(O);v.copy(m),i.vmult(v,v);const V=X-v.dot(e);for(this.clipFaceAgainstPlane(x,S,v,V);x.length;)x.shift();for(;S.length;)x.push(S.shift())}m.copy(this.faceNormals[_]);const F=this.getPlaneConstantOfFace(_);v.copy(m),i.vmult(v,v);const w=F-v.dot(e);for(let T=0;T<x.length;T++){let L=v.dot(x[T])+w;if(L<=r&&(console.log(`clamped: depth=${L} to minDist=${r}`),L=r),L<=o){const q=x[T];if(L<=1e-6){const O={point:q,normal:v,depth:L};a.push(O)}}}}clipFaceAgainstPlane(t,e,i,s){let r,o;const a=t.length;if(a<2)return e;let l=t[t.length-1],c=t[0];r=i.dot(l)+s;for(let u=0;u<a;u++){if(c=t[u],o=i.dot(c)+s,r<0)if(o<0){const f=new E;f.copy(c),e.push(f)}else{const f=new E;l.lerp(c,r/(r-o),f),e.push(f)}else if(o<0){const f=new E;l.lerp(c,r/(r-o),f),e.push(f),e.push(c)}l=c,r=o}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new E);const i=this.vertices,s=this.worldVertices;for(let r=0;r!==this.vertices.length;r++)e.vmult(i[r],s[r]),t.vadd(s[r],s[r]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){const i=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let s=0;s<this.vertices.length;s++){const r=i[s];r.x<t.x?t.x=r.x:r.x>e.x&&(e.x=r.x),r.y<t.y?t.y=r.y:r.y>e.y&&(e.y=r.y),r.z<t.z?t.z=r.z:r.z>e.z&&(e.z=r.z)}}computeWorldFaceNormals(t){const e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new E);const i=this.faceNormals,s=this.worldFaceNormals;for(let r=0;r!==e;r++)t.vmult(i[r],s[r]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0;const e=this.vertices;for(let i=0;i!==e.length;i++){const s=e[i].lengthSquared();s>t&&(t=s)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,i,s){const r=this.vertices;let o,a,l,c,u,f,h=new E;for(let d=0;d<r.length;d++){h.copy(r[d]),e.vmult(h,h),t.vadd(h,h);const m=h;(o===void 0||m.x<o)&&(o=m.x),(c===void 0||m.x>c)&&(c=m.x),(a===void 0||m.y<a)&&(a=m.y),(u===void 0||m.y>u)&&(u=m.y),(l===void 0||m.z<l)&&(l=m.z),(f===void 0||m.z>f)&&(f=m.z)}i.set(o,a,l),s.set(c,u,f)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new E);const e=this.vertices;for(let i=0;i<e.length;i++)t.vadd(e[i],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){const i=this.vertices.length,s=this.vertices;if(e){for(let r=0;r<i;r++){const o=s[r];e.vmult(o,o)}for(let r=0;r<this.faceNormals.length;r++){const o=this.faceNormals[r];e.vmult(o,o)}}if(t)for(let r=0;r<i;r++){const o=s[r];o.vadd(t,o)}}pointIsInside(t){const e=this.vertices,i=this.faces,s=this.faceNormals,r=new E;this.getAveragePointLocal(r);for(let o=0;o<this.faces.length;o++){let a=s[o];const l=e[i[o][0]],c=new E;t.vsub(l,c);const u=a.dot(c),f=new E;r.vsub(l,f);const h=a.dot(f);if(u<0&&h>0||u>0&&h<0)return!1}return-1}static project(t,e,i,s,r){const o=t.vertices.length,a=aE;let l=0,c=0;const u=lE,f=t.vertices;u.setZero(),fe.vectorToLocalFrame(i,s,e,a),fe.pointToLocalFrame(i,s,u,u);const h=u.dot(a);c=l=f[0].dot(a);for(let d=1;d<o;d++){const m=f[d].dot(a);m>l&&(l=m),m<c&&(c=m)}if(c-=h,l-=h,c>l){const d=c;c=l,l=d}r[0]=l,r[1]=c}}const Ul=[],Ol=[];new E;const aE=new E,lE=new E;class In extends Vt{constructor(t){super({type:Vt.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const t=this.halfExtents.x,e=this.halfExtents.y,i=this.halfExtents.z,s=E,r=[new s(-t,-e,-i),new s(t,-e,-i),new s(t,e,-i),new s(-t,e,-i),new s(-t,-e,i),new s(t,-e,i),new s(t,e,i),new s(-t,e,i)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new s(0,0,1),new s(0,1,0),new s(1,0,0)],l=new Kr({vertices:r,faces:o,axes:a});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new E),In.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,i){const s=t;i.x=1/12*e*(2*s.y*2*s.y+2*s.z*2*s.z),i.y=1/12*e*(2*s.x*2*s.x+2*s.z*2*s.z),i.z=1/12*e*(2*s.y*2*s.y+2*s.x*2*s.x)}getSideNormals(t,e){const i=t,s=this.halfExtents;if(i[0].set(s.x,0,0),i[1].set(0,s.y,0),i[2].set(0,0,s.z),i[3].set(-s.x,0,0),i[4].set(0,-s.y,0),i[5].set(0,0,-s.z),e!==void 0)for(let r=0;r!==i.length;r++)e.vmult(i[r],i[r]);return i}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,i){const s=this.halfExtents,r=[[s.x,s.y,s.z],[-s.x,s.y,s.z],[-s.x,-s.y,s.z],[-s.x,-s.y,-s.z],[s.x,-s.y,-s.z],[s.x,s.y,-s.z],[-s.x,s.y,-s.z],[s.x,-s.y,s.z]];for(let o=0;o<r.length;o++)Wi.set(r[o][0],r[o][1],r[o][2]),e.vmult(Wi,Wi),t.vadd(Wi,Wi),i(Wi.x,Wi.y,Wi.z)}calculateWorldAABB(t,e,i,s){const r=this.halfExtents;Wn[0].set(r.x,r.y,r.z),Wn[1].set(-r.x,r.y,r.z),Wn[2].set(-r.x,-r.y,r.z),Wn[3].set(-r.x,-r.y,-r.z),Wn[4].set(r.x,-r.y,-r.z),Wn[5].set(r.x,r.y,-r.z),Wn[6].set(-r.x,r.y,-r.z),Wn[7].set(r.x,-r.y,r.z);const o=Wn[0];e.vmult(o,o),t.vadd(o,o),s.copy(o),i.copy(o);for(let a=1;a<8;a++){const l=Wn[a];e.vmult(l,l),t.vadd(l,l);const c=l.x,u=l.y,f=l.z;c>s.x&&(s.x=c),u>s.y&&(s.y=u),f>s.z&&(s.z=f),c<i.x&&(i.x=c),u<i.y&&(i.y=u),f<i.z&&(i.z=f)}}}const Wi=new E,Wn=[new E,new E,new E,new E,new E,new E,new E,new E],Uu={DYNAMIC:1,STATIC:2,KINEMATIC:4},Ou={AWAKE:0,SLEEPY:1,SLEEPING:2};class Ft extends Kp{constructor(t){t===void 0&&(t={}),super(),this.id=Ft.idCounter++,this.index=-1,this.world=null,this.vlambda=new E,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new E,this.previousPosition=new E,this.interpolatedPosition=new E,this.initPosition=new E,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new E,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new E,this.force=new E;const e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?Ft.STATIC:Ft.DYNAMIC,typeof t.type==typeof Ft.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=Ft.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new E,this.quaternion=new Ne,this.initQuaternion=new Ne,this.previousQuaternion=new Ne,this.interpolatedQuaternion=new Ne,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new E,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new E,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new E,this.invInertia=new E,this.invInertiaWorld=new Un,this.invMassSolve=0,this.invInertiaSolve=new E,this.invInertiaWorldSolve=new Un,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new E(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new E(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new xn,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new E,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){const t=this.sleepState;this.sleepState=Ft.AWAKE,this.wakeUpAfterNarrowphase=!1,t===Ft.SLEEPING&&this.dispatchEvent(Ft.wakeupEvent)}sleep(){this.sleepState=Ft.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){const e=this.sleepState,i=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),s=this.sleepSpeedLimit**2;e===Ft.AWAKE&&i<s?(this.sleepState=Ft.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(Ft.sleepyEvent)):e===Ft.SLEEPY&&i>s?this.wakeUp():e===Ft.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(Ft.sleepEvent))}}updateSolveMassProperties(){this.sleepState===Ft.SLEEPING||this.type===Ft.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new E),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new E),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new E),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new E),this.quaternion.vmult(t,e),e}addShape(t,e,i){const s=new E,r=new Ne;return e&&s.copy(e),i&&r.copy(i),this.shapes.push(t),this.shapeOffsets.push(s),this.shapeOrientations.push(r),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){const e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){const t=this.shapes,e=this.shapeOffsets,i=t.length;let s=0;for(let r=0;r!==i;r++){const o=t[r];o.updateBoundingSphereRadius();const a=e[r].length(),l=o.boundingSphereRadius;a+l>s&&(s=a+l)}this.boundingRadius=s}updateAABB(){const t=this.shapes,e=this.shapeOffsets,i=this.shapeOrientations,s=t.length,r=cE,o=uE,a=this.quaternion,l=this.aabb,c=hE;for(let u=0;u!==s;u++){const f=t[u];a.vmult(e[u],r),r.vadd(this.position,r),a.mult(i[u],o),f.calculateWorldAABB(r,o,c.lowerBound,c.upperBound),u===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){const e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){const i=fE,s=dE;i.setRotationFromQuaternion(this.quaternion),i.transpose(s),i.scale(e,i),i.mmult(s,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new E),this.type!==Ft.DYNAMIC)return;this.sleepState===Ft.SLEEPING&&this.wakeUp();const i=pE;e.cross(t,i),this.force.vadd(t,this.force),this.torque.vadd(i,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new E),this.type!==Ft.DYNAMIC)return;const i=mE,s=gE;this.vectorToWorldFrame(t,i),this.vectorToWorldFrame(e,s),this.applyForce(i,s)}applyTorque(t){this.type===Ft.DYNAMIC&&(this.sleepState===Ft.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new E),this.type!==Ft.DYNAMIC)return;this.sleepState===Ft.SLEEPING&&this.wakeUp();const i=e,s=vE;s.copy(t),s.scale(this.invMass,s),this.velocity.vadd(s,this.velocity);const r=_E;i.cross(t,r),this.invInertiaWorld.vmult(r,r),this.angularVelocity.vadd(r,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new E),this.type!==Ft.DYNAMIC)return;const i=xE,s=yE;this.vectorToWorldFrame(t,i),this.vectorToWorldFrame(e,s),this.applyImpulse(i,s)}updateMassProperties(){const t=SE;this.invMass=this.mass>0?1/this.mass:0;const e=this.inertia,i=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),In.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!i?1/e.x:0,e.y>0&&!i?1/e.y:0,e.z>0&&!i?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){const i=new E;return t.vsub(this.position,i),this.angularVelocity.cross(i,e),this.velocity.vadd(e,e),e}integrate(t,e,i){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===Ft.DYNAMIC||this.type===Ft.KINEMATIC)||this.sleepState===Ft.SLEEPING)return;const s=this.velocity,r=this.angularVelocity,o=this.position,a=this.force,l=this.torque,c=this.quaternion,u=this.invMass,f=this.invInertiaWorld,h=this.linearFactor,d=u*t;s.x+=a.x*d*h.x,s.y+=a.y*d*h.y,s.z+=a.z*d*h.z;const m=f.elements,v=this.angularFactor,p=l.x*v.x,g=l.y*v.y,x=l.z*v.z;r.x+=t*(m[0]*p+m[1]*g+m[2]*x),r.y+=t*(m[3]*p+m[4]*g+m[5]*x),r.z+=t*(m[6]*p+m[7]*g+m[8]*x),o.x+=s.x*t,o.y+=s.y*t,o.z+=s.z*t,c.integrate(this.angularVelocity,t,this.angularFactor,c),e&&(i?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}Ft.idCounter=0;Ft.COLLIDE_EVENT_NAME="collide";Ft.DYNAMIC=Uu.DYNAMIC;Ft.STATIC=Uu.STATIC;Ft.KINEMATIC=Uu.KINEMATIC;Ft.AWAKE=Ou.AWAKE;Ft.SLEEPY=Ou.SLEEPY;Ft.SLEEPING=Ou.SLEEPING;Ft.wakeupEvent={type:"wakeup"};Ft.sleepyEvent={type:"sleepy"};Ft.sleepEvent={type:"sleep"};const cE=new E,uE=new Ne,hE=new xn,fE=new Un,dE=new Un;new Un;const pE=new E,mE=new E,gE=new E,vE=new E,_E=new E,xE=new E,yE=new E,SE=new E;class ME{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,i){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!(!(t.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&t.collisionFilterMask)||(t.type&Ft.STATIC||t.sleepState===Ft.SLEEPING)&&(e.type&Ft.STATIC||e.sleepState===Ft.SLEEPING))}intersectionTest(t,e,i,s){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,i,s):this.doBoundingSphereBroadphase(t,e,i,s)}doBoundingSphereBroadphase(t,e,i,s){const r=bE;e.position.vsub(t.position,r);const o=(t.boundingRadius+e.boundingRadius)**2;r.lengthSquared()<o&&(i.push(t),s.push(e))}doBoundingBoxBroadphase(t,e,i,s){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(i.push(t),s.push(e))}makePairsUnique(t,e){const i=wE,s=EE,r=TE,o=t.length;for(let a=0;a!==o;a++)s[a]=t[a],r[a]=e[a];t.length=0,e.length=0;for(let a=0;a!==o;a++){const l=s[a].id,c=r[a].id,u=l<c?`${l},${c}`:`${c},${l}`;i[u]=a,i.keys.push(u)}for(let a=0;a!==i.keys.length;a++){const l=i.keys.pop(),c=i[l];t.push(s[c]),e.push(r[c]),delete i[l]}}setWorld(t){}static boundingSphereCheck(t,e){const i=new E;t.position.vsub(e.position,i);const s=t.shapes[0],r=e.shapes[0];return Math.pow(s.boundingSphereRadius+r.boundingSphereRadius,2)>i.lengthSquared()}aabbQuery(t,e,i){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const bE=new E;new E;new Ne;new E;const wE={keys:[]},EE=[],TE=[];new E;new E;new E;class AE extends ME{constructor(){super()}collisionPairs(t,e,i){const s=t.bodies,r=s.length;let o,a;for(let l=0;l!==r;l++)for(let c=0;c!==l;c++)o=s[l],a=s[c],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,e,i)}aabbQuery(t,e,i){i===void 0&&(i=[]);for(let s=0;s<t.bodies.length;s++){const r=t.bodies[s];r.aabbNeedsUpdate&&r.updateAABB(),r.aabb.overlaps(e)&&i.push(r)}return i}}class wa{constructor(){this.rayFromWorld=new E,this.rayToWorld=new E,this.hitNormalWorld=new E,this.hitPointWorld=new E,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,i,s,r,o,a){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(i),this.hitPointWorld.copy(s),this.shape=r,this.body=o,this.distance=a}}let Zp,Jp,Qp,tm,em,nm,im;const Bu={CLOSEST:1,ANY:2,ALL:4};Zp=Vt.types.SPHERE;Jp=Vt.types.PLANE;Qp=Vt.types.BOX;tm=Vt.types.CYLINDER;em=Vt.types.CONVEXPOLYHEDRON;nm=Vt.types.HEIGHTFIELD;im=Vt.types.TRIMESH;class Ue{get[Zp](){return this._intersectSphere}get[Jp](){return this._intersectPlane}get[Qp](){return this._intersectBox}get[tm](){return this._intersectConvex}get[em](){return this._intersectConvex}get[nm](){return this._intersectHeightfield}get[im](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new E),e===void 0&&(e=new E),this.from=t.clone(),this.to=e.clone(),this.direction=new E,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=Ue.ANY,this.result=new wa,this.hasHit=!1,this.callback=i=>{}}intersectWorld(t,e){return this.mode=e.mode||Ue.ANY,this.result=e.result||new wa,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Bf),Bl.length=0,t.broadphase.aabbQuery(t,Bf,Bl),this.intersectBodies(Bl),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());const i=this.checkCollisionResponse;if(i&&!t.collisionResponse||!(this.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&this.collisionFilterMask))return;const s=CE,r=RE;for(let o=0,a=t.shapes.length;o<a;o++){const l=t.shapes[o];if(!(i&&!l.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[o],r),t.quaternion.vmult(t.shapeOffsets[o],s),s.vadd(t.position,s),this.intersectShape(l,r,s,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let i=0,s=t.length;!this.result.shouldStop&&i<s;i++)this.intersectBody(t[i])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,i,s){const r=this.from;if(HE(r,this.direction,i)>t.boundingSphereRadius)return;const a=this[t.type];a&&a.call(this,t,e,i,s,t)}_intersectBox(t,e,i,s,r){return this._intersectConvex(t.convexPolyhedronRepresentation,e,i,s,r)}_intersectPlane(t,e,i,s,r){const o=this.from,a=this.to,l=this.direction,c=new E(0,0,1);e.vmult(c,c);const u=new E;o.vsub(i,u);const f=u.dot(c);a.vsub(i,u);const h=u.dot(c);if(f*h>0||o.distanceTo(a)<f)return;const d=c.dot(l);if(Math.abs(d)<this.precision)return;const m=new E,v=new E,p=new E;o.vsub(i,m);const g=-c.dot(m)/d;l.scale(g,v),o.vadd(v,p),this.reportIntersection(c,p,r,s,-1)}getAABB(t){const{lowerBound:e,upperBound:i}=t,s=this.to,r=this.from;e.x=Math.min(s.x,r.x),e.y=Math.min(s.y,r.y),e.z=Math.min(s.z,r.z),i.x=Math.max(s.x,r.x),i.y=Math.max(s.y,r.y),i.z=Math.max(s.z,r.z)}_intersectHeightfield(t,e,i,s,r){t.data,t.elementSize;const o=PE;o.from.copy(this.from),o.to.copy(this.to),fe.pointToLocalFrame(i,e,o.from,o.from),fe.pointToLocalFrame(i,e,o.to,o.to),o.updateDirection();const a=IE;let l,c,u,f;l=c=0,u=f=t.data.length-1;const h=new xn;o.getAABB(h),t.getIndexOfPosition(h.lowerBound.x,h.lowerBound.y,a,!0),l=Math.max(l,a[0]),c=Math.max(c,a[1]),t.getIndexOfPosition(h.upperBound.x,h.upperBound.y,a,!0),u=Math.min(u,a[0]+1),f=Math.min(f,a[1]+1);for(let d=l;d<u;d++)for(let m=c;m<f;m++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(d,m,h),!!h.overlapsRay(o)){if(t.getConvexTrianglePillar(d,m,!1),fe.pointToWorldFrame(i,e,t.pillarOffset,$o),this._intersectConvex(t.pillarConvex,e,$o,s,r,zf),this.result.shouldStop)return;t.getConvexTrianglePillar(d,m,!0),fe.pointToWorldFrame(i,e,t.pillarOffset,$o),this._intersectConvex(t.pillarConvex,e,$o,s,r,zf)}}}_intersectSphere(t,e,i,s,r){const o=this.from,a=this.to,l=t.radius,c=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,u=2*((a.x-o.x)*(o.x-i.x)+(a.y-o.y)*(o.y-i.y)+(a.z-o.z)*(o.z-i.z)),f=(o.x-i.x)**2+(o.y-i.y)**2+(o.z-i.z)**2-l**2,h=u**2-4*c*f,d=LE,m=DE;if(!(h<0))if(h===0)o.lerp(a,h,d),d.vsub(i,m),m.normalize(),this.reportIntersection(m,d,r,s,-1);else{const v=(-u-Math.sqrt(h))/(2*c),p=(-u+Math.sqrt(h))/(2*c);if(v>=0&&v<=1&&(o.lerp(a,v,d),d.vsub(i,m),m.normalize(),this.reportIntersection(m,d,r,s,-1)),this.result.shouldStop)return;p>=0&&p<=1&&(o.lerp(a,p,d),d.vsub(i,m),m.normalize(),this.reportIntersection(m,d,r,s,-1))}}_intersectConvex(t,e,i,s,r,o){const a=NE,l=Vf,c=o&&o.faceList||null,u=t.faces,f=t.vertices,h=t.faceNormals,d=this.direction,m=this.from,v=this.to,p=m.distanceTo(v),g=c?c.length:u.length,x=this.result;for(let S=0;!x.shouldStop&&S<g;S++){const _=c?c[S]:S,M=u[_],b=h[_],C=e,F=i;l.copy(f[M[0]]),C.vmult(l,l),l.vadd(F,l),l.vsub(m,l),C.vmult(b,a);const w=d.dot(a);if(Math.abs(w)<this.precision)continue;const T=a.dot(l)/w;if(!(T<0)){d.scale(T,ln),ln.vadd(m,ln),Pn.copy(f[M[0]]),C.vmult(Pn,Pn),F.vadd(Pn,Pn);for(let L=1;!x.shouldStop&&L<M.length-1;L++){qn.copy(f[M[L]]),Xn.copy(f[M[L+1]]),C.vmult(qn,qn),C.vmult(Xn,Xn),F.vadd(qn,qn),F.vadd(Xn,Xn);const q=ln.distanceTo(m);!(Ue.pointInTriangle(ln,Pn,qn,Xn)||Ue.pointInTriangle(ln,qn,Pn,Xn))||q>p||this.reportIntersection(a,ln,r,s,_)}}}}_intersectTrimesh(t,e,i,s,r,o){const a=FE,l=kE,c=GE,u=Vf,f=UE,h=OE,d=BE,m=VE,v=zE,p=t.indices;t.vertices;const g=this.from,x=this.to,S=this.direction;c.position.copy(i),c.quaternion.copy(e),fe.vectorToLocalFrame(i,e,S,f),fe.pointToLocalFrame(i,e,g,h),fe.pointToLocalFrame(i,e,x,d),d.x*=t.scale.x,d.y*=t.scale.y,d.z*=t.scale.z,h.x*=t.scale.x,h.y*=t.scale.y,h.z*=t.scale.z,d.vsub(h,f),f.normalize();const _=h.distanceSquared(d);t.tree.rayQuery(this,c,l);for(let M=0,b=l.length;!this.result.shouldStop&&M!==b;M++){const C=l[M];t.getNormal(C,a),t.getVertex(p[C*3],Pn),Pn.vsub(h,u);const F=f.dot(a),w=a.dot(u)/F;if(w<0)continue;f.scale(w,ln),ln.vadd(h,ln),t.getVertex(p[C*3+1],qn),t.getVertex(p[C*3+2],Xn);const T=ln.distanceSquared(h);!(Ue.pointInTriangle(ln,qn,Pn,Xn)||Ue.pointInTriangle(ln,Pn,qn,Xn))||T>_||(fe.vectorToWorldFrame(e,a,v),fe.pointToWorldFrame(i,e,ln,m),this.reportIntersection(v,m,r,s,C))}l.length=0}reportIntersection(t,e,i,s,r){const o=this.from,a=this.to,l=o.distanceTo(e),c=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(c.hitFaceIndex=typeof r<"u"?r:-1,this.mode){case Ue.ALL:this.hasHit=!0,c.set(o,a,t,e,i,s,l),c.hasHit=!0,this.callback(c);break;case Ue.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(o,a,t,e,i,s,l));break;case Ue.ANY:this.hasHit=!0,c.hasHit=!0,c.set(o,a,t,e,i,s,l),c.shouldStop=!0;break}}static pointInTriangle(t,e,i,s){s.vsub(e,vs),i.vsub(e,Ir),t.vsub(e,zl);const r=vs.dot(vs),o=vs.dot(Ir),a=vs.dot(zl),l=Ir.dot(Ir),c=Ir.dot(zl);let u,f;return(u=l*a-o*c)>=0&&(f=r*c-o*a)>=0&&u+f<r*l-o*o}}Ue.CLOSEST=Bu.CLOSEST;Ue.ANY=Bu.ANY;Ue.ALL=Bu.ALL;const Bf=new xn,Bl=[],Ir=new E,zl=new E,CE=new E,RE=new Ne,ln=new E,Pn=new E,qn=new E,Xn=new E;new E;new wa;const zf={faceList:[0]},$o=new E,PE=new Ue,IE=[],LE=new E,DE=new E,NE=new E;new E;new E;const Vf=new E,FE=new E,UE=new E,OE=new E,BE=new E,zE=new E,VE=new E;new xn;const kE=[],GE=new fe,vs=new E,Yo=new E;function HE(n,t,e){e.vsub(n,vs);const i=vs.dot(t);return t.scale(i,Yo),Yo.vadd(n,Yo),e.distanceTo(Yo)}class WE{static defaults(t,e){t===void 0&&(t={});for(let i in e)i in t||(t[i]=e[i]);return t}}class kf{constructor(){this.spatial=new E,this.rotational=new E}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}}class _o{constructor(t,e,i,s){i===void 0&&(i=-1e6),s===void 0&&(s=1e6),this.id=_o.idCounter++,this.minForce=i,this.maxForce=s,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new kf,this.jacobianElementB=new kf,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,i){const s=e,r=t,o=i;this.a=4/(o*(1+4*s)),this.b=4*s/(1+4*s),this.eps=4/(o*o*r*(1+4*s))}computeB(t,e,i){const s=this.computeGW(),r=this.computeGq(),o=this.computeGiMf();return-r*t-s*e-o*i}computeGq(){const t=this.jacobianElementA,e=this.jacobianElementB,i=this.bi,s=this.bj,r=i.position,o=s.position;return t.spatial.dot(r)+e.spatial.dot(o)}computeGW(){const t=this.jacobianElementA,e=this.jacobianElementB,i=this.bi,s=this.bj,r=i.velocity,o=s.velocity,a=i.angularVelocity,l=s.angularVelocity;return t.multiplyVectors(r,a)+e.multiplyVectors(o,l)}computeGWlambda(){const t=this.jacobianElementA,e=this.jacobianElementB,i=this.bi,s=this.bj,r=i.vlambda,o=s.vlambda,a=i.wlambda,l=s.wlambda;return t.multiplyVectors(r,a)+e.multiplyVectors(o,l)}computeGiMf(){const t=this.jacobianElementA,e=this.jacobianElementB,i=this.bi,s=this.bj,r=i.force,o=i.torque,a=s.force,l=s.torque,c=i.invMassSolve,u=s.invMassSolve;return r.scale(c,Gf),a.scale(u,Hf),i.invInertiaWorldSolve.vmult(o,Wf),s.invInertiaWorldSolve.vmult(l,qf),t.multiplyVectors(Gf,Wf)+e.multiplyVectors(Hf,qf)}computeGiMGt(){const t=this.jacobianElementA,e=this.jacobianElementB,i=this.bi,s=this.bj,r=i.invMassSolve,o=s.invMassSolve,a=i.invInertiaWorldSolve,l=s.invInertiaWorldSolve;let c=r+o;return a.vmult(t.rotational,jo),c+=jo.dot(t.rotational),l.vmult(e.rotational,jo),c+=jo.dot(e.rotational),c}addToWlambda(t){const e=this.jacobianElementA,i=this.jacobianElementB,s=this.bi,r=this.bj,o=qE;s.vlambda.addScaledVector(s.invMassSolve*t,e.spatial,s.vlambda),r.vlambda.addScaledVector(r.invMassSolve*t,i.spatial,r.vlambda),s.invInertiaWorldSolve.vmult(e.rotational,o),s.wlambda.addScaledVector(t,o,s.wlambda),r.invInertiaWorldSolve.vmult(i.rotational,o),r.wlambda.addScaledVector(t,o,r.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}_o.idCounter=0;const Gf=new E,Hf=new E,Wf=new E,qf=new E,jo=new E,qE=new E;class XE extends _o{constructor(t,e,i){i===void 0&&(i=1e6),super(t,e,0,i),this.restitution=0,this.ri=new E,this.rj=new E,this.ni=new E}computeB(t){const e=this.a,i=this.b,s=this.bi,r=this.bj,o=this.ri,a=this.rj,l=$E,c=YE,u=s.velocity,f=s.angularVelocity;s.force,s.torque;const h=r.velocity,d=r.angularVelocity;r.force,r.torque;const m=jE,v=this.jacobianElementA,p=this.jacobianElementB,g=this.ni;o.cross(g,l),a.cross(g,c),g.negate(v.spatial),l.negate(v.rotational),p.spatial.copy(g),p.rotational.copy(c),m.copy(r.position),m.vadd(a,m),m.vsub(s.position,m),m.vsub(o,m);const x=g.dot(m),S=this.restitution+1,_=S*h.dot(g)-S*u.dot(g)+d.dot(c)-f.dot(l),M=this.computeGiMf();return-x*e-_*i-t*M}getImpactVelocityAlongNormal(){const t=KE,e=ZE,i=JE,s=QE,r=tT;return this.bi.position.vadd(this.ri,i),this.bj.position.vadd(this.rj,s),this.bi.getVelocityAtWorldPoint(i,t),this.bj.getVelocityAtWorldPoint(s,e),t.vsub(e,r),this.ni.dot(r)}}const $E=new E,YE=new E,jE=new E,KE=new E,ZE=new E,JE=new E,QE=new E,tT=new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;class Xf extends _o{constructor(t,e,i){super(t,e,-i,i),this.ri=new E,this.rj=new E,this.t=new E}computeB(t){this.a;const e=this.b;this.bi,this.bj;const i=this.ri,s=this.rj,r=eT,o=nT,a=this.t;i.cross(a,r),s.cross(a,o);const l=this.jacobianElementA,c=this.jacobianElementB;a.negate(l.spatial),r.negate(l.rotational),c.spatial.copy(a),c.rotational.copy(o);const u=this.computeGW(),f=this.computeGiMf();return-u*e-t*f}}const eT=new E,nT=new E;class bs{constructor(t,e,i){i=WE.defaults(i,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=bs.idCounter++,this.materials=[t,e],this.friction=i.friction,this.restitution=i.restitution,this.contactEquationStiffness=i.contactEquationStiffness,this.contactEquationRelaxation=i.contactEquationRelaxation,this.frictionEquationStiffness=i.frictionEquationStiffness,this.frictionEquationRelaxation=i.frictionEquationRelaxation}}bs.idCounter=0;class ws{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=ws.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}}ws.idCounter=0;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new Ue;new E;new E;new E;new E(1,0,0),new E(0,1,0),new E(0,0,1);new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;class iT extends Vt{constructor(){super({type:Vt.types.PLANE}),this.worldNormal=new E,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(t){const e=this.worldNormal;e.set(0,0,1),t.vmult(e,e),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(t,e){return e===void 0&&(e=new E),e}volume(){return Number.MAX_VALUE}calculateWorldAABB(t,e,i,s){_i.set(0,0,1),e.vmult(_i,_i);const r=Number.MAX_VALUE;i.set(-r,-r,-r),s.set(r,r,r),_i.x===1?s.x=t.x:_i.x===-1&&(i.x=t.x),_i.y===1?s.y=t.y:_i.y===-1&&(i.y=t.y),_i.z===1?s.z=t.z:_i.z===-1&&(i.z=t.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}}const _i=new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new xn;new E;new xn;new E;new E;new E;new E;new E;new E;new E;new xn;new E;new fe;new xn;class sT{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){const e=this.equations,i=e.indexOf(t);i!==-1&&e.splice(i,1)}removeAllEquations(){this.equations.length=0}}class sm extends sT{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let i=0;const s=this.iterations,r=this.tolerance*this.tolerance,o=this.equations,a=o.length,l=e.bodies,c=l.length,u=t;let f,h,d,m,v,p;if(a!==0)for(let _=0;_!==c;_++)l[_].updateSolveMassProperties();const g=oT,x=aT,S=rT;g.length=a,x.length=a,S.length=a;for(let _=0;_!==a;_++){const M=o[_];S[_]=0,x[_]=M.computeB(u),g[_]=1/M.computeC()}if(a!==0){for(let b=0;b!==c;b++){const C=l[b],F=C.vlambda,w=C.wlambda;F.set(0,0,0),w.set(0,0,0)}for(i=0;i!==s;i++){m=0;for(let b=0;b!==a;b++){const C=o[b];f=x[b],h=g[b],p=S[b],v=C.computeGWlambda(),d=h*(f-v-C.eps*p),p+d<C.minForce?d=C.minForce-p:p+d>C.maxForce&&(d=C.maxForce-p),S[b]+=d,m+=d>0?d:-d,C.addToWlambda(d)}if(m*m<r)break}for(let b=0;b!==c;b++){const C=l[b],F=C.velocity,w=C.angularVelocity;C.vlambda.vmul(C.linearFactor,C.vlambda),F.vadd(C.vlambda,F),C.wlambda.vmul(C.angularFactor,C.wlambda),w.vadd(C.wlambda,w)}let _=o.length;const M=1/u;for(;_--;)o[_].multiplier=S[_]*M}return i}}const rT=[],oT=[],aT=[];class lT{constructor(){this.objects=[],this.type=Object}release(){const t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){const e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}}class cT extends lT{constructor(){super(...arguments),this.type=E}constructObject(){return new E}}const Ae={sphereSphere:Vt.types.SPHERE,spherePlane:Vt.types.SPHERE|Vt.types.PLANE,boxBox:Vt.types.BOX|Vt.types.BOX,sphereBox:Vt.types.SPHERE|Vt.types.BOX,planeBox:Vt.types.PLANE|Vt.types.BOX,convexConvex:Vt.types.CONVEXPOLYHEDRON,sphereConvex:Vt.types.SPHERE|Vt.types.CONVEXPOLYHEDRON,planeConvex:Vt.types.PLANE|Vt.types.CONVEXPOLYHEDRON,boxConvex:Vt.types.BOX|Vt.types.CONVEXPOLYHEDRON,sphereHeightfield:Vt.types.SPHERE|Vt.types.HEIGHTFIELD,boxHeightfield:Vt.types.BOX|Vt.types.HEIGHTFIELD,convexHeightfield:Vt.types.CONVEXPOLYHEDRON|Vt.types.HEIGHTFIELD,sphereParticle:Vt.types.PARTICLE|Vt.types.SPHERE,planeParticle:Vt.types.PLANE|Vt.types.PARTICLE,boxParticle:Vt.types.BOX|Vt.types.PARTICLE,convexParticle:Vt.types.PARTICLE|Vt.types.CONVEXPOLYHEDRON,cylinderCylinder:Vt.types.CYLINDER,sphereCylinder:Vt.types.SPHERE|Vt.types.CYLINDER,planeCylinder:Vt.types.PLANE|Vt.types.CYLINDER,boxCylinder:Vt.types.BOX|Vt.types.CYLINDER,convexCylinder:Vt.types.CONVEXPOLYHEDRON|Vt.types.CYLINDER,heightfieldCylinder:Vt.types.HEIGHTFIELD|Vt.types.CYLINDER,particleCylinder:Vt.types.PARTICLE|Vt.types.CYLINDER,sphereTrimesh:Vt.types.SPHERE|Vt.types.TRIMESH,planeTrimesh:Vt.types.PLANE|Vt.types.TRIMESH};class uT{get[Ae.sphereSphere](){return this.sphereSphere}get[Ae.spherePlane](){return this.spherePlane}get[Ae.boxBox](){return this.boxBox}get[Ae.sphereBox](){return this.sphereBox}get[Ae.planeBox](){return this.planeBox}get[Ae.convexConvex](){return this.convexConvex}get[Ae.sphereConvex](){return this.sphereConvex}get[Ae.planeConvex](){return this.planeConvex}get[Ae.boxConvex](){return this.boxConvex}get[Ae.sphereHeightfield](){return this.sphereHeightfield}get[Ae.boxHeightfield](){return this.boxHeightfield}get[Ae.convexHeightfield](){return this.convexHeightfield}get[Ae.sphereParticle](){return this.sphereParticle}get[Ae.planeParticle](){return this.planeParticle}get[Ae.boxParticle](){return this.boxParticle}get[Ae.convexParticle](){return this.convexParticle}get[Ae.cylinderCylinder](){return this.convexConvex}get[Ae.sphereCylinder](){return this.sphereConvex}get[Ae.planeCylinder](){return this.planeConvex}get[Ae.boxCylinder](){return this.boxConvex}get[Ae.convexCylinder](){return this.convexConvex}get[Ae.heightfieldCylinder](){return this.heightfieldCylinder}get[Ae.particleCylinder](){return this.particleCylinder}get[Ae.sphereTrimesh](){return this.sphereTrimesh}get[Ae.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new cT,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,i,s,r,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=t,a.bj=e):a=new XE(t,e),a.enabled=t.collisionResponse&&e.collisionResponse&&i.collisionResponse&&s.collisionResponse;const l=this.currentContactMaterial;a.restitution=l.restitution,a.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);const c=i.material||t.material,u=s.material||e.material;return c&&u&&c.restitution>=0&&u.restitution>=0&&(a.restitution=c.restitution*u.restitution),a.si=r||i,a.sj=o||s,a}createFrictionEquationsFromContact(t,e){const i=t.bi,s=t.bj,r=t.si,o=t.sj,a=this.world,l=this.currentContactMaterial;let c=l.friction;const u=r.material||i.material,f=o.material||s.material;if(u&&f&&u.friction>=0&&f.friction>=0&&(c=u.friction*f.friction),c>0){const h=c*(a.frictionGravity||a.gravity).length();let d=i.invMass+s.invMass;d>0&&(d=1/d);const m=this.frictionEquationPool,v=m.length?m.pop():new Xf(i,s,h*d),p=m.length?m.pop():new Xf(i,s,h*d);return v.bi=p.bi=i,v.bj=p.bj=s,v.minForce=p.minForce=-h*d,v.maxForce=p.maxForce=h*d,v.ri.copy(t.ri),v.rj.copy(t.rj),p.ri.copy(t.ri),p.rj.copy(t.rj),t.ni.tangents(v.t,p.t),v.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),p.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),v.enabled=p.enabled=t.enabled,e.push(v,p),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;const i=this.frictionResult[this.frictionResult.length-2],s=this.frictionResult[this.frictionResult.length-1];fs.setZero(),Xs.setZero(),$s.setZero();const r=e.bi;e.bj;for(let a=0;a!==t;a++)e=this.result[this.result.length-1-a],e.bi!==r?(fs.vadd(e.ni,fs),Xs.vadd(e.ri,Xs),$s.vadd(e.rj,$s)):(fs.vsub(e.ni,fs),Xs.vadd(e.rj,Xs),$s.vadd(e.ri,$s));const o=1/t;Xs.scale(o,i.ri),$s.scale(o,i.rj),s.ri.copy(i.ri),s.rj.copy(i.rj),fs.normalize(),fs.tangents(i.t,s.t)}getContacts(t,e,i,s,r,o,a){this.contactPointPool=r,this.frictionEquationPool=a,this.result=s,this.frictionResult=o;const l=dT,c=pT,u=hT,f=fT;for(let h=0,d=t.length;h!==d;h++){const m=t[h],v=e[h];let p=null;m.material&&v.material&&(p=i.getContactMaterial(m.material,v.material)||null);const g=m.type&Ft.KINEMATIC&&v.type&Ft.STATIC||m.type&Ft.STATIC&&v.type&Ft.KINEMATIC||m.type&Ft.KINEMATIC&&v.type&Ft.KINEMATIC;for(let x=0;x<m.shapes.length;x++){m.quaternion.mult(m.shapeOrientations[x],l),m.quaternion.vmult(m.shapeOffsets[x],u),u.vadd(m.position,u);const S=m.shapes[x];for(let _=0;_<v.shapes.length;_++){v.quaternion.mult(v.shapeOrientations[_],c),v.quaternion.vmult(v.shapeOffsets[_],f),f.vadd(v.position,f);const M=v.shapes[_];if(!(S.collisionFilterMask&M.collisionFilterGroup&&M.collisionFilterMask&S.collisionFilterGroup)||u.distanceTo(f)>S.boundingSphereRadius+M.boundingSphereRadius)continue;let b=null;S.material&&M.material&&(b=i.getContactMaterial(S.material,M.material)||null),this.currentContactMaterial=b||p||i.defaultContactMaterial;const C=S.type|M.type,F=this[C];if(F){let w=!1;S.type<M.type?w=F.call(this,S,M,u,f,l,c,m,v,S,M,g):w=F.call(this,M,S,f,u,c,l,v,m,S,M,g),w&&g&&(i.shapeOverlapKeeper.set(S.id,M.id),i.bodyOverlapKeeper.set(m.id,v.id))}}}}}sphereSphere(t,e,i,s,r,o,a,l,c,u,f){if(f)return i.distanceSquared(s)<(t.radius+e.radius)**2;const h=this.createContactEquation(a,l,t,e,c,u);s.vsub(i,h.ni),h.ni.normalize(),h.ri.copy(h.ni),h.rj.copy(h.ni),h.ri.scale(t.radius,h.ri),h.rj.scale(-e.radius,h.rj),h.ri.vadd(i,h.ri),h.ri.vsub(a.position,h.ri),h.rj.vadd(s,h.rj),h.rj.vsub(l.position,h.rj),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}spherePlane(t,e,i,s,r,o,a,l,c,u,f){const h=this.createContactEquation(a,l,t,e,c,u);if(h.ni.set(0,0,1),o.vmult(h.ni,h.ni),h.ni.negate(h.ni),h.ni.normalize(),h.ni.scale(t.radius,h.ri),i.vsub(s,Ko),h.ni.scale(h.ni.dot(Ko),$f),Ko.vsub($f,h.rj),-Ko.dot(h.ni)<=t.radius){if(f)return!0;const d=h.ri,m=h.rj;d.vadd(i,d),d.vsub(a.position,d),m.vadd(s,m),m.vsub(l.position,m),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}}boxBox(t,e,i,s,r,o,a,l,c,u,f){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,i,s,r,o,a,l,t,e,f)}sphereBox(t,e,i,s,r,o,a,l,c,u,f){const h=this.v3pool,d=VT;i.vsub(s,Zo),e.getSideNormals(d,o);const m=t.radius;let v=!1;const p=GT,g=HT,x=WT;let S=null,_=0,M=0,b=0,C=null;for(let U=0,W=d.length;U!==W&&v===!1;U++){const j=OT;j.copy(d[U]);const ft=j.length();j.normalize();const lt=Zo.dot(j);if(lt<ft+m&&lt>0){const dt=BT,_t=zT;dt.copy(d[(U+1)%3]),_t.copy(d[(U+2)%3]);const Ut=dt.length(),zt=_t.length();dt.normalize(),_t.normalize();const $t=Zo.dot(dt),G=Zo.dot(_t);if($t<Ut&&$t>-Ut&&G<zt&&G>-zt){const z=Math.abs(lt-ft-m);if((C===null||z<C)&&(C=z,M=$t,b=G,S=ft,p.copy(j),g.copy(dt),x.copy(_t),_++,f))return!0}}}if(_){v=!0;const U=this.createContactEquation(a,l,t,e,c,u);p.scale(-m,U.ri),U.ni.copy(p),U.ni.negate(U.ni),p.scale(S,p),g.scale(M,g),p.vadd(g,p),x.scale(b,x),p.vadd(x,U.rj),U.ri.vadd(i,U.ri),U.ri.vsub(a.position,U.ri),U.rj.vadd(s,U.rj),U.rj.vsub(l.position,U.rj),this.result.push(U),this.createFrictionEquationsFromContact(U,this.frictionResult)}let F=h.get();const w=kT;for(let U=0;U!==2&&!v;U++)for(let W=0;W!==2&&!v;W++)for(let j=0;j!==2&&!v;j++)if(F.set(0,0,0),U?F.vadd(d[0],F):F.vsub(d[0],F),W?F.vadd(d[1],F):F.vsub(d[1],F),j?F.vadd(d[2],F):F.vsub(d[2],F),s.vadd(F,w),w.vsub(i,w),w.lengthSquared()<m*m){if(f)return!0;v=!0;const ft=this.createContactEquation(a,l,t,e,c,u);ft.ri.copy(w),ft.ri.normalize(),ft.ni.copy(ft.ri),ft.ri.scale(m,ft.ri),ft.rj.copy(F),ft.ri.vadd(i,ft.ri),ft.ri.vsub(a.position,ft.ri),ft.rj.vadd(s,ft.rj),ft.rj.vsub(l.position,ft.rj),this.result.push(ft),this.createFrictionEquationsFromContact(ft,this.frictionResult)}h.release(F),F=null;const T=h.get(),L=h.get(),q=h.get(),O=h.get(),X=h.get(),V=d.length;for(let U=0;U!==V&&!v;U++)for(let W=0;W!==V&&!v;W++)if(U%3!==W%3){d[W].cross(d[U],T),T.normalize(),d[U].vadd(d[W],L),q.copy(i),q.vsub(L,q),q.vsub(s,q);const j=q.dot(T);T.scale(j,O);let ft=0;for(;ft===U%3||ft===W%3;)ft++;X.copy(i),X.vsub(O,X),X.vsub(L,X),X.vsub(s,X);const lt=Math.abs(j),dt=X.length();if(lt<d[ft].length()&&dt<m){if(f)return!0;v=!0;const _t=this.createContactEquation(a,l,t,e,c,u);L.vadd(O,_t.rj),_t.rj.copy(_t.rj),X.negate(_t.ni),_t.ni.normalize(),_t.ri.copy(_t.rj),_t.ri.vadd(s,_t.ri),_t.ri.vsub(i,_t.ri),_t.ri.normalize(),_t.ri.scale(m,_t.ri),_t.ri.vadd(i,_t.ri),_t.ri.vsub(a.position,_t.ri),_t.rj.vadd(s,_t.rj),_t.rj.vsub(l.position,_t.rj),this.result.push(_t),this.createFrictionEquationsFromContact(_t,this.frictionResult)}}h.release(T,L,q,O,X)}planeBox(t,e,i,s,r,o,a,l,c,u,f){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,i,s,r,o,a,l,t,e,f)}convexConvex(t,e,i,s,r,o,a,l,c,u,f,h,d){const m=r1;if(!(i.distanceTo(s)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,i,r,s,o,m,h,d)){const v=[],p=o1;t.clipAgainstHull(i,r,e,s,o,m,-100,100,v);let g=0;for(let x=0;x!==v.length;x++){if(f)return!0;const S=this.createContactEquation(a,l,t,e,c,u),_=S.ri,M=S.rj;m.negate(S.ni),v[x].normal.negate(p),p.scale(v[x].depth,p),v[x].point.vadd(p,_),M.copy(v[x].point),_.vsub(i,_),M.vsub(s,M),_.vadd(i,_),_.vsub(a.position,_),M.vadd(s,M),M.vsub(l.position,M),this.result.push(S),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(S,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}}sphereConvex(t,e,i,s,r,o,a,l,c,u,f){const h=this.v3pool;i.vsub(s,qT);const d=e.faceNormals,m=e.faces,v=e.vertices,p=t.radius;let g=!1;for(let x=0;x!==v.length;x++){const S=v[x],_=jT;o.vmult(S,_),s.vadd(_,_);const M=YT;if(_.vsub(i,M),M.lengthSquared()<p*p){if(f)return!0;g=!0;const b=this.createContactEquation(a,l,t,e,c,u);b.ri.copy(M),b.ri.normalize(),b.ni.copy(b.ri),b.ri.scale(p,b.ri),_.vsub(s,b.rj),b.ri.vadd(i,b.ri),b.ri.vsub(a.position,b.ri),b.rj.vadd(s,b.rj),b.rj.vsub(l.position,b.rj),this.result.push(b),this.createFrictionEquationsFromContact(b,this.frictionResult);return}}for(let x=0,S=m.length;x!==S&&g===!1;x++){const _=d[x],M=m[x],b=KT;o.vmult(_,b);const C=ZT;o.vmult(v[M[0]],C),C.vadd(s,C);const F=JT;b.scale(-p,F),i.vadd(F,F);const w=QT;F.vsub(C,w);const T=w.dot(b),L=t1;if(i.vsub(C,L),T<0&&L.dot(b)>0){const q=[];for(let O=0,X=M.length;O!==X;O++){const V=h.get();o.vmult(v[M[O]],V),s.vadd(V,V),q.push(V)}if(UT(q,b,i)){if(f)return!0;g=!0;const O=this.createContactEquation(a,l,t,e,c,u);b.scale(-p,O.ri),b.negate(O.ni);const X=h.get();b.scale(-T,X);const V=h.get();b.scale(-p,V),i.vsub(s,O.rj),O.rj.vadd(V,O.rj),O.rj.vadd(X,O.rj),O.rj.vadd(s,O.rj),O.rj.vsub(l.position,O.rj),O.ri.vadd(i,O.ri),O.ri.vsub(a.position,O.ri),h.release(X),h.release(V),this.result.push(O),this.createFrictionEquationsFromContact(O,this.frictionResult);for(let U=0,W=q.length;U!==W;U++)h.release(q[U]);return}else for(let O=0;O!==M.length;O++){const X=h.get(),V=h.get();o.vmult(v[M[(O+1)%M.length]],X),o.vmult(v[M[(O+2)%M.length]],V),s.vadd(X,X),s.vadd(V,V);const U=XT;V.vsub(X,U);const W=$T;U.unit(W);const j=h.get(),ft=h.get();i.vsub(X,ft);const lt=ft.dot(W);W.scale(lt,j),j.vadd(X,j);const dt=h.get();if(j.vsub(i,dt),lt>0&&lt*lt<U.lengthSquared()&&dt.lengthSquared()<p*p){if(f)return!0;const _t=this.createContactEquation(a,l,t,e,c,u);j.vsub(s,_t.rj),j.vsub(i,_t.ni),_t.ni.normalize(),_t.ni.scale(p,_t.ri),_t.rj.vadd(s,_t.rj),_t.rj.vsub(l.position,_t.rj),_t.ri.vadd(i,_t.ri),_t.ri.vsub(a.position,_t.ri),this.result.push(_t),this.createFrictionEquationsFromContact(_t,this.frictionResult);for(let Ut=0,zt=q.length;Ut!==zt;Ut++)h.release(q[Ut]);h.release(X),h.release(V),h.release(j),h.release(dt),h.release(ft);return}h.release(X),h.release(V),h.release(j),h.release(dt),h.release(ft)}for(let O=0,X=q.length;O!==X;O++)h.release(q[O])}}}planeConvex(t,e,i,s,r,o,a,l,c,u,f){const h=e1,d=n1;d.set(0,0,1),r.vmult(d,d);let m=0;const v=i1;for(let p=0;p!==e.vertices.length;p++)if(h.copy(e.vertices[p]),o.vmult(h,h),s.vadd(h,h),h.vsub(i,v),d.dot(v)<=0){if(f)return!0;const x=this.createContactEquation(a,l,t,e,c,u),S=s1;d.scale(d.dot(v),S),h.vsub(S,S),S.vsub(i,x.ri),x.ni.copy(d),h.vsub(s,x.rj),x.ri.vadd(i,x.ri),x.ri.vsub(a.position,x.ri),x.rj.vadd(s,x.rj),x.rj.vsub(l.position,x.rj),this.result.push(x),m++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(x,this.frictionResult)}this.enableFrictionReduction&&m&&this.createFrictionFromAverage(m)}boxConvex(t,e,i,s,r,o,a,l,c,u,f){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,i,s,r,o,a,l,t,e,f)}sphereHeightfield(t,e,i,s,r,o,a,l,c,u,f){const h=e.data,d=t.radius,m=e.elementSize,v=_1,p=v1;fe.pointToLocalFrame(s,o,i,p);let g=Math.floor((p.x-d)/m)-1,x=Math.ceil((p.x+d)/m)+1,S=Math.floor((p.y-d)/m)-1,_=Math.ceil((p.y+d)/m)+1;if(x<0||_<0||g>h.length||S>h[0].length)return;g<0&&(g=0),x<0&&(x=0),S<0&&(S=0),_<0&&(_=0),g>=h.length&&(g=h.length-1),x>=h.length&&(x=h.length-1),_>=h[0].length&&(_=h[0].length-1),S>=h[0].length&&(S=h[0].length-1);const M=[];e.getRectMinMax(g,S,x,_,M);const b=M[0],C=M[1];if(p.z-d>C||p.z+d<b)return;const F=this.result;for(let w=g;w<x;w++)for(let T=S;T<_;T++){const L=F.length;let q=!1;if(e.getConvexTrianglePillar(w,T,!1),fe.pointToWorldFrame(s,o,e.pillarOffset,v),i.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(q=this.sphereConvex(t,e.pillarConvex,i,v,r,o,a,l,t,e,f)),f&&q||(e.getConvexTrianglePillar(w,T,!0),fe.pointToWorldFrame(s,o,e.pillarOffset,v),i.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(q=this.sphereConvex(t,e.pillarConvex,i,v,r,o,a,l,t,e,f)),f&&q))return!0;if(F.length-L>2)return}}boxHeightfield(t,e,i,s,r,o,a,l,c,u,f){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,i,s,r,o,a,l,t,e,f)}convexHeightfield(t,e,i,s,r,o,a,l,c,u,f){const h=e.data,d=e.elementSize,m=t.boundingSphereRadius,v=m1,p=g1,g=p1;fe.pointToLocalFrame(s,o,i,g);let x=Math.floor((g.x-m)/d)-1,S=Math.ceil((g.x+m)/d)+1,_=Math.floor((g.y-m)/d)-1,M=Math.ceil((g.y+m)/d)+1;if(S<0||M<0||x>h.length||_>h[0].length)return;x<0&&(x=0),S<0&&(S=0),_<0&&(_=0),M<0&&(M=0),x>=h.length&&(x=h.length-1),S>=h.length&&(S=h.length-1),M>=h[0].length&&(M=h[0].length-1),_>=h[0].length&&(_=h[0].length-1);const b=[];e.getRectMinMax(x,_,S,M,b);const C=b[0],F=b[1];if(!(g.z-m>F||g.z+m<C))for(let w=x;w<S;w++)for(let T=_;T<M;T++){let L=!1;if(e.getConvexTrianglePillar(w,T,!1),fe.pointToWorldFrame(s,o,e.pillarOffset,v),i.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(L=this.convexConvex(t,e.pillarConvex,i,v,r,o,a,l,null,null,f,p,null)),f&&L||(e.getConvexTrianglePillar(w,T,!0),fe.pointToWorldFrame(s,o,e.pillarOffset,v),i.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(L=this.convexConvex(t,e.pillarConvex,i,v,r,o,a,l,null,null,f,p,null)),f&&L))return!0}}sphereParticle(t,e,i,s,r,o,a,l,c,u,f){const h=u1;if(h.set(0,0,1),s.vsub(i,h),h.lengthSquared()<=t.radius*t.radius){if(f)return!0;const m=this.createContactEquation(l,a,e,t,c,u);h.normalize(),m.rj.copy(h),m.rj.scale(t.radius,m.rj),m.ni.copy(h),m.ni.negate(m.ni),m.ri.set(0,0,0),this.result.push(m),this.createFrictionEquationsFromContact(m,this.frictionResult)}}planeParticle(t,e,i,s,r,o,a,l,c,u,f){const h=a1;h.set(0,0,1),a.quaternion.vmult(h,h);const d=l1;if(s.vsub(a.position,d),h.dot(d)<=0){if(f)return!0;const v=this.createContactEquation(l,a,e,t,c,u);v.ni.copy(h),v.ni.negate(v.ni),v.ri.set(0,0,0);const p=c1;h.scale(h.dot(s),p),s.vsub(p,p),v.rj.copy(p),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}boxParticle(t,e,i,s,r,o,a,l,c,u,f){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,i,s,r,o,a,l,t,e,f)}convexParticle(t,e,i,s,r,o,a,l,c,u,f){let h=-1;const d=f1,m=d1;let v=null;const p=h1;if(p.copy(s),p.vsub(i,p),r.conjugate(Yf),Yf.vmult(p,p),t.pointIsInside(p)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(i,r),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(r);for(let g=0,x=t.faces.length;g!==x;g++){const S=[t.worldVertices[t.faces[g][0]]],_=t.worldFaceNormals[g];s.vsub(S[0],jf);const M=-_.dot(jf);if(v===null||Math.abs(M)<Math.abs(v)){if(f)return!0;v=M,h=g,d.copy(_)}}if(h!==-1){const g=this.createContactEquation(l,a,e,t,c,u);d.scale(v,m),m.vadd(s,m),m.vsub(i,m),g.rj.copy(m),d.negate(g.ni),g.ri.set(0,0,0);const x=g.ri,S=g.rj;x.vadd(s,x),x.vsub(l.position,x),S.vadd(i,S),S.vsub(a.position,S),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,i,s,r,o,a,l,c,u,f){return this.convexHeightfield(e,t,s,i,o,r,l,a,c,u,f)}particleCylinder(t,e,i,s,r,o,a,l,c,u,f){return this.convexParticle(e,t,s,i,o,r,l,a,c,u,f)}sphereTrimesh(t,e,i,s,r,o,a,l,c,u,f){const h=MT,d=bT,m=wT,v=ET,p=TT,g=AT,x=IT,S=ST,_=xT,M=LT;fe.pointToLocalFrame(s,o,i,p);const b=t.radius;x.lowerBound.set(p.x-b,p.y-b,p.z-b),x.upperBound.set(p.x+b,p.y+b,p.z+b),e.getTrianglesInAABB(x,M);const C=yT,F=t.radius*t.radius;for(let O=0;O<M.length;O++)for(let X=0;X<3;X++)if(e.getVertex(e.indices[M[O]*3+X],C),C.vsub(p,_),_.lengthSquared()<=F){if(S.copy(C),fe.pointToWorldFrame(s,o,S,C),C.vsub(i,_),f)return!0;let V=this.createContactEquation(a,l,t,e,c,u);V.ni.copy(_),V.ni.normalize(),V.ri.copy(V.ni),V.ri.scale(t.radius,V.ri),V.ri.vadd(i,V.ri),V.ri.vsub(a.position,V.ri),V.rj.copy(C),V.rj.vsub(l.position,V.rj),this.result.push(V),this.createFrictionEquationsFromContact(V,this.frictionResult)}for(let O=0;O<M.length;O++)for(let X=0;X<3;X++){e.getVertex(e.indices[M[O]*3+X],h),e.getVertex(e.indices[M[O]*3+(X+1)%3],d),d.vsub(h,m),p.vsub(d,g);const V=g.dot(m);p.vsub(h,g);let U=g.dot(m);if(U>0&&V<0&&(p.vsub(h,g),v.copy(m),v.normalize(),U=g.dot(v),v.scale(U,g),g.vadd(h,g),g.distanceTo(p)<t.radius)){if(f)return!0;const j=this.createContactEquation(a,l,t,e,c,u);g.vsub(p,j.ni),j.ni.normalize(),j.ni.scale(t.radius,j.ri),j.ri.vadd(i,j.ri),j.ri.vsub(a.position,j.ri),fe.pointToWorldFrame(s,o,g,g),g.vsub(l.position,j.rj),fe.vectorToWorldFrame(o,j.ni,j.ni),fe.vectorToWorldFrame(o,j.ri,j.ri),this.result.push(j),this.createFrictionEquationsFromContact(j,this.frictionResult)}}const w=CT,T=RT,L=PT,q=_T;for(let O=0,X=M.length;O!==X;O++){e.getTriangleVertices(M[O],w,T,L),e.getNormal(M[O],q),p.vsub(w,g);let V=g.dot(q);if(q.scale(V,g),p.vsub(g,g),V=g.distanceTo(p),Ue.pointInTriangle(g,w,T,L)&&V<t.radius){if(f)return!0;let U=this.createContactEquation(a,l,t,e,c,u);g.vsub(p,U.ni),U.ni.normalize(),U.ni.scale(t.radius,U.ri),U.ri.vadd(i,U.ri),U.ri.vsub(a.position,U.ri),fe.pointToWorldFrame(s,o,g,g),g.vsub(l.position,U.rj),fe.vectorToWorldFrame(o,U.ni,U.ni),fe.vectorToWorldFrame(o,U.ri,U.ri),this.result.push(U),this.createFrictionEquationsFromContact(U,this.frictionResult)}}M.length=0}planeTrimesh(t,e,i,s,r,o,a,l,c,u,f){const h=new E,d=mT;d.set(0,0,1),r.vmult(d,d);for(let m=0;m<e.vertices.length/3;m++){e.getVertex(m,h);const v=new E;v.copy(h),fe.pointToWorldFrame(s,o,v,h);const p=gT;if(h.vsub(i,p),d.dot(p)<=0){if(f)return!0;const x=this.createContactEquation(a,l,t,e,c,u);x.ni.copy(d);const S=vT;d.scale(p.dot(d),S),h.vsub(S,S),x.ri.copy(S),x.ri.vsub(a.position,x.ri),x.rj.copy(h),x.rj.vsub(l.position,x.rj),this.result.push(x),this.createFrictionEquationsFromContact(x,this.frictionResult)}}}}const fs=new E,Xs=new E,$s=new E,hT=new E,fT=new E,dT=new Ne,pT=new Ne,mT=new E,gT=new E,vT=new E,_T=new E,xT=new E;new E;const yT=new E,ST=new E,MT=new E,bT=new E,wT=new E,ET=new E,TT=new E,AT=new E,CT=new E,RT=new E,PT=new E,IT=new xn,LT=[],Ko=new E,$f=new E,DT=new E,NT=new E,FT=new E;function UT(n,t,e){let i=null;const s=n.length;for(let r=0;r!==s;r++){const o=n[r],a=DT;n[(r+1)%s].vsub(o,a);const l=NT;a.cross(t,l);const c=FT;e.vsub(o,c);const u=l.dot(c);if(i===null||u>0&&i===!0||u<=0&&i===!1){i===null&&(i=u>0);continue}else return!1}return!0}const Zo=new E,OT=new E,BT=new E,zT=new E,VT=[new E,new E,new E,new E,new E,new E],kT=new E,GT=new E,HT=new E,WT=new E,qT=new E,XT=new E,$T=new E,YT=new E,jT=new E,KT=new E,ZT=new E,JT=new E,QT=new E,t1=new E;new E;new E;const e1=new E,n1=new E,i1=new E,s1=new E,r1=new E,o1=new E,a1=new E,l1=new E,c1=new E,u1=new E,Yf=new Ne,h1=new E;new E;const f1=new E,jf=new E,d1=new E,p1=new E,m1=new E,g1=[0],v1=new E,_1=new E;class Kf{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){const i=e;e=t,t=i}return t<<16|e}set(t,e){const i=this.getKey(t,e),s=this.current;let r=0;for(;i>s[r];)r++;if(i!==s[r]){for(let o=s.length-1;o>=r;o--)s[o+1]=s[o];s[r]=i}}tick(){const t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){const i=this.current,s=this.previous,r=i.length,o=s.length;let a=0;for(let l=0;l<r;l++){let c=!1;const u=i[l];for(;u>s[a];)a++;c=u===s[a],c||Zf(t,u)}a=0;for(let l=0;l<o;l++){let c=!1;const u=s[l];for(;u>i[a];)a++;c=i[a]===u,c||Zf(e,u)}}}function Zf(n,t){n.push((t&4294901760)>>16,t&65535)}const Vl=(n,t)=>n<t?`${n}-${t}`:`${t}-${n}`;class x1{constructor(){this.data={keys:[]}}get(t,e){const i=Vl(t,e);return this.data[i]}set(t,e,i){const s=Vl(t,e);this.get(t,e)||this.data.keys.push(s),this.data[s]=i}delete(t,e){const i=Vl(t,e),s=this.data.keys.indexOf(i);s!==-1&&this.data.keys.splice(s,1),delete this.data[i]}reset(){const t=this.data,e=t.keys;for(;e.length>0;){const i=e.pop();delete t[i]}}}class y1 extends Kp{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new E,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new E,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new AE,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new sm,this.constraints=[],this.narrowphase=new uT(this),this.collisionMatrix=new Uf,this.collisionMatrixPrevious=new Uf,this.bodyOverlapKeeper=new Kf,this.shapeOverlapKeeper=new Kf,this.contactmaterials=[],this.contactMaterialTable=new x1,this.defaultMaterial=new ws("default"),this.defaultContactMaterial=new bs(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){const t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){const e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,i){i instanceof wa?this.raycastClosest(t,e,{skipBackfaces:!0},i):this.raycastAll(t,e,{skipBackfaces:!0},i)}raycastAll(t,e,i,s){return i===void 0&&(i={}),i.mode=Ue.ALL,i.from=t,i.to=e,i.callback=s,kl.intersectWorld(this,i)}raycastAny(t,e,i,s){return i===void 0&&(i={}),i.mode=Ue.ANY,i.from=t,i.to=e,i.result=s,kl.intersectWorld(this,i)}raycastClosest(t,e,i,s){return i===void 0&&(i={}),i.mode=Ue.CLOSEST,i.from=t,i.to=e,i.result=s,kl.intersectWorld(this,i)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof Ft&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;const e=this.bodies.length-1,i=this.bodies,s=i.indexOf(t);if(s!==-1){i.splice(s,1);for(let r=0;r!==i.length;r++)i[r].index=r;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){const e=this.bodies;for(let i=0;i<e.length;i++){const s=e[i].shapes;for(let r=0;r<s.length;r++){const o=s[r];if(o.id===t)return o}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){const e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);const i=Be.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{const s=i-this.lastCallTime;this.step(t,s,e)}this.lastCallTime=i}step(t,e,i){if(i===void 0&&(i=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;const s=Be.now();let r=0;for(;this.accumulator>=t&&r<i&&(this.internalStep(t),this.accumulator-=t,r++,!(Be.now()-s>t*1e3)););this.accumulator=this.accumulator%t;const o=this.accumulator/t;for(let a=0;a!==this.bodies.length;a++){const l=this.bodies[a];l.previousPosition.lerp(l.position,o,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,o,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;const e=this.contacts,i=E1,s=T1,r=this.bodies.length,o=this.bodies,a=this.solver,l=this.gravity,c=this.doProfiling,u=this.profile,f=Ft.DYNAMIC;let h=-1/0;const d=this.constraints,m=w1;l.length();const v=l.x,p=l.y,g=l.z;let x=0;for(c&&(h=Be.now()),x=0;x!==r;x++){const O=o[x];if(O.type===f){const X=O.force,V=O.mass;X.x+=V*v,X.y+=V*p,X.z+=V*g}}for(let O=0,X=this.subsystems.length;O!==X;O++)this.subsystems[O].update();c&&(h=Be.now()),i.length=0,s.length=0,this.broadphase.collisionPairs(this,i,s),c&&(u.broadphase=Be.now()-h);let S=d.length;for(x=0;x!==S;x++){const O=d[x];if(!O.collideConnected)for(let X=i.length-1;X>=0;X-=1)(O.bodyA===i[X]&&O.bodyB===s[X]||O.bodyB===i[X]&&O.bodyA===s[X])&&(i.splice(X,1),s.splice(X,1))}this.collisionMatrixTick(),c&&(h=Be.now());const _=b1,M=e.length;for(x=0;x!==M;x++)_.push(e[x]);e.length=0;const b=this.frictionEquations.length;for(x=0;x!==b;x++)m.push(this.frictionEquations[x]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(i,s,this,e,_,this.frictionEquations,m),c&&(u.narrowphase=Be.now()-h),c&&(h=Be.now()),x=0;x<this.frictionEquations.length;x++)a.addEquation(this.frictionEquations[x]);const C=e.length;for(let O=0;O!==C;O++){const X=e[O],V=X.bi,U=X.bj,W=X.si,j=X.sj;let ft;if(V.material&&U.material?ft=this.getContactMaterial(V.material,U.material)||this.defaultContactMaterial:ft=this.defaultContactMaterial,ft.friction,V.material&&U.material&&(V.material.friction>=0&&U.material.friction>=0&&V.material.friction*U.material.friction,V.material.restitution>=0&&U.material.restitution>=0&&(X.restitution=V.material.restitution*U.material.restitution)),a.addEquation(X),V.allowSleep&&V.type===Ft.DYNAMIC&&V.sleepState===Ft.SLEEPING&&U.sleepState===Ft.AWAKE&&U.type!==Ft.STATIC){const lt=U.velocity.lengthSquared()+U.angularVelocity.lengthSquared(),dt=U.sleepSpeedLimit**2;lt>=dt*2&&(V.wakeUpAfterNarrowphase=!0)}if(U.allowSleep&&U.type===Ft.DYNAMIC&&U.sleepState===Ft.SLEEPING&&V.sleepState===Ft.AWAKE&&V.type!==Ft.STATIC){const lt=V.velocity.lengthSquared()+V.angularVelocity.lengthSquared(),dt=V.sleepSpeedLimit**2;lt>=dt*2&&(U.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(V,U,!0),this.collisionMatrixPrevious.get(V,U)||(Lr.body=U,Lr.contact=X,V.dispatchEvent(Lr),Lr.body=V,U.dispatchEvent(Lr)),this.bodyOverlapKeeper.set(V.id,U.id),this.shapeOverlapKeeper.set(W.id,j.id)}for(this.emitContactEvents(),c&&(u.makeContactConstraints=Be.now()-h,h=Be.now()),x=0;x!==r;x++){const O=o[x];O.wakeUpAfterNarrowphase&&(O.wakeUp(),O.wakeUpAfterNarrowphase=!1)}for(S=d.length,x=0;x!==S;x++){const O=d[x];O.update();for(let X=0,V=O.equations.length;X!==V;X++){const U=O.equations[X];a.addEquation(U)}}a.solve(t,this),c&&(u.solve=Be.now()-h),a.removeAllEquations();const F=Math.pow;for(x=0;x!==r;x++){const O=o[x];if(O.type&f){const X=F(1-O.linearDamping,t),V=O.velocity;V.scale(X,V);const U=O.angularVelocity;if(U){const W=F(1-O.angularDamping,t);U.scale(W,U)}}}this.dispatchEvent(M1),c&&(h=Be.now());const T=this.stepnumber%(this.quatNormalizeSkip+1)===0,L=this.quatNormalizeFast;for(x=0;x!==r;x++)o[x].integrate(t,T,L);this.clearForces(),this.broadphase.dirty=!0,c&&(u.integrate=Be.now()-h),this.stepnumber+=1,this.dispatchEvent(S1);let q=!0;if(this.allowSleep)for(q=!1,x=0;x!==r;x++){const O=o[x];O.sleepTick(this.time),O.sleepState!==Ft.SLEEPING&&(q=!0)}this.hasActiveBodies=q}emitContactEvents(){const t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(xi,yi),t){for(let r=0,o=xi.length;r<o;r+=2)Dr.bodyA=this.getBodyById(xi[r]),Dr.bodyB=this.getBodyById(xi[r+1]),this.dispatchEvent(Dr);Dr.bodyA=Dr.bodyB=null}if(e){for(let r=0,o=yi.length;r<o;r+=2)Nr.bodyA=this.getBodyById(yi[r]),Nr.bodyB=this.getBodyById(yi[r+1]),this.dispatchEvent(Nr);Nr.bodyA=Nr.bodyB=null}xi.length=yi.length=0;const i=this.hasAnyEventListener("beginShapeContact"),s=this.hasAnyEventListener("endShapeContact");if((i||s)&&this.shapeOverlapKeeper.getDiff(xi,yi),i){for(let r=0,o=xi.length;r<o;r+=2){const a=this.getShapeById(xi[r]),l=this.getShapeById(xi[r+1]);Si.shapeA=a,Si.shapeB=l,a&&(Si.bodyA=a.body),l&&(Si.bodyB=l.body),this.dispatchEvent(Si)}Si.bodyA=Si.bodyB=Si.shapeA=Si.shapeB=null}if(s){for(let r=0,o=yi.length;r<o;r+=2){const a=this.getShapeById(yi[r]),l=this.getShapeById(yi[r+1]);Mi.shapeA=a,Mi.shapeB=l,a&&(Mi.bodyA=a.body),l&&(Mi.bodyB=l.body),this.dispatchEvent(Mi)}Mi.bodyA=Mi.bodyB=Mi.shapeA=Mi.shapeB=null}}clearForces(){const t=this.bodies,e=t.length;for(let i=0;i!==e;i++){const s=t[i];s.force,s.torque,s.force.set(0,0,0),s.torque.set(0,0,0)}}}new xn;const kl=new Ue,Be=globalThis.performance||{};if(!Be.now){let n=Date.now();Be.timing&&Be.timing.navigationStart&&(n=Be.timing.navigationStart),Be.now=()=>Date.now()-n}new E;const S1={type:"postStep"},M1={type:"preStep"},Lr={type:Ft.COLLIDE_EVENT_NAME,body:null,contact:null},b1=[],w1=[],E1=[],T1=[],xi=[],yi=[],Dr={type:"beginContact",bodyA:null,bodyB:null},Nr={type:"endContact",bodyA:null,bodyB:null},Si={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Mi={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Jf=2e3,A1=80,Jo=35e4,Qo=100,C1=15e3,Mn=36,R1=5e4,Qf=!1,Fr=1,Ys=2,qi=4,Gl=8,Hl=16;function P1(n,t){let e,i,s,r,o,a;const l=[],c=[],u=[],f=[],h=[];let d=[],m=0,v={P1:0,P2:0},p={word:[],currentQ:"",currentExp:"",nextSlotIndex:0,isGameOver:!1,gameOverTime:0,isClearing:!1,currentWordIndex:0};const g=new ws("car"),x=new ws("ground"),S=new ws("obstacle");function _(G,z,ot="white",ct=256){const rt=document.createElement("canvas");rt.width=ct,rt.height=ct;const pt=rt.getContext("2d");return pt.fillStyle=z,pt.fillRect(0,0,ct,ct),pt.fillStyle=ot,pt.font=`bold ${ct*.7}px Arial`,pt.textAlign="center",pt.textBaseline="middle",pt.fillText(G,ct/2,ct*.45),pt.fillRect(ct*.2,ct*.82,ct*.6,ct*.08),new Zh(rt)}const M=(G,z,ot,ct)=>{const rt=new zp,pt=-G/2,I=-z/2;return rt.moveTo(pt+ct,I),rt.lineTo(pt+G-ct,I),rt.quadraticCurveTo(pt+G,I,pt+G,I+ct),rt.lineTo(pt+G,I+z-ct),rt.quadraticCurveTo(pt+G,I+z,pt+G-ct,I+z),rt.lineTo(pt+ct,I+z),rt.quadraticCurveTo(pt,I+z,pt,I+z-ct),rt.lineTo(pt,I+ct),rt.quadraticCurveTo(pt,I,pt+ct,I),new Fu(rt,{depth:ot,bevelEnabled:!0,bevelThickness:.2,bevelSize:.2,bevelSegments:3})};function b(){const G=new le,z=Math.random()*.12,ot=.4+Math.random()*.4,ct=.15+Math.random()*.15;return G.setHSL(z,ot,ct),G}class C{constructor(z,ot,ct,rt,pt,I){Te(this,"mesh");Te(this,"body");Te(this,"id");Te(this,"char");Te(this,"team");Te(this,"isParking",!1);Te(this,"targetSpot",null);Te(this,"isParkedFinal",!1);Te(this,"lightBeams");Te(this,"isExiting",!1);Te(this,"exitTargetZ",0);Te(this,"isEntering",!0);Te(this,"targetEntryZ",0);Te(this,"entrySpeedMult",1);Te(this,"shakeTime",0);Te(this,"stuckTimer",0);Te(this,"reverseTimer",0);this.id=z,this.char=pt,this.team=I;const N=4.5,D=2,k=8.5,H=.8;this.mesh=new ys;const $=new Rn({color:rt,metalness:.8,roughness:.2}),R=M(N,k,D*.6,H),nt=new oe(R,$);nt.rotation.x=Math.PI/2,nt.position.y=D*.3,nt.name="car_base",nt.castShadow=!0,nt.receiveShadow=!0,this.mesh.add(nt);const Q=M(N*.85,k*.45,D*.5,H*.6),et=new oe(Q,$);et.rotation.x=Math.PI/2,et.position.set(0,D*1,-.6),et.name="car_cabin",et.castShadow=!0,et.receiveShadow=!0,this.mesh.add(et);const st=new oe(new tn(N*.8,D*.8),new Rn({color:8965375,transparent:!0,opacity:.6,metalness:1,roughness:0,side:Dn}));st.position.set(0,D*.9,1.4),st.rotation.x=-Math.PI/3.2,st.name="car_ws",this.mesh.add(st);const A=new Ri(.8,.4,.2),y=new Rn({color:16777215,emissive:16777215,emissiveIntensity:1}),B=new oe(A,y);B.position.set(-1.4,D*.3,k/2),B.name="car_hl_l",this.mesh.add(B);const Z=new oe(A,y);Z.position.set(1.4,D*.3,k/2),Z.name="car_hl_r",this.mesh.add(Z);const ht=new $r({map:_(pt,"#00000000","white"),transparent:!0,side:Dn}),tt=new oe(new tn(4,4),ht);tt.rotation.x=-Math.PI/2,tt.rotation.z=Math.PI,tt.position.set(0,D*1.55,-1.2),tt.name="car_label",this.mesh.add(tt),this.lightBeams=new ys;const xt=new tn(1.2,12),gt=xt.attributes.position;gt.setX(2,-4.5),gt.setX(3,4.5);const Et=document.createElement("canvas");Et.width=128,Et.height=256;const Nt=Et.getContext("2d"),mt=Nt.createRadialGradient(64,10,0,64,10,240);mt.addColorStop(0,"rgba(255,255,255,0.5)"),mt.addColorStop(.2,"rgba(255,255,255,0.2)"),mt.addColorStop(.6,"rgba(255,255,255,0.05)"),mt.addColorStop(1,"rgba(255,255,255,0)"),Nt.fillStyle=mt,Nt.fillRect(0,0,128,256);const St=new Zh(Et),Tt=new $r({map:St,transparent:!0,blending:nc,depthWrite:!1});[[-1.4,.12,k/2+6],[1.4,.12,k/2+6]].forEach(bt=>{const Gt=new oe(xt,Tt);Gt.rotation.x=-Math.PI/2,Gt.position.set(bt[0],bt[1],bt[2]),this.lightBeams.add(Gt)}),this.mesh.add(this.lightBeams),this.lightBeams.visible=!1,e.add(this.mesh),this.body=new Ft({mass:Jf,material:g,linearDamping:.75,angularDamping:.95}),this.body.addShape(new In(new E(N/2,D/2,k*.95/2))),this.body.position.set(ot,2,ct),I==="P1"&&this.body.quaternion.setFromEuler(0,Math.PI,0),this.body.angularFactor.set(0,1,0),this.body.collisionFilterGroup=qi,this.body.collisionFilterMask=Fr|Ys|qi,r.addBody(this.body),this.mesh.userData.carId=z,this.body.allowSleep=!1,this.body.addEventListener("collide",bt=>{var Y;if(this.isParkedFinal)return;const Gt=bt.body;if(((Y=Gt.material)==null?void 0:Y.name)==="car"){const At=l.find(wt=>wt.body===Gt);if(At&&!At.isParkedFinal&&this.isParking&&At.isParking){const wt=new E(this.targetSpot.x,0,this.targetSpot.z);this.body.position.distanceTo(wt)<Gt.position.distanceTo(wt)&&Gt.applyImpulse(Gt.position.vsub(this.body.position).unit().scale(R1),new E(0,0,0))}}})}applySeparation(z){if(!this.isParkedFinal)for(const ot of z){if(ot===this||ot.isExiting)continue;const ct=this.body.position.distanceTo(ot.body.position),rt=6;if(ct<rt){const pt=this.body.position.vsub(ot.body.position);pt.y=0,pt.length()<.1&&(pt.x=1);const I=(rt-ct)*5e4;this.body.applyImpulse(pt.unit().scale(I),new E(0,0,0))}}}update(){const z=this.body.velocity,ot=z.length();if(ot>Qo&&z.scale(Qo/ot,z),this.mesh.position.copy(this.body.position),this.mesh.quaternion.copy(this.body.quaternion),this.shakeTime>0){this.shakeTime-=.016;const ct=Math.sin(this.shakeTime*40)*this.shakeTime;this.mesh.position.y+=Math.abs(ct)*1.2,this.mesh.rotation.z+=ct*.2}!this.isParkedFinal&&Math.abs(this.body.velocity.y)>.1&&(this.body.velocity.y*=.8),this.isExiting?this.body.collisionFilterMask=Fr|Ys|qi:this.isEntering?this.body.collisionFilterMask=Fr|Ys|qi|Gl|Hl:this.body.collisionFilterMask=Fr|Ys|qi|Gl|Hl,this.isExiting?(this.driveToExit(),this.lightBeams.visible=!0):this.isEntering?(this.driveToEntry(),this.lightBeams.visible=!0):this.isParking&&this.targetSpot&&!this.isParkedFinal?(this.driveToTarget(),this.lightBeams.visible=!0):this.lightBeams.visible=!1}driveToEntry(){const z=this.targetEntryZ-this.body.position.z,ot=this.team==="P1",ct=ot?-1:1;if(this.body.quaternion.setFromEuler(0,ot?Math.PI:0,0),this.body.angularVelocity.set(0,0,0),ct===-1&&z>-.5||ct===1&&z<.5){this.isEntering=!1,this.body.velocity.set(0,0,0),this.body.force.set(0,0,0);return}const rt=1.5,pt=new E(0,0,ct*Jo*1.2*this.entrySpeedMult*rt);this.body.applyForce(pt,new E(0,0,0)),this.body.velocity.x*=.95}driveToExit(){const z=this.exitTargetZ,ot=0-this.body.position.x,ct=z-this.body.position.z,rt=Math.atan2(ot,ct),pt=new E(0,0,1);this.body.quaternion.vmult(pt,pt);const I=Math.atan2(pt.x,pt.z);let N=rt-I;for(;N>Math.PI;)N-=Math.PI*2;for(;N<-Math.PI;)N+=Math.PI*2;this.body.angularVelocity.y=N*5,Math.cos(N)>.1&&this.body.applyForce(pt.scale(Jo*1.8),new E(0,0,0))}driveToTarget(){if(!this.targetSpot)return;if(this.targetSpot.occupied){this.isParking=!1,this.targetSpot=null,this.body.velocity.set(0,0,0),this.body.angularVelocity.set(0,0,0);return}const z=new E(this.targetSpot.x,.5,this.targetSpot.z),ot=z.x-this.body.position.x,ct=z.z-this.body.position.z,rt=Math.sqrt(ot*ot+ct*ct),pt=Math.atan2(ot,ct),I=new E(0,0,1);this.body.quaternion.vmult(I,I);const N=Math.atan2(I.x,I.z);let D=pt-N;for(;D>Math.PI;)D-=Math.PI*2;for(;D<-Math.PI;)D+=Math.PI*2;const k=Math.abs(D),H=(n.clientHeight>n.clientWidth?Mn/(n.clientWidth/n.clientHeight*1.5):Mn)*.9;if(Math.abs(this.body.position.z)>H){const nt=this.body.position.z>0?-1e5:1e5;this.body.applyForce(new E(0,0,nt),new E(0,0,0))}if(rt<1.8&&k<1.2){this.finishParking(z);return}const $=this.team==="P1"?t.p1Speed.value:t.p2Speed.value;if(this.reverseTimer>0){this.reverseTimer--,this.body.angularVelocity.y=-Math.sin(D)*5;const nt=Jo*.8*$;this.body.applyForce(I.scale(-nt),new E(0,0,0));const Q=new E(0,1,0).cross(I,new E);this.body.velocity.x-=Q.x*this.body.velocity.dot(Q)*.95,this.body.velocity.z-=Q.z*this.body.velocity.dot(Q)*.95;return}if(k>2||rt<20&&k>1&&this.body.velocity.length()<5){this.reverseTimer=50;return}if(this.body.angularVelocity.y=D*5,Math.cos(D)>.1){const nt=Jo*Math.min(1,rt/6)*$;this.body.applyForce(I.scale(nt),new E(0,0,0))}const R=new E(0,1,0).cross(I,new E);this.body.velocity.x-=R.x*this.body.velocity.dot(R)*.8,this.body.velocity.z-=R.z*this.body.velocity.dot(R)*.8}boost(){if(this.isParkedFinal)return;const z=new E(0,0,1);this.body.quaternion.vmult(z,z),this.body.applyImpulse(z.scale(C1),new E(0,0,0))}shake(){if(this.shakeTime=.4,!this.isParkedFinal){this.body.applyImpulse(new E(0,2e3,0),new E(.5,0,.5));const z=new E((Math.random()-.5)*15e3,0,(Math.random()-.5)*15e3);this.body.applyImpulse(z,new E(0,0,0))}}finishParking(z){if(this.targetSpot.occupied){this.isParking=!1,this.targetSpot=null;return}this.targetSpot.occupied=!0,this.isParkedFinal=!0,this.isParking=!1,this.body.position.copy(z),this.body.velocity.set(0,0,0),this.body.angularVelocity.set(0,0,0),this.body.type=Ft.STATIC,this.body.mass=0,this.body.updateMassProperties(),this.team==="P1"?(v.P1++,t.onScore("P1",v.P1)):(v.P2++,t.onScore("P2",v.P2)),t.onParkSuccess()}park(z){this.targetSpot=z,this.isParking=!0,this.body.wakeUp()}exit(){this.isExiting=!0,this.isParkedFinal=!1,this.isParking=!1,this.body.type=Ft.DYNAMIC,this.body.mass=Jf,this.body.updateMassProperties(),this.exitTargetZ=this.team==="P1"?150:-150,this.body.wakeUp()}}class F{constructor(z,ot,ct){Te(this,"mesh");Te(this,"body");Te(this,"legs",[]);Te(this,"tail",null);Te(this,"target",new J);Te(this,"state","idle");Te(this,"timer",0);this.mesh=new ys;const rt=new Rn({color:ct,roughness:.8}),pt=.5,I=M(1.8,3,1.2,pt),N=new oe(I,rt);N.rotation.x=Math.PI/2,N.position.y=1.3,N.castShadow=!0,this.mesh.add(N);const D=M(1.2,1.2,1.2,pt*.8),k=new oe(D,rt);k.rotation.x=Math.PI/2,k.position.set(0,2,1.5),k.castShadow=!0,this.mesh.add(k);const H=new Rn({color:6106637}),$=M(.4,.4,.8,.15),R=new oe($,H);R.rotation.x=Math.PI/2,R.position.set(.5,2.6,1.5),this.mesh.add(R);const nt=new oe($,H);nt.rotation.x=Math.PI/2,nt.position.set(-.5,2.6,1.5),this.mesh.add(nt);const Q=M(.5,.5,1,.25);[[.6,.5,1],[-.6,.5,1],[.6,.5,-1],[-.6,.5,-1]].forEach(A=>{const y=new oe(Q,rt);y.rotation.x=Math.PI/2,y.position.set(A[0],A[1],A[2]),this.mesh.add(y),this.legs.push(y)});const st=M(.3,1,.3,.1);this.tail=new oe(st,rt),this.tail.rotation.x=Math.PI/2,this.tail.position.set(0,1.5,-1.5),this.mesh.add(this.tail),e.add(this.mesh),this.body=new Ft({mass:10,material:S}),this.body.addShape(new In(new E(.9,.6,1.5))),this.body.position.set(z,.5,ot),this.body.collisionFilterGroup=Ys,this.body.collisionFilterMask=Fr|qi|Ys,r.addBody(this.body),this.body.angularFactor.set(0,1,0),this.body.quaternion.set(0,0,0,1),this.pickNewTarget()}pickNewTarget(){const z=n.clientWidth,ot=n.clientHeight,ct=z/ot,rt=ot>z?Mn/(ct*1.5):Mn,pt=rt*ct,I=rt*(1-120/ot);this.target.set((Math.random()-.5)*pt*1.6,0,(Math.random()-.5)*I*1.6),this.state="walking",this.timer=150+Math.random()*300}update(){if(this.mesh.position.copy(this.body.position),this.mesh.quaternion.copy(this.body.quaternion),this.state==="walking"){const z=this.target.clone().sub(this.mesh.position);if(z.y=0,z.length()<2||this.timer<=0)this.state="idle",this.timer=60+Math.random()*120,this.body.velocity.set(0,0,0);else{this.timer--;const ot=Math.atan2(z.x,z.z),ct=new E;this.body.quaternion.toEuler(ct);const rt=ct.y;let pt=ot-rt;for(;pt>Math.PI;)pt-=Math.PI*2;for(;pt<-Math.PI;)pt+=Math.PI*2;this.body.angularVelocity.y=pt*5;const I=new E(0,0,1);this.body.quaternion.vmult(I,I),this.body.velocity.x=I.x*8,this.body.velocity.z=I.z*8,this.legs.forEach((N,D)=>{N.position.y=.5+Math.sin(Date.now()*.01+D)*.2})}}else this.timer--,this.timer<=0&&this.pickNewTarget();if(this.tail){const z=this.state==="walking"?.02:.01;this.tail.rotation.z=Math.sin(Date.now()*z)*.5}}destroy(){e.remove(this.mesh),r.removeBody(this.body)}}function w(){e=new fx,e.background=new le(328965),e.fog=new Iu(328965,150,400),s=new tE({antialias:!0,canvas:n}),n.style.touchAction="none",s.setSize(n.clientWidth,n.clientHeight),s.shadowMap.enabled=!0,L(),window.addEventListener("resize",L),e.add(new iy(16777215,.4));const G=new ny(16777215,.8);G.position.set(40,180,40),G.castShadow=!0,G.shadow.camera.left=-200,G.shadow.camera.right=200,G.shadow.camera.top=200,G.shadow.camera.bottom=-200,G.shadow.camera.near=1,G.shadow.camera.far=400,G.shadow.bias=1e-4,G.shadow.mapSize.set(2048,2048),e.add(G),r=new y1,r.gravity.set(0,-9.82,0),r.solver instanceof sm&&(r.solver.iterations=50),r.allowSleep=!1,r.addContactMaterial(new bs(g,x,{friction:.05,restitution:.1})),r.addContactMaterial(new bs(g,S,{friction:.02,restitution:.1})),r.addContactMaterial(new bs(g,g,{friction:.05,restitution:0}));const z=new Rn({color:1710618,roughness:.8,metalness:0});o=new oe(new tn(1e3,1e3),z),o.rotation.x=-Math.PI/2,o.receiveShadow=!0,e.add(o),a=new Ft({mass:0,material:x}),a.addShape(new iT),a.quaternion.setFromEuler(-Math.PI/2,0,0),r.addBody(a),V(-200,200,-15,15);const ot=new Rn({color:16711935,transparent:!0,opacity:.3,visible:Qf});for(let ct=0;ct<4;ct++){const rt=new Ft({mass:0,material:x});rt.collisionFilterGroup=Gl,rt.collisionFilterMask=qi,r.addBody(rt);const pt=new oe(new Ri(1,1,1),ot);pt.renderOrder=999,pt.raycast=()=>{},e.add(pt),h.push({body:rt,mesh:pt})}L(),window.addEventListener("keydown",ct=>{ct.key.toLowerCase()==="t"&&T()}),U(),ft()}function T(){const G=Math.random()>.5?"P1":"P2",z=new C(l.length,0,0,16777215,"T",G);z.isEntering=!1;const ot=Math.random()*Math.PI*2;z.body.velocity.set(Math.cos(ot)*150,0,Math.sin(ot)*150),l.push(z),console.log("Test Car Spawned!")}function L(){const G=n.clientWidth,z=n.clientHeight,ot=G/z,ct=z>G?Mn/(ot*1.5):Mn;i?(i.left=-ct*ot,i.right=ct*ot,i.top=ct,i.bottom=-ct,i.updateProjectionMatrix()):(i=new Ba(-ct*ot,ct*ot,ct,-ct,.1,1e3),i.position.set(0,150,0),i.lookAt(0,0,0)),s.setSize(G,z)}let q=5,O=0;function X(){if(h.length!==4)return;const G=n.clientWidth,z=n.clientHeight,ot=G/z,ct=z>G?Mn/(ot*1.5):Mn;q>1&&(q-=.04,q<1&&(q=1));const rt=(ct*ot+.5)*q,pt=(ct*(1-120/z)+.5)*q,I=50,N=100,D=1,k=Math.abs(q-O)>.1;k&&(O=q),h[0].body.position.set(0,0,-pt-I/2),k&&(h[0].body.shapes=[],h[0].body.addShape(new In(new E(rt+I,N/2,I/2)))),h[0].mesh.position.set(0,N/2,-pt+D/2),h[0].mesh.scale.set(rt*2+2,N,D),h[1].body.position.set(0,0,pt+I/2),k&&(h[1].body.shapes=[],h[1].body.addShape(new In(new E(rt+I,N/2,I/2)))),h[1].mesh.position.set(0,N/2,pt-D/2),h[1].mesh.scale.set(rt*2+2,N,D),h[2].body.position.set(-rt-I/2,0,0),k&&(h[2].body.shapes=[],h[2].body.addShape(new In(new E(I/2,N/2,pt+I)))),h[2].mesh.position.set(-rt+D/2,N/2,0),h[2].mesh.scale.set(D,N,pt*2+2),h[3].body.position.set(rt+I/2,0,0),k&&(h[3].body.shapes=[],h[3].body.addShape(new In(new E(I/2,N/2,pt+I)))),h[3].mesh.position.set(rt-D/2,N/2,0),h[3].mesh.scale.set(D,N,pt*2+2)}function V(G,z,ot,ct){const I=new $r({color:16750848}),N=ot-G;if(N>0){const k=new tn(1,N),H=new oe(k,I);H.rotation.x=-Math.PI/2,H.position.set(-2.5/2,.06,G+N/2),H.name="road_marking",e.add(H);const $=new oe(k,I);$.rotation.x=-Math.PI/2,$.position.set(2.5/2,.06,G+N/2),$.name="road_marking",e.add($)}const D=z-ct;if(D>0){const k=new tn(1,D),H=new oe(k,I);H.rotation.x=-Math.PI/2,H.position.set(-2.5/2,.06,ct+D/2),H.name="road_marking",e.add(H);const $=new oe(k,I);$.rotation.x=-Math.PI/2,$.position.set(2.5/2,.06,ct+D/2),$.name="road_marking",e.add($)}}function U(){q=5;const G=Ai.currentList.value;if(G.length===0)return;const z=G[Math.floor(Math.random()*G.length)];p.word=(z.a||z.q).split(""),p.currentQ=z.q,p.currentExp=z.exps&&z.exps.length>0?`. ${z.exps[0]}`:"",p.nextSlotIndex=0,p.isGameOver=!1,p.isClearing=!1,c.length=0;const ot=n.clientWidth,ct=n.clientHeight,rt=ot/ct,pt=ct>ot?Mn/(rt*1.5):Mn,I=[];e.traverse(xt=>{xt.name&&(xt.name.startsWith("spot_")||xt.name==="road_marking")&&I.push(xt)}),I.forEach(xt=>e.remove(xt));const N=p.word.length,D=pt*rt*2*.9,k=12,H=16,$=Math.max(1,Math.floor(D/k)),R=Math.ceil(N/$),nt=7,Q=11;let et=0,st=0;for(let xt=0;xt<N;xt++){const gt=Math.floor(xt/$),Et=xt%$,Nt=gt===R-1&&N%$||$,mt=(Et-(Nt-1)/2)*k,St=(gt-(R-1)/2)*H;xt===0?(et=St,st=St):(et=Math.min(et,St),st=Math.max(st,St)),c.push({char:p.word[xt],occupied:!1,x:mt,z:St,winnerTeam:null});const Tt=new Rn({color:16777215,transparent:!0,opacity:.6,emissive:16777215,emissiveIntensity:.2}),Rt=new oe(new tn(nt,.3),Tt);Rt.rotation.x=-Math.PI/2,Rt.position.set(mt,.07,St-Q/2),Rt.name=`spot_frame_${xt}_t`,e.add(Rt);const bt=new oe(new tn(nt,.3),Tt);bt.rotation.x=-Math.PI/2,bt.position.set(mt,.07,St+Q/2),bt.name=`spot_frame_${xt}_b`,e.add(bt);const Gt=new oe(new tn(.3,Q),Tt);Gt.rotation.x=-Math.PI/2,Gt.position.set(mt-nt/2,.07,St),Gt.name=`spot_frame_${xt}_l`,e.add(Gt);const Y=new oe(new tn(.3,Q),Tt);Y.rotation.x=-Math.PI/2,Y.position.set(mt+nt/2,.07,St),Y.name=`spot_frame_${xt}_r`,e.add(Y);const At=new oe(new tn(5.5,5.5),new Rn({map:_(p.word[xt],"#00000000","rgba(255,255,255,0.4)"),transparent:!0,emissive:16777215,emissiveIntensity:.1}));At.name=`spot_label_${xt}`,At.rotation.x=-Math.PI/2,At.position.set(mt,.08,St),At.raycast=()=>{},e.add(At)}const A=10;V(-200,200,et-A,st+A);const y=[16777215,16763904];for(let xt=0;xt<y.length;xt++)f.push(new F((Math.random()-.5)*50,(Math.random()-.5)*30,y[xt]));for(let xt=0;xt<15;xt++){const gt=2+Math.random()*3,Et=new E((Math.random()-.5)*110,gt/2,(Math.random()-.5)*(st-et+20)),Nt=new oe(new Ri(gt,gt,gt),new Rn({color:b(),metalness:.6,roughness:.4}));Nt.castShadow=!0,Nt.receiveShadow=!0,e.add(Nt);const mt=new Ft({mass:A1,material:S,position:Et});mt.addShape(new In(new E(gt/2,gt/2,gt/2))),r.addBody(mt),u.push({mesh:Nt,body:mt})}const B=15,Z=2,ht=new Rn({color:16711935,transparent:!0,opacity:.3,visible:Qf});[st+A,et-A].forEach(xt=>{const gt=new Ft({mass:0});gt.addShape(new In(new E(150,B/2,Z/2))),gt.position.set(0,B/2,xt),gt.collisionFilterGroup=Hl,gt.collisionFilterMask=qi,r.addBody(gt);const Et=new oe(new Ri(300,B,Z),ht);Et.position.set(0,B/2,xt),Et.raycast=()=>{},e.add(Et),d.push({mesh:Et,body:gt})}),W("P1",st+22,91368),W("P2",et-22,15208739),t.onSpeak(p.currentQ+p.currentExp)}function W(G,z,ot){const ct=Math.max(4,Math.ceil(p.word.length*1.5)),rt=[];for(let D=0;D<ct;D++)rt.push(p.word[D%p.word.length]);rt.sort(()=>Math.random()-.5);const pt=n.clientWidth/n.clientHeight,N=(n.clientHeight>n.clientWidth?Mn/(pt*1.5):Mn)*pt*.8;rt.forEach((D,k)=>{const H=G==="P1"?140:-140,$=N*2/(rt.length+1),R=-N+(k+1)*$+(Math.random()-.5)*5,nt=new C(l.length,R,H,ot,D,G),Q=(Math.random()-.5)*.4;nt.body.quaternion.setFromEuler(0,(G==="P1"?Math.PI:0)+Q,0),nt.body.quaternion.setFromEuler(0,(G==="P1"?Math.PI:0)+Q,0),nt.targetEntryZ=z+(Math.random()-.5)*10,nt.entrySpeedMult=1+Math.random()*.8,l.push(nt)})}let j;function ft(){if(j=requestAnimationFrame(ft),r.step(1/60),X(),p.isGameOver)p.isClearing?l.every(z=>Math.abs(z.body.position.z)>120)&&(m===0&&(m=Date.now()),Date.now()-m>300&&(m=0,dt())):Date.now()-p.gameOverTime>800&&(p.isClearing=!0,l.forEach(G=>G.exit()));else{for(;p.nextSlotIndex<c.length&&c[p.nextSlotIndex].occupied;)p.nextSlotIndex++;c.every(G=>G.occupied)&&(p.isGameOver=!0,p.gameOverTime=Date.now(),t.onSpeak(p.currentQ))}if(l.forEach(G=>{G.applySeparation(l),G.update()}),f.forEach(G=>G.update()),lt.isDragging&&lt.car){const G=lt.car,z=G.body,ot=20;z.velocity.x=(lt.targetPos.x-z.position.x)*ot,z.velocity.z=(lt.targetPos.z-z.position.z)*ot,G.isParking||(z.angularVelocity.set(0,0,0),z.quaternion.copy(lt.startRot))}u.forEach(G=>{const z=G.body.velocity;z.length()>Qo&&z.scale(Qo/z.length(),z),G.mesh.position.copy(G.body.position),G.mesh.quaternion.copy(G.body.quaternion)}),s.render(e,i)}const lt={car:null,isDragging:!1,startPos:new Lt,startRot:new Ne,targetPos:new J,plane:new ji(new J(0,1,0),0),rect:null};function dt(){l.forEach(z=>{e.remove(z.mesh),r.removeBody(z.body)}),l.length=0,f.forEach(z=>z.destroy()),f.length=0,u.forEach(z=>{e.remove(z.mesh),r.removeBody(z.body)}),u.length=0;const G=[];e.traverse(z=>{z.name&&(z.name.startsWith("spot_")||z.name==="mission_complete_label")&&G.push(z)}),G.forEach(z=>e.remove(z)),U()}function _t(){d.length!==0&&(d.forEach(G=>{e.remove(G.mesh),r.removeBody(G.body)}),d=[])}function Ut(G){_t();const z=n.getBoundingClientRect();lt.rect=z;const ot=new Lt((G.clientX-z.left)/z.width*2-1,-((G.clientY-z.top)/z.height)*2+1);lt.startPos.set(G.clientX,G.clientY);const ct=new af;ct.setFromCamera(ot,i);const rt=ct.intersectObjects(e.children,!0);console.log(`Click detected. Hits: ${rt.length}`),rt.forEach((I,N)=>{var D;return console.log(` Hit ${N}: ${I.object.name||"unnamed"} (Parent: ${((D=I.object.parent)==null?void 0:D.name)||"none"})`)});let pt=!1;for(const I of rt){let N=I.object;for(;N&&N.userData.carId===void 0&&N.parent;)N=N.parent;if(N&&N.userData.carId!==void 0){const D=N.userData.carId,k=l.find(H=>H.id===D);if(k)if(console.log(`Found Car ID: ${D}, Team: ${k.team}, isEntering: ${k.isEntering}, isParkedFinal: ${k.isParkedFinal}, Z: ${k.body.position.z.toFixed(1)}`),!k.isParkedFinal&&Math.abs(k.body.position.z)<135){lt.car=k,lt.isDragging=!1,lt.startRot.copy(k.body.quaternion),ct.ray.intersectPlane(lt.plane,lt.targetPos),pt=!0,console.log("-> SUCCESS: Car selected for drag/click.");break}else console.log("-> REJECTED: Car state or position not valid for interaction.")}}pt||console.warn("No car found at click position.")}function zt(G){if(lt.car&&(lt.isDragging||Math.sqrt(Math.pow(G.clientX-lt.startPos.x,2)+Math.pow(G.clientY-lt.startPos.y,2))>5&&(lt.isDragging=!0),lt.isDragging)){const z=lt.rect||n.getBoundingClientRect(),ot=new Lt((G.clientX-z.left)/z.width*2-1,-((G.clientY-z.top)/z.height)*2+1),ct=new af;ct.setFromCamera(ot,i),ct.ray.intersectPlane(lt.plane,lt.targetPos),lt.car.isParking&&(lt.car.stuckTimer=0)}}function $t(){if(lt.car){if(!lt.isDragging){const G=lt.car;if(!G.isParking&&!G.isParkedFinal){t.onSpeak(G.char);let z=!1;for(let ot=p.nextSlotIndex;ot<p.word.length;ot++)if(c[ot].char===G.char&&!c[ot].occupied){if(l.some(pt=>pt.team===G.team&&pt.isParking&&pt.targetSpot===c[ot]))continue;if(ot===p.nextSlotIndex||l.some(pt=>pt.isParking&&pt.targetSpot===c[ot-1])){G.park(c[ot]),z=!0;break}}z||(t.onParkFail(),G.shake())}else G.shake(),G.isParking&&G.boost()}lt.car=null,lt.isDragging=!1}}return w(),n.addEventListener("pointerdown",Ut),document.addEventListener("pointermove",zt),document.addEventListener("pointerup",$t),Rs(()=>{cancelAnimationFrame(j),n.removeEventListener("pointerdown",Ut),document.removeEventListener("pointermove",zt),document.removeEventListener("pointerup",$t),window.removeEventListener("resize",L),s.dispose()}),{scores:v,gameState:p}}const I1={class:"game-container"},L1={class:"function-area p2"},D1={class:"ctrl-group"},N1={class:"score-display"},F1={class:"function-area p1"},U1={class:"ctrl-group"},O1={class:"score-display"},B1=pr({__name:"ParkingGame",emits:["exit"],setup(n,{emit:t}){const e=t,{speak:i,playTone:s,playWrong:r}=mr(),o=ie(null),a=ie(1),l=ie(1),c=ie(0),u=ie(0);return window.addEventListener("hashchange",()=>{window.location.hash.replace("#/","")||e("exit")}),fo(()=>{window.location.hash="#/parking-jam",o.value&&P1(o.value,{p1Speed:a,p2Speed:l,onScore:(f,h)=>{f==="P1"?c.value=h:u.value=h,s(600,"sine",.1)},onWin:()=>{s(800,"triangle",.3)},onSpeak:f=>i(f),onParkSuccess:()=>s(1e3,"sine",.05),onParkFail:()=>r()})}),(f,h)=>(jt(),Qt("div",I1,[vt("canvas",{ref_key:"canvasRef",ref:o,class:"webgl"},null,512),vt("div",L1,[vt("div",D1,[pa(vt("input",{type:"range","onUpdate:modelValue":h[0]||(h[0]=d=>l.value=d),min:"0.5",max:"3.0",step:"0.1",class:"speed-slider"},null,512),[[ec,l.value,void 0,{number:!0}]])]),vt("div",N1,_e(u.value),1)]),vt("div",F1,[vt("div",U1,[pa(vt("input",{type:"range","onUpdate:modelValue":h[1]||(h[1]=d=>a.value=d),min:"0.5",max:"3.0",step:"0.1",class:"speed-slider"},null,512),[[ec,a.value,void 0,{number:!0}]])]),vt("div",O1,_e(c.value),1)])]))}}),z1=gr(B1,[["__scopeId","data-v-b5dba3ce"]]),V1={key:0,class:"portal-container"},k1={class:"settings-panel"},G1={class:"setting-item"},H1={class:"setting-item"},W1={class:"setting-item"},q1=["value"],X1={class:"games-grid"},$1=["onClick"],Y1={class:"game-icon"},j1={class:"game-info"},K1={class:"modal-content"},Z1={class:"modal-header"},J1={class:"vocab-list"},Q1=["onClick"],tA={class:"vocab-name"},eA={class:"vocab-count"},nA=pr({__name:"App",setup(n){const{speak:t}=mr(),e=ie(window.location.hash.replace("#/","")||null),i=ie(!1),s=[{id:"falling-words",name:"Star Words",desc:"Catch the words in space!",icon:"🚀"},{id:"spelling-mode",name:"Spell Master",desc:"Spell words letter by letter!",icon:"🛸"},{id:"duel-mode",name:"Duel",desc:"2-Player Battle!",icon:"⚔️"},{id:"code-knight",name:"Code Knight",desc:"Control by your voice!",icon:"🛡️"},{id:"parking-jam",name:"Parking Jam",desc:"Race to park cars!",icon:"🚗"},{id:"coming-soon",name:"More Games",desc:"Coming Soon...",icon:"🔐"}];window.addEventListener("hashchange",()=>{const h=window.location.hash.replace("#/","");e.value=h||null});const r=h=>{h!=="coming-soon"&&(e.value=h,window.location.hash=`#/${h}`)},o=()=>{e.value=null,window.location.hash=""},a=ie([]),l=()=>{a.value=window.speechSynthesis.getVoices().filter(h=>h.lang.startsWith("en")||h.lang.startsWith("zh"))},c=()=>{t("Hello, 你好")};l(),window.speechSynthesis.onvoiceschanged!==void 0&&(window.speechSynthesis.onvoiceschanged=l);const u=()=>{i.value=!i.value},f=h=>{Ai.selectList(h),i.value=!1};return(h,d)=>e.value?e.value==="falling-words"?(jt(),Ks(hv,{key:1,onExit:o})):e.value==="spelling-mode"?(jt(),Ks(Ev,{key:2,onExit:o})):e.value==="duel-mode"?(jt(),Ks($v,{key:3,onExit:o})):e.value==="code-knight"?(jt(),Ks(a_,{key:4,onExit:o})):e.value==="parking-jam"?(jt(),Ks(z1,{key:5,onExit:o})):Bn("",!0):(jt(),Qt("div",V1,[d[8]||(d[8]=vt("h1",{class:"portal-title"},"Kid's Learning Ark",-1)),vt("div",k1,[vt("div",G1,[d[4]||(d[4]=vt("label",null,"Vocabulary:",-1)),vt("button",{class:"vocab-btn",onClick:u}," 📖 "+_e(Wt(Ai).state.currentListName),1)]),vt("div",H1,[vt("label",null,"Speech Speed: "+_e(Wt(Ti).speechRate)+"x",1),pa(vt("input",{type:"range",min:"0.5",max:"2.0",step:"0.1","onUpdate:modelValue":d[0]||(d[0]=m=>Wt(Ti).speechRate=m)},null,512),[[ec,Wt(Ti).speechRate,void 0,{number:!0}]])]),vt("div",W1,[d[6]||(d[6]=vt("label",null,"Game Voice:",-1)),pa(vt("select",{"onUpdate:modelValue":d[1]||(d[1]=m=>Wt(Ti).voiceURI=m)},[d[5]||(d[5]=vt("option",{value:null},"Default (Auto)",-1)),(jt(!0),Qt(Ce,null,_n(a.value,m=>(jt(),Qt("option",{key:m.voiceURI,value:m.voiceURI},_e(m.name),9,q1))),128))],512),[[I0,Wt(Ti).voiceURI]])]),vt("div",{class:"test-voice"},[vt("button",{onClick:c},"Test Voice")])]),vt("div",X1,[(jt(),Qt(Ce,null,_n(s,m=>vt("div",{key:m.id,class:Kn(["game-card",{disabled:m.id==="coming-soon"}]),onClick:v=>r(m.id)},[vt("div",Y1,_e(m.icon),1),vt("div",j1,[vt("h3",null,_e(m.name),1),vt("p",null,_e(m.desc),1)])],10,$1)),64))]),i.value?(jt(),Qt("div",{key:0,class:"modal-overlay",onClick:d[3]||(d[3]=no(m=>i.value=!1,["self"]))},[vt("div",K1,[vt("div",Z1,[d[7]||(d[7]=vt("h2",null,"Select Vocabulary",-1)),vt("button",{class:"close-btn",onClick:d[2]||(d[2]=m=>i.value=!1)},"×")]),vt("div",J1,[(jt(!0),Qt(Ce,null,_n(Wt(Ai).lists,m=>(jt(),Qt("div",{key:m.name,class:Kn(["vocab-item",{active:m.name===Wt(Ai).state.currentListName}]),onClick:v=>f(m.name)},[vt("span",tA,_e(m.name),1),vt("span",eA,_e(m.data.length)+" words",1)],10,Q1))),128))])])])):Bn("",!0)]))}}),iA=gr(nA,[["__scopeId","data-v-c468e9c2"]]);U0(iA).mount("#app");
