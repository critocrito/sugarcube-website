import "../../styles.css";

import {graphql, Link, useStaticQuery} from "gatsby";
import React from "react";

import LayoutSimple from "../../components/layout-simple";
import {MdxPluginsInstruments} from "../../types";

const Plugins = () => {
  const {
    plugins: {edges: plugins},
    instruments: {edges: instruments},
  } = useStaticQuery<MdxPluginsInstruments>(graphql`
    query PluginsAndInstruments {
      plugins: allMdx(
        filter: {fields: {slug: {regex: "/^/sugarcube/plugins/"}}}
        sort: {order: ASC, fields: fields___slug}
      ) {
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
      instruments: allMdx(
        filter: {fields: {slug: {regex: "/^/sugarcube/instruments/"}}}
        sort: {order: ASC, fields: fields___slug}
      ) {
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
            {plugins.map(({node}) => {
              return (
                <li key={node.id}>
                  <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
                </li>
              );
            })}
          </ul>
          <h2>Instruments</h2>
          <ul className="list pl0">
            {instruments.map(({node}) => {
              return (
                <li key={node.id}>
                  <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </LayoutSimple>
  );
};

export default Plugins;
