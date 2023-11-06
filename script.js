import { clickleftBtm, clickRightBtn } from "./slider-arrow.js";

const leftBtnElm = document.getElementById("leftBtn");
leftBtnElm.onclick = clickleftBtm;

const rightBtnElm = document.getElementById("rightBtn");
rightBtnElm.onclick = clickRightBtn;

const btnElms = document.querySelectorAll(".slider-navi-btn");
btnElms.forEach((elm, i) => {
  elm.addEventListener("click", () => {
    translateX = -i * listItemElm.scrollWidth;
    listElm.style.transform = `translateX(${translateX}px)`;
  });
});
