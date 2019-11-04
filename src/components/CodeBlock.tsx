import React, {useState} from "react";
import {Copy} from "react-feather";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {Light as SyntaxHighlighter} from 'react-syntax-highlighter';
import shell from 'react-syntax-highlighter/dist/esm/languages/hljs/shell';
import json from 'react-syntax-highlighter/dist/esm/languages/hljs/json';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import {nord} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import classNames from "classnames";

SyntaxHighlighter.registerLanguage('shell', shell);
SyntaxHighlighter.registerLanguage('json', json);
SyntaxHighlighter.registerLanguage('javascript', js);

interface CodeBlockProps {
  className: string;
  children: React.ReactNode;
}

const CodeBlock = ({className, children}) => {
  const [isCopied, setIsCopied] = useState(false);
  const language = className.replace(/language-/, '');

  const clickHandler = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 3000);
  };

  const copyLabelStyle = classNames("ttu f7", isCopied ? "visible" : "fade-out");

  return (
    <div className="">
      <div className="flex flex-column">
        <div className="pa1 ba br--top br3 b--negative bg-main ">
          <div className="flex items-center justify-between color-main mr1 ml1 pr2 pl2">
            <span className="pl1 pr1 ttu f6 bg-transparent shadow-0 ba bw1 b--negative">{language}</span>
            <CopyToClipboard text={children} onCopy={clickHandler}>
              <div className="flex items-center">
                <span className={copyLabelStyle}>Copied!</span>
                <button className="shadow-1 bg-transparent ba br2 bw0 ml2">
                  <Copy />
                </button>
              </div>
            </CopyToClipboard>
          </div>
        </div>
        <SyntaxHighlighter className="mt0 mb0 bw0" language={language} style={nord}>
          {children}
        </SyntaxHighlighter>
      </div>
    </div>);
};

export default CodeBlock;
