const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/db-mongoose");

const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

// Wrap the code inside an async function
// async function saveApple() {
//   const apple = new Fruit({
//     name: "Mango",
//     rating: 7,
//     review: "Manis",
//   });

//   try {
//     await apple.save();
//     console.log("Berhasil simpan!");
//   } catch (error) {
//     console.log(error);
//   }
// }

// Call the async function
//saveApple();

const kiwi = new Fruit({
  name: "Kiwi",
  rating: 5,
  review: "Manis",
});

const jeruk = new Fruit({
  name: "Jeruk",
  rating: 7,
  review: "Asam",
});

const pisang = new Fruit({
  name: "Pisang",
  rating: 9,
  review: "Cukup manis",
});

async function saveData() {
  try {
    await Fruit.insertMany([kiwi, jeruk, pisang]);
    mongoose.connection.close();
    console.log("Berhasil simpan!");
  } catch (error) {
    console.log(error);
  }
}

// Call the async function
saveData();
