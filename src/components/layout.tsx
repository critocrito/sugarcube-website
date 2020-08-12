// eslint-disable-next-line import/no-extraneous-dependencies
import {Location} from "@reach/router";
import c from "classnames";
import {graphql, useStaticQuery} from "gatsby";
import React from "react";
import Media from "react-media";

import {MdxPages} from "../types";
import Footer from "./footer";
import Header from "./header";
import Pagination from "./pagination";
import SidebarContent from "./sidebar-content";
import SidebarMobile from "./sidebar-mobile";

interface LayoutProps {
  children: React.ReactNode;
  prev?: string;
  next?: string;
}

const Layout = ({next, prev, children}: LayoutProps) => {
  const {
    allMdx: {edges: pages},
  } = useStaticQuery<MdxPages>(graphql`
    query nextDocQuery {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);

  const nextDoc =
    next === undefined
      ? undefined
      : pages.find(({node}) => new RegExp(next, "i").test(node.fields.slug));
  const prevDoc =
    prev === undefined
      ? undefined
      : pages.find(({node}) => new RegExp(prev, "i").test(node.fields.slug));

  const hasPager = prevDoc || nextDoc;

  return (
    <div>
      <div className="bb bw1 b--sapphire">
        <Location>{({location}) => <Header location={location} />}</Location>
      </div>

      <div className="flex-ns pa2 mw8-ns center-ns">
        <Location>
          {({location}) => (
            <Media
              queries={{
                small: "(max-width: 30rem)",
                big: "(min-width: 30rem)",
              }}
            >
              {(matches) => (
                <>
                  {matches.small && (
                    <div className="bg-white">
                      <SidebarMobile location={location} />
                    </div>
                  )}
                  {matches.big && (
                    <div className="w-25-ns br b--sapphire mr4 sidebar vh-100">
                      <SidebarContent location={location} />
                    </div>
                  )}
                </>
              )}
            </Media>
          )}
        </Location>

        <div className="flex-ns flex-column-ns w-100 w-75-ns">
          <div>{children}</div>
          <div
            className={c("mt5-ns", hasPager ? "bt bw1 b--sapphire" : undefined)}
          >
            <Pagination
              prev={
                prevDoc === undefined
                  ? undefined
                  : {
                      slug: prevDoc.node.fields.slug,
                      title: prevDoc.node.frontmatter.title,
                    }
              }
              next={
                nextDoc === undefined
                  ? undefined
                  : {
                      slug: nextDoc.node.fields.slug,
                      title: nextDoc.node.frontmatter.title,
                    }
              }
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
