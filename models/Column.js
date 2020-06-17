const { Schema, model, Types } = require("mongoose");

const column = new Schema({
    name: { type: String, required: true },
    tasks: {type: Array, required: true},
});

module.exports = model("Column", column);