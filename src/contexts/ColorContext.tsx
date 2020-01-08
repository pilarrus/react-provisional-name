import React from "react";

export default React.createContext({
  colorNav: "",
  colorSide: "",
  setColorNav: (_nav: string) => {},
  setColorSide: (_side: string) => {}
});
