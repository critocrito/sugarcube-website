import {graphql, useStaticQuery} from "gatsby";
import React from "react";

import {MdxSidebar, NavItem} from "../types";
import {ncubeSections, sugarcubeSections} from "../utils";
import SidebarSection from "./sidebar-section";

interface SidebarContentProps {
  location: Location;
}

type SubSection = {
  title: string;
  slug: string;
  isCurrent: boolean;
};

type SidebarSection = {title: string; subSections: SubSection[]};

const SidebarContent = ({location}: SidebarContentProps) => {
  let root: "sugarcube" | "ncube";
  let sections: NavItem[] = [];

  switch (true) {
    case location.pathname.startsWith("/ncube"): {
      root = "ncube";
      sections = ncubeSections;
      break;
    }
    default: {
      root = "sugarcube";
      sections = sugarcubeSections;
    }
  }

  const {
    allMdx: {edges: pages},
  } = useStaticQuery<MdxSidebar>(graphql`
    query sidebarContentQuery {
      allMdx(sort: {order: ASC, fields: [fields___slug]}) {
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

  const toc: SidebarSection[] = sections.map(({title, items}) => {
    const subSections = items.reduce((memo, {slug}) => {
      const node = pages.find((page) => {
        const path = `/${root}/${slug}`;
        return page.node.fields.slug === path;
      });

      if (!node) return memo;

      return memo.concat([
        {
          title: node.node.frontmatter.title,
          slug: node.node.fields.slug,
          // FIXME: Find a more robust way to determine if the current page is
          // active.
          isCurrent: location.pathname.startsWith(node.node.fields.slug),
        },
      ]);
    }, [] as SubSection[]);

    return {title, subSections};
  });

  const entries = toc.map(({title, subSections}) => {
    return <SidebarSection key={title} title={title} items={subSections} />;
  });

  return <ul className="list pl2">{entries}</ul>;
};

export default SidebarContent;
