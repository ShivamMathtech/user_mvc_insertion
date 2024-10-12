const express = require("express");

const { resgisterCtrl } = require("../controllers/registerController");

const resigterRoute = express.Router();

resigterRoute.post("/register", resgisterCtrl);

module.exports = resigterRoute;
