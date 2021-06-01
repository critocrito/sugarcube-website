import c from "clsx";
import Link from "next/link";
import React from "react";

import Logo from "$assets/icons/logo-sugarcube.svg";

interface LogoSugarcubeProps {
  className?: string;
}

const LogoSugarcube = ({className}: LogoSugarcubeProps) => {
  return (
    <Link href="/" passHref>
      <a className={c("flex items-start", className)}>
        <Logo className="h-16 laptop:h-20 flex-none" />
        <span className="font-light text-sapphire text-lg ml-3 self-center">
          Sugarcube
        </span>
      </a>
    </Link>
  );
};

export default LogoSugarcube;
