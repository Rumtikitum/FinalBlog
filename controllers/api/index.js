const router = require("express").Router();
const userRoutes = require("./user-routes");
const articleRoutes = require("./article-routes")


//Url...
router.use("/users", userRoutes);
router.use("/articles", articleRoutes)


module.exports = router;