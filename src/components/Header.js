import React, { Component } from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FiX, FiMenu } from 'react-icons/fi';
import Scrollspy from 'react-scrollspy';
import logo from '../assets/images/logo/portfolio-logo-2.png';

const SocialShare = [
  { Social: <FaGithub />, link: 'https://github.com/nay244' },
  {
    Social: <FaLinkedinIn />,
    link: 'https://www.linkedin.com/in/naaay-naing/',
  },
];
class Header extends Component {
  constructor(props) {
    super(props);
    this.menuTrigger = this.menuTrigger.bind(this);
    this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
    this.stickyHeader = this.stickyHeader.bind(this);

    //  this.subMenuTrigger = this.subMenuTrigger.bind(this);
    window.addEventListener('load', function () {
      console.log('All assets are loaded');
    });
  }
  menuTrigger() {
    document.querySelector('.header-wrapper').classList.toggle('menu-open');
  }

  CLoseMenuTrigger() {
    document.querySelector('.header-wrapper').classList.remove('menu-open');
  }

  stickyHeader() {}

  render() {
    window.addEventListener('scroll', function () {
      var value = window.scrollY;
      if (value > 100) {
        document.querySelector('.header--fixed').classList.add('sticky');
      } else {
        document.querySelector('.header--fixed').classList.remove('sticky');
      }
    });

    var elements = document.querySelectorAll('.has-dropdown > a');
    for (var i in elements) {
      if (elements.hasOwnProperty(i)) {
        elements[i].onclick = function () {
          this.parentElement
            .querySelector('.submenu')
            .classList.toggle('active');
          this.classList.toggle('open');
        };
      }
    }

    return (
      <header className={`header-area header-style-two header--fixed`}>
        <div className="header-wrapper">
          <div className="header-left d-flex align-items-center">
            <div className="logo">
              <a href={this.props.homeLink}>
                <img
                  src={logo}
                  alt="Nay-Logo"
                  style={{ height: 75, width: 75 }}
                />
              </a>
            </div>
            <nav className="mainmenunav d-lg-block ml--50">
              <Scrollspy
                className="mainmenu"
                items={['home', 'about', 'service', 'portfolio', 'contact']}
                currentClassName="is-current"
                offset={-200}
              >
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#service">Skills</a>
                </li>
                <li>
                  <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </Scrollspy>
            </nav>
          </div>
          <div className="header-right">
            <div className="social-share-inner">
              <ul className="social-share social-style--2 color-black d-flex justify-content-start liststyle">
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
            {/* Start Hamburger Menu  */}
            <div className="humberger-menu d-block d-lg-none pl--20">
              <span
                onClick={this.menuTrigger}
                className="menutrigger text-white"
              >
                <FiMenu />
              </span>
            </div>
            {/* End Humberger Menu  */}
            <div className="close-menu d-block d-lg-none">
              <span onClick={this.CLoseMenuTrigger} className="closeTrigger">
                <FiX />
              </span>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
export default Header;
