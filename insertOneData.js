const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/db-mongoose");

const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

// Wrap the code inside an async function
async function saveAnggur() {
  const anggur = new Fruit({
    name: "Anggur",
    rating: 7,
    review: "Asem",
  });

  try {
    await anggur.save();
    console.log("Berhasil simpan!");
    mongoose.connection.close();
  } catch (error) {
    console.log(error);
  }
}

// Call the async function
saveAnggur();
