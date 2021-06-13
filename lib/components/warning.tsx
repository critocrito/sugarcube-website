import React from "react";

import InfoBox from "$components/info-box";

interface WarningProps {
  children: React.ReactNode;
}

const Warning = ({children}: WarningProps) => {
  return <InfoBox kind="warn">{children}</InfoBox>;
};

export default Warning;
