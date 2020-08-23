import "../../styles.css";

// eslint-disable-next-line import/no-extraneous-dependencies
import {Location} from "@reach/router";
import React from "react";

import discoveryLogo from "../../../content/assets/Logo_Discovery.svg";
import Card from "../../components/card";
import Footer from "../../components/footer";
import Header from "../../components/header";

const Index = () => {
  return (
    <div>
      <div>
        <Location>{({location}) => <Header location={location} />}</Location>
      </div>

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
