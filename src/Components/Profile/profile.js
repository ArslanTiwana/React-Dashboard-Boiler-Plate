import React, { useState } from "react";
import { Button, Modal, Form, Input, message } from "antd";

const ProfilePage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleChangePassword = (values) => {
    // Call your API to change the password here
    // For demonstration, we'll just log the values
    console.log("New Password:", values.newPassword);

    // Display success message
    message.success("Password changed successfully!");

    // Close the modal
    handleCancel();
  };

  return (
    <div>
      <h1>Profile Display Page</h1>
      <Button type="primary" onClick={showModal}>
        Change Password
      </Button>

      <Modal
        title="Change Password"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form onFinish={handleChangePassword}>
          <Form.Item
            label="New Password"
            name="newPassword"
            rules={[
              { required: true, message: "Please enter your new password" },
              { min: 6, message: "Password must be at least 6 characters long" },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Change Password
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ProfilePage;
