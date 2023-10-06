const { Router } = require("express");

const CategoriesController = require("../controllers/CategoriesController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const categoriesRouter = Router();

const categoriesController = new CategoriesController();

categoriesRouter.use(ensureAuthenticated);

categoriesRouter.post("/", categoriesController.create);
// categoriesRouter.get("/:id", categoriesController.show);
// categoriesRouter.delete("/:id", categoriesController.delete);
categoriesRouter.get("/", categoriesController.index);

module.exports = categoriesRouter;