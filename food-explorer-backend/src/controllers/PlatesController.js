const knex = require("../database/knex");

class PlatesController {
  async create(request, response) {
    const { name, description, category, ingredients, price } = request.body;
    const user_id = request.user.id;

    const [plate_id] = await knex("plates").insert({
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
        plate_id,
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

    await knex("categories").insert({ name: category, plate_id, user_id });

    return response.json();
  }

  // async show(request, response) {
  //   const { id } = request.params;

  //   const note = await knex("notes").where({ id }).first();
  //   const tags = await knex("tags").where({ note_id: id }).orderBy("name");
  //   const links = await knex("links")
  //     .where({ note_id: id })
  //     .orderBy("created_at");

  //   return response.json({
  //     ...note,
  //     tags,
  //     links,
  //   });
  // }

  // async delete(request, response) {
  //   const { id } = request.params;

  //   await knex("notes").where({ id }).delete();

  //   return response.json();
  // }

  // async index(request, response) {
  //   const { title, tags } = request.query;

  //   const user_id = request.user.id;

  //   let notes;

  //   if (tags) {
  //     const filterTags = tags.split(",").map((tag) => tag.trim());

  //     notes = await knex("tags")
  //       .select(["notes.id", "notes.title", "notes.user_id"])
  //       .where("notes.user_id", user_id)
  //       .whereLike("notes.title", `%${title}%`)
  //       .whereIn("name", filterTags)
  //       .innerJoin("notes", "notes.id", "tags.note_id")
  //       .groupBy("notes.id")
  //       .orderBy("notes.title");
  //   } else {
  //     notes = await knex("notes")
  //       .where({ user_id })
  //       .whereLike("title", `%${title}%`)
  //       .orderBy("title");
  //   }

  //   const userTags = await knex("tags").where({ user_id });
  //   const notesWithTags = notes.map((note) => {
  //     const noteTags = userTags.filter((tag) => tag.note_id === note.id);

  //     return {
  //       ...note,
  //       tags: noteTags,
  //     };
  //   });

  //   return response.json(notesWithTags);
  // }
}

module.exports = PlatesController;
