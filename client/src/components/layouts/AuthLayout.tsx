import React from "react";
import { PageContainer } from "@ant-design/pro-components";
import { Outlet } from "react-router-dom";

const AuthLayout: React.FC = () => {
  return (
    <PageContainer>
      <Outlet />
    </PageContainer>
  );
};

export default AuthLayout;
