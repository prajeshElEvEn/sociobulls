import React from "react";

import {
  FileImageOutlined,
  HeartOutlined,
  HomeOutlined,
  SaveOutlined,
  UserOutlined,
} from "@ant-design/icons";
const menuItems = {
  route: {
    path: "/",
    routes: [
      {
        path: "/",
        name: "Feed",
        icon: <HomeOutlined />,
      },
      {
        path: "/likes",
        name: "My Likes",
        icon: <HeartOutlined />,
      },
      {
        path: "/bookmarks",
        name: "My Bookmarks",
        icon: <SaveOutlined />,
      },
      {
        path: "/posts",
        name: "My Posts",
        icon: <FileImageOutlined />,
      },
      {
        path: "/profile",
        name: "My Profile",
        icon: <UserOutlined />,
      },
    ],
  },
  location: {
    pathname: "/",
  },
};

export default menuItems;
