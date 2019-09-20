import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  handleChangeType = (event) => {
    console.log('updating filter type to: ', event.target.value)
    this.setState({
      filters: {
        type: event.target.value
      }
    })
  }

  findPets = (event) => {
    let filter = this.state.filters.type
    let endPoint;
    if (filter === 'all'){
      endPoint = ''
    } else {
      endPoint = `?type=${filter}`
    }

    fetch(`/api/pets${endPoint}`)
      .then(response => response.json())
      .then(pets => this.setState({
        pets: pets
      }))
  }

  handleAdoptPet = (petID) => {
    console.log('adoptin a pet', this.state.pets)
    let pets = this.state.pets
    pets = pets.map(pet => {
      if (pet.id === petID){
        pet.isAdopted = true
      }
      return pet
    })
    this.setState({pets: pets})
    
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.handleChangeType} onFindPetsClick={this.findPets} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.handleAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
