const { Router } = require("express");

const usersRouter = require("./users.routes");
const sessionsRouter = require("./sessions.routes");

const dishsRouter = require("./dishs.routes");
const categoriesRouter = require("./categories.routes");
const ingredientsRouter = require("./ingredients.routes");

const routes = Router();
routes.use("/users", usersRouter);
routes.use("/sessions", sessionsRouter);

routes.use("/dishs", dishsRouter);
routes.use("/categories", categoriesRouter);
routes.use("/ingredients", ingredientsRouter);

module.exports = routes;