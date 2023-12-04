import React, { useState } from "react";
import { ProCard, PageContainer } from "@ant-design/pro-components";
import { Button, Modal } from "antd";
import { PostCard, PostForm } from "../../components";
const Feed = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <PageContainer
      extra={[
        <Button type="primary" onClick={showModal}>
          Create Post
        </Button>,
      ]}
    >
      <ProCard
        gutter={[16, 16]}
        colSpan={{ xs: 24, sm: 12, md: 12, lg: 12, xl: 12 }}
        wrap
      >
        <PostCard user={"user"} />
      </ProCard>
      <Modal
        title="Create Post"
        open={isModalOpen}
        onCancel={handleCancel}
        okButtonProps={{ style: { display: "none" } }}
        cancelButtonProps={{ style: { display: "none" } }}
      >
        <PostForm handleCancel={handleCancel} />
      </Modal>
    </PageContainer>
  );
};

export default Feed;
