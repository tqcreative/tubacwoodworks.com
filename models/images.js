const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const imagesSchema = new Schema({
    imageArray: { type: Object, required: true },
    bathTable: { type: Object, required: true },
    kitchenTable: { type: Object, required: true},
    furnitureTable: { type: Object, required: true},
    showcase: {type: Object, required: true}
});

const Images = mongoose.model("Images", imagesSchema);

module.exports = Images;