export type Author = {
  userId: string;
};

export type Like = {
  userId: string;
};

export type Bookmark = {
  userId: string;
};

export type Comment = {
  title: string;
  author: Author;
  createdAt: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  avatar: string;
  updatedAt: string;
  createdAt: string;
};

export type Post = {
  id: string;
  title: string;
  likes: Like[];
  bookmarks: Bookmark[];
  comments: Comment[];
  author: Author;
  updatedAt: string;
  createdAt: string;
};
