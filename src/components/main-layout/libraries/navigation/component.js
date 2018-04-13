import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from '../navlink/component';

export class Navigation extends Component {
  static handleClick({ self, collapse }) {
    self.setState({ collapse });
  }

  static handleClickNested({ self, collapseNested }) {
    self.setState({ collapseNested });
  }

  constructor(props) {
    super(props);
    this.state = {
      collapse: null,
      collapseNested: null,
      loginStatus: null,
    };
  }

  render() {
    return(
      <div className="sidebar-nav navbar-collapse">
        <ul className="nav" id="side-menu">
          <li className="sidebar-search">
              <div className="input-group custom-search-form">
                <input type="text" className="form-control" placeholder="Search..." />
                <span className="input-group-btn">
                  <button className="btn btn-default" type="button">
                      <i className="fa fa-search"></i>
                  </button>
                </span>
              </div>
          </li>
          <li>
            <NavLink to="/dashboard">
                <i className="fa fa-dashboard fa-fw" />
                <span>Dashboard</span>
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

Navigation.propTypes = {
  myProps: PropTypes.object,
};

Navigation.defaultProps = {
  myProps: {},
};

export default Navigation;
