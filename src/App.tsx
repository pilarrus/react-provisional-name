import React from "react";
import { Route, Switch, useLocation } from "react-router";
import ApiAdventures from "./containers/ApiAdventures";
import SocialHome from "./containers/SocialHome";
import Navbar from "./layout/navbar";
import NavbarProfile from "./layout/NavbarProfile";
import Adventures from "./pages/Adventures";
import Error from "./pages/Error";
import Home from "./pages/Home";
import { Profile } from "./pages/Profile";

const App: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <div data-testid="main" className="main">
      <div className="main__navbar">
        {pathname !== "/profile" ? <Navbar /> : <NavbarProfile />}
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/adventures" component={ApiAdventures} />
        <Route exact path="/alladventures" component={Adventures} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/login" component={SocialHome} />
        <Route component={Error} />
      </Switch>
    </div>
  );
};

export default App;
