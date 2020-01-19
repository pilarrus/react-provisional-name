import React, { useState } from "react";
import GroupsContext from "./contexts/GroupsContext";
import LoginContext from "./contexts/LoginContext";
import UserContext from "./contexts/UserContext";
import Home from "./layout/Home";
import fire from "./enviroments/enviroment";
import GroupService from "./services/groupServices";

const App: React.FC = () => {
  let groupService: GroupService;
    groupService = new GroupService(fire);

  let groupsS = groupService.find();
  console.log(groupsS);
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
