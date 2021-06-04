import Link from "next/link";
import React from "react";

interface DocPaginationProps {
  title: string;
  href: string;
  kind: "prev" | "next";
}

const DocPagination = ({title, href, kind}: DocPaginationProps) => {
  const labelClassName = "font-light tracking-wide";

  return (
    <div className="flex flex-col">
      {kind === "prev" && (
        <span className={labelClassName}>Previous article</span>
      )}
      {kind === "next" && <span className={labelClassName}>Next article</span>}
      <Link href={href}>
        <a>{title}</a>
      </Link>
    </div>
  );
};

export default DocPagination;
