import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class TabsTwo extends Component {
  render() {
    let tab1 = 'Skills',
      tab2 = 'Work Experience',
      tab3 = 'Education & Certifications';

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
                            Web Development{' '}
                          </span>
                          <span> - UI/UX</span>
                          <br></br>
                          <p>
                            > Experience implementing front-end web applications
                            with tools <br></br> such as HTML5, CSS3, JS and
                            React.
                          </p>
                        </li>
                        <li>
                          <span class="about-sub-heading">Technical Work</span>
                          <span> - Computer Systems</span>
                          <br></br>> Working experience with building and
                          maintaining personal computer systems.
                        </li>
                        <li>
                          <span class="about-sub-heading">
                            Software Proficient
                          </span>{' '}
                          <span> - Microsoft Office</span>
                          <br></br>> Understanding of core office suite
                          functionality. Experience working with Word,
                          Powerpoint, and Excel.
                        </li>
                      </ul>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="single-tab-content">
                      <ul>
                        <li>
                          <span class="about-sub-heading">AFC Sushi</span>
                          <span> - SKN LLC</span>
                          <br></br>
                          2019 - Current
                        </li>
                        <li>
                          <span class="about-sub-heading">Team Member</span>
                          <span> - CAVA</span>
                          <br></br>
                          2018 - 2019
                        </li>
                        <li>
                          <span class="about-sub-heading">
                            Customer Service Clerk
                          </span>
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
                          <span class="about-sub-heading">
                            Information Technology ( B.S. ){' '}
                          </span>
                          <span> - George Mason University, Fairfax, VA</span>
                          <br></br>
                          2021
                        </li>
                        <li>
                          <span class="about-sub-heading">
                            Information Technology ( A.S. ){' '}
                          </span>
                          <span>
                            {' '}
                            - Northern Virginia Community College, Annandale, VA{' '}
                          </span>
                          <br></br>
                          2018
                        </li>
                        <li>
                          <span class="about-sub-heading">CompTIA A+ </span>
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
