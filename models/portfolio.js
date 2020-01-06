const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const portfolioSchema = new Schema({
    title: { type: String, required: true },
    link: { type: String, required: true },
    imgUrl: { type: String, required: true }
});

const Portfolio = mongoose.model("portfolio", portfolioSchema);

module.exports = Portfolio;