import React from "react";
import {Link} from "gatsby";

const BillBoard = () => {
  return (
    <div className="flex flex-column justify-around">
      <div className="w-80-ns tc center">
        <h1 className="w-100 center">Data pipelines for human rights.</h1>
      </div>
      <div className="center w30 flex">
        <Link className="ma2 pa2 ttu ba br3 link-negative" to="/docs/installation">
          Get Started
        </Link>
        <Link className="ma2 pa2 ttu ba br3 link-negative" to="/docs/tutorial">
          Tutorial
        </Link>
      </div>
    </div>
  );
};

export default BillBoard;
