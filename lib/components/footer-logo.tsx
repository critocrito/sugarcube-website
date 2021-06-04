import Link from "next/link";
import React from "react";

import LogoDiscovery from "$assets/icons/logo-discovery.svg";
import LogoNcube from "$assets/icons/logo-ncube.svg";
import LogoSugarcube from "$assets/icons/logo-sugarcube.svg";

interface FooterLogoProps {
  href: string;
  type: "sugarcube" | "ncube" | "discovery";
}

const FooterLogo = ({href, type}: FooterLogoProps) => {
  let Logo = LogoSugarcube;

  if (type === "ncube") {
    Logo = LogoNcube;
  }
  if (type === "discovery") {
    Logo = LogoDiscovery;
  }

  return (
    <Link href={href}>
      <a className="flex flex-col items-center text-solitude hover:text-white hover:underline">
        <Logo className="w-12 h-12 flex-none cursor-pointer" />
        <span className="text-sm font-light tracking-wide uppercase">
          {type}
        </span>
      </a>
    </Link>
  );
};

export default FooterLogo;
