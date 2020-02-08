import React from "react";
import { Route, Switch } from "react-router";
import LoginRegister from "../components/Form";
import ApiAdventures from "../containers/ApiAdventures";
import Adventures from "../pages/Adventures";
import Error from "../pages/Error";
import Groups from "../pages/Groups";
import Home from "../pages/Home";
import { Profile } from "../pages/Profile";
import AboutUs from "../pages/AboutUs";

const Main: React.FC<{ sidebar: boolean }> = ({ sidebar }) => {
  let style = "";
  sidebar ? (style = "padding") : (style = "nopadding");

  return (
    <div className={`main ${style}`}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/adventures" component={ApiAdventures} />
        <Route exact path="/alladventures" component={Adventures} />
        <Route exact path="/groups/:activityID" component={Groups} />
        <Route exact path="/groups" component={Groups} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/aboutus" component={AboutUs} />
        <Route exact path="/login" component={LoginRegister} />
        <Route component={Error} />
      </Switch>
    </div>
  );
};

export default Main;
