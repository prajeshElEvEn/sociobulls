import React from "react";
import { ProCard } from "@ant-design/pro-components";
import { PageContainer } from "@ant-design/pro-layout";
import { Button } from "antd";
import { PostCard } from "../../components";
const Feed = () => {
  return (
    <PageContainer extra={[<Button type="primary">Create Post</Button>]}>
      <ProCard
        gutter={[16, 16]}
        colSpan={{ xs: 24, sm: 12, md: 12, lg: 12, xl: 12 }}
        wrap
      >
        <PostCard user={"user"} />
      </ProCard>
    </PageContainer>
  );
};

export default Feed;
