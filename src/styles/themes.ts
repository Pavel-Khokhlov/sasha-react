export const SASHA_THEME = "sasha.theme";

export type ThemeName = 'light' | 'dark';

export interface ThemeProps {
  name: ThemeName;
  brandColor: string;
  primaryColor: string;
  secondaryColor: string;
  successColor: string;
  infoColor: string;
  errorColor: string;
  dangerColor: string;
  textColor: string;
  disabledColor: string;
  placeholderColor: string;
  linkColor: string;
  focusColor: string;
  headerColor: string;
}

export enum Theme {
  LightTheme = 'light',
  DarkTheme = 'dark',
}

export const themes = {
  light: {
    name: Theme.LightTheme,
    brandColor: "rgb(0, 0, 0)",
    primaryColor: "rgb(0, 0, 0)",
    secondaryColor: "rgb(255, 255, 255)",
    successColor: "rgb(0, 255, 0)",
    infoColor: "rgb(0, 0, 255)",
    errorColor: "rgb(255, 0, 0)",
    dangerColor: "rgb(255, 0, 0)",
    textColor: "rgb(40, 44, 52)",
    disabledColor: "rgb(128, 128, 128)",
    placeholderColor: "rgb(128, 128, 128)",
    linkColor: "rgb(0, 0, 255)",
    focusColor: "rgb(0, 0, 255)",
    headerColor: "rgb(247, 238, 205)",
  },
  dark: {
    name: Theme.DarkTheme,
    brandColor: "rgb(0, 0, 0)",
    primaryColor: "rgb(0, 0, 0)",
    secondaryColor: "rgb(255, 255, 255)",
    successColor: "rgb(0, 255, 0)",
    infoColor: "rgb(0, 0, 255)",
    errorColor: "rgb(255, 0, 0)",
    dangerColor: "rgb(255, 100, 0)",
    textColor: "rgb(247, 238, 205)",
    disabledColor: "rgb(128, 128, 128)",
    placeholderColor: "rgb(128, 128, 128)",
    linkColor: "rgb(0, 0, 255)",
    focusColor: "rgb(0, 0, 255)",
    headerColor: "rgb(40, 44, 52)",
  },
};
