const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const partnersSchema = new Schema({
    title: { type: String, required: true },
    link: { type: String, required: true },
    imgUrl: { type: String, required: true }
});

const Partners = mongoose.model("partners", partnersSchema);

module.exports = Partners;