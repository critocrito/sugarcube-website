import {Link} from "gatsby";
import React from "react";

import MenuItem from "./MenuItem";

interface HeaderProps {
  location: Location;
}

const Header = ({location}: HeaderProps) => {
  return (
    <header className="flex-ns justify-between items-center mw8 center">
      <h1 className="ttu w-100 w-40-ns pa2">
        <Link className="nowrap ma2 b hover-bg-transparent" to="/">
          SugarCube Tools
        </Link>
      </h1>
      <nav className="w-100 ttu w-60-ns">
        <ul className="list pl0 fr-ns">
          <MenuItem
            isActive={/\/sugarcube/.test(location.pathname)}
            menuText="About"
            toPath="/sugarcube"
          />
          <MenuItem
            isActive={/\/docs/.test(location.pathname)}
            menuText="Guides"
            toPath="/docs/data-format"
          />
          <MenuItem
            isActive={/\/plugins/.test(location.pathname) || /\/instruments/.test(location.pathname)}
            menuText="Plugins & Instruments"
            toPath="/plugins-instruments"
          />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
