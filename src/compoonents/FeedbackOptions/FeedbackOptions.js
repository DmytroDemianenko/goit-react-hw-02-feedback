// import propTypes from 'prop-types';
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
      {/* <button
        className={s.button}
        type="button"
        onClick={() => {
          onLeaveFeedback.goodFeedback();
        }}
      >
        Good
      </button>
      <button
        className={s.button}
        type="button"
        onClick={() => {
          onLeaveFeedback.neutralFeedback();
        }}
      >
        Neutral
      </button>
      <button
        className={s.button}
        type="button"
        onClick={() => {
          onLeaveFeedback.badFeedback();
        }}
      >
        Bad
      </button> */}
    </ul>
  );
};
// FeedbackOptions.propTypes = {
//   onLeaveFeedback: propTypes.object,
// }
export default FeedbackOptions;
