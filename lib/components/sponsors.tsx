/* eslint @typescript-eslint/no-var-requires: off, import/no-dynamic-require: off, global-require: off, unicorn/prefer-module: off */
import React from "react";

const Sponsors = () => {
  const bmbf = require(`../../assets/images/bmbf.jpg`);
  const prototypeFund = require(`../../assets/images/prototypefund-p-logo.png`);

  return (
    <div>
      <p>Ncube was developed with the support of:</p>

      <div className="tablet:flex tablet:items-start">
        <img
          className="mobile:max-w-sm"
          src={bmbf}
          alt="Bundesministerium für Bildung und Forschung"
        />

        <img
          className="ml-10 tablet:max-w-sm"
          src={prototypeFund}
          alt="Prototype Fund"
        />
      </div>
    </div>
  );
};

export default Sponsors;
