const { Schema, model, Types } = require("mongoose");

const user = new Schema({
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  tables: {type: Array, required: true}
});

module.exports = model("User", user);
