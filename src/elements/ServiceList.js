import React, { Component } from 'react';
import {
  FiBook,
  FiDatabase,
  FiLayers,
  FiSmile,
  FiZap,
  FiUsers,
} from 'react-icons/fi';

const ServiceList = [
  {
    icon: <FiBook />,
    title: 'Resource Management',
    description:
      'A resource management system (RMS) supports check-in counter allocation and baggage handling',
  },
  {
    icon: <FiZap />,
    title: 'Real-Time Information',
    description:
      'The flight information display system (FIDS) provides passengers with real-time updates on screens and destination boards, ensuring the smooth flow of people',
  },
  {
    icon: <FiUsers />,
    title: 'Communication',
    description:
      'A state-of-the-art solution for message based communication, supporting and automating the airport’s business processes by minimizing manual user interaction and therefore improving overall efficiency',
  },
  {
    icon: <FiDatabase />,
    title: 'Big Data Analytics',
    description:
      'The AODB can be made available to a high number of different service providers at a given location, and supports airport management by leveraging powerful technologies such as big data analytics.',
  },
  {
    icon: <FiLayers />,
    title: 'End-to-End Solutions',
    description:
      'Obtain flight related information via any internet connection – to the second – with any browser enabled device. ',
  },
  {
    icon: <FiSmile />,
    title: 'Customer Satisfaction',
    description:
      'Each passenger’s perception of their airport experience is influenced by every interaction with the airport environment and staff.',
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
