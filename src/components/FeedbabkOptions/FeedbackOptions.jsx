import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({
  handleGoodReview,
  handleNeutralReview,
  handleBadReview,
}) => {
  return (
    <ul className={css.BtnList}>
      <li>
        <button
          className={css.BtnOption}
          type="button"
          onClick={handleGoodReview}
        >
          Good
        </button>
      </li>
      <li>
        <button
          className={css.BtnOption}
          type="button"
          onClick={handleNeutralReview}
        >
          Neutral
        </button>
      </li>
      <li>
        <button
          className={css.BtnOption}
          type="button"
          onClick={handleBadReview}
        >
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
