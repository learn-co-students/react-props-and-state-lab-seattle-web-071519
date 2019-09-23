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

  changeType = (newType) => {
    console.log(newType)
    this.setState((prevState) => ({
      filters: {
        type: newType
      }
    }))
  }

  fetchPets = () => {
    console.log("Fetching pets")
    let keyword = this.state.filters.type
    let apiURL = keyword === 'all' ? "/api/pets" : `/api/pets?type=${keyword}`
    fetch(apiURL)
      .then(response => response.json())
      .then(pets => {
        console.log(pets)
        this.setState((prevState) => ({
          ...prevState,
          pets: pets
        }
        ))
      })
  }

  adoptPet = (pet) => {
    // console.log(pet)
    //  this.state.pets.map((currentPet) => {if(currentPet === pet) {currentPet.isAdopted = true}})

    // console.log(this.state.pets)
    this.setState((prevState) => {
      const newPets = [...prevState.pets]
      newPets.forEach((currentPet) => { 
        if (currentPet === pet) { 
          currentPet.isAdopted = true 
        } 
      });
      return { pets: newPets }
      // console.log(newPets)

      // this.setState(prevState => {
      //   const newPets = [...prevState.pets];
      //   newPets.forEach(pet => {
      //     if (pet.id === petId) {
      //       pet.isAdopted = true;
      //     }
      //   });
      //   return { pets: newPets };
      // });
    })
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
              <Filters onFindPetsClick={this.fetchPets} onChangeType={this.changeType} />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.adoptPet} pets={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
