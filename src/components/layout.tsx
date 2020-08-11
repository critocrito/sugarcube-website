// eslint-disable-next-line import/no-extraneous-dependencies
import c from "classnames";
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

  return (
    <div>
      <div className="bb bw1 b--negative">
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
                    <div className="bg-white z-999">
                      <SidebarMobile location={location} />
                    </div>
                  )}
                  {matches.big && (
                    <div className="w-25 br b--negative mr4 sidebar vh-100">
                      <SidebarContent location={location} />
                    </div>
                  )}
                </>
              )}
            </Media>
          )}
        </Location>

        <div className="flex-ns flex-column-ns">
          <div className="w-100 w-75-ns">{children}</div>
          <div
            className={c(
              "w-100 w-75-ns mt5-ns",
              (prevDoc || nextDoc) && "bt bw1 b--negative",
            )}
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
