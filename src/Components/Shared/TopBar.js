import React, { useContext, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { Layout, Menu, Dropdown, Avatar } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import context from "../../Context/ContextState";
import App from "../../App";

const { Header } = Layout;

const TopBar = ({ history, setOpen, isMobile }) => {
  const { setSidebarToggle, sidebarToggle, userDetails } = useContext(context);
  const [returnLogout, setReturnLogout] = useState(false);

  const handleClick = () => {
    localStorage.clear();
    setSidebarToggle(!sidebarToggle);
    window.location.reload();
    history.replace("/");
    setReturnLogout(true);
  };

  const menu = (
    <Menu>
      <Menu.Item key="profile">
        <Link to="users-profile.html">
          <UserOutlined />
          My Profile
        </Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="account-settings">
        <Link to="sljn">
          <SettingOutlined />
          Account Settings
        </Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="sign-out" onClick={handleClick}>
        <LogoutOutlined />
        Sign Out
      </Menu.Item>
    </Menu>
  );

  if (returnLogout) return <App />;

  return (
    <Header
    style={{paddingRight:1}}
      className={`header fixed-top d-flex align-items-center ${
        sidebarToggle ? "sidebar-collapsed" : ""
      }`}
    >
      <div className="d-flex align-items-center justify-content-between">
      <p >

      <img src="assets/img/logo.jpg" alt="" className="App-logo"/>
      </p>
      { sidebarToggle &&
        <div className="logo d-flex align-items-center" style={!isMobile ? { width: 180 } : {}}>
          <span
            className={`d-none d-lg-block`}
            style={{ fontSize: 20 }}
          >
            Tiwana Sofware
          </span>
          
        </div>}
        <i
          className=" toggle-sidebar-btn"
          onClick={() => {
            setOpen((prev) => !prev);
            setSidebarToggle(!sidebarToggle);
          }}
        >
          {sidebarToggle ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </i>
      </div>
      <Menu theme="light" mode="horizontal" className="ms-auto">
        <Menu.Item key="search" className="d-block d-lg-none">
          <a className="nav-link nav-icon search-bar-toggle " href="iug">
            <i className="bi bi-search"></i>
          </a>
        </Menu.Item>
        <Menu.Item key="profile" className="nav-item dropdown pe-3">
          <Dropdown overlay={menu} placement="bottomRight" arrow>
            <a
              className="nav-link nav-profile d-flex align-items-center pe-0"
              href="hg"
            >
              <Avatar src="assets/img/profile-img.jpg" />
              <span
                className={`d-none d-md-block dropdown-toggle ps-2 ${
                  sidebarToggle ? "hide-text" : ""
                }`}
              >
                {userDetails?.userName && userDetails.userName.toUpperCase()}
              </span>
            </a>
          </Dropdown>
        </Menu.Item>
      </Menu>
    </Header>
  );

};

export default withRouter(TopBar);
