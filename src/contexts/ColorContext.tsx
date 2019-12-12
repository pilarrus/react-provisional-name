import React from "react";

export default React.createContext({
  colorNav: "",
  colorSide: "",
  //@ts-ignore
  setColorNav: (nav: string) => {},
  //@ts-ignore
  setColorSide: (side: string) => {}
});
