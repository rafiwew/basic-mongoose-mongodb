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

const peopleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Harap isi nama orang!"],
  },
  age: {
    type: Number,
  },
  favoriteFruits: fruitSchema,
});

const People = mongoose.model("People", peopleSchema);

// object of fruit
const fruitDuku = new Fruit({
  name: "Duku",
  rating: 10,
  review: "Manis",
});

// Function for save fruit
async function saveDuku() {
  try {
    await fruitDuku.save();
    console.log("Berhasil simpan fruit!");
    mongoose.connection.close();
  } catch (error) {
    console.log(error);
    mongoose.connection.close();
  }
}

// object of people
const peopleOne = new People({
  name: "Rafi",
  age: 20,
  favoriteFruits: fruitDuku,
});

// Function for save people
async function savePeople() {
  try {
    await peopleOne.save();
    console.log("Berhasil simpan people with relationship!");
    mongoose.connection.close();
  } catch (error) {
    console.log(error);
    mongoose.connection.close();
  }
}

// Call the async function
saveDuku();
savePeople();
