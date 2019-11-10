import React, {Fragment} from "react";
import {Activity, GitPullRequest, Zap} from "react-feather";

const MeetSugarcube = () => {
  return (
    <Fragment>
      <p>Sugarcube is a tool designed to suport journalists, non-profits, academic researchers, human rights organisations and others with investigations using online, publicly-available sources (e.g.tweets, videos, public databases, websites, online databases).
      </p>
      <ul className="list pl0 ml3-ns mt4">
        <li className="flex">
          <span className="w-20 w-10-ns">
            <Activity size={60} />
          </span>
          <span className="w-80">
            <h4 className="mt0">Preserve data from many sources</h4>
            <p>
            </p>
          </span>
        </li>
        <li className="flex">
          <span className="w-20 w-10-ns">
            <GitPullRequest size={60} />
          </span>
          <span className="w-80">
            <h4 className="mt0">Re-assemble to fit your investigation</h4>
          </span>
        </li>
        <li className="flex">
          <span className="w-20 w-10-ns">
            <Zap size={60} />
          </span>
          <span className="w-80">
            <h4 className="mt0">Easily extendible with custom plugins</h4>
          </span>
        </li>
      </ul>
    </Fragment>
  );
};

export default MeetSugarcube;
