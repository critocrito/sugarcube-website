import {useRouter} from "next/router";
import React from "react";

import MenuItem from "$components/menu-item";

interface MenuProps {
  className?: string;
}

const Menu = ({className}: MenuProps) => {
  const router = useRouter();

  return (
    <nav className={className}>
      <MenuItem
        href="/sugarcube"
        isActive={/^\/sugarcube/.test(router.pathname)}
      >
        Sugarcube
      </MenuItem>

      <MenuItem
        href="/ncube/get-started"
        isActive={/^\/ncube/.test(router.pathname)}
      >
        Ncube
      </MenuItem>

      <MenuItem
        href="/discovery/get-started"
        isActive={/^\/discovery/.test(router.pathname)}
      >
        Discovery
      </MenuItem>

      <MenuItem href="https://users.sugarcubetools.net" isExternal>
        Community
      </MenuItem>
    </nav>
  );
};

export default Menu;
