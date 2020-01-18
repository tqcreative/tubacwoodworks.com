const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const imagesSchema = new Schema({
    imageArray: { type: Array, required: true }
});

const Images = mongoose.model("Images", imagesSchema);

module.exports = Images;