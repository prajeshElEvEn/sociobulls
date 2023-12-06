const mongoose = require("mongoose");

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
    author: authorSchema,
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
