const asyncHandler = require("express-async-handler");

// @desc    Check server health status
// @route   GET /api/health
// @access  Public
const checkHealth = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Server is up and running!" });
});

module.exports = {
  checkHealth,
};
