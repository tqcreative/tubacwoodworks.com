const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const homepageModel = new Schema({
    // key : { h2: "value", p: "value", url: "value"}
    // the <Quote /> component takes 3 paramiters -The h2 is the person who is quoting, the p is the quote itself and the url is the default replacement background.
    // the key is the quote's tag id example: <Quote id={homepage_quote} />
    // in the database it would look like this: homepage_quote: {h2: "Matthew Carpenter", p: "I can not get over how stunning my kitech looks!", url: "tubacwoodworks.com/images/quote_2.jpg"}
    // the quote is axios called and added into the component on render.
    quoteTop: { type: Object, required: true },
    quoteBottom: { type: Object, required: true},
    checkerBox: { type: Object, required: true },
    partners: { type: Object, required: true },
    hero: { type: Object, required: true }
});

const Homepage = mongoose.model("homepage", homepageModel);

module.exports = Homepage;