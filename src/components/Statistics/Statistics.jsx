import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import './Statistics.css';

const Statistics = ({ goodReview, badReview, neutralReview }) => {
  const [totalFeedback, setTotalFeedback] = useState(0);
  const [PositiveFeedbackPercentage, setPositiveFeedbackPercentage] =
    useState(0);
  function countTotalFeedback() {
    setTotalFeedback(goodReview + badReview + neutralReview);
  }
  function countPositiveFeedbackPercentage() {
    setPositiveFeedbackPercentage(
      Math.round((goodReview / (neutralReview + badReview + goodReview)) * 100)
    );
  }
  useEffect(() => {
    countTotalFeedback();
    countPositiveFeedbackPercentage();
  }, [goodReview, badReview, neutralReview]);
  return (
    <ul className="StatisticsList">
      <li className="StatisticsItem">
        Good:<span>{goodReview}</span>
      </li>
      <li className="StatisticsItem">
        Bad:<span>{badReview}</span>
      </li>
      <li className="StatisticsItem">
        Neutral:<span>{neutralReview}</span>
      </li>
      <li className="StatisticsItem">
        Total:
        <span>{totalFeedback}</span>
      </li>
      <li>
        Positive feedback:
        <span>{PositiveFeedbackPercentage}%</span>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  goodReview: PropTypes.number.isRequired,
  badReview: PropTypes.number.isRequired,
  neutralReview: PropTypes.number.isRequired,
};
export default Statistics;
