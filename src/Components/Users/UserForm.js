import React, { useEffect, useState } from "react";
import { Modal, Form, Input, Button, Select, Spin } from "antd";
import {
  UserOutlined,
  PhoneOutlined,
  MailOutlined,
  LockOutlined,
} from "@ant-design/icons";
import userTypes from "../constants/const";
import swal from "sweetalert";
import { Apis } from "../Apis";

const { Option } = Select;

const UserForm = ({ setUserForm, refresh, setRefresh, userId, setUserId }) => {
  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [form] = Form.useForm();
  const [selectedUserType, setSelectedUserType] = useState(null);
  const userTypeOptions = userTypes();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    form.setFieldsValue({ [name]: value });
  };

  useEffect(() => {
    if (userId != null) {
      setLoading(true);
      Apis()
        .getUserById(userId)
        .then((res) => {
          if (res.data.code === 200 || res.data.code === 201) {
            const initialFormData = {
              userName: res.data.data.userName,
              phoneNumber: res.data.data.phoneNumber,
              email: res.data.data.email,
              userType: res.data.data.userType,
            };
            form.setFieldsValue(initialFormData);
            setSelectedUserType(res.data.data.userType);
          } else {
            swal({
              title: res.data.message,
              icon: "error",
              buttons: "OK",
            });
          }
        })
        .catch((err) => {
          console.error(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [userId]);

  const handleSubmit = () => {
    form.validateFields().then((values) => {
      setLoading(true);
      setButtonDisabled(true);
      const registerUser = {
        name: values.name,
        email: values.email,
        password: values.password,
        phoneNumber: values.phoneNumber,
        userType: selectedUserType,
      };
      console.log(selectedUserType)
      Apis()
        .register(registerUser)
        .then((res) => {
          if (
            (res.data.code === 200 || res.data.code === 201)
          ) {
            swal({
              title: res.data.message,
              icon: "success",
              buttons: "OK",
            });
            setRefresh(!refresh);
            handleCancel();
          } else {
            swal({
              title: res.data.message,
              icon: "error",
              buttons: "OK",
            });
          }
        })
        .catch((err) => {
        })
        .finally(() => {
          setLoading(false);
          setButtonDisabled(false);
        });
    });
  };
  const handleEditSubmit = () => {
    form.validateFields().then((values) => {
      setLoading(true);
      setButtonDisabled(true);

      const editUser = {
        name: values.name,
        email: values.email,
        phoneNumber: values.phoneNumber,
        userType: selectedUserType,
      };
      Apis()
        .updateUser(userId, editUser)
        .then((res) => {
          if (
            (res.data.code === 200 || res.data.code === 201)
          ) {
            swal({
              title: res.data.message,
              icon: "success",
              buttons: "OK",
            });
            setRefresh(!refresh);
            handleCancel();
          } else {
            swal({
              title: res.data.message,
              icon: "error",
              buttons: "OK",
            });
          }
        })
        .catch((err) => {
        })
        .finally(() => {
          setLoading(false);
          setButtonDisabled(false);
        });
    });
  };

  const handleCancel = () => {
    setUserId(null)
    setUserForm(false);
    form.resetFields();
  };

  return (
    <Modal
      visible={true}
      onCancel={handleCancel}
      footer={[
        userId ? (
          <Button
            key="update"
            type="primary"
            disabled={buttonDisabled}
            onClick={handleEditSubmit}
          >
            Update
          </Button>
        ) : (
          <Button
            key="create"
            type="primary"
            disabled={buttonDisabled}
            onClick={handleSubmit}
          >
            Create Account
          </Button>
        ),
        <Button
          key="cancel"
          onClick={handleCancel}
          disabled={buttonDisabled}
        >
          Cancel
        </Button>,
      ]}
    >

      <Spin spinning={loading}>
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Form.Item
            label="Name"
            name="userName"
            rules={[{ required: false, message: "Please enter name" }]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder="Enter Name"
              onChange={handleInputChange}
            />
          </Form.Item>

          <Form.Item
            label="Phone Number"
            name="phoneNumber"
          >
            <Input
              prefix={<PhoneOutlined />}
              placeholder="+923XXXXXXXXX"
              onChange={handleInputChange}
            />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: false, message: "Please enter email" },
              { type: "email", message: "Please enter a valid email" },
            ]}
          >
            <Input
              prefix={<MailOutlined />}
              placeholder="Enter Email"
              onChange={handleInputChange}
            />
          </Form.Item>
          {!userId &&
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: false, message: "Please enter password" },
                { min: 6, message: "Password must be at least 6 characters long" },
              ]}
            >
              <Input
                prefix={<LockOutlined />}
                type="password"
                placeholder="Enter Password"
                onChange={handleInputChange}
              />
            </Form.Item>
          }
          <Form.Item
            label="Select User Type"
            name="userType"
            rules={[{ required: true, message: "Please select user type" }]}
          >
            <Select
              options={userTypeOptions}
              placeholder="Select User Type"
              onChange={(ut) => { console.log(ut); setSelectedUserType(ut) }}
            />
          </Form.Item>
        </Form>
      </Spin>
    </Modal>
  );
};

export default UserForm;
