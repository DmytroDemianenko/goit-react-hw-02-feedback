import s from '../Feedback.module.css';
import React from 'react';
const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <>
      <h2 className={s.title}>Please leave feedback</h2>
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
export default FeedbackOptions;
