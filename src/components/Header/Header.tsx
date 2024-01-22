import React from "react";
import { observer } from "mobx-react-lite";
import PsiLogo from "../../assets/logos/sd.png";
import Button from "../Button/Button";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { useStore } from "../../store";

import "./Header.sass";
import Navigation from "../Navigation/Navigation";

const Header = observer(() => {
  const { globalUIStore } = useStore();
  const { width } = useWindowDimensions();

  const handleMenuClick = () => {
    globalUIStore.setIsMenuModalShow(!globalUIStore.isMenuModalShow);
  };

  const logoSize = width >= 420 ? "40px" : `${width * 0.08}px`;

  const logoStyle = {
    width: logoSize,
    height: logoSize,
  };

  return (
    <header className="header">
      <img
        src={PsiLogo}
        alt="логотип саша душа"
        style={logoStyle}
        className="header__logo"
      />
      <p className="header__name">
        Александра Родионова
      </p>
      <Navigation location="_header" />
      <Button
        isOpen={globalUIStore.isMenuModalShow}
        type="button"
        menu
        onClick={handleMenuClick}
      />
    </header>
  );
});

export default Header;
