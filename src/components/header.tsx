import c from "classnames";
import {Link} from "gatsby";
import React from "react";

import sugarcubetoolsLogo from "../../content/assets/Logo_sugarcube_tools.svg";
import MenuItem from "./menu-item";

interface HeaderProps {
  location: Location;
}

const Header = ({location}: HeaderProps) => {
  return (
    <header className="flex-ns justify-between-ns mv3-ns ml0-ns mw8-ns center-ns">
      <div className="flex justify-around">
        <Link
          className="hover-bg-transparent ma0 pa0 flex items-center center"
          to="/"
        >
          <img
            alt="Sugarcube tools Logo"
            className="logo"
            src={sugarcubetoolsLogo}
          />
          <h4 className="w-100 w-40-ns ml2 mv0 pv0 nowrap header4">
            Sugarcube Tools
          </h4>
        </Link>
      </div>

      <nav className="ttu flex flex-column items-center fr-ns">
        <ul className="list pl0">
          <MenuItem
            isActive={/^\/sugarcube/.test(location.pathname)}
            menuText="Sugarcube"
            toPath="/sugarcube/about"
          />
          <MenuItem
            isActive={/^\/ncube/.test(location.pathname)}
            menuText="Ncube"
            toPath="/ncube/about"
          />
          <MenuItem
            isActive={/^\/discovery/.test(location.pathname)}
            menuText="Discovery"
            toPath="/discovery/installation"
          />
          <li className="dib mb0-ns pb0">
            <a
              className={c(
                "nowrap ma2 pa2",
                /^\/community/.test(location.pathname) ? "bg-solitude" : false,
              )}
              href="https://users.sugarcubetools.net"
            >
              Community
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
