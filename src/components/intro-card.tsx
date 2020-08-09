import {Link} from "gatsby";
import React from "react";

interface IntroCardProps {
  title: string;
  description: string;
  path?: string;
}

const IntroCard = ({title, description, path}: IntroCardProps) => {
  return (
    <div className="flex flex-column justify-around ma3-ns mh4-ns pa2-ns">
      <h3 className="center">{title}</h3>
      <p className="i">{description}</p>
      <p className="i fr mb2 mt0">
        {path === undefined ? (
          "Coming Soon."
        ) : (
          <Link to={path}>Find out more ...</Link>
        )}
      </p>
    </div>
  );
};

export default IntroCard;
