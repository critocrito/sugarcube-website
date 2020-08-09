import React from "react";

interface WarningProps {
  children: React.ReactNode;
}

const Warning = ({children}: WarningProps) => {
  return (
    <div className="mt2">
      <div className="flex flex-column">
        <div className="pa1 ba br--top br3 b--warning bg-warning">
          <div className="flex items-center justify-between color-main mr1 ml1 pr2 pl2">
            <span className="pl1 pr1 ttu f6 bg-transparent shadow-0 ba bw1 b--warning b white">
              Warning
            </span>
          </div>
        </div>
        <div className="bl br bb b--warning pl2 pr2 warning">
          <ul className="list pl0">{children}</ul>
        </div>
      </div>
    </div>
  );
};

export default Warning;
