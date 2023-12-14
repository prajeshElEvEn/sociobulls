import { ProCard, PageContainer } from "@ant-design/pro-components";
import { PostCard, PostForm } from "../../components";

export default function Feed() {
  const post = {
    id: "",
    title: "",
    likes: [],
    bookmarks: [],
    comments: [],
    author: {
      userId: "",
    },
    updatedAt: "",
    createdAt: "",
  };
  const user = {};

  return (
    <PageContainer extra={[<PostForm key="postForm" />]}>
      <ProCard
        gutter={[16, 16]}
        colSpan={{ xs: 24, sm: 12, md: 12, lg: 12, xl: 12 }}
        wrap
      >
        <PostCard user={user} post={post} />
      </ProCard>
    </PageContainer>
  );
}
