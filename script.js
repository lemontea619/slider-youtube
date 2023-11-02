console.log("test");
const listElement = document.getElementById("list");

// listElement.scrollLeft = 1000;
// listElement.style.transform = "translateX(-500px)";

const li = document.querySelector("li");
console.log(listElement);

let translateX = 0;
function clickRightButton() {
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

  // translateX -= li.scrollWidth;
  // listElement.style.transform = `translateX(${translateX}px)`;
  console.log("clickRightButton");
}

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
