import React, {Fragment, useState} from "react";
import {Menu, X} from "react-feather";

import SidebarContent from "./SidebarContent";

interface SidebarMobileProps {
  location: WindowLocation;
}

const SidebarMobile = ({location}: SidebarMobileProps) => {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);

  const clickHandler = () => setSidebarExpanded(!sidebarExpanded);

  const menuButton = (
    <div
      className="shadow-1 ba br-100 b--negative negative pa3 flex flex-column items-center"
      onClick={clickHandler}>
      {sidebarExpanded ? <X /> : <Menu />}
    </div>
  );

  const sidebar = (
    <div className="fixed top-0 left-0 h-100 w-100 bg-main">
      <SidebarContent location={location} />
    </div>
  );

  return (
    <Fragment>
      {sidebarExpanded ? sidebar : ""}
      <div className="fixed right-1 bottom-2">
        {menuButton}
      </div>
    </Fragment>
  );
};

export default SidebarMobile;
