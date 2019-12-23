import React, { useState } from "react";
import LoginContext from "./contexts/LoginContext";
import Home from "./layout/Home";


const App: React.FC = () => {

  const [log, setLog] = useState(false);
  return (
    <div data-testid="main">
      <LoginContext.Provider value={{ log, setLog }}>
        <Home />
      </LoginContext.Provider>
    </div>
  );
};

export default App;

//  const { pathname } = useLocation();
// {pathname  {pathname !== "/profile" ? <Nav /> : <NavbarProfile />}
