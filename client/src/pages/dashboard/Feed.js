import React, { useEffect } from "react";
import { ProCard, PageContainer } from "@ant-design/pro-components";
import { PostCard, PostForm } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../features/post/postSlice";

const Feed = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <PageContainer extra={[<PostForm />]}>
      <ProCard
        gutter={[16, 16]}
        colSpan={{ xs: 24, sm: 12, md: 12, lg: 12, xl: 12 }}
        wrap
      >
        {posts.map((post) => (
          <PostCard post={post} />
        ))}
      </ProCard>
    </PageContainer>
  );
};

export default Feed;
