const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/Payment");
    console.log("Connected to Payment service database");
  } catch (error) {
    console.error("Payment service MongoDB connection error:", error);
  }
};

module.exports = connectToDatabase;
