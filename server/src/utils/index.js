const utils = module.exports;
const {
  generateToken,
  generateResetToken,
  sendResetEmail,
  validateResetToken,
} = require("./auth");
const { uploadAvatar } = require("./multer");

utils.loadEnv = require("./env");
utils.db = require("./db");
utils.generateToken = generateToken;
utils.generateResetToken = generateResetToken;
utils.sendResetEmail = sendResetEmail;
utils.validateResetToken = validateResetToken;
utils.uploadAvatar = uploadAvatar;
