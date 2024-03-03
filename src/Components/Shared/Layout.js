import React, { useContext, useEffect, useState } from "react";
import context from "../../Context/ContextState";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import ViewUsers from "../Users/ViewUsers";
import Charts from "../Admin Dashboard/charts";
import { Drawer, Grid } from "antd";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import ViewLogs from "../Logs/ViewLogs";
import { useSelector } from 'react-redux';

function Layout() {
  // const { useBreakpoint } = Grid;
  const [open, setOpen] = useState(false);
  const [refresh,setRefresh]=useState(true)
  const sidebar = useSelector((state) => state.sidebar);


  const onClose = () => {
    setOpen(false);
  };

  // useEffect(() => {
  //   const user = localStorage.getItem("user");
  //   if (user) {
  //     setUserDetails(JSON.parse(user));
  //   }
  // },[]);

  // const getBreakPoint = (screens) => {
  //   let breakpoints = [];
  //   for (const key in screens) {
  //     if (screens.hasOwnProperty(key)) {
  //       const element = screens[key];
  //       if (element) {
  //         breakpoints.push(key);
  //       }
  //     }
  //   }
  //   return breakpoints;
  // };
  // const screens = getBreakPoint(useBreakpoint());
  // const isMobile = screens.length === 0 ? false : !screens.includes("lg");
  const user = localStorage.getItem("user");

  const userDetails = JSON.parse(user)
  const MainContent = () => (
    <div>
      <TopBar setRefresh={setRefresh} />
      {/* {isMobile ? (
        <Drawer
          title="Basic Drawer"
          placement={"left"}
          width={250}
          onClose={onClose}
          open={open}
        >
          <SideBar {...{ onClose }} />
        </Drawer>
      ) : (
        ''
      )} */}
      <div style={{ width: '100%', display: 'flex', marginTop: 60 }} >
        <div style={{ width: refresh? '20%':'10%' }}><SideBar onClose={onClose}  /></div>
        <div style={{ width: '100%' }}>
          <Switch>
            <Route exact path="/">
              {[
                "admin",
                "accountant",
                "work",
                "plates",
                "film",
                "wedding_card",
                "offset",
                "panaflex",
                "color_print",
              ].includes(userDetails?.userType) ? (
                <Charts />
              ) : (
                <Redirect to="/unauthorized" />
              )}
            </Route>
            <Route exact path="/viewUsers">
              {[
                "admin",
                "accountant",
                "work",
                "plates",
                "film",
                "wedding_card",
                "offset",
                "panaflex",
                "color_print",
              ].includes(userDetails?.userType) ? (
                <ViewUsers />
              ) : (
                <Redirect to="/unauthorized" />
              )}
            </Route>
            <Route exact path="/logs">
              {[
                "admin",
              ].includes(userDetails?.userType) ? (
                <ViewLogs />
              ) : (
                <Redirect to="/unauthorized" />
              )}
            </Route>
            <Route>
              <Redirect to="/notfound" />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
  return (
    <Router>
      <Switch>
        <Route path="/">
          <MainContent />
        </Route>
      </Switch>
    </Router>
  );
}

export default withRouter(Layout);
