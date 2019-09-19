import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  onAdoptPet = event => {
    let id = event.target.getAttribute('petid')
    this.props.handleAdoption(id)
  }

  render() {
    let petCards = []
    this.props.pets.forEach((element,index) => {
      petCards.push(<div key={index} className="ui cards"><Pet pet={element} onAdoptPet={this.onAdoptPet}/></div>)
    });
    return <div>{petCards}</div>
  }
}

export default PetBrowser
