const express = require("express");
const router = express.Router();
const userController = require("../controllers/users-controller");
const validateLogin = require("../middlewares/authenticate");
const validateUser = require("../middlewares/active");
const validateType = require("../middlewares/type");

router.post("/account", [validateLogin, validateUser], userController.view);
router.get("/not-accepted", [validateLogin, validateUser, validateType.checkAdmin], userController.getByNotAccepted);
router.patch("/accept/:id", [validateLogin, validateUser, validateType.checkAdmin], userController.accept);
router.patch("/setAdmin/:id", [validateLogin, validateUser, validateType.checkAdmin], userController.setAdmin);
router.patch("/removeAdmin/:id", [validateLogin, validateUser, validateType.checkAdmin], userController.removeAdmin);
router.patch("/delete/:id", [validateLogin, validateUser, validateType.checkAdmin], userController.delete);

module.exports = router;