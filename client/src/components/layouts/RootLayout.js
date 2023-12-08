import React, { useEffect, useState } from "react";
import { Outlet } from "react-router";
import menuItems from "../menu";
import { Link, useNavigate } from "react-router-dom";
import { ProLayout } from "@ant-design/pro-components";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../features/users/userSlice";
import { BrandLogo } from "../../assets/images";

const RootLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id, status } = useSelector((state) => state.auth);

  const [pathname, setPathname] = useState("/");

  useEffect(() => {
    if (!status) {
      navigate("/auth");
    }
  }, [navigate, status]);

  useEffect(() => {
    if (status) {
      dispatch(getUser({ id: id }));
    }
  }, [dispatch, status, id]);

  return (
    <div>
      <ProLayout
        title={"SocioBulls"}
        logo={BrandLogo}
        {...menuItems}
        location={{
          pathname,
        }}
        onMenuHeaderClick={() => navigate("/")}
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
};

export default RootLayout;
