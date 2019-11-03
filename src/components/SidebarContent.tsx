import React, {Fragment} from "react";
import {useStaticQuery, graphql} from "gatsby"
import {Location} from "@reach/router";
import Media from "react-media";

import SidebarSection from "./SidebarSection";
import {sectionListDocs} from "../utils/sectionList";

interface Props {
  location: Location;
}

const SidebarContent = ({location}: Props) => {
  const data = useStaticQuery(graphql`
    query sidebarContentQuery {
      allMdx(sort: { order: ASC, fields: [fields___slug] }) {
        edges {
          node {
            fields {
              slug
            }
            id
            frontmatter {
              title
              parents
              prev
              next
            }
          }
        }
      }
    }
  `);
  const toc = sectionListDocs.map(({title, items}) => {
    const subSections = items.map(({slug}) => {
      const node = data.allMdx.edges.find((node) => {
        const path = `/docs/${slug}`;
        return node.node.fields.slug === path;
      });
      return {
        title: node.node.frontmatter.title,
        slug: node.node.fields.slug,
        isCurrent: location.pathname === node.node.fields.slug,
      };
    });
    return [title, subSections];
  });

  const entries = toc.map(([title, subSections]) => {
    const expanded = subSections.some(({isCurrent}) => isCurrent);

    return <SidebarSection
             key={title}
             title={title}
             items={subSections}
             expanded={expanded}
    />;
  });

  return <ul className="list pl2">{entries}</ul>;
};

export default SidebarContent;
