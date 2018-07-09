import React from 'react';
import './Landing.scss';
import Button from '../Button/Button'


const Landing = (props) => {
    return (
      <div className="Landing">
        <Button updateClick= {props.updateClick}
                value="people"/>
        <Button updateClick= {props.updateClick}
                value="planets"/>
        <Button updateClick= {props.updateClick}
                value="vehicles"/>
        <main>{props.category}</main>
      </div>
    )
}

// Landing.propTypes.things = {

// }

export default Landing