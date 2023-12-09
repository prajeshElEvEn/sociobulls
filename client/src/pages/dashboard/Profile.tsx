import { PageContainer, ProCard } from "@ant-design/pro-components";
import { Button } from "antd";
import React, { useEffect } from "react";
import { Loading, ProfileCard, ProfileForm } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../features/users/userSlice";
import { logout } from "../../features/auth/authSlice";

const Profile: React.FC = () => {
  const dispatch = useDispatch();
  const { status, id } = useSelector((state) => state.auth);
  const { user, userIsLoading } = useSelector((state) => state.user);

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
        <ProfileForm key="profile-form" />,
        <Button key="logout" type="primary" onClick={handleSubmit}>
          Logout
        </Button>,
      ]}
    >
      <ProCard
        gutter={[16, 16]}
        colSpan={{ xs: 24, sm: 12, md: 12, lg: 12, xl: 12 }}
        wrap
      >
        {userIsLoading ? <Loading /> : <ProfileCard user={user} />}
      </ProCard>
    </PageContainer>
  );
};

export default Profile;
