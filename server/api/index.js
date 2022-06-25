const express = require("express");
const listAApi = require("./list")
const registerApi = require("./register");
const loginApi = require("./login");
const paymentApi = require("./payment");
const historyApi = require("./history");

const router = express.Router();
router.use(listAApi)
router.use(registerApi);
router.use(loginApi);
router.use(paymentApi);
router.use(historyApi);

module.exports = router;
