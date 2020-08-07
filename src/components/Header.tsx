import {Link} from "gatsby";
import React from "react";
import sugarcubetoolsLogo from "../../content/assets/Logo_sugarcube_tools.svg";

import MenuItem from "./MenuItem";

interface HeaderProps {
  location: Location;
}



const Header = ({location}: HeaderProps) => {
  return (
    <header className="flex-ns justify-between items-center mw8 center">
      <div className="flex ml4">
      <img alt="Sugarcube tools Logo" className="logo" src={sugarcubetoolsLogo} />
      <p className=" w-100 w-40-ns header4">
        <Link className="nowrap ma2 hover-bg-transparent" to="/">
          Sugarcube Tools
        </Link>
      </p></div>
      <nav className="w-100 ttu w-60-ns">
        <ul className="list pl0 fr-ns">
          <MenuItem
            isActive={/^\/about/.test(location.pathname)}
            menuText="About"
            toPath="/about/sugarcube"
          />
          <MenuItem
            isActive={/^\/docs/.test(location.pathname)}
            menuText="Guides"
            toPath="/docs/data-format"
          />
          <MenuItem
            isActive={/^\/plugins/.test(location.pathname) || /\/instruments/.test(location.pathname)}
            menuText="Plugins & Instruments"
            toPath="/plugins-instruments"
          />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
