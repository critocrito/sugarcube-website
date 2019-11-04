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
  return (
    <Layout>
      <MDXProvider components={components}>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </MDXProvider>
    </Layout>
  )
};
export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
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
export default PageTemplate
