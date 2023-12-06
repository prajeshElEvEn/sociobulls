import React, { useState } from "react";
import { Outlet } from "react-router";
import menuItems from "../menu";
import { Link } from "react-router-dom";
import { ProLayout } from "@ant-design/pro-components";

const RootLayout = () => {
  const [pathname, setPathname] = useState("/");

  return (
    <div>
      <ProLayout
        title={"SocioBulls"}
        logo="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
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
        menuFooterRender={(props) => {
          if (props?.collapsed) return undefined;
          return (
            <p
              style={{
                textAlign: "center",
                paddingBlockStart: 12,
              }}
            >
              designed by{" "}
              <a href="http://" target="_blank" rel="noopener noreferrer">
                eleven
              </a>
            </p>
          );
        }}
      >
        <Outlet />
      </ProLayout>
    </div>
  );
};

export default RootLayout;
