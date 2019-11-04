import React, {Fragment} from "react";
import {Location} from "@reach/router";
import Media from "react-media";

import Footer from "./Footer";
import Header from "./Header";
import SidebarContent from "./SidebarContent";
import SidebarMobile from "./SidebarMobile";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({children}: LayoutProps) => {
  return (
    <div>
      <Location>{({location}) => <Header location={location} />}</Location>
      <div className="mw8 center pa2">
        <div className="flex">
          <div className="w-100 w-75-ns">
            {children}
          </div>
          <Location>{({location}) => <Media queries={{
            small: "(max-width: 30rem)",
            big: "(min-width: 30rem)",
          }}>
            {matches => (
              <Fragment>
                {matches.small && <div>
                  <SidebarMobile location={location} />
                </div>}
                {matches.big && (
                  <div className="w-25 bl b--negative ml4 sidebar h-100">
                    <SidebarContent location={location} />
                  </div>
                )}
              </Fragment>
            )}
          </Media>}
          </Location>
        </div>
        </div>
        <Footer />
      </div>
  );
};

export default Layout;
