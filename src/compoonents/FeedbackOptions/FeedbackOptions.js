// import propTypes from "prop-types";
// import s from "../Feedback.module.css";
import React from "react";
import ButtonFeedback from '../ButtonFeedback';
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
<ul>
                     {options.map((option) => (
                <li key={option}>
                    <ButtonFeedback name={option} controlClick={onLeaveFeedback}></ButtonFeedback>
                </li>
            ))}
</ul>
  )
};
export default FeedbackOptions;

//  <h2 className={s.title}>Please leave feedback</h2>
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