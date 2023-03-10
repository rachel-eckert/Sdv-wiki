const router = require("express").Router();
const { Bulletin } = require("../db");

//fetch all
router.get("/", async (req, res, next) => {
  try {
    const allBulletin = await Bulletin.findAll({
      order: [["bundle", "ASC"]],
    });
    res.json(allBulletin);
  } catch (err) {
    next(err);
  }
});
//fetch one
router.get("/:id", async (req, res, next) => {
  try {
    const bulletin = await Bulletin.findByPk(req.params.id);
    res.json(bulletin);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
