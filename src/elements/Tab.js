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
                          User experience design <span> - UI/UX</span>
                          <br></br>
                          Delight the user and make it work.
                        </li>
                        <li>
                          Web and user interface design
                          <span> - Development</span>
                          <br></br>
                          Websites, web experiences
                        </li>
                        <li>
                          Interaction design <span> - Animation</span>
                          <br></br>
                          Create stunning animations.
                        </li>
                      </ul>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          AFC Sushi<span> - SKN LLC</span>
                          <br></br>
                          2019 - Current
                        </li>
                        <li>
                          Team Member<span> - CAVA</span>
                          <br></br>
                          2018 - 2019
                        </li>
                        <li>
                          Customer Service Clerk
                          <span> - Harris Teeter </span>
                          <br></br>
                          2015- 2018
                        </li>
                      </ul>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          Information Technology ( B.S. )
                          <span> - George Mason University, Fairfax, VA</span>
                          <br></br>
                          2021
                        </li>
                        <li>
                          Information Technology ( A.S. )
                          <span>
                            {' '}
                            - Northern Virginia Community College, Annandale, VA{' '}
                          </span>
                          <br></br>
                          2018
                        </li>
                        <li>
                          CompTIA A+
                          <span> - CompTIA </span>
                          <br></br>* In Progress *
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
