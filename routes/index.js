const router = require("express").Router();
const usersRouter = require("./users");
const tasksRouter = require("./tasks");

router.use("/", usersRouter);
router.use("/tasks", tasksRouter);

module.exports = router;