import React from "react";

export default React.createContext({
  log: false,

  setLog: (_bool: boolean) => {}
});
