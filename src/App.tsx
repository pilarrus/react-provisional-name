import React, { useState } from "react";
import GroupsContext from "./contexts/GroupsContext";
import LoginContext from "./contexts/LoginContext";
import SubscribeMeGroupContext from "./contexts/SubscribMeGroupContext";
import UserContext from "./contexts/UserContext";
import Home from "./layout/Home";

const App: React.FC = () => {
  const [log, setLog] = useState(false);
  const [user, setUser] = useState();
  const [groups, setGroups] = useState();
  const [subscribMe, setSubscribMe] = useState(false);
  const [group, setGroup] = useState();

  return (
    <div data-testid="main">
      <LoginContext.Provider value={{ log, setLog }}>
        <UserContext.Provider value={{ user, setUser }}>
          <GroupsContext.Provider value={{ groups, setGroups }}>
            <SubscribeMeGroupContext.Provider
              value={{ subscribMe, setSubscribMe, group, setGroup }}
            >
              <Home />
            </SubscribeMeGroupContext.Provider>
          </GroupsContext.Provider>
        </UserContext.Provider>
      </LoginContext.Provider>
    </div>
  );
};

export default App;
