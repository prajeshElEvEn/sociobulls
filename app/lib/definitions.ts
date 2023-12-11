export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  avatar: string;
  updatedAt: string;
};

export type Post = {
  id: string;
  title: string;
  likes: {
    id: string;
  }[];
  bookmarks: {
    id: string;
  }[];
  comments: {
    id: string;
    title: string;
    name: string;
    avatar: string;
  }[];
  author: {
    id: string;
    name: string;
    avatar: string;
  };
  createdAt: string;
  updatedAt: string;
};
