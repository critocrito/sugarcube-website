import React, {useState} from "react";
import {ChevronUp, ChevronDown} from "react-feather";
import classname from "classname";

interface Props {
  title: string;
  items: Array<{title: string, slug: string, isCurrent: boolean}>;
  expanded: boolean;
}

const SidebarSection = ({title, items, expanded}: Props) => {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const clickHandler = () => setIsExpanded(!isExpanded);

  const sections = isExpanded ? items.map(({title, slug, isCurrent}) => {
    const className = classname("pl2", isCurrent ? "bl bw2 br0 b--main" : "bl bw2 b--transparent");
    return (
      <li key={title} className={className}>
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
