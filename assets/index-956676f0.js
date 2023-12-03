(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();const J=(e,t)=>e===t,v={equals:J};let X=V;const w=1,A=2,P={owned:null,cleanups:null,context:null,owner:null};var p=null;let N=null,c=null,a=null,m=null,U=0;function Y(e,t){const n=c,s=p,i=e.length===0,l=t===void 0?s:t,r=i?P:{owned:null,cleanups:null,context:l?l.context:null,owner:l},o=i?e:()=>e(()=>R(()=>$(r)));p=r,c=null;try{return y(o,!0)}finally{c=n,p=s}}function Z(e,t){t=t?Object.assign({},v,t):v;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=i=>(typeof i=="function"&&(i=i(n.value)),I(n,i));return[F.bind(n),s]}function q(e,t,n){const s=D(e,t,!1,w);T(s)}function z(e,t,n){n=n?Object.assign({},v,n):v;const s=D(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,T(s),F.bind(s)}function R(e){if(c===null)return e();const t=c;c=null;try{return e()}finally{c=t}}function F(){if(this.sources&&this.state)if(this.state===w)T(this);else{const e=a;a=null,y(()=>C(this),!1),a=e}if(c){const e=this.observers?this.observers.length:0;c.sources?(c.sources.push(this),c.sourceSlots.push(e)):(c.sources=[this],c.sourceSlots=[e]),this.observers?(this.observers.push(c),this.observerSlots.push(c.sources.length-1)):(this.observers=[c],this.observerSlots=[c.sources.length-1])}return this.value}function I(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&y(()=>{for(let i=0;i<e.observers.length;i+=1){const l=e.observers[i],r=N&&N.running;r&&N.disposed.has(l),(r?!l.tState:!l.state)&&(l.pure?a.push(l):m.push(l),l.observers&&W(l)),r||(l.state=w)}if(a.length>1e6)throw a=[],new Error},!1)),t}function T(e){if(!e.fn)return;$(e);const t=p,n=c,s=U;c=p=e,k(e,e.value,s),c=n,p=t}function k(e,t,n){let s;try{s=e.fn(t)}catch(i){return e.pure&&(e.state=w,e.owned&&e.owned.forEach($),e.owned=null),e.updatedAt=n+1,G(i)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?I(e,s):e.value=s,e.updatedAt=n)}function D(e,t,n,s=w,i){const l={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:p,context:p?p.context:null,pure:n};return p===null||p!==P&&(p.owned?p.owned.push(l):p.owned=[l]),l}function H(e){if(e.state===0)return;if(e.state===A)return C(e);if(e.suspense&&R(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<U);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===w)T(e);else if(e.state===A){const s=a;a=null,y(()=>C(e,t[0]),!1),a=s}}function y(e,t){if(a)return e();let n=!1;t||(a=[]),m?n=!0:m=[],U++;try{const s=e();return ee(n),s}catch(s){n||(m=null),a=null,G(s)}}function ee(e){if(a&&(V(a),a=null),e)return;const t=m;m=null,t.length&&y(()=>X(t),!1)}function V(e){for(let t=0;t<e.length;t++)H(e[t])}function C(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const s=e.sources[n];if(s.sources){const i=s.state;i===w?s!==t&&(!s.updatedAt||s.updatedAt<U)&&H(s):i===A&&C(s,t)}}}function W(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=A,n.pure?a.push(n):m.push(n),n.observers&&W(n))}}function $(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const l=i.pop(),r=n.observerSlots.pop();s<i.length&&(l.sourceSlots[r]=s,i[s]=l,n.observerSlots[s]=r)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)$(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function te(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function G(e,t=p){throw te(e)}function K(e,t){return R(()=>e(t||{}))}function ne(e,t,n){let s=n.length,i=t.length,l=s,r=0,o=0,u=t[i-1].nextSibling,d=null;for(;r<i||o<l;){if(t[r]===n[o]){r++,o++;continue}for(;t[i-1]===n[l-1];)i--,l--;if(i===r){const f=l<s?o?n[o-1].nextSibling:n[l-o]:u;for(;o<l;)e.insertBefore(n[o++],f)}else if(l===o)for(;r<i;)(!d||!d.has(t[r]))&&t[r].remove(),r++;else if(t[r]===n[l-1]&&n[o]===t[i-1]){const f=t[--i].nextSibling;e.insertBefore(n[o++],t[r++].nextSibling),e.insertBefore(n[--l],f),t[i]=n[l]}else{if(!d){d=new Map;let h=o;for(;h<l;)d.set(n[h],h++)}const f=d.get(t[r]);if(f!=null)if(o<f&&f<l){let h=r,x=1,g;for(;++h<i&&h<l&&!((g=d.get(t[h]))==null||g!==f+x);)x++;if(x>f-o){const Q=t[r];for(;o<f;)e.insertBefore(n[o++],Q)}else e.replaceChild(n[o++],t[r++])}else r++;else t[r++].remove()}}}function se(e,t,n,s={}){let i;return Y(l=>{i=l,t===document?e():L(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{i(),t.textContent=""}}function _(e,t,n){let s;const i=()=>{const r=document.createElement("template");return r.innerHTML=e,n?r.content.firstChild.firstChild:r.content.firstChild},l=t?()=>R(()=>document.importNode(s||(s=i()),!0)):()=>(s||(s=i())).cloneNode(!0);return l.cloneNode=l,l}function S(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function L(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return E(e,t,s,n);q(i=>E(e,t(),i,n),s)}function E(e,t,n,s,i){for(;typeof n=="function";)n=n();if(t===n)return n;const l=typeof t,r=s!==void 0;if(e=r&&n[0]&&n[0].parentNode||e,l==="string"||l==="number")if(l==="number"&&(t=t.toString()),r){let o=n[0];o&&o.nodeType===3?o.data=t:o=document.createTextNode(t),n=b(e,n,s,o)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t;else if(t==null||l==="boolean")n=b(e,n,s);else{if(l==="function")return q(()=>{let o=t();for(;typeof o=="function";)o=o();n=E(e,o,n,s)}),()=>n;if(Array.isArray(t)){const o=[],u=n&&Array.isArray(n);if(B(o,t,n,i))return q(()=>n=E(e,o,n,s,!0)),()=>n;if(o.length===0){if(n=b(e,n,s),r)return n}else u?n.length===0?M(e,o,s):ne(e,n,o):(n&&b(e),M(e,o));n=o}else if(t.nodeType){if(Array.isArray(n)){if(r)return n=b(e,n,s,t);b(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function B(e,t,n,s){let i=!1;for(let l=0,r=t.length;l<r;l++){let o=t[l],u=n&&n[l],d;if(!(o==null||o===!0||o===!1))if((d=typeof o)=="object"&&o.nodeType)e.push(o);else if(Array.isArray(o))i=B(e,o,u)||i;else if(d==="function")if(s){for(;typeof o=="function";)o=o();i=B(e,Array.isArray(o)?o:[o],Array.isArray(u)?u:[u])||i}else e.push(o),i=!0;else{const f=String(o);u&&u.nodeType===3&&u.data===f?e.push(u):e.push(document.createTextNode(f))}}return i}function M(e,t,n=null){for(let s=0,i=t.length;s<i;s++)e.insertBefore(t[s],n)}function b(e,t,n,s){if(n===void 0)return e.textContent="";const i=s||document.createTextNode("");if(t.length){let l=!1;for(let r=t.length-1;r>=0;r--){const o=t[r];if(i!==o){const u=o.parentNode===e;!l&&!r?u?e.replaceChild(i,o):e.insertBefore(i,n):u&&o.remove()}else l=!0}}else e.insertBefore(i,n);return[i]}const ie=_('<li class="w-full rounded-md bg-white shadow-xl"><h3 class="pt-4 text-center font-bold capitalize"></h3><div class="flex justify-center p-4"></div><footer class="flex text-center"><a class="w-full cursor-pointer rounded-bl-md bg-lime-600 px-4 py-2 font-semibold text-white hover:bg-lime-700">Live Demo</a><a class="w-full cursor-pointer rounded-br-md bg-purple-600 px-4 py-2 font-semibold text-white hover:bg-purple-700">Repository'),le=_(`<div class="flex h-44 w-full items-center rounded-lg bg-white text-center"><span class="w-full whitespace-pre text-3xl font-medium">- NO PREVIEW - 
 :c`),oe=_('<img class="h-44 rounded-md">');function re({title:e,image:t,liveURL:n,repoURL:s}){const[i,l]=Z(!t);return(()=>{const r=ie(),o=r.firstChild,u=o.nextSibling,d=u.nextSibling,f=d.firstChild,h=f.nextSibling;return L(o,e),L(u,(()=>{const x=z(()=>!!i());return()=>x()?le():(()=>{const g=oe();return g.addEventListener("error",()=>l(!0)),S(g,"src",t),S(g,"alt",`${e} preview image`),g})()})()),S(f,"href",n),S(h,"href",s),r})()}const j="https://github.com/Lucas8x/frontendmentor-challenges/tree/main",O="https://raw.githubusercontent.com/Lucas8x/frontendmentor-challenges/main",ce=[{id:"qr-code-component-main",techs:["HTML","TailwindCSS"],image:O.concat("/qr-code-component-main/design/desktop-design.jpg"),liveURL:"./qr-code-component-main",repoURL:j.concat("/qr-code-component-main")},{id:"age-calculator-app-main",techs:["HTML","TailwindCSS"],image:O.concat("/age-calculator-app-main/design/desktop-design.jpg"),liveURL:"./age-calculator-app-main",repoURL:j.concat("/age-calculator-app-main")},{id:"interactive-rating-component-main",techs:["HTML","TailwindCSS"],image:O.concat("/interactive-rating-component-main/design/desktop-design.jpg"),liveURL:"./interactive-rating-component-main",repoURL:j.concat("/interactive-rating-component-main")}],ue=_('<div class="m-auto flex w-full max-w-5xl flex-col items-center pt-4"><h1 class="text-center text-2xl font-bold sm:text-4xl">Frontend Mentor Challenges</h1><ul class="mt-8 grid gap-4 md:grid-cols-2"id=projectList>');function fe(){return(()=>{const e=ue(),t=e.firstChild,n=t.nextSibling;return L(n,()=>ce.map(s=>K(re,{get title(){return s.id.split("-").join(" ")},get image(){return s.image},get liveURL(){return s.liveURL},get repoURL(){return s.repoURL}}))),e})()}const ae=document.getElementById("root");se(()=>K(fe,{}),ae);
