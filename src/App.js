import React from 'react';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from 'react-icons/fi';
import Helmet from './components/Helmet';
import TextLoop from 'react-text-loop';
import Header from './components/Header';
import Footer from './components/Footer';
import Tabs from './elements/Tab';
import Contact from './elements/Contact';
import PortfolioList from './elements/PortfolioList';
import ServiceList from './elements/ServiceList';
import Background from './assets/images/portfolio-hero.jpg';
import portfolioImage from './assets/images/about/portfolio-self.png';
import footerImage from './assets/images/about/footer-pic.gif';
import NayResume from './assets/images/Nay_Resume.pdf';

const SlideList = [
  {
    textPosition: 'text-left',
    category: 'Welcome to my portfolio!',
    description: '',
    buttonText: 'Resume',
    buttonLink: NayResume,
  },
];
const PortfolioLanding = () => {
  let title = 'About Me',
    description =
      " I am currently a student with aspirations of becoming a Front-end Developer/Systems Engineer. Currently I am a Senior at George Mason University's School of Engineering, working towards my BS in Information Technology. Apart from my education at George Mason, I am taking various Web Development courses on my own free time. I have experience working HTML5, CSS3, JavaScript, jQuery, and Sass. In the future I am planning on learning REACT as well as furthering my knowledge of JAVA.";

  return (
    <div className="active-dark">
      <Helmet pageTitle="Nay" />

      <Header homeLink="#home" />
      {/* Start Slider Area   */}
      <div id="home" className="fix">
        <div className="slider-wrapper">
          {/* Start Single Slide */}
          {SlideList.map((value, index) => (
            <div
              className="slide personal-portfolio-slider slider-parallax slider-style-3 d-flex align-items-center justify-content-center bg_image"
              key={index}
              style={{
                backgroundImage: `url("${Background}")`,
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className={`inner ${value.textPosition}`}>
                      {value.category ? <span>{value.category}</span> : ''}
                      <h1 className="title">
                        Hey there! I’m Nay <br />
                        <TextLoop>
                          <span> Systems Engineer.</span>
                          <span> Developer.</span>
                          <span> Student.</span>
                        </TextLoop>{' '}
                      </h1>
                      {value.description ? (
                        <p className="description">{value.description}</p>
                      ) : (
                        ''
                      )}
                      {value.buttonText ? (
                        <div className="slide-btn">
                          <a
                            className="rn-button-style--2 btn-primary-color"
                            href={`${value.buttonLink}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {value.buttonText}
                          </a>
                        </div>
                      ) : (
                        ''
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* End Single Slide */}
        </div>
      </div>
      {/* End Slider Area   */}

      {/* Start About Area */}
      <div id="about" className="fix">
        <div className="about-area ptb--120  bg_color--1">
          <div className="about-wrapper">
            <div className="container">
              <div className="row row--35 align-items-center">
                <div className="col-lg-5">
                  <div className="thumbnail">
                    <img
                      className="w-100"
                      src={portfolioImage}
                      alt="Portfolio Picture"
                    />
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="about-inner inner">
                    <div className="section-title">
                      <h2 className="title">{title}</h2>
                      <p className="description">{description}</p>
                    </div>
                    <div className="row mt--30">
                      <Tabs tabStyle="tab-style--1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* End About Area */}

      {/* Start Service Area  */}
      <div id="service" className="fix">
        <div className="service-area creative-service-wrapper ptb--120 bg_color--5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                  <h2 className="title">My Awesome Service</h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration.
                  </p>
                </div>
              </div>
            </div>
            <div className="row creative-service">
              <div className="col-lg-12">
                <ServiceList
                  item="6"
                  column="col-lg-4 col-md-6 col-sm-6 col-12 text-left"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Service Area  */}

      {/* Start Portfolio Area */}
      <div id="portfolio" className="fix">
        <div className="portfolio-area ptb--120 bg_color--1">
          <div className="portfolio-sacousel-inner">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                    <h2 className="title">My Latest Projects</h2>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <PortfolioList
                  styevariation="text-center mt--40"
                  column="col-lg-4 col-md-6 col-sm-6 col-12"
                  item="6"
                />
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="view-more-btn mt--60 mt_sm--30 text-center">
                    <a
                      className="rn-button-style--2 btn-solid"
                      href="https://github.com/nay244?tab=repositories"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>View More</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Portfolio Area */}

      {/* Start Contact Area */}
      <div id="contact" className="fix">
        <div className="rn-contact-area ptb--120 bg_color--1">
          <Contact contactImages={footerImage} contactTitle="Contact Me." />
        </div>
      </div>
      {/* End Contact Area */}

      <Footer />
      {/* Start Back To Top */}
      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
      {/* End Back To Top */}
    </div>
  );
};

export default PortfolioLanding;
