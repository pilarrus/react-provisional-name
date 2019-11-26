import React from "react";
import Navbar from "./layout/navbar";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Adventures from "./pages/Adventures";
import {Route, Switch} from "react-router";

const App: React.FC = () => {
  return (
    <div data-testid="main">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/adventures" component={Adventures} />
        <Route component={Error} />
      </Switch>
    </div>
  );
};

export default App;
