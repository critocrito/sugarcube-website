import "../../styles.css";

// eslint-disable-next-line import/no-extraneous-dependencies
import {Location} from "@reach/router";
import React from "react";

import sugarcubeLogo from "../../../content/assets/Logo_Sugarcube.svg";
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
          logo={sugarcubeLogo}
          title="Sugarcube"
          installLink="/sugarcube/installation"
          readmoreLink="/sugarcube/about"
        >
          <p className="w-100">
            Sugarcube preserves and monitors a wide variety of online sources
            (e.g. websites, Twitter tweets, Youtube videos) and makes local
            copies of those sources. Once a data process is defined it can
            easily be automated.
          </p>
        </Card>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
