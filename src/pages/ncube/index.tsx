import "../../styles.css";

// eslint-disable-next-line import/no-extraneous-dependencies
import {Location} from "@reach/router";
import React from "react";

import ncubeLogo from "../../../content/assets/Logo_Ncube.svg";
import Card from "../../components/card";
import Footer from "../../components/footer";
import Header from "../../components/header";
import NcubeSponsors from "../../components/ncube-sponsors";

const Index = () => {
  return (
    <div>
      <div>
        <Location>{({location}) => <Header location={location} />}</Location>
      </div>

      <section className="mw8-ns ma4-ns ma2 center-ns pa1">
        <Card
          logo={ncubeLogo}
          title="Ncube"
          installLink="/ncube/installation"
          readmoreLink="/ncube/about"
          isBeta
        >
          <p className="w-100">
            Ncube is a graphical desktop and cross-platform application that
            turns quantitative data into qualitative data. All the features of
            Ncube have one purpose: produce a set of verified data. Ncube&apos;s
            features around the preservation, exploration and verification of
            data all serve this single goal.
          </p>
        </Card>

        <NcubeSponsors className="mt4" />
      </section>

      <Footer />
    </div>
  );
};

export default Index;
