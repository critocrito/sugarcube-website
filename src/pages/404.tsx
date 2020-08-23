import "../styles.css";

// eslint-disable-next-line import/no-extraneous-dependencies
import {Location} from "@reach/router";
import React from "react";

import Footer from "../components/footer";
import Header from "../components/header";

const FourOFour = () => {
  return (
    <div>
      <div>
        <Location>{({location}) => <Header location={location} />}</Location>
      </div>

      <p>
        Oops, something went wrong. We couldn&apos;t find the site you were
        looking for.
      </p>

      <Footer />
    </div>
  );
};

export default FourOFour;
