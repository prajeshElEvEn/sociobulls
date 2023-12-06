import { ProCard } from "@ant-design/pro-components";
import { Avatar, Card } from "antd";
import React from "react";
const { Meta } = Card;

const ProfileCard = () => {
  return (
    <ProCard colSpan={{ xs: 24, sm: 12, md: 12, lg: 12, xl: 12 }}>
      <Card>
        <Meta
          avatar={
            <Avatar
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
            />
          }
          title="John Doe"
          description="email"
        />
      </Card>
    </ProCard>
  );
};

export default ProfileCard;
