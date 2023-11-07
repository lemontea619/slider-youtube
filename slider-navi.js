const btnElms = document.querySelectorAll(".slider-navi-btn");

btnElms.forEach((elm, i) => {
  elm.addEventListener("click", () => {
    translateX = -i * listItemElm.scrollWidth;
    listElm.style.transform = `translateX(${translateX}px)`;
  });
});
