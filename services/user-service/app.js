const express = require("express");
const connectToDatabase = require("./config/database");
const userRoutes = require("./routes/users");

const app = express();
const PORT = process.env.PORT || 3000;

connectToDatabase();

app.use(express.json());

app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`User microservice started on port ${PORT}`);
});
