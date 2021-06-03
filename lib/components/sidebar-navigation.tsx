import c from "clsx";
import React from "react";

import {Navigation} from "$lib/types";

interface SidebarNavigationProps {
  topic: string;
  activeSlug: string;
  navigation: Navigation;
}

const SidebarNavigation = ({
  topic,
  activeSlug,
  navigation,
}: SidebarNavigationProps) => {
  return (
    <>
      {navigation.map(([section, items]) => (
        <div key={section} className="flex flex-col space-y-4">
          <span
            id={`section-headline-${section}`}
            className="font-bold text-lg"
          >
            {section}
          </span>

          <div
            className="flex flex-col space-y-4"
            role="group"
            aria-labelledby={`section-headline-${section}`}
          >
            {items.map(({title, slug}) => {
              const className = c("pl-4 hover:underline", {
                "pl-3 border-l-4 border-sapphire": activeSlug === slug,
              });

              return (
                <a key={slug} className={className} href={`/${topic}/${slug}`}>
                  {title}
                </a>
              );
            })}
          </div>
        </div>
      ))}
    </>
  );
};

export default SidebarNavigation;
