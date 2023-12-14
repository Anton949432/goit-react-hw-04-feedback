// eslint-disable-next-line
import React, { useState, useEffect } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Notification';

const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleLeaveFeedback = (option) => {
    setFeedback((prevFeedback) => ({ ...prevFeedback, [option]: prevFeedback[option] + 1 }));
  };

  const { good, neutral, bad } = feedback;
  const total = good + neutral + bad;
  const positivePercentage = total === 0 ? 0 : Math.round((good / total) * 100);

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={handleLeaveFeedback} />
      </Section>

      <Section title="Statistics">
        {total > 0 ? (
          <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </div>
  );
};

export default App;
