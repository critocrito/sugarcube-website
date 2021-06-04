import React from "react";

import LinkButton from "$components/link-button";

interface FeatureSectionProps {
  install: string;
  readmore?: string;
  children?: React.ReactNode;
}

const FeatureSection = ({install, readmore, children}: FeatureSectionProps) => {
  return (
    <section className="desktop:container bg-white rounded-md shadow-md px-4 tablet:px-6 my-4 mx-3 laptop:mx-6 desktop:mx-auto">
      <div className="py-12 tablet:flex tablet:justify-between tablet:space-x-8">
        <div className="flex flex-col space-y-8 max-w-5xl">{children}</div>

        <div className="flex tablet:flex-col mt-6 tablet:mt-0 mobile:justify-between tablet:justify-start space-x-4 tablet:space-x-0 tablet:space-y-8">
          <LinkButton className="tablet:mt-2.5" href={install}>
            <span className="uppercase">Install</span>
          </LinkButton>
          {readmore && (
            <LinkButton type="secondary" href={readmore}>
              <span className="uppercase">Read More</span>
            </LinkButton>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
