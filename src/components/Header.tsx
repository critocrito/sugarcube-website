import {Link} from "gatsby";
import React from "react";

import MenuItem from "./MenuItem";

interface Props {
  location: Location;
}

const Header = ({location}: Props) => {
  return (
    <header className="flex-ns justify-between items-center mw8 center">
      <h1 className="ttu w-100 w-40-ns pa2">
        <Link className="nowrap ma2 b hover-bg-main" to="/">
          SugarCube Tools
        </Link>
      </h1>
      <nav className="w-100 ttu w-60-ns">
        <ul className="list pl0 fr-ns">
          <MenuItem
            isActive={/^\/get-started/.test(location.pathname)}
            menuText="Get Started"
            toPath="/get-started"
          />
          <MenuItem
            isActive={/^\/guides/.test(location.pathname)}
            menuText="Docs"
            toPath="/guides"
          />
          <MenuItem
            isActive={/^\/plugins/.test(location.pathname)}
            menuText="Plugins"
            toPath="/plugins"
          />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
