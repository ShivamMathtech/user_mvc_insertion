const mongoose = require("mongoose");
require("dotenv").config();
// Connect to MongoDB
mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PSWD}@cluster0.4lh7n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then((d) => {
    console.log("Connecting to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  })
  .finally();

module.exports = mongoose;
