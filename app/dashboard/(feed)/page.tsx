'use client'
import { PageContainer, ProCard } from "@ant-design/pro-components";
import PostCard from "@/app/ui/cards/post-card";

export default async function Page() {
  return (
    <PageContainer
    // extra={[<PostForm key="postForm" />]}
    >
      <ProCard
        gutter={[16, 16]}
        colSpan={{ xs: 24, sm: 12, md: 12, lg: 12, xl: 12 }}
        wrap
      >
        <PostCard />
      </ProCard>
    </PageContainer>
  );
}
