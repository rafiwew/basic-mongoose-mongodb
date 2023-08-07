const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/db-mongoose");

const userSchema = new Schema({
  name: String,
  age: Number,
  country: String,
});
const User = mongoose.model("User", userSchema);
const user = await User.create({
  name: "Hafez",
  age: 25,
  country: "Egypt",
});

// returns an empty object, no changes happened yet
user.getChanges(); // { }

user.country = undefined;
user.age = 26;

user.getChanges(); // { $set: { age: 26 }, { $unset: { country: 1 } } }

await user.save();

user.getChanges(); // { }
