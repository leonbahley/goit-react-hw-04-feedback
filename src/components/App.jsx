import Section from './Section/Section';
import FeedbackOptions from './FeedbabkOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import { useState } from 'react';
export const App = () => {
  const [goodReview, setGoodReview] = useState(0);
  const [badReview, setBadReview] = useState(0);
  const [neutralReview, setNeutralReview] = useState(0);

  return (
    <div className="FeedbackForm">
      <Section title="Please leave your feedback">
        <FeedbackOptions
          handleBadReview={() => setBadReview(badReview + 1)}
          handleGoodReview={() => setGoodReview(goodReview + 1)}
          handleNeutralReview={() => setNeutralReview(neutralReview + 1)}
        />
      </Section>
      <Section title="Statistics">
        {neutralReview + badReview + goodReview === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            goodReview={goodReview}
            badReview={badReview}
            neutralReview={neutralReview}
          />
        )}
      </Section>
    </div>
  );
};
