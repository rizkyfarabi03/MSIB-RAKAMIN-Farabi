const model = require("../models/model");
const controller = {};

controller.getAll = async function (req, res) {
  try {
    let todo = await model.todo.findAll();
    if (todo.length > 0) {
      res.status(200).json({
        message: "successfully Get all todo data",
        data: todo,
      });
    } else {
      res.status(404).json({
        message: "Data not found",
        data: [],
      });
    }
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

controller.getOne = async function (req, res) {
  try {
    let todo = await model.todo.findAll({
      where: {
        id: req.params.id,
      },
    });
    if (todo.length > 0) {
      res.status(200).json({
        message: "Data todo founded",
        data: todo,
      });
    } else {
      res.status(200).json({
        message: "data todo not found",
        data: [],
      });
    }
  } catch (err) {
    res.status(404).json({
      message: err.message,
    });
  }
};

controller.create = async function (req, res) {
  // console.log(req.file);
  try {
    let todo = await model.todo.create({
      title: req.body.title,
    });
    res.status(201).json({
      message: "Todo added",
      data: todo,
    });
  } catch (err) {
    res.status(404).json({
      message: err.message,
    });
  }
};

controller.delete = async function (req, res) {
  try {
    let todo = await model.todo.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({
      message: "todo data deleted",
    });
  } catch (err) {
    res.status(404).json({
      message: err.message,
    });
  }
};


module.exports = controller;