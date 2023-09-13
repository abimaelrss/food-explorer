const { Router } = require("express");

const usersRouter = require("./users.routes");
const notesRouter = require("./notes.routes");
const tagsRouter = require("./tags.routes");
const sessionsRouter = require("./sessions.routes");

const platesRouter = require("./plates.routes");
const categoriesRouter = require("./categories.routes");
const ingredientsRouter = require("./ingredients.routes");

const routes = Router();
routes.use("/users", usersRouter);
routes.use("/sessions", sessionsRouter);
routes.use("/notes", notesRouter);
routes.use("/tags", tagsRouter);

routes.use("/plates", platesRouter);
routes.use("/categories", categoriesRouter);
routes.use("/ingredients", ingredientsRouter);

module.exports = routes;