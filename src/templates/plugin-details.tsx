import {graphql} from "gatsby";
import React from "react";

import Layout from "../components/Layout";
import PluginsList from "../components/PluginsList";

const PluginDetails = ({data}) => {
  const {markdownRemark} = data;
  const {frontmatter, html} = markdownRemark;
  return (
    <Layout>
      <div className="flex">
        <div className="w-100 w-third-ns">
          <PluginsList />
        </div>
        <div className="w-100 w-60-ns">
          <h1>{frontmatter.title}</h1>
          <ul className="list pl0">
            <li>Version: {frontmatter.version}</li>
            <li>License: {frontmatter.license}</li>
            <li>Author: {frontmatter.author}</li>
            <li>
              <a href={frontmatter.homepage}>Homepage</a>
            </li>
            <li>
              <a href={frontmatter.bugs}>Bugs</a></li>
          </ul>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{__html: html}}
          />
        </div>
      </div>
    </Layout>
  );
};

export default PluginDetails;

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: {path: {eq: $path}}) {
      html
      frontmatter {
        path
        title
        version
        author
        homepage
        bugs
        license
      }
    }
  }
`;
