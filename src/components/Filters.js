import React from 'react'


class Filters extends React.Component {
  
  onChangeType = event => {
    this.setState({type: event.target.value})
  }

  onFindPets = event => {
    let type = event.target.value
    this.props.onChangeType(this.state.type)
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" onChange={this.onChangeType}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.onFindPets}>Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
