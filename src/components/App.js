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

  onChangeType = (event) => {
    // console.log(`Logging something`);
    // debugger
    let newType = event.target.value
    this.setState(prevState => {
      return {
        pets: prevState.pets,
        filters: {
          type: newType
        }
      }
    })
  }

  // fetchPets = async () => {
  //   let url = '/api/pets'
  //   // debugger
  //   //fyi could just use a ternary for this (set last word equal to the filter type)
  //   switch(this.state.filters.type) {
  //     case 'cat':
  //       url = '/api/pets?type=cat';
  //       break;
  //     case 'dog':
  //       url = '/api/pets?type=dog';
  //       break;
  //     case 'micropig':
  //       url = '/api/pets?type=micropig'
  //       break;
  //     default:
  //       url = '/api/pets'
  //       break;
  //   }
  //   let response = await fetch(url)
  //   let pets = await response.json()
  //   console.log(pets)
  //   this.setState({ pets })
  //   // debugger
  // }


  fetchPets = () => {
    let url = '/api/pets'
    let type = this.state.filters.type
    // debugger
    //fyi could just use a ternary for this (set last word equal to the filter type)
    url = (type !== 'all' ? (url + `?type=${type}`) : url)
    fetch(url)
    .then(response => response.json())
    .then(pets =>
    this.setState({ pets }))
    // debugger
  }

  onAdoptPet = (petId) => {
    debugger
    this.setState(prevState => {
      let updatedPets = [...prevState.pets]
      updatedPets.forEach(pet => {
        if (pet.id === petId) {
          pet.isAdopted = true
        }
      })
      return updatedPets
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
              <Filters onChangeType={this.onChangeType}
                       onFindPetsClick={this.fetchPets} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets}
                          onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
