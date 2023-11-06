import { translateX, setTranslateX } from "./translateX.js";

const listElm = document.querySelector("ul");
const listItemElm = document.querySelector("li");

export const clickleftBtm = () => {
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

  console.log("clickRightButton");
};

export const clickRightBtn = () => {
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

  console.log("clickLeftButton");
};
