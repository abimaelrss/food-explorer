const knex = require("../database/knex");
const DiskStorage = require("../providers/DiskStorage");

class DishsController {
  async create(request, response) {
    const { name, description, category, ingredients, price } = request.body;
    const user_id = request.user.id;

    const [dish_id] = await knex("dishs").insert({
      name,
      description,
      price,
      user_id,
      category_id: category,
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

    console.log(id)
    const [dish_id] = await knex("dishs").where({ id });
    console.log(dish_id)

    if (!dish_id) {
      throw new AppError("Prato não encontrado!");
    }

    // await knex("ingredients").where({ id }).delete();

    // const ingredientsInsert = ingredients.map((ingredient) => {
    //   return {
    //     dish_id,
    //     name: ingredient,
    //   };
    // });

    // await knex("ingredients").insert(ingredientsInsert);

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

    return response.json({
      ...dish,
      ingredients,
    });
  }

  async delete(request, response) {
    const { id } = request.params;

    await knex("dishs").where({ id }).delete();

    return response.json();
  }

  async index(request, response) {
    const { category_id } = request.query;
    const { name, ingredients } = request.query;
    const user_id = request.user.id;

    let dishs;

    dishs = await knex("dishs").where("category_id", category_id);

    // if (ingredients) {
    //   const filterIngredients = ingredients.split(',').map(ingredient => ingredient.trim());

    //   dishs = await knex("ingredients")
    //   .select([
    //     "dishs.id",
    //     "dishs.name",
    //     "dishs.user_id",
    //   ])
    //   .where("dishs.user_id", user_id)
    //   .whereLike("dishs.name", `%${name}%`)
    //   .whereIn("name", filterIngredients)
    //   .innerJoin("dishs", "dishs.id", "ingredients.dish_id",)
    //   .groupBy("dishs.id")
    //   .orderBy("dishs.name")

    // } else {

    //   dishs = await knex("dishs")
    //     .where("name", `%${name}%`)
    //     .orderBy("name");

    // }

    // const userTags = await knex("ingredients").where({ name });
    // const dishWithIngredients = dishs.map(dish => {
    //   const dishIngredients = userTags.filter(ingredient => ingredient.dish_id === dish.id);

    //   return {
    //     ...dish,
    //     ingredients: dishIngredients
    //   }
    // });

    // return response.json(dishWithIngredients);

    // console.log(category_id)
    // console.log(dishs)
    return response.json(dishs);
  }
}

module.exports = DishsController;
