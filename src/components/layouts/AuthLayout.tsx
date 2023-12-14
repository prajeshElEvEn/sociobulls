import { PageContainer } from "@ant-design/pro-components";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <PageContainer>
      <Outlet />
    </PageContainer>
  );
}
