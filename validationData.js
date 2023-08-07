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

// Wrap the code inside an async function
async function savePepaya() {
  const pepaya = new Fruit({
    name: "Pepaya",
    rating: 10,
    review: "Manis",
  });

  try {
    await pepaya.save();
    console.log("Berhasil simpan!");
    mongoose.connection.close();
  } catch (error) {
    console.log(error);
    mongoose.connection.close();
  }
}

// Call the async function
savePepaya();
