import React from 'react';
import PropTypes from 'prop-types';

export const SvgIcon = ({ name, color, width, height }) => {
  const iconColor = color || '#727272';
  const iconWidth = width || 24;
  const iconHeight = height || 24;
  const iconStyle = {
    color: iconColor,
    width: iconWidth,
    height: iconHeight,
  };

  return (
    <svg style={iconStyle} className={`icon ${name}`}>
      <use xlinkHref={`/icons.svg#icon-${name}`} />
    </svg>
  );
};

SvgIcon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

SvgIcon.defaultProps = {
  color: '#727272',
  width: 24,
  height: 24,
};

export default SvgIcon;
