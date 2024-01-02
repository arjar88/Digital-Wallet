const express = require("express");
const bodyParser = require("body-parser");
const connectToDatabase = require("./config/database");
const payments = require("./routes/payments");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

// Connect to MongoDB
connectToDatabase();

// Routes
app.use("/api/payments", payments);

// Start the server
app.listen(PORT, () => {
  console.log(`Payment service started on port ${PORT}`);
});
