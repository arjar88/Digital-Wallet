const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  sender: { type: String, required: true },
  recipient: { type: String, required: true },
  amount: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
  status: { type: String, enum: ["success", "failed"], default: "success" },
});

const Payment = mongoose.model("Payment", paymentSchema);

module.exports = Payment;
