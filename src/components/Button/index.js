import React from 'react';

import propTypes from 'prop-types';

function Button(props) {
  const className = [props.className];
  if (props.isAdd) className.push('btn-add');
  if (props.isSticky) className.push('btn-sticky');

  const onClick = () => {
    if (props.onClick) props.onClick();
  };
  return (
    <button
      className={className.join(' ')}
      style={props.style}
      onClick={onClick}>
      {props.children}
    </button>
  );
}

export default Button;

Button.propTypes = {
  onClick: propTypes.func,
  className: propTypes.string,
  isAdd: propTypes.bool,
  isSticky: propTypes.bool,
};
