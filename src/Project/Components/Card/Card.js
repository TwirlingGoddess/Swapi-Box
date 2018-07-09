import React, {Component} from 'react'

class Card extends Component {
  constructor(props) {
    super(props)
  }
  // const {name, model, clas, passengers, terrain, population,
  //   climate, residents, homeworld, species,language} = props
  if(this.props.cards.length === 39){
    render(){
      return(
        <div>
          <h2>{props.name}</h2>
          <p>Model:{props.model}</p>
          <p>Class:{props.clas}</p>
          <p># of Passengers:{props.passengers}</p>
          <button>*</button>
        </div>
      )
    }
  }
  if(props.cards.length === 61) {
    render(){
      return(
        <div>
          <h2>{props.name}</h2>
          <p>Terrain:{props.terrain}</p>
          <p>Population:{props.population}</p>
          <p>Climate:{props.climate}</p>
          <p>Residents:{props.residents}</p>
          <button>*</button>
        </div>
      )
    }
  }
  if(props.cards.length === 87) {
    render(){
      return(
        <div>
          <h2>{props.name}</h2>
          <p>Homeworld:{props.homeworld}</p>
          <p>Species:{props.species}</p>
          <p>Language:{props.language}</p>
          <p>Population:{props.population}</p>
        </div>
      )
    }
  }
}

export default Card