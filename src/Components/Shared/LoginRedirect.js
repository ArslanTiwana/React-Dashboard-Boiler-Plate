import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./Layout";
import Login from "../Login/Login";
import context from "../../Context/ContextState";
import { useContext } from "react";
import { Grid } from "antd";

const tokenString = localStorage.getItem("token");
let localToken = "";
if (tokenString !== undefined) localToken = tokenString;

const LoginRedirect = () => {
  const [values, setValues] = useState({ token: "" });
  const [isTokenExist, setIsTokenExist] = useState(false);
  const { setIsMobile } = useContext(context);
  const { useBreakpoint } = Grid;

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
    setIsMobile(screens.length === 0 ? false : !screens.includes("lg"));
  useEffect((values) => {
    setValues({
      ...values,
      token: localToken,
    });
    setIsTokenExist(true);
  }, []);

  if (!isTokenExist) {
    return null;
  }

  if (!values.token) {
    return <Login setValues={setValues} values={values} />;
  }
  
  return (
    <Router>
      <Layout />
    </Router>
  );
};
export default LoginRedirect;
