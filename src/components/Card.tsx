import React from "react";
import { Link } from "gatsby";

interface CardProps {
  logo: string;
  title: string;
  installLink: string;
  readmoreLink: string;
  moreLink: string;
  isBeta?: boolean;
  children: React.ReactNode;
}

const Card = ({
  logo,
  title,
  installLink,
  readmoreLink,
  children,
  isBeta = false
}: CardProps) => {
  return (
    <div className="">
      <div className="card flex flex-column">
        <div className="pa1 ba br3 ">
          <div className="flex items-center justify-between color-main mr1 ml1 pr2 pl2">
            <div className="flex items-center">
              <img alt={`${title} logo.`} src={logo} />

              <p className="header4">
                <Link className="nowrap ma2 hover-bg-transparent" to="/">
                  {title}
                </Link>
              </p>
              {isBeta && (
                <div className="ttu bg-solitude pv1 ph2 br2">Beta</div>
              )}
            </div>

            <Link
              className="btn btn-large btn-bittersweet mr3"
              to={installLink}
            >
              Install
            </Link>
          </div>

          <div className="flex items-center justify-between color-main mr1 ml1 pr2 pl2">
            {children}
          </div>

          <div className="flex items-center justify-between mr1 ml1 pr2 pl2 fr">
            <Link className="btn btn-large btn-more mr3" to={readmoreLink}>
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
