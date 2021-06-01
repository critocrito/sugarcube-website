import c from "clsx";
import Link from "next/link";
import React from "react";

import Logo from "$assets/icons/logo-discovery.svg";

interface LogoDiscoveryProps {
  className?: string;
}

const LogoDiscovery = ({className}: LogoDiscoveryProps) => {
  return (
    <Link href="/" passHref>
      <a className={c("flex items-start", className)}>
        <Logo className="h-16 tablet:h-20 flex-none" />
        <span className="font-light text-sapphire text-lg ml-3 self-center">
          Discovery Extension
        </span>
      </a>
    </Link>
  );
};

export default LogoDiscovery;
