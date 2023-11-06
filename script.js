const listElm = document.querySelector("ul");
const listItemElm = document.querySelector("li");

let translateX = 0;
const clickRightButton = () => {
  if (translateX <= listItemElm.scrollWidth - listElm.scrollWidth) {
    listElm.style.transitionDuration = "0s";
    translateX = 0;
    listElm.style.transform = `translateX(${translateX}px)`;
    setTimeout(() => {
      listElm.style.transitionDuration = "1s";
    });
  }

  translateX -= listItemElm.scrollWidth;
  listElm.style.transform = `translateX(${translateX}px)`;

  console.log("clickRightButton");
};

const clickLeftButton = () => {
  if (translateX >= 0) {
    listElm.style.transitionDuration = "0s";
    translateX = listItemElm.scrollWidth - listElm.scrollWidth;
    listElm.style.transform = `translateX(${translateX}px)`;

    setTimeout(() => {
      listElm.style.transitionDuration = "1s";
    });
  }

  translateX += listItemElm.scrollWidth;
  listElm.style.transform = `translateX(${translateX}px)`;

  console.log("clickLeftButton");
};
