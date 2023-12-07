const asyncHandler = require("express-async-handler");
const Post = require("../models/postModel");
const User = require("../models/userModel");

// @desc    Gets all posts
// @route   GET /api/posts
// @access  Private
const getPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find();
  res.status(200).json(posts);
});

// @desc    Gets user's posts
// @route   GET /api/posts/user/:userId
// @access  Private
const getUserPosts = asyncHandler(async (req, res) => {
  const userId = req.params.userId;
  const posts = await Post.find({ "author.id": userId });
  res.status(200).json(posts);
});

// @desc    Gets user's liked posts
// @route   GET /api/posts/user/:userId/liked
// @access  Private
const getLikedPosts = asyncHandler(async (req, res) => {
  const userId = req.params.userId;
  const posts = await Post.find({ "likes.id": userId });
  res.status(200).json(posts);
});

// @desc    Gets user's bookmarked posts
// @route   GET /api/posts/user/:userId/bookmarked
// @access  Private
const getBookmarkedPosts = asyncHandler(async (req, res) => {
  const userId = req.params.userId;
  const posts = await Post.find({ "bookmarks.id": userId });
  res.status(200).json(posts);
});

// @desc    Creates a post
// @route   POST /api/posts/
// @access  Private
const createPost = asyncHandler(async (req, res) => {
  const userId = req.user.id;
  const { title } = req.body;

  const author = await User.findById(userId).select("-password");

  if (!title) {
    res.status(404);
    throw new Error("Please fill in all the fields");
  }

  if (!author) {
    res.status(404);
    throw new Error("Author not found");
  }

  const post = new Post({
    title,
    "author.id": author.id,
    "author.name": author.name,
    "author.avatar": author.avatar,
  });

  await post.save();

  return res.status(201).json(post);
});

// @desc    Updates a post
// @route   PUT /api/posts/:id
// @access  Private
const updatePost = asyncHandler(async (req, res) => {
  const postId = req.params.id;
  const { title, like, bookmark, comment } = req.body;

  const post = await Post.findById(postId);

  if (!post) {
    res.status(404);
    throw new Error("Post not found");
  }

  if (title) {
    post.title = title;
  }

  if (like) {
    const { id } = like;
    const existingLike = post.likes.find(
      (l) => l.id.toString() === id.toString()
    );

    if (existingLike) {
      post.likes = post.likes.filter((l) => l.id.toString() !== id.toString());
    } else {
      post.likes.push(like);
    }
  }

  if (bookmark) {
    const { id } = bookmark;
    const existingBookmark = post.bookmarks.find(
      (b) => b.id.toString() === id.toString()
    );

    if (existingBookmark) {
      post.bookmarks = post.bookmarks.filter(
        (b) => b.id.toString() !== id.toString()
      );
    } else {
      post.bookmarks.push(bookmark);
    }
  }

  if (comment) {
    const { id } = comment;
    const existingCommentIndex = post.comments.findIndex(
      (comment) => comment.id.toString() === id
    );

    if (existingCommentIndex !== -1) {
      post.comments[existingCommentIndex] = comment;
    } else {
      post.comments.push(comment);
    }
  }

  const updatedPost = await post.save();

  res.status(200).json(updatedPost);
});

// @desc    Deletes a post
// @route   DELETE /api/posts/:id
// @access  Private
const deletePost = asyncHandler(async (req, res) => {
  const postId = req.params.id;

  const post = await Post.findById(postId);

  if (!post) {
    res.status(404);
    throw new Error("post not found");
  }

  await post.deleteOne();

  res.status(200).json({ id: post._id, message: "post deleted" });
});

module.exports = {
  getPosts,
  getUserPosts,
  getLikedPosts,
  getBookmarkedPosts,
  createPost,
  updatePost,
  deletePost,
};
