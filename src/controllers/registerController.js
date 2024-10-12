const { User } = require("../models/User");
const bcrypt = require("bcrypt");
const resgisterCtrl = (req, res) => {
  //DB insert Code
  // await Adventure.findOne({ country: 'Croatia' }).exec();

  User.findOne({ email: req.body.email })
    .then((user) => {
      if (user === null) {
        const user = new User(req.body);
        user
          .save()
          .then((d) => {
            console.log("User registered successfully", d);
            res.status(200).json({
              message: "User registered successfully",
              name: req.body,
            });
          })
          .catch((err) => {
            console.error("Error registering user", err);
            res.status(500).json({ message: "Error registering user" });
          });
      } else {
        res.status(409).json({ message: "Email already exists" }); // 409 Conflict status code for email already exists. 400 Bad Request for other reasons. 200 OK for successful operation. 500 Internal Server Error for other errors. 201 Created for successful creation. 304 Not Modified for successful response with no content. 401 Unauthorized for unauthorized access. 403 Forbidden for forbidden access. 404 Not Found for not found resources. 410 Gone for no longer available resources. 429 Too Many Requests for too many requests. 503 Service Unavailable for temporary service issues. 511 Network Authentication Required for authentication required.
        return; // Stop the execution of the function if email already exists.  If the email does not exist, continue with the rest of the code.
      }
    })
    .catch((err) => {
      console.error("Error finding user", err);
      res.status(500).json({ message: "Error finding user" });
    });
};
//   const user = new User(req.body);
//   user
//     .save()
//     .then((d) => {
//       console.log("User registered successfully", d);
//       res
//         .status(200)
//         .json({ message: "User registered successfully", name: req.body });
//     })
//     .catch((err) => {
//       console.error("Error registering user", err);
//       res.status(500).json({ message: "Error registering user" });
//     });
// };

module.exports = {
  resgisterCtrl,
};
