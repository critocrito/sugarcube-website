import "../styles.css";

import {MDXProvider} from "@mdx-js/react";
import {graphql, PageProps} from "gatsby";
import {MDXRenderer} from "gatsby-plugin-mdx";
import React from "react";

import CodeBlock from "../components/code-block";
import Layout from "../components/layout";
import {Frontmatter} from "../types";

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

const PageTemplate = ({
  data: {mdx},
}: PageProps<{mdx: {body: string; frontmatter: Frontmatter}}>) => {
  const {body, frontmatter} = mdx;

  const next =
    frontmatter.next === undefined
      ? undefined
      : `${frontmatter.root}/${frontmatter.next}`;
  const prev =
    frontmatter.prev === undefined
      ? undefined
      : `${frontmatter.root}/${frontmatter.prev}`;

  return (
    <Layout next={next} prev={prev}>
      <MDXProvider components={components}>
        <MDXRenderer>{body}</MDXRenderer>
      </MDXProvider>
    </Layout>
  );
};
export const pageQuery = graphql`
  query DocsQuery($id: String) {
    mdx(id: {eq: $id}) {
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
`;
export default PageTemplate;
