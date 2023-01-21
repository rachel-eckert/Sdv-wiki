const { db, Character } = require("./server/db");

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
