!function(){var e=document.querySelector(".js-box"),t=document.querySelector(".js-timer"),n=11,o=null;function l(){e.style.display="none"}setTimeout((function(){e.style.display="block",o=setInterval((function(){n-=1,t.textContent=n,n||(clearInterval(o),t.textContent="X",t.addEventListener("click",l))}),1e3)}),5e3)}();
//# sourceMappingURL=reclama.dccbaeb1.js.map
