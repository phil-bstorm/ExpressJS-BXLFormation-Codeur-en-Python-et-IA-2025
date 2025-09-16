const { Router } = require("express");
const carsController = require("../controllers/cars.controller");

const router = Router();

router.param("id", (req, res, next, value) => {
  if (!/^[0-9]+$/.test(value))
    return res.status(400).json({ error: "param id must be numeric" });
  next();
});

router.get("/", carsController.findAll);
router.get("/:id", carsController.findOne);
router.post("/", carsController.create);
router.put("/:id", carsController.update);
router.delete("/:id", carsController.remove);

module.exports = router;
