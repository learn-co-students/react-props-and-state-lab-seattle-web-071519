import React from 'react'

class Pet extends React.Component {


  adoptButton = () => {
    if (this.props.pet.isAdopted){
      return <button className='ui disabled button' >Already Adopted</button>
      } else {
        return <button className='ui primary button' onClick={() => this.props.onAdoptPet(this.props.pet.id)} >Adopt Pet</button>
      }
  }
  
  render() {
    const currentPet = this.props.pet
    let { name, type, age, weight, gender } = currentPet

    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {gender === 'female' ? '♀ ' : '♂ '}
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
          {this.adoptButton()}
        </div>
      </div>
    )
  }
}

export default Pet
