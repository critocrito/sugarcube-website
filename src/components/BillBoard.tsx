import React from "react";
import {Link} from "gatsby";

const BillBoard = () => {
  return (
    <div className="flex flex-column justify-around mw8 center pl4">
      <div className="fl">
        <h2 className="w-100 mt0 header2-neg">Data pipelines for human rights.</h2>
      </div>
      <div className="fl  flex">
        <Link className="btn btn-large btn-bittersweet mr3" to="/docs/installation">
          Get Started
        </Link>
        <Link className="btn btn-large btn-out" to="/docs/tutorial">
          Tutorial
        </Link>
      </div>
    </div>
  );
};

export default BillBoard;
