const express = require("express");
const { checkAuth } = require("../middlewares/authMiddlewares");
const {
  getPosts,
  createPost,
  getUserPosts,
  updatePost,
  deletePost,
} = require("../controllers/postControllers");
const router = express.Router();

router.route("/").get(checkAuth, getPosts).post(checkAuth, createPost);

router.route("/user/:userId").get(checkAuth, getUserPosts);

router.route("/:id").put(checkAuth, updatePost).delete(checkAuth, deletePost);

module.exports = router;
