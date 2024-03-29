import React, { useEffect } from "react";
import { PageContainer, ProCard } from "@ant-design/pro-components";
import { Loading, PostCard } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { getUserBookmarkedPosts } from "../../features/post/postSlice";
import { Empty } from "antd";

const Bookmarks = () => {
  const dispatch = useDispatch();
  const { id } = useSelector((state) => state.auth);
  const { posts, postIsLoading } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getUserBookmarkedPosts({ id: id }));
  }, [dispatch, id]);
  return (
    <PageContainer>
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

export default Bookmarks;
