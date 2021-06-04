import c from "clsx";
import Link from "next/link";
import React from "react";

import LogoSugarcubeTools from "$assets/icons/logo-sugarcube-tools.svg";

interface LogoProps {
  className?: string;
}

const Logo = ({className}: LogoProps) => {
  return (
    <Link href="/" passHref>
      <a className={c("flex items-start", className)}>
        <LogoSugarcubeTools className="w-12 h-12 flex-none" />
        <span className="font-light text-sapphire text-lg ml-3 self-center">
          Sugarcube Tools
        </span>
      </a>
    </Link>
  );
};

export default Logo;
