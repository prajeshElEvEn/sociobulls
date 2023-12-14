import { ProCard } from "@ant-design/pro-components";
import { Avatar, Card } from "antd";
import { User } from "../../app/definitions";
const { Meta } = Card;

export default function ProfileCard({ user }: { user: User }) {
  return (
    <ProCard colSpan={{ xs: 24, sm: 12, md: 12, lg: 12, xl: 12 }}>
      <Card>
        <Meta
          avatar={
            <Avatar
              src={user?.avatar}
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
}
