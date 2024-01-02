const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/", userController.getAllUsers);
router.get("/:userName", userController.getUserByName);
router.post("/create", userController.createUser);
router.put("/update", userController.updateBalance);

module.exports = router;
