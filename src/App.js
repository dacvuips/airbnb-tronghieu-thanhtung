import { createBrowserHistory } from "history";

import PageNotFound from "pages/PageNotFound";
import { Route, Router, Switch } from "react-router";
import { renderCheckOut, renderRoutesAdmin, renderRoutesHome } from "Routes";

// import Home from "pages/Home/Home";
// import Login from "pages/Login/Login";

// import Register from "pages/Register/Register";

// import { HomeTemplate } from "templates/HomeTemplate/HomeTemplate";
import "./App.scss";

import { HomeTemplate } from "templates/HomeTemplate/HomeTemplate";

export const history = createBrowserHistory();
function App() {
  return (
    <Router history={history}>
      <Switch>
        {renderRoutesHome()}
        {renderRoutesAdmin()}
        {renderCheckOut()}
        {/* <Route path="/auth" component={AuthPage} /> */}

        {/* Trang k ton tai - de o cuoi cung */}
        <Route path="" component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
