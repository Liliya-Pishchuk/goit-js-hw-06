// Лічильник складається зі спану і кнопок, які по кліку
// повинні збільшувати і зменшувати його значення на одиницю.

// Створи змінну counterValue, в якій буде зберігатися
// поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй
// або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const btnDecrEl = document.querySelector('button[data-action="decrement"]');
const btnIncrEl = document.querySelector('button[data-action="increment"]');

const counterValueEl = document.querySelector("#value");
let counterValue = 0;

btnDecrEl.addEventListener("click", handleClickDecr);

function handleClickDecr() {
  counterValue -= 1;
  counterValueEl.textContent = counterValue;
}

btnIncrEl.addEventListener("click", handleClickIncrEl);

function handleClickIncrEl() {
  counterValue += 1;
  counterValueEl.textContent = counterValue;
}
