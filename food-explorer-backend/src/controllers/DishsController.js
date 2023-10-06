const knex = require("../database/knex");

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

    return response.json();
  }

  async show(request, response) {
    const { id } = request.params;

    // console.log(id)

    const dish = await knex("dishs").where({ id }).first();
    // const tags = await knex("tags").where({ note_id: id }).orderBy("name");
    // const links = await knex("links")
    //   .where({ note_id: id })
    //   .orderBy("created_at");

    return response.json(
      dish
      // tags,
      // links,
    );
  }

  // async delete(request, response) {
  //   const { id } = request.params;

  //   await knex("notes").where({ id }).delete();

  //   return response.json();
  // }

  async index(request, response) {
    const { category_id } = request.query;

    let dishs;

    dishs = await knex("dishs").where("category_id", category_id);

    // console.log(category_id)
    // console.log(dishs)
    return response.json(dishs);
  }
}

module.exports = DishsController;
