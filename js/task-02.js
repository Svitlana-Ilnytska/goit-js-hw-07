const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsContainerEl = document.querySelector("#ingredients");
const makeRecipe = (ingredients) => {
  return ingredients.map((ingredient) => {
    const ingredientEl = document.createElement("li");
    ingredientEl.textContent = ingredient;

    return ingredientEl;
  });
};

const elements = makeRecipe(ingredients);
ingredientsContainerEl.append(...elements);
