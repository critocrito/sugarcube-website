import "../styles.css";

import React from "react";
import {graphql} from "gatsby";
import {MDXRenderer} from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";

import Layout from "../components/Layout";
import CodeBlock from "../components/CodeBlock";

const components = {
  pre: props => <div {...props} />,
  code: props => <CodeBlock {...props} />
}

const PageTemplate = ({data: {mdx}}: any) => {
  const {body, frontmatter} = mdx;

  const next = frontmatter.next == null
             ? null
             : `${frontmatter.root}/${frontmatter.next}`;
  const prev = frontmatter.prev == null
             ? null
             : `${frontmatter.root}/${frontmatter.prev}`;

  return (
    <Layout next={next} prev={prev}>
      <MDXProvider components={components}>
        <MDXRenderer>{body}</MDXRenderer>
      </MDXProvider>
    </Layout>
  )
};
export const pageQuery = graphql`
  query DocsQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
        root
        prev
        next
      }
      body
    }
  }
`
export default PageTemplate
