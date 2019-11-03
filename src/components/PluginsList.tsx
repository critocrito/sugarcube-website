import {Link, graphql, useStaticQuery} from "gatsby";
import React from "react";

const PluginsList = () => {
  return <div />;
  /* const data = useStaticQuery(graphql`
   *   query {
   *     allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/plugins/"}}) {
   *       totalCount
   *       edges {
   *         node {
   *           id
   *           html
   *           frontmatter {
   *             path
   *             title
   *           }
   *           excerpt
   *         }
   *       }
   *     }
   *   }
   * `);
   * const {totalCount, edges} = data.allMarkdownRemark;

   * return (
   *   <div>
   *     <p>{totalCount} plugins available</p>
   *     <ul className="list pl0">
   *       {edges.map(({node}) => (
   *         <li key={node.id} className="nowrap mt1">
   *           <Link
   *             className="pa0"
   *             to={node.frontmatter.path}>{node.frontmatter.title}
   *           </Link>
   *         </li>
   *       ))}
   *     </ul>
   *   </div>
   * ); */
};

export default PluginsList;
