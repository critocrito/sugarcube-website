import React from "react";
import { Link } from "gatsby";
import classNames from "classnames";

interface MenuItemProps {
  isActive: boolean;
  menuText: string;
  toPath: string;
}

const MenuItem = ({ isActive, menuText, toPath }: MenuItem) => {
  const style = classNames("nowrap ma2 pa2", isActive ? "bg-solitude" : false);

  return (
    <li className="dib mb0">
      <Link className={style} to={toPath}>
        {menuText}
      </Link>
    </li>
  );
};

export default MenuItem;
