const mongoose = require("mongoose");
const db = require("../../models");

// This file empties the collections

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/projectthree"
);

//////////
// 6 Portfolio links
//////////
const portfolioSeed = [
  {
      "title" : "Kitchen & Bath",
      "link" : "localhost3000/kitchenbathvanity",
      "imgUrl" : "https://lda.lowes.com/is/image/Lowes/DP18-143027_1-1_dt_KitchenCountertops_2col_hero?scl=1",
      "date" : new Date(Date.now())
  },
  {
      "title" : "Furniture",
      "link" : "localhost3000/furniture",
      "imgUrl" : "https://lda.lowes.com/is/image/Lowes/DP18-143027_1-1_dt_KitchenCountertops_2col_hero?scl=1",
      "date" : new Date(Date.now())
  },
  {
      "title" : "Commercial",
      "link" : "localhost3000/commercial",
      "imgUrl" : "https://lda.lowes.com/is/image/Lowes/DP18-143027_1-1_dt_KitchenCountertops_2col_hero?scl=1",
      "date" : new Date(Date.now())
  },
  {
      "title" : "Pro Tips",
      "link" : "localhost3000/protips",
      "imgUrl" : "https://lda.lowes.com/is/image/Lowes/DP18-143027_1-1_dt_KitchenCountertops_2col_hero?scl=1",
      "date" : new Date(Date.now())
  },
  {
      "title" : "Gallery",
      "link" : "localhost3000/gallery",
      "imgUrl" : "https://lda.lowes.com/is/image/Lowes/DP18-143027_1-1_dt_KitchenCountertops_2col_hero?scl=1",
      "date" : new Date(Date.now())
  },
  {
      "title" : "Get A Quote!",
      "link" : "localhost3000/signup",
      "imgUrl" : "https://lda.lowes.com/is/image/Lowes/DP18-143027_1-1_dt_KitchenCountertops_2col_hero?scl=1",
      "date" : new Date(Date.now())
  }
];

//////////
// 4 Partners
//////////
const partnerSeed = [
  {
    "title" : "Woodworks",
    "link" : "www.google.com",
    "imgUrl" : "static/media/partnerOne.jpg",
    "date" : new Date(Date.now())
  },
  {
    "title" : "Tile",
    "link" : "www.google.com",
    "imgUrl" : "static/media/partnerTwo.jpg",
    "date" : new Date(Date.now())
  },
  {
    "title" : "Dry Wall",
    "link" : "www.google.com",
    "imgUrl" : "static/media/partnerThree.jpg",
    "date" : new Date(Date.now())
  },
  {
    "title" : "Doors & Windows",
    "link" : "www.google.com",
    "imgUrl" : "static/media/partnerFour.jpg",
    "date" : new Date(Date.now())
  }
]

////////////
// delete and seed database.
////////////

db.Portfolio
.remove({})
.then(() => db.Portfolio.collection.insertMany(portfolioSeed))
.then(data => {
  console.log(data.result.n + " portfolio content seeded.");

  db.Partners.remove({})
  .then(() => db.Partners.collection.insertMany(partnerSeed))
  .then(data => {
    console.log(data.result.n + " partners seeded.");
    process.exit(0);
  })


})
.catch(err => {
  console.error(err);
  process.exit(1);
});