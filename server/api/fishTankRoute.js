const router = require("express").Router();
const { FishTank } = require("../db");
//fetch all
router.get("/", async (req, res, next) => {
  try {
    const allFish = await FishTank.findAll({
      order: [["bundle", "ASC"]],
    });
    res.json(allFish);
  } catch (err) {
    next(err);
  }
});
//fetch one
router.get("/:id", async (req, res, next) => {
  try {
    const fish = await FishTank.findByPk(req.params.id);
    res.json(fish);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
