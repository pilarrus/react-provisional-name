import React, { useState } from "react";
import GroupsContext from "./contexts/GroupsContext";
import LoginContext from "./contexts/LoginContext";
import UserContext from "./contexts/UserContext";
import Home from "./layout/Home";

const App: React.FC = () => {
  const [log, setLog] = useState(false);
  const [user, setUser] = useState();
  const [groups, setGroups] = useState();

  return (
    <div data-testid="main">
      <LoginContext.Provider value={{ log, setLog }}>
        <UserContext.Provider value={{ user, setUser }}>
          <GroupsContext.Provider value={{ groups, setGroups }}>
            <Home />
          </GroupsContext.Provider>
        </UserContext.Provider>
      </LoginContext.Provider>
    </div>
  );
};

export default App;

//  const { pathname } = useLocation();
// {pathname  {pathname !== "/profile" ? <Nav /> : <NavbarProfile />}
