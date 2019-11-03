import {Location} from "@reach/router";
import React from "react";

import Footer from "./Footer";
import Header from "./Header";

const Layout = ({children}) => {
  return (
    <div>
      <Location>{({location}) => <Header location={location} />}</Location>
      <div className="mw8 center">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
