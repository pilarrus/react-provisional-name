import React, { useState } from "react";
import { Route, Switch } from "react-router";
import ApiAdventures from "./containers/ApiAdventures";
import LoginRegister from "./containers/Form";
import ColorContext from "./contexts/ColorContext";
import Nav from "./layout/Nav";
import Sidebar from "./layout/Sidebar";
import Adventures from "./pages/Adventures";
import Error from "./pages/Error";
import Groups from "./pages/Groups";
import Home from "./pages/Home";
import { Profile } from "./pages/Profile";

const App: React.FC = () => {
  const [colorNav, setColorNav] = useState("cyan");
  const [colorSide, setColorSide] = useState("black");

  return (
    <div data-testid="main" className="main">
      <div className="main__navbar">
        <ColorContext.Provider
          value={{ colorNav, colorSide, setColorNav, setColorSide }}
        >
          <Nav />
          <Sidebar />
        </ColorContext.Provider>
      </div>
      <div id="main-content" className="main__content toggle-main-content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/adventures" component={ApiAdventures} />
          <Route exact path="/alladventures" component={Adventures} />
          <Route exact path="/groups" component={Groups} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/login" component={LoginRegister} />
          <Route component={Error} />
        </Switch>
      </div>
    </div>
  );
};

export default App;

//  const { pathname } = useLocation();
// {pathname  {pathname !== "/profile" ? <Nav /> : <NavbarProfile />}
