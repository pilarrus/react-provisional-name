import React from "react";
import { Route, Switch } from "react-router";
import Adventures from "../components/Adventures";
import ApiAdventures from "../containers/ApiAdventures";
import LoginRegister from "../containers/Form";
import Error from "../pages/Error";
import Groups from "../pages/Groups";
import Home from "../pages/Home";
import { Profile } from "../pages/Profile";


const Main: React.FC<{ sidebar: boolean }> = ({ sidebar }) => {

  let style = "";
  sidebar ? style = "padding" : style = "nopadding";

  return (

    <div className={`main ${style}`}>
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

  );
};

export default Main;