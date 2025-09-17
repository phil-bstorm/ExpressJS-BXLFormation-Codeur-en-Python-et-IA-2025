const usersRoutes = require("./users.routes.js");
const carsRoutes = require("./cars.routes.js");
const brandsRoutes = require("./brands.routes.js");
const router = require("express").Router();

//On enregistre tous les domaines de l'application
router.use("/users", usersRoutes);
router.use("/cars", carsRoutes);
router.use("/brands", brandsRoutes);

module.exports = router;
