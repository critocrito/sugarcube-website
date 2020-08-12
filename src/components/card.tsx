import {Link} from "gatsby";
import React from "react";

interface CardProps {
  logo: string;
  title: string;
  installLink: string;
  readmoreLink: string;
  isBeta?: boolean;
  children: React.ReactNode;
}

const Card = ({
  logo,
  title,
  installLink,
  readmoreLink,
  children,
  isBeta = false,
}: CardProps) => {
  return (
    <div className="card flex-ns justify-between-ns pa3 ba br3">
      <div className="ph2-ns w-100 w-60-ns pa2">
        <div className="flex items-center">
          <img alt={`${title} logo.`} src={logo} />

          <h4 className="header4">
            <Link className="nowrap ma2 hover-bg-transparent" to="/">
              {title}
            </Link>
          </h4>
          {isBeta && <div className="ttu bg-solitude pv1 ph2 br2">Beta</div>}
        </div>

        <div className="flex items-center justify-between color-main mv1 ph2">
          {children}
        </div>
      </div>

      <div className="flex flex-column-ns justify-between ph2-ns w-100 w-30-ns pa2">
        <div className="mt4-ns">
          <Link
            className="btn btn-large btn-bittersweet fr-ns"
            to={installLink}
          >
            Install
          </Link>
        </div>

        <div className="mb2-ns">
          <Link className="btn btn-large btn-more fr-ns" to={readmoreLink}>
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
