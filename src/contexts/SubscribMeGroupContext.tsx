import React from "react";
import { Group } from '../types/index';

export default React.createContext({
  subscribMe: false as boolean,
  group: {} as Group,
  setSubscribMe: (_subscribMe: boolean) => {},
  setGroup: (_group: Group) => {}
});