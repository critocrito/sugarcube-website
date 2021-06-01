import React from "react";

import FooterColumn from "$components/footer-column";
import FooterGithub from "$components/footer-github";
import FooterLogo from "$components/footer-logo";

const navigation = {
  getStarted: [
    {
      name: "Sugarcube",
      entries: [
        {name: "Installation", href: "/sugarcube/installation"},
        {name: "Tutorial", href: "/sugarcube/tutorial"},
      ],
    },
    {
      name: "Ncube",
      entries: [{name: "Installation", href: "/ncube/installation"}],
    },
    {
      name: "Discovery",
      entries: [{name: "Installation", href: "/discovery/installation"}],
    },
  ],

  guides: [
    {
      name: "API keys",
      entries: [
        {name: "Youtube", href: "/ncube/youtube-api"},
        {name: "Twitter", href: "/ncube/twitter-api"},
      ],
    },
    {
      name: "Data",
      entries: [
        {name: "Format", href: "/sugarcube/data-format"},
        {name: "Persistence", href: "/sugarcube/databases"},
      ],
    },
    {
      name: "Sugarcube",
      entries: [
        {name: "Plugins & Instruments", href: "/sugarcube/plugins-instruments"},
      ],
    },
    {
      name: "Glossary",
      entries: [
        {name: "Sugarcube", href: "/sugarcube/glossary"},
        {name: "Ncube", href: "/ncube/glossary"},
      ],
    },
  ],

  dev: [
    {
      entries: [
        {name: "Prerequesites", href: "/sugarcube/prerequesites"},
        {name: "Authoring plugins", href: "/sugarcube/creating-plugins"},
      ],
    },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-sapphire" aria-labelledby="footerHeading">
      <h2 id="footerHeading" className="sr-only">
        Sugarcube Tools
      </h2>

      <div className="desktop:container mx-2.5 laptop:mx-6 desktop:mx-auto py-8 tablet:py-12 laptop:py-16">
        <div className="tablet:grid tablet:grid-cols-4 tablet:gap-6 laptop:gap-8">
          <div className="space-y-8 tablet:col-span-2 laptop:col-span-1">
            <div className="flex justify-around">
              <FooterLogo type="sugarcube" href="/sugarcube" />
              <FooterLogo type="ncube" href="/ncube" />
              <FooterLogo type="discovery" href="/discovery" />
            </div>

            <p className="text-white text-base">
              A collection of tools to support human rights defenders and
              investigative journalists to conduct data based investigations.
            </p>

            <FooterGithub />
          </div>

          <div className="tablet:col-span-2 grid gap-y-8 laptop:grid-cols-3 laptop:col-span-3 mt-12 tablet:mt-0">
            <FooterColumn
              className="w-full"
              title="Get Started"
              topics={navigation.getStarted}
            />

            <FooterColumn
              className="w-full"
              title="Guides"
              topics={navigation.guides}
            />

            <FooterColumn
              className="w-full"
              title="Development"
              topics={navigation.dev}
            />
          </div>
        </div>

        <div className="mt-12 border-t border-solitude pt-8">
          <p className="text-sm text-solitude tablet:text-center">
            &copy; 2017-2021
            <a
              className="hover:text-white hover:bg-sapphire py-0 px-1.5"
              href="mailto:sugarcubetools@protonmail.com"
            >
              sugarcubetools@protonmail.com
            </a>
            <a
              className="hover:text-white hover:bg-sapphire py-0"
              rel="license"
              href="http://creativecommons.org/licenses/by-sa/4.0/"
            >
              <img
                className="p-0 inline"
                alt="Creative Commons License"
                src="https://i.creativecommons.org/l/by-sa/4.0/80x15.png"
              />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
