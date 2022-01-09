import React, {Component} from "react";
// import Feedback from "./Feedback";
import s from "./Feedback.module.css";
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification/Notification';
import Statistics from './Statistics';

class App extends Component {
  static defaultProps = { 
    good: 0,
    neutral: 0,
    bad: 0,
  }
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  goodFeedback = () => {
    this.setState((prevState) => {
      return {
        good: prevState.good + 1,
      };
    });
  };
  neutralFeedback = () => {
    this.setState((prevState) => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };
  badFeedback = () => {
    this.setState((prevState) => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad
  };
    countPositiveFedback = () => {
    const { good } = this.state;
    const rate = good / this.countTotalFeedback();
    return (rate * 100).toFixed(2);
  }
  countPositiveFeedbackPercentage = () => {};
  render() {
    return (
      <div className={s.container}>
        <Section title='Leave your feedback please'>
          {/* <FeedbackOptions
          options={controlTitles}
          onLeaveFeedback={this.addVote}>
        </FeedbackOptions>  */}
        </Section>
        <FeedbackOptions good={this.state.good} neutral={this.state.neutral} bad={this.state.bad}/>
        <h3 className={s.title}>Statistics</h3>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
        <p>Total: {this.countTotalFeedback()}</p>
        <p>Positive feedback: {this.countPositiveFedback()} %</p>
      </div>
    );
  }
}
export default App;
