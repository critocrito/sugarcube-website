import c from "clsx";
import Link from "next/link";
import React from "react";

interface MenuItemProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
  isExternal?: boolean;
}

const MenuItem = ({
  href,
  children,
  isActive = false,
  isExternal = false,
}: MenuItemProps) => {
  const classes = c(
    "text-sapphire tracking-wide font-normal uppercase rounded-md p-1.5 transition-colors duration-500 hover:bg-solitude",
    {
      "bg-solitude": isActive,
    },
  );

  if (isExternal)
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );

  return (
    <Link href={href} passHref>
      <a href={href} className={classes}>
        {children}
      </a>
    </Link>
  );
};

export default MenuItem;
