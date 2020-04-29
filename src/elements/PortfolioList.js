import React, { Component } from 'react';
import imageClass from '../assets/images/projects/classDiagram.png';
import imageSequence from '../assets/images/projects/sequenceDiagram.png';
import imageState from '../assets/images/projects/statechartDiagram.png';
import imageUseCase from '../assets/images/projects/usecaseDiagram.png';
import imageActivity from '../assets/images/projects/activityDiagram.png';

const PortfolioListContent = [
  {
    image: imageClass,
    title: 'Class Diagram',
    techUsed: '',
    src: '',
  },
  {
    image: imageSequence,
    title: 'Sequence Diagram',
    techUsed: '',
    src: '',
  },
  {
    image: imageState,
    title: 'Statechart Diagram',
    techUsed: '',
    src: '',
  },
  {
    image: imageUseCase,
    title: 'Use-Case Diagram',
    techUsed: '',
    src: '',
  },
  {
    image: imageActivity,
    title: 'Activity Diagram',
    techUsed: '',
    src: '',
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
                  <h3>{value.techUsed}</h3>
                  <h4>
                    <p>{value.title}</p>
                  </h4>
                  <div className="portfolio-button">
                    <a
                      className="rn-btn"
                      href={value.src}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Details
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
