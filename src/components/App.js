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

    this.applyFilter('all')
  }

  applyFilter = (filter) => {
    fetch(`/api/pets${filter === 'all'? '' : `?type=${filter}`}`)
    .then(response => response.json())
    .then(json => {
      this.setState({pets: json})
      console.log(this.state)
    })
  }

  handleAdoption = (id) => {
    console.log('handle adoption of ', id)
    const pets = this.state.pets.map((pet) => {
      if(pet.id == id){
        console.log(pet.name, ' is adopted!')
        pet.isAdopted = true
      }
      return pet
    })
    // const pets = this.state.pets.map(pet => {
    //   return pet.id === id ? {...pet, isAdopted: true} : pet
    // })
    this.setState({pets})
      


  }

  render() {
    console.log('Render')
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.applyFilter}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} handleAdoption={this.handleAdoption}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
