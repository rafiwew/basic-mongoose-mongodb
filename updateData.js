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

// Function to update a fruit's rating by name
async function updateFruitRating(name, newRating) {
  try {
    const updatedFruit = await Fruit.findOneAndUpdate(
      { name },
      { rating: newRating },
      { returnOriginal: false } // Return the updated document
    );

    if (updatedFruit) {
      console.log("Updated fruit:");
      console.log(updatedFruit);
      mongoose.connection.close();
    } else {
      console.log(`Fruit with name '${name}' not found.`);
      mongoose.connection.close();
    }
  } catch (error) {
    console.log(error);
  }
}

// Function to update a fruit's name by id
async function updateFruitName(_id, newName) {
  try {
    const updatedFruit = await Fruit.findOneAndUpdate(
      { _id },
      { name: newName },
      { returnOriginal: false } // Return the updated document
    );

    if (updatedFruit) {
      console.log("Updated fruit:");
      console.log(updatedFruit);
      mongoose.connection.close();
    } else {
      console.log(`Fruit with id '${_id}' not found.`);
      mongoose.connection.close();
    }
  } catch (error) {
    console.log(error);
  }
}

// Call the function to update a fruit's rating
// updateFruitRating("Pepayak", 3);
updateFruitName("64d03bccaaab13b8216886db", "Pepaya");
