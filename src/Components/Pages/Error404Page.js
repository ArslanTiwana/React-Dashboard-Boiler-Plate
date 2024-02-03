import React from "react";
import { Result, Button } from "antd";
import { Link } from "react-router-dom";

const Error404Page = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Page Not Found."
      extra={
        <Link to="/">
          <Button type="primary">Go Home</Button>
        </Link>
      }
    />
  );
};

export default Error404Page;
