import {ExclamationIcon, InformationCircleIcon} from "@heroicons/react/solid";
import c from "clsx";
import React from "react";

interface InfoBoxProps {
  kind: "info" | "warn";
  children: React.ReactNode;
}

const InfoBox = ({kind, children}: InfoBoxProps) => {
  const outerClassName = c("p-4 border-l-4", {
    "bg-blue-50 border-blue-400": kind === "info",
    "bg-yellow-50 border-yellow-400": kind === "warn",
  });
  const innerClassName = c("text-sm", {
    "text-blue-700": kind === "info",
    "text-yellow-700": kind === "warn",
  });

  return (
    <div className={outerClassName}>
      <div className="flex">
        <div className="flex-shrink-0 place-self-center">
          {kind === "info" && (
            <InformationCircleIcon
              className="h-5 w-5 text-blue-400"
              aria-hidden="true"
            />
          )}

          {kind === "warn" && (
            <ExclamationIcon
              className="h-5 w-5 text-yellow-400"
              aria-hidden="true"
            />
          )}
        </div>
        <div className="ml-3">
          <div className={innerClassName}>
            <p>{children}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoBox;
