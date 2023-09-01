import { Op } from "sequelize";
import db, { Animal, Human } from "./model.js";

// Get the human with the primary key 2
export const query1 = await Human.findByPk(2);

// Get the first animal whose species is "fish"
export const query2 = await Animal.findOne({ where: { species: "fish" } });
console.log(query2);
// Get all animals belonging to the human with primary key 5
export const query3 = await Animal.findAll({ where: { human_id: 5 } });

// Get all animals born in a year greater than (but not equal to) 2015.
export const query4 = await Animal.findAll({
  where: { birthYear: { [Op.gt]: 2015 } },
});

// Get all the humans with first names that start with "J"
export const query5 = await Human.findAll({
  where: { fname: { [Op.like]: "J%" } },
});

// Get all the animals who don't have a birth year
export const query6 = await Animal.findAll({
  where: { birthYear: { [Op.is]: null } },
});

// Get all the animals with species "fish" OR "rabbit"
export const query7 = await Animal.findAll({
  where: { [Op.or]: [{ species: "fish" }, { species: "rabbit" }] },
});

// Get all the humans who DON'T have an email address that contains "gmail"
export const query8 = await Human.findAll({
  where: { [Op.not]: { email: { [Op.like]: "%gmail%" } } },
});

// Continue reading the instructions before you move on!

// Print a directory of humans and their animals
export async function printHumansAndAnimals() {
  let output = "";
  const humans = await Human.findAll({ include: Animal });
  for (const human of humans) {
    output += `${human.fname} ${human.lname} \n`;
    for (const animal of human.Animals) {
      output += `- ${animal.name}, ${animal.species} \n`;
    }
  }
  return output;
}

// why isn't animal.getHuman() a function?  I thought it was created by the belongsTo
export async function getHumansByAnimalSpecies(species) {
  const humans = new Set();
  const animals = await Animal.findAll({ where: { species: species } });
  for (const animal of animals) {
    const human = await Human.findByPk(animal.humanId);
    humans.add(`${human.fname} ${human.lname}`);
  }
  return humans;
}

// await db.close();
