const { mongoose } = require("../config/db");
let userschema = {
  name: String,
  email: String,
  password_hash: String,
  role: String, // default status is active if not provided.
};
const User = mongoose.model("User", userschema);

exports.User = User;
