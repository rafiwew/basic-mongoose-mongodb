const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/db-mongoose");

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Harap isi nama buah!"],
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
  },
  review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

// Function to delete a fruit by name
async function deleteFruitByName(name) {
  try {
    const deletedFruit = await Fruit.findOneAndDelete({ name });

    if (deletedFruit) {
      console.log("Deleted fruit:");
      console.log(deletedFruit);
      mongoose.connection.close();
    } else {
      console.log(`Fruit with name '${name}' not found.`);
      mongoose.connection.close();
    }
  } catch (error) {
    console.log(error);
  }
}

// Call the function to delete a fruit
deleteFruitByName("Anggur");
