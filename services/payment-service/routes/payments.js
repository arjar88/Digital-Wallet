const express = require("express");
const router = express.Router();
const paymentController = require("../controllers/paymentController");

router.post("/transferMoney", paymentController.transferMoney);
router.get(
  "/getAllTransactionsofUser/:userName",
  paymentController.getAllTransactionsofUser
);

module.exports = router;
