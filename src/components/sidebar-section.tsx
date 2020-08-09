import classNames from "classnames";
import {Link} from "gatsby";
import React, {useState} from "react";
import {ChevronDown, ChevronUp} from "react-feather";

interface SidebarSectionProps {
  title: string;
  items: Array<{title: string; slug: string; isCurrent: boolean}>;
  expanded: boolean;
}

const SidebarSection = ({title, items, expanded}: SidebarSectionProps) => {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const clickHandler = () => setIsExpanded(!isExpanded);

  const sections = isExpanded
    ? items.map(({title: t, slug, isCurrent}) => {
        const style = classNames(
          "pl2",
          isCurrent ? "bl bw2 br0 b--main" : "bl bw2 b--transparent",
        );
        return (
          <li key={t} className={style}>
            <Link className="hover-bg-transparent main" to={slug}>
              {t}
            </Link>
          </li>
        );
      })
    : "";

  return (
    <li className="pr2 pb3">
      <button
        className="bg-transparent b--transparent main b nowrap"
        onClick={clickHandler}
      >
        <div className="flex items-center">
          {title}
          {isExpanded ? <ChevronDown /> : <ChevronUp />}
        </div>
      </button>
      <ol className="list pl0 pt2">{sections}</ol>
    </li>
  );
};

export default SidebarSection;
