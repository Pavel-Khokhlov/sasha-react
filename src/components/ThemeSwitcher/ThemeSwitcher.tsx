import React from "react";
import { observer } from "mobx-react-lite";
import {ReactComponent as MoonLogo} from "../../assets/logos/moon.svg";
import {ReactComponent as SunLogo} from "../../assets/logos/sun.svg";

import { SASHA_THEME, Theme } from "../../styles/themes";
import { useStore } from "../../store";

import "./ThemeSwitcher.sass";

const ThemeSwitcher = observer(() => {
  const { globalUIStore } = useStore();
  const root = document.querySelector("#root");
  const handleToggleTheme = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (globalUIStore.theme.name === Theme.LightTheme) {
      localStorage.setItem(SASHA_THEME, Theme.DarkTheme);
      globalUIStore.setTheme(Theme.DarkTheme);
      root?.setAttribute('data-theme', Theme.DarkTheme)
    } else {
      localStorage.setItem(SASHA_THEME, Theme.LightTheme);
      globalUIStore.setTheme(Theme.LightTheme);
      root?.setAttribute('data-theme', Theme.LightTheme)
    }
  };

  const ThemeLogo = globalUIStore.theme.name === 'light' ? MoonLogo : SunLogo;

  return (
    <button
      className="switcher"
      onClick={handleToggleTheme}
    >
      <ThemeLogo className='switcher__icon' />
    </button>
  );
});

export default ThemeSwitcher;
