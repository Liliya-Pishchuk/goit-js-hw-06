// Напиши скрипт створення і очищення колекції елементів.
// Користувач вводить кількість елементів в input і натискає
// кнопку Створити, після чого рендериться колекція.Натисненням
// на кнопку Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає один параметр - число.
// Функція створює стільки < div >, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX.
// Використовуй готову функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes,
// у такий спосіб видаляючи всі створені елементи.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const [inputEl, btnCreate, btnDestroy] =
  document.querySelector("#controls").children;

const boxesEl = document.querySelector("#boxes");

btnCreate.addEventListener("click", createBoxes);

function createBoxes(amount) {
  const array = [];

  for (let i = 1; i <= inputEl.value; i += 1) {
    const containerEl = document.createElement("div");
    containerEl.style.height = containerEl.style.width = `${20 + i * 10}px`;
    containerEl.style.backgroundColor = getRandomHexColor();
    array.push(containerEl);
  }
  boxesEl.append(...array);
}

btnDestroy.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  boxesEl.innerHTML = "";
  inputEl.value = "";
}
