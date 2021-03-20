const {Router, response} = require("express")
const { tasksRoutes } = require("./tasks.routes");

const routes = Router()

routes.use("/tasks", tasksRoutes);

routes.get("/", (req,res) => res.send('Main page'))

module.exports = {
    routes
}
