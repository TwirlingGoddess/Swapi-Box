import React, { Component } from 'react';
import './App.css';
import Card from '../Card/Card';
import Landing from '../Landing/Landing';
import Scroller from '../Scroller/Scroller';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      horiscope: [],
      categories: [],
      cards: [],
      categoryNum: Math.floor((Math.random() * 7) + 1)
    }
  }

  filterData = async (data) => {
    let response = await fetch(data.films)
    let info = await response.json()
    let endGame =  info.results.map( film => (
      <Scroller paragraph={film.opening_crawl} 
                title = {film.title}
                years = {film.release_date}
                key = {Date.now() * Math.random()}
      />))
    return Promise.all(endGame) 
  }

  async componentDidMount() {
    let response = await fetch(`https://swapi.co/api/`)
    let newData = await response.json()
    let scrollData = await this.filterData(newData)
    this.setState({
        horiscope: scrollData,
        categories: newData
      })
    return Promise.all(scrollData)
  }

  updateClick = async (event) => {
    this.setState({
      cards: []
    })
    let url = await event.target.value
    let response = await fetch(this.state.categories[url])
    let newData = await response.json()
    await this.fetchPages(newData)
  }

  fetchPages = async (data) => {
    this.setState({
      cards: [...this.state.cards, ...data.results]
    })
    let response = await fetch(data.next)
    let otherData = await response.json()
    await this.fetchPages(otherData)    
  }

  // updateCards = () => {
  //   console.log('hellnawl')
  //   this.state.cards.map(things => console.log(things))
  // }

  render() {
    if(!this.state.cards.length){
      return (
        <div className="App">
          <header>
            <h1>Swapi Box</h1>
            <button>Favorites<span>#</span></button>
          </header>
          <Landing  categories={this.state.categories}
                    updateClick={this.updateClick} />
          <main>{this.state.horiscope[this.state.categoryNum]}</main>
        </div>
      );
    } else {
      return (
        <div className="App">
          <header>
            <h1>Swapi Box</h1>
            <button>Favorites<span>#</span></button>
          </header>
          <Landing  categories={this.state.categories}
                    updateClick={this.updateClick}/>
          <main>{this.state.cards.map(card => {
                                          return (
                                              <Card cards={this.state.cards}
                                                    key={Date.now() * Math.random()}
                                                    {...card}
                                              />)})}
          </main>
        </div>
      );
    }
  }
}

// App.propTypes.cards = {

// }

export default App;
