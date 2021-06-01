import c from "clsx";
import Link from "next/link";
import React from "react";

import Logo from "$assets/icons/logo-ncube.svg";

interface LogoNcubeProps {
  className?: string;
}

const LogoNcube = ({className}: LogoNcubeProps) => {
  return (
    <Link href="/" passHref>
      <a className={c("flex items-start", className)}>
        <Logo className="h-16 tablet:h-20 flex-none" />
        <span className="font-light text-sapphire text-lg ml-3 self-center">
          Ncube
        </span>
      </a>
    </Link>
  );
};

export default LogoNcube;
