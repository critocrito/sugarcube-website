import "../styles.css";

import React from "react";
import {graphql} from "gatsby";
import {MDXRenderer} from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";

import LayoutSimple from "../components/LayoutSimple";
import CodeBlock from "../components/CodeBlock";

const components = {
  pre: props => <div {...props} />,
  code: props => <CodeBlock {...props} />
}

const TemplateSimple = ({data: {mdx}}: any) => {
  const {body, frontmatter} = mdx;

  return (
    <LayoutSimple>
      <MDXProvider components={components}>
        <MDXRenderer>{body}</MDXRenderer>
      </MDXProvider>
    </LayoutSimple>
  )
};
export const pageQuery = graphql`
  query SimplePostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
        root
      }
      body
    }
  }
`
export default TemplateSimple;
