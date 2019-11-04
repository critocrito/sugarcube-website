import React from "react";

interface SynopsisProps {
  children: React.ReactNode;
}

const Synopsis = ({children}: SynopsisProps) => {
  return <div className="synopsis fw6">
    <ul className="list pl0">{children}</ul>
  </div>;
};

export default Synopsis;
