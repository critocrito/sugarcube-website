import "../styles.css";

import React from "react";
import {Location} from "@reach/router";

import IntroCard from "../components/IntroCard";
import Footer from "../components/Footer";
import Header from "../components/Header";

const sugarCubeDescription = `
SugarCube is a tool to preserve and monitor data.
`;

const nCubeDescription = `
N-Cube is a set of components to build custom data interfaces for investigators that use SugarCube.
`;

const browserExtensionDescription = `
Imrpove the discovery process of an investigation using this browser extension.
`;

const Index = () => {
  return (
    <div>
      <Location>{({location}) => <Header className="mw8 center" location={location} />}</Location>
      <section className="cf ph2-ns pt5 pb5 w-100 flex flex-column items-center justify-around negative">
        <div className="w-80-ns tc center">
          <h1 className="w-100 center">Data pipelines for human rights.</h1>
        </div>
        <p>Helping human rights investigators work with data.</p>
      </section>
      <section className="w-100 flex-ns justify-between-ns mt2 mw8 center">
        <div className="w-third-ns">
          <IntroCard
            title="SugarCube"
            description={sugarCubeDescription}
            path="/sugarcube"
          />
        </div>
        <div className="w-third-ns">
          <IntroCard title="N-Cube" description={nCubeDescription} />
        </div>
        <div className="w-third-ns">
          <IntroCard
            title="Browser Extension"
            description={browserExtensionDescription}
          />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Index;
