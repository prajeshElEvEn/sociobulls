import React from "react";
import { Outlet } from "react-router";
import { ProLayout } from "@ant-design/pro-layout";

const RootLayout = () => {
  return (
    <div>
      <ProLayout>
        <Outlet />
      </ProLayout>
    </div>
  );
};

export default RootLayout;
