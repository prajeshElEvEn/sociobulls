import React, { useEffect, useState } from "react";
import { Outlet } from "react-router";
import menuItems from "../menu";
import { Link, useNavigate } from "react-router-dom";
import { ProLayout } from "@ant-design/pro-components";
import { useSelector } from "react-redux";

const RootLayout = () => {
  const navigate = useNavigate();
  const { status } = useSelector((state) => state.auth);

  const [pathname, setPathname] = useState("/");

  useEffect(() => {
    if (!status) {
      navigate("/auth");
    }
  }, [navigate, status]);

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
