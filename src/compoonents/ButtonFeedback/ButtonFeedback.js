import React from "react";

const ButtonFeedback = ({ name, buttonClick })=>{
    return (
        <button
            name={name}
            type='button'
            onClick={buttonClick}
        >
            {name}
        </button>
    );
}
export default ButtonFeedback;