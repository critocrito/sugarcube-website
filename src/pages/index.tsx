import "../styles.css";

import React, {useState} from "react";
import {Location} from "@reach/router";
import {GitHub} from "react-feather";

import IntroCard from "../components/IntroCard";
import Footer from "../components/Footer";
import Header from "../components/Header";
import BillBoard from "../components/BillBoard";
import Complementary from "../components/Complementary";
import Meet from "../components/Meet";

const Index = () => {
  const [details, setDetails] = useState("sugarcube");

  const clickHandler = (name: string) => {
    setDetails(name);
  };

  return (
    <div className="">
      <div className="bb bw1 b--negative">
        <Location>{({location}) => <Header location={location} />}</Location>
      </div>
      <section className="ph2-ns pt5 pb5 bb bw1 b--negative negative">
        <BillBoard />
      </section>
      <section className="mt3-ns mw8 center pa1">
        <Complementary active={details} handler={clickHandler} />
      </section>
      <section className="mw8 center pa1">
        <Meet active={details} />
      </section>
      <div className="bg-elevated mt3 h4" />
      <Footer />
    </div>
  );
};

export default Index;
