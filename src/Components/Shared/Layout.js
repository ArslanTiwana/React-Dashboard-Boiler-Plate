import React, { useContext, useEffect, useState } from "react";
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
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import ViewLogs from "../Logs/ViewLogs";
import CalendarApp from "../calendar";

function Layout() {
  const [open, setOpen] = useState(false);
  const user = localStorage.getItem("user");
  const userDetails = JSON.parse(user)
  const MainContent = () => (
    <div>
      <TopBar />
      <div style={{ width: '100%', display: 'flex', marginTop: 60 }} >
        <SideBar />
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
            <Route exact path="/calender">
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
                <CalendarApp />
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

export default React.memo(Layout);
