import { ProCard, PageContainer } from "@ant-design/pro-components";
import React from "react";
import { PostCard } from "../../components";

const Likes = () => {
  return (
    <PageContainer>
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

export default Likes;
