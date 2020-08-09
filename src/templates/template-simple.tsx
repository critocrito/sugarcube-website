import "../styles.css";

import {MDXProvider} from "@mdx-js/react";
import {graphql, PageProps} from "gatsby";
import {MDXRenderer} from "gatsby-plugin-mdx";
import React from "react";

import CodeBlock from "../components/code-block";
import LayoutSimple from "../components/layout-simple";

const components = {
  pre: (props: React.PropsWithoutRef<JSX.IntrinsicElements["div"]>) => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <div {...props} />
  ),
  code: ({
    className,
    children,
    ...props
  }: React.PropsWithoutRef<JSX.IntrinsicElements["div"]>) => {
    const language = className ? className.replace(/language-/, "") : "text";

    return (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <div {...props}>
        <CodeBlock language={language}>{children}</CodeBlock>
      </div>
    );
  },
};

const TemplateSimple = ({data: {mdx}}: PageProps<{mdx: {body: string}}>) => {
  const {body} = mdx;

  return (
    <LayoutSimple>
      <MDXProvider components={components}>
        <MDXRenderer>{body}</MDXRenderer>
      </MDXProvider>
    </LayoutSimple>
  );
};
export const pageQuery = graphql`
  query SimplePostQuery($id: String) {
    mdx(id: {eq: $id}) {
      id
      frontmatter {
        title
        root
      }
      body
    }
  }
`;
export default TemplateSimple;
