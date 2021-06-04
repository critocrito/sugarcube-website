import c from "clsx";
import Link from "next/link";
import React from "react";

type Entry = {name: string; href: string};

interface FooterColumnProps {
  title: string;
  topics: Array<{name?: string; entries: Entry[]}>;
  className?: string;
}

const FooterColumn = ({title, topics, className}: FooterColumnProps) => {
  return (
    <div className={c("flex flex-col", className)}>
      <h3 className="font-semibold text-white tracking-wider border-b-2 w-full">
        {title}
      </h3>

      <ul className="mt-4 space-y-4 text-sm">
        {topics.map(({name, entries}) => (
          <li key={name} className="flex">
            {name && (
              <span className="flex-none text-sm text-white font-semibold py-1">
                {name}:
              </span>
            )}

            <div className="flex flex-wrap content-center text-sm divide-x divide-solitude">
              {entries.map((entry, index) => (
                <span className="whitespace-nowrap text-sm">
                  <Link key={entry.name} href={entry.href} passHref>
                    <a
                      className={c(
                        "text-sm text-solitude py-1 hover:text-white hover:underline",
                        {
                          "px-1.5": name || index > 0, // Most entries are not first or have a topic
                          "pl-0 pr-1.5": !name && index === 0, // Align to the left
                        },
                      )}
                    >
                      {entry.name}
                    </a>
                  </Link>
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;
