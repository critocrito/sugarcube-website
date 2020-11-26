import c from "classnames";
import React from "react";

import bmbfLogo from "../../content/assets/BMBF.jpg";
import prototypeLogo from "../../content/assets/PrototypeFund-P-Logo.png";

interface NcubeSponsorsProps {
  className?: string;
}

const NcubeSponsors = ({className}: NcubeSponsorsProps) => {
  return (
    <div className={c("flex-ns flex-column-ns", className)}>
      <p>Ncube was developed with the support of:</p>

      <div className="flex-ns items-center-ns">
        <img src={bmbfLogo} alt="Bundesministerium für Bildung und Forschung" />

        <img src={prototypeLogo} className="ml5" alt="Prototype Fund" />
      </div>
    </div>
  );
};

export default NcubeSponsors;
