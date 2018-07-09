import React, { Component } from 'react';
import './Scroller.scss';


class Scroller extends Component {
  constructor({props}){
    super(props)

}
    render(){
      return (
        <div className="Scroller">
          <p>{this.props.paragraph}</p>
          <h3>{this.props.title}</h3>
          <h4>{this.props.years}</h4>
        </div>
      )
    }
  
}

// Scroller.propTypes.things = {
  
// }

export default Scroller