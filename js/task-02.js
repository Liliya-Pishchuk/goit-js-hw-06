const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsListEl = document.querySelector("#ingredients");

const newAr = (element) => {
  return element.map((el) => {
    const ingredientItemEl = document.createElement("li");
    ingredientItemEl.textContent = el;
    ingredientItemEl.classList.add("item");
    return ingredientItemEl;
  });
};

const newIngredientsListEl = newAr(ingredients);
ingredientsListEl.append(...newIngredientsListEl);
