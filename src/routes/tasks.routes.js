const { Router } = require("express");
const { TasksController } = require("../app/controllers/TasksController");

const tasksRoutes = Router();

const tasksController = new TasksController();

tasksRoutes.get("/", tasksController.index);
tasksRoutes.get("/:id", tasksController.show);
tasksRoutes.post("/", tasksController.store);
tasksRoutes.put("/:id", tasksController.update);
tasksRoutes.delete("/:id", tasksController.delete);

module.exports = {
  tasksRoutes,
};
