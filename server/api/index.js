"use strict";

const router = require("express").Router();

router.use("/characters", require("./characterRoute"));
router.use("/boiler", require("./boilerRoute"));
router.use("/bulletin", require("./bulletinRoute"));
router.use("/craft", require("./craftRoute"));
router.use("/fishtank", require("./fishTankRoute"));
router.use("/pantry", require("./pantryRoute"));
router.use("/vault", require("./vaultRoute"));

router.use((req, res, next) => {
  const err = new Error("API route not found");
  err.status = 404;
  next(err);
});

module.exports = router;
