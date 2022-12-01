import Section from './Section/Section';
import FeedbackOptions from './FeedbabkOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import { useState } from 'react';
import css from './App.module.css';

export const App = () => {
  const [goodReview, setGoodReview] = useState(0);
  const [badReview, setBadReview] = useState(0);
  const [neutralReview, setNeutralReview] = useState(0);

  //
  const countTotalFeedback = () => {
    const totalFeedback = [goodReview, badReview, neutralReview].reduce(
      function (previous, value) {
        return previous + value;
      },
      0
    );
    return totalFeedback;
  };
  const countPositiveFeedbackPercentage = () => {
    return Math.round((goodReview / countTotalFeedback()) * 100);
  };
  //

  return (
    <div className={css.FeedbackForm}>
      <Section title="Please leave your feedback">
        <FeedbackOptions
          handleBadReview={() => setBadReview(badReview + 1)}
          handleGoodReview={() => setGoodReview(goodReview + 1)}
          handleNeutralReview={() => setNeutralReview(neutralReview + 1)}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            goodReview={goodReview}
            badReview={badReview}
            neutralReview={neutralReview}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  );
};
