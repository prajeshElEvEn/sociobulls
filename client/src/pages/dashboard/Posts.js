import { ProCard, PageContainer } from "@ant-design/pro-components";
import React, { useEffect } from "react";
import { PostTable } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { getUserPosts } from "../../features/post/postSlice";

const Posts = () => {
  return (
    <PageContainer>
      <ProCard
        gutter={[16, 16]}
        colSpan={{ xs: 24, sm: 12, md: 12, lg: 12, xl: 12 }}
        wrap
      >
        <PostTable />
      </ProCard>
    </PageContainer>
  );
};

export default Posts;
