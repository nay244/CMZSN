import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class TabsTwo extends Component {
  render() {
    let tab1 = 'Main skills',
      tab2 = 'Experience',
      tab3 = 'Education & Certification';

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
                          <a href="/service">
                            User experience design <span> - UI/UX</span>
                          </a>
                          Delight the user and make it work.
                        </li>
                        <li>
                          <a href="/service">
                            Web and user interface design
                            <span> - Development</span>
                          </a>
                          Websites, web experiences
                        </li>
                        <li>
                          <a href="/service">
                            Interaction design <span> - Animation</span>
                          </a>
                          Create stunning animations.
                        </li>
                      </ul>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <a href="/service">
                            AFC Sushi<span> - SKN LLC</span>
                          </a>{' '}
                          2018 - Current
                        </li>
                        <li>
                          <a href="/service">
                            Team Member<span> - CAVA</span>
                          </a>{' '}
                          2018 - 2019
                        </li>
                        <li>
                          <a href="/service">
                            Customer Service Clerk
                            <span> - Harris Teeter </span>
                          </a>{' '}
                          2015- 2018
                        </li>
                      </ul>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <a href="/service">
                            Information Technology (BS)
                            <span> - George Mason University, Fairfax, VA</span>
                          </a>{' '}
                          2021
                        </li>
                        <li>
                          <a href="/service">
                            CompTIA A+
                            <span> - CompTIA </span>
                          </a>{' '}
                          2020
                        </li>
                        <li>
                          <a href="/service">
                            CompTIA Security+
                            <span> - CompTIA </span>
                          </a>{' '}
                          2020
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
