// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй
// метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsArrayEl = ingredients.map((ingredient) => {
  const ingredientItemEl = document.createElement("li");
  ingredientItemEl.textContent = ingredient;
  ingredientItemEl.classList.add("item");
  const ingredientsListEl = document.querySelector("#ingredients");
  ingredientsListEl.append(ingredientItemEl);
});
