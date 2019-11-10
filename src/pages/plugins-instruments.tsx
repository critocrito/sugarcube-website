import "../styles.css";

import React from "react";
import {Link, useStaticQuery, graphql} from "gatsby";

import LayoutSimple from "../components/LayoutSimple";
import PluginsList from "../components/PluginsList";

const Plugins = () => {
  const data = useStaticQuery(graphql`
    query PluginsAndInstruments {
      plugins: allMdx(filter: {fields: {slug: {regex: "/^\/plugins/"}}}, sort: {order: ASC, fields: fields___slug}) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              path
              title
            }
          }
        }
      }
      instruments: allMdx(filter: {fields: {slug: {regex: "/^\/instruments/"}}}, sort: {order: ASC, fields: fields___slug}) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              path
              title
            }
          }
        }
      }
    }
  `);

  return (
    <LayoutSimple>
      <div className="flex">
        <div className="w-two-thirds-ns">
          <h2>Plugins</h2>
          <ul className="list pl0">
            {data.plugins.edges.map(({node}) => {
              return <li key={node.id}>
                <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
              </li>
            })}
          </ul>
          <h2>Instruments</h2>
          <ul className="list pl0">
            {data.instruments.edges.map(({node}) => {
              return <li key={node.id}>
                <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
              </li>
            })}
          </ul>
        </div>
      </div>
    </LayoutSimple>
  );
};

export default Plugins;
