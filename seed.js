const {
  db,
  Character,
  Boiler,
  Bulletin,
  Craft,
  FishTank,
  Pantry,
  Vault,
} = require("./server/db");

const boiler = [
  {
    name: "Copper Bar",
    bundle: "Blacksmith's",
  },
  {
    name: "Iron Bar",
    bundle: "Blacksmith's",
  },
  {
    name: "Gold Bar",
    bundle: "Blacksmith's",
  },
  {
    name: "Quartz",
    bundle: "Geologist's",
  },
  {
    name: "Earth Crystal",
    bundle: "Geologist's",
  },
  {
    name: "Frozen Tear",
    bundle: "Geologist's",
  },
  {
    name: "Slime",
    bundle: "Adventurer's",
    quantity: 99,
  },
  {
    name: "Bat Wing",
    bundle: "Adventurer's",
    quantity: 10,
  },
  {
    name: "Solar Essence",
    bundle: "Adventurer's",
  },
  {
    name: "Void Essence",
    bundle: "Adventurer's",
  },
];

const bulletin = [
  {
    name: "Maple Syrup",
    bundle: "Chef's",
  },
  {
    name: "Fiddlehead Fern",
    bundle: "Chef's",
  },
  {
    name: "Truffle",
    bundle: "Chef's",
  },
  {
    name: "Poppy",
    bundle: "Chef's",
  },
  {
    name: "Maki Roll",
    bundle: "Chef's",
  },
  {
    name: "Fried Egg",
    bundle: "Chef's",
  },
  {
    name: "Red Mushroom",
    bundle: "Dye",
  },
  {
    name: "Sea Urchin",
    bundle: "Dye",
  },
  {
    name: "Sunflower",
    bundle: "Dye",
  },
  {
    name: "Duck Feather",
    bundle: "Dye",
  },
  {
    name: "Aquamarine",
    bundle: "Dye",
  },
  {
    name: "Red Cabbage",
    bundle: "Dye",
  },
  {
    name: "Purple Mushroom",
    bundle: "Field Research",
  },
  {
    name: "Nautilus Shell",
    bundle: "Field Research",
  },
  {
    name: "Chub",
    bundle: "Field Research",
  },
  {
    name: "Frozen Geode",
    bundle: "Field Research",
  },
  {
    name: "Wheat",
    bundle: "Fodder",
    quantity: 10,
  },
  {
    name: "Hay",
    bundle: "Fodder",
    quantity: 10,
  },
  {
    name: "Apple",
    bundle: "Fodder",
    quantity: 3,
  },
];

const craft = [
  {
    name: "Wild Horseradish",
    bundle: "Spring Foraging",
  },
  {
    name: "Daffodil",
    bundle: "Spring Foraging",
  },
  {
    name: "Leek",
    bundle: "Spring Foraging",
  },
  {
    name: "Dandelion",
    bundle: "Spring Foraging",
  },
  {
    name: "Grape",
    bundle: "Summer Foraging",
  },
  {
    name: "Spice Berry",
    bundle: "Summer Foraging",
  },
  {
    name: "Sweet Pea",
    bundle: "Summer Foraging",
  },
  {
    name: "Common Mushroom",
    bundle: "Fall Foraging",
  },
  {
    name: "Wild Plum",
    bundle: "Fall Foraging",
  },
  {
    name: "Hazelnut",
    bundle: "Fall Foraging",
  },
  {
    name: "Blackberry",
    bundle: "Fall Foraging",
  },
  {
    name: "Winter Root",
    bundle: "Winter Foraging",
  },
  {
    name: "Crystal Fruit",
    bundle: "Winter Foraging",
  },
  {
    name: "Snow Yam",
    bundle: "Winter Foraging",
  },
  {
    name: "Crocus",
    bundle: "Winter Foraging",
  },
  {
    name: "Wood",
    bundle: "Construction",
    quantity: 99,
  },
  {
    name: "Wood",
    bundle: "Construction",
    quantity: 99,
  },
  {
    name: "Stone",
    bundle: "Construction",
    quantity: 99,
  },
  {
    name: "Hard Wood",
    bundle: "Construction",
    quantity: 10,
  },
  {
    name: "Coconut",
    bundle: "Exotic Foraging",
  },
  {
    name: "Cactus Fruit",
    bundle: "Exotic Foraging",
  },
  {
    name: "Red Mushroom",
    bundle: "Exotic Foraging",
  },
  {
    name: "Purple Mushroom",
    bundle: "Exotic Foraging",
  },
  {
    name: "Maple Syrup",
    bundle: "Exotic Foraging",
  },
  {
    name: "Oak Resin",
    bundle: "Exotic Foraging",
  },
  {
    name: "Pine Tar",
    bundle: "Exotic Foraging",
  },
  {
    name: "Morel",
    bundle: "Exotic Foraging",
  },
];

