const express = require("express");
const studentctrsl = require("../../controllers/admin/studentctrls");
const adminRoute = express.Router();

adminRoute.get("/register", studentctrsl);

module.exports = adminRoute;
