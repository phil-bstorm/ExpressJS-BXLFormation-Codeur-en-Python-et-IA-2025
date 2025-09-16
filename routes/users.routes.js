const { Router } = require("express");
const userController = require("../controllers/user.controller");
const router = Router();

router.param("id", (req, res, next, value) => {
  if (!/^[0-9]+$/.test(value))
    return res.status(400).json({ error: "param id must be numeric" });
  next();
});

router.get("/", userController.findAll);
router.get("/:id", userController.findOne);
router.post("/", userController.create);
router.put("/:id", userController.update);
router.delete("/:id", userController.remove);

module.exports = router;
