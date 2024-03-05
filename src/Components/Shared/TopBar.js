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

const TopBar = ({ history }) => {
  const { setSidebarToggle, sidebarToggle,toggleSidebar , userDetails,isMobile } = useContext(context);
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
        <Link to="/" style={{ textDecoration: 'none' }}>
          <UserOutlined />
          <span style={{marginLeft:10}}>My Profile</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="sign-out" onClick={(e)=>handleClick(e)}>
        <LogoutOutlined />
        <span style={{marginLeft:10}}>Sign Out</span>
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
       {!isMobile &&<i
          className=" toggle-sidebar-btn"
          onClick={() => {
            toggleSidebar()
            // setRefresh(prev=>!prev)
          }}
        >
          {sidebarToggle ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        
        </i>
}
      </div>
      <Menu theme="light" mode="horizontal" className="ms-auto" style={{height:60}}>
        <Menu.Item key="profile" className="nav-item dropdown pe-3">
          <Dropdown overlay={menu} placement="bottomRight" arrow>
            <p
              className="nav-link nav-profile d-flex align-items-center pe-0"
            >
              <Avatar src="assets/img/profile-img.jpg" />
              <span
                className={`d-none d-md-block dropdown-toggle ps-2 ${
                  sidebarToggle ? "hide-text" : ""
                }`}
              >
                {userDetails?.userName && userDetails.userName.toUpperCase()}
              </span>
            </p>
          </Dropdown>
        </Menu.Item>
      </Menu>
    </Header>
  );

};

export default React.memo(TopBar);
