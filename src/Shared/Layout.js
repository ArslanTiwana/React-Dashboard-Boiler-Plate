import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import Header from "../Components/Pages/Header";
import Footer from "../Components/Pages/Footer";
import Home from "../Components/Pages/Home";

function Layout() {

  return (
    <Router>
      <Header/>
      <Switch>
        <Route path="/"><Home/></Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default withRouter(Layout);
