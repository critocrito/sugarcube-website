import React from "react";

import InfoBox from "$components/info-box";

interface NoteProps {
  children: React.ReactNode;
}

const Note = ({children}: NoteProps) => {
  return <InfoBox kind="info">{children}</InfoBox>;
};

export default Note;
