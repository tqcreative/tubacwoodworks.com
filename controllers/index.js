const router = require("express").Router();
const bookController = require("./book.controller");
const authController = require("./auth.controller");
const kitchenController = require("./kitchen.controller");
const customerController = require("./customer.controller");
const portfolioController = require("./portfolio_component.controller");
const userController = require("./user.controller");

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

module.exports = router;
