import React, { useState } from "react";
import ColorContext from "../contexts/ColorContext";
import Main from "./Main";
import Nav from "./Nav";
import Sidebar from "./Sidebar";


const App: React.FC = () => {
  const [colorNav, setColorNav] = useState("cyan");
  const [colorSide, setColorSide] = useState("black");
  const [closeSideBar, setOpenSideBar] = useState(true);

  const handleSideBar = () => {
    setOpenSideBar(!closeSideBar);
  }


  return (

    <div>
      <ColorContext.Provider
        value={{ colorNav, colorSide, setColorNav, setColorSide }}
      >
        <Nav handleSideBar={handleSideBar} />
        <Sidebar sidebar={closeSideBar} />
        <Main sidebar={closeSideBar} />

      </ColorContext.Provider>
    </div>

  );
};

export default App;