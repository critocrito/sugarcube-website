/* eslint react/jsx-props-no-spreading: off, react/no-array-index-key: off */
import Highlight, {defaultProps, Language} from "prism-react-renderer";
import React from "react";

import CopyButton from "$components/copy-button";

interface CodeBlockProps {
  children: string;
  className?: string;
}

const CustomCodeBlock = ({
  children,
  className = "language-text",
}: CodeBlockProps) => {
  const language = className.replace(/language-/, "") as Language;

  return (
    <Highlight Prism={defaultProps.Prism} code={children} language={language}>
      {({
        className: preClassName,
        style,
        tokens,
        getLineProps,
        getTokenProps,
      }) => (
        <>
          <CopyButton
            className="flex justify-end w-full"
            content={children}
            language={language as string}
          />

          <pre className={preClassName} style={{...style, padding: "20px"}}>
            {tokens
              .filter((line, i) => {
                // Skip last line
                if (
                  line.length === 1 &&
                  line[0].empty &&
                  i === tokens.length - 1
                ) {
                  return false;
                }
                return true;
              })
              .map((line, i) => {
                // Render empty lines
                if (line.length === 1 && line[0].content === "")
                  line[0].content = "\n"; // eslint-disable-line no-param-reassign
                return (
                  <div key={i} {...getLineProps({line, key: i})}>
                    <span className="mr-3 token number">{i + 1}</span>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({token, key})} />
                    ))}
                  </div>
                );
              })}
          </pre>
        </>
      )}
    </Highlight>
  );
};

export default CustomCodeBlock;
