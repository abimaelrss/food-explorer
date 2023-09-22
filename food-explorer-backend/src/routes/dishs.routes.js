const { Router } = require("express");

const DishsController = require("../controllers/DishsController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const dishsRouter = Router();

const dishsController = new DishsController();

dishsRouter.use(ensureAuthenticated);

dishsRouter.post("/:id", dishsController.create);
// platesRouter.get("/:id", platesController.show);
// platesRouter.delete("/:id", platesController.delete);
// platesRouter.get("/", platesController.index);

module.exports = dishsRouter;