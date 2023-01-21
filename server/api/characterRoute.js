const router = require("express").Router();
const { Character } = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const allCharacters = await Character.findAll();
    res.json(allCharacters);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const character = await Character.findByPk(req.params.id);
    res.json(character);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
