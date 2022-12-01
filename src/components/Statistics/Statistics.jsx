import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({
  goodReview,
  badReview,
  neutralReview,
  total,
  positivePercentage,
}) => {
  return (
    <ul className={css.StatisticsList}>
      <li className={css.StatisticsItem}>
        Good:<span>{goodReview}</span>
      </li>
      <li className={css.StatisticsItem}>
        Bad:<span>{badReview}</span>
      </li>
      <li className={css.StatisticsItem}>
        Neutral:<span>{neutralReview}</span>
      </li>
      <li className={css.StatisticsItem}>
        Total:
        <span>{total}</span>
      </li>
      <li>
        Positive feedback:
        <span>{positivePercentage}%</span>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  goodReview: PropTypes.number.isRequired,
  badReview: PropTypes.number.isRequired,
  neutralReview: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
export default Statistics;
