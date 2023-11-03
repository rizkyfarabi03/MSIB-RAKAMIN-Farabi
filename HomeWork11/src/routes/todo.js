var express = require("express");
var router = express.Router();

const controllers = require("../controllers/controllers");

router.get("/", controllers.todo.getAll);
router.get("/:id", controllers.todo.getOne);
router.post("/", controllers.todo.create);
router.delete("/:id", controllers.todo.delete);

module.exports = router;