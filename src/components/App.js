import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {

    state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
 

  onChangeType = (e) => {
    e.persist();
    // console.log(e.target.value)
    // console.log("hit change type")
   this.setState({
      filters: {
        type: e.target.value

   }})
  //  console.log(this.state.filter.type)
  }

  onFindPetsClick = (e) => {
    let endURL = ""
    if (this.state.filters.type === "all") { endURL = ""}
    else if (this.state.filters.type === "micropig") { endURL = "?type=micropig"}
    else if (this.state.filters.type === "cat") { endURL = "?type=cat"}
    else { endURL = "?type=dog"}
    console.log(`/api/pets${endURL}`)
    console.log(this.state.filters.type)

    fetch(`/api/pets${endURL}`)
    .then(response => response.json())
    // .then(dogdata => console.log(dogdata))
    .then(petData => this.setState(petData))

  }

  onAdoptPet = petId => {
    const pets = this.state.pets.map(p => {
      return p.id === petId ? { ...p, isAdopted: true } : p;
    });
    this.setState({ pets });
  };

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType = {this.onChangeType} onFindPetsClick = {this.onFindPetsClick} />
              </div>
            <div className="twelve wide column">
              <PetBrowser pets = {this.state.pets} onAdoptPet= {this.onAdoptPet}/>
            </div>
            
          </div>
        </div>
      </div>
    )
  }
}

export default App
