import React from "react";
import {
  FileImageOutlined,
  HeartOutlined,
  HomeOutlined,
  SaveOutlined,
  UserOutlined,
} from "../../assets/icons";

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
