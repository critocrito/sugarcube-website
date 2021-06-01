import Link from "next/link";
import React from "react";

const LandingHeader = (): JSX.Element => {
  return (
    <div className="bg-sapphire">
      <article className="max-w-7xl mx-auto py-8 sm:py-16 px-2.5 tablet:px-10 laptop:px-12 desktop:px-0 space-y-14">
        <h2 className="text-white">Data pipelines for human rights.</h2>

        <p className="text-white max-w-4xl mt-1">
          A collection of tools to support human rights defenders and
          investigative journalists to conduct data-driven investigations. They
          help to develop compelling stories which expose the misuse of power
          and human rights abuses.
        </p>

        <div className="flex flex-col tablet:flex-row tablet:items-center text-white mt-3">
          <p className="text-white tablet:ml-3 tablet:mt-0">
            We would love to hear from you if you are interested in using data
            for your next investigation.
          </p>

          <Link href="/get-in-touch" passHref>
            <a className="place-self-center tablet:order-first whitespace-nowrap text-white text-center mt-3 tablet:mt-0 border border-bittersweet py-3 px-1.5 bg-sapphire rounded-sm hover:bg-black transition-colors duration-500">
              Get in Touch
            </a>
          </Link>
        </div>
      </article>
    </div>
  );
};

export default LandingHeader;
