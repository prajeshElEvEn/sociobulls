"use client";
import { ProLayout } from "@ant-design/pro-components";
import Link from "next/link";
import { useState } from "react";
import sideNav from "../ui/dashboard/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [pathname, setPathname] = useState("/dashboard");
  return (
    <div>
      <ProLayout
        title={"SocioBulls"}
        // logo={BrandLogo}
        {...sideNav}
        location={{
          pathname,
        }}
        // onMenuHeaderClick={() => navigate("/")}
        menuItemRender={(item, dom) => (
          <Link
            href={item.path || "/dashboard"}
            onClick={() => {
              setPathname(item.path || "/dashboard");
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
        {children}
      </ProLayout>
    </div>
  );
}
