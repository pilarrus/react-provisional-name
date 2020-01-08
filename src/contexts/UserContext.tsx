import React from "react";
import { User } from "../types";

export default React.createContext({
  user: undefined,
  setUser: (_user: User | undefined) => {}
});
