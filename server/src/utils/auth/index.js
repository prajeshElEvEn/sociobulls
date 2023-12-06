const jwt = require("jsonwebtoken");
const loadEnv = require("../env");
loadEnv();

const { SECRET, EXPIRY } = process.env;

const generateToken = (id) => {
  return jwt.sign({ id }, SECRET, {
    expiresIn: EXPIRY,
  });
};

module.exports = {
  generateToken,
};
