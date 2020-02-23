const router = require("express").Router();
const bookController = require("./book.controller");
const authController = require("./auth.controller");
const kitchenController = require("./kitchen.controller");
const customerController = require("./customer.controller");
const portfolioController = require("./portfolio_component.controller");
const userController = require("./user.controller");
const readTheDatabase = require("./upload.controller");
const unSubscribe = require("./unsubscribe.controller");
const uploadPhoto = require("./uploadImage.controller");
const deleteImageController = require("./deleteImage.controller");
const homePage = require("./homepage.controller");

////////////
// root API Routes
////////////
router.use("/api/books", bookController);
router.use("/api/customers", customerController);
router.use("/api/users", userController);

////////////
// CMS API Routes
////////////
router.use("/cms/portfolio_component", portfolioController);

////////////
// Auth Routes
////////////
router.use("/auth", authController);

////////////
// Images Routes
////////////
router.use("/cms/kitchenbathvanity", kitchenController);

////////////
// Delete Images using delete button component 
////////////
router.use("/cms/deletebuttonroute", deleteImageController);

/////////////
// unsubscribe toggle
/////////////
router.use("/crm/unsubscribe", unSubscribe);

/////////////
// image uploads
/////////////
router.use("/cms/GD8PQX3UV18999AARONWITHANEY", uploadPhoto);

/////////////
// upload file route to target image folder in the root level, update array in database
/////////////
router.use("/cms/uploadfile/hash43b4h234bhj", readTheDatabase );

/////////////
// home page homepage
/////////////
router.use("/cms/homepage", homePage);

// router.use("/cms/upload", uploadController);

module.exports = router;

