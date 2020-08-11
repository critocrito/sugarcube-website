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
    <div className="">
      <div className="card flex flex-column">
        <div className="pa1 ba br3 ">
          <div className="cf ph2-ns">
            <div className="fl w-100 w-70-ns pa2">
              <div className="flex items-center">
                <img alt={`${title} logo.`} src={logo} />

                <h4 className="header4">
                  <Link className="nowrap ma2 hover-bg-transparent" to="/">
                    {title}
                  </Link>
                </h4>
                {isBeta && (
                  <div className="ttu bg-solitude pv1 ph2 br2">Beta</div>
                )}
              </div>
            </div>
            <div className="fl w-100 w-30-ns pa2">
              <div className="flex items-center justify-between mr1 ml1 pr2 pl2 fr">
                <Link
                  className="btn btn-large btn-bittersweet ml3 mt4"
                  to={installLink}
                >
                  Install
                </Link>
              </div>
            </div>
          </div>

          <div className="cf ph2-ns">
            <div className="fl w-100 w-70-ns pa2">
              <div className="flex items-center justify-between color-main mr1 ml1 pr2 pl2">
                {children}
              </div>
            </div>
            <div className="fl w-100 w-30-ns pa2">
              <div className="flex items-center justify-between mr1 ml1 pr2 pl2 fr">
                <Link
                  className="btn btn-large btn-more ml3 mt4"
                  to={readmoreLink}
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
