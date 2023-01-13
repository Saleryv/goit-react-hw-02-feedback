import PropTypes from 'prop-types';
import css from '../Statistics/Statistics.module.css';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <h3 className={css.statistics}>Statistics</h3>
      <p className={css.item}>Good: {good}</p>
      <p className={css.item}>Neutral: {neutral}</p>
      <p className={css.item}>Bad :{bad}</p>
      <p className={css.item}>Total :{total}</p>
      <p className={css.item}>Positive feedback : {' '}
          {Math.round(positivePercentage)} %</p>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number,
};
