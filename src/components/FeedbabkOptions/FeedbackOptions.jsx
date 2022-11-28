import PropTypes from 'prop-types';
import './FeedbackOptions.css';

const FeedbackOptions = ({
  handleGoodReview,
  handleNeutralReview,
  handleBadReview,
}) => {
  return (
    <ul className="BtnList">
      <li>
        <button className="BtnOption" type="button" onClick={handleGoodReview}>
          Good
        </button>
      </li>
      <li>
        <button
          className="BtnOption"
          type="button"
          onClick={handleNeutralReview}
        >
          Neutral
        </button>
      </li>
      <li>
        <button className="BtnOption" type="button" onClick={handleBadReview}>
          Bad
        </button>
      </li>
    </ul>
  );
};

FeedbackOptions.propTypes = {
  handleGoodReview: PropTypes.func.isRequired,
  handleNeutralReview: PropTypes.func.isRequired,
  handleBadReview: PropTypes.func.isRequired,
};
export default FeedbackOptions;
