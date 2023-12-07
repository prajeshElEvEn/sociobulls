import React, { useEffect } from "react";
import { PageContainer, ProCard } from "@ant-design/pro-components";
import { PostCard } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { getUserBookmarkedPosts } from "../../features/post/postSlice";

const Bookmarks = () => {
  const dispatch = useDispatch();
  const { id } = useSelector((state) => state.auth);
  const { posts } = useSelector((state) => state.post);

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
        {posts.map((post) => (
          <PostCard key={post?._id} post={post} />
        ))}
      </ProCard>
    </PageContainer>
  );
};

export default Bookmarks;
