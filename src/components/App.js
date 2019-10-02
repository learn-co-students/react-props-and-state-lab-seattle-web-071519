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

  onAdoptPet = petId => {
    this.setState(prevState =>{
      let updatedPets = [...prevState.pets]
      updatedPets.forEach(pet => {
        if (pet.id === petId) {
          pet.isAdopted = true
        }
      })
      return updatedPets
    })
  }
  
  onChangeType = e => {
    this.setState({
      filters: {
        type: e.target.value 
      }
    })
  }

  onFindPetsClick = () =>{
    let url = '/api/pets'
    fetch(this.state.filters.type !== 'all' ? url+`?type=${this.state.filters.type}`:url)
    .then(response => response.json())
    .then(pets => this.setState({pets}))
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
              <Filters 
              onChangeType={this.onChangeType}
              onFindPetsClick={this.onFindPetsClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser
              pets={this.state.pets}
              onAdoptPet={this.onAdoptPet}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
