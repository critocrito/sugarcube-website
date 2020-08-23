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
                    <Link to="/get-in-touch">Get in Touch</Link>
                  </li>

                  <li className="flex items-center">
                    <GitHub size={20} />
                    <a
                      className="link-reset-negative ml2"
                      href="https://github.com/critocrito/sugarcube"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Sugarcube
                    </a>
                    <span className="mh2">|</span>
                    <a
                      className="link-reset-negative"
                      href="https://github.com/critocrito/ncube"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Ncube
                    </a>
                  </li>
                </ul>
              </div>

              <div className="f6">
                © 2017-2020{" "}
                <a href="mailto:sugarcubetools@protonmail.com">
                  sugarcubetools@protonmail.com
                </a>
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

                  <li className="pt2">
                    <span>Discovery:</span>
                    <Link to="/discovery/installation">Installation</Link>
                  </li>
                </ul>
              </div>
              <div className="w-third-ns">
                <h3 className="bb pb1">Guides</h3>
                <ul className="list pl0 text-medium solitude">
                  <li className="pt2 flex items-center">
                    <span>API keys:</span>
                    <Link to="/ncube/youtube-api">Youtube</Link>
                    <span>|</span>
                    <Link to="/ncube/twitter-api">Twitter</Link>
                  </li>

                  <li className="pt2">
                    <span>Data:</span>
                    <Link to="/sugarcube/data-format">Format</Link>
                    <span>|</span>
                    <Link to="/sugarcube/databases">Persistence</Link>
                  </li>

                  <li className="pt2">
                    <span>Sugarcube:</span>
                    <Link to="/sugarcube/plugins-instruments">
                      Plugins & Instruments
                    </Link>
                  </li>

                  <li className="pt2">
                    <span>Glossary:</span>
                    <Link to="/sugarcube/glossary">Sugarcube</Link>
                    <span>|</span>
                    <Link to="/ncube/glossary">Ncube</Link>
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
