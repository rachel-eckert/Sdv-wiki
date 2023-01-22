const router = require("express").Router();
const { Vault } = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const allVault = await Vault.findAll({
      order: [["bundle", "ASC"]],
    });
    res.json(allVault);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const vault = await Vault.findByPk(req.params.id);
    res.json(vault);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
