import React, { useState } from "react";
import LoginContext from "./contexts/LoginContext";
import UserContext from "./contexts/UserContext";
import Home from "./layout/Home";

const App: React.FC = () => {
  const [log, setLog] = useState(false);
  const [user, setUser] = useState();

  return (
    <div data-testid="main">
      <LoginContext.Provider value={{ log, setLog }}>
        <UserContext.Provider value={{ user, setUser }}>
          <Home />
        </UserContext.Provider>
      </LoginContext.Provider>
    </div>
  );
};

export default App;

//  const { pathname } = useLocation();
// {pathname  {pathname !== "/profile" ? <Nav /> : <NavbarProfile />}
