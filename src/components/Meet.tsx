import React, {Fragment, useState} from "react";
import MeetSugarcube from "./MeetSugarcube";
import sugarcubeLogo from "../../content/assets/sugarcube-logo.png";
import ncubeLogo from "../../content/assets/ncube-logo.png";
import browserLogo from "../../content/assets/browser-extension-logo.png";

interface MeetProps {
  active: string;
}

const ncubeText = "Coming Soon";
const browserText = "Coming Soon";

const Meet = ({active}: MeetProps) => {
  let logo;
  let title;
  let text;

  switch (active) {
    case "sugarcube": {
      logo = sugarcubeLogo;
      title = "Sugarcube";
      text = <MeetSugarcube />;
      break;
    }
    case "ncube": {
      logo = ncubeLogo;
      title = "N-Cube";
      text = ncubeText;
      break;
    }
    case "browser": {
      logo = browserLogo;
      title = "the Browser Extension";
      text = browserText;
      break;
    }
    default: {
      throw new Error("Invalid meet.");
    }
  }
  return (
    <Fragment>
      <h2 className="flex items-center">
        <img className="mr3" src={logo} height="80" width="80" />
        Meet {title}
      </h2>
      {text}
    </Fragment>
  );
};

export default Meet;
