// eslint-disable-next-line import/no-extraneous-dependencies
import {Location} from "@reach/router";
import React from "react";

import Footer from "./footer";
import Header from "./header";

interface LayoutSimpleProps {
  children: React.ReactNode;
}

const LayoutSimple = ({children}: LayoutSimpleProps) => {
  return (
    <div>
      <div className="bb bw1 b--negative">
        <Location>{({location}) => <Header location={location} />}</Location>
      </div>
      <div className="mw8-ns center-ns pa2">
        <div className="w-75-ns">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default LayoutSimple;
