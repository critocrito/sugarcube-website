import React from "react";

interface SynopsisProps {
  children: React.ReactNode;
}

const Synopsis = ({children}: SynopsisProps) => {
  return <div className="synopsis bg-white pa4 mv4">
    <ul className="list pl3">{children}</ul>
  </div>;
};

export default Synopsis;
