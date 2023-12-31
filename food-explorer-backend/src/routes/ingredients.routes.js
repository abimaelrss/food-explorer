const { Router } = require("express");

const IngredientsController = require("../controllers/IngredientsController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const ingredientsRouter = Router();

const ingredientsController = new IngredientsController();

ingredientsRouter.use(ensureAuthenticated);

// ingredientsRouter.post("/", ingredientsController.create);
// ingredientsRouter.get("/", ingredientsController.show);
// ingredientsRouter.delete("/:id", ingredientsController.delete);
ingredientsRouter.get("/:id", ingredientsController.index);

module.exports = ingredientsRouter;