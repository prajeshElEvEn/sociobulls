import { PageContainer, ProCard } from "@ant-design/pro-components";
import { Button } from "antd";
import { ProfileCard, ProfileForm } from "../../components";

export default function Profile() {
  const user = {};
  const handleSubmit = () => {};

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
        <ProfileCard user={user} />
      </ProCard>
    </PageContainer>
  );
}
