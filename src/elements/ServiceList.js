import React, { Component } from 'react';
import {
  FiCodesandbox,
  FiRss,
  FiMonitor,
  FiDatabase,
  FiCloudLightning,
  FiSmile,
} from 'react-icons/fi';

const ServiceList = [
  {
    icon: <FiCodesandbox />,
    title: 'Coding',
    description:
      'Experience working with basic functions of various programming languages such as JAVA, HTML, CSS, React, and PHP.',
  },
  {
    icon: <FiMonitor />,
    title: 'Web Development',
    description:
      'Experience working with front-end web applications and development tools such as HTML5, CSS3, JS and React.',
  },
  {
    icon: <FiDatabase />,
    title: 'Databases',
    description:
      'Working knowledge of SQL programming and working with database software such as MySQL and PostgreSQL in performing basic search functions and creation of tables.',
  },
  {
    icon: <FiRss />,
    title: 'Networks',
    description:
      'Familiar with network architecture and concepts relating to setting up, testing and maintaining network switches and routers in a home environment.',
  },
  {
    icon: <FiSmile />,
    title: 'Customer Service',
    description:
      '4 years of experience in a position where great customer service skills were a necessity in ensuring each customer had an excellent shopping experience and were satisfied with their trip.',
  },
  {
    icon: <FiCloudLightning />,
    title: 'Logical Thinking',
    description:
      'Able to observe and analyze reactions, and feedback from others and then draw conclusions based on input. Justify strategies, actions, and decisions based on the facts.',
  },
];

class Service extends Component {
  render() {
    const { column } = this.props;
    const ServiceContent = ServiceList.slice(0, this.props.item);

    return (
      <React.Fragment>
        <div className="row">
          {ServiceContent.map((val, i) => (
            <div className={`${column}`} key={i}>
              <a href="/service-details">
                <div className="service service__style--2">
                  <div className="icon">{val.icon}</div>
                  <div className="content">
                    <h3 className="title">{val.title}</h3>
                    <p>{val.description}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}
export default Service;