const fish = [
  {
    name: "Sunfish",
    bundle: "River Fish",
    season: "Spring, Summer",
  },
  {
    name: "Catfish",
    bundle: "River Fish",
    season: "Spring, Summer, Fall",
  },
  {
    name: "Shad",
    bundle: "River Fish",
    season: "Spring, Summer, Fall",
  },
  {
    name: "Tiger Trout",
    bundle: "River Fish",
    season: "Fall, Winter",
  },
  {
    name: "Largemouth Bass",
    bundle: "Lake Fish",
    season: "All",
  },
  {
    name: "Carp",
    bundle: "Lake Fish",
    season: "All",
  },
  {
    name: "Bullhead",
    bundle: "Lake Fish",
    season: "All",
  },
  {
    name: "Sturgeon",
    bundle: "Lake Fish",
    season: "Summer, Winter",
  },
  {
    name: "Sardine",
    bundle: "Ocean Fish",
    season: "Spring, Fall, Winter",
  },
  {
    name: "Tuna",
    bundle: "Ocean Fish",
    season: "Summer, Winter",
  },
  {
    name: "Red Snapper",
    bundle: "Ocean Fish",
    season: "Summer, Fall",
  },
  {
    name: "Tilapia",
    bundle: "Ocean Fish",
    season: "Summer, Fall",
  },
  {
    name: "Walleye",
    bundle: "Night Fishing",
    season: "Fall",
  },
  {
    name: "Bream",
    bundle: "Night Fishing",
    season: "All",
  },
  {
    name: "Eel",
    bundle: "Night Fishing",
    season: "Spring, Fall",
  },
  {
    name: "Lobster",
    bundle: "Crab Pot",
    season: "All",
  },
  {
    name: "Crayfish",
    bundle: "Crab Pot",
    season: "All",
  },
  {
    name: "Crab",
    bundle: "Crab Pot",
    season: "All",
  },
  {
    name: "Cockle",
    bundle: "Crab Pot",
    season: "All",
  },
  {
    name: "Mussel",
    bundle: "Crab Pot",
    season: "All",
  },
  {
    name: "Shrimp",
    bundle: "Crab Pot",
    season: "All",
  },
  {
    name: "Snail",
    bundle: "Crab Pot",
    season: "All",
  },
  {
    name: "Periwinkle",
    bundle: "Crab Pot",
    season: "All",
  },
  {
    name: "Oyster",
    bundle: "Crab Pot",
    season: "All",
  },
  {
    name: "Clam",
    bundle: "Crab Pot",
    season: "All",
  },
  {
    name: "Pufferfish",
    bundle: "Specialty Fish",
    season: "Summer",
  },
  {
    name: "Ghostfish",
    bundle: "Specialty Fish",
    season: "All",
  },
  {
    name: "Sandfish",
    bundle: "Specialty Fish",
    season: "All",
  },
  {
    name: "Woodskip",
    bundle: "Specialty Fish",
    season: "All",
  },
];

