/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

export class NavLink extends Component { //eslint-disable-line
  render() {
    const propsTo = this.props.to;
    const currentRoute = this.context.router.location.pathname;
    const reg = new RegExp(`${propsTo}.*`);
    const isActive = reg.test(currentRoute);
    const className = isActive ? 'active' : '';

    return (
      <Link {...this.props} className={className} />
    );
  }
}

NavLink.contextTypes = {
  router: PropTypes.object.isRequired,
};

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
};

export default NavLink;
