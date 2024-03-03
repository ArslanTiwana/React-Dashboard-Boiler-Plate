import "./App.css";
import "./custom.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalContext from "./Context/Context";
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-datepicker/dist/react-datepicker.css';
import LoginRedirect from "./Components/Shared/LoginRedirect";
import { Provider } from 'react-redux';
import store from './Store/store';


function App() {
  return (
    <Provider store={store}>

    <Router>
      <Switch>
        <Route exact path={"*"}>
          <GlobalContext>
            <LoginRedirect />
          </GlobalContext>
        </Route>
      </Switch>
    </Router>
    </Provider>

  );
}

export default App;
