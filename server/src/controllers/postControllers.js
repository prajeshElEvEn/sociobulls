const asyncHandler = require("express-async-handler");
const Post = require("../models/postModel");

// @desc    Gets all posts
// @route   GET /api/posts
// @access  Private
const getPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find();
  res.status(200).json(posts);
});

// @desc    Gets user posts
// @route   GET /api/posts/:userId
// @access  Private
const getUserPosts = asyncHandler(async (req, res) => {
  const userId = req.params.userId;
  const posts = await Post.find({ author: userId });
  res.status(200).json(posts);
});

// @desc    Creates a post
// @route   POST /api/posts/
// @access  Private
const createPost = asyncHandler(async (req, res) => {
  const author = req.user.id;
  const { title } = req.body;

  if (!title) {
    res.status(404);
    throw new Error("please fill in all the fields");
  }

  if (!author) {
    res.status(404);
    throw new Error("author not found");
  }

  const post = new Post({
    title,
    author,
  });

  await post.save();

  return res.status(201).json(post);
});

// @desc    Updates a post
// @route   PUT /api/posts/
// @access  Private
const updatePost = asyncHandler(async (req, res) => {
  const postId = req.params.id;
  const { title } = req.body;

  const post = await Post.findById(postId);

  if (!post) {
    res.status(404);
    throw new Error("post not found");
  }

  if (title) {
    post.title = title;
  }

  const updatedPost = await post.save();

  res.status(200).json(updatedPost);
});

// @desc    Deletes a post
// @route   DELETE /api/posts/
// @access  Private
const deletePost = asyncHandler(async (req, res) => {
  const postId = req.params.id;

  const post = await Post.findById(postId);

  if (!post) {
    res.status(404);
    throw new Error("post not found");
  }

  await post.deleteOne();

  res.status(204).json({ id: post._id, message: "post deleted" });
});

module.exports = {
  getPosts,
  getUserPosts,
  createPost,
  updatePost,
  deletePost,
};
