import ProCard from "@ant-design/pro-card";
import { PageContainer } from "@ant-design/pro-layout";
import { Avatar, Button } from "antd";
import React from "react";
import {
  HeartOutlined,
  SaveOutlined,
  UserOutlined,
  CommentOutlined,
  EllipsisOutlined,
} from "../../assets/icons";
import CardOption from "../../components/cards/CardOption";
const Feed = () => {
  return (
    <PageContainer extra={[<Button type="primary">Create Post</Button>]}>
      <ProCard
        wrap
        gutter={[{ xs: 8, sm: 8, md: 16, lg: 24, xl: 32 }, 16]}
        style={{ marginBlockStart: 16 }}
      >
        <ProCard
          bordered
          colSpan={{ xs: 24, sm: 12, md: 12, lg: 12, xl: 12 }}
          actions={[
            <CardOption icon={<HeartOutlined />} count={"20"} />,
            <CardOption icon={<SaveOutlined />} count={"20"} />,
            <CardOption icon={<CommentOutlined />} count={"20"} />,
          ]}
        >
          <div className="card-nav">
            <div className="card-nav-left">
              <Avatar
                style={{ backgroundColor: "#7265e6" }}
                icon={<UserOutlined />}
                size="large"
              />
              <div className="card-nav-info">
                <div className="user-name">John Doe</div>
                <div className="update-time">12.02.2020</div>
              </div>
            </div>
            <CardOption user={true} icon={<EllipsisOutlined />} />
          </div>
          <div className="card-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
            corrupti.
          </div>
        </ProCard>
      </ProCard>
    </PageContainer>
  );
};

export default Feed;
