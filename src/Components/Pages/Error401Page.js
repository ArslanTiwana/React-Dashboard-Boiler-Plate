import React from "react";
import { Result, Button } from "antd";
import { Link } from "react-router-dom";

const Error401Page = () => {
  return (
    <Result
      status="403"
      title="403"
      subTitle="Sorry, you are not authorized to access this page."
      extra={
        <Link to="/">
          <Button type="primary">Go Home</Button>
        </Link>
      }
    />
  );
};

export default Error401Page;
