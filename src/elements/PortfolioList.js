import React, { Component } from 'react';
import imageFaceLoc from '../assets/images/projects/portfolio-1.png';
import imagePortfolioV1 from '../assets/images/projects/portfolio-2.png';
import imageRoboFriends from '../assets/images/projects/portfolio-3.png';

const PortfolioListContent = [
  {
    image: imageFaceLoc,
    title: 'FaceLoc',
    techUsed: 'React, HTMl, CSS',
    src: 'https://faceloc.herokuapp.com/',
  },
  {
    image: imagePortfolioV1,
    title: 'Previous Portfolio',
    techUsed: 'React, HTMl, CSS',
    src: 'https://nay244.github.io/nay_portfolio/',
  },
  {
    image: imageRoboFriends,
    title: 'RoboFriends',
    techUsed: 'React, HTMl, CSS',
    src: 'https://nay244.github.io/robofriends/',
  },
];

class PortfolioList extends Component {
  render() {
    const { column, styevariation } = this.props;
    const list = PortfolioListContent.slice(0, this.props.item);
    return (
      <React.Fragment>
        {list.map((value, index) => (
          <div className={`${column}`} key={index}>
            <div className={`portfolio ${styevariation}`}>
              <div className="thumbnail-inner">
                <div
                  className={`thumbnail ${value.image}`}
                  style={{ height: 532, width: 390 }}
                >
                  <img src={value.image} alt="Projects Showcase"></img>
                </div>
                <div
                  className={`bg-blr-image ${value.image}`}
                  style={{ height: 532, width: 390 }}
                >
                  <img src={value.image} alt="Projects Showcase"></img>
                </div>
              </div>
              <div className="content">
                <div className="inner">
                  <p>{value.techUsed}</p>
                  <h4>
                    <a href="/portfolio-details">{value.title}</a>
                  </h4>
                  <div className="portfolio-button">
                    <a
                      className="rn-btn"
                      href={value.src}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </React.Fragment>
    );
  }
}
export default PortfolioList;
