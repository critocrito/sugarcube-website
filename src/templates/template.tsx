/* eslint react/jsx-props-no-spreading: off, jsx-a11y/heading-has-content: off, @typescript-eslint/no-unused-vars: off */
import "../styles.css";

import {MDXProvider} from "@mdx-js/react";
import {graphql, PageProps} from "gatsby";
import {MDXRenderer} from "gatsby-plugin-mdx";
import React from "react";

import CodeBlock from "../components/code-block";
import Layout from "../components/layout";
import {Frontmatter} from "../types";

const components = {
  // Headers are rendered with a `position: relative` style attribute. This
  // breaks the mobile sidebar. This fixes the problem.
  h1: ({
    style,
    ...props
  }: React.PropsWithoutRef<JSX.IntrinsicElements["h1"]>) => <h1 {...props} />,
  h2: ({
    style,
    ...props
  }: React.PropsWithoutRef<JSX.IntrinsicElements["h2"]>) => <h2 {...props} />,
  h3: ({
    style,
    ...props
  }: React.PropsWithoutRef<JSX.IntrinsicElements["h3"]>) => <h3 {...props} />,

  pre: (props: React.PropsWithoutRef<JSX.IntrinsicElements["div"]>) => (
    <div {...props} />
  ),
  code: ({
    className,
    children,
    ...props
  }: React.PropsWithoutRef<JSX.IntrinsicElements["div"]>) => {
    const language = className ? className.replace(/language-/, "") : "text";

    return (
      <div {...props}>
        <CodeBlock language={language}>{children}</CodeBlock>
      </div>
    );
  },
};

const PageTemplate = ({
  data: {mdx},
}: PageProps<{mdx: {body: string; frontmatter: Frontmatter}}>) => {
  // This is a workaround described here: https://github.com/gatsbyjs/gatsby/issues/17891#issuecomment-548660698
  // without it the pages renders really crooked when visited on a direct link.
  if (typeof window === "undefined") return <div />;

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
