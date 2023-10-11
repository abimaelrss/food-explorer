const knex = require("../database/knex");

async function formatDishs(dishs) {
  const categoriesDB = await knex("categories").select("*");
  const ingredientsDB = await knex("ingredients").select("*");

  dishs = dishs.map((dish) => {
    const ingredientsIncluded = ingredientsDB.filter(
      (ingredient) => dish.id == ingredient.dish_id
    );

    return {
      ...dish,
      ingredients: ingredientsIncluded,
    };
  });

  const categoriesWithDishs = categoriesDB.map((category) => {
    const dishsIncluded = dishs.filter(
      (dish) => dish.category_id == category.id
    );

    return {
      id: category.id,
      name: category.name,
      dishs: dishsIncluded,
    };
  });

  return categoriesWithDishs;
}


module.exports = formatDishs;