const pantry = [
  {
    name: "Parsnip",
    bundle: "Spring Crops",
  },
  {
    name: "Green Bean",
    bundle: "Spring Crops",
  },
  {
    name: "Cauliflower",
    bundle: "Spring Crops",
  },
  {
    name: "Potato",
    bundle: "Spring Crops",
  },
  {
    name: "Tomato",
    bundle: "Summer Crops",
  },
  {
    name: "Hot Pepper",
    bundle: "Summer Crops",
  },
  {
    name: "Blueberry",
    bundle: "Summer Crops",
  },
  {
    name: "Melon",
    bundle: "Summer Crops",
  },
  {
    name: "Corn",
    bundle: "Fall Crops",
  },
  {
    name: "Eggplant",
    bundle: "Fall Crops",
  },
  {
    name: "Pumpkin",
    bundle: "Fall Crops",
  },
  {
    name: "Yam",
    bundle: "Fall Crops",
  },
  {
    name: "Gold Star Parsnip",
    bundle: "Quality Crops",
    quantity: 5,
  },
  {
    name: "Gold Star Melon",
    bundle: "Quality Crops",
    quantity: 5,
  },
  {
    name: "Gold Star Pumpkin",
    bundle: "Quality Crops",
    quantity: 5,
  },
  {
    name: "Gold Star Corn",
    bundle: "Quality Crops",
    quantity: 5,
  },
  {
    name: "Large Milk",
    bundle: "Animal",
  },
  {
    name: "Large Egg (Brown)",
    bundle: "Animal",
  },
  {
    name: "Large Egg (White)",
    bundle: "Animal",
  },
  {
    name: "Large Goat Milk",
    bundle: "Animal",
  },
  {
    name: "Wool",
    bundle: "Animal",
  },
  {
    name: "Duck Egg",
    bundle: "Animal",
  },
  {
    name: "Truffle Oil",
    bundle: "Artisan",
  },
  {
    name: "Cloth",
    bundle: "Artisan",
  },
  {
    name: "Goat Cheese",
    bundle: "Artisan",
  },
  {
    name: "Cheese",
    bundle: "Artisan",
  },
  {
    name: "Honey",
    bundle: "Artisan",
  },
  {
    name: "Jelly",
    bundle: "Artisan",
  },
  {
    name: "Apple",
    bundle: "Artisan",
  },
  {
    name: "Apricot",
    bundle: "Artisan",
  },
  {
    name: "Orange",
    bundle: "Artisan",
  },
  {
    name: "Peach",
    bundle: "Artisan",
  },
  {
    name: "Pomegranate",
    bundle: "Artisan",
  },
  {
    name: "Cherry",
    bundle: "Artisan",
  },
];

const vault = [
  {
    cost: "2,500g",
    bundle: "2,500",
  },
  {
    cost: "5,000g",
    bundle: "5,000",
  },
  {
    cost: "10,000g",
    bundle: "10,000",
  },
  {
    cost: "25,000g",
    bundle: "25,000",
  },
];

