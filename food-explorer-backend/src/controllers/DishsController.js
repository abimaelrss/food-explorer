const knex = require("../database/knex");
const DiskStorage = require("../providers/DiskStorage");

class DishsController {
  async create(request, response) {
    const { name, category, ingredients, price, description } = request.body;
    const user_id = request.user.id;

    const [dish_id] = await knex("dishs").insert({
      name,
      category_id: category,
      price,
      description,
      user_id,
    });

    const ingredientsInsert = ingredients.map((ingredient) => {
      return {
        dish_id,
        name: ingredient,
      };
    });

    await knex("ingredients").insert(ingredientsInsert);

    // return response.json();
    return response.json(dish_id);
  }

  async update(request, response) {
    const { name, category, ingredients, price, description } = request.body;
    const id = request.params.id;

    try {
      await knex("ingredients").where({ dish_id: id }).delete();

      if (ingredients.length !== 0) {
        const ingredientsInsert = ingredients.map((ingredient) => {
          return {
            name: ingredient,
            dish_id: id,
          };
        });

        await knex("ingredients").insert(ingredientsInsert);
      }
    } catch (error) {
      console.log(error.message);
    }

    await knex("dishs")
      .update({
        name: name,
        category_id: category,
        price: price,
        description: description,
      })
      .where({ id });

    return response.json(id);
  }

  async show(request, response) {
    const { id } = request.params;

    const dish = await knex("dishs").where({ id }).first();
    const ingredients = await knex("ingredients").where({ dish_id: id });

    const ingredientsSerialized = ingredients.map(
      (ingredient) => ingredient.name
    );

    return response.json({
      ...dish,
      ingredients: ingredientsSerialized,
    });
  }

  async delete(request, response) {
    const { id } = request.params;

    await knex("dishs").where({ id }).delete();

    return response.json();
  }

  async searchByNameAndIngredient(request, response) {
    const { name, ingredients } = request.query;

    let dishs = [];

    if (ingredients) {
      const filterIngredients = ingredients
        .split(",")
        .map((ingredient) => ingredient.trim());

      dishs = await knex("ingredients")
        .select("*")
        .whereLike("dishs.name", `%${name}%`)
        .whereIn("ingredients.name", filterIngredients)
        .innerJoin("dishs", "dishs.id", "ingredients.dish_id")
        .groupBy("dishs.id");
    } else {
      dishs = await knex("ingredients")
        .select("*")
        .whereLike("dishs.name", `%${name}%`)
        .innerJoin("dishs", "dishs.id", "ingredients.dish_id")
        .groupBy("dishs.id");
    }

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

    return response.json(categoriesWithDishs);
  }

  async index(request, response) {
    const { category_id } = request.query;

    let dishs;

    dishs = await knex("dishs").where("category_id", category_id);

    return response.json(dishs);
  }
}

module.exports = DishsController;
