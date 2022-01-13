// import PropTypes from 'prop-types';
import s from '../Feedback.module.css';
import React from 'react';
const Statistics = ({ options, countTotalFeedback, countPositiveFedback }) => {
  return (
    <>
      <h3 className={s.title}>Statistics</h3>
      <p>Good: {options.good}</p>
      <p>Neutral: {options.neutral}</p>
      <p>Bad: {options.bad}</p>
      <p>Total: {countTotalFeedback()}</p>
      <p>Positive feedback: {countPositiveFedback()} %</p>
    </>
  );
};
export default Statistics;