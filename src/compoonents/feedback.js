// // import PropTypes from "prop-types";
// import React from "react";
// import s from "./Feedback.module.css";

// class Feedback extends React.Component {
//   static defaultProps = { 
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   }
//   state = {
//     good: this.props.good,
//     neutral: this.props.neutral,
//     bad: this.props.bad,
//   };
//   goodFeedback = () => {
//     this.setState((prevState) => {
//       return {
//         good: prevState.good + 1,
//       };
//     });
//   };
//   neutralFeedback = () => {
//     this.setState((prevState) => {
//       return {
//         neutral: prevState.neutral + 1,
//       };
//     });
//   };
//   badFeedback = () => {
//     this.setState((prevState) => {
//       return {
//         bad: prevState.bad + 1,
//       };
//     });
//   };
//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad
//   };
//     countPositiveFedback = () => {
//     const { good } = this.state;
//     const rate = good / this.countTotalFeedback();
//     return (rate * 100).toFixed(2);
//   }
//   countPositiveFeedbackPercentage = () => {};
//   render() {
//     return (
//       <div className={s.container}>
//         <h2 className={s.title}>Please leave feedback</h2>
//         <button className={s.button} type="button" onClick={this.goodFeedback}>
//           Good
//         </button>
//         <button
//           className={s.button}
//           type="button"
//           onClick={this.neutralFeedback}
//         >
//           Neutral
//         </button>
//         <button className={s.button} type="button" onClick={this.badFeedback}>
//           Bad
//         </button>
//         <h3 className={s.title}>Statistics</h3>
//         <p>Good: {this.state.good}</p>
//         <p>Neutral: {this.state.neutral}</p>
//         <p>Bad: {this.state.bad}</p>
//         <p>Total: {this.countTotalFeedback()}</p>
//         <p>Positive feedback: {this.countPositiveFedback()} %</p>
//       </div>
//     );
//   }
// }
// export default Feedback;
