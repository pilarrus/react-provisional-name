import React from "react";
import { Users } from "../types";

export default React.createContext({
  fireData: {} as Users,
  setFireData: (_users: any) => {}
});
