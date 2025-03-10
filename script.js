// Данные рецептов (пример с несколькими, добавь все свои)
const recipes = [
    {
        name: "Котлета на бургер ПФ",
        baseWeight: 1.0,
        ingredients: [
            { name: "Говяжий фарш", amount: 1.000, unit: "кг" },
            { name: "Лук репчатый очищ ПФ", amount: 0.150, unit: "кг" },
            { name: "Соль", amount: 0.013, unit: "кг" },
            { name: "Специя Перец чёрный", amount: 0.006, unit: "кг" },
            { name: "Говяжий жир", amount: 0.150, unit: "кг" }
        ],
        portionWeight: "140 г"
    },
    {
        name: "Фарш люля",
        baseWeight: 1.0,
        ingredients: [
            { name: "Куриное филе бедра без кожи", amount: 0.700, unit: "кг" },
            { name: "Куриное филе грудки", amount: 0.300, unit: "кг" },
            { name: "Лук репчатый очищ ПФ", amount: 0.300, unit: "кг" },
            { name: "Говяжий/свиной жир", amount: 0.400, unit: "кг" },
            { name: "Соль", amount: 0.015, unit: "кг" },
            { name: "Специя Перец чёрный", amount: 0.003, unit: "кг" },
            { name: "Зелень Тимьян", amount: 0.002, unit: "кг" }
        ],
        portionWeight: "100 г"
    }
    // Добавь сюда остальные рецепты из твоего списка
];

// Заполняем выпадающий список
const select = document.getElementById("recipe-select");
recipes.forEach((recipe, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.text = recipe.name;
    select.appendChild(option);
});

// Функция расчёта
function calculate() {
    const recipeIndex = select.value;
    const recipe = recipes[recipeIndex];
    const input = parseFloat(document.getElementById("input-value").value) || 0;

    let factor = recipe.portionWeight && recipe.baseWeight === 1.0 ? input : input / recipe.baseWeight;
    const ingredientsText = recipe.ingredients.map(ingr => {
        const scaledAmount = ingr.amount * factor;
        return `${ingr.name}: ${scaledAmount.toFixed(3)} ${ingr.unit}`;
    }).join("\n");

    const resultText = `Результат для ${recipe.name}:\n${ingredientsText}` +
        (recipe.portionWeight ? `\nВес порции: ${recipe.portionWeight}` : "");
    document.getElementById("result").textContent = resultText;
}

// Интеграция с Telegram
window.Telegram.WebApp.ready();
window.Telegram.WebApp.expand();
