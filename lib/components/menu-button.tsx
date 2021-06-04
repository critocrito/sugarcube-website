import {MenuIcon, XIcon} from "@heroicons/react/outline";
import React from "react";

interface MenuButtonProps {
  isOpen?: boolean;
}

const MenuButton = ({isOpen = false}: MenuButtonProps) => {
  return (
    <>
      <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
      {isOpen ? (
        <XIcon className="h-6 w-6 text-sapphire" aria-hidden="true" />
      ) : (
        <MenuIcon className="h-6 w-6 text-sapphire" aria-hidden="true" />
      )}
    </>
  );
};

export default MenuButton;
