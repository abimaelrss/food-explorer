const knex = require("../database/knex");
const DiskStorage = require("../providers/DiskStorage");

class DishsController {
  async create(request, response) {
    const { name, description, category, ingredients, price } = request.body;
    const user_id = request.user.id;

    // const avatarFilename = request;
    console.log(avatarFilename);

    const diskStorage = new DiskStorage();

    const filename = await diskStorage.saveFile(avatarFilename);
    // dish.image = filename;

    const [dish_id] = await knex("dishs").insert({
      name,
      description,
      price,
      image: filename,
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
    const ingredients = await knex("ingredients").where({ dish_id: id });

    console.log(ingredients);
    // const links = await knex("links")
    //   .where({ note_id: id })
    //   .orderBy("created_at");

    return response.json({
      ...dish,
      ingredients,
      // links,
    });
  }

  // async delete(request, response) {
  //   const { id } = request.params;

  //   await knex("notes").where({ id }).delete();

  //   return response.json();
  // }

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
