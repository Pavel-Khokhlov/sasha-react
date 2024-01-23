import React from "react";
import { observer } from "mobx-react-lite";

import "./MenuModal.sass";
import { useStore } from "../../store";

import Navigation from "../Navigation/Navigation";

const MenuModal = observer(() => {
  const { globalUIStore } = useStore();

  const menuClass = globalUIStore.isMenuModalShow ? "menu _active" : "menu";
  return (
    <section className={menuClass}>
      <Navigation location="_modal" />
    </section>
  );
});

export default MenuModal;
