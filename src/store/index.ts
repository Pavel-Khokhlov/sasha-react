import { createContext, useContext } from "react";
import { GlobalUIStore } from "./globalUI";
// import { SettingsStore } from './settings';

export class RootStore {
  globalUIStore: GlobalUIStore;
  // settingsStore: SettingsStore;

  constructor() {
    this.globalUIStore = new GlobalUIStore(this);
    // this.settingsStore = new SettingsStore(this);
  }
}

const rootStore = new RootStore();
const RootStoreContext = createContext(rootStore);
export const useStore = () => useContext(RootStoreContext);
