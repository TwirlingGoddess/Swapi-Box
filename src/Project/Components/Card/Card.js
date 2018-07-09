import React from 'react'

const Card = (props) => {
  if(this.props.state.card.length === 39){
  return(
    <div>
      <h2>{this.props.name}</h2>
      <p>Model:{this.props.model}</p>
      <p>Class:{this.props.class}</p>
      <p># of Passengers:{this.props.passengers}</p>
      <button>*</button>
    </div>
  )
}
  if(this.props.state.card.length === 61) {
    return(
      <div>
        <h2>{this.props.name}</h2>
        <p>Terrain:{this.props.terrain}</p>
        <p>Population:{this.props.population}</p>
        <p>Climate:{this.props.climate}</p>
        <p>Residents:{this.props.residents}</p>
        <button>*</button>
      </div>
    )
  }
  if(this.props.state.card.length = 87)
  return(
    <div>
      <h2>{this.props.name}</h2>
      <p>Homeworld:{this.props.homeworld}</p>
      <p>Species:{this.props.species}</p>
      <p>Language:{this.props.language}</p>
      <p>Population:{this.props.population}</p>
    </div>
  )
}

export default Card