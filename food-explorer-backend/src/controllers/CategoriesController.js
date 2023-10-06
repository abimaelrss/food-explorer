const knex = require("../database/knex");

class CategoriesController {
  async create(request, response) {
    const { name } = request.body;
    const dish_id = request.body;

    const [category_id] = await knex("categories").insert({
      name,
      dish_id
    });

    return response.json();
  }

  // async show(request, response) {
  //   const { id } = request.params;

  //   const note = await knex("notes").where({ id }).first();
  //   const tags = await knex("tags").where({ note_id: id }).orderBy("name");
  //   const links = await knex("links").where({ note_id: id }).orderBy("created_at");

  //   return response.json({
  //     ...note,
  //     tags,
  //     links
  //   });
  // }

  // async delete(request, response) {
  //   const { id } = request.params;

  //   await knex("notes").where({ id }).delete();

  //   return response.json();
  // }

  async index(request, response) {
    const { name } = request.query;

    const user_id = request.user.id;

    let categories;

    categories = await knex("categories");

    // console.log(categories)


    return response.json(categories);
  }
}

module.exports = CategoriesController;