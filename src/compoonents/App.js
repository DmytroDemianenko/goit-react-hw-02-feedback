import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';
import Statistics from './Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedback = () => {
    const { good } = this.state;
    const rate = good / this.countTotalFeedback();
    return (rate * 100).toFixed(2);
  };
  addVote = name => {
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const buttonTitles = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const positivePercentage = +this.countPositiveFeedback();
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={buttonTitles}
            onLeaveFeedback={this.addVote}
          />
        </Section>
        <Section title="Statistics">
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback"> </Notification>
          )}
        </Section>
      </>
    );
  }
}
export default App;
