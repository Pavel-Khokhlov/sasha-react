import React from "react";
import { observer } from "mobx-react-lite";
import { navLink } from "../../data/constants";

import "./Navigation.sass";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

interface NavigationProps {
  location: "_header" | "_modal" | "_footer";
}

const Navigation = observer(({ location }: NavigationProps) => {
  const navigationClass = `nav ${location}`;
  const navigationLinkClass = `nav ${location} `;

  return (
    <nav className={navigationClass}>
      {navLink.map((link) => {
        return (
          <p className={navigationLinkClass} key={link.title}>
            {link.title}
          </p>
        );
      })}
      <ThemeSwitcher />
    </nav>
  );
});

export default Navigation;
