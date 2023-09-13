const { Router } = require("express");

const PlatesController = require("../controllers/PlatesController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const platesRouter = Router();

const platesController = new PlatesController();

platesRouter.use(ensureAuthenticated);

platesRouter.post("/:id", platesController.create);
// platesRouter.get("/:id", platesController.show);
// platesRouter.delete("/:id", platesController.delete);
// platesRouter.get("/", platesController.index);

module.exports = platesRouter;