const listElement = document.getElementById("list");
const li = document.querySelector("li");

let translateX = 0;
const clickRightButton = () => {
  if (translateX <= li.scrollWidth - listElement.scrollWidth) {
    listElement.style.transitionDuration = "0s";
    translateX = 0;
    listElement.style.transform = `translateX(${translateX}px)`;
    setTimeout(() => {
      listElement.style.transitionDuration = "1s";
    });
  }

  translateX -= li.scrollWidth;
  listElement.style.transform = `translateX(${translateX}px)`;

  console.log("clickRightButton");
};

const clickLeftButton = () => {
  if (translateX >= 0) {
    listElement.style.transitionDuration = "0s";
    translateX = li.scrollWidth - listElement.scrollWidth;
    listElement.style.transform = `translateX(${translateX}px)`;

    setTimeout(() => {
      listElement.style.transitionDuration = "1s";
    });
  }

  translateX += li.scrollWidth;
  listElement.style.transform = `translateX(${translateX}px)`;

  console.log("clickLeftButton");
};
