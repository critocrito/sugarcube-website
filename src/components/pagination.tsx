import {Link} from "gatsby";
import React from "react";

interface PaginationProps {
  next?: {slug: string; title: string};
  prev?: {slug: string; title: string};
}

const Pagination = ({prev, next}: PaginationProps) => {
  const prevArticle =
    prev === undefined ? (
      ""
    ) : (
      <div className="flex flex-column fl">
        <span className="ml1">Previous article</span>
        <Link className="f4" to={prev.slug}>
          {prev.title}
        </Link>
      </div>
    );
  const nextArticle =
    next === undefined ? (
      ""
    ) : (
      <div className="flex flex-column">
        <span>Next article</span>
        <Link className="f4" to={next.slug}>
          {next.title}
        </Link>
      </div>
    );

  return (
    <div className="flex justify-between ph3 items-center h4 mr5-ns pr5-ns">
      <div>{prevArticle}</div>
      <div>{nextArticle}</div>
    </div>
  );
};

export default Pagination;