const characters = [
  {
    name: "Alex",
    bachelor: true,
    bachelorette: false,
    imageUrl: "https://stardewvalleywiki.com/mediawiki/images/0/04/Alex.png",
    bestGift: "Complete Breakfast, Salmon Dinner",
    birthday: "Summer 13",
  },
  {
    name: "Elliott",
    bachelor: true,
    bachelorette: false,
    imageUrl: "https://stardewvalleywiki.com/mediawiki/images/b/bd/Elliott.png",
    bestGift: "Crab Cakes, Duck Feather, Lobster, Pomegranate",
    birthday: "Fall 5",
  },
  {
    name: "Harvey",
    bachelor: true,
    bachelorette: false,
    imageUrl: "https://stardewvalleywiki.com/mediawiki/images/9/95/Harvey.png",
    bestGift: "Coffee, Pickles, Super Meal, Truffle Oil, Wine",
    birthday: "Winter 14",
  },
  {
    name: "Sam",
    bachelor: true,
    bachelorette: false,
    imageUrl: "https://stardewvalleywiki.com/mediawiki/images/9/94/Sam.png",
    bestGift: "Cactus Fruit, Maple Bar, Pizza, Tigerseye",
    birthday: "Summer 17",
  },
  {
    name: "Sebastian",
    bachelor: true,
    bachelorette: false,
    imageUrl:
      "https://stardewvalleywiki.com/mediawiki/images/a/a8/Sebastian.png",
    bestGift: "Frozen Tear, Sashimi, Pumpkin Soup, Void Egg",
    birthday: "Winter 10",
  },
  {
    name: "Shane",
    bachelor: true,
    bachelorette: false,
    imageUrl: "https://stardewvalleywiki.com/mediawiki/images/8/8b/Shane.png",
    bestGift: "Beer, Hot Pepper, Pepper Poppers, Pizza",
    birthday: "Spring 20",
  },
  {
    name: "Abigail",
    bachelor: false,
    bachelorette: true,
    imageUrl: "https://stardewvalleywiki.com/mediawiki/images/8/88/Abigail.png",
    bestGift: "Amethyst, Pumpkin, Spicy Eel",
    birthday: "Fall 13",
  },
  {
    name: "Emily",
    bachelor: false,
    bachelorette: true,
    imageUrl: "https://stardewvalleywiki.com/mediawiki/images/2/28/Emily.png",
    bestGift: "Amethyst, Aquamarine, Cloth, Wool",
    birthday: "Spring 27",
  },
  {
    name: "Haley",
    bachelor: false,
    bachelorette: true,
    imageUrl: "https://stardewvalleywiki.com/mediawiki/images/1/1b/Haley.png",
    bestGift: "Coconut, Fruit Salad, Pink Cake, Sunflower",
    birthday: "Spring 14",
  },
  {
    name: "Leah",
    bachelor: false,
    bachelorette: true,
    imageUrl: "https://stardewvalleywiki.com/mediawiki/images/e/e6/Leah.png",
    bestGift: "Goat Cheese, Salad, Truffle, Wine",
    birthday: "Winter 23",
  },
  {
    name: "Maru",
    bachelor: false,
    bachelorette: true,
    imageUrl: "https://stardewvalleywiki.com/mediawiki/images/f/f8/Maru.png",
    bestGift: "Battery Pack, Cauliflower, Strawberry",
    birthday: "Summer 10",
  },
  {
    name: "Penny",
    bachelor: false,
    bachelorette: true,
    imageUrl: "https://stardewvalleywiki.com/mediawiki/images/a/ab/Penny.png",
    bestGift: "Diamond, Emerald, Melon, Poppy",
    birthday: "Fall 2",
  },
  {
    name: "Caroline",
    bachelor: false,
    bachelorette: false,
    imageUrl:
      "https://stardewvalleywiki.com/mediawiki/images/8/87/Caroline.png",
    bestGift: "Summer Spangle, Fish Taco",
    birthday: "Winter 7",
  },
  {
    name: "Clint",
    bachelor: false,
    bachelorette: false,
    imageUrl: "https://stardewvalleywiki.com/mediawiki/images/3/31/Clint.png",
    bestGift: "Amethyst, Omni Geode, Ruby, Gold Bar",
    birthday: "Winter 26",
  },
  {
    name: "Demetrius",
    bachelor: false,
    bachelorette: false,
    imageUrl:
      "https://stardewvalleywiki.com/mediawiki/images/f/f9/Demetrius.png",
    bestGift: "Strawberry, Ice Cream, Bean Hotpot",
    birthday: "Summer 19",
  },
  {
    name: "Dwarf",
    bachelor: false,
    bachelorette: false,
    imageUrl: "https://stardewvalleywiki.com/mediawiki/images/e/ed/Dwarf.png",
    bestGift: "Amethyst, Aquamarine, Lemon Stone, Omni Geode",
    birthday: "Summer 22",
  },
  {
    name: "Evelyn",
    bachelor: false,
    bachelorette: false,
    imageUrl: "https://stardewvalleywiki.com/mediawiki/images/8/8e/Evelyn.png",
    bestGift: "Beet, Chocolate Cake, Diamond",
    birthday: "Winter 20",
  },
  {
    name: "George",
    bachelor: false,
    bachelorette: false,
    imageUrl: "https://stardewvalleywiki.com/mediawiki/images/7/78/George.png",
    bestGift: "Fried Mushroom, Leek",
    birthday: "Fall 24",
  },
  {
    name: "Gus",
    bachelor: false,
    bachelorette: false,
    imageUrl: "https://stardewvalleywiki.com/mediawiki/images/5/52/Gus.png",
    bestGift: "Diamond, Escargot, Orange, Fish Taco",
    birthday: "Summer 8",
  },
  {
    name: "Jas",
    bachelor: false,
    bachelorette: false,
    imageUrl: "https://stardewvalleywiki.com/mediawiki/images/5/55/Jas.png",
    bestGift: "Fairy Rose, Pink Cake",
    birthday: "Summer 4",
  },
  {
    name: "Jodi",
    bachelor: false,
    bachelorette: false,
    imageUrl: "https://stardewvalleywiki.com/mediawiki/images/4/41/Jodi.png",
    bestGift: "Chocolate Cake, Crispy Bass, Diamond, Pancakes",
    birthday: "Fall 11",
  },
  {
    name: "Kent",
    bachelor: false,
    bachelorette: false,
    imageUrl: "https://stardewvalleywiki.com/mediawiki/images/9/99/Kent.png",
    bestGift: "Fiddlehead Risotto, Roasted Hazelnuts",
    birthday: "Spring 4",
  },
  {
    name: "Krobus",
    bachelor: false,
    bachelorette: false,
    imageUrl: "https://stardewvalleywiki.com/mediawiki/images/7/71/Krobus.png",
    bestGift: "Diamond, Pumpkin, Void Egg, Wild Horseradish",
    birthday: "Winter 1",
  },
  {
    name: "Leo",
    bachelor: false,
    bachelorette: false,
    imageUrl: "https://stardewvalleywiki.com/mediawiki/images/1/1d/Leo.png",
    bestGift: "Duck Feather, Mango, Poi",
    birthday: "Summer 26",
  },
  {
    name: "Lewis",
    bachelor: false,
    bachelorette: false,
    imageUrl: "https://stardewvalleywiki.com/mediawiki/images/2/2b/Lewis.png",
    bestGift: "Autumn's Bounty, Hot Pepper, Green Tea",
    birthday: "Spring 7",
  },
  {
    name: "Linus",
    bachelor: false,
    bachelorette: false,
    imageUrl: "https://stardewvalleywiki.com/mediawiki/images/3/31/Linus.png",
    bestGift: "Coconut, Yam, Cactus Fruit",
    birthday: "Winter 3",
  },
  {
    name: "Marnie",
    bachelor: false,
    bachelorette: false,
    imageUrl: "https://stardewvalleywiki.com/mediawiki/images/5/52/Marnie.png",
    bestGift: "Diamond, Pink Cake",
    birthday: "Fall 18",
  },
  {
    name: "Pam",
    bachelor: false,
    bachelorette: false,
    imageUrl: "https://stardewvalleywiki.com/mediawiki/images/d/da/Pam.png",
    bestGift: "Beer, Cactus Fruit, Parsnip, Pale Ale",
    birthday: "Spring 18",
  },
  {
    name: "Pierre",
    bachelor: false,
    bachelorette: false,
    imageUrl: "https://stardewvalleywiki.com/mediawiki/images/7/7e/Pierre.png",
    bestGift: "Fried Calamari",
    birthday: "Spring 26",
  },
  {
    name: "Robin",
    bachelor: false,
    bachelorette: false,
    imageUrl: "https://stardewvalleywiki.com/mediawiki/images/1/1b/Robin.png",
    bestGift: "Goat Cheese, Peach, Spaghetti",
    birthday: "Fall 21",
  },
  {
    name: "Sandy",
    bachelor: false,
    bachelorette: false,
    imageUrl: "https://stardewvalleywiki.com/mediawiki/images/4/4e/Sandy.png",
    bestGift: "Crocus, Daffodil, Sweet Pea",
    birthday: "Fall 15",
  },
  {
    name: "Vincent",
    bachelor: false,
    bachelorette: false,
    imageUrl: "https://stardewvalleywiki.com/mediawiki/images/f/f1/Vincent.png",
    bestGift: "Snail, Grape, Cranberry Candy",
    birthday: "Spring 10",
  },
  {
    name: "Willy",
    bachelor: false,
    bachelorette: false,
    imageUrl: "https://stardewvalleywiki.com/mediawiki/images/8/82/Willy.png",
    bestGift: "Catfish, Diamond, Iridium Bar, Pumpkin",
    birthday: "Summer 24",
  },
  {
    name: "Wizard",
    bachelor: false,
    bachelorette: false,
    imageUrl: "https://stardewvalleywiki.com/mediawiki/images/c/c7/Wizard.png",
    bestGift: "Purple Mushroom, Solar Essence, Void Essence",
    birthday: "Winter 17",
  },
];

const seed = async () => {
  await db.sync({ force: true });
  console.log("db synceed");
  const character = await Promise.all(
    characters.map((character) => {
      return Character.create(character);
    })
  );
  const boilers = await Promise.all(
    boiler.map((item) => {
      return Boiler.create(item);
    })
  );
  const bulletins = await Promise.all(
    bulletin.map((item) => {
      return Bulletin.create(item);
    })
  );
  const crafts = await Promise.all(
    craft.map((item) => {
      return Craft.create(item);
    })
  );
  const fishes = await Promise.all(
    fish.map((item) => {
      return FishTank.create(item);
    })
  );
  const pantries = await Promise.all(
    pantry.map((item) => {
      return Pantry.create(item);
    })
  );
  const vaults = await Promise.all(
    vault.map((item) => {
      return Vault.create(item);
    })
  );
};

async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

if (module === require.main) {
  runSeed();
}
module.exports = seed;
