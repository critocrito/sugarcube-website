import {Link} from "gatsby";
import React from "react";
import {GitHub} from "react-feather";

const Footer = () => {
  return (
    <footer className="negative pt3-ns mt4-ns">
      <div className="mw8 center">
        <div className="cf">
          <div className="fl w-100 w-third-ns pa2">
            <div className="flex flex-column">
              <h3 className="pb1">Sugarcube Tools</h3>
              <div className="f6">
                <ul className="list pa0">
                  <li>
                    <a
                      className="link-reset-negative"
                      href="https://github.com/critocrito/sugarcube"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <GitHub size={20} />
                    </a>
                  </li>
                </ul>
              </div>

              <div className="f6">
                © 2017-2020{" "}
                <a href="mailto:christo@cryptodrunks.net">critocrito</a>
                <br />
                <a
                  className="link-reset-negative"
                  rel="license"
                  href="http://creativecommons.org/licenses/by-sa/4.0/"
                >
                  <img
                    alt="Creative Commons License"
                    src="https://i.creativecommons.org/l/by-sa/4.0/80x15.png"
                  />
                </a>
                <br />
                This work is licensed under a{" "}
                <a
                  className="pa0"
                  rel="license"
                  href="http://creativecommons.org/licenses/by-sa/4.0/"
                >
                  Creative Commons Attribution-ShareAlike 4.0 International
                  License
                </a>
                .
              </div>
            </div>
          </div>

          <div className="fl dn db-ns w-two-thirds-ns pa2">
            <div className="flex justify-between">
              <div className="w-third-ns">
                <h3 className="bb pb1">Get Started</h3>
                <ul className="list pl0 text-medium solitude">
                  <li className="pt2 flex items-center">
                    <span>Sugarcube:</span>
                    <Link to="/sugarcube/installation">Installation</Link>
                    <span>|</span>
                    <Link to="/sugarcube/tutorial">Tutorial</Link>
                  </li>
                  <li className="pt2">
                    <span>Ncube:</span>
                    <Link to="/ncube/installation">Installation</Link>
                  </li>
                </ul>
              </div>
              <div className="w-third-ns">
                <h3 className="bb pb1">Guides</h3>
                <ul className="list pl0 text-medium solitude">
                  <li className="pt2">
                    <Link to="/sugarcube/plugins-instruments">
                      Plugins & Instruments
                    </Link>
                  </li>
                  <li className="pt2">
                    <Link to="/sugarcube/data-format">Data Format</Link>
                  </li>
                  <li className="pt2">
                    <Link to="/sugarcube/databases">Persisting Data</Link>
                  </li>
                  <li className="pt2">
                    <Link to="/sugarcube/glossary">Glossary</Link>
                  </li>
                </ul>
              </div>
              <div className="w-third-ns">
                <h3 className="bb pb1">Development</h3>
                <ul className="list pl0 text-medium solitude">
                  <li className="pt2">
                    <Link to="/sugarcube/prerequisites">Prerequisites</Link>
                  </li>
                  <li className="pt2">
                    <Link to="/sugarcube/creating-plugins">
                      Authoring Plugins
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
