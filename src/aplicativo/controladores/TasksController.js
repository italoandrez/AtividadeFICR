// const { sequelize } = require("../../config/database");
const Task = require("../models/Task");

class TasksController {
  async index(req, res) {
    const tasks = await Task.findAll();
    return res.json(tasks);
  }

  async show(req, res) {
    const task = await Task.findByPk(req.params.id);

    if (!task){
      return res.status(404).json({error: "Task not found!"})
    }
    return res.json(task);
  }

  async store(req, res) {
    const {descricao, status} = req.body
    const task = await Task.create({descricao, status});
    return res.json(task);
  }

  async update(req, res) {
    const task = await Task.findByPk(req.params.id);

    if (!task){
      return res.status(404).json({error: "Task not found!"})
    }
    await task.update(req.body);
    return res.json(task);
  }

  async delete(req, res) {
    const task = await Task.findByPk(req.params.id);

    if (!task){
      return res.status(404).json({error: "Task not found!"})
    }
    await task.destroy();
    return res.sendStatus(204);
  }
}

module.exports = { TasksController };
