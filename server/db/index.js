const db = require("./db");

const Character = require("./models/Characters");
const Boiler = require("./models/Boiler");
const Bulletin = require("./models/Bulletin");
const Craft = require("./models/Craft");
const FishTank = require("./models/FishTank");
const Pantry = require("./models/Pantry");
const Vault = require("./models/Vault");
module.exports = {
  db,
  Character,
  Boiler,
  Bulletin,
  Craft,
  FishTank,
  Pantry,
  Vault,
};
