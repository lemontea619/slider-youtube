const content = document.querySelector(".content");
const btnElms = document.querySelectorAll(".slider-navi-btn");

btnElms.forEach((elm, i) => {
  elm.addEventListener("click", () => {
    translateX = -i * li.scrollWidth;
    listElement.style.transform = `translateX(${translateX}px)`;
  });
});
