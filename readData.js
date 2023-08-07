const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/db-mongoose");

const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

// Function to display all fruits
async function displayAllFruits() {
  try {
    const allFruits = await Fruit.find({});
    console.log("All fruits:");
    console.log(allFruits);
    mongoose.connection.close();
  } catch (error) {
    console.log(error);
  }
}

// Function to display a specific fruit by name
async function displayFruitByName(name) {
  try {
    const fruit = await Fruit.findOne({ name });
    if (fruit) {
      console.log("Found fruit:");
      console.log(fruit);
      mongoose.connection.close();
    } else {
      console.log(`Fruit with name '${name}' not found.`);
      mongoose.connection.close();
    }
  } catch (error) {
    console.log(error);
  }
}

// Call the functions to display fruits
displayAllFruits();
// displayFruitByName("Apple");
