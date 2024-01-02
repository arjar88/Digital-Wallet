const express = require("express");
const bodyParser = require("body-parser");
const connectToDatabase = require("./config/database");
const notifications = require("./routes/notifications");

const app = express();
const PORT = process.env.PORT || 3002;

app.use(bodyParser.json());

connectToDatabase();

app.use("/api/notifications", notifications);

app.listen(PORT, () => {
  console.log(`Notification service started on port ${PORT}`);
});
