import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Row, Col, Card, Form, Input, Button, Spin, Alert } from "antd";
import {
  UserOutlined,
  LockOutlined,
} from "@ant-design/icons";
import { Apis } from "../Apis";
import swal from "sweetalert";
import context from "../../Context/ContextState";

const Login = ({ setValues, values }) => {
  const { setUserDetails } = useContext(context);
  const [loading, setLoading] = useState(false);
  const [credentials, setCredentials] = useState("");
  const [errors, setErrors] = useState(credentials);
  const history = useHistory();

  // const validate = () => {
  //   let temp = {};
  //   temp.userName = credentials.userName !== "" ? "" : "Please Enter User Name.";

  //   temp.password =
  //     credentials.password !== ""
  //       ? credentials.password.length < 6
  //         ? "Your password must be at least 6 characters long."
  //         : ""
  //       : "Please Enter password.";

  //   setErrors({
  //     ...temp,
  //   });

  //   return Object.values(temp).every((x) => x === "");
  // };

  const handleSubmit = (e) => {
    localStorage.setItem("token", '123165465465');
    localStorage.setItem("user", JSON.stringify({userType:'admin'}));
    localStorage.setItem("siebarButton", 'Dashboard');

    history.push({
      pathname: `/`,
    });
  console.log(credentials)
  //     setLoading(true);
  //     Apis()
  //       .login(credentials)
  //       .then((res) => {
  //         if (res.data.code === 200) {
  //           localStorage.setItem("token", res.data.data.token);
  //           localStorage.setItem("user", JSON.stringify(res.data.data.user));
  //           setUserDetails(res.data.data.user);
  //           setValues({
  //             ...values,
  //             token: res.data.data,
  //           });
  //           history.push({
  //             pathname: `/`,
  //           });
  //           setLoading(false);
  //         } else {
  //           swal({
  //             title: res.data.message,
  //             icon: "error",
  //             buttons: "OK",
  //           });
  //           setLoading(false);
  //         }
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //         setLoading(false);
  //       });
    
  };

  const handleInputChange = (e,name) => {
    const { value } = e.target;
    console.log(name)
    setCredentials({
      ...credentials,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  return (
<main style={{ background: `url('assets/img/b-img.jpg')`, backgroundSize: 'cover' }}>
      <Row justify="center" align="middle" style={{ minHeight: "100vh",padding:100 }}>
        <Col span={6} >
          <Card title="Login" className="animated-background" style={{padding:20}}>
            <Spin spinning={loading} >
              <Form
                name="login"
                initialValues={{ remember: true }}
                onFinish={handleSubmit}
              >
                <Form.Item
                  name="userName"
                  rules={[{ required: true, message: "Please Enter User Name." }]}
                >
                  <Input
                    prefix={<UserOutlined />}
                    placeholder="User Name"
                    onChange={(e)=>handleInputChange(e,'userName')}
                  />
                </Form.Item>
                {errors.userName && (
                  <Alert message={errors.userName} type="error" showIcon />
                )}
                <Form.Item
                  name="password"
                  rules={[
                    { required: true, message: "Please Enter Password." },
                    { min: 6, message: "Password must be at least 6 characters long" },
                  ]}
                >
                  <Input.Password
                    prefix={<LockOutlined />}
                    placeholder="Password"
                    onChange={(e)=>handleInputChange(e,'password')}
                  />
                </Form.Item>
                {errors.password && (
                  <Alert message={errors.password} type="error" showIcon />
                )}
                <Form.Item>
                  <Button type="primary" htmlType="submit" className="w-100">
                    Login
                  </Button>
                </Form.Item>
              </Form>
            </Spin>
          </Card>
        </Col>
      </Row>
    </main>
  );
};

export default Login;
