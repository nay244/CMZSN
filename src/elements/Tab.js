import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class TabsTwo extends Component {
  render() {
    let tab1 = 'Networks',
      tab2 = 'Cloud Computing',
      tab3 = 'Security';

    const { tabStyle } = this.props;
    return (
      <div>
        {/* Start Tabs Area */}
        <div className="tabs-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <Tabs>
                  <TabList className={`${tabStyle}`}>
                    <Tab>{tab1}</Tab>
                    <Tab>{tab2}</Tab>
                    <Tab>{tab3}</Tab>
                  </TabList>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <span class="about-sub-heading">
                          Future-proof networks{' '}
                          </span>
                          <span> - VPN Access / VoIP Integration</span>
                          <br></br>
                          <p>
                            Business needs are constantly changing from day to day and hour to hour. Like so, the networks that support those businesses also need to be equally dynamic. 
                            That means providing highly scalable bandwidth and enabling the rapid integration of new sites – anywhere in the world. 
                            New access methods can be selected and combined on the basis of cost and technical criteria to create the ideal solution for the task in hand. 
                            Corporate networks are better tailored and more efficient when the network infrastructure design is geared towards future needs.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <span class="about-sub-heading">End-to-End Cloud Computing</span>
                          <span> - Enterprise Solutions</span>
                          <br></br>
                          <p>
                          Unlike cloud solutions for consumers, enterprise cloud solutions have a strong focus on security, performance, high availability, and seamless integration. Only at this level are enterprises able to scale their IT resources, even at short notice, in order to reliably adapt them to the actual needs, as the cloud makes the required resources available in the form of infrastructure, platforms, or software-as-a-service.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <span class="about-sub-heading">
                            IT-Security{' '}
                          </span>
                          <span> - Security Needs Strategy</span>
                          <br></br>
                          <p>When companies move their business processes towards mobility, collaboration or the cloud, going without IT security is unthinkable. But a security concept is not only a challenge – it's also an opportunity.</p>
                        </li>
                      </ul>
                    </div>
                  </TabPanel>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
        {/* End Tabs Area */}
      </div>
    );
  }
}

export default TabsTwo;
