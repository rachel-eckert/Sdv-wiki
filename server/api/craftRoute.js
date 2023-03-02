const router = require("express").Router();
const { Craft } = require("../db");

//fetch all
router.get("/", async (req, res, next) => {
  try {
    const allCraft = await Craft.findAll({
      order: [["bundle", "ASC"]],
    });
    res.json(allCraft);
  } catch (err) {
    next(err);
  }
});
//fetch one
router.get("/:id", async (req, res, next) => {
  try {
    const craft = await Craft.findByPk(req.params.id);
    res.json(craft);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
