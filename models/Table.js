const { Schema, model, Types } = require("mongoose");

const table = new Schema({
    owner: { type: Types.ObjectId, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    users: {type: [Types.ObjectId], required: true},
    columns: {type: Array, required: true},
    tags: {type: Array, required: true}
});

module.exports = model("Table", table);