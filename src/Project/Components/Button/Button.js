import React from 'react';
import './Button.css';

const Button = (props) => {
  return(
    <button type="submit"
            onClick={(data) => props.updateClick(data)}
            value={props.value}>
      {props.type}
    </button>
  )
}

// Button.propTypes.cards = {

// }

export default Button