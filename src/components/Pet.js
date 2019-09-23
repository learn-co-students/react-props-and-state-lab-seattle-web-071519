import React from 'react'

class Pet extends React.Component {


  petGender = () =>{
   return this.props.pet.gender === "male"? '♂' : '♀'
  }

  adoptPet = () =>{
    return this.props.onAdoptPet(this.props.pet)
  }

  renderButton = () => {
    return this.props.pet.isAdopted? <button className="ui disabled button">Already adopted</button> : <button onClick={this.adoptPet} className="ui primary button">Adopt pet</button>
  }

  render() {
    const {age,name,weight,type} = this.props.pet
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */this.petGender()}
            {name}
          </a>
          <div className="meta">
            <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.renderButton()}
        </div>
      </div>
    )
  }
}

export default Pet
