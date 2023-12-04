import { Dropdown, Space } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const items = [
  {
    label: <Link to="https://www.antgroup.com">Edit</Link>,
    key: "0",
  },
  {
    label: <Link to="https://www.aliyun.com">Delete</Link>,
    key: "1",
  },
];

const CardOption = ({ icon, user }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        gap: 2,
      }}
    >
      {user && (
        <Dropdown menu={{ items }} trigger={["click"]}>
          <Link onClick={(e) => e.preventDefault()}>
            <Space>{icon}</Space>
          </Link>
        </Dropdown>
      )}
    </div>
  );
};

export default CardOption;
