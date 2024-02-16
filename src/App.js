import "./App.css";
import "./custom.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalContext from "./Context/Context";
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-datepicker/dist/react-datepicker.css';
import Layout from "./Shared/Layout";



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={"*"}>
          <GlobalContext>
            <Layout />
          </GlobalContext>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
