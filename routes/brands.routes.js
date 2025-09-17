const { Router } = require("express");
const brandController = require("../controllers/brand.controller");

const router = Router();

router.param("id", (req, res, next, value) => {
  if (!/^[0-9]+$/.test(value))
    return res.status(400).json({ error: "param id must be numeric" });
  next();
});

router.get("/", brandController.findAll);
router.get("/:id", brandController.findOne);
router.post("/", brandController.create);
router.put("/:id", brandController.update);
router.delete("/:id", brandController.remove);

module.exports = router;
