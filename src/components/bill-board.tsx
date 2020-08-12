import {Link} from "gatsby";
import React from "react";

const BillBoard = () => {
  return (
    <div className="flex flex-column justify-around mw8-ns center-ns pl2 pl4-ns">
      <div className="fl">
        <h2 className="w-100 mt0 header2-neg tc tl-ns">
          Data pipelines for human rights.
        </h2>
        <p>
          A collection of tools to support human rights defenders and
          investigative journalists to conduct data based investigations. They
          help to develop compelling stories which expose the misuse of power
          and human rights abuses.
        </p>
      </div>
      <div className="fl flex items-center mt3">
        <Link
          className="btn btn-large btn-billboard mr3 flex flex-column justify-around h3"
          to="/get-in-touch"
        >
          <span>Get in Touch</span>
        </Link>
        <p>
          We would love to hear from you if you are interested in using data for
          your next investigation.
        </p>
      </div>
    </div>
  );
};

export default BillBoard;
