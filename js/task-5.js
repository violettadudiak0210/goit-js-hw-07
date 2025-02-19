function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector(".change-color");
const colorText = document.querySelector(".color");
const body = document.body;

button.addEventListener("click", () => {
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  body.style.backgroundColor = randomColor;
  colorText.textContent = randomColor;
});
