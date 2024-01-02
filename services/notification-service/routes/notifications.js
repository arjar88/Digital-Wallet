const express = require("express");
const router = express.Router();
const notificationController = require("../controllers/notificationController");

router.post("/sendNotification", notificationController.sendNotification);

module.exports = router;
