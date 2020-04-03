import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class PageHelmet extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>{this.props.pageTitle} || Portfolio </title>
          <meta name="description" content="Portfolio Page for Nay Naing" />
        </Helmet>
      </React.Fragment>
    );
  }
}

export default PageHelmet;
