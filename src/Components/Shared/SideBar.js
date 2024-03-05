import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { Layout, Menu, Button, Grid } from "antd";
import {
  TeamOutlined,
  DashboardOutlined,
  SettingOutlined

} from "@ant-design/icons";

import context from "../../Context/ContextState";
import SubMenu from "antd/es/menu/SubMenu";

const SideBar = () => {
  const [selectedBtn, setSelectedBtn] = useState("Dashboard");
  const { userDetails, sidebarToggle,isMobile } = useContext(context);

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
      "Calender",
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
    <div style={{ width: sidebarToggle && !isMobile?'20%':isMobile?'10%':'5%' ,marginTop:20}}>
      
      <Menu theme="light" mode="inline"  defaultSelectedKeys={[localStorage.getItem("siebarButton")]} inlineCollapsed={isMobile || !sidebarToggle}>
        {shouldRenderTab("Dashboard") && (
          <Menu.Item
            key="Dashboard"
            icon={<DashboardOutlined />}
            onClick={() => {
              localStorage.setItem("siebarButton", 'Dashboard');
            }}
          >
            <span className="sidebar-text" > Dashboard</span>
            <Link to="/" className="nav-link">
            </Link>
          </Menu.Item>
        )}

        {shouldRenderTab("Users") && (
          <Menu.Item
            key="Users"
            icon={<TeamOutlined />}
            onClick={() => {
              localStorage.setItem("siebarButton", 'Users');
            }}
          >
           <span className="sidebar-text">Users</span> 
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
              localStorage.setItem("siebarButton", 'Logs');

            }}
          >
            <span className="sidebar-text">Logs</span> 
            <Link to="/logs" className="nav-link">
            </Link>
          </Menu.Item>
        )}
        {shouldRenderTab("Calender") && (
          <Menu.Item
            key="Calender"
            icon={<TeamOutlined />}
            onClick={() => {
              localStorage.setItem("siebarButton", 'Calender');

            }}
          >
            <span className="sidebar-text">Calender</span> 
            <Link to="/calender" className="nav-link">
            </Link>
          </Menu.Item>
        )}
         <SubMenu
          key="Settings"
          icon={<SettingOutlined />}
          title={<span className="sidebar-text">Settings</span>}
        >
          <Menu.Item key="Profile">
            <span>Profile</span>
            <Link to="/settings/profile" className="nav-link"></Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  );
};

export default React.memo(SideBar);

