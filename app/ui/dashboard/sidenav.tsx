import React from "react";
import {
  FileImageOutlined,
  HeartOutlined,
  HomeOutlined,
  SaveOutlined,
  UserOutlined,
} from "../icons";

interface RouteItem {
  path: string;
  name: string;
  icon: JSX.Element;
}

interface MenuItems {
  route: {
    path: string;
    routes: RouteItem[];
  };
  location: {
    pathname: string;
  };
}

const menuItems: MenuItems = {
  route: {
    path: "/dashboard",
    routes: [
      {
        path: "/dashboard",
        name: "Feed",
        icon: <HomeOutlined />,
      },
      {
        path: "/dashboard/likes",
        name: "My Likes",
        icon: <HeartOutlined />,
      },
      {
        path: "/dashboard/bookmarks",
        name: "My Bookmarks",
        icon: <SaveOutlined />,
      },
      {
        path: "/dashboard/posts",
        name: "My Posts",
        icon: <FileImageOutlined />,
      },
      {
        path: "/dashboard/profile",
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
