import propTypes from 'prop-types';
import s from './FeedbackOptions.module.css';
import React from 'react';
const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <>
      <button
        className={s.button}
        type="button"
        onClick={() => {onLeaveFeedback.goodFeedback()}}
      >
        Good
      </button>
      <button
        className={s.button}
        type="button"
        onClick={() => {onLeaveFeedback.neutralFeedback()}}
      >
        Neutral
      </button>
      <button
        className={s.button}
        type="button"
        onClick={() => {onLeaveFeedback.badFeedback()}}
      >
        Bad
      </button>
    </>
  );
};
FeedbackOptions.propTypes = {
  onLeaveFeedback: propTypes.object,
}
export default FeedbackOptions;
