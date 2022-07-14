// Напиши скрипт, який змінює кольори фону елемента <body>
// через інлайн - стиль по кліку на button.change - color і
// виводить значення кольору в span.color.
// Для генерування випадкового кольору використовуй
// функцію getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const backgroundBodyEl = document.querySelector("body");
const btnEl = document.querySelector(".change-color");
const spanColorEl = document.querySelector(".color");

btnEl.addEventListener("click", handleClick);

function handleClick() {
  backgroundBodyEl.style.backgroundColor = getRandomHexColor();
  spanColorEl.textContent = backgroundBodyEl.style.backgroundColor;
}
