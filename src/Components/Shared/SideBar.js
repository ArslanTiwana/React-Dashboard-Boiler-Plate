import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { Layout, Menu } from "antd";
import {
  AppstoreOutlined,
  TeamOutlined,
  DashboardOutlined,
  UpOutlined,
  DownOutlined
} from "@ant-design/icons";
import context from "../../Context/ContextState";

const { Sider } = Layout;
const { SubMenu } = Menu;

const SideBar = ({ onClose }) => {
  const [selectedBtn, setSelectedBtn] = useState("Dashboard");
  const { userDetails } = useContext(context);

  const tabsByUserType = {
    admin: [
      "Dashboard",
      "Scrumboard",
      "ViewJobs",
      "CreateOrder",
      "Job Cards",
      "Invoices",
      "Users",
      "Logs",
      "Clients",
      "Business",
      "Settings",
    ],
    work: ["Dashboard", "CreateOrder", "Job Cards", "Clients"],
    accountant: ["Dashboard"],
    plates: ["Scrumboard"],
    film: ["Dashboard", "Scrumboard"],
    offset: ["Dashboard", "Scrumboard"],
    panaflex: ["Dashboard", "Scrumboard"],
    wedding_card: ["Dashboard", "Scrumboard"],
    color_print: ["Dashboard", "Scrumboard"],
  };

  // Get the tabs for the current user type
  const userTabs = tabsByUserType[userDetails?.userType] || [];

  const shouldRenderTab = (tab) => userTabs.includes(tab);
  return (
    <>
      <aside id="sidebar" className="sidebar">
        <span className="sidebar-tab">DASHBOARD</span>
      <Menu theme="light" mode="vertical" defaultSelectedKeys={["Dashboard"]} className="ant-menu-style">
        {shouldRenderTab("Dashboard") && (
          <Menu.Item
            key="Dashboard"
            icon={<DashboardOutlined />}
            onClick={() => {
              setSelectedBtn("Dashboard");
              onClose();
            }}
          > 
           Dashboard
            <Link to="/" className="nav-link">
            </Link>
          </Menu.Item>
        )}

        {shouldRenderTab("Users") && (
          <Menu.Item
            key="Users"
            icon={<TeamOutlined />}
            onClick={() => {
              setSelectedBtn("Users");
              onClose();
            }}
          > Users
            <Link to="/viewusers" className="nav-link">
            </Link>
          </Menu.Item>
        )}
        {shouldRenderTab("Logs") && (
          <Menu.Item
            key="Logs"
            icon={<TeamOutlined />}
            onClick={() => {
              setSelectedBtn("Logs");
              onClose();
            }}
          > Logs
            <Link to="/logs" className="nav-link">
            </Link>
          </Menu.Item>
        )}
         {/* {shouldRenderTab("Users") && (
          <SubMenu key="Users" icon={<TeamOutlined />} title="Users">
            <Menu.Item
              key="viewUsers"
              onClick={() => {
                setSelectedBtn("viewUsers");
                onClose();
              }}
            >
              <Link to="/viewusers" className="nav-link">
                View Users
              </Link>
            </Menu.Item>
            <Menu.Item
              key="addUser"
              onClick={() => {
                setSelectedBtn("addUser");
                onClose();
              }}
            >
              <Link to="/adduser" className="nav-link">
                Add User
              </Link>
            </Menu.Item>
          </SubMenu>
        )} */}

      </Menu>
      {/* <span className="sidebar-tab">DASHBOARD</span>
      <Menu theme="light" mode="vertical" defaultSelectedKeys={["Dashboard"]} className="ant-menu-style">
        {shouldRenderTab("Dashboard") && (
          <Menu.Item
            key="Dashboard"
            icon={<DashboardOutlined />}
            onClick={() => {
              setSelectedBtn("Dashboard");
              onClose();
            }}
          > 
           Dashboard
            <Link to="/" className="nav-link">
            </Link>
          </Menu.Item>
        )}

        {shouldRenderTab("Users") && (
          <Menu.Item
            key="Users"
            icon={<TeamOutlined />}
            onClick={() => {
              setSelectedBtn("Users");
              onClose();
            }}
          > Users
            <Link to="/viewusers" className="nav-link">
            </Link>
          </Menu.Item>
        )}
      </Menu> */}
    
      </aside>
    </>
  );
};

export default withRouter(SideBar);
