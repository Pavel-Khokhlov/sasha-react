import React from "react";
import { observer } from "mobx-react-lite";

import "./ThemeSwitcher.sass";
import { SASHA_THEME, Theme } from "../../styles/themes";
import { useStore } from "../../store";

const ThemeSwitcher = observer(() => {
  const {globalUIStore} = useStore();
  const handleToggleTheme = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (globalUIStore.theme.name === Theme.LightTheme) {
      localStorage.setItem(SASHA_THEME, Theme.DarkTheme);
      globalUIStore.setTheme(Theme.DarkTheme);
    } else {
      localStorage.setItem(SASHA_THEME, Theme.LightTheme);
      globalUIStore.setTheme(Theme.LightTheme);
    }
  };

  const buttonStyle = {
    background: globalUIStore.theme.dangerColor,
  };

  return <button className="switcher" style={buttonStyle} onClick={handleToggleTheme}></button>;
});

export default ThemeSwitcher;
