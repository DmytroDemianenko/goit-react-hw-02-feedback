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
  goodFeedback = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };
  neutralFeedback = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };
  badFeedback = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
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

  render() {
    const options = this.state;
    const goodFeedback = this.goodFeedback;
    const neutralFeedback = this.neutralFeedback;
    const badFeedback = this.badFeedback;
    const onLeaveFeedback = { goodFeedback, neutralFeedback, badFeedback };
    const total = this.countTotalFeedback();
    const positivePercentage = +this.countPositiveFeedback();
      return (
      <>
        <Section  title='Please leave feedback'>
          <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
          </Section>
        <Section title='Statistics'>
          {total ? <Statistics
          options={options}
          total={total}
          positivePercentage={positivePercentage}
        /> : <Notification message='There is no feedback'> </Notification>}
        </Section>
      </>
    );
  }
}
export default App;
