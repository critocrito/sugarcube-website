import React, {useState} from "react";
import {ChevronUp, ChevronDown} from "react-feather";
import classNames from "classnames";

interface SidebarSectionProps {
  title: string;
  items: Array<{title: string, slug: string, isCurrent: boolean}>;
  expanded: boolean;
}

const SidebarSection = ({title, items, expanded}: SidebarSectionProps) => {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const clickHandler = () => setIsExpanded(!isExpanded);

  const sections = isExpanded ? items.map(({title, slug, isCurrent}) => {
    const style = classNames("pl2", isCurrent ? "bl bw2 br0 b--main" : "bl bw2 b--transparent");
    return (
      <li key={title} className={style}>
        <a className="hover-bg-transparent main" href={slug}>{title}</a>
      </li>
    );
  }) : "";

  return (
    <li className="pl2 pb3">
    <button
    className="bg-transparent b--transparent main b nowrap"
    onClick={clickHandler}>
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
