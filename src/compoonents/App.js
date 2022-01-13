import React, { Component } from 'react';
import s from './Feedback.module.css';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
// import Notification from './Notification';
import Statistics from './Statistics';
// import ButtonFeedback from './ButtonFeedback';

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
  countPositiveFedback = () => {
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

    return (
      <div className={s.container}>
        <Section>
          <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
          </Section>
        <Section>
          <Statistics
          options={options}
          countTotalFeedback={this.countTotalFeedback}
          countPositiveFedback={this.countPositiveFedback}
        />
        </Section>
      </div>
    );
  }
}
export default App;
