import React, {Fragment} from "react";
import {Location} from "@reach/router";

import Footer from "./Footer";
import Header from "./Header";

interface LayoutSimpleProps {
  children: React.ReactNode;
}

const LayoutSimple = ({children}: LayoutSimpleProps) => {
  return (
    <div>
      <div className="bb bw1 b--negative">
        <Location>{({location}) => <Header location={location} />}</Location>
      </div>
      <div className="mw8 center pa2">
        <div className="flex">
          <div className="w-100 w-75-ns">
            {children}
          </div>
        </div>
      </div>
      <div className="bg-elevated mt3 h4">
      </div>
      <Footer />
    </div>
  );
};

export default LayoutSimple;
