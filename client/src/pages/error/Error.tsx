import React from "react";
import { Result, Button } from "antd";
import { Link } from "react-router-dom";

const Error: React.FC = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, this page does not exist."
      extra={
        <Button type="primary">
          <Link to="/">Back Home</Link>
        </Button>
      }
    />
  );
};

export default Error;
