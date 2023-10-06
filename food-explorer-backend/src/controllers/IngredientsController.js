const knex = require("../database/knex");

class IngredientsController {
  async create(request, response) {
    const { name } = request.body;
    const dish_id = request.body;

    const [ingredient_id] = await knex("ingredients").insert({
      name,
      dish_id,
    });

    return response.json();
  }

  async show(request, response) {
    const { dish_id } = request.params;

    console.log(dish_id);

    let ingredients;

    ingredients = await knex("ingredients").where("dish_id", dish_id);

    console.log(ingredients);
    return response.json(ingredients);
  }

  // async delete(request, response) {
  //   const { id } = request.params;

  //   await knex("notes").where({ id }).delete();

  //   return response.json();
  // }

  async index(request, response) {
    const { id } = request.params;

    console.log(id);

    let ingredients;

    ingredients = await knex("ingredients").where("dish_id", id);

    console.log(ingredients);
    return response.json(ingredients);
  }
}

module.exports = IngredientsController;
