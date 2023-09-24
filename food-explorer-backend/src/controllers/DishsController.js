const knex = require("../database/knex");

class DishsController {
  async create(request, response) {
    const { name, description, category, ingredients, price } = request.body;
    const user_id = request.user.id;

    const [dish_id] = await knex("dishs").insert({
      name,
      description,
      category,
      ingredients,
      price,
      user_id,
    });

    const ingredientsInsert = ingredients.map((ingredient) => {
      return {
        name: ingredient,
        dish_id,
      };
    });

    await knex("ingredients").insert(ingredientsInsert);

    // const categoriesInsert = categories.map((category) => {
    //   return {
    //     name: category,
    //     plate_id,
    //     user_id,
    //   };
    // });

    await knex("categories").insert({ name: category, dish_id, user_id });

    return response.json();
  }

  async show(request, response) {
    const { id } = request.params;

    const dish = await knex("dishs").where({ id }).first();
    // const tags = await knex("tags").where({ note_id: id }).orderBy("name");
    // const links = await knex("links")
    //   .where({ note_id: id })
    //   .orderBy("created_at");

    return response.json({
      ...dish,
      // tags,
      // links,
    });
  }

  // async delete(request, response) {
  //   const { id } = request.params;

  //   await knex("notes").where({ id }).delete();

  //   return response.json();
  // }

  async index(request, response) {
    const { name, ingredients } = request.query;

    const user_id = request.user.id;

    let dishs;

    if (ingredients) {
      const filterIngredients = ingredients
        .split(",")
        .map((ingredient) => ingredient.trim());

      dishs = await knex("ingredients")
        .select(["dishs.id", "dishs.name", "dishs.user_id"])
        .where("dishs.user_id", user_id)
        .whereLike("dishs.name", `%${name}%`)
        .whereIn("name", filterIngredients)
        .innerJoin("dishs", "dishs.id", "ingredients.dish_id")
        .groupBy("dishs.id")
        .orderBy("dishs.name");
    } else {
      dishs = await knex("dishs")
        .where({ user_id })
        .whereLike("name", `%${name}%`)
        .orderBy("name");
    }

    const userIngredients = await knex("ingredients").where({ user_id });
    const dishsWithIngredients = dishs.map((dish) => {
      const dishsIngredients = userIngredients.filter(
        (ingredient) => ingredient.dish_id === ingredient.id
      );

      return {
        ...dish,
        ingredients: dishsIngredients,
      };
    });

    return response.json(dishsWithIngredients);
  }
}

module.exports = DishsController;
