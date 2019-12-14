import React, { useState } from "react";
import ColorContext from "../contexts/ColorContext";
import Nav from "./Nav2";
import Sidebar from "./Sidebar2";

const App: React.FC = () => {
  const [colorNav, setColorNav] = useState("cyan");
  const [colorSide, setColorSide] = useState("black");
  const [closeSideBar, setOpenSideBar] = useState(true);




  const handleSideBar = () => {
    console.log("click");
    console.log(">>>>>DENTRO DE FUNCION", closeSideBar);
    setOpenSideBar(!setOpenSideBar);
  }

  console.log(">>>>>fuera DE FUNCION", closeSideBar);

  return (

    <div>
      <ColorContext.Provider
        value={{ colorNav, colorSide, setColorNav, setColorSide }}
      >

        //@ts-ignore
        <Nav handleSideBar={handleSideBar} />
        //@ts-ignore
        <Sidebar sidebar={closeSideBar} />
      </ColorContext.Provider>
    </div>

  );
};

export default App;