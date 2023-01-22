const router = require("express").Router();
const { Pantry } = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const allPantry = await Pantry.findAll({
      order: [["bundle", "ASC"]],
    });
    res.json(allPantry);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const pantry = await Pantry.findByPk(req.params.id);
    res.json(pantry);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
