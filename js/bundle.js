!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){e.exports=r(1)},function(e,t,r){"use strict";r.r(t);r(2);var n,o=document.body,c=o.querySelector(".services__btn"),i=o.querySelector(".services__descr-further"),a=o.querySelector(".services__descr-end"),s=o.querySelector(".services__arrow"),l=o.querySelector(".services__read"),d=o.querySelector(".wrapper__modal-call");c.addEventListener("click",(function(){i.classList.toggle("services__descr-further--active"),a.classList.toggle("services__descr-end--active"),s.classList.toggle("rotate"),"Читать далее"===l.textContent?l.textContent="Скрыть":l.textContent="Читать далее"}));var u=window.matchMedia("(max-width: 768px)");n=new Swiper(".swiper",{direction:"horizontal",loop:!1,spaceBetween:16,pagination:{el:".swiper-pagination",clickable:!0}}),u.addEventListener("change",(function(e){e.matches&&!n?n=new Swiper(".swiper",{direction:"horizontal",loop:!1,spaceBetween:16,pagination:{el:".swiper-pagination",clickable:!0}}):(n.forEach((function(e){return e.disable()})),n.forEach((function(e){return e.destroy(!1,!0)})),n=null)}));var f=o.querySelector(".brands"),p=f.querySelector(".swiper-wrapper"),_=f.querySelector(".button__show-more"),y=_.querySelector(".text"),v=_.querySelector(".brands__arrow"),b=f.querySelectorAll(".swiper-slide--hidden"),m=o.querySelector(".technic"),S=m.querySelector(".technic__swiper-wrapper"),g=m.querySelector(".button__show-more"),w=g.querySelector(".text"),L=g.querySelector(".technic__arrow"),h=m.querySelectorAll(".technic__slide--hidden"),q=function(e,t,r,n,o,c){t.forEach((function(t){return t.classList.toggle(e)})),"Показать все"===r.textContent?(r.textContent="Скрыть",n.style.transform="rotate(180deg)",o.classList.add("swiper-indent"),c.classList.add("brands-indent")):(r.textContent="Показать все",n.style.transform="rotate(360deg)",o.classList.remove("swiper-indent"),c.classList.remove("brands-indent"))};_.addEventListener("click",(function(){return q("swiper-slide--hidden",b,y,v,p,f)})),g.addEventListener("click",(function(){return q("technic__slide--hidden",h,w,L,S,m)}));var x=o.querySelector(".header__burger"),k=o.querySelector(".burger-overlay"),E=k.querySelector(".header-menu"),j=E.querySelector(".header-menu__btn-close");k.addEventListener("click",(function(e){e.target==k&&(k.classList.remove("burger-overlay--active"),E.classList.remove("header-menu--active"),o.classList.remove("body-fixed"))}));var O=function(){k.classList.toggle("burger-overlay--active"),E.classList.toggle("header-menu--active"),o.classList.toggle("body-fixed")};x.addEventListener("click",O),j.addEventListener("click",O);var C=o.querySelectorAll(".button-tube"),M=o.querySelector(".wrapper__modal-call"),P=M.querySelector(".modal-call__btn-close"),A=o.querySelectorAll(".button-message"),z=o.querySelector(".wrapper__modal-feedback"),B=z.querySelector(".modal-feedback__btn-close"),T=function(e,t,r,n){e.forEach((function(e){e.addEventListener("click",(function(){t.classList.add(n),o.classList.add("body-fixed")}))})),r.addEventListener("click",(function(){t.classList.remove(n),screen.width<1440&&E.classList.contains("header-menu--active")||o.classList.remove("body-fixed")})),t.addEventListener("click",(function(e){e.target==t&&(t.classList.remove(n),screen.width<1440&&E.classList.contains("header-menu--active")||o.classList.remove("body-fixed"))}))};T(C,M,P,"wrapper__modal-call--open"),T(A,z,B,"wrapper__modal-feedback--open");var D=z.querySelector(".modal-feedback"),F=o.querySelector(".modal-call__input"),G=o.querySelector(".modal-feedback__input"),H=function(e){return function(){e.focus()}};d.addEventListener("transitionstart",H(F)),D.addEventListener("transitionstart",H(G))},function(e,t,r){}]);
//# sourceMappingURL=bundle.js.map