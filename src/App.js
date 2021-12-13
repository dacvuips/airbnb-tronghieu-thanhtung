import { createBrowserHistory } from "history";
import Home from "pages/Home/Home";
import Login from "pages/Login/Login";
import PageNotFound from "pages/PageNotFound";
import Register from "pages/Register/Register";
import { Route, Router, Switch } from "react-router";
import { renderRoutesAdmin, renderRoutesHome } from "Router";
import { HomeTemplate } from "templates/HomeTemplate/HomeTemplate";
import "./App.scss";

export const history = createBrowserHistory();
function App() {
  return (
    <Router history={history}>
      <Switch>
        {renderRoutesHome()}
        {renderRoutesAdmin()}
        {/* <Route path="/auth" component={AuthPage} /> */}

        {/* Trang k ton tai - de o cuoi cung */}
        <Route path="" component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;