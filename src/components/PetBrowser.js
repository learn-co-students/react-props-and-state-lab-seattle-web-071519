import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  renderPets = () =>{
    return this.props.pets.map((pet,index)=> {return <Pet onAdoptPet={this.props.onAdoptPet} key={index} pet={pet}/>})
  }

  render() {
    return <div className="ui cards">{this.renderPets()}</div>
  }
}

export default PetBrowser
