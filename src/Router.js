import React from "react";
import { Route, Switch } from "react-router-dom";
import App from "./App";
import Contribute1 from "./Contribute1";
import Home from "./Home";
class Router extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/general/:slug/" component={App} />
          <Route exact path="/contribute" component={Contribute1} />
        </Switch>
      </div>
    );
  }
}
export default Router;
