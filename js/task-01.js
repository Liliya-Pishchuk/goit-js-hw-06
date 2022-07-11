const categoriesEl = document.querySelectorAll(".item");
const numberOfCategory = categoriesEl.length;
console.log("Number of categories:", numberOfCategory);

[...categoriesEl].forEach((element) => {
  const categoryName = element.querySelector("h2");
  const categoryAmount = element.querySelectorAll("li");

  console.log(`Category: ${categoryName.textContent}`);
  console.log(`Elements: ${categoryAmount.length}`);
});
