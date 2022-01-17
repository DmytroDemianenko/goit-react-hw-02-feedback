import PropTypes from 'prop-types';
import s from './Statistics.module.css';
import React from 'react';
const Statistics = ({ options, total, positivePercentage }) => {
  return (
    <>
      <p className={s.secondaryText}>Good: {options.good}</p>
      <p className={s.secondaryText}>Neutral: {options.neutral}</p>
      <p className={s.secondaryText}>Bad: {options.bad}</p>
      <p className={s.secondaryText}>Total: {total}</p>
      <p className={s.secondaryText}>Positive feedback: {positivePercentage} %</p>
    </>
  );
};
Statistics.propTypes = {
  options: PropTypes.object,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
  }
export default Statistics;