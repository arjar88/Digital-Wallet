const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/Notification");
    console.log("Connected to Notification microservice database");
  } catch (error) {
    console.error("User microservice MongoDB connection error:", error);
  }
};

module.exports = connectToDatabase;
