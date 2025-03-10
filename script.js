// Данные рецептов
const recipes = [
    {
        name: "Котлета на бургер ПФ",
        baseWeight: 1.0,
        ingredients: [
            { name: "Говяжий фарш", amount: 1.000, unit: "кг" },
            { name: "Лук репчатый очищ ПФ", amount: 0.150, unit: "кг" },
            { name: "Соль", amount: 0.013, unit: "кг" },
            { name: "Специя Перец чёрный", amount: 0.005, unit: "кг" },
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
    },
    {
        name: "Маринад на лосось с/с ПФ",
        baseWeight: 7.6,
        ingredients: [
            { name: "Лосось филе б/кожи", amount: 7.600, unit: "кг" },
            { name: "Соль", amount: 0.500, unit: "кг" },
            { name: "Сахар", amount: 0.310, unit: "кг" },
            { name: "Цедра лимона", amount: 0.070, unit: "кг" },
            { name: "Зелень Тимьян ПФ", amount: 0.100, unit: "кг" }
        ],
        cookingTime: "24 часа"
    },
    {
        name: "Маринад на Лосось стейк ПФ",
        baseWeight: 1.0,
        ingredients: [
            { name: "Лосось филе н/коже", amount: 1.000, unit: "кг" },
            { name: "Масло оливковое", amount: 0.025, unit: "кг" },
            { name: "Цедра лимона", amount: 0.005, unit: "кг" },
            { name: "Цедра апельсина", amount: 0.005, unit: "кг" },
            { name: "Зелень Тимьян", amount: 0.005, unit: "кг" }
        ],
        portionWeight: "120 г"
    },
    {
        name: "Крылья куриные в маринаде ПФ",
        baseWeight: 1.0,
        ingredients: [
            { name: "Куриные крылья зачищ ПФ", amount: 1.000, unit: "кг" },
            { name: "Масло растительное", amount: 0.020, unit: "л" },
            { name: "Соль", amount: 0.008, unit: "кг" },
            { name: "Специя Перец чёрный", amount: 0.001, unit: "кг" },
            { name: "Специи Чеснок гранулы", amount: 0.007, unit: "кг" },
            { name: "Соус соевый", amount: 0.010, unit: "л" },
            { name: "Специя Паприка копчёная", amount: 0.006, unit: "кг" }
        ],
        portionWeight: "300 г",
        cookingTime: "2 часа при 70°C (су-вид)"
    },
    {
        name: "Ребра Свиные маринад ПФ",
        baseWeight: 10.0,
        ingredients: [
            { name: "Ребра свиные зачищ ПФ", amount: 10.000, unit: "кг" },
            { name: "Соус соевый", amount: 1.500, unit: "л" },
            { name: "Уксус бальзамик", amount: 0.400, unit: "л" },
            { name: "Соус кетчуп", amount: 0.600, unit: "кг" },
            { name: "Чеснок", amount: 4.0, unit: "шт" },
            { name: "Апельсин", amount: 4.0, unit: "шт" },
            { name: "Специя Паприка копчёная", amount: 0.050, unit: "кг" },
            { name: "Зелень Розмарин", amount: 0.030, unit: "кг" },
            { name: "Зелень Тимьян", amount: 0.030, unit: "кг" },
            { name: "ПФ ВОДА для блюд", amount: 6.000, unit: "л" },
            { name: "Мёд", amount: 1.000, unit: "кг" }
        ],
        portionWeight: "290-330 г (сырая), 270 г (готовая)",
        cookingTime: "2 часа при 200°C (парогенератор)",
        isFixed: true
    },
    {
        name: "Ростбиф Маринад ПФ",
        baseWeight: 19.9,
        ingredients: [
            { name: "Пиканья размороженная ПФ", amount: 19.900, unit: "кг" },
            { name: "Лук репчатый очищ ПФ", amount: 0.600, unit: "кг" },
            { name: "Морковь очищ ПФ", amount: 0.600, unit: "кг" },
            { name: "Сельдерей корень", amount: 0.500, unit: "кг" },
            { name: "Чеснок очищенный ПФ", amount: 0.040, unit: "кг" },
            { name: "Зелень розмарин", amount: 0.060, unit: "кг" },
            { name: "Соль", amount: 0.260, unit: "кг" },
            { name: "Специя Перец чёрный", amount: 0.010, unit: "кг" },
            { name: "Каперсы", amount: 0.150, unit: "кг" },
            { name: "Бульон куриный", amount: 0.800, unit: "кг" },
            { name: "Соус демиглас", amount: 0.250, unit: "кг" }
        ],
        cookingTime: "5 часов при 60°C (су-вид)"
    },
    {
        name: "Бедро куриное маринованное ПФ",
        baseWeight: 1.0,
        ingredients: [
            { name: "Бедро куриное зачищ ПФ", amount: 1.000, unit: "кг" },
            { name: "Соль", amount: 0.008, unit: "кг" },
            { name: "Специя Перец чёрный", amount: 0.002, unit: "кг" },
            { name: "Лук репчатый очищ ПФ", amount: 0.150, unit: "кг" },
            { name: "Масло растительное", amount: 0.020, unit: "л" },
            { name: "Соус соевый", amount: 0.010, unit: "л" },
            { name: "Специя Паприка Сладкая", amount: 0.002, unit: "кг" }
        ]
    },
    {
        name: "Свинина шея маринованная/шашлык ПФ",
        baseWeight: 1.0,
        ingredients: [
            { name: "Свиная шея зачищ сырая ПФ", amount: 1.000, unit: "кг" },
            { name: "Соль", amount: 0.012, unit: "кг" },
            { name: "Специя Перец чёрный", amount: 0.001, unit: "кг" },
            { name: "Лук репчатый очищ ПФ", amount: 0.100, unit: "кг" },
            { name: "Помидор ПФ", amount: 0.100, unit: "кг" },
            { name: "Соус соевый", amount: 0.010, unit: "л" },
            { name: "Специя Кориандр", amount: 0.002, unit: "кг" },
            { name: "Масло растительное", amount: 0.050, unit: "кг" },
            { name: "Мин вода газированная", amount: 0.350, unit: "л" }
        ],
        portionWeight: "250 г"
    },
    {
        name: "Фланк маринованный ПФ",
        baseWeight: 1.0,
        ingredients: [
            { name: "Фланк зачищ ПФ", amount: 1.000, unit: "кг" },
            { name: "Соль", amount: 0.010, unit: "кг" },
            { name: "Зелень Тимьян", amount: 0.002, unit: "кг" },
            { name: "Соус соевый", amount: 0.010, unit: "л" },
            { name: "Соус терияки", amount: 0.010, unit: "кг" },
            { name: "Масло растительное", amount: 0.020, unit: "л" },
            { name: "Специя Перец чёрный", amount: 0.001, unit: "кг" }
        ],
        portionWeight: "150 г",
        cookingTime: "1ч 30мин при 58°C (су-вид)"
    },
    {
        name: "Филе куриное маринованное ПФ",
        baseWeight: 1.0,
        ingredients: [
            { name: "Куриное филе грудки", amount: 1.000, unit: "кг" },
            { name: "Соль", amount: 0.010, unit: "кг" },
            { name: "Специя Чеснок гранулы", amount: 0.007, unit: "кг" },
            { name: "Соус соевый", amount: 0.010, unit: "л" },
            { name: "Специя Перец чёрный", amount: 0.001, unit: "кг" },
            { name: "Масло растительное", amount: 0.020, unit: "л" }
        ],
        portionWeight: "180 г",
        cookingTime: "1ч 20мин при 65°C"
    },
    {
        name: "Утиная ножка ПФ",
        baseWeight: 37.0,
        ingredients: [
            { name: "Утиная ножка окорочок", amount: 37.000, unit: "кг" },
            { name: "Зелень тимьян", amount: 0.300, unit: "кг" },
            { name: "Соль", amount: 6.000, unit: "кг" },
            { name: "Сахар", amount: 6.000, unit: "кг" }
        ],
        cookingTime: "4 часа при 160°C (парогенератор)"
    },
    {
        name: "Буженина ПФ",
        baseWeight: 1.35,
        ingredients: [
            { name: "Свинина шея зачищ сырая", amount: 1.350, unit: "кг" },
            { name: "Соль", amount: 0.010, unit: "кг" },
            { name: "Специя Перец чёрный", amount: 0.001, unit: "кг" },
            { name: "Специя Паприка сладкая", amount: 0.010, unit: "кг" },
            { name: "Соус соевый", amount: 0.010, unit: "л" },
            { name: "Масло растительное", amount: 0.100, unit: "л" },
            { name: "Специя Чеснок гранулы", amount: 0.007, unit: "кг" },
            { name: "Зелень Тимьян", amount: 0.005, unit: "кг" }
        ],
        portionWeight: "180 г (2 шт)",
        cookingTime: "2 часа при 200°C (парогенератор)"
    },
    {
        name: "Вырезка говяжья МИНЬОН ПФ",
        baseWeight: 1.0,
        ingredients: [
            { name: "Говяжья вырезка зачищ", amount: 1.000, unit: "кг" },
            { name: "Зелень Тимьян", amount: 0.003, unit: "кг" },
            { name: "Зелень Розмарин", amount: 0.003, unit: "кг" },
            { name: "Масло чесночное ПФ", amount: 0.015, unit: "л" },
            { name: "Соль", amount: 0.010, unit: "кг" },
            { name: "Специя Перец чёрный", amount: 0.001, unit: "кг" },
            { name: "Соус соевый", amount: 0.010, unit: "л" }
        ],
        cookingTime: "1.5 часа при 54°C (вакуумировать без зелени)"
    },
    {
        name: "Фарш на Бифштекс ПФ",
        baseWeight: 1.0,
        ingredients: [
            { name: "Фарш говяжий", amount: 1.000, unit: "кг" },
            { name: "Зелень Тимьян", amount: 0.007, unit: "кг" },
            { name: "Соль", amount: 0.015, unit: "кг" },
            { name: "Специя Перец чёрный", amount: 0.003, unit: "кг" },
            { name: "Жир говяжий/свиной", amount: 0.150, unit: "кг" },
            { name: "Вода", amount: 0.100, unit: "л" }
        ],
        portionWeight: "190 г"
    }
];

// Заполняем выпадающий список рецептов
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

    if (recipe.isFixed) {
        // Для фиксированных рецептов (например, "Ребра свиные") просто отображаем
        const ingredientsText = recipe.ingredients.map(ingr => {
            return `${ingr.name}: ${ingr.amount} ${ingr.unit}`;
        }).join("\n");
        const resultText = `Рецепт:\n${ingredientsText}` +
            (recipe.portionWeight ? `\nВес порции: ${recipe.portionWeight}` : "") +
            (recipe.cookingTime ? `\nВремя приготовления: ${recipe.cookingTime}` : "");
        document.getElementById("result").textContent = resultText;
    } else {
        // Расчёт для остальных рецептов
        const factor = recipe.portionWeight && recipe.baseWeight === 1.0 ? input : input / recipe.baseWeight;
        const ingredientsText = recipe.ingredients.map(ingr => {
            const scaledAmount = ingr.amount * factor;
            return `${ingr.name}: ${scaledAmount.toFixed(3)} ${ingr.unit}`;
        }).join("\n");
        const resultText = `Результат для ${recipe.name}:\n${ingredientsText}` +
            (recipe.portionWeight ? `\nВес порции: ${recipe.portionWeight}` : "") +
            (recipe.cookingTime ? `\nВремя приготовления: ${recipe.cookingTime}` : "");
        document.getElementById("result").textContent = resultText;
    }
}

// Интеграция с Telegram Web App
window.Telegram.WebApp.ready();
window.Telegram.WebApp.expand();