import React from "react";

import "./Button.sass";

interface ButtonProps {
  isOpen?: boolean;
  type?: "button" | "submit" | "reset";
  title?: string;
  menu?: true;
  main?: true;
  border?: true;
  transparent?: true;
  onClick?: () => void;
  disabled?: boolean;
  color?: string;
}

function Button({
  isOpen,
  type,
  title,
  menu,
  main,
  border,
  transparent,
  onClick,
  disabled,
  color,
}: ButtonProps) {
  const defineButtonClass = () => {
    let buttonClassName = "button";
    if (menu && isOpen === false) {
      buttonClassName += ` button__menu`;
    }
    if (menu && isOpen === true) {
      buttonClassName += ` button__menu active`;
    }
    if (main) {
      buttonClassName += ` button__main`;
    }
    if (border) {
      buttonClassName += ` border`;
    }
    if (transparent) {
      buttonClassName += ` transparent`;
    }
    if (disabled) {
      buttonClassName += ` disabled`;
    }
    if (color) {
      
    }
    return buttonClassName;
  };
  return (
    <button
      type={type}
      className={defineButtonClass()}
      onClick={onClick}
      disabled={disabled}
    >
      {menu ? (
        <span className="button__menu_span"></span>
      ) : (
        <span className="button__title">{title}</span>
      )}
    </button>
  );
}

export default Button;
