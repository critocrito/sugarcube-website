import c from "classnames";
import {Link} from "gatsby";
import React from "react";

interface SidebarSectionProps {
  title: string;
  items: Array<{title: string; slug: string; isCurrent: boolean}>;
}

const SidebarSection = ({title, items}: SidebarSectionProps) => {
  const sections = items.map(({title: t, slug, isCurrent}) => {
    return (
      <li
        key={t}
        className={c(
          "pl2 nowrap",
          isCurrent ? "bl bw2 br0 b--main" : "bl bw2 b--transparent",
        )}
      >
        <Link className="hover-bg-transparent main pl0" to={slug}>
          {t}
        </Link>
      </li>
    );
  });

  return (
    <li className="pr2">
      <span className="b sapphire">{title}</span>
      <ol className="list pl0 pt2">{sections}</ol>
    </li>
  );
};

export default SidebarSection;
