import React from "react";

import FeatureSection from "$components/feature-section";
import LandingHeader from "$components/landing-header";
import LogoDiscovery from "$components/logo-discovery";
import LogoNcube from "$components/logo-ncube";
import LogoSugarcube from "$components/logo-sugarcube";

const Page = () => {
  return (
    <>
      <LandingHeader />

      <main className="desktop:container desktop:mx-auto flex flex-col">
        <FeatureSection
          install="/sugarcube/installation"
          readmore="/sugarcube/about"
        >
          <LogoSugarcube />
          <p>
            Sugarcube preserves and monitors a wide variety of online sources
            (e.g. websites, Twitter tweets, Youtube videos) and makes local
            copies of those sources. Once a data process is defined it can
            easily be automated.
          </p>
        </FeatureSection>

        <FeatureSection install="/ncube/installation" readmore="/ncube/about">
          <LogoNcube />
          <p>
            Ncube is a graphical desktop and cross-platform application that
            turns quantitative data into qualitative data. All the features of
            Ncube have one purpose: produce a set of verified data. Ncube&apos;s
            features around the preservation, exploration and verification of
            data all serve this single goal.
          </p>
        </FeatureSection>

        <FeatureSection install="/discovery/installation">
          <LogoDiscovery />
          <p>
            Arguably browsers are one of the most important research tools that
            investigators use every day. The Discovery browser extension
            accompanies Ncube for source discovery. While browsing the web
            investigators can send URL&apos;s of interest to Ncube with the
            click of one button without having to leave the browser environment.
          </p>
        </FeatureSection>
      </main>
    </>
  );
};

export default Page;
