import React, { Fragment } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Media from "react-media";

import SidebarSection from "./SidebarSection";
import { sectionListDocs } from "../utils/sectionList";

interface SidebarContentProps {
  location: Location;
}

const SidebarContent = ({ location }: SidebarContentProps) => {
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
  const toc = sectionListDocs.map(({ title, items }) => {
    const subSections = items.map(({ slug }) => {
      const node = data.allMdx.edges.find(node => {
        const path = `/sugarcube/${slug}`;
        return node.node.fields.slug === path;
      });

      return {
        title: node.node.frontmatter.title,
        slug: node.node.fields.slug,
        // FIXME: Find a more robust way to determine if the current page is
        // active.
        isCurrent: location.pathname.startsWith(node.node.fields.slug)
      };
    });
    return [title, subSections];
  });

  const entries = toc.map(([title, subSections]) => {
    const expanded = subSections.some(({ isCurrent }) => isCurrent);

    return (
      <SidebarSection
        key={title}
        title={title}
        items={subSections}
        expanded={expanded}
      />
    );
  });

  return <ul className="list pl2">{entries}</ul>;
};

export default SidebarContent;
