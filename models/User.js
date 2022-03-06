const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  email: { type: String, required: true },
  password: String,
});

const User = mongoose.model("user", userSchema);

module.exports = User;