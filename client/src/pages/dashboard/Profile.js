import { PageContainer, ProCard } from "@ant-design/pro-components";
import { Button, Modal } from "antd";
import React, { useEffect, useState } from "react";
import { ProfileCard, ProfileForm } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../features/users/userSlice";
import { logout } from "../../features/auth/authSlice";

const Profile = () => {
  const dispatch = useDispatch();
  const { status, id } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    if (status) {
      dispatch(getUser({ id: id }));
    }
  }, [dispatch, id, status]);

  const handleSubmit = () => {
    dispatch(logout());
  };

  return (
    <PageContainer
      extra={[
        <ProfileForm />,
        <Button type="primary" onClick={handleSubmit}>
          Logout
        </Button>,
      ]}
    >
      <ProCard
        gutter={[16, 16]}
        colSpan={{ xs: 24, sm: 12, md: 12, lg: 12, xl: 12 }}
        wrap
      >
        <ProfileCard user={user} />
      </ProCard>
    </PageContainer>
  );
};

export default Profile;
