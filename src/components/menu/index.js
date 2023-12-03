import React from "react";

import { SmileFilled } from "@ant-design/icons";
const menuItems = {
  route: {
    path: "/",
    routes: [
      {
        path: "/",
        name: "Feed",
        icon: <SmileFilled />,
      },
      {
        path: "/likes",
        name: "My Likes",
        icon: <SmileFilled />,
      },
      {
        path: "/bookmarks",
        name: "My Bookmarks",
        icon: <SmileFilled />,
      },
      {
        path: "/posts",
        name: "My Posts",
        icon: <SmileFilled />,
      },
      {
        path: "/profile",
        name: "My Profile",
        icon: <SmileFilled />,
      },
    ],
  },
  location: {
    pathname: "/",
  },
};

export default menuItems;
