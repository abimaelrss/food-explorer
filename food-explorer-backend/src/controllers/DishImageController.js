const knex = require("../database/knex");
const AppError = require("../utils/AppError");
const DiskStorage = require("../providers/DiskStorage");

class DishImageController {
  async update(request, response) {
    const { dish_id } = request.params;
    const imageFilename = request.file.filename;

    const diskStorage = new DiskStorage();

    const dish = await knex("dishs").where({ id: dish_id }).first();

    console.log(dish, "aqui");

    if (dish.image) {
      await diskStorage.deleteFile(dish.image);
    }

    const filename = await diskStorage.saveFile(imageFilename);
    dish.image = filename;

    await knex("dishs").update(dish).where({ id: dish_id });

    return response.json(dish);
  }
}

module.exports = DishImageController;
