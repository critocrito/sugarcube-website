import "../styles.css";

// eslint-disable-next-line import/no-extraneous-dependencies
import {Location} from "@reach/router";
import React from "react";

import discoveryLogo from "../../content/assets/Logo_Discovery.svg";
import ncubeLogo from "../../content/assets/Logo_Ncube.svg";
import sugarcubeLogo from "../../content/assets/Logo_Sugarcube.svg";
import BillBoard from "../components/bill-board";
import Card from "../components/card";
import Footer from "../components/footer";
import Header from "../components/header";

const Index = () => {
  return (
    <div>
      <div>
        <Location>{({location}) => <Header location={location} />}</Location>
      </div>

      <section className="ph2-ns pv5-ns pv3 negative">
        <BillBoard />
      </section>

      <section className="mw8-ns ma4-ns ma2 center-ns pa1">
        <Card
          logo={sugarcubeLogo}
          title="Sugarcube"
          installLink="/sugarcube/installation"
          readmoreLink="/sugarcube"
        >
          <p className="w-100">
            Sugarcube preserves and monitors a wide variety of online sources
            (e.g. websites, Twitter tweets, Youtube videos) and makes local
            copies of those sources. Once a data process is defined it can
            easily be automated.
          </p>
        </Card>
      </section>

      <section className="mw8-ns ma4-ns ma2 center-ns pa1">
        <Card
          logo={ncubeLogo}
          title="Ncube"
          installLink="/ncube/installation"
          readmoreLink="/ncube"
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
      </section>

      <section className="mw8-ns ma4-ns ma2 center-ns pa1">
        <Card
          logo={discoveryLogo}
          title="Discovery Extension"
          installLink="/discovery/installation"
        >
          <p className="w-100">
            Arguably browsers are one of the most important research tools that
            investigators use every day. The Discovery browser extension
            accompanies Ncube for source discovery. While browsing the web
            investigators can send URL&apos;s of interest to Ncube with the
            click of one button without having to leave the browser environment.
          </p>
        </Card>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
