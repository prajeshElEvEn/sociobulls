const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

// @desc    Gets user profile
// @route   GET /api/users/profile/:id
// @access  Private
const getUser = asyncHandler(async (req, res) => {
  const userId = req.params.id;
  const user = await User.findById(userId).select("-password");

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  res.status(200).json(user);
});

// @desc    Updates user profile
// @route   PUT /api/users/profile/:id/update
// @access  Private
const updateUser = asyncHandler(async (req, res) => {
  const userId = req.params.id;
  const { name } = req.body;
  const user = await User.findById(userId);

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  if (name) {
    user.name = name;
  }

  if (req.file) {
    user.avatar = req.file.filename;
  }

  const updatedUser = await user.save();
  const { password, ...responseUser } = updatedUser.toObject();

  res.status(200).json(responseUser);
});

// @desc    Deletes user profile
// @route   DELETE /api/users/profile/:id/delete
// @access  Private
const deleteUser = asyncHandler(async (req, res) => {
  const userId = req.params.id;
  const user = await User.findById(userId);

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  await user.deleteOne();

  res.status(200).json({ id: user._id, message: "User deleted" });
});

module.exports = {
  getUser,
  updateUser,
  deleteUser,
};
