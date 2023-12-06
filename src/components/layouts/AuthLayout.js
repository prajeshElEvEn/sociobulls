import React from "react";
import { PageContainer } from "@ant-design/pro-components";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <PageContainer>
      <Outlet />
    </PageContainer>
  );
};

export default AuthLayout;
