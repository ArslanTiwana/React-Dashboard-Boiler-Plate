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

function Layout() {
  const { setUserDetails, userDetails } = useContext(context);
  const { useBreakpoint } = Grid;
  const { sidebarToggle } = useContext(context);
  const [open, setOpen] = useState(false);
  const [refresh,setrefresh]=useState(false)


  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUserDetails(JSON.parse(user));
    }
  },[]);

  const getBreakPoint = (screens) => {
    let breakpoints = [];
    for (const key in screens) {
      if (screens.hasOwnProperty(key)) {
        const element = screens[key];
        if (element) {
          breakpoints.push(key);
        }
      }
    }
    return breakpoints;
  };
  const screens = getBreakPoint(useBreakpoint());
  const isMobile = screens.length === 0 ? false : !screens.includes("lg");

  console.log(userDetails?.userType)
  const MainContent = () => (
    <div style={{ left: sidebarToggle && -250 }}>
      <TopBar {...{ setOpen, onClose ,isMobile}} />
      {isMobile ? (
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
        sidebarToggle && <SideBar {...{ onClose }} />
      )}
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
