const { Router } = require("express");

const DishsController = require("../controllers/DishsController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const dishsRouter = Router();

const dishsController = new DishsController();

dishsRouter.use(ensureAuthenticated);

dishsRouter.post("/:id", dishsController.create);
dishsRouter.get("/:id", dishsController.show);
// dishsRouter.delete("/:id", dishsController.delete);
dishsRouter.get("/", dishsController.index);

module.exports = dishsRouter;