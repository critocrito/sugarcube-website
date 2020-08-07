import React from "react";
import sugarcubeLogo from "../../content/assets/Logo_Sugarcube.svg";
import ncubeLogo from "../../content/assets/Logo_Ncube.svg";
import discoveryLogo from "../../content/assets/Logo_Discovery.svg";

interface CardProps {
  children: React.ReactNode;
}

const Card = ({children}: CardProps) => {
  return <div className="">
    <div className="card flex flex-column">
      <div className="pa1 ba br3 ">
        <div className="flex items-center justify-between color-main mr1 ml1 pr2 pl2">
          <img alt="Sugarcube tools Logo" src={sugarcubeLogo} />
          <div className="btn btn-regular btn-bittersweet mr3" to="/docs/installation">Install</div>
        </div>
        <div className="flex items-center justify-between color-main mr1 ml1 pr2 pl2">
          <p className="w-80">Sugarcube is a tool designed to suport journalists, non-profits, academic researchers, human rights organisations and others with investigations using online, publicly-available sources (e.g.tweets, videos, public databases, websites, online databases).</p>
        </div>
      </div>
    </div>

    <div className="card flex flex-column">
      <div className="pa1 ba br3 ">
        <div className="flex items-center justify-between color-main mr1 ml1 pr2 pl2">
          <img alt="Sugarcube tools Logo" src="../../content/assets/logo_sugarcube_tools.svg" />
          <div className="btn btn-regular btn-bittersweet mr3" to="/docs/installation">Install</div>
        </div>
        <div className="flex items-center justify-between color-main mr1 ml1 pr2 pl2">
          <p className="w-80">Sugarcube is a tool designed to suport journalists, non-profits, academic researchers, human rights organisations and others with investigations using online, publicly-available sources (e.g.tweets, videos, public databases, websites, online databases).</p>
        </div>
      </div>
    </div>
  </div>


  ;
};

export default Card;
