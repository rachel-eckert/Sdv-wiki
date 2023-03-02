const router = require("express").Router();
const { Boiler } = require("../db");

//fetch all in boiler room
router.get("/", async (req, res, next) => {
  try {
    const allBoiler = await Boiler.findAll({
      order: [["bundle", "ASC"]],
    });
    res.json(allBoiler);
  } catch (err) {
    next(err);
  }
});
// fetch one
router.get("/:id", async (req, res, next) => {
  try {
    const boiler = await Boiler.findByPk(req.params.id);
    res.json(boiler);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
