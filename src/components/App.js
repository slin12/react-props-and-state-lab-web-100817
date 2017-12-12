import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };

    this.handleChangeType = this.handleChangeType.bind(this)
    this.findPetsClick = this.findPetsClick.bind(this)
    this.adoptPet = this.adoptPet.bind(this)
  }

  handleChangeType(value) {
    this.setState({
      filters: {
        type: value
      }
    })
  }

  findPetsClick() {
    if(this.state.filters.type === 'all') {
      fetch('/api/pets')
        .then(res => res.json())
        .then(foundPets => {
          this.setState({
            pets: foundPets
          })
        })
    } else {
      fetch(`/api/pets?type=${this.state.filters.type}`)
        .then(res => res.json())
        .then(foundPets => {
          this.setState({
            pets: foundPets
          })
        })
    }
  }

  adoptPet(id) {
    this.setState(prevState => ({adoptedPets: [...prevState.adoptedPets, id]}))
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
              <Filters filters={this.state.filters} onChangeType={this.handleChangeType} onFindPetsClick={this.findPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser adoptedPets={this.state.adoptedPets} pets={this.state.pets} onAdoptPet={this.adoptPet}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
