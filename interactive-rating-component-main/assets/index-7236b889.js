(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function d(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=d(e);fetch(e.href,t)}})();let s,i=!1;const l=document.getElementById("selectStarStep"),a=document.getElementById("numbersContainer"),u=a.getElementsByTagName("button"),m=document.getElementById("submitBtn"),f=document.getElementById("thankYouStep"),p=document.getElementById("submittedStarText");Array.from(u).forEach(r=>r.addEventListener("click",()=>y(r.value)));m.addEventListener("click",g);function y(r){s=r,Array.from(u).forEach(n=>n.dataset.selected=n.value===String(r))}function g(){i||!s||(i=!0,l.dataset.submitted=!0,f.dataset.submitted=!0,p.innerText=`You selected ${s} out of 5`)}
