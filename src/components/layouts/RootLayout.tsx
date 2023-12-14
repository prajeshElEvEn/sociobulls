import { useState } from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import { ProLayout } from "@ant-design/pro-components";
import { BrandLogo } from "../../assets/images";
import menu from "../utils/menu";

export default function RootLayout() {
  const [pathname, setPathname] = useState("/");

  return (
    <div>
      <ProLayout
        title={"SocioBulls"}
        logo={BrandLogo}
        {...menu}
        location={{
          pathname,
        }}
        // onMenuHeaderClick={() => navigate("/")}
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
              <a
                href="http://bit.ly/prajesheleven"
                target="_blank"
                rel="noopener noreferrer"
              >
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
}
