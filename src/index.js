const express = require("express");
const app = express();
const env = require("dotenv");
env.config();

const Port = process.env.PORT || 3000;
app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});
