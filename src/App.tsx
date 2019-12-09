import React from "react";
import { Route, Switch } from "react-router";
import ApiAdventures from "./containers/ApiAdventures";
import SocialHome from "./containers/SocialHome";
import Nav from "./layout/Nav";
import Sidebar from "./layout/Sidebar";
import Adventures from "./pages/Adventures";
import Error from "./pages/Error";
import Home from "./pages/Home";
import { Profile } from "./pages/Profile";

const App: React.FC = () => {



  return (

    <div data-testid="main" className="main">
      <div className="main__navbar">
        <Nav />
        <Sidebar />
      </div>
      <div className="main__content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/adventures" component={ApiAdventures} />
          <Route exact path="/alladventures" component={Adventures} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/login" component={SocialHome} />
          <Route component={Error} />
        </Switch>
      </div>
    </div >
  );
};

export default App;

//  const { pathname } = useLocation();
// {pathname  {pathname !== "/profile" ? <Nav /> : <NavbarProfile />}