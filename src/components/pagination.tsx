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
      <div className="flex flex-column">
        <span>Previous article</span>
        <Link className="f4 pl0" to={prev.slug}>
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
        <Link className="f4 pl0" to={next.slug}>
          {next.title}
        </Link>
      </div>
    );

  return (
    <div className="flex justify-between items-center ph4-ns mt4">
      <div>{prevArticle}</div>
      <div>{nextArticle}</div>
    </div>
  );
};

export default Pagination;
