!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){e.exports=r(1)},function(e,t,r){"use strict";r.r(t);r(2);var n=document.getElementById("body"),o=n.querySelector(".services__btn"),c=n.querySelector(".services__descr-further"),s=n.querySelector(".services__descr-end"),a=n.querySelector(".services__arrow"),i=n.querySelector(".services__read");document.querySelector(".wrapper__modal-call");o.addEventListener("click",(function(){c.classList.toggle("services__descr-further--active"),s.classList.toggle("services__descr-end--active"),"Читать далее"===i.textContent?(i.textContent="Скрыть",a.style.transform="rotate(180deg)"):(i.textContent="Читать далее",a.style.transform="rotate(360deg)")}));new Swiper(".swiper",{direction:"horizontal",loop:!1,spaceBetween:16,pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{768:{enabled:!1,width:224,spaceBetween:24},1120:{enabled:!1,width:240,spaceBetween:32}}});var l=n.querySelector(".brands"),d=l.querySelector(".swiper-wrapper"),u=l.querySelector(".button__show-more"),f=u.querySelector(".text"),v=u.querySelector(".brands__arrow"),y=l.querySelectorAll(".swiper-slide--hidden");u.addEventListener("click",(function(){y.forEach((function(e){return e.classList.toggle("swiper-slide--hidden")})),"Показать все"===f.textContent?(f.textContent="Скрыть",v.style.transform="rotate(180deg)",d.classList.add("swiper-indent"),l.classList.add("brands-indent")):(f.textContent="Показать все",v.style.transform="rotate(360deg)",d.classList.remove("swiper-indent"),l.classList.remove("brands-indent"))}));var _=n.querySelector(".technic"),m=_.querySelector(".technic__swiper-wrapper"),p=_.querySelector(".button__show-more"),b=p.querySelector(".text"),L=p.querySelector(".technic__arrow"),S=_.querySelectorAll(".technic__slide--hidden");p.addEventListener("click",(function(){S.forEach((function(e){return e.classList.toggle("technic__slide--hidden")})),"Показать все"===b.textContent?(b.textContent="Скрыть",L.style.transform="rotate(180deg)",console.log(L),m.classList.add("swiper-indent"),_.classList.add("brands-indent")):(b.textContent="Показать все",L.style.transform="rotate(360deg)",m.classList.remove("swiper-indent"),_.classList.remove("brands-indent"))}));var w=n.querySelector(".header__burger"),h=n.querySelector(".burger-overlay"),q=h.querySelector(".header-menu"),g=q.querySelector(".header-menu__btn-close");h.addEventListener("click",(function(e){e.target==h&&(h.classList.remove("burger-overlay--active"),q.classList.remove("header-menu--active"),n.classList.remove("body-fixed"))})),w.addEventListener("click",(function(){h.classList.add("burger-overlay--active"),q.classList.add("header-menu--active"),n.classList.add("body-fixed")})),g.addEventListener("click",(function(){h.classList.remove("burger-overlay--active"),q.classList.remove("header-menu--active"),n.classList.remove("body-fixed")})),q.querySelectorAll(".menu-header__btn").forEach((function(e){return e.addEventListener("click",(function(){e.classList.remove("menu-header__btn--active"),e.classList.add("menu-header__btn--active")}))}));var x=n.querySelectorAll(".button-tube"),k=n.querySelector(".wrapper__modal-call"),E=k.querySelector(".modal-call").querySelector(".modal-call__btn-close");document.querySelector(".modal-call__input"),document.querySelector(".modal-feedback__input");x.forEach((function(e){e.addEventListener("click",(function(){k.classList.add("wrapper__modal-call--open"),n.classList.add("body-fixed")}))})),E.addEventListener("click",(function(){k.classList.remove("wrapper__modal-call--open"),screen.width<1440?A&&n.classList.remove("body-fixed"):n.classList.remove("body-fixed")})),k.addEventListener("click",(function(e){e.target==k&&(k.classList.remove("wrapper__modal-call--open"),screen.width<1440?A&&n.classList.remove("body-fixed"):n.classList.remove("body-fixed"))}));var C=n.querySelectorAll(".button-message"),j=n.querySelector(".wrapper__modal-feedback"),O=j.querySelector(".modal-feedback").querySelector(".modal-feedback__btn-close"),A=n.querySelector(".header-menu--active");C.forEach((function(e){e.addEventListener("click",(function(){j.classList.add("wrapper__modal-feedback--open"),n.classList.add("body-fixed")}))})),O.addEventListener("click",(function(){j.classList.remove("wrapper__modal-feedback--open"),screen.width<1440?A&&n.classList.remove("body-fixed"):n.classList.remove("body-fixed")})),j.addEventListener("click",(function(e){e.target==j&&(j.classList.remove("wrapper__modal-feedback--open"),screen.width<1440?A&&n.classList.remove("body-fixed"):n.classList.remove("body-fixed"))}))},function(e,t,r){}]);
//# sourceMappingURL=bundle.js.map