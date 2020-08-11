import classNames from "classnames";
import React, {useState} from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import {Copy} from "react-feather";
import Media from "react-media";
import {Light as SyntaxHighlighter} from "react-syntax-highlighter";
import {dark} from "react-syntax-highlighter/dist/cjs/styles/hljs";

export interface CodeBlockProps {
  language: string;
  children: React.ReactNode;
}

const CodeBlock = ({language, children}: CodeBlockProps) => {
  const [isCopied, setIsCopied] = useState(false);

  const clickHandler = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 3000);
  };

  const copyLabelStyle = classNames(
    "ttu f7",
    isCopied ? "visible" : "fade-out",
  );

  return (
    <div className="flex flex-column">
      <div className="pa1 ba br--top br3 b--negative bg-canvas bg-solitude ">
        <div className="flex items-center justify-between color-main mr1 ml1 pr2 pl2">
          <span className="pl1 pr1 ttu f6 bg-transparent shadow-0 ba bw1 b--solitude b">
            {language}
          </span>
          <Media
            queries={{
              big: "(min-width: 30rem)",
            }}
          >
            {(matches) => (
              <>
                {matches.big && (
                  <CopyToClipboard
                    text={children as string}
                    onCopy={clickHandler}
                  >
                    <div className="flex items-center">
                      <span className={copyLabelStyle}>Copied!</span>
                      <button className="bg-transparent ba br2 bw0 ml2">
                        <Copy />
                      </button>
                    </div>
                  </CopyToClipboard>
                )}
              </>
            )}
          </Media>
        </div>
      </div>

      <SyntaxHighlighter
        className="mt0 mb0 bw0 f6-ns f7"
        language={language}
        style={dark}
        showLineNumbers={language === "js"}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
