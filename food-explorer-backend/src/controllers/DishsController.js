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
    const { name, categories } = request.query;

    const user_id = request.user.id;

    let dishs;

    if (categories) {
      const filterCategories = categories
        .split(",")
        .map((category) => category.trim());

      dishs = await knex("categories")
        .select(["dishs.id", "dishs.name", "dishs.user_id"])
        .where("dishs.user_id", user_id)
        .whereLike("dishs.name", `%${name}%`)
        .whereIn("name", filterCategories)
        .innerJoin("dishs", "dishs.id", "categories.dish_id")
        .groupBy("dishs.id")
        .orderBy("dishs.name");
    } else {
      dishs = await knex("dishs")
        .where({ user_id })
        .whereLike("name", `%${name}%`)
        .orderBy("name");
    }

    const userCategories = await knex("categories").where({ user_id });
    const dishsWithCategories = dishs.map((dish) => {
      const dishsCategories = userCategories.filter(
        (category) => category.dish_id === category.id
      );

      return {
        ...dish,
        categories: dishsCategories,
      };
    });

    return response.json(dishsWithCategories);
  }
}

module.exports = DishsController;
