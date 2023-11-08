import { translateX, setTranslateX } from "./translateX.js";

const listElm = document.querySelector("ul");
const listItemElm = document.querySelector("li");

export const clickleftBtm = () => {
  if (translateX >= 0) {
    listElm.style.transitionDuration = "0s";
    setTranslateX(listItemElm.scrollWidth - listElm.scrollWidth);
    listElm.style.transform = `translateX(${translateX}px)`;

    setTimeout(() => {
      listElm.style.transitionDuration = "1s";
    });
  }

  setTranslateX(translateX + listItemElm.scrollWidth);
  listElm.style.transform = `translateX(${translateX}px)`;

  // 以下btn-naviとの連携
  let clickCount = 0;
  let timer = null;
  const timeout = 0;
  let leftBtnElm = document.getElementById("leftBtn");
  const btnElms = document.querySelectorAll(".slider-navi-btn");
  leftBtnElm.addEventListener("click", () => {
    clickCount += 1;
    if (clickCount === 1) {
      timer = setTimeout(() => {
        if (clickCount === 1) {
          btnElms[2].style.backgroundColor = "#fff";
          btnElms[1].style.backgroundColor = "#000";
          btnElms[0].style.backgroundColor = "#000";
        } else if (clickCount === 2) {
          btnElms[1].style.backgroundColor = "#fff";
          btnElms[0].style.backgroundColor = "#000";
          btnElms[2].style.backgroundColor = "#000";
        }
        timer = null;
        clickCount = 0;
      }, timeout);
    }
  });

  // if (translateX <= listItemElm.scrollWidth - listElm.scrollWidth) {
  //   listElm.style.transitionDuration = "0s";
  //   setTranslateX(0);
  //   listElm.style.transform = `translateX(${translateX}px)`;
  //   setTimeout(() => {
  //     listElm.style.transitionDuration = "1s";
  //   });
  // }

  // setTranslateX(translateX - listItemElm.scrollWidth);
  // listElm.style.transform = `translateX(${translateX}px)`;

  console.log("clickRightButton");
};

export const clickRightBtn = () => {
  if (translateX <= listItemElm.scrollWidth - listElm.scrollWidth) {
    listElm.style.transitionDuration = "0s";
    setTranslateX(0);
    listElm.style.transform = `translateX(${translateX}px)`;
    setTimeout(() => {
      listElm.style.transitionDuration = "1s";
    });
  }

  setTranslateX(translateX - listItemElm.scrollWidth);
  listElm.style.transform = `translateX(${translateX}px)`;

  // if (translateX >= 0) {
  //   listElm.style.transitionDuration = "0s";
  //   setTranslateX(listItemElm.scrollWidth - listElm.scrollWidth);
  //   listElm.style.transform = `translateX(${translateX}px)`;

  //   setTimeout(() => {
  //     listElm.style.transitionDuration = "1s";
  //   });
  // }

  // setTranslateX(translateX + listItemElm.scrollWidth);
  // listElm.style.transform = `translateX(${translateX}px)`;

  console.log("clickLeftButton");
};
