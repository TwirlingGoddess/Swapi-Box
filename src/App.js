import React, { Component } from 'react';
import './App.scss';
import Scroller from './Scroller'

class App extends Component {
  constuctor(props) {
    super(props)
    this.state = {
      cards: []
    }
  }

  ComponentDidMount = (info) => {
    const url = `http https://swapi.co/api/`
      fetch(url)
      .then(response => response.json())
      .then(data => props.intro(data.films))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header"> yasss
        </header>
        <Scroller />
      </div>
    );
  }
}

// App.propTypes.cards = {

// }

export default App;
