import React from "react";
import c from "classnames";

interface ComplementaryProps {
  active: string;
  handler: (key: string) => void;
}

const Complementary = ({active, handler}: ComplementaryProps) => {
  const navItemClass = "link dim pa3 ml5-ns mr5-ns h3 b w5 tc ba bw1 br3 nowrap f5-ns f6";

  return (
    <nav className="flex pa3-ns pa1">
      <a
        className={c(navItemClass, active === "sugarcube" ? "bg-elevated" : "" )}
        onClick={() => handler("sugarcube")}
      >
        Sugarcube
      </a>
      <a
        className={c(navItemClass, active === "ncube" ? "bg-elevated" : "" )}
        onClick={() => handler("ncube")}
      >
        N-Cube
      </a>
      <a
        className={c(navItemClass, active === "browser" ? "bg-elevated" : "" )}
        onClick={() => handler("browser")}
      >
        Browser Extension
      </a>
    </nav>
  )
};

export default Complementary;
