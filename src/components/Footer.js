import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import FooterLogo from '../assets/images/logo/portfolio-logo-ext.png';

const SocialShare = [
  { Social: <FaGithub />, link: 'https://github.com/nay244' },
  {
    Social: <FaLinkedinIn />,
    link: 'https://www.linkedin.com/in/naaay-naing/',
  },
];

const Footer = () => {
  return (
    <div className="footer-style-2 bg_image" data-black-overlay="6">
      <div className="wrapper plr--85 plr_sm--20">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="inner">
              <div
                className="logo text-center text-sm-left mb_sm--20"
                style={{ height: 150, width: 150 }}
              >
                <a href="/">
                  <img src={FooterLogo} alt="Logo images" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="inner text-center">
              <ul className="social-share rn-lg-size d-flex justify-content-center liststyle">
                {SocialShare.map((val, i) => (
                  <li key={i}>
                    <a
                      href={`${val.link}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {val.Social}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 col-12">
            <div className="inner text-lg-right text-center mt_md--20 mt_sm--20">
              <div className="text">
                <p>Copyright © 2020 Nay Naing. All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
