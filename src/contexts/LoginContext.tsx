import React from "react";

export default React.createContext({
  log: false,
  //@ts-ignore
  setLog: (bool: boolean) => { },

});
