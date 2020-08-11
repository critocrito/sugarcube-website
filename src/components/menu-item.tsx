import classNames from "classnames";
import {Link} from "gatsby";
import React from "react";

interface MenuItemProps {
  isActive: boolean;
  menuText: string;
  toPath: string;
}

const MenuItem = ({isActive, menuText, toPath}: MenuItemProps) => {
  const style = classNames("nowrap ma2 pa2", isActive ? "bg-solitude" : false);

  return (
    <li className="dib mb0-ns pb0">
      <Link className={style} to={toPath}>
        {menuText}
      </Link>
    </li>
  );
};

export default MenuItem;
