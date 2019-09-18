import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  
  render() {
    // debugger
    const generatePetCards =
      
      this.props.pets.map((pet,index) => {
        // debugger
         return <Pet isAdopted={pet.isAdopted} key={index} pet={pet} onAdoptPet={this.props.onAdoptPet} />
      })
    return <div className="ui cards">
      {generatePetCards}
    </div>
  }
}

export default PetBrowser
