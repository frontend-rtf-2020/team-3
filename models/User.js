const { Schema, model, Types } = require("mongoose");

const user = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  tables: { type: Array, required: true },
  name: { type: String },
  hash: { type: String },
});

module.exports = model("User", user);
