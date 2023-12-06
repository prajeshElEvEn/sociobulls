const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema(
  {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const bookmarkSchema = new mongoose.Schema(
  {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const commentSchema = new mongoose.Schema(
  {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
    },
    avatar: {
      type: String,
    },
    comment: {
      type: String,
    },
  },
  { timestamps: true }
);

const authorSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  name: {
    type: String,
  },
  avatar: {
    type: String,
  },
});

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    likes: [likeSchema],
    bookmarks: [bookmarkSchema],
    comments: [commentSchema],
    author: authorSchema,
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
