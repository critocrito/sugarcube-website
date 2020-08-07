import React, { Fragment } from "react";
import { Location } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";
import Media from "react-media";

import Footer from "./Footer";
import Header from "./Header";
import Pagination from "./Pagination";
import SidebarContent from "./SidebarContent";
import SidebarMobile from "./SidebarMobile";

interface LayoutProps {
  children: React.ReactNode;
  prev?: string;
  next?: string;
}

const Layout = ({ next, prev, children }: LayoutProps) => {
  const {
    allMdx: { edges }
  } = useStaticQuery(graphql`
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
    next == null
      ? null
      : edges.find(({ node }) => new RegExp(next, "i").test(node.fields.slug));
  const prevDoc =
    prev == null
      ? null
      : edges.find(({ node }) => new RegExp(prev, "i").test(node.fields.slug));

  return (
    <div>
      <div className="bb bw1 b--negative">
        <Location>{({ location }) => <Header location={location} />}</Location>
      </div>
      <div className="mw8 center pa2">
        <div className="flex">
          <Location>
            {({ location }) => (
              <Media
                queries={{
                  small: "(max-width: 30rem)",
                  big: "(min-width: 30rem)"
                }}
              >
                {matches => (
                  <Fragment>
                    {matches.small && (
                      <div>
                        <SidebarMobile location={location} />
                      </div>
                    )}
                    {matches.big && (
                      <div className="w-25 br b--negative mr4 sidebar vh-100">
                        <SidebarContent location={location} />
                      </div>
                    )}
                  </Fragment>
                )}
              </Media>
            )}
          </Location>

          <div className="w-100 w-75-ns">{children}</div>
        </div>
      </div>
      <div className="bg-canvas mt3 h4">
        <div className="mw8 w-100 w-75-ns pa2 center">
          <Pagination
            prev={
              prevDoc == null
                ? null
                : {
                    slug: prevDoc.node.fields.slug,
                    title: prevDoc.node.frontmatter.title
                  }
            }
            next={
              nextDoc == null
                ? null
                : {
                    slug: nextDoc.node.fields.slug,
                    title: nextDoc.node.frontmatter.title
                  }
            }
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
