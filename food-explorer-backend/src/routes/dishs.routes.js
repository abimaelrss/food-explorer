const { Router } = require("express");
const multer = require("multer");
const uploadConfig = require("../configs/upload");

const DishsController = require("../controllers/DishsController");
const DishImageController = require("../controllers/DishImageController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const verifyUserAuthorization = require("../middlewares/verifyUserAuthorization");

const dishsRouter = Router();
const upload = multer(uploadConfig.MULTER);

const dishsController = new DishsController();
const dishImageController = new DishImageController();

dishsRouter.use(ensureAuthenticated);

dishsRouter.post("/", verifyUserAuthorization("admin"), dishsController.create);
dishsRouter.put("/:id", dishsController.update);
dishsRouter.get("/:id", dishsController.show);
dishsRouter.delete("/:id", dishsController.delete);
dishsRouter.get("/", dishsController.index);
// dishsRouter.get("/", dishsController.searchByNameAndIngredient);
dishsRouter.patch("/image/:dish_id", upload.single("image"), dishImageController.update);

module.exports = dishsRouter;
