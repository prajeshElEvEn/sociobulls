import { PageContainer, ProCard } from "@ant-design/pro-components";
import { Button, Modal } from "antd";
import React, { useState } from "react";
import { ProfileCard, ProfileForm } from "../../components";

const Profile = () => {
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
        <Button onClick={showModal}>Edit Profile</Button>,
        <Button type="primary">Logout</Button>,
      ]}
    >
      <ProCard
        gutter={[16, 16]}
        colSpan={{ xs: 24, sm: 12, md: 12, lg: 12, xl: 12 }}
        wrap
      >
        <ProfileCard />
      </ProCard>
      <Modal
        title="Edit Profile"
        open={isModalOpen}
        onCancel={handleCancel}
        okButtonProps={{ style: { display: "none" } }}
        cancelButtonProps={{ style: { display: "none" } }}
      >
        <ProfileForm handleCancel={handleCancel} />
      </Modal>
    </PageContainer>
  );
};

export default Profile;
