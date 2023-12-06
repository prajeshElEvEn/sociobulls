import { PageContainer, ProCard } from "@ant-design/pro-components";
import { Button, Modal } from "antd";
import React, { useState } from "react";
import { ProfileCard, ProfileForm } from "../../components";

const Profile = () => {
  return (
    <PageContainer
      extra={[<ProfileForm />, <Button type="primary">Logout</Button>]}
    >
      <ProCard
        gutter={[16, 16]}
        colSpan={{ xs: 24, sm: 12, md: 12, lg: 12, xl: 12 }}
        wrap
      >
        <ProfileCard />
      </ProCard>
    </PageContainer>
  );
};

export default Profile;
