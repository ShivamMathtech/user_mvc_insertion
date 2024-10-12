const express = require("express");
const app = express();
const env = require("dotenv");
app.use(express.json());
const resigterRoute = require("./routes/register");
env.config();

app.use("/api", resigterRoute);
const Port = process.env.PORT || 3000;
app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});
