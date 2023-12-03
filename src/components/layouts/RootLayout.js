import React, { useState } from "react";
import { Outlet } from "react-router";
import { ProLayout } from "@ant-design/pro-components";
import menuItems from "../menu";
import { Link } from "react-router-dom";

const RootLayout = () => {
  const [pathname, setPathname] = useState("/");

  return (
    <div>
      <ProLayout
        title={"SocioBulls"}
        {...menuItems}
        location={{
          pathname,
        }}
        onMenuHeaderClick={(e) => console.log(e)}
        menuItemRender={(item, dom) => (
          <Link
            to={item.path || "/"}
            onClick={() => {
              setPathname(item.path || "/");
            }}
          >
            {dom}
          </Link>
        )}
      >
        <Outlet />
      </ProLayout>
    </div>
  );
};

export default RootLayout;
