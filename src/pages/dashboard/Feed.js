import ProCard from "@ant-design/pro-card";
import { PageContainer } from "@ant-design/pro-layout";
import { Button } from "antd";
import React from "react";

const Feed = () => {
  return (
    <PageContainer extra={[<Button type="primary">Create Post</Button>]}>
      <ProCard>text</ProCard>
    </PageContainer>
  );
};

export default Feed;
