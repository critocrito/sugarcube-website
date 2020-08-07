import React from "react";
import {Link} from "gatsby";
import classNames from "classnames";

interface MenuItemProps {
  isActive: boolean;
  menuText: string;
  toPath: string;
}

const MenuItem = ({isActive, menuText, toPath}: MenuItem) => {
  const style = classNames(
    "nowrap ma1 pa1 ma2-ns pa3-ns ",
    isActive ? "bg-canvas" : false
  );

  return (
    <li className="dib">
      <Link className={style} to={toPath} >{menuText}</Link>
    </li>
  )
};

export default MenuItem;
