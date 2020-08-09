import {Link} from "gatsby";
import React from "react";

import sugarcubetoolsLogo from "../../content/assets/Logo_sugarcube_tools.svg";
import MenuItem from "./menu-item";

interface HeaderProps {
  location: Location;
}

const Header = ({location}: HeaderProps) => {
  return (
    <header className="flex-ns justify-between mw8 center">
      <div className="flex ml4">
        <img
          alt="Sugarcube tools Logo"
          className="logo"
          src={sugarcubetoolsLogo}
        />
        <h4 className="w-100 w-40-ns header4">
          <Link className="nowrap ma2 hover-bg-transparent" to="/">
            Sugarcube Tools
          </Link>
        </h4>
      </div>
      <nav className="ttu flex flex-column items-center justify-around fr">
        <ul className="list pl0">
          <MenuItem
            isActive={/^\/sugarcube/.test(location.pathname)}
            menuText="Sugarcube"
            toPath="/sugarcube"
          />
          <MenuItem
            isActive={/^\/ncube/.test(location.pathname)}
            menuText="Ncube"
            toPath="/ncube"
          />
          <MenuItem
            isActive={/^\/discovery/.test(location.pathname)}
            menuText="Discovery"
            toPath="/discovery"
          />
          <MenuItem
            isActive={/^\/community/.test(location.pathname)}
            menuText="Community"
            toPath="/community"
          />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
