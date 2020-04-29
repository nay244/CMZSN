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
import footerImage from './assets/images/about/footer-pic.png';

const SlideList = [
  {
    textPosition: 'text-left',
    category: 'Introducing CMZSN Airport Systems',
    description: '',
  },
];
const PortfolioLanding = () => {
  let title = 'About Us',
    description =
      "CMZSN System solutions support the efficient management of more than 100 airports globally. Our solutions enhance the passenger experience by keeping them up-to-speed with all events and developments related to their flights from the moment they book their flight all the way through take-off. All in all, these applications have already guided over 150 million travelers to their gates.";

  return (
    <div className="active-dark">
      <Helmet pageTitle="CMZSN Systems" />

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
                        High Performance Airline Systems <br />
                        <TextLoop>
                          <span> Connectivity.</span>
                          <span> Digitization.</span>
                          <span> Cloud and Infrastructure.</span>
                          <span> security.</span>
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
                  <h2 className="title">Airport Management</h2>
                  <p>
                  Efficient end-to-end airport management
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
                    <h2 className="title">System Analysis and Design</h2>
                    <p>
                      Flying high with ICT. Our System Design Models.
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
              
            </div>
          </div>
        </div>
      </div>
      {/* End Portfolio Area */}

      {/* Start Contact Area */}
      <div id="contact" className="fix">
        <div className="rn-contact-area ptb--120 bg_color--1">
          <Contact contactImages={footerImage} contactTitle="Contact Us." />
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
