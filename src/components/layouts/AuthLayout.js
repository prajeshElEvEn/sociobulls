import React from "react";
import { PageContainer } from "@ant-design/pro-components";
import { Outlet } from "react-router";
import { Avatar, Flex, Typography } from "antd";
const { Title } = Typography;

const AuthLayout = () => {
  return (
    <PageContainer
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Flex
        align="center"
        style={{
          marginBottom: 24,
        }}
      >
        <Avatar
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          size={{ xs: 40, sm: 40, md: 40, lg: 64, xl: 80, xxl: 100 }}
        />
        <Title level={3}>SocioBulls</Title>
      </Flex>
      <Outlet />
    </PageContainer>
  );
};

export default AuthLayout;
