import React from "react";
import Home from "./layout/Home";


const App: React.FC = () => {


  return (
    <div data-testid="main">
      <Home />
    </div>
  );
};

export default App;

//  const { pathname } = useLocation();
// {pathname  {pathname !== "/profile" ? <Nav /> : <NavbarProfile />}
