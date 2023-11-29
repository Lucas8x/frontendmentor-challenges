(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))n(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function s(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(l){if(l.ep)return;l.ep=!0;const i=s(l);fetch(l.href,i)}})();const J=(e,t)=>e===t,A={equals:J};let X=V;const w=1,v=2,M={owned:null,cleanups:null,context:null,owner:null};var p=null;let N=null,u=null,a=null,m=null,U=0;function Y(e,t){const s=u,n=p,l=e.length===0,i=t===void 0?n:t,r=l?M:{owned:null,cleanups:null,context:i?i.context:null,owner:i},o=l?e:()=>e(()=>$(()=>T(r)));p=r,u=null;try{return y(o,!0)}finally{u=s,p=n}}function Z(e,t){t=t?Object.assign({},A,t):A;const s={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},n=l=>(typeof l=="function"&&(l=l(s.value)),I(s,l));return[F.bind(s),n]}function O(e,t,s){const n=D(e,t,!1,w);R(n)}function z(e,t,s){s=s?Object.assign({},A,s):A;const n=D(e,t,!0,0);return n.observers=null,n.observerSlots=null,n.comparator=s.equals||void 0,R(n),F.bind(n)}function $(e){if(u===null)return e();const t=u;u=null;try{return e()}finally{u=t}}function F(){if(this.sources&&this.state)if(this.state===w)R(this);else{const e=a;a=null,y(()=>C(this),!1),a=e}if(u){const e=this.observers?this.observers.length:0;u.sources?(u.sources.push(this),u.sourceSlots.push(e)):(u.sources=[this],u.sourceSlots=[e]),this.observers?(this.observers.push(u),this.observerSlots.push(u.sources.length-1)):(this.observers=[u],this.observerSlots=[u.sources.length-1])}return this.value}function I(e,t,s){let n=e.value;return(!e.comparator||!e.comparator(n,t))&&(e.value=t,e.observers&&e.observers.length&&y(()=>{for(let l=0;l<e.observers.length;l+=1){const i=e.observers[l],r=N&&N.running;r&&N.disposed.has(i),(r?!i.tState:!i.state)&&(i.pure?a.push(i):m.push(i),i.observers&&W(i)),r||(i.state=w)}if(a.length>1e6)throw a=[],new Error},!1)),t}function R(e){if(!e.fn)return;T(e);const t=p,s=u,n=U;u=p=e,k(e,e.value,n),u=s,p=t}function k(e,t,s){let n;try{n=e.fn(t)}catch(l){return e.pure&&(e.state=w,e.owned&&e.owned.forEach(T),e.owned=null),e.updatedAt=s+1,G(l)}(!e.updatedAt||e.updatedAt<=s)&&(e.updatedAt!=null&&"observers"in e?I(e,n):e.value=n,e.updatedAt=s)}function D(e,t,s,n=w,l){const i={fn:e,state:n,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:p,context:p?p.context:null,pure:s};return p===null||p!==M&&(p.owned?p.owned.push(i):p.owned=[i]),i}function H(e){if(e.state===0)return;if(e.state===v)return C(e);if(e.suspense&&$(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<U);)e.state&&t.push(e);for(let s=t.length-1;s>=0;s--)if(e=t[s],e.state===w)R(e);else if(e.state===v){const n=a;a=null,y(()=>C(e,t[0]),!1),a=n}}function y(e,t){if(a)return e();let s=!1;t||(a=[]),m?s=!0:m=[],U++;try{const n=e();return ee(s),n}catch(n){s||(m=null),a=null,G(n)}}function ee(e){if(a&&(V(a),a=null),e)return;const t=m;m=null,t.length&&y(()=>X(t),!1)}function V(e){for(let t=0;t<e.length;t++)H(e[t])}function C(e,t){e.state=0;for(let s=0;s<e.sources.length;s+=1){const n=e.sources[s];if(n.sources){const l=n.state;l===w?n!==t&&(!n.updatedAt||n.updatedAt<U)&&H(n):l===v&&C(n,t)}}}function W(e){for(let t=0;t<e.observers.length;t+=1){const s=e.observers[t];s.state||(s.state=v,s.pure?a.push(s):m.push(s),s.observers&&W(s))}}function T(e){let t;if(e.sources)for(;e.sources.length;){const s=e.sources.pop(),n=e.sourceSlots.pop(),l=s.observers;if(l&&l.length){const i=l.pop(),r=s.observerSlots.pop();n<l.length&&(i.sourceSlots[r]=n,l[n]=i,s.observerSlots[n]=r)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)T(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function te(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function G(e,t=p){throw te(e)}function K(e,t){return $(()=>e(t||{}))}function se(e,t,s){let n=s.length,l=t.length,i=n,r=0,o=0,f=t[l-1].nextSibling,h=null;for(;r<l||o<i;){if(t[r]===s[o]){r++,o++;continue}for(;t[l-1]===s[i-1];)l--,i--;if(l===r){const c=i<n?o?s[o-1].nextSibling:s[i-o]:f;for(;o<i;)e.insertBefore(s[o++],c)}else if(i===o)for(;r<l;)(!h||!h.has(t[r]))&&t[r].remove(),r++;else if(t[r]===s[i-1]&&s[o]===t[l-1]){const c=t[--l].nextSibling;e.insertBefore(s[o++],t[r++].nextSibling),e.insertBefore(s[--i],c),t[l]=s[i]}else{if(!h){h=new Map;let d=o;for(;d<i;)h.set(s[d],d++)}const c=h.get(t[r]);if(c!=null)if(o<c&&c<i){let d=r,x=1,g;for(;++d<l&&d<i&&!((g=h.get(t[d]))==null||g!==c+x);)x++;if(x>c-o){const Q=t[r];for(;o<c;)e.insertBefore(s[o++],Q)}else e.replaceChild(s[o++],t[r++])}else r++;else t[r++].remove()}}}function ne(e,t,s,n={}){let l;return Y(i=>{l=i,t===document?e():L(t,e(),t.firstChild?null:void 0,s)},n.owner),()=>{l(),t.textContent=""}}function _(e,t,s){let n;const l=()=>{const r=document.createElement("template");return r.innerHTML=e,s?r.content.firstChild.firstChild:r.content.firstChild},i=t?()=>$(()=>document.importNode(n||(n=l()),!0)):()=>(n||(n=l())).cloneNode(!0);return i.cloneNode=i,i}function S(e,t,s){s==null?e.removeAttribute(t):e.setAttribute(t,s)}function L(e,t,s,n){if(s!==void 0&&!n&&(n=[]),typeof t!="function")return E(e,t,n,s);O(l=>E(e,t(),l,s),n)}function E(e,t,s,n,l){for(;typeof s=="function";)s=s();if(t===s)return s;const i=typeof t,r=n!==void 0;if(e=r&&s[0]&&s[0].parentNode||e,i==="string"||i==="number")if(i==="number"&&(t=t.toString()),r){let o=s[0];o&&o.nodeType===3?o.data=t:o=document.createTextNode(t),s=b(e,s,n,o)}else s!==""&&typeof s=="string"?s=e.firstChild.data=t:s=e.textContent=t;else if(t==null||i==="boolean")s=b(e,s,n);else{if(i==="function")return O(()=>{let o=t();for(;typeof o=="function";)o=o();s=E(e,o,s,n)}),()=>s;if(Array.isArray(t)){const o=[],f=s&&Array.isArray(s);if(j(o,t,s,l))return O(()=>s=E(e,o,s,n,!0)),()=>s;if(o.length===0){if(s=b(e,s,n),r)return s}else f?s.length===0?q(e,o,n):se(e,s,o):(s&&b(e),q(e,o));s=o}else if(t.nodeType){if(Array.isArray(s)){if(r)return s=b(e,s,n,t);b(e,s,null,t)}else s==null||s===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);s=t}}return s}function j(e,t,s,n){let l=!1;for(let i=0,r=t.length;i<r;i++){let o=t[i],f=s&&s[i],h;if(!(o==null||o===!0||o===!1))if((h=typeof o)=="object"&&o.nodeType)e.push(o);else if(Array.isArray(o))l=j(e,o,f)||l;else if(h==="function")if(n){for(;typeof o=="function";)o=o();l=j(e,Array.isArray(o)?o:[o],Array.isArray(f)?f:[f])||l}else e.push(o),l=!0;else{const c=String(o);f&&f.nodeType===3&&f.data===c?e.push(f):e.push(document.createTextNode(c))}}return l}function q(e,t,s=null){for(let n=0,l=t.length;n<l;n++)e.insertBefore(t[n],s)}function b(e,t,s,n){if(s===void 0)return e.textContent="";const l=n||document.createTextNode("");if(t.length){let i=!1;for(let r=t.length-1;r>=0;r--){const o=t[r];if(l!==o){const f=o.parentNode===e;!i&&!r?f?e.replaceChild(l,o):e.insertBefore(l,s):f&&o.remove()}else i=!0}}else e.insertBefore(l,s);return[l]}const le=_('<li class="rounded-md bg-white shadow-xl"><h3 class="pt-4 text-center font-bold capitalize"></h3><div class="flex justify-center p-4"></div><footer class="flex text-center"><a class="w-full cursor-pointer rounded-bl-md bg-lime-600 px-4 py-2 font-semibold text-white hover:bg-lime-700">Live Demo</a><a class="w-full cursor-pointer rounded-br-md bg-purple-600 px-4 py-2 font-semibold text-white hover:bg-purple-700">Repository'),ie=_(`<div class="flex h-44 w-full items-center rounded-lg bg-white text-center"><span class="w-full whitespace-pre text-3xl font-medium">- NO PREVIEW - 
 :c`),oe=_('<img class="h-44 rounded-md">');function re({title:e,image:t,liveURL:s,repoURL:n}){const[l,i]=Z(!t);return(()=>{const r=le(),o=r.firstChild,f=o.nextSibling,h=f.nextSibling,c=h.firstChild,d=c.nextSibling;return L(o,e),L(f,(()=>{const x=z(()=>!!l());return()=>x()?ie():(()=>{const g=oe();return g.addEventListener("error",()=>i(!0)),S(g,"src",t),S(g,"alt",`${e} preview image`),g})()})()),S(c,"href",s),S(d,"href",n),r})()}const B="https://github.com/Lucas8x/frontendmentor-challenges/tree/main",P="https://raw.githubusercontent.com/Lucas8x/frontendmentor-challenges/main",ue=[{id:"qr-code-component-main",techs:["HTML","TailwindCSS"],image:P.concat("/qr-code-component-main/design/desktop-design.jpg"),liveURL:"./qr-code-component-main",repoURL:B.concat("/qr-code-component-main")},{id:"age-calculator-app-main",techs:["HTML","TailwindCSS"],image:P.concat("/age-calculator-app-main/design/desktop-design.jpg"),liveURL:"./age-calculator-app-main",repoURL:B.concat("/age-calculator-app-main")}],fe=_('<div class="m-auto flex w-full max-w-5xl flex-col items-center"><h1 class="text-center text-2xl font-bold sm:text-4xl">Frontend Mentor Challenges</h1><ul class="mt-8 grid gap-4"id=projectList>');function ce(){return(()=>{const e=fe(),t=e.firstChild,s=t.nextSibling;return L(s,()=>ue.map(n=>K(re,{get title(){return n.id.split("-").join(" ")},get image(){return n.image},get liveURL(){return n.liveURL},get repoURL(){return n.repoURL}}))),e})()}const ae=document.getElementById("root");ne(()=>K(ce,{}),ae);
