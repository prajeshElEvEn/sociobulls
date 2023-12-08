import React, { useEffect } from "react";
import { ProCard, PageContainer } from "@ant-design/pro-components";
import { Loading, PostCard, PostForm } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../features/post/postSlice";
import { Empty } from "antd";

const Feed = () => {
  const dispatch = useDispatch();
  const { posts, postIsLoading } = useSelector((state) => state.post);

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
        {postIsLoading ? (
          <Loading />
        ) : posts.length > 0 ? (
          posts.map((post) => <PostCard post={post} />)
        ) : (
          <Empty />
        )}
      </ProCard>
    </PageContainer>
  );
};

export default Feed;
