const router = require("express").Router();
const bookController = require("./book.controller");
const authController = require("./auth.controller");
const kitchenController = require("./kitchen.controller");
const customerController = require("./customer.controller");
const portfolioController = require("./portfolio_component.controller");
const userController = require("./user.controller");
// const uploadController = require("./upload.routes");
const readTheDatabase = require("./upload.controller")

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

/////////////
// upload image route
/////////////

/////////////
// upload file route to target image folder in the root level, update array in database
/////////////
router.use("/cms/uploadfile/hash43b4h234bhj", readTheDatabase );

// router.use("/cms/upload", uploadController);

module.exports = router;

