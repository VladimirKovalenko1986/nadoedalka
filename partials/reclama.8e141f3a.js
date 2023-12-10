const e=document.querySelector(".js-box"),t=document.querySelector(".js-timer");let n=11,l=null;function o(){e.style.display="none"}setTimeout((()=>{e.style.display="block",l=setInterval((()=>{n-=1,t.textContent=n,n||(clearInterval(l),t.textContent="X",t.addEventListener("click",o))}),1e3)}),5e3);
//# sourceMappingURL=reclama.8e141f3a.js.map
