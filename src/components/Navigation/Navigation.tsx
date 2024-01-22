import React from "react";
import { observer } from "mobx-react-lite";
import { navLink } from "../../data/constants";

import "./Navigation.sass";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import { useStore } from "../../store";

interface NavigationProps {
  location: "_header" | "_modal" | "_footer";
}

const Navigation = observer(({ location }: NavigationProps) => {
  const {globalUIStore} = useStore();
  const navigationClass = `nav ${location}`;
  const navigationLinkClass = `nav ${location} `;

  const linkStyle = {
    color: globalUIStore.theme.textColor,
  };
  return (
    <nav className={navigationClass}>
      {navLink.map((link) => {
        return <p className={navigationLinkClass} style={linkStyle} key={link.title}>{link.title}</p>;
      })}
      <ThemeSwitcher />
    </nav>
  );
});

export default Navigation;
