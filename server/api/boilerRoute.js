const router = require("express").Router();
const { Boiler } = require("../db");

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

router.get("/:id", async (req, res, next) => {
  try {
    const boiler = await Boiler.findByPk(req.params.id);
    res.json(boiler);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
