import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./Layout";
import Login from "../Login/Login";

const tokenString = localStorage.getItem("token");
let localToken = "";
if (tokenString !== undefined) localToken = tokenString;

const LoginRedirect = () => {
  const [values, setValues] = useState({ token: "" });
  const [isTokenExist, setIsTokenExist] = useState(false);
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
