import propTypes from 'prop-types';
import ButtonFeedback from '../ButtonFeedback';
import s from './FeedbackOptions.module.css';
import React from 'react';
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={s.feedbackList}>
      {options.map(option => (
        <li className={s.feedbackItem} key={option}>
          <ButtonFeedback
            name={option}
            buttonClick={onLeaveFeedback}
          ></ButtonFeedback>
        </li>
      ))}
      
    </ul>
  );
};
FeedbackOptions.propTypes = {
  // onLeaveFeedback: propTypes.string,
  // options: propTypes.object,
};
export default FeedbackOptions;
