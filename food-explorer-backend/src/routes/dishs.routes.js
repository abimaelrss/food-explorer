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
dishsRouter.get("/:id", dishsController.show);
// dishsRouter.delete("/:id", dishsController.delete);
dishsRouter.get("/", dishsController.index);
dishsRouter.patch(
  "/imageDish",
  ensureAuthenticated,
  upload.single("imageDish"),
  dishImageController.update
);

module.exports = dishsRouter;
