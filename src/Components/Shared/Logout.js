import React from "react";
import { withRouter } from "react-router-dom";
import App from "../../App";

function Logout({ history }) {
  localStorage.clear();
  history.replace("/");
  window.location.reload();
  return <App />;
}

export default withRouter(Logout);
