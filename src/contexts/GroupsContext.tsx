import React from "react";
import { Groups } from "../types";

export default React.createContext({
  groups: [] as Groups,
  setGroups: (_groups: Groups) => {}
});