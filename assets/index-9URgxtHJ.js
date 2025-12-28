var Rp=Object.defineProperty;var Pp=(n,e,t)=>e in n?Rp(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var zt=(n,e,t)=>Pp(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Uc(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const yt={},$s=[],Kn=()=>{},wd=()=>!1,ha=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Oc=n=>n.startsWith("onUpdate:"),Yt=Object.assign,Bc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Ip=Object.prototype.hasOwnProperty,pt=(n,e)=>Ip.call(n,e),$e=Array.isArray,Ys=n=>Kr(n)==="[object Map]",da=n=>Kr(n)==="[object Set]",wu=n=>Kr(n)==="[object Date]",Qe=n=>typeof n=="function",Ft=n=>typeof n=="string",ti=n=>typeof n=="symbol",wt=n=>n!==null&&typeof n=="object",Td=n=>(wt(n)||Qe(n))&&Qe(n.then)&&Qe(n.catch),Ad=Object.prototype.toString,Kr=n=>Ad.call(n),Lp=n=>Kr(n).slice(8,-1),Cd=n=>Kr(n)==="[object Object]",zc=n=>Ft(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Lr=Uc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),fa=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Dp=/-\w/g,Yi=fa(n=>n.replace(Dp,e=>e.slice(1).toUpperCase())),Np=/\B([A-Z])/g,bs=fa(n=>n.replace(Np,"-$1").toLowerCase()),Rd=fa(n=>n.charAt(0).toUpperCase()+n.slice(1)),Pa=fa(n=>n?`on${Rd(n)}`:""),$i=(n,e)=>!Object.is(n,e),Vo=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Pd=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},pa=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Tu;const ma=()=>Tu||(Tu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function tn(n){if($e(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=Ft(i)?Bp(i):tn(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Ft(n)||wt(n))return n}const Fp=/;(?![^(]*\))/g,Up=/:([^]+)/,Op=/\/\*[^]*?\*\//g;function Bp(n){const e={};return n.replace(Op,"").split(Fp).forEach(t=>{if(t){const i=t.split(Up);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function jn(n){let e="";if(Ft(n))e=n;else if($e(n))for(let t=0;t<n.length;t++){const i=jn(n[t]);i&&(e+=i+" ")}else if(wt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const zp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Vp=Uc(zp);function Id(n){return!!n||n===""}function kp(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=ga(n[i],e[i]);return t}function ga(n,e){if(n===e)return!0;let t=wu(n),i=wu(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=ti(n),i=ti(e),t||i)return n===e;if(t=$e(n),i=$e(e),t||i)return t&&i?kp(n,e):!1;if(t=wt(n),i=wt(e),t||i){if(!t||!i)return!1;const s=Object.keys(n).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!ga(n[o],e[o]))return!1}}return String(n)===String(e)}function Gp(n,e){return n.findIndex(t=>ga(t,e))}const Ld=n=>!!(n&&n.__v_isRef===!0),St=n=>Ft(n)?n:n==null?"":$e(n)||wt(n)&&(n.toString===Ad||!Qe(n.toString))?Ld(n)?St(n.value):JSON.stringify(n,Dd,2):String(n),Dd=(n,e)=>Ld(e)?Dd(n,e.value):Ys(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[Ia(i,r)+" =>"]=s,t),{})}:da(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Ia(t))}:ti(e)?Ia(e):wt(e)&&!$e(e)&&!Cd(e)?String(e):e,Ia=(n,e="")=>{var t;return ti(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ln;class Hp{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=ln,!e&&ln&&(this.index=(ln.scopes||(ln.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=ln;try{return ln=this,e()}finally{ln=t}}}on(){++this._on===1&&(this.prevScope=ln,ln=this)}off(){this._on>0&&--this._on===0&&(ln=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Wp(){return ln}let Et;const La=new WeakSet;class Nd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ln&&ln.active&&ln.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,La.has(this)&&(La.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ud(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Au(this),Od(this);const e=Et,t=Dn;Et=this,Dn=!0;try{return this.fn()}finally{Bd(this),Et=e,Dn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Gc(e);this.deps=this.depsTail=void 0,Au(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?La.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Cl(this)&&this.run()}get dirty(){return Cl(this)}}let Fd=0,Dr,Nr;function Ud(n,e=!1){if(n.flags|=8,e){n.next=Nr,Nr=n;return}n.next=Dr,Dr=n}function Vc(){Fd++}function kc(){if(--Fd>0)return;if(Nr){let e=Nr;for(Nr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Dr;){let e=Dr;for(Dr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Od(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Bd(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),Gc(i),Xp(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function Cl(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(zd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function zd(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Vr)||(n.globalVersion=Vr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Cl(n))))return;n.flags|=2;const e=n.dep,t=Et,i=Dn;Et=n,Dn=!0;try{Od(n);const s=n.fn(n._value);(e.version===0||$i(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{Et=t,Dn=i,Bd(n),n.flags&=-3}}function Gc(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)Gc(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Xp(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Dn=!0;const Vd=[];function Ai(){Vd.push(Dn),Dn=!1}function Ci(){const n=Vd.pop();Dn=n===void 0?!0:n}function Au(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Et;Et=void 0;try{e()}finally{Et=t}}}let Vr=0;class qp{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Hc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Et||!Dn||Et===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Et)t=this.activeLink=new qp(Et,this),Et.deps?(t.prevDep=Et.depsTail,Et.depsTail.nextDep=t,Et.depsTail=t):Et.deps=Et.depsTail=t,kd(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=Et.depsTail,t.nextDep=void 0,Et.depsTail.nextDep=t,Et.depsTail=t,Et.deps===t&&(Et.deps=i)}return t}trigger(e){this.version++,Vr++,this.notify(e)}notify(e){Vc();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{kc()}}}function kd(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)kd(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Rl=new WeakMap,_s=Symbol(""),Pl=Symbol(""),kr=Symbol("");function Wt(n,e,t){if(Dn&&Et){let i=Rl.get(n);i||Rl.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new Hc),s.map=i,s.key=t),s.track()}}function vi(n,e,t,i,s,r){const o=Rl.get(n);if(!o){Vr++;return}const a=l=>{l&&l.trigger()};if(Vc(),e==="clear")o.forEach(a);else{const l=$e(n),c=l&&zc(t);if(l&&t==="length"){const u=Number(i);o.forEach((h,d)=>{(d==="length"||d===kr||!ti(d)&&d>=u)&&a(h)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(kr)),e){case"add":l?c&&a(o.get("length")):(a(o.get(_s)),Ys(n)&&a(o.get(Pl)));break;case"delete":l||(a(o.get(_s)),Ys(n)&&a(o.get(Pl)));break;case"set":Ys(n)&&a(o.get(_s));break}}kc()}function As(n){const e=ft(n);return e===n?e:(Wt(e,"iterate",kr),En(n)?e:e.map(Fn))}function xa(n){return Wt(n=ft(n),"iterate",kr),n}function Gi(n,e){return Ri(n)?vs(n)?nr(Fn(e)):nr(e):Fn(e)}const jp={__proto__:null,[Symbol.iterator](){return Da(this,Symbol.iterator,n=>Gi(this,n))},concat(...n){return As(this).concat(...n.map(e=>$e(e)?As(e):e))},entries(){return Da(this,"entries",n=>(n[1]=Gi(this,n[1]),n))},every(n,e){return ai(this,"every",n,e,void 0,arguments)},filter(n,e){return ai(this,"filter",n,e,t=>t.map(i=>Gi(this,i)),arguments)},find(n,e){return ai(this,"find",n,e,t=>Gi(this,t),arguments)},findIndex(n,e){return ai(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return ai(this,"findLast",n,e,t=>Gi(this,t),arguments)},findLastIndex(n,e){return ai(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return ai(this,"forEach",n,e,void 0,arguments)},includes(...n){return Na(this,"includes",n)},indexOf(...n){return Na(this,"indexOf",n)},join(n){return As(this).join(n)},lastIndexOf(...n){return Na(this,"lastIndexOf",n)},map(n,e){return ai(this,"map",n,e,void 0,arguments)},pop(){return mr(this,"pop")},push(...n){return mr(this,"push",n)},reduce(n,...e){return Cu(this,"reduce",n,e)},reduceRight(n,...e){return Cu(this,"reduceRight",n,e)},shift(){return mr(this,"shift")},some(n,e){return ai(this,"some",n,e,void 0,arguments)},splice(...n){return mr(this,"splice",n)},toReversed(){return As(this).toReversed()},toSorted(n){return As(this).toSorted(n)},toSpliced(...n){return As(this).toSpliced(...n)},unshift(...n){return mr(this,"unshift",n)},values(){return Da(this,"values",n=>Gi(this,n))}};function Da(n,e,t){const i=xa(n),s=i[e]();return i!==n&&!En(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=t(r.value)),r}),s}const $p=Array.prototype;function ai(n,e,t,i,s,r){const o=xa(n),a=o!==n&&!En(n),l=o[e];if(l!==$p[e]){const h=l.apply(n,r);return a?Fn(h):h}let c=t;o!==n&&(a?c=function(h,d){return t.call(this,Gi(n,h),d,n)}:t.length>2&&(c=function(h,d){return t.call(this,h,d,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function Cu(n,e,t,i){const s=xa(n);let r=t;return s!==n&&(En(n)?t.length>3&&(r=function(o,a,l){return t.call(this,o,a,l,n)}):r=function(o,a,l){return t.call(this,o,Gi(n,a),l,n)}),s[e](r,...i)}function Na(n,e,t){const i=ft(n);Wt(i,"iterate",kr);const s=i[e](...t);return(s===-1||s===!1)&&qc(t[0])?(t[0]=ft(t[0]),i[e](...t)):s}function mr(n,e,t=[]){Ai(),Vc();const i=ft(n)[e].apply(n,t);return kc(),Ci(),i}const Yp=Uc("__proto__,__v_isRef,__isVue"),Gd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(ti));function Kp(n){ti(n)||(n=String(n));const e=ft(this);return Wt(e,"has",n),e.hasOwnProperty(n)}class Hd{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?om:jd:r?qd:Xd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=$e(e);if(!s){let l;if(o&&(l=jp[t]))return l;if(t==="hasOwnProperty")return Kp}const a=Reflect.get(e,t,qt(e)?e:i);if((ti(t)?Gd.has(t):Yp(t))||(s||Wt(e,"get",t),r))return a;if(qt(a)){const l=o&&zc(t)?a:a.value;return s&&wt(l)?Ll(l):l}return wt(a)?s?Ll(a):Es(a):a}}class Wd extends Hd{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];const o=$e(e)&&zc(t);if(!this._isShallow){const c=Ri(r);if(!En(i)&&!Ri(i)&&(r=ft(r),i=ft(i)),!o&&qt(r)&&!qt(i))return c||(r.value=i),!0}const a=o?Number(t)<e.length:pt(e,t),l=Reflect.set(e,t,i,qt(e)?e:s);return e===ft(s)&&(a?$i(i,r)&&vi(e,"set",t,i):vi(e,"add",t,i)),l}deleteProperty(e,t){const i=pt(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&vi(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!ti(t)||!Gd.has(t))&&Wt(e,"has",t),i}ownKeys(e){return Wt(e,"iterate",$e(e)?"length":_s),Reflect.ownKeys(e)}}class Zp extends Hd{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Jp=new Wd,Qp=new Zp,em=new Wd(!0);const Il=n=>n,ao=n=>Reflect.getPrototypeOf(n);function tm(n,e,t){return function(...i){const s=this.__v_raw,r=ft(s),o=Ys(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=t?Il:e?nr:Fn;return!e&&Wt(r,"iterate",l?Pl:_s),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function lo(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function nm(n,e){const t={get(s){const r=this.__v_raw,o=ft(r),a=ft(s);n||($i(s,a)&&Wt(o,"get",s),Wt(o,"get",a));const{has:l}=ao(o),c=e?Il:n?nr:Fn;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Wt(ft(s),"iterate",_s),s.size},has(s){const r=this.__v_raw,o=ft(r),a=ft(s);return n||($i(s,a)&&Wt(o,"has",s),Wt(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=ft(a),c=e?Il:n?nr:Fn;return!n&&Wt(l,"iterate",_s),a.forEach((u,h)=>s.call(r,c(u),c(h),o))}};return Yt(t,n?{add:lo("add"),set:lo("set"),delete:lo("delete"),clear:lo("clear")}:{add(s){!e&&!En(s)&&!Ri(s)&&(s=ft(s));const r=ft(this);return ao(r).has.call(r,s)||(r.add(s),vi(r,"add",s,s)),this},set(s,r){!e&&!En(r)&&!Ri(r)&&(r=ft(r));const o=ft(this),{has:a,get:l}=ao(o);let c=a.call(o,s);c||(s=ft(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?$i(r,u)&&vi(o,"set",s,r):vi(o,"add",s,r),this},delete(s){const r=ft(this),{has:o,get:a}=ao(r);let l=o.call(r,s);l||(s=ft(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&vi(r,"delete",s,void 0),c},clear(){const s=ft(this),r=s.size!==0,o=s.clear();return r&&vi(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=tm(s,n,e)}),t}function Wc(n,e){const t=nm(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(pt(t,s)&&s in i?t:i,s,r)}const im={get:Wc(!1,!1)},sm={get:Wc(!1,!0)},rm={get:Wc(!0,!1)};const Xd=new WeakMap,qd=new WeakMap,jd=new WeakMap,om=new WeakMap;function am(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function lm(n){return n.__v_skip||!Object.isExtensible(n)?0:am(Lp(n))}function Es(n){return Ri(n)?n:Xc(n,!1,Jp,im,Xd)}function cm(n){return Xc(n,!1,em,sm,qd)}function Ll(n){return Xc(n,!0,Qp,rm,jd)}function Xc(n,e,t,i,s){if(!wt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=lm(n);if(r===0)return n;const o=s.get(n);if(o)return o;const a=new Proxy(n,r===2?i:t);return s.set(n,a),a}function vs(n){return Ri(n)?vs(n.__v_raw):!!(n&&n.__v_isReactive)}function Ri(n){return!!(n&&n.__v_isReadonly)}function En(n){return!!(n&&n.__v_isShallow)}function qc(n){return n?!!n.__v_raw:!1}function ft(n){const e=n&&n.__v_raw;return e?ft(e):n}function um(n){return!pt(n,"__v_skip")&&Object.isExtensible(n)&&Pd(n,"__v_skip",!0),n}const Fn=n=>wt(n)?Es(n):n,nr=n=>wt(n)?Ll(n):n;function qt(n){return n?n.__v_isRef===!0:!1}function it(n){return hm(n,!1)}function hm(n,e){return qt(n)?n:new dm(n,e)}class dm{constructor(e,t){this.dep=new Hc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:ft(e),this._value=t?e:Fn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||En(e)||Ri(e);e=i?e:ft(e),$i(e,t)&&(this._rawValue=e,this._value=i?e:Fn(e),this.dep.trigger())}}function Ge(n){return qt(n)?n.value:n}const fm={get:(n,e,t)=>e==="__v_raw"?n:Ge(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return qt(s)&&!qt(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function $d(n){return vs(n)?n:new Proxy(n,fm)}class pm{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Hc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Vr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Et!==this)return Ud(this,!0),!0}get value(){const e=this.dep.track();return zd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function mm(n,e,t=!1){let i,s;return Qe(n)?i=n:(i=n.get,s=n.set),new pm(i,s,t)}const co={},Zo=new WeakMap;let us;function gm(n,e=!1,t=us){if(t){let i=Zo.get(t);i||Zo.set(t,i=[]),i.push(n)}}function xm(n,e,t=yt){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=t,c=v=>s?v:En(v)||s===!1||s===0?yi(v,1):yi(v);let u,h,d,f,g=!1,x=!1;if(qt(n)?(h=()=>n.value,g=En(n)):vs(n)?(h=()=>c(n),g=!0):$e(n)?(x=!0,g=n.some(v=>vs(v)||En(v)),h=()=>n.map(v=>{if(qt(v))return v.value;if(vs(v))return c(v);if(Qe(v))return l?l(v,2):v()})):Qe(n)?e?h=l?()=>l(n,2):n:h=()=>{if(d){Ai();try{d()}finally{Ci()}}const v=us;us=u;try{return l?l(n,3,[f]):n(f)}finally{us=v}}:h=Kn,e&&s){const v=h,S=s===!0?1/0:s;h=()=>yi(v(),S)}const m=Wp(),p=()=>{u.stop(),m&&m.active&&Bc(m.effects,u)};if(r&&e){const v=e;e=(...S)=>{v(...S),p()}}let _=x?new Array(n.length).fill(co):co;const M=v=>{if(!(!(u.flags&1)||!u.dirty&&!v))if(e){const S=u.run();if(s||g||(x?S.some((E,A)=>$i(E,_[A])):$i(S,_))){d&&d();const E=us;us=u;try{const A=[S,_===co?void 0:x&&_[0]===co?[]:_,f];_=S,l?l(e,3,A):e(...A)}finally{us=E}}}else u.run()};return a&&a(M),u=new Nd(h),u.scheduler=o?()=>o(M,!1):M,f=v=>gm(v,!1,u),d=u.onStop=()=>{const v=Zo.get(u);if(v){if(l)l(v,4);else for(const S of v)S();Zo.delete(u)}},e?i?M(!0):_=u.run():o?o(M.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function yi(n,e=1/0,t){if(e<=0||!wt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,qt(n))yi(n.value,e,t);else if($e(n))for(let i=0;i<n.length;i++)yi(n[i],e,t);else if(da(n)||Ys(n))n.forEach(i=>{yi(i,e,t)});else if(Cd(n)){for(const i in n)yi(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&yi(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Zr(n,e,t,i){try{return i?n(...i):n()}catch(s){_a(s,e,t)}}function ni(n,e,t,i){if(Qe(n)){const s=Zr(n,e,t,i);return s&&Td(s)&&s.catch(r=>{_a(r,e,t)}),s}if($e(n)){const s=[];for(let r=0;r<n.length;r++)s.push(ni(n[r],e,t,i));return s}}function _a(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||yt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](n,l,c)===!1)return}a=a.parent}if(r){Ai(),Zr(r,null,10,[n,l,c]),Ci();return}}_m(n,t,s,i,o)}function _m(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const en=[];let Gn=-1;const Ks=[];let Hi=null,Xs=0;const Yd=Promise.resolve();let Jo=null;function Kd(n){const e=Jo||Yd;return n?e.then(this?n.bind(this):n):e}function vm(n){let e=Gn+1,t=en.length;for(;e<t;){const i=e+t>>>1,s=en[i],r=Gr(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function jc(n){if(!(n.flags&1)){const e=Gr(n),t=en[en.length-1];!t||!(n.flags&2)&&e>=Gr(t)?en.push(n):en.splice(vm(e),0,n),n.flags|=1,Zd()}}function Zd(){Jo||(Jo=Yd.then(Qd))}function ym(n){$e(n)?Ks.push(...n):Hi&&n.id===-1?Hi.splice(Xs+1,0,n):n.flags&1||(Ks.push(n),n.flags|=1),Zd()}function Ru(n,e,t=Gn+1){for(;t<en.length;t++){const i=en[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;en.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Jd(n){if(Ks.length){const e=[...new Set(Ks)].sort((t,i)=>Gr(t)-Gr(i));if(Ks.length=0,Hi){Hi.push(...e);return}for(Hi=e,Xs=0;Xs<Hi.length;Xs++){const t=Hi[Xs];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Hi=null,Xs=0}}const Gr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Qd(n){try{for(Gn=0;Gn<en.length;Gn++){const e=en[Gn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Zr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Gn<en.length;Gn++){const e=en[Gn];e&&(e.flags&=-2)}Gn=-1,en.length=0,Jd(),Jo=null,(en.length||Ks.length)&&Qd()}}let bn=null,ef=null;function Qo(n){const e=bn;return bn=n,ef=n&&n.type.__scopeId||null,e}function Sm(n,e=bn,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&zu(-1);const r=Qo(e);let o;try{o=n(...s)}finally{Qo(r),i._d&&zu(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function ea(n,e){if(bn===null)return n;const t=Ma(bn),i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=yt]=e[s];r&&(Qe(r)&&(r={mounted:r,updated:r}),r.deep&&yi(o),i.push({dir:r,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function es(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Ai(),ni(l,t,8,[n.el,a,n,e]),Ci())}}function Mm(n,e){if(nn){let t=nn.provides;const i=nn.parent&&nn.parent.provides;i===t&&(t=nn.provides=Object.create(i)),t[n]=e}}function ko(n,e,t=!1){const i=yg();if(i||Js){let s=Js?Js._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&Qe(e)?e.call(i&&i.proxy):e}}const bm=Symbol.for("v-scx"),Em=()=>ko(bm);function Zs(n,e,t){return tf(n,e,t)}function tf(n,e,t=yt){const{immediate:i,deep:s,flush:r,once:o}=t,a=Yt({},t),l=e&&i||!e&&r!=="post";let c;if(Wr){if(r==="sync"){const f=Em();c=f.__watcherHandles||(f.__watcherHandles=[])}else if(!l){const f=()=>{};return f.stop=Kn,f.resume=Kn,f.pause=Kn,f}}const u=nn;a.call=(f,g,x)=>ni(f,u,g,x);let h=!1;r==="post"?a.scheduler=f=>{pn(f,u&&u.suspense)}:r!=="sync"&&(h=!0,a.scheduler=(f,g)=>{g?f():jc(f)}),a.augmentJob=f=>{e&&(f.flags|=4),h&&(f.flags|=2,u&&(f.id=u.uid,f.i=u))};const d=xm(n,e,a);return Wr&&(c?c.push(d):l&&d()),d}function wm(n,e,t){const i=this.proxy,s=Ft(n)?n.includes(".")?nf(i,n):()=>i[n]:n.bind(i,i);let r;Qe(e)?r=e:(r=e.handler,t=e);const o=Qr(this),a=tf(s,r.bind(i),t);return o(),a}function nf(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const Tm=Symbol("_vte"),Am=n=>n.__isTeleport,Cm=Symbol("_leaveCb");function $c(n,e){n.shapeFlag&6&&n.component?(n.transition=e,$c(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function cr(n,e){return Qe(n)?Yt({name:n.name},e,{setup:n}):n}function sf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}const ta=new WeakMap;function Fr(n,e,t,i,s=!1){if($e(n)){n.forEach((g,x)=>Fr(g,e&&($e(e)?e[x]:e),t,i,s));return}if(Ur(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Fr(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?Ma(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,u=a.refs===yt?a.refs={}:a.refs,h=a.setupState,d=ft(h),f=h===yt?wd:g=>pt(d,g);if(c!=null&&c!==l){if(Pu(e),Ft(c))u[c]=null,f(c)&&(h[c]=null);else if(qt(c)){c.value=null;const g=e;g.k&&(u[g.k]=null)}}if(Qe(l))Zr(l,a,12,[o,u]);else{const g=Ft(l),x=qt(l);if(g||x){const m=()=>{if(n.f){const p=g?f(l)?h[l]:u[l]:l.value;if(s)$e(p)&&Bc(p,r);else if($e(p))p.includes(r)||p.push(r);else if(g)u[l]=[r],f(l)&&(h[l]=u[l]);else{const _=[r];l.value=_,n.k&&(u[n.k]=_)}}else g?(u[l]=o,f(l)&&(h[l]=o)):x&&(l.value=o,n.k&&(u[n.k]=o))};if(o){const p=()=>{m(),ta.delete(n)};p.id=-1,ta.set(n,p),pn(p,t)}else Pu(n),m()}}}function Pu(n){const e=ta.get(n);e&&(e.flags|=8,ta.delete(n))}ma().requestIdleCallback;ma().cancelIdleCallback;const Ur=n=>!!n.type.__asyncLoader,rf=n=>n.type.__isKeepAlive;function Rm(n,e){of(n,"a",e)}function Pm(n,e){of(n,"da",e)}function of(n,e,t=nn){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(va(e,i,t),t){let s=t.parent;for(;s&&s.parent;)rf(s.parent.vnode)&&Im(i,e,t,s),s=s.parent}}function Im(n,e,t,i){const s=va(e,n,i,!0);ws(()=>{Bc(i[e],s)},t)}function va(n,e,t=nn,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{Ai();const a=Qr(t),l=ni(e,t,n,o);return a(),Ci(),l});return i?s.unshift(r):s.push(r),r}}const Li=n=>(e,t=nn)=>{(!Wr||n==="sp")&&va(n,(...i)=>e(...i),t)},Lm=Li("bm"),Jr=Li("m"),Dm=Li("bu"),Nm=Li("u"),Fm=Li("bum"),ws=Li("um"),Um=Li("sp"),Om=Li("rtg"),Bm=Li("rtc");function zm(n,e=nn){va("ec",n,e)}const Vm=Symbol.for("v-ndc");function xn(n,e,t,i){let s;const r=t,o=$e(n);if(o||Ft(n)){const a=o&&vs(n);let l=!1,c=!1;a&&(l=!En(n),c=Ri(n),n=xa(n)),s=new Array(n.length);for(let u=0,h=n.length;u<h;u++)s[u]=e(l?c?nr(Fn(n[u])):Fn(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=e(a+1,a,void 0,r)}else if(wt(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(n[u],u,l,r)}}else s=[];return s}const Dl=n=>n?Cf(n)?Ma(n):Dl(n.parent):null,Or=Yt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Dl(n.parent),$root:n=>Dl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>lf(n),$forceUpdate:n=>n.f||(n.f=()=>{jc(n.update)}),$nextTick:n=>n.n||(n.n=Kd.bind(n.proxy)),$watch:n=>wm.bind(n)}),Fa=(n,e)=>n!==yt&&!n.__isScriptSetup&&pt(n,e),km={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(Fa(i,e))return o[e]=1,i[e];if(s!==yt&&pt(s,e))return o[e]=2,s[e];if(pt(r,e))return o[e]=3,r[e];if(t!==yt&&pt(t,e))return o[e]=4,t[e];Nl&&(o[e]=0)}}const c=Or[e];let u,h;if(c)return e==="$attrs"&&Wt(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==yt&&pt(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,pt(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return Fa(s,e)?(s[e]=t,!0):i!==yt&&pt(i,e)?(i[e]=t,!0):pt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(t[a]||n!==yt&&a[0]!=="$"&&pt(n,a)||Fa(e,a)||pt(r,a)||pt(i,a)||pt(Or,a)||pt(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:pt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Iu(n){return $e(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Nl=!0;function Gm(n){const e=lf(n),t=n.proxy,i=n.ctx;Nl=!1,e.beforeCreate&&Lu(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:g,activated:x,deactivated:m,beforeDestroy:p,beforeUnmount:_,destroyed:M,unmounted:v,render:S,renderTracked:E,renderTriggered:A,errorCaptured:D,serverPrefetch:b,expose:T,inheritAttrs:L,components:V,directives:F,filters:H}=e;if(c&&Hm(c,i,null),o)for(const k in o){const q=o[k];Qe(q)&&(i[k]=q.bind(t))}if(s){const k=s.call(t,t);wt(k)&&(n.data=Es(k))}if(Nl=!0,r)for(const k in r){const q=r[k],ae=Qe(q)?q.bind(t,t):Qe(q.get)?q.get.bind(t,t):Kn,oe=!Qe(q)&&Qe(q.set)?q.set.bind(t):Kn,fe=Jc({get:ae,set:oe});Object.defineProperty(i,k,{enumerable:!0,configurable:!0,get:()=>fe.value,set:ge=>fe.value=ge})}if(a)for(const k in a)af(a[k],i,t,k);if(l){const k=Qe(l)?l.call(t):l;Reflect.ownKeys(k).forEach(q=>{Mm(q,k[q])})}u&&Lu(u,n,"c");function U(k,q){$e(q)?q.forEach(ae=>k(ae.bind(t))):q&&k(q.bind(t))}if(U(Lm,h),U(Jr,d),U(Dm,f),U(Nm,g),U(Rm,x),U(Pm,m),U(zm,D),U(Bm,E),U(Om,A),U(Fm,_),U(ws,v),U(Um,b),$e(T))if(T.length){const k=n.exposed||(n.exposed={});T.forEach(q=>{Object.defineProperty(k,q,{get:()=>t[q],set:ae=>t[q]=ae,enumerable:!0})})}else n.exposed||(n.exposed={});S&&n.render===Kn&&(n.render=S),L!=null&&(n.inheritAttrs=L),V&&(n.components=V),F&&(n.directives=F),b&&sf(n)}function Hm(n,e,t=Kn){$e(n)&&(n=Fl(n));for(const i in n){const s=n[i];let r;wt(s)?"default"in s?r=ko(s.from||i,s.default,!0):r=ko(s.from||i):r=ko(s),qt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Lu(n,e,t){ni($e(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function af(n,e,t,i){let s=i.includes(".")?nf(t,i):()=>t[i];if(Ft(n)){const r=e[n];Qe(r)&&Zs(s,r)}else if(Qe(n))Zs(s,n.bind(t));else if(wt(n))if($e(n))n.forEach(r=>af(r,e,t,i));else{const r=Qe(n.handler)?n.handler.bind(t):e[n.handler];Qe(r)&&Zs(s,r,n)}}function lf(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>na(l,c,o,!0)),na(l,e,o)),wt(e)&&r.set(e,l),l}function na(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&na(n,r,t,!0),s&&s.forEach(o=>na(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Wm[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Wm={data:Du,props:Nu,emits:Nu,methods:Rr,computed:Rr,beforeCreate:Zt,created:Zt,beforeMount:Zt,mounted:Zt,beforeUpdate:Zt,updated:Zt,beforeDestroy:Zt,beforeUnmount:Zt,destroyed:Zt,unmounted:Zt,activated:Zt,deactivated:Zt,errorCaptured:Zt,serverPrefetch:Zt,components:Rr,directives:Rr,watch:qm,provide:Du,inject:Xm};function Du(n,e){return e?n?function(){return Yt(Qe(n)?n.call(this,this):n,Qe(e)?e.call(this,this):e)}:e:n}function Xm(n,e){return Rr(Fl(n),Fl(e))}function Fl(n){if($e(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Zt(n,e){return n?[...new Set([].concat(n,e))]:e}function Rr(n,e){return n?Yt(Object.create(null),n,e):e}function Nu(n,e){return n?$e(n)&&$e(e)?[...new Set([...n,...e])]:Yt(Object.create(null),Iu(n),Iu(e??{})):e}function qm(n,e){if(!n)return e;if(!e)return n;const t=Yt(Object.create(null),n);for(const i in e)t[i]=Zt(n[i],e[i]);return t}function cf(){return{app:null,config:{isNativeTag:wd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let jm=0;function $m(n,e){return function(i,s=null){Qe(i)||(i=Yt({},i)),s!=null&&!wt(s)&&(s=null);const r=cf(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:jm++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Tg,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&Qe(u.install)?(o.add(u),u.install(c,...h)):Qe(u)&&(o.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,d){if(!l){const f=c._ceVNode||Zn(i,s);return f.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),n(f,u,d),l=!0,c._container=u,u.__vue_app__=c,Ma(f.component)}},onUnmount(u){a.push(u)},unmount(){l&&(ni(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=Js;Js=c;try{return u()}finally{Js=h}}};return c}}let Js=null;const Ym=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Yi(e)}Modifiers`]||n[`${bs(e)}Modifiers`];function Km(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||yt;let s=t;const r=e.startsWith("update:"),o=r&&Ym(i,e.slice(7));o&&(o.trim&&(s=t.map(u=>Ft(u)?u.trim():u)),o.number&&(s=t.map(pa)));let a,l=i[a=Pa(e)]||i[a=Pa(Yi(e))];!l&&r&&(l=i[a=Pa(bs(e))]),l&&ni(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,ni(c,n,6,s)}}const Zm=new WeakMap;function uf(n,e,t=!1){const i=t?Zm:e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!Qe(n)){const l=c=>{const u=uf(c,e,!0);u&&(a=!0,Yt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(wt(n)&&i.set(n,null),null):($e(r)?r.forEach(l=>o[l]=null):Yt(o,r),wt(n)&&i.set(n,o),o)}function ya(n,e){return!n||!ha(e)?!1:(e=e.slice(2).replace(/Once$/,""),pt(n,e[0].toLowerCase()+e.slice(1))||pt(n,bs(e))||pt(n,e))}function Fu(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:d,setupState:f,ctx:g,inheritAttrs:x}=n,m=Qo(n);let p,_;try{if(t.shapeFlag&4){const v=s||i,S=v;p=Wn(c.call(S,v,u,h,f,d,g)),_=a}else{const v=e;p=Wn(v.length>1?v(h,{attrs:a,slots:o,emit:l}):v(h,null)),_=e.props?a:Jm(a)}}catch(v){Br.length=0,_a(v,n,1),p=Zn(Ki)}let M=p;if(_&&x!==!1){const v=Object.keys(_),{shapeFlag:S}=M;v.length&&S&7&&(r&&v.some(Oc)&&(_=Qm(_,r)),M=ir(M,_,!1,!0))}return t.dirs&&(M=ir(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(t.dirs):t.dirs),t.transition&&$c(M,t.transition),p=M,Qo(m),p}const Jm=n=>{let e;for(const t in n)(t==="class"||t==="style"||ha(t))&&((e||(e={}))[t]=n[t]);return e},Qm=(n,e)=>{const t={};for(const i in n)(!Oc(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function eg(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Uu(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==i[d]&&!ya(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Uu(i,o,c):!0:!!o;return!1}function Uu(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==n[r]&&!ya(t,r))return!0}return!1}function tg({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const hf={},df=()=>Object.create(hf),ff=n=>Object.getPrototypeOf(n)===hf;function ng(n,e,t,i=!1){const s={},r=df();n.propsDefaults=Object.create(null),pf(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:cm(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function ig(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=ft(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(ya(n.emitsOptions,d))continue;const f=e[d];if(l)if(pt(r,d))f!==r[d]&&(r[d]=f,c=!0);else{const g=Yi(d);s[g]=Ul(l,a,g,f,n,!1)}else f!==r[d]&&(r[d]=f,c=!0)}}}else{pf(n,e,s,r)&&(c=!0);let u;for(const h in a)(!e||!pt(e,h)&&((u=bs(h))===h||!pt(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(s[h]=Ul(l,a,h,void 0,n,!0)):delete s[h]);if(r!==a)for(const h in r)(!e||!pt(e,h))&&(delete r[h],c=!0)}c&&vi(n.attrs,"set","")}function pf(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Lr(l))continue;const c=e[l];let u;s&&pt(s,u=Yi(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:ya(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=ft(t),c=a||yt;for(let u=0;u<r.length;u++){const h=r[u];t[h]=Ul(s,l,h,c[h],n,!pt(c,h))}}return o}function Ul(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=pt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Qe(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=Qr(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===bs(t))&&(i=!0))}return i}const sg=new WeakMap;function mf(n,e,t=!1){const i=t?sg:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!Qe(n)){const u=h=>{l=!0;const[d,f]=mf(h,e,!0);Yt(o,d),f&&a.push(...f)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return wt(n)&&i.set(n,$s),$s;if($e(r))for(let u=0;u<r.length;u++){const h=Yi(r[u]);Ou(h)&&(o[h]=yt)}else if(r)for(const u in r){const h=Yi(u);if(Ou(h)){const d=r[u],f=o[h]=$e(d)||Qe(d)?{type:d}:Yt({},d),g=f.type;let x=!1,m=!0;if($e(g))for(let p=0;p<g.length;++p){const _=g[p],M=Qe(_)&&_.name;if(M==="Boolean"){x=!0;break}else M==="String"&&(m=!1)}else x=Qe(g)&&g.name==="Boolean";f[0]=x,f[1]=m,(x||pt(f,"default"))&&a.push(h)}}const c=[o,a];return wt(n)&&i.set(n,c),c}function Ou(n){return n[0]!=="$"&&!Lr(n)}const Yc=n=>n==="_"||n==="_ctx"||n==="$stable",Kc=n=>$e(n)?n.map(Wn):[Wn(n)],rg=(n,e,t)=>{if(e._n)return e;const i=Sm((...s)=>Kc(e(...s)),t);return i._c=!1,i},gf=(n,e,t)=>{const i=n._ctx;for(const s in n){if(Yc(s))continue;const r=n[s];if(Qe(r))e[s]=rg(s,r,i);else if(r!=null){const o=Kc(r);e[s]=()=>o}}},xf=(n,e)=>{const t=Kc(e);n.slots.default=()=>t},_f=(n,e,t)=>{for(const i in e)(t||!Yc(i))&&(n[i]=e[i])},og=(n,e,t)=>{const i=n.slots=df();if(n.vnode.shapeFlag&32){const s=e._;s?(_f(i,e,t),t&&Pd(i,"_",s,!0)):gf(e,i)}else e&&xf(n,e)},ag=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=yt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:_f(s,e,t):(r=!e.$stable,gf(e,s)),o=e}else e&&(xf(n,e),o={default:1});if(r)for(const a in s)!Yc(a)&&o[a]==null&&delete s[a]},pn=dg;function lg(n){return cg(n)}function cg(n,e){const t=ma();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=Kn,insertStaticContent:g}=n,x=(I,N,W,ee=null,$=null,J=null,P=void 0,de=null,le=!!N.dynamicChildren)=>{if(I===N)return;I&&!gr(I,N)&&(ee=G(I),ge(I,$,J,!0),I=null),N.patchFlag===-2&&(le=!1,N.dynamicChildren=null);const{type:se,ref:he,shapeFlag:C}=N;switch(se){case Sa:m(I,N,W,ee);break;case Ki:p(I,N,W,ee);break;case Go:I==null&&_(N,W,ee,P);break;case At:V(I,N,W,ee,$,J,P,de,le);break;default:C&1?S(I,N,W,ee,$,J,P,de,le):C&6?F(I,N,W,ee,$,J,P,de,le):(C&64||C&128)&&se.process(I,N,W,ee,$,J,P,de,le,ce)}he!=null&&$?Fr(he,I&&I.ref,J,N||I,!N):he==null&&I&&I.ref!=null&&Fr(I.ref,null,J,I,!0)},m=(I,N,W,ee)=>{if(I==null)i(N.el=a(N.children),W,ee);else{const $=N.el=I.el;N.children!==I.children&&c($,N.children)}},p=(I,N,W,ee)=>{I==null?i(N.el=l(N.children||""),W,ee):N.el=I.el},_=(I,N,W,ee)=>{[I.el,I.anchor]=g(I.children,N,W,ee,I.el,I.anchor)},M=({el:I,anchor:N},W,ee)=>{let $;for(;I&&I!==N;)$=d(I),i(I,W,ee),I=$;i(N,W,ee)},v=({el:I,anchor:N})=>{let W;for(;I&&I!==N;)W=d(I),s(I),I=W;s(N)},S=(I,N,W,ee,$,J,P,de,le)=>{if(N.type==="svg"?P="svg":N.type==="math"&&(P="mathml"),I==null)E(N,W,ee,$,J,P,de,le);else{const se=I.el&&I.el._isVueCE?I.el:null;try{se&&se._beginPatch(),b(I,N,$,J,P,de,le)}finally{se&&se._endPatch()}}},E=(I,N,W,ee,$,J,P,de)=>{let le,se;const{props:he,shapeFlag:C,transition:y,dirs:O}=I;if(le=I.el=o(I.type,J,he&&he.is,he),C&8?u(le,I.children):C&16&&D(I.children,le,null,ee,$,Ua(I,J),P,de),O&&es(I,null,ee,"created"),A(le,I,I.scopeId,P,ee),he){for(const re in he)re!=="value"&&!Lr(re)&&r(le,re,null,he[re],J,ee);"value"in he&&r(le,"value",null,he.value,J),(se=he.onVnodeBeforeMount)&&On(se,ee,I)}O&&es(I,null,ee,"beforeMount");const Z=ug($,y);Z&&y.beforeEnter(le),i(le,N,W),((se=he&&he.onVnodeMounted)||Z||O)&&pn(()=>{se&&On(se,ee,I),Z&&y.enter(le),O&&es(I,null,ee,"mounted")},$)},A=(I,N,W,ee,$)=>{if(W&&f(I,W),ee)for(let J=0;J<ee.length;J++)f(I,ee[J]);if($){let J=$.subTree;if(N===J||Mf(J.type)&&(J.ssContent===N||J.ssFallback===N)){const P=$.vnode;A(I,P,P.scopeId,P.slotScopeIds,$.parent)}}},D=(I,N,W,ee,$,J,P,de,le=0)=>{for(let se=le;se<I.length;se++){const he=I[se]=de?Wi(I[se]):Wn(I[se]);x(null,he,N,W,ee,$,J,P,de)}},b=(I,N,W,ee,$,J,P)=>{const de=N.el=I.el;let{patchFlag:le,dynamicChildren:se,dirs:he}=N;le|=I.patchFlag&16;const C=I.props||yt,y=N.props||yt;let O;if(W&&ts(W,!1),(O=y.onVnodeBeforeUpdate)&&On(O,W,N,I),he&&es(N,I,W,"beforeUpdate"),W&&ts(W,!0),(C.innerHTML&&y.innerHTML==null||C.textContent&&y.textContent==null)&&u(de,""),se?T(I.dynamicChildren,se,de,W,ee,Ua(N,$),J):P||q(I,N,de,null,W,ee,Ua(N,$),J,!1),le>0){if(le&16)L(de,C,y,W,$);else if(le&2&&C.class!==y.class&&r(de,"class",null,y.class,$),le&4&&r(de,"style",C.style,y.style,$),le&8){const Z=N.dynamicProps;for(let re=0;re<Z.length;re++){const Y=Z[re],Te=C[Y],xe=y[Y];(xe!==Te||Y==="value")&&r(de,Y,Te,xe,$,W)}}le&1&&I.children!==N.children&&u(de,N.children)}else!P&&se==null&&L(de,C,y,W,$);((O=y.onVnodeUpdated)||he)&&pn(()=>{O&&On(O,W,N,I),he&&es(N,I,W,"updated")},ee)},T=(I,N,W,ee,$,J,P)=>{for(let de=0;de<N.length;de++){const le=I[de],se=N[de],he=le.el&&(le.type===At||!gr(le,se)||le.shapeFlag&198)?h(le.el):W;x(le,se,he,null,ee,$,J,P,!0)}},L=(I,N,W,ee,$)=>{if(N!==W){if(N!==yt)for(const J in N)!Lr(J)&&!(J in W)&&r(I,J,N[J],null,$,ee);for(const J in W){if(Lr(J))continue;const P=W[J],de=N[J];P!==de&&J!=="value"&&r(I,J,de,P,$,ee)}"value"in W&&r(I,"value",N.value,W.value,$)}},V=(I,N,W,ee,$,J,P,de,le)=>{const se=N.el=I?I.el:a(""),he=N.anchor=I?I.anchor:a("");let{patchFlag:C,dynamicChildren:y,slotScopeIds:O}=N;O&&(de=de?de.concat(O):O),I==null?(i(se,W,ee),i(he,W,ee),D(N.children||[],W,he,$,J,P,de,le)):C>0&&C&64&&y&&I.dynamicChildren&&I.dynamicChildren.length===y.length?(T(I.dynamicChildren,y,W,$,J,P,de),(N.key!=null||$&&N===$.subTree)&&vf(I,N,!0)):q(I,N,W,he,$,J,P,de,le)},F=(I,N,W,ee,$,J,P,de,le)=>{N.slotScopeIds=de,I==null?N.shapeFlag&512?$.ctx.activate(N,W,ee,P,le):H(N,W,ee,$,J,P,le):z(I,N,le)},H=(I,N,W,ee,$,J,P)=>{const de=I.component=vg(I,ee,$);if(rf(I)&&(de.ctx.renderer=ce),Sg(de,!1,P),de.asyncDep){if($&&$.registerDep(de,U,P),!I.el){const le=de.subTree=Zn(Ki);p(null,le,N,W),I.placeholder=le.el}}else U(de,I,N,W,$,J,P)},z=(I,N,W)=>{const ee=N.component=I.component;if(eg(I,N,W))if(ee.asyncDep&&!ee.asyncResolved){k(ee,N,W);return}else ee.next=N,ee.update();else N.el=I.el,ee.vnode=N},U=(I,N,W,ee,$,J,P)=>{const de=()=>{if(I.isMounted){let{next:C,bu:y,u:O,parent:Z,vnode:re}=I;{const ze=yf(I);if(ze){C&&(C.el=re.el,k(I,C,P)),ze.asyncDep.then(()=>{I.isUnmounted||de()});return}}let Y=C,Te;ts(I,!1),C?(C.el=re.el,k(I,C,P)):C=re,y&&Vo(y),(Te=C.props&&C.props.onVnodeBeforeUpdate)&&On(Te,Z,C,re),ts(I,!0);const xe=Fu(I),Re=I.subTree;I.subTree=xe,x(Re,xe,h(Re.el),G(Re),I,$,J),C.el=xe.el,Y===null&&tg(I,xe.el),O&&pn(O,$),(Te=C.props&&C.props.onVnodeUpdated)&&pn(()=>On(Te,Z,C,re),$)}else{let C;const{el:y,props:O}=N,{bm:Z,m:re,parent:Y,root:Te,type:xe}=I,Re=Ur(N);ts(I,!1),Z&&Vo(Z),!Re&&(C=O&&O.onVnodeBeforeMount)&&On(C,Y,N),ts(I,!0);{Te.ce&&Te.ce._def.shadowRoot!==!1&&Te.ce._injectChildStyle(xe);const ze=I.subTree=Fu(I);x(null,ze,W,ee,I,$,J),N.el=ze.el}if(re&&pn(re,$),!Re&&(C=O&&O.onVnodeMounted)){const ze=N;pn(()=>On(C,Y,ze),$)}(N.shapeFlag&256||Y&&Ur(Y.vnode)&&Y.vnode.shapeFlag&256)&&I.a&&pn(I.a,$),I.isMounted=!0,N=W=ee=null}};I.scope.on();const le=I.effect=new Nd(de);I.scope.off();const se=I.update=le.run.bind(le),he=I.job=le.runIfDirty.bind(le);he.i=I,he.id=I.uid,le.scheduler=()=>jc(he),ts(I,!0),se()},k=(I,N,W)=>{N.component=I;const ee=I.vnode.props;I.vnode=N,I.next=null,ig(I,N.props,ee,W),ag(I,N.children,W),Ai(),Ru(I),Ci()},q=(I,N,W,ee,$,J,P,de,le=!1)=>{const se=I&&I.children,he=I?I.shapeFlag:0,C=N.children,{patchFlag:y,shapeFlag:O}=N;if(y>0){if(y&128){oe(se,C,W,ee,$,J,P,de,le);return}else if(y&256){ae(se,C,W,ee,$,J,P,de,le);return}}O&8?(he&16&&B(se,$,J),C!==se&&u(W,C)):he&16?O&16?oe(se,C,W,ee,$,J,P,de,le):B(se,$,J,!0):(he&8&&u(W,""),O&16&&D(C,W,ee,$,J,P,de,le))},ae=(I,N,W,ee,$,J,P,de,le)=>{I=I||$s,N=N||$s;const se=I.length,he=N.length,C=Math.min(se,he);let y;for(y=0;y<C;y++){const O=N[y]=le?Wi(N[y]):Wn(N[y]);x(I[y],O,W,null,$,J,P,de,le)}se>he?B(I,$,J,!0,!1,C):D(N,W,ee,$,J,P,de,le,C)},oe=(I,N,W,ee,$,J,P,de,le)=>{let se=0;const he=N.length;let C=I.length-1,y=he-1;for(;se<=C&&se<=y;){const O=I[se],Z=N[se]=le?Wi(N[se]):Wn(N[se]);if(gr(O,Z))x(O,Z,W,null,$,J,P,de,le);else break;se++}for(;se<=C&&se<=y;){const O=I[C],Z=N[y]=le?Wi(N[y]):Wn(N[y]);if(gr(O,Z))x(O,Z,W,null,$,J,P,de,le);else break;C--,y--}if(se>C){if(se<=y){const O=y+1,Z=O<he?N[O].el:ee;for(;se<=y;)x(null,N[se]=le?Wi(N[se]):Wn(N[se]),W,Z,$,J,P,de,le),se++}}else if(se>y)for(;se<=C;)ge(I[se],$,J,!0),se++;else{const O=se,Z=se,re=new Map;for(se=Z;se<=y;se++){const Me=N[se]=le?Wi(N[se]):Wn(N[se]);Me.key!=null&&re.set(Me.key,se)}let Y,Te=0;const xe=y-Z+1;let Re=!1,ze=0;const _e=new Array(xe);for(se=0;se<xe;se++)_e[se]=0;for(se=O;se<=C;se++){const Me=I[se];if(Te>=xe){ge(Me,$,J,!0);continue}let Pe;if(Me.key!=null)Pe=re.get(Me.key);else for(Y=Z;Y<=y;Y++)if(_e[Y-Z]===0&&gr(Me,N[Y])){Pe=Y;break}Pe===void 0?ge(Me,$,J,!0):(_e[Pe-Z]=se+1,Pe>=ze?ze=Pe:Re=!0,x(Me,N[Pe],W,null,$,J,P,de,le),Te++)}const Se=Re?hg(_e):$s;for(Y=Se.length-1,se=xe-1;se>=0;se--){const Me=Z+se,Pe=N[Me],Ee=N[Me+1],je=Me+1<he?Ee.el||Sf(Ee):ee;_e[se]===0?x(null,Pe,W,je,$,J,P,de,le):Re&&(Y<0||se!==Se[Y]?fe(Pe,W,je,2):Y--)}}},fe=(I,N,W,ee,$=null)=>{const{el:J,type:P,transition:de,children:le,shapeFlag:se}=I;if(se&6){fe(I.component.subTree,N,W,ee);return}if(se&128){I.suspense.move(N,W,ee);return}if(se&64){P.move(I,N,W,ce);return}if(P===At){i(J,N,W);for(let C=0;C<le.length;C++)fe(le[C],N,W,ee);i(I.anchor,N,W);return}if(P===Go){M(I,N,W);return}if(ee!==2&&se&1&&de)if(ee===0)de.beforeEnter(J),i(J,N,W),pn(()=>de.enter(J),$);else{const{leave:C,delayLeave:y,afterLeave:O}=de,Z=()=>{I.ctx.isUnmounted?s(J):i(J,N,W)},re=()=>{J._isLeaving&&J[Cm](!0),C(J,()=>{Z(),O&&O()})};y?y(J,Z,re):re()}else i(J,N,W)},ge=(I,N,W,ee=!1,$=!1)=>{const{type:J,props:P,ref:de,children:le,dynamicChildren:se,shapeFlag:he,patchFlag:C,dirs:y,cacheIndex:O}=I;if(C===-2&&($=!1),de!=null&&(Ai(),Fr(de,null,W,I,!0),Ci()),O!=null&&(N.renderCache[O]=void 0),he&256){N.ctx.deactivate(I);return}const Z=he&1&&y,re=!Ur(I);let Y;if(re&&(Y=P&&P.onVnodeBeforeUnmount)&&On(Y,N,I),he&6)Ze(I.component,W,ee);else{if(he&128){I.suspense.unmount(W,ee);return}Z&&es(I,null,N,"beforeUnmount"),he&64?I.type.remove(I,N,W,ce,ee):se&&!se.hasOnce&&(J!==At||C>0&&C&64)?B(se,N,W,!1,!0):(J===At&&C&384||!$&&he&16)&&B(le,N,W),ee&&Oe(I)}(re&&(Y=P&&P.onVnodeUnmounted)||Z)&&pn(()=>{Y&&On(Y,N,I),Z&&es(I,null,N,"unmounted")},W)},Oe=I=>{const{type:N,el:W,anchor:ee,transition:$}=I;if(N===At){Ve(W,ee);return}if(N===Go){v(I);return}const J=()=>{s(W),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(I.shapeFlag&1&&$&&!$.persisted){const{leave:P,delayLeave:de}=$,le=()=>P(W,J);de?de(I.el,J,le):le()}else J()},Ve=(I,N)=>{let W;for(;I!==N;)W=d(I),s(I),I=W;s(N)},Ze=(I,N,W)=>{const{bum:ee,scope:$,job:J,subTree:P,um:de,m:le,a:se}=I;Bu(le),Bu(se),ee&&Vo(ee),$.stop(),J&&(J.flags|=8,ge(P,I,N,W)),de&&pn(de,N),pn(()=>{I.isUnmounted=!0},N)},B=(I,N,W,ee=!1,$=!1,J=0)=>{for(let P=J;P<I.length;P++)ge(I[P],N,W,ee,$)},G=I=>{if(I.shapeFlag&6)return G(I.component.subTree);if(I.shapeFlag&128)return I.suspense.next();const N=d(I.anchor||I.el),W=N&&N[Tm];return W?d(W):N};let ie=!1;const ue=(I,N,W)=>{let ee;I==null?N._vnode&&(ge(N._vnode,null,null,!0),ee=N._vnode.component):x(N._vnode||null,I,N,null,null,null,W),N._vnode=I,ie||(ie=!0,Ru(ee),Jd(),ie=!1)},ce={p:x,um:ge,m:fe,r:Oe,mt:H,mc:D,pc:q,pbc:T,n:G,o:n};return{render:ue,hydrate:void 0,createApp:$m(ue)}}function Ua({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function ts({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function ug(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function vf(n,e,t=!1){const i=n.children,s=e.children;if($e(i)&&$e(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Wi(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&vf(o,a)),a.type===Sa&&(a.patchFlag!==-1?a.el=o.el:a.__elIndex=r+(n.type===At?1:0)),a.type===Ki&&!a.el&&(a.el=o.el)}}function hg(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function yf(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:yf(e)}function Bu(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Sf(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?Sf(e.subTree):null}const Mf=n=>n.__isSuspense;function dg(n,e){e&&e.pendingBranch?$e(n)?e.effects.push(...n):e.effects.push(n):ym(n)}const At=Symbol.for("v-fgt"),Sa=Symbol.for("v-txt"),Ki=Symbol.for("v-cmt"),Go=Symbol.for("v-stc"),Br=[];let gn=null;function qe(n=!1){Br.push(gn=n?null:[])}function fg(){Br.pop(),gn=Br[Br.length-1]||null}let Hr=1;function zu(n,e=!1){Hr+=n,n<0&&gn&&e&&(gn.hasOnce=!0)}function bf(n){return n.dynamicChildren=Hr>0?gn||$s:null,fg(),Hr>0&&gn&&gn.push(n),n}function Je(n,e,t,i,s,r){return bf(pe(n,e,t,i,s,r,!0))}function qs(n,e,t,i,s){return bf(Zn(n,e,t,i,s,!0))}function Ef(n){return n?n.__v_isVNode===!0:!1}function gr(n,e){return n.type===e.type&&n.key===e.key}const wf=({key:n})=>n??null,Ho=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Ft(n)||qt(n)||Qe(n)?{i:bn,r:n,k:e,f:!!t}:n:null);function pe(n,e=null,t=null,i=0,s=null,r=n===At?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&wf(e),ref:e&&Ho(e),scopeId:ef,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:bn};return a?(Zc(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=Ft(t)?8:16),Hr>0&&!o&&gn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&gn.push(l),l}const Zn=pg;function pg(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===Vm)&&(n=Ki),Ef(n)){const a=ir(n,e,!0);return t&&Zc(a,t),Hr>0&&!r&&gn&&(a.shapeFlag&6?gn[gn.indexOf(n)]=a:gn.push(a)),a.patchFlag=-2,a}if(wg(n)&&(n=n.__vccOpts),e){e=mg(e);let{class:a,style:l}=e;a&&!Ft(a)&&(e.class=jn(a)),wt(l)&&(qc(l)&&!$e(l)&&(l=Yt({},l)),e.style=tn(l))}const o=Ft(n)?1:Mf(n)?128:Am(n)?64:wt(n)?4:Qe(n)?2:0;return pe(n,e,t,i,s,o,r,!0)}function mg(n){return n?qc(n)||ff(n)?Yt({},n):n:null}function ir(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=e?gg(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&wf(c),ref:e&&e.ref?t&&r?$e(r)?r.concat(Ho(e)):[r,Ho(e)]:Ho(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==At?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&ir(n.ssContent),ssFallback:n.ssFallback&&ir(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&$c(u,l.clone(u)),u}function Tf(n=" ",e=0){return Zn(Sa,null,n,e)}function Af(n,e){const t=Zn(Go,null,n);return t.staticCount=e,t}function Nn(n="",e=!1){return e?(qe(),qs(Ki,null,n)):Zn(Ki,null,n)}function Wn(n){return n==null||typeof n=="boolean"?Zn(Ki):$e(n)?Zn(At,null,n.slice()):Ef(n)?Wi(n):Zn(Sa,null,String(n))}function Wi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:ir(n)}function Zc(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if($e(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Zc(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!ff(e)?e._ctx=bn:s===3&&bn&&(bn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Qe(e)?(e={default:e,_ctx:bn},t=32):(e=String(e),i&64?(t=16,e=[Tf(e)]):t=8);n.children=e,n.shapeFlag|=t}function gg(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=jn([e.class,i.class]));else if(s==="style")e.style=tn([e.style,i.style]);else if(ha(s)){const r=e[s],o=i[s];o&&r!==o&&!($e(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function On(n,e,t,i=null){ni(n,e,7,[t,i])}const xg=cf();let _g=0;function vg(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||xg,r={uid:_g++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Hp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:mf(i,s),emitsOptions:uf(i,s),emit:null,emitted:null,propsDefaults:yt,inheritAttrs:i.inheritAttrs,ctx:yt,data:yt,props:yt,attrs:yt,slots:yt,refs:yt,setupState:yt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Km.bind(null,r),n.ce&&n.ce(r),r}let nn=null;const yg=()=>nn||bn;let ia,Ol;{const n=ma(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};ia=e("__VUE_INSTANCE_SETTERS__",t=>nn=t),Ol=e("__VUE_SSR_SETTERS__",t=>Wr=t)}const Qr=n=>{const e=nn;return ia(n),n.scope.on(),()=>{n.scope.off(),ia(e)}},Vu=()=>{nn&&nn.scope.off(),ia(null)};function Cf(n){return n.vnode.shapeFlag&4}let Wr=!1;function Sg(n,e=!1,t=!1){e&&Ol(e);const{props:i,children:s}=n.vnode,r=Cf(n);ng(n,i,r,e),og(n,s,t||e);const o=r?Mg(n,e):void 0;return e&&Ol(!1),o}function Mg(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,km);const{setup:i}=t;if(i){Ai();const s=n.setupContext=i.length>1?Eg(n):null,r=Qr(n),o=Zr(i,n,0,[n.props,s]),a=Td(o);if(Ci(),r(),(a||n.sp)&&!Ur(n)&&sf(n),a){if(o.then(Vu,Vu),e)return o.then(l=>{ku(n,l)}).catch(l=>{_a(l,n,0)});n.asyncDep=o}else ku(n,o)}else Rf(n)}function ku(n,e,t){Qe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:wt(e)&&(n.setupState=$d(e)),Rf(n)}function Rf(n,e,t){const i=n.type;n.render||(n.render=i.render||Kn);{const s=Qr(n);Ai();try{Gm(n)}finally{Ci(),s()}}}const bg={get(n,e){return Wt(n,"get",""),n[e]}};function Eg(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,bg),slots:n.slots,emit:n.emit,expose:e}}function Ma(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy($d(um(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Or)return Or[t](n)},has(e,t){return t in e||t in Or}})):n.proxy}function wg(n){return Qe(n)&&"__vccOpts"in n}const Jc=(n,e)=>mm(n,e,Wr),Tg="3.5.26";/**
* @vue/runtime-dom v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Bl;const Gu=typeof window<"u"&&window.trustedTypes;if(Gu)try{Bl=Gu.createPolicy("vue",{createHTML:n=>n})}catch{}const Pf=Bl?n=>Bl.createHTML(n):n=>n,Ag="http://www.w3.org/2000/svg",Cg="http://www.w3.org/1998/Math/MathML",_i=typeof document<"u"?document:null,Hu=_i&&_i.createElement("template"),Rg={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?_i.createElementNS(Ag,n):e==="mathml"?_i.createElementNS(Cg,n):t?_i.createElement(n,{is:t}):_i.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>_i.createTextNode(n),createComment:n=>_i.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>_i.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{Hu.innerHTML=Pf(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Hu.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Pg=Symbol("_vtc");function Ig(n,e,t){const i=n[Pg];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Wu=Symbol("_vod"),Lg=Symbol("_vsh"),Dg=Symbol(""),Ng=/(?:^|;)\s*display\s*:/;function Fg(n,e,t){const i=n.style,s=Ft(t);let r=!1;if(t&&!s){if(e)if(Ft(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Wo(i,a,"")}else for(const o in e)t[o]==null&&Wo(i,o,"");for(const o in t)o==="display"&&(r=!0),Wo(i,o,t[o])}else if(s){if(e!==t){const o=i[Dg];o&&(t+=";"+o),i.cssText=t,r=Ng.test(t)}}else e&&n.removeAttribute("style");Wu in n&&(n[Wu]=r?i.display:"",n[Lg]&&(i.display="none"))}const Xu=/\s*!important$/;function Wo(n,e,t){if($e(t))t.forEach(i=>Wo(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Ug(n,e);Xu.test(t)?n.setProperty(bs(i),t.replace(Xu,""),"important"):n[i]=t}}const qu=["Webkit","Moz","ms"],Oa={};function Ug(n,e){const t=Oa[e];if(t)return t;let i=Yi(e);if(i!=="filter"&&i in n)return Oa[e]=i;i=Rd(i);for(let s=0;s<qu.length;s++){const r=qu[s]+i;if(r in n)return Oa[e]=r}return e}const ju="http://www.w3.org/1999/xlink";function $u(n,e,t,i,s,r=Vp(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(ju,e.slice(6,e.length)):n.setAttributeNS(ju,e,t):t==null||r&&!Id(t)?n.removeAttribute(e):n.setAttribute(e,r?"":ti(t)?String(t):t)}function Yu(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Pf(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=Id(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(s||e)}function hs(n,e,t,i){n.addEventListener(e,t,i)}function Og(n,e,t,i){n.removeEventListener(e,t,i)}const Ku=Symbol("_vei");function Bg(n,e,t,i,s=null){const r=n[Ku]||(n[Ku]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=zg(e);if(i){const c=r[e]=Gg(i,s);hs(n,a,c,l)}else o&&(Og(n,a,o,l),r[e]=void 0)}}const Zu=/(?:Once|Passive|Capture)$/;function zg(n){let e;if(Zu.test(n)){e={};let i;for(;i=n.match(Zu);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):bs(n.slice(2)),e]}let Ba=0;const Vg=Promise.resolve(),kg=()=>Ba||(Vg.then(()=>Ba=0),Ba=Date.now());function Gg(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;ni(Hg(i,t.value),e,5,[i])};return t.value=n,t.attached=kg(),t}function Hg(n,e){if($e(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Ju=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Wg=(n,e,t,i,s,r)=>{const o=s==="svg";e==="class"?Ig(n,i,o):e==="style"?Fg(n,t,i):ha(e)?Oc(e)||Bg(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Xg(n,e,i,o))?(Yu(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&$u(n,e,i,o,r,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Ft(i))?Yu(n,Yi(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),$u(n,e,i,o))};function Xg(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Ju(e)&&Qe(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Ju(e)&&Ft(t)?!1:e in n}const sa=n=>{const e=n.props["onUpdate:modelValue"]||!1;return $e(e)?t=>Vo(e,t):e};function qg(n){n.target.composing=!0}function Qu(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Qs=Symbol("_assign");function eh(n,e,t){return e&&(n=n.trim()),t&&(n=pa(n)),n}const zl={created(n,{modifiers:{lazy:e,trim:t,number:i}},s){n[Qs]=sa(s);const r=i||s.props&&s.props.type==="number";hs(n,e?"change":"input",o=>{o.target.composing||n[Qs](eh(n.value,t,r))}),(t||r)&&hs(n,"change",()=>{n.value=eh(n.value,t,r)}),e||(hs(n,"compositionstart",qg),hs(n,"compositionend",Qu),hs(n,"change",Qu))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:s,number:r}},o){if(n[Qs]=sa(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?pa(n.value):n.value,l=e??"";a!==l&&(document.activeElement===n&&n.type!=="range"&&(i&&e===t||s&&n.value.trim()===l)||(n.value=l))}},jg={deep:!0,created(n,{value:e,modifiers:{number:t}},i){const s=da(e);hs(n,"change",()=>{const r=Array.prototype.filter.call(n.options,o=>o.selected).map(o=>t?pa(ra(o)):ra(o));n[Qs](n.multiple?s?new Set(r):r:r[0]),n._assigning=!0,Kd(()=>{n._assigning=!1})}),n[Qs]=sa(i)},mounted(n,{value:e}){th(n,e)},beforeUpdate(n,e,t){n[Qs]=sa(t)},updated(n,{value:e}){n._assigning||th(n,e)}};function th(n,e){const t=n.multiple,i=$e(e);if(!(t&&!i&&!da(e))){for(let s=0,r=n.options.length;s<r;s++){const o=n.options[s],a=ra(o);if(t)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=Gp(e,a)>-1}else o.selected=e.has(a);else if(ga(ra(o),e)){n.selectedIndex!==s&&(n.selectedIndex=s);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function ra(n){return"_value"in n?n._value:n.value}const $g=["ctrl","shift","alt","meta"],Yg={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>$g.some(t=>n[`${t}Key`]&&!e.includes(t))},Xr=(n,e)=>{const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(s,...r)=>{for(let o=0;o<e.length;o++){const a=Yg[e[o]];if(a&&a(s,e))return}return n(s,...r)})},Kg=Yt({patchProp:Wg},Rg);let nh;function Zg(){return nh||(nh=lg(Kg))}const Jg=(...n)=>{const e=Zg().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=e0(i);if(!s)return;const r=e._component;!Qe(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,Qg(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Qg(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function e0(n){return Ft(n)?document.querySelector(n):n}const If="star_words_settings",t0={speechRate:.9,volume:1,voiceURI:null},ih=localStorage.getItem(If),n0=ih?JSON.parse(ih):t0,Si=Es(n0);Zs(Si,n=>{localStorage.setItem(If,JSON.stringify(n))});const xr=window.speechSynthesis,i0=window.AudioContext||window.webkitAudioContext,at=new i0,za={SUCCESS:"https://raw.githubusercontent.com/walles/numbervaders/master/app/src/main/res/raw/medal_earned_tada.mp3",WRONG:"https://raw.githubusercontent.com/walles/numbervaders/master/app/src/main/res/raw/wrong_answer.wav",EXPLOSION:"https://raw.githubusercontent.com/walles/numbervaders/master/app/src/main/res/raw/cannon_explosion.mp3"},Va={},s0=n=>(Va[n]||(Va[n]=new Audio(n)),Va[n]);function ur(){const n=c=>{const u=s0(c);u.currentTime=0,u.volume=.4,u.play().catch(h=>console.warn("SFX playback blocked or failed:",h))},e=(c,u="sine",h=.1,d=.1)=>{at.state==="suspended"&&at.resume();const f=at.createOscillator(),g=at.createGain();f.type=u,f.frequency.setValueAtTime(c,at.currentTime),g.gain.setValueAtTime(d,at.currentTime),g.gain.exponentialRampToValueAtTime(.001,at.currentTime+h),f.connect(g),g.connect(at.destination),f.start(),f.stop(at.currentTime+h)};return{speak:(c,u=!0)=>{if(!xr)return;const h=new SpeechSynthesisUtterance(c),d=/[\u4e00-\u9fa5\u3105-\u3129\u02CA\u02C7\u02CB\u02D9]/.test(c);h.lang=d?"zh-TW":"en-US",h.rate=Si.speechRate;const f=xr.getVoices();if(Si.voiceURI){const g=f.find(x=>x.voiceURI===Si.voiceURI);g&&(h.voice=g,h.lang=g.lang)}else if(d){const g=f.find(x=>x.lang.includes("zh-TW"))||f.find(x=>x.lang.includes("zh"))||f.find(x=>x.lang.includes("TW"));g&&(h.voice=g)}else{const g=f.find(m=>m.name==="Google US English"),x=f.find(m=>m.lang==="en-US");g?h.voice=g:x&&(h.voice=x)}u&&xr.cancel(),u?setTimeout(()=>xr.speak(h),50):xr.speak(h)},playCorrect:()=>{e(1046.5,"sine",.15,.05),setTimeout(()=>e(1318.51,"sine",.25,.05),80)},playSuccess:()=>n(za.SUCCESS),playWrong:()=>n(za.WRONG),playExplosion:()=>n(za.EXPLOSION),playThrust:()=>{at.state==="suspended"&&at.resume();const c=.8,u=at.sampleRate*c,h=at.createBuffer(1,u,at.sampleRate),d=h.getChannelData(0);for(let p=0;p<u;p++)d[p]=Math.random()*2-1;const f=at.createBufferSource();f.buffer=h;const g=at.createBiquadFilter();g.type="lowpass",g.Q.value=1;const x=at.currentTime;g.frequency.setValueAtTime(5e3,x),g.frequency.exponentialRampToValueAtTime(400,x+c);const m=at.createGain();m.gain.setValueAtTime(0,x),m.gain.linearRampToValueAtTime(.08,x+.04),m.gain.exponentialRampToValueAtTime(.001,x+c),f.connect(g),g.connect(m),m.connect(at.destination),f.start(),f.stop(x+c)},playTone:e,playBrake:()=>{at.state==="suspended"&&at.resume();const c=at.currentTime,u=.6,h=at.sampleRate*u,d=at.createBuffer(1,h,at.sampleRate),f=d.getChannelData(0);for(let S=0;S<h;S++){const E=Math.random()*2-1,A=Math.sin(S*.05)>0?1:.5;f[S]=E*A}const g=at.createBufferSource();g.buffer=d;const x=at.createBiquadFilter();x.type="bandpass",x.frequency.setValueAtTime(2500,c),x.frequency.exponentialRampToValueAtTime(800,c+u),x.Q.value=3;const m=at.createOscillator();m.type="sawtooth",m.frequency.setValueAtTime(3500,c),m.frequency.exponentialRampToValueAtTime(1200,c+u);const p=at.createOscillator();p.type="triangle",p.frequency.setValueAtTime(3550,c),p.frequency.exponentialRampToValueAtTime(1250,c+u);const _=at.createOscillator();_.type="sine",_.frequency.value=50;const M=at.createGain();M.gain.value=100,_.connect(M),M.connect(m.frequency),M.connect(p.frequency);const v=at.createGain();v.gain.setValueAtTime(0,c),v.gain.linearRampToValueAtTime(.12,c+.05),v.gain.exponentialRampToValueAtTime(.001,c+u),g.connect(x),x.connect(v),m.connect(v),p.connect(v),v.connect(at.destination),g.start(),m.start(),p.start(),_.start(),g.stop(c+u),m.stop(c+u),p.stop(c+u),_.stop(c+u)}}}const r0=[{text:"does",translation:"做",category:"verb",example:"He does work"},{text:"pail",translation:"提桶",category:"object",example:"A blue pail"},{text:"main",translation:"主要的",category:"adjective",example:"The main road"},{text:"at",translation:"在",category:"preposition",example:"At the park"},{text:"has",translation:"有",category:"verb",example:"She has apple"},{text:"new",translation:"新的",category:"adjective",example:"A new car"},{text:"year",translation:"年",category:"time",example:"A happy year"},{text:"fun",translation:"真有趣",category:"adjective",example:"Play is fun"},{text:"party",translation:"派對",category:"social",example:"A birthday party"},{text:"green",translation:"綠色",category:"color",example:"Green grass"}],o0=Object.freeze(Object.defineProperty({__proto__:null,default:r0},Symbol.toStringTag,{value:"Module"})),a0=[{text:"cat",translation:"貓",category:"animal",example:"A small cat"},{text:"dog",translation:"狗",category:"animal",example:"A bark dog"},{text:"bird",translation:"鳥",category:"animal",example:"A blue bird"},{text:"lion",translation:"獅子",category:"animal",example:"A king lion"},{text:"tiger",translation:"老虎",category:"animal",example:"A fast tiger"},{text:"monkey",translation:"猴子",category:"animal",example:"A funny monkey"},{text:"rabbit",translation:"兔子",category:"animal",example:"A long-eared rabbit"},{text:"elephant",translation:"大象",category:"animal",example:"A huge elephant"}],l0=Object.freeze(Object.defineProperty({__proto__:null,default:a0},Symbol.toStringTag,{value:"Module"})),c0=[{text:"cat",translation:"貓",category:"animal",example:"A cute cat"},{text:"dog",translation:"狗",category:"animal",example:"A loyal dog"},{text:"elephant",translation:"大象",category:"animal",example:"A giant elephant"},{text:"lion",translation:"獅子",category:"animal",example:"A brave lion"},{text:"monkey",translation:"猴子",category:"animal",example:"A clever monkey"},{text:"rabbit",translation:"兔子",category:"animal",example:"A jumping rabbit"},{text:"tiger",translation:"老虎",category:"animal",example:"A powerful tiger"},{text:"bird",translation:"鳥",category:"animal",example:"A flying bird"},{text:"apple",translation:"蘋果",category:"fruit",example:"A sweet apple"},{text:"banana",translation:"香蕉",category:"fruit",example:"A yellow banana"},{text:"orange",translation:"橘子",category:"fruit",example:"A juicy orange"},{text:"grape",translation:"葡萄",category:"fruit",example:"A purple grape"},{text:"lemon",translation:"檸檬",category:"fruit",example:"A sour lemon"},{text:"strawberry",translation:"草莓",category:"fruit",example:"A red strawberry"},{text:"red",translation:"紅色",category:"color",example:"Red apple"},{text:"blue",translation:"藍色",category:"color",example:"Blue sky"},{text:"green",translation:"綠色",category:"color",example:"Green grass"},{text:"yellow",translation:"黃色",category:"color",example:"Yellow sun"},{text:"purple",translation:"紫色",category:"color",example:"Purple flower"},{text:"black",translation:"黑色",category:"color",example:"Black cat"},{text:"white",translation:"白色",category:"color",example:"White cloud"},{text:"one",translation:"一",category:"number",example:"One book"},{text:"two",translation:"二",category:"number",example:"Two pens"},{text:"three",translation:"三",category:"number",example:"Three birds"},{text:"four",translation:"四",category:"number",example:"Four chairs"},{text:"five",translation:"五",category:"number",example:"Five fingers"},{text:"ten",translation:"十",category:"number",example:"Ten toes"},{text:"water",translation:"水",category:"nature",example:"Clean water"},{text:"sun",translation:"太陽",category:"nature",example:"The bright sun"},{text:"moon",translation:"月亮",category:"nature",example:"The silver moon"},{text:"star",translation:"星星",category:"nature",example:"A shining star"},{text:"tree",translation:"樹",category:"nature",example:"A tall tree"},{text:"flower",translation:"花",category:"nature",example:"A pretty flower"},{text:"sea",translation:"大海",category:"nature",example:"Deep blue sea"},{text:"house",translation:"房子",category:"object",example:"A big house"},{text:"car",translation:"汽車",category:"object",example:"A fast car"},{text:"book",translation:"書",category:"object",example:"An old book"},{text:"pen",translation:"筆",category:"object",example:"A blue pen"},{text:"table",translation:"桌子",category:"object",example:"A wooden table"},{text:"chair",translation:"椅子",category:"object",example:"A comfortable chair"},{text:"phone",translation:"電話",category:"object",example:"A smart phone"},{text:"computer",translation:"電腦",category:"object",example:"A new computer"},{text:"hat",translation:"帽子",category:"clothes",example:"A warm hat"},{text:"shoes",translation:"鞋子",category:"clothes",example:"Black shoes"},{text:"shirt",translation:"襯衫",category:"clothes",example:"A white shirt"},{text:"pants",translation:"褲子",category:"clothes",example:"Blue pants"},{text:"mother",translation:"母親",category:"family",example:"I love mother"},{text:"father",translation:"父親",category:"family",example:"I love father"},{text:"brother",translation:"兄弟",category:"family",example:"My little brother"},{text:"sister",translation:"姐妹",category:"family",example:"My big sister"},{text:"baby",translation:"嬰兒",category:"family",example:"A crying baby"},{text:"friend",translation:"朋友",category:"people",example:"A good friend"},{text:"doctor",translation:"醫生",category:"people",example:"A kind doctor"},{text:"teacher",translation:"老師",category:"people",example:"A great teacher"},{text:"student",translation:"學生",category:"people",example:"A hard student"},{text:"run",translation:"跑",category:"verb",example:"I run fast"},{text:"jump",translation:"跳",category:"verb",example:"I jump high"},{text:"eat",translation:"吃",category:"verb",example:"I eat apple"},{text:"drink",translation:"喝",category:"verb",example:"I drink water"},{text:"sleep",translation:"睡覺",category:"verb",example:"I sleep early"},{text:"read",translation:"讀",category:"verb",example:"I read book"},{text:"write",translation:"寫",category:"verb",example:"I write letter"},{text:"sing",translation:"唱",category:"verb",example:"I sing song"},{text:"dance",translation:"跳舞",category:"verb",example:"I dance well"},{text:"work",translation:"工作",category:"verb",example:"I work hard"},{text:"play",translation:"玩",category:"verb",example:"I play game"},{text:"hot",translation:"熱",category:"adjective",example:"Hot water"},{text:"cold",translation:"冷",category:"adjective",example:"Cold wind"},{text:"big",translation:"大",category:"adjective",example:"Big elephant"},{text:"small",translation:"小",category:"adjective",example:"Small cat"},{text:"good",translation:"好",category:"adjective",example:"Good boy"},{text:"bad",translation:"差",category:"adjective",example:"Bad luck"},{text:"happy",translation:"開心",category:"adjective",example:"Happy baby"},{text:"sad",translation:"難過",category:"adjective",example:"Sad face"},{text:"fast",translation:"快",category:"adjective",example:"Fast car"},{text:"slow",translation:"慢",category:"adjective",example:"Slow turtle"},{text:"day",translation:"白天",category:"time",example:"A bright day"},{text:"night",translation:"晚上",category:"time",example:"A dark night"},{text:"morning",translation:"早上",category:"time",example:"Good morning"},{text:"evening",translation:"傍晚",category:"time",example:"Good evening"},{text:"today",translation:"今天",category:"time",example:"Today is good"},{text:"tomorrow",translation:"明天",category:"time",example:"See you tomorrow"},{text:"monday",translation:"星期一",category:"time",example:"Work on Monday"},{text:"sunday",translation:"星期日",category:"time",example:"Rest on Sunday"},{text:"school",translation:"學校",category:"place",example:"Go to school"},{text:"park",translation:"公園",category:"place",example:"Play in park"},{text:"hospital",translation:"醫院",category:"place",example:"A big hospital"},{text:"store",translation:"商店",category:"place",example:"Open a store"},{text:"bread",translation:"麵包",category:"food",example:"Fresh bread"},{text:"milk",translation:"牛奶",category:"food",example:"White milk"},{text:"egg",translation:"蛋",category:"food",example:"One egg"},{text:"rice",translation:"米飯",category:"food",example:"Eat rice"},{text:"meat",translation:"肉",category:"food",example:"Good meat"},{text:"cake",translation:"蛋糕",category:"food",example:"A sweet cake"},{text:"ice cream",translation:"冰淇淋",category:"food",example:"Cold ice cream"},{text:"box",translation:"盒子",category:"object",example:"A heavy box"},{text:"key",translation:"鑰匙",category:"object",example:"The silver key"},{text:"cup",translation:"杯子",category:"object",example:"Drink in cup"},{text:"spoon",translation:"湯匙",category:"object",example:"A small spoon"},{text:"fork",translation:"叉子",category:"object",example:"Eat with fork"},{text:"knife",translation:"刀子",category:"object",example:"A sharp knife"},{text:"rain",translation:"雨",category:"nature",example:"See the rain"},{text:"snow",translation:"雪",category:"nature",example:"White snow"},{text:"wind",translation:"風",category:"nature",example:"Strong wind"},{text:"mountain",translation:"山",category:"nature",example:"A high mountain"},{text:"river",translation:"河流",category:"nature",example:"A long river"},{text:"cloud",translation:"雲",category:"nature",example:"A soft cloud"},{text:"sky",translation:"天空",category:"nature",example:"Blue sky"},{text:"hand",translation:"手",category:"body",example:"My small hand"},{text:"foot",translation:"腳",category:"body",example:"My left foot"},{text:"eye",translation:"眼睛",category:"body",example:"Big eyes"},{text:"ear",translation:"耳朵",category:"body",example:"Long ears"},{text:"nose",translation:"鼻子",category:"body",example:"My red nose"},{text:"mouth",translation:"嘴巴",category:"body",example:"A small mouth"},{text:"hair",translation:"頭髮",category:"body",example:"Long hair"},{text:"face",translation:"臉",category:"body",example:"A happy face"},{text:"head",translation:"頭",category:"body",example:"My big head"},{text:"heart",translation:"心臟",category:"body",example:"A kind heart"},{text:"fish",translation:"魚",category:"animal",example:"A swimming fish"},{text:"horse",translation:"馬",category:"animal",example:"A running horse"},{text:"cow",translation:"母牛",category:"animal",example:"A milking cow"},{text:"sheep",translation:"綿羊",category:"animal",example:"A white sheep"},{text:"duck",translation:"鴨子",category:"animal",example:"A swimming duck"},{text:"pig",translation:"豬",category:"animal",example:"A fat pig"},{text:"bee",translation:"蜜蜂",category:"animal",example:"A busy bee"},{text:"bus",translation:"公車",category:"transport",example:"Wait for bus"},{text:"train",translation:"火車",category:"transport",example:"Take the train"},{text:"plane",translation:"飛機",category:"transport",example:"Fly a plane"},{text:"bike",translation:"腳踏車",category:"transport",example:"Ride a bike"},{text:"boat",translation:"小船",category:"transport",example:"Sail a boat"},{text:"truck",translation:"卡車",category:"transport",example:"A heavy truck"},{text:"walk",translation:"走路",category:"verb",example:"I walk slow"},{text:"fly",translation:"飛",category:"verb",example:"Birds fly high"},{text:"swim",translation:"游泳",category:"verb",example:"I swim well"},{text:"talk",translation:"說話",category:"verb",example:"Talk to friend"},{text:"listen",translation:"聽",category:"verb",example:"Listen to music"},{text:"smile",translation:"微笑",category:"verb",example:"A happy smile"},{text:"laugh",translation:"大笑",category:"verb",example:"They laugh loud"},{text:"cry",translation:"哭",category:"verb",example:"Don't cry now"},{text:"think",translation:"思考",category:"verb",example:"I think hard"},{text:"learn",translation:"學習",category:"verb",example:"Learn new word"},{text:"watch",translation:"看 (觀察)",category:"verb",example:"Watch movie"},{text:"long",translation:"長",category:"adjective",example:"A long road"},{text:"short",translation:"短",category:"adjective",example:"A short hair"},{text:"new",translation:"新",category:"adjective",example:"A new world"},{text:"old",translation:"舊",category:"adjective",example:"An old friend"},{text:"beautiful",translation:"漂亮",category:"adjective",example:"Beautiful flower"},{text:"ugly",translation:"醜陋",category:"adjective",example:"An ugly box"},{text:"clean",translation:"乾淨",category:"adjective",example:"A clean room"},{text:"dirty",translation:"髒",category:"adjective",example:"Dirty shoes"},{text:"rich",translation:"富有",category:"adjective",example:"A rich man"},{text:"poor",translation:"貧窮",category:"adjective",example:"A poor family"},{text:"window",translation:"窗戶",category:"object",example:"Open the window"},{text:"door",translation:"門",category:"object",example:"Close the door"},{text:"bed",translation:"床",category:"object",example:"Go to bed"},{text:"clock",translation:"時鐘",category:"object",example:"A round clock"},{text:"lamp",translation:"燈",category:"object",example:"Turn on lamp"},{text:"mirror",translation:"鏡子",category:"object",example:"Look in mirror"},{text:"soap",translation:"肥皂",category:"object",example:"Use some soap"},{text:"towel",translation:"毛巾",category:"object",example:"A dry towel"},{text:"city",translation:"城市",category:"place",example:"A busy city"},{text:"country",translation:"國家",category:"place",example:"My home country"},{text:"road",translation:"道路",category:"place",example:"A wide road"},{text:"bridge",translation:"橋",category:"place",example:"Cross the bridge"},{text:"garden",translation:"花園",category:"place",example:"A green garden"},{text:"farm",translation:"農場",category:"place",example:"An old farm"},{text:"forest",translation:"森林",category:"place",example:"A dark forest"},{text:"island",translation:"島嶼",category:"place",example:"A small island"},{text:"lake",translation:"湖泊",category:"place",example:"A mountain lake"},{text:"kitchen",translation:"廚房",category:"place",example:"Cook in kitchen"},{text:"room",translation:"房間",category:"place",example:"In my room"},{text:"orange",translation:"橘色",category:"color",example:"Orange orange"},{text:"pink",translation:"粉紅色",category:"color",example:"Pink dress"},{text:"brown",translation:"咖啡色",category:"color",example:"Brown dog"},{text:"gray",translation:"灰色",category:"color",example:"Gray sky"},{text:"silver",translation:"銀色",category:"color",example:"Silver moon"},{text:"gold",translation:"金色",category:"color",example:"Gold ring"},{text:"soup",translation:"湯",category:"food",example:"Chicken soup"},{text:"salad",translation:"沙拉",category:"food",example:"Green salad"},{text:"pizza",translation:"披薩",category:"food",example:"Eat pizza"},{text:"burger",translation:"漢堡",category:"food",example:"Beef burger"},{text:"juice",translation:"果汁",category:"food",example:"Orange juice"},{text:"tea",translation:"茶",category:"food",example:"Hot tea"},{text:"coffee",translation:"咖啡",category:"food",example:"Black coffee"},{text:"ball",translation:"球",category:"object",example:"Kick the ball"},{text:"toy",translation:"玩具",category:"object",example:"Play with toy"},{text:"gift",translation:"禮物",category:"object",example:"A small gift"},{text:"camera",translation:"相機",category:"object",example:"Take my camera"},{text:"map",translation:"地圖",category:"object",example:"Road map"},{text:"umbrella",translation:"傘",category:"object",example:"Blue umbrella"},{text:"money",translation:"錢",category:"object",example:"I have money"},{text:"music",translation:"音樂",category:"concept",example:"Play loud music"},{text:"time",translation:"時間",category:"concept",example:"No more time"},{text:"love",translation:"愛",category:"concept",example:"I love you"},{text:"help",translation:"幫助",category:"verb",example:"Please help me"},{text:"look",translation:"看",category:"verb",example:"Look out"},{text:"give",translation:"給",category:"verb",example:"Give me book"},{text:"buy",translation:"買",category:"verb",example:"Buy a car"},{text:"sell",translation:"賣",category:"verb",example:"Sell my house"},{text:"open",translation:"打開",category:"verb",example:"Open your eye"},{text:"close",translation:"關閉",category:"verb",example:"Close your heart"},{text:"start",translation:"開始",category:"verb",example:"Start adventure"},{text:"stop",translation:"停止",category:"verb",example:"Stop crying"},{text:"quiet",translation:"安靜",category:"adjective",example:"Quiet forest"},{text:"loud",translation:"大聲",category:"adjective",example:"Loud music"},{text:"smart",translation:"聰明",category:"adjective",example:"A smart boy"},{text:"cool",translation:"酷/涼快",category:"adjective",example:"A cool wind"},{text:"winter",translation:"冬天",category:"time",example:"A cold winter"},{text:"summer",translation:"夏天",category:"time",example:"A hot summer"},{text:"sand",translation:"沙子",category:"nature",example:"Yellow sand"},{text:"beach",translation:"海灘",category:"nature",example:"A beautiful beach"},{text:"grass",translation:"草",category:"nature",example:"Green grass"}],u0=Object.freeze(Object.defineProperty({__proto__:null,default:c0},Symbol.toStringTag,{value:"Module"})),h0=[{text:"ㄅㄚ",translation:"八"},{text:"ㄏㄨㄚˊ",translation:"華"},{text:"ㄇㄛˊ",translation:"磨"},{text:"ㄈㄤ",translation:"方"},{text:"ㄉㄚˋ",translation:"大"},{text:"ㄊㄧㄢ",translation:"天"},{text:"ㄋㄧㄠˇ",translation:"鳥"},{text:"ㄌㄨㄥˊ",translation:"龍"},{text:"ㄍㄨㄛˊ",voiceText:"國",translation:"國"},{text:"ㄎㄞ",translation:"開"},{text:"ㄏㄠˇ",translation:"好"},{text:"ㄐㄧㄚ",translation:"家"},{text:"ㄑㄧㄥ",translation:"青"},{text:"ㄒㄧㄠˇ",translation:"小"},{text:"ㄓㄨㄥ",translation:"中"},{text:"ㄔㄜ",translation:"車"},{text:"ㄕㄨ",translation:"書"},{text:"ㄖㄣˊ",translation:"人"},{text:"ㄗㄞˋ",translation:"在"},{text:"ㄘㄠˇ",translation:"草"},{text:"ㄙㄢ",translation:"三"},{text:"ㄧㄤˊ",translation:"羊"},{text:"ㄨㄛˇ",translation:"我"},{text:"ㄩˊ",translation:"魚"},{text:"ㄇㄠ",translation:"貓"},{text:"ㄍㄡˇ",translation:"狗"},{text:"ㄕㄢ",translation:"山"},{text:"ㄕㄨㄟˇ",translation:"水"},{text:"ㄎㄨㄥ",translation:"空"},{text:"ㄅㄞˊ",translation:"白"}],d0=Object.freeze(Object.defineProperty({__proto__:null,default:h0},Symbol.toStringTag,{value:"Module"})),sh=Object.assign({"../assets/vocabularies/251222.json":o0,"../assets/vocabularies/animals.json":l0,"../assets/vocabularies/default.json":u0,"../assets/vocabularies/zhuyin.json":d0}),oa=[];var Ed;for(const n in sh){const e=((Ed=n.split("/").pop())==null?void 0:Ed.replace(".json",""))||"unknown",t=sh[n].default;oa.push({name:e,path:n,data:t})}const Qc=Es({currentListName:localStorage.getItem("vocab_list")||"default"}),f0=Jc(()=>{var e;const n=oa.find(t=>t.name===Qc.currentListName);return n?n.data:((e=oa[0])==null?void 0:e.data)||[]}),p0=n=>{Qc.currentListName=n,localStorage.setItem("vocab_list",n)},Mi={state:Qc,lists:oa,currentList:f0,selectList:p0};function m0(n){const{speak:e,playCorrect:t,playExplosion:i,playThrust:s}=ur(),r=it("menu"),o=it(0),a=it(null),l=it([]),c=it({x:50,y:80}),u=it(null),h=Es(new Set),d=.15,f=1.8;let g=0,x=null,m=null,p=0,_=2e3,M=1;const v=()=>{r.value="playing",o.value=0,l.value=[],M=1,c.value={x:50,y:80},u.value=null,A(),p=performance.now(),x=requestAnimationFrame(b),m=window.setInterval(D,_)},S=()=>{x&&cancelAnimationFrame(x),m&&clearInterval(m)},E=()=>{if(!a.value)return;const V=a.value.text,F=V.split("").join(","),H=a.value.example?`. ${a.value.example}`:"";e(`${V}, (${F}), ${V}${H}`)},A=()=>{const V=Mi.currentList.value;if(V.length===0)return;const F=Math.floor(Math.random()*V.length);a.value=V[F],E()},D=()=>{if(r.value!=="playing")return;const V=Mi.currentList.value;if(V.length===0)return;const F=Math.random()<.4;let H=a.value;if(!F||!H){let z,U=0;do z=V[Math.floor(Math.random()*V.length)],U++;while(z===a.value&&U<10);H=z}H&&l.value.push({id:Date.now()+Math.random(),word:H,x:Math.random()*80+10,y:-10,speed:(Math.random()*.2+.3)*M,isTarget:H===a.value})},b=V=>{const F=V-p;p=V;const H=c.value.x,z=c.value.y;let U=0,k=0;if(h.has("ArrowLeft")&&(U-=1),h.has("ArrowRight")&&(U+=1),h.has("ArrowUp")&&(k-=1),h.has("ArrowDown")&&(k+=1),U!==0||k!==0){u.value=null;const fe=Math.sqrt(U*U+k*k),ge=U/fe,Oe=k/fe,Ve=window.innerWidth,Ze=window.innerHeight-100,B=Ve/Ze,G=f*(F/16);c.value.x=Math.max(5,Math.min(95,c.value.x+ge*G)),c.value.y=Math.max(5,Math.min(95,c.value.y+Oe*G*B))}else if(u.value){const fe=1-Math.pow(1-d,F/16);c.value.x+=(u.value.x-c.value.x)*fe,c.value.y+=(u.value.y-c.value.y)*fe,Math.abs(u.value.x-c.value.x)<.1&&Math.abs(u.value.y-c.value.y)<.1&&(u.value=null)}Math.abs(c.value.x-H)>.1||Math.abs(c.value.y-z)>.1?g<=0&&(s(),g=1):g=0,l.value.forEach(fe=>{fe.y+=fe.speed*(F/16)}),l.value=l.value.filter(fe=>!(fe.y>110));const ae=12,oe=10;l.value=l.value.filter(fe=>{var Ze,B;const ge=Math.abs(fe.x-c.value.x),Oe=Math.abs(fe.y-c.value.y);return ge<ae/2+3&&Oe<oe/2+3?fe.isTarget?(o.value+=10,M+=.05,t(),(Ze=n==null?void 0:n.onHitCorrect)==null||Ze.call(n,fe.x,fe.y),A(),!1):(o.value=Math.max(0,o.value-5),i(),(B=n==null?void 0:n.onHitWrong)==null||B.call(n,fe.x,fe.y),!1):!0}),r.value==="playing"&&(x=requestAnimationFrame(b))},T=(V,F)=>{u.value={x:Math.max(5,Math.min(95,V)),y:Math.max(5,Math.min(95,F))}},L=(V,F)=>{F?h.add(V):h.delete(V)};return ws(()=>{S()}),{gameState:r,score:o,currentTarget:a,fallingItems:l,playerPos:c,startGame:v,setPlayerTarget:T,setKey:L,speak:e,announceTarget:E}}const g0={class:"ui-header"},x0={class:"header-left"},_0={class:"header-center"},v0={key:0,class:"target-display"},y0={class:"header-right"},S0={class:"score-board"},M0={class:"value"},b0={class:"game-world"},E0={class:"meteor-body"},w0={key:0,class:"score-popup"},T0=cr({__name:"FallingWordsGame",emits:["exit"],setup(n,{emit:e}){const t=e,i=it([]);let s=0;const r=(M,v)=>{const S=s++;i.value.push({id:S,x:M,y:v}),setTimeout(()=>{i.value=i.value.filter(E=>E.id!==S)},500)},{gameState:o,score:a,currentTarget:l,fallingItems:c,playerPos:u,startGame:h,setKey:d,setPlayerTarget:f,announceTarget:g}=m0({onHitWrong:(M,v)=>r(M,v)}),x=M=>{o.value==="playing"&&(M.key==="Escape"&&t("exit"),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(M.key)&&d(M.key,!0))},m=M=>{["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(M.key)&&d(M.key,!1)},p=M=>{if(o.value!=="playing")return;const v=M.target;if(v.closest("button")||v.closest(".back-btn")||v.closest(".target-word"))return;let S,E;if(M instanceof MouseEvent)S=M.clientX,E=M.clientY;else{const V=M.touches[0];if(!V)return;S=V.clientX,E=V.clientY}const A=100,D=window.innerHeight-A;let b=E-A;b=Math.max(0,Math.min(D,b));const T=S/window.innerWidth*100,L=b/D*100;f(T,L)},_=it(!1);return Zs(a,(M,v)=>{M>v&&(_.value=!0,setTimeout(()=>{_.value=!1},1e3))}),Jr(()=>{window.addEventListener("keydown",x),window.addEventListener("keyup",m),h()}),ws(()=>{window.removeEventListener("keydown",x),window.removeEventListener("keyup",m)}),(M,v)=>(qe(),Je("div",{class:"game-container",onClick:p,onTouchstart:p},[v[7]||(v[7]=pe("div",{class:"stars"},null,-1)),v[8]||(v[8]=pe("div",{class:"stars2"},null,-1)),pe("div",g0,[pe("div",x0,[pe("button",{class:"back-btn",onClick:v[0]||(v[0]=Xr(S=>M.$emit("exit"),["stop"]))},"⬅ BACK")]),pe("div",_0,[Ge(l)?(qe(),Je("div",v0,[v[3]||(v[3]=pe("div",{class:"target-hint"},"FIND:",-1)),pe("div",{class:"target-word",onClick:v[1]||(v[1]=Xr(S=>Ge(g)(),["stop"]))},[Tf(St(Ge(l).translation)+" ",1),v[2]||(v[2]=pe("span",{class:"audio-icon"},"🔊",-1))])])):Nn("",!0)]),pe("div",y0,[pe("div",S0,[v[4]||(v[4]=pe("span",{class:"label"},"SCORE",-1)),pe("span",M0,St(Ge(a)),1)])])]),pe("div",b0,[(qe(!0),Je(At,null,xn(i.value,S=>(qe(),Je("div",{key:S.id,class:"explosion",style:tn({left:S.x+"%",top:S.y+"%"})},"💥",4))),128)),(qe(!0),Je(At,null,xn(Ge(c),S=>(qe(),Je("div",{key:S.id,class:"falling-item",style:tn({left:S.x+"%",top:S.y+"%"})},[pe("div",E0,St(S.word.text),1),v[5]||(v[5]=pe("div",{class:"meteor-tail"},null,-1))],4))),128)),pe("div",{class:"player",style:tn({left:Ge(u).x+"%",top:Ge(u).y+"%"})},[_.value?(qe(),Je("div",w0,"+10!")):Nn("",!0),v[6]||(v[6]=Af('<svg viewBox="0 0 512 512" width="70" height="80" class="rocket-svg" data-v-ddbd5704><path d="M150,450 q-50,0 -30,-100 l30,50 z" fill="#ff4d4d" stroke="#333" stroke-width="4" data-v-ddbd5704></path><path d="M362,450 q50,0 30,-100 l-30,50 z" fill="#ff4d4d" stroke="#333" stroke-width="4" data-v-ddbd5704></path><path d="M256,20 c-100,200 -80,350 -80,400 h160 c0,-50 20,-200 -80,-400z" fill="#f5f5f5" stroke="#333" stroke-width="6" data-v-ddbd5704></path><path d="M256,20 c40,150 40,300 40,400 h-80 c0,-100 0,-250 40,-400z" fill="#e0e0e0" data-v-ddbd5704></path><path d="M256,20 c-30,60 -35,100 -35,130 h70 c0,-30 -5,-70 -35,-130z" fill="#ff4d4d" stroke="#333" stroke-width="4" data-v-ddbd5704></path><circle cx="256" cy="240" r="35" fill="#66ccff" stroke="#333" stroke-width="6" data-v-ddbd5704></circle><path d="M256,215 q20,10 0,50" fill="white" opacity="0.3" data-v-ddbd5704></path><path d="M220,430 q36,80 72,0" fill="#ffeb3b" class="main-flame" stroke="#ff9800" stroke-width="2" data-v-ddbd5704></path><path d="M236,430 q20,50 40,0" fill="#fff" opacity="0.8" class="inner-flame" data-v-ddbd5704></path></svg>',1))],4)])],32))}}),hr=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},A0=hr(T0,[["__scopeId","data-v-ddbd5704"]]);function C0(n){const{speak:e,playCorrect:t,playSuccess:i,playExplosion:s,playThrust:r}=ur(),o=it("menu"),a=it(0),l=it(null),c=it(0),u=it([]),h=it([]),d=it({x:50,y:80}),f=it(null),g=Es(new Set),x=.15,m=1.8;let p=0,_=null,M=null,v=0,S=1200,E=1;const A=()=>{o.value="playing",a.value=0,u.value=[],E=1,d.value={x:50,y:80},f.value=null,c.value=0,T(),v=performance.now(),_=requestAnimationFrame(V),M=window.setInterval(L,S)},D=()=>{_&&cancelAnimationFrame(_),M&&clearInterval(M)},b=()=>{if(!l.value)return;const z=l.value.text,U=z.split("").join(","),k=l.value.example?`. ${l.value.example}`:"";e(`${z}, (${U}), ${z}${k}`)},T=()=>{const z=Mi.currentList.value;if(z.length===0)return;const U=Math.floor(Math.random()*z.length);l.value=z[U],c.value=0;const k=[...new Set(l.value.text.split(""))],ae="abcdefghijklmnopqrstuvwxyz".split("").filter(Oe=>!k.some(Ve=>Ve.toLowerCase()===Oe)).sort(()=>Math.random()-.5),oe=/^[A-Z]/.test(l.value.text),fe=ae.map(Oe=>oe&&Math.random()<.3?Oe.toUpperCase():Oe),ge=[...k,...fe.slice(0,Math.max(0,8-k.length))];h.value=ge.slice(0,8),b()},L=()=>{if(o.value!=="playing"||!l.value)return;const U=l.value.text[c.value],k=Math.random()<.4;let q=U;if(!k){const ae=h.value.filter(oe=>oe!==U);q=ae[Math.floor(Math.random()*ae.length)]||(U===U.toUpperCase()?"X":"x")}u.value.push({id:Date.now()+Math.random(),char:q,x:Math.random()*80+10,y:-10,speed:(Math.random()*.2+.3)*E,isTarget:q===U})},V=z=>{const U=z-v;v=z;const k=d.value.x,q=d.value.y;let ae=0,oe=0;if(g.has("ArrowLeft")&&(ae-=1),g.has("ArrowRight")&&(ae+=1),g.has("ArrowUp")&&(oe-=1),g.has("ArrowDown")&&(oe+=1),ae!==0||oe!==0){f.value=null;const Ve=Math.sqrt(ae*ae+oe*oe),Ze=ae/Ve,B=oe/Ve,G=window.innerWidth,ie=window.innerHeight-100,ue=G/ie,ce=m*(U/16);d.value.x=Math.max(5,Math.min(95,d.value.x+Ze*ce)),d.value.y=Math.max(5,Math.min(95,d.value.y+B*ce*ue))}else if(f.value){const Ve=1-Math.pow(1-x,U/16);d.value.x+=(f.value.x-d.value.x)*Ve,d.value.y+=(f.value.y-d.value.y)*Ve,Math.abs(f.value.x-d.value.x)<.1&&Math.abs(f.value.y-d.value.y)<.1&&(f.value=null)}Math.abs(d.value.x-k)>.1||Math.abs(d.value.y-q)>.1?p<=0&&(r(),p=1):p=0,u.value.forEach(Ve=>{Ve.y+=Ve.speed*(U/16)}),u.value=u.value.filter(Ve=>Ve.y<=110);const ge=12,Oe=10;u.value=u.value.filter(Ve=>{var ie,ue,ce;const Ze=Math.abs(Ve.x-d.value.x),B=Math.abs(Ve.y-d.value.y);if(Ze<ge/2+3&&B<Oe/2+3){const ve=((ie=l.value)==null?void 0:ie.text)||"",I=ve[c.value];return Ve.char===I?(a.value+=10,c.value++,(ue=n==null?void 0:n.onHitCorrect)==null||ue.call(n,Ve.x,Ve.y),c.value>=ve.length?(a.value+=50,E+=.05,i(),T()):t(),!1):(s(),(ce=n==null?void 0:n.onHitWrong)==null||ce.call(n,Ve.x,Ve.y),c.value=0,b(),!1)}return!0}),o.value==="playing"&&(_=requestAnimationFrame(V))},F=(z,U)=>{f.value={x:Math.max(5,Math.min(95,z)),y:Math.max(5,Math.min(95,U))}},H=(z,U)=>{U?g.add(z):g.delete(z)};return ws(()=>{D()}),{gameState:o,score:a,currentTarget:l,spellingIndex:c,fallingItems:u,playerPos:d,startGame:A,setPlayerTarget:F,setKey:H,speak:e,announceTarget:b}}const R0={class:"ui-header"},P0={class:"header-left"},I0={class:"header-center"},L0={key:0,class:"spelling-display"},D0={class:"chinese-hint"},N0={class:"header-right"},F0={class:"score-board"},U0={class:"value"},O0={class:"game-world"},B0={class:"meteor-letter"},z0={key:0,class:"score-popup"},V0=cr({__name:"SpellingGame",emits:["exit"],setup(n,{emit:e}){const t=e,i=it([]);let s=0;const r=(S,E)=>{const A=s++;i.value.push({id:A,x:S,y:E}),setTimeout(()=>{i.value=i.value.filter(D=>D.id!==A)},500)},{gameState:o,score:a,currentTarget:l,spellingIndex:c,fallingItems:u,playerPos:h,startGame:d,setKey:f,setPlayerTarget:g,announceTarget:x}=C0({onHitWrong:(S,E)=>r(S,E)}),m=S=>{o.value==="playing"&&(S.key==="Escape"&&t("exit"),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(S.key)&&f(S.key,!0))},p=S=>{["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(S.key)&&f(S.key,!1)},_=S=>{if(o.value!=="playing")return;const E=S.target;if(E.closest("button")||E.closest(".back-btn")||E.closest(".target-word"))return;let A,D;if(S instanceof MouseEvent)A=S.clientX,D=S.clientY;else{const H=S.touches[0];if(!H)return;A=H.clientX,D=H.clientY}const b=100,T=window.innerHeight-b;let L=D-b;L=Math.max(0,Math.min(T,L));const V=A/window.innerWidth*100,F=L/T*100;g(V,F)},M=it(!1);Zs(a,(S,E)=>{S>E&&(M.value=!0,setTimeout(()=>{M.value=!1},1e3))}),Jr(()=>{window.addEventListener("keydown",m),window.addEventListener("keyup",p),d()}),ws(()=>{window.removeEventListener("keydown",m),window.removeEventListener("keyup",p)});const v=Jc(()=>l.value?l.value.text.split("").map((S,E)=>({char:S,isCaught:E<c.value,isCurrent:E===c.value})):[]);return(S,E)=>(qe(),Je("div",{class:"game-container",onClick:_,onTouchstart:_},[E[6]||(E[6]=pe("div",{class:"stars"},null,-1)),E[7]||(E[7]=pe("div",{class:"stars2"},null,-1)),pe("div",R0,[pe("div",P0,[pe("button",{class:"back-btn",onClick:E[0]||(E[0]=Xr(A=>S.$emit("exit"),["stop"]))},"⬅ BACK")]),pe("div",I0,[Ge(l)?(qe(),Je("div",L0,[pe("div",D0,St(Ge(l).translation),1),pe("div",{class:"word-progress",onClick:E[1]||(E[1]=Xr(A=>Ge(x)(),["stop"]))},[(qe(!0),Je(At,null,xn(v.value,(A,D)=>(qe(),Je("span",{key:D,class:jn(["char-box",{caught:A.isCaught,current:A.isCurrent}])},St(A.char),3))),128)),E[2]||(E[2]=pe("span",{class:"audio-icon"},"🔊",-1))])])):Nn("",!0)]),pe("div",N0,[pe("div",F0,[E[3]||(E[3]=pe("span",{class:"label"},"SCORE",-1)),pe("span",U0,St(Ge(a)),1)])])]),pe("div",O0,[(qe(!0),Je(At,null,xn(i.value,A=>(qe(),Je("div",{key:A.id,class:"explosion",style:tn({left:A.x+"%",top:A.y+"%"})},"💥",4))),128)),(qe(!0),Je(At,null,xn(Ge(u),A=>(qe(),Je("div",{key:A.id,class:"falling-item",style:tn({left:A.x+"%",top:A.y+"%"})},[pe("div",B0,St(A.char),1),E[4]||(E[4]=pe("div",{class:"meteor-tail"},null,-1))],4))),128)),pe("div",{class:"player",style:tn({left:Ge(h).x+"%",top:Ge(h).y+"%"})},[M.value?(qe(),Je("div",z0,"+10!")):Nn("",!0),E[5]||(E[5]=Af('<svg viewBox="0 0 512 512" width="100" height="65" class="ufo-svg" data-v-c330fed4><ellipse cx="256" cy="320" rx="200" ry="60" fill="#9e9e9e" stroke="#424242" stroke-width="8" data-v-c330fed4></ellipse><ellipse cx="256" cy="310" rx="180" ry="50" fill="#bdbdbd" data-v-c330fed4></ellipse><path d="M160,300 q96,-150 192,0" fill="#66ccff" opacity="0.8" stroke="#333" stroke-width="5" data-v-c330fed4></path><path d="M200,240 q56,-40 112,0" fill="white" opacity="0.3" data-v-c330fed4></path><circle cx="120" cy="330" r="10" fill="#ffeb3b" class="ufo-light" data-v-c330fed4></circle><circle cx="188" cy="350" r="12" fill="#ffeb3b" class="ufo-light" style="animation-delay:0.2s;" data-v-c330fed4></circle><circle cx="256" cy="360" r="14" fill="#ffeb3b" class="ufo-light" style="animation-delay:0.4s;" data-v-c330fed4></circle><circle cx="324" cy="350" r="12" fill="#ffeb3b" class="ufo-light" style="animation-delay:0.6s;" data-v-c330fed4></circle><circle cx="392" cy="330" r="10" fill="#ffeb3b" class="ufo-light" style="animation-delay:0.8s;" data-v-c330fed4></circle></svg>',1))],4)])],32))}}),k0=hr(V0,[["__scopeId","data-v-c330fed4"]]);function G0(){const{speak:n,playCorrect:e,playSuccess:t,playExplosion:i}=ur(),s=it(0),r=it(0),o=it(0),a=it(null),l=it([]),c=it(!1),u=["a","e","i","o","u"],h="bcdfghjklmnpqrstvwxyz".split(""),d=x=>{const m=x.split(""),p=m.length,_=Math.random(),M=S=>S===S.toUpperCase()&&S!==S.toLowerCase();if(_<.3){const S=m[0],E=S.toLowerCase(),A=M(S);if(h.includes(E)){let D=h[Math.floor(Math.random()*h.length)];A&&(D=D.toUpperCase()),m[0]=D}else if(u.includes(E)){const D=u.filter(T=>T!==E);let b=D[Math.floor(Math.random()*D.length)];A&&(b=b.toUpperCase()),m[0]=b}return m.join("")}if(_<.6)for(let S=0;S<p;S++){const E=m[S],A=E.toLowerCase(),D=M(E);if(u.includes(A)){const b=u.filter(L=>L!==A);let T=b[Math.floor(Math.random()*b.length)];return D&&(T=T.toUpperCase()),m[S]=T,m.join("")}}if(_<.8)for(let S=0;S<p;S++){const E=m[S],A=E.toLowerCase(),D=M(E);if(h.includes(A)){let b=h[Math.floor(Math.random()*h.length)];return D&&(b=b.toUpperCase()),m[S]=b,m.join("")}}const v=Math.floor(Math.random()*p);return m[v]===m[v+1]?m.splice(v,1):m.splice(v,0,m[v]),m.join("")},f=()=>{c.value=!1;const x=Mi.currentList.value;if(x.length===0)return;const m=x[Math.floor(Math.random()*x.length)];a.value=m;const p=m.text,_=new Set;_.add(p);let M=0;for(;_.size<4&&M<100;){let A=d(p);A!==p&&_.add(A),M++}for(;_.size<4;){let A=p+(Math.random()>.5?"s":"e");_.add(A)}l.value=Array.from(_).sort(()=>Math.random()-.5).map(A=>({text:A,isCorrect:A===p}));const v=m.text,S=v.split("").join(","),E=m.example?`. ${m.example}`:"";n(`${v}, (${S}), ${v}${E}`)};return{p1Score:s,p2Score:r,currentTarget:a,options:l,nextRound:f,handleChoice:(x,m)=>{if(c.value||!a.value)return!1;if(m.isCorrect){c.value=!0,e(),x===1?s.value++:r.value++;const p=s.value>r.value?1:r.value>s.value?2:0;return p!==0&&p!==o.value&&t(),o.value=p,setTimeout(f,1e3),!0}else{i(),x===1?s.value=Math.max(0,s.value-1):r.value=Math.max(0,r.value-1);const p=s.value>r.value?1:r.value>s.value?2:0;return p!==0&&p!==o.value&&t(),o.value=p,!1}},speak:n}}const H0={class:"duel-container"},W0={class:"center-strip"},X0={class:"strip-side p2-side rot-180"},q0={key:0,class:"trophy-container"},j0={class:"score-display",style:{color:"#FFA726"}},$0={class:"strip-center"},Y0={class:"text-content"},K0={class:"text-content"},Z0={class:"strip-side p1-side"},J0={key:0,class:"trophy-container"},Q0={class:"score-display",style:{color:"#42A5F5"}},ex={class:"player-zone p2"},tx={class:"options-grid"},nx=["onClick"],ix={class:"btn-text"},sx={class:"player-zone p1"},rx={class:"options-grid"},ox=["onClick"],ax={class:"btn-text"},lx=cr({__name:"DuelGame",emits:["exit"],setup(n,{emit:e}){const{p1Score:t,p2Score:i,currentTarget:s,options:r,nextRound:o,handleChoice:a,speak:l}=G0(),c=it([]);let u=0;const h=(d,f,g)=>{if(!a(f,g)){const m=u++;c.value.push({id:m,x:d.clientX,y:d.clientY}),setTimeout(()=>{c.value=c.value.filter(p=>p.id!==m)},500)}};return Jr(()=>{o()}),(d,f)=>{var g,x,m,p,_,M;return qe(),Je("div",H0,[(qe(!0),Je(At,null,xn(c.value,v=>(qe(),Je("div",{key:v.id,class:"explosion",style:tn({left:v.x+"px",top:v.y+"px"})},"💥",4))),128)),pe("div",W0,[pe("div",X0,[Ge(i)>Ge(t)?(qe(),Je("div",q0,[...f[3]||(f[3]=[pe("div",{class:"trophy-icon"},"🏆",-1)])])):Nn("",!0),pe("div",j0,St(Ge(i)),1)]),pe("div",$0,[pe("div",{class:"target-mini rot-180",onClick:f[0]||(f[0]=v=>Ge(s)&&Ge(l)(Ge(s).text)),style:tn({"--char-count":((x=(g=Ge(s))==null?void 0:g.translation)==null?void 0:x.length)||1})},[pe("span",Y0,St((m=Ge(s))==null?void 0:m.translation),1)],4),pe("button",{class:"exit-btn",onClick:f[1]||(f[1]=v=>d.$emit("exit"))},"EXIT"),pe("div",{class:"target-mini",onClick:f[2]||(f[2]=v=>Ge(s)&&Ge(l)(Ge(s).text)),style:tn({"--char-count":((_=(p=Ge(s))==null?void 0:p.translation)==null?void 0:_.length)||1})},[pe("span",K0,St((M=Ge(s))==null?void 0:M.translation),1)],4)]),pe("div",Z0,[Ge(t)>Ge(i)?(qe(),Je("div",J0,[...f[4]||(f[4]=[pe("div",{class:"trophy-icon"},"🏆",-1)])])):Nn("",!0),pe("div",Q0,St(Ge(t)),1)])]),pe("div",ex,[pe("div",tx,[(qe(!0),Je(At,null,xn(Ge(r),v=>(qe(),Je("button",{key:"p2-"+v.text,class:"option-btn",onClick:S=>h(S,2,v),style:tn({"--char-count":v.text.length})},[pe("span",ix,St(v.text),1)],12,nx))),128))])]),pe("div",sx,[pe("div",rx,[(qe(!0),Je(At,null,xn(Ge(r),v=>(qe(),Je("button",{key:"p1-"+v.text,class:"option-btn",onClick:S=>h(S,1,v),style:tn({"--char-count":v.text.length})},[pe("span",ax,St(v.text),1)],12,ox))),128))])])])}}}),cx=hr(lx,[["__scopeId","data-v-2263c6e0"]]);function ux(n){const t=it({x:0,y:0,character:"knight",holding:null}),i=it([]),s=it("Waiting for command..."),r=it({type:null,direction:null,x:0,y:0}),o=g=>{t.value.character=g},a=(g,x,m,p)=>{let _=x,M=m;for(let v=0;v<p;v++)_>=0&&_<10&&M>=0&&M<10&&!(_===0&&M===0)&&g.push({id:`water-${v}`,type:"water",x:_,y:M}),Math.random()>.5?_++:M++},l=(g,x,m)=>{[[-1,-1],[-1,0],[-1,1],[0,-1],[0,0],[0,1],[1,-1],[1,0],[1,1]].forEach(([_,M],v)=>{const S=x+_,E=m+M;S>=0&&S<10&&E>=0&&E<10&&!(S===0&&E===0)&&Math.random()>.3&&g.push({id:`tree-${x}-${m}-${v}`,type:"tree",x:S,y:E})})},c=()=>{const g=[];g.push({id:"bug1",type:"bug-green",x:7,y:3}),g.push({id:"bug2",type:"bug-blue",x:3,y:8}),g.push({id:"bug3",type:"bug-green",x:8,y:7}),a(g,2,0,6),l(g,6,5),[[4,2],[5,2],[2,5],[2,6]].forEach(([m,p],_)=>{g.some(M=>M.x===m&&M.y===p)||g.push({id:`rock-${_}`,type:"rock",x:m,y:p})}),g.push({id:"box1",type:"box",x:1,y:2}),g.push({id:"box2",type:"box",x:5,y:8}),i.value=g,t.value={x:0,y:0,character:t.value.character,holding:null}},u=(g,x)=>g<0||g>=10||x<0||x>=10?!1:!i.value.some(m=>m.x===g&&m.y===x&&(["rock","tree","water"].includes(m.type)||m.type.startsWith("bug"))),h=g=>{s.value=`Heard: "${g}"`;const x=d(g);x?f(x):s.value=`Sorry, I didn't understand "${g}"`},d=g=>{const x=g.toLowerCase().trim(),m=x.split(/\s+/),p=S=>S.some(E=>m.includes(E)),_=()=>p(["up","top","north","above","op","app"])?"up":p(["down","bottom","south","below","don","town","dan"])?"down":p(["left","west","lef","let"])?"left":p(["right","east","rite","write","wright"])?"right":null,M=()=>{const S={zero:0,oh:0,one:1,won:1,wan:1,two:2,to:2,too:2,tu:2,three:3,tree:3,free:3,four:4,for:4,fore:4,five:5,fife:5,six:6,sex:6,sicks:6,seven:7,heaven:7,eight:8,ate:8,ait:8,nine:9,nein:9,ten:10,tin:10};for(const A of m)if(S[A]!==void 0)return S[A];const E=x.match(/\d+/);return E?parseInt(E[0]):1};if(p(["pickup","grab","take","get","pick"]))return{action:"pickup",direction:"up"};const v=_();return v?p(["throw","toss","chuck","hurl","fro"])?{action:"throw",direction:v}:p(["attack","atack","atak","strike","hit","kill","fight"])?{action:"attack",direction:v}:{action:"move",direction:v,steps:M()}:null},f=async g=>{var v,S,E,A;let{x,y:m}=t.value;const p=g.direction==="left"?-1:g.direction==="right"?1:0,_=g.direction==="up"?-1:g.direction==="down"?1:0;if(g.action==="pickup"){const D=i.value.findIndex(b=>b.x===x&&b.y===m&&b.type==="box");D!==-1&&!t.value.holding?(t.value.holding="box",i.value.splice(D,1),s.value="Picked up a box!"):t.value.holding?s.value="Already holding something!":s.value="Nothing to pick up here.";return}if(g.action==="throw"){if(!t.value.holding){s.value="Not holding anything to throw!";return}const D=x+p,b=m+_;r.value={type:"throw",direction:g.direction,x,y:m},s.value=`Throwing ${g.direction}...`,await new Promise(L=>setTimeout(L,600)),r.value={type:null,direction:null,x:0,y:0};const T=i.value.findIndex(L=>L.x===D&&L.y===b&&L.type.startsWith("bug"));if(T!==-1){const L=i.value[T];s.value=`Boom! Threw box at ${L.type}!`,i.value.splice(T,1),t.value.holding=null,(v=n==null?void 0:n.onWin)==null||v.call(n)}else D>=0&&D<10&&b>=0&&b<10&&!i.value.some(L=>L.x===D&&L.y===b)?(i.value.push({id:`box-thrown-${Date.now()}`,type:"box",x:D,y:b}),t.value.holding=null,s.value="Box thrown!"):s.value="Can't throw there!";return}if(g.action==="attack"){const D=x+p,b=m+_;r.value={type:"attack",direction:g.direction,x,y:m},s.value=`Attacking ${g.direction}...`,await new Promise(L=>setTimeout(L,500)),r.value={type:null,direction:null,x:0,y:0};const T=i.value.findIndex(L=>L.x===D&&L.y===b&&L.type.startsWith("bug"));if(T!==-1){const L=i.value[T];s.value=`Bravo! Defeated the ${L.type}!`,i.value.splice(T,1),(S=n==null?void 0:n.onWin)==null||S.call(n),u(D,b)&&(t.value.x=D,t.value.y=b)}else i.value.some(V=>V.x===D&&V.y===b&&["rock","tree","water"].includes(V.type))?(s.value="Clang! Hit an obstacle.",(E=n==null?void 0:n.onHitObstacle)==null||E.call(n)):s.value="Missed!";return}const M=g.steps||1;for(let D=0;D<M;D++){const b=x+p,T=m+_;if(u(b,T))x=b,m=T,t.value.x=x,t.value.y=m,await new Promise(L=>setTimeout(L,200));else{s.value="Blocked!",(A=n==null?void 0:n.onHitObstacle)==null||A.call(n);break}}};return{gridSize:10,player:t,entities:i,message:s,animation:r,initLevel:c,processCommand:h,setCharacter:o}}const hx={key:0,class:"char-select-screen"},dx={class:"char-options"},fx={key:1,class:"ck-container"},px={class:"header"},mx={class:"status-bar"},gx={key:0,class:"holding-display"},xx={class:"msg-box"},_x={class:"entity-icon"},vx={class:"controls"},yx={class:"mic-icon"},Sx={class:"btn-text"},Mx=cr({__name:"CodeKnight",emits:["exit"],setup(n,{emit:e}){const{playSuccess:t,playExplosion:i,playTone:s}=ur(),{gridSize:r,player:o,entities:a,message:l,animation:c,initLevel:u,processCommand:h,setCharacter:d}=ux({onWin:()=>t(),onHitObstacle:()=>i()}),f=it(!1),g=it(!0),x=it(!1),m=S=>{d(S),g.value=!1,u()},p=()=>{const S=window.SpeechRecognition||window.webkitSpeechRecognition;if(!S){alert("Voice recognition not supported in this browser.");return}if(x.value){console.log("Already processing a command, ignoring...");return}const E=new S;E.lang="en-US",E.continuous=!1,E.interimResults=!1,E.maxAlternatives=3,E.start(),f.value=!0,s(880,"sine",.1),E.onresult=async A=>{if(x.value){console.log("Command already processing, skipping...");return}if(x.value=!0,f.value=!1,!A.results[0].isFinal){console.log("Interim result, skipping..."),x.value=!1;return}for(let D=0;D<A.results[0].length;D++){const b=A.results[0][D].transcript,T=A.results[0][D].confidence;if(console.log(`Alternative ${D}: "${b}" (confidence: ${T})`),T<.3){console.log(`Skipping low confidence alternative ${D}`);continue}const L=l.value;if(h(b),l.value!==L&&!l.value.includes("didn't understand"))break}await new Promise(D=>setTimeout(D,500)),x.value=!1},E.onerror=A=>{if(console.error("Speech recognition error:",A.error),f.value=!1,x.value=!1,A.error==="no-speech")l.value="No speech detected. Try again!";else if(A.error==="audio-capture")l.value="Microphone not found!";else{if(A.error==="aborted")return;l.value=`Error: ${A.error}`}},E.onend=()=>{f.value=!1}},_=(S,E)=>{if(o.value.x===S&&o.value.y===E)return"player";const A=a.value.find(D=>D.x===S&&D.y===E);return(A==null?void 0:A.type)||null},M=S=>{if(S==="player")return o.value.character==="knight"?"🛡️":"🤖";switch(S){case"bug-green":return"🐛";case"bug-blue":return"👾";case"rock":return"🪨";case"water":return"💧";case"tree":return"🌳";case"box":return"📦";default:return""}},v=(S,E)=>{if(o.value.x===S&&o.value.y===E)return"player";const A=a.value.find(D=>D.x===S&&D.y===E);return(A==null?void 0:A.type)||""};return(S,E)=>g.value?(qe(),Je("div",hx,[E[6]||(E[6]=pe("h1",{class:"select-title"},"Choose Your Hero",-1)),pe("div",dx,[pe("div",{class:"char-card",onClick:E[0]||(E[0]=A=>m("knight"))},[...E[4]||(E[4]=[pe("div",{class:"char-icon"},"🛡️",-1),pe("div",{class:"char-name"},"Knight",-1),pe("div",{class:"char-desc"},"Brave warrior with sword",-1)])]),pe("div",{class:"char-card",onClick:E[1]||(E[1]=A=>m("robot"))},[...E[5]||(E[5]=[pe("div",{class:"char-icon"},"🤖",-1),pe("div",{class:"char-name"},"Robot",-1),pe("div",{class:"char-desc"},"Tech-powered fighter",-1)])])]),pe("button",{class:"back-btn-select",onClick:E[2]||(E[2]=A=>S.$emit("exit"))},"⬅ Back to Menu")])):(qe(),Je("div",fx,[pe("div",px,[pe("button",{class:"back-btn",onClick:E[3]||(E[3]=A=>S.$emit("exit"))},"⬅ BACK"),E[7]||(E[7]=pe("div",{class:"game-title"},"Code Knight",-1)),pe("div",mx,[Ge(o).holding?(qe(),Je("div",gx," Holding: "+St(M(Ge(o).holding)),1)):Nn("",!0),pe("div",xx,St(Ge(l)),1)])]),pe("div",{class:"grid-board",style:tn({"--size":Ge(r)})},[(qe(!0),Je(At,null,xn(Ge(r),A=>(qe(),Je(At,{key:"row-"+A},[(qe(!0),Je(At,null,xn(Ge(r),D=>(qe(),Je("div",{key:"cell-"+(D-1)+"-"+(A-1),class:jn(["cell",v(D-1,A-1)])},[pe("div",_x,St(M(_(D-1,A-1))),1),Ge(c).type==="attack"&&Ge(c).x===D-1&&Ge(c).y===A-1?(qe(),Je("div",{key:0,class:jn(["attack-slash","slash-"+Ge(c).direction])},"⚔️",2)):Nn("",!0),Ge(c).type==="throw"&&Ge(c).x===D-1&&Ge(c).y===A-1?(qe(),Je("div",{key:1,class:jn(["throw-projectile","throw-"+Ge(c).direction])},"📦",2)):Nn("",!0)],2))),128))],64))),128))],4),pe("div",vx,[pe("button",{class:jn(["mic-btn",{listening:f.value}]),onClick:p},[pe("span",yx,St(f.value?"📡":"🎤"),1),pe("span",Sx,St(f.value?"Listening...":"Push to Talk"),1)],2),E[8]||(E[8]=pe("div",{class:"hints"},' Just say: "Right two" | "Down" | "Attack left" | "Pickup" | "Throw up" ',-1))])]))}}),bx=hr(Mx,[["__scopeId","data-v-6d211ac8"]]);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const eu="182",Ex=0,rh=1,wx=2,Xo=1,Tx=2,Pr=3,Zi=0,cn=1,qn=2,Ei=0,er=1,Vl=2,oh=3,ah=4,Ax=5,ds=100,Cx=101,Rx=102,Px=103,Ix=104,Lx=200,Dx=201,Nx=202,Fx=203,kl=204,Gl=205,Ux=206,Ox=207,Bx=208,zx=209,Vx=210,kx=211,Gx=212,Hx=213,Wx=214,Hl=0,Wl=1,Xl=2,sr=3,ql=4,jl=5,$l=6,Yl=7,Lf=0,Xx=1,qx=2,Jn=0,Df=1,Nf=2,Ff=3,Uf=4,Of=5,Bf=6,zf=7,Vf=300,Ms=301,rr=302,Kl=303,Zl=304,ba=306,Jl=1e3,bi=1001,Ql=1002,kt=1003,jx=1004,uo=1005,Xt=1006,ka=1007,gs=1008,mn=1009,kf=1010,Gf=1011,qr=1012,tu=1013,ii=1014,$n=1015,Pi=1016,nu=1017,iu=1018,jr=1020,Hf=35902,Wf=35899,Xf=1021,qf=1022,In=1023,Ii=1026,xs=1027,jf=1028,su=1029,or=1030,ru=1031,ou=1033,qo=33776,jo=33777,$o=33778,Yo=33779,ec=35840,tc=35841,nc=35842,ic=35843,sc=36196,rc=37492,oc=37496,ac=37488,lc=37489,cc=37490,uc=37491,hc=37808,dc=37809,fc=37810,pc=37811,mc=37812,gc=37813,xc=37814,_c=37815,vc=37816,yc=37817,Sc=37818,Mc=37819,bc=37820,Ec=37821,wc=36492,Tc=36494,Ac=36495,Cc=36283,Rc=36284,Pc=36285,Ic=36286,$x=3200,$f=0,Yx=1,qi="",Sn="srgb",ar="srgb-linear",aa="linear",xt="srgb",Cs=7680,lh=519,Kx=512,Zx=513,Jx=514,au=515,Qx=516,e_=517,lu=518,t_=519,ch=35044,uh="300 es",Yn=2e3,la=2001;function Yf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ca(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function n_(){const n=ca("canvas");return n.style.display="block",n}const hh={};function dh(...n){const e="THREE."+n.shift();console.log(e,...n)}function Ke(...n){const e="THREE."+n.shift();console.warn(e,...n)}function lt(...n){const e="THREE."+n.shift();console.error(e,...n)}function $r(...n){const e=n.join(" ");e in hh||(hh[e]=!0,Ke(...n))}function i_(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}class dr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ga=Math.PI/180,Lc=180/Math.PI;function eo(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Gt[n&255]+Gt[n>>8&255]+Gt[n>>16&255]+Gt[n>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[t&63|128]+Gt[t>>8&255]+"-"+Gt[t>>16&255]+Gt[t>>24&255]+Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]).toLowerCase()}function st(n,e,t){return Math.max(e,Math.min(t,n))}function s_(n,e){return(n%e+e)%e}function Ha(n,e,t){return(1-t)*n+t*e}function _r(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function on(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class ot{constructor(e=0,t=0){ot.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(st(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(st(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}let to=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3],d=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(a<=0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a>=1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=x;return}if(h!==x||l!==d||c!==f||u!==g){let m=l*d+c*f+u*g+h*x;m<0&&(d=-d,f=-f,g=-g,x=-x,m=-m);let p=1-a;if(m<.9995){const _=Math.acos(m),M=Math.sin(_);p=Math.sin(p*_)/M,a=Math.sin(a*_)/M,l=l*p+d*a,c=c*p+f*a,u=u*p+g*a,h=h*p+x*a}else{l=l*p+d*a,c=c*p+f*a,u=u*p+g*a,h=h*p+x*a;const _=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=_,c*=_,u*=_,h*=_}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*f-c*d,e[t+1]=l*g+u*d+c*h-a*f,e[t+2]=c*g+u*f+a*d-l*h,e[t+3]=u*g-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),d=l(i/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:Ke("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=i+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(i>a&&i>h){const f=2*Math.sqrt(1+i-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>h){const f=2*Math.sqrt(1+a-i-h);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-i-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(st(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class Q{constructor(e=0,t=0,i=0){Q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(fh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(fh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(st(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Wa.copy(this).projectOnVector(e),this.sub(Wa)}reflect(e){return this.sub(Wa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(st(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wa=new Q,fh=new to;class et{constructor(e,t,i,s,r,o,a,l,c){et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],f=i[5],g=i[8],x=s[0],m=s[3],p=s[6],_=s[1],M=s[4],v=s[7],S=s[2],E=s[5],A=s[8];return r[0]=o*x+a*_+l*S,r[3]=o*m+a*M+l*E,r[6]=o*p+a*v+l*A,r[1]=c*x+u*_+h*S,r[4]=c*m+u*M+h*E,r[7]=c*p+u*v+h*A,r[2]=d*x+f*_+g*S,r[5]=d*m+f*M+g*E,r[8]=d*p+f*v+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*r,f=c*r-o*l,g=t*h+i*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=h*x,e[1]=(s*c-u*i)*x,e[2]=(a*i-s*o)*x,e[3]=d*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=f*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Xa.makeScale(e,t)),this}rotate(e){return this.premultiply(Xa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Xa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Xa=new et,ph=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mh=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function r_(){const n={enabled:!0,workingColorSpace:ar,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===xt&&(s.r=wi(s.r),s.g=wi(s.g),s.b=wi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===xt&&(s.r=tr(s.r),s.g=tr(s.g),s.b=tr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===qi?aa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return $r("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return $r("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ar]:{primaries:e,whitePoint:i,transfer:aa,toXYZ:ph,fromXYZ:mh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Sn},outputColorSpaceConfig:{drawingBufferColorSpace:Sn}},[Sn]:{primaries:e,whitePoint:i,transfer:xt,toXYZ:ph,fromXYZ:mh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Sn}}}),n}const ct=r_();function wi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function tr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Rs;class o_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Rs===void 0&&(Rs=ca("canvas")),Rs.width=e.width,Rs.height=e.height;const s=Rs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Rs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ca("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=wi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(wi(t[i]/255)*255):t[i]=wi(t[i]);return{data:t,width:e.width,height:e.height}}else return Ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let a_=0;class cu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:a_++}),this.uuid=eo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(qa(s[o].image)):r.push(qa(s[o]))}else r=qa(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function qa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?o_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ke("Texture: Unable to serialize Texture."),{})}let l_=0;const ja=new Q;class jt extends dr{constructor(e=jt.DEFAULT_IMAGE,t=jt.DEFAULT_MAPPING,i=bi,s=bi,r=Xt,o=gs,a=In,l=mn,c=jt.DEFAULT_ANISOTROPY,u=qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:l_++}),this.uuid=eo(),this.name="",this.source=new cu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ja).x}get height(){return this.source.getSize(ja).y}get depth(){return this.source.getSize(ja).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Ke(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ke(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Jl:e.x=e.x-Math.floor(e.x);break;case bi:e.x=e.x<0?0:1;break;case Ql:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Jl:e.y=e.y-Math.floor(e.y);break;case bi:e.y=e.y<0?0:1;break;case Ql:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=Vf;jt.DEFAULT_ANISOTROPY=1;class It{constructor(e=0,t=0,i=0,s=1){It.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,v=(f+1)/2,S=(p+1)/2,E=(u+d)/4,A=(h+x)/4,D=(g+m)/4;return M>v&&M>S?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=E/i,r=A/i):v>S?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=E/s,r=D/s):S<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),i=A/r,s=D/r),this.set(i,s,r,t),this}let _=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(h-x)/_,this.z=(d-u)/_,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this.w=st(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this.w=st(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(st(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class c_ extends dr{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new It(0,0,e,t),this.scissorTest=!1,this.viewport=new It(0,0,e,t);const s={width:e,height:t,depth:i.depth},r=new jt(s);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Xt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new cu(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qn extends c_{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Kf extends jt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=kt,this.minFilter=kt,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class u_ extends jt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=kt,this.minFilter=kt,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class no{constructor(e=new Q(1/0,1/0,1/0),t=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(wn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(wn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,wn):wn.fromBufferAttribute(r,o),wn.applyMatrix4(e.matrixWorld),this.expandByPoint(wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ho.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ho.copy(i.boundingBox)),ho.applyMatrix4(e.matrixWorld),this.union(ho)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wn),wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vr),fo.subVectors(this.max,vr),Ps.subVectors(e.a,vr),Is.subVectors(e.b,vr),Ls.subVectors(e.c,vr),Ni.subVectors(Is,Ps),Fi.subVectors(Ls,Is),ns.subVectors(Ps,Ls);let t=[0,-Ni.z,Ni.y,0,-Fi.z,Fi.y,0,-ns.z,ns.y,Ni.z,0,-Ni.x,Fi.z,0,-Fi.x,ns.z,0,-ns.x,-Ni.y,Ni.x,0,-Fi.y,Fi.x,0,-ns.y,ns.x,0];return!$a(t,Ps,Is,Ls,fo)||(t=[1,0,0,0,1,0,0,0,1],!$a(t,Ps,Is,Ls,fo))?!1:(po.crossVectors(Ni,Fi),t=[po.x,po.y,po.z],$a(t,Ps,Is,Ls,fo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const li=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],wn=new Q,ho=new no,Ps=new Q,Is=new Q,Ls=new Q,Ni=new Q,Fi=new Q,ns=new Q,vr=new Q,fo=new Q,po=new Q,is=new Q;function $a(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){is.fromArray(n,r);const a=s.x*Math.abs(is.x)+s.y*Math.abs(is.y)+s.z*Math.abs(is.z),l=e.dot(is),c=t.dot(is),u=i.dot(is);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const h_=new no,yr=new Q,Ya=new Q;class uu{constructor(e=new Q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):h_.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yr.subVectors(e,this.center);const t=yr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(yr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ya.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yr.copy(e.center).add(Ya)),this.expandByPoint(yr.copy(e.center).sub(Ya))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ci=new Q,Ka=new Q,mo=new Q,Ui=new Q,Za=new Q,go=new Q,Ja=new Q;let Zf=class{constructor(e=new Q,t=new Q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ci.copy(this.origin).addScaledVector(this.direction,t),ci.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Ka.copy(e).add(t).multiplyScalar(.5),mo.copy(t).sub(e).normalize(),Ui.copy(this.origin).sub(Ka);const r=e.distanceTo(t)*.5,o=-this.direction.dot(mo),a=Ui.dot(this.direction),l=-Ui.dot(mo),c=Ui.lengthSq(),u=Math.abs(1-o*o);let h,d,f,g;if(u>0)if(h=o*l-a,d=o*a-l,g=r*u,h>=0)if(d>=-g)if(d<=g){const x=1/u;h*=x,d*=x,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Ka).addScaledVector(mo,d),f}intersectSphere(e,t){ci.subVectors(e.center,this.origin);const i=ci.dot(this.direction),s=ci.dot(ci)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ci)!==null}intersectTriangle(e,t,i,s,r){Za.subVectors(t,e),go.subVectors(i,e),Ja.crossVectors(Za,go);let o=this.direction.dot(Ja),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ui.subVectors(this.origin,e);const l=a*this.direction.dot(go.crossVectors(Ui,go));if(l<0)return null;const c=a*this.direction.dot(Za.cross(Ui));if(c<0||l+c>o)return null;const u=-a*Ui.dot(Ja);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class Ct{constructor(e,t,i,s,r,o,a,l,c,u,h,d,f,g,x,m){Ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,h,d,f,g,x,m)}set(e,t,i,s,r,o,a,l,c,u,h,d,f,g,x,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ct().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,s=1/Ds.setFromMatrixColumn(e,0).length(),r=1/Ds.setFromMatrixColumn(e,1).length(),o=1/Ds.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,f=o*h,g=a*u,x=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+g*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,g=c*u,x=c*h;t[0]=d+x*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,g=c*u,x=c*h;t[0]=d-x*a,t[4]=-o*h,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,f=o*h,g=a*u,x=a*h;t[0]=l*u,t[4]=g*c-f,t[8]=d*c+x,t[1]=l*h,t[5]=x*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=x-d*h,t[8]=g*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+g,t[10]=d-x*h}else if(e.order==="XZY"){const d=o*l,f=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+x,t[5]=o*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=a*u,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(d_,e,f_)}lookAt(e,t,i){const s=this.elements;return dn.subVectors(e,t),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),Oi.crossVectors(i,dn),Oi.lengthSq()===0&&(Math.abs(i.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),Oi.crossVectors(i,dn)),Oi.normalize(),xo.crossVectors(dn,Oi),s[0]=Oi.x,s[4]=xo.x,s[8]=dn.x,s[1]=Oi.y,s[5]=xo.y,s[9]=dn.y,s[2]=Oi.z,s[6]=xo.z,s[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],f=i[13],g=i[2],x=i[6],m=i[10],p=i[14],_=i[3],M=i[7],v=i[11],S=i[15],E=s[0],A=s[4],D=s[8],b=s[12],T=s[1],L=s[5],V=s[9],F=s[13],H=s[2],z=s[6],U=s[10],k=s[14],q=s[3],ae=s[7],oe=s[11],fe=s[15];return r[0]=o*E+a*T+l*H+c*q,r[4]=o*A+a*L+l*z+c*ae,r[8]=o*D+a*V+l*U+c*oe,r[12]=o*b+a*F+l*k+c*fe,r[1]=u*E+h*T+d*H+f*q,r[5]=u*A+h*L+d*z+f*ae,r[9]=u*D+h*V+d*U+f*oe,r[13]=u*b+h*F+d*k+f*fe,r[2]=g*E+x*T+m*H+p*q,r[6]=g*A+x*L+m*z+p*ae,r[10]=g*D+x*V+m*U+p*oe,r[14]=g*b+x*F+m*k+p*fe,r[3]=_*E+M*T+v*H+S*q,r[7]=_*A+M*L+v*z+S*ae,r[11]=_*D+M*V+v*U+S*oe,r[15]=_*b+M*F+v*k+S*fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],x=e[7],m=e[11],p=e[15],_=l*f-c*d,M=a*f-c*h,v=a*d-l*h,S=o*f-c*u,E=o*d-l*u,A=o*h-a*u;return t*(x*_-m*M+p*v)-i*(g*_-m*S+p*E)+s*(g*M-x*S+p*A)-r*(g*v-x*E+m*A)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],x=e[13],m=e[14],p=e[15],_=h*m*c-x*d*c+x*l*f-a*m*f-h*l*p+a*d*p,M=g*d*c-u*m*c-g*l*f+o*m*f+u*l*p-o*d*p,v=u*x*c-g*h*c+g*a*f-o*x*f-u*a*p+o*h*p,S=g*h*l-u*x*l-g*a*d+o*x*d+u*a*m-o*h*m,E=t*_+i*M+s*v+r*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=_*A,e[1]=(x*d*r-h*m*r-x*s*f+i*m*f+h*s*p-i*d*p)*A,e[2]=(a*m*r-x*l*r+x*s*c-i*m*c-a*s*p+i*l*p)*A,e[3]=(h*l*r-a*d*r-h*s*c+i*d*c+a*s*f-i*l*f)*A,e[4]=M*A,e[5]=(u*m*r-g*d*r+g*s*f-t*m*f-u*s*p+t*d*p)*A,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*p-t*l*p)*A,e[7]=(o*d*r-u*l*r+u*s*c-t*d*c-o*s*f+t*l*f)*A,e[8]=v*A,e[9]=(g*h*r-u*x*r-g*i*f+t*x*f+u*i*p-t*h*p)*A,e[10]=(o*x*r-g*a*r+g*i*c-t*x*c-o*i*p+t*a*p)*A,e[11]=(u*a*r-o*h*r-u*i*c+t*h*c+o*i*f-t*a*f)*A,e[12]=S*A,e[13]=(u*x*s-g*h*s+g*i*d-t*x*d-u*i*m+t*h*m)*A,e[14]=(g*a*s-o*x*s-g*i*l+t*x*l+o*i*m-t*a*m)*A,e[15]=(o*h*s-u*a*s+u*i*l-t*h*l-o*i*d+t*a*d)*A,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,d=r*c,f=r*u,g=r*h,x=o*u,m=o*h,p=a*h,_=l*c,M=l*u,v=l*h,S=i.x,E=i.y,A=i.z;return s[0]=(1-(x+p))*S,s[1]=(f+v)*S,s[2]=(g-M)*S,s[3]=0,s[4]=(f-v)*E,s[5]=(1-(d+p))*E,s[6]=(m+_)*E,s[7]=0,s[8]=(g+M)*A,s[9]=(m-_)*A,s[10]=(1-(d+x))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;if(e.x=s[12],e.y=s[13],e.z=s[14],this.determinant()===0)return i.set(1,1,1),t.identity(),this;let r=Ds.set(s[0],s[1],s[2]).length();const o=Ds.set(s[4],s[5],s[6]).length(),a=Ds.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),Tn.copy(this);const c=1/r,u=1/o,h=1/a;return Tn.elements[0]*=c,Tn.elements[1]*=c,Tn.elements[2]*=c,Tn.elements[4]*=u,Tn.elements[5]*=u,Tn.elements[6]*=u,Tn.elements[8]*=h,Tn.elements[9]*=h,Tn.elements[10]*=h,t.setFromRotationMatrix(Tn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Yn,l=!1){const c=this.elements,u=2*r/(t-e),h=2*r/(i-s),d=(t+e)/(t-e),f=(i+s)/(i-s);let g,x;if(l)g=r/(o-r),x=o*r/(o-r);else if(a===Yn)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===la)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Yn,l=!1){const c=this.elements,u=2/(t-e),h=2/(i-s),d=-(t+e)/(t-e),f=-(i+s)/(i-s);let g,x;if(l)g=1/(o-r),x=o/(o-r);else if(a===Yn)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===la)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ds=new Q,Tn=new Ct,d_=new Q(0,0,0),f_=new Q(1,1,1),Oi=new Q,xo=new Q,dn=new Q,gh=new Ct,xh=new to;class si{constructor(e=0,t=0,i=0,s=si.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(st(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-st(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(st(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-st(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(st(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-st(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return gh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xh.setFromEuler(this),this.setFromQuaternion(xh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}si.DEFAULT_ORDER="XYZ";class hu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let p_=0;const _h=new Q,Ns=new to,ui=new Ct,_o=new Q,Sr=new Q,m_=new Q,g_=new to,vh=new Q(1,0,0),yh=new Q(0,1,0),Sh=new Q(0,0,1),Mh={type:"added"},x_={type:"removed"},Fs={type:"childadded",child:null},Qa={type:"childremoved",child:null};class $t extends dr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:p_++}),this.uuid=eo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$t.DEFAULT_UP.clone();const e=new Q,t=new si,i=new to,s=new Q(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ct},normalMatrix:{value:new et}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=$t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ns.setFromAxisAngle(e,t),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(e,t){return Ns.setFromAxisAngle(e,t),this.quaternion.premultiply(Ns),this}rotateX(e){return this.rotateOnAxis(vh,e)}rotateY(e){return this.rotateOnAxis(yh,e)}rotateZ(e){return this.rotateOnAxis(Sh,e)}translateOnAxis(e,t){return _h.copy(e).applyQuaternion(this.quaternion),this.position.add(_h.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(vh,e)}translateY(e){return this.translateOnAxis(yh,e)}translateZ(e){return this.translateOnAxis(Sh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ui.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?_o.copy(e):_o.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Sr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ui.lookAt(Sr,_o,this.up):ui.lookAt(_o,Sr,this.up),this.quaternion.setFromRotationMatrix(ui),s&&(ui.extractRotation(s.matrixWorld),Ns.setFromRotationMatrix(ui),this.quaternion.premultiply(Ns.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(lt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Mh),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null):lt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(x_),Qa.child=e,this.dispatchEvent(Qa),Qa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Mh),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sr,e,m_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sr,g_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}$t.DEFAULT_UP=new Q(0,1,0);$t.DEFAULT_MATRIX_AUTO_UPDATE=!0;$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const An=new Q,hi=new Q,el=new Q,di=new Q,Us=new Q,Os=new Q,bh=new Q,tl=new Q,nl=new Q,il=new Q,sl=new It,rl=new It,ol=new It;class Pn{constructor(e=new Q,t=new Q,i=new Q){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),An.subVectors(e,t),s.cross(An);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){An.subVectors(s,t),hi.subVectors(i,t),el.subVectors(e,t);const o=An.dot(An),a=An.dot(hi),l=An.dot(el),c=hi.dot(hi),u=hi.dot(el),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(c*l-a*u)*d,g=(o*u-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,di)===null?!1:di.x>=0&&di.y>=0&&di.x+di.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,di.x),l.addScaledVector(o,di.y),l.addScaledVector(a,di.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return sl.setScalar(0),rl.setScalar(0),ol.setScalar(0),sl.fromBufferAttribute(e,t),rl.fromBufferAttribute(e,i),ol.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(sl,r.x),o.addScaledVector(rl,r.y),o.addScaledVector(ol,r.z),o}static isFrontFacing(e,t,i,s){return An.subVectors(i,t),hi.subVectors(e,t),An.cross(hi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return An.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),An.cross(hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Pn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Pn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;Us.subVectors(s,i),Os.subVectors(r,i),tl.subVectors(e,i);const l=Us.dot(tl),c=Os.dot(tl);if(l<=0&&c<=0)return t.copy(i);nl.subVectors(e,s);const u=Us.dot(nl),h=Os.dot(nl);if(u>=0&&h<=u)return t.copy(s);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Us,o);il.subVectors(e,r);const f=Us.dot(il),g=Os.dot(il);if(g>=0&&f<=g)return t.copy(r);const x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Os,a);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return bh.subVectors(r,s),a=(h-u)/(h-u+(f-g)),t.copy(s).addScaledVector(bh,a);const p=1/(m+x+d);return o=x*p,a=d*p,t.copy(i).addScaledVector(Us,o).addScaledVector(Os,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Jf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bi={h:0,s:0,l:0},vo={h:0,s:0,l:0};function al(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class rt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=ct.workingColorSpace){return this.r=e,this.g=t,this.b=i,ct.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=ct.workingColorSpace){if(e=s_(e,1),t=st(t,0,1),i=st(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=al(o,r,e+1/3),this.g=al(o,r,e),this.b=al(o,r,e-1/3)}return ct.colorSpaceToWorking(this,s),this}setStyle(e,t=Sn){function i(r){r!==void 0&&parseFloat(r)<1&&Ke("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ke("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Sn){const i=Jf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wi(e.r),this.g=wi(e.g),this.b=wi(e.b),this}copyLinearToSRGB(e){return this.r=tr(e.r),this.g=tr(e.g),this.b=tr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Sn){return ct.workingToColorSpace(Ht.copy(this),e),Math.round(st(Ht.r*255,0,255))*65536+Math.round(st(Ht.g*255,0,255))*256+Math.round(st(Ht.b*255,0,255))}getHexString(e=Sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.workingToColorSpace(Ht.copy(this),t);const i=Ht.r,s=Ht.g,r=Ht.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ct.workingColorSpace){return ct.workingToColorSpace(Ht.copy(this),t),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=Sn){ct.workingToColorSpace(Ht.copy(this),e);const t=Ht.r,i=Ht.g,s=Ht.b;return e!==Sn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Bi),this.setHSL(Bi.h+e,Bi.s+t,Bi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Bi),e.getHSL(vo);const i=Ha(Bi.h,vo.h,t),s=Ha(Bi.s,vo.s,t),r=Ha(Bi.l,vo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ht=new rt;rt.NAMES=Jf;let __=0,io=class extends dr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:__++}),this.uuid=eo(),this.name="",this.type="Material",this.blending=er,this.side=Zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kl,this.blendDst=Gl,this.blendEquation=ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cs,this.stencilZFail=Cs,this.stencilZPass=Cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Ke(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Ke(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==er&&(i.blending=this.blending),this.side!==Zi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==kl&&(i.blendSrc=this.blendSrc),this.blendDst!==Gl&&(i.blendDst=this.blendDst),this.blendEquation!==ds&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==sr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Cs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Cs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};class fs extends io{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new si,this.combine=Lf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Lt=new Q,yo=new ot;let v_=0;class ei{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:v_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ch,this.updateRanges=[],this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)yo.fromBufferAttribute(this,t),yo.applyMatrix3(e),this.setXY(t,yo.x,yo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix3(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=_r(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=on(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_r(t,this.array)),t}setX(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_r(t,this.array)),t}setY(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_r(t,this.array)),t}setZ(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_r(t,this.array)),t}setW(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),i=on(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),i=on(i,this.array),s=on(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),i=on(i,this.array),s=on(s,this.array),r=on(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ch&&(e.usage=this.usage),e}}class Qf extends ei{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class ep extends ei{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ti extends ei{constructor(e,t,i){super(new Float32Array(e),t,i)}}let y_=0;const yn=new Ct,ll=new $t,Bs=new Q,fn=new no,Mr=new no,Vt=new Q;class Di extends dr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:y_++}),this.uuid=eo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Yf(e)?ep:Qf)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new et().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yn.makeRotationFromQuaternion(e),this.applyMatrix4(yn),this}rotateX(e){return yn.makeRotationX(e),this.applyMatrix4(yn),this}rotateY(e){return yn.makeRotationY(e),this.applyMatrix4(yn),this}rotateZ(e){return yn.makeRotationZ(e),this.applyMatrix4(yn),this}translate(e,t,i){return yn.makeTranslation(e,t,i),this.applyMatrix4(yn),this}scale(e,t,i){return yn.makeScale(e,t,i),this.applyMatrix4(yn),this}lookAt(e){return ll.lookAt(e),ll.updateMatrix(),this.applyMatrix4(ll.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bs).negate(),this.translate(Bs.x,Bs.y,Bs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ti(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new no);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){lt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];fn.setFromBufferAttribute(r),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&lt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new uu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){lt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(e){const i=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Mr.setFromBufferAttribute(a),this.morphTargetsRelative?(Vt.addVectors(fn.min,Mr.min),fn.expandByPoint(Vt),Vt.addVectors(fn.max,Mr.max),fn.expandByPoint(Vt)):(fn.expandByPoint(Mr.min),fn.expandByPoint(Mr.max))}fn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Vt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Vt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Vt.fromBufferAttribute(a,c),l&&(Bs.fromBufferAttribute(e,c),Vt.add(Bs)),s=Math.max(s,i.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&lt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){lt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ei(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<i.count;D++)a[D]=new Q,l[D]=new Q;const c=new Q,u=new Q,h=new Q,d=new ot,f=new ot,g=new ot,x=new Q,m=new Q;function p(D,b,T){c.fromBufferAttribute(i,D),u.fromBufferAttribute(i,b),h.fromBufferAttribute(i,T),d.fromBufferAttribute(r,D),f.fromBufferAttribute(r,b),g.fromBufferAttribute(r,T),u.sub(c),h.sub(c),f.sub(d),g.sub(d);const L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(L),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(L),a[D].add(x),a[b].add(x),a[T].add(x),l[D].add(m),l[b].add(m),l[T].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let D=0,b=_.length;D<b;++D){const T=_[D],L=T.start,V=T.count;for(let F=L,H=L+V;F<H;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const M=new Q,v=new Q,S=new Q,E=new Q;function A(D){S.fromBufferAttribute(s,D),E.copy(S);const b=a[D];M.copy(b),M.sub(S.multiplyScalar(S.dot(b))).normalize(),v.crossVectors(E,b);const L=v.dot(l[D])<0?-1:1;o.setXYZW(D,M.x,M.y,M.z,L)}for(let D=0,b=_.length;D<b;++D){const T=_[D],L=T.start,V=T.count;for(let F=L,H=L+V;F<H;F+=3)A(e.getX(F+0)),A(e.getX(F+1)),A(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ei(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const s=new Q,r=new Q,o=new Q,a=new Q,l=new Q,c=new Q,u=new Q,h=new Q;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Vt.fromBufferAttribute(e,t),Vt.normalize(),e.setXYZ(t,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let f=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*u;for(let p=0;p<u;p++)d[g++]=c[f++]}return new ei(d,u,h)}if(this.index===null)return Ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Di,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Eh=new Ct,ss=new Zf,So=new uu,wh=new Q,Mo=new Q,bo=new Q,Eo=new Q,cl=new Q,wo=new Q,Th=new Q,To=new Q;class dt extends $t{constructor(e=new Di,t=new fs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){wo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(cl.fromBufferAttribute(h,e),o?wo.addScaledVector(cl,u):wo.addScaledVector(cl.sub(t),u))}t.add(wo)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),So.copy(i.boundingSphere),So.applyMatrix4(r),ss.copy(e.ray).recast(e.near),!(So.containsPoint(ss.origin)===!1&&(ss.intersectSphere(So,wh)===null||ss.origin.distanceToSquared(wh)>(e.far-e.near)**2))&&(Eh.copy(r).invert(),ss.copy(e.ray).applyMatrix4(Eh),!(i.boundingBox!==null&&ss.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ss)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const m=d[g],p=o[m.materialIndex],_=Math.max(m.start,f.start),M=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=_,S=M;v<S;v+=3){const E=a.getX(v),A=a.getX(v+1),D=a.getX(v+2);s=Ao(this,p,e,i,c,u,h,E,A,D),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const _=a.getX(m),M=a.getX(m+1),v=a.getX(m+2);s=Ao(this,o,e,i,c,u,h,_,M,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const m=d[g],p=o[m.materialIndex],_=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=_,S=M;v<S;v+=3){const E=v,A=v+1,D=v+2;s=Ao(this,p,e,i,c,u,h,E,A,D),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const _=m,M=m+1,v=m+2;s=Ao(this,o,e,i,c,u,h,_,M,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function S_(n,e,t,i,s,r,o,a){let l;if(e.side===cn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Zi,a),l===null)return null;To.copy(a),To.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(To);return c<t.near||c>t.far?null:{distance:c,point:To.clone(),object:n}}function Ao(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Mo),n.getVertexPosition(l,bo),n.getVertexPosition(c,Eo);const u=S_(n,e,t,i,Mo,bo,Eo,Th);if(u){const h=new Q;Pn.getBarycoord(Th,Mo,bo,Eo,h),s&&(u.uv=Pn.getInterpolatedAttribute(s,a,l,c,h,new ot)),r&&(u.uv1=Pn.getInterpolatedAttribute(r,a,l,c,h,new ot)),o&&(u.normal=Pn.getInterpolatedAttribute(o,a,l,c,h,new Q),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new Q,materialIndex:0};Pn.getNormal(Mo,bo,Eo,d.normal),u.face=d,u.barycoord=h}return u}class Mn extends Di{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ti(c,3)),this.setAttribute("normal",new Ti(u,3)),this.setAttribute("uv",new Ti(h,2));function g(x,m,p,_,M,v,S,E,A,D,b){const T=v/A,L=S/D,V=v/2,F=S/2,H=E/2,z=A+1,U=D+1;let k=0,q=0;const ae=new Q;for(let oe=0;oe<U;oe++){const fe=oe*L-F;for(let ge=0;ge<z;ge++){const Oe=ge*T-V;ae[x]=Oe*_,ae[m]=fe*M,ae[p]=H,c.push(ae.x,ae.y,ae.z),ae[x]=0,ae[m]=0,ae[p]=E>0?1:-1,u.push(ae.x,ae.y,ae.z),h.push(ge/A),h.push(1-oe/D),k+=1}}for(let oe=0;oe<D;oe++)for(let fe=0;fe<A;fe++){const ge=d+fe+z*oe,Oe=d+fe+z*(oe+1),Ve=d+(fe+1)+z*(oe+1),Ze=d+(fe+1)+z*oe;l.push(ge,Oe,Ze),l.push(Oe,Ve,Ze),q+=6}a.addGroup(f,q,b),f+=q,d+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function lr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Jt(n){const e={};for(let t=0;t<n.length;t++){const i=lr(n[t]);for(const s in i)e[s]=i[s]}return e}function M_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function tp(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}const b_={clone:lr,merge:Jt};var E_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,w_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ri extends io{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=E_,this.fragmentShader=w_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=lr(e.uniforms),this.uniformsGroups=M_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class np extends $t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct,this.coordinateSystem=Yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const zi=new Q,Ah=new ot,Ch=new ot;class Rn extends np{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Lc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ga*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lc*2*Math.atan(Math.tan(Ga*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(zi.x,zi.y).multiplyScalar(-e/zi.z),zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(zi.x,zi.y).multiplyScalar(-e/zi.z)}getViewSize(e,t){return this.getViewBounds(e,Ah,Ch),t.subVectors(Ch,Ah)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ga*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const zs=-90,Vs=1;class T_ extends $t{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Rn(zs,Vs,e,t);s.layers=this.layers,this.add(s);const r=new Rn(zs,Vs,e,t);r.layers=this.layers,this.add(r);const o=new Rn(zs,Vs,e,t);o.layers=this.layers,this.add(o);const a=new Rn(zs,Vs,e,t);a.layers=this.layers,this.add(a);const l=new Rn(zs,Vs,e,t);l.layers=this.layers,this.add(l);const c=new Rn(zs,Vs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Yn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===la)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class ip extends jt{constructor(e=[],t=Ms,i,s,r,o,a,l,c,u){super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class sp extends Qn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new ip(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Mn(5,5,5),r=new ri({name:"CubemapFromEquirect",uniforms:lr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:cn,blending:Ei});r.uniforms.tEquirect.value=t;const o=new dt(s,r),a=t.minFilter;return t.minFilter===gs&&(t.minFilter=Xt),new T_(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}class js extends $t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const A_={type:"move"};class ul{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new js,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new js,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new js,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,i),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(A_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new js;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class du{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new rt(e),this.near=t,this.far=i}clone(){return new du(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class C_ extends $t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new si,this.environmentIntensity=1,this.environmentRotation=new si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class R_ extends jt{constructor(e=null,t=1,i=1,s,r,o,a,l,c=kt,u=kt,h,d){super(null,o,a,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const hl=new Q,P_=new Q,I_=new et;let Xi=class{constructor(e=new Q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=hl.subVectors(i,t).cross(P_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(hl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||I_.getNormalMatrix(e),s=this.coplanarPoint(hl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}};const rs=new uu,L_=new ot(.5,.5),Co=new Q;class fu{constructor(e=new Xi,t=new Xi,i=new Xi,s=new Xi,r=new Xi,o=new Xi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Yn,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],d=r[6],f=r[7],g=r[8],x=r[9],m=r[10],p=r[11],_=r[12],M=r[13],v=r[14],S=r[15];if(s[0].setComponents(c-o,f-u,p-g,S-_).normalize(),s[1].setComponents(c+o,f+u,p+g,S+_).normalize(),s[2].setComponents(c+a,f+h,p+x,S+M).normalize(),s[3].setComponents(c-a,f-h,p-x,S-M).normalize(),i)s[4].setComponents(l,d,m,v).normalize(),s[5].setComponents(c-l,f-d,p-m,S-v).normalize();else if(s[4].setComponents(c-l,f-d,p-m,S-v).normalize(),t===Yn)s[5].setComponents(c+l,f+d,p+m,S+v).normalize();else if(t===la)s[5].setComponents(l,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),rs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rs)}intersectsSprite(e){rs.center.set(0,0,0);const t=L_.distanceTo(e.center);return rs.radius=.7071067811865476+t,rs.applyMatrix4(e.matrixWorld),this.intersectsSphere(rs)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Co.x=s.normal.x>0?e.max.x:e.min.x,Co.y=s.normal.y>0?e.max.y:e.min.y,Co.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Co)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class dl extends jt{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Yr extends jt{constructor(e,t,i=ii,s,r,o,a=kt,l=kt,c,u=Ii,h=1){if(u!==Ii&&u!==xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new cu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class D_ extends Yr{constructor(e,t=ii,i=Ms,s,r,o=kt,a=kt,l,c=Ii){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,i,s,r,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class rp extends jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Qt extends Di{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=e/a,d=t/l,f=[],g=[],x=[],m=[];for(let p=0;p<u;p++){const _=p*d-o;for(let M=0;M<c;M++){const v=M*h-r;g.push(v,-_,0),x.push(0,0,1),m.push(M/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<a;_++){const M=_+c*p,v=_+c*(p+1),S=_+1+c*(p+1),E=_+1+c*p;f.push(M,v,E),f.push(v,S,E)}this.setIndex(f),this.setAttribute("position",new Ti(g,3)),this.setAttribute("normal",new Ti(x,3)),this.setAttribute("uv",new Ti(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qt(e.width,e.height,e.widthSegments,e.heightSegments)}}class N_ extends ri{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Vi extends io{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$f,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new si,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class F_ extends io{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$x,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class U_ extends io{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class op extends $t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new rt(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const fl=new Ct,Rh=new Q,Ph=new Q;class O_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.mapType=mn,this.map=null,this.mapPass=null,this.matrix=new Ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fu,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new It(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Rh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Rh),Ph.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ph),t.updateMatrixWorld(),fl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fl,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(fl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ea extends np{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class B_ extends O_{constructor(){super(new Ea(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class z_ extends op{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.target=new $t,this.shadow=new B_}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class V_ extends op{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class k_ extends Rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Ih=new Ct;class Lh{constructor(e,t,i=0,s=1/0){this.ray=new Zf(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new hu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):lt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ih.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ih),this}intersectObject(e,t=!0,i=[]){return Dc(e,this,i,t),i.sort(Dh),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Dc(e[s],this,i,t);return i.sort(Dh),i}}function Dh(n,e){return n.distance-e.distance}function Dc(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)Dc(r[o],e,t,!0)}}function Nh(n,e,t,i){const s=G_(i);switch(t){case Xf:return n*e;case jf:return n*e/s.components*s.byteLength;case su:return n*e/s.components*s.byteLength;case or:return n*e*2/s.components*s.byteLength;case ru:return n*e*2/s.components*s.byteLength;case qf:return n*e*3/s.components*s.byteLength;case In:return n*e*4/s.components*s.byteLength;case ou:return n*e*4/s.components*s.byteLength;case qo:case jo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case $o:case Yo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case tc:case ic:return Math.max(n,16)*Math.max(e,8)/4;case ec:case nc:return Math.max(n,8)*Math.max(e,8)/2;case sc:case rc:case ac:case lc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case oc:case cc:case uc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case hc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case dc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case fc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case pc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case mc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case gc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case xc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case _c:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case vc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case yc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Sc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Mc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case bc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ec:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case wc:case Tc:case Ac:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Cc:case Rc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Pc:case Ic:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function G_(n){switch(n){case mn:case kf:return{byteLength:1,components:1};case qr:case Gf:case Pi:return{byteLength:2,components:1};case nu:case iu:return{byteLength:2,components:4};case ii:case tu:case $n:return{byteLength:4,components:1};case Hf:case Wf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:eu}}));typeof window<"u"&&(window.__THREE__?Ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=eu);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ap(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function H_(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],x=h[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,h[d]=x)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const x=h[f];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var W_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,X_=`#ifdef USE_ALPHAHASH
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
#endif`,q_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,j_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Y_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,K_=`#ifdef USE_AOMAP
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
#endif`,Z_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,J_=`#ifdef USE_BATCHING
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
#endif`,Q_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ev=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iv=`#ifdef USE_IRIDESCENCE
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
#endif`,sv=`#ifdef USE_BUMPMAP
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
#endif`,rv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ov=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,av=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,uv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,dv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,fv=`#define PI 3.141592653589793
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
} // validated`,pv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,mv=`vec3 transformedNormal = objectNormal;
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
#endif`,gv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_v=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mv=`#ifdef USE_ENVMAP
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
#endif`,bv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ev=`#ifdef USE_ENVMAP
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
#endif`,wv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tv=`#ifdef USE_ENVMAP
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
#endif`,Av=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Iv=`#ifdef USE_GRADIENTMAP
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
}`,Lv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fv=`uniform bool receiveShadow;
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
#endif`,Uv=`#ifdef USE_ENVMAP
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
#endif`,Ov=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kv=`PhysicalMaterial material;
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
#endif`,Gv=`uniform sampler2D dfgLUT;
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
}`,Hv=`
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
#endif`,Wv=`#if defined( RE_IndirectDiffuse )
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
#endif`,Xv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$v=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Kv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Qv=`#if defined( USE_POINTS_UV )
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
#endif`,ey=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ty=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ny=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,iy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ry=`#ifdef USE_MORPHTARGETS
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
#endif`,oy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ay=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ly=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dy=`#ifdef USE_NORMALMAP
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
#endif`,fy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,py=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,my=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_y=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,My=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,by=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ey=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ty=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ay=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Cy=`float getShadowMask() {
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
}`,Ry=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Py=`#ifdef USE_SKINNING
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
#endif`,Iy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ly=`#ifdef USE_SKINNING
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
#endif`,Dy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ny=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Uy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Oy=`#ifdef USE_TRANSMISSION
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
#endif`,By=`#ifdef USE_TRANSMISSION
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
#endif`,zy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ky=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Hy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wy=`uniform sampler2D t2D;
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
}`,Xy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,jy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$y=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yy=`#include <common>
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
}`,Ky=`#if DEPTH_PACKING == 3200
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
}`,Zy=`#define DISTANCE
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
}`,Jy=`#define DISTANCE
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
}`,Qy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,eS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tS=`uniform float scale;
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
}`,nS=`uniform vec3 diffuse;
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
}`,iS=`#include <common>
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
}`,sS=`uniform vec3 diffuse;
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
}`,rS=`#define LAMBERT
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
}`,oS=`#define LAMBERT
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
}`,aS=`#define MATCAP
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
}`,lS=`#define MATCAP
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
}`,cS=`#define NORMAL
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
}`,uS=`#define NORMAL
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
}`,hS=`#define PHONG
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
}`,dS=`#define PHONG
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
}`,fS=`#define STANDARD
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
}`,pS=`#define STANDARD
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
}`,mS=`#define TOON
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
}`,gS=`#define TOON
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
}`,xS=`uniform float size;
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
}`,_S=`uniform vec3 diffuse;
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
}`,vS=`#include <common>
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
}`,yS=`uniform vec3 color;
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
}`,SS=`uniform float rotation;
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
}`,MS=`uniform vec3 diffuse;
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
}`,tt={alphahash_fragment:W_,alphahash_pars_fragment:X_,alphamap_fragment:q_,alphamap_pars_fragment:j_,alphatest_fragment:$_,alphatest_pars_fragment:Y_,aomap_fragment:K_,aomap_pars_fragment:Z_,batching_pars_vertex:J_,batching_vertex:Q_,begin_vertex:ev,beginnormal_vertex:tv,bsdfs:nv,iridescence_fragment:iv,bumpmap_pars_fragment:sv,clipping_planes_fragment:rv,clipping_planes_pars_fragment:ov,clipping_planes_pars_vertex:av,clipping_planes_vertex:lv,color_fragment:cv,color_pars_fragment:uv,color_pars_vertex:hv,color_vertex:dv,common:fv,cube_uv_reflection_fragment:pv,defaultnormal_vertex:mv,displacementmap_pars_vertex:gv,displacementmap_vertex:xv,emissivemap_fragment:_v,emissivemap_pars_fragment:vv,colorspace_fragment:yv,colorspace_pars_fragment:Sv,envmap_fragment:Mv,envmap_common_pars_fragment:bv,envmap_pars_fragment:Ev,envmap_pars_vertex:wv,envmap_physical_pars_fragment:Uv,envmap_vertex:Tv,fog_vertex:Av,fog_pars_vertex:Cv,fog_fragment:Rv,fog_pars_fragment:Pv,gradientmap_pars_fragment:Iv,lightmap_pars_fragment:Lv,lights_lambert_fragment:Dv,lights_lambert_pars_fragment:Nv,lights_pars_begin:Fv,lights_toon_fragment:Ov,lights_toon_pars_fragment:Bv,lights_phong_fragment:zv,lights_phong_pars_fragment:Vv,lights_physical_fragment:kv,lights_physical_pars_fragment:Gv,lights_fragment_begin:Hv,lights_fragment_maps:Wv,lights_fragment_end:Xv,logdepthbuf_fragment:qv,logdepthbuf_pars_fragment:jv,logdepthbuf_pars_vertex:$v,logdepthbuf_vertex:Yv,map_fragment:Kv,map_pars_fragment:Zv,map_particle_fragment:Jv,map_particle_pars_fragment:Qv,metalnessmap_fragment:ey,metalnessmap_pars_fragment:ty,morphinstance_vertex:ny,morphcolor_vertex:iy,morphnormal_vertex:sy,morphtarget_pars_vertex:ry,morphtarget_vertex:oy,normal_fragment_begin:ay,normal_fragment_maps:ly,normal_pars_fragment:cy,normal_pars_vertex:uy,normal_vertex:hy,normalmap_pars_fragment:dy,clearcoat_normal_fragment_begin:fy,clearcoat_normal_fragment_maps:py,clearcoat_pars_fragment:my,iridescence_pars_fragment:gy,opaque_fragment:xy,packing:_y,premultiplied_alpha_fragment:vy,project_vertex:yy,dithering_fragment:Sy,dithering_pars_fragment:My,roughnessmap_fragment:by,roughnessmap_pars_fragment:Ey,shadowmap_pars_fragment:wy,shadowmap_pars_vertex:Ty,shadowmap_vertex:Ay,shadowmask_pars_fragment:Cy,skinbase_vertex:Ry,skinning_pars_vertex:Py,skinning_vertex:Iy,skinnormal_vertex:Ly,specularmap_fragment:Dy,specularmap_pars_fragment:Ny,tonemapping_fragment:Fy,tonemapping_pars_fragment:Uy,transmission_fragment:Oy,transmission_pars_fragment:By,uv_pars_fragment:zy,uv_pars_vertex:Vy,uv_vertex:ky,worldpos_vertex:Gy,background_vert:Hy,background_frag:Wy,backgroundCube_vert:Xy,backgroundCube_frag:qy,cube_vert:jy,cube_frag:$y,depth_vert:Yy,depth_frag:Ky,distance_vert:Zy,distance_frag:Jy,equirect_vert:Qy,equirect_frag:eS,linedashed_vert:tS,linedashed_frag:nS,meshbasic_vert:iS,meshbasic_frag:sS,meshlambert_vert:rS,meshlambert_frag:oS,meshmatcap_vert:aS,meshmatcap_frag:lS,meshnormal_vert:cS,meshnormal_frag:uS,meshphong_vert:hS,meshphong_frag:dS,meshphysical_vert:fS,meshphysical_frag:pS,meshtoon_vert:mS,meshtoon_frag:gS,points_vert:xS,points_frag:_S,shadow_vert:vS,shadow_frag:yS,sprite_vert:SS,sprite_frag:MS},Ce={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},Xn={basic:{uniforms:Jt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:Jt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new rt(0)}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:Jt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:Jt([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:Jt([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new rt(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:Jt([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:Jt([Ce.points,Ce.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:Jt([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:Jt([Ce.common,Ce.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:Jt([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:Jt([Ce.sprite,Ce.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distance:{uniforms:Jt([Ce.common,Ce.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distance_vert,fragmentShader:tt.distance_frag},shadow:{uniforms:Jt([Ce.lights,Ce.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};Xn.physical={uniforms:Jt([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const Ro={r:0,b:0,g:0},os=new si,bS=new Ct;function ES(n,e,t,i,s,r,o){const a=new rt(0);let l=r===!0?0:1,c,u,h=null,d=0,f=null;function g(M){let v=M.isScene===!0?M.background:null;return v&&v.isTexture&&(v=(M.backgroundBlurriness>0?t:e).get(v)),v}function x(M){let v=!1;const S=g(M);S===null?p(a,l):S&&S.isColor&&(p(S,1),v=!0);const E=n.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(M,v){const S=g(v);S&&(S.isCubeTexture||S.mapping===ba)?(u===void 0&&(u=new dt(new Mn(1,1,1),new ri({name:"BackgroundCubeMaterial",uniforms:lr(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,A,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),os.copy(v.backgroundRotation),os.x*=-1,os.y*=-1,os.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(os.y*=-1,os.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(bS.makeRotationFromEuler(os)),u.material.toneMapped=ct.getTransfer(S.colorSpace)!==xt,(h!==S||d!==S.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,h=S,d=S.version,f=n.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new dt(new Qt(2,2),new ri({name:"BackgroundMaterial",uniforms:lr(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:Zi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=ct.getTransfer(S.colorSpace)!==xt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||d!==S.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,h=S,d=S.version,f=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,v){M.getRGB(Ro,tp(n)),i.buffers.color.setClear(Ro.r,Ro.g,Ro.b,v,o)}function _(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,v=1){a.set(M),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(a,l)},render:x,addToRenderList:m,dispose:_}}function wS(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(T,L,V,F,H){let z=!1;const U=h(F,V,L);r!==U&&(r=U,c(r.object)),z=f(T,F,V,H),z&&g(T,F,V,H),H!==null&&e.update(H,n.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,v(T,L,V,F),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return n.createVertexArray()}function c(T){return n.bindVertexArray(T)}function u(T){return n.deleteVertexArray(T)}function h(T,L,V){const F=V.wireframe===!0;let H=i[T.id];H===void 0&&(H={},i[T.id]=H);let z=H[L.id];z===void 0&&(z={},H[L.id]=z);let U=z[F];return U===void 0&&(U=d(l()),z[F]=U),U}function d(T){const L=[],V=[],F=[];for(let H=0;H<t;H++)L[H]=0,V[H]=0,F[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:V,attributeDivisors:F,object:T,attributes:{},index:null}}function f(T,L,V,F){const H=r.attributes,z=L.attributes;let U=0;const k=V.getAttributes();for(const q in k)if(k[q].location>=0){const oe=H[q];let fe=z[q];if(fe===void 0&&(q==="instanceMatrix"&&T.instanceMatrix&&(fe=T.instanceMatrix),q==="instanceColor"&&T.instanceColor&&(fe=T.instanceColor)),oe===void 0||oe.attribute!==fe||fe&&oe.data!==fe.data)return!0;U++}return r.attributesNum!==U||r.index!==F}function g(T,L,V,F){const H={},z=L.attributes;let U=0;const k=V.getAttributes();for(const q in k)if(k[q].location>=0){let oe=z[q];oe===void 0&&(q==="instanceMatrix"&&T.instanceMatrix&&(oe=T.instanceMatrix),q==="instanceColor"&&T.instanceColor&&(oe=T.instanceColor));const fe={};fe.attribute=oe,oe&&oe.data&&(fe.data=oe.data),H[q]=fe,U++}r.attributes=H,r.attributesNum=U,r.index=F}function x(){const T=r.newAttributes;for(let L=0,V=T.length;L<V;L++)T[L]=0}function m(T){p(T,0)}function p(T,L){const V=r.newAttributes,F=r.enabledAttributes,H=r.attributeDivisors;V[T]=1,F[T]===0&&(n.enableVertexAttribArray(T),F[T]=1),H[T]!==L&&(n.vertexAttribDivisor(T,L),H[T]=L)}function _(){const T=r.newAttributes,L=r.enabledAttributes;for(let V=0,F=L.length;V<F;V++)L[V]!==T[V]&&(n.disableVertexAttribArray(V),L[V]=0)}function M(T,L,V,F,H,z,U){U===!0?n.vertexAttribIPointer(T,L,V,H,z):n.vertexAttribPointer(T,L,V,F,H,z)}function v(T,L,V,F){x();const H=F.attributes,z=V.getAttributes(),U=L.defaultAttributeValues;for(const k in z){const q=z[k];if(q.location>=0){let ae=H[k];if(ae===void 0&&(k==="instanceMatrix"&&T.instanceMatrix&&(ae=T.instanceMatrix),k==="instanceColor"&&T.instanceColor&&(ae=T.instanceColor)),ae!==void 0){const oe=ae.normalized,fe=ae.itemSize,ge=e.get(ae);if(ge===void 0)continue;const Oe=ge.buffer,Ve=ge.type,Ze=ge.bytesPerElement,B=Ve===n.INT||Ve===n.UNSIGNED_INT||ae.gpuType===tu;if(ae.isInterleavedBufferAttribute){const G=ae.data,ie=G.stride,ue=ae.offset;if(G.isInstancedInterleavedBuffer){for(let ce=0;ce<q.locationSize;ce++)p(q.location+ce,G.meshPerAttribute);T.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let ce=0;ce<q.locationSize;ce++)m(q.location+ce);n.bindBuffer(n.ARRAY_BUFFER,Oe);for(let ce=0;ce<q.locationSize;ce++)M(q.location+ce,fe/q.locationSize,Ve,oe,ie*Ze,(ue+fe/q.locationSize*ce)*Ze,B)}else{if(ae.isInstancedBufferAttribute){for(let G=0;G<q.locationSize;G++)p(q.location+G,ae.meshPerAttribute);T.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let G=0;G<q.locationSize;G++)m(q.location+G);n.bindBuffer(n.ARRAY_BUFFER,Oe);for(let G=0;G<q.locationSize;G++)M(q.location+G,fe/q.locationSize,Ve,oe,fe*Ze,fe/q.locationSize*G*Ze,B)}}else if(U!==void 0){const oe=U[k];if(oe!==void 0)switch(oe.length){case 2:n.vertexAttrib2fv(q.location,oe);break;case 3:n.vertexAttrib3fv(q.location,oe);break;case 4:n.vertexAttrib4fv(q.location,oe);break;default:n.vertexAttrib1fv(q.location,oe)}}}}_()}function S(){D();for(const T in i){const L=i[T];for(const V in L){const F=L[V];for(const H in F)u(F[H].object),delete F[H];delete L[V]}delete i[T]}}function E(T){if(i[T.id]===void 0)return;const L=i[T.id];for(const V in L){const F=L[V];for(const H in F)u(F[H].object),delete F[H];delete L[V]}delete i[T.id]}function A(T){for(const L in i){const V=i[L];if(V[T.id]===void 0)continue;const F=V[T.id];for(const H in F)u(F[H].object),delete F[H];delete V[T.id]}}function D(){b(),o=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:b,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function TS(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,i,1)}function l(c,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x]*d[x];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function AS(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==In&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const D=A===Pi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==mn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==$n&&!D)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Ke("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:_,maxVaryings:M,maxFragmentUniforms:v,maxSamples:S,samples:E}}function CS(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new Xi,a=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||i!==0||s;return s=d,i=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const _=r?0:i,M=_*4;let v=p.clippingState||null;l.value=v,v=u(g,d,M,f);for(let S=0;S!==M;++S)v[S]=t[S];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,f,g){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const p=f+x*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,v=f;M!==x;++M,v+=4)o.copy(h[M]).applyMatrix4(_,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function RS(n){let e=new WeakMap;function t(o,a){return a===Kl?o.mapping=Ms:a===Zl&&(o.mapping=rr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Kl||a===Zl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new sp(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const ji=4,Fh=[.125,.215,.35,.446,.526,.582],ps=20,PS=256,br=new Ea,Uh=new rt;let pl=null,ml=0,gl=0,xl=!1;const IS=new Q;class Oh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=IS}=r;pl=this._renderer.getRenderTarget(),ml=this._renderer.getActiveCubeFace(),gl=this._renderer.getActiveMipmapLevel(),xl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(pl,ml,gl),this._renderer.xr.enabled=xl,e.scissorTest=!1,ks(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ms||e.mapping===rr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),pl=this._renderer.getRenderTarget(),ml=this._renderer.getActiveCubeFace(),gl=this._renderer.getActiveMipmapLevel(),xl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Xt,minFilter:Xt,generateMipmaps:!1,type:Pi,format:In,colorSpace:ar,depthBuffer:!1},s=Bh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bh(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=LS(r)),this._blurMaterial=NS(r,e,t),this._ggxMaterial=DS(r,e,t)}return s}_compileMaterial(e){const t=new dt(new Di,e);this._renderer.compile(t,br)}_sceneToCubeUV(e,t,i,s,r){const l=new Rn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Uh),h.toneMapping=Jn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new dt(new Mn,new fs({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,m=x.material;let p=!1;const _=e.background;_?_.isColor&&(m.color.copy(_),e.background=null,p=!0):(m.color.copy(Uh),p=!0);for(let M=0;M<6;M++){const v=M%3;v===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[M],r.y,r.z)):v===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[M]));const S=this._cubeSize;ks(s,v*S,M>2?S:0,S,S),h.setRenderTarget(s),p&&h.render(x,l),h.render(e,l)}h.toneMapping=f,h.autoClear=d,e.background=_}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Ms||e.mapping===rr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;ks(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,br)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),d=0+c*1.25,f=h*d,{_lodMax:g}=this,x=this._sizeLods[i],m=3*x*(i>g-ji?i-g+ji:0),p=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,ks(r,m,p,3*x,2*x),s.setRenderTarget(r),s.render(a,br),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,ks(e,m,p,3*x,2*x),s.setRenderTarget(e),s.render(a,br)}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&lt("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[s];h.material=c;const d=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ps-1),x=r/g,m=isFinite(r)?1+Math.floor(u*x):ps;m>ps&&Ke(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ps}`);const p=[];let _=0;for(let A=0;A<ps;++A){const D=A/x,b=Math.exp(-D*D/2);p.push(b),A===0?_+=b:A<m&&(_+=2*b)}for(let A=0;A<p.length;A++)p[A]=p[A]/_;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-i;const v=this._sizeLods[s],S=3*v*(s>M-ji?s-M+ji:0),E=4*(this._cubeSize-v);ks(t,S,E,3*v,2*v),l.setRenderTarget(t),l.render(h,br)}}function LS(n){const e=[],t=[],i=[];let s=n;const r=n-ji+1+Fh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-ji?l=Fh[o-n+ji-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,x=3,m=2,p=1,_=new Float32Array(x*g*f),M=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let E=0;E<f;E++){const A=E%3*2/3-1,D=E>2?0:-1,b=[A,D,0,A+2/3,D,0,A+2/3,D+1,0,A,D,0,A+2/3,D+1,0,A,D+1,0];_.set(b,x*g*E),M.set(d,m*g*E);const T=[E,E,E,E,E,E];v.set(T,p*g*E)}const S=new Di;S.setAttribute("position",new ei(_,x)),S.setAttribute("uv",new ei(M,m)),S.setAttribute("faceIndex",new ei(v,p)),i.push(new dt(S,null)),s>ji&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Bh(n,e,t){const i=new Qn(n,e,t);return i.texture.mapping=ba,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ks(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function DS(n,e,t){return new ri({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:PS,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:wa(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function NS(n,e,t){const i=new Float32Array(ps),s=new Q(0,1,0);return new ri({name:"SphericalGaussianBlur",defines:{n:ps,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:wa(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function zh(){return new ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wa(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Vh(){return new ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function wa(){return`

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
	`}function FS(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Kl||l===Zl,u=l===Ms||l===rr;if(c||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Oh(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return c&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new Oh(n)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function US(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&$r("WebGLRenderer: "+i+" extension not supported."),s}}}function OS(n,e,t,i){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const f in d)e.update(d[f],n.ARRAY_BUFFER)}function c(h){const d=[],f=h.index,g=h.attributes.position;let x=0;if(f!==null){const _=f.array;x=f.version;for(let M=0,v=_.length;M<v;M+=3){const S=_[M+0],E=_[M+1],A=_[M+2];d.push(S,E,E,A,A,S)}}else if(g!==void 0){const _=g.array;x=g.version;for(let M=0,v=_.length/3-1;M<v;M+=3){const S=M+0,E=M+1,A=M+2;d.push(S,E,E,A,A,S)}}else return;const m=new(Yf(d)?ep:Qf)(d,1);m.version=x;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function BS(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){n.drawElements(i,f,r,d*o),t.update(f,i,1)}function c(d,f,g){g!==0&&(n.drawElementsInstanced(i,f,r,d*o,g),t.update(f,i,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,i,1)}function h(d,f,g,x){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,x,0,g);let p=0;for(let _=0;_<g;_++)p+=f[_]*x[_];t.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function zS(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:lt("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function VS(n,e,t){const i=new WeakMap,s=new It;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let T=function(){D.dispose(),i.delete(a),a.removeEventListener("dispose",T)};var f=T;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),x===!0&&(v=2),m===!0&&(v=3);let S=a.attributes.position.count*v,E=1;S>e.maxTextureSize&&(E=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const A=new Float32Array(S*E*4*h),D=new Kf(A,S,E,h);D.type=$n,D.needsUpdate=!0;const b=v*4;for(let L=0;L<h;L++){const V=p[L],F=_[L],H=M[L],z=S*E*4*L;for(let U=0;U<V.count;U++){const k=U*b;g===!0&&(s.fromBufferAttribute(V,U),A[z+k+0]=s.x,A[z+k+1]=s.y,A[z+k+2]=s.z,A[z+k+3]=0),x===!0&&(s.fromBufferAttribute(F,U),A[z+k+4]=s.x,A[z+k+5]=s.y,A[z+k+6]=s.z,A[z+k+7]=0),m===!0&&(s.fromBufferAttribute(H,U),A[z+k+8]=s.x,A[z+k+9]=s.y,A[z+k+10]=s.z,A[z+k+11]=H.itemSize===4?s.w:1)}}d={count:h,texture:D,size:new ot(S,E)},i.set(a,d),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const x=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function kS(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const GS={[Df]:"LINEAR_TONE_MAPPING",[Nf]:"REINHARD_TONE_MAPPING",[Ff]:"CINEON_TONE_MAPPING",[Uf]:"ACES_FILMIC_TONE_MAPPING",[Bf]:"AGX_TONE_MAPPING",[zf]:"NEUTRAL_TONE_MAPPING",[Of]:"CUSTOM_TONE_MAPPING"};function HS(n,e,t,i,s){const r=new Qn(e,t,{type:n,depthBuffer:i,stencilBuffer:s}),o=new Qn(e,t,{type:Pi,depthBuffer:!1,stencilBuffer:!1}),a=new Di;a.setAttribute("position",new Ti([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Ti([0,2,0,0,2,0],2));const l=new N_({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new dt(a,l),u=new Ea(-1,1,1,-1,0,1);let h=null,d=null,f=!1,g,x=null,m=[],p=!1;this.setSize=function(_,M){r.setSize(_,M),o.setSize(_,M);for(let v=0;v<m.length;v++){const S=m[v];S.setSize&&S.setSize(_,M)}},this.setEffects=function(_){m=_,p=m.length>0&&m[0].isRenderPass===!0;const M=r.width,v=r.height;for(let S=0;S<m.length;S++){const E=m[S];E.setSize&&E.setSize(M,v)}},this.begin=function(_,M){if(f||_.toneMapping===Jn&&m.length===0)return!1;if(x=M,M!==null){const v=M.width,S=M.height;(r.width!==v||r.height!==S)&&this.setSize(v,S)}return p===!1&&_.setRenderTarget(r),g=_.toneMapping,_.toneMapping=Jn,!0},this.hasRenderPass=function(){return p},this.end=function(_,M){_.toneMapping=g,f=!0;let v=r,S=o;for(let E=0;E<m.length;E++){const A=m[E];if(A.enabled!==!1&&(A.render(_,S,v,M),A.needsSwap!==!1)){const D=v;v=S,S=D}}if(h!==_.outputColorSpace||d!==_.toneMapping){h=_.outputColorSpace,d=_.toneMapping,l.defines={},ct.getTransfer(h)===xt&&(l.defines.SRGB_TRANSFER="");const E=GS[d];E&&(l.defines[E]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=v.texture,_.setRenderTarget(x),_.render(c,u),x=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){r.dispose(),o.dispose(),a.dispose(),l.dispose()}}const lp=new jt,Nc=new Yr(1,1),cp=new Kf,up=new u_,hp=new ip,kh=[],Gh=[],Hh=new Float32Array(16),Wh=new Float32Array(9),Xh=new Float32Array(4);function fr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=kh[s];if(r===void 0&&(r=new Float32Array(s),kh[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Ot(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Bt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ta(n,e){let t=Gh[e];t===void 0&&(t=new Int32Array(e),Gh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function WS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function XS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;n.uniform2fv(this.addr,e),Bt(t,e)}}function qS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ot(t,e))return;n.uniform3fv(this.addr,e),Bt(t,e)}}function jS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;n.uniform4fv(this.addr,e),Bt(t,e)}}function $S(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Bt(t,e)}else{if(Ot(t,i))return;Xh.set(i),n.uniformMatrix2fv(this.addr,!1,Xh),Bt(t,i)}}function YS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Bt(t,e)}else{if(Ot(t,i))return;Wh.set(i),n.uniformMatrix3fv(this.addr,!1,Wh),Bt(t,i)}}function KS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Bt(t,e)}else{if(Ot(t,i))return;Hh.set(i),n.uniformMatrix4fv(this.addr,!1,Hh),Bt(t,i)}}function ZS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function JS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;n.uniform2iv(this.addr,e),Bt(t,e)}}function QS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;n.uniform3iv(this.addr,e),Bt(t,e)}}function eM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;n.uniform4iv(this.addr,e),Bt(t,e)}}function tM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function nM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;n.uniform2uiv(this.addr,e),Bt(t,e)}}function iM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;n.uniform3uiv(this.addr,e),Bt(t,e)}}function sM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;n.uniform4uiv(this.addr,e),Bt(t,e)}}function rM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Nc.compareFunction=t.isReversedDepthBuffer()?lu:au,r=Nc):r=lp,t.setTexture2D(e||r,s)}function oM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||up,s)}function aM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||hp,s)}function lM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||cp,s)}function cM(n){switch(n){case 5126:return WS;case 35664:return XS;case 35665:return qS;case 35666:return jS;case 35674:return $S;case 35675:return YS;case 35676:return KS;case 5124:case 35670:return ZS;case 35667:case 35671:return JS;case 35668:case 35672:return QS;case 35669:case 35673:return eM;case 5125:return tM;case 36294:return nM;case 36295:return iM;case 36296:return sM;case 35678:case 36198:case 36298:case 36306:case 35682:return rM;case 35679:case 36299:case 36307:return oM;case 35680:case 36300:case 36308:case 36293:return aM;case 36289:case 36303:case 36311:case 36292:return lM}}function uM(n,e){n.uniform1fv(this.addr,e)}function hM(n,e){const t=fr(e,this.size,2);n.uniform2fv(this.addr,t)}function dM(n,e){const t=fr(e,this.size,3);n.uniform3fv(this.addr,t)}function fM(n,e){const t=fr(e,this.size,4);n.uniform4fv(this.addr,t)}function pM(n,e){const t=fr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function mM(n,e){const t=fr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function gM(n,e){const t=fr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function xM(n,e){n.uniform1iv(this.addr,e)}function _M(n,e){n.uniform2iv(this.addr,e)}function vM(n,e){n.uniform3iv(this.addr,e)}function yM(n,e){n.uniform4iv(this.addr,e)}function SM(n,e){n.uniform1uiv(this.addr,e)}function MM(n,e){n.uniform2uiv(this.addr,e)}function bM(n,e){n.uniform3uiv(this.addr,e)}function EM(n,e){n.uniform4uiv(this.addr,e)}function wM(n,e,t){const i=this.cache,s=e.length,r=Ta(t,s);Ot(i,r)||(n.uniform1iv(this.addr,r),Bt(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Nc:o=lp;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function TM(n,e,t){const i=this.cache,s=e.length,r=Ta(t,s);Ot(i,r)||(n.uniform1iv(this.addr,r),Bt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||up,r[o])}function AM(n,e,t){const i=this.cache,s=e.length,r=Ta(t,s);Ot(i,r)||(n.uniform1iv(this.addr,r),Bt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||hp,r[o])}function CM(n,e,t){const i=this.cache,s=e.length,r=Ta(t,s);Ot(i,r)||(n.uniform1iv(this.addr,r),Bt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||cp,r[o])}function RM(n){switch(n){case 5126:return uM;case 35664:return hM;case 35665:return dM;case 35666:return fM;case 35674:return pM;case 35675:return mM;case 35676:return gM;case 5124:case 35670:return xM;case 35667:case 35671:return _M;case 35668:case 35672:return vM;case 35669:case 35673:return yM;case 5125:return SM;case 36294:return MM;case 36295:return bM;case 36296:return EM;case 35678:case 36198:case 36298:case 36306:case 35682:return wM;case 35679:case 36299:case 36307:return TM;case 35680:case 36300:case 36308:case 36293:return AM;case 36289:case 36303:case 36311:case 36292:return CM}}class PM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=cM(t.type)}}class IM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=RM(t.type)}}class LM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const _l=/(\w+)(\])?(\[|\.)?/g;function qh(n,e){n.seq.push(e),n.map[e.id]=e}function DM(n,e,t){const i=n.name,s=i.length;for(_l.lastIndex=0;;){const r=_l.exec(i),o=_l.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){qh(t,c===void 0?new PM(a,n,e):new IM(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new LM(a),qh(t,h)),t=h}}}class Ko{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);DM(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function jh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const NM=37297;let FM=0;function UM(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const $h=new et;function OM(n){ct._getMatrix($h,ct.workingColorSpace,n);const e=`mat3( ${$h.elements.map(t=>t.toFixed(4))} )`;switch(ct.getTransfer(n)){case aa:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return Ke("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Yh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+UM(n.getShaderSource(e),a)}else return r}function BM(n,e){const t=OM(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const zM={[Df]:"Linear",[Nf]:"Reinhard",[Ff]:"Cineon",[Uf]:"ACESFilmic",[Bf]:"AgX",[zf]:"Neutral",[Of]:"Custom"};function VM(n,e){const t=zM[e];return t===void 0?(Ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Po=new Q;function kM(){ct.getLuminanceCoefficients(Po);const n=Po.x.toFixed(4),e=Po.y.toFixed(4),t=Po.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function GM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ir).join(`
`)}function HM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function WM(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ir(n){return n!==""}function Kh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const XM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fc(n){return n.replace(XM,jM)}const qM=new Map;function jM(n,e){let t=tt[e];if(t===void 0){const i=qM.get(e);if(i!==void 0)t=tt[i],Ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Fc(t)}const $M=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jh(n){return n.replace($M,YM)}function YM(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Qh(n){let e=`precision ${n.precision} float;
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
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const KM={[Xo]:"SHADOWMAP_TYPE_PCF",[Pr]:"SHADOWMAP_TYPE_VSM"};function ZM(n){return KM[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const JM={[Ms]:"ENVMAP_TYPE_CUBE",[rr]:"ENVMAP_TYPE_CUBE",[ba]:"ENVMAP_TYPE_CUBE_UV"};function QM(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":JM[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const eb={[rr]:"ENVMAP_MODE_REFRACTION"};function tb(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":eb[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const nb={[Lf]:"ENVMAP_BLENDING_MULTIPLY",[Xx]:"ENVMAP_BLENDING_MIX",[qx]:"ENVMAP_BLENDING_ADD"};function ib(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":nb[n.combine]||"ENVMAP_BLENDING_NONE"}function sb(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function rb(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=ZM(t),c=QM(t),u=tb(t),h=ib(t),d=sb(t),f=GM(t),g=HM(r),x=s.createProgram();let m,p,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ir).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ir).join(`
`),p.length>0&&(p+=`
`)):(m=[Qh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ir).join(`
`),p=[Qh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Jn?"#define TONE_MAPPING":"",t.toneMapping!==Jn?tt.tonemapping_pars_fragment:"",t.toneMapping!==Jn?VM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,BM("linearToOutputTexel",t.outputColorSpace),kM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ir).join(`
`)),o=Fc(o),o=Kh(o,t),o=Zh(o,t),a=Fc(a),a=Kh(a,t),a=Zh(a,t),o=Jh(o),a=Jh(a),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===uh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===uh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=_+m+o,v=_+p+a,S=jh(s,s.VERTEX_SHADER,M),E=jh(s,s.FRAGMENT_SHADER,v);s.attachShader(x,S),s.attachShader(x,E),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function A(L){if(n.debug.checkShaderErrors){const V=s.getProgramInfoLog(x)||"",F=s.getShaderInfoLog(S)||"",H=s.getShaderInfoLog(E)||"",z=V.trim(),U=F.trim(),k=H.trim();let q=!0,ae=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,S,E);else{const oe=Yh(s,S,"vertex"),fe=Yh(s,E,"fragment");lt("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+z+`
`+oe+`
`+fe)}else z!==""?Ke("WebGLProgram: Program Info Log:",z):(U===""||k==="")&&(ae=!1);ae&&(L.diagnostics={runnable:q,programLog:z,vertexShader:{log:U,prefix:m},fragmentShader:{log:k,prefix:p}})}s.deleteShader(S),s.deleteShader(E),D=new Ko(s,x),b=WM(s,x)}let D;this.getUniforms=function(){return D===void 0&&A(this),D};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(x,NM)),T},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=FM++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=E,this}let ob=0;class ab{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new lb(e),t.set(e,i)),i}}class lb{constructor(e){this.id=ob++,this.code=e,this.usedTimes=0}}function cb(n,e,t,i,s,r,o){const a=new hu,l=new ab,c=new Set,u=[],h=new Map,d=s.logarithmicDepthBuffer;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,T,L,V,F){const H=V.fog,z=F.geometry,U=b.isMeshStandardMaterial?V.environment:null,k=(b.isMeshStandardMaterial?t:e).get(b.envMap||U),q=k&&k.mapping===ba?k.image.height:null,ae=g[b.type];b.precision!==null&&(f=s.getMaxPrecision(b.precision),f!==b.precision&&Ke("WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const oe=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,fe=oe!==void 0?oe.length:0;let ge=0;z.morphAttributes.position!==void 0&&(ge=1),z.morphAttributes.normal!==void 0&&(ge=2),z.morphAttributes.color!==void 0&&(ge=3);let Oe,Ve,Ze,B;if(ae){const mt=Xn[ae];Oe=mt.vertexShader,Ve=mt.fragmentShader}else Oe=b.vertexShader,Ve=b.fragmentShader,l.update(b),Ze=l.getVertexShaderID(b),B=l.getFragmentShaderID(b);const G=n.getRenderTarget(),ie=n.state.buffers.depth.getReversed(),ue=F.isInstancedMesh===!0,ce=F.isBatchedMesh===!0,ve=!!b.map,I=!!b.matcap,N=!!k,W=!!b.aoMap,ee=!!b.lightMap,$=!!b.bumpMap,J=!!b.normalMap,P=!!b.displacementMap,de=!!b.emissiveMap,le=!!b.metalnessMap,se=!!b.roughnessMap,he=b.anisotropy>0,C=b.clearcoat>0,y=b.dispersion>0,O=b.iridescence>0,Z=b.sheen>0,re=b.transmission>0,Y=he&&!!b.anisotropyMap,Te=C&&!!b.clearcoatMap,xe=C&&!!b.clearcoatNormalMap,Re=C&&!!b.clearcoatRoughnessMap,ze=O&&!!b.iridescenceMap,_e=O&&!!b.iridescenceThicknessMap,Se=Z&&!!b.sheenColorMap,Me=Z&&!!b.sheenRoughnessMap,Pe=!!b.specularMap,Ee=!!b.specularColorMap,je=!!b.specularIntensityMap,X=re&&!!b.transmissionMap,Le=re&&!!b.thicknessMap,be=!!b.gradientMap,Ne=!!b.alphaMap,ye=b.alphaTest>0,me=!!b.alphaHash,we=!!b.extensions;let Ye=Jn;b.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Ye=n.toneMapping);const Mt={shaderID:ae,shaderType:b.type,shaderName:b.name,vertexShader:Oe,fragmentShader:Ve,defines:b.defines,customVertexShaderID:Ze,customFragmentShaderID:B,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:ce,batchingColor:ce&&F._colorsTexture!==null,instancing:ue,instancingColor:ue&&F.instanceColor!==null,instancingMorph:ue&&F.morphTexture!==null,outputColorSpace:G===null?n.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:ar,alphaToCoverage:!!b.alphaToCoverage,map:ve,matcap:I,envMap:N,envMapMode:N&&k.mapping,envMapCubeUVHeight:q,aoMap:W,lightMap:ee,bumpMap:$,normalMap:J,displacementMap:P,emissiveMap:de,normalMapObjectSpace:J&&b.normalMapType===Yx,normalMapTangentSpace:J&&b.normalMapType===$f,metalnessMap:le,roughnessMap:se,anisotropy:he,anisotropyMap:Y,clearcoat:C,clearcoatMap:Te,clearcoatNormalMap:xe,clearcoatRoughnessMap:Re,dispersion:y,iridescence:O,iridescenceMap:ze,iridescenceThicknessMap:_e,sheen:Z,sheenColorMap:Se,sheenRoughnessMap:Me,specularMap:Pe,specularColorMap:Ee,specularIntensityMap:je,transmission:re,transmissionMap:X,thicknessMap:Le,gradientMap:be,opaque:b.transparent===!1&&b.blending===er&&b.alphaToCoverage===!1,alphaMap:Ne,alphaTest:ye,alphaHash:me,combine:b.combine,mapUv:ve&&x(b.map.channel),aoMapUv:W&&x(b.aoMap.channel),lightMapUv:ee&&x(b.lightMap.channel),bumpMapUv:$&&x(b.bumpMap.channel),normalMapUv:J&&x(b.normalMap.channel),displacementMapUv:P&&x(b.displacementMap.channel),emissiveMapUv:de&&x(b.emissiveMap.channel),metalnessMapUv:le&&x(b.metalnessMap.channel),roughnessMapUv:se&&x(b.roughnessMap.channel),anisotropyMapUv:Y&&x(b.anisotropyMap.channel),clearcoatMapUv:Te&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:xe&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ze&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:Me&&x(b.sheenRoughnessMap.channel),specularMapUv:Pe&&x(b.specularMap.channel),specularColorMapUv:Ee&&x(b.specularColorMap.channel),specularIntensityMapUv:je&&x(b.specularIntensityMap.channel),transmissionMapUv:X&&x(b.transmissionMap.channel),thicknessMapUv:Le&&x(b.thicknessMap.channel),alphaMapUv:Ne&&x(b.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(J||he),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!z.attributes.uv&&(ve||Ne),fog:!!H,useFog:b.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ie,skinning:F.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:ge,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ye,decodeVideoTexture:ve&&b.map.isVideoTexture===!0&&ct.getTransfer(b.map.colorSpace)===xt,decodeVideoTextureEmissive:de&&b.emissiveMap.isVideoTexture===!0&&ct.getTransfer(b.emissiveMap.colorSpace)===xt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===qn,flipSided:b.side===cn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:we&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(we&&b.extensions.multiDraw===!0||ce)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Mt.vertexUv1s=c.has(1),Mt.vertexUv2s=c.has(2),Mt.vertexUv3s=c.has(3),c.clear(),Mt}function p(b){const T=[];if(b.shaderID?T.push(b.shaderID):(T.push(b.customVertexShaderID),T.push(b.customFragmentShaderID)),b.defines!==void 0)for(const L in b.defines)T.push(L),T.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(_(T,b),M(T,b),T.push(n.outputColorSpace)),T.push(b.customProgramCacheKey),T.join()}function _(b,T){b.push(T.precision),b.push(T.outputColorSpace),b.push(T.envMapMode),b.push(T.envMapCubeUVHeight),b.push(T.mapUv),b.push(T.alphaMapUv),b.push(T.lightMapUv),b.push(T.aoMapUv),b.push(T.bumpMapUv),b.push(T.normalMapUv),b.push(T.displacementMapUv),b.push(T.emissiveMapUv),b.push(T.metalnessMapUv),b.push(T.roughnessMapUv),b.push(T.anisotropyMapUv),b.push(T.clearcoatMapUv),b.push(T.clearcoatNormalMapUv),b.push(T.clearcoatRoughnessMapUv),b.push(T.iridescenceMapUv),b.push(T.iridescenceThicknessMapUv),b.push(T.sheenColorMapUv),b.push(T.sheenRoughnessMapUv),b.push(T.specularMapUv),b.push(T.specularColorMapUv),b.push(T.specularIntensityMapUv),b.push(T.transmissionMapUv),b.push(T.thicknessMapUv),b.push(T.combine),b.push(T.fogExp2),b.push(T.sizeAttenuation),b.push(T.morphTargetsCount),b.push(T.morphAttributeCount),b.push(T.numDirLights),b.push(T.numPointLights),b.push(T.numSpotLights),b.push(T.numSpotLightMaps),b.push(T.numHemiLights),b.push(T.numRectAreaLights),b.push(T.numDirLightShadows),b.push(T.numPointLightShadows),b.push(T.numSpotLightShadows),b.push(T.numSpotLightShadowsWithMaps),b.push(T.numLightProbes),b.push(T.shadowMapType),b.push(T.toneMapping),b.push(T.numClippingPlanes),b.push(T.numClipIntersection),b.push(T.depthPacking)}function M(b,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),b.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),b.push(a.mask)}function v(b){const T=g[b.type];let L;if(T){const V=Xn[T];L=b_.clone(V.uniforms)}else L=b.uniforms;return L}function S(b,T){let L=h.get(T);return L!==void 0?++L.usedTimes:(L=new rb(n,T,b,r),u.push(L),h.set(T,L)),L}function E(b){if(--b.usedTimes===0){const T=u.indexOf(b);u[T]=u[u.length-1],u.pop(),h.delete(b.cacheKey),b.destroy()}}function A(b){l.remove(b)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:S,releaseProgram:E,releaseShaderCache:A,programs:u,dispose:D}}function ub(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function hb(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function ed(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function td(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h,d,f,g,x,m){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:x,group:m},n[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=x,p.group=m),e++,p}function a(h,d,f,g,x,m){const p=o(h,d,f,g,x,m);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(h,d,f,g,x,m){const p=o(h,d,f,g,x,m);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||hb),i.length>1&&i.sort(d||ed),s.length>1&&s.sort(d||ed)}function u(){for(let h=e,d=n.length;h<d;h++){const f=n[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function db(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new td,n.set(i,[o])):s>=r.length?(o=new td,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function fb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Q,color:new rt};break;case"SpotLight":t={position:new Q,direction:new Q,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Q,color:new rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Q,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":t={color:new rt,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return n[e.id]=t,t}}}function pb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let mb=0;function gb(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function xb(n){const e=new fb,t=pb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new Q);const s=new Q,r=new Ct,o=new Ct;function a(c){let u=0,h=0,d=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,_=0,M=0,v=0,S=0,E=0,A=0;c.sort(gb);for(let b=0,T=c.length;b<T;b++){const L=c[b],V=L.color,F=L.intensity,H=L.distance;let z=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===or?z=L.shadow.map.texture:z=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=V.r*F,h+=V.g*F,d+=V.b*F;else if(L.isLightProbe){for(let U=0;U<9;U++)i.probe[U].addScaledVector(L.sh.coefficients[U],F);A++}else if(L.isDirectionalLight){const U=e.get(L);if(U.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const k=L.shadow,q=t.get(L);q.shadowIntensity=k.intensity,q.shadowBias=k.bias,q.shadowNormalBias=k.normalBias,q.shadowRadius=k.radius,q.shadowMapSize=k.mapSize,i.directionalShadow[f]=q,i.directionalShadowMap[f]=z,i.directionalShadowMatrix[f]=L.shadow.matrix,_++}i.directional[f]=U,f++}else if(L.isSpotLight){const U=e.get(L);U.position.setFromMatrixPosition(L.matrixWorld),U.color.copy(V).multiplyScalar(F),U.distance=H,U.coneCos=Math.cos(L.angle),U.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),U.decay=L.decay,i.spot[x]=U;const k=L.shadow;if(L.map&&(i.spotLightMap[S]=L.map,S++,k.updateMatrices(L),L.castShadow&&E++),i.spotLightMatrix[x]=k.matrix,L.castShadow){const q=t.get(L);q.shadowIntensity=k.intensity,q.shadowBias=k.bias,q.shadowNormalBias=k.normalBias,q.shadowRadius=k.radius,q.shadowMapSize=k.mapSize,i.spotShadow[x]=q,i.spotShadowMap[x]=z,v++}x++}else if(L.isRectAreaLight){const U=e.get(L);U.color.copy(V).multiplyScalar(F),U.halfWidth.set(L.width*.5,0,0),U.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=U,m++}else if(L.isPointLight){const U=e.get(L);if(U.color.copy(L.color).multiplyScalar(L.intensity),U.distance=L.distance,U.decay=L.decay,L.castShadow){const k=L.shadow,q=t.get(L);q.shadowIntensity=k.intensity,q.shadowBias=k.bias,q.shadowNormalBias=k.normalBias,q.shadowRadius=k.radius,q.shadowMapSize=k.mapSize,q.shadowCameraNear=k.camera.near,q.shadowCameraFar=k.camera.far,i.pointShadow[g]=q,i.pointShadowMap[g]=z,i.pointShadowMatrix[g]=L.shadow.matrix,M++}i.point[g]=U,g++}else if(L.isHemisphereLight){const U=e.get(L);U.skyColor.copy(L.color).multiplyScalar(F),U.groundColor.copy(L.groundColor).multiplyScalar(F),i.hemi[p]=U,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ce.LTC_FLOAT_1,i.rectAreaLTC2=Ce.LTC_FLOAT_2):(i.rectAreaLTC1=Ce.LTC_HALF_1,i.rectAreaLTC2=Ce.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const D=i.hash;(D.directionalLength!==f||D.pointLength!==g||D.spotLength!==x||D.rectAreaLength!==m||D.hemiLength!==p||D.numDirectionalShadows!==_||D.numPointShadows!==M||D.numSpotShadows!==v||D.numSpotMaps!==S||D.numLightProbes!==A)&&(i.directional.length=f,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=v+S-E,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=A,D.directionalLength=f,D.pointLength=g,D.spotLength=x,D.rectAreaLength=m,D.hemiLength=p,D.numDirectionalShadows=_,D.numPointShadows=M,D.numSpotShadows=v,D.numSpotMaps=S,D.numLightProbes=A,i.version=mb++)}function l(c,u){let h=0,d=0,f=0,g=0,x=0;const m=u.matrixWorldInverse;for(let p=0,_=c.length;p<_;p++){const M=c[p];if(M.isDirectionalLight){const v=i.directional[h];v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),h++}else if(M.isSpotLight){const v=i.spot[f];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),f++}else if(M.isRectAreaLight){const v=i.rectArea[g];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const v=i.point[d];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){const v=i.hemi[x];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function nd(n){const e=new xb(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function _b(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new nd(n),e.set(s,[a])):r>=o.length?(a=new nd(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const vb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yb=`uniform sampler2D shadow_pass;
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
}`,Sb=[new Q(1,0,0),new Q(-1,0,0),new Q(0,1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1)],Mb=[new Q(0,-1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1),new Q(0,-1,0),new Q(0,-1,0)],id=new Ct,Er=new Q,vl=new Q;function bb(n,e,t){let i=new fu;const s=new ot,r=new ot,o=new It,a=new F_,l=new U_,c={},u=t.maxTextureSize,h={[Zi]:cn,[cn]:Zi,[qn]:qn},d=new ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:vb,fragmentShader:yb}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Di;g.setAttribute("position",new ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new dt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xo;let p=this.type;this.render=function(E,A,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;E.type===Tx&&(Ke("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),E.type=Xo);const b=n.getRenderTarget(),T=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),V=n.state;V.setBlending(Ei),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const F=p!==this.type;F&&A.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(z=>z.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,z=E.length;H<z;H++){const U=E[H],k=U.shadow;if(k===void 0){Ke("WebGLShadowMap:",U,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const q=k.getFrameExtents();if(s.multiply(q),r.copy(k.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/q.x),s.x=r.x*q.x,k.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/q.y),s.y=r.y*q.y,k.mapSize.y=r.y)),k.map===null||F===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Pr){if(U.isPointLight){Ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new Qn(s.x,s.y,{format:or,type:Pi,minFilter:Xt,magFilter:Xt,generateMipmaps:!1}),k.map.texture.name=U.name+".shadowMap",k.map.depthTexture=new Yr(s.x,s.y,$n),k.map.depthTexture.name=U.name+".shadowMapDepth",k.map.depthTexture.format=Ii,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=kt,k.map.depthTexture.magFilter=kt}else{U.isPointLight?(k.map=new sp(s.x),k.map.depthTexture=new D_(s.x,ii)):(k.map=new Qn(s.x,s.y),k.map.depthTexture=new Yr(s.x,s.y,ii)),k.map.depthTexture.name=U.name+".shadowMap",k.map.depthTexture.format=Ii;const oe=n.state.buffers.depth.getReversed();this.type===Xo?(k.map.depthTexture.compareFunction=oe?lu:au,k.map.depthTexture.minFilter=Xt,k.map.depthTexture.magFilter=Xt):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=kt,k.map.depthTexture.magFilter=kt)}k.camera.updateProjectionMatrix()}const ae=k.map.isWebGLCubeRenderTarget?6:1;for(let oe=0;oe<ae;oe++){if(k.map.isWebGLCubeRenderTarget)n.setRenderTarget(k.map,oe),n.clear();else{oe===0&&(n.setRenderTarget(k.map),n.clear());const fe=k.getViewport(oe);o.set(r.x*fe.x,r.y*fe.y,r.x*fe.z,r.y*fe.w),V.viewport(o)}if(U.isPointLight){const fe=k.camera,ge=k.matrix,Oe=U.distance||fe.far;Oe!==fe.far&&(fe.far=Oe,fe.updateProjectionMatrix()),Er.setFromMatrixPosition(U.matrixWorld),fe.position.copy(Er),vl.copy(fe.position),vl.add(Sb[oe]),fe.up.copy(Mb[oe]),fe.lookAt(vl),fe.updateMatrixWorld(),ge.makeTranslation(-Er.x,-Er.y,-Er.z),id.multiplyMatrices(fe.projectionMatrix,fe.matrixWorldInverse),k._frustum.setFromProjectionMatrix(id,fe.coordinateSystem,fe.reversedDepth)}else k.updateMatrices(U);i=k.getFrustum(),v(A,D,k.camera,U,this.type)}k.isPointLightShadow!==!0&&this.type===Pr&&_(k,D),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(b,T,L)};function _(E,A){const D=e.update(x);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Qn(s.x,s.y,{format:or,type:Pi})),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(A,null,D,d,x,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(A,null,D,f,x,null)}function M(E,A,D,b){let T=null;const L=D.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)T=L;else if(T=D.isPointLight===!0?l:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const V=T.uuid,F=A.uuid;let H=c[V];H===void 0&&(H={},c[V]=H);let z=H[F];z===void 0&&(z=T.clone(),H[F]=z,A.addEventListener("dispose",S)),T=z}if(T.visible=A.visible,T.wireframe=A.wireframe,b===Pr?T.side=A.shadowSide!==null?A.shadowSide:A.side:T.side=A.shadowSide!==null?A.shadowSide:h[A.side],T.alphaMap=A.alphaMap,T.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,T.map=A.map,T.clipShadows=A.clipShadows,T.clippingPlanes=A.clippingPlanes,T.clipIntersection=A.clipIntersection,T.displacementMap=A.displacementMap,T.displacementScale=A.displacementScale,T.displacementBias=A.displacementBias,T.wireframeLinewidth=A.wireframeLinewidth,T.linewidth=A.linewidth,D.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const V=n.properties.get(T);V.light=D}return T}function v(E,A,D,b,T){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&T===Pr)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,E.matrixWorld);const F=e.update(E),H=E.material;if(Array.isArray(H)){const z=F.groups;for(let U=0,k=z.length;U<k;U++){const q=z[U],ae=H[q.materialIndex];if(ae&&ae.visible){const oe=M(E,ae,b,T);E.onBeforeShadow(n,E,A,D,F,oe,q),n.renderBufferDirect(D,null,F,oe,E,q),E.onAfterShadow(n,E,A,D,F,oe,q)}}}else if(H.visible){const z=M(E,H,b,T);E.onBeforeShadow(n,E,A,D,F,z,null),n.renderBufferDirect(D,null,F,z,E,null),E.onAfterShadow(n,E,A,D,F,z,null)}}const V=E.children;for(let F=0,H=V.length;F<H;F++)v(V[F],A,D,b,T)}function S(E){E.target.removeEventListener("dispose",S);for(const D in c){const b=c[D],T=E.target.uuid;T in b&&(b[T].dispose(),delete b[T])}}}const Eb={[Hl]:Wl,[Xl]:$l,[ql]:Yl,[sr]:jl,[Wl]:Hl,[$l]:Xl,[Yl]:ql,[jl]:sr};function wb(n,e){function t(){let X=!1;const Le=new It;let be=null;const Ne=new It(0,0,0,0);return{setMask:function(ye){be!==ye&&!X&&(n.colorMask(ye,ye,ye,ye),be=ye)},setLocked:function(ye){X=ye},setClear:function(ye,me,we,Ye,Mt){Mt===!0&&(ye*=Ye,me*=Ye,we*=Ye),Le.set(ye,me,we,Ye),Ne.equals(Le)===!1&&(n.clearColor(ye,me,we,Ye),Ne.copy(Le))},reset:function(){X=!1,be=null,Ne.set(-1,0,0,0)}}}function i(){let X=!1,Le=!1,be=null,Ne=null,ye=null;return{setReversed:function(me){if(Le!==me){const we=e.get("EXT_clip_control");me?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),Le=me;const Ye=ye;ye=null,this.setClear(Ye)}},getReversed:function(){return Le},setTest:function(me){me?G(n.DEPTH_TEST):ie(n.DEPTH_TEST)},setMask:function(me){be!==me&&!X&&(n.depthMask(me),be=me)},setFunc:function(me){if(Le&&(me=Eb[me]),Ne!==me){switch(me){case Hl:n.depthFunc(n.NEVER);break;case Wl:n.depthFunc(n.ALWAYS);break;case Xl:n.depthFunc(n.LESS);break;case sr:n.depthFunc(n.LEQUAL);break;case ql:n.depthFunc(n.EQUAL);break;case jl:n.depthFunc(n.GEQUAL);break;case $l:n.depthFunc(n.GREATER);break;case Yl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ne=me}},setLocked:function(me){X=me},setClear:function(me){ye!==me&&(Le&&(me=1-me),n.clearDepth(me),ye=me)},reset:function(){X=!1,be=null,Ne=null,ye=null,Le=!1}}}function s(){let X=!1,Le=null,be=null,Ne=null,ye=null,me=null,we=null,Ye=null,Mt=null;return{setTest:function(mt){X||(mt?G(n.STENCIL_TEST):ie(n.STENCIL_TEST))},setMask:function(mt){Le!==mt&&!X&&(n.stencilMask(mt),Le=mt)},setFunc:function(mt,Un,oi){(be!==mt||Ne!==Un||ye!==oi)&&(n.stencilFunc(mt,Un,oi),be=mt,Ne=Un,ye=oi)},setOp:function(mt,Un,oi){(me!==mt||we!==Un||Ye!==oi)&&(n.stencilOp(mt,Un,oi),me=mt,we=Un,Ye=oi)},setLocked:function(mt){X=mt},setClear:function(mt){Mt!==mt&&(n.clearStencil(mt),Mt=mt)},reset:function(){X=!1,Le=null,be=null,Ne=null,ye=null,me=null,we=null,Ye=null,Mt=null}}}const r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,_=null,M=null,v=null,S=null,E=null,A=new rt(0,0,0),D=0,b=!1,T=null,L=null,V=null,F=null,H=null;const z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,k=0;const q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(q)[1]),U=k>=1):q.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),U=k>=2);let ae=null,oe={};const fe=n.getParameter(n.SCISSOR_BOX),ge=n.getParameter(n.VIEWPORT),Oe=new It().fromArray(fe),Ve=new It().fromArray(ge);function Ze(X,Le,be,Ne){const ye=new Uint8Array(4),me=n.createTexture();n.bindTexture(X,me),n.texParameteri(X,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(X,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let we=0;we<be;we++)X===n.TEXTURE_3D||X===n.TEXTURE_2D_ARRAY?n.texImage3D(Le,0,n.RGBA,1,1,Ne,0,n.RGBA,n.UNSIGNED_BYTE,ye):n.texImage2D(Le+we,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ye);return me}const B={};B[n.TEXTURE_2D]=Ze(n.TEXTURE_2D,n.TEXTURE_2D,1),B[n.TEXTURE_CUBE_MAP]=Ze(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),B[n.TEXTURE_2D_ARRAY]=Ze(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),B[n.TEXTURE_3D]=Ze(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),G(n.DEPTH_TEST),o.setFunc(sr),$(!1),J(rh),G(n.CULL_FACE),W(Ei);function G(X){u[X]!==!0&&(n.enable(X),u[X]=!0)}function ie(X){u[X]!==!1&&(n.disable(X),u[X]=!1)}function ue(X,Le){return h[X]!==Le?(n.bindFramebuffer(X,Le),h[X]=Le,X===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Le),X===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Le),!0):!1}function ce(X,Le){let be=f,Ne=!1;if(X){be=d.get(Le),be===void 0&&(be=[],d.set(Le,be));const ye=X.textures;if(be.length!==ye.length||be[0]!==n.COLOR_ATTACHMENT0){for(let me=0,we=ye.length;me<we;me++)be[me]=n.COLOR_ATTACHMENT0+me;be.length=ye.length,Ne=!0}}else be[0]!==n.BACK&&(be[0]=n.BACK,Ne=!0);Ne&&n.drawBuffers(be)}function ve(X){return g!==X?(n.useProgram(X),g=X,!0):!1}const I={[ds]:n.FUNC_ADD,[Cx]:n.FUNC_SUBTRACT,[Rx]:n.FUNC_REVERSE_SUBTRACT};I[Px]=n.MIN,I[Ix]=n.MAX;const N={[Lx]:n.ZERO,[Dx]:n.ONE,[Nx]:n.SRC_COLOR,[kl]:n.SRC_ALPHA,[Vx]:n.SRC_ALPHA_SATURATE,[Bx]:n.DST_COLOR,[Ux]:n.DST_ALPHA,[Fx]:n.ONE_MINUS_SRC_COLOR,[Gl]:n.ONE_MINUS_SRC_ALPHA,[zx]:n.ONE_MINUS_DST_COLOR,[Ox]:n.ONE_MINUS_DST_ALPHA,[kx]:n.CONSTANT_COLOR,[Gx]:n.ONE_MINUS_CONSTANT_COLOR,[Hx]:n.CONSTANT_ALPHA,[Wx]:n.ONE_MINUS_CONSTANT_ALPHA};function W(X,Le,be,Ne,ye,me,we,Ye,Mt,mt){if(X===Ei){x===!0&&(ie(n.BLEND),x=!1);return}if(x===!1&&(G(n.BLEND),x=!0),X!==Ax){if(X!==m||mt!==b){if((p!==ds||v!==ds)&&(n.blendEquation(n.FUNC_ADD),p=ds,v=ds),mt)switch(X){case er:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Vl:n.blendFunc(n.ONE,n.ONE);break;case oh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ah:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:lt("WebGLState: Invalid blending: ",X);break}else switch(X){case er:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Vl:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case oh:lt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ah:lt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:lt("WebGLState: Invalid blending: ",X);break}_=null,M=null,S=null,E=null,A.set(0,0,0),D=0,m=X,b=mt}return}ye=ye||Le,me=me||be,we=we||Ne,(Le!==p||ye!==v)&&(n.blendEquationSeparate(I[Le],I[ye]),p=Le,v=ye),(be!==_||Ne!==M||me!==S||we!==E)&&(n.blendFuncSeparate(N[be],N[Ne],N[me],N[we]),_=be,M=Ne,S=me,E=we),(Ye.equals(A)===!1||Mt!==D)&&(n.blendColor(Ye.r,Ye.g,Ye.b,Mt),A.copy(Ye),D=Mt),m=X,b=!1}function ee(X,Le){X.side===qn?ie(n.CULL_FACE):G(n.CULL_FACE);let be=X.side===cn;Le&&(be=!be),$(be),X.blending===er&&X.transparent===!1?W(Ei):W(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),o.setFunc(X.depthFunc),o.setTest(X.depthTest),o.setMask(X.depthWrite),r.setMask(X.colorWrite);const Ne=X.stencilWrite;a.setTest(Ne),Ne&&(a.setMask(X.stencilWriteMask),a.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),a.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),de(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?G(n.SAMPLE_ALPHA_TO_COVERAGE):ie(n.SAMPLE_ALPHA_TO_COVERAGE)}function $(X){T!==X&&(X?n.frontFace(n.CW):n.frontFace(n.CCW),T=X)}function J(X){X!==Ex?(G(n.CULL_FACE),X!==L&&(X===rh?n.cullFace(n.BACK):X===wx?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ie(n.CULL_FACE),L=X}function P(X){X!==V&&(U&&n.lineWidth(X),V=X)}function de(X,Le,be){X?(G(n.POLYGON_OFFSET_FILL),(F!==Le||H!==be)&&(n.polygonOffset(Le,be),F=Le,H=be)):ie(n.POLYGON_OFFSET_FILL)}function le(X){X?G(n.SCISSOR_TEST):ie(n.SCISSOR_TEST)}function se(X){X===void 0&&(X=n.TEXTURE0+z-1),ae!==X&&(n.activeTexture(X),ae=X)}function he(X,Le,be){be===void 0&&(ae===null?be=n.TEXTURE0+z-1:be=ae);let Ne=oe[be];Ne===void 0&&(Ne={type:void 0,texture:void 0},oe[be]=Ne),(Ne.type!==X||Ne.texture!==Le)&&(ae!==be&&(n.activeTexture(be),ae=be),n.bindTexture(X,Le||B[X]),Ne.type=X,Ne.texture=Le)}function C(){const X=oe[ae];X!==void 0&&X.type!==void 0&&(n.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function y(){try{n.compressedTexImage2D(...arguments)}catch(X){lt("WebGLState:",X)}}function O(){try{n.compressedTexImage3D(...arguments)}catch(X){lt("WebGLState:",X)}}function Z(){try{n.texSubImage2D(...arguments)}catch(X){lt("WebGLState:",X)}}function re(){try{n.texSubImage3D(...arguments)}catch(X){lt("WebGLState:",X)}}function Y(){try{n.compressedTexSubImage2D(...arguments)}catch(X){lt("WebGLState:",X)}}function Te(){try{n.compressedTexSubImage3D(...arguments)}catch(X){lt("WebGLState:",X)}}function xe(){try{n.texStorage2D(...arguments)}catch(X){lt("WebGLState:",X)}}function Re(){try{n.texStorage3D(...arguments)}catch(X){lt("WebGLState:",X)}}function ze(){try{n.texImage2D(...arguments)}catch(X){lt("WebGLState:",X)}}function _e(){try{n.texImage3D(...arguments)}catch(X){lt("WebGLState:",X)}}function Se(X){Oe.equals(X)===!1&&(n.scissor(X.x,X.y,X.z,X.w),Oe.copy(X))}function Me(X){Ve.equals(X)===!1&&(n.viewport(X.x,X.y,X.z,X.w),Ve.copy(X))}function Pe(X,Le){let be=c.get(Le);be===void 0&&(be=new WeakMap,c.set(Le,be));let Ne=be.get(X);Ne===void 0&&(Ne=n.getUniformBlockIndex(Le,X.name),be.set(X,Ne))}function Ee(X,Le){const Ne=c.get(Le).get(X);l.get(Le)!==Ne&&(n.uniformBlockBinding(Le,Ne,X.__bindingPointIndex),l.set(Le,Ne))}function je(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ae=null,oe={},h={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,_=null,M=null,v=null,S=null,E=null,A=new rt(0,0,0),D=0,b=!1,T=null,L=null,V=null,F=null,H=null,Oe.set(0,0,n.canvas.width,n.canvas.height),Ve.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:G,disable:ie,bindFramebuffer:ue,drawBuffers:ce,useProgram:ve,setBlending:W,setMaterial:ee,setFlipSided:$,setCullFace:J,setLineWidth:P,setPolygonOffset:de,setScissorTest:le,activeTexture:se,bindTexture:he,unbindTexture:C,compressedTexImage2D:y,compressedTexImage3D:O,texImage2D:ze,texImage3D:_e,updateUBOMapping:Pe,uniformBlockBinding:Ee,texStorage2D:xe,texStorage3D:Re,texSubImage2D:Z,texSubImage3D:re,compressedTexSubImage2D:Y,compressedTexSubImage3D:Te,scissor:Se,viewport:Me,reset:je}}function Tb(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ot,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,y){return f?new OffscreenCanvas(C,y):ca("canvas")}function x(C,y,O){let Z=1;const re=he(C);if((re.width>O||re.height>O)&&(Z=O/Math.max(re.width,re.height)),Z<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Y=Math.floor(Z*re.width),Te=Math.floor(Z*re.height);h===void 0&&(h=g(Y,Te));const xe=y?g(Y,Te):h;return xe.width=Y,xe.height=Te,xe.getContext("2d").drawImage(C,0,0,Y,Te),Ke("WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+Y+"x"+Te+")."),xe}else return"data"in C&&Ke("WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){n.generateMipmap(C)}function _(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(C,y,O,Z,re=!1){if(C!==null){if(n[C]!==void 0)return n[C];Ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Y=y;if(y===n.RED&&(O===n.FLOAT&&(Y=n.R32F),O===n.HALF_FLOAT&&(Y=n.R16F),O===n.UNSIGNED_BYTE&&(Y=n.R8)),y===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(Y=n.R8UI),O===n.UNSIGNED_SHORT&&(Y=n.R16UI),O===n.UNSIGNED_INT&&(Y=n.R32UI),O===n.BYTE&&(Y=n.R8I),O===n.SHORT&&(Y=n.R16I),O===n.INT&&(Y=n.R32I)),y===n.RG&&(O===n.FLOAT&&(Y=n.RG32F),O===n.HALF_FLOAT&&(Y=n.RG16F),O===n.UNSIGNED_BYTE&&(Y=n.RG8)),y===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(Y=n.RG8UI),O===n.UNSIGNED_SHORT&&(Y=n.RG16UI),O===n.UNSIGNED_INT&&(Y=n.RG32UI),O===n.BYTE&&(Y=n.RG8I),O===n.SHORT&&(Y=n.RG16I),O===n.INT&&(Y=n.RG32I)),y===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(Y=n.RGB8UI),O===n.UNSIGNED_SHORT&&(Y=n.RGB16UI),O===n.UNSIGNED_INT&&(Y=n.RGB32UI),O===n.BYTE&&(Y=n.RGB8I),O===n.SHORT&&(Y=n.RGB16I),O===n.INT&&(Y=n.RGB32I)),y===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(Y=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(Y=n.RGBA16UI),O===n.UNSIGNED_INT&&(Y=n.RGBA32UI),O===n.BYTE&&(Y=n.RGBA8I),O===n.SHORT&&(Y=n.RGBA16I),O===n.INT&&(Y=n.RGBA32I)),y===n.RGB&&(O===n.UNSIGNED_INT_5_9_9_9_REV&&(Y=n.RGB9_E5),O===n.UNSIGNED_INT_10F_11F_11F_REV&&(Y=n.R11F_G11F_B10F)),y===n.RGBA){const Te=re?aa:ct.getTransfer(Z);O===n.FLOAT&&(Y=n.RGBA32F),O===n.HALF_FLOAT&&(Y=n.RGBA16F),O===n.UNSIGNED_BYTE&&(Y=Te===xt?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function v(C,y){let O;return C?y===null||y===ii||y===jr?O=n.DEPTH24_STENCIL8:y===$n?O=n.DEPTH32F_STENCIL8:y===qr&&(O=n.DEPTH24_STENCIL8,Ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ii||y===jr?O=n.DEPTH_COMPONENT24:y===$n?O=n.DEPTH_COMPONENT32F:y===qr&&(O=n.DEPTH_COMPONENT16),O}function S(C,y){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==kt&&C.minFilter!==Xt?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function E(C){const y=C.target;y.removeEventListener("dispose",E),D(y),y.isVideoTexture&&u.delete(y)}function A(C){const y=C.target;y.removeEventListener("dispose",A),T(y)}function D(C){const y=i.get(C);if(y.__webglInit===void 0)return;const O=C.source,Z=d.get(O);if(Z){const re=Z[y.__cacheKey];re.usedTimes--,re.usedTimes===0&&b(C),Object.keys(Z).length===0&&d.delete(O)}i.remove(C)}function b(C){const y=i.get(C);n.deleteTexture(y.__webglTexture);const O=C.source,Z=d.get(O);delete Z[y.__cacheKey],o.memory.textures--}function T(C){const y=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(y.__webglFramebuffer[Z]))for(let re=0;re<y.__webglFramebuffer[Z].length;re++)n.deleteFramebuffer(y.__webglFramebuffer[Z][re]);else n.deleteFramebuffer(y.__webglFramebuffer[Z]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[Z])}else{if(Array.isArray(y.__webglFramebuffer))for(let Z=0;Z<y.__webglFramebuffer.length;Z++)n.deleteFramebuffer(y.__webglFramebuffer[Z]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Z=0;Z<y.__webglColorRenderbuffer.length;Z++)y.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[Z]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const O=C.textures;for(let Z=0,re=O.length;Z<re;Z++){const Y=i.get(O[Z]);Y.__webglTexture&&(n.deleteTexture(Y.__webglTexture),o.memory.textures--),i.remove(O[Z])}i.remove(C)}let L=0;function V(){L=0}function F(){const C=L;return C>=s.maxTextures&&Ke("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),L+=1,C}function H(C){const y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function z(C,y){const O=i.get(C);if(C.isVideoTexture&&le(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&O.__version!==C.version){const Z=C.image;if(Z===null)Ke("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)Ke("WebGLRenderer: Texture marked for update but image is incomplete");else{B(O,C,y);return}}else C.isExternalTexture&&(O.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+y)}function U(C,y){const O=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){B(O,C,y);return}else C.isExternalTexture&&(O.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+y)}function k(C,y){const O=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){B(O,C,y);return}t.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+y)}function q(C,y){const O=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&O.__version!==C.version){G(O,C,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+y)}const ae={[Jl]:n.REPEAT,[bi]:n.CLAMP_TO_EDGE,[Ql]:n.MIRRORED_REPEAT},oe={[kt]:n.NEAREST,[jx]:n.NEAREST_MIPMAP_NEAREST,[uo]:n.NEAREST_MIPMAP_LINEAR,[Xt]:n.LINEAR,[ka]:n.LINEAR_MIPMAP_NEAREST,[gs]:n.LINEAR_MIPMAP_LINEAR},fe={[Kx]:n.NEVER,[t_]:n.ALWAYS,[Zx]:n.LESS,[au]:n.LEQUAL,[Jx]:n.EQUAL,[lu]:n.GEQUAL,[Qx]:n.GREATER,[e_]:n.NOTEQUAL};function ge(C,y){if(y.type===$n&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Xt||y.magFilter===ka||y.magFilter===uo||y.magFilter===gs||y.minFilter===Xt||y.minFilter===ka||y.minFilter===uo||y.minFilter===gs)&&Ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,ae[y.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,ae[y.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,ae[y.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,oe[y.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,oe[y.minFilter]),y.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,fe[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===kt||y.minFilter!==uo&&y.minFilter!==gs||y.type===$n&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function Oe(C,y){let O=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",E));const Z=y.source;let re=d.get(Z);re===void 0&&(re={},d.set(Z,re));const Y=H(y);if(Y!==C.__cacheKey){re[Y]===void 0&&(re[Y]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,O=!0),re[Y].usedTimes++;const Te=re[C.__cacheKey];Te!==void 0&&(re[C.__cacheKey].usedTimes--,Te.usedTimes===0&&b(y)),C.__cacheKey=Y,C.__webglTexture=re[Y].texture}return O}function Ve(C,y,O){return Math.floor(Math.floor(C/O)/y)}function Ze(C,y,O,Z){const Y=C.updateRanges;if(Y.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,O,Z,y.data);else{Y.sort((_e,Se)=>_e.start-Se.start);let Te=0;for(let _e=1;_e<Y.length;_e++){const Se=Y[Te],Me=Y[_e],Pe=Se.start+Se.count,Ee=Ve(Me.start,y.width,4),je=Ve(Se.start,y.width,4);Me.start<=Pe+1&&Ee===je&&Ve(Me.start+Me.count-1,y.width,4)===Ee?Se.count=Math.max(Se.count,Me.start+Me.count-Se.start):(++Te,Y[Te]=Me)}Y.length=Te+1;const xe=n.getParameter(n.UNPACK_ROW_LENGTH),Re=n.getParameter(n.UNPACK_SKIP_PIXELS),ze=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let _e=0,Se=Y.length;_e<Se;_e++){const Me=Y[_e],Pe=Math.floor(Me.start/4),Ee=Math.ceil(Me.count/4),je=Pe%y.width,X=Math.floor(Pe/y.width),Le=Ee,be=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,je),n.pixelStorei(n.UNPACK_SKIP_ROWS,X),t.texSubImage2D(n.TEXTURE_2D,0,je,X,Le,be,O,Z,y.data)}C.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,xe),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Re),n.pixelStorei(n.UNPACK_SKIP_ROWS,ze)}}function B(C,y,O){let Z=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Z=n.TEXTURE_3D);const re=Oe(C,y),Y=y.source;t.bindTexture(Z,C.__webglTexture,n.TEXTURE0+O);const Te=i.get(Y);if(Y.version!==Te.__version||re===!0){t.activeTexture(n.TEXTURE0+O);const xe=ct.getPrimaries(ct.workingColorSpace),Re=y.colorSpace===qi?null:ct.getPrimaries(y.colorSpace),ze=y.colorSpace===qi||xe===Re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);let _e=x(y.image,!1,s.maxTextureSize);_e=se(y,_e);const Se=r.convert(y.format,y.colorSpace),Me=r.convert(y.type);let Pe=M(y.internalFormat,Se,Me,y.colorSpace,y.isVideoTexture);ge(Z,y);let Ee;const je=y.mipmaps,X=y.isVideoTexture!==!0,Le=Te.__version===void 0||re===!0,be=Y.dataReady,Ne=S(y,_e);if(y.isDepthTexture)Pe=v(y.format===xs,y.type),Le&&(X?t.texStorage2D(n.TEXTURE_2D,1,Pe,_e.width,_e.height):t.texImage2D(n.TEXTURE_2D,0,Pe,_e.width,_e.height,0,Se,Me,null));else if(y.isDataTexture)if(je.length>0){X&&Le&&t.texStorage2D(n.TEXTURE_2D,Ne,Pe,je[0].width,je[0].height);for(let ye=0,me=je.length;ye<me;ye++)Ee=je[ye],X?be&&t.texSubImage2D(n.TEXTURE_2D,ye,0,0,Ee.width,Ee.height,Se,Me,Ee.data):t.texImage2D(n.TEXTURE_2D,ye,Pe,Ee.width,Ee.height,0,Se,Me,Ee.data);y.generateMipmaps=!1}else X?(Le&&t.texStorage2D(n.TEXTURE_2D,Ne,Pe,_e.width,_e.height),be&&Ze(y,_e,Se,Me)):t.texImage2D(n.TEXTURE_2D,0,Pe,_e.width,_e.height,0,Se,Me,_e.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){X&&Le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ne,Pe,je[0].width,je[0].height,_e.depth);for(let ye=0,me=je.length;ye<me;ye++)if(Ee=je[ye],y.format!==In)if(Se!==null)if(X){if(be)if(y.layerUpdates.size>0){const we=Nh(Ee.width,Ee.height,y.format,y.type);for(const Ye of y.layerUpdates){const Mt=Ee.data.subarray(Ye*we/Ee.data.BYTES_PER_ELEMENT,(Ye+1)*we/Ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ye,0,0,Ye,Ee.width,Ee.height,1,Se,Mt)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ye,0,0,0,Ee.width,Ee.height,_e.depth,Se,Ee.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ye,Pe,Ee.width,Ee.height,_e.depth,0,Ee.data,0,0);else Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?be&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ye,0,0,0,Ee.width,Ee.height,_e.depth,Se,Me,Ee.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ye,Pe,Ee.width,Ee.height,_e.depth,0,Se,Me,Ee.data)}else{X&&Le&&t.texStorage2D(n.TEXTURE_2D,Ne,Pe,je[0].width,je[0].height);for(let ye=0,me=je.length;ye<me;ye++)Ee=je[ye],y.format!==In?Se!==null?X?be&&t.compressedTexSubImage2D(n.TEXTURE_2D,ye,0,0,Ee.width,Ee.height,Se,Ee.data):t.compressedTexImage2D(n.TEXTURE_2D,ye,Pe,Ee.width,Ee.height,0,Ee.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?be&&t.texSubImage2D(n.TEXTURE_2D,ye,0,0,Ee.width,Ee.height,Se,Me,Ee.data):t.texImage2D(n.TEXTURE_2D,ye,Pe,Ee.width,Ee.height,0,Se,Me,Ee.data)}else if(y.isDataArrayTexture)if(X){if(Le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ne,Pe,_e.width,_e.height,_e.depth),be)if(y.layerUpdates.size>0){const ye=Nh(_e.width,_e.height,y.format,y.type);for(const me of y.layerUpdates){const we=_e.data.subarray(me*ye/_e.data.BYTES_PER_ELEMENT,(me+1)*ye/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,me,_e.width,_e.height,1,Se,Me,we)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Se,Me,_e.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Pe,_e.width,_e.height,_e.depth,0,Se,Me,_e.data);else if(y.isData3DTexture)X?(Le&&t.texStorage3D(n.TEXTURE_3D,Ne,Pe,_e.width,_e.height,_e.depth),be&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Se,Me,_e.data)):t.texImage3D(n.TEXTURE_3D,0,Pe,_e.width,_e.height,_e.depth,0,Se,Me,_e.data);else if(y.isFramebufferTexture){if(Le)if(X)t.texStorage2D(n.TEXTURE_2D,Ne,Pe,_e.width,_e.height);else{let ye=_e.width,me=_e.height;for(let we=0;we<Ne;we++)t.texImage2D(n.TEXTURE_2D,we,Pe,ye,me,0,Se,Me,null),ye>>=1,me>>=1}}else if(je.length>0){if(X&&Le){const ye=he(je[0]);t.texStorage2D(n.TEXTURE_2D,Ne,Pe,ye.width,ye.height)}for(let ye=0,me=je.length;ye<me;ye++)Ee=je[ye],X?be&&t.texSubImage2D(n.TEXTURE_2D,ye,0,0,Se,Me,Ee):t.texImage2D(n.TEXTURE_2D,ye,Pe,Se,Me,Ee);y.generateMipmaps=!1}else if(X){if(Le){const ye=he(_e);t.texStorage2D(n.TEXTURE_2D,Ne,Pe,ye.width,ye.height)}be&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Se,Me,_e)}else t.texImage2D(n.TEXTURE_2D,0,Pe,Se,Me,_e);m(y)&&p(Z),Te.__version=Y.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function G(C,y,O){if(y.image.length!==6)return;const Z=Oe(C,y),re=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+O);const Y=i.get(re);if(re.version!==Y.__version||Z===!0){t.activeTexture(n.TEXTURE0+O);const Te=ct.getPrimaries(ct.workingColorSpace),xe=y.colorSpace===qi?null:ct.getPrimaries(y.colorSpace),Re=y.colorSpace===qi||Te===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const ze=y.isCompressedTexture||y.image[0].isCompressedTexture,_e=y.image[0]&&y.image[0].isDataTexture,Se=[];for(let me=0;me<6;me++)!ze&&!_e?Se[me]=x(y.image[me],!0,s.maxCubemapSize):Se[me]=_e?y.image[me].image:y.image[me],Se[me]=se(y,Se[me]);const Me=Se[0],Pe=r.convert(y.format,y.colorSpace),Ee=r.convert(y.type),je=M(y.internalFormat,Pe,Ee,y.colorSpace),X=y.isVideoTexture!==!0,Le=Y.__version===void 0||Z===!0,be=re.dataReady;let Ne=S(y,Me);ge(n.TEXTURE_CUBE_MAP,y);let ye;if(ze){X&&Le&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ne,je,Me.width,Me.height);for(let me=0;me<6;me++){ye=Se[me].mipmaps;for(let we=0;we<ye.length;we++){const Ye=ye[we];y.format!==In?Pe!==null?X?be&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,we,0,0,Ye.width,Ye.height,Pe,Ye.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,we,je,Ye.width,Ye.height,0,Ye.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,we,0,0,Ye.width,Ye.height,Pe,Ee,Ye.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,we,je,Ye.width,Ye.height,0,Pe,Ee,Ye.data)}}}else{if(ye=y.mipmaps,X&&Le){ye.length>0&&Ne++;const me=he(Se[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ne,je,me.width,me.height)}for(let me=0;me<6;me++)if(_e){X?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Se[me].width,Se[me].height,Pe,Ee,Se[me].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,je,Se[me].width,Se[me].height,0,Pe,Ee,Se[me].data);for(let we=0;we<ye.length;we++){const Mt=ye[we].image[me].image;X?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,we+1,0,0,Mt.width,Mt.height,Pe,Ee,Mt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,we+1,je,Mt.width,Mt.height,0,Pe,Ee,Mt.data)}}else{X?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Pe,Ee,Se[me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,je,Pe,Ee,Se[me]);for(let we=0;we<ye.length;we++){const Ye=ye[we];X?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,we+1,0,0,Pe,Ee,Ye.image[me]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,we+1,je,Pe,Ee,Ye.image[me])}}}m(y)&&p(n.TEXTURE_CUBE_MAP),Y.__version=re.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function ie(C,y,O,Z,re,Y){const Te=r.convert(O.format,O.colorSpace),xe=r.convert(O.type),Re=M(O.internalFormat,Te,xe,O.colorSpace),ze=i.get(y),_e=i.get(O);if(_e.__renderTarget=y,!ze.__hasExternalTextures){const Se=Math.max(1,y.width>>Y),Me=Math.max(1,y.height>>Y);re===n.TEXTURE_3D||re===n.TEXTURE_2D_ARRAY?t.texImage3D(re,Y,Re,Se,Me,y.depth,0,Te,xe,null):t.texImage2D(re,Y,Re,Se,Me,0,Te,xe,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),de(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,re,_e.__webglTexture,0,P(y)):(re===n.TEXTURE_2D||re>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,re,_e.__webglTexture,Y),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ue(C,y,O){if(n.bindRenderbuffer(n.RENDERBUFFER,C),y.depthBuffer){const Z=y.depthTexture,re=Z&&Z.isDepthTexture?Z.type:null,Y=v(y.stencilBuffer,re),Te=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;de(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,P(y),Y,y.width,y.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,P(y),Y,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,Y,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Te,n.RENDERBUFFER,C)}else{const Z=y.textures;for(let re=0;re<Z.length;re++){const Y=Z[re],Te=r.convert(Y.format,Y.colorSpace),xe=r.convert(Y.type),Re=M(Y.internalFormat,Te,xe,Y.colorSpace);de(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,P(y),Re,y.width,y.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,P(y),Re,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,Re,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ce(C,y,O){const Z=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const re=i.get(y.depthTexture);if(re.__renderTarget=y,(!re.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Z){if(re.__webglInit===void 0&&(re.__webglInit=!0,y.depthTexture.addEventListener("dispose",E)),re.__webglTexture===void 0){re.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,re.__webglTexture),ge(n.TEXTURE_CUBE_MAP,y.depthTexture);const ze=r.convert(y.depthTexture.format),_e=r.convert(y.depthTexture.type);let Se;y.depthTexture.format===Ii?Se=n.DEPTH_COMPONENT24:y.depthTexture.format===xs&&(Se=n.DEPTH24_STENCIL8);for(let Me=0;Me<6;Me++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,Se,y.width,y.height,0,ze,_e,null)}}else z(y.depthTexture,0);const Y=re.__webglTexture,Te=P(y),xe=Z?n.TEXTURE_CUBE_MAP_POSITIVE_X+O:n.TEXTURE_2D,Re=y.depthTexture.format===xs?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(y.depthTexture.format===Ii)de(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Re,xe,Y,0,Te):n.framebufferTexture2D(n.FRAMEBUFFER,Re,xe,Y,0);else if(y.depthTexture.format===xs)de(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Re,xe,Y,0,Te):n.framebufferTexture2D(n.FRAMEBUFFER,Re,xe,Y,0);else throw new Error("Unknown depthTexture format")}function ve(C){const y=i.get(C),O=C.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==C.depthTexture){const Z=C.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Z){const re=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Z.removeEventListener("dispose",re)};Z.addEventListener("dispose",re),y.__depthDisposeCallback=re}y.__boundDepthTexture=Z}if(C.depthTexture&&!y.__autoAllocateDepthBuffer)if(O)for(let Z=0;Z<6;Z++)ce(y.__webglFramebuffer[Z],C,Z);else{const Z=C.texture.mipmaps;Z&&Z.length>0?ce(y.__webglFramebuffer[0],C,0):ce(y.__webglFramebuffer,C,0)}else if(O){y.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[Z]),y.__webglDepthbuffer[Z]===void 0)y.__webglDepthbuffer[Z]=n.createRenderbuffer(),ue(y.__webglDepthbuffer[Z],C,!1);else{const re=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=y.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,re,n.RENDERBUFFER,Y)}}else{const Z=C.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),ue(y.__webglDepthbuffer,C,!1);else{const re=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Y),n.framebufferRenderbuffer(n.FRAMEBUFFER,re,n.RENDERBUFFER,Y)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function I(C,y,O){const Z=i.get(C);y!==void 0&&ie(Z.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&ve(C)}function N(C){const y=C.texture,O=i.get(C),Z=i.get(y);C.addEventListener("dispose",A);const re=C.textures,Y=C.isWebGLCubeRenderTarget===!0,Te=re.length>1;if(Te||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=y.version,o.memory.textures++),Y){O.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer[xe]=[];for(let Re=0;Re<y.mipmaps.length;Re++)O.__webglFramebuffer[xe][Re]=n.createFramebuffer()}else O.__webglFramebuffer[xe]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer=[];for(let xe=0;xe<y.mipmaps.length;xe++)O.__webglFramebuffer[xe]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(Te)for(let xe=0,Re=re.length;xe<Re;xe++){const ze=i.get(re[xe]);ze.__webglTexture===void 0&&(ze.__webglTexture=n.createTexture(),o.memory.textures++)}if(C.samples>0&&de(C)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let xe=0;xe<re.length;xe++){const Re=re[xe];O.__webglColorRenderbuffer[xe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[xe]);const ze=r.convert(Re.format,Re.colorSpace),_e=r.convert(Re.type),Se=M(Re.internalFormat,ze,_e,Re.colorSpace,C.isXRRenderTarget===!0),Me=P(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,Me,Se,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,O.__webglColorRenderbuffer[xe])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),ue(O.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Y){t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),ge(n.TEXTURE_CUBE_MAP,y);for(let xe=0;xe<6;xe++)if(y.mipmaps&&y.mipmaps.length>0)for(let Re=0;Re<y.mipmaps.length;Re++)ie(O.__webglFramebuffer[xe][Re],C,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Re);else ie(O.__webglFramebuffer[xe],C,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);m(y)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let xe=0,Re=re.length;xe<Re;xe++){const ze=re[xe],_e=i.get(ze);let Se=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Se=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Se,_e.__webglTexture),ge(Se,ze),ie(O.__webglFramebuffer,C,ze,n.COLOR_ATTACHMENT0+xe,Se,0),m(ze)&&p(Se)}t.unbindTexture()}else{let xe=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(xe=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(xe,Z.__webglTexture),ge(xe,y),y.mipmaps&&y.mipmaps.length>0)for(let Re=0;Re<y.mipmaps.length;Re++)ie(O.__webglFramebuffer[Re],C,y,n.COLOR_ATTACHMENT0,xe,Re);else ie(O.__webglFramebuffer,C,y,n.COLOR_ATTACHMENT0,xe,0);m(y)&&p(xe),t.unbindTexture()}C.depthBuffer&&ve(C)}function W(C){const y=C.textures;for(let O=0,Z=y.length;O<Z;O++){const re=y[O];if(m(re)){const Y=_(C),Te=i.get(re).__webglTexture;t.bindTexture(Y,Te),p(Y),t.unbindTexture()}}}const ee=[],$=[];function J(C){if(C.samples>0){if(de(C)===!1){const y=C.textures,O=C.width,Z=C.height;let re=n.COLOR_BUFFER_BIT;const Y=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Te=i.get(C),xe=y.length>1;if(xe)for(let ze=0;ze<y.length;ze++)t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ze,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ze,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer);const Re=C.texture.mipmaps;Re&&Re.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let ze=0;ze<y.length;ze++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(re|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(re|=n.STENCIL_BUFFER_BIT)),xe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Te.__webglColorRenderbuffer[ze]);const _e=i.get(y[ze]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,_e,0)}n.blitFramebuffer(0,0,O,Z,0,0,O,Z,re,n.NEAREST),l===!0&&(ee.length=0,$.length=0,ee.push(n.COLOR_ATTACHMENT0+ze),C.depthBuffer&&C.resolveDepthBuffer===!1&&(ee.push(Y),$.push(Y),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,$)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ee))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),xe)for(let ze=0;ze<y.length;ze++){t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ze,n.RENDERBUFFER,Te.__webglColorRenderbuffer[ze]);const _e=i.get(y[ze]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Te.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ze,n.TEXTURE_2D,_e,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const y=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function P(C){return Math.min(s.maxSamples,C.samples)}function de(C){const y=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function le(C){const y=o.render.frame;u.get(C)!==y&&(u.set(C,y),C.update())}function se(C,y){const O=C.colorSpace,Z=C.format,re=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||O!==ar&&O!==qi&&(ct.getTransfer(O)===xt?(Z!==In||re!==mn)&&Ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):lt("WebGLTextures: Unsupported texture color space:",O)),y}function he(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=V,this.setTexture2D=z,this.setTexture2DArray=U,this.setTexture3D=k,this.setTextureCube=q,this.rebindTextures=I,this.setupRenderTarget=N,this.updateRenderTargetMipmap=W,this.updateMultisampleRenderTarget=J,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=de,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Ab(n,e){function t(i,s=qi){let r;const o=ct.getTransfer(s);if(i===mn)return n.UNSIGNED_BYTE;if(i===nu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===iu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Hf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Wf)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===kf)return n.BYTE;if(i===Gf)return n.SHORT;if(i===qr)return n.UNSIGNED_SHORT;if(i===tu)return n.INT;if(i===ii)return n.UNSIGNED_INT;if(i===$n)return n.FLOAT;if(i===Pi)return n.HALF_FLOAT;if(i===Xf)return n.ALPHA;if(i===qf)return n.RGB;if(i===In)return n.RGBA;if(i===Ii)return n.DEPTH_COMPONENT;if(i===xs)return n.DEPTH_STENCIL;if(i===jf)return n.RED;if(i===su)return n.RED_INTEGER;if(i===or)return n.RG;if(i===ru)return n.RG_INTEGER;if(i===ou)return n.RGBA_INTEGER;if(i===qo||i===jo||i===$o||i===Yo)if(o===xt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===qo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===$o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===qo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===jo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===$o)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Yo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ec||i===tc||i===nc||i===ic)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ec)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===tc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===nc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ic)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===sc||i===rc||i===oc||i===ac||i===lc||i===cc||i===uc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===sc||i===rc)return o===xt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===oc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===ac)return r.COMPRESSED_R11_EAC;if(i===lc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===cc)return r.COMPRESSED_RG11_EAC;if(i===uc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===hc||i===dc||i===fc||i===pc||i===mc||i===gc||i===xc||i===_c||i===vc||i===yc||i===Sc||i===Mc||i===bc||i===Ec)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===hc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===dc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===fc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===pc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===mc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===gc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===xc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===_c)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===vc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===yc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Sc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Mc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===bc)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ec)return o===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===wc||i===Tc||i===Ac)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===wc)return o===xt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Tc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ac)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Cc||i===Rc||i===Pc||i===Ic)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Cc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Rc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Pc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ic)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===jr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Cb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Rb=`
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

}`;class Pb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new rp(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ri({vertexShader:Cb,fragmentShader:Rb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new dt(new Qt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ib extends dr{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null;const x=typeof XRWebGLBinding<"u",m=new Pb,p={},_=t.getContextAttributes();let M=null,v=null;const S=[],E=[],A=new ot;let D=null;const b=new Rn;b.viewport=new It;const T=new Rn;T.viewport=new It;const L=[b,T],V=new k_;let F=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let G=S[B];return G===void 0&&(G=new ul,S[B]=G),G.getTargetRaySpace()},this.getControllerGrip=function(B){let G=S[B];return G===void 0&&(G=new ul,S[B]=G),G.getGripSpace()},this.getHand=function(B){let G=S[B];return G===void 0&&(G=new ul,S[B]=G),G.getHandSpace()};function z(B){const G=E.indexOf(B.inputSource);if(G===-1)return;const ie=S[G];ie!==void 0&&(ie.update(B.inputSource,B.frame,c||o),ie.dispatchEvent({type:B.type,data:B.inputSource}))}function U(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",k);for(let B=0;B<S.length;B++){const G=E[B];G!==null&&(E[B]=null,S[B].disconnect(G))}F=null,H=null,m.reset();for(const B in p)delete p[B];e.setRenderTarget(M),f=null,d=null,h=null,s=null,v=null,Ze.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){r=B,i.isPresenting===!0&&Ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,i.isPresenting===!0&&Ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(B){if(s=B,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",U),s.addEventListener("inputsourceschange",k),_.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,ue=null,ce=null;_.depth&&(ce=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=_.stencil?xs:Ii,ue=_.stencil?jr:ii);const ve={colorFormat:t.RGBA8,depthFormat:ce,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(ve),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new Qn(d.textureWidth,d.textureHeight,{format:In,type:mn,depthTexture:new Yr(d.textureWidth,d.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ie={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ie),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Qn(f.framebufferWidth,f.framebufferHeight,{format:In,type:mn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ze.setContext(s),Ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function k(B){for(let G=0;G<B.removed.length;G++){const ie=B.removed[G],ue=E.indexOf(ie);ue>=0&&(E[ue]=null,S[ue].disconnect(ie))}for(let G=0;G<B.added.length;G++){const ie=B.added[G];let ue=E.indexOf(ie);if(ue===-1){for(let ve=0;ve<S.length;ve++)if(ve>=E.length){E.push(ie),ue=ve;break}else if(E[ve]===null){E[ve]=ie,ue=ve;break}if(ue===-1)break}const ce=S[ue];ce&&ce.connect(ie)}}const q=new Q,ae=new Q;function oe(B,G,ie){q.setFromMatrixPosition(G.matrixWorld),ae.setFromMatrixPosition(ie.matrixWorld);const ue=q.distanceTo(ae),ce=G.projectionMatrix.elements,ve=ie.projectionMatrix.elements,I=ce[14]/(ce[10]-1),N=ce[14]/(ce[10]+1),W=(ce[9]+1)/ce[5],ee=(ce[9]-1)/ce[5],$=(ce[8]-1)/ce[0],J=(ve[8]+1)/ve[0],P=I*$,de=I*J,le=ue/(-$+J),se=le*-$;if(G.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(se),B.translateZ(le),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert(),ce[10]===-1)B.projectionMatrix.copy(G.projectionMatrix),B.projectionMatrixInverse.copy(G.projectionMatrixInverse);else{const he=I+le,C=N+le,y=P-se,O=de+(ue-se),Z=W*N/C*he,re=ee*N/C*he;B.projectionMatrix.makePerspective(y,O,Z,re,he,C),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}}function fe(B,G){G===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(G.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(s===null)return;let G=B.near,ie=B.far;m.texture!==null&&(m.depthNear>0&&(G=m.depthNear),m.depthFar>0&&(ie=m.depthFar)),V.near=T.near=b.near=G,V.far=T.far=b.far=ie,(F!==V.near||H!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),F=V.near,H=V.far),V.layers.mask=B.layers.mask|6,b.layers.mask=V.layers.mask&3,T.layers.mask=V.layers.mask&5;const ue=B.parent,ce=V.cameras;fe(V,ue);for(let ve=0;ve<ce.length;ve++)fe(ce[ve],ue);ce.length===2?oe(V,b,T):V.projectionMatrix.copy(b.projectionMatrix),ge(B,V,ue)};function ge(B,G,ie){ie===null?B.matrix.copy(G.matrixWorld):(B.matrix.copy(ie.matrixWorld),B.matrix.invert(),B.matrix.multiply(G.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(G.projectionMatrix),B.projectionMatrixInverse.copy(G.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=Lc*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(B){l=B,d!==null&&(d.fixedFoveation=B),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=B)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(V)},this.getCameraTexture=function(B){return p[B]};let Oe=null;function Ve(B,G){if(u=G.getViewerPose(c||o),g=G,u!==null){const ie=u.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let ue=!1;ie.length!==V.cameras.length&&(V.cameras.length=0,ue=!0);for(let N=0;N<ie.length;N++){const W=ie[N];let ee=null;if(f!==null)ee=f.getViewport(W);else{const J=h.getViewSubImage(d,W);ee=J.viewport,N===0&&(e.setRenderTargetTextures(v,J.colorTexture,J.depthStencilTexture),e.setRenderTarget(v))}let $=L[N];$===void 0&&($=new Rn,$.layers.enable(N),$.viewport=new It,L[N]=$),$.matrix.fromArray(W.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray(W.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set(ee.x,ee.y,ee.width,ee.height),N===0&&(V.matrix.copy($.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),ue===!0&&V.cameras.push($)}const ce=s.enabledFeatures;if(ce&&ce.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){h=i.getBinding();const N=h.getDepthInformation(ie[0]);N&&N.isValid&&N.texture&&m.init(N,s.renderState)}if(ce&&ce.includes("camera-access")&&x){e.state.unbindTexture(),h=i.getBinding();for(let N=0;N<ie.length;N++){const W=ie[N].camera;if(W){let ee=p[W];ee||(ee=new rp,p[W]=ee);const $=h.getCameraImage(W);ee.sourceTexture=$}}}}for(let ie=0;ie<S.length;ie++){const ue=E[ie],ce=S[ie];ue!==null&&ce!==void 0&&ce.update(ue,G,c||o)}Oe&&Oe(B,G),G.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:G}),g=null}const Ze=new ap;Ze.setAnimationLoop(Ve),this.setAnimationLoop=function(B){Oe=B},this.dispose=function(){}}}const as=new si,Lb=new Ct;function Db(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,tp(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,_,M,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,_,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===cn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===cn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const _=e.get(p),M=_.envMap,v=_.envMapRotation;M&&(m.envMap.value=M,as.copy(v),as.x*=-1,as.y*=-1,as.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(as.y*=-1,as.z*=-1),m.envMapRotation.value.setFromMatrix4(Lb.makeRotationFromEuler(as)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,_,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===cn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const _=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Nb(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,M){const v=M.program;i.uniformBlockBinding(_,v)}function c(_,M){let v=s[_.id];v===void 0&&(g(_),v=u(_),s[_.id]=v,_.addEventListener("dispose",m));const S=M.program;i.updateUBOMapping(_,S);const E=e.render.frame;r[_.id]!==E&&(d(_),r[_.id]=E)}function u(_){const M=h();_.__bindingPointIndex=M;const v=n.createBuffer(),S=_.__size,E=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,S,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,v),v}function h(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return lt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const M=s[_.id],v=_.uniforms,S=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let E=0,A=v.length;E<A;E++){const D=Array.isArray(v[E])?v[E]:[v[E]];for(let b=0,T=D.length;b<T;b++){const L=D[b];if(f(L,E,b,S)===!0){const V=L.__offset,F=Array.isArray(L.value)?L.value:[L.value];let H=0;for(let z=0;z<F.length;z++){const U=F[z],k=x(U);typeof U=="number"||typeof U=="boolean"?(L.__data[0]=U,n.bufferSubData(n.UNIFORM_BUFFER,V+H,L.__data)):U.isMatrix3?(L.__data[0]=U.elements[0],L.__data[1]=U.elements[1],L.__data[2]=U.elements[2],L.__data[3]=0,L.__data[4]=U.elements[3],L.__data[5]=U.elements[4],L.__data[6]=U.elements[5],L.__data[7]=0,L.__data[8]=U.elements[6],L.__data[9]=U.elements[7],L.__data[10]=U.elements[8],L.__data[11]=0):(U.toArray(L.__data,H),H+=k.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,V,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(_,M,v,S){const E=_.value,A=M+"_"+v;if(S[A]===void 0)return typeof E=="number"||typeof E=="boolean"?S[A]=E:S[A]=E.clone(),!0;{const D=S[A];if(typeof E=="number"||typeof E=="boolean"){if(D!==E)return S[A]=E,!0}else if(D.equals(E)===!1)return D.copy(E),!0}return!1}function g(_){const M=_.uniforms;let v=0;const S=16;for(let A=0,D=M.length;A<D;A++){const b=Array.isArray(M[A])?M[A]:[M[A]];for(let T=0,L=b.length;T<L;T++){const V=b[T],F=Array.isArray(V.value)?V.value:[V.value];for(let H=0,z=F.length;H<z;H++){const U=F[H],k=x(U),q=v%S,ae=q%k.boundary,oe=q+ae;v+=ae,oe!==0&&S-oe<k.storage&&(v+=S-oe),V.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=v,v+=k.storage}}}const E=v%S;return E>0&&(v+=S-E),_.__size=v,_.__cache={},this}function x(_){const M={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(M.boundary=4,M.storage=4):_.isVector2?(M.boundary=8,M.storage=8):_.isVector3||_.isColor?(M.boundary=16,M.storage=12):_.isVector4?(M.boundary=16,M.storage=16):_.isMatrix3?(M.boundary=48,M.storage=48):_.isMatrix4?(M.boundary=64,M.storage=64):_.isTexture?Ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ke("WebGLRenderer: Unsupported uniform value type.",_),M}function m(_){const M=_.target;M.removeEventListener("dispose",m);const v=o.indexOf(M.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(const _ in s)n.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}const Fb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Bn=null;function Ub(){return Bn===null&&(Bn=new R_(Fb,16,16,or,Pi),Bn.name="DFG_LUT",Bn.minFilter=Xt,Bn.magFilter=Xt,Bn.wrapS=bi,Bn.wrapT=bi,Bn.generateMipmaps=!1,Bn.needsUpdate=!0),Bn}class Ob{constructor(e={}){const{canvas:t=n_(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:f=mn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const x=f,m=new Set([ou,ru,su]),p=new Set([mn,ii,qr,jr,nu,iu]),_=new Uint32Array(4),M=new Int32Array(4);let v=null,S=null;const E=[],A=[];let D=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Jn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let T=!1;this._outputColorSpace=Sn;let L=0,V=0,F=null,H=-1,z=null;const U=new It,k=new It;let q=null;const ae=new rt(0);let oe=0,fe=t.width,ge=t.height,Oe=1,Ve=null,Ze=null;const B=new It(0,0,fe,ge),G=new It(0,0,fe,ge);let ie=!1;const ue=new fu;let ce=!1,ve=!1;const I=new Ct,N=new Q,W=new It,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $=!1;function J(){return F===null?Oe:1}let P=i;function de(R,j){return t.getContext(R,j)}try{const R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${eu}`),t.addEventListener("webglcontextlost",Ye,!1),t.addEventListener("webglcontextrestored",Mt,!1),t.addEventListener("webglcontextcreationerror",mt,!1),P===null){const j="webgl2";if(P=de(j,R),P===null)throw de(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw lt("WebGLRenderer: "+R.message),R}let le,se,he,C,y,O,Z,re,Y,Te,xe,Re,ze,_e,Se,Me,Pe,Ee,je,X,Le,be,Ne,ye;function me(){le=new US(P),le.init(),be=new Ab(P,le),se=new AS(P,le,e,be),he=new wb(P,le),se.reversedDepthBuffer&&d&&he.buffers.depth.setReversed(!0),C=new zS(P),y=new ub,O=new Tb(P,le,he,y,se,be,C),Z=new RS(b),re=new FS(b),Y=new H_(P),Ne=new wS(P,Y),Te=new OS(P,Y,C,Ne),xe=new kS(P,Te,Y,C),je=new VS(P,se,O),Me=new CS(y),Re=new cb(b,Z,re,le,se,Ne,Me),ze=new Db(b,y),_e=new db,Se=new _b(le),Ee=new ES(b,Z,re,he,xe,g,l),Pe=new bb(b,xe,se),ye=new Nb(P,C,se,he),X=new TS(P,le,C),Le=new BS(P,le,C),C.programs=Re.programs,b.capabilities=se,b.extensions=le,b.properties=y,b.renderLists=_e,b.shadowMap=Pe,b.state=he,b.info=C}me(),x!==mn&&(D=new HS(x,t.width,t.height,s,r));const we=new Ib(b,P);this.xr=we,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const R=le.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=le.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Oe},this.setPixelRatio=function(R){R!==void 0&&(Oe=R,this.setSize(fe,ge,!1))},this.getSize=function(R){return R.set(fe,ge)},this.setSize=function(R,j,ne=!0){if(we.isPresenting){Ke("WebGLRenderer: Can't change size while VR device is presenting.");return}fe=R,ge=j,t.width=Math.floor(R*Oe),t.height=Math.floor(j*Oe),ne===!0&&(t.style.width=R+"px",t.style.height=j+"px"),D!==null&&D.setSize(t.width,t.height),this.setViewport(0,0,R,j)},this.getDrawingBufferSize=function(R){return R.set(fe*Oe,ge*Oe).floor()},this.setDrawingBufferSize=function(R,j,ne){fe=R,ge=j,Oe=ne,t.width=Math.floor(R*ne),t.height=Math.floor(j*ne),this.setViewport(0,0,R,j)},this.setEffects=function(R){if(x===mn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let j=0;j<R.length;j++)if(R[j].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(U)},this.getViewport=function(R){return R.copy(B)},this.setViewport=function(R,j,ne,te){R.isVector4?B.set(R.x,R.y,R.z,R.w):B.set(R,j,ne,te),he.viewport(U.copy(B).multiplyScalar(Oe).round())},this.getScissor=function(R){return R.copy(G)},this.setScissor=function(R,j,ne,te){R.isVector4?G.set(R.x,R.y,R.z,R.w):G.set(R,j,ne,te),he.scissor(k.copy(G).multiplyScalar(Oe).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(R){he.setScissorTest(ie=R)},this.setOpaqueSort=function(R){Ve=R},this.setTransparentSort=function(R){Ze=R},this.getClearColor=function(R){return R.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor(...arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha(...arguments)},this.clear=function(R=!0,j=!0,ne=!0){let te=0;if(R){let K=!1;if(F!==null){const Ae=F.texture.format;K=m.has(Ae)}if(K){const Ae=F.texture.type,Fe=p.has(Ae),Ie=Ee.getClearColor(),Be=Ee.getClearAlpha(),ke=Ie.r,Xe=Ie.g,He=Ie.b;Fe?(_[0]=ke,_[1]=Xe,_[2]=He,_[3]=Be,P.clearBufferuiv(P.COLOR,0,_)):(M[0]=ke,M[1]=Xe,M[2]=He,M[3]=Be,P.clearBufferiv(P.COLOR,0,M))}else te|=P.COLOR_BUFFER_BIT}j&&(te|=P.DEPTH_BUFFER_BIT),ne&&(te|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ye,!1),t.removeEventListener("webglcontextrestored",Mt,!1),t.removeEventListener("webglcontextcreationerror",mt,!1),Ee.dispose(),_e.dispose(),Se.dispose(),y.dispose(),Z.dispose(),re.dispose(),xe.dispose(),Ne.dispose(),ye.dispose(),Re.dispose(),we.dispose(),we.removeEventListener("sessionstart",_u),we.removeEventListener("sessionend",vu),Ji.stop()};function Ye(R){R.preventDefault(),dh("WebGLRenderer: Context Lost."),T=!0}function Mt(){dh("WebGLRenderer: Context Restored."),T=!1;const R=C.autoReset,j=Pe.enabled,ne=Pe.autoUpdate,te=Pe.needsUpdate,K=Pe.type;me(),C.autoReset=R,Pe.enabled=j,Pe.autoUpdate=ne,Pe.needsUpdate=te,Pe.type=K}function mt(R){lt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Un(R){const j=R.target;j.removeEventListener("dispose",Un),oi(j)}function oi(R){Sp(R),y.remove(R)}function Sp(R){const j=y.get(R).programs;j!==void 0&&(j.forEach(function(ne){Re.releaseProgram(ne)}),R.isShaderMaterial&&Re.releaseShaderCache(R))}this.renderBufferDirect=function(R,j,ne,te,K,Ae){j===null&&(j=ee);const Fe=K.isMesh&&K.matrixWorld.determinant()<0,Ie=bp(R,j,ne,te,K);he.setMaterial(te,Fe);let Be=ne.index,ke=1;if(te.wireframe===!0){if(Be=Te.getWireframeAttribute(ne),Be===void 0)return;ke=2}const Xe=ne.drawRange,He=ne.attributes.position;let nt=Xe.start*ke,_t=(Xe.start+Xe.count)*ke;Ae!==null&&(nt=Math.max(nt,Ae.start*ke),_t=Math.min(_t,(Ae.start+Ae.count)*ke)),Be!==null?(nt=Math.max(nt,0),_t=Math.min(_t,Be.count)):He!=null&&(nt=Math.max(nt,0),_t=Math.min(_t,He.count));const Rt=_t-nt;if(Rt<0||Rt===1/0)return;Ne.setup(K,te,Ie,ne,Be);let Pt,vt=X;if(Be!==null&&(Pt=Y.get(Be),vt=Le,vt.setIndex(Pt)),K.isMesh)te.wireframe===!0?(he.setLineWidth(te.wireframeLinewidth*J()),vt.setMode(P.LINES)):vt.setMode(P.TRIANGLES);else if(K.isLine){let We=te.linewidth;We===void 0&&(We=1),he.setLineWidth(We*J()),K.isLineSegments?vt.setMode(P.LINES):K.isLineLoop?vt.setMode(P.LINE_LOOP):vt.setMode(P.LINE_STRIP)}else K.isPoints?vt.setMode(P.POINTS):K.isSprite&&vt.setMode(P.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)$r("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),vt.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(le.get("WEBGL_multi_draw"))vt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const We=K._multiDrawStarts,gt=K._multiDrawCounts,ut=K._multiDrawCount,un=Be?Y.get(Be).bytesPerElement:1,Ts=y.get(te).currentProgram.getUniforms();for(let hn=0;hn<ut;hn++)Ts.setValue(P,"_gl_DrawID",hn),vt.render(We[hn]/un,gt[hn])}else if(K.isInstancedMesh)vt.renderInstances(nt,Rt,K.count);else if(ne.isInstancedBufferGeometry){const We=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,gt=Math.min(ne.instanceCount,We);vt.renderInstances(nt,Rt,gt)}else vt.render(nt,Rt)};function xu(R,j,ne){R.transparent===!0&&R.side===qn&&R.forceSinglePass===!1?(R.side=cn,R.needsUpdate=!0,oo(R,j,ne),R.side=Zi,R.needsUpdate=!0,oo(R,j,ne),R.side=qn):oo(R,j,ne)}this.compile=function(R,j,ne=null){ne===null&&(ne=R),S=Se.get(ne),S.init(j),A.push(S),ne.traverseVisible(function(K){K.isLight&&K.layers.test(j.layers)&&(S.pushLight(K),K.castShadow&&S.pushShadow(K))}),R!==ne&&R.traverseVisible(function(K){K.isLight&&K.layers.test(j.layers)&&(S.pushLight(K),K.castShadow&&S.pushShadow(K))}),S.setupLights();const te=new Set;return R.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Ae=K.material;if(Ae)if(Array.isArray(Ae))for(let Fe=0;Fe<Ae.length;Fe++){const Ie=Ae[Fe];xu(Ie,ne,K),te.add(Ie)}else xu(Ae,ne,K),te.add(Ae)}),S=A.pop(),te},this.compileAsync=function(R,j,ne=null){const te=this.compile(R,j,ne);return new Promise(K=>{function Ae(){if(te.forEach(function(Fe){y.get(Fe).currentProgram.isReady()&&te.delete(Fe)}),te.size===0){K(R);return}setTimeout(Ae,10)}le.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let Aa=null;function Mp(R){Aa&&Aa(R)}function _u(){Ji.stop()}function vu(){Ji.start()}const Ji=new ap;Ji.setAnimationLoop(Mp),typeof self<"u"&&Ji.setContext(self),this.setAnimationLoop=function(R){Aa=R,we.setAnimationLoop(R),R===null?Ji.stop():Ji.start()},we.addEventListener("sessionstart",_u),we.addEventListener("sessionend",vu),this.render=function(R,j){if(j!==void 0&&j.isCamera!==!0){lt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;const ne=we.enabled===!0&&we.isPresenting===!0,te=D!==null&&(F===null||ne)&&D.begin(b,F);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(we.cameraAutoUpdate===!0&&we.updateCamera(j),j=we.getCamera()),R.isScene===!0&&R.onBeforeRender(b,R,j,F),S=Se.get(R,A.length),S.init(j),A.push(S),I.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),ue.setFromProjectionMatrix(I,Yn,j.reversedDepth),ve=this.localClippingEnabled,ce=Me.init(this.clippingPlanes,ve),v=_e.get(R,E.length),v.init(),E.push(v),we.enabled===!0&&we.isPresenting===!0){const Fe=b.xr.getDepthSensingMesh();Fe!==null&&Ca(Fe,j,-1/0,b.sortObjects)}Ca(R,j,0,b.sortObjects),v.finish(),b.sortObjects===!0&&v.sort(Ve,Ze),$=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,$&&Ee.addToRenderList(v,R),this.info.render.frame++,ce===!0&&Me.beginShadows();const K=S.state.shadowsArray;if(Pe.render(K,R,j),ce===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset(),(te&&D.hasRenderPass())===!1){const Fe=v.opaque,Ie=v.transmissive;if(S.setupLights(),j.isArrayCamera){const Be=j.cameras;if(Ie.length>0)for(let ke=0,Xe=Be.length;ke<Xe;ke++){const He=Be[ke];Su(Fe,Ie,R,He)}$&&Ee.render(R);for(let ke=0,Xe=Be.length;ke<Xe;ke++){const He=Be[ke];yu(v,R,He,He.viewport)}}else Ie.length>0&&Su(Fe,Ie,R,j),$&&Ee.render(R),yu(v,R,j)}F!==null&&V===0&&(O.updateMultisampleRenderTarget(F),O.updateRenderTargetMipmap(F)),te&&D.end(b),R.isScene===!0&&R.onAfterRender(b,R,j),Ne.resetDefaultState(),H=-1,z=null,A.pop(),A.length>0?(S=A[A.length-1],ce===!0&&Me.setGlobalState(b.clippingPlanes,S.state.camera)):S=null,E.pop(),E.length>0?v=E[E.length-1]:v=null};function Ca(R,j,ne,te){if(R.visible===!1)return;if(R.layers.test(j.layers)){if(R.isGroup)ne=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(j);else if(R.isLight)S.pushLight(R),R.castShadow&&S.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ue.intersectsSprite(R)){te&&W.setFromMatrixPosition(R.matrixWorld).applyMatrix4(I);const Fe=xe.update(R),Ie=R.material;Ie.visible&&v.push(R,Fe,Ie,ne,W.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ue.intersectsObject(R))){const Fe=xe.update(R),Ie=R.material;if(te&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),W.copy(R.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),W.copy(Fe.boundingSphere.center)),W.applyMatrix4(R.matrixWorld).applyMatrix4(I)),Array.isArray(Ie)){const Be=Fe.groups;for(let ke=0,Xe=Be.length;ke<Xe;ke++){const He=Be[ke],nt=Ie[He.materialIndex];nt&&nt.visible&&v.push(R,Fe,nt,ne,W.z,He)}}else Ie.visible&&v.push(R,Fe,Ie,ne,W.z,null)}}const Ae=R.children;for(let Fe=0,Ie=Ae.length;Fe<Ie;Fe++)Ca(Ae[Fe],j,ne,te)}function yu(R,j,ne,te){const{opaque:K,transmissive:Ae,transparent:Fe}=R;S.setupLightsView(ne),ce===!0&&Me.setGlobalState(b.clippingPlanes,ne),te&&he.viewport(U.copy(te)),K.length>0&&ro(K,j,ne),Ae.length>0&&ro(Ae,j,ne),Fe.length>0&&ro(Fe,j,ne),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function Su(R,j,ne,te){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[te.id]===void 0){const nt=le.has("EXT_color_buffer_half_float")||le.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[te.id]=new Qn(1,1,{generateMipmaps:!0,type:nt?Pi:mn,minFilter:gs,samples:se.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ct.workingColorSpace})}const Ae=S.state.transmissionRenderTarget[te.id],Fe=te.viewport||U;Ae.setSize(Fe.z*b.transmissionResolutionScale,Fe.w*b.transmissionResolutionScale);const Ie=b.getRenderTarget(),Be=b.getActiveCubeFace(),ke=b.getActiveMipmapLevel();b.setRenderTarget(Ae),b.getClearColor(ae),oe=b.getClearAlpha(),oe<1&&b.setClearColor(16777215,.5),b.clear(),$&&Ee.render(ne);const Xe=b.toneMapping;b.toneMapping=Jn;const He=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),S.setupLightsView(te),ce===!0&&Me.setGlobalState(b.clippingPlanes,te),ro(R,ne,te),O.updateMultisampleRenderTarget(Ae),O.updateRenderTargetMipmap(Ae),le.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let _t=0,Rt=j.length;_t<Rt;_t++){const Pt=j[_t],{object:vt,geometry:We,material:gt,group:ut}=Pt;if(gt.side===qn&&vt.layers.test(te.layers)){const un=gt.side;gt.side=cn,gt.needsUpdate=!0,Mu(vt,ne,te,We,gt,ut),gt.side=un,gt.needsUpdate=!0,nt=!0}}nt===!0&&(O.updateMultisampleRenderTarget(Ae),O.updateRenderTargetMipmap(Ae))}b.setRenderTarget(Ie,Be,ke),b.setClearColor(ae,oe),He!==void 0&&(te.viewport=He),b.toneMapping=Xe}function ro(R,j,ne){const te=j.isScene===!0?j.overrideMaterial:null;for(let K=0,Ae=R.length;K<Ae;K++){const Fe=R[K],{object:Ie,geometry:Be,group:ke}=Fe;let Xe=Fe.material;Xe.allowOverride===!0&&te!==null&&(Xe=te),Ie.layers.test(ne.layers)&&Mu(Ie,j,ne,Be,Xe,ke)}}function Mu(R,j,ne,te,K,Ae){R.onBeforeRender(b,j,ne,te,K,Ae),R.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),K.onBeforeRender(b,j,ne,te,R,Ae),K.transparent===!0&&K.side===qn&&K.forceSinglePass===!1?(K.side=cn,K.needsUpdate=!0,b.renderBufferDirect(ne,j,te,K,R,Ae),K.side=Zi,K.needsUpdate=!0,b.renderBufferDirect(ne,j,te,K,R,Ae),K.side=qn):b.renderBufferDirect(ne,j,te,K,R,Ae),R.onAfterRender(b,j,ne,te,K,Ae)}function oo(R,j,ne){j.isScene!==!0&&(j=ee);const te=y.get(R),K=S.state.lights,Ae=S.state.shadowsArray,Fe=K.state.version,Ie=Re.getParameters(R,K.state,Ae,j,ne),Be=Re.getProgramCacheKey(Ie);let ke=te.programs;te.environment=R.isMeshStandardMaterial?j.environment:null,te.fog=j.fog,te.envMap=(R.isMeshStandardMaterial?re:Z).get(R.envMap||te.environment),te.envMapRotation=te.environment!==null&&R.envMap===null?j.environmentRotation:R.envMapRotation,ke===void 0&&(R.addEventListener("dispose",Un),ke=new Map,te.programs=ke);let Xe=ke.get(Be);if(Xe!==void 0){if(te.currentProgram===Xe&&te.lightsStateVersion===Fe)return Eu(R,Ie),Xe}else Ie.uniforms=Re.getUniforms(R),R.onBeforeCompile(Ie,b),Xe=Re.acquireProgram(Ie,Be),ke.set(Be,Xe),te.uniforms=Ie.uniforms;const He=te.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(He.clippingPlanes=Me.uniform),Eu(R,Ie),te.needsLights=wp(R),te.lightsStateVersion=Fe,te.needsLights&&(He.ambientLightColor.value=K.state.ambient,He.lightProbe.value=K.state.probe,He.directionalLights.value=K.state.directional,He.directionalLightShadows.value=K.state.directionalShadow,He.spotLights.value=K.state.spot,He.spotLightShadows.value=K.state.spotShadow,He.rectAreaLights.value=K.state.rectArea,He.ltc_1.value=K.state.rectAreaLTC1,He.ltc_2.value=K.state.rectAreaLTC2,He.pointLights.value=K.state.point,He.pointLightShadows.value=K.state.pointShadow,He.hemisphereLights.value=K.state.hemi,He.directionalShadowMap.value=K.state.directionalShadowMap,He.directionalShadowMatrix.value=K.state.directionalShadowMatrix,He.spotShadowMap.value=K.state.spotShadowMap,He.spotLightMatrix.value=K.state.spotLightMatrix,He.spotLightMap.value=K.state.spotLightMap,He.pointShadowMap.value=K.state.pointShadowMap,He.pointShadowMatrix.value=K.state.pointShadowMatrix),te.currentProgram=Xe,te.uniformsList=null,Xe}function bu(R){if(R.uniformsList===null){const j=R.currentProgram.getUniforms();R.uniformsList=Ko.seqWithValue(j.seq,R.uniforms)}return R.uniformsList}function Eu(R,j){const ne=y.get(R);ne.outputColorSpace=j.outputColorSpace,ne.batching=j.batching,ne.batchingColor=j.batchingColor,ne.instancing=j.instancing,ne.instancingColor=j.instancingColor,ne.instancingMorph=j.instancingMorph,ne.skinning=j.skinning,ne.morphTargets=j.morphTargets,ne.morphNormals=j.morphNormals,ne.morphColors=j.morphColors,ne.morphTargetsCount=j.morphTargetsCount,ne.numClippingPlanes=j.numClippingPlanes,ne.numIntersection=j.numClipIntersection,ne.vertexAlphas=j.vertexAlphas,ne.vertexTangents=j.vertexTangents,ne.toneMapping=j.toneMapping}function bp(R,j,ne,te,K){j.isScene!==!0&&(j=ee),O.resetTextureUnits();const Ae=j.fog,Fe=te.isMeshStandardMaterial?j.environment:null,Ie=F===null?b.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:ar,Be=(te.isMeshStandardMaterial?re:Z).get(te.envMap||Fe),ke=te.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,Xe=!!ne.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),He=!!ne.morphAttributes.position,nt=!!ne.morphAttributes.normal,_t=!!ne.morphAttributes.color;let Rt=Jn;te.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Rt=b.toneMapping);const Pt=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,vt=Pt!==void 0?Pt.length:0,We=y.get(te),gt=S.state.lights;if(ce===!0&&(ve===!0||R!==z)){const Kt=R===z&&te.id===H;Me.setState(te,R,Kt)}let ut=!1;te.version===We.__version?(We.needsLights&&We.lightsStateVersion!==gt.state.version||We.outputColorSpace!==Ie||K.isBatchedMesh&&We.batching===!1||!K.isBatchedMesh&&We.batching===!0||K.isBatchedMesh&&We.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&We.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&We.instancing===!1||!K.isInstancedMesh&&We.instancing===!0||K.isSkinnedMesh&&We.skinning===!1||!K.isSkinnedMesh&&We.skinning===!0||K.isInstancedMesh&&We.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&We.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&We.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&We.instancingMorph===!1&&K.morphTexture!==null||We.envMap!==Be||te.fog===!0&&We.fog!==Ae||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==Me.numPlanes||We.numIntersection!==Me.numIntersection)||We.vertexAlphas!==ke||We.vertexTangents!==Xe||We.morphTargets!==He||We.morphNormals!==nt||We.morphColors!==_t||We.toneMapping!==Rt||We.morphTargetsCount!==vt)&&(ut=!0):(ut=!0,We.__version=te.version);let un=We.currentProgram;ut===!0&&(un=oo(te,j,K));let Ts=!1,hn=!1,pr=!1;const bt=un.getUniforms(),sn=We.uniforms;if(he.useProgram(un.program)&&(Ts=!0,hn=!0,pr=!0),te.id!==H&&(H=te.id,hn=!0),Ts||z!==R){he.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),bt.setValue(P,"projectionMatrix",R.projectionMatrix),bt.setValue(P,"viewMatrix",R.matrixWorldInverse);const rn=bt.map.cameraPosition;rn!==void 0&&rn.setValue(P,N.setFromMatrixPosition(R.matrixWorld)),se.logarithmicDepthBuffer&&bt.setValue(P,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&bt.setValue(P,"isOrthographic",R.isOrthographicCamera===!0),z!==R&&(z=R,hn=!0,pr=!0)}if(We.needsLights&&(gt.state.directionalShadowMap.length>0&&bt.setValue(P,"directionalShadowMap",gt.state.directionalShadowMap,O),gt.state.spotShadowMap.length>0&&bt.setValue(P,"spotShadowMap",gt.state.spotShadowMap,O),gt.state.pointShadowMap.length>0&&bt.setValue(P,"pointShadowMap",gt.state.pointShadowMap,O)),K.isSkinnedMesh){bt.setOptional(P,K,"bindMatrix"),bt.setOptional(P,K,"bindMatrixInverse");const Kt=K.skeleton;Kt&&(Kt.boneTexture===null&&Kt.computeBoneTexture(),bt.setValue(P,"boneTexture",Kt.boneTexture,O))}K.isBatchedMesh&&(bt.setOptional(P,K,"batchingTexture"),bt.setValue(P,"batchingTexture",K._matricesTexture,O),bt.setOptional(P,K,"batchingIdTexture"),bt.setValue(P,"batchingIdTexture",K._indirectTexture,O),bt.setOptional(P,K,"batchingColorTexture"),K._colorsTexture!==null&&bt.setValue(P,"batchingColorTexture",K._colorsTexture,O));const vn=ne.morphAttributes;if((vn.position!==void 0||vn.normal!==void 0||vn.color!==void 0)&&je.update(K,ne,un),(hn||We.receiveShadow!==K.receiveShadow)&&(We.receiveShadow=K.receiveShadow,bt.setValue(P,"receiveShadow",K.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(sn.envMap.value=Be,sn.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),te.isMeshStandardMaterial&&te.envMap===null&&j.environment!==null&&(sn.envMapIntensity.value=j.environmentIntensity),sn.dfgLUT!==void 0&&(sn.dfgLUT.value=Ub()),hn&&(bt.setValue(P,"toneMappingExposure",b.toneMappingExposure),We.needsLights&&Ep(sn,pr),Ae&&te.fog===!0&&ze.refreshFogUniforms(sn,Ae),ze.refreshMaterialUniforms(sn,te,Oe,ge,S.state.transmissionRenderTarget[R.id]),Ko.upload(P,bu(We),sn,O)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Ko.upload(P,bu(We),sn,O),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&bt.setValue(P,"center",K.center),bt.setValue(P,"modelViewMatrix",K.modelViewMatrix),bt.setValue(P,"normalMatrix",K.normalMatrix),bt.setValue(P,"modelMatrix",K.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const Kt=te.uniformsGroups;for(let rn=0,Ra=Kt.length;rn<Ra;rn++){const Qi=Kt[rn];ye.update(Qi,un),ye.bind(Qi,un)}}return un}function Ep(R,j){R.ambientLightColor.needsUpdate=j,R.lightProbe.needsUpdate=j,R.directionalLights.needsUpdate=j,R.directionalLightShadows.needsUpdate=j,R.pointLights.needsUpdate=j,R.pointLightShadows.needsUpdate=j,R.spotLights.needsUpdate=j,R.spotLightShadows.needsUpdate=j,R.rectAreaLights.needsUpdate=j,R.hemisphereLights.needsUpdate=j}function wp(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(R,j,ne){const te=y.get(R);te.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),y.get(R.texture).__webglTexture=j,y.get(R.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:ne,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,j){const ne=y.get(R);ne.__webglFramebuffer=j,ne.__useDefaultFramebuffer=j===void 0};const Tp=P.createFramebuffer();this.setRenderTarget=function(R,j=0,ne=0){F=R,L=j,V=ne;let te=null,K=!1,Ae=!1;if(R){const Ie=y.get(R);if(Ie.__useDefaultFramebuffer!==void 0){he.bindFramebuffer(P.FRAMEBUFFER,Ie.__webglFramebuffer),U.copy(R.viewport),k.copy(R.scissor),q=R.scissorTest,he.viewport(U),he.scissor(k),he.setScissorTest(q),H=-1;return}else if(Ie.__webglFramebuffer===void 0)O.setupRenderTarget(R);else if(Ie.__hasExternalTextures)O.rebindTextures(R,y.get(R.texture).__webglTexture,y.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Xe=R.depthTexture;if(Ie.__boundDepthTexture!==Xe){if(Xe!==null&&y.has(Xe)&&(R.width!==Xe.image.width||R.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(R)}}const Be=R.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Ae=!0);const ke=y.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ke[j])?te=ke[j][ne]:te=ke[j],K=!0):R.samples>0&&O.useMultisampledRTT(R)===!1?te=y.get(R).__webglMultisampledFramebuffer:Array.isArray(ke)?te=ke[ne]:te=ke,U.copy(R.viewport),k.copy(R.scissor),q=R.scissorTest}else U.copy(B).multiplyScalar(Oe).floor(),k.copy(G).multiplyScalar(Oe).floor(),q=ie;if(ne!==0&&(te=Tp),he.bindFramebuffer(P.FRAMEBUFFER,te)&&he.drawBuffers(R,te),he.viewport(U),he.scissor(k),he.setScissorTest(q),K){const Ie=y.get(R.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ie.__webglTexture,ne)}else if(Ae){const Ie=j;for(let Be=0;Be<R.textures.length;Be++){const ke=y.get(R.textures[Be]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Be,ke.__webglTexture,ne,Ie)}}else if(R!==null&&ne!==0){const Ie=y.get(R.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ie.__webglTexture,ne)}H=-1},this.readRenderTargetPixels=function(R,j,ne,te,K,Ae,Fe,Ie=0){if(!(R&&R.isWebGLRenderTarget)){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=y.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Fe!==void 0&&(Be=Be[Fe]),Be){he.bindFramebuffer(P.FRAMEBUFFER,Be);try{const ke=R.textures[Ie],Xe=ke.format,He=ke.type;if(!se.textureFormatReadable(Xe)){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!se.textureTypeReadable(He)){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=R.width-te&&ne>=0&&ne<=R.height-K&&(R.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Ie),P.readPixels(j,ne,te,K,be.convert(Xe),be.convert(He),Ae))}finally{const ke=F!==null?y.get(F).__webglFramebuffer:null;he.bindFramebuffer(P.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(R,j,ne,te,K,Ae,Fe,Ie=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=y.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Fe!==void 0&&(Be=Be[Fe]),Be)if(j>=0&&j<=R.width-te&&ne>=0&&ne<=R.height-K){he.bindFramebuffer(P.FRAMEBUFFER,Be);const ke=R.textures[Ie],Xe=ke.format,He=ke.type;if(!se.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!se.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const nt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,nt),P.bufferData(P.PIXEL_PACK_BUFFER,Ae.byteLength,P.STREAM_READ),R.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Ie),P.readPixels(j,ne,te,K,be.convert(Xe),be.convert(He),0);const _t=F!==null?y.get(F).__webglFramebuffer:null;he.bindFramebuffer(P.FRAMEBUFFER,_t);const Rt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await i_(P,Rt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,nt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,Ae),P.deleteBuffer(nt),P.deleteSync(Rt),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,j=null,ne=0){const te=Math.pow(2,-ne),K=Math.floor(R.image.width*te),Ae=Math.floor(R.image.height*te),Fe=j!==null?j.x:0,Ie=j!==null?j.y:0;O.setTexture2D(R,0),P.copyTexSubImage2D(P.TEXTURE_2D,ne,0,0,Fe,Ie,K,Ae),he.unbindTexture()};const Ap=P.createFramebuffer(),Cp=P.createFramebuffer();this.copyTextureToTexture=function(R,j,ne=null,te=null,K=0,Ae=null){Ae===null&&(K!==0?($r("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ae=K,K=0):Ae=0);let Fe,Ie,Be,ke,Xe,He,nt,_t,Rt;const Pt=R.isCompressedTexture?R.mipmaps[Ae]:R.image;if(ne!==null)Fe=ne.max.x-ne.min.x,Ie=ne.max.y-ne.min.y,Be=ne.isBox3?ne.max.z-ne.min.z:1,ke=ne.min.x,Xe=ne.min.y,He=ne.isBox3?ne.min.z:0;else{const vn=Math.pow(2,-K);Fe=Math.floor(Pt.width*vn),Ie=Math.floor(Pt.height*vn),R.isDataArrayTexture?Be=Pt.depth:R.isData3DTexture?Be=Math.floor(Pt.depth*vn):Be=1,ke=0,Xe=0,He=0}te!==null?(nt=te.x,_t=te.y,Rt=te.z):(nt=0,_t=0,Rt=0);const vt=be.convert(j.format),We=be.convert(j.type);let gt;j.isData3DTexture?(O.setTexture3D(j,0),gt=P.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(O.setTexture2DArray(j,0),gt=P.TEXTURE_2D_ARRAY):(O.setTexture2D(j,0),gt=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,j.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,j.unpackAlignment);const ut=P.getParameter(P.UNPACK_ROW_LENGTH),un=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Ts=P.getParameter(P.UNPACK_SKIP_PIXELS),hn=P.getParameter(P.UNPACK_SKIP_ROWS),pr=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Pt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Pt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ke),P.pixelStorei(P.UNPACK_SKIP_ROWS,Xe),P.pixelStorei(P.UNPACK_SKIP_IMAGES,He);const bt=R.isDataArrayTexture||R.isData3DTexture,sn=j.isDataArrayTexture||j.isData3DTexture;if(R.isDepthTexture){const vn=y.get(R),Kt=y.get(j),rn=y.get(vn.__renderTarget),Ra=y.get(Kt.__renderTarget);he.bindFramebuffer(P.READ_FRAMEBUFFER,rn.__webglFramebuffer),he.bindFramebuffer(P.DRAW_FRAMEBUFFER,Ra.__webglFramebuffer);for(let Qi=0;Qi<Be;Qi++)bt&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,y.get(R).__webglTexture,K,He+Qi),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,y.get(j).__webglTexture,Ae,Rt+Qi)),P.blitFramebuffer(ke,Xe,Fe,Ie,nt,_t,Fe,Ie,P.DEPTH_BUFFER_BIT,P.NEAREST);he.bindFramebuffer(P.READ_FRAMEBUFFER,null),he.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(K!==0||R.isRenderTargetTexture||y.has(R)){const vn=y.get(R),Kt=y.get(j);he.bindFramebuffer(P.READ_FRAMEBUFFER,Ap),he.bindFramebuffer(P.DRAW_FRAMEBUFFER,Cp);for(let rn=0;rn<Be;rn++)bt?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,vn.__webglTexture,K,He+rn):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,vn.__webglTexture,K),sn?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Kt.__webglTexture,Ae,Rt+rn):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Kt.__webglTexture,Ae),K!==0?P.blitFramebuffer(ke,Xe,Fe,Ie,nt,_t,Fe,Ie,P.COLOR_BUFFER_BIT,P.NEAREST):sn?P.copyTexSubImage3D(gt,Ae,nt,_t,Rt+rn,ke,Xe,Fe,Ie):P.copyTexSubImage2D(gt,Ae,nt,_t,ke,Xe,Fe,Ie);he.bindFramebuffer(P.READ_FRAMEBUFFER,null),he.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else sn?R.isDataTexture||R.isData3DTexture?P.texSubImage3D(gt,Ae,nt,_t,Rt,Fe,Ie,Be,vt,We,Pt.data):j.isCompressedArrayTexture?P.compressedTexSubImage3D(gt,Ae,nt,_t,Rt,Fe,Ie,Be,vt,Pt.data):P.texSubImage3D(gt,Ae,nt,_t,Rt,Fe,Ie,Be,vt,We,Pt):R.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,Ae,nt,_t,Fe,Ie,vt,We,Pt.data):R.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,Ae,nt,_t,Pt.width,Pt.height,vt,Pt.data):P.texSubImage2D(P.TEXTURE_2D,Ae,nt,_t,Fe,Ie,vt,We,Pt);P.pixelStorei(P.UNPACK_ROW_LENGTH,ut),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,un),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ts),P.pixelStorei(P.UNPACK_SKIP_ROWS,hn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,pr),Ae===0&&j.generateMipmaps&&P.generateMipmap(gt),he.unbindTexture()},this.initRenderTarget=function(R){y.get(R).__webglFramebuffer===void 0&&O.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?O.setTextureCube(R,0):R.isData3DTexture?O.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?O.setTexture2DArray(R,0):O.setTexture2D(R,0),he.unbindTexture()},this.resetState=function(){L=0,V=0,F=null,he.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=ct._getUnpackColorSpace()}}class Ln{constructor(e){e===void 0&&(e=[0,0,0,0,0,0,0,0,0]),this.elements=e}identity(){const e=this.elements;e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1}setZero(){const e=this.elements;e[0]=0,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=0,e[6]=0,e[7]=0,e[8]=0}setTrace(e){const t=this.elements;t[0]=e.x,t[4]=e.y,t[8]=e.z}getTrace(e){e===void 0&&(e=new w);const t=this.elements;return e.x=t[0],e.y=t[4],e.z=t[8],e}vmult(e,t){t===void 0&&(t=new w);const i=this.elements,s=e.x,r=e.y,o=e.z;return t.x=i[0]*s+i[1]*r+i[2]*o,t.y=i[3]*s+i[4]*r+i[5]*o,t.z=i[6]*s+i[7]*r+i[8]*o,t}smult(e){for(let t=0;t<this.elements.length;t++)this.elements[t]*=e}mmult(e,t){t===void 0&&(t=new Ln);const i=this.elements,s=e.elements,r=t.elements,o=i[0],a=i[1],l=i[2],c=i[3],u=i[4],h=i[5],d=i[6],f=i[7],g=i[8],x=s[0],m=s[1],p=s[2],_=s[3],M=s[4],v=s[5],S=s[6],E=s[7],A=s[8];return r[0]=o*x+a*_+l*S,r[1]=o*m+a*M+l*E,r[2]=o*p+a*v+l*A,r[3]=c*x+u*_+h*S,r[4]=c*m+u*M+h*E,r[5]=c*p+u*v+h*A,r[6]=d*x+f*_+g*S,r[7]=d*m+f*M+g*E,r[8]=d*p+f*v+g*A,t}scale(e,t){t===void 0&&(t=new Ln);const i=this.elements,s=t.elements;for(let r=0;r!==3;r++)s[3*r+0]=e.x*i[3*r+0],s[3*r+1]=e.y*i[3*r+1],s[3*r+2]=e.z*i[3*r+2];return t}solve(e,t){t===void 0&&(t=new w);const i=3,s=4,r=[];let o,a;for(o=0;o<i*s;o++)r.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)r[o+s*a]=this.elements[o+3*a];r[3+4*0]=e.x,r[3+4*1]=e.y,r[3+4*2]=e.z;let l=3;const c=l;let u;const h=4;let d;do{if(o=c-l,r[o+s*o]===0){for(a=o+1;a<c;a++)if(r[o+s*a]!==0){u=h;do d=h-u,r[d+s*o]+=r[d+s*a];while(--u);break}}if(r[o+s*o]!==0)for(a=o+1;a<c;a++){const f=r[o+s*a]/r[o+s*o];u=h;do d=h-u,r[d+s*a]=d<=o?0:r[d+s*a]-r[d+s*o]*f;while(--u)}}while(--l);if(t.z=r[2*s+3]/r[2*s+2],t.y=(r[1*s+3]-r[1*s+2]*t.z)/r[1*s+1],t.x=(r[0*s+3]-r[0*s+2]*t.z-r[0*s+1]*t.y)/r[0*s+0],isNaN(t.x)||isNaN(t.y)||isNaN(t.z)||t.x===1/0||t.y===1/0||t.z===1/0)throw`Could not solve equation! Got x=[${t.toString()}], b=[${e.toString()}], A=[${this.toString()}]`;return t}e(e,t,i){if(i===void 0)return this.elements[t+3*e];this.elements[t+3*e]=i}copy(e){for(let t=0;t<e.elements.length;t++)this.elements[t]=e.elements[t];return this}toString(){let e="";const t=",";for(let i=0;i<9;i++)e+=this.elements[i]+t;return e}reverse(e){e===void 0&&(e=new Ln);const t=3,i=6,s=Bb;let r,o;for(r=0;r<3;r++)for(o=0;o<3;o++)s[r+i*o]=this.elements[r+3*o];s[3+6*0]=1,s[3+6*1]=0,s[3+6*2]=0,s[4+6*0]=0,s[4+6*1]=1,s[4+6*2]=0,s[5+6*0]=0,s[5+6*1]=0,s[5+6*2]=1;let a=3;const l=a;let c;const u=i;let h;do{if(r=l-a,s[r+i*r]===0){for(o=r+1;o<l;o++)if(s[r+i*o]!==0){c=u;do h=u-c,s[h+i*r]+=s[h+i*o];while(--c);break}}if(s[r+i*r]!==0)for(o=r+1;o<l;o++){const d=s[r+i*o]/s[r+i*r];c=u;do h=u-c,s[h+i*o]=h<=r?0:s[h+i*o]-s[h+i*r]*d;while(--c)}}while(--a);r=2;do{o=r-1;do{const d=s[r+i*o]/s[r+i*r];c=i;do h=i-c,s[h+i*o]=s[h+i*o]-s[h+i*r]*d;while(--c)}while(o--)}while(--r);r=2;do{const d=1/s[r+i*r];c=i;do h=i-c,s[h+i*r]=s[h+i*r]*d;while(--c)}while(r--);r=2;do{o=2;do{if(h=s[t+o+i*r],isNaN(h)||h===1/0)throw`Could not reverse! A=[${this.toString()}]`;e.e(r,o,h)}while(o--)}while(r--);return e}setRotationFromQuaternion(e){const t=e.x,i=e.y,s=e.z,r=e.w,o=t+t,a=i+i,l=s+s,c=t*o,u=t*a,h=t*l,d=i*a,f=i*l,g=s*l,x=r*o,m=r*a,p=r*l,_=this.elements;return _[3*0+0]=1-(d+g),_[3*0+1]=u-p,_[3*0+2]=h+m,_[3*1+0]=u+p,_[3*1+1]=1-(c+g),_[3*1+2]=f-x,_[3*2+0]=h-m,_[3*2+1]=f+x,_[3*2+2]=1-(c+d),this}transpose(e){e===void 0&&(e=new Ln);const t=this.elements,i=e.elements;let s;return i[0]=t[0],i[4]=t[4],i[8]=t[8],s=t[1],i[1]=t[3],i[3]=s,s=t[2],i[2]=t[6],i[6]=s,s=t[5],i[5]=t[7],i[7]=s,e}}const Bb=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class w{constructor(e,t,i){e===void 0&&(e=0),t===void 0&&(t=0),i===void 0&&(i=0),this.x=e,this.y=t,this.z=i}cross(e,t){t===void 0&&(t=new w);const i=e.x,s=e.y,r=e.z,o=this.x,a=this.y,l=this.z;return t.x=a*r-l*s,t.y=l*i-o*r,t.z=o*s-a*i,t}set(e,t,i){return this.x=e,this.y=t,this.z=i,this}setZero(){this.x=this.y=this.z=0}vadd(e,t){if(t)t.x=e.x+this.x,t.y=e.y+this.y,t.z=e.z+this.z;else return new w(this.x+e.x,this.y+e.y,this.z+e.z)}vsub(e,t){if(t)t.x=this.x-e.x,t.y=this.y-e.y,t.z=this.z-e.z;else return new w(this.x-e.x,this.y-e.y,this.z-e.z)}crossmat(){return new Ln([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const e=this.x,t=this.y,i=this.z,s=Math.sqrt(e*e+t*t+i*i);if(s>0){const r=1/s;this.x*=r,this.y*=r,this.z*=r}else this.x=0,this.y=0,this.z=0;return s}unit(e){e===void 0&&(e=new w);const t=this.x,i=this.y,s=this.z;let r=Math.sqrt(t*t+i*i+s*s);return r>0?(r=1/r,e.x=t*r,e.y=i*r,e.z=s*r):(e.x=1,e.y=0,e.z=0),e}length(){const e=this.x,t=this.y,i=this.z;return Math.sqrt(e*e+t*t+i*i)}lengthSquared(){return this.dot(this)}distanceTo(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z;return Math.sqrt((r-t)*(r-t)+(o-i)*(o-i)+(a-s)*(a-s))}distanceSquared(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z;return(r-t)*(r-t)+(o-i)*(o-i)+(a-s)*(a-s)}scale(e,t){t===void 0&&(t=new w);const i=this.x,s=this.y,r=this.z;return t.x=e*i,t.y=e*s,t.z=e*r,t}vmul(e,t){return t===void 0&&(t=new w),t.x=e.x*this.x,t.y=e.y*this.y,t.z=e.z*this.z,t}addScaledVector(e,t,i){return i===void 0&&(i=new w),i.x=this.x+e*t.x,i.y=this.y+e*t.y,i.z=this.z+e*t.z,i}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(e){return e===void 0&&(e=new w),e.x=-this.x,e.y=-this.y,e.z=-this.z,e}tangents(e,t){const i=this.length();if(i>0){const s=zb,r=1/i;s.set(this.x*r,this.y*r,this.z*r);const o=Vb;Math.abs(s.x)<.9?(o.set(1,0,0),s.cross(o,e)):(o.set(0,1,0),s.cross(o,e)),s.cross(e,t)}else e.set(1,0,0),t.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}lerp(e,t,i){const s=this.x,r=this.y,o=this.z;i.x=s+(e.x-s)*t,i.y=r+(e.y-r)*t,i.z=o+(e.z-o)*t}almostEquals(e,t){return t===void 0&&(t=1e-6),!(Math.abs(this.x-e.x)>t||Math.abs(this.y-e.y)>t||Math.abs(this.z-e.z)>t)}almostZero(e){return e===void 0&&(e=1e-6),!(Math.abs(this.x)>e||Math.abs(this.y)>e||Math.abs(this.z)>e)}isAntiparallelTo(e,t){return this.negate(sd),sd.almostEquals(e,t)}clone(){return new w(this.x,this.y,this.z)}}w.ZERO=new w(0,0,0);w.UNIT_X=new w(1,0,0);w.UNIT_Y=new w(0,1,0);w.UNIT_Z=new w(0,0,1);const zb=new w,Vb=new w,sd=new w;class _n{constructor(e){e===void 0&&(e={}),this.lowerBound=new w,this.upperBound=new w,e.lowerBound&&this.lowerBound.copy(e.lowerBound),e.upperBound&&this.upperBound.copy(e.upperBound)}setFromPoints(e,t,i,s){const r=this.lowerBound,o=this.upperBound,a=i;r.copy(e[0]),a&&a.vmult(r,r),o.copy(r);for(let l=1;l<e.length;l++){let c=e[l];a&&(a.vmult(c,rd),c=rd),c.x>o.x&&(o.x=c.x),c.x<r.x&&(r.x=c.x),c.y>o.y&&(o.y=c.y),c.y<r.y&&(r.y=c.y),c.z>o.z&&(o.z=c.z),c.z<r.z&&(r.z=c.z)}return t&&(t.vadd(r,r),t.vadd(o,o)),s&&(r.x-=s,r.y-=s,r.z-=s,o.x+=s,o.y+=s,o.z+=s),this}copy(e){return this.lowerBound.copy(e.lowerBound),this.upperBound.copy(e.upperBound),this}clone(){return new _n().copy(this)}extend(e){this.lowerBound.x=Math.min(this.lowerBound.x,e.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,e.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,e.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,e.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,e.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,e.upperBound.z)}overlaps(e){const t=this.lowerBound,i=this.upperBound,s=e.lowerBound,r=e.upperBound,o=s.x<=i.x&&i.x<=r.x||t.x<=r.x&&r.x<=i.x,a=s.y<=i.y&&i.y<=r.y||t.y<=r.y&&r.y<=i.y,l=s.z<=i.z&&i.z<=r.z||t.z<=r.z&&r.z<=i.z;return o&&a&&l}volume(){const e=this.lowerBound,t=this.upperBound;return(t.x-e.x)*(t.y-e.y)*(t.z-e.z)}contains(e){const t=this.lowerBound,i=this.upperBound,s=e.lowerBound,r=e.upperBound;return t.x<=s.x&&i.x>=r.x&&t.y<=s.y&&i.y>=r.y&&t.z<=s.z&&i.z>=r.z}getCorners(e,t,i,s,r,o,a,l){const c=this.lowerBound,u=this.upperBound;e.copy(c),t.set(u.x,c.y,c.z),i.set(u.x,u.y,c.z),s.set(c.x,u.y,u.z),r.set(u.x,c.y,u.z),o.set(c.x,u.y,c.z),a.set(c.x,c.y,u.z),l.copy(u)}toLocalFrame(e,t){const i=od,s=i[0],r=i[1],o=i[2],a=i[3],l=i[4],c=i[5],u=i[6],h=i[7];this.getCorners(s,r,o,a,l,c,u,h);for(let d=0;d!==8;d++){const f=i[d];e.pointToLocal(f,f)}return t.setFromPoints(i)}toWorldFrame(e,t){const i=od,s=i[0],r=i[1],o=i[2],a=i[3],l=i[4],c=i[5],u=i[6],h=i[7];this.getCorners(s,r,o,a,l,c,u,h);for(let d=0;d!==8;d++){const f=i[d];e.pointToWorld(f,f)}return t.setFromPoints(i)}overlapsRay(e){const{direction:t,from:i}=e,s=1/t.x,r=1/t.y,o=1/t.z,a=(this.lowerBound.x-i.x)*s,l=(this.upperBound.x-i.x)*s,c=(this.lowerBound.y-i.y)*r,u=(this.upperBound.y-i.y)*r,h=(this.lowerBound.z-i.z)*o,d=(this.upperBound.z-i.z)*o,f=Math.max(Math.max(Math.min(a,l),Math.min(c,u)),Math.min(h,d)),g=Math.min(Math.min(Math.max(a,l),Math.max(c,u)),Math.max(h,d));return!(g<0||f>g)}}const rd=new w,od=[new w,new w,new w,new w,new w,new w,new w,new w];class ad{constructor(){this.matrix=[]}get(e,t){let{index:i}=e,{index:s}=t;if(s>i){const r=s;s=i,i=r}return this.matrix[(i*(i+1)>>1)+s-1]}set(e,t,i){let{index:s}=e,{index:r}=t;if(r>s){const o=r;r=s,s=o}this.matrix[(s*(s+1)>>1)+r-1]=i?1:0}reset(){for(let e=0,t=this.matrix.length;e!==t;e++)this.matrix[e]=0}setNumObjects(e){this.matrix.length=e*(e-1)>>1}}class dp{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;return i[e]===void 0&&(i[e]=[]),i[e].includes(t)||i[e].push(t),this}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return!!(i[e]!==void 0&&i[e].includes(t))}hasAnyEventListener(e){return this._listeners===void 0?!1:this._listeners[e]!==void 0}removeEventListener(e,t){if(this._listeners===void 0)return this;const i=this._listeners;if(i[e]===void 0)return this;const s=i[e].indexOf(t);return s!==-1&&i[e].splice(s,1),this}dispatchEvent(e){if(this._listeners===void 0)return this;const i=this._listeners[e.type];if(i!==void 0){e.target=this;for(let s=0,r=i.length;s<r;s++)i[s].call(this,e)}return this}}class Nt{constructor(e,t,i,s){e===void 0&&(e=0),t===void 0&&(t=0),i===void 0&&(i=0),s===void 0&&(s=1),this.x=e,this.y=t,this.z=i,this.w=s}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(e,t){const i=Math.sin(t*.5);return this.x=e.x*i,this.y=e.y*i,this.z=e.z*i,this.w=Math.cos(t*.5),this}toAxisAngle(e){e===void 0&&(e=new w),this.normalize();const t=2*Math.acos(this.w),i=Math.sqrt(1-this.w*this.w);return i<.001?(e.x=this.x,e.y=this.y,e.z=this.z):(e.x=this.x/i,e.y=this.y/i,e.z=this.z/i),[e,t]}setFromVectors(e,t){if(e.isAntiparallelTo(t)){const i=kb,s=Gb;e.tangents(i,s),this.setFromAxisAngle(i,Math.PI)}else{const i=e.cross(t);this.x=i.x,this.y=i.y,this.z=i.z,this.w=Math.sqrt(e.length()**2*t.length()**2)+e.dot(t),this.normalize()}return this}mult(e,t){t===void 0&&(t=new Nt);const i=this.x,s=this.y,r=this.z,o=this.w,a=e.x,l=e.y,c=e.z,u=e.w;return t.x=i*u+o*a+s*c-r*l,t.y=s*u+o*l+r*a-i*c,t.z=r*u+o*c+i*l-s*a,t.w=o*u-i*a-s*l-r*c,t}inverse(e){e===void 0&&(e=new Nt);const t=this.x,i=this.y,s=this.z,r=this.w;this.conjugate(e);const o=1/(t*t+i*i+s*s+r*r);return e.x*=o,e.y*=o,e.z*=o,e.w*=o,e}conjugate(e){return e===void 0&&(e=new Nt),e.x=-this.x,e.y=-this.y,e.z=-this.z,e.w=this.w,e}normalize(){let e=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(e=1/e,this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}normalizeFast(){const e=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}vmult(e,t){t===void 0&&(t=new w);const i=e.x,s=e.y,r=e.z,o=this.x,a=this.y,l=this.z,c=this.w,u=c*i+a*r-l*s,h=c*s+l*i-o*r,d=c*r+o*s-a*i,f=-o*i-a*s-l*r;return t.x=u*c+f*-o+h*-l-d*-a,t.y=h*c+f*-a+d*-o-u*-l,t.z=d*c+f*-l+u*-a-h*-o,t}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this}toEuler(e,t){t===void 0&&(t="YZX");let i,s,r;const o=this.x,a=this.y,l=this.z,c=this.w;switch(t){case"YZX":const u=o*a+l*c;if(u>.499&&(i=2*Math.atan2(o,c),s=Math.PI/2,r=0),u<-.499&&(i=-2*Math.atan2(o,c),s=-Math.PI/2,r=0),i===void 0){const h=o*o,d=a*a,f=l*l;i=Math.atan2(2*a*c-2*o*l,1-2*d-2*f),s=Math.asin(2*u),r=Math.atan2(2*o*c-2*a*l,1-2*h-2*f)}break;default:throw new Error(`Euler order ${t} not supported yet.`)}e.y=i,e.z=s,e.x=r}setFromEuler(e,t,i,s){s===void 0&&(s="XYZ");const r=Math.cos(e/2),o=Math.cos(t/2),a=Math.cos(i/2),l=Math.sin(e/2),c=Math.sin(t/2),u=Math.sin(i/2);return s==="XYZ"?(this.x=l*o*a+r*c*u,this.y=r*c*a-l*o*u,this.z=r*o*u+l*c*a,this.w=r*o*a-l*c*u):s==="YXZ"?(this.x=l*o*a+r*c*u,this.y=r*c*a-l*o*u,this.z=r*o*u-l*c*a,this.w=r*o*a+l*c*u):s==="ZXY"?(this.x=l*o*a-r*c*u,this.y=r*c*a+l*o*u,this.z=r*o*u+l*c*a,this.w=r*o*a-l*c*u):s==="ZYX"?(this.x=l*o*a-r*c*u,this.y=r*c*a+l*o*u,this.z=r*o*u-l*c*a,this.w=r*o*a+l*c*u):s==="YZX"?(this.x=l*o*a+r*c*u,this.y=r*c*a+l*o*u,this.z=r*o*u-l*c*a,this.w=r*o*a-l*c*u):s==="XZY"&&(this.x=l*o*a-r*c*u,this.y=r*c*a-l*o*u,this.z=r*o*u+l*c*a,this.w=r*o*a+l*c*u),this}clone(){return new Nt(this.x,this.y,this.z,this.w)}slerp(e,t,i){i===void 0&&(i=new Nt);const s=this.x,r=this.y,o=this.z,a=this.w;let l=e.x,c=e.y,u=e.z,h=e.w,d,f,g,x,m;return f=s*l+r*c+o*u+a*h,f<0&&(f=-f,l=-l,c=-c,u=-u,h=-h),1-f>1e-6?(d=Math.acos(f),g=Math.sin(d),x=Math.sin((1-t)*d)/g,m=Math.sin(t*d)/g):(x=1-t,m=t),i.x=x*s+m*l,i.y=x*r+m*c,i.z=x*o+m*u,i.w=x*a+m*h,i}integrate(e,t,i,s){s===void 0&&(s=new Nt);const r=e.x*i.x,o=e.y*i.y,a=e.z*i.z,l=this.x,c=this.y,u=this.z,h=this.w,d=t*.5;return s.x+=d*(r*h+o*u-a*c),s.y+=d*(o*h+a*l-r*u),s.z+=d*(a*h+r*c-o*l),s.w+=d*(-r*l-o*c-a*u),s}}const kb=new w,Gb=new w,Hb={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class Ue{constructor(e){e===void 0&&(e={}),this.id=Ue.idCounter++,this.type=e.type||0,this.boundingSphereRadius=0,this.collisionResponse=e.collisionResponse?e.collisionResponse:!0,this.collisionFilterGroup=e.collisionFilterGroup!==void 0?e.collisionFilterGroup:1,this.collisionFilterMask=e.collisionFilterMask!==void 0?e.collisionFilterMask:-1,this.material=e.material?e.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(e,t){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(e,t,i,s){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}Ue.idCounter=0;Ue.types=Hb;class ht{constructor(e){e===void 0&&(e={}),this.position=new w,this.quaternion=new Nt,e.position&&this.position.copy(e.position),e.quaternion&&this.quaternion.copy(e.quaternion)}pointToLocal(e,t){return ht.pointToLocalFrame(this.position,this.quaternion,e,t)}pointToWorld(e,t){return ht.pointToWorldFrame(this.position,this.quaternion,e,t)}vectorToWorldFrame(e,t){return t===void 0&&(t=new w),this.quaternion.vmult(e,t),t}static pointToLocalFrame(e,t,i,s){return s===void 0&&(s=new w),i.vsub(e,s),t.conjugate(ld),ld.vmult(s,s),s}static pointToWorldFrame(e,t,i,s){return s===void 0&&(s=new w),t.vmult(i,s),s.vadd(e,s),s}static vectorToWorldFrame(e,t,i){return i===void 0&&(i=new w),e.vmult(t,i),i}static vectorToLocalFrame(e,t,i,s){return s===void 0&&(s=new w),t.w*=-1,t.vmult(i,s),t.w*=-1,s}}const ld=new Nt;class zr extends Ue{constructor(e){e===void 0&&(e={});const{vertices:t=[],faces:i=[],normals:s=[],axes:r,boundingSphereRadius:o}=e;super({type:Ue.types.CONVEXPOLYHEDRON}),this.vertices=t,this.faces=i,this.faceNormals=s,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=r?r.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const e=this.faces,t=this.vertices,i=this.uniqueEdges;i.length=0;const s=new w;for(let r=0;r!==e.length;r++){const o=e[r],a=o.length;for(let l=0;l!==a;l++){const c=(l+1)%a;t[o[l]].vsub(t[o[c]],s),s.normalize();let u=!1;for(let h=0;h!==i.length;h++)if(i[h].almostEquals(s)||i[h].almostEquals(s)){u=!0;break}u||i.push(s.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let e=0;e<this.faces.length;e++){for(let s=0;s<this.faces[e].length;s++)if(!this.vertices[this.faces[e][s]])throw new Error(`Vertex ${this.faces[e][s]} not found!`);const t=this.faceNormals[e]||new w;this.getFaceNormal(e,t),t.negate(t),this.faceNormals[e]=t;const i=this.vertices[this.faces[e][0]];if(t.dot(i)<0){console.error(`.faceNormals[${e}] = Vec3(${t.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let s=0;s<this.faces[e].length;s++)console.warn(`.vertices[${this.faces[e][s]}] = Vec3(${this.vertices[this.faces[e][s]].toString()})`)}}}getFaceNormal(e,t){const i=this.faces[e],s=this.vertices[i[0]],r=this.vertices[i[1]],o=this.vertices[i[2]];zr.computeNormal(s,r,o,t)}static computeNormal(e,t,i,s){const r=new w,o=new w;t.vsub(e,o),i.vsub(t,r),r.cross(o,s),s.isZero()||s.normalize()}clipAgainstHull(e,t,i,s,r,o,a,l,c){const u=new w;let h=-1,d=-Number.MAX_VALUE;for(let g=0;g<i.faces.length;g++){u.copy(i.faceNormals[g]),r.vmult(u,u);const x=u.dot(o);x>d&&(d=x,h=g)}const f=[];for(let g=0;g<i.faces[h].length;g++){const x=i.vertices[i.faces[h][g]],m=new w;m.copy(x),r.vmult(m,m),s.vadd(m,m),f.push(m)}h>=0&&this.clipFaceAgainstHull(o,e,t,f,a,l,c)}findSeparatingAxis(e,t,i,s,r,o,a,l){const c=new w,u=new w,h=new w,d=new w,f=new w,g=new w;let x=Number.MAX_VALUE;const m=this;if(m.uniqueAxes)for(let p=0;p!==m.uniqueAxes.length;p++){i.vmult(m.uniqueAxes[p],c);const _=m.testSepAxis(c,e,t,i,s,r);if(_===!1)return!1;_<x&&(x=_,o.copy(c))}else{const p=a?a.length:m.faces.length;for(let _=0;_<p;_++){const M=a?a[_]:_;c.copy(m.faceNormals[M]),i.vmult(c,c);const v=m.testSepAxis(c,e,t,i,s,r);if(v===!1)return!1;v<x&&(x=v,o.copy(c))}}if(e.uniqueAxes)for(let p=0;p!==e.uniqueAxes.length;p++){r.vmult(e.uniqueAxes[p],u);const _=m.testSepAxis(u,e,t,i,s,r);if(_===!1)return!1;_<x&&(x=_,o.copy(u))}else{const p=l?l.length:e.faces.length;for(let _=0;_<p;_++){const M=l?l[_]:_;u.copy(e.faceNormals[M]),r.vmult(u,u);const v=m.testSepAxis(u,e,t,i,s,r);if(v===!1)return!1;v<x&&(x=v,o.copy(u))}}for(let p=0;p!==m.uniqueEdges.length;p++){i.vmult(m.uniqueEdges[p],d);for(let _=0;_!==e.uniqueEdges.length;_++)if(r.vmult(e.uniqueEdges[_],f),d.cross(f,g),!g.almostZero()){g.normalize();const M=m.testSepAxis(g,e,t,i,s,r);if(M===!1)return!1;M<x&&(x=M,o.copy(g))}}return s.vsub(t,h),h.dot(o)>0&&o.negate(o),!0}testSepAxis(e,t,i,s,r,o){const a=this;zr.project(a,e,i,s,yl),zr.project(t,e,r,o,Sl);const l=yl[0],c=yl[1],u=Sl[0],h=Sl[1];if(l<h||u<c)return!1;const d=l-h,f=u-c;return d<f?d:f}calculateLocalInertia(e,t){const i=new w,s=new w;this.computeLocalAABB(s,i);const r=i.x-s.x,o=i.y-s.y,a=i.z-s.z;t.x=1/12*e*(2*o*2*o+2*a*2*a),t.y=1/12*e*(2*r*2*r+2*a*2*a),t.z=1/12*e*(2*o*2*o+2*r*2*r)}getPlaneConstantOfFace(e){const t=this.faces[e],i=this.faceNormals[e],s=this.vertices[t[0]];return-i.dot(s)}clipFaceAgainstHull(e,t,i,s,r,o,a){const l=new w,c=new w,u=new w,h=new w,d=new w,f=new w,g=new w,x=new w,m=this,p=[],_=s,M=p;let v=-1,S=Number.MAX_VALUE;for(let T=0;T<m.faces.length;T++){l.copy(m.faceNormals[T]),i.vmult(l,l);const L=l.dot(e);L<S&&(S=L,v=T)}if(v<0)return;const E=m.faces[v];E.connectedFaces=[];for(let T=0;T<m.faces.length;T++)for(let L=0;L<m.faces[T].length;L++)E.indexOf(m.faces[T][L])!==-1&&T!==v&&E.connectedFaces.indexOf(T)===-1&&E.connectedFaces.push(T);const A=E.length;for(let T=0;T<A;T++){const L=m.vertices[E[T]],V=m.vertices[E[(T+1)%A]];L.vsub(V,c),u.copy(c),i.vmult(u,u),t.vadd(u,u),h.copy(this.faceNormals[v]),i.vmult(h,h),t.vadd(h,h),u.cross(h,d),d.negate(d),f.copy(L),i.vmult(f,f),t.vadd(f,f);const F=E.connectedFaces[T];g.copy(this.faceNormals[F]);const H=this.getPlaneConstantOfFace(F);x.copy(g),i.vmult(x,x);const z=H-x.dot(t);for(this.clipFaceAgainstPlane(_,M,x,z);_.length;)_.shift();for(;M.length;)_.push(M.shift())}g.copy(this.faceNormals[v]);const D=this.getPlaneConstantOfFace(v);x.copy(g),i.vmult(x,x);const b=D-x.dot(t);for(let T=0;T<_.length;T++){let L=x.dot(_[T])+b;if(L<=r&&(console.log(`clamped: depth=${L} to minDist=${r}`),L=r),L<=o){const V=_[T];if(L<=1e-6){const F={point:V,normal:x,depth:L};a.push(F)}}}}clipFaceAgainstPlane(e,t,i,s){let r,o;const a=e.length;if(a<2)return t;let l=e[e.length-1],c=e[0];r=i.dot(l)+s;for(let u=0;u<a;u++){if(c=e[u],o=i.dot(c)+s,r<0)if(o<0){const h=new w;h.copy(c),t.push(h)}else{const h=new w;l.lerp(c,r/(r-o),h),t.push(h)}else if(o<0){const h=new w;l.lerp(c,r/(r-o),h),t.push(h),t.push(c)}l=c,r=o}return t}computeWorldVertices(e,t){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new w);const i=this.vertices,s=this.worldVertices;for(let r=0;r!==this.vertices.length;r++)t.vmult(i[r],s[r]),e.vadd(s[r],s[r]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(e,t){const i=this.vertices;e.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),t.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let s=0;s<this.vertices.length;s++){const r=i[s];r.x<e.x?e.x=r.x:r.x>t.x&&(t.x=r.x),r.y<e.y?e.y=r.y:r.y>t.y&&(t.y=r.y),r.z<e.z?e.z=r.z:r.z>t.z&&(t.z=r.z)}}computeWorldFaceNormals(e){const t=this.faceNormals.length;for(;this.worldFaceNormals.length<t;)this.worldFaceNormals.push(new w);const i=this.faceNormals,s=this.worldFaceNormals;for(let r=0;r!==t;r++)e.vmult(i[r],s[r]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let e=0;const t=this.vertices;for(let i=0;i!==t.length;i++){const s=t[i].lengthSquared();s>e&&(e=s)}this.boundingSphereRadius=Math.sqrt(e)}calculateWorldAABB(e,t,i,s){const r=this.vertices;let o,a,l,c,u,h,d=new w;for(let f=0;f<r.length;f++){d.copy(r[f]),t.vmult(d,d),e.vadd(d,d);const g=d;(o===void 0||g.x<o)&&(o=g.x),(c===void 0||g.x>c)&&(c=g.x),(a===void 0||g.y<a)&&(a=g.y),(u===void 0||g.y>u)&&(u=g.y),(l===void 0||g.z<l)&&(l=g.z),(h===void 0||g.z>h)&&(h=g.z)}i.set(o,a,l),s.set(c,u,h)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(e){e===void 0&&(e=new w);const t=this.vertices;for(let i=0;i<t.length;i++)e.vadd(t[i],e);return e.scale(1/t.length,e),e}transformAllPoints(e,t){const i=this.vertices.length,s=this.vertices;if(t){for(let r=0;r<i;r++){const o=s[r];t.vmult(o,o)}for(let r=0;r<this.faceNormals.length;r++){const o=this.faceNormals[r];t.vmult(o,o)}}if(e)for(let r=0;r<i;r++){const o=s[r];o.vadd(e,o)}}pointIsInside(e){const t=this.vertices,i=this.faces,s=this.faceNormals,r=new w;this.getAveragePointLocal(r);for(let o=0;o<this.faces.length;o++){let a=s[o];const l=t[i[o][0]],c=new w;e.vsub(l,c);const u=a.dot(c),h=new w;r.vsub(l,h);const d=a.dot(h);if(u<0&&d>0||u>0&&d<0)return!1}return-1}static project(e,t,i,s,r){const o=e.vertices.length,a=Wb;let l=0,c=0;const u=Xb,h=e.vertices;u.setZero(),ht.vectorToLocalFrame(i,s,t,a),ht.pointToLocalFrame(i,s,u,u);const d=u.dot(a);c=l=h[0].dot(a);for(let f=1;f<o;f++){const g=h[f].dot(a);g>l&&(l=g),g<c&&(c=g)}if(c-=d,l-=d,c>l){const f=c;c=l,l=f}r[0]=l,r[1]=c}}const yl=[],Sl=[];new w;const Wb=new w,Xb=new w;class Hn extends Ue{constructor(e){super({type:Ue.types.BOX}),this.halfExtents=e,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const e=this.halfExtents.x,t=this.halfExtents.y,i=this.halfExtents.z,s=w,r=[new s(-e,-t,-i),new s(e,-t,-i),new s(e,t,-i),new s(-e,t,-i),new s(-e,-t,i),new s(e,-t,i),new s(e,t,i),new s(-e,t,i)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new s(0,0,1),new s(0,1,0),new s(1,0,0)],l=new zr({vertices:r,faces:o,axes:a});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(e,t){return t===void 0&&(t=new w),Hn.calculateInertia(this.halfExtents,e,t),t}static calculateInertia(e,t,i){const s=e;i.x=1/12*t*(2*s.y*2*s.y+2*s.z*2*s.z),i.y=1/12*t*(2*s.x*2*s.x+2*s.z*2*s.z),i.z=1/12*t*(2*s.y*2*s.y+2*s.x*2*s.x)}getSideNormals(e,t){const i=e,s=this.halfExtents;if(i[0].set(s.x,0,0),i[1].set(0,s.y,0),i[2].set(0,0,s.z),i[3].set(-s.x,0,0),i[4].set(0,-s.y,0),i[5].set(0,0,-s.z),t!==void 0)for(let r=0;r!==i.length;r++)t.vmult(i[r],i[r]);return i}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(e,t,i){const s=this.halfExtents,r=[[s.x,s.y,s.z],[-s.x,s.y,s.z],[-s.x,-s.y,s.z],[-s.x,-s.y,-s.z],[s.x,-s.y,-s.z],[s.x,s.y,-s.z],[-s.x,s.y,-s.z],[s.x,-s.y,s.z]];for(let o=0;o<r.length;o++)ki.set(r[o][0],r[o][1],r[o][2]),t.vmult(ki,ki),e.vadd(ki,ki),i(ki.x,ki.y,ki.z)}calculateWorldAABB(e,t,i,s){const r=this.halfExtents;zn[0].set(r.x,r.y,r.z),zn[1].set(-r.x,r.y,r.z),zn[2].set(-r.x,-r.y,r.z),zn[3].set(-r.x,-r.y,-r.z),zn[4].set(r.x,-r.y,-r.z),zn[5].set(r.x,r.y,-r.z),zn[6].set(-r.x,r.y,-r.z),zn[7].set(r.x,-r.y,r.z);const o=zn[0];t.vmult(o,o),e.vadd(o,o),s.copy(o),i.copy(o);for(let a=1;a<8;a++){const l=zn[a];t.vmult(l,l),e.vadd(l,l);const c=l.x,u=l.y,h=l.z;c>s.x&&(s.x=c),u>s.y&&(s.y=u),h>s.z&&(s.z=h),c<i.x&&(i.x=c),u<i.y&&(i.y=u),h<i.z&&(i.z=h)}}}const ki=new w,zn=[new w,new w,new w,new w,new w,new w,new w,new w],pu={DYNAMIC:1,STATIC:2,KINEMATIC:4},mu={AWAKE:0,SLEEPY:1,SLEEPING:2};class De extends dp{constructor(e){e===void 0&&(e={}),super(),this.id=De.idCounter++,this.index=-1,this.world=null,this.vlambda=new w,this.collisionFilterGroup=typeof e.collisionFilterGroup=="number"?e.collisionFilterGroup:1,this.collisionFilterMask=typeof e.collisionFilterMask=="number"?e.collisionFilterMask:-1,this.collisionResponse=typeof e.collisionResponse=="boolean"?e.collisionResponse:!0,this.position=new w,this.previousPosition=new w,this.interpolatedPosition=new w,this.initPosition=new w,e.position&&(this.position.copy(e.position),this.previousPosition.copy(e.position),this.interpolatedPosition.copy(e.position),this.initPosition.copy(e.position)),this.velocity=new w,e.velocity&&this.velocity.copy(e.velocity),this.initVelocity=new w,this.force=new w;const t=typeof e.mass=="number"?e.mass:0;this.mass=t,this.invMass=t>0?1/t:0,this.material=e.material||null,this.linearDamping=typeof e.linearDamping=="number"?e.linearDamping:.01,this.type=t<=0?De.STATIC:De.DYNAMIC,typeof e.type==typeof De.STATIC&&(this.type=e.type),this.allowSleep=typeof e.allowSleep<"u"?e.allowSleep:!0,this.sleepState=De.AWAKE,this.sleepSpeedLimit=typeof e.sleepSpeedLimit<"u"?e.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof e.sleepTimeLimit<"u"?e.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new w,this.quaternion=new Nt,this.initQuaternion=new Nt,this.previousQuaternion=new Nt,this.interpolatedQuaternion=new Nt,e.quaternion&&(this.quaternion.copy(e.quaternion),this.initQuaternion.copy(e.quaternion),this.previousQuaternion.copy(e.quaternion),this.interpolatedQuaternion.copy(e.quaternion)),this.angularVelocity=new w,e.angularVelocity&&this.angularVelocity.copy(e.angularVelocity),this.initAngularVelocity=new w,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new w,this.invInertia=new w,this.invInertiaWorld=new Ln,this.invMassSolve=0,this.invInertiaSolve=new w,this.invInertiaWorldSolve=new Ln,this.fixedRotation=typeof e.fixedRotation<"u"?e.fixedRotation:!1,this.angularDamping=typeof e.angularDamping<"u"?e.angularDamping:.01,this.linearFactor=new w(1,1,1),e.linearFactor&&this.linearFactor.copy(e.linearFactor),this.angularFactor=new w(1,1,1),e.angularFactor&&this.angularFactor.copy(e.angularFactor),this.aabb=new _n,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new w,this.isTrigger=!!e.isTrigger,e.shape&&this.addShape(e.shape),this.updateMassProperties()}wakeUp(){const e=this.sleepState;this.sleepState=De.AWAKE,this.wakeUpAfterNarrowphase=!1,e===De.SLEEPING&&this.dispatchEvent(De.wakeupEvent)}sleep(){this.sleepState=De.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(e){if(this.allowSleep){const t=this.sleepState,i=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),s=this.sleepSpeedLimit**2;t===De.AWAKE&&i<s?(this.sleepState=De.SLEEPY,this.timeLastSleepy=e,this.dispatchEvent(De.sleepyEvent)):t===De.SLEEPY&&i>s?this.wakeUp():t===De.SLEEPY&&e-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(De.sleepEvent))}}updateSolveMassProperties(){this.sleepState===De.SLEEPING||this.type===De.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(e,t){return t===void 0&&(t=new w),e.vsub(this.position,t),this.quaternion.conjugate().vmult(t,t),t}vectorToLocalFrame(e,t){return t===void 0&&(t=new w),this.quaternion.conjugate().vmult(e,t),t}pointToWorldFrame(e,t){return t===void 0&&(t=new w),this.quaternion.vmult(e,t),t.vadd(this.position,t),t}vectorToWorldFrame(e,t){return t===void 0&&(t=new w),this.quaternion.vmult(e,t),t}addShape(e,t,i){const s=new w,r=new Nt;return t&&s.copy(t),i&&r.copy(i),this.shapes.push(e),this.shapeOffsets.push(s),this.shapeOrientations.push(r),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=this,this}removeShape(e){const t=this.shapes.indexOf(e);return t===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(t,1),this.shapeOffsets.splice(t,1),this.shapeOrientations.splice(t,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=null,this)}updateBoundingRadius(){const e=this.shapes,t=this.shapeOffsets,i=e.length;let s=0;for(let r=0;r!==i;r++){const o=e[r];o.updateBoundingSphereRadius();const a=t[r].length(),l=o.boundingSphereRadius;a+l>s&&(s=a+l)}this.boundingRadius=s}updateAABB(){const e=this.shapes,t=this.shapeOffsets,i=this.shapeOrientations,s=e.length,r=qb,o=jb,a=this.quaternion,l=this.aabb,c=$b;for(let u=0;u!==s;u++){const h=e[u];a.vmult(t[u],r),r.vadd(this.position,r),a.mult(i[u],o),h.calculateWorldAABB(r,o,c.lowerBound,c.upperBound),u===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(e){const t=this.invInertia;if(!(t.x===t.y&&t.y===t.z&&!e)){const i=Yb,s=Kb;i.setRotationFromQuaternion(this.quaternion),i.transpose(s),i.scale(t,i),i.mmult(s,this.invInertiaWorld)}}applyForce(e,t){if(t===void 0&&(t=new w),this.type!==De.DYNAMIC)return;this.sleepState===De.SLEEPING&&this.wakeUp();const i=Zb;t.cross(e,i),this.force.vadd(e,this.force),this.torque.vadd(i,this.torque)}applyLocalForce(e,t){if(t===void 0&&(t=new w),this.type!==De.DYNAMIC)return;const i=Jb,s=Qb;this.vectorToWorldFrame(e,i),this.vectorToWorldFrame(t,s),this.applyForce(i,s)}applyTorque(e){this.type===De.DYNAMIC&&(this.sleepState===De.SLEEPING&&this.wakeUp(),this.torque.vadd(e,this.torque))}applyImpulse(e,t){if(t===void 0&&(t=new w),this.type!==De.DYNAMIC)return;this.sleepState===De.SLEEPING&&this.wakeUp();const i=t,s=eE;s.copy(e),s.scale(this.invMass,s),this.velocity.vadd(s,this.velocity);const r=tE;i.cross(e,r),this.invInertiaWorld.vmult(r,r),this.angularVelocity.vadd(r,this.angularVelocity)}applyLocalImpulse(e,t){if(t===void 0&&(t=new w),this.type!==De.DYNAMIC)return;const i=nE,s=iE;this.vectorToWorldFrame(e,i),this.vectorToWorldFrame(t,s),this.applyImpulse(i,s)}updateMassProperties(){const e=sE;this.invMass=this.mass>0?1/this.mass:0;const t=this.inertia,i=this.fixedRotation;this.updateAABB(),e.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),Hn.calculateInertia(e,this.mass,t),this.invInertia.set(t.x>0&&!i?1/t.x:0,t.y>0&&!i?1/t.y:0,t.z>0&&!i?1/t.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(e,t){const i=new w;return e.vsub(this.position,i),this.angularVelocity.cross(i,t),this.velocity.vadd(t,t),t}integrate(e,t,i){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===De.DYNAMIC||this.type===De.KINEMATIC)||this.sleepState===De.SLEEPING)return;const s=this.velocity,r=this.angularVelocity,o=this.position,a=this.force,l=this.torque,c=this.quaternion,u=this.invMass,h=this.invInertiaWorld,d=this.linearFactor,f=u*e;s.x+=a.x*f*d.x,s.y+=a.y*f*d.y,s.z+=a.z*f*d.z;const g=h.elements,x=this.angularFactor,m=l.x*x.x,p=l.y*x.y,_=l.z*x.z;r.x+=e*(g[0]*m+g[1]*p+g[2]*_),r.y+=e*(g[3]*m+g[4]*p+g[5]*_),r.z+=e*(g[6]*m+g[7]*p+g[8]*_),o.x+=s.x*e,o.y+=s.y*e,o.z+=s.z*e,c.integrate(this.angularVelocity,e,this.angularFactor,c),t&&(i?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}De.idCounter=0;De.COLLIDE_EVENT_NAME="collide";De.DYNAMIC=pu.DYNAMIC;De.STATIC=pu.STATIC;De.KINEMATIC=pu.KINEMATIC;De.AWAKE=mu.AWAKE;De.SLEEPY=mu.SLEEPY;De.SLEEPING=mu.SLEEPING;De.wakeupEvent={type:"wakeup"};De.sleepyEvent={type:"sleepy"};De.sleepEvent={type:"sleep"};const qb=new w,jb=new Nt,$b=new _n,Yb=new Ln,Kb=new Ln;new Ln;const Zb=new w,Jb=new w,Qb=new w,eE=new w,tE=new w,nE=new w,iE=new w,sE=new w;class rE{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(e,t,i){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(e,t){return!(!(e.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&e.collisionFilterMask)||(e.type&De.STATIC||e.sleepState===De.SLEEPING)&&(t.type&De.STATIC||t.sleepState===De.SLEEPING))}intersectionTest(e,t,i,s){this.useBoundingBoxes?this.doBoundingBoxBroadphase(e,t,i,s):this.doBoundingSphereBroadphase(e,t,i,s)}doBoundingSphereBroadphase(e,t,i,s){const r=oE;t.position.vsub(e.position,r);const o=(e.boundingRadius+t.boundingRadius)**2;r.lengthSquared()<o&&(i.push(e),s.push(t))}doBoundingBoxBroadphase(e,t,i,s){e.aabbNeedsUpdate&&e.updateAABB(),t.aabbNeedsUpdate&&t.updateAABB(),e.aabb.overlaps(t.aabb)&&(i.push(e),s.push(t))}makePairsUnique(e,t){const i=aE,s=lE,r=cE,o=e.length;for(let a=0;a!==o;a++)s[a]=e[a],r[a]=t[a];e.length=0,t.length=0;for(let a=0;a!==o;a++){const l=s[a].id,c=r[a].id,u=l<c?`${l},${c}`:`${c},${l}`;i[u]=a,i.keys.push(u)}for(let a=0;a!==i.keys.length;a++){const l=i.keys.pop(),c=i[l];e.push(s[c]),t.push(r[c]),delete i[l]}}setWorld(e){}static boundingSphereCheck(e,t){const i=new w;e.position.vsub(t.position,i);const s=e.shapes[0],r=t.shapes[0];return Math.pow(s.boundingSphereRadius+r.boundingSphereRadius,2)>i.lengthSquared()}aabbQuery(e,t,i){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const oE=new w;new w;new Nt;new w;const aE={keys:[]},lE=[],cE=[];new w;new w;new w;class uE extends rE{constructor(){super()}collisionPairs(e,t,i){const s=e.bodies,r=s.length;let o,a;for(let l=0;l!==r;l++)for(let c=0;c!==l;c++)o=s[l],a=s[c],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,t,i)}aabbQuery(e,t,i){i===void 0&&(i=[]);for(let s=0;s<e.bodies.length;s++){const r=e.bodies[s];r.aabbNeedsUpdate&&r.updateAABB(),r.aabb.overlaps(t)&&i.push(r)}return i}}class ua{constructor(){this.rayFromWorld=new w,this.rayToWorld=new w,this.hitNormalWorld=new w,this.hitPointWorld=new w,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(e,t,i,s,r,o,a){this.rayFromWorld.copy(e),this.rayToWorld.copy(t),this.hitNormalWorld.copy(i),this.hitPointWorld.copy(s),this.shape=r,this.body=o,this.distance=a}}let fp,pp,mp,gp,xp,_p,vp;const gu={CLOSEST:1,ANY:2,ALL:4};fp=Ue.types.SPHERE;pp=Ue.types.PLANE;mp=Ue.types.BOX;gp=Ue.types.CYLINDER;xp=Ue.types.CONVEXPOLYHEDRON;_p=Ue.types.HEIGHTFIELD;vp=Ue.types.TRIMESH;class Dt{get[fp](){return this._intersectSphere}get[pp](){return this._intersectPlane}get[mp](){return this._intersectBox}get[gp](){return this._intersectConvex}get[xp](){return this._intersectConvex}get[_p](){return this._intersectHeightfield}get[vp](){return this._intersectTrimesh}constructor(e,t){e===void 0&&(e=new w),t===void 0&&(t=new w),this.from=e.clone(),this.to=t.clone(),this.direction=new w,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=Dt.ANY,this.result=new ua,this.hasHit=!1,this.callback=i=>{}}intersectWorld(e,t){return this.mode=t.mode||Dt.ANY,this.result=t.result||new ua,this.skipBackfaces=!!t.skipBackfaces,this.collisionFilterMask=typeof t.collisionFilterMask<"u"?t.collisionFilterMask:-1,this.collisionFilterGroup=typeof t.collisionFilterGroup<"u"?t.collisionFilterGroup:-1,this.checkCollisionResponse=typeof t.checkCollisionResponse<"u"?t.checkCollisionResponse:!0,t.from&&this.from.copy(t.from),t.to&&this.to.copy(t.to),this.callback=t.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(cd),Ml.length=0,e.broadphase.aabbQuery(e,cd,Ml),this.intersectBodies(Ml),this.hasHit}intersectBody(e,t){t&&(this.result=t,this.updateDirection());const i=this.checkCollisionResponse;if(i&&!e.collisionResponse||!(this.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&this.collisionFilterMask))return;const s=hE,r=dE;for(let o=0,a=e.shapes.length;o<a;o++){const l=e.shapes[o];if(!(i&&!l.collisionResponse)&&(e.quaternion.mult(e.shapeOrientations[o],r),e.quaternion.vmult(e.shapeOffsets[o],s),s.vadd(e.position,s),this.intersectShape(l,r,s,e),this.result.shouldStop))break}}intersectBodies(e,t){t&&(this.result=t,this.updateDirection());for(let i=0,s=e.length;!this.result.shouldStop&&i<s;i++)this.intersectBody(e[i])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(e,t,i,s){const r=this.from;if(TE(r,this.direction,i)>e.boundingSphereRadius)return;const a=this[e.type];a&&a.call(this,e,t,i,s,e)}_intersectBox(e,t,i,s,r){return this._intersectConvex(e.convexPolyhedronRepresentation,t,i,s,r)}_intersectPlane(e,t,i,s,r){const o=this.from,a=this.to,l=this.direction,c=new w(0,0,1);t.vmult(c,c);const u=new w;o.vsub(i,u);const h=u.dot(c);a.vsub(i,u);const d=u.dot(c);if(h*d>0||o.distanceTo(a)<h)return;const f=c.dot(l);if(Math.abs(f)<this.precision)return;const g=new w,x=new w,m=new w;o.vsub(i,g);const p=-c.dot(g)/f;l.scale(p,x),o.vadd(x,m),this.reportIntersection(c,m,r,s,-1)}getAABB(e){const{lowerBound:t,upperBound:i}=e,s=this.to,r=this.from;t.x=Math.min(s.x,r.x),t.y=Math.min(s.y,r.y),t.z=Math.min(s.z,r.z),i.x=Math.max(s.x,r.x),i.y=Math.max(s.y,r.y),i.z=Math.max(s.z,r.z)}_intersectHeightfield(e,t,i,s,r){e.data,e.elementSize;const o=fE;o.from.copy(this.from),o.to.copy(this.to),ht.pointToLocalFrame(i,t,o.from,o.from),ht.pointToLocalFrame(i,t,o.to,o.to),o.updateDirection();const a=pE;let l,c,u,h;l=c=0,u=h=e.data.length-1;const d=new _n;o.getAABB(d),e.getIndexOfPosition(d.lowerBound.x,d.lowerBound.y,a,!0),l=Math.max(l,a[0]),c=Math.max(c,a[1]),e.getIndexOfPosition(d.upperBound.x,d.upperBound.y,a,!0),u=Math.min(u,a[0]+1),h=Math.min(h,a[1]+1);for(let f=l;f<u;f++)for(let g=c;g<h;g++){if(this.result.shouldStop)return;if(e.getAabbAtIndex(f,g,d),!!d.overlapsRay(o)){if(e.getConvexTrianglePillar(f,g,!1),ht.pointToWorldFrame(i,t,e.pillarOffset,Io),this._intersectConvex(e.pillarConvex,t,Io,s,r,ud),this.result.shouldStop)return;e.getConvexTrianglePillar(f,g,!0),ht.pointToWorldFrame(i,t,e.pillarOffset,Io),this._intersectConvex(e.pillarConvex,t,Io,s,r,ud)}}}_intersectSphere(e,t,i,s,r){const o=this.from,a=this.to,l=e.radius,c=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,u=2*((a.x-o.x)*(o.x-i.x)+(a.y-o.y)*(o.y-i.y)+(a.z-o.z)*(o.z-i.z)),h=(o.x-i.x)**2+(o.y-i.y)**2+(o.z-i.z)**2-l**2,d=u**2-4*c*h,f=mE,g=gE;if(!(d<0))if(d===0)o.lerp(a,d,f),f.vsub(i,g),g.normalize(),this.reportIntersection(g,f,r,s,-1);else{const x=(-u-Math.sqrt(d))/(2*c),m=(-u+Math.sqrt(d))/(2*c);if(x>=0&&x<=1&&(o.lerp(a,x,f),f.vsub(i,g),g.normalize(),this.reportIntersection(g,f,r,s,-1)),this.result.shouldStop)return;m>=0&&m<=1&&(o.lerp(a,m,f),f.vsub(i,g),g.normalize(),this.reportIntersection(g,f,r,s,-1))}}_intersectConvex(e,t,i,s,r,o){const a=xE,l=hd,c=o&&o.faceList||null,u=e.faces,h=e.vertices,d=e.faceNormals,f=this.direction,g=this.from,x=this.to,m=g.distanceTo(x),p=c?c.length:u.length,_=this.result;for(let M=0;!_.shouldStop&&M<p;M++){const v=c?c[M]:M,S=u[v],E=d[v],A=t,D=i;l.copy(h[S[0]]),A.vmult(l,l),l.vadd(D,l),l.vsub(g,l),A.vmult(E,a);const b=f.dot(a);if(Math.abs(b)<this.precision)continue;const T=a.dot(l)/b;if(!(T<0)){f.scale(T,an),an.vadd(g,an),Cn.copy(h[S[0]]),A.vmult(Cn,Cn),D.vadd(Cn,Cn);for(let L=1;!_.shouldStop&&L<S.length-1;L++){Vn.copy(h[S[L]]),kn.copy(h[S[L+1]]),A.vmult(Vn,Vn),A.vmult(kn,kn),D.vadd(Vn,Vn),D.vadd(kn,kn);const V=an.distanceTo(g);!(Dt.pointInTriangle(an,Cn,Vn,kn)||Dt.pointInTriangle(an,Vn,Cn,kn))||V>m||this.reportIntersection(a,an,r,s,v)}}}}_intersectTrimesh(e,t,i,s,r,o){const a=_E,l=EE,c=wE,u=hd,h=vE,d=yE,f=SE,g=bE,x=ME,m=e.indices;e.vertices;const p=this.from,_=this.to,M=this.direction;c.position.copy(i),c.quaternion.copy(t),ht.vectorToLocalFrame(i,t,M,h),ht.pointToLocalFrame(i,t,p,d),ht.pointToLocalFrame(i,t,_,f),f.x*=e.scale.x,f.y*=e.scale.y,f.z*=e.scale.z,d.x*=e.scale.x,d.y*=e.scale.y,d.z*=e.scale.z,f.vsub(d,h),h.normalize();const v=d.distanceSquared(f);e.tree.rayQuery(this,c,l);for(let S=0,E=l.length;!this.result.shouldStop&&S!==E;S++){const A=l[S];e.getNormal(A,a),e.getVertex(m[A*3],Cn),Cn.vsub(d,u);const D=h.dot(a),b=a.dot(u)/D;if(b<0)continue;h.scale(b,an),an.vadd(d,an),e.getVertex(m[A*3+1],Vn),e.getVertex(m[A*3+2],kn);const T=an.distanceSquared(d);!(Dt.pointInTriangle(an,Vn,Cn,kn)||Dt.pointInTriangle(an,Cn,Vn,kn))||T>v||(ht.vectorToWorldFrame(t,a,x),ht.pointToWorldFrame(i,t,an,g),this.reportIntersection(x,g,r,s,A))}l.length=0}reportIntersection(e,t,i,s,r){const o=this.from,a=this.to,l=o.distanceTo(t),c=this.result;if(!(this.skipBackfaces&&e.dot(this.direction)>0))switch(c.hitFaceIndex=typeof r<"u"?r:-1,this.mode){case Dt.ALL:this.hasHit=!0,c.set(o,a,e,t,i,s,l),c.hasHit=!0,this.callback(c);break;case Dt.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(o,a,e,t,i,s,l));break;case Dt.ANY:this.hasHit=!0,c.hasHit=!0,c.set(o,a,e,t,i,s,l),c.shouldStop=!0;break}}static pointInTriangle(e,t,i,s){s.vsub(t,ms),i.vsub(t,wr),e.vsub(t,bl);const r=ms.dot(ms),o=ms.dot(wr),a=ms.dot(bl),l=wr.dot(wr),c=wr.dot(bl);let u,h;return(u=l*a-o*c)>=0&&(h=r*c-o*a)>=0&&u+h<r*l-o*o}}Dt.CLOSEST=gu.CLOSEST;Dt.ANY=gu.ANY;Dt.ALL=gu.ALL;const cd=new _n,Ml=[],wr=new w,bl=new w,hE=new w,dE=new Nt,an=new w,Cn=new w,Vn=new w,kn=new w;new w;new ua;const ud={faceList:[0]},Io=new w,fE=new Dt,pE=[],mE=new w,gE=new w,xE=new w;new w;new w;const hd=new w,_E=new w,vE=new w,yE=new w,SE=new w,ME=new w,bE=new w;new _n;const EE=[],wE=new ht,ms=new w,Lo=new w;function TE(n,e,t){t.vsub(n,ms);const i=ms.dot(e);return e.scale(i,Lo),Lo.vadd(n,Lo),t.distanceTo(Lo)}class AE{static defaults(e,t){e===void 0&&(e={});for(let i in t)i in e||(e[i]=t[i]);return e}}class dd{constructor(){this.spatial=new w,this.rotational=new w}multiplyElement(e){return e.spatial.dot(this.spatial)+e.rotational.dot(this.rotational)}multiplyVectors(e,t){return e.dot(this.spatial)+t.dot(this.rotational)}}class so{constructor(e,t,i,s){i===void 0&&(i=-1e6),s===void 0&&(s=1e6),this.id=so.idCounter++,this.minForce=i,this.maxForce=s,this.bi=e,this.bj=t,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new dd,this.jacobianElementB=new dd,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(e,t,i){const s=t,r=e,o=i;this.a=4/(o*(1+4*s)),this.b=4*s/(1+4*s),this.eps=4/(o*o*r*(1+4*s))}computeB(e,t,i){const s=this.computeGW(),r=this.computeGq(),o=this.computeGiMf();return-r*e-s*t-o*i}computeGq(){const e=this.jacobianElementA,t=this.jacobianElementB,i=this.bi,s=this.bj,r=i.position,o=s.position;return e.spatial.dot(r)+t.spatial.dot(o)}computeGW(){const e=this.jacobianElementA,t=this.jacobianElementB,i=this.bi,s=this.bj,r=i.velocity,o=s.velocity,a=i.angularVelocity,l=s.angularVelocity;return e.multiplyVectors(r,a)+t.multiplyVectors(o,l)}computeGWlambda(){const e=this.jacobianElementA,t=this.jacobianElementB,i=this.bi,s=this.bj,r=i.vlambda,o=s.vlambda,a=i.wlambda,l=s.wlambda;return e.multiplyVectors(r,a)+t.multiplyVectors(o,l)}computeGiMf(){const e=this.jacobianElementA,t=this.jacobianElementB,i=this.bi,s=this.bj,r=i.force,o=i.torque,a=s.force,l=s.torque,c=i.invMassSolve,u=s.invMassSolve;return r.scale(c,fd),a.scale(u,pd),i.invInertiaWorldSolve.vmult(o,md),s.invInertiaWorldSolve.vmult(l,gd),e.multiplyVectors(fd,md)+t.multiplyVectors(pd,gd)}computeGiMGt(){const e=this.jacobianElementA,t=this.jacobianElementB,i=this.bi,s=this.bj,r=i.invMassSolve,o=s.invMassSolve,a=i.invInertiaWorldSolve,l=s.invInertiaWorldSolve;let c=r+o;return a.vmult(e.rotational,Do),c+=Do.dot(e.rotational),l.vmult(t.rotational,Do),c+=Do.dot(t.rotational),c}addToWlambda(e){const t=this.jacobianElementA,i=this.jacobianElementB,s=this.bi,r=this.bj,o=CE;s.vlambda.addScaledVector(s.invMassSolve*e,t.spatial,s.vlambda),r.vlambda.addScaledVector(r.invMassSolve*e,i.spatial,r.vlambda),s.invInertiaWorldSolve.vmult(t.rotational,o),s.wlambda.addScaledVector(e,o,s.wlambda),r.invInertiaWorldSolve.vmult(i.rotational,o),r.wlambda.addScaledVector(e,o,r.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}so.idCounter=0;const fd=new w,pd=new w,md=new w,gd=new w,Do=new w,CE=new w;class RE extends so{constructor(e,t,i){i===void 0&&(i=1e6),super(e,t,0,i),this.restitution=0,this.ri=new w,this.rj=new w,this.ni=new w}computeB(e){const t=this.a,i=this.b,s=this.bi,r=this.bj,o=this.ri,a=this.rj,l=PE,c=IE,u=s.velocity,h=s.angularVelocity;s.force,s.torque;const d=r.velocity,f=r.angularVelocity;r.force,r.torque;const g=LE,x=this.jacobianElementA,m=this.jacobianElementB,p=this.ni;o.cross(p,l),a.cross(p,c),p.negate(x.spatial),l.negate(x.rotational),m.spatial.copy(p),m.rotational.copy(c),g.copy(r.position),g.vadd(a,g),g.vsub(s.position,g),g.vsub(o,g);const _=p.dot(g),M=this.restitution+1,v=M*d.dot(p)-M*u.dot(p)+f.dot(c)-h.dot(l),S=this.computeGiMf();return-_*t-v*i-e*S}getImpactVelocityAlongNormal(){const e=DE,t=NE,i=FE,s=UE,r=OE;return this.bi.position.vadd(this.ri,i),this.bj.position.vadd(this.rj,s),this.bi.getVelocityAtWorldPoint(i,e),this.bj.getVelocityAtWorldPoint(s,t),e.vsub(t,r),this.ni.dot(r)}}const PE=new w,IE=new w,LE=new w,DE=new w,NE=new w,FE=new w,UE=new w,OE=new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;class xd extends so{constructor(e,t,i){super(e,t,-i,i),this.ri=new w,this.rj=new w,this.t=new w}computeB(e){this.a;const t=this.b;this.bi,this.bj;const i=this.ri,s=this.rj,r=BE,o=zE,a=this.t;i.cross(a,r),s.cross(a,o);const l=this.jacobianElementA,c=this.jacobianElementB;a.negate(l.spatial),r.negate(l.rotational),c.spatial.copy(a),c.rotational.copy(o);const u=this.computeGW(),h=this.computeGiMf();return-u*t-e*h}}const BE=new w,zE=new w;class ys{constructor(e,t,i){i=AE.defaults(i,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=ys.idCounter++,this.materials=[e,t],this.friction=i.friction,this.restitution=i.restitution,this.contactEquationStiffness=i.contactEquationStiffness,this.contactEquationRelaxation=i.contactEquationRelaxation,this.frictionEquationStiffness=i.frictionEquationStiffness,this.frictionEquationRelaxation=i.frictionEquationRelaxation}}ys.idCounter=0;class Ss{constructor(e){e===void 0&&(e={});let t="";typeof e=="string"&&(t=e,e={}),this.name=t,this.id=Ss.idCounter++,this.friction=typeof e.friction<"u"?e.friction:-1,this.restitution=typeof e.restitution<"u"?e.restitution:-1}}Ss.idCounter=0;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new Dt;new w;new w;new w;new w(1,0,0),new w(0,1,0),new w(0,0,1);new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;class VE extends Ue{constructor(){super({type:Ue.types.PLANE}),this.worldNormal=new w,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(e){const t=this.worldNormal;t.set(0,0,1),e.vmult(t,t),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(e,t){return t===void 0&&(t=new w),t}volume(){return Number.MAX_VALUE}calculateWorldAABB(e,t,i,s){fi.set(0,0,1),t.vmult(fi,fi);const r=Number.MAX_VALUE;i.set(-r,-r,-r),s.set(r,r,r),fi.x===1?s.x=e.x:fi.x===-1&&(i.x=e.x),fi.y===1?s.y=e.y:fi.y===-1&&(i.y=e.y),fi.z===1?s.z=e.z:fi.z===-1&&(i.z=e.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}}const fi=new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new w;new _n;new w;new _n;new w;new w;new w;new w;new w;new w;new w;new _n;new w;new ht;new _n;class kE{constructor(){this.equations=[]}solve(e,t){return 0}addEquation(e){e.enabled&&!e.bi.isTrigger&&!e.bj.isTrigger&&this.equations.push(e)}removeEquation(e){const t=this.equations,i=t.indexOf(e);i!==-1&&t.splice(i,1)}removeAllEquations(){this.equations.length=0}}class yp extends kE{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(e,t){let i=0;const s=this.iterations,r=this.tolerance*this.tolerance,o=this.equations,a=o.length,l=t.bodies,c=l.length,u=e;let h,d,f,g,x,m;if(a!==0)for(let v=0;v!==c;v++)l[v].updateSolveMassProperties();const p=HE,_=WE,M=GE;p.length=a,_.length=a,M.length=a;for(let v=0;v!==a;v++){const S=o[v];M[v]=0,_[v]=S.computeB(u),p[v]=1/S.computeC()}if(a!==0){for(let E=0;E!==c;E++){const A=l[E],D=A.vlambda,b=A.wlambda;D.set(0,0,0),b.set(0,0,0)}for(i=0;i!==s;i++){g=0;for(let E=0;E!==a;E++){const A=o[E];h=_[E],d=p[E],m=M[E],x=A.computeGWlambda(),f=d*(h-x-A.eps*m),m+f<A.minForce?f=A.minForce-m:m+f>A.maxForce&&(f=A.maxForce-m),M[E]+=f,g+=f>0?f:-f,A.addToWlambda(f)}if(g*g<r)break}for(let E=0;E!==c;E++){const A=l[E],D=A.velocity,b=A.angularVelocity;A.vlambda.vmul(A.linearFactor,A.vlambda),D.vadd(A.vlambda,D),A.wlambda.vmul(A.angularFactor,A.wlambda),b.vadd(A.wlambda,b)}let v=o.length;const S=1/u;for(;v--;)o[v].multiplier=M[v]*S}return i}}const GE=[],HE=[],WE=[];class XE{constructor(){this.objects=[],this.type=Object}release(){const e=arguments.length;for(let t=0;t!==e;t++)this.objects.push(t<0||arguments.length<=t?void 0:arguments[t]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(e){const t=this.objects;for(;t.length>e;)t.pop();for(;t.length<e;)t.push(this.constructObject());return this}}class qE extends XE{constructor(){super(...arguments),this.type=w}constructObject(){return new w}}const Tt={sphereSphere:Ue.types.SPHERE,spherePlane:Ue.types.SPHERE|Ue.types.PLANE,boxBox:Ue.types.BOX|Ue.types.BOX,sphereBox:Ue.types.SPHERE|Ue.types.BOX,planeBox:Ue.types.PLANE|Ue.types.BOX,convexConvex:Ue.types.CONVEXPOLYHEDRON,sphereConvex:Ue.types.SPHERE|Ue.types.CONVEXPOLYHEDRON,planeConvex:Ue.types.PLANE|Ue.types.CONVEXPOLYHEDRON,boxConvex:Ue.types.BOX|Ue.types.CONVEXPOLYHEDRON,sphereHeightfield:Ue.types.SPHERE|Ue.types.HEIGHTFIELD,boxHeightfield:Ue.types.BOX|Ue.types.HEIGHTFIELD,convexHeightfield:Ue.types.CONVEXPOLYHEDRON|Ue.types.HEIGHTFIELD,sphereParticle:Ue.types.PARTICLE|Ue.types.SPHERE,planeParticle:Ue.types.PLANE|Ue.types.PARTICLE,boxParticle:Ue.types.BOX|Ue.types.PARTICLE,convexParticle:Ue.types.PARTICLE|Ue.types.CONVEXPOLYHEDRON,cylinderCylinder:Ue.types.CYLINDER,sphereCylinder:Ue.types.SPHERE|Ue.types.CYLINDER,planeCylinder:Ue.types.PLANE|Ue.types.CYLINDER,boxCylinder:Ue.types.BOX|Ue.types.CYLINDER,convexCylinder:Ue.types.CONVEXPOLYHEDRON|Ue.types.CYLINDER,heightfieldCylinder:Ue.types.HEIGHTFIELD|Ue.types.CYLINDER,particleCylinder:Ue.types.PARTICLE|Ue.types.CYLINDER,sphereTrimesh:Ue.types.SPHERE|Ue.types.TRIMESH,planeTrimesh:Ue.types.PLANE|Ue.types.TRIMESH};class jE{get[Tt.sphereSphere](){return this.sphereSphere}get[Tt.spherePlane](){return this.spherePlane}get[Tt.boxBox](){return this.boxBox}get[Tt.sphereBox](){return this.sphereBox}get[Tt.planeBox](){return this.planeBox}get[Tt.convexConvex](){return this.convexConvex}get[Tt.sphereConvex](){return this.sphereConvex}get[Tt.planeConvex](){return this.planeConvex}get[Tt.boxConvex](){return this.boxConvex}get[Tt.sphereHeightfield](){return this.sphereHeightfield}get[Tt.boxHeightfield](){return this.boxHeightfield}get[Tt.convexHeightfield](){return this.convexHeightfield}get[Tt.sphereParticle](){return this.sphereParticle}get[Tt.planeParticle](){return this.planeParticle}get[Tt.boxParticle](){return this.boxParticle}get[Tt.convexParticle](){return this.convexParticle}get[Tt.cylinderCylinder](){return this.convexConvex}get[Tt.sphereCylinder](){return this.sphereConvex}get[Tt.planeCylinder](){return this.planeConvex}get[Tt.boxCylinder](){return this.boxConvex}get[Tt.convexCylinder](){return this.convexConvex}get[Tt.heightfieldCylinder](){return this.heightfieldCylinder}get[Tt.particleCylinder](){return this.particleCylinder}get[Tt.sphereTrimesh](){return this.sphereTrimesh}get[Tt.planeTrimesh](){return this.planeTrimesh}constructor(e){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new qE,this.world=e,this.currentContactMaterial=e.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(e,t,i,s,r,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=e,a.bj=t):a=new RE(e,t),a.enabled=e.collisionResponse&&t.collisionResponse&&i.collisionResponse&&s.collisionResponse;const l=this.currentContactMaterial;a.restitution=l.restitution,a.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);const c=i.material||e.material,u=s.material||t.material;return c&&u&&c.restitution>=0&&u.restitution>=0&&(a.restitution=c.restitution*u.restitution),a.si=r||i,a.sj=o||s,a}createFrictionEquationsFromContact(e,t){const i=e.bi,s=e.bj,r=e.si,o=e.sj,a=this.world,l=this.currentContactMaterial;let c=l.friction;const u=r.material||i.material,h=o.material||s.material;if(u&&h&&u.friction>=0&&h.friction>=0&&(c=u.friction*h.friction),c>0){const d=c*(a.frictionGravity||a.gravity).length();let f=i.invMass+s.invMass;f>0&&(f=1/f);const g=this.frictionEquationPool,x=g.length?g.pop():new xd(i,s,d*f),m=g.length?g.pop():new xd(i,s,d*f);return x.bi=m.bi=i,x.bj=m.bj=s,x.minForce=m.minForce=-d*f,x.maxForce=m.maxForce=d*f,x.ri.copy(e.ri),x.rj.copy(e.rj),m.ri.copy(e.ri),m.rj.copy(e.rj),e.ni.tangents(x.t,m.t),x.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),m.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),x.enabled=m.enabled=e.enabled,t.push(x,m),!0}return!1}createFrictionFromAverage(e){let t=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(t,this.frictionResult)||e===1)return;const i=this.frictionResult[this.frictionResult.length-2],s=this.frictionResult[this.frictionResult.length-1];ls.setZero(),Gs.setZero(),Hs.setZero();const r=t.bi;t.bj;for(let a=0;a!==e;a++)t=this.result[this.result.length-1-a],t.bi!==r?(ls.vadd(t.ni,ls),Gs.vadd(t.ri,Gs),Hs.vadd(t.rj,Hs)):(ls.vsub(t.ni,ls),Gs.vadd(t.rj,Gs),Hs.vadd(t.ri,Hs));const o=1/e;Gs.scale(o,i.ri),Hs.scale(o,i.rj),s.ri.copy(i.ri),s.rj.copy(i.rj),ls.normalize(),ls.tangents(i.t,s.t)}getContacts(e,t,i,s,r,o,a){this.contactPointPool=r,this.frictionEquationPool=a,this.result=s,this.frictionResult=o;const l=KE,c=ZE,u=$E,h=YE;for(let d=0,f=e.length;d!==f;d++){const g=e[d],x=t[d];let m=null;g.material&&x.material&&(m=i.getContactMaterial(g.material,x.material)||null);const p=g.type&De.KINEMATIC&&x.type&De.STATIC||g.type&De.STATIC&&x.type&De.KINEMATIC||g.type&De.KINEMATIC&&x.type&De.KINEMATIC;for(let _=0;_<g.shapes.length;_++){g.quaternion.mult(g.shapeOrientations[_],l),g.quaternion.vmult(g.shapeOffsets[_],u),u.vadd(g.position,u);const M=g.shapes[_];for(let v=0;v<x.shapes.length;v++){x.quaternion.mult(x.shapeOrientations[v],c),x.quaternion.vmult(x.shapeOffsets[v],h),h.vadd(x.position,h);const S=x.shapes[v];if(!(M.collisionFilterMask&S.collisionFilterGroup&&S.collisionFilterMask&M.collisionFilterGroup)||u.distanceTo(h)>M.boundingSphereRadius+S.boundingSphereRadius)continue;let E=null;M.material&&S.material&&(E=i.getContactMaterial(M.material,S.material)||null),this.currentContactMaterial=E||m||i.defaultContactMaterial;const A=M.type|S.type,D=this[A];if(D){let b=!1;M.type<S.type?b=D.call(this,M,S,u,h,l,c,g,x,M,S,p):b=D.call(this,S,M,h,u,c,l,x,g,M,S,p),b&&p&&(i.shapeOverlapKeeper.set(M.id,S.id),i.bodyOverlapKeeper.set(g.id,x.id))}}}}}sphereSphere(e,t,i,s,r,o,a,l,c,u,h){if(h)return i.distanceSquared(s)<(e.radius+t.radius)**2;const d=this.createContactEquation(a,l,e,t,c,u);s.vsub(i,d.ni),d.ni.normalize(),d.ri.copy(d.ni),d.rj.copy(d.ni),d.ri.scale(e.radius,d.ri),d.rj.scale(-t.radius,d.rj),d.ri.vadd(i,d.ri),d.ri.vsub(a.position,d.ri),d.rj.vadd(s,d.rj),d.rj.vsub(l.position,d.rj),this.result.push(d),this.createFrictionEquationsFromContact(d,this.frictionResult)}spherePlane(e,t,i,s,r,o,a,l,c,u,h){const d=this.createContactEquation(a,l,e,t,c,u);if(d.ni.set(0,0,1),o.vmult(d.ni,d.ni),d.ni.negate(d.ni),d.ni.normalize(),d.ni.scale(e.radius,d.ri),i.vsub(s,No),d.ni.scale(d.ni.dot(No),_d),No.vsub(_d,d.rj),-No.dot(d.ni)<=e.radius){if(h)return!0;const f=d.ri,g=d.rj;f.vadd(i,f),f.vsub(a.position,f),g.vadd(s,g),g.vsub(l.position,g),this.result.push(d),this.createFrictionEquationsFromContact(d,this.frictionResult)}}boxBox(e,t,i,s,r,o,a,l,c,u,h){return e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t.convexPolyhedronRepresentation,i,s,r,o,a,l,e,t,h)}sphereBox(e,t,i,s,r,o,a,l,c,u,h){const d=this.v3pool,f=bw;i.vsub(s,Fo),t.getSideNormals(f,o);const g=e.radius;let x=!1;const m=ww,p=Tw,_=Aw;let M=null,v=0,S=0,E=0,A=null;for(let U=0,k=f.length;U!==k&&x===!1;U++){const q=yw;q.copy(f[U]);const ae=q.length();q.normalize();const oe=Fo.dot(q);if(oe<ae+g&&oe>0){const fe=Sw,ge=Mw;fe.copy(f[(U+1)%3]),ge.copy(f[(U+2)%3]);const Oe=fe.length(),Ve=ge.length();fe.normalize(),ge.normalize();const Ze=Fo.dot(fe),B=Fo.dot(ge);if(Ze<Oe&&Ze>-Oe&&B<Ve&&B>-Ve){const G=Math.abs(oe-ae-g);if((A===null||G<A)&&(A=G,S=Ze,E=B,M=ae,m.copy(q),p.copy(fe),_.copy(ge),v++,h))return!0}}}if(v){x=!0;const U=this.createContactEquation(a,l,e,t,c,u);m.scale(-g,U.ri),U.ni.copy(m),U.ni.negate(U.ni),m.scale(M,m),p.scale(S,p),m.vadd(p,m),_.scale(E,_),m.vadd(_,U.rj),U.ri.vadd(i,U.ri),U.ri.vsub(a.position,U.ri),U.rj.vadd(s,U.rj),U.rj.vsub(l.position,U.rj),this.result.push(U),this.createFrictionEquationsFromContact(U,this.frictionResult)}let D=d.get();const b=Ew;for(let U=0;U!==2&&!x;U++)for(let k=0;k!==2&&!x;k++)for(let q=0;q!==2&&!x;q++)if(D.set(0,0,0),U?D.vadd(f[0],D):D.vsub(f[0],D),k?D.vadd(f[1],D):D.vsub(f[1],D),q?D.vadd(f[2],D):D.vsub(f[2],D),s.vadd(D,b),b.vsub(i,b),b.lengthSquared()<g*g){if(h)return!0;x=!0;const ae=this.createContactEquation(a,l,e,t,c,u);ae.ri.copy(b),ae.ri.normalize(),ae.ni.copy(ae.ri),ae.ri.scale(g,ae.ri),ae.rj.copy(D),ae.ri.vadd(i,ae.ri),ae.ri.vsub(a.position,ae.ri),ae.rj.vadd(s,ae.rj),ae.rj.vsub(l.position,ae.rj),this.result.push(ae),this.createFrictionEquationsFromContact(ae,this.frictionResult)}d.release(D),D=null;const T=d.get(),L=d.get(),V=d.get(),F=d.get(),H=d.get(),z=f.length;for(let U=0;U!==z&&!x;U++)for(let k=0;k!==z&&!x;k++)if(U%3!==k%3){f[k].cross(f[U],T),T.normalize(),f[U].vadd(f[k],L),V.copy(i),V.vsub(L,V),V.vsub(s,V);const q=V.dot(T);T.scale(q,F);let ae=0;for(;ae===U%3||ae===k%3;)ae++;H.copy(i),H.vsub(F,H),H.vsub(L,H),H.vsub(s,H);const oe=Math.abs(q),fe=H.length();if(oe<f[ae].length()&&fe<g){if(h)return!0;x=!0;const ge=this.createContactEquation(a,l,e,t,c,u);L.vadd(F,ge.rj),ge.rj.copy(ge.rj),H.negate(ge.ni),ge.ni.normalize(),ge.ri.copy(ge.rj),ge.ri.vadd(s,ge.ri),ge.ri.vsub(i,ge.ri),ge.ri.normalize(),ge.ri.scale(g,ge.ri),ge.ri.vadd(i,ge.ri),ge.ri.vsub(a.position,ge.ri),ge.rj.vadd(s,ge.rj),ge.rj.vsub(l.position,ge.rj),this.result.push(ge),this.createFrictionEquationsFromContact(ge,this.frictionResult)}}d.release(T,L,V,F,H)}planeBox(e,t,i,s,r,o,a,l,c,u,h){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,t.convexPolyhedronRepresentation.id=t.id,this.planeConvex(e,t.convexPolyhedronRepresentation,i,s,r,o,a,l,e,t,h)}convexConvex(e,t,i,s,r,o,a,l,c,u,h,d,f){const g=Gw;if(!(i.distanceTo(s)>e.boundingSphereRadius+t.boundingSphereRadius)&&e.findSeparatingAxis(t,i,r,s,o,g,d,f)){const x=[],m=Hw;e.clipAgainstHull(i,r,t,s,o,g,-100,100,x);let p=0;for(let _=0;_!==x.length;_++){if(h)return!0;const M=this.createContactEquation(a,l,e,t,c,u),v=M.ri,S=M.rj;g.negate(M.ni),x[_].normal.negate(m),m.scale(x[_].depth,m),x[_].point.vadd(m,v),S.copy(x[_].point),v.vsub(i,v),S.vsub(s,S),v.vadd(i,v),v.vsub(a.position,v),S.vadd(s,S),S.vsub(l.position,S),this.result.push(M),p++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(M,this.frictionResult)}this.enableFrictionReduction&&p&&this.createFrictionFromAverage(p)}}sphereConvex(e,t,i,s,r,o,a,l,c,u,h){const d=this.v3pool;i.vsub(s,Cw);const f=t.faceNormals,g=t.faces,x=t.vertices,m=e.radius;let p=!1;for(let _=0;_!==x.length;_++){const M=x[_],v=Lw;o.vmult(M,v),s.vadd(v,v);const S=Iw;if(v.vsub(i,S),S.lengthSquared()<m*m){if(h)return!0;p=!0;const E=this.createContactEquation(a,l,e,t,c,u);E.ri.copy(S),E.ri.normalize(),E.ni.copy(E.ri),E.ri.scale(m,E.ri),v.vsub(s,E.rj),E.ri.vadd(i,E.ri),E.ri.vsub(a.position,E.ri),E.rj.vadd(s,E.rj),E.rj.vsub(l.position,E.rj),this.result.push(E),this.createFrictionEquationsFromContact(E,this.frictionResult);return}}for(let _=0,M=g.length;_!==M&&p===!1;_++){const v=f[_],S=g[_],E=Dw;o.vmult(v,E);const A=Nw;o.vmult(x[S[0]],A),A.vadd(s,A);const D=Fw;E.scale(-m,D),i.vadd(D,D);const b=Uw;D.vsub(A,b);const T=b.dot(E),L=Ow;if(i.vsub(A,L),T<0&&L.dot(E)>0){const V=[];for(let F=0,H=S.length;F!==H;F++){const z=d.get();o.vmult(x[S[F]],z),s.vadd(z,z),V.push(z)}if(vw(V,E,i)){if(h)return!0;p=!0;const F=this.createContactEquation(a,l,e,t,c,u);E.scale(-m,F.ri),E.negate(F.ni);const H=d.get();E.scale(-T,H);const z=d.get();E.scale(-m,z),i.vsub(s,F.rj),F.rj.vadd(z,F.rj),F.rj.vadd(H,F.rj),F.rj.vadd(s,F.rj),F.rj.vsub(l.position,F.rj),F.ri.vadd(i,F.ri),F.ri.vsub(a.position,F.ri),d.release(H),d.release(z),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult);for(let U=0,k=V.length;U!==k;U++)d.release(V[U]);return}else for(let F=0;F!==S.length;F++){const H=d.get(),z=d.get();o.vmult(x[S[(F+1)%S.length]],H),o.vmult(x[S[(F+2)%S.length]],z),s.vadd(H,H),s.vadd(z,z);const U=Rw;z.vsub(H,U);const k=Pw;U.unit(k);const q=d.get(),ae=d.get();i.vsub(H,ae);const oe=ae.dot(k);k.scale(oe,q),q.vadd(H,q);const fe=d.get();if(q.vsub(i,fe),oe>0&&oe*oe<U.lengthSquared()&&fe.lengthSquared()<m*m){if(h)return!0;const ge=this.createContactEquation(a,l,e,t,c,u);q.vsub(s,ge.rj),q.vsub(i,ge.ni),ge.ni.normalize(),ge.ni.scale(m,ge.ri),ge.rj.vadd(s,ge.rj),ge.rj.vsub(l.position,ge.rj),ge.ri.vadd(i,ge.ri),ge.ri.vsub(a.position,ge.ri),this.result.push(ge),this.createFrictionEquationsFromContact(ge,this.frictionResult);for(let Oe=0,Ve=V.length;Oe!==Ve;Oe++)d.release(V[Oe]);d.release(H),d.release(z),d.release(q),d.release(fe),d.release(ae);return}d.release(H),d.release(z),d.release(q),d.release(fe),d.release(ae)}for(let F=0,H=V.length;F!==H;F++)d.release(V[F])}}}planeConvex(e,t,i,s,r,o,a,l,c,u,h){const d=Bw,f=zw;f.set(0,0,1),r.vmult(f,f);let g=0;const x=Vw;for(let m=0;m!==t.vertices.length;m++)if(d.copy(t.vertices[m]),o.vmult(d,d),s.vadd(d,d),d.vsub(i,x),f.dot(x)<=0){if(h)return!0;const _=this.createContactEquation(a,l,e,t,c,u),M=kw;f.scale(f.dot(x),M),d.vsub(M,M),M.vsub(i,_.ri),_.ni.copy(f),d.vsub(s,_.rj),_.ri.vadd(i,_.ri),_.ri.vsub(a.position,_.ri),_.rj.vadd(s,_.rj),_.rj.vsub(l.position,_.rj),this.result.push(_),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(_,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(e,t,i,s,r,o,a,l,c,u,h){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t,i,s,r,o,a,l,e,t,h)}sphereHeightfield(e,t,i,s,r,o,a,l,c,u,h){const d=t.data,f=e.radius,g=t.elementSize,x=tT,m=eT;ht.pointToLocalFrame(s,o,i,m);let p=Math.floor((m.x-f)/g)-1,_=Math.ceil((m.x+f)/g)+1,M=Math.floor((m.y-f)/g)-1,v=Math.ceil((m.y+f)/g)+1;if(_<0||v<0||p>d.length||M>d[0].length)return;p<0&&(p=0),_<0&&(_=0),M<0&&(M=0),v<0&&(v=0),p>=d.length&&(p=d.length-1),_>=d.length&&(_=d.length-1),v>=d[0].length&&(v=d[0].length-1),M>=d[0].length&&(M=d[0].length-1);const S=[];t.getRectMinMax(p,M,_,v,S);const E=S[0],A=S[1];if(m.z-f>A||m.z+f<E)return;const D=this.result;for(let b=p;b<_;b++)for(let T=M;T<v;T++){const L=D.length;let V=!1;if(t.getConvexTrianglePillar(b,T,!1),ht.pointToWorldFrame(s,o,t.pillarOffset,x),i.distanceTo(x)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(V=this.sphereConvex(e,t.pillarConvex,i,x,r,o,a,l,e,t,h)),h&&V||(t.getConvexTrianglePillar(b,T,!0),ht.pointToWorldFrame(s,o,t.pillarOffset,x),i.distanceTo(x)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(V=this.sphereConvex(e,t.pillarConvex,i,x,r,o,a,l,e,t,h)),h&&V))return!0;if(D.length-L>2)return}}boxHeightfield(e,t,i,s,r,o,a,l,c,u,h){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexHeightfield(e.convexPolyhedronRepresentation,t,i,s,r,o,a,l,e,t,h)}convexHeightfield(e,t,i,s,r,o,a,l,c,u,h){const d=t.data,f=t.elementSize,g=e.boundingSphereRadius,x=Jw,m=Qw,p=Zw;ht.pointToLocalFrame(s,o,i,p);let _=Math.floor((p.x-g)/f)-1,M=Math.ceil((p.x+g)/f)+1,v=Math.floor((p.y-g)/f)-1,S=Math.ceil((p.y+g)/f)+1;if(M<0||S<0||_>d.length||v>d[0].length)return;_<0&&(_=0),M<0&&(M=0),v<0&&(v=0),S<0&&(S=0),_>=d.length&&(_=d.length-1),M>=d.length&&(M=d.length-1),S>=d[0].length&&(S=d[0].length-1),v>=d[0].length&&(v=d[0].length-1);const E=[];t.getRectMinMax(_,v,M,S,E);const A=E[0],D=E[1];if(!(p.z-g>D||p.z+g<A))for(let b=_;b<M;b++)for(let T=v;T<S;T++){let L=!1;if(t.getConvexTrianglePillar(b,T,!1),ht.pointToWorldFrame(s,o,t.pillarOffset,x),i.distanceTo(x)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(L=this.convexConvex(e,t.pillarConvex,i,x,r,o,a,l,null,null,h,m,null)),h&&L||(t.getConvexTrianglePillar(b,T,!0),ht.pointToWorldFrame(s,o,t.pillarOffset,x),i.distanceTo(x)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(L=this.convexConvex(e,t.pillarConvex,i,x,r,o,a,l,null,null,h,m,null)),h&&L))return!0}}sphereParticle(e,t,i,s,r,o,a,l,c,u,h){const d=jw;if(d.set(0,0,1),s.vsub(i,d),d.lengthSquared()<=e.radius*e.radius){if(h)return!0;const g=this.createContactEquation(l,a,t,e,c,u);d.normalize(),g.rj.copy(d),g.rj.scale(e.radius,g.rj),g.ni.copy(d),g.ni.negate(g.ni),g.ri.set(0,0,0),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}planeParticle(e,t,i,s,r,o,a,l,c,u,h){const d=Ww;d.set(0,0,1),a.quaternion.vmult(d,d);const f=Xw;if(s.vsub(a.position,f),d.dot(f)<=0){if(h)return!0;const x=this.createContactEquation(l,a,t,e,c,u);x.ni.copy(d),x.ni.negate(x.ni),x.ri.set(0,0,0);const m=qw;d.scale(d.dot(s),m),s.vsub(m,m),x.rj.copy(m),this.result.push(x),this.createFrictionEquationsFromContact(x,this.frictionResult)}}boxParticle(e,t,i,s,r,o,a,l,c,u,h){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexParticle(e.convexPolyhedronRepresentation,t,i,s,r,o,a,l,e,t,h)}convexParticle(e,t,i,s,r,o,a,l,c,u,h){let d=-1;const f=Yw,g=Kw;let x=null;const m=$w;if(m.copy(s),m.vsub(i,m),r.conjugate(vd),vd.vmult(m,m),e.pointIsInside(m)){e.worldVerticesNeedsUpdate&&e.computeWorldVertices(i,r),e.worldFaceNormalsNeedsUpdate&&e.computeWorldFaceNormals(r);for(let p=0,_=e.faces.length;p!==_;p++){const M=[e.worldVertices[e.faces[p][0]]],v=e.worldFaceNormals[p];s.vsub(M[0],yd);const S=-v.dot(yd);if(x===null||Math.abs(S)<Math.abs(x)){if(h)return!0;x=S,d=p,f.copy(v)}}if(d!==-1){const p=this.createContactEquation(l,a,t,e,c,u);f.scale(x,g),g.vadd(s,g),g.vsub(i,g),p.rj.copy(g),f.negate(p.ni),p.ri.set(0,0,0);const _=p.ri,M=p.rj;_.vadd(s,_),_.vsub(l.position,_),M.vadd(i,M),M.vsub(a.position,M),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(e,t,i,s,r,o,a,l,c,u,h){return this.convexHeightfield(t,e,s,i,o,r,l,a,c,u,h)}particleCylinder(e,t,i,s,r,o,a,l,c,u,h){return this.convexParticle(t,e,s,i,o,r,l,a,c,u,h)}sphereTrimesh(e,t,i,s,r,o,a,l,c,u,h){const d=rw,f=ow,g=aw,x=lw,m=cw,p=uw,_=pw,M=sw,v=nw,S=mw;ht.pointToLocalFrame(s,o,i,m);const E=e.radius;_.lowerBound.set(m.x-E,m.y-E,m.z-E),_.upperBound.set(m.x+E,m.y+E,m.z+E),t.getTrianglesInAABB(_,S);const A=iw,D=e.radius*e.radius;for(let F=0;F<S.length;F++)for(let H=0;H<3;H++)if(t.getVertex(t.indices[S[F]*3+H],A),A.vsub(m,v),v.lengthSquared()<=D){if(M.copy(A),ht.pointToWorldFrame(s,o,M,A),A.vsub(i,v),h)return!0;let z=this.createContactEquation(a,l,e,t,c,u);z.ni.copy(v),z.ni.normalize(),z.ri.copy(z.ni),z.ri.scale(e.radius,z.ri),z.ri.vadd(i,z.ri),z.ri.vsub(a.position,z.ri),z.rj.copy(A),z.rj.vsub(l.position,z.rj),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult)}for(let F=0;F<S.length;F++)for(let H=0;H<3;H++){t.getVertex(t.indices[S[F]*3+H],d),t.getVertex(t.indices[S[F]*3+(H+1)%3],f),f.vsub(d,g),m.vsub(f,p);const z=p.dot(g);m.vsub(d,p);let U=p.dot(g);if(U>0&&z<0&&(m.vsub(d,p),x.copy(g),x.normalize(),U=p.dot(x),x.scale(U,p),p.vadd(d,p),p.distanceTo(m)<e.radius)){if(h)return!0;const q=this.createContactEquation(a,l,e,t,c,u);p.vsub(m,q.ni),q.ni.normalize(),q.ni.scale(e.radius,q.ri),q.ri.vadd(i,q.ri),q.ri.vsub(a.position,q.ri),ht.pointToWorldFrame(s,o,p,p),p.vsub(l.position,q.rj),ht.vectorToWorldFrame(o,q.ni,q.ni),ht.vectorToWorldFrame(o,q.ri,q.ri),this.result.push(q),this.createFrictionEquationsFromContact(q,this.frictionResult)}}const b=hw,T=dw,L=fw,V=tw;for(let F=0,H=S.length;F!==H;F++){t.getTriangleVertices(S[F],b,T,L),t.getNormal(S[F],V),m.vsub(b,p);let z=p.dot(V);if(V.scale(z,p),m.vsub(p,p),z=p.distanceTo(m),Dt.pointInTriangle(p,b,T,L)&&z<e.radius){if(h)return!0;let U=this.createContactEquation(a,l,e,t,c,u);p.vsub(m,U.ni),U.ni.normalize(),U.ni.scale(e.radius,U.ri),U.ri.vadd(i,U.ri),U.ri.vsub(a.position,U.ri),ht.pointToWorldFrame(s,o,p,p),p.vsub(l.position,U.rj),ht.vectorToWorldFrame(o,U.ni,U.ni),ht.vectorToWorldFrame(o,U.ri,U.ri),this.result.push(U),this.createFrictionEquationsFromContact(U,this.frictionResult)}}S.length=0}planeTrimesh(e,t,i,s,r,o,a,l,c,u,h){const d=new w,f=JE;f.set(0,0,1),r.vmult(f,f);for(let g=0;g<t.vertices.length/3;g++){t.getVertex(g,d);const x=new w;x.copy(d),ht.pointToWorldFrame(s,o,x,d);const m=QE;if(d.vsub(i,m),f.dot(m)<=0){if(h)return!0;const _=this.createContactEquation(a,l,e,t,c,u);_.ni.copy(f);const M=ew;f.scale(m.dot(f),M),d.vsub(M,M),_.ri.copy(M),_.ri.vsub(a.position,_.ri),_.rj.copy(d),_.rj.vsub(l.position,_.rj),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}}}}const ls=new w,Gs=new w,Hs=new w,$E=new w,YE=new w,KE=new Nt,ZE=new Nt,JE=new w,QE=new w,ew=new w,tw=new w,nw=new w;new w;const iw=new w,sw=new w,rw=new w,ow=new w,aw=new w,lw=new w,cw=new w,uw=new w,hw=new w,dw=new w,fw=new w,pw=new _n,mw=[],No=new w,_d=new w,gw=new w,xw=new w,_w=new w;function vw(n,e,t){let i=null;const s=n.length;for(let r=0;r!==s;r++){const o=n[r],a=gw;n[(r+1)%s].vsub(o,a);const l=xw;a.cross(e,l);const c=_w;t.vsub(o,c);const u=l.dot(c);if(i===null||u>0&&i===!0||u<=0&&i===!1){i===null&&(i=u>0);continue}else return!1}return!0}const Fo=new w,yw=new w,Sw=new w,Mw=new w,bw=[new w,new w,new w,new w,new w,new w],Ew=new w,ww=new w,Tw=new w,Aw=new w,Cw=new w,Rw=new w,Pw=new w,Iw=new w,Lw=new w,Dw=new w,Nw=new w,Fw=new w,Uw=new w,Ow=new w;new w;new w;const Bw=new w,zw=new w,Vw=new w,kw=new w,Gw=new w,Hw=new w,Ww=new w,Xw=new w,qw=new w,jw=new w,vd=new Nt,$w=new w;new w;const Yw=new w,yd=new w,Kw=new w,Zw=new w,Jw=new w,Qw=[0],eT=new w,tT=new w;class Sd{constructor(){this.current=[],this.previous=[]}getKey(e,t){if(t<e){const i=t;t=e,e=i}return e<<16|t}set(e,t){const i=this.getKey(e,t),s=this.current;let r=0;for(;i>s[r];)r++;if(i!==s[r]){for(let o=s.length-1;o>=r;o--)s[o+1]=s[o];s[r]=i}}tick(){const e=this.current;this.current=this.previous,this.previous=e,this.current.length=0}getDiff(e,t){const i=this.current,s=this.previous,r=i.length,o=s.length;let a=0;for(let l=0;l<r;l++){let c=!1;const u=i[l];for(;u>s[a];)a++;c=u===s[a],c||Md(e,u)}a=0;for(let l=0;l<o;l++){let c=!1;const u=s[l];for(;u>i[a];)a++;c=i[a]===u,c||Md(t,u)}}}function Md(n,e){n.push((e&4294901760)>>16,e&65535)}const El=(n,e)=>n<e?`${n}-${e}`:`${e}-${n}`;class nT{constructor(){this.data={keys:[]}}get(e,t){const i=El(e,t);return this.data[i]}set(e,t,i){const s=El(e,t);this.get(e,t)||this.data.keys.push(s),this.data[s]=i}delete(e,t){const i=El(e,t),s=this.data.keys.indexOf(i);s!==-1&&this.data.keys.splice(s,1),delete this.data[i]}reset(){const e=this.data,t=e.keys;for(;t.length>0;){const i=t.pop();delete e[i]}}}class iT extends dp{constructor(e){e===void 0&&(e={}),super(),this.dt=-1,this.allowSleep=!!e.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=e.quatNormalizeSkip!==void 0?e.quatNormalizeSkip:0,this.quatNormalizeFast=e.quatNormalizeFast!==void 0?e.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new w,e.gravity&&this.gravity.copy(e.gravity),e.frictionGravity&&(this.frictionGravity=new w,this.frictionGravity.copy(e.frictionGravity)),this.broadphase=e.broadphase!==void 0?e.broadphase:new uE,this.bodies=[],this.hasActiveBodies=!1,this.solver=e.solver!==void 0?e.solver:new yp,this.constraints=[],this.narrowphase=new jE(this),this.collisionMatrix=new ad,this.collisionMatrixPrevious=new ad,this.bodyOverlapKeeper=new Sd,this.shapeOverlapKeeper=new Sd,this.contactmaterials=[],this.contactMaterialTable=new nT,this.defaultMaterial=new Ss("default"),this.defaultContactMaterial=new ys(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(e,t){return this.contactMaterialTable.get(e.id,t.id)}collisionMatrixTick(){const e=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=e,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(e){this.constraints.push(e)}removeConstraint(e){const t=this.constraints.indexOf(e);t!==-1&&this.constraints.splice(t,1)}rayTest(e,t,i){i instanceof ua?this.raycastClosest(e,t,{skipBackfaces:!0},i):this.raycastAll(e,t,{skipBackfaces:!0},i)}raycastAll(e,t,i,s){return i===void 0&&(i={}),i.mode=Dt.ALL,i.from=e,i.to=t,i.callback=s,wl.intersectWorld(this,i)}raycastAny(e,t,i,s){return i===void 0&&(i={}),i.mode=Dt.ANY,i.from=e,i.to=t,i.result=s,wl.intersectWorld(this,i)}raycastClosest(e,t,i,s){return i===void 0&&(i={}),i.mode=Dt.CLOSEST,i.from=e,i.to=t,i.result=s,wl.intersectWorld(this,i)}addBody(e){this.bodies.includes(e)||(e.index=this.bodies.length,this.bodies.push(e),e.world=this,e.initPosition.copy(e.position),e.initVelocity.copy(e.velocity),e.timeLastSleepy=this.time,e instanceof De&&(e.initAngularVelocity.copy(e.angularVelocity),e.initQuaternion.copy(e.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=e,this.idToBodyMap[e.id]=e,this.dispatchEvent(this.addBodyEvent))}removeBody(e){e.world=null;const t=this.bodies.length-1,i=this.bodies,s=i.indexOf(e);if(s!==-1){i.splice(s,1);for(let r=0;r!==i.length;r++)i[r].index=r;this.collisionMatrix.setNumObjects(t),this.removeBodyEvent.body=e,delete this.idToBodyMap[e.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(e){return this.idToBodyMap[e]}getShapeById(e){const t=this.bodies;for(let i=0;i<t.length;i++){const s=t[i].shapes;for(let r=0;r<s.length;r++){const o=s[r];if(o.id===e)return o}}return null}addContactMaterial(e){this.contactmaterials.push(e),this.contactMaterialTable.set(e.materials[0].id,e.materials[1].id,e)}removeContactMaterial(e){const t=this.contactmaterials.indexOf(e);t!==-1&&(this.contactmaterials.splice(t,1),this.contactMaterialTable.delete(e.materials[0].id,e.materials[1].id))}fixedStep(e,t){e===void 0&&(e=1/60),t===void 0&&(t=10);const i=Ut.now()/1e3;if(!this.lastCallTime)this.step(e,void 0,t);else{const s=i-this.lastCallTime;this.step(e,s,t)}this.lastCallTime=i}step(e,t,i){if(i===void 0&&(i=10),t===void 0)this.internalStep(e),this.time+=e;else{this.accumulator+=t;const s=Ut.now();let r=0;for(;this.accumulator>=e&&r<i&&(this.internalStep(e),this.accumulator-=e,r++,!(Ut.now()-s>e*1e3)););this.accumulator=this.accumulator%e;const o=this.accumulator/e;for(let a=0;a!==this.bodies.length;a++){const l=this.bodies[a];l.previousPosition.lerp(l.position,o,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,o,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=t}}internalStep(e){this.dt=e;const t=this.contacts,i=lT,s=cT,r=this.bodies.length,o=this.bodies,a=this.solver,l=this.gravity,c=this.doProfiling,u=this.profile,h=De.DYNAMIC;let d=-1/0;const f=this.constraints,g=aT;l.length();const x=l.x,m=l.y,p=l.z;let _=0;for(c&&(d=Ut.now()),_=0;_!==r;_++){const F=o[_];if(F.type===h){const H=F.force,z=F.mass;H.x+=z*x,H.y+=z*m,H.z+=z*p}}for(let F=0,H=this.subsystems.length;F!==H;F++)this.subsystems[F].update();c&&(d=Ut.now()),i.length=0,s.length=0,this.broadphase.collisionPairs(this,i,s),c&&(u.broadphase=Ut.now()-d);let M=f.length;for(_=0;_!==M;_++){const F=f[_];if(!F.collideConnected)for(let H=i.length-1;H>=0;H-=1)(F.bodyA===i[H]&&F.bodyB===s[H]||F.bodyB===i[H]&&F.bodyA===s[H])&&(i.splice(H,1),s.splice(H,1))}this.collisionMatrixTick(),c&&(d=Ut.now());const v=oT,S=t.length;for(_=0;_!==S;_++)v.push(t[_]);t.length=0;const E=this.frictionEquations.length;for(_=0;_!==E;_++)g.push(this.frictionEquations[_]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(i,s,this,t,v,this.frictionEquations,g),c&&(u.narrowphase=Ut.now()-d),c&&(d=Ut.now()),_=0;_<this.frictionEquations.length;_++)a.addEquation(this.frictionEquations[_]);const A=t.length;for(let F=0;F!==A;F++){const H=t[F],z=H.bi,U=H.bj,k=H.si,q=H.sj;let ae;if(z.material&&U.material?ae=this.getContactMaterial(z.material,U.material)||this.defaultContactMaterial:ae=this.defaultContactMaterial,ae.friction,z.material&&U.material&&(z.material.friction>=0&&U.material.friction>=0&&z.material.friction*U.material.friction,z.material.restitution>=0&&U.material.restitution>=0&&(H.restitution=z.material.restitution*U.material.restitution)),a.addEquation(H),z.allowSleep&&z.type===De.DYNAMIC&&z.sleepState===De.SLEEPING&&U.sleepState===De.AWAKE&&U.type!==De.STATIC){const oe=U.velocity.lengthSquared()+U.angularVelocity.lengthSquared(),fe=U.sleepSpeedLimit**2;oe>=fe*2&&(z.wakeUpAfterNarrowphase=!0)}if(U.allowSleep&&U.type===De.DYNAMIC&&U.sleepState===De.SLEEPING&&z.sleepState===De.AWAKE&&z.type!==De.STATIC){const oe=z.velocity.lengthSquared()+z.angularVelocity.lengthSquared(),fe=z.sleepSpeedLimit**2;oe>=fe*2&&(U.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(z,U,!0),this.collisionMatrixPrevious.get(z,U)||(Tr.body=U,Tr.contact=H,z.dispatchEvent(Tr),Tr.body=z,U.dispatchEvent(Tr)),this.bodyOverlapKeeper.set(z.id,U.id),this.shapeOverlapKeeper.set(k.id,q.id)}for(this.emitContactEvents(),c&&(u.makeContactConstraints=Ut.now()-d,d=Ut.now()),_=0;_!==r;_++){const F=o[_];F.wakeUpAfterNarrowphase&&(F.wakeUp(),F.wakeUpAfterNarrowphase=!1)}for(M=f.length,_=0;_!==M;_++){const F=f[_];F.update();for(let H=0,z=F.equations.length;H!==z;H++){const U=F.equations[H];a.addEquation(U)}}a.solve(e,this),c&&(u.solve=Ut.now()-d),a.removeAllEquations();const D=Math.pow;for(_=0;_!==r;_++){const F=o[_];if(F.type&h){const H=D(1-F.linearDamping,e),z=F.velocity;z.scale(H,z);const U=F.angularVelocity;if(U){const k=D(1-F.angularDamping,e);U.scale(k,U)}}}this.dispatchEvent(rT),c&&(d=Ut.now());const T=this.stepnumber%(this.quatNormalizeSkip+1)===0,L=this.quatNormalizeFast;for(_=0;_!==r;_++)o[_].integrate(e,T,L);this.clearForces(),this.broadphase.dirty=!0,c&&(u.integrate=Ut.now()-d),this.stepnumber+=1,this.dispatchEvent(sT);let V=!0;if(this.allowSleep)for(V=!1,_=0;_!==r;_++){const F=o[_];F.sleepTick(this.time),F.sleepState!==De.SLEEPING&&(V=!0)}this.hasActiveBodies=V}emitContactEvents(){const e=this.hasAnyEventListener("beginContact"),t=this.hasAnyEventListener("endContact");if((e||t)&&this.bodyOverlapKeeper.getDiff(pi,mi),e){for(let r=0,o=pi.length;r<o;r+=2)Ar.bodyA=this.getBodyById(pi[r]),Ar.bodyB=this.getBodyById(pi[r+1]),this.dispatchEvent(Ar);Ar.bodyA=Ar.bodyB=null}if(t){for(let r=0,o=mi.length;r<o;r+=2)Cr.bodyA=this.getBodyById(mi[r]),Cr.bodyB=this.getBodyById(mi[r+1]),this.dispatchEvent(Cr);Cr.bodyA=Cr.bodyB=null}pi.length=mi.length=0;const i=this.hasAnyEventListener("beginShapeContact"),s=this.hasAnyEventListener("endShapeContact");if((i||s)&&this.shapeOverlapKeeper.getDiff(pi,mi),i){for(let r=0,o=pi.length;r<o;r+=2){const a=this.getShapeById(pi[r]),l=this.getShapeById(pi[r+1]);gi.shapeA=a,gi.shapeB=l,a&&(gi.bodyA=a.body),l&&(gi.bodyB=l.body),this.dispatchEvent(gi)}gi.bodyA=gi.bodyB=gi.shapeA=gi.shapeB=null}if(s){for(let r=0,o=mi.length;r<o;r+=2){const a=this.getShapeById(mi[r]),l=this.getShapeById(mi[r+1]);xi.shapeA=a,xi.shapeB=l,a&&(xi.bodyA=a.body),l&&(xi.bodyB=l.body),this.dispatchEvent(xi)}xi.bodyA=xi.bodyB=xi.shapeA=xi.shapeB=null}}clearForces(){const e=this.bodies,t=e.length;for(let i=0;i!==t;i++){const s=e[i];s.force,s.torque,s.force.set(0,0,0),s.torque.set(0,0,0)}}}new _n;const wl=new Dt,Ut=globalThis.performance||{};if(!Ut.now){let n=Date.now();Ut.timing&&Ut.timing.navigationStart&&(n=Ut.timing.navigationStart),Ut.now=()=>Date.now()-n}new w;const sT={type:"postStep"},rT={type:"preStep"},Tr={type:De.COLLIDE_EVENT_NAME,body:null,contact:null},oT=[],aT=[],lT=[],cT=[],pi=[],mi=[],Ar={type:"beginContact",bodyA:null,bodyB:null},Cr={type:"endContact",bodyA:null,bodyB:null},gi={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},xi={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},bd=2e3,uT=80,Uo=35e4,Oo=100,hT=15e3,Ws=36,dT=5e4,fT="ㄅㄆㄇㄈㄉㄊㄋㄌㄍㄎㄏㄐㄑㄒㄓㄔㄕㄖㄗㄘㄙㄧㄨㄩㄚㄛㄜㄝㄞㄟㄠㄡㄢㄣㄤㄥㄦ".split(""),pT="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),Bo=1,zo=2,cs=4,Tl=8,Al=16;function mT(n,e){let t,i,s,r,o,a;const l=[],c=[],u=[],h=[];let d=[],f=0,g={P1:0,P2:0},x={word:[],nextSlotIndex:0,isGameOver:!1,gameOverTime:0,isClearing:!1,currentWordIndex:0},m,p;const _=new Ss("car"),M=new Ss("ground"),v=new Ss("obstacle");function S(B,G,ie="white",ue=256){const ce=document.createElement("canvas");ce.width=ue,ce.height=ue;const ve=ce.getContext("2d");return ve.fillStyle=G,ve.fillRect(0,0,ue,ue),ve.fillStyle=ie,ve.font=`bold ${ue*.7}px Arial`,ve.textAlign="center",ve.textBaseline="middle",ve.fillText(B,ue/2,ue*.45),/^[a-zA-Z0-9]$/.test(B)||ve.fillRect(ue*.2,ue*.85,ue*.6,ue*.08),new dl(ce)}function E(B,G="rgba(255,255,255,0.2)",ie=10){const ue=document.createElement("canvas");ue.width=512,ue.height=128;const ce=ue.getContext("2d");ce.fillStyle="rgba(0,0,0,0)",ce.fillRect(0,0,512,128),ce.fillStyle=G,ce.font="bold 60px Arial",ce.textAlign="center",ce.textBaseline="middle",ce.fillText(B,256,64);const ve=new dl(ue),I=new dt(new Qt(ie,ie/4),new fs({map:ve,transparent:!0}));return I.rotation.x=-Math.PI/2,I.raycast=()=>{},I}function A(){const B=new rt,G=Math.random()*.12,ie=.4+Math.random()*.4,ue=.15+Math.random()*.15;return B.setHSL(G,ie,ue),B}class D{constructor(G,ie,ue,ce,ve,I){zt(this,"mesh");zt(this,"body");zt(this,"id");zt(this,"char");zt(this,"team");zt(this,"isParking",!1);zt(this,"targetSpot",null);zt(this,"isParkedFinal",!1);zt(this,"lightBeams");zt(this,"isExiting",!1);zt(this,"exitTargetZ",0);zt(this,"isEntering",!0);zt(this,"targetEntryZ",0);zt(this,"entrySpeedMult",1);zt(this,"shakeTime",0);zt(this,"stuckTimer",0);zt(this,"reverseTimer",0);this.id=G,this.char=ve,this.team=I;const N=4.5,W=2,ee=8.5;this.mesh=new js;const $=new Vi({color:ce,metalness:.9,roughness:.15}),J=new dt(new Mn(N,W*.6,ee),$);J.position.y=W*.3,J.castShadow=!0,J.receiveShadow=!0,this.mesh.add(J);const P=new dt(new Mn(N*.85,W*.5,ee*.45),$);P.position.set(0,W*.75,-.6),P.castShadow=!0,P.receiveShadow=!0,this.mesh.add(P);const de=new dt(new Mn(N*.82,W*.7,.1),new Vi({color:8965375,transparent:!0,opacity:.4,metalness:1,roughness:0}));de.position.set(0,W*.85,1.4),de.rotation.x=-Math.PI/3.5,de.castShadow=!0,this.mesh.add(de);const le=new Mn(.8,.4,.2),se=new Vi({color:16777215,emissive:16777215,emissiveIntensity:1}),he=new dt(le,se);he.position.set(-1.4,W*.3,ee/2),this.mesh.add(he);const C=new dt(le,se);C.position.set(1.4,W*.3,ee/2),this.mesh.add(C);const y=new fs({map:S(ve,"#00000000","white"),transparent:!0,side:qn}),O=new dt(new Qt(4,4),y);O.rotation.x=-Math.PI/2,O.rotation.z=Math.PI,O.position.set(0,W+.1,-1.2),this.mesh.add(O),this.lightBeams=new js;const Z=new Qt(1.2,12),re=Z.attributes.position;re.setX(2,-4.5),re.setX(3,4.5);const Y=document.createElement("canvas");Y.width=128,Y.height=256;const Te=Y.getContext("2d"),xe=Te.createRadialGradient(64,10,0,64,10,240);xe.addColorStop(0,"rgba(255,255,255,0.5)"),xe.addColorStop(.2,"rgba(255,255,255,0.2)"),xe.addColorStop(.6,"rgba(255,255,255,0.05)"),xe.addColorStop(1,"rgba(255,255,255,0)"),Te.fillStyle=xe,Te.fillRect(0,0,128,256);const Re=new dl(Y),ze=new fs({map:Re,transparent:!0,blending:Vl,depthWrite:!1});[[-1.4,.12,ee/2+6],[1.4,.12,ee/2+6]].forEach(Se=>{const Me=new dt(Z,ze);Me.rotation.x=-Math.PI/2,Me.position.set(Se[0],Se[1],Se[2]),this.lightBeams.add(Me)}),this.mesh.add(this.lightBeams),this.lightBeams.visible=!1,t.add(this.mesh),this.body=new De({mass:bd,material:_,linearDamping:.75,angularDamping:.95}),this.body.addShape(new Hn(new w(N/2,W/2,ee/2))),this.body.position.set(ie,2,ue),I==="P1"&&this.body.quaternion.setFromEuler(0,Math.PI,0),this.body.angularFactor.set(0,1,0),this.body.collisionFilterGroup=cs,this.body.collisionFilterMask=Bo|zo|cs,r.addBody(this.body),this.mesh.userData.carId=G,this.body.allowSleep=!1,this.body.addEventListener("collide",Se=>{var Pe;if(this.isParkedFinal)return;const Me=Se.body;if(((Pe=Me.material)==null?void 0:Pe.name)==="car"){const Ee=l.find(je=>je.body===Me);if(Ee&&!Ee.isParkedFinal&&this.isParking&&Ee.isParking){const je=new w(this.targetSpot.x,0,this.targetSpot.z);this.body.position.distanceTo(je)<Me.position.distanceTo(je)&&Me.applyImpulse(Me.position.vsub(this.body.position).unit().scale(dT),new w(0,0,0))}}})}applySeparation(G){if(!this.isParkedFinal)for(const ie of G){if(ie===this||ie.isExiting)continue;const ue=this.body.position.distanceTo(ie.body.position),ce=6;if(ue<ce){const ve=this.body.position.vsub(ie.body.position);ve.y=0,ve.length()<.1&&(ve.x=1);const I=(ce-ue)*5e4;this.body.applyImpulse(ve.unit().scale(I),new w(0,0,0))}}}update(){const G=this.body.velocity,ie=G.length();if(ie>Oo&&G.scale(Oo/ie,G),this.mesh.position.copy(this.body.position),this.mesh.quaternion.copy(this.body.quaternion),this.shakeTime>0){this.shakeTime-=.016;const ue=Math.sin(this.shakeTime*40)*this.shakeTime;this.mesh.position.y+=Math.abs(ue)*1.2,this.mesh.rotation.z+=ue*.2}!this.isParkedFinal&&Math.abs(this.body.velocity.y)>.1&&(this.body.velocity.y*=.8),this.isExiting?this.body.collisionFilterMask=Bo|zo|cs:this.isEntering?this.body.collisionFilterMask=Bo|zo|cs|Tl|Al:this.body.collisionFilterMask=Bo|zo|cs|Tl|Al,this.isExiting?(this.driveToExit(),this.lightBeams.visible=!0):this.isEntering?(this.driveToEntry(),this.lightBeams.visible=!0):this.isParking&&this.targetSpot&&!this.isParkedFinal?(this.driveToTarget(),this.lightBeams.visible=!0):this.lightBeams.visible=!1}driveToEntry(){const G=this.targetEntryZ-this.body.position.z;if(Math.abs(G)<1){this.isEntering=!1,this.body.velocity.set(0,0,0);return}const ie=new w(0,0,1);this.body.quaternion.vmult(ie,ie);const ue=this.team==="P1"?e.p1Speed.value:e.p2Speed.value;this.body.applyForce(ie.scale(Uo*1.2*this.entrySpeedMult*ue),new w(0,0,0)),this.body.velocity.x*=.95}driveToExit(){const G=this.exitTargetZ,ie=0-this.body.position.x,ue=G-this.body.position.z,ce=Math.atan2(ie,ue),ve=new w(0,0,1);this.body.quaternion.vmult(ve,ve);const I=Math.atan2(ve.x,ve.z);let N=ce-I;for(;N>Math.PI;)N-=Math.PI*2;for(;N<-Math.PI;)N+=Math.PI*2;this.body.angularVelocity.y=N*5;const W=this.team==="P1"?e.p1Speed.value:e.p2Speed.value;Math.cos(N)>.1&&this.body.applyForce(ve.scale(Uo*W),new w(0,0,0))}driveToTarget(){if(!this.targetSpot)return;if(this.targetSpot.occupied){this.isParking=!1,this.targetSpot=null,this.body.velocity.set(0,0,0),this.body.angularVelocity.set(0,0,0);return}const G=new w(this.targetSpot.x,.5,this.targetSpot.z),ie=G.x-this.body.position.x,ue=G.z-this.body.position.z,ce=Math.sqrt(ie*ie+ue*ue),ve=Math.atan2(ie,ue),I=new w(0,0,1);this.body.quaternion.vmult(I,I);const N=Math.atan2(I.x,I.z);let W=ve-N;for(;W>Math.PI;)W-=Math.PI*2;for(;W<-Math.PI;)W+=Math.PI*2;const ee=Math.abs(W);if(ce<1.8&&ee<1.2){this.finishParking(G);return}const $=this.team==="P1"?e.p1Speed.value:e.p2Speed.value;if(this.reverseTimer>0){this.reverseTimer--,this.body.angularVelocity.y=-Math.sin(W)*5;const P=Uo*.8*$;this.body.applyForce(I.scale(-P),new w(0,0,0));const de=new w(0,1,0).cross(I,new w);this.body.velocity.x-=de.x*this.body.velocity.dot(de)*.95,this.body.velocity.z-=de.z*this.body.velocity.dot(de)*.95;return}if(ee>2||ce<20&&ee>1&&this.body.velocity.length()<5){this.reverseTimer=50;return}if(this.body.angularVelocity.y=W*5,Math.cos(W)>.1){const P=Uo*Math.min(1,ce/6)*$;this.body.applyForce(I.scale(P),new w(0,0,0))}const J=new w(0,1,0).cross(I,new w);this.body.velocity.x-=J.x*this.body.velocity.dot(J)*.97,this.body.velocity.z-=J.z*this.body.velocity.dot(J)*.97}boost(){if(this.isParkedFinal)return;const G=new w(0,0,1);this.body.quaternion.vmult(G,G),this.body.applyImpulse(G.scale(hT),new w(0,0,0))}shake(){if(this.shakeTime=.4,!this.isParkedFinal){this.body.applyImpulse(new w(0,2e3,0),new w(.5,0,.5));const G=new w((Math.random()-.5)*15e3,0,(Math.random()-.5)*15e3);this.body.applyImpulse(G,new w(0,0,0))}}finishParking(G){if(this.targetSpot.occupied){this.isParking=!1,this.targetSpot=null;return}this.targetSpot.occupied=!0,this.isParkedFinal=!0,this.isParking=!1,this.body.position.copy(G),this.body.velocity.set(0,0,0),this.body.angularVelocity.set(0,0,0),this.body.quaternion.setFromEuler(0,this.team==="P1"?Math.PI:0,0),this.body.type=De.STATIC,this.body.mass=0,this.body.updateMassProperties(),this.team==="P1"?g.P1++:g.P2++,b(this.team),e.onParkSuccess()}park(G){this.targetSpot=G,this.isParking=!0,this.body.wakeUp()}exit(){this.isExiting=!0,this.isParkedFinal=!1,this.isParking=!1,this.body.type=De.DYNAMIC,this.body.mass=bd,this.body.updateMassProperties(),this.exitTargetZ=this.team==="P1"?150:-150,this.body.wakeUp()}}function b(B){const G=m.material.map;if(G){const ue=G.image.getContext("2d");ue.clearRect(0,0,512,128),ue.fillStyle="#2563eb",ue.font="bold 70px Arial",ue.textAlign="center",ue.fillText(`P1 SCORE: ${g.P1}`,256,64),G.needsUpdate=!0}const ie=p.material.map;if(ie){const ue=ie.image.getContext("2d");ue.clearRect(0,0,512,128),ue.fillStyle="#dc2626",ue.font="bold 70px Arial",ue.textAlign="center",ue.fillText(`P2 SCORE: ${g.P2}`,256,64),ie.needsUpdate=!0}B&&e.onScore(B,g.P1+g.P2)}function T(){t=new C_,t.background=new rt(328965),t.fog=new du(328965,150,400),s=new Ob({antialias:!0,canvas:n}),s.setSize(n.clientWidth,n.clientHeight),s.shadowMap.enabled=!0,V(),window.addEventListener("resize",V),t.add(new V_(16777215,.4));const B=new z_(16777215,.8);B.position.set(40,180,40),B.castShadow=!0,B.shadow.camera.left=-200,B.shadow.camera.right=200,B.shadow.camera.top=200,B.shadow.camera.bottom=-200,B.shadow.camera.near=1,B.shadow.camera.far=400,B.shadow.bias=1e-4,B.shadow.mapSize.set(2048,2048),t.add(B),r=new iT,r.gravity.set(0,-9.82,0),r.solver instanceof yp&&(r.solver.iterations=50),r.allowSleep=!1,r.addContactMaterial(new ys(_,M,{friction:.05,restitution:.1})),r.addContactMaterial(new ys(_,v,{friction:.1,restitution:.1})),r.addContactMaterial(new ys(_,_,{friction:.5,restitution:0}));const G=new Vi({color:1710618,roughness:.8,metalness:0});o=new dt(new Qt(1e3,1e3),G),o.rotation.x=-Math.PI/2,o.receiveShadow=!0,t.add(o),a=new De({mass:0,material:M}),a.addShape(new VE),a.quaternion.setFromEuler(-Math.PI/2,0,0),r.addBody(a),z(-200,200),m=E("P1 SCORE: 0","#2563eb",15),m.position.set(-30,.1,15),t.add(m),p=E("P2 SCORE: 0","#dc2626",15),p.position.set(30,.1,-15),t.add(p);const ie=new fs({color:16711935,transparent:!0,opacity:.6,depthTest:!1,depthWrite:!1});for(let ue=0;ue<4;ue++){const ce=new De({mass:0,material:M});ce.collisionFilterGroup=Tl,ce.collisionFilterMask=cs,r.addBody(ce);const ve=new dt(new Mn(1,1,1),ie);ve.renderOrder=999,t.add(ve),h.push({body:ce,mesh:ve})}V(),window.addEventListener("keydown",ue=>{ue.key.toLowerCase()==="t"&&L()}),U(),ae()}function L(){const B=Math.random()>.5?"P1":"P2",G=new D(l.length,0,0,16777215,"T",B);G.isEntering=!1;const ie=Math.random()*Math.PI*2;G.body.velocity.set(Math.cos(ie)*150,0,Math.sin(ie)*150),l.push(G),console.log("Test Car Spawned!")}function V(){const B=n.clientWidth,G=n.clientHeight,ie=B/G,ue=G>B?Ws/(ie*1.5):Ws;i?(i.left=-ue*ie,i.right=ue*ie,i.top=ue,i.bottom=-ue,i.updateProjectionMatrix()):(i=new Ea(-ue*ie,ue*ie,ue,-ue,.1,1e3),i.position.set(0,150,0),i.lookAt(0,0,0)),s.setSize(B,G)}let F=5;function H(){if(h.length!==4)return;const B=n.clientWidth,G=n.clientHeight,ie=B/G,ue=G>B?Ws/(ie*1.5):Ws;F>1&&(F-=.04,F<1&&(F=1));const ce=(ue*ie+.5)*F,ve=(ue+.5)*F,I=50,N=100,W=1;h[0].body.position.set(0,0,-ve-I/2),h[0].body.shapes=[],h[0].body.addShape(new Hn(new w(ce+I,N/2,I/2))),h[0].mesh.position.set(0,N/2,-ve+W/2),h[0].mesh.scale.set(ce*2+2,N,W),h[1].body.position.set(0,0,ve+I/2),h[1].body.shapes=[],h[1].body.addShape(new Hn(new w(ce+I,N/2,I/2))),h[1].mesh.position.set(0,N/2,ve-W/2),h[1].mesh.scale.set(ce*2+2,N,W),h[2].body.position.set(-ce-I/2,0,0),h[2].body.shapes=[],h[2].body.addShape(new Hn(new w(I/2,N/2,ve+I))),h[2].mesh.position.set(-ce+W/2,N/2,0),h[2].mesh.scale.set(W,N,ve*2+2),h[3].body.position.set(ce+I/2,0,0),h[3].body.shapes=[],h[3].body.addShape(new Hn(new w(I/2,N/2,ve+I))),h[3].mesh.position.set(ce-W/2,N/2,0),h[3].mesh.scale.set(W,N,ve*2+2)}function z(B,G){const ce=new fs({color:16750848}),ve=-15-B;{const N=new Qt(1,ve),W=new dt(N,ce);W.rotation.x=-Math.PI/2,W.position.set(-2.5/2,.06,B+ve/2),t.add(W);const ee=new dt(N,ce);ee.rotation.x=-Math.PI/2,ee.position.set(2.5/2,.06,B+ve/2),t.add(ee)}const I=G-15;{const N=new Qt(1,I),W=new dt(N,ce);W.rotation.x=-Math.PI/2,W.position.set(-2.5/2,.06,15+I/2),t.add(W);const ee=new dt(N,ce);ee.rotation.x=-Math.PI/2,ee.position.set(2.5/2,.06,15+I/2),t.add(ee)}}function U(){F=5;const B=Mi.currentList.value;if(B.length===0)return;const G=B[Math.floor(Math.random()*B.length)];x.word=G.text.split(""),x.nextSlotIndex=0,x.isGameOver=!1,x.isClearing=!1,c.length=0;const ie=x.word.length,ue=12,ce=7,ve=11;for(let $=0;$<ie;$++){const J=($-(ie-1)/2)*ue;c.push({char:x.word[$],occupied:!1,x:J,z:0,winnerTeam:null});const P=new Vi({color:16777215,transparent:!0,opacity:.6,emissive:16777215,emissiveIntensity:.2}),de=new dt(new Qt(ce,.3),P);de.rotation.x=-Math.PI/2,de.position.set(J,.07,-ve/2),de.name=`spot_frame_${$}_t`,de.receiveShadow=!0,t.add(de);const le=new dt(new Qt(ce,.3),P);le.rotation.x=-Math.PI/2,le.position.set(J,.07,ve/2),le.name=`spot_frame_${$}_b`,le.receiveShadow=!0,t.add(le);const se=new dt(new Qt(.3,ve),P);se.rotation.x=-Math.PI/2,se.position.set(J-ce/2,.07,0),se.name=`spot_frame_${$}_l`,se.receiveShadow=!0,t.add(se);const he=new dt(new Qt(.3,ve),P);he.rotation.x=-Math.PI/2,he.position.set(J+ce/2,.07,0),he.name=`spot_frame_${$}_r`,he.receiveShadow=!0,t.add(he);const C=new dt(new Qt(5.5,5.5),new Vi({map:S(x.word[$],"#00000000","rgba(255,255,255,0.4)"),transparent:!0,emissive:16777215,emissiveIntensity:.1}));C.name=`spot_label_${$}`,C.rotation.x=-Math.PI/2,C.position.set(J,.08,0),C.raycast=()=>{},C.receiveShadow=!0,t.add(C)}for(let $=0;$<15;$++){const J=2+Math.random()*3,P=new w((Math.random()-.5)*110,J/2,(Math.random()-.5)*30),de=new dt(new Mn(J,J,J),new Vi({color:A(),metalness:.6,roughness:.4}));de.castShadow=!0,de.receiveShadow=!0,t.add(de);const le=new De({mass:uT,material:v,position:P});le.addShape(new Hn(new w(J/2,J/2,J/2))),r.addBody(le),u.push({mesh:de,body:le})}const I=15,N=5,W=new Vi({color:16724787,transparent:!0,opacity:.4});[10,-10].forEach($=>{const J=new De({mass:0});J.addShape(new Hn(new w(150,I/2,N/2))),J.position.set(0,I/2,$),J.collisionFilterGroup=Al,J.collisionFilterMask=cs,r.addBody(J);const P=new dt(new Mn(300,I,N),W);P.position.set(0,I/2,$),t.add(P),d.push({mesh:P,body:J})}),k("P1",22,91368),k("P2",-22,15208739),e.onSpeak(x.word.join(""))}function k(B,G,ie){const ce=x.word.some(J=>/^[a-zA-Z]$/.test(J))?pT:fT,ve=[...x.word,...x.word],I=Array(4).fill(0).map(()=>ce[Math.floor(Math.random()*ce.length)]),N=[...ve,...I].sort(()=>Math.random()-.5),W=n.clientWidth/n.clientHeight,$=(n.clientHeight>n.clientWidth?Ws/(W*1.5):Ws)*W*.8;N.forEach((J,P)=>{const de=B==="P1"?140:-140,le=$*2/(N.length+1),se=-$+(P+1)*le+(Math.random()-.5)*5,he=new D(l.length,se,de,ie,J,B),C=(Math.random()-.5)*.4;he.body.quaternion.setFromEuler(0,(B==="P1"?Math.PI:0)+C,0),he.body.quaternion.setFromEuler(0,(B==="P1"?Math.PI:0)+C,0),he.targetEntryZ=G+(Math.random()-.5)*10,he.entrySpeedMult=1+Math.random()*.8,l.push(he)})}let q;function ae(){if(q=requestAnimationFrame(ae),r.step(1/60),H(),x.isGameOver)x.isClearing?l.every(G=>Math.abs(G.body.position.z)>120)&&(f===0&&(f=Date.now()),Date.now()-f>300&&(f=0,fe())):Date.now()-x.gameOverTime>800&&(x.isClearing=!0,l.forEach(B=>B.exit()));else{for(;x.nextSlotIndex<c.length&&c[x.nextSlotIndex].occupied;)x.nextSlotIndex++;c.every(B=>B.occupied)&&(x.isGameOver=!0,x.gameOverTime=Date.now(),e.onSpeak(x.word.join("")))}if(l.forEach(B=>{B.applySeparation(l),B.update()}),oe.isDragging&&oe.car){const B=oe.car.body,G=10;B.velocity.x=(oe.targetPos.x-B.position.x)*G,B.velocity.z=(oe.targetPos.z-B.position.z)*G,B.angularVelocity.set(0,0,0),B.quaternion.setFromEuler(0,0,0)}u.forEach(B=>{const G=B.body.velocity;G.length()>Oo&&G.scale(Oo/G.length(),G),B.mesh.position.copy(B.body.position),B.mesh.quaternion.copy(B.body.quaternion)}),s.render(t,i)}const oe={car:null,isDragging:!1,startPos:new ot,targetPos:new Q,plane:new Xi(new Q(0,1,0),0)};function fe(){l.forEach(G=>{t.remove(G.mesh),r.removeBody(G.body)}),l.length=0,u.forEach(G=>{t.remove(G.mesh),r.removeBody(G.body)}),u.length=0;const B=[];t.traverse(G=>{G.name&&(G.name.startsWith("spot_")||G.name==="mission_complete_label")&&B.push(G)}),B.forEach(G=>t.remove(G)),U()}function ge(){d.length!==0&&(d.forEach(B=>{t.remove(B.mesh),r.removeBody(B.body)}),d=[])}function Oe(B){ge();const G=n.getBoundingClientRect(),ie=new ot((B.clientX-G.left)/G.width*2-1,-((B.clientY-G.top)/G.height)*2+1);oe.startPos.set(B.clientX,B.clientY);const ue=new Lh;ue.setFromCamera(ie,i);const ce=ue.intersectObjects(t.children,!0);for(const ve of ce){let I=ve.object;for(;I&&I.userData.carId===void 0&&I.parent;)I=I.parent;if(I&&I.userData.carId!==void 0){const N=l.find(W=>W.id===I.userData.carId);if(N&&!N.isEntering&&!N.isParkedFinal){oe.car=N,oe.isDragging=!1,ue.ray.intersectPlane(oe.plane,oe.targetPos);break}}}}function Ve(B){if(oe.car&&(oe.isDragging||Math.sqrt(Math.pow(B.clientX-oe.startPos.x,2)+Math.pow(B.clientY-oe.startPos.y,2))>5&&(oe.isDragging=!0),oe.isDragging)){const G=n.getBoundingClientRect(),ie=new ot((B.clientX-G.left)/G.width*2-1,-((B.clientY-G.top)/G.height)*2+1),ue=new Lh;ue.setFromCamera(ie,i),ue.ray.intersectPlane(oe.plane,oe.targetPos),oe.car.isParking&&(oe.car.stuckTimer=0)}}function Ze(){if(oe.car){if(!oe.isDragging){const B=oe.car;if(!B.isParking&&!B.isParkedFinal){e.onSpeak(B.char);let G=!1;for(let ie=x.nextSlotIndex;ie<x.word.length;ie++)if(c[ie].char===B.char&&!c[ie].occupied){if(l.some(ve=>ve.team===B.team&&ve.isParking&&ve.targetSpot===c[ie]))continue;if(ie===x.nextSlotIndex||l.some(ve=>ve.isParking&&ve.targetSpot===c[ie-1])){B.park(c[ie]),G=!0;break}}G||(e.onParkFail(),B.shake())}else B.shake(),B.isParking&&B.boost()}oe.car=null,oe.isDragging=!1}}return T(),n.addEventListener("pointerdown",Oe),document.addEventListener("pointermove",Ve),document.addEventListener("pointerup",Ze),ws(()=>{cancelAnimationFrame(q),n.removeEventListener("pointerdown",Oe),document.removeEventListener("pointermove",Ve),document.removeEventListener("pointerup",Ze),window.removeEventListener("resize",V),s.dispose()}),{scores:g,gameState:x}}const gT={class:"game-container"},xT={class:"player-overlay p2"},_T={class:"speed-control"},vT={class:"player-overlay p1"},yT={class:"speed-control"},ST=cr({__name:"ParkingGame",emits:["exit"],setup(n,{emit:e}){const t=e,{speak:i,playTone:s,playWrong:r}=ur(),o=it(null),a=it(1),l=it(1);return window.addEventListener("hashchange",()=>{window.location.hash.replace("#/","")||t("exit")}),Jr(()=>{window.location.hash="#/parking-jam",o.value&&mT(o.value,{p1Speed:a,p2Speed:l,onScore:()=>{s(600,"sine",.1)},onWin:()=>{s(800,"triangle",.3)},onSpeak:c=>i(c),onParkSuccess:()=>s(1e3,"sine",.05),onParkFail:()=>r()})}),(c,u)=>(qe(),Je("div",gT,[pe("canvas",{ref_key:"canvasRef",ref:o,class:"webgl"},null,512),pe("div",xT,[pe("div",_T,[u[2]||(u[2]=pe("span",null,"P2 SPEED",-1)),ea(pe("input",{type:"range","onUpdate:modelValue":u[0]||(u[0]=h=>l.value=h),min:"0.5",max:"3.0",step:"0.1"},null,512),[[zl,l.value,void 0,{number:!0}]])])]),pe("div",vT,[pe("div",yT,[u[3]||(u[3]=pe("span",null,"P1 SPEED",-1)),ea(pe("input",{type:"range","onUpdate:modelValue":u[1]||(u[1]=h=>a.value=h),min:"0.5",max:"3.0",step:"0.1"},null,512),[[zl,a.value,void 0,{number:!0}]])])])]))}}),MT=hr(ST,[["__scopeId","data-v-95c91531"]]),bT={key:0,class:"portal-container"},ET={class:"settings-panel"},wT={class:"setting-item"},TT={class:"setting-item"},AT={class:"setting-item"},CT=["value"],RT={class:"games-grid"},PT=["onClick"],IT={class:"game-icon"},LT={class:"game-info"},DT={class:"modal-content"},NT={class:"modal-header"},FT={class:"vocab-list"},UT=["onClick"],OT={class:"vocab-name"},BT={class:"vocab-count"},zT=cr({__name:"App",setup(n){const{speak:e}=ur(),t=it(window.location.hash.replace("#/","")||null),i=it(!1),s=[{id:"falling-words",name:"Star Words",desc:"Catch the words in space!",icon:"🚀"},{id:"spelling-mode",name:"Spell Master",desc:"Spell words letter by letter!",icon:"🛸"},{id:"duel-mode",name:"Duel",desc:"2-Player Battle!",icon:"⚔️"},{id:"code-knight",name:"Code Knight",desc:"Control by your voice!",icon:"🛡️"},{id:"parking-jam",name:"Parking Jam",desc:"Race to park cars!",icon:"🚗"},{id:"coming-soon",name:"More Games",desc:"Coming Soon...",icon:"🔐"}];window.addEventListener("hashchange",()=>{const d=window.location.hash.replace("#/","");t.value=d||null});const r=d=>{d!=="coming-soon"&&(t.value=d,window.location.hash=`#/${d}`)},o=()=>{t.value=null,window.location.hash=""},a=it([]),l=()=>{a.value=window.speechSynthesis.getVoices().filter(d=>d.lang.startsWith("en")||d.lang.startsWith("zh"))},c=()=>{e("Hello, 你好")};l(),window.speechSynthesis.onvoiceschanged!==void 0&&(window.speechSynthesis.onvoiceschanged=l);const u=()=>{i.value=!i.value},h=d=>{Mi.selectList(d),i.value=!1};return(d,f)=>t.value?t.value==="falling-words"?(qe(),qs(A0,{key:1,onExit:o})):t.value==="spelling-mode"?(qe(),qs(k0,{key:2,onExit:o})):t.value==="duel-mode"?(qe(),qs(cx,{key:3,onExit:o})):t.value==="code-knight"?(qe(),qs(bx,{key:4,onExit:o})):t.value==="parking-jam"?(qe(),qs(MT,{key:5,onExit:o})):Nn("",!0):(qe(),Je("div",bT,[f[8]||(f[8]=pe("h1",{class:"portal-title"},"Kid's Learning Ark",-1)),pe("div",ET,[pe("div",wT,[f[4]||(f[4]=pe("label",null,"Vocabulary:",-1)),pe("button",{class:"vocab-btn",onClick:u}," 📖 "+St(Ge(Mi).state.currentListName),1)]),pe("div",TT,[pe("label",null,"Speech Speed: "+St(Ge(Si).speechRate)+"x",1),ea(pe("input",{type:"range",min:"0.5",max:"2.0",step:"0.1","onUpdate:modelValue":f[0]||(f[0]=g=>Ge(Si).speechRate=g)},null,512),[[zl,Ge(Si).speechRate,void 0,{number:!0}]])]),pe("div",AT,[f[6]||(f[6]=pe("label",null,"Game Voice:",-1)),ea(pe("select",{"onUpdate:modelValue":f[1]||(f[1]=g=>Ge(Si).voiceURI=g)},[f[5]||(f[5]=pe("option",{value:null},"Default (Auto)",-1)),(qe(!0),Je(At,null,xn(a.value,g=>(qe(),Je("option",{key:g.voiceURI,value:g.voiceURI},St(g.name),9,CT))),128))],512),[[jg,Ge(Si).voiceURI]])]),pe("div",{class:"test-voice"},[pe("button",{onClick:c},"Test Voice")])]),pe("div",RT,[(qe(),Je(At,null,xn(s,g=>pe("div",{key:g.id,class:jn(["game-card",{disabled:g.id==="coming-soon"}]),onClick:x=>r(g.id)},[pe("div",IT,St(g.icon),1),pe("div",LT,[pe("h3",null,St(g.name),1),pe("p",null,St(g.desc),1)])],10,PT)),64))]),i.value?(qe(),Je("div",{key:0,class:"modal-overlay",onClick:f[3]||(f[3]=Xr(g=>i.value=!1,["self"]))},[pe("div",DT,[pe("div",NT,[f[7]||(f[7]=pe("h2",null,"Select Vocabulary",-1)),pe("button",{class:"close-btn",onClick:f[2]||(f[2]=g=>i.value=!1)},"×")]),pe("div",FT,[(qe(!0),Je(At,null,xn(Ge(Mi).lists,g=>(qe(),Je("div",{key:g.name,class:jn(["vocab-item",{active:g.name===Ge(Mi).state.currentListName}]),onClick:x=>h(g.name)},[pe("span",OT,St(g.name),1),pe("span",BT,St(g.data.length)+" words",1)],10,UT))),128))])])])):Nn("",!0)]))}}),VT=hr(zT,[["__scopeId","data-v-c468e9c2"]]);Jg(VT).mount("#app");
