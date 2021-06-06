import React from "react";

interface SynopsisProps {
  children: React.ReactNode;
}

const Synopsis = ({children}: SynopsisProps) => {
  return (
    <ul className="list-none list-inside font-light bg-white px-2 tablet:px-6 py-4 tablet:py-8">
      {children}
    </ul>
  );
};

export default Synopsis;
