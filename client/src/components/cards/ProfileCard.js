import { ProCard } from "@ant-design/pro-components";
import { Avatar, Card } from "antd";
import React from "react";
const { Meta } = Card;

const ProfileCard = ({ user }) => {
  return (
    <ProCard colSpan={{ xs: 24, sm: 12, md: 12, lg: 12, xl: 12 }}>
      <Card>
        <Meta
          avatar={
            <Avatar
              src={
                user?.avatar
                  ? `${process.env.REACT_APP_AVATAR_URL}${user?.avatar}`
                  : null
              }
              style={{ backgroundColor: "#fde3cf", color: "#f56a00" }}
              size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
              alt={user?.name}
            >
              {user?.name.charAt(0)}
            </Avatar>
          }
          title={user?.name}
          description={user?.email}
        />
      </Card>
    </ProCard>
  );
};

export default ProfileCard;
