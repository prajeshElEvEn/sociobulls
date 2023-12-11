"use client";

import { Button, Typography } from "antd";
import { ArrowRightOutlined } from "./ui/icons";

const { Title } = Typography;

export default function Home() {
  return (
    <main>
      <Title level={2}>SocioBulls</Title>
      <Title level={5}>Social Media for AlgoBulls</Title>
      <Button href="/auth" type="primary">
        Sign In <ArrowRightOutlined />
      </Button>
    </main>
  );
}
