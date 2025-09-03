(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();document.addEventListener("DOMContentLoaded",function(){console.log("Profile website with rain-like shooting stars loaded!"),c(),d(),p(),g()});function c(){const e=document.querySelectorAll(".skill-progress");setTimeout(()=>{e.forEach(t=>{const n=t.getAttribute("data-width");t.style.width=n+"%"})},1500)}function d(){const e=document.querySelector(".floating-dots"),t=document.querySelector(".floating-lines");f(e,0),u(t,0)}function f(e,t){const n=document.createElement("div");n.style.cssText=`
        position: absolute;
        width: 2px;
        height: 2px;
        background: rgba(96, 165, 250, 0.4);
        border-radius: 50%;
        left: ${40+t*20}%;
        top: ${40+t*10}%;
        animation: floatDots ${18+t*2}s linear infinite;
        animation-delay: ${-t*4}s;
        box-shadow: 0 0 8px rgba(96, 165, 250, 0.3);
    `,e.appendChild(n)}function u(e,t){const n=document.createElement("div");n.style.cssText=`
        position: absolute;
        width: 1px;
        height: 40px;
        background: linear-gradient(to bottom, transparent, rgba(96, 165, 250, 0.2), transparent);
        left: ${60+t*15}%;
        animation: floatLines ${14+t*2}s ease-in-out infinite;
        animation-delay: ${-t*3}s;
    `,e.appendChild(n)}function p(){const e=document.querySelector(".animated-bg"),t=document.createElement("div");t.className="shooting-stars",e.appendChild(t);for(let n=0;n<10;n++)m(t,n);setInterval(()=>{l(t)},800),setInterval(()=>{l(t)},1200),setInterval(()=>{l(t)},1600)}function m(e,t){const n=document.createElement("div");n.className="shooting-star";const r=t*10+Math.random()*8;n.style.cssText=`
        position: absolute;
        top: -50px;
        left: ${r}%;
        width: 2px;
        height: 2px;
        background: #ffffff;
        border-radius: 50%;
        box-shadow: 0 0 8px #60a5fa, 0 0 16px #60a5fa, 0 0 24px #60a5fa;
        animation: rainFall 5s linear infinite;
        animation-delay: ${t*.5}s;
    `,e.appendChild(n)}function l(e){const t=document.createElement("div");t.className="shooting-star";const n=Math.random()*95+2,r=Math.random()*1.5+1.5;t.style.cssText=`
        position: absolute;
        top: -50px;
        left: ${n}%;
        width: ${r}px;
        height: ${r}px;
        background: #ffffff;
        border-radius: 50%;
        box-shadow: 0 0 8px #60a5fa, 0 0 16px #60a5fa, 0 0 24px #60a5fa;
        animation: rainFall 5s linear forwards;
    `;const o=document.createElement("div");o.style.cssText=`
        position: absolute;
        top: -40px;
        left: 50%;
        width: 1px;
        height: 0;
        background: linear-gradient(to bottom, transparent, rgba(96, 165, 250, 0.8), #ffffff);
        transform: translateX(-50%);
        animation: rainTail 5s linear forwards;
    `,t.appendChild(o),e.appendChild(t),setTimeout(()=>{t.parentNode&&t.parentNode.removeChild(t)},5e3)}function g(){const e={threshold:.1,rootMargin:"0px 0px -20px 0px"},t=new IntersectionObserver(r=>{r.forEach(o=>{o.isIntersecting&&(o.target.style.opacity="1",o.target.style.transform="translateY(0)")})},e);document.querySelectorAll(".skill-item").forEach(r=>{t.observe(r)})}document.addEventListener("mousemove",e=>{const t=e.clientX/window.innerWidth,n=e.clientY/window.innerHeight,r=document.querySelector(".profile-image");if(r){const o=(n-.5)*5,a=(t-.5)*5;r.style.transform=`perspective(1000px) rotateX(${o}deg) rotateY(${a}deg)`}});document.querySelectorAll(".social-link").forEach(e=>{e.addEventListener("mouseenter",()=>{e.style.transform="translateY(-3px) scale(1.05)"}),e.addEventListener("mouseleave",()=>{e.style.transform="translateY(0) scale(1)"})});const s=document.querySelector(".profile-section");s&&(s.addEventListener("mouseenter",()=>{s.style.boxShadow="0 25px 50px rgba(30, 64, 175, 0.4)"}),s.addEventListener("mouseleave",()=>{s.style.boxShadow="0 20px 40px rgba(30, 64, 175, 0.3)"}));
