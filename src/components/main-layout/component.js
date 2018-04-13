import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Header } from './libraries/header/component';
import { Navigation } from './libraries/navigation';

export class MainLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classPath: '',
      containerHeight: '',
    };
  }
  componentWillMount() {
    this.setState({
      classPath: window.location.pathname.substring(1),
      containerHeight: window.innerHeight,
    });
  }
  render() {
    const {
      children,
    } = this.props;
    return (
      <div id="wrapper">
        <nav className="navbar navbar-default navbar-static-top">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="index.html">SB Admin v2.0</a>
          </div>
          <Header />
          <div className="navbar-default sidebar">
            <Navigation />
          </div>
        </nav>
        {children}
      </div>
    );
  }
}
MainLayout.propTypes = {
  children: PropTypes.object.isRequired,
};

export default MainLayout;

