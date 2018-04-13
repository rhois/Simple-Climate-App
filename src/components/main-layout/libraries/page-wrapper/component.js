import React from 'react';
import PropTypes from 'prop-types';

export const PageWrapper = ({ title, actions, children, widthContainer }) => {
  const titleComponent = title.length ? (<div className="col-lg-12">
    <h1 className="page-header">{title}</h1>
    {actions}
  </div>) : <p />;

  return (
    <div id="page-wrapper">
      <div className="row">
        { titleComponent }
      </div>
      {children}
    </div>
  );
};

PageWrapper.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
  actions: PropTypes.any,
  widthContainer: PropTypes.number,
};
PageWrapper.defaultProps = {
  title: '',
  children: {},
  actions: [],
  widthContainer: 978,
};

export default PageWrapper;
