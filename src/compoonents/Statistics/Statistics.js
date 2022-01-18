import PropTypes from 'prop-types';
import s from './Statistics.module.css';
import React from 'react';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <p className={s.secondaryText}>Good: {good}</p>
      <p className={s.secondaryText}>Neutral: {neutral}</p>
      <p className={s.secondaryText}>Bad: {bad}</p>
      <p className={s.secondaryText}>Total: {total}</p>
      <p className={s.secondaryText}>
        Positive feedback: {positivePercentage} %
      </p>
    </>
  );
};
Statistics.propTypes = {
  options: PropTypes.object,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
  }
export default Statistics;