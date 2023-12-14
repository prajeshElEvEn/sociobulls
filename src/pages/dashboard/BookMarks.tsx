import { PageContainer, ProCard } from "@ant-design/pro-components";
import { PostCard } from "../../components";

export default function Bookmarks() {
  const post = {};
  return (
    <PageContainer>
      <ProCard
        gutter={[16, 16]}
        colSpan={{ xs: 24, sm: 12, md: 12, lg: 12, xl: 12 }}
        wrap
      >
        <PostCard post={post} />
      </ProCard>
    </PageContainer>
  );
}
