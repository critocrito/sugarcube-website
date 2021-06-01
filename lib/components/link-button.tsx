import c from "clsx";
import Link from "next/link";
import React from "react";

interface LinkButtonProps {
  type?: "primary" | "secondary";
  href: string;
  className?: string;
  children?: React.ReactNode;
}

const LinkButton = ({
  type = "primary",
  className,
  children,
  href,
}: LinkButtonProps) => {
  const classes = c(
    "text-center font-light whitespace-nowrap px-4 py-2 rounded-sm border border-bittersweet w-36",
    {
      "bg-bittersweet hover:bg-black text-white": type === "primary",
      "bg-white hover:bg-black text-sapphire hover:text-white":
        type === "secondary",
    },
    className,
  );

  return (
    <Link href={href}>
      <a className={classes}>{children}</a>
    </Link>
  );
};

export default LinkButton;
