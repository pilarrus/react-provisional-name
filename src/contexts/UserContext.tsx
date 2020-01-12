import React from "react";
import { User } from "../types";

export default React.createContext({
  user: {} as User,
  setUser: (_user: User) => {}
});
