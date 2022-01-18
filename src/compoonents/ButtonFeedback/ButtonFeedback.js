import PropTypes from 'prop-types';
import React from 'react';
const ButtonFeedback = ({ name, buttonClick }) => {
  return (
    <button name={name} type="button" onClick={buttonClick}>
      {name}
    </button>
  );
};

ButtonFeedback.propTypes = {
  name: PropTypes.string.isRequired,
};
export default ButtonFeedback;
