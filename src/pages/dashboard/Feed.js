import React from "react";
import ProCard from "@ant-design/pro-card";
import { PageContainer } from "@ant-design/pro-layout";
import { Button } from "antd";
import { CommentLayout, PostCard } from "../../components";
const Feed = () => {
  return (
    <PageContainer extra={[<Button type="primary">Create Post</Button>]}>
      <ProCard
        wrap
        gutter={[{ xs: 8, sm: 8, md: 16, lg: 24, xl: 32 }, 16]}
        style={{ marginBlockStart: 16 }}
      >
        <PostCard user={"user"}></PostCard>
      </ProCard>
    </PageContainer>
  );
};

export default Feed;
