import { createBrowserHistory } from "history";
import PageNotFound from "pages/PageNotFound";
import { Route, Router, Switch } from "react-router";
import { renderCheckOut, renderRoutesAdmin, renderRoutesHome } from "Router";

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
