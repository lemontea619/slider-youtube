import { translateX, setTranslateX } from "./translateX.js";
import { clickleftBtm, clickRightBtn } from "./slider-arrow.js";

const listElm = document.querySelector("ul");
const listItemElm = document.querySelector("li");

const leftBtnElm = document.getElementById("leftBtn");
leftBtnElm.onclick = clickleftBtm;

const rightBtnElm = document.getElementById("rightBtn");
rightBtnElm.onclick = clickRightBtn;

const btnElms = document.querySelectorAll(".slider-navi-btn");
btnElms.forEach((elm, i) => {
  elm.addEventListener("click", () => {
    setTranslateX(-i * listItemElm.scrollWidth);
    listElm.style.transform = `translateX(${translateX}px)`;
    if (i == 0) {
      btnElms[0].style.backgroundColor = "#000";
      btnElms[1].style.backgroundColor = "#fff";
      btnElms[2].style.backgroundColor = "#fff";
    } else if (i == 1) {
    } else {
    }
    if (i == 1) {
      btnElms[1].style.backgroundColor = "#000";
      btnElms[0].style.backgroundColor = "#fff";
      btnElms[2].style.backgroundColor = "#fff";
    } else if (i == 1) {
    } else {
    }
    if (i == 2) {
      btnElms[2].style.backgroundColor = "#000";
      btnElms[1].style.backgroundColor = "#fff";
      btnElms[0].style.backgroundColor = "#fff";
    } else if (i == 1) {
    } else {
    }
  });
});
