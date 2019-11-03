import React from "react";
import {Link} from "gatsby";
import classname from "classname";

interface Props {
  isActive: boolean;
  menuText: string;
  toPath: string;
}

const MenuItem = ({isActive, menuText, toPath}) => {
  const style = classname(
    "nowrap ma2 pa2 ma3-ns pa3-ns b",
    isActive ? "bg-elevated" : false
  );

  return (
    <li className="dib">
      <Link className={style} to={toPath} >{menuText}</Link>
    </li>
  )
};

export default MenuItem;
