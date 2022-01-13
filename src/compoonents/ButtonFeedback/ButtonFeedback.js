import React from 'react';

const ButtonFeedback = ({ name, buttonClick }) => {
  return (
    <li>
      <button name={name} type="button" onClick={buttonClick}>
        {name}
      </button>
    </li>
  );
};
export default ButtonFeedback;
