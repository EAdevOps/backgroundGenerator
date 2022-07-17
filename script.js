const hThree = document.querySelector("h3");
const colorOne = document.querySelector(".color-one");
const colorTwo = document.querySelector(".color-two");
const container = document.querySelector(".container");

function setGradientBackground() {
  container.style.background =
    "linear-gradient(to right, " + colorOne.value + ", " + colorTwo.value + ")";

  hThree.textContent = container.style.background + ";";
}
colorOne.addEventListener("input", setGradientBackground);

colorTwo.addEventListener("input", setGradientBackground);
