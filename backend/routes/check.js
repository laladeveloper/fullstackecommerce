const express = require("express");
const { check } = require("../controllers/Check");
const router = express.Router();

router.route("/").get(check);


module.exports = router;
 