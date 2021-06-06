import {CheckIcon, ClipboardCopyIcon} from "@heroicons/react/outline";
import c from "clsx";
import React, {useState} from "react";

interface CopyButtonProps {
  language: string;
  content: string;
  className?: string;
}

const CopyButton = ({content, language, className}: CopyButtonProps) => {
  const [isCopied, setIsCopied] = useState(false);

  return (
    <button
      type="button"
      className={c("text-sm focus:outline-none", className)}
      onClick={() => {
        navigator.clipboard.writeText(content);
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1000);
      }}
    >
      <div className="flex items-center">
        <span className="mr-3 uppercase text-sm underline">{language}</span>

        {isCopied ? (
          <>
            <span className="sr-only">Copied!</span>
            <CheckIcon className="h-4 w-4" />
          </>
        ) : (
          <>
            <span className="sr-only">Copy</span>
            <ClipboardCopyIcon className="h-4 w-4" />
          </>
        )}
      </div>
    </button>
  );
};

export default CopyButton;
