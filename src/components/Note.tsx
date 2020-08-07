import React from "react";

interface NoteProps {
  children: React.ReactNode;
}

const Note = ({children}: NoteProps) => {
  return <div className="mt2">
    <div className="flex flex-column">
      <div className="pa1 ba br--top br3 b--notification bg-notify">
        <div className="flex items-center justify-between color-main mr1 ml1 pr2 pl2">
          <span className="pl1 pr1 ttu f6 bg-transparent shadow-0 ba bw1 b--notification b ">Note</span>
        </div>
      </div>
      <div className="bl br bb b--notification pl2 pr2">
        <ul className="list pl0">{children}</ul>
      </div>
    </div>
  </div>;
};

export default Note;
