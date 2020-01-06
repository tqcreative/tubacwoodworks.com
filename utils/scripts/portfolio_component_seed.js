const mongoose = require("mongoose");
const db = require("../../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/projectthree"
);

const portfolioSeed = [
    {
        title: "Kitchen & Bath",
        link: "localhost3000/kitchenbathvanity",
        imgUrl: "static/media/kitchen_portfolio.jpg"
    },
    {
        title: "Furniture",
        link: "localhost3000/furniture",
        imgUrl: "static/media/furniture_portfolio.jpg"
    },
    {
        title: "Commercial",
        link: "localhost3000/commercial",
        imgUrl: "static/media/commercial_portfolio.jpg"
    },
    {
        title: "Pro Tips",
        link: "localhost3000/protips",
        imgUrl: "static/media/protips_portfolio.jpg"
    },
    {
        title: "Gallery",
        link: "localhost3000/gallery",
        imgUrl: "static/media/gallery_portfolio.jpg"
    },
    {
        title: "Get A Quote!",
        link: "localhost3000/signup",
        imgUrl: "static/media/quote_portfolio.jpg"
    },
];

db.Portfolio
  .remove({})
  .then(() => db.Portfolio.collection.insertMany(portfolioSeed))
  .then(data => {
    console.log(data.result.n + " portfolio component seeds planted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
});