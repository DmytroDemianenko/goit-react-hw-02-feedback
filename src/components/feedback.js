import PropTypes from 'prop-types';
import React from 'react';

const feedback = () => {
  return (
    <div>
        <h2>Please leave feedback</h2>
    <button>Good
      </button>
      <button>Neutral</button>
      <button>Bad</button>
      <h3>Statistics</h3>
      <p>Good: ' '</p>
      <p>Neutral: ' '</p>
      <p>Bad: ' '</p>
  </div>
  )
}
export default feedback;



// import PropTypes from 'prop-types';
// import style from './Friends.module.css';
// const Friends = ({ avatar, name, isOnline }) => {
//   return (
//     <li className={style.friend}>
//       <span className={style[isOnline]}></span>
//       <img className={style.avatar} src={avatar} alt={name} width="48" />
//       <p className="name">{name}</p>
//     </li>
//   );
// };
// Friends.propTypes = {
//   isOnline: PropTypes.bool.isRequired,
//   avatar: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
// };
// export default Friends;