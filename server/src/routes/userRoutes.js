const express = require("express");
const router = express.Router();
const { checkAuth } = require("../middlewares/authMiddlewares");
const {
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/userControllers");
const { uploadAvatar } = require("../utils");

router.route("/profile/:id").get(checkAuth, getUser);
router
  .route("/profile/:id/update")
  .put(checkAuth, uploadAvatar.single("avatar"), updateUser);
router.route("/profile/:id/delete").delete(checkAuth, deleteUser);

module.exports = router;
