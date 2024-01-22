import { makeAutoObservable } from "mobx";
import { RootStore } from "./index";
import { SASHA_THEME, Theme, ThemeProps, themes } from "../styles/themes";

export type AppThemeName = "light" | "dark";

export class GlobalUIStore {
  rootStore: RootStore;

  screenLoading = false;
  settingsLoading = false;
  isFeedbackModalShown = false;
  scrollToPosition = 0;
  isMenuModalShow = false;
  theme: ThemeProps = this.setLocalTheme();

  constructor(rootStore: RootStore) {
    makeAutoObservable(this, { rootStore: false });
    this.rootStore = rootStore;
  }

  get loaderOverlayActive() {
    return this.screenLoading || this.settingsLoading;
  }

  setLocalTheme() {
    const root = document.querySelector("#root");
    const value = localStorage.getItem(SASHA_THEME);
    if (!value) {
      localStorage.setItem(SASHA_THEME, Theme.LightTheme);
      root?.setAttribute('data-theme', Theme.LightTheme)
      return themes[Theme.LightTheme];
    } else {
      root?.setAttribute('data-theme', value === "light" ? Theme.LightTheme : Theme.DarkTheme)
      return themes[value === "light" ? Theme.LightTheme : Theme.DarkTheme];
    }
  }

  setScreenLoading(value: boolean) {
    this.screenLoading = value;
  }

  setSettingsLoading(value: boolean) {
    this.settingsLoading = value;
  }

  setIsMenuModalShow(value: boolean) {
    this.isMenuModalShow = value;
  }

  setTheme(value: AppThemeName) {
    this.theme = themes[value];
  }
}
