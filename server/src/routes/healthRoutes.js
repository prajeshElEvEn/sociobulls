const express = require("express");
const { checkHealth } = require("../controllers/healthControllers");

const router = express.Router();

router.route("/").get(checkHealth);

module.exports = router;
