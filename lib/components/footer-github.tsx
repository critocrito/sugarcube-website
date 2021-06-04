import React from "react";

import LogoGithub from "$assets/icons/logo-github.svg";

const FooterGithub = () => {
  return (
    <div className="flex items-center">
      <LogoGithub className="w-6 h-6 text-white" />

      <div className="flex text-sm divide-x divide-solitude">
        <a
          className="text-sm text-solitude leading-none px-1.5 py-1 hover:text-white hover:underline"
          href="https://github.com/critocrito/sugarcube"
        >
          Sugarcube
        </a>

        <a className="text-sm text-solitude leading-none px-1.5 py-1 hover:text-white hover:underline">
          Ncube
        </a>
      </div>
    </div>
  );
};

export default FooterGithub;
